<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Verifica e dispara os relatórios diários de vendas configurados no ZapRei via WhatsApp.
 * Registrado em plugin.json e no agendador do Laravel.
 */
final class SendDailyReportCommand extends Command
{
    protected $signature = 'zaprei:send-daily-report {--tenant= : ID específico do tenant para forçar envio}';

    protected $description = 'Dispara relatórios diários de vendas configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;
            $this->info("ZapRei: Enviando relatório diário para o tenant #{$tenantId}...");

            try {
                $result = $service->sendReport($tenantId, null, false);
                $this->info("ZapRei: Relatório enviado para {$result['recipient']}.");

                return self::SUCCESS;
            } catch (\Throwable $e) {
                $this->error("ZapRei: Erro ao enviar relatório: {$e->getMessage()}");

                return self::FAILURE;
            }
        }

        $sent = $service->checkAndSendDueReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) diário(s) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
