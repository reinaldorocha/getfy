<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Dispara os relatórios mensais de vendas (1º ao último dia do mês) configurados no ZapRei via WhatsApp.
 */
final class SendMonthlyReportCommand extends Command
{
    protected $signature = 'zaprei:send-monthly-report {--tenant= : ID específico do tenant para forçar envio}';

    protected $description = 'Dispara relatórios mensais de vendas configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;
            $this->info("ZapRei: Enviando relatório mensal para o tenant #{$tenantId}...");

            try {
                $result = $service->sendMonthlyReport($tenantId, null, false);
                $this->info("ZapRei: Relatório mensal enviado para {$result['recipient']}.");

                return self::SUCCESS;
            } catch (\Throwable $e) {
                $this->error("ZapRei: Erro ao enviar relatório mensal: {$e->getMessage()}");

                return self::FAILURE;
            }
        }

        $sent = $service->checkAndSendDueMonthlyReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) mensal(is) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
