<?php

namespace App\Services;

use App\Models\CommissionEntry;
use App\Models\GatewayFeeSetting;
use App\Models\Order;
use App\Models\Setting;
use App\Support\MoneyMinorUnits;

class NetAmountCalculator
{
    public const FEE_SOURCE_GATEWAY_WEBHOOK = 'gateway_webhook';

    public const FEE_SOURCE_COMMISSION_ENTRY = 'commission_entry';

    public const FEE_SOURCE_ESTIMATED = 'estimated';

    public const FEE_SOURCE_MANUAL = 'manual';

    /** @var array<int, array<int, float>> */
    private array $pagarmeRatesByTenant = [];

    /**
     * @return array{gross: float, fee: float, net: float, fee_source: string}
     */
    public function forOrder(Order $order): array
    {
        $manualNetAmount = $this->manualNetAmountForOrder($order);
        if ($manualNetAmount !== null) {
            return [
                'gross' => round((float) $order->amount, 2),
                'fee' => 0.0,
                'net' => $manualNetAmount,
                'fee_source' => self::FEE_SOURCE_MANUAL,
            ];
        }

        $method = $order->checkoutPaymentMethod();
        $gateway = strtolower((string) ($order->gateway ?? ''));
        $gross = $gateway === 'pagarme' && $method === 'card'
            ? round((float) $order->amount, 2)
            : round($order->lineItemsTotalAmount(), 2);
        $currency = $order->getCurrencyOrDefault();
        $meta = is_array($order->metadata) ? $order->metadata : [];

        $feeCents = $meta['gateway_fee_cents'] ?? null;
        $netCents = $meta['gateway_net_cents'] ?? null;
        if (is_numeric($feeCents) && (int) $feeCents >= 0) {
            $fee = MoneyMinorUnits::fromMinorUnits((int) $feeCents, $currency);
            if (is_numeric($netCents) && (int) $netCents >= 0) {
                $net = MoneyMinorUnits::fromMinorUnits((int) $netCents, $currency);
            } else {
                $net = max(0, round($gross - $fee, 2));
            }

            return [
                'gross' => $gross,
                'fee' => round($fee, 2),
                'net' => round($net, 2),
                'fee_source' => (string) ($meta['gateway_fee_source'] ?? self::FEE_SOURCE_GATEWAY_WEBHOOK),
            ];
        }

        $order->loadMissing('commissionEntries');
        $producerEntry = $order->commissionEntries
            ->firstWhere('role', CommissionEntry::ROLE_PRODUTOR);
        if ($producerEntry && (float) $producerEntry->gateway_fee_amount > 0) {
            $fee = round((float) $producerEntry->gateway_fee_amount, 2);
            $net = $producerEntry->net_amount !== null
                ? round((float) $producerEntry->net_amount, 2)
                : max(0, round($gross - $fee, 2));

            return [
                'gross' => $gross,
                'fee' => $fee,
                'net' => $net,
                'fee_source' => self::FEE_SOURCE_COMMISSION_ENTRY,
            ];
        }

        if ($gateway === 'pagarme' && $method === 'card') {
            $gross = round((float) $order->amount, 2);
            $fee = round($gross * $this->pagarmeRateForOrder($order) / 100, 2);

            return [
                'gross' => $gross,
                'fee' => $fee,
                'net' => max(0, round($gross - $fee, 2)),
                'fee_source' => self::FEE_SOURCE_ESTIMATED,
            ];
        }

        $gross = round($order->lineItemsTotalAmount(), 2);
        $tenantId = (int) $order->tenant_id;
        $fee = $this->estimateFee($tenantId, $gateway, $method, $gross);
        $net = max(0, round($gross - $fee, 2));

        return [
            'gross' => $gross,
            'fee' => $fee,
            'net' => $net,
            'fee_source' => self::FEE_SOURCE_ESTIMATED,
        ];
    }

    public function manualNetAmountForOrder(Order $order): ?float
    {
        $metadata = is_array($order->metadata) ? $order->metadata : [];
        $manualNetAmount = $metadata['manual_net_amount'] ?? null;

        return is_numeric($manualNetAmount)
            ? max(0, round((float) $manualNetAmount, 2))
            : null;
    }

    public function estimateFee(int $tenantId, string $gatewaySlug, string $method, float $gross): float
    {
        $setting = null;
        if ($gatewaySlug !== '') {
            $setting = GatewayFeeSetting::forTenant($tenantId)
                ->where('gateway_slug', $gatewaySlug)
                ->where('method', $method)
                ->first();
        }

        if ($setting) {
            $percent = (float) $setting->percent;
            $fixed = ((int) $setting->fixed_cents) / 100;

            return round(($gross * $percent / 100) + $fixed, 2);
        }

        $cfg = GatewayFeeSetting::defaultsFor($gatewaySlug, $method);
        $percent = (float) ($cfg['percent'] ?? 0);
        $fixed = ((int) ($cfg['fixed_cents'] ?? 0)) / 100;

        return round(($gross * $percent / 100) + $fixed, 2);
    }

    private function pagarmeRateForOrder(Order $order): float
    {
        $metadata = is_array($order->metadata) ? $order->metadata : [];
        $snapshot = $metadata['pagarme_fee_rate_percent'] ?? null;
        if (is_numeric($snapshot)) {
            return min(99.9999, max(0, (float) $snapshot));
        }

        $tenantId = (int) $order->tenant_id;
        if (! isset($this->pagarmeRatesByTenant[$tenantId])) {
            $raw = Setting::get('pagarme_installments', null, $tenantId);
            if (is_string($raw)) {
                $raw = json_decode($raw, true);
            }
            $rates = is_array($raw) && is_array($raw['rates'] ?? null) ? $raw['rates'] : [];
            $this->pagarmeRatesByTenant[$tenantId] = [];
            foreach (range(1, 12) as $installments) {
                $this->pagarmeRatesByTenant[$tenantId][$installments] = min(99.9999, max(0, (float) ($rates[$installments] ?? $rates[(string) $installments] ?? 0)));
            }
        }

        $installments = min(12, max(1, (int) ($metadata['card_installments'] ?? 1)));

        return $this->pagarmeRatesByTenant[$tenantId][$installments] ?? 0.0;
    }
}
