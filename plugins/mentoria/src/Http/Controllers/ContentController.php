<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\AuditService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ContentController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function storeContest(Request $request): JsonResponse
    {
        $data = $this->validateContest($request);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $id = $this->insertContest($tenantId, $actor->id, $data);
        $this->audit->record($tenantId, $actor, 'contest.created', 'contest', $id, null, $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateContest(Request $request, string $contest): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'board' => ['sometimes', 'nullable', 'string', 'max:160'],
            'position' => ['sometimes', 'nullable', 'string', 'max:255'],
            'salary' => ['sometimes', 'nullable', 'numeric', 'min:0'],
            'exam_date' => ['sometimes', 'nullable', 'date'],
            'pre_notice' => ['sometimes', 'boolean'],
            'review_intervals' => ['sometimes', 'string', 'max:255'],
            'logo' => ['sometimes', 'nullable', 'string'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_contests', $contest, $tenantId);

        $data['updated_at'] = now();
        DB::table('mentoria_contests')->where('tenant_id', $tenantId)->where('id', $contest)->update($data);
        $this->audit->record($tenantId, $actor, 'contest.updated', 'contest', $contest, null, $data);

        return response()->json(['ok' => true]);
    }

    public function destroyContest(Request $request, string $contest): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_contests', $contest, $tenantId);

        DB::transaction(function () use ($tenantId, $contest): void {
            DB::table('mentoria_contests')->where('tenant_id', $tenantId)->where('id', $contest)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_student_contests')->where('tenant_id', $tenantId)->where('contest_id', $contest)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_edicts')->where('tenant_id', $tenantId)->where('contest_id', $contest)
                ->update(['is_active' => false, 'updated_at' => now()]);
        });

        $this->audit->record($tenantId, $actor, 'contest.disabled', 'contest', $contest);

        return response()->json(['ok' => true]);
    }

    public function assignContest(Request $request, string $contest, int $student): JsonResponse
    {
        $data = $request->validate([
            'group' => ['nullable', 'in:foco,mira,realizado'],
            'position' => ['nullable', 'integer', 'min:0'],
            'include_in_stats' => ['nullable', 'boolean'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_contests', $contest, $tenantId);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $id = $this->upsertStudentContest($tenantId, $actor->id, $studentUser->id, $contest, $data);

        $this->audit->record($tenantId, $actor, 'contest.assigned', 'student_contest', $id, $studentUser->id, ['contest_id' => $contest] + $data);

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function bulkAssignContest(Request $request, string $contest): JsonResponse
    {
        $data = $request->validate([
            'audience_type' => ['required', 'in:all,product,students'],
            'product_id' => ['nullable', 'uuid'],
            'student_ids' => ['nullable', 'array'],
            'student_ids.*' => ['integer'],
            'group' => ['nullable', 'in:foco,mira,realizado'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_contests', $contest, $tenantId);
        $students = $this->studentsForBulkAudience($tenantId, $data);
        $count = 0;

        foreach ($students as $student) {
            $this->upsertStudentContest($tenantId, $actor->id, (int) $student->id, $contest, ['group' => $data['group'] ?? 'foco']);
            $count++;
        }

        $this->audit->record($tenantId, $actor, 'contest.bulk_assigned', 'contest', $contest, null, ['count' => $count, 'audience_type' => $data['audience_type']]);

        return response()->json(['ok' => true, 'assigned' => $count]);
    }

    public function updateStudentContest(Request $request, string $contest, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $row = DB::table('mentoria_student_contests')
            ->where('tenant_id', $tenantId)->where('student_id', $studentUser->id)->where('contest_id', $contest)->first();

        if (! $row) {
            throw new NotFoundHttpException('Concurso não atribuído ao aluno.');
        }

        $data = $request->validate([
            'group' => ['sometimes', 'in:foco,mira,realizado'],
            'position' => ['sometimes', 'integer', 'min:0'],
            'include_in_stats' => ['sometimes', 'boolean'],
            'result' => ['sometimes', 'nullable', 'in:aguardando,aprovado,cadastro_reserva,reprovado,eliminado'],
            'ranking' => ['sometimes', 'nullable', 'integer', 'min:1'],
            'final_score' => ['sometimes', 'nullable', 'numeric'],
            'appointed' => ['sometimes', 'boolean'],
            'appointment_date' => ['sometimes', 'nullable', 'date'],
            'is_active' => ['sometimes', 'boolean'],
        ]);
        $data['updated_at'] = now();
        DB::table('mentoria_student_contests')->where('id', $row->id)->update($data);
        $this->audit->record($tenantId, $actor, 'student_contest.updated', 'student_contest', (string) $row->id, $studentUser->id, $data);

        return response()->json(['ok' => true]);
    }

    public function unassignContest(Request $request, string $contest, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $updated = DB::table('mentoria_student_contests')
            ->where('tenant_id', $tenantId)->where('student_id', $studentUser->id)->where('contest_id', $contest)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Concurso não atribuído ao aluno.');
        }

        $this->audit->record($tenantId, $actor, 'contest.unassigned', 'contest', $contest, $studentUser->id);

        return response()->json(['ok' => true]);
    }

    public function reorderStudentContests(Request $request, int $student): JsonResponse
    {
        $data = $request->validate([
            'items' => ['required', 'array', 'min:1'],
            'items.*.contest_id' => ['required', 'uuid'],
            'items.*.position' => ['required', 'integer', 'min:0'],
            'items.*.group' => ['nullable', 'in:foco,mira,realizado'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);

        DB::transaction(function () use ($tenantId, $studentUser, $data): void {
            foreach ($data['items'] as $item) {
                DB::table('mentoria_student_contests')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $studentUser->id)
                    ->where('contest_id', $item['contest_id'])
                    ->update([
                        'position' => $item['position'],
                        'group' => $item['group'] ?? 'foco',
                        'updated_at' => now(),
                    ]);
            }
        });

        return response()->json(['ok' => true]);
    }

    public function storeEdict(Request $request): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['required', 'uuid'],
            'name' => ['required', 'string', 'max:255'],
            'version' => ['nullable', 'string', 'max:80'],
            'subjects' => ['nullable', 'array'],
            'materias' => ['nullable', 'array'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_contests', $data['contest_id'], $tenantId);

        $id = DB::transaction(function () use ($tenantId, $actor, $data): string {
            $edictId = (string) Str::uuid();
            DB::table('mentoria_edicts')->insert([
                'id' => $edictId,
                'tenant_id' => $tenantId,
                'contest_id' => $data['contest_id'],
                'name' => trim($data['name']),
                'version' => $data['version'] ?? null,
                'created_by' => $actor->id,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $subjects = $data['subjects'] ?? $data['materias'] ?? [];
            $this->insertEdictTree($tenantId, $edictId, $subjects);

            return $edictId;
        });

        $this->audit->record($tenantId, $actor, 'edict.created', 'edict', $id, null, ['contest_id' => $data['contest_id'], 'name' => $data['name']]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateEdict(Request $request, string $edict): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'version' => ['sometimes', 'nullable', 'string', 'max:80'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_edicts', $edict, $tenantId);
        $data['updated_at'] = now();
        DB::table('mentoria_edicts')->where('tenant_id', $tenantId)->where('id', $edict)->update($data);

        return response()->json(['ok' => true]);
    }

    public function destroyEdict(Request $request, string $edict): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_edicts', $edict, $tenantId);

        DB::transaction(function () use ($tenantId, $edict): void {
            $subjectIds = DB::table('mentoria_subjects')->where('tenant_id', $tenantId)->where('edict_id', $edict)->pluck('id');
            $topicIds = DB::table('mentoria_topics')->where('tenant_id', $tenantId)->whereIn('subject_id', $subjectIds)->pluck('id');

            DB::table('mentoria_subtopics')->where('tenant_id', $tenantId)->whereIn('topic_id', $topicIds)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_topics')->where('tenant_id', $tenantId)->whereIn('subject_id', $subjectIds)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_subjects')->where('tenant_id', $tenantId)->where('edict_id', $edict)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_edicts')->where('tenant_id', $tenantId)->where('id', $edict)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_student_edicts')->where('tenant_id', $tenantId)->where('edict_id', $edict)->update(['is_active' => false, 'updated_at' => now()]);
        });

        return response()->json(['ok' => true]);
    }

    public function storeSubject(Request $request, string $edict): JsonResponse
    {
        $data = $this->validateHierarchyItem($request);
        return $this->storeHierarchyItem($request, 'mentoria_edicts', $edict, 'mentoria_subjects', 'edict_id', $data, 'subject');
    }

    public function updateSubject(Request $request, string $subject): JsonResponse
    {
        return $this->updateHierarchyItem($request, 'mentoria_subjects', $subject);
    }

    public function destroySubject(Request $request, string $subject): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_subjects', $subject, $tenantId);
        $topicIds = DB::table('mentoria_topics')->where('tenant_id', $tenantId)->where('subject_id', $subject)->pluck('id');

        DB::transaction(function () use ($tenantId, $subject, $topicIds): void {
            DB::table('mentoria_subtopics')->where('tenant_id', $tenantId)->whereIn('topic_id', $topicIds)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_topics')->where('tenant_id', $tenantId)->where('subject_id', $subject)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_subjects')->where('tenant_id', $tenantId)->where('id', $subject)->update(['is_active' => false, 'updated_at' => now()]);
        });

        return response()->json(['ok' => true]);
    }

    public function storeTopic(Request $request, string $subject): JsonResponse
    {
        $data = $this->validateHierarchyItem($request, 500);
        return $this->storeHierarchyItem($request, 'mentoria_subjects', $subject, 'mentoria_topics', 'subject_id', $data, 'topic');
    }

    public function updateTopic(Request $request, string $topic): JsonResponse
    {
        return $this->updateHierarchyItem($request, 'mentoria_topics', $topic, 500);
    }

    public function destroyTopic(Request $request, string $topic): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_topics', $topic, $tenantId);

        DB::transaction(function () use ($tenantId, $topic): void {
            DB::table('mentoria_subtopics')->where('tenant_id', $tenantId)->where('topic_id', $topic)->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('mentoria_topics')->where('tenant_id', $tenantId)->where('id', $topic)->update(['is_active' => false, 'updated_at' => now()]);
        });

        return response()->json(['ok' => true]);
    }

    public function storeSubtopic(Request $request, string $topic): JsonResponse
    {
        $data = $this->validateHierarchyItem($request, 500);
        return $this->storeHierarchyItem($request, 'mentoria_topics', $topic, 'mentoria_subtopics', 'topic_id', $data, 'subtopic');
    }

    public function updateSubtopic(Request $request, string $subtopic): JsonResponse
    {
        return $this->updateHierarchyItem($request, 'mentoria_subtopics', $subtopic, 500);
    }

    public function destroySubtopic(Request $request, string $subtopic): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_subtopics', $subtopic, $tenantId);
        DB::table('mentoria_subtopics')->where('tenant_id', $tenantId)->where('id', $subtopic)
            ->update(['is_active' => false, 'updated_at' => now()]);

        return response()->json(['ok' => true]);
    }

    public function reorderEdictItems(Request $request, string $edict): JsonResponse
    {
        $data = $request->validate([
            'items' => ['required', 'array', 'min:1'],
            'items.*.type' => ['required', 'in:subject,topic,subtopic'],
            'items.*.id' => ['required', 'uuid'],
            'items.*.position' => ['required', 'integer', 'min:0'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_edicts', $edict, $tenantId);

        DB::transaction(function () use ($tenantId, $edict, $data): void {
            foreach ($data['items'] as $item) {
                $table = match ($item['type']) {
                    'subject' => 'mentoria_subjects',
                    'topic' => 'mentoria_topics',
                    'subtopic' => 'mentoria_subtopics',
                };
                $row = $this->requireRow($table, $item['id'], $tenantId);
                if ($item['type'] === 'subject' && (string) $row->edict_id !== $edict) {
                    throw new NotFoundHttpException('Matéria fora do edital informado.');
                }
                DB::table($table)->where('tenant_id', $tenantId)->where('id', $item['id'])
                    ->update(['position' => $item['position'], 'updated_at' => now()]);
            }
        });

        return response()->json(['ok' => true]);
    }

    public function assignEdict(Request $request, string $edict, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('mentoria_edicts', $edict, $tenantId);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $id = $this->upsertStudentEdict($tenantId, $actor->id, $studentUser->id, $edict);

        $this->audit->record($tenantId, $actor, 'edict.assigned', 'student_edict', $id, $studentUser->id, ['edict_id' => $edict]);

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function bulkAssignEdict(Request $request, string $edict): JsonResponse
    {
        $data = $request->validate([
            'audience_type' => ['required', 'in:all,product,students'],
            'product_id' => ['nullable', 'uuid'],
            'student_ids' => ['nullable', 'array'],
            'student_ids.*' => ['integer'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $edictRow = $this->requireRow('mentoria_edicts', $edict, $tenantId);
        $students = $this->studentsForBulkAudience($tenantId, $data);
        $count = 0;

        foreach ($students as $student) {
            $this->upsertStudentContest($tenantId, $actor->id, (int) $student->id, (string) $edictRow->contest_id, []);
            $this->upsertStudentEdict($tenantId, $actor->id, (int) $student->id, $edict);
            $count++;
        }

        return response()->json(['ok' => true, 'assigned' => $count]);
    }

    public function unassignEdict(Request $request, string $edict, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $updated = DB::table('mentoria_student_edicts')
            ->where('tenant_id', $tenantId)->where('student_id', $studentUser->id)->where('edict_id', $edict)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Edital não atribuído ao aluno.');
        }

        return response()->json(['ok' => true]);
    }

    public function importCatalog(Request $request): JsonResponse
    {
        $payload = $request->validate(['payload' => ['nullable', 'array']])['payload'] ?? $request->all();
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $name = trim((string) ($payload['name'] ?? $payload['nome'] ?? ''));
        if ($name === '') {
            return response()->json(['message' => 'Nome do concurso é obrigatório.'], 422);
        }

        $contestData = [
            'name' => $name,
            'board' => $payload['board'] ?? $payload['banca'] ?? null,
            'position' => $payload['position'] ?? $payload['cargo'] ?? null,
            'salary' => $payload['salary'] ?? $payload['salario'] ?? null,
            'exam_date' => $payload['exam_date'] ?? $payload['dataProva'] ?? null,
            'pre_notice' => (bool) ($payload['pre_notice'] ?? $payload['preEdital'] ?? false),
            'review_intervals' => (string) ($payload['review_intervals'] ?? $payload['prazosRevisao'] ?? '1,7,30'),
            'logo' => $payload['logo'] ?? $payload['logotipo'] ?? null,
        ];

        [$contestId, $edictId] = DB::transaction(function () use ($tenantId, $actor, $payload, $contestData, $name): array {
            $contestId = $this->insertContest($tenantId, $actor->id, $contestData);
            $edictId = (string) Str::uuid();
            DB::table('mentoria_edicts')->insert([
                'id' => $edictId,
                'tenant_id' => $tenantId,
                'contest_id' => $contestId,
                'name' => trim((string) ($payload['edict_name'] ?? $payload['nomeEdital'] ?? 'Edital '.$name)),
                'version' => $payload['version'] ?? $payload['versao'] ?? null,
                'created_by' => $actor->id,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $subjects = $payload['subjects'] ?? $payload['materias'] ?? [];
            $this->insertEdictTree($tenantId, $edictId, is_array($subjects) ? $subjects : []);

            return [$contestId, $edictId];
        });

        $this->audit->record($tenantId, $actor, 'catalog.imported', 'contest', $contestId, null, ['edict_id' => $edictId]);

        return response()->json(['ok' => true, 'contest_id' => $contestId, 'edict_id' => $edictId], 201);
    }

    private function validateContest(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'board' => ['nullable', 'string', 'max:160'],
            'position' => ['nullable', 'string', 'max:255'],
            'salary' => ['nullable', 'numeric', 'min:0'],
            'exam_date' => ['nullable', 'date'],
            'pre_notice' => ['sometimes', 'boolean'],
            'review_intervals' => ['nullable', 'string', 'max:255'],
            'logo' => ['nullable', 'string'],
        ]);
    }

    private function insertContest(int $tenantId, int $actorId, array $data): string
    {
        $id = (string) Str::uuid();
        DB::table('mentoria_contests')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'name' => trim((string) $data['name']),
            'board' => $data['board'] ?? null,
            'position' => $data['position'] ?? null,
            'salary' => $data['salary'] ?? null,
            'exam_date' => $data['exam_date'] ?? null,
            'pre_notice' => (bool) ($data['pre_notice'] ?? false),
            'logo' => $data['logo'] ?? null,
            'review_intervals' => $data['review_intervals'] ?? '1,7,30',
            'created_by' => $actorId,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    private function validateHierarchyItem(Request $request, int $maxName = 255): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:'.$maxName],
            'position' => ['nullable', 'integer', 'min:0'],
            'weight' => ['nullable', 'numeric'],
            'relevance' => ['nullable', 'integer', 'min:0', 'max:100'],
            'notes' => ['nullable', 'string'],
            'materials' => ['nullable', 'array'],
        ]);
    }

    private function updateHierarchyItem(Request $request, string $table, string $id, int $maxName = 255): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:'.$maxName],
            'position' => ['sometimes', 'integer', 'min:0'],
            'weight' => ['sometimes', 'nullable', 'numeric'],
            'relevance' => ['sometimes', 'nullable', 'integer', 'min:0', 'max:100'],
            'notes' => ['sometimes', 'nullable', 'string'],
            'materials' => ['sometimes', 'nullable', 'array'],
            'is_active' => ['sometimes', 'boolean'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow($table, $id, $tenantId);

        if (array_key_exists('materials', $data)) {
            $data['materials'] = $data['materials'] === null ? null : json_encode($data['materials'], JSON_UNESCAPED_UNICODE);
        }
        $data['updated_at'] = now();
        DB::table($table)->where('tenant_id', $tenantId)->where('id', $id)->update($data);

        return response()->json(['ok' => true]);
    }

    private function storeHierarchyItem(Request $request, string $parentTable, string $parentId, string $table, string $foreignKey, array $data, string $entity): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow($parentTable, $parentId, $tenantId);
        $id = (string) Str::uuid();

        DB::table($table)->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            $foreignKey => $parentId,
            'name' => trim($data['name']),
            'position' => (int) ($data['position'] ?? 0),
            'weight' => $data['weight'] ?? null,
            'relevance' => $data['relevance'] ?? null,
            'notes' => $data['notes'] ?? null,
            'materials' => isset($data['materials']) ? json_encode($data['materials'], JSON_UNESCAPED_UNICODE) : null,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->audit->record($tenantId, $actor, $entity.'.created', $entity, $id, null, $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function insertEdictTree(int $tenantId, string $edictId, array $subjects): void
    {
        foreach (array_values($subjects) as $subjectIndex => $subject) {
            if (! is_array($subject)) {
                continue;
            }
            $name = trim((string) ($subject['name'] ?? $subject['nome'] ?? ''));
            if ($name === '') {
                continue;
            }

            $subjectId = (string) Str::uuid();
            DB::table('mentoria_subjects')->insert([
                'id' => $subjectId,
                'tenant_id' => $tenantId,
                'edict_id' => $edictId,
                'name' => $name,
                'position' => (int) ($subject['position'] ?? $subject['ordem'] ?? $subjectIndex + 1),
                'weight' => $subject['weight'] ?? $subject['peso'] ?? null,
                'relevance' => $subject['relevance'] ?? $subject['relevancia'] ?? null,
                'notes' => $subject['notes'] ?? $subject['observacoes'] ?? null,
                'materials' => isset($subject['materials']) ? json_encode($subject['materials'], JSON_UNESCAPED_UNICODE) : null,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $topics = $subject['topics'] ?? $subject['topicos'] ?? [];
            if (! is_array($topics)) {
                continue;
            }

            foreach (array_values($topics) as $topicIndex => $topic) {
                if (is_string($topic)) {
                    $topic = ['name' => $topic];
                }
                if (! is_array($topic)) {
                    continue;
                }
                $topicName = trim((string) ($topic['name'] ?? $topic['nome'] ?? ''));
                if ($topicName === '') {
                    continue;
                }

                $topicId = (string) Str::uuid();
                DB::table('mentoria_topics')->insert([
                    'id' => $topicId,
                    'tenant_id' => $tenantId,
                    'subject_id' => $subjectId,
                    'name' => $topicName,
                    'position' => (int) ($topic['position'] ?? $topic['ordem'] ?? $topicIndex + 1),
                    'weight' => $topic['weight'] ?? $topic['peso'] ?? null,
                    'relevance' => $topic['relevance'] ?? $topic['relevancia'] ?? null,
                    'notes' => $topic['notes'] ?? $topic['observacoes'] ?? null,
                    'materials' => isset($topic['materials']) ? json_encode($topic['materials'], JSON_UNESCAPED_UNICODE) : null,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                $subtopics = $topic['subtopics'] ?? $topic['subtopicos'] ?? [];
                if (! is_array($subtopics)) {
                    continue;
                }

                foreach (array_values($subtopics) as $subIndex => $subtopic) {
                    if (is_string($subtopic)) {
                        $subtopic = ['name' => $subtopic];
                    }
                    if (! is_array($subtopic)) {
                        continue;
                    }
                    $subName = trim((string) ($subtopic['name'] ?? $subtopic['nome'] ?? ''));
                    if ($subName === '') {
                        continue;
                    }

                    DB::table('mentoria_subtopics')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'topic_id' => $topicId,
                        'name' => $subName,
                        'position' => (int) ($subtopic['position'] ?? $subtopic['ordem'] ?? $subIndex + 1),
                        'weight' => $subtopic['weight'] ?? $subtopic['peso'] ?? null,
                        'relevance' => $subtopic['relevance'] ?? $subtopic['relevancia'] ?? null,
                        'notes' => $subtopic['notes'] ?? $subtopic['observacoes'] ?? null,
                        'materials' => isset($subtopic['materials']) ? json_encode($subtopic['materials'], JSON_UNESCAPED_UNICODE) : null,
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }

    private function upsertStudentContest(int $tenantId, int $actorId, int $studentId, string $contestId, array $data): string
    {
        $existing = DB::table('mentoria_student_contests')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('contest_id', $contestId)->first();

        $payload = [
            'group' => $data['group'] ?? 'foco',
            'position' => (int) ($data['position'] ?? 0),
            'include_in_stats' => (bool) ($data['include_in_stats'] ?? true),
            'is_active' => true,
            'assigned_by' => $actorId,
            'updated_at' => now(),
        ];

        if ($existing) {
            DB::table('mentoria_student_contests')->where('id', $existing->id)->update($payload);
            return (string) $existing->id;
        }

        $id = (string) Str::uuid();
        DB::table('mentoria_student_contests')->insert($payload + [
            'id' => $id,
            'tenant_id' => $tenantId,
            'student_id' => $studentId,
            'contest_id' => $contestId,
            'created_at' => now(),
        ]);

        return $id;
    }

    private function upsertStudentEdict(int $tenantId, int $actorId, int $studentId, string $edictId): string
    {
        $existing = DB::table('mentoria_student_edicts')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('edict_id', $edictId)->first();

        if ($existing) {
            DB::table('mentoria_student_edicts')->where('id', $existing->id)->update([
                'assigned_by' => $actorId,
                'is_active' => true,
                'updated_at' => now(),
            ]);
            return (string) $existing->id;
        }

        $id = (string) Str::uuid();
        DB::table('mentoria_student_edicts')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'student_id' => $studentId,
            'edict_id' => $edictId,
            'assigned_by' => $actorId,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    private function studentsForBulkAudience(int $tenantId, array $data)
    {
        return match ($data['audience_type']) {
            'all' => $this->access->studentsForTenant($tenantId),
            'product' => $this->access->studentsForProduct($tenantId, (string) ($data['product_id'] ?? '')),
            'students' => $this->access->studentsForTenant($tenantId)
                ->whereIn('id', array_map('intval', $data['student_ids'] ?? []))
                ->values(),
        };
    }

    private function requireRow(string $table, string $id, int $tenantId): object
    {
        $row = DB::table($table)->where('tenant_id', $tenantId)->where('id', $id)->first();
        if (! $row) {
            throw new NotFoundHttpException('Registro Mentoria não encontrado neste tenant.');
        }

        return $row;
    }
}
