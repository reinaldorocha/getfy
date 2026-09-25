<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Plugins\Zaprei\Jobs\RunFlowJob;
use Plugins\Zaprei\Models\Flow;
use Plugins\Zaprei\Models\FlowRun;
use Plugins\Zaprei\Services\ConnectionRepository;
use Plugins\Zaprei\Support\PhoneNumber;
use Plugins\Zaprei\Support\ReplyMatcher;

/**
 * Recebe mensagens do cliente via webhook da Evolution GO (produto whatsmeow)
 * e resume execuções paradas num bloco "Aguardar resposta".
 *
 * Rota pública (sem sessão/CSRF — ver plugin.json `public_routes` e a exceção
 * de CSRF em bootstrap/app.php para `webhooks/inbound/*`), autenticada por um
 * segredo próprio do ZapRei embutido na URL (tenant + webhook_secret), gerado
 * exclusivamente para a Evolution GO.
 *
 * Formato do payload conforme https://docs.evolutionfoundation.com.br/evolution-go/webhooks:
 * { "event": "Message", "data": { "Info": {...}, "Message": {...} } }
 */
final class InboundWebhookController
{
    public function __construct(private readonly ConnectionRepository $connections) {}

    public function handle(Request $request, int $tenant, string $secret): JsonResponse
    {
        $expected = $this->connections->get($tenant)->credentials->webhookSecret;
        if ($expected === '' || ! hash_equals($expected, $secret)) {
            Log::warning('ZapRei Inbound Webhook: tentativa não autorizada (secret inválido ou tenant não configurado).', [
                'tenant_id' => $tenant,
            ]);

            return response()->json(['ok' => false], 404);
        }

        $payload = (array) ($request->json()->all() ?: $request->all());
        $rawEvent = (string) ($payload['event'] ?? $payload['type'] ?? '');

        Log::info('ZapRei Inbound Webhook (Evolution GO): payload recebido.', [
            'tenant_id' => $tenant,
            'event' => $rawEvent,
            'remote_ip' => $request->ip(),
        ]);

        $eventLower = strtolower(trim($rawEvent));

        // Teste de webhook enviado pela interface da Evolution GO
        if ($eventLower === 'webhook.test' || str_contains($eventLower, 'test')) {
            Log::info('ZapRei Inbound Webhook (Evolution GO): teste de conexão recebido com sucesso.', [
                'tenant_id' => $tenant,
                'event' => $rawEvent,
            ]);

            return response()->json(['ok' => true, 'message' => 'Evolution GO webhook test received successfully']);
        }

        // A Evolution GO envia o evento "Message" para mensagens recebidas do WhatsApp
        if ($eventLower !== 'message') {
            Log::info('ZapRei Inbound Webhook (Evolution GO): evento ignorado (não é Message).', [
                'tenant_id' => $tenant,
                'event' => $rawEvent,
            ]);

            return response()->json(['ok' => true]);
        }

        $info = (array) ($payload['data']['Info'] ?? []);
        if (($info['IsFromMe'] ?? false) === true || ($info['IsGroup'] ?? false) === true) {
            Log::debug('ZapRei Inbound Webhook (Evolution GO): mensagem própria (fromMe) ou de grupo ignorada.', [
                'tenant_id' => $tenant,
            ]);

            return response()->json(['ok' => true]);
        }

        // "Chat" é o JID puro (5511999998888@s.whatsapp.net); "Sender" tem sufixo multi-device (5511999998888:38@...)
        $chat = (string) ($info['Chat'] ?? $info['Sender'] ?? '');
        if (str_contains($chat, '@g.us')) {
            return response()->json(['ok' => true]);
        }

        $rawPhone = explode('@', $chat)[0];
        $rawPhone = explode(':', $rawPhone)[0];
        $phone = PhoneNumber::normalize($rawPhone);

        $text = $this->extractReplyText((array) ($payload['data']['Message'] ?? []));

        if ($phone === null || $text === '') {
            Log::info('ZapRei Inbound Webhook (Evolution GO): mensagem sem telefone normalizável ou sem texto reconhecido.', [
                'tenant_id' => $tenant,
                'phone' => $phone,
            ]);

            return response()->json(['ok' => true]);
        }

        $resumed = $this->resumeWaitingRun($tenant, $phone, $text);

        return response()->json(['ok' => true, 'resumed' => $resumed]);
    }

