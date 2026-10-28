<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

use App\Models\User;

interface EssayServiceInterface
{
    /**
     * List essays available for the student or tenant.
     */
    public function listEssays(int $tenantId, ?string $contestId = null): array;

    /**
     * Get a specific essay with motivating texts and rubric.
     */
    public function getEssay(int $tenantId, string $essayId): ?array;

    /**
     * Create a new essay topic/proposal (by mentor).
     */
    public function createEssay(int $tenantId, User $creator, array $data): array;

    /**
     * Submit an essay solution for grading.
     */
    public function submitEssay(int $tenantId, User $student, string $essayId, string $content): array;

    /**
     * Reserved for a future verified AI provider. It must never publish a
     * heuristic score as an AI correction.
     */
    public function gradeWithAi(int $tenantId, string $submissionId): array;

    /**
     * Definitive mentor grading with custom criteria feedback.
     */
    public function gradeByMentor(int $tenantId, User $mentor, string $submissionId, float $totalScore, array $criteriaScores, string $feedback): array;

    /**
     * Get student submission history.
     */
    public function getStudentSubmissions(int $tenantId, int $studentId): array;

    /**
     * Get all submissions in the tenant for mentor moderation.
     */
    public function getTenantSubmissions(int $tenantId, ?string $status = null): array;
}

