<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Setting;

class PagarmeProcessingCostCalculator
{
    /** @var array<int, array{fixed_fee_amount: float, rates: array<int, float>}> */
    private array $configByTenant = [];

    /**
     * @return array{gross: float, fee: float, net: float}
     */
    public function forOrder(Order $order): array
    {
        $config = $this->configForTenant((int) $order->tenant_id);
        $metadata = is_array($order->metadata) ? $order->metadata : [];
        $installments = max(1, min(12, (int) ($metadata['card_installments'] ?? 1)));
        $gross = round((float) $order->amount, 2);
        $rate = $config['rates'][$installments] ?? 0.0;
        $fee = round(($gross * $rate / 100) + $config['fixed_fee_amount'], 2);

        return [
            'gross' => $gross,
            'fee' => $fee,
            'net' => max(0, round($gross - $fee, 2)),
        ];
    }

    /**
     * @return array{fixed_fee_amount: float, rates: array<int, float>}
     */
    private function configForTenant(int $tenantId): array
    {
        if (isset($this->configByTenant[$tenantId])) {
            return $this->configByTenant[$tenantId];
        }

        $raw = Setting::get('pagarme_processing_fees', null, $tenantId);
        if (is_string($raw)) {
            $raw = json_decode($raw, true);
        }
        $raw = is_array($raw) ? $raw : [];

        $rates = [];
        foreach (range(1, 12) as $installments) {
            $rates[$installments] = round(max(0, min(100, (float) ($raw['rates'][$installments] ?? $raw['rates'][(string) $installments] ?? 0))), 4);
        }

        return $this->configByTenant[$tenantId] = [
            'fixed_fee_amount' => round(max(0, (float) ($raw['fixed_fee_amount'] ?? 0)), 2),
            'rates' => $rates,
        ];
    }
}
