<?php

namespace Plugins\Mentoria2\Services;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class AdaptivePlanningService
{
    /**
     * Builds an explainable reprioritization proposal without modifying the plan.
     * The score combines the existing schedule priority with evidence from wrong
     * answers, overdue activities, overdue reviews and the proximity of the exam.
     *
     * @return array{schedule_id:string,contest_id:?string,affected_items:int,subjects:array<int,array<string,mixed>>}
     */
    public function proposal(int $tenantId, int $studentId, string $scheduleId): array
    {
        $schedule = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->where('id', $scheduleId)->where('is_active', true)->first();
        if (! $schedule) {
            throw new RuntimeException('Cronograma ativo não encontrado.');
        }

        $pending = DB::table('mentoria2_schedule_items')
            ->where('tenant_id', $tenantId)->where('schedule_id', $scheduleId)
            ->where('status', 'pendente')->whereNull('scheduled_review_id')
            ->whereNotNull('subject_id')->get();
        if ($pending->isEmpty()) {
            return ['schedule_id' => $scheduleId, 'contest_id' => $schedule->contest_id, 'affected_items' => 0, 'subjects' => []];
        }

        $subjectIds = $pending->pluck('subject_id')->unique()->values()->all();
        $today = CarbonImmutable::today()->toDateString();
        $answers = DB::table('mentoria2_question_answers as a')
            ->join('mentoria2_question_bank as q', 'q.id', '=', 'a.question_id')
            ->leftJoin('mentoria2_subjects as s', function ($join): void {
                $join->on('s.tenant_id', '=', 'a.tenant_id')->on('s.name', '=', 'q.subject');
            })
            ->where('a.tenant_id', $tenantId)->where('a.student_id', $studentId)
            ->whereIn('s.id', $subjectIds)
            ->selectRaw('s.id as subject_id, count(*) as answered, sum(case when a.is_correct = 1 then 1 else 0 end) as correct')
            ->groupBy('s.id')->get()->keyBy('subject_id');
        $overdueItems = $pending->filter(fn ($item) => $item->planned_date && $item->planned_date < $today)
            ->groupBy('subject_id')->map->count();
        $overdueReviews = DB::table('mentoria2_scheduled_reviews')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)
            ->where('completed', false)->whereDate('next_date', '<', $today)
            ->whereIn('subject_id', $subjectIds)->selectRaw('subject_id, count(*) as total')
            ->groupBy('subject_id')->pluck('total', 'subject_id');
        $names = DB::table('mentoria2_subjects')->where('tenant_id', $tenantId)->whereIn('id', $subjectIds)->pluck('name', 'id');
        $examDate = $schedule->contest_id
            ? DB::table('mentoria2_contests')->where('tenant_id', $tenantId)->where('id', $schedule->contest_id)->value('exam_date')
            : null;
        $urgency = $examDate ? max(0, min(20, 60 - CarbonImmutable::today()->diffInDays(CarbonImmutable::parse($examDate), false))) : 0;

        $subjects = [];
        foreach ($pending->groupBy('subject_id') as $subjectId => $items) {
            $answer = $answers->get($subjectId);
            $answered = (int) ($answer->answered ?? 0);
            $accuracy = $answered > 0 ? round(((int) $answer->correct / $answered) * 100, 1) : null;
            $base = (int) round($items->avg(fn ($item) => (int) ($item->priority ?? 50)));
            $lateTasks = (int) ($overdueItems->get($subjectId, 0));
            $lateReviews = (int) ($overdueReviews[$subjectId] ?? 0);
            $weakness = $accuracy === null ? 0 : (int) round((100 - $accuracy) * 0.35);
            $proposed = max(0, min(100, $base + $weakness + ($lateTasks * 7) + ($lateReviews * 9) + $urgency));
            $reasons = [];
            if ($accuracy !== null && $accuracy < 70) $reasons[] = "acerto de {$accuracy}%";
            if ($lateTasks > 0) $reasons[] = "{$lateTasks} atividade(s) atrasada(s)";
            if ($lateReviews > 0) $reasons[] = "{$lateReviews} revisão(ões) vencida(s)";
            if ($urgency > 0) $reasons[] = 'proximidade da prova';

            $subjects[] = [
                'subject_id' => (string) $subjectId,
                'name' => (string) ($names[$subjectId] ?? 'Disciplina'),
                'items' => $items->count(),
                'current_priority' => $base,
                'proposed_priority' => $proposed,
                'accuracy' => $accuracy,
                'overdue_items' => $lateTasks,
                'overdue_reviews' => $lateReviews,
                'reasons' => $reasons,
            ];
        }
        usort($subjects, fn (array $a, array $b) => $b['proposed_priority'] <=> $a['proposed_priority']);

        return ['schedule_id' => $scheduleId, 'contest_id' => $schedule->contest_id, 'affected_items' => $pending->count(), 'subjects' => $subjects];
    }

    /** @return array{updated_priorities:int,reprogrammed:int,proposal:array<string,mixed>} */
    public function apply(int $tenantId, int $studentId, string $scheduleId, ScheduleEngineService $engine, ?string $fromDate = null): array
    {
        $proposal = $this->proposal($tenantId, $studentId, $scheduleId);
        DB::transaction(function () use ($tenantId, $scheduleId, $proposal): void {
            foreach ($proposal['subjects'] as $subject) {
                DB::table('mentoria2_schedule_items')
                    ->where('tenant_id', $tenantId)->where('schedule_id', $scheduleId)
                    ->where('status', 'pendente')->where('subject_id', $subject['subject_id'])
                    ->update(['priority' => $subject['proposed_priority'], 'updated_at' => now()]);
            }
        });
        $reprogrammed = $engine->reprogram($tenantId, $studentId, $scheduleId, $fromDate);

        return ['updated_priorities' => $proposal['affected_items'], 'reprogrammed' => $reprogrammed, 'proposal' => $proposal];
    }
}
