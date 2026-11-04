<?php

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Keeps study progress, scheduled reviews and the student's active plan in sync.
 *
 * This service is deliberately shared by the edital screen and the schedule
 * completion flow. A subject is therefore never marked as studied in one place
 * while its review cycles are created only in another.
 */
class EdictProgressService
{
    public function __construct(
        private readonly ReviewScheduleService $reviewSchedule,
        private readonly ScheduleEngineService $scheduleEngine,
    ) {}

    /**
     * @return array{contest_id:string,reprogrammed:int,warning:?string}
     */
    public function setStudied(
        int $tenantId,
        int $studentId,
        string $itemType,
        string $itemId,
        bool $studied,
        ?string $notes = null,
    ): array {
        $type = match ($itemType) {
            'topico', 'topic' => 'topico',
            default => 'subtopico',
        };

        $context = $this->itemContext($tenantId, $studentId, $type, $itemId);
        $existing = DB::table('mentoria2_edict_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('item_type', $type)
            ->where('item_id', $itemId)
            ->first();

        $payload = [
            'studied' => $studied,
            'completed_at' => $studied ? ($existing?->completed_at ?? now()) : null,
            'notes' => $notes !== null ? $notes : ($existing?->notes ?? null),
            'updated_at' => now(),
        ];

        DB::transaction(function () use ($tenantId, $studentId, $type, $itemId, $existing, $payload, $studied, $context): void {
            if ($existing) {
                DB::table('mentoria2_edict_progress')->where('id', $existing->id)->update($payload);
            } else {
                DB::table('mentoria2_edict_progress')->insert($payload + [
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $studentId,
                    'item_type' => $type,
                    'item_id' => $itemId,
                    'created_at' => now(),
                ]);
            }

            if (! $studied) {
                $query = DB::table('mentoria2_scheduled_reviews')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $studentId)
                    ->where('completed', false);

                if ($type === 'topico') {
                    $query->where('topic_id', $itemId)->whereNull('subtopic_id');
                } else {
                    $query->where('subtopic_id', $itemId);
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
                $query = DB::table('mentoria2_scheduled_reviews')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $studentId)
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
                    DB::table('mentoria2_scheduled_reviews')->where('id', $review->id)->update($reviewPayload);
                    continue;
                }

                DB::table('mentoria2_scheduled_reviews')->insert($reviewPayload + [
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $studentId,
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
        });

        $reprogrammed = 0;
        $warning = null;
        $schedule = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('contest_id', $context->contest_id)
            ->where('is_active', true)
            ->latest('updated_at')
            ->first();

        if ($schedule) {
            try {
                $this->reviewSchedule->syncForContest($tenantId, $studentId, (string) $context->contest_id);
                $reprogrammed = $this->scheduleEngine->reprogram($tenantId, $studentId, $schedule->id);
            } catch (\Throwable $exception) {
                report($exception);
                $warning = 'Nao foi possivel atualizar o cronograma agora.';
            }
        }

        return [
            'contest_id' => (string) $context->contest_id,
            'reprogrammed' => $reprogrammed,
            'warning' => $warning,
        ];
    }

    private function itemContext(int $tenantId, int $studentId, string $type, string $itemId): object
    {
        if ($type === 'topico') {
            $row = DB::table('mentoria2_topics as t')
                ->join('mentoria2_subjects as s', 's.id', '=', 't.subject_id')
                ->join('mentoria2_edicts as e', 'e.id', '=', 's.edict_id')
                ->join('mentoria2_contests as c', 'c.id', '=', 'e.contest_id')
                ->join('mentoria2_student_edicts as se', function ($join) use ($studentId): void {
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
            $row = DB::table('mentoria2_subtopics as st')
                ->join('mentoria2_topics as t', 't.id', '=', 'st.topic_id')
                ->join('mentoria2_subjects as s', 's.id', '=', 't.subject_id')
                ->join('mentoria2_edicts as e', 'e.id', '=', 's.edict_id')
                ->join('mentoria2_contests as c', 'c.id', '=', 'e.contest_id')
                ->join('mentoria2_student_edicts as se', function ($join) use ($studentId): void {
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
            throw new NotFoundHttpException('Item is outside the student edict.');
        }

        return $row;
    }
}
