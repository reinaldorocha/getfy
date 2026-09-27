<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Verifica e dispara os relatórios de vendas (diários, semanais e mensais) configurados no ZapRei via WhatsApp.
 * Registrado em plugin.json e no agendador do Laravel.
 */
final class SendDailyReportCommand extends Command
{
    protected $signature = 'zaprei:send-daily-report 
                            {--tenant= : ID específico do tenant para forçar envio} 
                            {--type= : Tipo de relatório: daily, weekly, monthly ou all}';

    protected $description = 'Dispara relatórios de vendas (diários, semanais e mensais) configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');
        $type = strtolower((string) ($this->option('type') ?? 'daily'));

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;

            if ($type === 'monthly') {
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

            if ($type === 'weekly') {
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

            $this->info("ZapRei: Enviando relatório diário para o tenant #{$tenantId}...");

            try {
                $result = $service->sendReport($tenantId, null, false);
                $this->info("ZapRei: Relatório diário enviado para {$result['recipient']}.");

                return self::SUCCESS;
            } catch (\Throwable $e) {
                $this->error("ZapRei: Erro ao enviar relatório diário: {$e->getMessage()}");

                return self::FAILURE;
            }
        }

        $sent = $service->checkAndSendDueReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
