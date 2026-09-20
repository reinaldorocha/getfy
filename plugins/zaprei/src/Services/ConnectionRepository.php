<?php

namespace Plugins\Zaprei\Services;

use App\PluginSdk\Getfy;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;
use JsonException;
use Plugins\Zaprei\Evolution\EvolutionGoCredentials;
use Plugins\Zaprei\Zaprei;
use Throwable;

/**
 * Conexão Evolution GO por tenant, guardada cifrada no JSON do plugin.
 *
 * As credenciais nunca saem daqui em texto puro: o painel só recebe o resumo
 * de ConnectionState::toArray().
 */
final class ConnectionRepository
{
    public function get(int $tenantId): ConnectionState
    {
        $stored = Getfy::config()->get(Zaprei::SLUG, [])['tenants'][(string) $tenantId] ?? null;
        if (! is_string($stored) || $stored === '') {
            return ConnectionState::empty();
        }

        try {
            $decoded = json_decode(Crypt::decryptString($stored), true, 512, JSON_THROW_ON_ERROR);
        } catch (Throwable) {
            // Payload ilegível (chave da app rotacionada, por exemplo): trate como não configurado.
            return ConnectionState::empty();
        }

        return ConnectionState::fromArray(is_array($decoded) ? $decoded : []);
    }

    /**
     * @param  array<string, mixed>  $credentials
     *
     * @throws JsonException
     */
    public function put(int $tenantId, array $credentials, bool $isActive): ConnectionState
    {
        $state = new ConnectionState(EvolutionGoCredentials::fromArray($credentials), $isActive);

        $config = Getfy::config()->get(Zaprei::SLUG, []);
        $config['tenants'][(string) $tenantId] = Crypt::encryptString($state->toEncryptedPayload());
        Getfy::config()->set(Zaprei::SLUG, $config);

        return $state;
    }

    /**
     * Mescla o que veio do formulário com o que já estava salvo, para que campos
     * de segredo em branco não apaguem a credencial existente.
     *
     * @param  array<string, mixed>  $credentials
     *
     * @throws JsonException
     */
    public function merge(int $tenantId, array $credentials, bool $isActive): ConnectionState
    {
        $currentArray = $this->get($tenantId)->credentials->toMergeableArray();
        // Segredo do webhook de resposta: gerado uma única vez, nunca vem do
        // formulário (não há campo pra digitar) — só existe pra sobreviver ao
        // merge abaixo.
        if ($currentArray['webhook_secret'] === '') {
            $currentArray['webhook_secret'] = Str::random(40);
        }

        $incoming = array_filter(
            EvolutionGoCredentials::fromArray($credentials)->toMergeableArray(),
            static fn (string $value): bool => $value !== ''
        );

        return $this->put($tenantId, array_replace($currentArray, $incoming), $isActive);
    }

    /** Conexão ativa e com credenciais completas — usada pelo badge de Integrações. */
    public function isReady(int $tenantId): bool
    {
        return $this->get($tenantId)->isReady();
    }
}
