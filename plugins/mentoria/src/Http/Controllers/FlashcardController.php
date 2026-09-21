<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\AuditService;
use Plugins\Mentoria\Services\ContentAudienceService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FlashcardController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly ContentAudienceService $audience,
    ) {}

    public function storeDeck(Request $request): JsonResponse
    {
        $data = $this->validateDeck($request, false);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $id = $this->insertDeck($tenantId, $actor->id, null, 'mentor', $data);
        $targets = $this->targetsForDeck($data);
        $this->audience->replaceTargets($tenantId, 'flashcard_deck', $id, $targets);

        $this->audit->record($tenantId, $actor, 'flashcard_deck.created', 'flashcard_deck', $id, null, [
            'name' => $data['name'],
            'targets' => $targets,
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function importDecks(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'decks' => ['nullable', 'array'],
            'baralhos' => ['nullable', 'array'],
            'targets' => ['nullable', 'array'],
        ]);

        $decks = $payload['decks'] ?? $payload['baralhos'] ?? [];
        if ($decks === [] && is_array($request->json()->all()) && array_is_list($request->json()->all())) {
            $decks = $request->json()->all();
        }
        if (! is_array($decks) || $decks === []) {
            return response()->json(['message' => 'Informe ao menos um baralho para importar.'], 422);
        }
        if (count($decks) > 200) {
            return response()->json(['message' => 'Importe no máximo 200 baralhos por vez.'], 422);
        }

        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $defaultTargets = is_array($payload['targets'] ?? null) ? $payload['targets'] : [['type' => 'global']];
        $created = [];

        DB::transaction(function () use ($decks, $actor, $tenantId, $defaultTargets, &$created): void {
            foreach ($decks as $raw) {
                if (! is_array($raw)) {
                    continue;
                }

                $data = $this->normalizeDeckInput($raw);
                if ($data['name'] === '') {
                    throw new \InvalidArgumentException('Baralho sem nome.');
                }

                $id = $this->insertDeck($tenantId, $actor->id, null, 'mentor', $data);
                $targets = is_array($raw['targets'] ?? null)
                    ? $raw['targets']
                    : ($data['targets'] ?? $defaultTargets);
                $this->audience->replaceTargets($tenantId, 'flashcard_deck', $id, $targets);

                $cards = $raw['cards'] ?? $raw['cartoes'] ?? [];
                if (is_array($cards)) {
                    foreach ($cards as $cardRaw) {
                        if (! is_array($cardRaw)) {
                            continue;
                        }
                        $card = $this->normalizeCardInput($cardRaw);
                        $this->validateCardData($card);
                        $this->insertCard($tenantId, $actor->id, $id, $card);
                    }
                }

                $created[] = $id;
            }
        });

        $this->audit->record($tenantId, $actor, 'flashcard_decks.imported', 'flashcard_deck', null, null, ['count' => count($created)]);

        return response()->json(['ok' => true, 'imported' => count($created), 'ids' => $created], 201);
    }

    public function updateDeck(Request $request, string $deck): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireMentorDeck($tenantId, $deck);

        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'edict_id' => ['sometimes', 'nullable', 'uuid'],
            'parent_deck_id' => ['sometimes', 'nullable', 'uuid'],
            'subject_id' => ['sometimes', 'nullable', 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
            'icon' => ['sometimes', 'nullable', 'string', 'max:20'],
            'position' => ['sometimes', 'integer', 'min:0'],
            'targets' => ['sometimes', 'array'],
        ]);

        $this->validateDeckReferences($tenantId, $data, $deck);
        $targets = $data['targets'] ?? null;
        unset($data['targets']);

        if ($targets !== null) {
            $legacy = $this->legacyColumnsFromTargets($targets);
            $data = array_merge($data, $legacy);
            $this->audience->replaceTargets($tenantId, 'flashcard_deck', $deck, $targets);
        }

        if (array_key_exists('name', $data)) {
            $data['name'] = trim((string) $data['name']);
        }

        $data['updated_at'] = now();
        DB::table('mentoria_flashcard_decks')->where('tenant_id', $tenantId)->where('id', $deck)->update($data);

        $this->audit->record($tenantId, $actor, 'flashcard_deck.updated', 'flashcard_deck', $deck);

        return response()->json(['ok' => true]);
    }

    public function destroyDeck(Request $request, string $deck): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireMentorDeck($tenantId, $deck);

        $descendants = $this->descendantDeckIds($tenantId, $deck);
        $ids = array_values(array_unique(array_merge([$deck], $descendants)));

        DB::transaction(function () use ($tenantId, $ids): void {
            DB::table('mentoria_flashcards')->where('tenant_id', $tenantId)->whereIn('deck_id', $ids)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_flashcard_decks')->where('tenant_id', $tenantId)->whereIn('id', $ids)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_content_targets')->where('tenant_id', $tenantId)
                ->where('content_type', 'flashcard_deck')->whereIn('content_id', $ids)->delete();
        });

        $this->audit->record($tenantId, $actor, 'flashcard_deck.disabled', 'flashcard_deck', $deck);

        return response()->json(['ok' => true]);
    }

    public function storeCard(Request $request, string $deck): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireMentorDeck($tenantId, $deck);

        $data = $this->validateCard($request);
        $this->validateCardReferences($tenantId, $data);
        $id = $this->insertCard($tenantId, $actor->id, $deck, $data);

        $this->audit->record($tenantId, $actor, 'flashcard.created', 'flashcard', $id);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateCard(Request $request, string $card): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireMentorCard($tenantId, $card);

        $data = $this->validateCard($request, true);
        $this->validateCardReferences($tenantId, $data);
        $update = $this->cardUpdatePayload($data);
        $update['updated_at'] = now();

        DB::table('mentoria_flashcards')->where('tenant_id', $tenantId)->where('id', $card)->update($update);
        $this->audit->record($tenantId, $actor, 'flashcard.updated', 'flashcard', $card);

        return response()->json(['ok' => true]);
    }

    public function destroyCard(Request $request, string $card): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireMentorCard($tenantId, $card);

        DB::table('mentoria_flashcards')->where('tenant_id', $tenantId)->where('id', $card)
            ->update(['is_active' => false, 'updated_at' => now()]);
        $this->audit->record($tenantId, $actor, 'flashcard.disabled', 'flashcard', $card);

        return response()->json(['ok' => true]);
    }

    public function storeStudentDeck(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');

        $data = $this->validateDeck($request, true);
        if (! empty($data['parent_deck_id'])) {
            $this->requireStudentOwnedDeck($tenant, (int) $student->id, $data['parent_deck_id']);
        }
        $this->validateDeckReferences($tenant, $data);

        $data['scope'] = 'aluno';
        $id = $this->insertDeck($tenant, $student->id, $student->id, 'aluno', $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateStudentDeck(Request $request, int $tenant, string $deck): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');
        $this->requireStudentOwnedDeck($tenant, (int) $student->id, $deck);

        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'parent_deck_id' => ['sometimes', 'nullable', 'uuid'],
            'subject_id' => ['sometimes', 'nullable', 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
            'icon' => ['sometimes', 'nullable', 'string', 'max:20'],
            'position' => ['sometimes', 'integer', 'min:0'],
        ]);

        if (! empty($data['parent_deck_id'])) {
            $this->requireStudentOwnedDeck($tenant, (int) $student->id, $data['parent_deck_id']);
            if ($data['parent_deck_id'] === $deck) {
                return response()->json(['message' => 'Um baralho não pode ser pai de si mesmo.'], 422);
            }
        }
        $this->validateDeckReferences($tenant, $data, $deck);
        $data['updated_at'] = now();

        DB::table('mentoria_flashcard_decks')->where('tenant_id', $tenant)->where('id', $deck)->update($data);

        return response()->json(['ok' => true]);
    }

    public function destroyStudentDeck(Request $request, int $tenant, string $deck): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');
        $this->requireStudentOwnedDeck($tenant, (int) $student->id, $deck);

        $ids = array_values(array_unique(array_merge([$deck], $this->descendantDeckIds($tenant, $deck))));
        DB::transaction(function () use ($tenant, $ids): void {
            DB::table('mentoria_flashcards')->where('tenant_id', $tenant)->whereIn('deck_id', $ids)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_flashcard_decks')->where('tenant_id', $tenant)->whereIn('id', $ids)
                ->update(['is_active' => false, 'updated_at' => now()]);
        });

        return response()->json(['ok' => true]);
    }

    public function storeStudentCard(Request $request, int $tenant, string $deck): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');
        $this->requireStudentOwnedDeck($tenant, (int) $student->id, $deck);

        $data = $this->validateCard($request);
        $this->validateCardReferences($tenant, $data);
        $id = $this->insertCard($tenant, $student->id, $deck, $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateStudentCard(Request $request, int $tenant, string $card): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');
        $row = $this->requireStudentOwnedCard($tenant, (int) $student->id, $card);

        $data = $this->validateCard($request, true);
        $this->validateCardReferences($tenant, $data);
        $update = $this->cardUpdatePayload($data);
        $update['updated_at'] = now();
        DB::table('mentoria_flashcards')->where('tenant_id', $tenant)->where('id', $row->id)->update($update);

        return response()->json(['ok' => true]);
    }

    public function destroyStudentCard(Request $request, int $tenant, string $card): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');
        $this->requireStudentOwnedCard($tenant, (int) $student->id, $card);

        DB::table('mentoria_flashcards')->where('tenant_id', $tenant)->where('id', $card)
            ->update(['is_active' => false, 'updated_at' => now()]);

        return response()->json(['ok' => true]);
    }

    public function reviewStudentCard(Request $request, int $tenant, string $card): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');

        $data = $request->validate([
            'quality' => ['required', 'integer', 'min:0', 'max:5'],
            'contest_id' => ['nullable', 'uuid'],
        ]);

        $row = DB::table('mentoria_flashcards as c')
            ->join('mentoria_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('c.tenant_id', $tenant)
            ->where('c.id', $card)
            ->where('c.is_active', true)
            ->where('d.is_active', true)
            ->select('c.*', 'd.id as deck_id_value', 'd.student_id as deck_student_id', 'd.owner_type', 'd.contest_id as deck_contest_id')
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Flashcard não encontrado.');
        }

        $owned = $row->owner_type === 'aluno' && (int) $row->deck_student_id === (int) $student->id;
        $mentorVisible = $row->owner_type === 'mentor'
            && $this->audience->canStudentAccess($student, $tenant, 'flashcard_deck', (string) $row->deck_id_value);

        if (! $owned && ! $mentorVisible) {
            throw new NotFoundHttpException('Flashcard fora do seu escopo.');
        }

        $contestId = $data['contest_id'] ?? $row->deck_contest_id;
        if ($contestId && ! DB::table('mentoria_student_contests')
            ->where('tenant_id', $tenant)->where('student_id', $student->id)
            ->where('contest_id', $contestId)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Concurso fora do seu escopo.');
        }

        $last = DB::table('mentoria_flashcard_reviews')
            ->where('tenant_id', $tenant)
            ->where('student_id', $student->id)
            ->where('card_id', $card)
            ->latest('reviewed_at')
            ->first();

        [$repetitions, $interval, $ease] = $this->nextSm2($last, (int) $data['quality']);
        $nextReview = today()->addDays($interval);
        $id = (string) Str::uuid();

        DB::table('mentoria_flashcard_reviews')->insert([
            'id' => $id,
            'tenant_id' => $tenant,
            'student_id' => $student->id,
            'card_id' => $card,
            'contest_id' => $contestId,
            'quality' => (int) $data['quality'],
            'repetitions' => $repetitions,
            'interval_days' => $interval,
            'ease_factor' => $ease,
            'next_review' => $nextReview,
            'reviewed_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'ok' => true,
            'review_id' => $id,
            'next_review' => $nextReview->toDateString(),
            'interval_days' => $interval,
            'repetitions' => $repetitions,
            'ease_factor' => $ease,
        ]);
    }

    public function pendingStudentCards(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');

        $cards = $this->studentVisibleCards($student, $tenant);
        $latest = DB::table('mentoria_flashcard_reviews')
            ->where('tenant_id', $tenant)
            ->where('student_id', $student->id)
            ->orderByDesc('reviewed_at')
            ->get()
            ->unique('card_id')
            ->keyBy('card_id');

        $pending = $cards->filter(function ($card) use ($latest): bool {
            $review = $latest->get($card->id);
            return ! $review || ! $review->next_review || $review->next_review <= today()->toDateString();
        })->map(function ($card) use ($latest) {
            $review = $latest->get($card->id);
            $card->repetitions = (int) ($review->repetitions ?? 0);
            $card->interval_days = (int) ($review->interval_days ?? 0);
            $card->ease_factor = (float) ($review->ease_factor ?? 2.5);
            $card->next_review = $review->next_review ?? null;
            return $card;
        })->values();

        return response()->json(['cards' => $pending]);
    }

    public function studentHistory(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'flashcards');

        $contestId = $request->query('contest_id');
        $history = DB::table('mentoria_flashcard_reviews as r')
            ->join('mentoria_flashcards as c', 'c.id', '=', 'r.card_id')
            ->join('mentoria_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('r.tenant_id', $tenant)
            ->where('r.student_id', $student->id)
            ->when($contestId, fn ($query) => $query->where('r.contest_id', $contestId))
            ->select(
                'r.id',
                'r.card_id',
                'c.deck_id',
                'd.name as deck_name',
                'c.front',
                'r.quality',
                'r.repetitions',
                'r.interval_days',
                'r.ease_factor',
                'r.next_review',
                'r.reviewed_at',
                'r.contest_id',
            )
            ->orderByDesc('r.reviewed_at')
            ->limit(500)
            ->get();

        return response()->json(['history' => $history]);
    }

    private function validateDeck(Request $request, bool $studentOwned): array
    {
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'contest_id' => ['nullable', 'uuid'],
            'edict_id' => ['nullable', 'uuid'],
            'parent_deck_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'icon' => ['nullable', 'string', 'max:20'],
            'position' => ['nullable', 'integer', 'min:0'],
        ];

        if (! $studentOwned) {
            $rules['targets'] = ['nullable', 'array'];
            $rules['scope'] = ['nullable', 'in:global,edital,aluno'];
        }

        return $request->validate($rules);
    }

    private function validateCard(Request $request, bool $partial = false): array
    {
        $prefix = $partial ? 'sometimes|' : '';

        return $request->validate([
            'type' => [$prefix.'in:certo_errado'],
            'front' => [$prefix.'required', 'string'],
            'hint' => ['sometimes', 'nullable', 'string'],
            'correct_answer' => [$prefix.'required', 'string', 'in:Certo,Errado,certo,errado'],
            'explanation' => ['sometimes', 'nullable', 'string'],
            'tags' => ['sometimes', 'nullable', 'array'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
        ]);
    }

    private function normalizeDeckInput(array $raw): array
    {
        return [
            'name' => trim((string) ($raw['name'] ?? $raw['nome'] ?? '')),
            'description' => ($raw['description'] ?? $raw['descricao'] ?? null) ?: null,
            'contest_id' => ($raw['contest_id'] ?? $raw['concursoId'] ?? null) ?: null,
            'edict_id' => ($raw['edict_id'] ?? $raw['editalId'] ?? null) ?: null,
            'parent_deck_id' => ($raw['parent_deck_id'] ?? $raw['baralhoPaiId'] ?? null) ?: null,
            'subject_id' => ($raw['subject_id'] ?? $raw['materiaId'] ?? null) ?: null,
            'topic_id' => ($raw['topic_id'] ?? $raw['topicoId'] ?? null) ?: null,
            'subtopic_id' => ($raw['subtopic_id'] ?? $raw['subtopicoId'] ?? null) ?: null,
            'icon' => ($raw['icon'] ?? $raw['icone'] ?? null) ?: null,
            'position' => (int) ($raw['position'] ?? $raw['ordem'] ?? 0),
            'scope' => (string) ($raw['scope'] ?? $raw['alcance'] ?? 'global'),
            'targets' => is_array($raw['targets'] ?? null) ? $raw['targets'] : null,
        ];
    }

    private function normalizeCardInput(array $raw): array
    {
        return [
            'type' => (string) ($raw['type'] ?? $raw['tipo'] ?? 'certo_errado'),
            'front' => trim((string) ($raw['front'] ?? $raw['frente'] ?? '')),
            'hint' => ($raw['hint'] ?? $raw['dica'] ?? null) ?: null,
            'correct_answer' => ($raw['correct_answer'] ?? $raw['respostaCorreta'] ?? null) ?: null,
            'explanation' => ($raw['explanation'] ?? $raw['explicacao'] ?? null) ?: null,
            'tags' => $raw['tags'] ?? $raw['etiquetas'] ?? [],
            'topic_id' => ($raw['topic_id'] ?? $raw['topicoId'] ?? null) ?: null,
            'subtopic_id' => ($raw['subtopic_id'] ?? $raw['subtopicoId'] ?? null) ?: null,
        ];
    }

    private function insertDeck(int $tenantId, int $createdBy, ?int $studentId, string $ownerType, array $data): string
    {
        $this->validateDeckReferences($tenantId, $data);
        $legacy = $ownerType === 'mentor'
            ? $this->legacyColumnsFromTargets($this->targetsForDeck($data))
            : [
                'scope' => 'aluno',
                'student_id' => $studentId,
                'contest_id' => $data['contest_id'] ?? null,
                'edict_id' => $data['edict_id'] ?? null,
            ];

        $id = (string) Str::uuid();
        DB::table('mentoria_flashcard_decks')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'student_id' => $legacy['student_id'] ?? $studentId,
            'contest_id' => $legacy['contest_id'] ?? ($data['contest_id'] ?? null),
            'edict_id' => $legacy['edict_id'] ?? ($data['edict_id'] ?? null),
            'parent_deck_id' => $data['parent_deck_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null,
            'subtopic_id' => $data['subtopic_id'] ?? null,
            'created_by' => $createdBy,
            'owner_type' => $ownerType,
            'scope' => $legacy['scope'] ?? ($data['scope'] ?? 'global'),
            'name' => trim((string) $data['name']),
            'description' => $data['description'] ?? null,
            'icon' => $data['icon'] ?? null,
            'position' => (int) ($data['position'] ?? 0),
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    private function insertCard(int $tenantId, int $createdBy, string $deckId, array $data): string
    {
        $this->validateCardData($data);
        $id = (string) Str::uuid();

        DB::table('mentoria_flashcards')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'deck_id' => $deckId,
            'type' => 'certo_errado',
            'front' => trim((string) $data['front']),
            'back' => null,
            'hint' => $data['hint'] ?? null,
            'alternatives' => null,
            'correct_answer' => $this->normalizeTrueFalseAnswer((string) ($data['correct_answer'] ?? '')),
            'explanation' => $data['explanation'] ?? null,
            'alternative_explanations' => null,
            'tags' => ! empty($data['tags']) ? json_encode(array_values($data['tags']), JSON_UNESCAPED_UNICODE) : null,
            'topic_id' => $data['topic_id'] ?? null,
            'subtopic_id' => $data['subtopic_id'] ?? null,
            'created_by' => $createdBy,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    private function cardUpdatePayload(array $data): array
    {
        $update = $data;
        $update['type'] = 'certo_errado';
        $update['back'] = null;
        $update['alternatives'] = null;
        $update['alternative_explanations'] = null;

        if (array_key_exists('correct_answer', $update)) {
            $update['correct_answer'] = $this->normalizeTrueFalseAnswer((string) $update['correct_answer']);
        }

        if (array_key_exists('tags', $update)) {
            $update['tags'] = $update['tags'] === null || $update['tags'] === []
                ? null
                : json_encode($update['tags'], JSON_UNESCAPED_UNICODE);
        }

        return $update;
    }

    private function validateCardData(array $data): void
    {
        $type = (string) ($data['type'] ?? 'certo_errado');
        $front = trim((string) ($data['front'] ?? ''));

        if ($front === '') {
            abort(422, 'A afirmação do flashcard é obrigatória.');
        }

        if ($type !== 'certo_errado') {
            abort(422, 'O Mentoria aceita somente flashcards do tipo Certo/Errado.');
        }

        $answer = mb_strtolower(trim((string) ($data['correct_answer'] ?? '')), 'UTF-8');
        if (! in_array($answer, ['certo', 'errado'], true)) {
            abort(422, 'A resposta correta do flashcard deve ser Certo ou Errado.');
        }
    }

    private function normalizeTrueFalseAnswer(string $answer): string
    {
        return mb_strtolower(trim($answer), 'UTF-8') === 'certo' ? 'Certo' : 'Errado';
    }

    private function validateDeckReferences(int $tenantId, array $data, ?string $selfId = null): void
    {
        $map = [
            'contest_id' => 'mentoria_contests',
            'edict_id' => 'mentoria_edicts',
            'parent_deck_id' => 'mentoria_flashcard_decks',
            'subject_id' => 'mentoria_subjects',
            'topic_id' => 'mentoria_topics',
            'subtopic_id' => 'mentoria_subtopics',
        ];

        foreach ($map as $field => $table) {
            if (empty($data[$field])) {
                continue;
            }
            if ($field === 'parent_deck_id' && $data[$field] === $selfId) {
                throw new \InvalidArgumentException('Um baralho não pode ser pai de si mesmo.');
            }
            if (! DB::table($table)->where('tenant_id', $tenantId)->where('id', $data[$field])->exists()) {
                throw new NotFoundHttpException('Referência do baralho não encontrada neste tenant.');
            }
        }
    }

    private function validateCardReferences(int $tenantId, array $data): void
    {
        foreach (['topic_id' => 'mentoria_topics', 'subtopic_id' => 'mentoria_subtopics'] as $field => $table) {
            if (! empty($data[$field]) && ! DB::table($table)->where('tenant_id', $tenantId)->where('id', $data[$field])->exists()) {
                throw new NotFoundHttpException('Referência do flashcard não encontrada neste tenant.');
            }
        }
    }

    private function targetsForDeck(array $data): array
    {
        if (is_array($data['targets'] ?? null)) {
            return $data['targets'];
        }

        if (($data['scope'] ?? null) === 'edital' && ! empty($data['edict_id'])) {
            return [['type' => 'edict', 'id' => $data['edict_id']]];
        }
        if (($data['scope'] ?? null) === 'aluno' && ! empty($data['student_id'])) {
            return [['type' => 'student', 'id' => $data['student_id']]];
        }
        if (! empty($data['contest_id'])) {
            return [['type' => 'contest', 'id' => $data['contest_id']]];
        }

        return [['type' => 'global', 'id' => null]];
    }

    private function legacyColumnsFromTargets(array $targets): array
    {
        foreach ($targets as $target) {
            $type = $target['type'] ?? $target['target_type'] ?? null;
            $id = $target['id'] ?? $target['target_id'] ?? null;
            if ($type === 'student' && $id) {
                return ['scope' => 'aluno', 'student_id' => (int) $id, 'contest_id' => null, 'edict_id' => null];
            }
            if ($type === 'edict' && $id) {
                return ['scope' => 'edital', 'student_id' => null, 'contest_id' => null, 'edict_id' => (string) $id];
            }
            if ($type === 'contest' && $id) {
                return ['scope' => 'global', 'student_id' => null, 'contest_id' => (string) $id, 'edict_id' => null];
            }
        }

        return ['scope' => 'global', 'student_id' => null, 'contest_id' => null, 'edict_id' => null];
    }

    private function requireMentorDeck(int $tenantId, string $deckId): object
    {
        $row = DB::table('mentoria_flashcard_decks')
            ->where('tenant_id', $tenantId)
            ->where('id', $deckId)
            ->where('owner_type', 'mentor')
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Baralho do mentor não encontrado.');
        }

        return $row;
    }

    private function requireMentorCard(int $tenantId, string $cardId): object
    {
        $row = DB::table('mentoria_flashcards as c')
            ->join('mentoria_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('c.tenant_id', $tenantId)
            ->where('c.id', $cardId)
            ->where('d.owner_type', 'mentor')
            ->select('c.*')
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Flashcard do mentor não encontrado.');
        }

        return $row;
    }

    private function requireStudentOwnedDeck(int $tenantId, int $studentId, string $deckId): object
    {
        $row = DB::table('mentoria_flashcard_decks')
            ->where('tenant_id', $tenantId)
            ->where('id', $deckId)
            ->where('owner_type', 'aluno')
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Baralho do aluno não encontrado.');
        }

        return $row;
    }

    private function requireStudentOwnedCard(int $tenantId, int $studentId, string $cardId): object
    {
        $row = DB::table('mentoria_flashcards as c')
            ->join('mentoria_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('c.tenant_id', $tenantId)
            ->where('c.id', $cardId)
            ->where('d.owner_type', 'aluno')
            ->where('d.student_id', $studentId)
            ->where('d.is_active', true)
            ->select('c.*')
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Flashcard do aluno não encontrado.');
        }

        return $row;
    }

    private function studentVisibleCards($student, int $tenantId)
    {
        $mentorDeckIds = $this->audience->visibleIds($student, $tenantId, 'flashcard_deck');
        $ownDeckIds = DB::table('mentoria_flashcard_decks')
            ->where('tenant_id', $tenantId)
            ->where('owner_type', 'aluno')
            ->where('student_id', $student->id)
            ->where('is_active', true)
            ->pluck('id')
            ->map(fn ($id) => (string) $id)
            ->all();

        $deckIds = array_values(array_unique(array_merge($mentorDeckIds, $ownDeckIds)));
        if ($deckIds === []) {
            return collect();
        }

        return DB::table('mentoria_flashcards as c')
            ->join('mentoria_flashcard_decks as d', 'd.id', '=', 'c.deck_id')
            ->where('c.tenant_id', $tenantId)
            ->whereIn('c.deck_id', $deckIds)
            ->where('c.is_active', true)
            ->where('d.is_active', true)
            ->select('c.*', 'd.name as deck_name', 'd.owner_type')
            ->orderBy('d.position')
            ->orderBy('c.created_at')
            ->get();
    }

    private function descendantDeckIds(int $tenantId, string $deckId): array
    {
        $found = [];
        $queue = [$deckId];

        while ($queue !== []) {
            $parent = array_shift($queue);
            $children = DB::table('mentoria_flashcard_decks')
                ->where('tenant_id', $tenantId)
                ->where('parent_deck_id', $parent)
                ->pluck('id')
                ->map(fn ($id) => (string) $id)
                ->all();

            foreach ($children as $child) {
                if (! isset($found[$child])) {
                    $found[$child] = true;
                    $queue[] = $child;
                }
            }
        }

        return array_keys($found);
    }

    private function nextSm2(?object $last, int $quality): array
    {
        $repetitions = (int) ($last->repetitions ?? 0);
        $interval = (int) ($last->interval_days ?? 0);
        $ease = (float) ($last->ease_factor ?? 2.5);

        if ($quality < 3) {
            return [0, 1, max(1.3, round($ease, 2))];
        }

        $repetitions++;
        $interval = match ($repetitions) {
            1 => 1,
            2 => 6,
            default => max(1, (int) round(max(1, $interval) * $ease)),
        };

        $ease = max(1.3, $ease + (0.1 - (5 - $quality) * (0.08 + (5 - $quality) * 0.02)));

        return [$repetitions, $interval, round($ease, 2)];
    }
}
