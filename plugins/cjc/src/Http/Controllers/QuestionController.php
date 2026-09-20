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

class QuestionController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function store(Request $request): JsonResponse
    {
        $data = $this->validateQuestion($request);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        if (! empty($data['contest_id'])) {
            $this->requireContest($tenantId, $data['contest_id']);
        }
        $id = (string) Str::uuid();
        DB::table('cjc_question_bank')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'subject' => trim($data['subject']),
            'topic' => $data['topic'] ?? null, 'type' => $data['type'] ?? 'multipla_escolha',
            'prompt' => $data['prompt'],
            'alternatives' => isset($data['alternatives']) ? json_encode($data['alternatives'], JSON_UNESCAPED_UNICODE) : null,
            'correct_answer' => trim($data['correct_answer']), 'explanation' => $data['explanation'] ?? null,
            'scope' => $data['scope'] ?? 'global', 'contest_id' => $data['contest_id'] ?? null,
            'created_by' => $actor->id, 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);
        $this->audit->record($tenantId, $actor, 'question.created', 'question', $id, null, ['subject' => $data['subject'], 'scope' => $data['scope'] ?? 'global']);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function update(Request $request, string $question): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $row = DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('id', $question)->first();
        if (! $row) {
            throw new NotFoundHttpException('Questão não encontrada.');
        }
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
        ]);
        if (array_key_exists('contest_id', $data) && $data['contest_id']) {
            $this->requireContest($tenantId, $data['contest_id']);
        }
        if (isset($data['alternatives'])) {
            $data['alternatives'] = json_encode($data['alternatives'], JSON_UNESCAPED_UNICODE);
        }
        $data['updated_at'] = now();
        DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('id', $question)->update($data);
        $this->audit->record($tenantId, $actor, 'question.updated', 'question', $question);

        return response()->json(['ok' => true]);
    }

    public function destroy(Request $request, string $question): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $updated = DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('id', $question)
            ->update(['is_active' => false, 'updated_at' => now()]);
        if ($updated === 0) {
            throw new NotFoundHttpException('Questão não encontrada.');
        }
        $this->audit->record($tenantId, $actor, 'question.disabled', 'question', $question);

        return response()->json(['ok' => true]);
    }

    public function answerStudentQuestion(Request $request, int $tenant, string $question): JsonResponse
    {
        $data = $request->validate([
            'answer' => ['required', 'string', 'max:255'],
            'contest_id' => ['nullable', 'uuid'],
        ]);
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $row = DB::table('cjc_question_bank')->where('tenant_id', $tenant)->where('id', $question)->where('is_active', true)->first();
        if (! $row) {
            throw new NotFoundHttpException('Questão não encontrada.');
        }
        if ($row->scope === 'concurso' && $row->contest_id) {
            $hasContest = DB::table('cjc_student_contests')->where('tenant_id', $tenant)->where('student_id', $student->id)
                ->where('contest_id', $row->contest_id)->where('is_active', true)->exists();
            if (! $hasContest) {
                throw new NotFoundHttpException('Questão fora do seu escopo.');
            }
        }
        $correct = $this->normalized($data['answer']) === $this->normalized((string) $row->correct_answer);
        $id = (string) Str::uuid();
        $now = now();
        DB::transaction(function () use ($tenant, $student, $row, $data, $correct, $id, $now) {
            DB::table('cjc_question_answers')->insert([
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id, 'question_id' => $row->id,
                'contest_id' => $data['contest_id'] ?? $row->contest_id, 'answer' => $data['answer'], 'is_correct' => $correct,
                'answered_at' => $now, 'created_at' => $now, 'updated_at' => $now,
            ]);
            DB::table('cjc_question_logs')->insert([
                'id' => (string) Str::uuid(), 'tenant_id' => $tenant, 'student_id' => $student->id,
                'contest_id' => $data['contest_id'] ?? $row->contest_id, 'subject_id' => null, 'topic_id' => null, 'subtopic_id' => null,
                'solved' => 1, 'correct' => $correct ? 1 : 0, 'wrong' => $correct ? 0 : 1,
                'origin' => 'banco_questoes', 'is_active' => true, 'recorded_at' => $now, 'created_at' => $now, 'updated_at' => $now,
            ]);
        });

        return response()->json([
            'ok' => true,
            'correct' => $correct,
            'correct_answer' => $row->correct_answer,
            'explanation' => $row->explanation,
        ]);
    }

    private function validateQuestion(Request $request): array
    {
        return $request->validate([
            'subject' => ['required', 'string', 'max:150'],
            'topic' => ['nullable', 'string', 'max:150'],
            'type' => ['nullable', 'in:multipla_escolha,certo_errado'],
            'prompt' => ['required', 'string'],
            'alternatives' => ['nullable', 'array'],
            'correct_answer' => ['required', 'string', 'max:255'],
            'explanation' => ['nullable', 'string'],
            'scope' => ['nullable', 'in:global,concurso'],
            'contest_id' => ['nullable', 'uuid'],
        ]);
    }

    private function requireContest(int $tenantId, string $contestId): void
    {
        if (! DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('id', $contestId)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Concurso não encontrado.');
        }
    }

    private function normalized(string $value): string
    {
        return mb_strtolower(trim($value), 'UTF-8');
    }
}
