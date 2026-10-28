<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\CebraspeScoreService;
use Plugins\Mentoria2\Services\GamificationService;

class TimerLogController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly GamificationService $gamification,
        private readonly CebraspeScoreService $cebraspe,
    ) {}

    public function store(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        $validated = $request->validate([
            'type' => 'required|string|in:pomodoro,stopwatch,manual_questions,manual_simulado',
            'duration_seconds' => 'nullable|integer|min:0',
            'questions_count' => 'nullable|integer|min:0',
            'correct_count' => 'nullable|integer|min:0',
            'wrong_count' => 'nullable|integer|min:0',
            'score' => 'nullable|numeric|min:0',
            'is_cebraspe' => 'nullable|boolean',
            'contest_id' => 'nullable|string',
            'subject_id' => 'nullable|string',
            'topic_id' => 'nullable|string',
            'notes' => 'nullable|string|max:1000',
        ]);

        $logId = (string) Str::uuid();
        $studentId = $request->user()->id;
        $isCebraspe = (bool) ($validated['is_cebraspe'] ?? false);
        $correct = (int) ($validated['correct_count'] ?? 0);
        $wrong = (int) ($validated['wrong_count'] ?? 0);
        $totalQuestions = (int) ($validated['questions_count'] ?? ($correct + $wrong));

        $computedScore = $validated['score'] ?? null;
        if ($isCebraspe && $totalQuestions > 0) {
            $cebraspeResult = $this->cebraspe->calculate($correct, $wrong, 0, $totalQuestions);
            $computedScore = $cebraspeResult['liquid_score'];
        }

        DB::table('mentoria2_timer_logs')->insert([
            'id' => $logId,
            'tenant_id' => $tenant,
            'student_id' => $studentId,
            'contest_id' => ! empty($validated['contest_id']) ? $validated['contest_id'] : null,
            'subject_id' => ! empty($validated['subject_id']) ? $validated['subject_id'] : null,
            'topic_id' => ! empty($validated['topic_id']) ? $validated['topic_id'] : null,
            'type' => $validated['type'],
            'duration_seconds' => (int) $validated['duration_seconds'],
            'questions_count' => $totalQuestions,
            'correct_count' => $correct,
            'wrong_count' => $wrong,
            'score' => $computedScore,
            'is_cebraspe' => $isCebraspe,
            'notes' => $validated['notes'] ?? null,
            'recorded_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Also register into question_logs if questions were answered
        if ($totalQuestions > 0) {
            DB::table('mentoria2_question_logs')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenant,
                'student_id' => $studentId,
                'contest_id' => ! empty($validated['contest_id']) ? $validated['contest_id'] : null,
                'subject_id' => ! empty($validated['subject_id']) ? $validated['subject_id'] : null,
                'topic_id' => ! empty($validated['topic_id']) ? $validated['topic_id'] : null,
                'solved' => $totalQuestions,
                'correct' => $correct,
                'wrong' => $wrong,
                'origin' => 'mini_timer',
                'is_active' => true,
                'recorded_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Calculate XP: 1 XP per minute of study + 1 XP per question + 2 XP bonus per correct
        $minutes = (int) floor($validated['duration_seconds'] / 60);
        $xpPoints = max(5, $minutes + $totalQuestions + ($correct * 2));
        $idempotencyKey = "timer_{$logId}";

        $gamificationSummary = $this->gamification->awardXp(
            $tenant,
            $studentId,
            'manual_study',
            $xpPoints,
            $idempotencyKey,
            'timer_log',
            $logId,
            ['duration_seconds' => $validated['duration_seconds'], 'questions' => $totalQuestions]
        );

        return response()->json([
            'success' => true,
            'log_id' => $logId,
            'xp_awarded' => $xpPoints,
            'gamification' => $gamificationSummary,
            'message' => 'Sessão de estudo registrada com sucesso!',
        ], 201);
    }
}

