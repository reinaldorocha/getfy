<?php

namespace Plugins\Zaprei\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Plugins\Zaprei\Models\Flow;
use Plugins\Zaprei\Services\FlowEngine;

/**
 * Executa (ou retoma, após um bloco de espera) um fluxo do ZapRei.
 */
final class RunFlowJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Sem retry automático: uma nova tentativa reiniciaria o fluxo do gatilho e
     * reenviaria mensagens de blocos que já tinham sido entregues antes da falha
     * (o motor não retoma de onde parou, exceto após um bloco de espera). Uma
     * falha fica visível em Execuções/last_error para reprocessamento manual.
     */
    public int $tries = 1;

    /**
     * @param  array<string, mixed>  $context
     */
    public function __construct(
        public readonly int $tenantId,
        public readonly int $flowId,
        public readonly array $context,
        public readonly ?int $runId = null,
        public readonly ?string $startNodeId = null,
    ) {}

    public function handle(FlowEngine $engine): void
    {
        $flow = Flow::forTenant($this->tenantId)->find($this->flowId);
        if ($flow === null) {
            Log::warning('ZapRei: job de fluxo ignorado — fluxo não encontrado (excluído após o disparo?).', [
                'tenant_id' => $this->tenantId,
                'flow_id' => $this->flowId,
            ]);

            return;
        }
        if (! $flow->is_active) {
            Log::info('ZapRei: job de fluxo ignorado — fluxo foi pausado após o disparo.', [
                'tenant_id' => $this->tenantId,
                'flow_id' => $this->flowId,
            ]);

            return;
        }

        $engine->run($flow, $this->context, $this->runId, $this->startNodeId);
    }
}
