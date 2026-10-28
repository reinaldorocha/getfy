<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\EssayService;
use Plugins\Mentoria2\Services\NotificationService;

class EssayController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly EssayService $essayService,
        private readonly NotificationService $notifications,
    ) {}

    public function index(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $contestId = $request->query('contest_id');
        $essays = $this->essayService->listEssays($tenant, $contestId);

        return response()->json([
            'essays' => $essays,
        ]);
    }

    public function show(Request $request, int $tenant, string $essay): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $data = $this->essayService->getEssay($tenant, $essay);

        if (! $data) {
            return response()->json(['message' => 'Proposta de redação não encontrada.'], 404);
        }

        return response()->json($data);
    }

    public function store(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'prompt_theme' => 'required|string',
            'contest_id' => 'nullable|string',
            'min_words' => 'nullable|integer|min:50|max:1000',
            'max_words' => 'nullable|integer|min:100|max:2000',
            'max_score' => 'nullable|numeric|min:10|max:1000',
            'motivating_texts' => 'nullable|array',
            'criteria' => 'nullable|array',
        ]);

        $created = $this->essayService->createEssay($tenantId, $request->user(), $validated);

        return response()->json($created, 201);
    }

    public function submit(Request $request, int $tenant, string $essay): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $validated = $request->validate([
            'content' => 'required|string|min:30',
        ]);

        $result = $this->essayService->submitEssay($tenant, $request->user(), $essay, $validated['content']);

        return response()->json($result);
    }

    public function mentorGrade(Request $request, string $submission): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $submissionRow = \Illuminate\Support\Facades\DB::table('mentoria2_essay_submissions')->where('tenant_id', $tenantId)->where('id', $submission)->first(['student_id', 'essay_id']);
        if (! $submissionRow) abort(404);
        $validated = $request->validate([
            'total_score' => 'required|numeric|min:0|max:1000',
            'criteria_scores' => 'required|array',
            'feedback' => 'required|string|min:10',
        ]);

        $result = $this->essayService->gradeByMentor(
            $tenantId,
            $request->user(),
            $submission,
            (float) $validated['total_score'],
            $validated['criteria_scores'],
            $validated['feedback']
        );
        $this->notifications->create($tenantId, (int) $submissionRow->student_id, 'essay_graded', 'Redacao corrigida', 'Sua redacao recebeu uma correcao do mentor.', 'essays', 'essay_submission', $submission, 'essay_graded_'.$submission);

        return response()->json($result);
    }

    public function submissions(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $submissions = $this->essayService->getStudentSubmissions($tenant, $request->user()->id);

        return response()->json([
            'submissions' => $submissions,
        ]);
    }

    public function tenantSubmissions(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $status = $request->query('status');
        $submissions = $this->essayService->getTenantSubmissions($tenantId, $status);

        return response()->json([
            'submissions' => $submissions,
        ]);
    }
}