    /**
     * Extrai o texto da resposta de qualquer tipo de mensagem enviada pela Evolution GO
     * (texto digitado, resposta de botões ou seleção de lista).
     *
     * @param  array<string, mixed>  $message
     */
    private function extractReplyText(array $message): string
    {
        // 1. Mensagem de texto simples
        if (isset($message['conversation']) && is_string($message['conversation']) && trim($message['conversation']) !== '') {
            return trim($message['conversation']);
        }

        // 2. Mensagem de texto estendida
        if (isset($message['extendedTextMessage']['text']) && is_string($message['extendedTextMessage']['text']) && trim($message['extendedTextMessage']['text']) !== '') {
            return trim($message['extendedTextMessage']['text']);
        }

        // 3. Resposta de botões rápidos (Evolution GO / whatsmeow)
        if (isset($message['buttonsResponseMessage'])) {
            $btn = (array) $message['buttonsResponseMessage'];
            $text = $btn['selectedDisplayText'] ?? $btn['selectedButtonId'] ?? null;
            if (is_string($text) && trim($text) !== '') {
                return trim($text);
            }
        }

        // 4. Template button reply
        if (isset($message['templateButtonReplyMessage'])) {
            $tpl = (array) $message['templateButtonReplyMessage'];
            $text = $tpl['selectedDisplayText'] ?? $tpl['selectedId'] ?? null;
            if (is_string($text) && trim($text) !== '') {
                return trim($text);
            }
        }

        // 5. Seleção em lista
        if (isset($message['listResponseMessage'])) {
            $list = (array) $message['listResponseMessage'];
            $text = $list['title'] ?? ($list['singleSelectReply']['selectedRowId'] ?? null) ?? ($list['description'] ?? null);
            if (is_string($text) && trim($text) !== '') {
                return trim($text);
            }
        }

        // 6. Mensagens interativas (Evolution GO native flow)
        if (isset($message['interactiveResponseMessage'])) {
            $interactive = (array) $message['interactiveResponseMessage'];
            $body = $interactive['body']['text'] ?? null;
            if (is_string($body) && trim($body) !== '') {
                return trim($body);
            }

            $nativeFlow = (array) ($interactive['nativeFlowResponseMessage'] ?? []);
            if (isset($nativeFlow['paramsJson']) && is_string($nativeFlow['paramsJson'])) {
                $decoded = json_decode($nativeFlow['paramsJson'], true);
                if (is_array($decoded)) {
                    $candidate = $decoded['id'] ?? $decoded['title'] ?? null;
                    if (is_string($candidate) && trim($candidate) !== '') {
                        return trim($candidate);
                    }
                }
            }
        }

        // 7. Legendas em mídias
        $captionCandidates = [
            $message['imageMessage']['caption'] ?? null,
            $message['videoMessage']['caption'] ?? null,
            $message['documentMessage']['caption'] ?? null,
            $message['documentWithCaptionMessage']['message']['documentMessage']['caption'] ?? null,
        ];

        foreach ($captionCandidates as $caption) {
            if (is_string($caption) && trim($caption) !== '') {
                return trim($caption);
            }
        }

        return '';
    }

