<?php

namespace Plugins\Zaprei\Services;

use JsonException;
use Plugins\Zaprei\Evolution\EvolutionGoCredentials;
use Plugins\Zaprei\Zaprei;

/**
 * Estado da conexão Evolution GO de um tenant.
 */
final class ConnectionState
{
    public function __construct(
        public readonly EvolutionGoCredentials $credentials,
        public readonly bool $isActive,
    ) {}

    public static function empty(): self
    {
        return new self(EvolutionGoCredentials::fromArray([]), false);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public static function fromArray(array $data): self
    {
        return new self(
            EvolutionGoCredentials::fromArray(is_array($data['credentials'] ?? null) ? $data['credentials'] : []),
            (bool) ($data['active'] ?? false),
        );
    }

    public function isReady(): bool
    {
        return $this->isActive && $this->credentials->isComplete();
    }

    /**
     * @throws JsonException
     */
    public function toEncryptedPayload(): string
    {
        return json_encode([
            'provider' => Zaprei::PROVIDER,
            'active' => $this->isActive,
            'credentials' => $this->credentials->toMergeableArray(),
        ], JSON_THROW_ON_ERROR);
    }

    /**
     * Resumo seguro para o painel: nunca inclui a API key.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            'provider' => Zaprei::PROVIDER,
            'is_active' => $this->isActive,
            'connected' => $this->isReady(),
            'has_credentials' => $this->credentials->isComplete(),
            'credentials' => $this->credentials->toSafeArray(),
        ];
    }
}
