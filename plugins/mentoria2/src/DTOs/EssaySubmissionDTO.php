<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\DTOs;

final readonly class EssaySubmissionDTO
{
    public function __construct(
        public string $essayId,
        public string $content,
        public int $wordCount,
        public ?string $status = 'submitted',
    ) {}

    public static function fromArray(array $data): self
    {
        $content = trim((string) ($data['content'] ?? ''));
        $words = $content !== '' ? count(preg_split('/\s+/', $content)) : 0;

        return new self(
            essayId: (string) ($data['essay_id'] ?? ''),
            content: $content,
            wordCount: $words,
            status: (string) ($data['status'] ?? 'submitted'),
        );
    }
}

