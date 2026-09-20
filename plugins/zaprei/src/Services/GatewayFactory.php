<?php

namespace Plugins\Zaprei\Services;

use Plugins\Zaprei\Contracts\WhatsappGateway;
use Plugins\Zaprei\Evolution\EvolutionGoClient;
use Plugins\Zaprei\Evolution\EvolutionGoGateway;
use Plugins\Zaprei\Evolution\EvolutionGoPayload;
use Plugins\Zaprei\Exceptions\ZapreiException;

/**
 * Monta o gateway Evolution GO a partir da conexão do tenant.
 */
final class GatewayFactory
{
    public function __construct(
        private readonly ConnectionRepository $connections,
        private readonly MediaResolver $media,
    ) {}

    /**
     * Gateway pronto para disparar (exige conexão ativa e completa).
     *
     * @throws ZapreiException
     */
    public function forTenant(int $tenantId): WhatsappGateway
    {
        $state = $this->connections->get($tenantId);
        if (! $state->credentials->isComplete()) {
            throw ZapreiException::notConfigured();
        }
        if (! $state->isActive) {
            throw ZapreiException::inactive();
        }

        return $this->build($state);
    }

    /**
     * Gateway para o botão "Testar conexão": vale mesmo com a conexão desativada.
     *
     * @throws ZapreiException
     */
    public function forVerification(int $tenantId): WhatsappGateway
    {
        $state = $this->connections->get($tenantId);
        if (! $state->credentials->isComplete()) {
            throw ZapreiException::missingCredentials();
        }

        return $this->build($state);
    }

    private function build(ConnectionState $state): WhatsappGateway
    {
        return new EvolutionGoGateway(
            $state->credentials,
            new EvolutionGoClient($state->credentials),
            new EvolutionGoPayload,
            $this->media,
        );
    }
}
