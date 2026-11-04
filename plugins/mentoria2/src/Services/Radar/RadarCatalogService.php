<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services\Radar;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

final class RadarCatalogService
{
    /** @return array{items:list<array<string,mixed>>,meta:array<string,int>,filters:array<string,mixed>} */
    public function published(int $tenantId, array $filters = [], ?int $studentId = null): array
    {
        if (! $this->ready()) return $this->emptyPage();
        $limit = min(max((int) ($filters['limit'] ?? 24), 1), 100);
        $page = max((int) ($filters['page'] ?? 1), 1);
        $query = DB::table('mentoria2_radar_contests')->where('is_active', true)->where('verification_status', 'published')
            ->where(fn ($q) => $q->whereNull('tenant_id')->orWhere('tenant_id', $tenantId));

        foreach (['sphere', 'state', 'status', 'career_track', 'career_family'] as $field) {
            if (! empty($filters[$field])) $query->where($field, $filters[$field]);
        }
        if (! empty($filters['search'])) {
            $search = trim((string) $filters['search']);
            $query->where(fn ($q) => $q->where('title', 'like', "%{$search}%")->orWhere('organization', 'like', "%{$search}%")->orWhere('role', 'like', "%{$search}%")->orWhere('board', 'like', "%{$search}%"));
        }
        $total = (clone $query)->count();
        $rows = $query->orderByDesc('is_featured')->orderByDesc('published_at')->orderByDesc('last_source_at')->forPage($page, $limit)->get();
        $following = $studentId && Schema::hasTable('mentoria2_radar_follows')
            ? DB::table('mentoria2_radar_follows')->where('tenant_id', $tenantId)->where('student_id', $studentId)->whereIn('radar_contest_id', $rows->pluck('id'))->pluck('radar_contest_id')->map(fn ($id) => (string) $id)->all()
            : [];
        $items = $rows->map(function (object $item) use ($following): array {
            $serialized = $this->item($item);
            $serialized['is_following'] = in_array((string) $item->id, $following, true);
            return $serialized;
        })->all();

        return ['items' => $items, 'meta' => ['page' => $page, 'limit' => $limit, 'total' => $total, 'last_page' => max((int) ceil($total / $limit), 1)], 'filters' => ['tracks' => PoliceCareerClassifier::tracks()]];
    }

    /** @return array<string,mixed>|null */
    public function findPublished(int $tenantId, string $id): ?array
    {
        if (! $this->ready()) return null;
        $item = DB::table('mentoria2_radar_contests')->where('id', $id)->where('is_active', true)->where('verification_status', 'published')
            ->where(fn ($q) => $q->whereNull('tenant_id')->orWhere('tenant_id', $tenantId))->first();
        return $item ? $this->item($item) : null;
    }

    /** @return list<array<string,mixed>> */
    public function sources(int $tenantId): array
    {
        if (! Schema::hasTable('mentoria2_radar_sources')) return [];
        return DB::table('mentoria2_radar_sources')->where('tenant_id', $tenantId)->orderBy('label')->get()->map(fn (object $source): array => $this->source($source))->all();
    }

