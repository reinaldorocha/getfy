<?php

namespace Tests\Feature;

use App\Http\Middleware\EnsureInstalled;
use App\Models\Order;
use App\Models\User;
use Tests\TestCase;

class VendasExportTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutVite();
        config(['commissions.gateway_default_fees.manual.pix' => ['percent' => 0, 'fixed_cents' => 0]]);
    }

    public function test_vendas_export_csv_includes_valor_bruto_and_valor_liquido(): void
    {
        $this->withoutMiddleware(EnsureInstalled::class);

        $user = User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct(['tenant_id' => 1]);

        Order::create([
            'tenant_id' => 1,
            'user_id' => $user->id,
            'product_id' => $product->id,
            'status' => 'completed',
            'amount' => 150.50,
            'email' => 'buyer@example.com',
            'gateway' => 'manual',
        ]);

        $response = $this->actingAs($user)->get('/vendas/export?format=csv');
        $response->assertOk();
        $response->assertHeader('Content-Type', 'text/csv; charset=UTF-8');

        $content = $response->streamedContent();
        $this->assertStringContainsString('Valor bruto', $content);
        $this->assertStringContainsString('Valor líquido', $content);
        $this->assertStringContainsString('150,50', $content);
    }

    public function test_vendas_export_xls_includes_valor_bruto_and_valor_liquido(): void
    {
        $this->withoutMiddleware(EnsureInstalled::class);

        $user = User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct(['tenant_id' => 1]);

        Order::create([
            'tenant_id' => 1,
            'user_id' => $user->id,
            'product_id' => $product->id,
            'status' => 'completed',
            'amount' => 200.00,
            'email' => 'buyer2@example.com',
            'gateway' => 'manual',
        ]);

        $response = $this->actingAs($user)->get('/vendas/export?format=xls');
        $response->assertOk();
        $response->assertHeader('Content-Type', 'application/vnd.ms-excel; charset=UTF-8');

        $content = $response->streamedContent();
        $this->assertStringContainsString('Valor bruto', $content);
        $this->assertStringContainsString('Valor líquido', $content);
        $this->assertStringContainsString('200,00', $content);
    }
}
