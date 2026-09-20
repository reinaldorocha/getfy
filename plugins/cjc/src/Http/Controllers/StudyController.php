<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class StudyController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function saveSchedule(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);

        return $this->persistSchedule($request, $tenant, $target->id, $actor->id, $actor);
    }

    public function saveStudentSchedule(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $type = (string) $request->input('type', 'manual');
        $caps = $this->access->studentCapabilities($student, $tenant);
        if ($type === 'ciclo_inteligente' && ! in_array('cronograma_inteligente', $caps, true)) {
            throw new AccessDeniedHttpException('Seu produto não inclui cronograma inteligente.');
        }
        if ($type !== 'ciclo_inteligente' && ! in_array('cronograma', $caps, true) && ! in_array('cronograma_inteligente', $caps, true)) {
            throw new AccessDeniedHttpException('Seu produto não inclui cronograma.');
        }

        return $this->persistSchedule($request, $tenant, $student->id, $student->id, null);
    }

    public function addScheduleItem(Request $request, int $student, string $schedule): JsonResponse
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);
        $this->requireSchedule($tenant, $target->id, $schedule);

        return $this->persistScheduleItem($request, $tenant, $schedule);
    }

    public function addStudentScheduleItem(Request $request, int $tenant, string $schedule): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $this->requireSchedule($tenant, $student->id, $schedule);

        return $this->persistScheduleItem($request, $tenant, $schedule);
    }

    public function updateScheduleItem(Request $request, int $student, string $item): JsonResponse
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);
        $row = $this->requireScheduleItem($tenant, $target->id, $item);

        return $this->applyItemUpdate($request, $tenant, $row->id);
    }

    public function updateStudentScheduleItem(Request $request, int $tenant, string $item): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $row = $this->requireScheduleItem($tenant, $student->id, $item);

        return $this->applyItemUpdate($request, $tenant, $row->id);
    }

    public function saveReview(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);

        return $this->persistReview($request, $tenant, $target->id);
    }

    public function saveStudentReview(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->persistReview($request, $tenant, $student->id);
    }

    public function logStudentSession(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $data = $request->validate([
            'contest_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'seconds' => ['required', 'integer', 'min:1', 'max:86400'],
            'mode' => ['nullable', 'string', 'max:50'],
            'notes' => ['nullable', 'string'],
            'metrics' => ['nullable', 'array'],
            'origin' => ['nullable', 'string', 'max:50'],
            'studied_at' => ['nullable', 'date'],
        ]);
        $this->validateRefs($tenant, $data);
        $id = (string) Str::uuid();
        DB::table('cjc_study_sessions')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id,
            'contest_id' => $data['contest_id'] ?? null, 'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null, 'subtopic_id' => $data['subtopic_id'] ?? null,
            'seconds' => $data['seconds'], 'mode' => $data['mode'] ?? null, 'notes' => $data['notes'] ?? null,
            'metrics' => isset($data['metrics']) ? json_encode($data['metrics'], JSON_UNESCAPED_UNICODE) : null,
            'origin' => $data['origin'] ?? 'timer', 'is_active' => true, 'studied_at' => $data['studied_at'] ?? now(),
            'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function storeStudentNotebook(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'folder' => ['nullable', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
            'edict_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'color' => ['nullable', 'string', 'max:50'],
        ]);
        $this->validateRefs($tenant, $data);
        $id = (string) Str::uuid();
        DB::table('cjc_notebooks')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id,
            'title' => trim($data['title']), 'folder' => $data['folder'] ?? 'Geral',
            'content' => $data['content'] ?? null, 'edict_id' => $data['edict_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null, 'topic_id' => $data['topic_id'] ?? null,
            'color' => $data['color'] ?? '#4f8ef7', 'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function updateStudentNotebook(Request $request, int $tenant, string $notebook): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $data = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'folder' => ['sometimes', 'string', 'max:255'],
            'content' => ['sometimes', 'nullable', 'string'],
            'color' => ['sometimes', 'string', 'max:50'],
        ]);
        $data['updated_at'] = now();
        $exists = DB::table('cjc_notebooks')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('id', $notebook)->exists();
        if (! $exists) {
            throw new NotFoundHttpException('Caderno não encontrado.');
        }
        DB::table('cjc_notebooks')->where('id', $notebook)->update($data);

        return response()->json(['ok' => true]);
    }

    public function destroyStudentNotebook(Request $request, int $tenant, string $notebook): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $updated = DB::table('cjc_notebooks')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('id', $notebook)
            ->update(['is_active' => false, 'updated_at' => now()]);
        if ($updated === 0) {
            throw new NotFoundHttpException('Caderno não encontrado.');
        }

        return response()->json(['ok' => true]);
    }

    public function storeMockExam(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);
        $response = $this->persistMockExam($request, $tenant, $target->id);
        $body = $response->getData(true);
        $this->audit->record($tenant, $actor, 'mock_exam.created', 'mock_exam', $body['id'] ?? null, $target->id);

        return $response;
    }

    public function storeStudentMockExam(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->persistMockExam($request, $tenant, $student->id);
    }

    private function persistSchedule(Request $request, int $tenant, int $studentId, int $createdBy, mixed $auditActor): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['nullable', 'uuid'],
            'type' => ['nullable', 'in:manual,agendado,ciclo_inteligente'],
            'state' => ['nullable', 'in:rascunho,ativo,concluido'],
            'configuration' => ['nullable', 'array'],
        ]);
        $this->validateRefs($tenant, $data);
        $existing = DB::table('cjc_schedules')->where('tenant_id', $tenant)->where('student_id', $studentId)->where('is_active', true)->latest('updated_at')->first();
        $payload = [
            'contest_id' => $data['contest_id'] ?? null,
            'type' => $data['type'] ?? 'manual',
            'state' => $data['state'] ?? 'ativo',
            'configuration' => isset($data['configuration']) ? json_encode($data['configuration'], JSON_UNESCAPED_UNICODE) : null,
            'updated_at' => now(),
        ];
        if ($existing) {
            $payload['version'] = ((int) $existing->version) + 1;
            DB::table('cjc_schedules')->where('id', $existing->id)->update($payload);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_schedules')->insert(array_merge($payload, [
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $studentId, 'created_by' => $createdBy,
                'version' => 1, 'is_active' => true, 'created_at' => now(),
            ]));
        }
        if ($auditActor) {
            $this->audit->record($tenant, $auditActor, 'schedule.saved', 'schedule', (string) $id, $studentId);
        }

        return response()->json(['ok' => true, 'id' => $id]);
    }

    private function persistScheduleItem(Request $request, int $tenant, string $schedule): JsonResponse
    {
        $data = $request->validate([
            'planned_date' => ['nullable', 'date'], 'cycle_position' => ['nullable', 'integer', 'min:0'],
            'subject_id' => ['nullable', 'uuid'], 'topic_id' => ['nullable', 'uuid'], 'subtopic_id' => ['nullable', 'uuid'],
            'duration_minutes' => ['nullable', 'integer', 'min:1', 'max:1440'],
            'priority' => ['nullable', 'integer', 'min:0', 'max:100'],
            'position' => ['nullable', 'integer', 'min:0'], 'status' => ['nullable', 'in:pendente,concluido,ignorado'],
        ]);
        $this->validateRefs($tenant, $data);
        $id = (string) Str::uuid();
        DB::table('cjc_schedule_items')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'schedule_id' => $schedule,
            'planned_date' => $data['planned_date'] ?? null, 'cycle_position' => $data['cycle_position'] ?? null,
            'subject_id' => $data['subject_id'] ?? null, 'topic_id' => $data['topic_id'] ?? null, 'subtopic_id' => $data['subtopic_id'] ?? null,
            'duration_minutes' => $data['duration_minutes'] ?? null, 'priority' => $data['priority'] ?? null,
            'position' => $data['position'] ?? 0, 'status' => $data['status'] ?? 'pendente',
            'completed_at' => ($data['status'] ?? null) === 'concluido' ? now() : null,
            'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function applyItemUpdate(Request $request, int $tenant, string $item): JsonResponse
    {
        $data = $request->validate([
            'planned_date' => ['sometimes', 'nullable', 'date'],
            'duration_minutes' => ['sometimes', 'nullable', 'integer', 'min:1', 'max:1440'],
            'priority' => ['sometimes', 'nullable', 'integer', 'min:0', 'max:100'],
            'position' => ['sometimes', 'integer', 'min:0'],
            'status' => ['sometimes', 'in:pendente,concluido,ignorado'],
        ]);
        if (array_key_exists('status', $data)) {
            $data['completed_at'] = $data['status'] === 'concluido' ? now() : null;
        }
        $data['updated_at'] = now();
        DB::table('cjc_schedule_items')->where('tenant_id', $tenant)->where('id', $item)->update($data);

        return response()->json(['ok' => true]);
    }

    private function persistReview(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $request->validate([
            'id' => ['nullable', 'uuid'], 'contest_id' => ['nullable', 'uuid'], 'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'], 'subtopic_id' => ['nullable', 'uuid'],
            'current_cycle' => ['nullable', 'integer', 'min:0'], 'next_date' => ['nullable', 'date'],
            'previous_percentage' => ['nullable', 'numeric', 'min:0', 'max:100'],
            'notes' => ['nullable', 'string'], 'completed' => ['nullable', 'boolean'],
        ]);
        $this->validateRefs($tenant, $data);
        $id = $data['id'] ?? (string) Str::uuid();
        $payload = [
            'contest_id' => $data['contest_id'] ?? null, 'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null, 'subtopic_id' => $data['subtopic_id'] ?? null,
            'current_cycle' => $data['current_cycle'] ?? 0, 'next_date' => $data['next_date'] ?? null,
            'previous_percentage' => $data['previous_percentage'] ?? null, 'notes' => $data['notes'] ?? null,
            'completed' => (bool) ($data['completed'] ?? false),
            'completed_at' => ($data['completed'] ?? false) ? now() : null,
            'is_active' => true, 'updated_at' => now(),
        ];
        if (DB::table('cjc_scheduled_reviews')->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $id)->exists()) {
            DB::table('cjc_scheduled_reviews')->where('id', $id)->update($payload);
        } else {
            DB::table('cjc_scheduled_reviews')->insert(array_merge($payload, [
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $studentId, 'created_at' => now(),
            ]));
        }

        return response()->json(['ok' => true, 'id' => $id]);
    }

    private function persistMockExam(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['nullable', 'uuid'], 'name' => ['required', 'string', 'max:255'],
            'type' => ['nullable', 'in:realizado,pendente'], 'performed_at' => ['nullable', 'date'],
            'link' => ['nullable', 'string', 'max:2048'], 'notes' => ['nullable', 'string'],
            'percentage' => ['nullable', 'numeric', 'min:0', 'max:100'],
            'time_minutes' => ['nullable', 'integer', 'min:0'], 'questions_done' => ['nullable', 'integer', 'min:0'],
            'result' => ['nullable', 'array'], 'configuration_used' => ['nullable', 'array'],
        ]);
        $this->validateRefs($tenant, $data);
        $id = (string) Str::uuid();
        DB::table('cjc_mock_exams')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'student_id' => $studentId, 'contest_id' => $data['contest_id'] ?? null,
            'name' => trim($data['name']), 'type' => $data['type'] ?? 'realizado',
            'performed_at' => $data['performed_at'] ?? null, 'link' => $data['link'] ?? null, 'notes' => $data['notes'] ?? null,
            'percentage' => $data['percentage'] ?? null, 'time_minutes' => $data['time_minutes'] ?? null,
            'questions_done' => $data['questions_done'] ?? null,
            'result' => isset($data['result']) ? json_encode($data['result'], JSON_UNESCAPED_UNICODE) : null,
            'configuration_used' => isset($data['configuration_used']) ? json_encode($data['configuration_used'], JSON_UNESCAPED_UNICODE) : null,
            'is_active' => true, 'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function requireSchedule(int $tenant, int $studentId, string $schedule): object
    {
        $row = DB::table('cjc_schedules')->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $schedule)->where('is_active', true)->first();
        if (! $row) throw new NotFoundHttpException('Cronograma não encontrado.');

        return $row;
    }

    private function requireScheduleItem(int $tenant, int $studentId, string $item): object
    {
        $row = DB::table('cjc_schedule_items as i')->join('cjc_schedules as s', 's.id', '=', 'i.schedule_id')
            ->where('i.tenant_id', $tenant)->where('s.student_id', $studentId)->where('i.id', $item)->where('s.is_active', true)
            ->select('i.*')->first();
        if (! $row) throw new NotFoundHttpException('Item do cronograma não encontrado.');

        return $row;
    }

    private function validateRefs(int $tenant, array $data): void
    {
        foreach (['contest_id' => 'cjc_contests', 'edict_id' => 'cjc_edicts', 'subject_id' => 'cjc_subjects', 'topic_id' => 'cjc_topics', 'subtopic_id' => 'cjc_subtopics'] as $field => $table) {
            if (! empty($data[$field]) && ! DB::table($table)->where('tenant_id', $tenant)->where('id', $data[$field])->exists()) {
                throw new NotFoundHttpException('Referência CJC não encontrada neste tenant.');
            }
        }
    }
}
