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

class ContentController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function storeContest(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'board' => ['nullable', 'string', 'max:160'],
            'position' => ['nullable', 'string', 'max:255'],
            'salary' => ['nullable', 'numeric', 'min:0'],
            'exam_date' => ['nullable', 'date'],
            'pre_notice' => ['sometimes', 'boolean'],
            'review_intervals' => ['nullable', 'string', 'max:255'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $id = (string) Str::uuid();
        DB::table('cjc_contests')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'name' => trim($data['name']),
            'board' => $data['board'] ?? null,
            'position' => $data['position'] ?? null,
            'salary' => $data['salary'] ?? null,
            'exam_date' => $data['exam_date'] ?? null,
            'pre_notice' => (bool) ($data['pre_notice'] ?? false),
            'review_intervals' => $data['review_intervals'] ?? '1,7,30',
            'created_by' => $actor->id,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
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
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('cjc_contests', $contest, $tenantId);
        $update = array_intersect_key($data, array_flip(['name', 'board', 'position', 'salary', 'exam_date', 'pre_notice', 'review_intervals']));
        $update['updated_at'] = now();
        DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('id', $contest)->update($update);
        $this->audit->record($tenantId, $actor, 'contest.updated', 'contest', $contest, null, $data);

        return response()->json(['ok' => true]);
    }

    public function destroyContest(Request $request, string $contest): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('cjc_contests', $contest, $tenantId);
        DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('id', $contest)->update(['is_active' => false, 'updated_at' => now()]);
        DB::table('cjc_student_contests')->where('tenant_id', $tenantId)->where('contest_id', $contest)->update(['is_active' => false, 'updated_at' => now()]);
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
        $this->requireRow('cjc_contests', $contest, $tenantId);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $existing = DB::table('cjc_student_contests')->where('tenant_id', $tenantId)->where('student_id', $studentUser->id)->where('contest_id', $contest)->first();
        $payload = [
            'group' => $data['group'] ?? 'foco',
            'position' => (int) ($data['position'] ?? 0),
            'include_in_stats' => (bool) ($data['include_in_stats'] ?? true),
            'is_active' => true,
            'assigned_by' => $actor->id,
            'updated_at' => now(),
        ];
        if ($existing) {
            DB::table('cjc_student_contests')->where('id', $existing->id)->update($payload);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_student_contests')->insert(array_merge($payload, [
                'id' => $id,
                'tenant_id' => $tenantId,
                'student_id' => $studentUser->id,
                'contest_id' => $contest,
                'created_at' => now(),
            ]));
        }
        $this->audit->record($tenantId, $actor, 'contest.assigned', 'student_contest', (string) $id, $studentUser->id, ['contest_id' => $contest] + $data);

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function storeEdict(Request $request): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['required', 'uuid'],
            'name' => ['required', 'string', 'max:255'],
            'version' => ['nullable', 'string', 'max:80'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('cjc_contests', $data['contest_id'], $tenantId);
        $id = (string) Str::uuid();
        DB::table('cjc_edicts')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'contest_id' => $data['contest_id'],
            'name' => trim($data['name']), 'version' => $data['version'] ?? null,
            'created_by' => $actor->id, 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);
        $this->audit->record($tenantId, $actor, 'edict.created', 'edict', $id, null, $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function storeSubject(Request $request, string $edict): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'position' => ['nullable', 'integer', 'min:0'],
            'weight' => ['nullable', 'numeric'],
            'relevance' => ['nullable', 'integer', 'min:0', 'max:100'],
            'notes' => ['nullable', 'string'],
            'materials' => ['nullable', 'array'],
        ]);
        return $this->storeHierarchyItem($request, 'cjc_edicts', $edict, 'cjc_subjects', 'edict_id', $data, 'subject');
    }

    public function storeTopic(Request $request, string $subject): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:500'],
            'position' => ['nullable', 'integer', 'min:0'],
            'weight' => ['nullable', 'numeric'],
            'relevance' => ['nullable', 'integer', 'min:0', 'max:100'],
            'notes' => ['nullable', 'string'],
            'materials' => ['nullable', 'array'],
        ]);
        return $this->storeHierarchyItem($request, 'cjc_subjects', $subject, 'cjc_topics', 'subject_id', $data, 'topic');
    }

    public function storeSubtopic(Request $request, string $topic): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:500'],
            'position' => ['nullable', 'integer', 'min:0'],
            'weight' => ['nullable', 'numeric'],
            'relevance' => ['nullable', 'integer', 'min:0', 'max:100'],
            'notes' => ['nullable', 'string'],
            'materials' => ['nullable', 'array'],
        ]);
        return $this->storeHierarchyItem($request, 'cjc_topics', $topic, 'cjc_subtopics', 'topic_id', $data, 'subtopic');
    }

    public function assignEdict(Request $request, string $edict, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireRow('cjc_edicts', $edict, $tenantId);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $existing = DB::table('cjc_student_edicts')->where('tenant_id', $tenantId)->where('student_id', $studentUser->id)->where('edict_id', $edict)->first();
        if ($existing) {
            DB::table('cjc_student_edicts')->where('id', $existing->id)->update(['assigned_by' => $actor->id, 'is_active' => true, 'updated_at' => now()]);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_student_edicts')->insert([
                'id' => $id, 'tenant_id' => $tenantId, 'student_id' => $studentUser->id, 'edict_id' => $edict,
                'assigned_by' => $actor->id, 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
            ]);
        }
        $this->audit->record($tenantId, $actor, 'edict.assigned', 'student_edict', (string) $id, $studentUser->id, ['edict_id' => $edict]);

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function storeMaterial(Request $request): JsonResponse
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'type' => ['required', 'in:arquivo,youtube,texto,link'],
            'url' => ['nullable', 'string', 'max:2048'],
            'text' => ['nullable', 'string'],
            'scope' => ['required', 'in:global,edital'],
            'edict_id' => ['nullable', 'uuid'],
            'folder' => ['nullable', 'string', 'max:255'],
            'file_name' => ['nullable', 'string', 'max:255'],
            'file_path' => ['nullable', 'string', 'max:1024'],
            'file_mime' => ['nullable', 'string', 'max:255'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        if (($data['scope'] ?? 'global') === 'edital') {
            if (empty($data['edict_id'])) {
                return response()->json(['message' => 'edict_id é obrigatório para material de edital.'], 422);
            }
            $this->requireRow('cjc_edicts', $data['edict_id'], $tenantId);
        }
        $id = (string) Str::uuid();
        DB::table('cjc_support_materials')->insert([
            'id' => $id, 'tenant_id' => $tenantId, 'title' => trim($data['title']),
            'description' => $data['description'] ?? null, 'type' => $data['type'], 'url' => $data['url'] ?? null,
            'text' => $data['text'] ?? null, 'scope' => $data['scope'], 'edict_id' => $data['edict_id'] ?? null,
            'folder' => $data['folder'] ?? '', 'file_name' => $data['file_name'] ?? null,
            'file_path' => $data['file_path'] ?? null, 'file_mime' => $data['file_mime'] ?? null,
            'created_by' => $actor->id, 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);
        $this->audit->record($tenantId, $actor, 'material.created', 'support_material', $id, null, $data);

        return response()->json(['ok' => true, 'id' => $id], 201);
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

    private function requireRow(string $table, string $id, int $tenantId): object
    {
        $row = DB::table($table)->where('tenant_id', $tenantId)->where('id', $id)->first();
        if (! $row) {
            throw new NotFoundHttpException('Registro CJC não encontrado neste tenant.');
        }

        return $row;
    }
}
