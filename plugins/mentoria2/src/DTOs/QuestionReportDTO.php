<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\DTOs;

final readonly class QuestionReportDTO
{
    public function __construct(
        public string $questionId,
        public string $reason,
        public string $details,
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            questionId: (string) ($data['question_id'] ?? ''),
            reason: (string) ($data['reason'] ?? 'gabarito_duvidoso'),
            details: trim((string) ($data['details'] ?? '')),
        );
    }
}

