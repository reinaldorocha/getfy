<?php

namespace Plugins\Vitrine\Services;

use App\Models\Order;
use App\Models\User;
use App\PluginSdk\Getfy;
use Illuminate\Support\Str;
use Plugins\Vitrine\Models\VitrineOrder;
use Plugins\Vitrine\Models\VitrineProduct;
use Plugins\Vitrine\Models\VitrineSetting;

class VitrineCheckoutService
{
    public function processCheckout(array $data, int $tenantId = 1): array
    {
        $customer = $data['customer'] ?? [];
        $email = trim((string) ($customer['email'] ?? ''));
        $name = trim((string) ($customer['name'] ?? '')) ?: 'Cliente';
        $phone = trim((string) ($customer['phone'] ?? ''));
        $cpf = preg_replace('/\D/', '', (string) ($customer['cpf'] ?? ''));
        $method = strtolower((string) ($data['payment_method'] ?? 'pix'));
        $items = is_array($data['items'] ?? null) ? $data['items'] : [];

        if (empty($email) || ! filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return ['success' => false, 'error' => 'Informe um e-mail válido para receber o acesso.'];
        }

        if (empty($cpf) || strlen($cpf) !== 11) {
            return ['success' => false, 'error' => 'O CPF é obrigatório e deve conter 11 dígitos.'];
        }

        if (empty($items)) {
            return ['success' => false, 'error' => 'O carrinho está vazio.'];
        }

        // 1. Calcular total real a partir dos itens
        $totalAmount = 0.0;
        $normalizedItems = [];

        foreach ($items as $item) {
            $productId = (string) ($item['id'] ?? '');
            $qty = max(1, (int) ($item['quantity'] ?? 1));

            $product = VitrineProduct::where('id', $productId)->first();
            $unitPrice = $product ? $product->getNumericPrice() : (float) ($item['price'] ?? 0);

            if ($unitPrice <= 0) {
                $unitPrice = (float) ($item['price'] ?? 0);
            }

            $lineTotal = round($unitPrice * $qty, 2);
            $totalAmount += $lineTotal;

            $normalizedItems[] = [
                'id' => $productId,
                'title' => $product?->title ?? ($item['title'] ?? 'Curso/Material'),
                'quantity' => $qty,
                'unit_price' => $unitPrice,
                'line_total' => $lineTotal,
                'imageUrl' => $product?->imageUrl ?? ($item['imageUrl'] ?? null),
            ];
        }

        $totalAmount = round($totalAmount, 2);
        if ($totalAmount <= 0) {
            return ['success' => false, 'error' => 'Valor total do pedido inválido.'];
        }

        // 2. Criar ou obter usuário no Getfy
        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'password' => bcrypt(Str::random(32)),
                'role' => User::ROLE_ALUNO,
                'tenant_id' => $tenantId,
            ]
        );

        // 3. Criar registro de pedido no Getfy (Core)
        $firstGetfyProductId = null;
        foreach ($items as $it) {
            $vp = VitrineProduct::where('id', $it['id'] ?? '')->first();
            if ($vp && $vp->getfy_product_id) {
                $firstGetfyProductId = $vp->getfy_product_id;
                break;
            }
        }

        $settings = VitrineSetting::forTenant($tenantId);
        $pgConfig = is_array($settings->payment_gateways) ? $settings->payment_gateways : [];
        $defaultFallback = $method === 'pix' ? 'mercadopago' : ($method === 'boleto' ? 'mercadopago' : 'pagarme');
        $selectedGateway = array_key_exists($method, $pgConfig) ? ($pgConfig[$method] ?: 'disabled') : $defaultFallback;

        if ($selectedGateway === 'disabled' || empty($selectedGateway)) {
            $methodName = $method === 'pix' ? 'PIX' : ($method === 'boleto' ? 'Boleto Bancário' : 'Cartão de Crédito');
            throw new \Exception("A forma de pagamento {$methodName} não está disponível no momento.");
        }

        // Calcular taxas de parcelamento caso o método seja cartão e o gateway seja Pagar.me
        $installments = max(1, min(12, (int) ($data['installments'] ?? 1)));
        $chargedAmount = $totalAmount;
        $cardMetadata = [];

        if ($method === 'card' && $selectedGateway === 'pagarme') {
            $pagarmeRaw = \App\Models\Setting::get('pagarme_installments', null, $tenantId);
            $pagarmeConfig = is_string($pagarmeRaw) ? json_decode($pagarmeRaw, true) : $pagarmeRaw;
            $pagarmeConfig = is_array($pagarmeConfig) ? $pagarmeConfig : [];
            $rates = is_array($pagarmeConfig['rates'] ?? null) ? $pagarmeConfig['rates'] : [];
            $rate = min(99.9999, max(0, (float) ($rates[$installments] ?? $rates[(string) $installments] ?? 0)));
            $passFeeToCustomer = $installments === 1
                ? ! empty($pagarmeConfig['pass_1x_fee_to_customer'])
                : ! empty($pagarmeConfig['enabled']);
            $producerFeeAssumptionPercent = min(100, max(0, (float) ($pagarmeConfig['producer_fee_assumption_percent'] ?? 0)));
            $saleFee = $installments > 1
                ? max(0, (float) ($pagarmeConfig['sale_fee_amount'] ?? 0))
                : 0.0;

            $chargedAmount = $passFeeToCustomer && $rate > 0
                ? round((round($totalAmount * (1 - ($producerFeeAssumptionPercent / 100)), 2) / (1 - ($rate / 100))) + $saleFee, 2)
                : round($totalAmount + $saleFee, 2);

            $cardMetadata = [
                'card_installments' => $installments,
                'pagarme_fee_rate_percent' => $rate,
                'pagarme_fee_passed_to_customer' => $passFeeToCustomer,
                'pagarme_fee_assumption_percent' => $producerFeeAssumptionPercent,
                'base_amount' => $totalAmount,
                'charged_amount' => $chargedAmount,
                'sale_fee_amount' => $saleFee,
            ];
        }

        $getfyOrder = null;
        try {
            $getfyOrder = Order::create([
                'tenant_id' => $tenantId,
                'user_id' => $user->id,
                'product_id' => $firstGetfyProductId ?: (string) Str::uuid(),
                'amount' => $chargedAmount,
                'currency' => 'BRL',
                'gateway' => $selectedGateway,
                'email' => $email,
                'cpf' => $cpf ?: null,
                'phone' => $phone ?: null,
                'status' => 'pending',
                'metadata' => array_merge([
                    'source' => 'vitrine_plugin_cart',
                    'checkout_payment_method' => $method,
                    'gateway' => $selectedGateway,
                    'items_count' => count($normalizedItems),
                    'items' => $normalizedItems,
                    'customer_name' => $name,
                    'customer_cpf' => $cpf,
                ], $cardMetadata),
            ]);

            // Criar registros individuais de OrderItem para aparecer na aba de vendas do Getfy
            foreach ($normalizedItems as $idx => $nItem) {
                $pId = null;
                $vp = VitrineProduct::where('id', $nItem['id'] ?? '')->first();
                if ($vp && $vp->getfy_product_id) {
                    $pId = $vp->getfy_product_id;
                } elseif ($firstGetfyProductId) {
                    $pId = $firstGetfyProductId;
                }

                if ($pId && \App\Models\Product::where('id', $pId)->exists()) {
                    \App\Models\OrderItem::create([
                        'order_id' => $getfyOrder->id,
                        'product_id' => $pId,
                        'amount' => $nItem['line_total'],
                        'position' => $idx + 1,
                    ]);
                }
            }
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error('Vitrine checkout order error: ' . $e->getMessage());
        }

        // 4. Gerar dados de pagamento
        $pixPayload = null;
        if ($method === 'pix') {
            $pixPayload = $this->generatePixData($totalAmount, $name, $getfyOrder?->id ?? time());
        }

        // 5. Salvar VitrineOrder
        $vitrineOrder = VitrineOrder::create([
            'tenant_id' => $tenantId,
            'getfy_order_id' => $getfyOrder?->id,
            'customer_name' => $name,
            'customer_email' => $email,
            'customer_phone' => $phone,
            'customer_cpf' => $cpf,
            'total_amount' => $chargedAmount,
            'payment_method' => $method,
            'status' => 'pending',
            'items' => $normalizedItems,
            'pix_code' => $pixPayload['code'] ?? null,
            'pix_qrcode' => $pixPayload['qrcode'] ?? null,
        ]);

        return [
            'success' => true,
            'order_id' => $vitrineOrder->id,
            'getfy_order_id' => $getfyOrder?->id,
            'total_amount' => $chargedAmount,
            'formatted_total' => 'R$ ' . number_format($chargedAmount, 2, ',', '.'),
            'installments' => $installments,
            'payment_method' => $method,
            'items' => $normalizedItems,
            'pix' => $pixPayload,
            'message' => 'Pedido gerado com sucesso!',
        ];
    }

    private function generatePixData(float $amount, string $customerName, $orderId): array
    {
        $amountStr = number_format($amount, 2, '.', '');
        $txid = 'GETFY' . strtoupper(substr(md5($orderId . time()), 0, 16));

        // Código EMV Pix padrão (Pix Copia e Cola)
        $pixKey = 'contato@getfy.org';
        $merchantName = 'ESCOLA CURSOS';
        $merchantCity = 'SAO PAULO';

        $pixPayload = "00020126580014br.gov.bcb.pix0118{$pixKey}520400005303986540" .
            str_pad((string) strlen($amountStr), 2, '0', STR_PAD_LEFT) . $amountStr .
            "5802BR59" . str_pad((string) strlen($merchantName), 2, '0', STR_PAD_LEFT) . $merchantName .
            "60" . str_pad((string) strlen($merchantCity), 2, '0', STR_PAD_LEFT) . $merchantCity .
            "62" . str_pad((string) (strlen($txid) + 4), 2, '0', STR_PAD_LEFT) . "05" . str_pad((string) strlen($txid), 2, '0', STR_PAD_LEFT) . $txid .
            "6304";

        // Adiciona CRC16
        $crc = $this->crc16($pixPayload);
        $pixCopiaECola = $pixPayload . strtoupper($crc);

        // QR Code URL seguro gerado via API pública SVG/PNG
        $qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' . urlencode($pixCopiaECola);

        return [
            'code' => $pixCopiaECola,
            'qrcode' => $qrCodeUrl,
            'txid' => $txid,
            'expires_in' => 1800, // 30 minutos
        ];
    }

    private function crc16(string $payload): string
    {
        $polynomial = 0x1021;
        $result = 0xFFFF;

        for ($offset = 0; $offset < strlen($payload); $offset++) {
            $result ^= (ord($payload[$offset]) << 8);
            for ($bitwise = 0; $bitwise < 8; $bitwise++) {
                if (($result <<= 1) & 0x10000) {
                    $result ^= $polynomial;
                }
                $result &= 0xFFFF;
            }
        }

        return str_pad(dechex($result), 4, '0', STR_PAD_LEFT);
    }
}
