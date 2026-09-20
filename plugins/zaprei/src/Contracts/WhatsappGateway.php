<?php

namespace Plugins\Zaprei\Contracts;

use Plugins\Zaprei\Exceptions\ZapreiException;

/**
 * Superfície usada pelo motor de fluxos e pelas campanhas.
 *
 * Implementação única: Evolution GO (Plugins\Zaprei\Evolution\EvolutionGoGateway),
 * espelhando os endpoints reais de /send/* documentados no Swagger da instância.
 */
interface WhatsappGateway
{
    /**
     * Valida credenciais e estado da instância.
     *
     * @throws ZapreiException quando a instância não responde ou não está conectada
     */
    public function verify(): void;

    /** @return array<string, mixed> */
    public function sendText(string $to, string $text): array;

    /** @return array<string, mixed> */
    public function sendMedia(string $to, string $caption, string $url, string $mimeType = ''): array;

    /** @return array<string, mixed> */
    public function sendSticker(string $to, string $url): array;

    /**
     * @param  list<array<string, mixed>>  $buttons
     * @return array<string, mixed>
     */
    public function sendButtons(string $to, string $title, string $description, string $footer, array $buttons): array;

    /**
     * @param  list<array<string, mixed>>  $sections
     * @return array<string, mixed>
     */
    public function sendList(string $to, string $title, string $description, string $footerText, string $buttonText, array $sections): array;

    /** @return array<string, mixed> */
    public function sendLocation(string $to, float $latitude, float $longitude, string $name = '', string $address = ''): array;

    /** @return array<string, mixed> */
    public function sendContact(string $to, string $fullName, string $phone, string $organization = ''): array;

    /**
     * @param  list<string>  $options
     * @return array<string, mixed>
     */
    public function sendPoll(string $to, string $question, array $options, int $maxAnswers = 1): array;

    /** @return array<string, mixed> */
    public function sendLink(string $to, string $url, string $title = '', string $description = '', string $text = '', string $imageUrl = ''): array;

    /**
     * Grupos do WhatsApp visíveis para a instância conectada.
     *
     * @return list<array{id: string, name: string}>
     */
    public function listGroups(): array;
}
