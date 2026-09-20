<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\MetricsService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class StudentController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
    ) {}

    public function index(Request $request, int $tenant): Response
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return Inertia::render('Plugin/cjc/Student', [
            'pluginSlug' => 'cjc',
            'pluginPage' => 'Student',
            'plugin_ui_page' => $this->payload($tenant, (int) $student->id),
        ]);
    }

    public function data(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        return response()->json($this->payload($tenant, (int) $student->id));
    }

    public function updateEdictProgress(Request $request, int $tenant, string $item): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $data = $request->validate([
            'item_type' => ['required', 'in:topico,subtopico'],
            'studied' => ['required', 'boolean'],
            'notes' => ['nullable', 'string'],
        ]);
        $table = $data['item_type'] === 'topico' ? 'cjc_topics' : 'cjc_subtopics';
        if (! DB::table($table)->where('tenant_id', $tenant)->where('id', $item)->where('is_active', true)->exists()) {
            throw new NotFoundHttpException('Item do edital não encontrado.');
        }
        $existing = DB::table('cjc_edict_progress')->where('tenant_id', $tenant)->where('student_id', $student->id)
            ->where('item_type', $data['item_type'])->where('item_id', $item)->first();
        $payload = [
            'studied' => (bool) $data['studied'],
            'completed_at' => $data['studied'] ? now() : null,
            'notes' => $data['notes'] ?? null,
            'updated_at' => now(),
        ];
        if ($existing) {
            DB::table('cjc_edict_progress')->where('id', $existing->id)->update($payload);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_edict_progress')->insert(array_merge($payload, [
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id,
                'item_type' => $data['item_type'], 'item_id' => $item, 'created_at' => now(),
            ]));
        }

        return response()->json(['ok' => true, 'id' => $id]);
    }

    private function payload(int $tenantId, int $studentId): array
    {
        $assignedContests = DB::table('cjc_student_contests as sc')
            ->join('cjc_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenantId)->where('sc.student_id', $studentId)->where('sc.is_active', true)->where('c.is_active', true)
            ->select('c.id', 'c.name', 'c.board', 'c.position', 'c.salary', 'c.exam_date', 'c.pre_notice', 'c.review_intervals', 'sc.group', 'sc.position as order', 'sc.result', 'sc.ranking', 'sc.final_score')
            ->orderBy('sc.position')->get();

        $edictIds = DB::table('cjc_student_edicts')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->pluck('edict_id');
        $edicts = DB::table('cjc_edicts as e')->join('cjc_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('e.tenant_id', $tenantId)->whereIn('e.id', $edictIds)->where('e.is_active', true)
            ->select('e.id', 'e.name', 'e.version', 'e.contest_id', 'c.name as contest_name')->get();
        $subjects = DB::table('cjc_subjects')->where('tenant_id', $tenantId)->whereIn('edict_id', $edictIds)->where('is_active', true)->orderBy('position')->get();
        $subjectIds = $subjects->pluck('id');
        $topics = DB::table('cjc_topics')->where('tenant_id', $tenantId)->whereIn('subject_id', $subjectIds)->where('is_active', true)->orderBy('position')->get();
        $topicIds = $topics->pluck('id');
        $subtopics = DB::table('cjc_subtopics')->where('tenant_id', $tenantId)->whereIn('topic_id', $topicIds)->where('is_active', true)->orderBy('position')->get();
        $progress = DB::table('cjc_edict_progress')->where('tenant_id', $tenantId)->where('student_id', $studentId)->get();

        $schedule = DB::table('cjc_schedules')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->latest('updated_at')->first();
        $scheduleItems = $schedule
            ? DB::table('cjc_schedule_items')->where('tenant_id', $tenantId)->where('schedule_id', $schedule->id)->orderByRaw('planned_date IS NULL, planned_date')->orderBy('position')->limit(300)->get()
            : collect();

        $decks = DB::table('cjc_flashcard_decks')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->where(function ($q) use ($studentId, $edictIds) {
                $q->where(function ($q2) { $q2->where('scope', 'global')->whereNull('student_id'); })
                    ->orWhere('student_id', $studentId)
                    ->orWhere(function ($q2) use ($edictIds) { $q2->where('scope', 'edital')->whereIn('edict_id', $edictIds); });
            })->orderBy('position')->get();
        $deckIds = $decks->pluck('id');
        $cards = DB::table('cjc_flashcards')->where('tenant_id', $tenantId)->whereIn('deck_id', $deckIds)->where('is_active', true)->limit(500)->get();
        $cardReviews = DB::table('cjc_flashcard_reviews')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->orderByDesc('reviewed_at')->get()->unique('card_id')->keyBy('card_id');

        $questions = DB::table('cjc_question_bank')
            ->where('tenant_id', $tenantId)->where('is_active', true)
            ->where(function ($q) use ($assignedContests) {
                $q->where('scope', 'global')->orWhereIn('contest_id', $assignedContests->pluck('id'));
            })->latest('created_at')->limit(100)->get();

        return [
            'tenant_id' => $tenantId,
            'capabilities' => $this->access->studentCapabilities(request()->user(), $tenantId),
            'metrics' => $this->metrics->studentSummary($tenantId, $studentId),
            'contests' => $assignedContests,
            'edicts' => $edicts,
            'subjects' => $subjects,
            'topics' => $topics,
            'subtopics' => $subtopics,
            'progress' => $progress,
            'materials' => DB::table('cjc_support_materials')->where('tenant_id', $tenantId)->where('is_active', true)
                ->where(function ($q) use ($edictIds) { $q->where('scope', 'global')->orWhereIn('edict_id', $edictIds); })->orderBy('folder')->orderBy('title')->get(),
            'schedule' => $schedule,
            'schedule_items' => $scheduleItems,
            'reviews' => DB::table('cjc_scheduled_reviews')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->orderByRaw('next_date IS NULL, next_date')->limit(100)->get(),
            'decks' => $decks,
            'cards' => $cards->map(function ($card) use ($cardReviews) {
                $review = $cardReviews->get($card->id);
                $card->next_review = $review?->next_review;
                $card->last_quality = $review?->quality;
                return $card;
            })->values(),
            'questions' => $questions,
            'notebooks' => DB::table('cjc_notebooks')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->latest('updated_at')->get(),
            'mock_exams' => DB::table('cjc_mock_exams')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->latest('performed_at')->limit(100)->get(),
            'recent_sessions' => DB::table('cjc_study_sessions')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->latest('studied_at')->limit(50)->get(),
        ];
    }
}
