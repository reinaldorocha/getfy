<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\DTOs;

final readonly class CebraspeScoreDTO
{
    public function __construct(
        public int $correct,
        public int $wrong,
        public int $blank,
        public int $totalQuestions,
        public float $liquidScore,
        public float $accuracyRate,
        public float $riskFactor,
        public string $projectedVerdict,
    ) {}
}

