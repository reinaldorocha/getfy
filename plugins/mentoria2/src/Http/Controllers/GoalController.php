<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Plugins\Mentoria2\Services\GoalService;
use Plugins\Mentoria2\Services\NotificationService;

class GoalController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly GoalService $goals,
        private readonly AuditService $audit,
        private readonly NotificationService $notifications,
    ) {}

    public function index(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return response()->json(['goals' => $this->goals->forStudent($tenant, (int) $student->id)]);
    }

    public function store(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $data = $request->validate([
            'name' => ['required', 'string', 'max:180'],
            'metric' => ['required', 'in:questions,hours,sessions,reviews,flashcards'],
            'target' => ['required', 'integer', 'min:1', 'max:1000000'],
            'starts_on' => ['required', 'date'],
            'ends_on' => ['required', 'date', 'after_or_equal:starts_on'],
            'contest_id' => ['nullable', 'uuid'],
            'student_ids' => ['nullable', 'array', 'max:1000'],
            'student_ids.*' => ['integer'],
            'cohort_id' => ['nullable', 'uuid'],
            'is_challenge' => ['sometimes', 'boolean'],
        ]);

        $studentIds = collect($data['student_ids'] ?? [])->map(fn ($id) => (int) $id)->filter()->unique();
        if ($data['cohort_id'] ?? null) {
            $cohortStudents = DB::table('mentoria2_cohort_members')
                ->where('tenant_id', $tenantId)->where('cohort_id', $data['cohort_id'])->pluck('student_id');
            $studentIds = $studentIds->merge($cohortStudents)->map(fn ($id) => (int) $id)->unique();
        }
        if ($studentIds->isEmpty()) {
            return response()->json(['message' => 'Selecione ao menos um aluno ou uma turma para receber a meta.'], 422);
        }

        if (($data['contest_id'] ?? null) && ! DB::table('mentoria2_contests')
            ->where('tenant_id', $tenantId)->where('id', $data['contest_id'])->where('is_active', true)->exists()) {
            abort(404);
        }

        $allowed = $this->access->studentsForTenant($tenantId)->pluck('id')->map(fn ($id) => (int) $id)->all();
        if ($studentIds->contains(fn ($id) => ! in_array($id, $allowed, true))) {
            abort(404);
        }

        $created = $studentIds->map(function (int $studentId) use ($data, $tenantId) {
            $id = (string) Str::uuid();
            DB::table('mentoria2_goals')->insert([
                'id' => $id, 'tenant_id' => $tenantId, 'student_id' => $studentId,
                'contest_id' => $data['contest_id'] ?? null, 'name' => trim($data['name']),
                'metric' => $data['metric'], 'target' => $data['target'],
                'starts_on' => $data['starts_on'], 'ends_on' => $data['ends_on'],
                'is_challenge' => (bool) ($data['is_challenge'] ?? false), 'is_active' => true,
                'created_at' => now(), 'updated_at' => now(),
            ]);
            return DB::table('mentoria2_goals')->where('id', $id)->first();
        })->map(fn (object $goal) => $this->goals->withProgress($goal))->values();

        $this->audit->record($tenantId, $actor, 'goal.created', 'goal', null, null, [
            'recipients' => $created->count(), 'metric' => $data['metric'], 'target' => $data['target'],
        ]);
        foreach ($created as $goal) {
            $this->notifications->create($tenantId, (int) $goal->student_id, 'goal_assigned', 'Nova meta de estudo', (string) $goal->name, 'goals', 'goal', (string) $goal->id, 'goal_'.$goal->id);
        }

        return response()->json(['goals' => $created], 201);
    }

    public function destroy(Request $request, string $goal): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $record = DB::table('mentoria2_goals')->where('tenant_id', $tenantId)->where('id', $goal)->first();
        if (! $record) abort(404);

        DB::table('mentoria2_goals')->where('id', $goal)->update(['is_active' => false, 'updated_at' => now()]);
        $this->audit->record($tenantId, $actor, 'goal.archived', 'goal', $goal, (int) $record->student_id);
        return response()->json(['ok' => true]);
    }
}
