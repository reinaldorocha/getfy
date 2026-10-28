<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CohortController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $perPage = min(max((int) $request->query('per_page', 25), 5), 100);

        $query = DB::table('mentoria2_cohorts as ch')
            ->leftJoin('mentoria2_contests as c', 'c.id', '=', 'ch.contest_id')
            ->where('ch.tenant_id', $tenantId)
            ->where('ch.is_active', true)
            ->select(
                'ch.id',
                'ch.name',
                'ch.description',
                'ch.contest_id',
                'c.name as contest_name',
                DB::raw('(select count(*) from mentoria2_cohort_members where cohort_id = ch.id) as students_count'),
                'ch.created_at',
                'ch.updated_at'
            );

        if ($request->filled('search')) {
            $query->where('ch.name', 'like', '%' . $request->query('search') . '%');
        }

        $paginated = $query->latest('ch.created_at')->paginate($perPage);

        return response()->json([
            'data' => $paginated->items(),
            'meta' => [
                'current_page' => $paginated->currentPage(),
                'last_page' => $paginated->lastPage(),
                'per_page' => $paginated->perPage(),
                'total' => $paginated->total(),
            ],
            'links' => [
                'first' => $paginated->url(1),
                'last' => $paginated->url($paginated->lastPage()),
                'prev' => $paginated->previousPageUrl(),
                'next' => $paginated->nextPageUrl(),
            ],
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'contest_id' => ['nullable', 'uuid'],
            'description' => ['nullable', 'string', 'max:1000'],
        ]);

        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $id = (string) Str::uuid();

        DB::table('mentoria2_cohorts')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'name' => trim($data['name']),
            'contest_id' => $data['contest_id'] ?? null,
            'description' => $data['description'] ?? null,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->audit->record($tenantId, $actor, 'cohort.created', 'cohort', $id, null, $data);

        return response()->json([
            'ok' => true,
            'id' => $id,
            'name' => trim($data['name']),
        ], 201);
    }

    public function update(Request $request, string $cohort): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'description' => ['sometimes', 'nullable', 'string', 'max:1000'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireCohort($tenantId, $cohort);

        $data['updated_at'] = now();
        DB::table('mentoria2_cohorts')
            ->where('tenant_id', $tenantId)
            ->where('id', $cohort)
            ->update($data);

        $this->audit->record($tenantId, $actor, 'cohort.updated', 'cohort', $cohort, null, $data);

        return response()->json(['ok' => true]);
    }

    public function destroy(Request $request, string $cohort): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireCohort($tenantId, $cohort);

        DB::table('mentoria2_cohorts')
            ->where('tenant_id', $tenantId)
            ->where('id', $cohort)
            ->update(['is_active' => false, 'updated_at' => now()]);

        $this->audit->record($tenantId, $actor, 'cohort.deleted', 'cohort', $cohort);

        return response()->json(['ok' => true]);
    }

    public function members(Request $request, string $cohort): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireCohort($tenantId, $cohort);

        $members = DB::table('mentoria2_cohort_members as cm')
            ->join('users as u', 'u.id', '=', 'cm.student_id')
            ->where('cm.tenant_id', $tenantId)
            ->where('cm.cohort_id', $cohort)
            ->select('u.id', 'u.name', 'u.email', 'cm.ranking_opt_in', 'cm.created_at as joined_at')
            ->orderBy('u.name')
            ->get();

        return response()->json(['data' => $members]);
    }

    public function addMember(Request $request, string $cohort): JsonResponse
    {
        $data = $request->validate([
            'student_id' => ['required', 'integer'],
            'ranking_opt_in' => ['nullable', 'boolean'],
        ]);

        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireCohort($tenantId, $cohort);
        $studentUser = $this->access->assertStudentInTenant($actor, (int) $data['student_id']);

        $existing = DB::table('mentoria2_cohort_members')
            ->where('cohort_id', $cohort)
            ->where('student_id', $studentUser->id)
            ->first();

        if ($existing) {
            return response()->json(['ok' => true, 'id' => $existing->id]);
        }

        $id = (string) Str::uuid();
        DB::table('mentoria2_cohort_members')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'cohort_id' => $cohort,
            'student_id' => $studentUser->id,
            'ranking_opt_in' => $data['ranking_opt_in'] ?? false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->audit->record($tenantId, $actor, 'cohort.member_added', 'cohort', $cohort, $studentUser->id);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function removeMember(Request $request, string $cohort, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->requireCohort($tenantId, $cohort);

        DB::table('mentoria2_cohort_members')
            ->where('tenant_id', $tenantId)
            ->where('cohort_id', $cohort)
            ->where('student_id', $student)
            ->delete();

        $this->audit->record($tenantId, $actor, 'cohort.member_removed', 'cohort', $cohort, $student);

        return response()->json(['ok' => true]);
    }

    private function requireCohort(int $tenantId, string $cohortId): object
    {
        $row = DB::table('mentoria2_cohorts')
            ->where('tenant_id', $tenantId)
            ->where('id', $cohortId)
            ->where('is_active', true)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Turma não encontrada.');
        }

        return $row;
    }
}

