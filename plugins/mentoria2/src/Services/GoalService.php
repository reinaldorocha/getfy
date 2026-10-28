<?php

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class GoalService
{
    public const METRICS = ['questions', 'hours', 'sessions', 'reviews', 'flashcards'];

    public function forStudent(int $tenantId, int $studentId): Collection
    {
        return DB::table('mentoria2_goals')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->orderBy('ends_on')
            ->get()
            ->map(fn (object $goal) => $this->withProgress($goal));
    }

    public function withProgress(object $goal): object
    {
        $current = match ($goal->metric) {
            'questions' => (int) DB::table('mentoria2_question_logs')
                ->where('tenant_id', $goal->tenant_id)->where('student_id', $goal->student_id)->where('is_active', true)
                ->when($goal->contest_id, fn ($q) => $q->where('contest_id', $goal->contest_id))
                ->whereBetween('recorded_at', [$goal->starts_on.' 00:00:00', $goal->ends_on.' 23:59:59'])->sum('solved'),
            'hours' => round(((int) DB::table('mentoria2_study_sessions')
                ->where('tenant_id', $goal->tenant_id)->where('student_id', $goal->student_id)->where('is_active', true)
                ->when($goal->contest_id, fn ($q) => $q->where('contest_id', $goal->contest_id))
                ->whereBetween('studied_at', [$goal->starts_on.' 00:00:00', $goal->ends_on.' 23:59:59'])->sum('seconds')) / 3600, 1),
            'sessions' => DB::table('mentoria2_study_sessions')
                ->where('tenant_id', $goal->tenant_id)->where('student_id', $goal->student_id)->where('is_active', true)
                ->when($goal->contest_id, fn ($q) => $q->where('contest_id', $goal->contest_id))
                ->whereBetween('studied_at', [$goal->starts_on.' 00:00:00', $goal->ends_on.' 23:59:59'])->count(),
            'reviews' => DB::table('mentoria2_scheduled_reviews')
                ->where('tenant_id', $goal->tenant_id)->where('student_id', $goal->student_id)->where('is_active', true)
                ->where('completed', true)->whereBetween('updated_at', [$goal->starts_on.' 00:00:00', $goal->ends_on.' 23:59:59'])->count(),
            'flashcards' => DB::table('mentoria2_flashcard_reviews')
                ->where('tenant_id', $goal->tenant_id)->where('student_id', $goal->student_id)
                ->whereBetween('reviewed_at', [$goal->starts_on.' 00:00:00', $goal->ends_on.' 23:59:59'])->count(),
            default => 0,
        };

        $goal->current = $current;
        $goal->unit = match ($goal->metric) {
            'questions' => 'questões', 'hours' => 'horas', 'sessions' => 'sessões',
            'reviews' => 'revisões', 'flashcards' => 'flashcards', default => $goal->metric,
        };
        $goal->pct = min(100, (int) round(($current / max(1, (int) $goal->target)) * 100));

        return $goal;
    }
}
