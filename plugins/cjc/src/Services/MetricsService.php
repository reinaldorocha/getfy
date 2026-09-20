<?php

namespace Plugins\Cjc\Services;

use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

class MetricsService
{
    public function tenantSummary(int $tenantId): array
    {
        $studentIds = DB::table('product_user')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->distinct()
            ->pluck('product_user.user_id');

        $seconds7d = (int) DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->where('studied_at', '>=', now()->subDays(7))
            ->sum('seconds');

        $questions = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->selectRaw('COALESCE(SUM(solved),0) solved, COALESCE(SUM(correct),0) correct')
            ->first();

        $solved = (int) ($questions->solved ?? 0);
        $correct = (int) ($questions->correct ?? 0);

        return [
            'students' => $studentIds->count(),
            'contests' => DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'edicts' => DB::table('cjc_edicts')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'questions' => DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'flashcard_decks' => DB::table('cjc_flashcard_decks')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'materials' => DB::table('cjc_support_materials')->where('tenant_id', $tenantId)->where('is_active', true)->count(),
            'study_hours_7d' => round($seconds7d / 3600, 1),
            'answers' => $solved,
            'accuracy' => $solved > 0 ? round(($correct / $solved) * 100, 1) : 0,
        ];
    }

    public function studentSummary(int $tenantId, int $studentId): array
    {
        $summary = $this->summary($tenantId, $studentId, null, now()->subDays(29)->toDateString(), today()->toDateString());
        $lastStudy = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->max('studied_at');

        $pendingReviews = DB::table('cjc_scheduled_reviews')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->where('completed', false)
            ->where(function ($query): void {
                $query->whereNull('next_date')->orWhere('next_date', '<=', today());
            })
            ->count();

        $daysWithoutStudy = $lastStudy
            ? Carbon::parse($lastStudy)->startOfDay()->diffInDays(today())
            : 999;

        [$riskLevel, $riskReason] = $this->classifyRisk(
            (int) $daysWithoutStudy,
            (int) $summary['questions_solved_total'],
            (float) ($summary['accuracy_total'] ?? 0),
            (int) $pendingReviews,
        );

        return [
            'study_hours_7d' => round($this->secondsInLastDays($tenantId, $studentId, 7) / 3600, 1),
            'study_hours_30d' => round($this->secondsInLastDays($tenantId, $studentId, 30) / 3600, 1),
            'answers' => $summary['questions_solved_total'],
            'correct' => $summary['correct_total'],
            'accuracy' => $summary['accuracy_total'] ?? 0,
            'pending_reviews' => $pendingReviews,
            'flashcards_due' => DB::table('cjc_flashcard_reviews')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('next_review', '<=', today())
                ->count(),
            'last_study_at' => $lastStudy,
            'days_without_study' => $daysWithoutStudy,
            'risk_level' => $riskLevel,
            'risk_reason' => $riskReason,
            'active_days' => $summary['active_days'],
            'streak' => $summary['current_streak'],
            'edict_percentage' => $summary['edict_percentage'],
            'mock_average' => $summary['mock_average'],
        ];
    }

    public function summary(int $tenantId, int $studentId, ?string $contestId = null, ?string $start = null, ?string $end = null): array
    {
        [$startDate, $endDate] = $this->period($start, $end);

        $sessionsPeriod = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($sessionsPeriod, $contestId);
        $this->applyDatePeriod($sessionsPeriod, 'studied_at', $startDate, $endDate);

        $logsPeriod = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($logsPeriod, $contestId);
        $this->applyDatePeriod($logsPeriod, 'recorded_at', $startDate, $endDate);

        $seconds = (int) (clone $sessionsPeriod)->sum('seconds');
        $q = (clone $logsPeriod)
            ->selectRaw('COALESCE(SUM(solved),0) solved, COALESCE(SUM(correct),0) correct, COALESCE(SUM(wrong),0) wrong')
            ->first();

        $sessionsTotal = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($sessionsTotal, $contestId);

        $logsTotal = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($logsTotal, $contestId);

        $qTotal = (clone $logsTotal)
            ->selectRaw('COALESCE(SUM(solved),0) solved, COALESCE(SUM(correct),0) correct, COALESCE(SUM(wrong),0) wrong')
            ->first();

        $activeDates = collect()
            ->merge((clone $sessionsPeriod)->selectRaw('DATE(studied_at) date_key')->distinct()->pluck('date_key'))
            ->merge((clone $logsPeriod)->selectRaw('DATE(recorded_at) date_key')->distinct()->pluck('date_key'))
            ->filter()->unique()->sort()->values();

        $allActiveDates = collect()
            ->merge((clone $sessionsTotal)->selectRaw('DATE(studied_at) date_key')->distinct()->pluck('date_key'))
            ->merge((clone $logsTotal)->selectRaw('DATE(recorded_at) date_key')->distinct()->pluck('date_key'))
            ->filter()->unique()->values()->all();

        $mockQuery = DB::table('cjc_mock_exams')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->where('is_active', true)->where('type', 'realizado');
        $this->applyContest($mockQuery, $contestId);

        $mockValues = (clone $mockQuery)
            ->whereNotNull('percentage')
            ->orderByRaw('COALESCE(performed_at, DATE(created_at)) DESC')
            ->orderByDesc('created_at')
            ->pluck('percentage')
            ->map(fn ($v) => (float) $v)
            ->values();

        [$covered, $totalItems, $subjectsStarted, $subjectsTotal] = $this->coverage($tenantId, $studentId, $contestId);

        $todaySessions = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)
            ->whereDate('studied_at', today());
        $this->applyContest($todaySessions, $contestId);

