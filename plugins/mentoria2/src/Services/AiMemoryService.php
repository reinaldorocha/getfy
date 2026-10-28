<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\AiMemoryServiceInterface;

class AiMemoryService implements AiMemoryServiceInterface
{
    public function getProfile(int $tenantId, int $studentId): array
    {
        $memory = DB::table('mentoria2_ai_memory')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->first();

        if (! $memory) {
            return $this->analyzeAndRefresh($tenantId, $studentId);
        }

        $profile = is_string($memory->cognitive_profile)
            ? json_decode($memory->cognitive_profile, true)
            : ($memory->cognitive_profile ?? []);

        return [
            'student_id' => $studentId,
            'cognitive_profile' => $profile,
            'mentor_guidance' => $memory->mentor_guidance,
            'last_analyzed_at' => $memory->last_analyzed_at,
        ];
    }

    public function analyzeAndRefresh(int $tenantId, int $studentId): array
    {
        // Calculate error distribution by subject
        $subjectErrors = DB::table('mentoria2_question_answers as qa')
            ->join('mentoria2_question_bank as qb', 'qb.id', '=', 'qa.question_id')
            ->where('qa.tenant_id', $tenantId)
            ->where('qa.student_id', $studentId)
            ->select(
                'qb.subject',
                DB::raw('count(*) as total'),
                DB::raw('sum(case when qa.is_correct = 1 then 1 else 0 end) as correct_count')
            )
            ->groupBy('qb.subject')
            ->get();

        $strengths = [];
        $weaknesses = [];

        foreach ($subjectErrors as $row) {
            $total = (int) $row->total;
            $correct = (int) $row->correct_count;
            $rate = $total > 0 ? ($correct / $total) : 0;

            if ($rate >= 0.75 && $total >= 5) {
                $strengths[] = [
                    'subject' => $row->subject,
                    'accuracy' => round($rate * 100, 1),
                    'sample_size' => $total,
                ];
            } elseif ($rate < 0.60 && $total >= 3) {
                $weaknesses[] = [
                    'subject' => $row->subject,
                    'accuracy' => round($rate * 100, 1),
                    'sample_size' => $total,
                ];
            }
        }

        // Pacing metrics
        $sessionAvg = DB::table('mentoria2_study_sessions')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->avg('seconds');

        $pacingMinutes = $sessionAvg ? round($sessionAvg / 60, 1) : 45.0;

        $cognitiveProfile = [
            'learning_pace' => $pacingMinutes >= 60 ? 'intensivo' : ($pacingMinutes >= 35 ? 'moderado' : 'acelerado'),
            'average_block_minutes' => $pacingMinutes,
            'mastered_topics' => $strengths,
            'chronic_weaknesses' => $weaknesses,
            'recommended_style' => count($weaknesses) > count($strengths) ? 'revisao_guiada_questoes' : 'aprofundamento_teorico',
            'summary' => count($weaknesses) > 0
                ? 'Aluno apresenta vulnerabilidades em '.implode(', ', array_column($weaknesses, 'subject'))
                : 'Desempenho estável em matérias fundamentais com bom índice de retenção.',
        ];

        DB::table('mentoria2_ai_memory')->updateOrInsert(
            [
                'tenant_id' => $tenantId,
                'student_id' => $studentId,
            ],
            [
                'id' => (string) Str::uuid(),
                'cognitive_profile' => json_encode($cognitiveProfile, JSON_UNESCAPED_UNICODE),
                'last_analyzed_at' => now(),
                'updated_at' => now(),
            ]
        );

        return [
            'student_id' => $studentId,
            'cognitive_profile' => $cognitiveProfile,
            'mentor_guidance' => null,
            'last_analyzed_at' => now()->toIso8601String(),
        ];
    }

    public function setMentorGuidance(int $tenantId, int $studentId, string $guidance): bool
    {
        return (bool) DB::table('mentoria2_ai_memory')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->update([
                'mentor_guidance' => trim($guidance),
                'updated_at' => now(),
            ]);
    }

    public function buildTutorContext(int $tenantId, int $studentId, ?string $currentTopic = null): string
    {
        $profile = $this->getProfile($tenantId, $studentId);
        $cog = $profile['cognitive_profile'] ?? [];
        $weak = ! empty($cog['chronic_weaknesses'])
            ? implode(', ', array_map(fn ($w) => $w['subject'].' ('.$w['accuracy'].'%)', $cog['chronic_weaknesses']))
            : 'Nenhuma detectada';

        $guidance = $profile['mentor_guidance'] ? "\nDIRETRIZ DO MENTOR: ".$profile['mentor_guidance'] : '';
        $topicContext = $currentTopic ? "\nTÓPICO EM ESTUDO AGORA: {$currentTopic}" : '';

        return <<<CTX
[PERFIL COGNITIVO DO ALUNO]
Ritmo: {$cog['learning_pace']} (méd. {$cog['average_block_minutes']} min/bloco)
Pontos fracos crônicos: {$weak}
Estilo recomendado: {$cog['recommended_style']}{$topicContext}{$guidance}
Instrução: Adapte sua linguagem e profundidade didática com base neste perfil.
CTX;
    }

    public function markWeaknessMastered(int $tenantId, int $studentId, string $subject): array
    {
        $profile = $this->getProfile($tenantId, $studentId);
        $cog = $profile['cognitive_profile'] ?? [];
        $weaknesses = $cog['chronic_weaknesses'] ?? [];
        $strengths = $cog['mastered_topics'] ?? [];

        $subjectLower = mb_strtolower(trim($subject));
        $removed = null;
        $remainingWeaknesses = [];

        foreach ($weaknesses as $w) {
            $wSub = is_array($w) ? ($w['subject'] ?? '') : (string) $w;
            if (mb_strtolower(trim($wSub)) === $subjectLower && $removed === null) {
                $removed = $w;
            } else {
                $remainingWeaknesses[] = $w;
            }
        }

        $strengths[] = [
            'subject' => $subject,
            'accuracy' => 85.0,
            'sample_size' => is_array($removed) ? ($removed['sample_size'] ?? 10) : 10,
            'mastered_at' => now()->toIso8601String(),
        ];

        $cog['chronic_weaknesses'] = $remainingWeaknesses;
        $cog['mastered_topics'] = $strengths;

        DB::table('mentoria2_ai_memory')->updateOrInsert(
            ['tenant_id' => $tenantId, 'student_id' => $studentId],
            [
                'id' => (string) Str::uuid(),
                'cognitive_profile' => json_encode($cog, JSON_UNESCAPED_UNICODE),
                'updated_at' => now(),
            ]
        );

        return [
            'ok' => true,
            'strengths' => $strengths,
            'weaknesses' => $remainingWeaknesses,
        ];
    }
}

