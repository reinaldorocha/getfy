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
 * Recebe mensagens do cliente via webhook da Evolution GO (evolution-go,
 * produto whatsmeow) e resume execuções paradas num bloco "Aguardar resposta".
 *
 * Rota pública (sem sessão/CSRF — ver plugin.json `public_routes` e a exceção
 * de CSRF em bootstrap/app.php para `webhooks/inbound/*`), autenticada por um
 * segredo próprio do ZapRei embutido na URL (tenant + webhook_secret), não
 * pela Evolution GO — ver EvolutionGoCredentials::$webhookSecret.
 *
 * Formato do payload conforme
 * https://docs.evolutionfoundation.com.br/evolution-go/webhooks:
 * { "event": "Message", "data": { "Info": {...}, "Message": {...} } }.
 */
final class InboundWebhookController
{
    public function __construct(private readonly ConnectionRepository $connections) {}

    public function handle(Request $request, int $tenant, string $secret): JsonResponse
    {
        $expected = $this->connections->get($tenant)->credentials->webhookSecret;
        if ($expected === '' || ! hash_equals($expected, $secret)) {
            return response()->json(['ok' => false], 404);
        }

        $payload = (array) $request->json()->all();
        if (($payload['event'] ?? '') !== 'Message') {
            // Outros eventos (conexão, chamada, grupo, confirmação de leitura,
            // mensagens enviadas por nós mesmos): reconhece e ignora.
            return response()->json(['ok' => true]);
        }

        $info = (array) ($payload['data']['Info'] ?? []);
        if (($info['IsFromMe'] ?? false) === true || ($info['IsGroup'] ?? false) === true) {
            return response()->json(['ok' => true]);
        }

        // "Chat" é o JID puro (5511999998888@s.whatsapp.net); "Sender" tem um
        // sufixo de dispositivo multi-device (5511999998888:38@...) que
        // quebraria a normalização se usado direto.
        $phone = PhoneNumber::normalize(explode('@', (string) ($info['Chat'] ?? ''))[0]);
        $text = $this->extractReplyText((array) ($payload['data']['Message'] ?? []));
        if ($phone === null || $text === '') {
            return response()->json(['ok' => true]);
        }

        $this->resumeWaitingRun($tenant, $phone, $text);

        return response()->json(['ok' => true]);
    }

    /**
     * Extrai o texto da resposta de qualquer tipo de mensagem — texto digitado
     * ou clique em botão/lista de uma mensagem que o próprio ZapRei mandou.
     *
     * A doc oficial só confirma o formato de texto puro (`conversation`); os
     * campos de botão/lista abaixo seguem a convenção do protocolo do
     * WhatsApp usada por bibliotecas baseadas em whatsmeow (mesma base da
     * Evolution GO) — não confirmados 1:1 contra esta API. Se algum nome
     * estiver errado, o pior caso é o mesmo de hoje: a resposta é ignorada e
     * a execução segue esperando até o timeout, sem quebrar nada.
     *
     * @param  array<string, mixed>  $message
     */
    private function extractReplyText(array $message): string
    {
        $candidates = [
            $message['conversation'] ?? null,
            $message['extendedTextMessage']['text'] ?? null,
            // Clique em botão de resposta rápida (bloco "Botões", type=reply).
            $message['buttonsResponseMessage']['selectedDisplayText'] ?? null,
            $message['buttonsResponseMessage']['selectedButtonId'] ?? null,
            // Seleção numa mensagem de lista.
            $message['listResponseMessage']['title'] ?? null,
            $message['listResponseMessage']['singleSelectReply']['selectedRowId'] ?? null,
            $message['templateButtonReplyMessage']['selectedDisplayText'] ?? null,
        ];

        foreach ($candidates as $candidate) {
            if (is_string($candidate) && trim($candidate) !== '') {
                return trim($candidate);
            }
        }

        return '';
    }

    private function resumeWaitingRun(int $tenantId, string $phone, string $text): void
    {
        $run = FlowRun::forTenant($tenantId)
            ->where('status', FlowRun::STATUS_WAITING)
            ->whereNotNull('reply_node_id')
            ->where('context->phone', $phone)
            ->orderByDesc('id')
            ->first();

        if ($run === null) {
            return;
        }

        // Mesmo update atômico condicionado ao status usado em
        // FlowEngine::resumeDue() — evita resumir a mesma execução duas vezes
        // se uma resposta chegar bem na hora do timeout.
        $claimed = FlowRun::query()
            ->whereKey($run->id)
            ->where('status', FlowRun::STATUS_WAITING)
            ->update(['status' => FlowRun::STATUS_RUNNING]);
        if ($claimed === 0) {
            return;
        }

        $flow = Flow::forTenant($tenantId)->find($run->flow_id);
        if ($flow === null || ! $flow->is_active) {
            $run->update([
                'status' => FlowRun::STATUS_FAILED,
                'last_error' => 'Fluxo removido ou pausado antes da resposta do cliente.',
            ]);

            return;
        }

        $context = (array) $run->context;
        $context['last_reply'] = $text;

        Log::info('ZapRei: resposta do cliente recebida, retomando fluxo.', [
            'tenant_id' => $tenantId,
            'flow_id' => $flow->id,
            'run_id' => $run->id,
        ]);

        RunFlowJob::dispatch($tenantId, (int) $flow->id, $context, (int) $run->id, (string) $run->reply_node_id);
    }
}
