<?php

namespace Plugins\Zaprei\Evolution;

use Plugins\Zaprei\Exceptions\ZapreiException;

/**
 * Credenciais da Evolution GO, normalizadas a partir do que foi salvo na conexão.
 */
final class EvolutionGoCredentials
{
    private function __construct(
        public readonly string $baseUrl,
        public readonly string $apiKey,
        public readonly string $instance,
        // Segredo próprio do ZapRei (não é credencial da Evolution GO) usado
        // para autenticar o webhook de mensagens recebidas — ver
        // InboundWebhookController. Gerado automaticamente, nunca digitado
        // pelo usuário.
        public readonly string $webhookSecret,
    ) {}

    /**
     * Aceita as chaves gravadas pelo painel e os apelidos herdados de instalações antigas.
     *
     * @param  array<string, mixed>  $credentials
     */
    public static function fromArray(array $credentials): self
    {
        return new self(
            baseUrl: rtrim(trim((string) ($credentials['base_url'] ?? '')), '/'),
            apiKey: trim((string) ($credentials['api_key'] ?? $credentials['apikey'] ?? $credentials['token'] ?? '')),
            instance: trim((string) ($credentials['instance'] ?? '')),
            webhookSecret: trim((string) ($credentials['webhook_secret'] ?? '')),
        );
    }

    public function isComplete(): bool
    {
        return $this->baseUrl !== '' && $this->apiKey !== '' && $this->instance !== '';
    }

    /**
     * @throws ZapreiException
     */
    public function assertComplete(): void
    {
        if (! $this->isComplete()) {
            throw ZapreiException::missingCredentials();
        }
    }

    public function url(string $path): string
    {
        return $this->baseUrl.'/'.ltrim($path, '/');
    }

    public function encodedInstance(): string
    {
        return rawurlencode($this->instance);
    }

    /**
     * Representação sem a API key da Evolution GO — segura para devolver ao
     * frontend. `webhook_secret` sai daqui de propósito: é o dono da conexão
     * quem precisa dele para configurar o webhook, não é segredo dele mesmo.
     *
     * @return array{base_url: string, instance: string, has_api_key: bool, webhook_secret: string}
     */
    public function toSafeArray(): array
    {
        return [
            'base_url' => $this->baseUrl,
            'instance' => $this->instance,
            'has_api_key' => $this->apiKey !== '',
            'webhook_secret' => $this->webhookSecret,
        ];
    }

    /**
     * Forma canônica usada para persistir e para mesclar atualizações parciais.
     *
     * @return array{base_url: string, api_key: string, instance: string, webhook_secret: string}
     */
    public function toMergeableArray(): array
    {
        return [
            'base_url' => $this->baseUrl,
            'api_key' => $this->apiKey,
            'instance' => $this->instance,
            'webhook_secret' => $this->webhookSecret,
        ];
    }
}
