<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

use App\Models\User;

interface QuestionReportServiceInterface
{
    /**
     * File a new report for an erroneous or outdated question.
     */
    public function fileReport(int $tenantId, User $student, string $questionId, string $reason, string $details): array;

    /**
     * List open reports in the moderation queue for mentors.
     */
    public function listPendingReports(int $tenantId, ?string $status = null): array;

    /**
     * Resolve a question report (defer or reject) with mentor notes and optional question correction.
     */
    public function resolveReport(int $tenantId, User $mentor, string $reportId, string $status, string $resolutionNotes, ?array $updatedQuestion = null): array;
}

