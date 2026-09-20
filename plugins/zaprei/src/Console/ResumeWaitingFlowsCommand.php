<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\FlowEngine;

/**
 * Retoma execuções de fluxo paradas em blocos de espera cujo horário já
 * chegou. Registrado em plugin.json (`commands` + `schedule`, a cada minuto).
 *
 * Existe porque QUEUE_CONNECTION=sync (comum em hospedagens sem worker
 * persistente) ignora Queue::later()/->delay() — sem este comando, o bloco
 * "Aguardar" nunca esperaria.
 */
final class ResumeWaitingFlowsCommand extends Command
{
    protected $signature = 'zaprei:resume-flows';

    protected $description = 'Retoma fluxos do ZapRei parados em blocos de espera vencidos';

    public function handle(FlowEngine $engine): int
    {
        $count = $engine->resumeDue();
        if ($count > 0) {
            $this->info("ZapRei: {$count} execução(ões) retomada(s).");
        }

        return self::SUCCESS;
    }
}
