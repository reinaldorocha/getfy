<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

interface GamificationServiceInterface
{
    /**
     * Award XP to a student in an idempotent, atomic manner.
     * Prevents double-counting across concurrent requests or page reloads.
     *
     * @param int $tenantId
     * @param int $studentId
     * @param string $eventType e.g. 'task_completed', 'questions_answered', 'manual_study'
     * @param int $points Amount of XP points to award
     * @param string $idempotencyKey Unique hash/key representing this exact action
     * @param string|null $entityType e.g. 'schedule_item', 'question_log'
     * @param string|null $entityId
     * @param array|null $metadata Additional contextual info
     * @return array [awarded => bool, new_total_xp => int, level => int, streak => int]
     */
    public function awardXp(
        int $tenantId,
        int $studentId,
        string $eventType,
        int $points,
        string $idempotencyKey,
        ?string $entityType = null,
        ?string $entityId = null,
        ?array $metadata = null
    ): array;

    /**
     * Get student's current gamification summary (total XP, level, title, streak, badges).
     */
    public function getSummary(int $tenantId, int $studentId): array;

    public function history(int $tenantId, int $studentId, int $limit = 30): array;

    public function rules(int $tenantId): array;

    public function ranking(int $tenantId, int $studentId): array;
}

