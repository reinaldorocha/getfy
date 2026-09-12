<?php

namespace App\Services;

use App\Models\CommissionEntry;
use App\Models\Order;
use App\Models\ProductAffiliateProgram;

class ProducerSaleAmount
{
    public function __construct(
        private readonly NetAmountCalculator $netCalculator,
        private readonly CommissionBeneficiaryResolver $beneficiaryResolver,
    ) {}

    /**
     * @return array{
     *     amount: float,
     *     is_producer_share: bool,
     *     is_estimated: bool,
     *     gross_total: float,
     *     has_partner_split: bool
     * }
     */
    public function forOrder(Order $order): array
    {
        $isPagarmeCard = strtolower((string) $order->gateway) === 'pagarme'
            && $order->checkoutPaymentMethod() === 'card';
        $grossTotal = $isPagarmeCard ? round((float) $order->amount, 2) : $order->lineItemsTotalAmount();
        $order->loadMissing('product', 'commissionEntries');

        // Preserve the Pagar.me calculation for allocated splits; pending sales
        // still estimate partner commissions through the beneficiary resolver.
        if ($isPagarmeCard && $order->commissionEntries->isNotEmpty()) {
            $partnerCommissions = (float) $order->commissionEntries
                ->whereIn('role', [CommissionEntry::ROLE_AFILIADO, CommissionEntry::ROLE_COPRODUTOR])
                ->sum('commission_amount');
            $amount = max(0, round($this->netCalculator->forOrder($order)['net'] - $partnerCommissions, 2));

            return [
                'amount' => $amount,
                'is_producer_share' => true,
                'is_estimated' => false,
                'gross_total' => $grossTotal,
                'has_partner_split' => true,
            ];
        }

        $producerEntry = $order->commissionEntries
            ->firstWhere('role', CommissionEntry::ROLE_PRODUTOR);

        if ($producerEntry) {
            return [
                'amount' => (float) $producerEntry->commission_amount,
                'is_producer_share' => true,
                'is_estimated' => false,
                'gross_total' => $grossTotal,
                'has_partner_split' => true,
            ];
        }

        $beneficiaries = $this->resolveBeneficiaries($order);
        if ($beneficiaries === []) {
            return [
                'amount' => $grossTotal,
                'is_producer_share' => false,
                'is_estimated' => false,
                'gross_total' => $grossTotal,
                'has_partner_split' => false,
            ];
        }

        $estimatedShare = $this->estimateProducerShare($order, $beneficiaries);

        return [
            'amount' => $estimatedShare,
            'is_producer_share' => true,
            'is_estimated' => true,
            'gross_total' => $grossTotal,
            'has_partner_split' => true,
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function resolveBeneficiaries(Order $order): array
    {
        $order->loadMissing('product');
        $product = $order->product;
        if (! $product) {
            return [];
        }

        $program = ProductAffiliateProgram::firstOrCreate(
            ['product_id' => $product->id],
            ['enabled' => false, 'default_commission_percent' => 0, 'manual_approval' => true]
        );

        return $this->beneficiaryResolver->resolve($order, $product, $program);
    }

    /**
     * @param  list<array<string, mixed>>  $beneficiaries
     */
    private function estimateProducerShare(Order $order, array $beneficiaries): float
    {
        if ($beneficiaries === []) {
            return round($order->lineItemsTotalAmount(), 2);
        }

        $net = $this->netCalculator->forOrder($order)['net'];
        // Only partner percentages are present here; the remainder belongs to
        // the producer, not to the last partner in the list.
        $partnerTotal = array_sum(array_map(
            fn (array $beneficiary) => round($net * (float) $beneficiary['percent'] / 100, 2),
            $beneficiaries,
        ));

        return max(0, round($net - $partnerTotal, 2));
    }
}
