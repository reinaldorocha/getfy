<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\ContentAudienceService;
use Plugins\Mentoria\Services\MetricsService;
use Plugins\Mentoria\Services\ReviewScheduleService;
use Plugins\Mentoria\Services\ScheduleEngineService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class StudentController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
        private readonly ContentAudienceService $audience,
        private readonly ScheduleEngineService $scheduleEngine,
        private readonly ReviewScheduleService $reviewSchedule,
    ) {}

    public function index(Request $request, int $tenant): Response
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return Inertia::render('Plugin/mentoria/Student', [
            'pluginSlug' => 'mentoria',
            'pluginPage' => 'Student',
            'plugin_ui_page' => $this->payload($student, $tenant, $request->query('contest_id')),
        ]);
    }

    public function data(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $workspaceBase = $request->attributes->get('mentoria.workspace_base');
        $payload = $this->payload($student, $tenant, $request->query('contest_id'), $workspaceBase);

        if ($workspaceBase) {
            $payload['acting_as_mentor'] = true;
            $payload['previewed_student_name'] = $student->name;
            $payload['preview_return_url'] = url('/mentoria');
            $payload['workspace_base'] = $workspaceBase;
        }

        return response()->json($payload);
    }

    public function preview(Request $request, int $student): Response
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $previewedStudent = $this->access->assertStudentInTenant($actor, $student);
        $workspaceBase = url('/mentoria/students/'.$previewedStudent->id.'/workspace/'.$tenantId);
        $payload = $this->payload($previewedStudent, $tenantId, $request->query('contest_id'), $workspaceBase);
        $payload['acting_as_mentor'] = true;
        $payload['previewed_student_name'] = $previewedStudent->name;
        $payload['preview_return_url'] = url('/mentoria');
        $payload['workspace_base'] = $workspaceBase;

        return Inertia::render('Plugin/mentoria/Student', [
            'pluginSlug' => 'mentoria',
            'pluginPage' => 'Student',
            'plugin_ui_page' => $payload,
        ]);
    }

    public function updateEdictProgress(Request $request, int $tenant, string $item): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'edital');

        $data = $request->validate([
            'item_type' => ['required', 'in:topico,subtopico,topic,subtopic'],
            'studied' => ['required', 'boolean'],
            'notes' => ['nullable', 'string'],
        ]);

        $type = match ($data['item_type']) {
            'topico', 'topic' => 'topico',
            default => 'subtopico',
        };

        $context = $this->itemContext($tenant, (int) $student->id, $type, $item);
        $existing = DB::table('mentoria_edict_progress')
            ->where('tenant_id', $tenant)
            ->where('student_id', $student->id)
            ->where('item_type', $type)
            ->where('item_id', $item)
            ->first();

        $payload = [
            'studied' => (bool) $data['studied'],
            'completed_at' => $data['studied'] ? now() : null,
            'notes' => $data['notes'] ?? null,
            'updated_at' => now(),
        ];

        DB::transaction(function () use ($tenant, $student, $type, $item, $existing, $payload, $data, $context): void {
            if ($existing) {
                DB::table('mentoria_edict_progress')->where('id', $existing->id)->update($payload);
            } else {
                DB::table('mentoria_edict_progress')->insert($payload + [
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenant,
                    'student_id' => $student->id,
                    'item_type' => $type,
                    'item_id' => $item,
                    'created_at' => now(),
                ]);
            }

            if (! $data['studied']) {
                $query = DB::table('mentoria_scheduled_reviews')
                    ->where('tenant_id', $tenant)
                    ->where('student_id', $student->id)
                    ->where('completed', false);

                if ($type === 'topico') {
                    $query->where('topic_id', $item)->whereNull('subtopic_id');
                } else {
                    $query->where('subtopic_id', $item);
                }

                $query->update(['is_active' => false, 'updated_at' => now()]);
                return;
            }

            $intervals = collect(explode(',', (string) $context->review_intervals))
                ->map(fn ($value) => (int) trim($value))
                ->filter(fn ($days) => $days > 0)
                ->values();

            foreach ($intervals as $index => $days) {
                $cycle = $index + 1;
                $query = DB::table('mentoria_scheduled_reviews')
                    ->where('tenant_id', $tenant)
                    ->where('student_id', $student->id)
                    ->where('contest_id', $context->contest_id)
                    ->where('subject_id', $context->subject_id)
                    ->where('topic_id', $context->topic_id)
                    ->where('current_cycle', $cycle)
                    ->where('is_active', true);

                if ($context->subtopic_id) {
                    $query->where('subtopic_id', $context->subtopic_id);
                } else {
                    $query->whereNull('subtopic_id');
                }

                $review = $query->first();
                $reviewPayload = [
                    'next_date' => today()->addDays($days)->toDateString(),
                    'completed' => false,
                    'completed_at' => null,
                    'is_active' => true,
                    'updated_at' => now(),
                ];

                if ($review) {
                    DB::table('mentoria_scheduled_reviews')->where('id', $review->id)->update($reviewPayload);
                } else {
                    DB::table('mentoria_scheduled_reviews')->insert($reviewPayload + [
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenant,
                        'student_id' => $student->id,
                        'contest_id' => $context->contest_id,
                        'subject_id' => $context->subject_id,
                        'topic_id' => $context->topic_id,
                        'subtopic_id' => $context->subtopic_id,
                        'current_cycle' => $cycle,
                        'previous_percentage' => null,
                        'notes' => null,
                        'created_at' => now(),
                    ]);
                }
            }
        });

        $reprogrammed = 0;
        $warning = null;
        $schedule = DB::table('mentoria_schedules')
            ->where('tenant_id', $tenant)
            ->where('student_id', $student->id)
            ->where('contest_id', $context->contest_id)
            ->where('is_active', true)
            ->latest('updated_at')
            ->first();

        if ($schedule) {
            try {
                $this->reviewSchedule->syncForContest($tenant, (int) $student->id, (string) $context->contest_id);
                $reprogrammed = $this->scheduleEngine->reprogram($tenant, $student->id, $schedule->id);
            } catch (\Throwable $e) {
                $warning = $e->getMessage();
            }
        }

        return response()->json([
            'ok' => true,
            'reprogrammed' => $reprogrammed,
            'warning' => $warning,
        ]);
    }

    private function payload(User $student, int $tenantId, ?string $requestedContestId = null, ?string $workspaceBase = null): array
    {
        $studentId = (int) $student->id;
        $capabilities = $this->access->studentCapabilities($student, $tenantId);

        $contests = DB::table('mentoria_student_contests as sc')
            ->join('mentoria_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenantId)
            ->where('sc.student_id', $studentId)
            ->where('sc.is_active', true)
            ->where('c.is_active', true)
            ->select(
                'c.id', 'c.name', 'c.board', 'c.position', 'c.salary', 'c.exam_date',
                'c.pre_notice', 'c.review_intervals', 'c.logo',
                'sc.group', 'sc.position as order', 'sc.include_in_stats',
                'sc.result', 'sc.ranking', 'sc.final_score', 'sc.appointed', 'sc.appointment_date',
            )
            ->orderByRaw("FIELD(sc.group, 'foco', 'mira', 'realizado')")
            ->orderBy('sc.position')
            ->orderBy('c.name')
            ->get();

        $activeContestId = $requestedContestId && $contests->contains('id', $requestedContestId)
            ? $requestedContestId
            : ($contests->firstWhere('group', 'foco')?->id ?? $contests->first()?->id);

        $edictIds = DB::table('mentoria_student_edicts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->pluck('edict_id');

        $edicts = DB::table('mentoria_edicts as e')
            ->join('mentoria_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenantId)
            ->whereIn('e.id', $edictIds)
            ->where('e.is_active', true)
            ->select('e.id', 'e.name', 'e.version', 'e.contest_id', 'c.name as contest_name')
            ->orderBy('c.name')->orderBy('e.name')
            ->get();

        $subjects = DB::table('mentoria_subjects')
            ->where('tenant_id', $tenantId)
            ->whereIn('edict_id', $edictIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $subjectIds = $subjects->pluck('id');
        $topics = DB::table('mentoria_topics')
            ->where('tenant_id', $tenantId)
            ->whereIn('subject_id', $subjectIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $topicIds = $topics->pluck('id');
        $subtopics = DB::table('mentoria_subtopics')
            ->where('tenant_id', $tenantId)
            ->whereIn('topic_id', $topicIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $progress = DB::table('mentoria_edict_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get();

        $materials = $this->visibleMaterials($student, $tenantId);
        $materialProgress = DB::table('mentoria_material_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get()
            ->keyBy('material_id');

        $materials = $materials->map(function ($material) use ($materialProgress, $tenantId, $workspaceBase) {
            $progress = $materialProgress->get($material->id);
            $material->completed = (bool) ($progress?->completed ?? false);
            $material->completed_at = $progress?->completed_at;
            $material->download_url = $material->type === 'arquivo'
                ? ($workspaceBase ?: url('/mentoria-estudos/'.$tenantId)).'/materials/'.$material->id.'/download'
                : null;
            return $material;
        });

        $schedules = DB::table('mentoria_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByDesc('updated_at')
            ->get();

        $scheduleIds = $schedules->pluck('id');
        $scheduleItems = DB::table('mentoria_schedule_items')
            ->where('tenant_id', $tenantId)
            ->whereIn('schedule_id', $scheduleIds)
            ->orderByRaw('planned_date IS NULL, planned_date')
            ->orderBy('position')
            ->limit(1500)
            ->get();

        $activeSchedule = $activeContestId
            ? $schedules->firstWhere('contest_id', $activeContestId)
            : $schedules->first();

        $visibleDeckIds = $this->audience->visibleIds($student, $tenantId, 'flashcard_deck');
        $ownDeckIds = DB::table('mentoria_flashcard_decks')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('owner_type', 'aluno')
            ->where('is_active', true)
            ->pluck('id')
            ->map(fn ($id) => (string) $id)
            ->all();

        $allDeckIds = array_values(array_unique(array_merge($visibleDeckIds, $ownDeckIds)));
        $decks = $allDeckIds === []
            ? collect()
            : DB::table('mentoria_flashcard_decks')
                ->where('tenant_id', $tenantId)
                ->whereIn('id', $allDeckIds)
                ->where('is_active', true)
                ->orderBy('position')->orderBy('name')
                ->get();

        $cards = $allDeckIds === []
            ? collect()
            : DB::table('mentoria_flashcards')
                ->where('tenant_id', $tenantId)
                ->whereIn('deck_id', $allDeckIds)
                ->where('is_active', true)
                ->orderBy('created_at')
                ->limit(2000)
                ->get();

        $cardReviews = DB::table('mentoria_flashcard_reviews')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->orderByDesc('reviewed_at')
            ->get()
            ->unique('card_id')
            ->keyBy('card_id');

        $cards = $cards->map(function ($card) use ($cardReviews) {
            $review = $cardReviews->get($card->id);
            $card->alternatives = $this->decodeJson($card->alternatives);
            $card->alternative_explanations = $this->decodeJson($card->alternative_explanations);
            $card->tags = $this->decodeJson($card->tags);
            $card->repetitions = (int) ($review?->repetitions ?? 0);
            $card->interval_days = (int) ($review?->interval_days ?? 0);
            $card->ease_factor = (float) ($review?->ease_factor ?? 2.5);
            $card->next_review = $review?->next_review;
            $card->last_review = $review?->reviewed_at;
            $card->last_quality = $review?->quality;
            return $card;
        });

        $visibleQuestionIds = $this->audience->visibleIds($student, $tenantId, 'question');
        $questions = $visibleQuestionIds === []
            ? collect()
            : DB::table('mentoria_question_bank')
                ->where('tenant_id', $tenantId)
                ->whereIn('id', $visibleQuestionIds)
                ->where('is_active', true)
                ->orderBy('subject')->orderBy('topic')->latest('created_at')
                ->limit(1000)
                ->get();

        $lastAnswers = DB::table('mentoria_question_answers')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->orderByDesc('answered_at')
            ->get()
            ->unique('question_id')
            ->keyBy('question_id');

        $questions = $questions->map(function ($question) use ($lastAnswers) {
            $answer = $lastAnswers->get($question->id);
            return [
                'id' => $question->id,
                'subject' => $question->subject,
                'topic' => $question->topic,
                'type' => $question->type,
                'prompt' => $question->prompt,
                'alternatives' => $this->decodeJson($question->alternatives),
                'scope' => $question->scope,
                'contest_id' => $question->contest_id,
                'answered' => $answer !== null,
                'last_answer' => $answer?->answer,
                'last_correct' => $answer?->is_correct !== null ? (bool) $answer->is_correct : null,
                'last_answered_at' => $answer?->answered_at,
            ];
        })->values();

        $reviews = DB::table('mentoria_scheduled_reviews')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByRaw('completed ASC, next_date IS NULL, next_date')
            ->limit(500)
            ->get();

        $notebooks = DB::table('mentoria_notebooks')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->latest('updated_at')
            ->get();

        $mockExams = DB::table('mentoria_mock_exams')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByRaw('performed_at IS NULL, performed_at DESC')
            ->latest('created_at')
            ->limit(300)
            ->get();

        $mockIds = $mockExams->pluck('id');
        $mockSubjectResults = DB::table('mentoria_mock_exam_subject_results')
            ->where('tenant_id', $tenantId)
            ->whereIn('mock_exam_id', $mockIds)
            ->where('is_active', true)
            ->get();

        $examConfigurations = DB::table('mentoria_exam_configurations')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get()
            ->map(function ($row) {
                $row->configuration = $this->decodeJson($row->configuration);
                return $row;
            });

        $sessions = DB::table('mentoria_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->latest('studied_at')
            ->limit(500)
            ->get();

        $questionLogs = DB::table('mentoria_question_logs')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->latest('recorded_at')
            ->limit(500)
            ->get();

        $metricSummary = $this->metrics->summary(
            $tenantId,
            $studentId,
            $activeContestId ? (string) $activeContestId : null,
            request()->query('start'),
            request()->query('end'),
        );

        return [
            'tenant_id' => $tenantId,
            'student' => ['id' => $studentId, 'name' => $student->name, 'email' => $student->email],
            'capabilities' => $capabilities,
            'active_contest_id' => $activeContestId,
            'contests' => $contests,
            'edicts' => $edicts,
            'subjects' => $this->decodeJsonColumns($subjects, ['materials']),
            'topics' => $this->decodeJsonColumns($topics, ['materials']),
            'subtopics' => $this->decodeJsonColumns($subtopics, ['materials']),
            'progress' => $progress,
            'materials' => $materials,
            'schedules' => $schedules,
            'schedule' => $activeSchedule,
            'schedule_items' => $activeSchedule
                ? $scheduleItems->where('schedule_id', $activeSchedule->id)->values()
                : collect(),
            'all_schedule_items' => $scheduleItems,
            'reviews' => $reviews,
            'decks' => $decks,
            'cards' => $cards,
            'questions' => $questions,
            'notebooks' => $notebooks,
            'mock_exams' => $this->decodeJsonColumns($mockExams, ['result', 'configuration_used']),
            'mock_subject_results' => $mockSubjectResults,
            'exam_configurations' => $examConfigurations,
            'recent_sessions' => $this->decodeJsonColumns($sessions, ['metrics']),
            'question_logs' => $questionLogs,
            'metrics' => $this->metrics->studentSummary($tenantId, $studentId),
            'metrics_summary' => $metricSummary,
            'metrics_timeline' => $this->metrics->timeline(
                $tenantId,
                $studentId,
                $activeContestId ? (string) $activeContestId : null,
                request()->query('start'),
                request()->query('end'),
            ),
            'metrics_subjects' => $activeContestId
                ? $this->metrics->subjects(
                    $tenantId,
                    $studentId,
                    (string) $activeContestId,
                    request()->query('start'),
                    request()->query('end'),
                )
                : [],
            'courses' => $this->access->studentCourses($student, $tenantId)->values(),
            'ai_widget' => $this->aiWidgetPayload($student, $tenantId),
        ];
    }

    private function aiWidgetPayload(User $student, int $tenantId): array
    {
        if (! class_exists(\Plugins\AiMember\Models\AiMemberConnection::class)) {
            return ['enabled' => false];
        }

        $conn = \Plugins\AiMember\Models\AiMemberConnection::forTenant($tenantId)->first();
        if (! $conn?->isConfigured() || ! $conn->is_active) {
            return ['enabled' => false];
        }

        // Busca o produto mentoria do tenant com ai_enabled ativo
        $mentoriaProducts = DB::table('mentoria_products')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->get();

        $activeMentoriaProduct = null;
        foreach ($mentoriaProducts as $mp) {
            $settings = json_decode($mp->settings ?? '[]', true) ?: [];
            if (! empty($settings['ai_enabled'])) {
                $activeMentoriaProduct = $mp;
                break;
            }
        }

        if (! $activeMentoriaProduct) {
            return ['enabled' => false];
        }

        $agent = \Plugins\AiMember\Models\AiMemberAgent::query()
            ->where('product_id', $activeMentoriaProduct->product_id)
            ->first();

        // Se o agente ainda não existe, cria um padrão
        if (! $agent) {
            $agent = \Plugins\AiMember\Models\AiMemberAgent::query()->create([
                'product_id' => $activeMentoriaProduct->product_id,
                'tenant_id' => $tenantId,
                'enabled' => true,
                'name' => 'Mentor IA',
                'gender' => 'neutral',
                'temperature' => 0.7,
                'max_tokens' => 2000,
                'system_instructions' => 'Você é o Mentor IA oficial deste curso e mentoria para concursos. Ajude o aluno tirando dúvidas sobre matérias e orientando os estudos.',
                'welcome_message' => 'Olá! Sou o seu Mentor IA. Como posso te ajudar nos estudos hoje?',
            ]);
        }

        if (! $agent->enabled) {
            return ['enabled' => false];
        }

        return [
            'enabled' => true,
            'product_id' => (string) $activeMentoriaProduct->product_id,
            'agent_name' => $agent->name ?: 'Mentor IA',
            'widget_color' => $agent->widget_color ?: '#0ea5e9',
            'welcome_message' => $agent->welcome_message ?: 'Olá! Sou seu Mentor IA. Como posso ajudar nos estudos hoje?',
        ];
    }

    private function visibleMaterials(User $student, int $tenantId)
    {
        $ids = $this->audience->visibleIds($student, $tenantId, 'material');
        if ($ids === []) {
            return collect();
        }

        return DB::table('mentoria_support_materials')
            ->where('tenant_id', $tenantId)
            ->whereIn('id', $ids)
            ->where('is_active', true)
            ->orderBy('folder')->orderBy('title')
            ->get();
    }

    private function itemContext(int $tenantId, int $studentId, string $type, string $itemId): object
    {
        if ($type === 'topico') {
            $row = DB::table('mentoria_topics as t')
                ->join('mentoria_subjects as s', 's.id', '=', 't.subject_id')
                ->join('mentoria_edicts as e', 'e.id', '=', 's.edict_id')
                ->join('mentoria_contests as c', 'c.id', '=', 'e.contest_id')
                ->join('mentoria_student_edicts as se', function ($join) use ($studentId): void {
                    $join->on('se.edict_id', '=', 'e.id')->where('se.student_id', '=', $studentId);
                })
                ->where('t.tenant_id', $tenantId)
                ->where('t.id', $itemId)
                ->where('t.is_active', true)
                ->where('s.is_active', true)
                ->where('e.is_active', true)
                ->where('se.is_active', true)
                ->selectRaw('e.contest_id, s.id subject_id, t.id topic_id, NULL subtopic_id, c.review_intervals')
                ->first();
        } else {
            $row = DB::table('mentoria_subtopics as st')
                ->join('mentoria_topics as t', 't.id', '=', 'st.topic_id')
                ->join('mentoria_subjects as s', 's.id', '=', 't.subject_id')
                ->join('mentoria_edicts as e', 'e.id', '=', 's.edict_id')
                ->join('mentoria_contests as c', 'c.id', '=', 'e.contest_id')
                ->join('mentoria_student_edicts as se', function ($join) use ($studentId): void {
                    $join->on('se.edict_id', '=', 'e.id')->where('se.student_id', '=', $studentId);
                })
                ->where('st.tenant_id', $tenantId)
                ->where('st.id', $itemId)
                ->where('st.is_active', true)
                ->where('t.is_active', true)
                ->where('s.is_active', true)
                ->where('e.is_active', true)
                ->where('se.is_active', true)
                ->select('e.contest_id', 's.id as subject_id', 't.id as topic_id', 'st.id as subtopic_id', 'c.review_intervals')
                ->first();
        }

        if (! $row) {
            throw new NotFoundHttpException('Item fora do edital atribuído ao aluno.');
        }

        return $row;
    }

    private function decodeJsonColumns($collection, array $columns)
    {
        return $collection->map(function ($row) use ($columns) {
            foreach ($columns as $column) {
                if (property_exists($row, $column)) {
                    $row->{$column} = $this->decodeJson($row->{$column});
                }
            }
            return $row;
        });
    }

    private function decodeJson(mixed $value): array
    {
        if (is_array($value)) {
            return $value;
        }
        if (! is_string($value) || trim($value) === '') {
            return [];
        }

        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }
}
