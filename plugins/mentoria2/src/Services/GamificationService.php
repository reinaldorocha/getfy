<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\GamificationServiceInterface;

class GamificationService implements GamificationServiceInterface
{
    public function awardXp(
        int $tenantId,
        int $studentId,
        string $eventType,
        int $points,
        string $idempotencyKey,
        ?string $entityType = null,
        ?string $entityId = null,
        ?array $metadata = null
    ): array {
        $points = $this->configuredPoints($tenantId, $eventType, $points);
        return DB::transaction(function () use (
            $tenantId, $studentId, $eventType, $points, $idempotencyKey, $entityType, $entityId, $metadata
        ) {
            // Check if already awarded (Idempotency)
            $existing = DB::table('mentoria2_gamification_logs')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('idempotency_key', $idempotencyKey)
                ->first();

            $awarded = ! $existing;
            if ($awarded) {
                DB::table('mentoria2_gamification_logs')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $studentId,
                    'event_type' => $eventType,
                    'points' => $points,
                    'entity_type' => $entityType,
                    'entity_id' => $entityId,
                    'idempotency_key' => $idempotencyKey,
                    'metadata' => $metadata ? json_encode($metadata, JSON_UNESCAPED_UNICODE) : null,
                    'created_at' => now(),
                ]);
            }

            return $this->getSummary($tenantId, $studentId) + [
                'awarded' => $awarded,
                'awarded_xp' => $awarded ? $points : 0,
                'event_type' => $eventType,
                'reason' => $this->reasonFor($eventType),
            ];
        });
    }

    public function getSummary(int $tenantId, int $studentId): array
    {
        $totalXp = (int) DB::table('mentoria2_gamification_logs')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->sum('points');

        $level = (int) floor(sqrt($totalXp / 100)) + 1;
        $nextLevelXp = (int) (pow($level, 2) * 100);
        $currentLevelBaseXp = (int) (pow($level - 1, 2) * 100);
        $levelProgress = $nextLevelXp > $currentLevelBaseXp
            ? round((($totalXp - $currentLevelBaseXp) / ($nextLevelXp - $currentLevelBaseXp)) * 100, 1)
            : 100.0;

        if ($level >= 20) {
            $title = 'Mestre das Aprovações';
        } elseif ($level >= 10) {
            $title = 'Especialista em Questões';
        } elseif ($level >= 5) {
            $title = 'Concurseiro Focado';
        } else {
            $title = 'Recruta dos Estudos';
        }

        // Calculate consecutive active study days (streak)
        $distinctDays = DB::table('mentoria2_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->selectRaw('distinct date(studied_at) as study_date')
            ->orderByDesc('study_date')
            ->limit(30)
            ->pluck('study_date')
            ->toArray();

        $streak = count($distinctDays);

        return [
            'total_xp' => $totalXp,
            'level' => $level,
            'title' => $title,
            'level_progress' => min(100.0, max(0.0, $levelProgress)),
            'next_level_xp' => $nextLevelXp,
            'streak_days' => $streak,
            'badges' => [
                ['id' => 'primeiro_passo', 'name' => 'Primeiro Passo', 'unlocked' => $totalXp >= 10, 'icon' => 'zap'],
                ['id' => 'foco_constante', 'name' => 'Foco Constante', 'unlocked' => $streak >= 3, 'icon' => 'flame'],
                ['id' => 'veterano_questoes', 'name' => '100 Questões', 'unlocked' => $totalXp >= 200, 'icon' => 'target'],
                ['id' => 'mestre_revisao', 'name' => 'Mestre da Revisão', 'unlocked' => $totalXp >= 500, 'icon' => 'award'],
            ],
        ];
    }

    public function history(int $tenantId, int $studentId, int $limit = 30): array
    {
        return DB::table('mentoria2_gamification_logs')->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->orderByDesc('created_at')->limit($limit)->get()->map(function (object $event): object {
                $event->reason = $this->reasonFor((string) $event->event_type);
                $event->metadata = $event->metadata ? json_decode((string) $event->metadata, true) : null;
                return $event;
            })->all();
    }

    public function rules(int $tenantId): array
    {
        return DB::table('mentoria2_gamification_rules')->where('tenant_id', $tenantId)->orderBy('event_type')->get()->map(fn (object $rule) => ['event_type' => $rule->event_type, 'points' => (int) $rule->points, 'is_active' => (bool) $rule->is_active])->all();
    }

    public function ranking(int $tenantId, int $studentId): array
    {
        $rows = DB::table('mentoria2_cohort_members as member')
            ->join('users as user', 'user.id', '=', 'member.student_id')
            ->leftJoin('mentoria2_gamification_logs as log', function ($join) use ($tenantId): void { $join->on('log.student_id', '=', 'member.student_id')->where('log.tenant_id', '=', $tenantId); })
            ->where('member.tenant_id', $tenantId)->where('member.ranking_opt_in', true)
            ->select('member.student_id', 'user.name', DB::raw('COALESCE(SUM(log.points), 0) as xp'))
            ->groupBy('member.student_id', 'user.name')->orderByDesc('xp')->orderBy('user.name')->get()
            ->values()->map(function (object $row, int $index) use ($studentId): array { return ['position' => $index + 1, 'student_id' => (int) $row->student_id, 'name' => $row->name, 'xp' => (int) $row->xp, 'is_user' => (int) $row->student_id === $studentId]; })->all();
        return $rows;
    }

    private function configuredPoints(int $tenantId, string $eventType, int $fallback): int
    {
        $rule = DB::table('mentoria2_gamification_rules')->where('tenant_id', $tenantId)->where('event_type', $eventType)->first();
        return $rule && $rule->is_active ? (int) $rule->points : ($rule ? 0 : $fallback);
    }

    private function reasonFor(string $eventType): string
    {
        return match ($eventType) {
            'schedule_item_completed' => 'Atividade do cronograma concluida',
            'question_answered' => 'Questao respondida e registrada',
            'flashcard_reviewed' => 'Revisao de flashcard concluida',
            'review_completed' => 'Revisao programada concluida',
            'mock_completed' => 'Simulado entregue',
            'manual_study' => 'Sessao de estudo registrada',
            default => 'Atividade de estudo registrada',
        };
    }
}

