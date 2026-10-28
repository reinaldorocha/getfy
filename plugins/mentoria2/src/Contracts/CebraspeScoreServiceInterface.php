<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

interface CebraspeScoreServiceInterface
{
    /**
     * Compute liquid Cebraspe score where 1 wrong cancels 1 right.
     * Liquid score = Correct - Wrong.
     * Blank/unanswered questions do not alter the score.
     *
     * @param int $correct Number of correct answers
     * @param int $wrong Number of wrong answers
     * @param int $blank Number of blank/unmarked answers
     * @param int $totalQuestions Total questions in the exam
     * @param float $pointsPerQuestion Points weight per correct question (usually 1.0)
     * @return array Calculated metrics and risk analysis
     */
    public function calculate(int $correct, int $wrong, int $blank, int $totalQuestions, float $pointsPerQuestion = 1.0): array;

    /**
     * Project cut-off probability based on historic benchmark percentiles.
     */
    public function projectCutoff(float $liquidScore, int $totalQuestions, ?string $board = 'Cebraspe'): array;
}

