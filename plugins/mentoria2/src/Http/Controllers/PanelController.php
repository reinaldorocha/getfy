<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Plugins\Mentoria2\Services\ContentAudienceService;
use Plugins\Mentoria2\Services\Mentoria2SeederService;
use Plugins\Mentoria2\Services\MetricsService;
use Plugins\Mentoria2\Services\StudentHomeBannerService;

class PanelController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
        private readonly AuditService $audit,
        private readonly ContentAudienceService $audience,
        private readonly StudentHomeBannerService $banners,
    ) {}

    public function index(Request $request): Response
    {
        $tenantId = $this->access->tenantId($request->user());

        return Inertia::render('Plugin/mentoria2/Index', [
            'pluginSlug' => 'mentoria2',
            'pluginPage' => 'Index',
            'plugin_ui_page' => $this->panelPayload($tenantId, $request->user()),
        ]);
    }

    public function data(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json($this->panelPayload($tenantId, $request->user()));
    }

    public function student(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $user = $this->access->assertStudentInTenant($actor, $student);

        $contests = DB::table('mentoria2_student_contests as sc')
            ->join('mentoria2_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenantId)
            ->where('sc.student_id', $user->id)
            ->where('sc.is_active', true)
            ->select(
                'c.id', 'c.name', 'c.board', 'c.position', 'c.exam_date',
                'sc.group', 'sc.position as order', 'sc.include_in_stats', 'sc.result', 'sc.ranking',
                'sc.final_score', 'sc.appointed', 'sc.appointment_date',
            )
            ->orderBy('sc.position')
            ->get();

        $activeContestId = $request->query('contest_id')
            ?: ($contests->firstWhere('group', 'foco')?->id ?? $contests->first()?->id);

        $directEdictIds = DB::table('mentoria2_student_edicts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $user->id)
            ->where('is_active', true)
            ->pluck('edict_id');

        $contestEdictIds = $contests->isNotEmpty()
            ? DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->whereIn('contest_id', $contests->pluck('id'))
                ->where('is_active', true)
                ->pluck('id')
            : collect();

        $edictIds = $directEdictIds->merge($contestEdictIds)->unique();

        $schedules = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $user->id)
            ->where('is_active', true)
            ->latest('updated_at')
            ->get();

        $mockExams = DB::table('mentoria2_mock_exams')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $user->id)
            ->where('is_active', true)
            ->latest('performed_at')
            ->limit(100)
            ->get();

        return response()->json([
            'student' => ['id' => $user->id, 'name' => $user->name, 'email' => $user->email],
            'active_contest_id' => $activeContestId,
            'metrics' => $this->metrics->studentSummary($tenantId, (int) $user->id),
            'metrics_summary' => $this->metrics->summary(
                $tenantId,
                (int) $user->id,
                $activeContestId ? (string) $activeContestId : null,
                $request->query('start'),
                $request->query('end'),
            ),
            'metrics_timeline' => $this->metrics->timeline(
                $tenantId,
                (int) $user->id,
                $activeContestId ? (string) $activeContestId : null,
                $request->query('start'),
                $request->query('end'),
            ),
            'metrics_subjects' => $activeContestId
                ? $this->metrics->subjects(
                    $tenantId,
                    (int) $user->id,
                    (string) $activeContestId,
                    $request->query('start'),
                    $request->query('end'),
                )
                : [],
            'contests' => $contests,
            'edicts' => DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)->whereIn('id', $edictIds)->where('is_active', true)->get(),
            'schedules' => $schedules,
            'schedule_items' => DB::table('mentoria2_schedule_items')
                ->where('tenant_id', $tenantId)->whereIn('schedule_id', $schedules->pluck('id'))
                ->orderByRaw('planned_date IS NULL, planned_date')->orderBy('position')->limit(1000)->get(),
            'reviews' => DB::table('mentoria2_scheduled_reviews')
                ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                ->orderByRaw('completed ASC, next_date IS NULL, next_date')->limit(300)->get(),
            'recent_sessions' => $this->decodeJsonColumns(
                DB::table('mentoria2_study_sessions')
                    ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                    ->latest('studied_at')->limit(200)->get(),
                ['metrics'],
            ),
            'question_logs' => DB::table('mentoria2_question_logs')
                ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                ->latest('recorded_at')->limit(200)->get(),
            'mock_exams' => $this->decodeJsonColumns($mockExams, ['result', 'configuration_used']),
            'mock_subject_results' => DB::table('mentoria2_mock_exam_subject_results')
                ->where('tenant_id', $tenantId)->whereIn('mock_exam_id', $mockExams->pluck('id'))->where('is_active', true)->get(),
            'notebooks' => DB::table('mentoria2_notebooks')
                ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                ->latest('updated_at')->get(),
        ]);
    }

    public function enableProduct(Request $request, Product $product): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'capabilities' => ['sometimes', 'array'],
            'capabilities.*' => ['string', 'max:80'],
            'settings' => ['sometimes', 'array'],
        ]);

        $actor = $request->user();
        $this->access->enableProduct(
            $actor,
            $product,
            $data['capabilities'] ?? AccessService::DEFAULT_CAPABILITIES,
            $data['settings'] ?? [],
        );

        $tenantId = $this->access->tenantId($actor);
        $this->audit->record($tenantId, $actor, 'product.enabled', 'product', (string) $product->id, null, $data);

        return $request->expectsJson()
            ? response()->json(['ok' => true])
            : back()->with('success', 'Produto habilitado para o Mentoria2.');
    }

    public function disableProduct(Request $request, Product $product): RedirectResponse|JsonResponse
    {
        $actor = $request->user();
        $this->access->disableProduct($actor, $product);
        $tenantId = $this->access->tenantId($actor);
        $this->audit->record($tenantId, $actor, 'product.disabled', 'product', (string) $product->id);

        return $request->expectsJson()
            ? response()->json(['ok' => true])
            : back()->with('success', 'Produto removido do acesso Mentoria2.');
    }

    private function panelPayload(int $tenantId, ?\App\Models\User $actor = null): array
    {
        $studentsList = $this->access->studentsForTenant($tenantId)->take(500);
        $studentIds = $studentsList->pluck('id')->all();

        $sessionsStats = DB::table('mentoria2_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->whereIn('student_id', $studentIds)
            ->select(
                'student_id',
                DB::raw('COALESCE(SUM(CASE WHEN studied_at >= ' . DB::getPdo()->quote(now()->subDays(7)->toDateTimeString()) . ' THEN seconds ELSE 0 END), 0) as seconds_7d'),
                DB::raw('MAX(studied_at) as last_study_at')
            )
            ->groupBy('student_id')
            ->get()
            ->keyBy('student_id');

        $questionStats = DB::table('mentoria2_question_logs')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->whereIn('student_id', $studentIds)
            ->select(
                'student_id',
                DB::raw('COALESCE(SUM(solved), 0) as solved'),
                DB::raw('COALESCE(SUM(correct), 0) as correct')
            )
            ->groupBy('student_id')
            ->get()
            ->keyBy('student_id');

        $pendingReviews = DB::table('mentoria2_scheduled_reviews')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->where('completed', false)
            ->whereIn('student_id', $studentIds)
            ->where(function ($query) {
                $query->whereNull('next_date')->orWhere('next_date', '<=', today());
            })
            ->select('student_id', DB::raw('COUNT(*) as pending_count'))
            ->groupBy('student_id')
            ->get()
            ->keyBy('student_id');

        $cohortMap = Schema::hasTable('mentoria2_cohort_members')
            ? DB::table('mentoria2_cohort_members as cm')
                ->join('mentoria2_cohorts as ch', 'ch.id', '=', 'cm.cohort_id')
                ->where('cm.tenant_id', $tenantId)
                ->whereIn('cm.student_id', $studentIds)
                ->select('cm.student_id', 'ch.name')
                ->get()
                ->groupBy('student_id')
                ->map(fn ($rows) => $rows->pluck('name')->values())
            : collect();

        $contestMap = DB::table('mentoria2_student_contests as sc')
            ->join('mentoria2_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenantId)
            ->whereIn('sc.student_id', $studentIds)
            ->where('sc.is_active', true)
            ->where('c.is_active', true)
            ->orderBy('sc.position')
            ->select('sc.student_id', 'c.name')
            ->get()
            ->groupBy('student_id')
            ->map(fn ($rows) => $rows->pluck('name')->values());

        $productMap = DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->whereIn('product_user.user_id', $studentIds)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->whereIn('product_user.product_id', $this->access->eligibleProductIds($tenantId))
            ->select('product_user.user_id', 'product_user.product_id')
            ->get()
            ->groupBy('user_id')
            ->map(fn ($rows) => $rows->pluck('product_id')->map(fn ($id) => (string) $id)->values());

        $students = $studentsList->map(function ($student) use ($tenantId, $sessionsStats, $questionStats, $pendingReviews, $cohortMap, $contestMap, $productMap) {
            $sess = $sessionsStats->get($student->id);
            $qStat = $questionStats->get($student->id);
            $rev = $pendingReviews->get($student->id);

            $solved = (int) ($qStat?->solved ?? 0);
            $correct = (int) ($qStat?->correct ?? 0);
            $accuracy = $solved > 0 ? round(($correct / $solved) * 100, 1) : 0;
            $studyHours7d = round(($sess?->seconds_7d ?? 0) / 3600, 1);
            $lastStudy = $sess?->last_study_at;
            $pendingCount = (int) ($rev?->pending_count ?? 0);

            $daysWithoutStudy = $lastStudy
                ? \Carbon\Carbon::parse($lastStudy)->startOfDay()->diffInDays(today())
                : 999;

            $riskLevel = 'verde';
            $riskReason = 'Ritmo constante e em dia';
            if ($daysWithoutStudy >= 2 || ($solved >= 10 && $accuracy < 50)) {
                $riskLevel = 'vermelho';
                $riskReason = $daysWithoutStudy >= 999
                    ? 'Nenhum estudo registrado'
                    : ($daysWithoutStudy >= 2 ? "Sem estudar há {$daysWithoutStudy} dias" : "Baixo rendimento em questões ({$accuracy}%)");
            } elseif ($daysWithoutStudy === 1 || ($solved >= 10 && $accuracy < 70) || $pendingCount >= 5) {
                $riskLevel = 'amarelo';
                $riskReason = $daysWithoutStudy === 1
                    ? 'Sem estudar ontem'
                    : ($pendingCount >= 5 ? "{$pendingCount} revisões pendentes" : "Atenção ao rendimento ({$accuracy}%)");
            }

            return [
                'id' => (int) $student->id,
                'name' => $student->name,
                'email' => $student->email,
                'metrics' => [
                    'study_hours_7d' => $studyHours7d,
                    'answers' => $solved,
                    'correct' => $correct,
                    'accuracy' => $accuracy,
                    'pending_reviews' => $pendingCount,
                    'last_study_at' => $lastStudy,
                    'days_without_study' => $daysWithoutStudy,
                    'risk_level' => $riskLevel,
                    'risk_reason' => $riskReason,
                    'edict_percentage' => 0,
                ],
                'cohort_names' => $cohortMap->get($student->id, collect()),
                'contest_names' => $contestMap->get($student->id, collect()),
                'product_ids' => $productMap->get($student->id, collect()),
            ];
        })->values();

        $contests = DB::table('mentoria2_contests')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->orderByRaw('exam_date IS NULL, exam_date')
            ->orderBy('name')
            ->get();

        $edicts = DB::table('mentoria2_edicts as e')
            ->join('mentoria2_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenantId)
            ->where('e.is_active', true)
            ->select('e.*', 'c.name as contest_name')
            ->orderBy('c.name')->orderBy('e.name')
            ->get();

        $edictIds = $edicts->pluck('id');
        $subjects = DB::table('mentoria2_subjects')
            ->where('tenant_id', $tenantId)->whereIn('edict_id', $edictIds)->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $topics = DB::table('mentoria2_topics')
            ->where('tenant_id', $tenantId)->whereIn('subject_id', $subjects->pluck('id'))->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $subtopics = DB::table('mentoria2_subtopics')
            ->where('tenant_id', $tenantId)->whereIn('topic_id', $topics->pluck('id'))->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $rawQuestions = DB::table('mentoria2_question_bank')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->latest('created_at')->limit(1000)->get();
        $questionTargets = $this->audience->targetsForMany($tenantId, 'question', $rawQuestions->pluck('id')->all());
        $questions = $rawQuestions->map(function ($question) use ($questionTargets) {
            $question->alternatives = $this->decodeJson($question->alternatives);
            $question->targets = $questionTargets[(string) $question->id] ?? [];
            return $question;
        });

        $rawDecks = DB::table('mentoria2_flashcard_decks')
            ->where('tenant_id', $tenantId)->where('owner_type', 'mentor')->where('is_active', true)
            ->orderBy('position')->orderBy('name')->limit(500)->get();
        $deckTargets = $this->audience->targetsForMany($tenantId, 'flashcard_deck', $rawDecks->pluck('id')->all());
        $decks = $rawDecks->map(function ($deck) use ($deckTargets) {
            $deck->targets = $deckTargets[(string) $deck->id] ?? [];
            return $deck;
        });

        $cards = DB::table('mentoria2_flashcards')
            ->where('tenant_id', $tenantId)->whereIn('deck_id', $decks->pluck('id'))->where('is_active', true)
            ->orderBy('created_at')->limit(5000)->get();
        $cards = $this->decodeJsonColumns($cards, ['alternatives', 'alternative_explanations', 'tags']);

        $rawMaterials = DB::table('mentoria2_support_materials')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->orderBy('folder')->orderBy('title')->limit(1000)->get();
        $materialTargets = $this->audience->targetsForMany($tenantId, 'material', $rawMaterials->pluck('id')->all());
        $materials = $rawMaterials->map(function ($material) use ($materialTargets) {
            $material->targets = $materialTargets[(string) $material->id] ?? [];
            $material->download_url = $material->type === 'arquivo'
                ? url('/mentoria2/materials/'.$material->id.'/download')
                : null;
            return $material;
        });

        $essays = Schema::hasTable('mentoria2_essays')
            ? DB::table('mentoria2_essays')->where('tenant_id', $tenantId)->latest()->limit(200)->get()
            : collect();

        $questionReports = Schema::hasTable('mentoria2_question_reports')
            ? DB::table('mentoria2_question_reports as r')
                ->join('mentoria2_question_bank as q', 'q.id', '=', 'r.question_id')
                ->join('users as u', 'u.id', '=', 'r.student_id')
                ->where('r.tenant_id', $tenantId)
                ->select('r.*', 'u.name as student_name', 'q.prompt', 'q.correct_answer', 'q.subject')
                ->latest('r.created_at')->limit(100)->get()
            : collect();

        $mentorUser = $actor ?? DB::table('users')->where('id', $tenantId)->first();
        $cohorts = Schema::hasTable('mentoria2_cohorts')
            ? DB::table('mentoria2_cohorts as ch')
                ->leftJoin('mentoria2_contests as c', 'c.id', '=', 'ch.contest_id')
                ->where('ch.tenant_id', $tenantId)
                ->select(
                    'ch.id',
                    'ch.name',
                    'ch.description',
                    'c.name as contest',
                    DB::raw('(select count(*) from mentoria2_cohort_members where cohort_id = ch.id) as students_count')
                )
                ->get()
            : collect();

        $radarContests = Schema::hasTable('mentoria2_radar_contests')
            ? DB::table('mentoria2_radar_contests')->where('is_active', true)->latest()->limit(50)->get()
            : collect();

        return [
            'tenant_id' => $tenantId,
            'mentor' => [
                'id' => $mentorUser?->id ?: 1,
                'name' => $mentorUser?->name ?: 'Mentor Titular',
                'email' => $mentorUser?->email ?: '',
            ],
            'cohorts' => $cohorts,
            'summary' => $this->metrics->tenantSummary($tenantId),
            'mentorship' => ['student_home_banner' => $this->banners->forTenant($tenantId)],
            'available_capabilities' => AccessService::DEFAULT_CAPABILITIES,
            'products' => $this->access->productsForTenant($tenantId)->values(),
            'students' => $students,
            'student_contests' => DB::table('mentoria2_student_contests')
                ->where('tenant_id', $tenantId)->where('is_active', true)->get(),
            'student_edicts' => DB::table('mentoria2_student_edicts')
                ->where('tenant_id', $tenantId)->where('is_active', true)->get(),
            'contests' => $contests,
            'edicts' => $edicts,
            'subjects' => $this->decodeJsonColumns($subjects, ['materials']),
            'topics' => $this->decodeJsonColumns($topics, ['materials']),
            'subtopics' => $this->decodeJsonColumns($subtopics, ['materials']),
            'questions' => $questions,
            'decks' => $decks,
            'cards' => $cards,
            'materials' => $materials,
            'essays' => $essays,
            'question_reports' => $questionReports,
            'radar_contests' => $radarContests,
            'courses' => $this->access->tenantCourses($tenantId)->values(),
            'recent_audit' => DB::table('mentoria2_audit_events as a')
                ->leftJoin('users as u', 'u.id', '=', 'a.actor_id')
                ->where('a.tenant_id', $tenantId)
                ->select('a.*', 'u.name as actor_name')
                ->latest('a.created_at')->limit(50)->get(),
            'mentor_feedbacks' => Schema::hasTable('mentoria2_student_feedbacks')
                ? DB::table('mentoria2_student_feedbacks as f')
                    ->join('users as s', 's.id', '=', 'f.student_id')
                    ->where('f.tenant_id', $tenantId)
                    ->select('f.*', 's.name as student_name')
                    ->latest('f.created_at')->limit(100)->get()
                : collect(),
            'student_app_base' => url('/mentoria2-estudos/'.$tenantId),
        ];
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
