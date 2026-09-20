<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Plugins\Cjc\Services\ContentAudienceService;
use Plugins\Cjc\Services\MetricsService;

class PanelController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
        private readonly AuditService $audit,
        private readonly ContentAudienceService $audience,
    ) {}

    public function index(Request $request): Response
    {
        $tenantId = $this->access->tenantId($request->user());

        return Inertia::render('Plugin/cjc/Index', [
            'pluginSlug' => 'cjc',
            'pluginPage' => 'Index',
            'plugin_ui_page' => $this->panelPayload($tenantId),
        ]);
    }

    public function data(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json($this->panelPayload($tenantId));
    }

    public function student(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $user = $this->access->assertStudentInTenant($actor, $student);

        $contests = DB::table('cjc_student_contests as sc')
            ->join('cjc_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenantId)
            ->where('sc.student_id', $user->id)
            ->where('sc.is_active', true)
            ->select(
                'c.id', 'c.name', 'c.board', 'c.position', 'c.exam_date',
                'sc.group', 'sc.position as order', 'sc.result', 'sc.ranking',
                'sc.final_score', 'sc.appointed', 'sc.appointment_date',
            )
            ->orderBy('sc.position')
            ->get();

        $activeContestId = $request->query('contest_id')
            ?: ($contests->firstWhere('group', 'foco')?->id ?? $contests->first()?->id);

        $edictIds = DB::table('cjc_student_edicts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $user->id)
            ->where('is_active', true)
            ->pluck('edict_id');

        $schedules = DB::table('cjc_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $user->id)
            ->where('is_active', true)
            ->latest('updated_at')
            ->get();

        $mockExams = DB::table('cjc_mock_exams')
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
            'edicts' => DB::table('cjc_edicts')
                ->where('tenant_id', $tenantId)->whereIn('id', $edictIds)->where('is_active', true)->get(),
            'schedules' => $schedules,
            'schedule_items' => DB::table('cjc_schedule_items')
                ->where('tenant_id', $tenantId)->whereIn('schedule_id', $schedules->pluck('id'))
                ->orderByRaw('planned_date IS NULL, planned_date')->orderBy('position')->limit(1000)->get(),
            'reviews' => DB::table('cjc_scheduled_reviews')
                ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                ->orderByRaw('completed ASC, next_date IS NULL, next_date')->limit(300)->get(),
            'recent_sessions' => $this->decodeJsonColumns(
                DB::table('cjc_study_sessions')
                    ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                    ->latest('studied_at')->limit(200)->get(),
                ['metrics'],
            ),
            'question_logs' => DB::table('cjc_question_logs')
                ->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)
                ->latest('recorded_at')->limit(200)->get(),
            'mock_exams' => $this->decodeJsonColumns($mockExams, ['result', 'configuration_used']),
            'mock_subject_results' => DB::table('cjc_mock_exam_subject_results')
                ->where('tenant_id', $tenantId)->whereIn('mock_exam_id', $mockExams->pluck('id'))->where('is_active', true)->get(),
            'notebooks' => DB::table('cjc_notebooks')
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
            : back()->with('success', 'Produto habilitado para o CJC.');
    }

    public function disableProduct(Request $request, Product $product): RedirectResponse|JsonResponse
    {
        $actor = $request->user();
        $this->access->disableProduct($actor, $product);
        $tenantId = $this->access->tenantId($actor);
        $this->audit->record($tenantId, $actor, 'product.disabled', 'product', (string) $product->id);

        return $request->expectsJson()
            ? response()->json(['ok' => true])
            : back()->with('success', 'Produto removido do acesso CJC.');
    }

    private function panelPayload(int $tenantId): array
    {
        $students = $this->access->studentsForTenant($tenantId)
            ->take(500)
            ->map(function ($student) use ($tenantId) {
                return [
                    'id' => (int) $student->id,
                    'name' => $student->name,
                    'email' => $student->email,
                    'metrics' => $this->metrics->studentSummary($tenantId, (int) $student->id),
                    'product_ids' => DB::table('product_user')
                        ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
                        ->where('product_user.user_id', $student->id)
                        ->where('cjc_products.tenant_id', $tenantId)
                        ->where('cjc_products.is_active', true)
                        ->pluck('product_user.product_id')
                        ->map(fn ($id) => (string) $id)
                        ->values(),
                ];
            })->values();

        $contests = DB::table('cjc_contests')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->orderByRaw('exam_date IS NULL, exam_date')
            ->orderBy('name')
            ->get();

        $edicts = DB::table('cjc_edicts as e')
            ->join('cjc_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenantId)
            ->where('e.is_active', true)
            ->select('e.*', 'c.name as contest_name')
            ->orderBy('c.name')->orderBy('e.name')
            ->get();

        $edictIds = $edicts->pluck('id');
        $subjects = DB::table('cjc_subjects')
            ->where('tenant_id', $tenantId)->whereIn('edict_id', $edictIds)->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $topics = DB::table('cjc_topics')
            ->where('tenant_id', $tenantId)->whereIn('subject_id', $subjects->pluck('id'))->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $subtopics = DB::table('cjc_subtopics')
            ->where('tenant_id', $tenantId)->whereIn('topic_id', $topics->pluck('id'))->where('is_active', true)
            ->orderBy('position')->orderBy('name')->get();

        $questions = DB::table('cjc_question_bank')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->latest('created_at')->limit(1000)->get()
            ->map(function ($question) use ($tenantId) {
                $question->alternatives = $this->decodeJson($question->alternatives);
                $question->targets = $this->audience->targets($tenantId, 'question', (string) $question->id);
                return $question;
            });

        $decks = DB::table('cjc_flashcard_decks')
            ->where('tenant_id', $tenantId)->where('owner_type', 'mentor')->where('is_active', true)
            ->orderBy('position')->orderBy('name')->limit(500)->get()
            ->map(function ($deck) use ($tenantId) {
                $deck->targets = $this->audience->targets($tenantId, 'flashcard_deck', (string) $deck->id);
                return $deck;
            });

        $cards = DB::table('cjc_flashcards')
            ->where('tenant_id', $tenantId)->whereIn('deck_id', $decks->pluck('id'))->where('is_active', true)
            ->orderBy('created_at')->limit(5000)->get();
        $cards = $this->decodeJsonColumns($cards, ['alternatives', 'alternative_explanations', 'tags']);

        $materials = DB::table('cjc_support_materials')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->orderBy('folder')->orderBy('title')->limit(1000)->get()
            ->map(function ($material) use ($tenantId) {
                $material->targets = $this->audience->targets($tenantId, 'material', (string) $material->id);
                $material->download_url = $material->type === 'arquivo'
                    ? url('/cjc/materials/'.$material->id.'/download')
                    : null;
                return $material;
            });

        return [
            'tenant_id' => $tenantId,
            'summary' => $this->metrics->tenantSummary($tenantId),
            'available_capabilities' => AccessService::DEFAULT_CAPABILITIES,
            'products' => $this->access->productsForTenant($tenantId)->values(),
            'students' => $students,
            'student_contests' => DB::table('cjc_student_contests')
                ->where('tenant_id', $tenantId)->where('is_active', true)->get(),
            'student_edicts' => DB::table('cjc_student_edicts')
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
            'courses' => $this->access->tenantCourses($tenantId)->values(),
            'recent_audit' => DB::table('cjc_audit_events as a')
                ->leftJoin('users as u', 'u.id', '=', 'a.actor_id')
                ->where('a.tenant_id', $tenantId)
                ->select('a.*', 'u.name as actor_name')
                ->latest('a.created_at')->limit(50)->get(),
            'student_app_base' => url('/cjc-estudos/'.$tenantId),
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
