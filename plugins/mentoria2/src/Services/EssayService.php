<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\EssayServiceInterface;

class EssayService implements EssayServiceInterface
{
    public function listEssays(int $tenantId, ?string $contestId = null): array
    {
        $query = DB::table('mentoria2_essays')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true);

        if ($contestId) {
            $query->where(function ($q) use ($contestId) {
                $q->where('contest_id', $contestId)
                  ->orWhereNull('contest_id');
            });
        }

        return $query->orderByDesc('created_at')->get()->map(function ($row) {
            return [
                'id' => $row->id,
                'title' => $row->title,
                'prompt_theme' => $row->prompt_theme,
                'motivating_texts' => is_string($row->motivating_texts) ? json_decode($row->motivating_texts, true) : $row->motivating_texts,
                'criteria' => is_string($row->criteria) ? json_decode($row->criteria, true) : $row->criteria,
                'min_words' => (int) $row->min_words,
                'max_words' => (int) $row->max_words,
                'max_score' => (float) $row->max_score,
                'contest_id' => $row->contest_id,
                'created_at' => $row->created_at,
            ];
        })->toArray();
    }

    public function getEssay(int $tenantId, string $essayId): ?array
    {
        $row = DB::table('mentoria2_essays')
            ->where('tenant_id', $tenantId)
            ->where('id', $essayId)
            ->where('is_active', true)
            ->first();

        if (! $row) {
            return null;
        }

        return [
            'id' => $row->id,
            'title' => $row->title,
            'prompt_theme' => $row->prompt_theme,
            'motivating_texts' => is_string($row->motivating_texts) ? json_decode($row->motivating_texts, true) : $row->motivating_texts,
            'criteria' => is_string($row->criteria) ? json_decode($row->criteria, true) : $row->criteria,
            'min_words' => (int) $row->min_words,
            'max_words' => (int) $row->max_words,
            'max_score' => (float) $row->max_score,
            'contest_id' => $row->contest_id,
            'created_at' => $row->created_at,
        ];
    }

    public function createEssay(int $tenantId, User $creator, array $data): array
    {
        $id = (string) Str::uuid();
        $title = trim((string) ($data['title'] ?? 'Proposta de Redação'));
        $promptTheme = trim((string) ($data['prompt_theme'] ?? ''));
        $motivatingTexts = $data['motivating_texts'] ?? [];
        $criteria = $data['criteria'] ?? [
            ['name' => 'Domínio da norma culta', 'weight' => 25],
            ['name' => 'Compreensão da proposta e repertório', 'weight' => 25],
            ['name' => 'Capacidade de argumentação e coerência', 'weight' => 25],
            ['name' => 'Elaboração de proposta de intervenção', 'weight' => 25],
        ];

        DB::table('mentoria2_essays')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'contest_id' => ! empty($data['contest_id']) ? $data['contest_id'] : null,
            'title' => $title,
            'prompt_theme' => $promptTheme,
            'motivating_texts' => json_encode($motivatingTexts, JSON_UNESCAPED_UNICODE),
            'criteria' => json_encode($criteria, JSON_UNESCAPED_UNICODE),
            'min_words' => (int) ($data['min_words'] ?? 150),
            'max_words' => (int) ($data['max_words'] ?? 600),
            'max_score' => (float) ($data['max_score'] ?? 100.00),
            'created_by' => $creator->id,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $this->getEssay($tenantId, $id);
    }

    public function submitEssay(int $tenantId, User $student, string $essayId, string $content): array
    {
        $words = count(preg_split('/\s+/', trim($content)));
        $id = (string) Str::uuid();

        // Check if draft already exists
        $existing = DB::table('mentoria2_essay_submissions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $student->id)
            ->where('essay_id', $essayId)
            ->where('status', 'draft')
            ->first();

        if ($existing) {
            DB::table('mentoria2_essay_submissions')->where('id', $existing->id)->update([
                'content' => $content,
                'word_count' => $words,
                'status' => 'submitted',
                'submitted_at' => now(),
                'updated_at' => now(),
            ]);
            $submissionId = $existing->id;
        } else {
            DB::table('mentoria2_essay_submissions')->insert([
                'id' => $id,
                'tenant_id' => $tenantId,
                'student_id' => $student->id,
                'essay_id' => $essayId,
                'content' => $content,
                'word_count' => $words,
                'status' => 'submitted',
                'submitted_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            $submissionId = $id;
        }

        // Não publicamos uma pontuação heurística como se fosse avaliação de IA.
        // A correção verificável segue para o mentor responsável.
        return [
            'id' => $submissionId,
            'status' => 'submitted',
            'total_score' => null,
            'criteria_scores' => [],
            'feedback' => 'Redação enviada. Aguarde a correção do mentor.',
            'corrected_by' => null,
            'graded_at' => null,
        ];
    }

    public function gradeWithAi(int $tenantId, string $submissionId): array
    {
        throw new \LogicException('Correção automática por IA não está configurada. Use a correção do mentor.');
    }

    public function gradeByMentor(int $tenantId, User $mentor, string $submissionId, float $totalScore, array $criteriaScores, string $feedback): array
    {
        DB::table('mentoria2_essay_submissions')
            ->where('tenant_id', $tenantId)
            ->where('id', $submissionId)
            ->update([
                'status' => 'graded',
                'total_score' => $totalScore,
                'criteria_scores' => json_encode($criteriaScores, JSON_UNESCAPED_UNICODE),
                'feedback' => $feedback,
                'corrected_by' => (string) $mentor->id,
                'graded_at' => now(),
                'updated_at' => now(),
            ]);

        return [
            'id' => $submissionId,
            'status' => 'graded',
            'total_score' => $totalScore,
            'criteria_scores' => $criteriaScores,
            'feedback' => $feedback,
            'corrected_by' => 'mentor',
            'mentor_name' => $mentor->name,
            'graded_at' => now()->toIso8601String(),
        ];
    }

    public function getStudentSubmissions(int $tenantId, int $studentId): array
    {
        return DB::table('mentoria2_essay_submissions as s')
            ->join('mentoria2_essays as e', 'e.id', '=', 's.essay_id')
            ->where('s.tenant_id', $tenantId)
            ->where('s.student_id', $studentId)
            ->select(
                's.id', 's.essay_id', 'e.title as essay_title', 's.content', 's.word_count',
                's.status', 's.total_score', 's.criteria_scores', 's.feedback', 's.corrected_by',
                's.submitted_at', 's.graded_at'
            )
            ->orderByDesc('s.created_at')
            ->get()
            ->map(function ($row) {
                return [
                    'id' => $row->id,
                    'essay_id' => $row->essay_id,
                    'essay_title' => $row->essay_title,
                    'content' => $row->content,
                    'word_count' => (int) $row->word_count,
                    'status' => $row->status,
                    'total_score' => $row->total_score !== null ? (float) $row->total_score : null,
                    'criteria_scores' => is_string($row->criteria_scores) ? json_decode($row->criteria_scores, true) : $row->criteria_scores,
                    'feedback' => $row->feedback,
                    'corrected_by' => $row->corrected_by,
                    'submitted_at' => $row->submitted_at,
                    'graded_at' => $row->graded_at,
                ];
            })
            ->toArray();
    }

    public function getTenantSubmissions(int $tenantId, ?string $status = null): array
    {
        $query = DB::table('mentoria2_essay_submissions as s')
            ->join('mentoria2_essays as e', 'e.id', '=', 's.essay_id')
            ->leftJoin('users as u', 'u.id', '=', 's.student_id')
            ->where('s.tenant_id', $tenantId);

        if ($status) {
            $query->where('s.status', $status);
        }

        return $query->select(
                's.id', 's.essay_id', 'e.title as essay_title', 's.student_id', 'u.name as student_name',
                's.content', 's.word_count', 's.status', 's.total_score', 's.criteria_scores',
                's.feedback', 's.corrected_by', 's.submitted_at', 's.graded_at'
            )
            ->orderByDesc('s.created_at')
            ->get()
            ->map(function ($row) {
                return [
                    'id' => $row->id,
                    'essay_id' => $row->essay_id,
                    'essay_title' => $row->essay_title,
                    'student_id' => (int) $row->student_id,
                    'student_name' => $row->student_name ?: 'Aluno',
                    'content' => $row->content,
                    'word_count' => (int) $row->word_count,
                    'status' => $row->status,
                    'total_score' => $row->total_score !== null ? (float) $row->total_score : null,
                    'criteria_scores' => is_string($row->criteria_scores) ? json_decode($row->criteria_scores, true) : $row->criteria_scores,
                    'feedback' => $row->feedback,
                    'corrected_by' => $row->corrected_by,
                    'submitted_at' => $row->submitted_at,
                    'graded_at' => $row->graded_at,
                ];
            })
            ->toArray();
    }
}

