<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Plugins\Mentoria2\Contracts\CebraspeScoreServiceInterface;

class CebraspeScoreService implements CebraspeScoreServiceInterface
{
    public function calculate(
        int $correct,
        int $wrong,
        int $blank,
        int $totalQuestions,
        float $pointsPerQuestion = 1.0
    ): array {
        $answered = $correct + $wrong;
        $liquidScore = max(0.0, ($correct * $pointsPerQuestion) - ($wrong * $pointsPerQuestion));
        $maxPossible = $totalQuestions > 0 ? ($totalQuestions * $pointsPerQuestion) : 100.0;
        $netPercentage = $maxPossible > 0 ? round(($liquidScore / $maxPossible) * 100, 2) : 0.0;
        $accuracyRate = $answered > 0 ? round(($correct / $answered) * 100, 2) : 0.0;
        $riskFactor = $answered > 0 ? round(($wrong / $answered) * 100, 2) : 0.0;

        $projection = $this->projectCutoff($liquidScore, $totalQuestions);

        return [
            'correct' => $correct,
            'wrong' => $wrong,
            'blank' => $blank,
            'total_questions' => $totalQuestions,
            'liquid_score' => $liquidScore,
            'max_possible' => $maxPossible,
            'net_percentage' => $netPercentage,
            'accuracy_rate' => $accuracyRate,
            'risk_factor' => $riskFactor,
            'projection' => $projection,
        ];
    }

    public function projectCutoff(float $liquidScore, int $totalQuestions, ?string $board = 'Cebraspe'): array
    {
        $maxPossible = $totalQuestions > 0 ? $totalQuestions : 120;
        $ratio = $liquidScore / $maxPossible;

        if ($ratio >= 0.75) {
            $verdict = 'Altíssima probabilidade de aprovação (Top 5%)';
            $tier = 'A+';
            $recommendation = 'Excelente rendimento líquido. Mantenha revisões ativas e treine velocidade de resolução.';
        } elseif ($ratio >= 0.65) {
            $verdict = 'Competitivo para vagas imediatas (Top 15%)';
            $tier = 'A';
            $recommendation = 'Bom índice líquido. Reduza o chute nas matérias com taxa de erro superior a 25%.';
        } elseif ($ratio >= 0.50) {
            $verdict = 'No limiar de corte de cadastro de reserva';
            $tier = 'B';
            $recommendation = 'A anulação por questões erradas está corroendo sua nota. Deixe em branco itens com confiança < 60%.';
        } else {
            $verdict = 'Abaixo da nota de corte projetada';
            $tier = 'C';
            $recommendation = 'Risco alto de eliminação. Foque na consolidação da teoria básica antes de aumentar volume de simulados.';
        }

        return [
            'tier' => $tier,
            'verdict' => $verdict,
            'recommendation' => $recommendation,
            'estimated_percentile' => round(min(99.0, max(1.0, $ratio * 110)), 1),
        ];
    }
}

