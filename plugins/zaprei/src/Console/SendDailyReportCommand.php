<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Verifica e dispara os relatórios de vendas (diários, semanais, mensais e anuais) configurados no ZapRei via WhatsApp.
 * Permite também forçar reenvio por data, mês ou ano em caso de instabilidade na API do WhatsApp.
 * Registrado em plugin.json e no agendador do Laravel.
 */
final class SendDailyReportCommand extends Command
{
    protected $signature = 'zaprei:send-daily-report 
                            {--tenant= : ID específico do tenant para forçar envio} 
                            {--type= : Tipo de relatório: daily, weekly, monthly, yearly ou all}
                            {--date= : Data específica (YYYY-MM-DD, ontem, yesterday, hoje, etc.)}
                            {--month= : Mês específico (YYYY-MM, mes_anterior, etc.)}
                            {--year= : Ano específico (YYYY, ano_anterior, etc.)}
                            {--destination= : Telefone ou JID de grupo de destino (opcional)}';

    protected $description = 'Dispara ou reenvia relatórios de vendas (diários, semanais, mensais e anuais) no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');
        $type = strtolower((string) ($this->option('type') ?? 'daily'));
        $dateOption = $this->option('date');
        $monthOption = $this->option('month');
        $yearOption = $this->option('year');
        $destination = $this->option('destination');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;

            if ($type === 'yearly') {
                $refDate = $service->parseReferenceDate($yearOption ?? $dateOption, 'yearly');
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

            if ($type === 'monthly') {
                $refDate = $service->parseReferenceDate($monthOption ?? $dateOption, 'monthly');
                $this->info("ZapRei: Enviando relatório mensal ({$refDate->format('m/Y')}) para o tenant #{$tenantId}...");

                try {
                    $result = $service->sendMonthlyReport($tenantId, $destination, false, $refDate);
                    $this->info("ZapRei: Relatório mensal enviado com sucesso para {$result['recipient']}.");

                    return self::SUCCESS;
                } catch (\Throwable $e) {
                    $this->error("ZapRei: Erro ao enviar relatório mensal: {$e->getMessage()}");

                    return self::FAILURE;
                }
            }

            if ($type === 'weekly') {
                $refDate = $service->parseReferenceDate($dateOption, 'weekly');
                $this->info("ZapRei: Enviando relatório semanal para o tenant #{$tenantId}...");

                try {
                    $result = $service->sendWeeklyReport($tenantId, $destination, false, $refDate);
                    $this->info("ZapRei: Relatório semanal enviado com sucesso para {$result['recipient']}.");

                    return self::SUCCESS;
                } catch (\Throwable $e) {
                    $this->error("ZapRei: Erro ao enviar relatório semanal: {$e->getMessage()}");

                    return self::FAILURE;
                }
            }

            $refDate = $service->parseReferenceDate($dateOption, 'daily');
            $this->info("ZapRei: Enviando relatório diário ({$refDate->format('d/m/Y')}) para o tenant #{$tenantId}...");

            try {
                $result = $service->sendReport($tenantId, $destination, false, $refDate);
                $this->info("ZapRei: Relatório diário enviado com sucesso para {$result['recipient']}.");

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
