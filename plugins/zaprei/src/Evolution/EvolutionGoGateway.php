<?php

namespace Plugins\Zaprei\Evolution;

use Plugins\Zaprei\Contracts\WhatsappGateway;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Services\MediaResolver;
use Throwable;

/**
 * Único gateway do ZapRei: Evolution GO (evo-go).
 *
 * Os endpoints e formatos de payload seguem o Swagger publicado pela própria
 * instância (/swagger/index.html) — não há seleção de instância no corpo das
 * chamadas de /send/*: a API key já identifica a instância de destino.
 */
final class EvolutionGoGateway implements WhatsappGateway
{
    public function __construct(
        private readonly EvolutionGoCredentials $credentials,
        private readonly EvolutionGoClient $client,
        private readonly EvolutionGoPayload $payload,
        private readonly MediaResolver $media,
    ) {}

    public function verify(): void
    {
        $this->credentials->assertComplete();

        $lastFailure = '';
        foreach ($this->statusEndpoints() as $endpoint) {
            try {
                $response = $this->client->probe($endpoint);
            } catch (Throwable $e) {
                $lastFailure = $e->getMessage();

                continue;
            }

            if (in_array($response->status(), [401, 403], true)) {
                throw ZapreiException::unauthorized();
            }

            if (! $response->successful()) {
                $lastFailure = 'HTTP '.$response->status();

                continue;
            }

            $body = $response->json();
            if ($this->isExplicitlyDisconnected($body)) {
                throw ZapreiException::disconnected();
            }

            return;
        }

        throw ZapreiException::unreachable($lastFailure !== '' ? $lastFailure : 'sem resposta');
    }

    public function sendText(string $to, string $text): array
    {
        return $this->client->post('/send/text', $this->payload->text($to, $text));
    }

    public function sendMedia(string $to, string $caption, string $url, string $mimeType = ''): array
    {
        $media = $this->media->resolve($url, $mimeType);

        return $this->client->post('/send/media', $this->payload->media($to, $caption, $media));
    }

    public function sendSticker(string $to, string $url): array
    {
        $media = $this->media->resolve($url, 'image/webp');

        return $this->client->post('/send/sticker', $this->payload->sticker($to, $media));
    }

    public function sendButtons(string $to, string $title, string $description, string $footer, array $buttons): array
    {
        return $this->client->post('/send/button', $this->payload->buttons($to, $title, $description, $footer, $buttons));
    }

    public function sendList(string $to, string $title, string $description, string $footerText, string $buttonText, array $sections): array
    {
        return $this->client->post('/send/list', $this->payload->list($to, $title, $description, $footerText, $buttonText, $sections));
    }

    public function sendLocation(string $to, float $latitude, float $longitude, string $name = '', string $address = ''): array
    {
        return $this->client->post('/send/location', $this->payload->location($to, $latitude, $longitude, $name, $address));
    }

    public function sendContact(string $to, string $fullName, string $phone, string $organization = ''): array
    {
        return $this->client->post('/send/contact', $this->payload->contact($to, $fullName, $phone, $organization));
    }

    public function sendPoll(string $to, string $question, array $options, int $maxAnswers = 1): array
    {
        return $this->client->post('/send/poll', $this->payload->poll($to, $question, $options, $maxAnswers));
    }

    public function sendLink(string $to, string $url, string $title = '', string $description = '', string $text = '', string $imageUrl = ''): array
    {
        return $this->client->post('/send/link', $this->payload->link($to, $url, $title, $description, $text, $imageUrl));
    }

    public function listGroups(): array
    {
        $body = $this->client->getJson('/group/list');
        $raw = $this->groupsFromResponse($body);

        $groups = [];
        foreach ($raw as $group) {
            if (! is_array($group)) {
                continue;
            }
            $id = (string) ($group['JID'] ?? $group['Jid'] ?? $group['jid'] ?? $group['id'] ?? '');
            $name = (string) ($group['Name'] ?? $group['name'] ?? $group['Subject'] ?? $group['subject'] ?? '');
            if ($id === '') {
                continue;
            }
            $groups[] = ['id' => $id, 'name' => $name !== '' ? $name : $id];
        }

        return $groups;
    }

    /**
     * A Evolution GO devolve a lista em formatos que variam por versão
     * (array direto, ou envelopada em `data`/`groups`/`result`).
     *
     * @param  array<string, mixed>  $body
     * @return list<mixed>
     */
    private function groupsFromResponse(array $body): array
    {
        foreach ([$body, $body['data'] ?? null, $body['groups'] ?? null, $body['result'] ?? null] as $candidate) {
            if (is_array($candidate) && $candidate !== [] && array_is_list($candidate)) {
                return $candidate;
            }
        }

        return [];
    }

    /**
     * Só trata como desconectado quando o campo existe e é explicitamente
     * falso — nunca bloqueia por causa de um formato de resposta inesperado.
     *
     * @param  mixed  $body
     */
    private function isExplicitlyDisconnected(mixed $body): bool
    {
        if (! is_array($body)) {
            return false;
        }
        $data = is_array($body['data'] ?? null) ? $body['data'] : $body;
        foreach (['Connected', 'connected', 'IsConnected', 'isConnected'] as $key) {
            if (array_key_exists($key, $data)) {
                return $data[$key] === false;
            }
        }

        return false;
    }

    /**
     * Rotas de status conhecidas da Evolution GO; a primeira que responder define o resultado.
     * `/instance/status` não recebe identificador — a API key já resolve a instância.
     *
     * @return list<string>
     */
    private function statusEndpoints(): array
    {
        return [
            '/instance/status',
            '/instance/info/'.$this->credentials->encodedInstance(),
        ];
    }
}
