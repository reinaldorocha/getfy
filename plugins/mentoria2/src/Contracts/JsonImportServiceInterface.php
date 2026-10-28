<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

use App\Models\User;

interface JsonImportServiceInterface
{
    /**
     * Validate an external AI JSON payload against target type schemas
     * (edital, questions, flashcards).
     */
    public function validatePayload(string $type, array|string $jsonContent): array;

    /**
     * Atomically import verified JSON content into the tenant's database.
     */
    public function importPayload(int $tenantId, User $actor, string $type, array $payload, ?string $targetContestId = null, ?array $targets = null): array;
}

