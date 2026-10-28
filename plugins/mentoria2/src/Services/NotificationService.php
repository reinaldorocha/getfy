<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NotificationService
{
    public function create(int $tenantId, int $studentId, string $type, string $title, ?string $message = null, ?string $actionScreen = null, ?string $entityType = null, ?string $entityId = null, ?string $deduplicationKey = null, ?array $metadata = null): void
    {
        if (! $this->enabled($tenantId, $studentId, $type)) return;
        if ($deduplicationKey && DB::table('mentoria2_notifications')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('deduplication_key', $deduplicationKey)->exists()) {
            return;
        }

        DB::table('mentoria2_notifications')->insert([
            'id' => (string) Str::uuid(), 'tenant_id' => $tenantId, 'student_id' => $studentId,
            'type' => $type, 'title' => $title, 'message' => $message, 'action_screen' => $actionScreen,
            'entity_type' => $entityType, 'entity_id' => $entityId, 'deduplication_key' => $deduplicationKey,
            'metadata' => $metadata ? json_encode($metadata, JSON_UNESCAPED_UNICODE) : null,
            'read_at' => null, 'created_at' => now(), 'updated_at' => now(),
        ]);
    }

    public function inbox(int $tenantId, int $studentId, int $limit = 30): array
    {
        $this->createDueReviewNotifications($tenantId, $studentId);
        $items = DB::table('mentoria2_notifications')->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->orderByDesc('created_at')->limit($limit)->get()->map(function (object $item): object {
                $item->metadata = $item->metadata ? json_decode((string) $item->metadata, true) : null;
                return $item;
            });
        return ['items' => $items, 'unread_count' => $items->whereNull('read_at')->count()];
    }

    public function markRead(int $tenantId, int $studentId, string $id): bool
    {
        return DB::table('mentoria2_notifications')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('id', $id)
            ->whereNull('read_at')->update(['read_at' => now(), 'updated_at' => now()]) > 0;
    }

    public function markAllRead(int $tenantId, int $studentId): int
    {
        return DB::table('mentoria2_notifications')->where('tenant_id', $tenantId)->where('student_id', $studentId)->whereNull('read_at')
            ->update(['read_at' => now(), 'updated_at' => now()]);
    }

    private function enabled(int $tenantId, int $studentId, string $type): bool
    {
        $settings = DB::table('mentoria2_preferences')->where('tenant_id', $tenantId)->where('student_id', $studentId)->value('settings');
        $settings = is_string($settings) ? json_decode($settings, true) : (array) $settings;
        $preferences = is_array($settings['notifications'] ?? null) ? $settings['notifications'] : [];
        $key = match ($type) { 'review_due' => 'reviews', 'essay_graded' => 'essays', 'schedule_changed' => 'schedule', default => 'mentor' };
        return ($preferences[$key] ?? true) !== false;
    }

    private function createDueReviewNotifications(int $tenantId, int $studentId): void
    {
        $reviews = DB::table('mentoria2_scheduled_reviews')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)->where('completed', false)->whereDate('next_date', '<=', today())->get(['id', 'next_date']);
        foreach ($reviews as $review) $this->create($tenantId, $studentId, 'review_due', 'Revisao pendente', 'Ha uma revisao programada aguardando voce.', 'planning', 'scheduled_review', (string) $review->id, 'review_due_'.$review->id);
    }
}
