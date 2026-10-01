<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Dispara os relatórios anuais de vendas configurados no ZapRei via WhatsApp.
 * Permite também forçar reenvio por ano específico.
 */
final class SendYearlyReportCommand extends Command
{
    protected $signature = 'zaprei:send-yearly-report 
                            {--tenant= : ID específico do tenant para forçar envio}
                            {--year= : Ano específico (YYYY, ano_anterior, last_year)}
                            {--destination= : Telefone ou JID de grupo de destino (opcional)}';

    protected $description = 'Dispara ou reenvia relatórios anuais de vendas configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');
        $yearOption = $this->option('year');
        $destination = $this->option('destination');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;
            $refDate = $service->parseReferenceDate($yearOption, 'yearly');

            $this->info("ZapRei: Enviando relatório anual ({$refDate->format('Y')}) para o tenant #{$tenantId}...");

            try {
                $result = $service->sendYearlyReport($tenantId, $destination, false, $refDate);
                $this->info("ZapRei: Relatório anual enviado com sucesso para {$result['recipient']}.");

                return self::SUCCESS;
            } catch (\Throwable $e) {
                $this->error("ZapRei: Erro ao enviar relatório anual: {$e->getMessage()}");

                return self::FAILURE;
            }
        }

        $sent = $service->checkAndSendDueYearlyReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) anual(is) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
