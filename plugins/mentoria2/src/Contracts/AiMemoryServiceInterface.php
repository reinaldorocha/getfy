<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

interface AiMemoryServiceInterface
{
    /**
     * Retrieve the persistent cognitive profile for a student.
     */
    public function getProfile(int $tenantId, int $studentId): array;

    /**
     * Refresh the student's cognitive metrics by analyzing recent answers,
     * error notebooks, study pacing, and flashcard retention rates.
     */
    public function analyzeAndRefresh(int $tenantId, int $studentId): array;

    /**
     * Set explicit pedagogical guidance instructions from the mentor.
     */
    public function setMentorGuidance(int $tenantId, int $studentId, string $guidance): bool;

    /**
     * Build the context prompt payload to inject into the 24h AI Tutor.
     */
    public function buildTutorContext(int $tenantId, int $studentId, ?string $currentTopic = null): string;
}