    private function resumeWaitingRun(int $tenantId, string $phone, string $text): bool
    {
        $candidates = PhoneNumber::candidates($phone);

        Log::info('ZapRei Inbound Webhook (Evolution GO): buscando execução em espera.', [
            'tenant_id' => $tenantId,
            'phone' => $phone,
            'candidates' => $candidates,
            'reply_preview' => mb_substr($text, 0, 100),
        ]);

        $run = FlowRun::forTenant($tenantId)
            ->where('status', FlowRun::STATUS_WAITING)
            ->whereNotNull('reply_node_id')
            ->where(function ($query) use ($candidates) {
                foreach ($candidates as $cand) {
                    $query->orWhere('context->phone', $cand);
                    if (str_starts_with($cand, '55')) {
                        $query->orWhere('context->phone', substr($cand, 2));
                    }
                }
            })
            ->orderByDesc('id')
            ->first();

        // Fallback em memória nas execuções em espera se o JSON query do banco divergir
        if ($run === null) {
            $waitingRuns = FlowRun::forTenant($tenantId)
                ->where('status', FlowRun::STATUS_WAITING)
                ->whereNotNull('reply_node_id')
                ->orderByDesc('id')
                ->limit(50)
                ->get();

            foreach ($waitingRuns as $candidateRun) {
                $runPhone = (string) ($candidateRun->context['phone'] ?? '');
                $runDigits = preg_replace('/\D+/', '', $runPhone);
                if ($runDigits === '') {
                    continue;
                }

                foreach ($candidates as $cand) {
                    if ($runDigits === $cand || (strlen($runDigits) >= 8 && str_ends_with($cand, substr($runDigits, -8)))) {
                        $run = $candidateRun;
                        Log::info('ZapRei Inbound Webhook (Evolution GO): execução encontrada via fallback de dígitos.', [
                            'run_id' => $run->id,
                            'run_phone' => $runPhone,
                            'webhook_phone' => $phone,
                        ]);
                        break 2;
                    }
                }
            }
        }

        if ($run === null) {
            $activeWaitingTotal = FlowRun::forTenant($tenantId)
                ->where('status', FlowRun::STATUS_WAITING)
                ->whereNotNull('reply_node_id')
                ->count();

            Log::warning('ZapRei Inbound Webhook (Evolution GO): nenhuma execução em espera encontrada para o telefone.', [
                'tenant_id' => $tenantId,
                'phone' => $phone,
                'candidates' => $candidates,
                'active_waiting_runs_total' => $activeWaitingTotal,
            ]);

            return false;
        }

        // Validação se o bloco "Aguardar resposta" possui filtro configurado
        $nodeData = (array) ($run->context['waiting_node_data'] ?? []);
        if (! empty($nodeData['filter_reply']) && ! empty($nodeData['match_text'])) {
            $mode = (string) ($nodeData['match_mode'] ?? 'contains');
            $matchText = (string) ($nodeData['match_text'] ?? '');
            $caseSensitive = (bool) ($nodeData['case_sensitive'] ?? false);
            $ignoreAccents = (bool) ($nodeData['ignore_accents'] ?? true);

            if (! ReplyMatcher::matches($text, $matchText, $mode, $caseSensitive, $ignoreAccents)) {
                Log::info('ZapRei Inbound Webhook (Evolution GO): resposta não atende ao filtro do bloco Aguardar resposta. Execução permanece aguardando.', [
                    'tenant_id' => $tenantId,
                    'run_id' => $run->id,
                    'reply_text' => $text,
                    'expected' => $matchText,
                    'mode' => $mode,
                ]);

                return false;
            }
        }

        // Mesmo update atômico condicionado ao status usado em FlowEngine::resumeDue()
        $claimed = FlowRun::query()
            ->whereKey($run->id)
            ->where('status', FlowRun::STATUS_WAITING)
            ->update(['status' => FlowRun::STATUS_RUNNING]);

        if ($claimed === 0) {
            Log::warning('ZapRei Inbound Webhook (Evolution GO): execução já foi retomada concorrentemente.', [
                'run_id' => $run->id,
            ]);

            return false;
        }

        $flow = Flow::forTenant($tenantId)->find($run->flow_id);
        if ($flow === null || ! $flow->is_active) {
            $run->update([
                'status' => FlowRun::STATUS_FAILED,
                'last_error' => 'Fluxo removido ou pausado antes da resposta do cliente.',
            ]);

            Log::warning('ZapRei Inbound Webhook (Evolution GO): fluxo inexistente ou inativo ao retomar.', [
                'tenant_id' => $tenantId,
                'flow_id' => $run->flow_id,
                'run_id' => $run->id,
            ]);

            return false;
        }

        $context = (array) $run->context;
        $context['last_reply'] = $text;

        $run->update([
            'context' => $context,
        ]);

        Log::info('ZapRei Inbound Webhook (Evolution GO): resposta recebida com sucesso, retomando fluxo!', [
            'tenant_id' => $tenantId,
            'flow_id' => $flow->id,
            'run_id' => $run->id,
            'reply_node_id' => $run->reply_node_id,
            'reply_preview' => mb_substr($text, 0, 100),
        ]);

        RunFlowJob::dispatch($tenantId, (int) $flow->id, $context, (int) $run->id, (string) $run->reply_node_id);

        return true;
    }
}
