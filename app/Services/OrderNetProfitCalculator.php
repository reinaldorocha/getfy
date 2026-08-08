<?php

namespace App\Services;

use App\Models\Order;

class OrderNetProfitCalculator
{
    public function __construct(
        private readonly ProducerSaleAmount $producerSaleAmount,
        private readonly NetAmountCalculator $netAmountCalculator,
    ) {}

    public function forOrder(Order $order): float
    {
        $manualNetAmount = $this->netAmountCalculator->manualNetAmountForOrder($order);
        if ($manualNetAmount !== null) {
            return $manualNetAmount;
        }

        $producerAmount = $this->producerSaleAmount->forOrder($order);

        return round(
            $producerAmount['is_producer_share']
                ? (float) $producerAmount['amount']
                : (float) $this->netAmountCalculator->forOrder($order)['net'],
            2
        );
    }
}
