<?php

namespace Plugins\Zaprei\Services;

use Plugins\Zaprei\Contracts\WhatsappGateway;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Support\PhoneNumber;

/**
 * Envia um bloco de mensagem (os mesmos 12 tipos do editor de fluxo) pela
 * Evolution GO. Usado tanto pelo FlowEngine (bloco "Enviar mensagem" de um
 * fluxo) quanto pelas campanhas em massa — mesmo formato de `data`.
 */
final class MessageDispatcher
{
    public function __construct(private readonly TemplateRenderer $templates) {}

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    public function send(WhatsappGateway $gateway, array $data, array $context): void
    {
        $recipient = $this->resolveRecipient($data, $context);
        $mode = strtolower(trim((string) ($data['mode'] ?? 'text')));

        match (true) {
            in_array($mode, ['image', 'video', 'audio', 'document', 'media'], true) => $this->sendMedia($gateway, $recipient, $data, $context),
            $mode === 'sticker' => $this->sendSticker($gateway, $recipient, $data, $context),
            in_array($mode, ['buttons', 'interactive'], true) => $this->sendButtons($gateway, $recipient, $data, $context),
            $mode === 'list' => $this->sendList($gateway, $recipient, $data, $context),
            $mode === 'location' => $this->sendLocation($gateway, $recipient, $data, $context),
            $mode === 'contact' => $this->sendContact($gateway, $recipient, $data, $context),
            $mode === 'poll' => $this->sendPoll($gateway, $recipient, $data, $context),
            $mode === 'link' => $this->sendLink($gateway, $recipient, $data, $context),
            default => $this->sendText($gateway, $recipient, $data, $context),
        };
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendText(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $text = $this->templates->render((string) ($data['text'] ?? ''), $context);
        if (trim($text) === '') {
            throw new ZapreiException('Bloco de mensagem sem texto.');
        }
        $gateway->sendText($recipient, $text);
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendMedia(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $url = $this->templates->render((string) ($data['media_url'] ?? $data['url'] ?? ''), $context);
        if ($url === '') {
            throw new ZapreiException('Bloco de mídia sem arquivo selecionado.');
        }
        $caption = $this->templates->render((string) ($data['caption'] ?? $data['text'] ?? ''), $context);
        $gateway->sendMedia($recipient, $caption, $url, (string) ($data['mime_type'] ?? ''));
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendSticker(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $url = $this->templates->render((string) ($data['media_url'] ?? $data['url'] ?? ''), $context);
        if ($url === '') {
            throw new ZapreiException('Bloco de figurinha sem arquivo selecionado.');
        }
        $gateway->sendSticker($recipient, $url);
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendButtons(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        /** @var list<array<string, mixed>> $buttons */
        $buttons = (array) $this->templates->renderValue((array) ($data['buttons'] ?? []), $context);
        $gateway->sendButtons(
            $recipient,
            $this->templates->render((string) ($data['title'] ?? ''), $context),
            $this->templates->render((string) ($data['text'] ?? $data['description'] ?? ''), $context),
            $this->templates->render((string) ($data['footer'] ?? ''), $context),
            $buttons,
        );
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendList(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        /** @var list<array<string, mixed>> $sections */
        $sections = (array) $this->templates->renderValue((array) ($data['sections'] ?? []), $context);
        $gateway->sendList(
            $recipient,
            $this->templates->render((string) ($data['title'] ?? ''), $context),
            $this->templates->render((string) ($data['text'] ?? $data['description'] ?? ''), $context),
            $this->templates->render((string) ($data['footer'] ?? ''), $context),
            $this->templates->render((string) ($data['button_text'] ?? ''), $context),
            $sections,
        );
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendLocation(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $latitude = (float) $this->templates->render((string) ($data['latitude'] ?? ''), $context);
        $longitude = (float) $this->templates->render((string) ($data['longitude'] ?? ''), $context);
        if ($latitude === 0.0 && $longitude === 0.0) {
            throw new ZapreiException('Bloco de localização sem coordenadas.');
        }
        $gateway->sendLocation(
            $recipient,
            $latitude,
            $longitude,
            $this->templates->render((string) ($data['location_name'] ?? ''), $context),
            $this->templates->render((string) ($data['address'] ?? ''), $context),
        );
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendContact(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $fullName = $this->templates->render((string) ($data['contact_name'] ?? ''), $context);
        $phone = $this->templates->render((string) ($data['contact_phone'] ?? ''), $context);
        if ($fullName === '' || $phone === '') {
            throw new ZapreiException('Bloco de contato sem nome ou telefone.');
        }
        $gateway->sendContact($recipient, $fullName, $phone, $this->templates->render((string) ($data['organization'] ?? ''), $context));
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendPoll(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $question = $this->templates->render((string) ($data['question'] ?? ''), $context);
        $options = array_map(
            fn (string $option): string => $this->templates->render($option, $context),
            array_values(array_filter((array) ($data['options'] ?? []), 'is_string'))
        );
        $gateway->sendPoll($recipient, $question, $options, (int) ($data['max_answers'] ?? 1));
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function sendLink(WhatsappGateway $gateway, string $recipient, array $data, array $context): void
    {
        $url = $this->templates->render((string) ($data['url'] ?? ''), $context);
        if ($url === '') {
            throw new ZapreiException('Bloco de link sem URL.');
        }
        $gateway->sendLink(
            $recipient,
            $url,
            $this->templates->render((string) ($data['title'] ?? ''), $context),
            $this->templates->render((string) ($data['description'] ?? ''), $context),
            $this->templates->render((string) ($data['text'] ?? ''), $context),
            $this->templates->render((string) ($data['image_url'] ?? ''), $context),
        );
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     *
     * @throws ZapreiException
     */
    private function resolveRecipient(array $data, array $context): string
    {
        $recipientType = (string) ($data['recipient_type'] ?? 'customer');

        if ($recipientType === 'group') {
            // JID de grupo (ex.: 1203...@g.us) — não é um telefone, não normaliza.
            $group = trim($this->templates->render((string) ($data['group_id'] ?? ''), $context));
            if ($group === '') {
                throw new ZapreiException('Bloco de mensagem sem grupo selecionado.');
            }

            return $group;
        }

        $raw = $recipientType === 'custom'
            ? (string) ($data['custom_phone'] ?? '')
            : (string) ($context['phone'] ?? '');

        $phone = PhoneNumber::normalize($this->templates->render($raw, $context));
        if ($phone === null) {
            throw new ZapreiException('Destinatário sem telefone válido para o envio.');
        }

        return $phone;
    }
}
