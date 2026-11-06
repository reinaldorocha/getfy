<?php

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class ScheduleEngineService
{
    /**
     * Port of the useful scheduling behavior from the original Mentoria2:
     * subject diagnosis, smart cycle and calendar distribution.
     *
     * @return array<int, array<string, mixed>>
     */
    public function generate(User $student, int $tenantId, string $contestId, array $configuration): array
    {
        $this->assertContestAssigned($student->id, $tenantId, $contestId);

        // Check student contest mode if not explicitly in configuration
        $studentContest = DB::table('mentoria2_student_contests')
            ->where('tenant_id', $tenantId)
            ->where('contest_id', $contestId)
            ->where('student_id', $student->id)
            ->first();

        if ($studentContest && $studentContest->allowed_schedule_mode === 'fixed_days') {
            $configuration['schedule_mode'] = 'fixed_days';
            $configuration['allowed_schedule_mode'] = 'fixed_days';
            if ((int) $studentContest->fixed_days_duration > 0) {
                $configuration['fixed_days'] = (int) $studentContest->fixed_days_duration;
                $configuration['dias_corridos'] = (int) $studentContest->fixed_days_duration;
            }
        }

        [$subjects, $units] = $this->diagnostic($student->id, $tenantId, $contestId, $configuration);
        $mode = (string) ($configuration['tipo'] ?? $configuration['type'] ?? 'agendado');
        $hours = $this->hours($configuration);
        $hasWeeklyHours = array_sum($hours) > 0;

        if ($mode === 'ciclo' && ! $hasWeeklyHours) {
            return $this->generateCycle($subjects, $units, $configuration);
        }

        return $this->generateAgenda($subjects, $units, $configuration, $this->fixedPlanItems($tenantId, $contestId), $contestId);
    }

    public function reprogram(int $tenantId, int $studentId, string $scheduleId, ?string $fromDate = null): int
    {
        $schedule = DB::table('mentoria2_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('id', $scheduleId)
            ->where('is_active', true)
            ->first();

        if (! $schedule) {
            throw new RuntimeException('Cronograma não encontrado.');
        }

        $configuration = $this->decodeJson($schedule->configuration);
        $start = $fromDate ? CarbonImmutable::parse($fromDate)->startOfDay() : CarbonImmutable::today();
        if ($start->isBefore(CarbonImmutable::today())) {
            $start = CarbonImmutable::today();
        }

        $items = DB::table('mentoria2_schedule_items')
            ->where('tenant_id', $tenantId)
            ->where('schedule_id', $scheduleId)
            ->where('status', 'pendente')
            ->whereNull('scheduled_review_id')
            ->where(function ($query): void { $query->whereNull('is_fixed')->orWhere('is_fixed', false); })
            ->orderByDesc('priority')
            ->orderByRaw('planned_date IS NULL, planned_date')
            ->orderBy('position')
            ->get();

        if ($items->isEmpty()) {
            return 0;
        }

        $hours = $this->hours($configuration);
        $maxPerDay = max(0, (int) ($configuration['maxTopicosDia'] ?? $configuration['max_topics_per_day'] ?? 0));
        $occupied = $this->fixedOccupancy($tenantId, $studentId, $scheduleId, $start);
        $cursor = $start;
        $dayPosition = [];

        $examDate = $configuration['data_prova'] ?? $configuration['exam_date'] ?? null;
        if (! $examDate && ! empty($schedule->contest_id)) {
            $contest = DB::table('mentoria2_contests')->where('id', $schedule->contest_id)->first();
            $examDate = $contest?->exam_date;
        }
        $examCutoff = $examDate ? CarbonImmutable::parse($examDate)->startOfDay() : null;

        $fixedCutoff = null;
        if (! empty($schedule->contest_id)) {
            $studentContest = DB::table('mentoria2_student_contests')
                ->where('tenant_id', $tenantId)
                ->where('contest_id', $schedule->contest_id)
                ->where('student_id', $studentId)
                ->first();
            if ($studentContest && $studentContest->allowed_schedule_mode === 'fixed_days' && (int) $studentContest->fixed_days_duration > 0) {
                $fixedCutoff = $start->addDays((int) $studentContest->fixed_days_duration);
            }
        }

        $updates = [];
        foreach ($items as $item) {
            $duration = max(1, (int) ($item->duration_minutes ?: ($configuration['minutosTopico'] ?? 60)));
            $placed = false;

            for ($guard = 0; $guard < 1095; $guard++) {
                if ($examCutoff && $cursor->gte($examCutoff)) {
                    break;
                }
                if ($fixedCutoff && $cursor->gte($fixedCutoff)) {
                    break;
                }

                $key = $cursor->toDateString();
                $capacity = (int) round(($hours[$this->weekdayKey($cursor)] ?? 0) * 60);
                $used = $occupied[$key] ?? ['minutes' => 0, 'count' => 0];

                if ($capacity > 0
                    && $used['minutes'] + $duration <= $capacity
                    && ($maxPerDay === 0 || $used['count'] < $maxPerDay)) {
                    $dayPosition[$key] = ($dayPosition[$key] ?? 0) + 1;
                    $updates[] = [
                        'id' => $item->id,
                        'planned_date' => $key,
                        'position' => $dayPosition[$key],
                    ];
                    $occupied[$key] = [
                        'minutes' => $used['minutes'] + $duration,
                        'count' => $used['count'] + 1,
                    ];
                    $placed = true;
                    break;
                }

                $cursor = $cursor->addDay();
            }

            if (! $placed) {
                // If it exceeds exam date or maximum horizon, leave unassigned for review
                $updates[] = [
                    'id' => $item->id,
                    'planned_date' => null,
                    'position' => 0,
                ];
            }
        }

        DB::transaction(function () use ($tenantId, $updates): void {
            foreach ($updates as $update) {
                DB::table('mentoria2_schedule_items')
                    ->where('tenant_id', $tenantId)
                    ->where('id', $update['id'])
                    ->update([
                        'planned_date' => $update['planned_date'],
                        'position' => $update['position'],
                        'updated_at' => now(),
                    ]);
            }
        });

        return count($updates);
    }

    /**
     * @return array{0: array<int, array<string, mixed>>, 1: array<string, array<int, array<string, mixed>>>}
     */
    private function diagnostic(int $studentId, int $tenantId, string $contestId, array $configuration): array
    {
        $edictIds = DB::table('mentoria2_student_edicts as se')
            ->join('mentoria2_edicts as e', 'e.id', '=', 'se.edict_id')
            ->where('se.tenant_id', $tenantId)
            ->where('se.student_id', $studentId)
            ->where('se.is_active', true)
            ->where('e.contest_id', $contestId)
            ->where('e.is_active', true)
            ->pluck('e.id');

        if ($edictIds->isEmpty()) {
            $edictIds = DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->where('contest_id', $contestId)
                ->where('is_active', true)
                ->pluck('id');
        }

        $subjectsRows = DB::table('mentoria2_subjects')
            ->where('tenant_id', $tenantId)
            ->whereIn('edict_id', $edictIds)
            ->where('is_active', true)
            ->orderBy('position')
            ->get();

        $selected = $configuration['materiasSelecionadas'] ?? $configuration['subjects_selected'] ?? [];
        $affinity = $configuration['materiaAfinidade'] ?? $configuration['subject_affinity'] ?? [];
        $priorities = $configuration['materiaPrioridades'] ?? $configuration['subject_priorities'] ?? [];

        $subjects = [];
        $unitsBySubject = [];

        foreach ($subjectsRows as $subject) {
            $subjectId = (string) $subject->id;
            if (is_array($selected) && array_key_exists($subjectId, $selected) && ! $selected[$subjectId]) {
                continue;
            }

            $topics = DB::table('mentoria2_topics')
                ->where('tenant_id', $tenantId)
                ->where('subject_id', $subjectId)
                ->where('is_active', true)
                ->orderBy('position')
                ->get();

            $units = [];
            foreach ($topics as $topic) {
                $subtopics = DB::table('mentoria2_subtopics')
                    ->where('tenant_id', $tenantId)
                    ->where('topic_id', $topic->id)
                    ->where('is_active', true)
                    ->orderBy('position')
                    ->get();

                if ($subtopics->isEmpty()) {
                    $units[] = [
                        'subject_id' => $subjectId,
                        'topic_id' => (string) $topic->id,
                        'subtopic_id' => null,
                        'name' => (string) $topic->name,
                        'topic_name' => (string) $topic->name,
                        'subtopic_name' => null,
                        'relevance' => (int) ($topic->relevance ?? $subject->relevance ?? 50),
                        'estimated_minutes' => isset($topic->estimated_minutes) ? (int) $topic->estimated_minutes : null,
                        'questions_target' => isset($topic->questions_target) ? (int) $topic->questions_target : null,
                        'weight' => (float) ($topic->weight ?? $subject->weight ?? 1.0),
                    ];
                    continue;
                }

                foreach ($subtopics as $subtopic) {
                    $units[] = [
                        'subject_id' => $subjectId,
                        'topic_id' => (string) $topic->id,
                        'subtopic_id' => (string) $subtopic->id,
                        'name' => (string) $subtopic->name,
                        'topic_name' => (string) $topic->name,
                        'subtopic_name' => (string) $subtopic->name,
                        'relevance' => (int) ($subtopic->relevance ?? $topic->relevance ?? $subject->relevance ?? 50),
                        'estimated_minutes' => isset($subtopic->estimated_minutes) ? (int) $subtopic->estimated_minutes : (isset($topic->estimated_minutes) ? (int) $topic->estimated_minutes : null),
                        'questions_target' => isset($subtopic->questions_target) ? (int) $subtopic->questions_target : (isset($topic->questions_target) ? (int) $topic->questions_target : null),
                        'weight' => (float) ($subtopic->weight ?? $topic->weight ?? $subject->weight ?? 1.0),
                    ];
                }
            }

            if ($units === []) {
                continue;
            }

            $unitIds = collect($units)->map(fn ($u) => $u['subtopic_id'] ?: $u['topic_id'])->all();
            $completed = DB::table('mentoria2_edict_progress')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('studied', true)
                ->whereIn('item_id', $unitIds)
                ->count();

            $questionStats = DB::table('mentoria2_question_logs')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('contest_id', $contestId)
                ->where('subject_id', $subjectId)
                ->where('is_active', true)
                ->selectRaw('COALESCE(SUM(solved),0) solved, COALESCE(SUM(correct),0) correct')
                ->first();

            $solved = (int) ($questionStats->solved ?? 0);
            $correct = (int) ($questionStats->correct ?? 0);
            $accuracy = $solved > 0 ? ($correct / $solved) * 100 : 65;
            $coverage = count($units) > 0 ? ($completed / count($units)) * 100 : 0;

            $base = (float) ($subject->relevance ?? 50);
            $weight = (float) ($subject->weight ?? 1);
            $manual = $this->manualPriority((string) ($priorities[$subjectId] ?? 'media'));
            $affinityValue = is_numeric($affinity[$subjectId] ?? null) ? (float) $affinity[$subjectId] : 50;

            $priority = (int) round(
                ($base * 0.25)
                + (min(100, $weight * 25) * 0.15)
                + ((100 - $coverage) * 0.25)
                + ((100 - $accuracy) * 0.20)
                + ($manual * 0.10)
                + ((100 - $affinityValue) * 0.05)
            );
            $priority = max(0, min(100, $priority));

            foreach ($units as &$unit) {
                $unit['priority'] = max($priority, (int) $unit['relevance']);
            }
            unset($unit);

            $subjects[] = [
                'id' => $subjectId,
                'name' => (string) $subject->name,
                'total' => count($units),
                'completed' => $completed,
                'solved' => $solved,
                'correct' => $correct,
                'priority' => $priority,
            ];
            $unitsBySubject[$subjectId] = $units;
        }

        usort($subjects, fn ($a, $b) => $b['priority'] <=> $a['priority']);

        return [$subjects, $unitsBySubject];
    }

    /**
     * @param  array<int, array<string, mixed>>  $subjects
     * @param  array<string, array<int, array<string, mixed>>>  $unitsBySubject
     * @return array<int, array<string, mixed>>
     */
    private function generateCycle(array $subjects, array $unitsBySubject, array $configuration): array
    {
        $items = [];
        $minutes = max(1, (int) ($configuration['minutosTopico'] ?? $configuration['minutes_per_topic'] ?? 60));
        $repetitions = max(1, (int) ($configuration['repeticoesEdital'] ?? $configuration['edict_repetitions'] ?? 1));

        $totalUnits = 0;
        foreach ($subjects as $s) {
            $totalUnits += count($unitsBySubject[$s['id']] ?? []);
        }
        $targetCount = $totalUnits * $repetitions;
        if ($targetCount <= 0) {
            return [];
        }

        $pointers = [];
        foreach ($subjects as $subject) {
            $pointers[$subject['id']] = 0;
        }

        $subjectIndex = 0;
        while (count($items) < $targetCount) {
            $found = false;
            for ($attempt = 0; $attempt < count($subjects); $attempt++) {
                $candidate = $subjects[($subjectIndex + $attempt) % count($subjects)];
                $subjectId = $candidate['id'];
                $units = $unitsBySubject[$subjectId] ?? [];
                $pendingForSubject = ! empty($units) && ($pointers[$subjectId] < count($units) * $repetitions);

                if ($pendingForSubject) {
                    $unit = $units[$pointers[$subjectId] % count($units)];
                    $pointers[$subjectId]++;
                    $priority = (int) ($unit['priority'] ?? $candidate['priority']);
                    $duration = max(10, (int) ($unit['estimated_minutes'] ?: ($priority >= 70 ? 90 : ($priority >= 55 ? 70 : ($priority >= 40 ? 50 : 30)))));
                    if (isset($configuration['minutosTopico'])) {
                        $duration = $minutes;
                    }
                    $pos = count($items) + 1;

                    $desc = $candidate['name'] . ' · ' . $unit['name'];
                    if (! empty($unit['subtopic_name']) && ! empty($unit['topic_name']) && $unit['subtopic_name'] !== $unit['topic_name']) {
                        $desc = $candidate['name'] . ' · ' . $unit['topic_name'] . ' > ' . $unit['subtopic_name'];
                    }

                    $items[] = [
                        'planned_date' => null,
                        'cycle_position' => $pos,
                        'subject_id' => $unit['subject_id'],
                        'topic_id' => $unit['topic_id'],
                        'subtopic_id' => $unit['subtopic_id'],
                        'label' => $unit['name'],
                        'description' => $desc,
                        'duration_minutes' => $duration,
                        'questions_target' => isset($unit['questions_target']) && (int) $unit['questions_target'] > 0 ? (int) $unit['questions_target'] : null,
                        'priority' => $priority,
                        'position' => $pos,
                        'status' => 'pendente',
                    ];
                    $subjectIndex = ($subjectIndex + $attempt + 1) % count($subjects);
                    $found = true;
                    break;
                }
            }

            if (! $found) {
                break;
            }
        }

        return $items;
    }

    /**
     * @param  array<int, array<string, mixed>>  $subjects
     * @param  array<string, array<int, array<string, mixed>>>  $unitsBySubject
     * @return array<int, array<string, mixed>>
     */
    private function generateAgenda(array $subjects, array $unitsBySubject, array $configuration, array $fixedPlanItems = [], ?string $contestId = null): array
    {
        if ($subjects === [] && $fixedPlanItems === []) {
            return [];
        }

        $minutes = max(1, (int) ($configuration['minutosTopico'] ?? $configuration['minutes_per_topic'] ?? 60));
        $maxPerDay = max(0, (int) ($configuration['maxTopicosDia'] ?? $configuration['max_topics_per_day'] ?? 0));
        $repetitions = max(1, (int) ($configuration['repeticoesEdital'] ?? $configuration['edict_repetitions'] ?? 1));
        $hours = $this->hours($configuration);
        $today = CarbonImmutable::today();

        $examDate = $configuration['data_prova'] ?? $configuration['exam_date'] ?? null;
        if (! $examDate && ! empty($contestId)) {
            $contest = DB::table('mentoria2_contests')->where('id', $contestId)->first();
            $examDate = $contest?->exam_date;
        }

        $fixedDays = (int) ($configuration['dias_corridos'] ?? $configuration['fixed_days'] ?? $configuration['dias'] ?? 0);
        $targetDays = max(60, $repetitions * 30);
        $isConstrained = false;

        if ($fixedDays > 0) {
            $targetDays = $fixedDays;
            $isConstrained = true;
        } elseif (! empty($examDate)) {
            $daysToExam = (int) $today->diffInDays(CarbonImmutable::parse($examDate)->startOfDay(), false);
            if ($daysToExam > 0) {
                $targetDays = $daysToExam;
                $isConstrained = true;
            }
        }

        // Potential score sorting when time is constrained
        if ($isConstrained) {
            foreach ($unitsBySubject as $sId => &$sUnits) {
                usort($sUnits, function ($a, $b) {
                    $scoreA = ((float) ($a['weight'] ?? 1.0) * 20 * 0.35) + ((int) ($a['priority'] ?? 50) * 0.65);
                    $scoreB = ((float) ($b['weight'] ?? 1.0) * 20 * 0.35) + ((int) ($b['priority'] ?? 50) * 0.65);
                    return $scoreB <=> $scoreA;
                });
            }
            unset($sUnits);
        }

        $pointers = [];
        foreach ($subjects as $subject) {
            $pointers[$subject['id']] = 0;
        }

        $subjectIndex = 0;
        $items = [];

        for ($day = 0; $day < $targetDays; $day++) {
            // Check if all units for all subjects have finished their repetitions
            $hasPendingUnits = false;
            foreach ($subjects as $s) {
                $sId = $s['id'];
                $sCount = count($unitsBySubject[$sId] ?? []);
                if (($pointers[$sId] ?? 0) < ($sCount * $repetitions)) {
                    $hasPendingUnits = true;
                    break;
                }
            }
            if (! $hasPendingUnits && ! empty($items)) {
                // All topics across all subjects have been scheduled for the configured repetitions!
                break;
            }

            $date = $today->addDays($day);
            $available = (float) ($hours[$this->weekdayKey($date)] ?? 0);
            $dayKey = $this->weekdayKey($date);
            $dayFixedItems = array_values(array_filter($fixedPlanItems, fn (array $item): bool => in_array($dayKey, $item['days'], true)));
            $fixedMinutes = array_sum(array_map(fn (array $item): int => (int) $item['duration_minutes'], $dayFixedItems));
            $positionOffset = 0;
            foreach ($dayFixedItems as $fixed) {
                $positionOffset++;
                $items[] = [
                    'planned_date' => $date->toDateString(),
                    'cycle_position' => count($items) + 1,
                    'subject_id' => null,
                    'topic_id' => null,
                    'subtopic_id' => null,
                    'label' => $fixed['label'],
                    'description' => $fixed['description'] ?? null,
                    'is_fixed' => true,
                    'duration_minutes' => $fixed['duration_minutes'],
                    'questions_target' => null,
                    'priority' => 100,
                    'position' => $positionOffset,
                    'status' => 'pendente',
                ];
            }
            $availableStudyMinutes = max(0, (int) round(($available * 60) - $fixedMinutes));
            $capacity = (int) floor($availableStudyMinutes / $minutes);
            if ($maxPerDay > 0) {
                $capacity = min($capacity, max(0, $maxPerDay - $positionOffset));
            }
            if ($capacity <= 0) {
                continue;
            }

            $usedSubjects = [];
            for ($position = 1; $position <= $capacity; $position++) {
                $chosen = null;
                $chosenIndex = null;

                // 1st pass: Pick subject not yet used today that still has pending units
                for ($attempt = 0; $attempt < count($subjects); $attempt++) {
                    $candidateIndex = ($subjectIndex + $attempt) % count($subjects);
                    $candidate = $subjects[$candidateIndex];
                    $subjectId = $candidate['id'];
                    $units = $unitsBySubject[$subjectId] ?? [];
                    $isPending = ! empty($units) && (($pointers[$subjectId] ?? 0) < (count($units) * $repetitions));
                    if ($isPending && ! isset($usedSubjects[$subjectId])) {
                        $chosen = $candidate;
                        $chosenIndex = $candidateIndex;
                        break;
                    }
                }

                // 2nd pass: If all candidate subjects were already used today, allow reuse as long as it has pending units
                if ($chosen === null) {
                    for ($attempt = 0; $attempt < count($subjects); $attempt++) {
                        $candidateIndex = ($subjectIndex + $attempt) % count($subjects);
                        $candidate = $subjects[$candidateIndex];
                        $subjectId = $candidate['id'];
                        $units = $unitsBySubject[$subjectId] ?? [];
                        $isPending = ! empty($units) && (($pointers[$subjectId] ?? 0) < (count($units) * $repetitions));
                        if ($isPending) {
                            $chosen = $candidate;
                            $chosenIndex = $candidateIndex;
                            break;
                        }
                    }
                }

                if ($chosen === null) {
                    // No subject has any pending units left
                    break;
                }

                $subjectId = $chosen['id'];
                $usedSubjects[$subjectId] = true;
                $subjectIndex = ((int) $chosenIndex + 1) % count($subjects);
                $units = $unitsBySubject[$subjectId];
                $unit = $units[$pointers[$subjectId] % count($units)];
                $pointers[$subjectId]++;

                $unitDuration = max(10, (int) ($unit['estimated_minutes'] ?: $minutes));
                $unitQuestionsTarget = isset($unit['questions_target']) && (int) $unit['questions_target'] > 0 ? (int) $unit['questions_target'] : null;

                $fullDescription = $chosen['name'] . ' · ' . $unit['name'];
                if (! empty($unit['subtopic_name']) && ! empty($unit['topic_name']) && $unit['subtopic_name'] !== $unit['topic_name']) {
                    $fullDescription = $chosen['name'] . ' · ' . $unit['topic_name'] . ' > ' . $unit['subtopic_name'];
                }

                $items[] = [
                    'planned_date' => $date->toDateString(),
                    'cycle_position' => count($items) + 1,
                    'subject_id' => $unit['subject_id'],
                    'topic_id' => $unit['topic_id'],
                    'subtopic_id' => $unit['subtopic_id'],
                    'label' => $unit['name'],
                    'description' => $fullDescription,
                    'duration_minutes' => $unitDuration,
                    'questions_target' => $unitQuestionsTarget,
                    'priority' => max((int) $chosen['priority'], (int) $unit['priority']),
                    'position' => $position + $positionOffset,
                    'status' => 'pendente',
                ];
            }
        }

        return $items;
    }

    /**
     * @return array<string, array{minutes: int, count: int}>
     */
    private function fixedOccupancy(int $tenantId, int $studentId, string $scheduleId, CarbonImmutable $start): array
    {
        $occupied = [];

        $fixedItems = DB::table('mentoria2_schedule_items')
            ->where('tenant_id', $tenantId)
            ->where('schedule_id', $scheduleId)
            ->whereNotNull('planned_date')
            ->where('planned_date', '>=', $start->toDateString())
            ->where(function ($query): void {
                $query->where(function ($reviewItems): void {
                    $reviewItems->whereNotNull('scheduled_review_id')
                        ->where('status', 'pendente');
                })->orWhere('is_fixed', true)->orWhere(function ($studyItems): void {
                    $studyItems->whereNull('scheduled_review_id')
                        ->whereIn('status', ['concluido', 'ignorado']);
                });
            })
            ->get(['planned_date', 'duration_minutes']);

        foreach ($fixedItems as $item) {
            $key = (string) $item->planned_date;
            $occupied[$key] ??= ['minutes' => 0, 'count' => 0];
            $occupied[$key]['minutes'] += max(0, (int) $item->duration_minutes);
            $occupied[$key]['count']++;
        }

        return $occupied;
    }

    /** @return array<int, array{days: array<int, string>, label: string, description: ?string, duration_minutes: int}> */
    private function fixedPlanItems(int $tenantId, string $contestId): array
    {
        $value = DB::table('mentoria2_contests')->where('tenant_id', $tenantId)->where('id', $contestId)->value('fixed_plan_items');
        $items = is_string($value) ? json_decode($value, true) : $value;
        if (! is_array($items)) return [];

        $validDays = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        return collect($items)->map(function ($item) use ($validDays): ?array {
            if (! is_array($item)) return null;
            $days = array_values(array_filter((array) ($item['days'] ?? []), fn ($day): bool => is_string($day) && in_array($day, $validDays, true)));
            $label = trim((string) ($item['label'] ?? ''));
            $duration = (int) ($item['duration_minutes'] ?? 0);
            return $days !== [] && $label !== '' && $duration > 0 && $duration <= 1440
                ? ['days' => $days, 'label' => mb_substr($label, 0, 255), 'description' => ($description = trim((string) ($item['description'] ?? ''))) !== '' ? mb_substr($description, 0, 1000) : null, 'duration_minutes' => $duration]
                : null;
        })->filter()->values()->all();
    }

    /**
     * @return array<string, float>
     */
    private function hours(array $configuration): array
    {
        $hours = $configuration['horas'] ?? $configuration['hours'] ?? null;
        if (! is_array($hours)) {
            return ['dom' => 0, 'seg' => 2, 'ter' => 2, 'qua' => 2, 'qui' => 2, 'sex' => 2, 'sab' => 0];
        }

        $out = [];
        foreach (['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'] as $key) {
            $value = is_numeric($hours[$key] ?? null) ? (float) $hours[$key] : 0.0;
            if ($value < 0 || $value > 24) {
                throw new RuntimeException('Carga horária diária inválida.');
            }
            $out[$key] = $value;
        }

        return $out;
    }

    private function weekdayKey(CarbonImmutable $date): string
    {
        return ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'][$date->dayOfWeek];
    }

    private function manualPriority(string $priority): int
    {
        return match (mb_strtolower(trim($priority), 'UTF-8')) {
            'alta', 'high' => 100,
            'baixa', 'low' => 20,
            default => 60,
        };
    }

    private function assertContestAssigned(int $studentId, int $tenantId, string $contestId): void
    {
        $ok = DB::table('mentoria2_student_contests')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->exists();

        if (! $ok) {
            $contestExists = DB::table('mentoria2_contests')
                ->where('tenant_id', $tenantId)
                ->where('id', $contestId)
                ->where('is_active', true)
                ->exists();

            if ($contestExists) {
                $existing = DB::table('mentoria2_student_contests')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $studentId)
                    ->where('contest_id', $contestId)
                    ->first();

                if ($existing) {
                    DB::table('mentoria2_student_contests')
                        ->where('id', $existing->id)
                        ->update(['group' => 'foco', 'is_active' => true, 'updated_at' => now()]);
                } else {
                    DB::table('mentoria2_student_contests')->insert([
                        'id' => (string) \Illuminate\Support\Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $studentId,
                        'contest_id' => $contestId,
                        'assigned_by' => $studentId,
                        'group' => 'foco',
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            } else {
                throw new RuntimeException('Concurso não atribuído ao aluno.');
            }
        }

        $edicts = DB::table('mentoria2_edicts')
            ->where('tenant_id', $tenantId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->pluck('id');

        foreach ($edicts as $edictId) {
            $existingEdict = DB::table('mentoria2_student_edicts')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('edict_id', $edictId)
                ->first();

            if ($existingEdict) {
                DB::table('mentoria2_student_edicts')
                    ->where('id', $existingEdict->id)
                    ->update(['is_active' => true, 'updated_at' => now()]);
            } else {
                DB::table('mentoria2_student_edicts')->insert([
                    'id' => (string) \Illuminate\Support\Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $studentId,
                    'edict_id' => $edictId,
                    'assigned_by' => $studentId,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    private function decodeJson(mixed $value): array
    {
        if (is_array($value)) {
            return $value;
        }
        if (! is_string($value) || $value === '') {
            return [];
        }
        $decoded = json_decode($value, true);

        return is_array($decoded) ? $decoded : [];
    }
}
