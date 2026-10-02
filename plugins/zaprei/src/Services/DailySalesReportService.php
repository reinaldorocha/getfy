<?php

namespace Plugins\Zaprei\Services;

use App\Models\Order;
use App\PluginSdk\Getfy;
use App\Services\NetAmountCalculator;
use App\Support\ReportingPeriod;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
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
     * Retorna as configurações do relatório mensal do tenant.
     *
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_month: string|null}
     */
    public function getMonthlyConfig(int $tenantId): array
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $tenantConfig = (array) ($all['monthly_reports'][(string) $tenantId] ?? []);
        $phone = (string) ($tenantConfig['phone'] ?? '');
        $groupId = (string) ($tenantConfig['group_id'] ?? '');

        // Fallback automático para o destinatário do relatório diário ou semanal se ainda não configurado
        $dailyConfig = (array) ($all['daily_reports'][(string) $tenantId] ?? []);
        $weeklyConfig = (array) ($all['weekly_reports'][(string) $tenantId] ?? []);
        if ($phone === '' && $groupId === '') {
            $phone = (string) ($dailyConfig['phone'] ?? ($weeklyConfig['phone'] ?? ''));
            $groupId = (string) ($dailyConfig['group_id'] ?? ($weeklyConfig['group_id'] ?? ''));
        }

        $recipientType = (string) ($tenantConfig['recipient_type'] ?? ($dailyConfig['recipient_type'] ?? ($weeklyConfig['recipient_type'] ?? 'phone')));
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
            'last_sent_month' => ! empty($tenantConfig['last_sent_month']) ? (string) $tenantConfig['last_sent_month'] : null,
        ];
    }

    /**
     * Salva as configurações do relatório mensal para o tenant.
     *
     * @param  array<string, mixed>  $data
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_month: string|null}
     */
    public function saveMonthlyConfig(int $tenantId, array $data): array
    {
        $current = $this->getMonthlyConfig($tenantId);

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
            'last_sent_month' => $current['last_sent_month'],
        ];

        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $all['monthly_reports'][(string) $tenantId] = $newConfig;
        Getfy::config()->set(Zaprei::SLUG, $all);

        return $newConfig;
    }

    /**
     * Retorna as configurações do relatório anual do tenant.
     *
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_year: string|null}
     */
    public function getYearlyConfig(int $tenantId): array
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $tenantConfig = (array) ($all['yearly_reports'][(string) $tenantId] ?? []);
        $phone = (string) ($tenantConfig['phone'] ?? '');
        $groupId = (string) ($tenantConfig['group_id'] ?? '');

        // Fallback automático para o destinatário do relatório diário ou mensal se ainda não configurado
        $dailyConfig = (array) ($all['daily_reports'][(string) $tenantId] ?? []);
        $monthlyConfig = (array) ($all['monthly_reports'][(string) $tenantId] ?? []);
        if ($phone === '' && $groupId === '') {
            $phone = (string) ($dailyConfig['phone'] ?? ($monthlyConfig['phone'] ?? ''));
            $groupId = (string) ($dailyConfig['group_id'] ?? ($monthlyConfig['group_id'] ?? ''));
        }

        $recipientType = (string) ($tenantConfig['recipient_type'] ?? ($dailyConfig['recipient_type'] ?? ($monthlyConfig['recipient_type'] ?? 'phone')));
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
            'last_sent_year' => ! empty($tenantConfig['last_sent_year']) ? (string) $tenantConfig['last_sent_year'] : null,
        ];
    }

    /**
     * Salva as configurações do relatório anual para o tenant.
     *
     * @param  array<string, mixed>  $data
     * @return array{enabled: bool, time: string, recipient_type: string, phone: string, group_id: string, custom_template: string|null, last_sent_year: string|null}
     */
    public function saveYearlyConfig(int $tenantId, array $data): array
    {
        $current = $this->getYearlyConfig($tenantId);

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
            'last_sent_year' => $current['last_sent_year'],
        ];

        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $all['yearly_reports'][(string) $tenantId] = $newConfig;
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
     * Coleta as métricas consolidadas de vendas do mês (1º ao último dia) para o tenant.
     *
     * @return array<string, mixed>
     */
    public function generateMonthlyData(int $tenantId, ?Carbon $referenceDate = null): array
    {
        $now = $referenceDate ?? ReportingPeriod::now();
        $start = $now->copy()->startOfMonth()->startOfDay();
        $end = $now->copy()->endOfMonth()->endOfDay();

        return $this->generateDataForPeriod($tenantId, $start, $end, 'monthly', $now);
    }

    /**
     * Coleta as métricas consolidadas de vendas do ano (1º de janeiro a 31 de dezembro) para o tenant.
     *
     * @return array<string, mixed>
     */
    public function generateYearlyData(int $tenantId, ?Carbon $referenceDate = null): array
    {
        $now = $referenceDate ?? ReportingPeriod::now();
        $start = $now->copy()->startOfYear()->startOfDay();
        $end = $now->copy()->endOfYear()->endOfDay();

        return $this->generateDataForPeriod($tenantId, $start, $end, 'yearly', $now);
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
        $totalProductsCount = 0;
        $totalProductsAmount = 0.0;

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
                        $totalProductsCount++;
                        $totalProductsAmount += $itemAmount;
                    }
                }
            } else {
                $pName = $order->product?->name ?? 'Produto Principal';
                $productCounts[$pName] ??= ['count' => 0, 'total' => 0.0];
                $productCounts[$pName]['count']++;
                $productCounts[$pName]['total'] += $orderAmount;
                $totalProductsCount++;
                $totalProductsAmount += $orderAmount;
            }
        }

        $completedCount = $completedOrders->count();
        $ticketMedio = $completedCount > 0 ? $totalCompleted / $completedCount : 0.0;
        $ticketMedioLiquido = $completedCount > 0 ? $totalNetCompleted / $completedCount : 0.0;

        $totalPending = (float) $pendingOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $pendingCount = $pendingOrders->count();

        $totalRefunded = (float) $refundedOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $refundedCount = $refundedOrders->count();

        $adSpend = 0.0;
        try {
            $utmUrl = rtrim((string) (config('services.utm_track.url') ?: env('UTM_TRACK_URL', '')), '/');
            $utmToken = (string) (config('services.utm_track.token') ?: env('UTM_TRACK_TOKEN', ''));
            if (! empty($utmUrl) && ! empty($utmToken)) {
                $response = Http::timeout(3)
                    ->withHeaders([
                        'X-API-KEY' => $utmToken,
                        'Accept' => 'application/json',
                    ])
                    ->get("{$utmUrl}/api/reports/ad-spend", [
                        'start' => $start->format('Y-m-d'),
                        'end' => $end->format('Y-m-d'),
                    ]);
                if ($response->successful()) {
                    $adSpend = (float) ($response->json('ad_spend') ?? 0.0);
                }
            }
        } catch (Throwable $e) {
            Log::warning('[ZapRei] Falha ao consultar ad_spend no utm-track: '.$e->getMessage());
        }

        $lucroReal = $totalNetCompleted - $adSpend;
        $roas = $adSpend > 0 ? round($totalCompleted / $adSpend, 2) : 0.0;
        $cpa = $completedCount > 0 && $adSpend > 0 ? round($adSpend / $completedCount, 2) : 0.0;


        $emptyPeriodLabel = match ($type) {
            'weekly' => 'na semana',
            'monthly' => 'no mês',
            default => 'hoje',
        };

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

        // Linhas formatadas por produto com total
        $productLines = [];
        foreach ($productCounts as $name => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $productLines[] = "• {$name}: {$vendasLabel} ({$formatted})";
        }
        if (! empty($productLines)) {
            $prodTotalFormatted = self::money($totalProductsAmount);
            $prodVendasLabel = $totalProductsCount === 1 ? '1 venda' : "{$totalProductsCount} vendas";
            $productLines[] = "👉 *Total Produtos Principais:* {$prodVendasLabel} ({$prodTotalFormatted})";
            $productText = implode("\n", $productLines);
        } else {
            $productText = "• Nenhum produto faturado {$emptyPeriodLabel}";
        }

        // Linhas formatadas de order bumps com total
        $bumpLines = [];
        foreach ($bumpCounts as $name => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $bumpLines[] = "• {$name}: {$vendasLabel} ({$formatted})";
        }
        if (! empty($bumpLines)) {
            $bumpsTotalFormatted = self::money($totalBumpsAmount);
            $bumpsVendasLabel = $totalBumpsCount === 1 ? '1 venda' : "{$totalBumpsCount} vendas";
            $bumpLinesWithTotal = $bumpLines;
            $bumpLinesWithTotal[] = "👉 *Total Order Bumps:* {$bumpsVendasLabel} ({$bumpsTotalFormatted})";
            $bumpsText = implode("\n", $bumpLinesWithTotal);
            $bumpsSection = "\n➕ *Order Bumps Vendidos:*\n".$bumpsText."\n";
        } else {
            $bumpsText = '';
            $bumpsSection = '';
        }

        $meses = [
            1 => 'Janeiro', 2 => 'Fevereiro', 3 => 'Março', 4 => 'Abril',
            5 => 'Maio', 6 => 'Junho', 7 => 'Julho', 8 => 'Agosto',
            9 => 'Setembro', 10 => 'Outubro', 11 => 'Novembro', 12 => 'Dezembro',
        ];
        $nomeMes = $meses[(int) $now->format('n')] ?? $now->format('F');

        $isToday = $now->isToday();
        $isYesterday = $now->isYesterday();
        $daySuffix = $isToday ? ' (Hoje)' : ($isYesterday ? ' (Ontem)' : '');

        $dateLabel = match ($type) {
            'weekly' => "{$start->format('d/m/Y')} a {$end->format('d/m/Y')}",
            'monthly' => "{$start->format('d/m/Y')} a {$end->format('d/m/Y')}",
            'yearly' => "{$start->format('d/m/Y')} a {$end->format('d/m/Y')}",
            default => $now->format('d/m/Y'),
        };

        $periodLabel = match ($type) {
            'weekly' => "{$start->format('d/m/Y')} a {$end->format('d/m/Y')} (Segunda a Domingo)",
            'monthly' => "{$start->format('d/m/Y')} a {$end->format('d/m/Y')} ({$nomeMes}/{$now->format('Y')})",
            'yearly' => "Ano {$now->format('Y')} ({$start->format('d/m/Y')} a {$end->format('d/m/Y')})",
            default => "{$now->format('d/m/Y')}{$daySuffix}",
        };

        $refDate = match ($type) {
            'weekly' => $end->format('o-W'), // Ex: 2026-W39
            'monthly' => $now->format('Y-m'), // Ex: 2026-09
            'yearly' => $now->format('Y'),    // Ex: 2026
            default => $now->format('Y-m-d'),
        };

        return [
            'type' => $type,
            'date' => $dateLabel,
            'period' => $periodLabel,
            'day_suffix' => $daySuffix,
            'is_today' => $isToday,
            'is_yesterday' => $isYesterday,
            'month_name' => $nomeMes,
            'year' => $now->format('Y'),
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
            'ad_spend' => $adSpend,
            'ad_spend_formatted' => self::money($adSpend),
            'lucro_real' => $lucroReal,
            'lucro_real_formatted' => self::money($lucroReal),
            'roas' => $roas,
            'cpa' => $cpa,
            'cpa_formatted' => self::money($cpa),
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
            'products_count' => $totalProductsCount,
            'products_total' => $totalProductsAmount,
            'products_total_formatted' => self::money($totalProductsAmount),
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

        $diaLabel = $data['date'].($data['day_suffix'] ?? '');
        $adSection = $this->formatAdSection($data);

        return "📊 *RELATÓRIO DIÁRIO DE VENDAS* 🚀\n"
            ."📅 *Data:* {$diaLabel}\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            .$adSection
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

        $adSection = $this->formatAdSection($data);

        return "📊 *RELATÓRIO SEMANAL DE VENDAS* 🚀\n"
            ."📅 *Período:* {$data['date']} (Segunda a Domingo)\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            .$adSection
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
     * Renderiza o texto final do relatório mensal (padrão ou personalizado).
     */
    public function renderMonthlyMessage(array $data, ?string $customTemplate = null): string
    {
        if ($customTemplate !== null && trim($customTemplate) !== '') {
            return $this->templates->render($customTemplate, ['report' => $data, ...$data]);
        }

        $mesAno = ! empty($data['month_name']) ? "({$data['month_name']}/{$data['year']})" : '';
        $adSection = $this->formatAdSection($data);

        return "📊 *RELATÓRIO MENSAL DE VENDAS* 🚀\n"
            ."📅 *Período:* {$data['date']} {$mesAno}\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            .$adSection
            ."✅ *Vendas Aprovadas:* {$data['orders_count']}\n"
            ."💳 *Ticket Médio:* {$data['ticket_medio_formatted']}\n"
            ."⏳ *Vendas Pendentes:* {$data['pending_total_formatted']} ({$data['pending_count']} pedidos)\n"
            ."🔄 *Reembolsos:* {$data['refunded_count']} ({$data['refunded_total_formatted']})\n\n"
            ."💳 *Formas de Pagamento:*\n{$data['payment_methods_text']}\n\n"
            ."📦 *Produtos Vendidos:*\n{$data['products_text']}\n"
            ."{$data['bumps_section']}\n"
            .'_Relatório mensal automático ZapRei / Getfy._';
    }

    /**
     * Renderiza o texto final do relatório anual (padrão ou personalizado).
     */
    public function renderYearlyMessage(array $data, ?string $customTemplate = null): string
    {
        if ($customTemplate !== null && trim($customTemplate) !== '') {
            return $this->templates->render($customTemplate, ['report' => $data, ...$data]);
        }

        $adSection = $this->formatAdSection($data);

        return "📊 *RELATÓRIO ANUAL DE VENDAS* 🚀\n"
            ."📅 *Período:* {$data['date']} ({$data['year']})\n\n"
            ."💰 *Faturamento Total:* {$data['total_formatted']}\n"
            ."💵 *Valor Líquido:* {$data['net_total_formatted']}\n"
            .$adSection
            ."✅ *Vendas Aprovadas:* {$data['orders_count']}\n"
            ."💳 *Ticket Médio:* {$data['ticket_medio_formatted']}\n"
            ."⏳ *Vendas Pendentes:* {$data['pending_total_formatted']} ({$data['pending_count']} pedidos)\n"
            ."🔄 *Reembolsos:* {$data['refunded_count']} ({$data['refunded_total_formatted']})\n\n"
            ."💳 *Formas de Pagamento:*\n{$data['payment_methods_text']}\n\n"
            ."📦 *Produtos Vendidos:*\n{$data['products_text']}\n"
            ."{$data['bumps_section']}\n"
            .'_Relatório anual automático ZapRei / Getfy._';
    }

    /**
     * Formata o bloco de inteligência de tráfego pago (Meta Ads) caso haja investimento no período.
     */
    private function formatAdSection(array $data): string
    {
        if (! empty($data['ad_spend']) && (float) $data['ad_spend'] > 0) {
            return "🎯 *Investimento Meta Ads:* {$data['ad_spend_formatted']}\n"
                ."───────────────────────\n"
                ."🟢 *LUCRO LÍQUIDO REAL:* {$data['lucro_real_formatted']}\n"
                ."📈 *ROAS Real:* {$data['roas']}x\n"
                ."🎯 *CPA Médio:* {$data['cpa_formatted']} / venda\n"
                ."───────────────────────\n";
        }

        return '';
    }

    /**
     * Envia o relatório de vendas diário via WhatsApp (para número individual ou grupo).
     *
     * @throws ZapreiException
     */
    public function sendReport(
        int $tenantId,
        ?string $destination = null,
        bool $isTest = false,
        ?Carbon $referenceDate = null,
        ?string $recipientTypeOverride = null
    ): array {
        $config = $this->getConfig($tenantId);
        $recipientType = $recipientTypeOverride ?? (string) ($config['recipient_type'] ?? 'phone');

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

        $data = $this->generateData($tenantId, $referenceDate);
        $message = $this->renderMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        $now = ReportingPeriod::now();
        if (! $isTest && ($referenceDate === null || $referenceDate->format('Y-m-d') === $now->format('Y-m-d'))) {
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
    public function sendWeeklyReport(
        int $tenantId,
        ?string $destination = null,
        bool $isTest = false,
        ?Carbon $referenceDate = null,
        ?string $recipientTypeOverride = null
    ): array {
        $config = $this->getWeeklyConfig($tenantId);
        $recipientType = $recipientTypeOverride ?? (string) ($config['recipient_type'] ?? 'phone');

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

        $data = $this->generateWeeklyData($tenantId, $referenceDate);
        $message = $this->renderWeeklyMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        $now = ReportingPeriod::now();
        if (! $isTest && ($referenceDate === null || $referenceDate->format('o-W') === $now->format('o-W'))) {
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
     * Envia o relatório de vendas mensal via WhatsApp (para número individual ou grupo).
     *
     * @throws ZapreiException
     */
    public function sendMonthlyReport(
        int $tenantId,
        ?string $destination = null,
        bool $isTest = false,
        ?Carbon $referenceDate = null,
        ?string $recipientTypeOverride = null
    ): array {
        $config = $this->getMonthlyConfig($tenantId);
        $recipientType = $recipientTypeOverride ?? (string) ($config['recipient_type'] ?? 'phone');

        if ($destination === null || trim($destination) === '') {
            $destinationRaw = $recipientType === 'group' ? $config['group_id'] : $config['phone'];
        } else {
            $destinationRaw = trim($destination);
        }

        $isGroup = $recipientType === 'group' || str_contains($destinationRaw, '@g.us');

        if ($isGroup) {
            $recipient = $destinationRaw;
            if ($recipient === '') {
                throw new ZapreiException('Informe ou selecione um grupo de WhatsApp válido para receber o relatório mensal.');
            }
        } else {
            $recipient = PhoneNumber::normalize($destinationRaw);
            if ($recipient === null) {
                throw new ZapreiException('Informe um número de WhatsApp válido para receber o relatório mensal.');
            }
        }

        $data = $this->generateMonthlyData($tenantId, $referenceDate);
        $message = $this->renderMonthlyMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        $now = ReportingPeriod::now();
        if (! $isTest && ($referenceDate === null || $referenceDate->format('Y-m') === $now->format('Y-m'))) {
            $all = Getfy::config()->get(Zaprei::SLUG, []);
            $all['monthly_reports'][(string) $tenantId]['last_sent_month'] = $data['reference_date'];
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
     * Envia o relatório de vendas anual via WhatsApp (para número individual ou grupo).
     *
     * @throws ZapreiException
     */
    public function sendYearlyReport(
        int $tenantId,
        ?string $destination = null,
        bool $isTest = false,
        ?Carbon $referenceDate = null,
        ?string $recipientTypeOverride = null
    ): array {
        $config = $this->getYearlyConfig($tenantId);
        $recipientType = $recipientTypeOverride ?? (string) ($config['recipient_type'] ?? 'phone');

        if ($destination === null || trim($destination) === '') {
            $destinationRaw = $recipientType === 'group' ? $config['group_id'] : $config['phone'];
        } else {
            $destinationRaw = trim($destination);
        }

        $isGroup = $recipientType === 'group' || str_contains($destinationRaw, '@g.us');

        if ($isGroup) {
            $recipient = $destinationRaw;
            if ($recipient === '') {
                throw new ZapreiException('Informe ou selecione um grupo de WhatsApp válido para receber o relatório anual.');
            }
        } else {
            $recipient = PhoneNumber::normalize($destinationRaw);
            if ($recipient === null) {
                throw new ZapreiException('Informe um número de WhatsApp válido para receber o relatório anual.');
            }
        }

        $data = $this->generateYearlyData($tenantId, $referenceDate);
        $message = $this->renderYearlyMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($recipient, $message);

        $now = ReportingPeriod::now();
        if (! $isTest && ($referenceDate === null || $referenceDate->format('Y') === $now->format('Y'))) {
            $all = Getfy::config()->get(Zaprei::SLUG, []);
            $all['yearly_reports'][(string) $tenantId]['last_sent_year'] = $data['reference_date'];
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
     * Interpreta uma data informada como string (YYYY-MM-DD, YYYY-MM, YYYY, palavras-chave etc.).
     */
    public function parseReferenceDate(?string $input, string $type = 'daily'): Carbon
    {
        $timezone = ReportingPeriod::timezone();
        $now = ReportingPeriod::now();

        if (empty($input)) {
            return $now;
        }

        $trimmed = trim(strtolower($input));

        if (in_array($trimmed, ['today', 'hoje', 'now'], true)) {
            return $now;
        }
        if (in_array($trimmed, ['yesterday', 'ontem'], true)) {
            return $now->copy()->subDay();
        }
        if (in_array($trimmed, ['before_yesterday', 'anteontem'], true)) {
            return $now->copy()->subDays(2);
        }
        if (in_array($trimmed, ['last_week', 'semana_passada', 'semana_anterior'], true)) {
            return $now->copy()->subWeek();
        }
        if (in_array($trimmed, ['this_week', 'esta_semana'], true)) {
            return $now->copy();
        }
        if (in_array($trimmed, ['last_month', 'mes_anterior', 'mes_passado'], true)) {
            return $now->copy()->subMonthNoOverflow();
        }
        if (in_array($trimmed, ['this_month', 'mes_atual'], true)) {
            return $now->copy();
        }
        if (in_array($trimmed, ['last_year', 'ano_anterior', 'ano_passado'], true)) {
            return $now->copy()->subYear();
        }
        if (in_array($trimmed, ['this_year', 'ano_atual'], true)) {
            return $now->copy();
        }

        // Verifica formato YYYY-MM (ex: 2026-09)
        if (preg_match('/^\d{4}-\d{2}$/', $trimmed)) {
            try {
                return Carbon::createFromFormat('Y-m', $trimmed, $timezone)->startOfMonth();
            } catch (Throwable) {
                // segue para fallback
            }
        }

        // Verifica formato YYYY (ex: 2026)
        if (preg_match('/^\d{4}$/', $trimmed)) {
            try {
                return Carbon::createFromFormat('Y', $trimmed, $timezone)->startOfYear();
            } catch (Throwable) {
                // segue para fallback
            }
        }

        // Verifica formato YYYY-MM-DD
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $trimmed)) {
            try {
                return Carbon::createFromFormat('Y-m-d', $trimmed, $timezone);
            } catch (Throwable) {
                // segue para fallback
            }
        }

        // Verifica formato DD/MM/YYYY
        if (preg_match('/^\d{2}\/\d{2}\/\d{4}$/', $trimmed)) {
            try {
                return Carbon::createFromFormat('d/m/Y', $trimmed, $timezone);
            } catch (Throwable) {
                // segue para fallback
            }
        }

        // Verifica formato MM/YYYY
        if (preg_match('/^\d{2}\/\d{4}$/', $trimmed)) {
            try {
                return Carbon::createFromFormat('m/Y', $trimmed, $timezone)->startOfMonth();
            } catch (Throwable) {
                // segue para fallback
            }
        }

        try {
            return Carbon::parse($trimmed, $timezone);
        } catch (Throwable) {
            return $now;
        }
    }

    /**
     * Gera prévia e métricas de um relatório para uma data/período escolhido.
     *
     * @return array{type: string, date: string, reference_date: string, data: array<string, mixed>, preview: string}
     */
    public function previewReport(int $tenantId, string $type = 'daily', ?string $date = null): array
    {
        $parsedDate = $this->parseReferenceDate($date, $type);

        switch ($type) {
            case 'monthly':
                $config = $this->getMonthlyConfig($tenantId);
                $data = $this->generateMonthlyData($tenantId, $parsedDate);
                $preview = $this->renderMonthlyMessage($data, $config['custom_template']);
                break;

            case 'yearly':
                $config = $this->getYearlyConfig($tenantId);
                $data = $this->generateYearlyData($tenantId, $parsedDate);
                $preview = $this->renderYearlyMessage($data, $config['custom_template']);
                break;

            case 'weekly':
                $config = $this->getWeeklyConfig($tenantId);
                $data = $this->generateWeeklyData($tenantId, $parsedDate);
                $preview = $this->renderWeeklyMessage($data, $config['custom_template']);
                break;

            default:
                $config = $this->getConfig($tenantId);
                $data = $this->generateData($tenantId, $parsedDate);
                $preview = $this->renderMessage($data, $config['custom_template']);
                break;
        }

        return [
            'type' => $type,
            'date' => $data['date'],
            'reference_date' => $data['reference_date'],
            'data' => $data,
            'preview' => $preview,
        ];
    }

    /**
     * Reenvia um relatório específico (diário, semanal, mensal ou anual) para uma data/período escolhido.
     *
     * @throws ZapreiException
     */
    public function resendReport(
        int $tenantId,
        string $type = 'daily',
        ?string $date = null,
        ?string $destination = null,
        ?string $recipientType = null
    ): array {
        $parsedDate = $this->parseReferenceDate($date, $type);

        return match ($type) {
            'monthly' => $this->sendMonthlyReport($tenantId, $destination, false, $parsedDate, $recipientType),
            'yearly' => $this->sendYearlyReport($tenantId, $destination, false, $parsedDate, $recipientType),
            'weekly' => $this->sendWeeklyReport($tenantId, $destination, false, $parsedDate, $recipientType),
            default => $this->sendReport($tenantId, $destination, false, $parsedDate, $recipientType),
        };
    }

    /**
     * Executado pelo comando de cron para verificar e despachar relatórios vencidos (diários, semanais e mensais).
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueReports(): int
    {
        $dailySent = $this->checkAndSendDueDailyReports();
        $weeklySent = $this->checkAndSendDueWeeklyReports();
        $monthlySent = $this->checkAndSendDueMonthlyReports();
        $yearlySent = $this->checkAndSendDueYearlyReports();

        return $dailySent + $weeklySent + $monthlySent + $yearlySent;
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

    /**
     * Verifica e envia relatórios mensais pendentes (executado no último dia do mês).
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueMonthlyReports(): int
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $monthlyReports = (array) ($all['monthly_reports'] ?? []);

        if (empty($monthlyReports)) {
            return 0;
        }

        $now = ReportingPeriod::now();
        // Disparo exclusivo no último dia do mês
        $isLastDayOfMonth = $now->format('Y-m-d') === $now->copy()->endOfMonth()->format('Y-m-d');
        if (! $isLastDayOfMonth) {
            return 0;
        }

        $currentTime = $now->format('H:i');
        $currentMonthId = $now->format('Y-m');
        $sentCount = 0;

        foreach ($monthlyReports as $tenantIdStr => $tenantConfig) {
            $tenantId = (int) $tenantIdStr;
            if ($tenantId < 1 || empty($tenantConfig['enabled'])) {
                continue;
            }

            $targetTime = (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME);
            $lastSent = (string) ($tenantConfig['last_sent_month'] ?? '');

            // Só dispara no último dia do mês a partir do horário configurado e se ainda não foi enviado neste mês
            if ($currentTime >= $targetTime && $lastSent !== $currentMonthId) {
                try {
                    $recipientType = (string) ($tenantConfig['recipient_type'] ?? 'phone');
                    $destination = $recipientType === 'group'
                        ? (string) ($tenantConfig['group_id'] ?? '')
                        : (string) ($tenantConfig['phone'] ?? '');

                    $this->sendMonthlyReport($tenantId, $destination, false);
                    $sentCount++;
                    Log::info("ZapRei: Relatório mensal enviado com sucesso para o tenant #{$tenantId}.");
                } catch (Throwable $e) {
                    Log::warning("ZapRei: Falha ao enviar relatório mensal para o tenant #{$tenantId}.", [
                        'error' => $e->getMessage(),
                    ]);
                }
            }
        }

        return $sentCount;
    }

    /**
     * Verifica e envia relatórios anuais pendentes (executado no último dia do ano, 31 de dezembro).
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueYearlyReports(): int
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $yearlyReports = (array) ($all['yearly_reports'] ?? []);

        if (empty($yearlyReports)) {
            return 0;
        }

        $now = ReportingPeriod::now();
        // Disparo exclusivo no último dia do ano
        $isLastDayOfYear = $now->format('m-d') === '12-31';
        if (! $isLastDayOfYear) {
            return 0;
        }

        $currentTime = $now->format('H:i');
        $currentYearId = $now->format('Y');
        $sentCount = 0;

        foreach ($yearlyReports as $tenantIdStr => $tenantConfig) {
            $tenantId = (int) $tenantIdStr;
            if ($tenantId < 1 || empty($tenantConfig['enabled'])) {
                continue;
            }

            $targetTime = (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME);
            $lastSent = (string) ($tenantConfig['last_sent_year'] ?? '');

            // Só dispara no último dia do ano a partir do horário configurado e se ainda não foi enviado neste ano
            if ($currentTime >= $targetTime && $lastSent !== $currentYearId) {
                try {
                    $recipientType = (string) ($tenantConfig['recipient_type'] ?? 'phone');
                    $destination = $recipientType === 'group'
                        ? (string) ($tenantConfig['group_id'] ?? '')
                        : (string) ($tenantConfig['phone'] ?? '');

                    $this->sendYearlyReport($tenantId, $destination, false);
                    $sentCount++;
                    Log::info("ZapRei: Relatório anual enviado com sucesso para o tenant #{$tenantId}.");
                } catch (Throwable $e) {
                    Log::warning("ZapRei: Falha ao enviar relatório anual para o tenant #{$tenantId}.", [
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
