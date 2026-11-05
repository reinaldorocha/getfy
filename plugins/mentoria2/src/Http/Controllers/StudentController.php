<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\ContentAudienceService;
use Plugins\Mentoria2\Services\GoalService;
use Plugins\Mentoria2\Services\Mentoria2SeederService;
use Plugins\Mentoria2\Services\MetricsService;
use Plugins\Mentoria2\Services\StudentHomeBannerService;
use Plugins\Mentoria2\Services\EdictProgressService;
use Plugins\Mentoria2\Services\ReviewScheduleService;
use Plugins\Mentoria2\Services\ScheduleEngineService;
use Plugins\Mentoria2\Services\GamificationService;
use Plugins\Mentoria2\Services\NotificationService;

class StudentController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
        private readonly ContentAudienceService $audience,
        private readonly GoalService $goals,
        private readonly ScheduleEngineService $scheduleEngine,
        private readonly ReviewScheduleService $reviewSchedule,
        private readonly GamificationService $gamification,
        private readonly NotificationService $notifications,
        private readonly StudentHomeBannerService $banners,
        private readonly EdictProgressService $edictProgress,
    ) {}

    public function index(Request $request, int $tenant): Response
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return Inertia::render('Plugin/mentoria2/Student', [
            'pluginSlug' => 'mentoria2',
            'pluginPage' => 'Student',
            'plugin_ui_page' => $this->payload($student, $tenant, $request->query('contest_id')),
        ]);
    }

    public function data(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $workspaceBase = $request->attributes->get('mentoria2.workspace_base');
        $payload = $this->payload($student, $tenant, $request->query('contest_id'), $workspaceBase);

        if ($workspaceBase) {
            $payload['acting_as_mentor'] = true;
            $payload['previewed_student_name'] = $student->name;
            $payload['preview_return_url'] = url('/mentoria2');
            $payload['workspace_base'] = $workspaceBase;
        }

        return response()->json($payload);
    }

    public function setActiveContest(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $studentId = (int) $student->id;

        $validated = $request->validate([
            'contest_id' => ['required', 'string'],
        ]);
        $contestId = $validated['contest_id'];

        $contestExists = DB::table('mentoria2_contests')
            ->where('tenant_id', $tenant)
            ->where('id', $contestId)
            ->where('is_active', true)
            ->exists();

        if (! $contestExists) {
            return response()->json(['message' => 'Concurso não encontrado.'], 404);
        }

        // Set all other contests with 'foco' to 'mira'
        DB::table('mentoria2_student_contests')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('contest_id', '!=', $contestId)
            ->where('group', 'foco')
            ->update([
                'group' => 'mira',
                'updated_at' => now(),
            ]);

        // Upsert chosen contest with 'foco'
        $existing = DB::table('mentoria2_student_contests')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->first();

        if ($existing) {
            DB::table('mentoria2_student_contests')
                ->where('id', $existing->id)
                ->update([
                    'group' => 'foco',
                    'is_active' => true,
                    'updated_at' => now(),
                ]);
        } else {
            DB::table('mentoria2_student_contests')->insert([
                'id' => (string) \Illuminate\Support\Str::uuid(),
                'tenant_id' => $tenant,
                'student_id' => $studentId,
                'contest_id' => $contestId,
                'assigned_by' => $studentId,
                'group' => 'foco',
                'position' => 0,
                'include_in_stats' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Persist in mentoria2_preferences.settings['active_contest_id']
        $existingPref = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->first();

        $settings = $existingPref ? $this->decodeJson($existingPref->settings) : [];
        $settings['active_contest_id'] = $contestId;

        if ($existingPref) {
            DB::table('mentoria2_preferences')->where('id', $existingPref->id)->update([
                'settings' => json_encode($settings, JSON_UNESCAPED_UNICODE),
                'updated_at' => now(),
            ]);
        } else {
            DB::table('mentoria2_preferences')->insert([
                'id' => (string) \Illuminate\Support\Str::uuid(),
                'tenant_id' => $tenant,
                'student_id' => $studentId,
                'tour_completed' => false,
                'settings' => json_encode($settings, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $workspaceBase = $request->attributes->get('mentoria2.workspace_base');
        $payload = $this->payload($student, $tenant, $contestId, $workspaceBase);

        if ($workspaceBase) {
            $payload['acting_as_mentor'] = true;
            $payload['previewed_student_name'] = $student->name;
            $payload['preview_return_url'] = url('/mentoria2');
            $payload['workspace_base'] = $workspaceBase;
        }

        return response()->json($payload);
    }

    public function preview(Request $request, int $student): Response
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $previewedStudent = $this->access->assertStudentInTenant($actor, $student);
        $workspaceBase = url('/mentoria2/students/'.$previewedStudent->id.'/workspace/'.$tenantId);
        $payload = $this->payload($previewedStudent, $tenantId, $request->query('contest_id'), $workspaceBase);
        $payload['acting_as_mentor'] = true;
        $payload['previewed_student_name'] = $previewedStudent->name;
        $payload['preview_return_url'] = url('/mentoria2');
        $payload['workspace_base'] = $workspaceBase;

        return Inertia::render('Plugin/mentoria2/Student', [
            'pluginSlug' => 'mentoria2',
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

        $result = $this->edictProgress->setStudied(
            $tenant,
            (int) $student->id,
            $data['item_type'],
            $item,
            (bool) $data['studied'],
            $data['notes'] ?? null,
        );

        return response()->json(['ok' => true] + $result);
    }

    public function todaySummary(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $studentId = (int) $student->id;
        $today = today()->toDateString();

        $schedule = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByDesc('updated_at')
            ->first();

        $todayTasks = $schedule
            ? DB::table('mentoria2_schedule_items')
                ->where('tenant_id', $tenant)
                ->where('schedule_id', $schedule->id)
                ->where('planned_date', $today)
                ->orderBy('position')
                ->get()
            : collect();

        $pendingReviewsCount = DB::table('mentoria2_scheduled_reviews')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->where('completed', false)
            ->where(function ($q) use ($today) {
                $q->whereNull('next_date')->orWhere('next_date', '<=', $today);
            })
            ->count();

        $gamification = $this->gamification->getSummary($tenant, $studentId);
        $banners = $this->banners->forTenant($tenant);

        return response()->json([
            'today' => $today,
            'today_tasks' => $todayTasks,
            'pending_reviews_count' => $pendingReviewsCount,
            'gamification' => $gamification,
            'banners' => $banners,
        ]);
    }

    public function syllabusTree(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'edital');
        $studentId = (int) $student->id;

        $contestId = $request->query('contest_id');
        $edictId = $request->query('edict_id');

        $edictQuery = DB::table('mentoria2_edicts as e')
            ->join('mentoria2_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenant)
            ->where('e.is_active', true);

        if ($edictId) {
            $edictQuery->where('e.id', $edictId);
        } elseif ($contestId) {
            $edictQuery->where('e.contest_id', $contestId);
        }

        $edict = $edictQuery->select('e.*', 'c.name as contest_name')->first();
        if (! $edict) {
            return response()->json([
                'edict' => null,
                'subjects' => [],
                'topics' => [],
                'subtopics' => [],
                'progress' => [],
            ]);
        }

        $subjects = DB::table('mentoria2_subjects')
            ->where('tenant_id', $tenant)
            ->where('edict_id', $edict->id)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $subjectIds = $subjects->pluck('id');
        $topics = DB::table('mentoria2_topics')
            ->where('tenant_id', $tenant)
            ->whereIn('subject_id', $subjectIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $topicIds = $topics->pluck('id');
        $subtopics = DB::table('mentoria2_subtopics')
            ->where('tenant_id', $tenant)
            ->whereIn('topic_id', $topicIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $progress = DB::table('mentoria2_edict_progress')
            ->where('tenant_id', $tenant)
            ->where('student_id', $studentId)
            ->get();

        return response()->json([
            'edict' => $edict,
            'subjects' => $this->decodeJsonColumns($subjects, ['materials']),
            'topics' => $this->decodeJsonColumns($topics, ['materials']),
            'subtopics' => $this->decodeJsonColumns($subtopics, ['materials']),
            'progress' => $progress,
        ]);
    }

    private function payload(User $student, int $tenantId, ?string $requestedContestId = null, ?string $workspaceBase = null): array
    {
        $studentId = (int) $student->id;
        $capabilities = $this->access->studentCapabilities($student, $tenantId);

            $groupOrderRaw = DB::connection()->getDriverName() === 'sqlite'
                ? 'CASE "sc"."group" WHEN \'foco\' THEN 1 WHEN \'mira\' THEN 2 WHEN \'realizado\' THEN 3 ELSE 4 END'
                : "FIELD(sc.`group`, 'foco', 'mira', 'realizado')";

            $contests = DB::table('mentoria2_student_contests as sc')
                ->join('mentoria2_contests as c', 'c.id', '=', 'sc.contest_id')
                ->where('sc.tenant_id', $tenantId)
                ->where('sc.student_id', $studentId)
                ->where('sc.is_active', true)
                ->where('c.is_active', true)
                ->select(
                    'c.id', 'c.name', 'c.board', 'c.position', 'c.salary', 'c.exam_date',
                    'c.pre_notice', 'c.review_intervals', 'c.logo',
                    'sc.group', 'sc.position as order', 'sc.include_in_stats',
                    'sc.result', 'sc.ranking', 'sc.final_score', 'sc.appointed', 'sc.appointment_date',
                    'sc.allowed_schedule_mode', 'sc.fixed_days_duration',
                )
                ->orderByRaw($groupOrderRaw)
                ->orderBy('sc.position')
                ->orderBy('c.name')
                ->get();

        if ($contests->isEmpty()) {
            $contests = DB::table('mentoria2_contests')
                ->where('tenant_id', $tenantId)
                ->where('is_active', true)
                ->select(
                    'id', 'name', 'board', 'position', 'salary', 'exam_date',
                    'pre_notice', 'review_intervals', 'fixed_plan_items', 'logo',
                    DB::raw("'mira' as `group`"),
                    DB::raw('0 as `order`'),
                    DB::raw('1 as `include_in_stats`'),
                    DB::raw('NULL as `result`'),
                    DB::raw('NULL as `ranking`'),
                    DB::raw('NULL as `final_score`'),
                    DB::raw('0 as `appointed`'),
                    DB::raw('NULL as `appointment_date`')
                )
                ->orderBy('name')
                ->get();
        }

        // Concursos vinculados automaticamente através dos produtos adquiridos pelo aluno
        $productContestIds = [];
        $productSettingsRows = DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $studentId)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->pluck('mentoria2_products.settings');

        foreach ($productSettingsRows as $stJson) {
            $st = is_array($stJson) ? $stJson : json_decode($stJson ?: '[]', true);
            foreach ($st['contest_ids'] ?? [] as $cId) {
                if ($cId) {
                    $productContestIds[(string) $cId] = true;
                }
            }
        }

        if (! empty($productContestIds)) {
            $productContests = DB::table('mentoria2_contests')
                ->where('tenant_id', $tenantId)
                ->where('is_active', true)
                ->whereIn('id', array_keys($productContestIds))
                ->select(
                    'id', 'name', 'board', 'position', 'salary', 'exam_date',
                    'pre_notice', 'review_intervals', 'fixed_plan_items', 'logo',
                    DB::raw("'mira' as `group`"),
                    DB::raw('0 as `order`'),
                    DB::raw('1 as `include_in_stats`'),
                    DB::raw('NULL as `result`'),
                    DB::raw('NULL as `ranking`'),
                    DB::raw('NULL as `final_score`'),
                    DB::raw('0 as `appointed`'),
                    DB::raw('NULL as `appointment_date`')
                )
                ->get();
            $contests = $contests->concat($productContests)->unique('id')->values();
        }

        $prefRow = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->first();
        $prefSettings = $prefRow ? $this->decodeJson($prefRow->settings) : [];
        $prefActiveContestId = $prefSettings['active_contest_id'] ?? null;

        $activeContestId = null;
        if ($requestedContestId && $contests->contains('id', $requestedContestId)) {
            $activeContestId = $requestedContestId;
        } elseif ($prefActiveContestId && $contests->contains('id', $prefActiveContestId)) {
            $activeContestId = $prefActiveContestId;
        } else {
            $activeContestId = $contests->firstWhere('group', 'foco')?->id ?? $contests->first()?->id;
        }

        if ($activeContestId) {
            $contests = $contests->map(function ($c) use ($activeContestId) {
                if (is_object($c)) {
                    if ((string) $c->id === (string) $activeContestId) {
                        $c->group = 'foco';
                    } elseif ($c->group === 'foco') {
                        $c->group = 'mira';
                    }
                }
                return $c;
            });
        }

        $contestIds = $contests->pluck('id')->filter()->all();

        $directEdictIds = DB::table('mentoria2_student_edicts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->pluck('edict_id')
            ->all();

        $contestEdictIds = !empty($contestIds)
            ? DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->whereIn('contest_id', $contestIds)
                ->where('is_active', true)
                ->pluck('id')
                ->all()
            : [];

        $edictIds = array_values(array_unique(array_merge($directEdictIds, $contestEdictIds)));
        if (empty($edictIds)) {
            $edictIds = DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->where('is_active', true)
                ->pluck('id')
                ->all();
        }

        $activeContestEdictIds = $activeContestId
            ? DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->where('contest_id', $activeContestId)
                ->where('is_active', true)
                ->pluck('id')
                ->all()
            : [];

        $subjectEdictIds = !empty($activeContestEdictIds) ? $activeContestEdictIds : $edictIds;

        $edicts = DB::table('mentoria2_edicts as e')
            ->join('mentoria2_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenantId)
            ->whereIn('e.id', $edictIds)
            ->where('e.is_active', true)
            ->select('e.id', 'e.name', 'e.version', 'e.contest_id', 'c.name as contest_name')
            ->orderBy('c.name')->orderBy('e.name')
            ->get();

        $subjects = DB::table('mentoria2_subjects')
            ->where('tenant_id', $tenantId)
            ->whereIn('edict_id', $subjectEdictIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $subjectIds = $subjects->pluck('id');
        $topics = DB::table('mentoria2_topics')
            ->where('tenant_id', $tenantId)
            ->whereIn('subject_id', $subjectIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $topicIds = $topics->pluck('id');
        $subtopics = DB::table('mentoria2_subtopics')
            ->where('tenant_id', $tenantId)
            ->whereIn('topic_id', $topicIds)
            ->where('is_active', true)
            ->orderBy('position')->orderBy('name')
            ->get();

        $progress = DB::table('mentoria2_edict_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get();

        $materials = $this->visibleMaterials($student, $tenantId);
        $materialProgress = DB::table('mentoria2_material_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get()
            ->keyBy('material_id');

        $materials = $materials->map(function ($material) use ($materialProgress, $tenantId, $workspaceBase) {
            $progress = $materialProgress->get($material->id);
            $material->completed = (bool) ($progress?->completed ?? false);
            $material->completed_at = $progress?->completed_at;
            $material->download_url = $material->type === 'arquivo'
                ? ($workspaceBase ?: url('/mentoria2-estudos/'.$tenantId)).'/materials/'.$material->id.'/download'
                : null;
            return $material;
        });

        $schedules = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByDesc('updated_at')
            ->get();

        $scheduleIds = $schedules->pluck('id');
        $scheduleItems = DB::table('mentoria2_schedule_items as i')
            ->leftJoin('mentoria2_subjects as sub', 'sub.id', '=', 'i.subject_id')
            ->leftJoin('mentoria2_topics as top', 'top.id', '=', 'i.topic_id')
            ->leftJoin('mentoria2_subtopics as subtop', 'subtop.id', '=', 'i.subtopic_id')
            ->where('i.tenant_id', $tenantId)
            ->whereIn('i.schedule_id', $scheduleIds)
            ->select('i.*', 'sub.name as subject_name', 'top.name as topic_name', 'subtop.name as subtopic_name')
            ->orderByRaw('i.planned_date IS NULL, i.planned_date')
            ->orderBy('i.position')
            ->limit(250)
            ->get();

        $activeSchedule = $activeContestId
            ? $schedules->firstWhere('contest_id', $activeContestId)
            : $schedules->first();

        $visibleDeckIds = $this->audience->visibleIds($student, $tenantId, 'flashcard_deck');
        $ownDeckIds = DB::table('mentoria2_flashcard_decks')
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
            : DB::table('mentoria2_flashcard_decks')
                ->where('tenant_id', $tenantId)
                ->whereIn('id', $allDeckIds)
                ->where('is_active', true)
                ->where(function ($query) use ($ownDeckIds): void {
                    $query->whereIn('id', $ownDeckIds)->orWhere('content_status', 'publicado');
                })
                ->orderBy('position')->orderBy('name')
                ->get();

        $cards = $allDeckIds === []
            ? collect()
            : DB::table('mentoria2_flashcards')
                ->where('tenant_id', $tenantId)
                ->whereIn('deck_id', $allDeckIds)
                ->where('is_active', true)
                ->where(function ($query) use ($ownDeckIds): void {
                    $query->whereIn('deck_id', $ownDeckIds)->orWhere('content_status', 'publicado');
                })
                ->orderBy('created_at')
                ->limit(100)
                ->get();

        $cardReviews = DB::table('mentoria2_flashcard_reviews')
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
            : DB::table('mentoria2_question_bank')
                ->where('tenant_id', $tenantId)
                ->whereIn('id', $visibleQuestionIds)
                ->where('is_active', true)
                ->where('content_status', 'publicado')
                ->orderBy('subject')->orderBy('topic')->latest('created_at')
                ->limit(100)
                ->get();

        $lastAnswers = DB::table('mentoria2_question_answers')
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
                'board' => $question->board ?? null,
                'type' => $question->type,
                'prompt' => $question->prompt,
                'alternatives' => $this->decodeJson($question->alternatives),
                'scope' => $question->scope,
                'contest_id' => $question->contest_id,
                'answered' => $answer !== null,
                'last_answer' => $answer?->answer,
                'last_correct' => $answer?->is_correct !== null ? (bool) $answer->is_correct : null,
                'last_answered_at' => $answer?->answered_at,
                'correct_answer' => $answer !== null ? $question->correct_answer : null,
                'explanation' => $answer !== null ? $question->explanation : null,
            ];
        })->values();

        $reviews = DB::table('mentoria2_scheduled_reviews as r')
            ->leftJoin('mentoria2_subjects as s', 's.id', '=', 'r.subject_id')
            ->leftJoin('mentoria2_topics as t', 't.id', '=', 'r.topic_id')
            ->where('r.tenant_id', $tenantId)
            ->where('r.student_id', $studentId)
            ->where('r.is_active', true)
            ->select(
                'r.id',
                'r.tenant_id',
                'r.student_id',
                'r.contest_id',
                'r.subject_id',
                'r.topic_id',
                'r.subtopic_id',
                'r.current_cycle',
                'r.next_date',
                'r.completed',
                'r.completed_at',
                'r.is_active',
                's.name as subject_name',
                't.name as topic_name'
            )
            ->orderByRaw('r.completed ASC, r.next_date IS NULL, r.next_date')
            ->limit(100)
            ->get();

        $errorAnswers = DB::table('mentoria2_question_answers as qa')
            ->join('mentoria2_question_bank as qb', 'qb.id', '=', 'qa.question_id')
            ->where('qa.tenant_id', $tenantId)
            ->where('qa.student_id', $studentId)
            ->where('qa.is_correct', 0)
            ->select(
                'qa.id',
                'qa.question_id',
                'qa.contest_id',
                'qa.answer as student_answer',
                'qa.answered_at',
                'qb.subject',
                'qb.topic',
                'qb.board',
                'qb.difficulty',
                'qb.type',
                'qb.prompt',
                'qb.alternatives',
                'qb.correct_answer',
                'qb.explanation'
            )
            ->orderByDesc('qa.answered_at')
            ->get()
            ->unique('question_id')
            ->values();

        $errorNotebook = $errorAnswers->map(function ($row) {
            return [
                'id' => $row->id,
                'question_id' => $row->question_id,
                'contest_id' => $row->contest_id,
                'subject' => $row->subject,
                'topic' => $row->topic,
                'board' => $row->board,
                'difficulty' => $row->difficulty,
                'type' => $row->type,
                'prompt' => $row->prompt,
                'alternatives' => $this->decodeJson($row->alternatives),
                'student_answer' => $row->student_answer,
                'correct_answer' => $row->correct_answer,
                'explanation' => $row->explanation,
                'answered_at' => $row->answered_at,
                'errorCause' => 'Erro de conteúdo / pegadinha',
                'personalNote' => null,
            ];
        });

        $notebooks = DB::table('mentoria2_notebooks as n')
            ->leftJoin('mentoria2_edicts as e', 'e.id', '=', 'n.edict_id')
            ->leftJoin('mentoria2_subjects as s', 's.id', '=', 'n.subject_id')
            ->leftJoin('mentoria2_topics as t', 't.id', '=', 'n.topic_id')
            ->where('n.tenant_id', $tenantId)
            ->where('n.student_id', $studentId)
            ->where('n.is_active', true)
            ->select('n.*', 'e.name as edict_name', 's.name as subject_name', 't.name as topic_name')
            ->orderBy('n.folder')
            ->latest('n.updated_at')
            ->get();

        $mockExams = DB::table('mentoria2_mock_exams')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderByRaw('performed_at IS NULL, performed_at DESC')
            ->latest('created_at')
            ->limit(50)
            ->get();

        $mockIds = $mockExams->pluck('id');
        $mockSubjectResults = DB::table('mentoria2_mock_exam_subject_results')
            ->where('tenant_id', $tenantId)
            ->whereIn('mock_exam_id', $mockIds)
            ->where('is_active', true)
            ->get();

        $examConfigurations = DB::table('mentoria2_exam_configurations')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->get()
            ->map(function ($row) {
                $row->configuration = $this->decodeJson($row->configuration);
                return $row;
            });

        $sessions = DB::table('mentoria2_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->latest('studied_at')
            ->limit(100)
            ->get();

        $questionLogs = DB::table('mentoria2_question_logs')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->latest('recorded_at')
            ->limit(100)
            ->get();

        $metricSummary = $this->metrics->summary(
            $tenantId,
            $studentId,
            $activeContestId ? (string) $activeContestId : null,
            request()->query('start'),
            request()->query('end'),
        );

        $mentorUser = DB::table('users')->where('id', $tenantId)->first();
        $cohortName = Schema::hasTable('mentoria2_cohort_members') && Schema::hasTable('mentoria2_cohorts')
            ? DB::table('mentoria2_cohort_members as cm')
                ->join('mentoria2_cohorts as ch', 'ch.id', '=', 'cm.cohort_id')
                ->where('cm.tenant_id', $tenantId)
                ->where('cm.student_id', $studentId)
                ->where('ch.tenant_id', $tenantId)
                ->orderBy('ch.name')
                ->value('ch.name')
            : null;

        return [
            'tenant_id' => $tenantId,
            'mentor' => [
                'id' => $mentorUser?->id ?: 1,
                'name' => $mentorUser?->name ?: 'Mentor Titular',
                'email' => $mentorUser?->email ?: '',
            ],
            'student' => [
                'id' => $studentId,
                'name' => $student->name,
                'email' => $student->email,
                'cohort_name' => $cohortName,
            ],
            'mentorship' => [
                'student_home_banner' => $this->banners->forTenant($tenantId),
                'platform_logo' => $this->banners->logoForTenant($tenantId),
                'platform_branding' => $this->banners->brandingForTenant($tenantId),
                'platform_colors' => $this->banners->platformColorsForTenant($tenantId),
                'promotional_banners' => $this->banners->promotionalBannersForTenant($tenantId),
            ],
            'gamification' => $this->gamification->getSummary($tenantId, $studentId),
            'gamification_history' => $this->gamification->history($tenantId, $studentId, 20),
            'ranking' => $this->gamification->ranking($tenantId, $studentId),
            'notifications' => $this->notifications->inbox($tenantId, $studentId),
            'capabilities' => $capabilities,
            'bonus_access' => $this->access->studentBonusStatus($student, $tenantId),
            'ai_configured' => app(\Plugins\Mentoria2\Services\EssayService::class)->isAiConfigured($tenantId),
            'has_ai_access' => $this->access->hasAiAccess($student, $tenantId),
            'available_boards' => DB::table('mentoria2_question_bank')
                ->where('tenant_id', $tenantId)
                ->where('is_active', true)
                ->whereNotNull('board')
                ->where('board', '<>', '')
                ->distinct()
                ->orderBy('board')
                ->pluck('board')
                ->all(),
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
            'error_notebook' => $errorNotebook,
            'decks' => $decks,
            'cards' => $cards,
            'questions' => $questions,
            'goals' => $this->goals->forStudent($tenantId, $studentId),
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
            'essays' => Schema::hasTable('mentoria2_essays')
                ? DB::table('mentoria2_essays')->where('tenant_id', $tenantId)->where('is_active', true)->latest()->limit(50)->get()
                : collect(),
            'essay_submissions' => Schema::hasTable('mentoria2_essay_submissions')
                ? DB::table('mentoria2_essay_submissions')->where('tenant_id', $tenantId)->where('student_id', $studentId)->latest()->limit(50)->get()
                : collect(),
            'ai_memory' => Schema::hasTable('mentoria2_ai_memory')
                ? DB::table('mentoria2_ai_memory')->where('tenant_id', $tenantId)->where('student_id', $studentId)->first()
                : null,
            // O Radar possui endpoint próprio paginado; nunca mistura pendências de curadoria no payload geral.
            'radar_contests' => collect(),
            'timer_logs' => Schema::hasTable('mentoria2_timer_logs')
                ? DB::table('mentoria2_timer_logs')->where('tenant_id', $tenantId)->where('student_id', $studentId)->latest()->limit(50)->get()
                : collect(),
            'feedbacks' => Schema::hasTable('mentoria2_student_feedbacks')
                ? DB::table('mentoria2_student_feedbacks as f')
                    ->join('users as m', 'm.id', '=', 'f.mentor_id')
                    ->where('f.tenant_id', $tenantId)
                    ->where('f.student_id', $studentId)
                    ->select('f.*', 'm.name as mentor_name')
                    ->latest('f.created_at')->limit(50)->get()
                : collect(),
            'preferences' => Schema::hasTable('mentoria2_preferences')
                ? DB::table('mentoria2_preferences')->where('tenant_id', $tenantId)->where('student_id', $studentId)->first()
                : null,
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

        // Busca o produto mentoria2 do tenant com ai_enabled ativo
        $studentProductIds = $this->access->productIdsForStudent($student, $tenantId);
        if ($studentProductIds === []) {
            return ['enabled' => false];
        }

        $mentoria2Products = DB::table('mentoria2_products')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->whereIn('product_id', $studentProductIds)
            ->get();

        $activeMentoria2Product = null;
        foreach ($mentoria2Products as $mp) {
            $settings = json_decode($mp->settings ?? '[]', true) ?: [];
            if (! empty($settings['ai_enabled'])) {
                $activeMentoria2Product = $mp;
                break;
            }
        }

        if (! $activeMentoria2Product) {
            return ['enabled' => false];
        }

        $agent = \Plugins\AiMember\Models\AiMemberAgent::query()
            ->where('product_id', $activeMentoria2Product->product_id)
            ->first();

        // Se o agente ainda não existe, cria um padrão
        if (! $agent) {
            $agent = \Plugins\AiMember\Models\AiMemberAgent::query()->create([
                'product_id' => $activeMentoria2Product->product_id,
                'tenant_id' => $tenantId,
                'enabled' => true,
                'name' => 'Mentor IA',
                'gender' => 'neutral',
                'temperature' => 0.7,
                'max_tokens' => 2000,
                'system_instructions' => 'Você é o Mentor IA oficial deste curso e mentoria2 para concursos. Ajude o aluno tirando dúvidas sobre matérias e orientando os estudos.',
                'welcome_message' => 'Olá! Sou o seu Mentor IA. Como posso te ajudar nos estudos hoje?',
            ]);
        }

        if (! $agent->enabled) {
            return ['enabled' => false];
        }

        return [
            'enabled' => true,
            'product_id' => (string) $activeMentoria2Product->product_id,
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

        return DB::table('mentoria2_support_materials')
            ->where('tenant_id', $tenantId)
            ->whereIn('id', $ids)
            ->where('is_active', true)
            ->orderBy('folder')->orderBy('title')
            ->get();
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

    public function savePreferences(Request $request, int|string $tenant): JsonResponse
    {
        $actor = $request->user();
        $tenantId = (int) $tenant;
        $this->access->assertStudentAccess($actor, $tenantId);

        $data = $request->validate([
            'tour_completed' => ['sometimes', 'boolean'],
            'settings' => ['sometimes', 'array'],
            'availability' => ['sometimes', 'array'],
        ]);

        $settings = $data['settings'] ?? [];
        if (isset($data['availability'])) {
            $settings['availability'] = $data['availability'];
        }

        $existing = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $actor->id)
            ->first();

        $updateData = [
            'updated_at' => now(),
        ];
        if (array_key_exists('tour_completed', $data)) {
            $updateData['tour_completed'] = (bool) $data['tour_completed'];
        }
        if (! empty($settings)) {
            $currentSettings = $existing ? $this->decodeJson($existing->settings) : [];
            $merged = array_merge($currentSettings, $settings);
            $updateData['settings'] = json_encode($merged, JSON_UNESCAPED_UNICODE);
        }

        if ($existing) {
            DB::table('mentoria2_preferences')->where('id', $existing->id)->update($updateData);
        } else {
            DB::table('mentoria2_preferences')->insert([
                'id' => (string) \Illuminate\Support\Str::uuid(),
                'tenant_id' => $tenantId,
                'student_id' => $actor->id,
                'tour_completed' => $data['tour_completed'] ?? false,
                'settings' => ! empty($settings) ? json_encode($settings, JSON_UNESCAPED_UNICODE) : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json(['ok' => true]);
    }

    public function saveStudentPreferences(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);

        $data = $request->validate([
            'tour_completed' => ['sometimes', 'boolean'],
            'settings' => ['sometimes', 'array'],
            'availability' => ['sometimes', 'array'],
        ]);

        $settings = $data['settings'] ?? [];
        if (isset($data['availability'])) {
            $settings['availability'] = $data['availability'];
        }

        $existing = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentUser->id)
            ->first();

        $updateData = [
            'updated_at' => now(),
        ];
        if (array_key_exists('tour_completed', $data)) {
            $updateData['tour_completed'] = (bool) $data['tour_completed'];
        }
        if (! empty($settings)) {
            $currentSettings = $existing ? $this->decodeJson($existing->settings) : [];
            $merged = array_merge($currentSettings, $settings);
            $updateData['settings'] = json_encode($merged, JSON_UNESCAPED_UNICODE);
        }

        if ($existing) {
            DB::table('mentoria2_preferences')->where('id', $existing->id)->update($updateData);
        } else {
            DB::table('mentoria2_preferences')->insert([
                'id' => (string) \Illuminate\Support\Str::uuid(),
                'tenant_id' => $tenantId,
                'student_id' => $studentUser->id,
                'tour_completed' => $data['tour_completed'] ?? false,
                'settings' => ! empty($settings) ? json_encode($settings, JSON_UNESCAPED_UNICODE) : null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json(['ok' => true]);
    }

    public function grantBonusAccess(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);
        $days = (int) $request->input('days', 7);
        if ($days <= 0 || $days > 365) {
            $days = 7;
        }

        $status = $this->access->grantBonusAccess($tenantId, (int) $studentUser->id, $days);

        return response()->json([
            'ok' => true,
            'message' => "Bônus de {$days} dias concedido com sucesso para {$studentUser->name}.",
            'bonus' => $status,
        ]);
    }

    public function revokeBonusAccess(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);

        $this->access->revokeBonusAccess($tenantId, (int) $studentUser->id);

        return response()->json([
            'ok' => true,
            'message' => "Bônus de acesso revogado para {$studentUser->name}.",
        ]);
    }
}
