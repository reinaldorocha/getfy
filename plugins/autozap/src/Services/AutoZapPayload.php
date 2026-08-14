<?php

namespace Plugins\AutoZap\Services;

use App\Events\BoletoGenerated;
use App\Events\CartAbandoned;
use App\Events\AccessDeliveryReady;
use App\Events\OrderCancelled;
use App\Events\OrderCompleted;
use App\Events\OrderPending;
use App\Events\OrderRefunded;
use App\Events\OrderRejected;
use App\Events\PixGenerated;
use App\Events\SubscriptionCancelled;
use App\Events\SubscriptionCreated;
use App\Events\SubscriptionPastDue;
use App\Events\SubscriptionRenewed;
use App\Models\Order;
use App\Models\Subscription;

class AutoZapPayload
{
    /**
     * Create a normalized payload for templates/conditions.
     *
     * @return array<string, mixed>
     */
    public static function fromEvent(object $event): array
    {
        $base = [
            'event_class' => $event::class,
            'customer' => [
                'name' => null,
                'first_name' => null,
                'email' => null,
                'phone' => null,
                'cpf' => null,
            ],
            'checkout_link' => null,
            'order' => null,
            'pix' => null,
            'boleto' => null,
            'access' => null,
        ];

        if ($event instanceof OrderPending || $event instanceof OrderCompleted
            || $event instanceof OrderRejected || $event instanceof OrderCancelled
            || $event instanceof OrderRefunded || $event instanceof PixGenerated
            || $event instanceof BoletoGenerated) {
            $order = null;
            if (isset($event->order?->id)) {
                $order = Order::with(['user', 'product', 'productOffer', 'subscriptionPlan'])->find($event->order->id);
            }
            $order = $order ?: $event->order;
            $order->loadMissing(['user', 'product', 'productOffer', 'subscriptionPlan']);

            $name = $order->user?->name ?: $order->name ?? '';
            $firstName = $name !== '' ? explode(' ', trim($name))[0] : '';
            $amountFormatted = 'R$ ' . number_format((float) ($order->amount ?? 0), 2, ',', '.');
            $paymentMethod = method_exists($order, 'checkoutPaymentMethod')
                ? $order->checkoutPaymentMethod()
                : (strtolower((string) ($order->metadata['checkout_payment_method'] ?? 'pix')));

            $orderArr = $order->toArray();
            $orderArr['total_amount_formatted'] = $amountFormatted;
            $orderArr['payment_method'] = $paymentMethod;
            $orderArr['is_paid'] = $order->status === 'completed';

            $base['order'] = $orderArr;
            $base['customer'] = [
                'name' => $name,
                'first_name' => $firstName,
                'email' => $order->email,
                // Fallback to user phone when available.
                'phone' => $order->phone ?: $order->user?->phone,
                'cpf' => $order->cpf,
            ];
            $base['checkout_link'] = method_exists($order, 'getCheckoutSlug') && $order->getCheckoutSlug()
                ? url('/c/' . $order->getCheckoutSlug())
                : null;

            // Extra metadata Pix / Boleto fallback
            if (! empty($order->metadata['pix']) && is_array($order->metadata['pix'])) {
                $base['pix'] = [
                    'qrcode' => $order->metadata['pix']['qrcode'] ?? $order->metadata['pix']['qr_code'] ?? null,
                    'copy_paste' => $order->metadata['pix']['copy_paste'] ?? $order->metadata['pix']['emv'] ?? $order->metadata['pix']['payload'] ?? null,
                    'transaction_id' => $order->metadata['pix']['transaction_id'] ?? null,
                ];
            }
            if (! empty($order->metadata['boleto']) && is_array($order->metadata['boleto'])) {
                $base['boleto'] = [
                    'amount' => $amountFormatted,
                    'expire_at' => $order->metadata['boleto']['expire_at'] ?? null,
                    'barcode' => $order->metadata['boleto']['barcode'] ?? $order->metadata['boleto']['digitable_line'] ?? null,
                    'pdf_url' => $order->metadata['boleto']['pdf_url'] ?? $order->metadata['boleto']['url'] ?? null,
                ];
            }
        }

        if ($event instanceof AccessDeliveryReady) {
            $order = null;
            if (isset($event->order?->id)) {
                $order = Order::with(['user', 'product', 'productOffer', 'subscriptionPlan'])->find($event->order->id);
            }
            $order = $order ?: $event->order;
            $order->loadMissing(['user', 'product', 'productOffer', 'subscriptionPlan']);

            $name = $order->user?->name ?: $order->name ?? '';
            $firstName = $name !== '' ? explode(' ', trim($name))[0] : '';
            $amountFormatted = 'R$ ' . number_format((float) ($order->amount ?? 0), 2, ',', '.');
            $paymentMethod = method_exists($order, 'checkoutPaymentMethod')
                ? $order->checkoutPaymentMethod()
                : (strtolower((string) ($order->metadata['checkout_payment_method'] ?? 'pix')));

            $orderArr = $order->toArray();
            $orderArr['total_amount_formatted'] = $amountFormatted;
            $orderArr['payment_method'] = $paymentMethod;
            $orderArr['is_paid'] = $order->status === 'completed';

            $base['order'] = $orderArr;
            $base['customer'] = [
                'name' => $name,
                'first_name' => $firstName,
                'email' => $order->email,
                'phone' => $order->phone ?: $order->user?->phone,
                'cpf' => $order->cpf,
            ];
            $base['checkout_link'] = method_exists($order, 'getCheckoutSlug') && $order->getCheckoutSlug()
                ? url('/c/' . $order->getCheckoutSlug())
                : null;
            $base['access'] = is_array($event->access) ? $event->access : [];
        }

        if ($event instanceof PixGenerated) {
            $base['pix'] = [
                'qrcode' => $event->pixData['qrcode'] ?? $event->pixData['qr_code'] ?? null,
                'copy_paste' => $event->pixData['copy_paste'] ?? $event->pixData['emv'] ?? $event->pixData['payload'] ?? null,
                'transaction_id' => $event->pixData['transaction_id'] ?? null,
            ];
        }

        if ($event instanceof BoletoGenerated) {
            $base['boleto'] = [
                'amount' => $event->boletoData['amount'] ?? null,
                'expire_at' => $event->boletoData['expire_at'] ?? null,
                'barcode' => $event->boletoData['barcode'] ?? $event->boletoData['digitable_line'] ?? null,
                'pdf_url' => $event->boletoData['pdf_url'] ?? $event->boletoData['url'] ?? null,
            ];
        }

        if ($event instanceof CartAbandoned) {
            $s = $event->checkoutSession;
            $s->loadMissing('product');
            $name = $s->name ?? '';
            $firstName = $name !== '' ? explode(' ', trim($name))[0] : '';
            $base['checkout_session'] = $s->toArray();
            $base['customer'] = [
                'name' => $name ?: null,
                'first_name' => $firstName ?: null,
                'email' => $s->email ?? null,
                'phone' => $s->phone ?? null,
                'cpf' => $s->cpf ?? null,
            ];
            $slug = $s->checkout_slug ?? $s->product?->checkout_slug ?? null;
            $base['checkout_link'] = $slug ? url('/c/' . $slug) : null;
        }

        if ($event instanceof SubscriptionCreated || $event instanceof SubscriptionRenewed
            || $event instanceof SubscriptionCancelled || $event instanceof SubscriptionPastDue) {
            $sub = null;
            if (isset($event->subscription?->id)) {
                $sub = Subscription::with(['user', 'product', 'subscriptionPlan'])->find($event->subscription->id);
            }
            $sub = $sub ?: $event->subscription;
            $sub->loadMissing(['user', 'product', 'subscriptionPlan']);

            $name = $sub->user?->name ?? '';
            $firstName = $name !== '' ? explode(' ', trim($name))[0] : '';
            $base['subscription'] = $sub->toArray();
            $base['customer'] = [
                'name' => $name ?: null,
                'first_name' => $firstName ?: null,
                'email' => $sub->user?->email,
                'phone' => $sub->user?->phone ?? null,
                'cpf' => $sub->user?->cpf ?? null,
            ];
            $slug = $sub->subscriptionPlan?->checkout_slug ?? $sub->product?->checkout_slug ?? null;
            $base['checkout_link'] = $slug ? url('/c/' . $slug) : null;
        }

        return $base;
    }

    /**
     * Resolve customer phone as digits (best-effort for WhatsApp).
     */
    public static function resolvePhone(array $payload): string
    {
        $raw = $payload['customer']['phone']
            ?? $payload['order']['phone']
            ?? $payload['order']['user']['phone']
            ?? $payload['checkout_session']['phone']
            ?? '';
        if (! is_string($raw)) return '';
        $digits = preg_replace('/\\D+/', '', $raw) ?: '';
        return $digits;
    }
}
