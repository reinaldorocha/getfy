<?php

namespace Tests\Feature;

use App\Events\OrderCompleted;
use App\Http\Middleware\EnsureInstalled;
use App\Models\GatewayCredential;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class CheckoutPagarmeDeclinedOrderTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutMiddleware(EnsureInstalled::class);
    }

    public function test_checkout_persists_a_rejected_order_when_pagarme_declines_a_card_payment(): void
    {
        User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct([
            'checkout_config' => array_replace_recursive(Product::defaultCheckoutConfig(), [
                'payment_gateways' => [
                    'card' => 'pagarme',
                ],
            ]),
        ]);

        $credential = GatewayCredential::create([
            'tenant_id' => 1,
            'gateway_slug' => 'pagarme',
            'credentials' => '',
            'is_connected' => true,
        ]);
        $credential->setEncryptedCredentials(['secret_key' => 'sk_test_123']);
        $credential->save();

        Http::fake([
            'https://api.pagar.me/core/v5/orders' => Http::response([
                'charges' => [[
                    'id' => 'ch_declined_1',
                    'status' => 'failed',
                    'last_transaction' => [
                        'status' => 'not_authorized',
                        'acquirer_message' => 'Cartão recusado pelo emissor.',
                    ],
                ]],
            ], 201),
        ]);

        $response = $this->postJson(route('checkout.process'), [
            'product_id' => $product->id,
            'payment_method' => 'card',
            'email' => 'buyer@example.com',
            'name' => 'Buyer',
            'cpf' => '52998224725',
            'payment_token' => 'card_token_123',
            'address_zipcode' => '60000000',
            'address_street' => 'Rua de Teste',
            'address_number' => '123',
            'address_neighborhood' => 'Centro',
            'address_city' => 'Fortaleza',
            'address_state' => 'CE',
        ]);

        $response->assertStatus(422);

        $order = Order::query()->sole();

        $this->assertSame('pagarme', $order->gateway);
        $this->assertSame('ch_declined_1', $order->gateway_id);
        $this->assertSame('rejected', $order->status);
        $this->assertSame('card', $order->metadata['checkout_payment_method']);
        $this->assertSame('card_declined', $order->metadata['payment_failure_type']);
        $this->assertSame('card_payment_declined', $order->metadata['payment_failure_reason']);
        $this->assertSame('Cartão recusado pelo emissor.', $order->metadata['pagarme_decline_reason']);
        $this->assertNotEmpty($order->metadata['payment_rejected_at']);
    }

    public function test_checkout_persists_safe_pagarme_gateway_error_metadata_when_connection_fails(): void
    {
        User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct([
            'checkout_config' => array_replace_recursive(Product::defaultCheckoutConfig(), [
                'payment_gateways' => [
                    'card' => 'pagarme',
                ],
            ]),
        ]);

        $credential = GatewayCredential::create([
            'tenant_id' => 1,
            'gateway_slug' => 'pagarme',
            'credentials' => '',
            'is_connected' => true,
        ]);
        $credential->setEncryptedCredentials(['secret_key' => 'sk_test_123']);
        $credential->save();

        $gatewayErrorMessage = 'Pagar.me connection failed: token=tok_live_secret cvv=123';
        Http::fake([
            'https://api.pagar.me/core/v5/orders' => function () use ($gatewayErrorMessage) {
                throw new ConnectionException($gatewayErrorMessage);
            },
        ]);

        $response = $this->postJson(route('checkout.process'), [
            'product_id' => $product->id,
            'payment_method' => 'card',
            'email' => 'buyer@example.com',
            'name' => 'Buyer',
            'cpf' => '52998224725',
            'payment_token' => 'card_token_123',
            'address_zipcode' => '60000000',
            'address_street' => 'Rua de Teste',
            'address_number' => '123',
            'address_neighborhood' => 'Centro',
            'address_city' => 'Fortaleza',
            'address_state' => 'CE',
        ]);

        $response->assertStatus(422);
        Http::assertSent(fn ($request) => $request->method() === 'POST'
            && $request->url() === 'https://api.pagar.me/core/v5/orders');

        $order = Order::query()->sole();

        $this->assertSame('pagarme', $order->gateway);
        $this->assertSame('rejected', $order->status);
        $this->assertSame('gateway_error', $order->metadata['payment_failure_type']);
        $this->assertSame('pagarme_gateway_error', $order->metadata['payment_failure_reason']);
        $this->assertSame('Não foi possível comunicar com a Pagar.me.', $order->metadata['pagarme_failure_message']);
        $this->assertSame('ConnectionException', $order->metadata['pagarme_failure_class']);
        $metadataJson = (string) json_encode($order->metadata, JSON_THROW_ON_ERROR);
        $this->assertStringNotContainsString('token=tok_live_secret', $metadataJson);
        $this->assertStringNotContainsString('cvv=123', $metadataJson);
        $paymentRejectedAt = \DateTimeImmutable::createFromFormat(\DateTimeInterface::ATOM, $order->metadata['payment_rejected_at']);
        $this->assertInstanceOf(\DateTimeImmutable::class, $paymentRejectedAt);
    }

    public function test_checkout_returns_success_when_post_completion_pagarme_listener_fails(): void
    {
        User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct([
            'checkout_config' => array_replace_recursive(Product::defaultCheckoutConfig(), [
                'payment_gateways' => [
                    'card' => 'pagarme',
                ],
            ]),
        ]);

        $credential = GatewayCredential::create([
            'tenant_id' => 1,
            'gateway_slug' => 'pagarme',
            'credentials' => '',
            'is_connected' => true,
        ]);
        $credential->setEncryptedCredentials(['secret_key' => 'sk_test_123']);
        $credential->save();

        Http::fake([
            'https://api.pagar.me/core/v5/orders' => Http::response([
                'charges' => [[
                    'id' => 'ch_paid_1',
                    'status' => 'paid',
                    'last_transaction' => [
                        'status' => 'paid',
                    ],
                ]],
            ], 201),
        ]);
        Event::listen(OrderCompleted::class, function (): void {
            throw new \RuntimeException('post-completion listener failed');
        });

        $response = $this->postJson(route('checkout.process'), [
            'product_id' => $product->id,
            'payment_method' => 'card',
            'email' => 'buyer@example.com',
            'name' => 'Buyer',
            'cpf' => '52998224725',
            'payment_token' => 'card_token_123',
            'address_zipcode' => '60000000',
            'address_street' => 'Rua de Teste',
            'address_number' => '123',
            'address_neighborhood' => 'Centro',
            'address_city' => 'Fortaleza',
            'address_state' => 'CE',
        ]);

        $order = Order::query()->sole();

        $response->assertOk()->assertJson([
            'success' => true,
            'order_id' => $order->id,
            'message' => 'Compra concluída.',
        ]);
        $this->assertSame('completed', $order->status);
    }

    public function test_checkout_returns_an_approved_response_when_pagarme_returns_completed(): void
    {
        User::factory()->create([
            'role' => User::ROLE_INFOPRODUTOR,
            'tenant_id' => 1,
        ]);

        $product = $this->createTestProduct([
            'checkout_config' => array_replace_recursive(Product::defaultCheckoutConfig(), [
                'payment_gateways' => [
                    'card' => 'pagarme',
                ],
            ]),
        ]);

        $credential = GatewayCredential::create([
            'tenant_id' => 1,
            'gateway_slug' => 'pagarme',
            'credentials' => '',
            'is_connected' => true,
        ]);
        $credential->setEncryptedCredentials(['secret_key' => 'sk_test_123']);
        $credential->save();

        Http::fake([
            'https://api.pagar.me/core/v5/orders' => Http::response([
                'charges' => [[
                    'id' => 'ch_completed_1',
                    'status' => 'completed',
                    'last_transaction' => [
                        'status' => 'paid',
                    ],
                ]],
            ], 201),
        ]);

        $response = $this->postJson(route('checkout.process'), [
            'product_id' => $product->id,
            'payment_method' => 'card',
            'email' => 'buyer@example.com',
            'name' => 'Buyer',
            'cpf' => '52998224725',
            'payment_token' => 'card_token_123',
            'address_zipcode' => '60000000',
            'address_street' => 'Rua de Teste',
            'address_number' => '123',
            'address_neighborhood' => 'Centro',
            'address_city' => 'Fortaleza',
            'address_state' => 'CE',
        ]);

        $response->assertOk()->assertJson([
            'success' => true,
            'payment_method' => 'card',
            'status' => 'completed',
            'message' => 'Pagamento aprovado.',
        ]);
        $this->assertSame('completed', Order::query()->sole()->status);
    }
}
