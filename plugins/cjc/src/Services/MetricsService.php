<?php

namespace Plugins\Cjc\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MetricsService
{
    public function tenantSummary(int $tenantId): array
    {
        $studentIds = DB::table('product_user')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->distinct()
            ->pluck('product_user.user_id');

        $seconds7d = (int) DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->where('studied_at', '>=', now()->subDays(7))
            ->sum('seconds');

        $answered = (int) DB::table('cjc_question_answers')->where('tenant_id', $tenantId)->count();
        $correct = (int) DB::table('cjc_question_answers')->where('tenant_id', $tenantId)->where('is_correct', true)->count();

        return [
            'students' => $studentIds->count(),
            'contests' => DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'questions' => DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'study_hours_7d' => round($seconds7d / 3600, 1),
            'answers' => $answered,
            'accuracy' => $answered > 0 ? round(($correct / $answered) * 100, 1) : 0,
        ];
    }

    public function studentSummary(int $tenantId, int $studentId): array
    {
        $seconds7d = (int) DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->where('studied_at', '>=', now()->subDays(7))
            ->sum('seconds');
        $seconds30d = (int) DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->where('studied_at', '>=', now()->subDays(30))
            ->sum('seconds');
        $answered = (int) DB::table('cjc_question_answers')->where('tenant_id', $tenantId)->where('student_id', $studentId)->count();
        $correct = (int) DB::table('cjc_question_answers')->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_correct', true)->count();
        $lastStudy = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->max('studied_at');

        $accuracy = $answered > 0 ? round(($correct / $answered) * 100, 1) : 0;
        $pendingReviews = DB::table('cjc_scheduled_reviews')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->where('is_active', true)->where('completed', false)
            ->where(function ($q) { $q->whereNull('next_date')->orWhere('next_date', '<=', today()); })
            ->count();
        $daysWithoutStudy = $lastStudy ? max(0, Carbon::parse($lastStudy)->startOfDay()->diffInDays(today(), false)) : 999;
        [$riskLevel, $riskReason] = $this->classifyRisk($daysWithoutStudy, $answered, $accuracy, (int) $pendingReviews);

        return [
            'study_hours_7d' => round($seconds7d / 3600, 1),
            'study_hours_30d' => round($seconds30d / 3600, 1),
            'answers' => $answered,
            'correct' => $correct,
            'accuracy' => $accuracy,
            'pending_reviews' => $pendingReviews,
            'flashcards_due' => DB::table('cjc_flashcard_reviews')
                ->where('tenant_id', $tenantId)->where('student_id', $studentId)
                ->where('next_review', '<=', today())->count(),
            'last_study_at' => $lastStudy,
            'days_without_study' => $daysWithoutStudy,
            'risk_level' => $riskLevel,
            'risk_reason' => $riskReason,
        ];
    }

    private function classifyRisk(int $daysWithoutStudy, int $answered, float $accuracy, int $pendingReviews): array
    {
        if ($daysWithoutStudy >= 2 || ($answered >= 10 && $accuracy < 50)) {
            if ($daysWithoutStudy >= 999) return ['vermelho', 'Nenhum estudo registrado'];
            if ($daysWithoutStudy >= 2) return ['vermelho', 'Sem estudar há '.$daysWithoutStudy.' dias'];
            return ['vermelho', 'Baixo rendimento em questões ('.round($accuracy).'%)'];
        }
        if ($daysWithoutStudy === 1 || ($answered >= 10 && $accuracy < 70) || $pendingReviews >= 5) {
            if ($daysWithoutStudy === 1) return ['amarelo', 'Sem estudar ontem'];
            if ($pendingReviews >= 5) return ['amarelo', $pendingReviews.' revisões pendentes'];
            return ['amarelo', 'Atenção ao rendimento ('.round($accuracy).'%)'];
        }
        return ['verde', 'Ritmo constante e em dia'];
    }
}
