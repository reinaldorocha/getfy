<?php

namespace Plugins\Mentoria\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/** Rewards only server-graded evidence. No reward for clicks, timers or mentor actions. */
class LearningRewardsService
{
    public const RULES = [
        ['id' => 'first_correct_v1', 'label' => 'Primeiro acerto sem consultar o gabarito', 'xp' => 5],
        ['id' => 'recovery_v1', 'label' => 'Recuperar um erro em nova tentativa após 24h', 'xp' => 10],
    ];

    public function recordAnswer(int $tenant, int $student, ?string $contest, string $question, string $answerId, bool $correct): void
    {
        if (! $contest || ! $correct || request()->attributes->get('mentoria.workspace')) {
            return;
        }
        // The controller locks the student row before grading; serialization also protects the daily cap.
        $history = DB::table('mentoria_question_answers')
            ->where('tenant_id', $tenant)->where('student_id', $student)->where('question_id', $question)
            ->where('is_student_evidence', true)->where('id', '!=', $answerId)->orderBy('answered_at')->get();
        $rule = $history->isEmpty() ? 'first_correct_v1' : null;
        if (! $rule && $history->contains(fn ($a) => ! $a->is_correct && \Carbon\Carbon::parse($a->answered_at)->lte(now()->subDay()))) {
            $rule = 'recovery_v1';
        }
        if (! $rule) {
            return;
        }
        if (DB::table('mentoria_learning_events')->where('tenant_id', $tenant)->where('student_id', $student)
            ->where('event_key', $rule.':'.$question)->exists()) {
            return;
        }
        // A canonical reward day prevents changing profile timezones to reset the cap.
        $date = now('America/Fortaleza')->toDateString();
        $used = (int) DB::table('mentoria_learning_events')->where('tenant_id', $tenant)
            ->where('student_id', $student)->where('study_date', $date)->sum('xp');
        $xp = min($rule === 'recovery_v1' ? 10 : 5, max(0, 100 - $used));
        if ($xp === 0) {
            return;
        }
        DB::table('mentoria_learning_events')->insertOrIgnore([
            'id' => (string) Str::uuid(), 'tenant_id' => $tenant, 'student_id' => $student,
            'contest_id' => $contest, 'event_key' => $rule.':'.$question, 'rule' => $rule,
            'xp' => $xp, 'study_date' => $date, 'answer_id' => $answerId,
            'created_at' => now(), 'updated_at' => now(),
        ]);
    }

    public function summary(int $tenant, int $student, string $contest): array
    {
        $events = DB::table('mentoria_learning_events')->where('tenant_id', $tenant)
            ->where('student_id', $student)->where('contest_id', $contest);
        $xp = (int) (clone $events)->sum('xp');
        $recoveries = (clone $events)->where('rule', 'recovery_v1')->count();

        return [
            'xp' => $xp, 'level' => intdiv($xp, 100) + 1, 'level_progress' => $xp % 100,
            'rules' => self::RULES, 'daily_cap' => 100,
            'achievements' => [
                ['label' => 'Primeiro passo', 'description' => 'Um primeiro acerto verificado.', 'unlocked' => $xp > 0],
                ['label' => 'De volta ao conteúdo', 'description' => 'Recuperar um erro após pelo menos 24h.', 'unlocked' => $recoveries > 0],
                ['label' => 'Aprender com os erros', 'description' => 'Recuperar cinco questões distintas.', 'unlocked' => $recoveries >= 5],
            ],
        ];
    }
}
