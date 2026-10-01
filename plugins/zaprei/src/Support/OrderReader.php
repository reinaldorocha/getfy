<?php

namespace Plugins\Zaprei\Support;

use App\Models\CheckoutSession;
use App\Models\Order;
use App\Models\Subscription;
use Illuminate\Database\Eloquent\Model;

/**
 * Único ponto do ZapRei que toca models do core.
 *
 * O SDK (App\PluginSdk\Getfy) não expõe leitura de pedidos em lote nem os dados
 * de contato da venda, e os próprios eventos entregam models do core. Todo o
 * acoplamento fica isolado aqui para facilitar a manutenção quando o SDK cobrir
 * esses casos.
 */
final class OrderReader
{
    /**
     * Contatos dos compradores do tenant, no formato aceito por Contact.
     *
     * Um cliente pode ter vários pedidos (produtos diferentes); agrupamos por
     * telefone para gerar um único contato por cliente com todos os produtos
     * comprados, em vez de uma linha duplicada por pedido.
     *
     * @return list<array{source: string, source_key: string, name: string|null, email: string|null, phone: string, products: list<string>}>
     */
    public static function buyerContacts(int $tenantId): array
    {
        $byPhone = [];

        Order::query()
            ->where('tenant_id', $tenantId)
            ->whereNotNull('phone')
            ->with(['product:id,name', 'orderItems.product:id,name', 'user:id,name'])
            ->orderByDesc('id')
            ->get(['id', 'user_id', 'email', 'phone', 'metadata', 'product_id'])
            ->each(function (Order $order) use (&$byPhone): void {
                $phone = PhoneNumber::normalize($order->phone);
                if ($phone === null) {
                    return;
                }

                $metadata = is_array($order->metadata) ? $order->metadata : [];
                // A maioria dos fluxos de checkout não grava o nome em metadata;
                // ele vive em users.name via user_id.
                $name = $metadata['customer_name'] ?? $metadata['name'] ?? $order->user?->name ?? null;

                // order_items guarda o produto principal e os bumps/upsells do
                // pedido; product_id sozinho só cobre o principal.
                $products = [];
                if ($order->product?->name !== null) {
                    $products[] = $order->product->name;
                }
                foreach ($order->orderItems as $item) {
                    if ($item->product?->name !== null) {
                        $products[] = $item->product->name;
                    }
                }

                // Pedidos vêm do mais recente ao mais antigo: nome/e-mail só
                // são preenchidos por um pedido mais antigo se o mais recente
                // ainda não tiver essa informação.
                $byPhone[$phone] ??= [
                    'source' => 'buyer',
                    'source_key' => $phone,
                    'name' => $name,
                    'email' => $order->email,
                    'phone' => $phone,
                    'products' => [],
                ];
                $byPhone[$phone]['name'] ??= $name;
                $byPhone[$phone]['email'] = $byPhone[$phone]['email'] ?: $order->email;

                foreach ($products as $product) {
                    if (! in_array($product, $byPhone[$phone]['products'], true)) {
                        $byPhone[$phone]['products'][] = $product;
                    }
                }
            });

        return array_values($byPhone);
    }

