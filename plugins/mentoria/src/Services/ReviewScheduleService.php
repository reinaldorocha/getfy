<?php

namespace Plugins\Mentoria\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReviewScheduleService
{
    public const REVIEW_DURATION_MINUTES = 30;

    public function syncForContest(int $tenantId, int $studentId, string $contestId): void
    {
        $schedule = DB::table('mentoria_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->latest('updated_at')
            ->first();

        if (! $schedule) {
            return;
        }

        DB::transaction(function () use ($tenantId, $studentId, $contestId, $schedule): void {
            $reviews = DB::table('mentoria_scheduled_reviews')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('contest_id', $contestId)
                ->get()
                ->keyBy('id');

            $items = DB::table('mentoria_schedule_items')
                ->where('tenant_id', $tenantId)
                ->where('schedule_id', $schedule->id)
                ->whereNotNull('scheduled_review_id')
                ->get()
                ->keyBy('scheduled_review_id');

            foreach ($items as $reviewId => $item) {
                if (! $reviews->has($reviewId) || ! $reviews[$reviewId]->is_active) {
                    DB::table('mentoria_schedule_items')->where('id', $item->id)->update([
                        'status' => 'ignorado',
                        'updated_at' => now(),
                    ]);
                }
            }

            foreach ($reviews as $review) {
                if (! $review->is_active) {
                    continue;
                }

                $status = $review->completed ? 'concluido' : 'pendente';
                $payload = [
                    'planned_date' => $review->next_date,
                    'cycle_position' => null,
                    'subject_id' => $review->subject_id,
                    'topic_id' => $review->topic_id,
                    'subtopic_id' => $review->subtopic_id,
                    'duration_minutes' => self::REVIEW_DURATION_MINUTES,
                    'priority' => 100,
                    'status' => $status,
                    'completed_at' => $review->completed ? ($review->completed_at ?? now()) : null,
                    'updated_at' => now(),
                ];

                $existing = $items->get($review->id);
                if ($existing) {
                    DB::table('mentoria_schedule_items')->where('id', $existing->id)->update($payload);
                    continue;
                }

                $position = (int) DB::table('mentoria_schedule_items')
                    ->where('tenant_id', $tenantId)
                    ->where('schedule_id', $schedule->id)
                    ->where('planned_date', $review->next_date)
                    ->max('position') + 1;

                DB::table('mentoria_schedule_items')->insert($payload + [
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'schedule_id' => $schedule->id,
                    'scheduled_review_id' => $review->id,
                    'position' => max(1, $position),
                    'created_at' => now(),
                ]);
            }
        });
    }

    public function syncReview(int $tenantId, int $studentId, string $reviewId): void
    {
        $review = DB::table('mentoria_scheduled_reviews')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('id', $reviewId)
            ->first(['contest_id']);

        if ($review?->contest_id) {
            $this->syncForContest($tenantId, $studentId, (string) $review->contest_id);
        }
    }
}
