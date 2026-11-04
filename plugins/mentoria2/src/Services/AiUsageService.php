<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AiUsageService
{
    // Custo por milhão de tokens (USD) para openai/gpt-4o-mini
    public const PRICE_PROMPT_PER_M = 0.150;
    public const PRICE_COMPLETION_PER_M = 0.600;
    public const USD_TO_BRL = 5.70;

    /**
     * Mapeamento legível de módulos/features.
     */
    public const FEATURE_LABELS = [
        'redacao_theme' => 'Oficina de Redação (Temas IA)',
        'redacao_correction' => 'Oficina de Redação (Correção e Espelho)',
        'redacao_ocr' => 'OCR Transcrição de Folha Manuscrita',
        'edital_import' => 'Importador de Edital com IA',
        'ai_memory' => 'Memória Águia IA & Prescrição',
        'schedule_ai' => 'Cronograma Adaptativo com IA',
        'tutor_chat' => 'Tutor 24h IA',
    ];

    /**
     * Registra um consumo de IA na trilha de auditoria e custos.
     */
    public function log(
        int $tenantId,
        ?int $studentId,
        ?string $productId,
        string $feature,
        string $model = 'openai/gpt-4o-mini',
        int $promptTokens = 0,
        int $completionTokens = 0,
        array $metadata = []
    ): string {
        $id = (string) Str::uuid();
        $totalTokens = max(0, $promptTokens) + max(0, $completionTokens);

        // Cálculo de custo USD
        $costUsd = (($promptTokens / 1_000_000) * self::PRICE_PROMPT_PER_M)
            + (($completionTokens / 1_000_000) * self::PRICE_COMPLETION_PER_M);
        $costUsd = round($costUsd, 6);

        // Cálculo de custo BRL
        $costBrl = round($costUsd * self::USD_TO_BRL, 4);

        DB::table('mentoria2_ai_usage_logs')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'student_id' => $studentId,
            'product_id' => $productId,
            'feature' => $feature,
            'model' => $model,
            'prompt_tokens' => $promptTokens,
            'completion_tokens' => $completionTokens,
            'total_tokens' => $totalTokens,
            'cost_usd' => $costUsd,
            'cost_brl' => $costBrl,
            'metadata' => json_encode($metadata, JSON_UNESCAPED_UNICODE),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return $id;
    }

    /**
     * Retorna resumo estatístico consolidado de custos e consumo por aluno e por feature.
     */
    public function getStats(int $tenantId): array
    {
        $baseQuery = DB::table('mentoria2_ai_usage_logs')->where('mentoria2_ai_usage_logs.tenant_id', $tenantId);

        $totals = (clone $baseQuery)->select(
            DB::raw('COUNT(*) as total_requests'),
            DB::raw('COALESCE(SUM(total_tokens), 0) as total_tokens'),
            DB::raw('COALESCE(SUM(prompt_tokens), 0) as total_prompt_tokens'),
            DB::raw('COALESCE(SUM(completion_tokens), 0) as total_completion_tokens'),
            DB::raw('COALESCE(SUM(cost_usd), 0) as total_cost_usd'),
            DB::raw('COALESCE(SUM(cost_brl), 0) as total_cost_brl'),
            DB::raw('COUNT(DISTINCT student_id) as total_students')
        )->first();

        // Agrupado por feature/módulo
        $featureRows = (clone $baseQuery)
            ->select(
                'feature',
                DB::raw('COUNT(*) as count'),
                DB::raw('COALESCE(SUM(total_tokens), 0) as total_tokens'),
                DB::raw('COALESCE(SUM(cost_usd), 0) as cost_usd'),
                DB::raw('COALESCE(SUM(cost_brl), 0) as cost_brl')
            )
            ->groupBy('feature')
            ->orderByDesc('cost_brl')
            ->get();

        $byFeature = [];
        foreach ($featureRows as $row) {
            $byFeature[] = [
                'feature' => $row->feature,
                'label' => self::FEATURE_LABELS[$row->feature] ?? ucfirst(str_replace('_', ' ', $row->feature)),
                'count' => (int) $row->count,
                'total_tokens' => (int) $row->total_tokens,
                'cost_usd' => (float) $row->cost_usd,
                'cost_brl' => (float) $row->cost_brl,
            ];
        }

        // Ranking por aluno
        $studentRows = (clone $baseQuery)
            ->leftJoin('users', 'users.id', '=', 'mentoria2_ai_usage_logs.student_id')
            ->select(
                'mentoria2_ai_usage_logs.student_id',
                DB::raw('COALESCE(users.name, "Mentor / Sistema") as student_name'),
                DB::raw('COALESCE(users.email, "admin@mentoria") as student_email'),
                DB::raw('COUNT(*) as requests_count'),
                DB::raw('COALESCE(SUM(total_tokens), 0) as total_tokens'),
                DB::raw('COALESCE(SUM(cost_usd), 0) as cost_usd'),
                DB::raw('COALESCE(SUM(cost_brl), 0) as cost_brl'),
                DB::raw('MAX(mentoria2_ai_usage_logs.created_at) as last_used_at')
            )
            ->groupBy('mentoria2_ai_usage_logs.student_id', 'users.name', 'users.email')
            ->orderByDesc('cost_brl')
            ->limit(50)
            ->get();

        $studentsRanking = [];
        foreach ($studentRows as $s) {
            $studentsRanking[] = [
                'student_id' => $s->student_id ? (int) $s->student_id : null,
                'name' => $s->student_name,
                'email' => $s->student_email,
                'requests_count' => (int) $s->requests_count,
                'total_tokens' => (int) $s->total_tokens,
                'cost_usd' => (float) $s->cost_usd,
                'cost_brl' => (float) $s->cost_brl,
                'last_used_at' => $s->last_used_at ? Carbon::parse($s->last_used_at)->format('d/m/Y H:i') : null,
            ];
        }

        // Últimos 50 logs detalhados
        $recentLogs = (clone $baseQuery)
            ->leftJoin('users', 'users.id', '=', 'mentoria2_ai_usage_logs.student_id')
            ->select(
                'mentoria2_ai_usage_logs.*',
                'users.name as student_name',
                'users.email as student_email'
            )
            ->orderByDesc('mentoria2_ai_usage_logs.created_at')
            ->limit(50)
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'student_id' => $log->student_id,
                    'student_name' => $log->student_name ?: 'Mentor / Sistema',
                    'student_email' => $log->student_email ?: 'admin@mentoria',
                    'feature' => $log->feature,
                    'feature_label' => self::FEATURE_LABELS[$log->feature] ?? ucfirst($log->feature),
                    'model' => $log->model,
                    'prompt_tokens' => (int) $log->prompt_tokens,
                    'completion_tokens' => (int) $log->completion_tokens,
                    'total_tokens' => (int) $log->total_tokens,
                    'cost_usd' => (float) $log->cost_usd,
                    'cost_brl' => (float) $log->cost_brl,
                    'metadata' => is_string($log->metadata) ? json_decode($log->metadata, true) : ($log->metadata ?? []),
                    'created_at' => Carbon::parse($log->created_at)->format('d/m/Y H:i:s'),
                ];
            });

        return [
            'totals' => [
                'total_requests' => (int) ($totals->total_requests ?? 0),
                'total_tokens' => (int) ($totals->total_tokens ?? 0),
                'total_prompt_tokens' => (int) ($totals->total_prompt_tokens ?? 0),
                'total_completion_tokens' => (int) ($totals->total_completion_tokens ?? 0),
                'total_cost_usd' => round((float) ($totals->total_cost_usd ?? 0), 4),
                'total_cost_brl' => round((float) ($totals->total_cost_brl ?? 0), 2),
                'total_students' => (int) ($totals->total_students ?? 0),
                'usd_exchange_rate' => self::USD_TO_BRL,
            ],
            'by_feature' => $byFeature,
            'students_ranking' => $studentsRanking,
            'recent_logs' => $recentLogs,
        ];
    }
}

