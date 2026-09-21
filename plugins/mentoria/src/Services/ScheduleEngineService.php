<?php

namespace Plugins\Mentoria\Services;

use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class ScheduleEngineService
{
    /**
     * Port of the useful scheduling behavior from the original Mentoria:
     * subject diagnosis, smart cycle and calendar distribution.
     *
     * @return array<int, array<string, mixed>>
     */
    public function generate(User $student, int $tenantId, string $contestId, array $configuration): array
    {
        $this->assertContestAssigned($student->id, $tenantId, $contestId);

        [$subjects, $units] = $this->diagnostic($student->id, $tenantId, $contestId, $configuration);
        $mode = (string) ($configuration['tipo'] ?? $configuration['type'] ?? 'agendado');

        if ($mode === 'ciclo' || $mode === 'ciclo_inteligente') {
            return $this->generateCycle($subjects);
        }

        return $this->generateAgenda($subjects, $units, $configuration);
    }

    public function reprogram(int $tenantId, int $studentId, string $scheduleId, ?string $fromDate = null): int
    {
        $schedule = DB::table('mentoria_schedules')
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

        $items = DB::table('mentoria_schedule_items')
            ->where('tenant_id', $tenantId)
            ->where('schedule_id', $scheduleId)
            ->where('status', 'pendente')
            ->whereNull('scheduled_review_id')
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

        $updates = [];
        foreach ($items as $item) {
            $duration = max(1, (int) ($item->duration_minutes ?: ($configuration['minutosTopico'] ?? 60)));
            $placed = false;

            for ($guard = 0; $guard < 1095; $guard++) {
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
                throw new RuntimeException('Não foi possível reprogramar todas as atividades com a carga horária atual.');
            }
        }

        DB::transaction(function () use ($tenantId, $updates): void {
            foreach ($updates as $update) {
                DB::table('mentoria_schedule_items')
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
        $edictIds = DB::table('mentoria_student_edicts as se')
            ->join('mentoria_edicts as e', 'e.id', '=', 'se.edict_id')
            ->where('se.tenant_id', $tenantId)
            ->where('se.student_id', $studentId)
            ->where('se.is_active', true)
            ->where('e.contest_id', $contestId)
            ->where('e.is_active', true)
            ->pluck('e.id');

        $subjectsRows = DB::table('mentoria_subjects')
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

            $topics = DB::table('mentoria_topics')
                ->where('tenant_id', $tenantId)
                ->where('subject_id', $subjectId)
                ->where('is_active', true)
                ->orderBy('position')
                ->get();

            $units = [];
            foreach ($topics as $topic) {
                $subtopics = DB::table('mentoria_subtopics')
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
                        'relevance' => (int) ($topic->relevance ?? $subject->relevance ?? 50),
                    ];
                    continue;
                }

                foreach ($subtopics as $subtopic) {
                    $units[] = [
                        'subject_id' => $subjectId,
                        'topic_id' => (string) $topic->id,
                        'subtopic_id' => (string) $subtopic->id,
                        'name' => (string) $subtopic->name,
                        'relevance' => (int) ($subtopic->relevance ?? $topic->relevance ?? $subject->relevance ?? 50),
                    ];
                }
            }

            if ($units === []) {
                continue;
            }

            $unitIds = collect($units)->map(fn ($u) => $u['subtopic_id'] ?: $u['topic_id'])->all();
            $completed = DB::table('mentoria_edict_progress')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $studentId)
                ->where('studied', true)
                ->whereIn('item_id', $unitIds)
                ->count();

            $questionStats = DB::table('mentoria_question_logs')
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
     * @return array<int, array<string, mixed>>
     */
    private function generateCycle(array $subjects): array
    {
        $items = [];
        foreach ($subjects as $index => $subject) {
            $priority = (int) $subject['priority'];
            $duration = $priority >= 70 ? 90 : ($priority >= 55 ? 70 : ($priority >= 40 ? 50 : 30));
            $items[] = [
                'planned_date' => null,
                'cycle_position' => $index + 1,
                'subject_id' => $subject['id'],
                'topic_id' => null,
                'subtopic_id' => null,
                'duration_minutes' => $duration,
                'priority' => $priority,
                'position' => $index + 1,
                'status' => 'pendente',
            ];
        }

        return $items;
    }

    /**
     * @param  array<int, array<string, mixed>>  $subjects
     * @param  array<string, array<int, array<string, mixed>>>  $unitsBySubject
     * @return array<int, array<string, mixed>>
     */
    private function generateAgenda(array $subjects, array $unitsBySubject, array $configuration): array
    {
        if ($subjects === []) {
            return [];
        }

        $minutes = max(1, (int) ($configuration['minutosTopico'] ?? $configuration['minutes_per_topic'] ?? 60));
        $maxPerDay = max(0, (int) ($configuration['maxTopicosDia'] ?? $configuration['max_topics_per_day'] ?? 0));
        $repetitions = max(1, (int) ($configuration['repeticoesEdital'] ?? $configuration['edict_repetitions'] ?? 1));
        $hours = $this->hours($configuration);
        $today = CarbonImmutable::today();

        $pointers = [];
        foreach ($subjects as $subject) {
            $pointers[$subject['id']] = 0;
        }

        $subjectIndex = 0;
        $items = [];

        for ($day = 0; $day < 1095; $day++) {
            $date = $today->addDays($day);
            $available = (float) ($hours[$this->weekdayKey($date)] ?? 0);
            $capacity = (int) floor(($available * 60) / $minutes);
            if ($available > 0 && $capacity < 1) {
                $capacity = 1;
            }
            if ($maxPerDay > 0) {
                $capacity = min($capacity, $maxPerDay);
            }
            if ($capacity <= 0) {
                continue;
            }

            $usedSubjects = [];
            for ($position = 1; $position <= $capacity; $position++) {
                $chosen = null;
                $chosenIndex = null;

                for ($attempt = 0; $attempt < count($subjects); $attempt++) {
                    $candidateIndex = ($subjectIndex + $attempt) % count($subjects);
                    $candidate = $subjects[$candidateIndex];
                    $subjectId = $candidate['id'];
                    $max = count($unitsBySubject[$subjectId] ?? []) * $repetitions;
                    if (($pointers[$subjectId] ?? 0) < $max && ! isset($usedSubjects[$subjectId])) {
                        $chosen = $candidate;
                        $chosenIndex = $candidateIndex;
                        break;
                    }
                }

                if ($chosen === null) {
                    foreach ($subjects as $candidateIndex => $candidate) {
                        $subjectId = $candidate['id'];
                        $max = count($unitsBySubject[$subjectId] ?? []) * $repetitions;
                        if (($pointers[$subjectId] ?? 0) < $max) {
                            $chosen = $candidate;
                            $chosenIndex = $candidateIndex;
                            break;
                        }
                    }
                }

                if ($chosen === null) {
                    return $items;
                }

                $subjectId = $chosen['id'];
                $usedSubjects[$subjectId] = true;
                $subjectIndex = ((int) $chosenIndex + 1) % count($subjects);
                $units = $unitsBySubject[$subjectId];
                $unit = $units[$pointers[$subjectId] % count($units)];
                $pointers[$subjectId]++;

                $items[] = [
                    'planned_date' => $date->toDateString(),
                    'cycle_position' => null,
                    'subject_id' => $unit['subject_id'],
                    'topic_id' => $unit['topic_id'],
                    'subtopic_id' => $unit['subtopic_id'],
                    'duration_minutes' => $minutes,
                    'priority' => max((int) $chosen['priority'], (int) $unit['priority']),
                    'position' => $position,
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

        $fixedItems = DB::table('mentoria_schedule_items')
            ->where('tenant_id', $tenantId)
            ->where('schedule_id', $scheduleId)
            ->whereNotNull('planned_date')
            ->where('planned_date', '>=', $start->toDateString())
            ->where(function ($query): void {
                $query->where(function ($reviewItems): void {
                    $reviewItems->whereNotNull('scheduled_review_id')
                        ->where('status', 'pendente');
                })->orWhere(function ($studyItems): void {
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
        $ok = DB::table('mentoria_student_contests')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('contest_id', $contestId)
            ->where('is_active', true)
            ->exists();

        if (! $ok) {
            throw new RuntimeException('Concurso não atribuído ao aluno.');
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
