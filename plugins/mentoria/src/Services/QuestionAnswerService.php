<?php

namespace Plugins\Mentoria\Services;

class QuestionAnswerService
{
    public function matches(string $answer, string $correctAnswer, mixed $alternatives = null): bool
    {
        $answer = trim($answer);
        $correctAnswer = trim($correctAnswer);

        if ($this->normalized($answer) === $this->normalized($correctAnswer)) {
            return true;
        }

        $items = $this->alternatives($alternatives);
        if ($items === []) {
            return false;
        }

        $answerIndex = $this->alternativeIndex($answer, $items);
        $correctIndex = $this->alternativeIndex($correctAnswer, $items);

        return $answerIndex !== null && $correctIndex !== null && $answerIndex === $correctIndex;
    }

    public function alternatives(mixed $value): array
    {
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            $value = is_array($decoded) ? $decoded : [];
        }

        if (! is_array($value)) {
            return [];
        }

        return array_values(array_map('strval', $value));
    }

    private function alternativeIndex(string $value, array $alternatives): ?int
    {
        $normalized = $this->normalized($value);
        if (preg_match('/^([a-z])(?:[\)\.\-:\s]|$)/i', trim($value), $match)) {
            $idx = ord(strtoupper($match[1])) - ord('A');
            if ($idx >= 0 && $idx < count($alternatives)) {
                return $idx;
            }
        }

        if (preg_match('/^[a-z]$/i', trim($value))) {
            $idx = ord(strtoupper(trim($value))) - ord('A');
            if ($idx >= 0 && $idx < count($alternatives)) {
                return $idx;
            }
        }

        foreach ($alternatives as $index => $alternative) {
            if ($this->normalized((string) $alternative) === $normalized) {
                return $index;
            }
        }

        return null;
    }

    private function normalized(string $value): string
    {
        return mb_strtolower(trim($value), 'UTF-8');
    }
}
