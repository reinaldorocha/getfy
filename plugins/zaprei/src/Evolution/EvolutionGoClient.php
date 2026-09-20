<?php

namespace Plugins\Zaprei\Evolution;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;
use Plugins\Zaprei\Exceptions\ZapreiException;

/**
 * Transporte HTTP da Evolution GO.
 *
 * Só conhece requisição, autenticação e leitura de erro; a montagem de payload
 * fica em EvolutionGoPayload e as regras de negócio em EvolutionGoGateway.
 */
final class EvolutionGoClient
{
    private const CONNECT_TIMEOUT_SECONDS = 5;

    private const REQUEST_TIMEOUT_SECONDS = 30;

    public function __construct(private readonly EvolutionGoCredentials $credentials) {}

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     *
     * @throws ZapreiException
     */
    public function post(string $path, array $payload): array
    {
        return $this->decode($this->request()->post($this->credentials->url($path), $payload));
    }

    /**
     * Consulta que não lança: devolve a resposta crua para quem precisa inspecionar o status.
     */
    public function probe(string $path): Response
    {
        return $this->request()->get($this->credentials->url($path));
    }

    /**
     * GET decodificado (ex.: /group/list) — mesma checagem de erro do post().
     *
     * @return array<string, mixed>
     *
     * @throws ZapreiException
     */
    public function getJson(string $path): array
    {
        return $this->decode($this->request()->get($this->credentials->url($path)));
    }

    private function request(): PendingRequest
    {
        $apiKey = $this->credentials->apiKey;

        return Http::timeout(self::REQUEST_TIMEOUT_SECONDS)
            ->connectTimeout(self::CONNECT_TIMEOUT_SECONDS)
            ->withHeaders([
                // Builds diferentes da Evolution GO leem a chave em cabeçalhos distintos.
                'apikey' => $apiKey,
                'Authorization' => 'Bearer '.$apiKey,
                'Accept' => 'application/json',
            ]);
    }

    /**
     * A Evolution GO devolve HTTP 200 com `success: false` em parte das falhas,
     * então o corpo precisa ser inspecionado mesmo quando o status é bem-sucedido.
     *
     * @return array<string, mixed>
     *
     * @throws ZapreiException
     */
    private function decode(Response $response): array
    {
        $body = $response->json();
        $data = is_array($body) ? $body : [];

        if (in_array($response->status(), [401, 403], true)) {
            throw ZapreiException::unauthorized();
        }

        $error = $this->errorMessage($data);
        if (! $response->successful() || ($data['success'] ?? true) === false || $error !== '') {
            throw ZapreiException::rejected($error !== '' ? $error : 'HTTP '.$response->status());
        }

        return $data;
    }

    /**
     * @param  array<string, mixed>  $data
     */
    private function errorMessage(array $data): string
    {
        foreach (['error', 'message_error', 'error_message'] as $key) {
            $value = $data[$key] ?? null;
            if (is_string($value) && trim($value) !== '') {
                return trim($value);
            }
        }

        return '';
    }
}
