<?php

namespace Plugins\Zaprei\Console;

use Illuminate\Console\Command;
use Plugins\Zaprei\Services\DailySalesReportService;

/**
 * Dispara os relatórios semanais de vendas (segunda a domingo) configurados no ZapRei via WhatsApp.
 * Permite também forçar reenvio por data de referência.
 */
final class SendWeeklyReportCommand extends Command
{
    protected $signature = 'zaprei:send-weekly-report 
                            {--tenant= : ID específico do tenant para forçar envio}
                            {--date= : Data de referência da semana (YYYY-MM-DD, ontem, semana_passada)}
                            {--destination= : Telefone ou JID de grupo de destino (opcional)}';

    protected $description = 'Dispara relatórios semanais de vendas configurados no ZapRei para o WhatsApp';

    public function handle(DailySalesReportService $service): int
    {
        $tenantOption = $this->option('tenant');
        $dateOption = $this->option('date');
        $destination = $this->option('destination');

        if ($tenantOption !== null && is_numeric($tenantOption)) {
            $tenantId = (int) $tenantOption;
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

        $sent = $service->checkAndSendDueWeeklyReports();
        if ($sent > 0) {
            $this->info("ZapRei: {$sent} relatório(s) semanal(is) enviado(s) com sucesso.");
        }

        return self::SUCCESS;
    }
}
