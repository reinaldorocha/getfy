<?php

namespace App\Services;

use App\Models\GatewayFeeSetting;
use App\Models\Order;
use App\Models\Setting;

class NetAmountCalculator
{
    /** @var array<int, array<int, float>> */
    private array $pagarmeRatesByTenant = [];

    /**
     * @return array{gross: float, fee: float, net: float}
     */
    public function forOrder(Order $order): array
    {
        $method = $order->checkoutPaymentMethod();
        $gateway = strtolower((string) ($order->gateway ?? ''));

        if ($gateway === 'pagarme' && $method === 'card') {
            $gross = round((float) $order->amount, 2);
            $fee = round($gross * $this->pagarmeRateForOrder($order) / 100, 2);

            return [
                'gross' => $gross,
                'fee' => $fee,
                'net' => max(0, round($gross - $fee, 2)),
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
        ];
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
