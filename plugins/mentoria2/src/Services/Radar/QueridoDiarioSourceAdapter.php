<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services\Radar;

use Illuminate\Support\Facades\Http;
use Plugins\Mentoria2\Contracts\RadarSourceAdapterInterface;

final class QueridoDiarioSourceAdapter implements RadarSourceAdapterInterface
{
    public function key(): string
    {
        return 'querido_diario';
    }

    public function fetch(object $source): iterable
    {
        $settings = $this->decode($source->settings ?? null);
        $territories = array_values(array_filter($this->decode($source->territories ?? null), 'is_scalar'));
        $query = trim((string) ($settings['query'] ?? 'concurso'));
        $pageSize = min(max((int) ($settings['page_size'] ?? 50), 1), 100);
        $maxPages = min(max((int) ($settings['max_pages'] ?? 1), 1), 10);

        if ($territories === []) {
            throw new \RuntimeException('A fonte Querido Diário precisa de ao menos um território IBGE configurado.');
        }

        $baseUrl = rtrim((string) ($source->api_base_url ?: 'https://api.queridodiario.ok.org.br'), '/');
        foreach ($territories as $territory) {
            for ($page = 0; $page < $maxPages; $page++) {
                $response = Http::acceptJson()->timeout(20)->retry(2, 400)->get($baseUrl.'/gazettes', [
                    'territory_ids' => (string) $territory,
                    'querystring' => $query,
                    'size' => $pageSize,
                    'offset' => $page * $pageSize,
                ]);

                $response->throw();
                $body = $response->json();
                $rows = $body['gazettes'] ?? $body['data'] ?? $body['results'] ?? [];
                if (! is_array($rows) || $rows === []) {
                    break;
                }

                foreach ($rows as $row) {
                    if (! is_array($row)) continue;
                    $url = (string) ($row['url'] ?? $row['source_url'] ?? $row['url_document'] ?? '');
                    if ($url === '') continue;

                    yield [
                        'external_id' => isset($row['id']) ? (string) $row['id'] : (isset($row['edition_id']) ? (string) $row['edition_id'] : null),
                        'canonical_url' => $url,
                        'title' => isset($row['territory_name']) ? 'Diário Oficial — '.$row['territory_name'] : null,
                        'published_at' => $row['date'] ?? $row['published_at'] ?? null,
                        'excerpt' => (string) ($row['excerpt'] ?? $row['text'] ?? ''),
                        'payload' => $row,
                    ];
                }

                if (count($rows) < $pageSize) break;
            }
        }
    }

    /** @return array<mixed> */
    private function decode(mixed $value): array
    {
        if (is_array($value)) return $value;
        if (! is_string($value) || trim($value) === '') return [];
        $decoded = json_decode($value, true);

        return is_array($decoded) ? $decoded : [];
    }
}
