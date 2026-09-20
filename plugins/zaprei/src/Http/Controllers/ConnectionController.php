<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Services\ConnectionRepository;
use Plugins\Zaprei\Services\ConnectionState;
use Plugins\Zaprei\Services\GatewayFactory;

/**
 * Conexão Evolution GO do tenant.
 */
final class ConnectionController extends Controller
{
    public function __construct(
        private readonly ConnectionRepository $connections,
        private readonly GatewayFactory $gateways,
    ) {}

    public function show(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);
        $state = $this->connections->get($tenantId);

        return response()->json([
            'connection' => $state->toArray() + ['webhook_url' => $this->webhookUrl($tenantId, $state)],
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $data = $request->validate([
            'base_url' => ['required', 'url', 'max:255'],
            'instance' => ['required', 'string', 'max:120'],
            // Em branco = mantém a chave já salva.
            'api_key' => ['nullable', 'string', 'max:255'],
            'is_active' => ['boolean'],
        ]);

        $tenantId = $this->tenantId($request);
        $state = $this->connections->merge(
            $tenantId,
            [
                'base_url' => $data['base_url'],
                'instance' => $data['instance'],
                'api_key' => (string) ($data['api_key'] ?? ''),
            ],
            (bool) ($data['is_active'] ?? true),
        );

        return response()->json(['connection' => $state->toArray() + ['webhook_url' => $this->webhookUrl($tenantId, $state)]]);
    }

    /**
     * URL que recebe as mensagens do cliente (Evolution GO -> ZapRei), usada
     * pelo bloco "Aguardar resposta". Sem segredo, sem URL: precisa salvar a
     * conexão pelo menos uma vez para gerá-lo.
     */
    private function webhookUrl(int $tenantId, ConnectionState $state): ?string
    {
        $secret = $state->credentials->webhookSecret;

        return $secret === '' ? null : url("/webhooks/inbound/zaprei/{$tenantId}/{$secret}");
    }

    public function test(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        try {
            $this->gateways->forVerification($tenantId)->verify();
        } catch (ZapreiException $e) {
            return response()->json(['ok' => false, 'message' => $e->getMessage()], 422);
        }

        return response()->json(['ok' => true, 'message' => 'Instância conectada ao WhatsApp.']);
    }
}
