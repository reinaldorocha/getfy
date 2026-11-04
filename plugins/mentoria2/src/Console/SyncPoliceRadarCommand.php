<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Console;

use Illuminate\Console\Command;
use Plugins\Mentoria2\Services\Radar\RadarIngestionService;

final class SyncPoliceRadarCommand extends Command
{
    protected $signature = 'mentoria2:radar:sync {--source= : UUID da fonte} {--dry-run : Consulta e classifica sem gravar}';
    protected $description = 'Sincroniza publicações de fontes auditáveis para o Radar de carreiras policiais.';

    public function handle(RadarIngestionService $service): int
    {
        $result = $service->sync($this->option('source') ?: null, (bool) $this->option('dry-run'));
        $this->table(['Fontes', 'Coletadas', 'Novas', 'Duplicadas', 'Candidatas'], [[
            $result['sources'], $result['fetched'], $result['created'], $result['duplicates'], $result['candidates'],
        ]]);
        foreach ($result['errors'] as $error) $this->error($error);

        return $result['errors'] === [] ? self::SUCCESS : self::FAILURE;
    }
}
