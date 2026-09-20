<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Plugins\Cjc\Services\ContentAudienceService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class QuestionController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly ContentAudienceService $audience,
    ) {}

    public function store(Request $request): JsonResponse
    {
        $data = $this->validatedQuestion($request);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $id = $this->insertQuestion($tenantId, $actor->id, $data);

        $targets = $this->targetsFromRequest($request, $data);
        $this->audience->replaceTargets($tenantId, 'question', $id, $targets);

        $this->audit->record($tenantId, $actor, 'question.created', 'question', $id, null, [
            'subject' => $data['subject'],
            'targets' => $targets,
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function import(Request $request): JsonResponse
    {
        $data = $request->validate([
            'questions' => ['nullable', 'array'],
            'questoes' => ['nullable', 'array'],
            'targets' => ['nullable', 'array'],
        ]);

        $items = $data['questions'] ?? $data['questoes'] ?? [];
        if ($items === [] && is_array($request->json()->all()) && array_is_list($request->json()->all())) {
            $items = $request->json()->all();
        }

        if (! is_array($items) || $items === []) {
            return response()->json(['message' => 'Informe ao menos uma questão para importar.'], 422);
        }

        if (count($items) > 1000) {
            return response()->json(['message' => 'Importe no máximo 1000 questões por vez.'], 422);
        }

        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $defaultTargets = is_array($data['targets'] ?? null) ? $data['targets'] : [['type' => 'global']];
        $created = [];

        DB::transaction(function () use ($items, $defaultTargets, $tenantId, $actor, &$created): void {
            foreach ($items as $raw) {
                if (! is_array($raw)) {
                    continue;
                }

                $normalized = $this->normalizeQuestionInput($raw);
                $this->validateNormalizedQuestion($normalized, $tenantId);

                $id = $this->insertQuestion($tenantId, $actor->id, $normalized);
                $targets = is_array($raw['targets'] ?? null) ? $raw['targets'] : $defaultTargets;
                $this->audience->replaceTargets($tenantId, 'question', $id, $targets);
                $created[] = $id;
            }
        });

        $this->audit->record($tenantId, $actor, 'questions.imported', 'question', null, null, ['count' => count($created)]);

        return response()->json(['ok' => true, 'imported' => count($created), 'ids' => $created], 201);
    }

    public function update(Request $request, string $question): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $row = $this->requireQuestion($tenantId, $question);

        $data = $request->validate([
            'subject' => ['sometimes', 'required', 'string', 'max:150'],
            'topic' => ['sometimes', 'nullable', 'string', 'max:150'],
            'type' => ['sometimes', 'in:multipla_escolha,certo_errado'],
            'prompt' => ['sometimes', 'required', 'string'],
            'alternatives' => ['sometimes', 'nullable', 'array'],
            'correct_answer' => ['sometimes', 'required', 'string', 'max:255'],
            'explanation' => ['sometimes', 'nullable', 'string'],
            'scope' => ['sometimes', 'in:global,concurso'],
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'targets' => ['sometimes', 'array'],
        ]);

        if (array_key_exists('contest_id', $data) && $data['contest_id']) {
            $this->requireContest($tenantId, $data['contest_id']);
        }

        $targets = $data['targets'] ?? null;
        unset($data['targets']);

        if (array_key_exists('alternatives', $data)) {
            $data['alternatives'] = $data['alternatives'] === null
                ? null
                : json_encode(array_values($data['alternatives']), JSON_UNESCAPED_UNICODE);
        }

        if (array_key_exists('subject', $data)) {
            $data['subject'] = trim((string) $data['subject']);
        }
        if (array_key_exists('correct_answer', $data)) {
            $data['correct_answer'] = trim((string) $data['correct_answer']);
        }

        if ($targets !== null) {
            [$legacyScope, $legacyContest] = $this->legacyScopeFromTargets($targets);
            $data['scope'] = $legacyScope;
            $data['contest_id'] = $legacyContest;
            $this->audience->replaceTargets($tenantId, 'question', $question, $targets);
        }

        $data['updated_at'] = now();
        DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('id', $question)->update($data);

        $this->audit->record($tenantId, $actor, 'question.updated', 'question', $question, null, [
            'changes' => array_keys($data),
        ]);

        return response()->json(['ok' => true]);
    }

    public function destroy(Request $request, string $question): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireQuestion($tenantId, $question);

        DB::table('cjc_question_bank')
            ->where('tenant_id', $tenantId)
            ->where('id', $question)
            ->update(['is_active' => false, 'updated_at' => now()]);

        $this->audience->deleteTargets($tenantId, 'question', $question);
        $this->audit->record($tenantId, $actor, 'question.disabled', 'question', $question);

        return response()->json(['ok' => true]);
    }

    public function answerStudentQuestion(Request $request, int $tenant, string $question): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');

        $data = $request->validate([
            'answer' => ['required', 'string', 'max:255'],
            'contest_id' => ['nullable', 'uuid'],
        ]);

        $row = $this->requireQuestion($tenant, $question, true);
        if (! $this->audience->canStudentAccess($student, $tenant, 'question', $question)) {
            throw new NotFoundHttpException('Questão não disponível para este aluno.');
        }

        $contestId = $data['contest_id'] ?? $row->contest_id;
        if ($contestId && ! $this->studentHasContest($tenant, (int) $student->id, (string) $contestId)) {
            throw new NotFoundHttpException('Concurso fora do escopo do aluno.');
        }

        $correct = $this->normalized($data['answer']) === $this->normalized((string) $row->correct_answer);
        $answerId = (string) Str::uuid();
        $now = now();
        $subjectId = $this->resolveSubjectId($tenant, (int) $student->id, $contestId ? (string) $contestId : null, (string) $row->subject);

        DB::transaction(function () use ($tenant, $student, $row, $data, $correct, $answerId, $now, $contestId, $subjectId): void {
            DB::table('cjc_question_answers')->insert([
                'id' => $answerId,
                'tenant_id' => $tenant,
                'student_id' => $student->id,
                'question_id' => $row->id,
                'contest_id' => $contestId,
                'answer' => $data['answer'],
                'is_correct' => $correct,
                'answered_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            DB::table('cjc_question_logs')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenant,
                'student_id' => $student->id,
                'contest_id' => $contestId,
                'subject_id' => $subjectId,
                'topic_id' => null,
                'subtopic_id' => null,
                'solved' => 1,
                'correct' => $correct ? 1 : 0,
                'wrong' => $correct ? 0 : 1,
                'origin' => 'banco_questoes',
                'is_active' => true,
                'recorded_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        });

        return response()->json([
            'ok' => true,
            'answer_id' => $answerId,
            'correct' => $correct,
            'correct_answer' => $row->correct_answer,
            'explanation' => $row->explanation,
        ]);
    }

    public function studentHistory(Request $request, int $tenant, string $question): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');
        $this->requireQuestion($tenant, $question, true);

        if (! $this->audience->canStudentAccess($student, $tenant, 'question', $question)) {
            throw new NotFoundHttpException('Questão não disponível para este aluno.');
        }

        $history = DB::table('cjc_question_answers as a')
            ->join('cjc_question_bank as q', 'q.id', '=', 'a.question_id')
            ->where('a.tenant_id', $tenant)
            ->where('a.student_id', $student->id)
            ->where('a.question_id', $question)
            ->select(
                'a.id',
                'a.question_id',
                'q.subject',
                'q.topic',
                'q.type',
                'q.prompt',
                'a.answer',
                'a.is_correct',
                'a.answered_at',
                'a.contest_id',
            )
            ->orderByDesc('a.answered_at')
            ->limit(200)
            ->get();

        return response()->json(['history' => $history]);
    }

    public function studentStatistics(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');

        $contestId = $request->query('contest_id');
        if ($contestId && ! $this->studentHasContest($tenant, (int) $student->id, (string) $contestId)) {
            throw new NotFoundHttpException('Concurso fora do escopo do aluno.');
        }

        $base = DB::table('cjc_question_answers as a')
            ->join('cjc_question_bank as q', 'q.id', '=', 'a.question_id')
            ->where('a.tenant_id', $tenant)
            ->where('a.student_id', $student->id)
            ->when($contestId, fn ($query) => $query->where('a.contest_id', $contestId));

        $totals = (clone $base)
            ->selectRaw('COUNT(*) total_answered, SUM(CASE WHEN a.is_correct=1 THEN 1 ELSE 0 END) correct, SUM(CASE WHEN a.is_correct=0 THEN 1 ELSE 0 END) wrong')
            ->first();

        $answered = (int) ($totals->total_answered ?? 0);
        $correct = (int) ($totals->correct ?? 0);
        $wrong = (int) ($totals->wrong ?? 0);

        $bySubject = (clone $base)
            ->selectRaw('q.subject, COUNT(*) total, SUM(CASE WHEN a.is_correct=1 THEN 1 ELSE 0 END) correct, SUM(CASE WHEN a.is_correct=0 THEN 1 ELSE 0 END) wrong')
            ->groupBy('q.subject')
            ->orderBy('q.subject')
            ->get()
            ->map(fn ($row) => [
                'subject' => $row->subject,
                'total' => (int) $row->total,
                'correct' => (int) $row->correct,
                'wrong' => (int) $row->wrong,
                'accuracy' => (int) $row->total > 0 ? round(((int) $row->correct / (int) $row->total) * 100, 1) : 0,
            ]);

        $byTopic = (clone $base)
            ->whereNotNull('q.topic')
            ->selectRaw('q.subject, q.topic, COUNT(*) total, SUM(CASE WHEN a.is_correct=1 THEN 1 ELSE 0 END) correct, SUM(CASE WHEN a.is_correct=0 THEN 1 ELSE 0 END) wrong')
            ->groupBy('q.subject', 'q.topic')
            ->orderBy('q.subject')
            ->orderBy('q.topic')
            ->get()
            ->map(fn ($row) => [
                'subject' => $row->subject,
                'topic' => $row->topic,
                'total' => (int) $row->total,
                'correct' => (int) $row->correct,
                'wrong' => (int) $row->wrong,
                'accuracy' => (int) $row->total > 0 ? round(((int) $row->correct / (int) $row->total) * 100, 1) : 0,
            ]);

        $recent = (clone $base)
            ->select('a.id', 'a.question_id', 'q.subject', 'q.topic', 'q.prompt', 'a.answer', 'a.is_correct', 'a.answered_at')
            ->orderByDesc('a.answered_at')
            ->limit(30)
            ->get();

        return response()->json([
            'total_answered' => $answered,
            'total_solved' => $answered,
            'correct' => $correct,
            'wrong' => $wrong,
            'accuracy' => $answered > 0 ? round(($correct / $answered) * 100, 1) : 0,
            'by_subject' => $bySubject,
            'by_topic' => $byTopic,
            'recent_history' => $recent,
        ]);
    }

    private function validatedQuestion(Request $request): array
    {
        $data = $request->validate([
            'subject' => ['required', 'string', 'max:150'],
            'topic' => ['nullable', 'string', 'max:150'],
            'type' => ['nullable', 'in:multipla_escolha,certo_errado'],
            'prompt' => ['required', 'string'],
            'alternatives' => ['nullable', 'array'],
            'correct_answer' => ['required', 'string', 'max:255'],
            'explanation' => ['nullable', 'string'],
            'scope' => ['nullable', 'in:global,concurso'],
            'contest_id' => ['nullable', 'uuid'],
            'targets' => ['nullable', 'array'],
        ]);

        if (! empty($data['contest_id'])) {
            $tenantId = $this->access->tenantId($request->user());
            $this->requireContest($tenantId, $data['contest_id']);
        }

        return $data;
    }

    private function normalizeQuestionInput(array $raw): array
    {
        $alternatives = $raw['alternatives'] ?? $raw['alternativas'] ?? [];
        if (is_string($alternatives)) {
            $alternatives = preg_split('/\r?\n/', $alternatives) ?: [];
        }

        return [
            'subject' => trim((string) ($raw['subject'] ?? $raw['disciplina'] ?? '')),
            'topic' => ($raw['topic'] ?? $raw['assunto'] ?? null) ?: null,
            'type' => (string) ($raw['type'] ?? $raw['tipo'] ?? 'multipla_escolha'),
            'prompt' => trim((string) ($raw['prompt'] ?? $raw['enunciado'] ?? '')),
            'alternatives' => array_values(array_filter(array_map('strval', is_array($alternatives) ? $alternatives : []))),
            'correct_answer' => trim((string) ($raw['correct_answer'] ?? $raw['respostaCorreta'] ?? $raw['resposta_correta'] ?? '')),
            'explanation' => ($raw['explanation'] ?? $raw['explicacao'] ?? null) ?: null,
            'scope' => (string) ($raw['scope'] ?? $raw['alcance'] ?? 'global'),
            'contest_id' => ($raw['contest_id'] ?? $raw['concursoId'] ?? null) ?: null,
        ];
    }

    private function validateNormalizedQuestion(array $data, int $tenantId): void
    {
        if ($data['subject'] === '' || $data['prompt'] === '' || $data['correct_answer'] === '') {
            throw new \InvalidArgumentException('Questão importada sem disciplina, enunciado ou resposta correta.');
        }

        if (! in_array($data['type'], ['multipla_escolha', 'certo_errado'], true)) {
            throw new \InvalidArgumentException('Tipo de questão importada inválido.');
        }

        if ($data['contest_id']) {
            $this->requireContest($tenantId, (string) $data['contest_id']);
        }
    }

    private function insertQuestion(int $tenantId, int $actorId, array $data): string
    {
        $targets = is_array($data['targets'] ?? null) ? $data['targets'] : null;
        if ($targets !== null) {
            [$scope, $contestId] = $this->legacyScopeFromTargets($targets);
        } else {
            $scope = ($data['scope'] ?? 'global') === 'concurso' ? 'concurso' : 'global';
            $contestId = $scope === 'concurso' ? ($data['contest_id'] ?? null) : null;
        }

        $id = (string) Str::uuid();
        DB::table('cjc_question_bank')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'subject' => trim((string) $data['subject']),
            'topic' => $data['topic'] ?? null,
            'type' => $data['type'] ?? 'multipla_escolha',
            'prompt' => $data['prompt'],
            'alternatives' => ! empty($data['alternatives']) ? json_encode(array_values($data['alternatives']), JSON_UNESCAPED_UNICODE) : null,
            'correct_answer' => trim((string) $data['correct_answer']),
            'explanation' => $data['explanation'] ?? null,
            'scope' => $scope,
            'contest_id' => $contestId,
            'created_by' => $actorId,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    private function targetsFromRequest(Request $request, array $data): array
    {
        if (is_array($data['targets'] ?? null)) {
            return $data['targets'];
        }

        if (($data['scope'] ?? 'global') === 'concurso' && ! empty($data['contest_id'])) {
            return [['type' => 'contest', 'id' => $data['contest_id']]];
        }

        return [['type' => 'global', 'id' => null]];
    }

    private function legacyScopeFromTargets(array $targets): array
    {
        foreach ($targets as $target) {
            $type = $target['type'] ?? $target['target_type'] ?? null;
            $id = $target['id'] ?? $target['target_id'] ?? null;
            if ($type === 'contest' && $id) {
                return ['concurso', (string) $id];
            }
        }

        return ['global', null];
    }

    private function requireQuestion(int $tenantId, string $questionId, bool $activeOnly = false): object
    {
        $query = DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('id', $questionId);
        if ($activeOnly) {
            $query->where('is_active', true);
        }
        $row = $query->first();

        if (! $row) {
            throw new NotFoundHttpException('Questão não encontrada.');
        }

        return $row;
    }

    private function requireContest(int $tenantId, string $contestId): void
    {
        if (! DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('id', $contestId)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Concurso não encontrado.');
        }
    }

    private function studentHasContest(int $tenantId, int $studentId, string $contestId): bool
    {
        return DB::table('cjc_student_contests')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->exists();
    }

    private function resolveSubjectId(int $tenantId, int $studentId, ?string $contestId, string $subjectName): ?string
    {
        if (! $contestId) {
            return null;
        }

        return DB::table('cjc_subjects as s')
            ->join('cjc_edicts as e', 'e.id', '=', 's.edict_id')
            ->join('cjc_student_edicts as se', 'se.edict_id', '=', 'e.id')
            ->where('s.tenant_id', $tenantId)
            ->where('se.student_id', $studentId)
            ->where('se.is_active', true)
            ->where('e.contest_id', $contestId)
            ->where('e.is_active', true)
            ->where('s.is_active', true)
            ->whereRaw('LOWER(s.name) = ?', [mb_strtolower(trim($subjectName), 'UTF-8')])
            ->value('s.id');
    }

    private function normalized(string $value): string
    {
        return mb_strtolower(trim($value), 'UTF-8');
    }
}
