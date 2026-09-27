<?php

namespace Plugins\Zaprei\Services;

use App\Models\Order;
use App\PluginSdk\Getfy;
use App\Services\NetAmountCalculator;
use App\Support\ReportingPeriod;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Plugins\Zaprei\Contracts\WhatsappGateway;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Support\OrderReader;
use Plugins\Zaprei\Support\PhoneNumber;
use Plugins\Zaprei\Zaprei;
use Throwable;

final class DailySalesReportService
{
    public const DEFAULT_TIME = '23:59';

    public function __construct(
        private readonly GatewayFactory $gateways,
        private readonly TemplateRenderer $templates,
    ) {}

    /**
     * Retorna as configurações do relatório diário do tenant.
     *
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_date: string|null}
     */
    public function getConfig(int $tenantId): array
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $tenantConfig = (array) ($all['daily_reports'][(string) $tenantId] ?? []);
        $phone = (string) ($tenantConfig['phone'] ?? '');
        $groupId = (string) ($tenantConfig['group_id'] ?? '');

        // Detecção automática se um JID de grupo foi salvo anteriormente no campo phone
        $recipientType = (string) ($tenantConfig['recipient_type'] ?? (str_contains($phone, '@g.us') ? 'group' : 'phone'));
        if ($recipientType === 'group' && $groupId === '' && str_contains($phone, '@g.us')) {
            $groupId = $phone;
        }

