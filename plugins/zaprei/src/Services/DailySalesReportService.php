<?php

namespace Plugins\Zaprei\Services;

use App\Models\Order;
use App\PluginSdk\Getfy;
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
     * @return array{enabled: bool, time: string, phone: string, custom_template: string|null, last_sent_date: string|null}
     */
    public function getConfig(int $tenantId): array
    {
        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $tenantConfig = (array) ($all['daily_reports'][(string) $tenantId] ?? []);

        return [
            'enabled' => (bool) ($tenantConfig['enabled'] ?? false),
            'time' => (string) ($tenantConfig['time'] ?? self::DEFAULT_TIME),
            'phone' => (string) ($tenantConfig['phone'] ?? ''),
            'custom_template' => ! empty($tenantConfig['custom_template']) ? (string) $tenantConfig['custom_template'] : null,
            'last_sent_date' => ! empty($tenantConfig['last_sent_date']) ? (string) $tenantConfig['last_sent_date'] : null,
        ];
    }

    /**
     * Salva as configurações do relatório diário para o tenant.
     *
     * @param  array<string, mixed>  $data
     * @return array{enabled: bool, time: string, phone: string, custom_template: string|null, last_sent_date: string|null}
     */
    public function saveConfig(int $tenantId, array $data): array
    {
        $current = $this->getConfig($tenantId);

        $time = trim((string) ($data['time'] ?? $current['time']));
        if (! preg_match('/^\d{2}:\d{2}$/', $time)) {
            $time = self::DEFAULT_TIME;
        }

        $phone = trim((string) ($data['phone'] ?? $current['phone']));
        $enabled = isset($data['enabled']) ? (bool) $data['enabled'] : $current['enabled'];
        $customTemplate = isset($data['custom_template']) && trim((string) $data['custom_template']) !== ''
            ? trim((string) $data['custom_template'])
            : null;

        $newConfig = [
            'enabled' => $enabled,
            'time' => $time,
            'phone' => $phone,
            'custom_template' => $customTemplate,
            'last_sent_date' => $current['last_sent_date'],
        ];

        $all = Getfy::config()->get(Zaprei::SLUG, []);
        $all['daily_reports'][(string) $tenantId] = $newConfig;
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

        $ordersQuery = Order::forTenant($tenantId);
        ReportingPeriod::applyCreatedAtBounds($ordersQuery, $start, $end);

        $completedOrders = (clone $ordersQuery)
            ->where('status', 'completed')
            ->with(['orderItems.product', 'orderItems.productOrderBump', 'product'])
            ->get();

        $pendingOrders = (clone $ordersQuery)
            ->where('status', 'pending')
            ->with('orderItems')
            ->get();

        $refundedOrders = (clone $ordersQuery)
            ->where('status', 'refunded')
            ->with('orderItems')
            ->get();

        $totalCompleted = 0.0;
        $productCounts = [];
        $bumpCounts = [];
        $paymentCounts = [];
        $totalBumpsCount = 0;
        $totalBumpsAmount = 0.0;

        foreach ($completedOrders as $order) {
            $orderAmount = (float) $order->lineItemsTotalAmount();
            $totalCompleted += $orderAmount;

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

        $totalPending = (float) $pendingOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $pendingCount = $pendingOrders->count();

        $totalRefunded = (float) $refundedOrders->sum(fn ($o) => (float) $o->lineItemsTotalAmount());
        $refundedCount = $refundedOrders->count();

        // Linhas formatadas por método de pagamento
        $paymentLines = [];
        foreach ($paymentCounts as $label => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $paymentLines[] = "• *{$label}:* {$vendasLabel} ({$formatted})";
        }
        $paymentText = ! empty($paymentLines)
            ? implode("\n", $paymentLines)
            : '• Nenhuma venda concluída hoje';

        // Linhas formatadas por produto
        $productLines = [];
        foreach ($productCounts as $name => $data) {
            $formatted = self::money($data['total']);
            $vendasLabel = $data['count'] === 1 ? '1 venda' : "{$data['count']} vendas";
            $productLines[] = "• {$name}: {$vendasLabel} ({$formatted})";
        }
        $productText = ! empty($productLines)
            ? implode("\n", $productLines)
            : '• Nenhum produto faturado hoje';

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

        return [
            'date' => $now->format('d/m/Y'),
            'reference_date' => $now->format('Y-m-d'),
            'orders_count' => $completedCount,
            'total' => $totalCompleted,
            'total_formatted' => self::money($totalCompleted),
            'ticket_medio' => $ticketMedio,
            'ticket_medio_formatted' => self::money($ticketMedio),
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
     * Envia o relatório de vendas via WhatsApp.
     *
     * @throws ZapreiException
     */
    public function sendReport(int $tenantId, ?string $destinationPhone = null, bool $isTest = false): array
    {
        $config = $this->getConfig($tenantId);
        $phoneRaw = $destinationPhone ?: $config['phone'];
        $phone = PhoneNumber::normalize($phoneRaw);

        if ($phone === null) {
            throw new ZapreiException('Informe um número de WhatsApp válido para receber o relatório.');
        }

        $data = $this->generateData($tenantId);
        $message = $this->renderMessage($data, $config['custom_template']);

        $gateway = $this->gateways->forTenant($tenantId);
        $gateway->sendText($phone, $message);

        if (! $isTest) {
            $all = Getfy::config()->get(Zaprei::SLUG, []);
            $all['daily_reports'][(string) $tenantId]['last_sent_date'] = $data['reference_date'];
            Getfy::config()->set(Zaprei::SLUG, $all);
        }

        return [
            'success' => true,
            'recipient' => $phone,
            'message' => $message,
            'data' => $data,
        ];
    }

    /**
     * Executado pelo comando de cron para verificar e despachar relatórios vencidos.
     *
     * @return int número de relatórios enviados
     */
    public function checkAndSendDueReports(): int
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
                    $this->sendReport($tenantId, (string) ($tenantConfig['phone'] ?? ''), false);
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

    private static function money(float $amount): string
    {
        return 'R$ '.number_format($amount, 2, ',', '.');
    }
}
