<?php

namespace Plugins\Mentoria\Services;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\DB;

class LearningWorkspaceService
{
    public function assertContest(int $tenant, int $student, string $contest): void
    {
        abort_unless(DB::table('mentoria_student_contests as sc')->join('mentoria_contests as c', 'c.id', '=', 'sc.contest_id')
            ->where('sc.tenant_id', $tenant)->where('c.tenant_id', $tenant)->where('sc.student_id', $student)
            ->where('sc.contest_id', $contest)->where('sc.is_active', true)->where('c.is_active', true)->exists(), 404);
    }

    public function payload(int $tenant, int $student, ?string $contest): array
    {
        if (! $contest) {
            return ['profile' => null, 'today' => [], 'notes' => [], 'rewards' => null, 'recommendations' => []];
        }
        $this->assertContest($tenant, $student, $contest);
        $profile = DB::table('mentoria_learning_profiles')->where('tenant_id', $tenant)
            ->where('student_id', $student)->where('contest_id', $contest)->first();
        if ($profile) {
            $profile->diagnostic = json_decode($profile->diagnostic ?? '{}', true) ?: [];
        }
        $timezone = $profile?->timezone ?: 'America/Fortaleza';
        $today = CarbonImmutable::now($timezone)->startOfDay();
        $schedule = DB::table('mentoria_schedules')->where('tenant_id', $tenant)->where('student_id', $student)
            ->where('contest_id', $contest)->where('is_active', true)->where('state', 'ativo')->latest('version')->first();
        $items = $schedule ? DB::table('mentoria_schedule_items')->where('tenant_id', $tenant)
            ->where('schedule_id', $schedule->id)->orderByRaw('planned_date IS NULL, planned_date')
            ->orderByDesc('priority')->orderBy('position')->get() : collect();
        $due = $items->filter(fn ($i) => ! $i->planned_date || $i->planned_date <= $today->toDateString());
        $configuration = json_decode($schedule?->configuration ?? '{}', true) ?: [];
        $hours = $profile?->diagnostic['hours'] ?? $configuration['horas'] ?? $configuration['hours'] ?? [];
        $week = [];
        $start = $today->startOfWeek();
        for ($i = 0; $i < 7; $i++) {
            $date = $start->addDays($i);
            $key = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'][$date->dayOfWeek];
            $daily = $items->where('planned_date', $date->toDateString());
            $week[] = ['date' => $date->toDateString(), 'key' => $key,
                'capacity' => (int) round((float) ($hours[$key] ?? 0) * 60),
                'planned' => (int) $daily->sum('duration_minutes'), 'total' => $daily->count(),
                'completed' => $daily->where('status', 'concluido')->count()];
        }
        $notes = DB::table('mentoria_mentor_notes as n')->join('users as u', 'u.id', '=', 'n.actor_id')
            ->where('n.tenant_id', $tenant)->where('n.student_id', $student)->where('n.contest_id', $contest)
            ->select('n.*', 'u.name as actor_name')->latest('n.created_at')->limit(30)->get();
        $recommendations = [];
        $overdue = $due->filter(fn ($i) => $i->status === 'pendente' && $i->planned_date && $i->planned_date < $today->toDateString())->count();
        if ($overdue) {
            $recommendations[] = ['title' => 'Reavaliar a carga', 'reason' => $overdue.' atividades anteriores continuam pendentes. Ajuste com o mentor sem acumular carga hoje.'];
        }
        $stats = DB::table('mentoria_question_logs')->where(fn ($query) => $query->whereNull('origin')->orWhere('origin', '!=', 'mentor_preview'))->where('tenant_id', $tenant)->where('student_id', $student)
            ->where('contest_id', $contest)->where('is_active', true)->where('recorded_at', '>=', now()->subDays(14))
            ->selectRaw('COALESCE(SUM(solved),0) total, COALESCE(SUM(correct),0) correct')->first();
        $total = (int) ($stats->total ?? 0);
        $accuracy = $total ? round($stats->correct / $total * 100, 1) : null;
        $recommendations[] = $total < 20
            ? ['title' => 'Construir diagnóstico', 'reason' => 'Amostra de '.$total.' questões nos últimos 14 dias. Ainda não é suficiente para estimar domínio.']
            : ['title' => $accuracy < 70 ? 'Retomar erros antes de avançar' : 'Verificar retenção', 'reason' => $accuracy.'% em '.$total.' questões nos últimos 14 dias. Confirme o resultado em revisões espaçadas.'];

        return [
            'profile' => $profile, 'date' => $today->toDateString(), 'timezone' => $timezone,
            'today' => $due->where('status', 'pendente')->values()->take(20), 'week' => $week,
            'overdue' => $overdue, 'notes' => $notes,
            'rewards' => app(LearningRewardsService::class)->summary($tenant, $student, $contest),
            'recommendations' => $recommendations, 'evidence' => ['sample' => $total, 'accuracy' => $accuracy, 'confidence' => $total < 20 ? 'insuficiente' : 'inicial'],
        ];
    }
}