        $todayQuestions = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)
            ->whereDate('recorded_at', today());
        $this->applyContest($todayQuestions, $contestId);

        $solved = (int) ($q->solved ?? 0);
        $correct = (int) ($q->correct ?? 0);
        $totalSolved = (int) ($qTotal->solved ?? 0);
        $totalCorrect = (int) ($qTotal->correct ?? 0);

        return [
            'seconds_studied' => $seconds,
            'seconds_studied_total' => (int) (clone $sessionsTotal)->sum('seconds'),
            'questions_solved' => $solved,
            'questions_solved_total' => $totalSolved,
            'correct' => $correct,
            'correct_total' => $totalCorrect,
            'wrong' => (int) ($q->wrong ?? 0),
            'wrong_total' => (int) ($qTotal->wrong ?? 0),
            'accuracy' => $solved > 0 ? round(($correct / $solved) * 100, 1) : null,
            'accuracy_total' => $totalSolved > 0 ? round(($totalCorrect / $totalSolved) * 100, 1) : null,
            'active_days' => $activeDates->count(),
            'current_streak' => $this->streak($allActiveDates),
            'mock_average' => $mockValues->isNotEmpty() ? round($mockValues->avg(), 1) : null,
            'mock_best' => $mockValues->isNotEmpty() ? round($mockValues->max(), 1) : null,
            'mock_last' => $mockValues->first(),
            'mock_trend' => $mockValues->count() >= 2 ? round($mockValues[0] - $mockValues[1], 1) : null,
            'mocks_completed' => (clone $mockQuery)->count(),
            'mocks_total' => DB::table('cjc_mock_exams')
                ->where('tenant_id', $tenantId)->where('student_id', $studentId)
                ->when($contestId, fn ($q) => $q->where('contest_id', $contestId))
                ->where('is_active', true)->count(),
            'edict_items_completed' => $covered,
            'edict_items_total' => $totalItems,
            'edict_percentage' => $totalItems > 0 ? round(($covered / $totalItems) * 100, 1) : 0,
            'subjects_started' => $subjectsStarted,
            'subjects_total' => $subjectsTotal,
            'seconds_today' => (int) $todaySessions->sum('seconds'),
            'questions_today' => (int) $todayQuestions->sum('solved'),
            'period' => ['start' => $startDate, 'end' => $endDate],
        ];
    }

    public function timeline(int $tenantId, int $studentId, ?string $contestId = null, ?string $start = null, ?string $end = null): array
    {
        [$startDate, $endDate] = $this->period($start, $end, 30);
        $days = [];

        foreach (CarbonPeriod::create($startDate, $endDate) as $date) {
            $days[$date->format('Y-m-d')] = [
                'date' => $date->format('Y-m-d'),
                'seconds' => 0,
                'questions' => 0,
                'correct' => 0,
                'wrong' => 0,
                'active' => false,
            ];
        }

        $sessions = DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($sessions, $contestId);
        $this->applyDatePeriod($sessions, 'studied_at', $startDate, $endDate);
        $sessionRows = $sessions
            ->selectRaw('DATE(studied_at) date_key, SUM(seconds) seconds')
            ->groupByRaw('DATE(studied_at)')
            ->get();

        foreach ($sessionRows as $row) {
            $key = (string) $row->date_key;
            $days[$key] ??= ['date' => $key, 'seconds' => 0, 'questions' => 0, 'correct' => 0, 'wrong' => 0, 'active' => false];
            $days[$key]['seconds'] = (int) $row->seconds;
            $days[$key]['active'] = true;
        }

        $questions = DB::table('cjc_question_logs')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true);
        $this->applyContest($questions, $contestId);
        $this->applyDatePeriod($questions, 'recorded_at', $startDate, $endDate);
        $questionRows = $questions
            ->selectRaw('DATE(recorded_at) date_key, SUM(solved) questions, SUM(correct) correct, SUM(wrong) wrong')
            ->groupByRaw('DATE(recorded_at)')
            ->get();

        foreach ($questionRows as $row) {
            $key = (string) $row->date_key;
            $days[$key] ??= ['date' => $key, 'seconds' => 0, 'questions' => 0, 'correct' => 0, 'wrong' => 0, 'active' => false];
            $days[$key]['questions'] = (int) $row->questions;
            $days[$key]['correct'] = (int) $row->correct;
            $days[$key]['wrong'] = (int) $row->wrong;
            $days[$key]['active'] = true;
        }

        ksort($days);

        return array_values($days);
    }

    public function subjects(int $tenantId, int $studentId, string $contestId, ?string $start = null, ?string $end = null): array
    {
        [$startDate, $endDate] = $this->period($start, $end);

        $edictIds = DB::table('cjc_student_edicts as se')
            ->join('cjc_edicts as e', 'e.id', '=', 'se.edict_id')
            ->where('se.tenant_id', $tenantId)->where('se.student_id', $studentId)
            ->where('se.is_active', true)->where('e.is_active', true)->where('e.contest_id', $contestId)
            ->pluck('e.id');

        $subjects = DB::table('cjc_subjects')
            ->where('tenant_id', $tenantId)->whereIn('edict_id', $edictIds)->where('is_active', true)
            ->orderBy('position')->get();

        $result = [];
        foreach ($subjects as $subject) {
            $sessions = DB::table('cjc_study_sessions')
                ->where('tenant_id', $tenantId)->where('student_id', $studentId)
                ->where('contest_id', $contestId)->where('subject_id', $subject->id)->where('is_active', true);
            $this->applyDatePeriod($sessions, 'studied_at', $startDate, $endDate);

            $questions = DB::table('cjc_question_logs')
                ->where('tenant_id', $tenantId)->where('student_id', $studentId)
                ->where('contest_id', $contestId)->where('subject_id', $subject->id)->where('is_active', true);
            $this->applyDatePeriod($questions, 'recorded_at', $startDate, $endDate);
            $q = $questions->selectRaw('COALESCE(SUM(solved),0) solved, COALESCE(SUM(correct),0) correct, COALESCE(SUM(wrong),0) wrong')->first();

            [$completed, $total] = $this->subjectCoverage($tenantId, $studentId, (string) $subject->id);

            $mockStats = DB::table('cjc_mock_exam_subject_results as r')
                ->join('cjc_mock_exams as m', 'm.id', '=', 'r.mock_exam_id')
                ->where('r.tenant_id', $tenantId)
                ->where('r.subject_id', $subject->id)
                ->where('r.is_active', true)
                ->where('m.student_id', $studentId)
                ->where('m.contest_id', $contestId)
                ->where('m.is_active', true)
                ->where('m.type', 'realizado')
                ->selectRaw('COUNT(*) total, AVG(r.percentage) average, MAX(r.percentage) best')
                ->first();

            $latestMock = DB::table('cjc_mock_exam_subject_results as r')
                ->join('cjc_mock_exams as m', 'm.id', '=', 'r.mock_exam_id')
                ->where('r.tenant_id', $tenantId)
                ->where('r.subject_id', $subject->id)
                ->where('r.is_active', true)
                ->where('m.student_id', $studentId)
                ->where('m.contest_id', $contestId)
                ->where('m.is_active', true)
                ->whereNotNull('r.percentage')
                ->orderByRaw('COALESCE(m.performed_at, DATE(m.created_at)) DESC')
                ->value('r.percentage');

            $solved = (int) ($q->solved ?? 0);
            $correct = (int) ($q->correct ?? 0);

            $result[] = [
                'id' => (string) $subject->id,
                'name' => (string) $subject->name,
                'position' => (int) $subject->position,
                'seconds' => (int) $sessions->sum('seconds'),
                'questions' => $solved,
                'correct' => $correct,
                'wrong' => (int) ($q->wrong ?? 0),
                'accuracy' => $solved > 0 ? round(($correct / $solved) * 100, 1) : null,
                'items_completed' => $completed,
                'items_total' => $total,
                'coverage' => $total > 0 ? round(($completed / $total) * 100, 1) : 0,
                'mock_count' => (int) ($mockStats->total ?? 0),
                'mock_average' => $mockStats?->average !== null ? round((float) $mockStats->average, 1) : null,
                'mock_best' => $mockStats?->best !== null ? round((float) $mockStats->best, 1) : null,
                'mock_last' => $latestMock !== null ? (float) $latestMock : null,
            ];
        }

        return $result;
    }

    private function coverage(int $tenantId, int $studentId, ?string $contestId): array
    {
        if (! $contestId) {
            return [0, 0, 0, 0];
        }

        $edictIds = DB::table('cjc_student_edicts as se')
            ->join('cjc_edicts as e', 'e.id', '=', 'se.edict_id')
            ->where('se.tenant_id', $tenantId)->where('se.student_id', $studentId)
            ->where('se.is_active', true)->where('e.is_active', true)->where('e.contest_id', $contestId)
            ->pluck('e.id');

        $subjects = DB::table('cjc_subjects')
            ->where('tenant_id', $tenantId)->whereIn('edict_id', $edictIds)->where('is_active', true)
            ->pluck('id');

        $completed = 0;
        $total = 0;
        $startedSubjects = 0;
        foreach ($subjects as $subjectId) {
            [$subjectCompleted, $subjectTotal] = $this->subjectCoverage($tenantId, $studentId, (string) $subjectId);
            $completed += $subjectCompleted;
            $total += $subjectTotal;
            if ($subjectCompleted > 0) {
                $startedSubjects++;
            }
        }

        return [$completed, $total, $startedSubjects, $subjects->count()];
    }

    private function subjectCoverage(int $tenantId, int $studentId, string $subjectId): array
    {
        $topics = DB::table('cjc_topics')
            ->where('tenant_id', $tenantId)->where('subject_id', $subjectId)->where('is_active', true)
            ->pluck('id');

        $unitIds = [];
        foreach ($topics as $topicId) {
            $subIds = DB::table('cjc_subtopics')
                ->where('tenant_id', $tenantId)->where('topic_id', $topicId)->where('is_active', true)
                ->pluck('id')->map(fn ($id) => (string) $id)->all();

            if ($subIds === []) {
                $unitIds[] = (string) $topicId;
            } else {
                array_push($unitIds, ...$subIds);
            }
        }

        if ($unitIds === []) {
            return [0, 0];
        }

        $completed = DB::table('cjc_edict_progress')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)
            ->where('studied', true)->whereIn('item_id', $unitIds)->count();

        return [$completed, count($unitIds)];
    }

    private function secondsInLastDays(int $tenantId, int $studentId, int $days): int
    {
        return (int) DB::table('cjc_study_sessions')
            ->where('tenant_id', $tenantId)->where('student_id', $studentId)->where('is_active', true)
            ->where('studied_at', '>=', now()->subDays($days - 1)->startOfDay())
            ->sum('seconds');
    }

    private function classifyRisk(int $daysWithoutStudy, int $answered, float $accuracy, int $pendingReviews): array
    {
        if ($daysWithoutStudy >= 2 || ($answered >= 10 && $accuracy < 50)) {
            if ($daysWithoutStudy >= 999) {
                return ['vermelho', 'Nenhum estudo registrado'];
            }
            if ($daysWithoutStudy >= 2) {
                return ['vermelho', 'Sem estudar há '.$daysWithoutStudy.' dias'];
            }

            return ['vermelho', 'Baixo rendimento em questões ('.round($accuracy).'%)'];
        }

        if ($daysWithoutStudy === 1 || ($answered >= 10 && $accuracy < 70) || $pendingReviews >= 5) {
            if ($daysWithoutStudy === 1) {
                return ['amarelo', 'Sem estudar ontem'];
            }
            if ($pendingReviews >= 5) {
                return ['amarelo', $pendingReviews.' revisões pendentes'];
            }

            return ['amarelo', 'Atenção ao rendimento ('.round($accuracy).'%)'];
        }

        return ['verde', 'Ritmo constante e em dia'];
    }

    private function streak(array $dateStrings): int
    {
        $set = array_fill_keys(array_map(fn ($date) => Carbon::parse($date)->toDateString(), $dateStrings), true);
        $cursor = today();
        if (! isset($set[$cursor->toDateString()])) {
            $cursor = $cursor->copy()->subDay();
        }

        $count = 0;
        while (isset($set[$cursor->toDateString()])) {
            $count++;
            $cursor->subDay();
        }

        return $count;
    }

    /**
     * @return array{0: string, 1: string}
     */
    private function period(?string $start, ?string $end, int $defaultDays = 30): array
    {
        $endDate = $end ? Carbon::parse($end)->toDateString() : today()->toDateString();
        $startDate = $start ? Carbon::parse($start)->toDateString() : Carbon::parse($endDate)->subDays($defaultDays - 1)->toDateString();

        if ($startDate > $endDate) {
            [$startDate, $endDate] = [$endDate, $startDate];
        }

        return [$startDate, $endDate];
    }

    private function applyDatePeriod(Builder $query, string $column, string $start, string $end): void
    {
        $query->whereDate($column, '>=', $start)->whereDate($column, '<=', $end);
    }

    private function applyContest(Builder $query, ?string $contestId): void
    {
        if ($contestId) {
            $query->where('contest_id', $contestId);
        }
    }
}
