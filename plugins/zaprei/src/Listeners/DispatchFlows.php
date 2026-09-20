<?php

namespace Plugins\Zaprei\Listeners;

use Illuminate\Support\Facades\Log;
use Plugins\Zaprei\Jobs\RunFlowJob;
use Plugins\Zaprei\Models\Flow;
use Plugins\Zaprei\Services\ConnectionRepository;
use Plugins\Zaprei\Services\EventContextFactory;

/**
 * Ponte entre os eventos do core e os fluxos do ZapRei.
 *
 * Um único listener atende todos os eventos declarados em plugin.json: o
 * gatilho de cada fluxo é a própria classe do evento.
 */
final class DispatchFlows
{
    public function __construct(
        private readonly EventContextFactory $contexts,
        private readonly ConnectionRepository $connections,
    ) {}

    public function handle(object $event): void
    {
        $context = $this->contexts->from($event);
        if ($context === null) {
            Log::info('ZapRei: evento ignorado — sem pedido/assinatura/sessão associada ao evento.', [
                'event' => $event::class,
            ]);

            return;
        }

        $tenantId = (int) ($context['tenant_id'] ?? 0);
        if ($tenantId < 1) {
            Log::info('ZapRei: evento ignorado — tenant_id inválido no contexto.', ['event' => $event::class]);

            return;
        }

        if (! $this->connections->isReady($tenantId)) {
            Log::info('ZapRei: evento ignorado — conexão Evolution GO inativa ou incompleta para este tenant.', [
                'event' => $event::class,
                'tenant_id' => $tenantId,
            ]);

            return;
        }

        $productId = $context['product_id'] ?? null;

        $flows = Flow::forTenant($tenantId)
            ->where('trigger_event', $event::class)
            ->where('is_active', true)
            ->forProduct(is_string($productId) && $productId !== '' ? $productId : null)
            ->get();

        if ($flows->isEmpty()) {
            Log::info('ZapRei: nenhum fluxo ativo casou com este evento.', [
                'event' => $event::class,
                'tenant_id' => $tenantId,
                'product_id' => $productId,
            ]);

            return;
        }

        foreach ($flows as $flow) {
            Log::info('ZapRei: disparando fluxo para o evento.', [
                'event' => $event::class,
                'tenant_id' => $tenantId,
                'flow_id' => $flow->id,
                'flow_name' => $flow->name,
            ]);
            RunFlowJob::dispatch($tenantId, (int) $flow->id, $context);
        }
    }
}
