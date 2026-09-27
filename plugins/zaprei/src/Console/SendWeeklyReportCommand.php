<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Dispara os relatórios semanais de vendas (segunda a domingo) configurados no ZapRei via WhatsApp.
 */
final class SendWeeklyReportCommand extends Command
{
    protected $signature = 'zaprei:send-weekly-report {--tenant= : ID específico do tenant para forçar envio}';

    protected $description = 'Dispara relatórios semanais de vendas (segunda a domingo) configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;
            $this->info("ZapRei: Enviando relatório semanal para o tenant #{$tenantId}...");

            try {
                $result = $service->sendWeeklyReport($tenantId, null, false);
                $this->info("ZapRei: Relatório semanal enviado para {$result['recipient']}.");

                return self::SUCCESS;
            } catch (\Throwable $e) {
                $this->error("ZapRei: Erro ao enviar relatório semanal: {$e->getMessage()}");

                return self::FAILURE;
            }
        }

        $sent = $service->checkAndSendDueWeeklyReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) semanal(is) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
