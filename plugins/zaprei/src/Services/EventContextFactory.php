<?php

namespace Plugins\Zaprei\Services;

use Plugins\Zaprei\Support\OrderReader;

/**
 * Traduz os eventos do core no contexto que alimenta os templates de mensagem.
 *
 * O evento pode trazer um pedido (vendas, PIX, boleto, acesso), uma assinatura
 * ou uma sessão de checkout (carrinho abandonado); as três formas convergem para
 * as mesmas chaves: customer.*, order.*, product.* e event_class.
 */
final class EventContextFactory
{
    /**
     * @return array<string, mixed>|null null quando o evento não tem destinatário
     */
    public function from(object $event): ?array
    {
        $subject = $this->subjectOf($event);
        if ($subject === null) {
            return null;
        }

        $context = OrderReader::describe($subject);
        if ($context === null) {
            return null;
        }

        $context['event_class'] = $event::class;
        $context['pix'] = $this->arrayProperty($event, 'pixData');
        $context['boleto'] = $this->arrayProperty($event, 'boletoData');
        $context['access'] = $this->arrayProperty($event, 'access');

        return $context;
    }

    /**
     * @return object|null entidade que carrega cliente e produto
     */
    private function subjectOf(object $event): ?object
    {
        foreach (['order', 'subscription', 'checkoutSession'] as $property) {
            $value = $event->{$property} ?? null;
            if (is_object($value)) {
                return $value;
            }
        }

        return null;
    }

    /**
     * @return array<string, mixed>
     */
    private function arrayProperty(object $event, string $property): array
    {
        $value = $event->{$property} ?? null;

        return is_array($value) ? $value : [];
    }
}
