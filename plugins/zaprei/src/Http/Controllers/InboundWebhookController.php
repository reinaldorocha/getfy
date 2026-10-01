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

/**
 * Recebe mensagens do cliente via webhook da Evolution (Evolution GO ou Evolution API v1/v2)
 * e resume execuções paradas num bloco "Aguardar resposta".
 *
 * Rota pública (sem sessão/CSRF — ver plugin.json `public_routes` e a exceção
 * de CSRF em bootstrap/app.php para `webhooks/inbound/*`), autenticada por um
 * segredo próprio do ZapRei embutido na URL (tenant + webhook_secret), não
 * pela Evolution — ver EvolutionGoCredentials::$webhookSecret.
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

        Log::info('ZapRei Inbound Webhook: payload recebido.', [
            'tenant_id' => $tenant,
            'event' => $rawEvent,
            'remote_ip' => $request->ip(),
        ]);

        $eventLower = strtolower(str_replace(['_', '-'], '.', trim($rawEvent)));

        // Teste de webhook enviado pela interface da Evolution
        if ($eventLower === 'webhook.test' || str_contains($eventLower, 'test')) {
            Log::info('ZapRei Inbound Webhook: teste de conexão recebido com sucesso.', [
                'tenant_id' => $tenant,
                'event' => $rawEvent,
            ]);

            return response()->json(['ok' => true, 'message' => 'Webhook test received successfully']);
        }

        // Reconhecer eventos de mensagem de entrada (Evolution GO: Message | Evolution API: messages.upsert / MESSAGES_UPSERT)
        $isMessageEvent = in_array($eventLower, [
            'message',
            'messages',
            'messages.upsert',
            'message.upsert',
            'messages.set',
        ], true) || (str_contains($eventLower, 'message') && str_contains($eventLower, 'upsert'));

        if (! $isMessageEvent) {
            Log::info('ZapRei Inbound Webhook: evento ignorado (não é mensagem de cliente).', [
                'tenant_id' => $tenant,
                'event' => $rawEvent,
            ]);

            return response()->json(['ok' => true]);
        }

        $items = $this->extractItems($payload);
        $resumedCount = 0;

        foreach ($items as $item) {
            if (! is_array($item)) {
                continue;
            }

            // Ignorar mensagens enviadas pela própria instância (fromMe)
            $fromMe = ($item['Info']['IsFromMe'] ?? null) === true
                || ($item['key']['fromMe'] ?? null) === true
                || ($item['fromMe'] ?? null) === true;

            if ($fromMe) {
                Log::debug('ZapRei Inbound Webhook: mensagem enviada pelo próprio número (fromMe=true), ignorada.', [
                    'tenant_id' => $tenant,
                ]);
                continue;
            }

            // JID / Chat do remetente
            $jid = (string) (
                $item['Info']['Chat']
                ?? $item['key']['remoteJid']
                ?? $item['remoteJid']
                ?? $item['chat']
                ?? $item['from']
                ?? $item['Info']['Sender']
                ?? ''
            );

            // Ignorar mensagens de grupos (@g.us)
            $isGroup = ($item['Info']['IsGroup'] ?? null) === true
                || ($item['isGroup'] ?? null) === true
                || str_contains($jid, '@g.us');

            if ($isGroup) {
                Log::debug('ZapRei Inbound Webhook: mensagem de grupo ignorada.', [
                    'tenant_id' => $tenant,
                    'jid' => $jid,
                ]);
                continue;
            }

            // Extrair o telefone do JID (removendo sufixo multi-device como :38@...)
            $rawPhone = explode('@', $jid)[0];
            $rawPhone = explode(':', $rawPhone)[0];
            $phone = PhoneNumber::normalize($rawPhone);

            if ($phone === null) {
                Log::warning('ZapRei Inbound Webhook: JID não contém número de telefone válido.', [
                    'tenant_id' => $tenant,
                    'jid' => $jid,
                ]);
                continue;
            }

            // Extrair mensagem
            $messageObj = (array) (
                $item['Message']
                ?? $item['message']
                ?? $item['data']['message']
                ?? []
            );
            if (empty($messageObj) && isset($item['conversation'])) {
                $messageObj = $item;
            }

            $text = $this->extractReplyText($messageObj);
            if ($text === '') {
                Log::info('ZapRei Inbound Webhook: mensagem sem texto ou resposta interativa reconhecida.', [
                    'tenant_id' => $tenant,
                    'phone' => $phone,
                ]);
                continue;
            }

            if ($this->resumeWaitingRun($tenant, $phone, $text)) {
                $resumedCount++;
            }
        }

        return response()->json(['ok' => true, 'resumed' => $resumedCount]);
    }

    /**
     * Normaliza as variações de payload da Evolution GO e Evolution API (Node v1/v2).
     *
     * @param  array<string, mixed>  $payload
     * @return list<array<string, mixed>>
     */
    private function extractItems(array $payload): array
    {
        $data = $payload['data'] ?? null;

        if (is_array($data)) {
            if (isset($data['messages']) && is_array($data['messages'])) {
                return array_values($data['messages']);
            }
            if (array_is_list($data) && count($data) > 0 && is_array($data[0])) {
                return $data;
            }

            return [$data];
        }

        if (isset($payload['messages']) && is_array($payload['messages'])) {
            return array_values($payload['messages']);
        }

        if (isset($payload['key']) && is_array($payload['key'])) {
            return [$payload];
        }

        return [];
    }

    /**
     * Extrai o texto da resposta de qualquer tipo de mensagem — texto digitado
     * ou clique em botão/lista de uma mensagem que o próprio ZapRei mandou.
     * Compatível com Evolution GO (whatsmeow) e Evolution API Node v1/v2 (Baileys).
     *
     * @param  array<string, mixed>  $message
     */
    private function extractReplyText(array $message): string
    {
        // 1. Mensagem de texto simples
        if (isset($message['conversation']) && is_string($message['conversation']) && trim($message['conversation']) !== '') {
            return trim($message['conversation']);
        }

        // 2. Mensagem de texto estendida (respostas citadas, formatação)
        if (isset($message['extendedTextMessage']['text']) && is_string($message['extendedTextMessage']['text']) && trim($message['extendedTextMessage']['text']) !== '') {
            return trim($message['extendedTextMessage']['text']);
        }

        // 3. Resposta de botões rápidos (Evolution GO / whatsmeow / Baileys)
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

        // 5. Resposta de lista interativa (List message)
        if (isset($message['listResponseMessage'])) {
            $list = (array) $message['listResponseMessage'];
            $text = $list['title'] ?? ($list['singleSelectReply']['selectedRowId'] ?? null) ?? ($list['description'] ?? null);
            if (is_string($text) && trim($text) !== '') {
                return trim($text);
            }
        }

        // 6. Mensagens interativas modernas (Interactive Response / Native Flow)
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

        // 7. Legendas em mídias (foto, vídeo ou documento com texto)
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

        Log::info('ZapRei Inbound Webhook: buscando execução em espera.', [
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

        // Fallback: se a consulta JSON direta não casar por diferença de formato nos dígitos,
        // busca nas execuções em espera do tenant pelo sufixo do número
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
                        Log::info('ZapRei Inbound Webhook: execução em espera encontrada via fallback de dígitos.', [
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

            Log::warning('ZapRei Inbound Webhook: nenhuma execução em espera encontrada para o telefone.', [
                'tenant_id' => $tenantId,
                'phone' => $phone,
                'candidates' => $candidates,
                'active_waiting_runs_total' => $activeWaitingTotal,
            ]);

            return false;
        }

        // Mesmo update atômico condicionado ao status usado em
        // FlowEngine::resumeDue() — evita resumir a mesma execução duas vezes
        // se uma resposta chegar bem na hora do timeout.
        $claimed = FlowRun::query()
            ->whereKey($run->id)
            ->where('status', FlowRun::STATUS_WAITING)
            ->update(['status' => FlowRun::STATUS_RUNNING]);

        if ($claimed === 0) {
            Log::warning('ZapRei Inbound Webhook: execução já foi retomada concorrentemente.', [
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

            Log::warning('ZapRei Inbound Webhook: fluxo inexistente ou inativo ao retomar.', [
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

        Log::info('ZapRei Inbound Webhook: resposta do cliente recebida, retomando fluxo com sucesso!', [
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