        return [
            'enabled' => (bool) ($tenantConfig['enabled'] ?? false),
            'time' => (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME),
            'recipient_type' => $recipientType,
            'phone' => $phone,
            'group_id' => $groupId,
            'custom_template' => ! empty($tenantConfig['custom_template']) ? (string) $tenantConfig['custom_template'] : null,
            'last_sent_date' => ! empty($tenantConfig['last_sent_date']) ? (string) $tenantConfig['last_sent_date'] : null,
        ];
    }

    /**
     * Salva as configurações do relatório diário para o tenant.
     *
     * @param  array<string, mixed>  $data
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_date: string|null}
     */
    public function saveConfig(int $tenantId, array $data): array
    {
        $current = $this->getConfig($tenantId);

        $time = trim((string) ($data['time'] ?? $current['time']));
        if (! preg_match('/^\d{2}:\d{2}$/', $time)) {
            $time = self::DEFAULT_TIME;
        }

        $recipientType = (string) ($data['recipient_type'] ?? $current['recipient_type']);
        if (! in_array($recipientType, ['phone', 'group'], true)) {
            $recipientType = 'phone';
        }

        $phone = trim((string) ($data['phone'] ?? $current['phone']));
        $groupId = trim((string) ($data['group_id'] ?? $current['group_id']));

        $enabled = isset($data['enabled']) ? (bool) $data['enabled'] : $current['enabled'];
        $customTemplate = isset($data['custom_template']) && trim((string) $data['custom_template']) !== ''
            ? trim((string) $data['custom_template'])
            : null;

        $newConfig = [
            'enabled' => $enabled,
            'time' => $time,
            'recipient_type' => $recipientType,
            'phone' => $phone,
            'group_id' => $groupId,
            'custom_template' => $customTemplate,
            'last_sent_date' => $current['last_sent_date'],
        ];

        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $all['daily_reports'][(string) $tenantId] = $newConfig;
        Getfy::config()->set(Zaprei::SLUG, $all);

        return $newConfig;
    }

    /**
     * Retorna as configurações do relatório semanal do tenant.
     *
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_week: string|null}
     */
    public function getWeeklyConfig(int $tenantId): array
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $tenantConfig = (array) ($all['weekly_reports'][(string) $tenantId] ?? []);
        $phone = (string) ($tenantConfig['phone'] ?? '');
        $groupId = (string) ($tenantConfig['group_id'] ?? '');

        // Fallback automático para o destinatário do relatório diário se ainda não configurado
        $dailyConfig = (array) ($all['daily_reports'][(string) $tenantId] ?? []);
        if ($phone === '' && $groupId === '') {
            $phone = (string) ($dailyConfig['phone'] ?? '');
            $groupId = (string) ($dailyConfig['group_id'] ?? '');
        }

        $recipientType = (string) ($tenantConfig['recipient_type'] ?? ($dailyConfig['recipient_type'] ?? (str_contains($phone, '@g.us') ? 'group' : 'phone')));
        if ($recipientType === 'group' && $groupId === '' && str_contains($phone, '@g.us')) {
            $groupId = $phone;
        }

        return [
            'enabled' => (bool) ($tenantConfig['enabled'] ?? false),
            'time' => (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME),
            'recipient_type' => $recipientType,
            'phone' => $phone,
            'group_id' => $groupId,
            'custom_template' => ! empty($tenantConfig['custom_template']) ? (string) $tenantConfig['custom_template'] : null,
            'last_sent_week' => ! empty($tenantConfig['last_sent_week']) ? (string) $tenantConfig['last_sent_week'] : null,
        ];
    }

    /**
     * Salva as configurações do relatório semanal para o tenant.
     *
     * @param  array<string, mixed>  $data
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_week: string|null}
     */
    public function saveWeeklyConfig(int $tenantId, array $data): array
    {
        $current = $this->getWeeklyConfig($tenantId);

        $time = trim((string) ($data['time'] ?? $current['time']));
        if (! preg_match('/^\d{2}:\d{2}$/', $time)) {
            $time = self::DEFAULT_TIME;
        }

        $recipientType = (string) ($data['recipient_type'] ?? $current['recipient_type']);
        if (! in_array($recipientType, ['phone', 'group'], true)) {
            $recipientType = 'phone';
        }

        $phone = trim((string) ($data['phone'] ?? $current['phone']));
        $groupId = trim((string) ($data['group_id'] ?? $current['group_id']));

        $enabled = isset($data['enabled']) ? (bool) $data['enabled'] : $current['enabled'];
        $customTemplate = isset($data['custom_template']) && trim((string) $data['custom_template']) !== ''
            ? trim((string) $data['custom_template'])
            : null;

        $newConfig = [
            'enabled' => $enabled,
            'time' => $time,
            'recipient_type' => $recipientType,
            'phone' => $phone,
            'group_id' => $groupId,
            'custom_template' => $customTemplate,
            'last_sent_week' => $current['last_sent_week'],
        ];

        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $all['weekly_reports'][(string) $tenantId] = $newConfig;
        Getfy::config()->set(Zaprei::SLUG, $all);

        return $newConfig;
    }

    /**
     * Coleta as métricas consolidadas de vendas do dia para o tenant.
     *
     * @return array<string, mixed>
     */
    public function generateData(int $tenantId, ?Carbon $referenceDate = null): array
    {
        $now = $referenceDate ?? ReportingPeriod::now();
        $start = $now->copy()->startOfDay();
        $end = $now->copy()->endOfDay();

        return $this->generateDataForPeriod($tenantId, $start, $end, 'daily', $now);
    }

    /**
     * Coleta as métricas consolidadas de vendas da semana (segunda a domingo) para o tenant.
     *
     * @return array<string, mixed>
     */
    public function generateWeeklyData(int $tenantId, ?Carbon $referenceDate = null): array
    {
        $now = $referenceDate ?? ReportingPeriod::now();
        $start = $now->copy()->startOfWeek(Carbon::MONDAY)->startOfDay();
        $end = $now->copy()->endOfWeek(Carbon::SUNDAY)->endOfDay();

        return $this->generateDataForPeriod($tenantId, $start, $end, 'weekly', $now);
    }

    /**
     * Consolida dados de vendas e calcula valores brutos e líquidos para qualquer período.
     *
     * @return array<string, mixed>
     */
    public function generateDataForPeriod(
        int $tenantId,
        Carbon $start,
        Carbon $end,
        string $type = 'daily',
        ?Carbon $now = null
    ): array {
        $now = $now ?? ReportingPeriod::now();

        $ordersQuery = Order::forTenant($tenantId);
        ReportingPeriod::applyCreatedAtBounds($ordersQuery, $start, $end);

        $completedOrders = (clone $ordersQuery)
            ->where('status', 'completed')
            ->with(['orderItems.product', 'orderItems.productOrderBump', 'product', 'commissionEntries'])
            ->get();

        $pendingOrders = (clone $ordersQuery)
            ->where('status', 'pending')
            ->with('orderItems')
            ->get();

        $refundedOrders = (clone $ordersQuery)
            ->where('status', 'refunded')
            ->with('orderItems')
            ->get();

        $calculator = app(NetAmountCalculator::class);
        $totalCompleted = 0.0;
        $totalNetCompleted = 0.0;
        $productCounts = [];
        $bumpCounts = [];
        $paymentCounts = [];
        $totalBumpsCount = 0;
        $totalBumpsAmount = 0.0;

        foreach ($completedOrders as $order) {
            $orderAmount = (float) $order->lineItemsTotalAmount();
            $totalCompleted += $orderAmount;

            try {
                $breakdown = $calculator->forOrder($order);
                $netAmount = (float) ($breakdown['net'] ?? $orderAmount);
            } catch (Throwable) {
                $netAmount = $orderAmount;
            }
            $totalNetCompleted += $netAmount;

            // Forma de pagamento
            $methodKey = method_exists($order, 'checkoutPaymentMethod') ? $order->checkoutPaymentMethod() : 'pix';
            $methodLabel = OrderReader::paymentMethodLabel($methodKey);

            $paymentCounts[$methodLabel] ??= ['count' => 0, 'total' => 0.0];
            $paymentCounts[$methodLabel]['count']++;
            $paymentCounts[$methodLabel]['total'] += $orderAmount;

            // Produtos e Order Bumps
            $items = $order->orderItems;
            if ($items && $items->isNotEmpty()) {
                foreach ($items as $item) {
                    $isBump = ($item->product_order_bump_id !== null) || ((int) ($item->position ?? 0) > 0);
                    $itemName = trim((string) ($item->product?->name ?? $item->productOrderBump?->title ?? ''));
                    $itemAmount = (float) ($item->amount ?? 0);

                    if ($isBump) {
                        $bName = $itemName !== '' ? $itemName : 'Order Bump';
                        $bumpCounts[$bName] ??= ['count' => 0, 'total' => 0.0];
                        $bumpCounts[$bName]['count']++;
                        $bumpCounts[$bName]['total'] += $itemAmount;
                        $totalBumpsCount++;
                        $totalBumpsAmount += $itemAmount;
                    } else {
                        $pName = $itemName !== '' ? $itemName : ($order->product?->name ?? 'Produto Principal');
                        $productCounts[$pName] ??= ['count' => 0, 'total' => 0.0];
                        $productCounts[$pName]['count']++;
                        $productCounts[$pName]['total'] += $itemAmount;
                    }
                }
            } else {
                $pName = $order->product?->name ?? 'Produto Principal';
                $productCounts[$pName] ??= ['count' => 0, 'total' => 0.0];
                $productCounts[$pName]['count']++;
                $productCounts[$pName]['total'] += $orderAmount;
            }
        }

        $completedCount = $completedOrders->count();
        $ticketMedio = $completedCount > 0 ? $totalCompleted / $completedCount : 0.0;
        $ticketMedioLiquido = $completedCount > 0 ? $totalNetCompleted / $completedCount : 0.0;

        $totalPending = (float) $pendingOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $pendingCount = $pendingOrders->count();

        $totalRefunded = (float) $refundedOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $refundedCount = $refundedOrders->count();

        $emptyPeriodLabel = $type === 'weekly' ? 'na semana' : 'hoje';

        // Linhas formatadas por método de pagamento
        $paymentLines = [];
        foreach ($paymentCounts as $label => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $paymentLines[] = "• *{$label}:* {$vendasLabel} ({$formatted})";
        }
        $paymentText = ! empty($paymentLines)
            ? implode("\n", $paymentLines)
            : "• Nenhuma venda concluída {$emptyPeriodLabel}";

        // Linhas formatadas por produto
        $productLines = [];
        foreach ($productCounts as $name => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $productLines[] = "• {$name}: {$vendasLabel} ({$formatted})";
        }
        $productText = ! empty($productLines)
            ? implode("\n", $productLines)
            : "• Nenhum produto faturado {$emptyPeriodLabel}";

        // Linhas formatadas de order bumps
        $bumpLines = [];
        foreach ($bumpCounts as $name => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $bumpLines[] = "• {$name}: {$vendasLabel} ({$formatted})";
        }
        $bumpsText = ! empty($bumpLines) ? implode("\n", $bumpLines) : '';
        $bumpsSection = ! empty($bumpLines)
            ? "\n➕ *Order Bumps Vendidos:*\n".implode("\n", $bumpLines)."\n"
            : '';

        $dateLabel = $type === 'weekly'
            ? "{$start->format('d/m/Y')} a {$end->format('d/m/Y')}"
            : $now->format('d/m/Y');

        $periodLabel = $type === 'weekly'
            ? "{$start->format('d/m/Y')} a {$end->format('d/m/Y')} (Segunda a Domingo)"
            : "{$now->format('d/m/Y')} (Hoje)";

        $refDate = $type === 'weekly'
            ? $end->format('o-W') // Identificador ISO da semana, ex: 2026-W39
            : $now->format('Y-m-d');

        return [
            'type' => $type,
            'date' => $dateLabel,
            'period' => $periodLabel,
            'reference_date' => $refDate,
            'start_date' => $start->format('d/m/Y'),
            'end_date' => $end->format('d/m/Y'),
            'orders_count' => $completedCount,
            'total' => $totalCompleted,
            'total_formatted' => self::money($totalCompleted),
            'net_total' => $totalNetCompleted,
            'net_total_formatted' => self::money($totalNetCompleted),
            'valor_liquido' => self::money($totalNetCompleted),
            'lucro_liquido' => self::money($totalNetCompleted),
            'ticket_medio' => $ticketMedio,
            'ticket_medio_formatted' => self::money($ticketMedio),
            'ticket_medio_liquido' => $ticketMedioLiquido,
            'ticket_medio_liquido_formatted' => self::money($ticketMedioLiquido),
            'pending_count' => $pendingCount,
            'pending_total' => $totalPending,
            'pending_total_formatted' => self::money($totalPending),
            'refunded_count' => $refundedCount,
            'refunded_total' => $totalRefunded,
            'refunded_total_formatted' => self::money($totalRefunded),
            'payment_methods_text' => $paymentText,
            'products_text' => $productText,
            'bumps_count' => $totalBumpsCount,
            'bumps_total' => $totalBumpsAmount,
            'bumps_total_formatted' => self::money($totalBumpsAmount),
            'bumps_text' => $bumpsText,
            'bumps_section' => $bumpsSection,
        ];
    }

    /**
     * Renderiza o texto final do relatório diário (padrão ou personalizado).
     */
    public function renderMessage(array $data, ?string $customTemplate = null): string
    {
        if ($customTemplate !== null && trim($customTemplate) !== '') {
            return $this->templates->render($customTemplate, ['report' => $data, ...$data]);
        }

        return "📊 *RELATÓRIO DIÁRIO DE VENDAS* 🚀\n"
            ."📅 *Data:* {$data['date']} (Hoje)\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            ."✅ *Vendas Aprovadas:* {$data['orders_count']}\n"
            ."💳 *Ticket Médio:* {$data['ticket_medio_formatted']}\n"
            ."⏳ *Vendas Pendentes:* {$data['pending_total_formatted']} ({$data['pending_count']} pedidos)\n"
            ."🔄 *Reembolsos:* {$data['refunded_count']} ({$data['refunded_total_formatted']})\n\n"
            ."💳 *Formas de Pagamento:*\n{$data['payment_methods_text']}\n\n"
            ."📦 *Produtos Vendidos:*\n{$data['products_text']}\n"
            ."{$data['bumps_section']}\n"
            .'_Relatório automático ZapRei / Getfy._';
    }

    /**
     * Renderiza o texto final do relatório semanal (padrão ou personalizado).
     */
    public function renderWeeklyMessage(array $data, ?string $customTemplate = null): string
    {
        if ($customTemplate !== null && trim($customTemplate) !== '') {
            return $this->templates->render($customTemplate, ['report' => $data, ...$data]);
        }

        return "📊 *RELATÓRIO SEMANAL DE VENDAS* 🚀\n"
            ."📅 *Período:* {$data['date']} (Segunda a Domingo)\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            ."✅ *Vendas Aprovadas:* {$data['orders_count']}\n"
            ."💳 *Ticket Médio:* {$data['ticket_medio_formatted']}\n"
            ."⏳ *Vendas Pendentes:* {$data['pending_total_formatted']} ({$data['pending_count']} pedidos)\n"
            ."🔄 *Reembolsos:* {$data['refunded_count']} ({$data['refunded_total_formatted']})\n\n"
            ."💳 *Formas de Pagamento:*\n{$data['payment_methods_text']}\n\n"
            ."📦 *Produtos Vendidos:*\n{$data['products_text']}\n"
            ."{$data['bumps_section']}\n"
            .'_Relatório semanal automático ZapRei / Getfy._';
    }

    /**
     * Envia o relatório de vendas diário via WhatsApp (para número individual ou grupo).
     *
     * @throws ZapreiException
     */
    public function sendReport(int $tenantId, ?string $destination = null, bool $isTest = false): array
    {
        $config = $this->getConfig($tenantId);
        $recipientType = (string) ($config['recipient_type'] ?? 'phone');

        if ($destination === null || trim($destination) === '') {
            $destinationRaw = $recipientType === 'group' ? $config['group_id'] : $config['phone'];
        } else {
            $destinationRaw = trim($destination);
        }

        $isGroup = $recipientType === 'group' || str_contains($destinationRaw, '@g.us');

        if ($isGroup) {
            $recipient = $destinationRaw;
            if ($recipient === '') {
                throw new ZapreiException('Informe ou selecione um grupo de WhatsApp válido para receber o relatório.');
            }
        } else {
            $recipient = PhoneNumber::normalize($destinationRaw);
            if ($recipient === null) {
                throw new ZapreiException('Informe um número de WhatsApp válido para receber o relatório.');
            }
        }

        $data = $this->generateData($tenantId);
        $message = $this->renderMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        if (! $isTest) {
            $all = Getfy::config()->get(Zaprei::SLUG, []);
            $all['daily_reports'][(string) $tenantId]['last_sent_date'] = $data['reference_date'];
            Getfy::config()->set(Zaprei::SLUG, $all);
        }

        return [
            'success' => true,
            'recipient' => $recipient,
            'is_group' => $isGroup,
            'message' => $message,
            'data' => $data,
        ];
    }

    /**
     * Envia o relatório de vendas semanal via WhatsApp (para número individual ou grupo).
     *
     * @throws ZapreiException
     */
    public function sendWeeklyReport(int $tenantId, ?string $destination = null, bool $isTest = false): array
    {
        $config = $this->getWeeklyConfig($tenantId);
        $recipientType = (string) ($config['recipient_type'] ?? 'phone');

        if ($destination === null || trim($destination) === '') {
            $destinationRaw = $recipientType === 'group' ? $config['group_id'] : $config['phone'];
        } else {
            $destinationRaw = trim($destination);
        }

        $isGroup = $recipientType === 'group' || str_contains($destinationRaw, '@g.us');

        if ($isGroup) {
            $recipient = $destinationRaw;
            if ($recipient === '') {
                throw new ZapreiException('Informe ou selecione um grupo de WhatsApp válido para receber o relatório semanal.');
            }
        } else {
            $recipient = PhoneNumber::normalize($destinationRaw);
            if ($recipient === null) {
                throw new ZapreiException('Informe um número de WhatsApp válido para receber o relatório semanal.');
            }
        }

        $data = $this->generateWeeklyData($tenantId);
        $message = $this->renderWeeklyMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        if (! $isTest) {
            $all = Getfy::config()->get(Zaprei::SLUG, []);
            $all['weekly_reports'][(string) $tenantId]['last_sent_week'] = $data['reference_date'];
            Getfy::config()->set(Zaprei::SLUG, $all);
        }

        return [
            'success' => true,
            'recipient' => $recipient,
            'is_group' => $isGroup,
            'message' => $message,
            'data' => $data,
        ];
    }

    /**
     * Executado pelo comando de cron para verificar e despachar relatórios vencidos (diários e semanais).
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueReports(): int
    {
        $dailySent = $this->checkAndSendDueDailyReports();
        $weeklySent = $this->checkAndSendDueWeeklyReports();

        return $dailySent + $weeklySent;
    }

    /**
     * Verifica e envia relatórios diários pendentes.
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueDailyReports(): int
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $dailyReports = (array) ($all['daily_reports'] ?? []);

        if (empty($dailyReports)) {
            return 0;
        }

        $now = ReportingPeriod::now();
        $currentTime = $now->format('H:i');
        $todayDate = $now->format('Y-m-d');
        $sentCount = 0;

        foreach ($dailyReports as $tenantIdStr => $tenantConfig) {
            $tenantId = (int) $tenantIdStr;
            if ($tenantId < 1 || empty($tenantConfig['enabled'])) {
                continue;
            }

            $targetTime = (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME);
            $lastSent = (string) ($tenantConfig['last_sent_date'] ?? '');

            // Só dispara se o horário configurado já chegou e ainda não foi enviado hoje
            if ($currentTime >= $targetTime && $lastSent !== $todayDate) {
                try {
                    $recipientType = (string) ($tenantConfig['recipient_type'] ?? 'phone');
                    $destination = $recipientType === 'group'
                        ? (string) ($tenantConfig['group_id'] ?? '')
                        : (string) ($tenantConfig['phone'] ?? '');

                    $this->sendReport($tenantId, $destination, false);
                    $sentCount++;
                    Log::info("ZapRei: Relatório diário enviado com sucesso para o tenant #{$tenantId}.");
                } catch (Throwable $e) {
                    Log::warning("ZapRei: Falha ao enviar relatório diário para o tenant #{$tenantId}.", [
                        'error' => $e->getMessage(),
                    ]);
                }
            }
        }

        return $sentCount;
    }

    /**
     * Verifica e envia relatórios semanais pendentes (executado aos domingos).
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueWeeklyReports(): int
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $weeklyReports = (array) ($all['weekly_reports'] ?? []);

        if (empty($weeklyReports)) {
            return 0;
        }

        $now = ReportingPeriod::now();
        // Disparo exclusivo aos domingos
        if (! $now->isSunday()) {
            return 0;
        }

        $currentTime = $now->format('H:i');
        $currentWeekId = $now->format('o-W');
        $sentCount = 0;

        foreach ($weeklyReports as $tenantIdStr => $tenantConfig) {
            $tenantId = (int) $tenantIdStr;
            if ($tenantId < 1 || empty($tenantConfig['enabled'])) {
                continue;
            }

            $targetTime = (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME);
            $lastSent = (string) ($tenantConfig['last_sent_week'] ?? '');

            // Só dispara no domingo a partir do horário configurado e se ainda não foi enviado nesta semana
            if ($currentTime >= $targetTime && $lastSent !== $currentWeekId) {
                try {
                    $recipientType = (string) ($tenantConfig['recipient_type'] ?? 'phone');
                    $destination = $recipientType === 'group'
                        ? (string) ($tenantConfig['group_id'] ?? '')
                        : (string) ($tenantConfig['phone'] ?? '');

                    $this->sendWeeklyReport($tenantId, $destination, false);
                    $sentCount++;
                    Log::info("ZapRei: Relatório semanal enviado com sucesso para o tenant #{$tenantId}.");
                } catch (Throwable $e) {
                    Log::warning("ZapRei: Falha ao enviar relatório semanal para o tenant #{$tenantId}.", [
                        'error' => $e->getMessage(),
                    ]);
                }
            }
        }

        return $sentCount;
    }

    private static function money(float $amount): string
    {
        return 'R$ '.number_format($amount, 2, ',', '.');
    }
}