    /**
     * Normaliza pedido, assinatura ou sessão de checkout no contexto de template.
     *
     * @return array<string, mixed>|null null quando não há tenant ou destinatário
     */
    public static function describe(object $subject): ?array
    {
        if (! $subject instanceof Model) {
            return null;
        }

        $tenantId = (int) ($subject->tenant_id ?? 0);
        if ($tenantId < 1) {
            return null;
        }

        $subject->loadMissing(array_values(array_filter([
            self::hasRelation($subject, 'product') ? 'product' : null,
            self::hasRelation($subject, 'user') ? 'user' : null,
            self::hasRelation($subject, 'subscriptionPlan') ? 'subscriptionPlan' : null,
            self::hasRelation($subject, 'productOffer') ? 'productOffer' : null,
        ])));

        $metadata = is_array($subject->metadata ?? null) ? $subject->metadata : [];
        $name = trim((string) (
            $metadata['customer_name']
            ?? $metadata['name']
            ?? $subject->name
            ?? $subject->user?->name
            ?? ''
        ));
        $parts = preg_split('/\s+/', $name) ?: [];

        $phone = PhoneNumber::normalize((string) ($subject->phone ?? '')) ?? self::phoneFromOrders($subject, $tenantId);
        $email = trim((string) ($subject->email ?? $subject->user?->email ?? ''));

        // Assinaturas e sessões de checkout não guardam o valor: ele vem do
        // plano ou da oferta vinculada.
        $priceSource = $subject->subscriptionPlan ?? $subject->productOffer ?? null;
        $currency = strtoupper(trim((string) (
            $subject->currency ?? $priceSource?->currency ?? 'BRL'
        ))) ?: 'BRL';
        $amount = (float) ($subject->amount ?? $priceSource?->price ?? 0);
        $product = $subject->product ?? null;

        return [
            'tenant_id' => $tenantId,
            'product_id' => $subject->product_id ?? null,
            // Usado por FlowEngine para reconsultar o status real do pedido em
            // blocos de "aguardar então verificar pagamento" — o status abaixo
            // fica congelado no momento em que o evento disparou.
            'subject_type' => self::subjectType($subject),
            'subject_id' => $subject->id ?? null,
            'phone' => $phone ?? '',
            'email' => $email,
            'name' => $name,
            'customer' => [
                'name' => $name,
                'first_name' => (string) ($parts[0] ?? ''),
                'last_name' => trim(implode(' ', array_slice($parts, 1))),
                'email' => $email,
                'phone' => $phone ?? '',
                'cpf' => (string) ($subject->cpf ?? ''),
            ],
            'order' => [
                'id' => $subject->id ?? null,
                'status' => (string) ($subject->status ?? ''),
                'amount' => $amount,
                'amount_formatted' => self::money($amount, $currency),
                'total_amount' => $amount,
                'total_amount_formatted' => self::money($amount, $currency),
                'currency' => $currency,
                'gateway' => (string) ($subject->gateway ?? ''),
                // pix/pix_auto/card/boleto/... — método real do checkout, não o slug do gateway.
                'payment_method' => $paymentMethod = method_exists($subject, 'checkoutPaymentMethod') ? (string) $subject->checkoutPaymentMethod() : '',
                'payment_method_label' => self::paymentMethodLabel($paymentMethod),
                'metadata' => $metadata,
                'product' => [
                    'id' => $product?->id,
                    'name' => (string) ($product?->name ?? ''),
                ],
            ],
            'product' => [
                'id' => $product?->id,
                'name' => (string) ($product?->name ?? ''),
            ],
            'checkout_link' => self::checkoutLink($subject, $product),
        ];
    }

    /**
     * Status atual do pedido, buscado no banco (não o congelado no contexto do
     * evento) — para condições avaliadas depois de um bloco de espera.
     *
     * Assinaturas não mapeiam para um pedido único neste ponto; para elas o
     * chamador deve usar o status já presente no contexto.
     */
    public static function currentOrderStatus(int $tenantId, string $subjectType, ?int $subjectId): ?string
    {
        if ($subjectId === null) {
            return null;
        }

        $orderId = match ($subjectType) {
            'order' => $subjectId,
            'checkout_session' => CheckoutSession::query()
                ->where('tenant_id', $tenantId)
                ->whereKey($subjectId)
                ->value('order_id'),
            default => null,
        };

        if (! is_int($orderId) && ! is_numeric($orderId)) {
            return null;
        }

        $status = Order::query()->where('tenant_id', $tenantId)->whereKey((int) $orderId)->value('status');

        return is_string($status) ? $status : null;
    }

    private static function subjectType(Model $subject): string
    {
        return match (true) {
            $subject instanceof Order => 'order',
            $subject instanceof Subscription => 'subscription',
            $subject instanceof CheckoutSession => 'checkout_session',
            default => 'unknown',
        };
    }

    /**
     * Assinaturas não guardam telefone; recupera do pedido mais recente do cliente.
     */
    private static function phoneFromOrders(Model $subject, int $tenantId): ?string
    {
        $userId = (int) ($subject->user_id ?? 0);
        if ($userId < 1) {
            return null;
        }

        $phone = Order::query()
            ->where('tenant_id', $tenantId)
            ->where('user_id', $userId)
            ->whereNotNull('phone')
            ->latest('id')
            ->value('phone');

        return PhoneNumber::normalize(is_string($phone) ? $phone : null);
    }

    private static function checkoutLink(Model $subject, ?object $product): string
    {
        $slug = trim((string) ($subject->checkout_slug ?? $product?->checkout_slug ?? ''));

        return $slug === '' ? '' : url('/c/'.$slug);
    }

    private static function hasRelation(Model $model, string $relation): bool
    {
        return method_exists($model, $relation);
    }

    private static function money(float $amount, string $currency): string
    {
        return $currency === 'BRL'
            ? 'R$ '.number_format($amount, 2, ',', '.')
            : $currency.' '.number_format($amount, 2, '.', ',');
    }

    public static function paymentMethodLabel(string $method): string
    {
        return match (strtolower(trim($method))) {
            'pix', 'pix_auto' => 'PIX',
            'card' => 'Cartão de crédito',
            'boleto' => 'Boleto bancário',
            'apple_pay' => 'Apple Pay',
            'google_pay' => 'Google Pay',
            'paypal' => 'PayPal',
            'crypto' => 'Criptomoeda',
            default => $method !== '' ? ucfirst($method) : 'PIX / Cartão',
        };
    }
}
