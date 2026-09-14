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

    /** @var array<int, array<string, mixed>> */
    private array $pagarmeConfigByTenant = [];

    /**
     * @return array{gross: float, fee: float, net: float, fee_source: string}
     */
    public function forOrder(Order $order): array
    {
        $gross = round($order->lineItemsTotalAmount(), 2);
        $method = $order->checkoutPaymentMethod();
        $gateway = strtolower((string) ($order->gateway ?? ''));
        $currency = $order->getCurrencyOrDefault();
        $meta = is_array($order->metadata) ? $order->metadata : [];

        // 1. Ajuste manual de lucro líquido recebido
        $manualNetAmount = $this->manualNetAmountForOrder($order);
        if ($manualNetAmount !== null) {
            return [
                'gross' => $gross,
                'fee' => max(0, round($gross - $manualNetAmount, 2)),
                'net' => $manualNetAmount,
                'fee_source' => self::FEE_SOURCE_MANUAL,
            ];
        }

        // 2. Taxas reais informadas via webhook
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

        // 3. Cartão Pagar.me com base nos campos de repasse (1x, 2x+) e percentual assumido
        if ($gateway === 'pagarme' && $method === 'card') {
            $tenantId = (int) $order->tenant_id;
            $config = $this->pagarmeConfigForTenant($tenantId);
            $installments = min(12, max(1, (int) ($meta['card_installments'] ?? $meta['installments'] ?? 1)));
            $rate = $this->pagarmeRateForOrder($order);

            $passFeeToCustomer = $installments === 1
                ? (array_key_exists('pagarme_fee_passed_to_customer', $meta)
                    ? (bool) $meta['pagarme_fee_passed_to_customer']
                    : ! empty($config['pass_1x_fee_to_customer']))
                : (array_key_exists('pagarme_fee_passed_to_customer', $meta)
                    ? (bool) $meta['pagarme_fee_passed_to_customer']
                    : ! empty($config['enabled']));

            $producerAssumptionPercent = array_key_exists('pagarme_fee_assumption_percent', $meta)
                ? (float) $meta['pagarme_fee_assumption_percent']
                : (float) ($config['producer_fee_assumption_percent'] ?? 0);
            $producerAssumptionPercent = min(100, max(0, $producerAssumptionPercent));

            $charged = (float) $order->amount;

            if ($passFeeToCustomer && $charged > 0 && abs($charged - $gross) >= 0.01) {
                $net = round($charged * (1 - ($rate / 100)), 2);
                $fee = max(0, round($gross - $net, 2));
            } elseif ($passFeeToCustomer) {
                $fee = $producerAssumptionPercent > 0
                    ? round($gross * ($producerAssumptionPercent / 100), 2)
                    : 0.0;
                $net = max(0, round($gross - $fee, 2));
            } else {
                $fee = round($gross * ($rate / 100), 2);
                $net = max(0, round($gross - $fee, 2));
            }

            return [
                'gross' => $gross,
                'fee' => $fee,
                'net' => $net,
                'fee_source' => self::FEE_SOURCE_ESTIMATED,
            ];
        }

        // 4. Comissões registradas
        $order->loadMissing('commissionEntries');
        $producerEntry = $order->commissionEntries
            ->firstWhere('role', CommissionEntry::ROLE_PRODUTOR);
        if ($producerEntry && (float) $producerEntry->gateway_fee_amount > 0) {
            $net = $producerEntry->net_amount !== null
                ? round((float) $producerEntry->net_amount, 2)
                : max(0, round($gross - (float) $producerEntry->gateway_fee_amount, 2));
            $fee = max(0, round($gross - $net, 2));

            return [
                'gross' => $gross,
                'fee' => $fee,
                'net' => $net,
                'fee_source' => self::FEE_SOURCE_COMMISSION_ENTRY,
            ];
        }

        // 5. Demais gateways estimados
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

    private function pagarmeConfigForTenant(int $tenantId): array
    {
        if (! isset($this->pagarmeConfigByTenant[$tenantId])) {
            $raw = Setting::get('pagarme_installments', null, $tenantId);
            if (is_string($raw)) {
                $raw = json_decode($raw, true);
            }
            $this->pagarmeConfigByTenant[$tenantId] = is_array($raw) ? $raw : [];
        }

        return $this->pagarmeConfigByTenant[$tenantId];
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
