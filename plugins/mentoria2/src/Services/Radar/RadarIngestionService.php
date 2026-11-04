<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services\Radar;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\RadarSourceAdapterInterface;

final class RadarIngestionService
{
    /** @var array<string, RadarSourceAdapterInterface> */
    private array $adapters;

    public function __construct(
        private readonly PoliceCareerClassifier $classifier,
        private readonly RadarAiClassificationService $aiClassifier,
        QueridoDiarioSourceAdapter $queridoDiario,
    ) {
        $this->adapters = [$queridoDiario->key() => $queridoDiario];
    }

    /** @return array{sources:int,fetched:int,created:int,duplicates:int,candidates:int,errors:list<string>} */
    public function sync(?string $sourceId = null, bool $dryRun = false): array
    {
        if (! Schema::hasTable('mentoria2_radar_sources')) {
            throw new \RuntimeException('As tabelas do Radar ainda não foram migradas.');
        }

        $query = DB::table('mentoria2_radar_sources')->where('is_active', true);
        if ($sourceId !== null) $query->where('id', $sourceId);

        $summary = ['sources' => 0, 'fetched' => 0, 'created' => 0, 'duplicates' => 0, 'candidates' => 0, 'errors' => []];
        foreach ($query->get() as $source) {
            $summary['sources']++;
            try {
                $result = $this->syncSource($source, $dryRun);
                foreach (['fetched', 'created', 'duplicates', 'candidates'] as $field) $summary[$field] += $result[$field];
            } catch (\Throwable $e) {
                $summary['errors'][] = $source->label.': '.$e->getMessage();
            }
        }

        return $summary;
    }

    /** @return array{fetched:int,created:int,duplicates:int,candidates:int} */
    private function syncSource(object $source, bool $dryRun): array
    {
        $adapter = $this->adapters[$source->kind] ?? null;
        if ($adapter === null) throw new \RuntimeException('Não há adaptador registrado para a fonte '.$source->kind.'.');

        $runId = (string) Str::uuid();
        if (! $dryRun) {
            DB::table('mentoria2_radar_sync_runs')->insert([
                'id' => $runId, 'source_id' => $source->id, 'status' => 'running', 'started_at' => now(), 'created_at' => now(), 'updated_at' => now(),
            ]);
        }

        $count = ['fetched' => 0, 'created' => 0, 'duplicates' => 0, 'candidates' => 0];
        try {
            foreach ($adapter->fetch($source) as $publication) {
                $count['fetched']++;
                $result = $this->persistPublication($source, $publication, $dryRun);
                if ($result === 'created_candidate') {
                    $count['created']++;
                    $count['candidates']++;
                } else {
                    $count[$result]++;
                }
            }

            if (! $dryRun) {
                DB::table('mentoria2_radar_sources')->where('id', $source->id)->update([
                    'last_synced_at' => now(), 'last_status' => 'success', 'last_error' => null, 'updated_at' => now(),
                ]);
                $this->finishRun($runId, 'success', $count);
            }
        } catch (\Throwable $e) {
            if (! $dryRun) {
                DB::table('mentoria2_radar_sources')->where('id', $source->id)->update([
                    'last_status' => 'error', 'last_error' => Str::limit($e->getMessage(), 4000), 'updated_at' => now(),
                ]);
                $this->finishRun($runId, 'error', $count, $e->getMessage());
            }
            throw $e;
        }

        return $count;
    }

    /** @param array{external_id:?string,canonical_url:string,title:?string,published_at:?string,excerpt:?string,payload:array} $publication */
    private function persistPublication(object $source, array $publication, bool $dryRun): string
    {
        $text = trim((string) ($publication['title'] ?? '')."\n".(string) ($publication['excerpt'] ?? ''));
        $classification = $this->aiClassifier->enrich($source->tenant_id ? (int) $source->tenant_id : null, $text, $this->classifier->classify($text));
        $hash = hash('sha256', implode('|', [$publication['canonical_url'], (string) ($publication['external_id'] ?? ''), $text]));

        $existing = DB::table('mentoria2_radar_publications')
            ->where('source_id', $source->id)
            ->where(function ($query) use ($publication, $hash): void {
                $query->where('content_hash', $hash);
                if (! empty($publication['external_id'])) $query->orWhere('external_id', (string) $publication['external_id']);
            })
            ->exists();
        if ($existing) return 'duplicates';
        if ($dryRun) return $classification['is_candidate'] ? 'created_candidate' : 'created';

        $publicationId = (string) Str::uuid();
        DB::transaction(function () use ($source, $publication, $classification, $hash, $publicationId): void {
            DB::table('mentoria2_radar_publications')->insert([
                'id' => $publicationId,
                'source_id' => $source->id,
                'tenant_id' => $source->tenant_id,
                'external_id' => $publication['external_id'] ?? null,
                'canonical_url' => $publication['canonical_url'],
                'title' => $publication['title'] ?? null,
                'published_at' => $this->date($publication['published_at'] ?? null),
                'raw_excerpt' => $publication['excerpt'] ?? null,
                'raw_payload' => json_encode($publication['payload'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
                'content_hash' => $hash,
                'processing_status' => $classification['is_candidate'] ? 'classified' : 'discarded',
                'classification' => json_encode($classification, JSON_UNESCAPED_UNICODE),
                'classification_confidence' => $classification['confidence'],
                'fetched_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            if (! $classification['is_candidate']) return;

            $title = trim((string) ($publication['title'] ?? ''));
            if ($title === '') $title = 'Movimentação em carreira policial';
            DB::table('mentoria2_radar_contests')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $source->tenant_id,
                'source_publication_id' => $publicationId,
                'title' => $title,
                'organization' => $classification['reason'],
                'role' => null,
                'career_track' => $classification['career_track'],
                'career_family' => $classification['career_family'],
                'sphere' => 'indefinida',
                'status' => $classification['status'],
                'verification_status' => 'review_required',
                'origin_kind' => 'source',
                'source_label' => $source->label,
                'gazette_extract' => $publication['excerpt'] ?? null,
                'summary' => $classification['summary'] ?? null,
                'gazette_url' => $publication['canonical_url'],
                'published_at' => $this->date($publication['published_at'] ?? null),
                'last_source_at' => now(),
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        });

        return $classification['is_candidate'] ? 'created_candidate' : 'created';
    }

    /** @param array{fetched:int,created:int,duplicates:int,candidates:int} $count */
    private function finishRun(string $runId, string $status, array $count, ?string $error = null): void
    {
        DB::table('mentoria2_radar_sync_runs')->where('id', $runId)->update([
            'status' => $status,
            'fetched_count' => $count['fetched'],
            'created_count' => $count['created'],
            'duplicate_count' => $count['duplicates'],
            'candidate_count' => $count['candidates'],
            'error' => $error ? Str::limit($error, 4000) : null,
            'finished_at' => now(),
            'updated_at' => now(),
        ]);
    }

    private function date(?string $value): mixed
    {
        if ($value === null || trim($value) === '') return null;
        try {
            return \Illuminate\Support\Carbon::parse($value);
        } catch (\Throwable) {
            return null;
        }
    }
}
