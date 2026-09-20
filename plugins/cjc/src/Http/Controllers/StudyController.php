<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Plugins\Cjc\Services\ScheduleEngineService;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class StudyController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly ScheduleEngineService $engine,
    ) {}

    /* -----------------------------------------------------------------
     | Cronograma - produtor/mentor
     * ----------------------------------------------------------------- */

    public function saveSchedule(Request $request, int $student): JsonResponse
    {
        [$tenant, $target, $actor] = $this->adminStudent($request, $student);

        return $this->persistSchedule($request, $tenant, $target, $actor, null);
    }

    public function generateSchedule(Request $request, int $student): JsonResponse
    {
        [$tenant, $target, $actor] = $this->adminStudent($request, $student);

        return $this->generateAndPersistSchedule($request, $tenant, $target, $actor, false);
    }

    public function reprogramSchedule(Request $request, int $student): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);
        $schedule = $this->activeSchedule($tenant, $target->id, $request->input('contest_id'));
        if (! $schedule) {
            throw new NotFoundHttpException('Cronograma ativo não encontrado.');
        }

        $data = $request->validate(['from_date' => ['nullable', 'date']]);
        $count = $this->safeEngineCall(fn () => $this->engine->reprogram($tenant, $target->id, $schedule->id, $data['from_date'] ?? null));

        return response()->json(['ok' => true, 'reprogrammed' => $count, 'schedule_id' => $schedule->id]);
    }

    public function addScheduleItem(Request $request, int $student, string $schedule): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);
        $this->requireSchedule($tenant, $target->id, $schedule);

        return $this->persistScheduleItem($request, $tenant, $schedule);
    }

    public function updateScheduleItem(Request $request, int $student, string $item): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);
        $row = $this->requireScheduleItem($tenant, $target->id, $item);

        return $this->applyItemUpdate($request, $tenant, $target->id, $row, true);
    }

    public function deleteScheduleItem(Request $request, int $student, string $item): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);
        $row = $this->requireScheduleItem($tenant, $target->id, $item);
        $this->deleteItemAndLinkedSession($tenant, $target->id, $row->id);

        return response()->json(['ok' => true]);
    }

    /* -----------------------------------------------------------------
     | Cronograma - aluno
     * ----------------------------------------------------------------- */

    public function saveStudentSchedule(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');

        return $this->persistSchedule($request, $tenant, $student, $student, null);
    }

    public function generateStudentSchedule(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->generateAndPersistSchedule($request, $tenant, $student, $student, true);
    }

    public function reprogramStudentSchedule(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');

        $schedule = $this->activeSchedule($tenant, $student->id, $request->input('contest_id'));
        if (! $schedule) {
            throw new NotFoundHttpException('Cronograma ativo não encontrado.');
        }

        $data = $request->validate(['from_date' => ['nullable', 'date']]);
        $count = $this->safeEngineCall(fn () => $this->engine->reprogram($tenant, $student->id, $schedule->id, $data['from_date'] ?? null));

        return response()->json(['ok' => true, 'reprogrammed' => $count, 'schedule_id' => $schedule->id]);
    }

    public function studentCalendar(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');

        $data = $request->validate([
            'start' => ['nullable', 'date'],
            'end' => ['nullable', 'date'],
            'contest_id' => ['nullable', 'uuid'],
        ]);

        $query = DB::table('cjc_schedule_items as i')
            ->join('cjc_schedules as s', 's.id', '=', 'i.schedule_id')
            ->where('i.tenant_id', $tenant)
            ->where('s.student_id', $student->id)
            ->where('s.is_active', true);

        if (! empty($data['contest_id'])) {
            $query->where('s.contest_id', $data['contest_id']);
        }
        if (! empty($data['start'])) {
            $query->where(function ($q) use ($data): void {
                $q->whereNull('i.planned_date')->orWhere('i.planned_date', '>=', $data['start']);
            });
        }
        if (! empty($data['end'])) {
            $query->where(function ($q) use ($data): void {
                $q->whereNull('i.planned_date')->orWhere('i.planned_date', '<=', $data['end']);
            });
        }

        $items = $query
            ->select('i.*', 's.contest_id', 's.type as schedule_type', 's.state as schedule_state')
            ->orderByRaw('i.planned_date IS NULL, i.planned_date')
            ->orderBy('i.position')
            ->get();

        return response()->json(['items' => $items]);
    }

    public function addStudentScheduleItem(Request $request, int $tenant, string $schedule): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');
        $this->requireSchedule($tenant, $student->id, $schedule);

        return $this->persistScheduleItem($request, $tenant, $schedule);
    }

    public function updateStudentScheduleItem(Request $request, int $tenant, string $item): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');
        $row = $this->requireScheduleItem($tenant, $student->id, $item);

        return $this->applyItemUpdate($request, $tenant, $student->id, $row, true);
    }

    public function deleteStudentScheduleItem(Request $request, int $tenant, string $item): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cronograma');
        $row = $this->requireScheduleItem($tenant, $student->id, $item);
        $this->deleteItemAndLinkedSession($tenant, $student->id, $row->id);

        return response()->json(['ok' => true]);
    }

    /* -----------------------------------------------------------------
     | Sessões de estudo
     * ----------------------------------------------------------------- */

    public function storeSession(Request $request, int $student): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->persistStudySession($request, $tenant, $target->id);
    }

    public function updateSession(Request $request, int $student, string $session): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->updateStudySession($request, $tenant, $target->id, $session);
    }

    public function deleteSession(Request $request, int $student, string $session): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->disableStudySession($tenant, $target->id, $session);
    }

    public function logStudentSession(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->persistStudySession($request, $tenant, $student->id);
    }

    public function updateStudentSession(Request $request, int $tenant, string $session): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->updateStudySession($request, $tenant, $student->id, $session);
    }

    public function deleteStudentSession(Request $request, int $tenant, string $session): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return $this->disableStudySession($tenant, $student->id, $session);
    }

    /* -----------------------------------------------------------------
     | Lançamentos manuais de questões
     * ----------------------------------------------------------------- */

    public function storeQuestionLog(Request $request, int $student): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->persistQuestionLog($request, $tenant, $target->id);
    }

    public function updateQuestionLog(Request $request, int $student, string $log): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->updateQuestionLogRow($request, $tenant, $target->id, $log);
    }

    public function deleteQuestionLog(Request $request, int $student, string $log): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->disableQuestionLog($tenant, $target->id, $log);
    }

    public function storeStudentQuestionLog(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');

        return $this->persistQuestionLog($request, $tenant, $student->id);
    }

    public function updateStudentQuestionLog(Request $request, int $tenant, string $log): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');

        return $this->updateQuestionLogRow($request, $tenant, $student->id, $log);
    }

    public function deleteStudentQuestionLog(Request $request, int $tenant, string $log): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'questoes');

        return $this->disableQuestionLog($tenant, $student->id, $log);
    }

    /* -----------------------------------------------------------------
     | Revisões
     * ----------------------------------------------------------------- */

    public function saveReview(Request $request, int $student): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->persistReview($request, $tenant, $target->id);
    }

    public function updateReview(Request $request, int $student, string $review): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->updateReviewRow($request, $tenant, $target->id, $review);
    }

    public function deleteReview(Request $request, int $student, string $review): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->disableReview($tenant, $target->id, $review);
    }

    public function saveStudentReview(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'revisoes');

        return $this->persistReview($request, $tenant, $student->id);
    }

    public function updateStudentReview(Request $request, int $tenant, string $review): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'revisoes');

        return $this->updateReviewRow($request, $tenant, $student->id, $review);
    }

    public function deleteStudentReview(Request $request, int $tenant, string $review): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'revisoes');

        return $this->disableReview($tenant, $student->id, $review);
    }

    /* -----------------------------------------------------------------
     | Simulados e configuração de prova
     * ----------------------------------------------------------------- */

    public function storeMockExam(Request $request, int $student): JsonResponse
    {
        [$tenant, $target, $actor] = $this->adminStudent($request, $student);
        $response = $this->persistMockExam($request, $tenant, $target->id);
        $body = $response->getData(true);
        $this->audit->record($tenant, $actor, 'mock_exam.created', 'mock_exam', $body['id'] ?? null, $target->id);

        return $response;
    }

    public function updateMockExam(Request $request, int $student, string $mock): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->updateMockExamRow($request, $tenant, $target->id, $mock);
    }

    public function deleteMockExam(Request $request, int $student, string $mock): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->disableMockExam($tenant, $target->id, $mock);
    }

    public function storeStudentMockExam(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'simulados');

        return $this->persistMockExam($request, $tenant, $student->id);
    }

    public function updateStudentMockExam(Request $request, int $tenant, string $mock): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'simulados');

        return $this->updateMockExamRow($request, $tenant, $student->id, $mock);
    }

    public function deleteStudentMockExam(Request $request, int $tenant, string $mock): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'simulados');

        return $this->disableMockExam($tenant, $student->id, $mock);
    }

    public function examConfiguration(Request $request, int $student, string $contest): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);
        $this->assertStudentContest($tenant, $target->id, $contest);

        return response()->json(['configuration' => $this->readExamConfiguration($tenant, $target->id, $contest)]);
    }

    public function saveExamConfiguration(Request $request, int $student, string $contest): JsonResponse
    {
        [$tenant, $target, $actor] = $this->adminStudent($request, $student);
        $this->assertStudentContest($tenant, $target->id, $contest);

        return $this->persistExamConfiguration($request, $tenant, $target->id, $contest, $actor->id);
    }

    public function studentExamConfiguration(Request $request, int $tenant, string $contest): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'simulados');
        $this->assertStudentContest($tenant, $student->id, $contest);

        return response()->json(['configuration' => $this->readExamConfiguration($tenant, $student->id, $contest)]);
    }

    public function saveStudentExamConfiguration(Request $request, int $tenant, string $contest): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'simulados');
        $this->assertStudentContest($tenant, $student->id, $contest);

        return $this->persistExamConfiguration($request, $tenant, $student->id, $contest, $student->id);
    }

    /* -----------------------------------------------------------------
     | Cadernos
     * ----------------------------------------------------------------- */

    public function storeNotebook(Request $request, int $student): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->persistNotebook($request, $tenant, $target->id);
    }

    public function updateNotebook(Request $request, int $student, string $notebook): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->updateNotebookRow($request, $tenant, $target->id, $notebook);
    }

    public function deleteNotebook(Request $request, int $student, string $notebook): JsonResponse
    {
        [$tenant, $target] = $this->adminStudent($request, $student);

        return $this->disableNotebook($tenant, $target->id, $notebook);
    }

    public function storeStudentNotebook(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cadernos');

        return $this->persistNotebook($request, $tenant, $student->id);
    }

    public function updateStudentNotebook(Request $request, int $tenant, string $notebook): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cadernos');

        return $this->updateNotebookRow($request, $tenant, $student->id, $notebook);
    }

    public function destroyStudentNotebook(Request $request, int $tenant, string $notebook): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'cadernos');

        return $this->disableNotebook($tenant, $student->id, $notebook);
    }

    /* -----------------------------------------------------------------
     | Internals
     * ----------------------------------------------------------------- */

    private function persistSchedule(Request $request, int $tenant, User $student, User $creator, ?array $generatedItems): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['required', 'uuid'],
            'type' => ['nullable', 'in:manual,agendado,ciclo_inteligente'],
            'state' => ['nullable', 'in:rascunho,ativo,concluido'],
            'configuration' => ['nullable', 'array'],
            'items' => ['nullable', 'array'],
        ]);

        $this->assertStudentContest($tenant, $student->id, $data['contest_id']);
        $items = $generatedItems ?? ($data['items'] ?? []);
        if (! is_array($items)) {
            $items = [];
        }

        $previous = $this->activeSchedule($tenant, $student->id, $data['contest_id']);
        $version = $previous ? ((int) $previous->version + 1) : 1;
        $scheduleId = (string) Str::uuid();
        $type = $data['type'] ?? 'manual';

        DB::transaction(function () use ($tenant, $student, $creator, $data, $items, $previous, $version, $scheduleId, $type): void {
            if ($previous) {
                DB::table('cjc_schedules')->where('id', $previous->id)
                    ->update(['is_active' => false, 'state' => 'concluido', 'updated_at' => now()]);
            }

            DB::table('cjc_schedules')->insert([
                'id' => $scheduleId,
                'tenant_id' => $tenant,
                'student_id' => $student->id,
                'contest_id' => $data['contest_id'],
                'type' => $type,
                'created_by' => $creator->id,
                'version' => $version,
                'state' => $data['state'] ?? 'ativo',
                'configuration' => json_encode($data['configuration'] ?? [], JSON_UNESCAPED_UNICODE),
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            foreach ($items as $index => $item) {
                if (! is_array($item)) {
                    continue;
                }
                $this->validateRefs($tenant, $item);
                DB::table('cjc_schedule_items')->insert($this->scheduleItemPayload($tenant, $scheduleId, $item, $index + 1));
            }
        });

        return response()->json([
            'ok' => true,
            'id' => $scheduleId,
            'version' => $version,
            'items' => count($items),
        ]);
    }

    private function generateAndPersistSchedule(Request $request, int $tenant, User $student, User $creator, bool $studentRequest): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['required', 'uuid'],
            'mode' => ['nullable', 'in:agendado,ciclo,ciclo_inteligente'],
            'configuration' => ['nullable', 'array'],
        ]);

        $configuration = $data['configuration'] ?? [];
        $mode = $data['mode'] ?? ($configuration['tipo'] ?? 'agendado');

        if ($studentRequest) {
            $needed = in_array($mode, ['ciclo', 'ciclo_inteligente'], true)
                ? 'cronograma_inteligente'
                : 'cronograma';
            $this->access->assertCapability($student, $tenant, $needed);
        }

        $configuration['tipo'] = $mode;
        $items = $this->safeEngineCall(fn () => $this->engine->generate($student, $tenant, $data['contest_id'], $configuration));

        $request->merge([
            'contest_id' => $data['contest_id'],
            'type' => in_array($mode, ['ciclo', 'ciclo_inteligente'], true) ? 'ciclo_inteligente' : 'agendado',
            'state' => 'ativo',
            'configuration' => $configuration,
            'items' => $items,
        ]);

        return $this->persistSchedule($request, $tenant, $student, $creator, $items);
    }

    private function persistScheduleItem(Request $request, int $tenant, string $schedule): JsonResponse
    {
        $data = $this->validateScheduleItem($request);
        $this->validateRefs($tenant, $data);

        $id = (string) Str::uuid();
        DB::table('cjc_schedule_items')->insert($this->scheduleItemPayload($tenant, $schedule, $data, (int) ($data['position'] ?? 0), $id));

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function applyItemUpdate(Request $request, int $tenant, int $studentId, object $row, bool $canPlan): JsonResponse
    {
        $data = $request->validate([
            'planned_date' => ['sometimes', 'nullable', 'date'],
            'cycle_position' => ['sometimes', 'nullable', 'integer', 'min:0'],
            'duration_minutes' => ['sometimes', 'nullable', 'integer', 'min:1', 'max:1440'],
            'priority' => ['sometimes', 'nullable', 'integer', 'min:0', 'max:100'],
            'position' => ['sometimes', 'integer', 'min:0'],
            'status' => ['sometimes', 'in:pendente,concluido,ignorado'],
            'create_session' => ['sometimes', 'boolean'],
        ]);

        if (! $canPlan && array_intersect(array_keys($data), ['cycle_position', 'duration_minutes', 'priority', 'position']) !== []) {
            throw new AccessDeniedHttpException('Sem permissão para alterar planejamento.');
        }

        $oldStatus = (string) $row->status;
        $newStatus = (string) ($data['status'] ?? $oldStatus);
        $createSession = (bool) ($data['create_session'] ?? true);
        unset($data['create_session']);

        DB::transaction(function () use ($tenant, $studentId, $row, $data, $oldStatus, $newStatus, $createSession): void {
            if ($newStatus === 'concluido') {
                $data['completed_at'] = now();
            } elseif (array_key_exists('status', $data)) {
                $data['completed_at'] = null;
            }

            $data['updated_at'] = now();
            DB::table('cjc_schedule_items')->where('tenant_id', $tenant)->where('id', $row->id)->update($data);

            if ($createSession && $oldStatus !== 'concluido' && $newStatus === 'concluido') {
                $schedule = DB::table('cjc_schedules')->where('id', $row->schedule_id)->first();
                $duration = (int) ($data['duration_minutes'] ?? $row->duration_minutes ?? 0);
                if ($duration > 0) {
                    DB::table('cjc_study_sessions')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenant,
                        'student_id' => $studentId,
                        'contest_id' => $schedule?->contest_id,
                        'subject_id' => $row->subject_id,
                        'topic_id' => $row->topic_id,
                        'subtopic_id' => $row->subtopic_id,
                        'schedule_item_id' => $row->id,
                        'seconds' => $duration * 60,
                        'mode' => 'cronograma',
                        'notes' => null,
                        'metrics' => json_encode(['schedule_item_id' => $row->id], JSON_UNESCAPED_UNICODE),
                        'origin' => 'cronograma',
                        'is_active' => true,
                        'studied_at' => now(),
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }

            if ($oldStatus === 'concluido' && $newStatus !== 'concluido') {
                DB::table('cjc_study_sessions')
                    ->where('tenant_id', $tenant)
                    ->where('student_id', $studentId)
                    ->where('schedule_item_id', $row->id)
                    ->update(['is_active' => false, 'updated_at' => now()]);
            }
        });

        return response()->json(['ok' => true]);
    }

    private function deleteItemAndLinkedSession(int $tenant, int $studentId, string $itemId): void
    {
        DB::transaction(function () use ($tenant, $studentId, $itemId): void {
            DB::table('cjc_study_sessions')
                ->where('tenant_id', $tenant)->where('student_id', $studentId)
                ->where('schedule_item_id', $itemId)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('cjc_schedule_items')->where('tenant_id', $tenant)->where('id', $itemId)->delete();
        });
    }

    private function persistStudySession(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'schedule_item_id' => ['nullable', 'uuid'],
            'seconds' => ['required', 'integer', 'min:1', 'max:86400'],
            'mode' => ['nullable', 'string', 'max:50'],
            'notes' => ['nullable', 'string'],
            'metrics' => ['nullable', 'array'],
            'origin' => ['nullable', 'string', 'max:50'],
            'studied_at' => ['nullable', 'date'],
        ]);

        $this->validateRefs($tenant, $data);
        if (! empty($data['contest_id'])) {
            $this->assertStudentContest($tenant, $studentId, $data['contest_id']);
        }
        if (! empty($data['schedule_item_id'])) {
            $this->requireScheduleItem($tenant, $studentId, $data['schedule_item_id']);
        }

        $id = (string) Str::uuid();
        DB::table('cjc_study_sessions')->insert([
            'id' => $id,
            'tenant_id' => $tenant,
            'student_id' => $studentId,
            'contest_id' => $data['contest_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null,
            'subtopic_id' => $data['subtopic_id'] ?? null,
            'schedule_item_id' => $data['schedule_item_id'] ?? null,
            'seconds' => $data['seconds'],
            'mode' => $data['mode'] ?? null,
            'notes' => $data['notes'] ?? null,
            'metrics' => isset($data['metrics']) ? json_encode($data['metrics'], JSON_UNESCAPED_UNICODE) : null,
            'origin' => $data['origin'] ?? 'manual',
            'is_active' => true,
            'studied_at' => $data['studied_at'] ?? now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function updateStudySession(Request $request, int $tenant, int $studentId, string $session): JsonResponse
    {
        $row = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $session)->first();
        if (! $row) {
            throw new NotFoundHttpException('Sessão de estudo não encontrada.');
        }

        $data = $request->validate([
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'subject_id' => ['sometimes', 'nullable', 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
            'seconds' => ['sometimes', 'integer', 'min:1', 'max:86400'],
            'mode' => ['sometimes', 'nullable', 'string', 'max:50'],
            'notes' => ['sometimes', 'nullable', 'string'],
            'metrics' => ['sometimes', 'nullable', 'array'],
            'origin' => ['sometimes', 'nullable', 'string', 'max:50'],
            'studied_at' => ['sometimes', 'date'],
        ]);

        $this->validateRefs($tenant, $data);
        if (isset($data['metrics'])) {
            $data['metrics'] = json_encode($data['metrics'], JSON_UNESCAPED_UNICODE);
        }
        $data['updated_at'] = now();

        DB::table('cjc_study_sessions')->where('id', $session)->update($data);

        return response()->json(['ok' => true]);
    }

    private function disableStudySession(int $tenant, int $studentId, string $session): JsonResponse
    {
        $updated = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $session)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Sessão de estudo não encontrada.');
        }

        return response()->json(['ok' => true]);
    }

    private function persistQuestionLog(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $request->validate([
            'contest_id' => ['nullable', 'uuid'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'solved' => ['required', 'integer', 'min:0'],
            'correct' => ['required', 'integer', 'min:0'],
            'wrong' => ['nullable', 'integer', 'min:0'],
            'origin' => ['nullable', 'string', 'max:50'],
            'recorded_at' => ['nullable', 'date'],
        ]);

        $this->validateRefs($tenant, $data);
        $solved = (int) $data['solved'];
        $correct = min($solved, (int) $data['correct']);
        $wrong = array_key_exists('wrong', $data) ? min($solved, (int) $data['wrong']) : max(0, $solved - $correct);

        if ($correct + $wrong > $solved) {
            $wrong = max(0, $solved - $correct);
        }

        $id = (string) Str::uuid();
        DB::table('cjc_question_logs')->insert([
            'id' => $id,
            'tenant_id' => $tenant,
            'student_id' => $studentId,
            'contest_id' => $data['contest_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null,
            'subtopic_id' => $data['subtopic_id'] ?? null,
            'solved' => $solved,
            'correct' => $correct,
            'wrong' => $wrong,
            'origin' => $data['origin'] ?? 'manual',
            'is_active' => true,
            'recorded_at' => $data['recorded_at'] ?? now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function updateQuestionLogRow(Request $request, int $tenant, int $studentId, string $log): JsonResponse
    {
        $row = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $log)->first();
        if (! $row) {
            throw new NotFoundHttpException('Lançamento de questões não encontrado.');
        }

        $data = $request->validate([
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'subject_id' => ['sometimes', 'nullable', 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
            'solved' => ['sometimes', 'integer', 'min:0'],
            'correct' => ['sometimes', 'integer', 'min:0'],
            'wrong' => ['sometimes', 'integer', 'min:0'],
            'origin' => ['sometimes', 'nullable', 'string', 'max:50'],
            'recorded_at' => ['sometimes', 'date'],
        ]);

        $this->validateRefs($tenant, $data);
        $solved = (int) ($data['solved'] ?? $row->solved);
        $correct = min($solved, (int) ($data['correct'] ?? $row->correct));
        $wrong = array_key_exists('wrong', $data) ? min($solved, (int) $data['wrong']) : max(0, $solved - $correct);

        $data['solved'] = $solved;
        $data['correct'] = $correct;
        $data['wrong'] = $wrong;
        $data['updated_at'] = now();

        DB::table('cjc_question_logs')->where('id', $log)->update($data);

        return response()->json(['ok' => true]);
    }

    private function disableQuestionLog(int $tenant, int $studentId, string $log): JsonResponse
    {
        $updated = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $log)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Lançamento de questões não encontrado.');
        }

        return response()->json(['ok' => true]);
    }

    private function persistReview(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $this->validateReview($request, false);
        $this->validateRefs($tenant, $data);
        $this->assertReviewContent($tenant, $studentId, $data);

        $existing = $this->findDuplicatePendingReview($tenant, $studentId, $data);
        $id = $existing?->id ?: (string) Str::uuid();
        $payload = $this->reviewPayload($data);

        if ($existing) {
            DB::table('cjc_scheduled_reviews')->where('id', $existing->id)->update($payload + ['updated_at' => now()]);
        } else {
            DB::table('cjc_scheduled_reviews')->insert($payload + [
                'id' => $id,
                'tenant_id' => $tenant,
                'student_id' => $studentId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json(['ok' => true, 'id' => $id], $existing ? 200 : 201);
    }

    private function updateReviewRow(Request $request, int $tenant, int $studentId, string $review): JsonResponse
    {
        $current = DB::table('cjc_scheduled_reviews')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $review)->first();
        if (! $current) {
            throw new NotFoundHttpException('Revisão não encontrada.');
        }

        $data = $this->validateReview($request, true);
        $merged = [
            'contest_id' => $data['contest_id'] ?? $current->contest_id,
            'subject_id' => $data['subject_id'] ?? $current->subject_id,
            'topic_id' => $data['topic_id'] ?? $current->topic_id,
            'subtopic_id' => $data['subtopic_id'] ?? $current->subtopic_id,
        ];
        $this->validateRefs($tenant, $merged);
        $this->assertReviewContent($tenant, $studentId, $merged);

        $update = [];
        foreach (['contest_id', 'subject_id', 'topic_id', 'subtopic_id', 'current_cycle', 'next_date', 'previous_percentage', 'notes', 'completed'] as $field) {
            if (array_key_exists($field, $data)) {
                $update[$field] = $data[$field];
            }
        }

        if (array_key_exists('completed', $data)) {
            $update['completed_at'] = $data['completed'] ? now() : null;
        }
        $update['updated_at'] = now();

        DB::table('cjc_scheduled_reviews')->where('id', $review)->update($update);

        return response()->json(['ok' => true]);
    }

    private function disableReview(int $tenant, int $studentId, string $review): JsonResponse
    {
        $updated = DB::table('cjc_scheduled_reviews')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $review)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Revisão não encontrada.');
        }

        return response()->json(['ok' => true]);
    }

    private function persistMockExam(Request $request, int $tenant, int $studentId): JsonResponse
    {
        $data = $this->validateMockExam($request, false);
        if (! empty($data['contest_id'])) {
            $this->assertStudentContest($tenant, $studentId, $data['contest_id']);
        }

        $id = (string) Str::uuid();
        DB::transaction(function () use ($tenant, $studentId, $id, $data): void {
            DB::table('cjc_mock_exams')->insert($this->mockExamPayload($tenant, $studentId, $id, $data));
            $this->replaceMockSubjectResults($tenant, $id, $data['subject_results'] ?? []);
        });

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function updateMockExamRow(Request $request, int $tenant, int $studentId, string $mock): JsonResponse
    {
        $current = DB::table('cjc_mock_exams')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $mock)->first();
        if (! $current) {
            throw new NotFoundHttpException('Simulado não encontrado.');
        }

        $data = $this->validateMockExam($request, true);
        if (! empty($data['contest_id'])) {
            $this->assertStudentContest($tenant, $studentId, $data['contest_id']);
        }

        $update = [];
        foreach ([
            'contest_id', 'name', 'type', 'performed_at', 'link', 'notes',
            'percentage', 'time_minutes', 'questions_done',
        ] as $field) {
            if (array_key_exists($field, $data)) {
                $update[$field] = $data[$field];
            }
        }
        if (array_key_exists('result', $data)) {
            $update['result'] = $data['result'] === null ? null : json_encode($data['result'], JSON_UNESCAPED_UNICODE);
        }
        if (array_key_exists('configuration_used', $data)) {
            $update['configuration_used'] = $data['configuration_used'] === null ? null : json_encode($data['configuration_used'], JSON_UNESCAPED_UNICODE);
        }
        $update['updated_at'] = now();

        DB::transaction(function () use ($tenant, $mock, $update, $data): void {
            DB::table('cjc_mock_exams')->where('id', $mock)->update($update);
            if (array_key_exists('subject_results', $data)) {
                $this->replaceMockSubjectResults($tenant, $mock, $data['subject_results'] ?? []);
            }
        });

        return response()->json(['ok' => true]);
    }

    private function disableMockExam(int $tenant, int $studentId, string $mock): JsonResponse
    {
        $updated = DB::table('cjc_mock_exams')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $mock)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Simulado não encontrado.');
        }

        DB::table('cjc_mock_exam_subject_results')
            ->where('tenant_id', $tenant)->where('mock_exam_id', $mock)
            ->update(['is_active' => false, 'updated_at' => now()]);

        return response()->json(['ok' => true]);
    }

    private function persistExamConfiguration(Request $request, int $tenant, int $studentId, string $contestId, int $actorId): JsonResponse
    {
        $data = $request->validate(['configuration' => ['required', 'array']]);
        $existing = DB::table('cjc_exam_configurations')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->first();

        $payload = [
            'configuration' => json_encode($data['configuration'], JSON_UNESCAPED_UNICODE),
            'updated_by' => $actorId,
            'updated_at' => now(),
        ];

        if ($existing) {
            DB::table('cjc_exam_configurations')->where('id', $existing->id)->update($payload);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_exam_configurations')->insert($payload + [
                'id' => $id,
                'tenant_id' => $tenant,
                'student_id' => $studentId,
                'contest_id' => $contestId,
                'created_at' => now(),
            ]);
        }

        return response()->json(['ok' => true, 'id' => $id]);
    }

    private function readExamConfiguration(int $tenant, int $studentId, string $contestId): array
    {
        $raw = DB::table('cjc_exam_configurations')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->value('configuration');

        if (! $raw) {
            return [];
        }

        $decoded = is_array($raw) ? $raw : json_decode((string) $raw, true);
        return is_array($decoded) ? $decoded : [];
    }

    private function persistNotebook(Request $request, int $tenant, int $studentId): JsonResponse
    {
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
            'id' => $id,
            'tenant_id' => $tenant,
            'student_id' => $studentId,
            'title' => trim($data['title']),
            'folder' => $data['folder'] ?? 'Geral',
            'content' => $data['content'] ?? null,
            'edict_id' => $data['edict_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null,
            'color' => $data['color'] ?? '#4f8ef7',
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    private function updateNotebookRow(Request $request, int $tenant, int $studentId, string $notebook): JsonResponse
    {
        $exists = DB::table('cjc_notebooks')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $notebook)->exists();
        if (! $exists) {
            throw new NotFoundHttpException('Caderno não encontrado.');
        }

        $data = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'folder' => ['sometimes', 'string', 'max:255'],
            'content' => ['sometimes', 'nullable', 'string'],
            'edict_id' => ['sometimes', 'nullable', 'uuid'],
            'subject_id' => ['sometimes', 'nullable', 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'color' => ['sometimes', 'string', 'max:50'],
        ]);
        $this->validateRefs($tenant, $data);
        $data['updated_at'] = now();

        DB::table('cjc_notebooks')->where('id', $notebook)->update($data);

        return response()->json(['ok' => true]);
    }

    private function disableNotebook(int $tenant, int $studentId, string $notebook): JsonResponse
    {
        $updated = DB::table('cjc_notebooks')
            ->where('tenant_id', $tenant)->where('student_id', $studentId)->where('id', $notebook)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Caderno não encontrado.');
        }

        return response()->json(['ok' => true]);
    }

    private function validateScheduleItem(Request $request): array
    {
        return $request->validate([
            'planned_date' => ['nullable', 'date'],
            'cycle_position' => ['nullable', 'integer', 'min:0'],
            'subject_id' => ['nullable', 'uuid'],
            'topic_id' => ['nullable', 'uuid'],
            'subtopic_id' => ['nullable', 'uuid'],
            'duration_minutes' => ['required', 'integer', 'min:1', 'max:1440'],
            'priority' => ['nullable', 'integer', 'min:0', 'max:100'],
            'position' => ['nullable', 'integer', 'min:0'],
            'status' => ['nullable', 'in:pendente,concluido,ignorado'],
        ]);
    }

    private function scheduleItemPayload(int $tenant, string $scheduleId, array $item, int $defaultPosition, ?string $id = null): array
    {
        return [
            'id' => $id ?? (string) Str::uuid(),
            'tenant_id' => $tenant,
            'schedule_id' => $scheduleId,
            'planned_date' => $item['planned_date'] ?? $item['dataPlanejada'] ?? null,
            'cycle_position' => $item['cycle_position'] ?? $item['posicaoCiclo'] ?? null,
            'subject_id' => $item['subject_id'] ?? $item['materiaId'] ?? null,
            'topic_id' => $item['topic_id'] ?? $item['topicoId'] ?? null,
            'subtopic_id' => $item['subtopic_id'] ?? $item['subtopicoId'] ?? null,
            'duration_minutes' => max(1, (int) ($item['duration_minutes'] ?? $item['duracaoMinutos'] ?? 60)),
            'priority' => max(0, min(100, (int) ($item['priority'] ?? $item['prioridade'] ?? 0))),
            'position' => (int) ($item['position'] ?? $item['ordem'] ?? $defaultPosition),
            'status' => $item['status'] ?? $item['situacao'] ?? 'pendente',
            'completed_at' => in_array(($item['status'] ?? $item['situacao'] ?? null), ['concluido'], true) ? now() : null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function validateReview(Request $request, bool $partial): array
    {
        $required = $partial ? 'sometimes' : 'required';

        return $request->validate([
            'contest_id' => [$required, 'uuid'],
            'subject_id' => [$required, 'uuid'],
            'topic_id' => ['sometimes', 'nullable', 'uuid'],
            'subtopic_id' => ['sometimes', 'nullable', 'uuid'],
            'current_cycle' => ['sometimes', 'integer', 'min:0'],
            'next_date' => ['sometimes', 'nullable', 'date'],
            'previous_percentage' => ['sometimes', 'nullable', 'numeric', 'min:0', 'max:100'],
            'notes' => ['sometimes', 'nullable', 'string'],
            'completed' => ['sometimes', 'boolean'],
        ]);
    }

    private function reviewPayload(array $data): array
    {
        return [
            'contest_id' => $data['contest_id'] ?? null,
            'subject_id' => $data['subject_id'] ?? null,
            'topic_id' => $data['topic_id'] ?? null,
            'subtopic_id' => $data['subtopic_id'] ?? null,
            'current_cycle' => (int) ($data['current_cycle'] ?? 0),
            'next_date' => $data['next_date'] ?? null,
            'previous_percentage' => $data['previous_percentage'] ?? null,
            'notes' => $data['notes'] ?? null,
            'completed' => (bool) ($data['completed'] ?? false),
            'completed_at' => ! empty($data['completed']) ? now() : null,
            'is_active' => true,
        ];
    }

    private function findDuplicatePendingReview(int $tenant, int $studentId, array $data): ?object
    {
        return DB::table('cjc_scheduled_reviews')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->where('completed', false)
            ->where('contest_id', $data['contest_id'] ?? null)
            ->where('subject_id', $data['subject_id'] ?? null)
            ->where('topic_id', $data['topic_id'] ?? null)
            ->where('subtopic_id', $data['subtopic_id'] ?? null)
            ->where('current_cycle', (int) ($data['current_cycle'] ?? 0))
            ->first();
    }

    private function validateMockExam(Request $request, bool $partial): array
    {
        $required = $partial ? 'sometimes' : 'required';

        $data = $request->validate([
            'contest_id' => ['sometimes', 'nullable', 'uuid'],
            'name' => [$required, 'string', 'max:255'],
            'type' => ['sometimes', 'in:realizado,pendente'],
            'performed_at' => ['sometimes', 'nullable', 'date'],
            'link' => ['sometimes', 'nullable', 'string', 'max:2048'],
            'notes' => ['sometimes', 'nullable', 'string'],
            'percentage' => ['sometimes', 'nullable', 'numeric', 'min:0', 'max:100'],
            'time_minutes' => ['sometimes', 'nullable', 'integer', 'min:0'],
            'questions_done' => ['sometimes', 'nullable', 'integer', 'min:0'],
            'result' => ['sometimes', 'nullable', 'array'],
            'configuration_used' => ['sometimes', 'nullable', 'array'],
            'subject_results' => ['sometimes', 'array'],
            'subject_results.*.subject_id' => ['nullable', 'uuid'],
            'subject_results.*.name' => ['required_with:subject_results', 'string', 'max:255'],
            'subject_results.*.questions' => ['nullable', 'integer', 'min:0'],
            'subject_results.*.correct' => ['nullable', 'integer', 'min:0'],
            'subject_results.*.wrong' => ['nullable', 'integer', 'min:0'],
            'subject_results.*.blank' => ['nullable', 'integer', 'min:0'],
            'subject_results.*.percentage' => ['nullable', 'numeric', 'min:0', 'max:100'],
            'subject_results.*.points' => ['nullable', 'numeric'],
        ]);

        $type = $data['type'] ?? null;
        if ($type === 'pendente' && empty($data['link'])) {
            abort(422, 'Link obrigatório para simulado pendente.');
        }

        return $data;
    }

    private function mockExamPayload(int $tenant, int $studentId, string $id, array $data): array
    {
        return [
            'id' => $id,
            'tenant_id' => $tenant,
            'student_id' => $studentId,
            'contest_id' => $data['contest_id'] ?? null,
            'name' => trim($data['name']),
            'type' => $data['type'] ?? 'realizado',
            'performed_at' => $data['performed_at'] ?? null,
            'link' => $data['link'] ?? null,
            'notes' => $data['notes'] ?? null,
            'percentage' => $data['percentage'] ?? null,
            'time_minutes' => $data['time_minutes'] ?? null,
            'questions_done' => $data['questions_done'] ?? null,
            'result' => isset($data['result']) ? json_encode($data['result'], JSON_UNESCAPED_UNICODE) : null,
            'configuration_used' => isset($data['configuration_used']) ? json_encode($data['configuration_used'], JSON_UNESCAPED_UNICODE) : null,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    private function replaceMockSubjectResults(int $tenant, string $mockId, array $results): void
    {
        DB::table('cjc_mock_exam_subject_results')->where('tenant_id', $tenant)->where('mock_exam_id', $mockId)->delete();

        foreach ($results as $result) {
            if (! is_array($result) || trim((string) ($result['name'] ?? '')) === '') {
                continue;
            }

            if (! empty($result['subject_id'])) {
                $this->requireTenantRow('cjc_subjects', $tenant, $result['subject_id']);
            }

            DB::table('cjc_mock_exam_subject_results')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenant,
                'mock_exam_id' => $mockId,
                'subject_id' => $result['subject_id'] ?? null,
                'name' => trim((string) $result['name']),
                'questions' => $result['questions'] ?? null,
                'correct' => $result['correct'] ?? null,
                'wrong' => $result['wrong'] ?? null,
                'blank' => $result['blank'] ?? null,
                'percentage' => $result['percentage'] ?? null,
                'points' => $result['points'] ?? null,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    private function assertReviewContent(int $tenant, int $studentId, array $data): void
    {
        if (empty($data['contest_id']) || empty($data['subject_id'])) {
            throw new \InvalidArgumentException('Concurso e matéria são obrigatórios para a revisão.');
        }

        $this->assertStudentContest($tenant, $studentId, $data['contest_id']);

        $edictIds = DB::table('cjc_student_edicts as se')
            ->join('cjc_edicts as e', 'e.id', '=', 'se.edict_id')
            ->where('se.tenant_id', $tenant)
            ->where('se.student_id', $studentId)
            ->where('se.is_active', true)
            ->where('e.contest_id', $data['contest_id'])
            ->where('e.is_active', true)
            ->pluck('e.id');

        $subject = DB::table('cjc_subjects')
            ->where('tenant_id', $tenant)->whereIn('edict_id', $edictIds)
            ->where('id', $data['subject_id'])->where('is_active', true)->exists();

        if (! $subject) {
            throw new NotFoundHttpException('Conteúdo da revisão fora do edital atribuído.');
        }
    }

    private function validateRefs(int $tenant, array $data): void
    {
        $aliases = [
            'contest_id' => ['cjc_contests', 'contest_id'],
            'edict_id' => ['cjc_edicts', 'edict_id'],
            'subject_id' => ['cjc_subjects', 'subject_id'],
            'topic_id' => ['cjc_topics', 'topic_id'],
            'subtopic_id' => ['cjc_subtopics', 'subtopic_id'],
            'materiaId' => ['cjc_subjects', 'subject_id'],
            'topicoId' => ['cjc_topics', 'topic_id'],
            'subtopicoId' => ['cjc_subtopics', 'subtopic_id'],
        ];

        foreach ($aliases as $field => [$table]) {
            if (! empty($data[$field]) && ! DB::table($table)->where('tenant_id', $tenant)->where('id', $data[$field])->exists()) {
                throw new NotFoundHttpException('Referência CJC não encontrada neste tenant.');
            }
        }
    }

    private function safeEngineCall(callable $callback): mixed
    {
        try {
            return $callback();
        } catch (\RuntimeException $e) {
            abort(422, $e->getMessage());
        }
    }

    private function adminStudent(Request $request, int $student): array
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);

        return [$tenant, $target, $actor];
    }

    private function assertStudentContest(int $tenant, int $studentId, string $contestId): void
    {
        if (! DB::table('cjc_student_contests')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->exists()) {
            throw new NotFoundHttpException('Concurso não atribuído ao aluno.');
        }
    }

    private function activeSchedule(int $tenant, int $studentId, ?string $contestId = null): ?object
    {
        return DB::table('cjc_schedules')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->when($contestId, fn ($q) => $q->where('contest_id', $contestId))
            ->latest('updated_at')
            ->first();
    }

    private function requireSchedule(int $tenant, int $studentId, string $schedule): object
    {
        $row = DB::table('cjc_schedules')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('id', $schedule)
            ->where('is_active', true)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Cronograma não encontrado.');
        }

        return $row;
    }

    private function requireScheduleItem(int $tenant, int $studentId, string $item): object
    {
        $row = DB::table('cjc_schedule_items as i')
            ->join('cjc_schedules as s', 's.id', '=', 'i.schedule_id')
            ->where('i.tenant_id', $tenant)
            ->where('s.student_id', $studentId)
            ->where('i.id', $item)
            ->select('i.*')
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Item do cronograma não encontrado.');
        }

        return $row;
    }

    private function requireTenantRow(string $table, int $tenant, string $id): object
    {
        $row = DB::table($table)->where('tenant_id', $tenant)->where('id', $id)->first();
        if (! $row) {
            throw new NotFoundHttpException('Registro CJC não encontrado neste tenant.');
        }

        return $row;
    }
}
