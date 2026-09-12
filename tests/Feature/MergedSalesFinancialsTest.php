<?php

namespace Tests\Feature;

use App\Http\Middleware\EnsureInstalled;
use App\Models\CommissionEntry;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Services\NetAmountCalculator;
use App\Services\OrderNetProfitCalculator;
use App\Services\ProducerSaleAmount;
use App\Services\TrackingService;
use Tests\TestCase;

class MergedSalesFinancialsTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
    }

    public function test_pagarme_snapshot_is_used_until_real_gateway_fees_arrive(): void
    {
        $order = $this->order([
            'checkout_payment_method' => 'card',
            'pagarme_fee_rate_percent' => 10,
        ], 'pagarme');
        $calculator = app(NetAmountCalculator::class);
        $estimated = $calculator->forOrder($order);
        $this->assertSame(90.0, $estimated['net']);
        $this->assertSame('estimated', $estimated['fee_source']);

        $order->metadata = array_merge($order->metadata, [
            'gateway_fee_cents' => 700,
            'gateway_net_cents' => 9300,
        ]);
        $actual = $calculator->forOrder($order);
        $this->assertSame(93.0, $actual['net']);
        $this->assertSame('gateway_webhook', $actual['fee_source']);
    }

    public function test_manual_net_override_remains_available_with_gateway_metadata(): void
    {
        $order = $this->order([
            'manual_net_amount' => 75,
            'gateway_fee_cents' => 700,
            'gateway_net_cents' => 9300,
        ]);
        $this->assertSame(75.0, app(OrderNetProfitCalculator::class)->forOrder($order));
        $result = app(NetAmountCalculator::class)->forOrder($order);
        $this->assertSame(75.0, $result['net']);
        $this->assertSame('manual', $result['fee_source']);
    }

    public function test_pagarme_split_subtracts_partner_commissions_from_real_net(): void
    {
        $order = $this->order([
            'checkout_payment_method' => 'card',
            'pagarme_fee_rate_percent' => 10,
            'gateway_fee_cents' => 700,
            'gateway_net_cents' => 9300,
        ], 'pagarme');
        CommissionEntry::create([
            'order_id' => $order->id,
            'tenant_id' => 1,
            'beneficiary_user_id' => User::factory()->create()->id,
            'role' => CommissionEntry::ROLE_AFILIADO,
            'gross_amount' => 100,
            'gateway_fee_amount' => 7,
            'net_amount' => 93,
            'commission_amount' => 20,
            'status' => CommissionEntry::STATUS_PENDING,
            'payment_method' => 'card',
        ]);
        $share = app(ProducerSaleAmount::class)->forOrder($order->fresh());
        $this->assertSame(73.0, $share['amount']);
        $this->assertTrue($share['has_partner_split']);
    }

    public function test_checkout_keeps_pagarme_installments_and_cajupay_threeds_options(): void
    {
        $config = Product::defaultCheckoutConfig();
        $this->assertCount(12, $config['pagarme_installments']['rates']);
        $this->assertFalse($config['cajupay_card']['require_threeds']);
    }

    public function test_sales_payload_keeps_billing_profit_and_real_gateway_totals(): void
    {
        $this->withoutMiddleware(EnsureInstalled::class);
        $order = $this->order(['gateway_fee_cents' => 700, 'gateway_net_cents' => 9300]);
        $this->actingAs($order->user)->get('/vendas')->assertOk()->assertInertia(fn ($page) => $page
            ->where('vendas.data.0.billed_amount', fn ($amount) => (float) $amount === 100.0)
            ->where('vendas.data.0.net_profit_amount', fn ($amount) => (float) $amount === 93.0)
            ->where('vendas.data.0.gateway_fee', fn ($amount) => (float) $amount === 7.0)
            ->where('vendas.data.0.net_amount', fn ($amount) => (float) $amount === 93.0)
            ->where('vendas.data.0.net_profit_amount_is_estimated', false)
            ->has('stats.lucro_liquido_por_moeda')
            ->has('stats.valor_bruto_por_moeda')
            ->has('stats.taxas_gateway_por_moeda')
            ->has('stats.valor_liquido_por_moeda'));
    }

    public function test_tracking_does_not_deduct_refunds_twice_with_real_gateway_fees(): void
    {
        $order = $this->order(['gateway_fee_cents' => 700, 'gateway_net_cents' => 9300]);
        $refunded = $order->replicate();
        $refunded->status = 'refunded';
        $refunded->amount = 50;
        $refunded->save();
        $financial = app(TrackingService::class)->buildPayload(1, 'total', $order->user)['financial'];
        $this->assertSame(50.0, $financial['reembolsos']);
        $this->assertSame(93.0, $financial['receita_liquida']);
        $this->assertSame(93.0, $financial['lucro_operacional']);
        $this->assertSame(93.0, $financial['lucro_liquido']);
    }

    private function order(array $metadata, string $gateway = 'cajupay'): Order
    {
        $user = User::factory()->create(['tenant_id' => 1, 'role' => User::ROLE_INFOPRODUTOR]);

        return Order::create([
            'tenant_id' => 1,
            'user_id' => $user->id,
            'product_id' => $this->createTestProduct()->id,
            'status' => 'completed',
            'amount' => 100,
            'currency' => 'BRL',
            'email' => 'merge@example.com',
            'gateway' => $gateway,
            'metadata' => $metadata,
        ]);
    }
}
