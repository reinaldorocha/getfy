<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FlashcardController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function storeDeck(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'scope' => ['nullable', 'in:global,edital,aluno'],
            'student_id' => ['nullable', 'integer'],
            'contest_id' => ['nullable', 'uuid'],
            'edict_id' => ['nullable', 'uuid'],
            'parent_deck_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'icon' => ['nullable', 'string', 'max:20'],
            'position' => ['nullable', 'integer', 'min:0'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        if (! empty($data['student_id'])) {
            $this->access->assertStudentInTenant($actor, (int) $data['student_id']);
        }
        foreach (['contest_id' => 'cjc_contests', 'edict_id' => 'cjc_edicts', 'parent_deck_id' => 'cjc_flashcard_decks', 'subject_id' => 'cjc_subjects', 'topic_id' => 'cjc_topics', 'subtopic_id' => 'cjc_subtopics'] as $field => $table) {
            if (! empty($data[$field])) {
                $this->requireTenantRow($table, $data[$field], $tenantId);
            }
        }
        $id = (string) Str::uuid();
        DB::table('cjc_flashcard_decks')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'student_id' => $data['student_id'] ?? null,
            'contest_id' => $data['contest_id'] ?? null, 'edict_id' => $data['edict_id'] ?? null,
            'parent_deck_id' => $data['parent_deck_id'] ?? null, 'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null, 'subtopic_id' => $data['subtopic_id'] ?? null,
            'created_by' => $actor->id, 'owner_type' => 'mentor', 'scope' => $data['scope'] ?? 'global',
            'name' => trim($data['name']), 'description' => $data['description'] ?? null, 'icon' => $data['icon'] ?? null,
            'position' => (int) ($data['position'] ?? 0), 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);
        $this->audit->record($tenantId, $actor, 'flashcard_deck.created', 'flashcard_deck', $id, $data['student_id'] ?? null);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function storeCard(Request $request, string $deck): JsonResponse
    {
        $data = $request->validate([
            'type' => ['nullable', 'in:basico,lacuna,multipla_escolha,certo_errado'],
            'front' => ['required', 'string'],
            'back' => ['nullable', 'string'],
            'hint' => ['nullable', 'string'],
            'alternatives' => ['nullable', 'array'],
            'correct_answer' => ['nullable', 'string', 'max:255'],
            'explanation' => ['nullable', 'string'],
            'alternative_explanations' => ['nullable', 'array'],
            'tags' => ['nullable', 'array'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireTenantRow('cjc_flashcard_decks', $deck, $tenantId);
        $id = (string) Str::uuid();
        DB::table('cjc_flashcards')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'deck_id' => $deck, 'type' => $data['type'] ?? 'basico',
            'front' => $data['front'], 'back' => $data['back'] ?? null, 'hint' => $data['hint'] ?? null,
            'alternatives' => isset($data['alternatives']) ? json_encode($data['alternatives'], JSON_UNESCAPED_UNICODE) : null,
            'correct_answer' => $data['correct_answer'] ?? null, 'explanation' => $data['explanation'] ?? null,
            'alternative_explanations' => isset($data['alternative_explanations']) ? json_encode($data['alternative_explanations'], JSON_UNESCAPED_UNICODE) : null,
            'tags' => isset($data['tags']) ? json_encode($data['tags'], JSON_UNESCAPED_UNICODE) : null,
            'topic_id' => $data['topic_id'] ?? null, 'subtopic_id' => $data['subtopic_id'] ?? null,
            'created_by' => $actor->id, 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);
        $this->audit->record($tenantId, $actor, 'flashcard.created', 'flashcard', $id);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function reviewStudentCard(Request $request, int $tenant, string $card): JsonResponse
    {
        $data = $request->validate([
            'quality' => ['required', 'integer', 'min:0', 'max:5'],
            'contest_id' => ['nullable', 'uuid'],
        ]);
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $row = DB::table('cjc_flashcards as c')
            ->join('cjc_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('c.tenant_id', $tenant)->where('c.id', $card)->where('c.is_active', true)->where('d.is_active', true)
            ->select('c.*', 'd.student_id as deck_student_id', 'd.edict_id as deck_edict_id', 'd.contest_id as deck_contest_id')->first();
        if (! $row || ($row->deck_student_id !== null && (int) $row->deck_student_id !== (int) $student->id)) {
            throw new NotFoundHttpException('Flashcard não encontrado.');
        }
        if ($row->deck_edict_id && ! DB::table('cjc_student_edicts')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('edict_id', $row->deck_edict_id)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Flashcard fora do seu edital.');
        }
        if ($row->deck_contest_id && ! DB::table('cjc_student_contests')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('contest_id', $row->deck_contest_id)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Flashcard fora do seu concurso.');
        }

        $last = DB::table('cjc_flashcard_reviews')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('card_id', $card)->latest('reviewed_at')->first();
        [$repetitions, $interval, $ease] = $this->nextSm2($last, (int) $data['quality']);
        $id = (string) Str::uuid();
        DB::table('cjc_flashcard_reviews')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id, 'card_id' => $card,
            'contest_id' => $data['contest_id'] ?? $row->deck_contest_id, 'quality' => (int) $data['quality'],
            'repetitions' => $repetitions, 'interval_days' => $interval, 'ease_factor' => $ease,
            'next_review' => today()->addDays($interval), 'reviewed_at' => now(), 'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'next_review' => today()->addDays($interval)->toDateString(), 'interval_days' => $interval, 'ease_factor' => $ease]);
    }

    private function nextSm2(?object $last, int $quality): array
    {
        $repetitions = (int) ($last->repetitions ?? 0);
        $interval = (int) ($last->interval_days ?? 0);
        $ease = (float) ($last->ease_factor ?? 2.5);
        if ($quality < 3) {
            return [0, 1, max(1.3, $ease)];
        }
        $repetitions++;
        $interval = match ($repetitions) {
            1 => 1,
            2 => 6,
            default => max(1, (int) round($interval * $ease)),
        };
        $ease = max(1.3, $ease + (0.1 - (5 - $quality) * (0.08 + (5 - $quality) * 0.02)));

        return [$repetitions, $interval, round($ease, 2)];
    }

    private function requireTenantRow(string $table, string $id, int $tenantId): object
    {
        $row = DB::table($table)->where('tenant_id', $tenantId)->where('id', $id)->first();
        if (! $row) {
            throw new NotFoundHttpException('Registro CJC não encontrado.');
        }
        return $row;
    }
}
