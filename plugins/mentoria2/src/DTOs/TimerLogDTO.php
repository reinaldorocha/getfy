<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\DTOs;

final readonly class TimerLogDTO
{
    public function __construct(
        public string $type,
        public int $durationSeconds,
        public int $questionsCount,
        public int $correctCount,
        public int $wrongCount,
        public ?float $score,
        public bool $isCebraspe,
        public ?string $contestId,
        public ?string $subjectId,
        public ?string $notes,
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            type: (string) ($data['type'] ?? 'pomodoro'),
            durationSeconds: (int) ($data['duration_seconds'] ?? 0),
            questionsCount: (int) ($data['questions_count'] ?? 0),
            correctCount: (int) ($data['correct_count'] ?? 0),
            wrongCount: (int) ($data['wrong_count'] ?? 0),
            score: isset($data['score']) ? (float) $data['score'] : null,
            isCebraspe: (bool) ($data['is_cebraspe'] ?? false),
            contestId: ! empty($data['contest_id']) ? (string) $data['contest_id'] : null,
            subjectId: ! empty($data['subject_id']) ? (string) $data['subject_id'] : null,
            notes: isset($data['notes']) ? trim((string) $data['notes']) : null,
        );
    }
}