    /** @return array<string,mixed> */
    public function createSource(int $tenantId, array $data): array
    {
        $kind = (string) $data['kind'];
        if (! in_array($kind, ['querido_diario', 'official_gazette', 'board', 'manual'], true)) throw new \InvalidArgumentException('Tipo de fonte inválido.');
        $territories = array_values(array_unique(array_filter($data['territories'] ?? [], 'is_scalar')));
        if ($kind === 'querido_diario' && $territories === []) throw new \InvalidArgumentException('Informe ao menos um código IBGE para a fonte Querido Diário.');
        $id = (string) Str::uuid();
        DB::table('mentoria2_radar_sources')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'code' => Str::slug((string) ($data['code'] ?? $data['label'])), 'label' => trim((string) $data['label']),
            'kind' => $kind, 'origin_url' => $data['origin_url'] ?? null, 'api_base_url' => $data['api_base_url'] ?? null,
            'territories' => json_encode($territories), 'career_tracks' => json_encode($data['career_tracks'] ?? array_keys(PoliceCareerClassifier::tracks())),
            'settings' => json_encode($data['settings'] ?? []), 'is_active' => (bool) ($data['is_active'] ?? false), 'created_at' => now(), 'updated_at' => now(),
        ]);
        return $this->source(DB::table('mentoria2_radar_sources')->where('id', $id)->first());
    }

    /** @return list<array<string,mixed>> */
    public function reviewQueue(int $tenantId): array
    {
        if (! $this->ready()) return [];
        return DB::table('mentoria2_radar_contests as contest')->leftJoin('mentoria2_radar_publications as publication', 'publication.id', '=', 'contest.source_publication_id')
            ->leftJoin('mentoria2_radar_sources as source', 'source.id', '=', 'publication.source_id')->where('contest.tenant_id', $tenantId)->where('contest.verification_status', 'review_required')
            ->orderByDesc('contest.last_source_at')->select('contest.*', 'publication.classification_confidence', 'publication.raw_excerpt', 'source.label as resolved_source_label')->get()
            ->map(function (object $row): array { $item = $this->item($row); $item['classification_confidence'] = $row->classification_confidence === null ? null : (float) $row->classification_confidence; $item['raw_excerpt'] = $row->raw_excerpt; return $item; })->all();
    }

    /** @return array<string,mixed> */
    public function decide(int $tenantId, int $mentorId, string $contestId, string $decision, ?string $note): array
    {
        if (! in_array($decision, ['published', 'review_required', 'rejected', 'archived'], true)) throw new \InvalidArgumentException('Decisão de curadoria inválida.');
        $contest = DB::table('mentoria2_radar_contests')->where('tenant_id', $tenantId)->where('id', $contestId)->first();
        if (! $contest) throw new \RuntimeException('Oportunidade não encontrada para esta mentoria.');
        if ($decision === 'published' && ! $contest->source_publication_id && empty($contest->gazette_url) && empty($contest->edital_url)) throw new \InvalidArgumentException('Uma oportunidade pública exige documento ou link de origem.');
        DB::transaction(function () use ($tenantId, $mentorId, $contestId, $decision, $note): void {
            DB::table('mentoria2_radar_contests')->where('id', $contestId)->update(['verification_status' => $decision, 'verified_by' => $mentorId, 'verified_at' => $decision === 'published' ? now() : null, 'updated_at' => now()]);
            DB::table('mentoria2_radar_review_decisions')->insert(['id' => (string) Str::uuid(), 'radar_contest_id' => $contestId, 'tenant_id' => $tenantId, 'reviewed_by' => $mentorId, 'decision' => $decision, 'note' => $note, 'created_at' => now()]);
        });
        return $this->item(DB::table('mentoria2_radar_contests')->where('id', $contestId)->first());
    }

    public function follow(int $tenantId, int $studentId, string $contestId, bool $notifications): void
    {
        if ($this->findPublished($tenantId, $contestId) === null) abort(404);
        DB::table('mentoria2_radar_follows')->updateOrInsert(['tenant_id' => $tenantId, 'student_id' => $studentId, 'radar_contest_id' => $contestId], ['id' => (string) Str::uuid(), 'notifications_enabled' => $notifications, 'created_at' => now(), 'updated_at' => now()]);
    }

    public function unfollow(int $tenantId, int $studentId, string $contestId): void
    {
        DB::table('mentoria2_radar_follows')->where(['tenant_id' => $tenantId, 'student_id' => $studentId, 'radar_contest_id' => $contestId])->delete();
    }

    private function ready(): bool { return Schema::hasTable('mentoria2_radar_contests') && Schema::hasColumn('mentoria2_radar_contests', 'verification_status'); }
    /** @return array{items:list<array<string,mixed>>,meta:array<string,int>,filters:array<string,mixed>} */
    private function emptyPage(): array { return ['items' => [], 'meta' => ['page' => 1, 'limit' => 24, 'total' => 0, 'last_page' => 1], 'filters' => ['tracks' => PoliceCareerClassifier::tracks()]]; }
    /** @return array<string,mixed> */
    private function source(object $s): array { return ['id' => $s->id, 'code' => $s->code, 'label' => $s->label, 'kind' => $s->kind, 'origin_url' => $s->origin_url, 'territories' => $this->decode($s->territories), 'career_tracks' => $this->decode($s->career_tracks), 'settings' => $this->decode($s->settings), 'is_active' => (bool) $s->is_active, 'last_synced_at' => $s->last_synced_at, 'last_status' => $s->last_status, 'last_error' => $s->last_error]; }
    /** @return array<string,mixed> */
    private function item(object $r): array { return ['id' => $r->id, 'title' => $r->title, 'organization' => $r->organization, 'board' => $r->board, 'role' => $r->role, 'salary' => $r->salary === null ? null : (float) $r->salary, 'vacancies' => $r->vacancies === null ? null : (int) $r->vacancies, 'sphere' => $r->sphere, 'state' => $r->state, 'status' => $r->status, 'career_track' => $r->career_track, 'career_family' => $r->career_family, 'summary' => $r->summary ?: $r->gazette_extract, 'gazette_extract' => $r->gazette_extract, 'gazette_url' => $r->gazette_url, 'edital_url' => $r->edital_url, 'registration_end' => $r->registration_end, 'exam_date' => $r->exam_date, 'published_at' => $r->published_at, 'last_source_at' => $r->last_source_at, 'source_label' => $r->resolved_source_label ?? $r->source_label, 'verification_status' => $r->verification_status, 'verified_at' => $r->verified_at]; }
    /** @return array<mixed> */
    private function decode(mixed $value): array { $decoded = is_string($value) ? json_decode($value, true) : $value; return is_array($decoded) ? $decoded : []; }
}
