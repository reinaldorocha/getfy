<?php

namespace Tests\Unit;

use App\Models\Order;
use App\Models\Setting;
use App\Models\User;
use App\Services\PagarmeProcessingCostCalculator;
use Tests\TestCase;

class PagarmeProcessingCostCalculatorTest extends TestCase
{
    public function test_calculates_one_installment_cost_from_the_amount_charged_to_customer(): void
    {
        Setting::set('pagarme_processing_fees', [
            'fixed_fee_amount' => 0.49,
            'rates' => [1 => 3.49, 3 => 8.99],
        ], 1);

        $order = $this->makePagarmeCardOrder(100.00, 1);

        $this->assertSame([
            'gross' => 100.0,
            'fee' => 3.98,
            'net' => 96.02,
        ], app(PagarmeProcessingCostCalculator::class)->forOrder($order));
    }

    public function test_uses_the_selected_installment_rate_and_charged_total(): void
    {
        Setting::set('pagarme_processing_fees', [
            'fixed_fee_amount' => 0.49,
            'rates' => [1 => 3.49, 3 => 8.99],
        ], 1);

        $order = $this->makePagarmeCardOrder(15.00, 3);

        $this->assertSame([
            'gross' => 15.0,
            'fee' => 1.84,
            'net' => 13.16,
        ], app(PagarmeProcessingCostCalculator::class)->forOrder($order));
    }

    private function makePagarmeCardOrder(float $amount, int $installments): Order
    {
        $user = User::factory()->create(['tenant_id' => 1]);
        $product = $this->createTestProduct();

        return Order::create([
            'tenant_id' => 1,
            'user_id' => $user->id,
            'product_id' => $product->id,
            'status' => 'completed',
            'amount' => $amount,
            'currency' => 'BRL',
            'gateway' => 'pagarme',
            'email' => 'buyer@example.test',
            'metadata' => [
                'checkout_payment_method' => 'card',
                'card_installments' => $installments,
            ],
        ]);
    }
}
