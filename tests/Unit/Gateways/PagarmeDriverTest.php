<?php

namespace Tests\Unit\Gateways;

use App\Gateways\Pagarme\PagarmeDriver;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class PagarmeDriverTest extends TestCase
{
    public function test_it_returns_structured_details_for_a_not_authorized_card_charge(): void
    {
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

        $result = (new PagarmeDriver())->createCardPayment(
            ['secret_key' => 'sk_test_123'],
            10.00,
            [
                'name' => 'Buyer',
                'document' => '00000000000',
                'email' => 'buyer@example.com',
                'address' => [
                    'zip_code' => '60000000',
                    'street_name' => 'Rua de Teste',
                    'street_number' => '123',
                    'neighborhood' => 'Centro',
                    'city' => 'Fortaleza',
                    'federal_unit' => 'CE',
                ],
            ],
            'order_declined_1',
            ['payment_token' => 'card_token_123']
        );

        $this->assertSame('ch_declined_1', $result['transaction_id']);
        $this->assertSame('cancelled', $result['status']);
        $this->assertSame('Cartão recusado pelo emissor.', $result['decline_reason']);
    }

    public function test_it_throws_for_a_canceled_card_charge(): void
    {
        Http::fake([
            'https://api.pagar.me/core/v5/orders' => Http::response([
                'charges' => [[
                    'id' => 'ch_canceled_1',
                    'status' => 'canceled',
                    'last_transaction' => [
                        'status' => 'canceled',
                    ],
                ]],
            ], 201),
        ]);

        $this->expectException(\RuntimeException::class);

        (new PagarmeDriver())->createCardPayment(
            ['secret_key' => 'sk_test_123'],
            10.00,
            [
                'name' => 'Buyer',
                'document' => '00000000000',
                'email' => 'buyer@example.com',
                'address' => [
                    'zip_code' => '60000000',
                    'street_name' => 'Rua de Teste',
                    'street_number' => '123',
                    'neighborhood' => 'Centro',
                    'city' => 'Fortaleza',
                    'federal_unit' => 'CE',
                ],
            ],
            'order_canceled_1',
            ['payment_token' => 'card_token_123']
        );
    }
}
