<?php

namespace Plugins\Mentoria\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MentoriaAiService
{
    /**
     * Consulta dados e métricas do aluno para alimentar o assistente de IA.
     *
     * @return array<string, mixed>
     */
    public function consultarDados(
        int $studentId,
        int $tenantId,
        string $tipo,
        ?string $data = null,
        ?string $periodo = null,
        ?string $disciplina = null,
    ): array {
        return match (strtolower(trim($tipo))) {
            'questoes', 'exercicios' => $this->consultarQuestoes($studentId, $tenantId, $data, $periodo, $disciplina),
            'edital', 'progresso' => $this->consultarEdital($studentId, $tenantId),
            'cronograma', 'agenda', 'tarefas' => $this->consultarCronograma($studentId, $tenantId, $data),
            'radar', 'deficiencias', 'desempenho' => $this->consultarRadar($studentId, $tenantId),
            default => $this->consultarGeral($studentId, $tenantId),
        };
    }

    /**
     * Consulta estatísticas de questões resolvidas pelo aluno.
     *
     * @return array<string, mixed>
     */
    public function consultarQuestoes(
        int $studentId,
        int $tenantId,
        ?string $data = null,
        ?string $periodo = null,
        ?string $disciplina = null,
    ): array {
        $query = DB::table('mentoria_question_logs as l')
            ->where('l.tenant_id', $tenantId)
            ->where('l.student_id', $studentId)
            ->where('l.is_active', true);

        $periodoLabel = 'Total acumulado';

        // Tratamento de data específica ("hoje", "ontem", "YYYY-MM-DD")
        $targetDate = $this->parseFriendlyDate($data);
        if ($targetDate !== null) {
            $query->whereDate('l.recorded_at', $targetDate);
            $periodoLabel = 'Dia ' . Carbon::parse($targetDate)->format('d/m/Y');
        } elseif ($periodo !== null) {
            $normalizedPeriodo = strtolower(trim($periodo));
            if (in_array($normalizedPeriodo, ['ultimos_7_dias', '7_dias', 'semana', '7d'], true)) {
                $query->where('l.recorded_at', '>=', now()->subDays(7)->startOfDay());
                $periodoLabel = 'Últimos 7 dias';
            } elseif (in_array($normalizedPeriodo, ['ultimos_30_dias', '30_dias', 'mes', '30d'], true)) {
                $query->where('l.recorded_at', '>=', now()->subDays(30)->startOfDay());
                $periodoLabel = 'Últimos 30 dias';
            } elseif (in_array($normalizedPeriodo, ['este_mes', 'mes_atual'], true)) {
                $query->where('l.recorded_at', '>=', now()->startOfMonth());
                $periodoLabel = 'Mês atual (' . now()->translatedFormat('F/Y') . ')';
            }
        }

        // Filtro por disciplina se informada
        if ($disciplina !== null && trim($disciplina) !== '') {
            $query->join('mentoria_subjects as s', 's.id', '=', 'l.subject_id')
                ->whereRaw('LOWER(s.name) LIKE ?', ['%' . mb_strtolower(trim($disciplina), 'UTF-8') . '%']);
            $periodoLabel .= " (Matéria: {$disciplina})";
        }

        $totais = (clone $query)->selectRaw('
            COALESCE(SUM(l.solved), 0) as total_solved,
            COALESCE(SUM(l.correct), 0) as total_correct,
            COALESCE(SUM(l.wrong), 0) as total_wrong
        ')->first();

        $solved = (int) ($totais->total_solved ?? 0);
        $correct = (int) ($totais->total_correct ?? 0);
        $wrong = (int) ($totais->total_wrong ?? 0);
        $taxa = $solved > 0 ? round(($correct / $solved) * 100, 1) : 0;

        // Breakdown por matéria caso não tenha filtrado matéria única
        $disciplinasBreakdown = [];
        if ($disciplina === null || trim($disciplina) === '') {
            $disciplinasBreakdown = DB::table('mentoria_question_logs as l')
                ->join('mentoria_subjects as s', 's.id', '=', 'l.subject_id')
                ->where('l.tenant_id', $tenantId)
                ->where('l.student_id', $studentId)
                ->where('l.is_active', true)
                ->when($targetDate !== null, fn ($q) => $q->whereDate('l.recorded_at', $targetDate))
                ->groupBy('s.id', 's.name')
                ->selectRaw('s.name as disciplina, SUM(l.solved) as resolvidas, SUM(l.correct) as acertos, SUM(l.wrong) as erros')
                ->orderByDesc('resolvidas')
                ->limit(6)
                ->get()
                ->map(fn ($row) => [
                    'disciplina' => $row->disciplina,
                    'resolvidas' => (int) $row->resolvidas,
                    'acertos' => (int) $row->acertos,
                    'erros' => (int) $row->erros,
                    'taxa' => (int) $row->resolvidas > 0 ? round(((int) $row->acertos / (int) $row->resolvidas) * 100, 1) . '%' : '0%',
                ])
                ->all();
        }

        return [
            'tipo' => 'questoes',
            'periodo' => $periodoLabel,
            'total_resolvidas' => $solved,
            'total_acertos' => $correct,
            'total_erros' => $wrong,
            'aproveitamento' => $taxa . '%',
            'resumo_por_disciplina' => $disciplinasBreakdown,
            'status' => $solved > 0 ? 'Dados encontrados com sucesso.' : 'Nenhuma questão registrada neste período.',
        ];
    }

    /**
     * Consulta o progresso do aluno no edital verticalizado.
     *
     * @return array<string, mixed>
     */
    public function consultarEdital(int $studentId, int $tenantId): array
    {
        // Encontra o edital vinculado ao aluno
        $studentEdict = DB::table('mentoria_student_edicts as se')
            ->join('mentoria_edicts as e', 'e.id', '=', 'se.edict_id')
            ->leftJoin('mentoria_contests as c', 'c.id', '=', 'e.contest_id')
            ->where('se.tenant_id', $tenantId)
            ->where('se.student_id', $studentId)
            ->where('se.is_active', true)
            ->select('e.id as edict_id', 'e.name as edict_name', 'c.name as contest_name', 'c.board as banca', 'c.exam_date')
            ->first();

        if (! $studentEdict) {
            return [
                'tipo' => 'edital',
                'mensagem' => 'O aluno ainda não possui um edital verticalizado vinculado.',
            ];
        }

        $edictId = $studentEdict->edict_id;

        // Total de tópicos no edital
        $allTopics = DB::table('mentoria_topics as t')
            ->join('mentoria_subjects as s', 's.id', '=', 't.subject_id')
            ->where('s.edict_id', $edictId)
            ->where('t.is_active', true)
            ->where('s.is_active', true)
            ->select('t.id as topic_id', 't.name as topic_name', 's.id as subject_id', 's.name as subject_name')
            ->get();

        $totalTopics = $allTopics->count();

        // Tópicos estudados pelo aluno
        $studiedTopicIds = DB::table('mentoria_edict_progress')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('item_type', 'topic')
            ->where('studied', true)
            ->pluck('item_id')
            ->all();

        $studiedCount = count(array_intersect($allTopics->pluck('topic_id')->all(), $studiedTopicIds));
        $percentual = $totalTopics > 0 ? round(($studiedCount / $totalTopics) * 100, 1) : 0;

        // Resumo por matéria
        $porMateria = $allTopics->groupBy('subject_name')->map(function ($topics, $subjectName) use ($studiedTopicIds) {
            $totalMateria = $topics->count();
            $estudadosMateria = $topics->whereIn('topic_id', $studiedTopicIds)->count();
            $pendentes = $totalMateria - $estudadosMateria;
            $taxaMateria = $totalMateria > 0 ? round(($estudadosMateria / $totalMateria) * 100, 1) : 0;

            return [
                'disciplina' => $subjectName,
                'total_topicos' => $totalMateria,
                'estudados' => $estudadosMateria,
                'pendentes' => $pendentes,
                'percentual' => $taxaMateria . '%',
            ];
        })->values()->all();

        return [
            'tipo' => 'edital',
            'concurso' => $studentEdict->contest_name ?: $studentEdict->edict_name,
            'banca' => $studentEdict->banca,
            'data_prova' => $studentEdict->exam_date ? Carbon::parse($studentEdict->exam_date)->format('d/m/Y') : null,
            'total_topicos' => $totalTopics,
            'topicos_concluidos' => $studiedCount,
            'topicos_pendentes' => max(0, $totalTopics - $studiedCount),
            'percentual_concluido' => $percentual . '%',
            'materias' => $porMateria,
        ];
    }

    /**
     * Consulta os itens agendados no cronograma do aluno.
     *
     * @return array<string, mixed>
     */
    public function consultarCronograma(int $studentId, int $tenantId, ?string $data = null): array
    {
        $targetDate = $this->parseFriendlyDate($data) ?? now()->toDateString();

        $schedule = DB::table('mentoria_schedules')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->where('is_active', true)
            ->first();

        if (! $schedule) {
            return [
                'tipo' => 'cronograma',
                'mensagem' => 'Nenhum cronograma de estudos ativo encontrado para este aluno.',
            ];
        }

        $items = DB::table('mentoria_schedule_items as si')
            ->leftJoin('mentoria_subjects as s', 's.id', '=', 'si.subject_id')
            ->leftJoin('mentoria_topics as t', 't.id', '=', 'si.topic_id')
            ->where('si.schedule_id', $schedule->id)
            ->where('si.tenant_id', $tenantId)
            ->whereDate('si.planned_date', $targetDate)
            ->select(
                'si.id',
                'si.status',
                'si.duration_minutes',
                's.name as disciplina',
                't.name as topico'
            )
            ->orderBy('si.position')
            ->get()
            ->map(fn ($item) => [
                'disciplina' => $item->disciplina ?? 'Estudo geral',
                'topico' => $item->topico,
                'duracao_prevista_minutos' => (int) $item->duration_minutes,
                'status' => $item->status, // pendente / concluido
            ])
            ->all();

        return [
            'tipo' => 'cronograma',
            'data_consultada' => Carbon::parse($targetDate)->format('d/m/Y'),
            'total_atividades' => count($items),
            'atividades' => $items,
            'mensagem' => count($items) > 0 ? null : 'Nenhuma atividade agendada especificamente para este dia.',
        ];
    }

    /**
     * Consulta o radar de deficiências (disciplinas mais fracas e mais fortes).
     *
     * @return array<string, mixed>
     */
    public function consultarRadar(int $studentId, int $tenantId): array
    {
        $desempenho = DB::table('mentoria_question_logs as l')
            ->join('mentoria_subjects as s', 's.id', '=', 'l.subject_id')
            ->where('l.tenant_id', $tenantId)
            ->where('l.student_id', $studentId)
            ->where('l.is_active', true)
            ->groupBy('s.id', 's.name')
            ->selectRaw('s.name as disciplina, SUM(l.solved) as resolvidas, SUM(l.correct) as acertos')
            ->havingRaw('SUM(l.solved) >= 5')
            ->get()
            ->map(function ($row) {
                $taxa = round(((int) $row->acertos / (int) $row->resolvidas) * 100, 1);
                return [
                    'disciplina' => $row->disciplina,
                    'resolvidas' => (int) $row->resolvidas,
                    'taxa' => $taxa,
                ];
            });

        $pontosFracos = $desempenho->sortBy('taxa')->take(3)->values()->all();
        $pontosFortes = $desempenho->sortByDesc('taxa')->take(3)->values()->all();

        return [
            'tipo' => 'radar',
            'disciplinas_mais_fracas' => $pontosFracos,
            'disciplinas_mais_fortes' => $pontosFortes,
            'orientacao' => 'Recomende ao aluno focar revisões e baterias de questões nas disciplinas mais fracas.',
        ];
    }

    /**
     * Visão consolidada para quando o aluno pedir um resumo geral.
     *
     * @return array<string, mixed>
     */
    public function consultarGeral(int $studentId, int $tenantId): array
    {
        $edital = $this->consultarEdital($studentId, $tenantId);
        $questoesHoje = $this->consultarQuestoes($studentId, $tenantId, 'hoje');
        $questoesSemana = $this->consultarQuestoes($studentId, $tenantId, null, 'ultimos_7_dias');
        $cronogramaHoje = $this->consultarCronograma($studentId, $tenantId, 'hoje');

        return [
            'tipo' => 'visao_geral',
            'concurso' => $edital['concurso'] ?? 'Concurso em preparação',
            'progresso_edital' => $edital['percentual_concluido'] ?? '0%',
            'questoes_hoje' => $questoesHoje['total_resolvidas'] ?? 0,
            'aproveitamento_hoje' => $questoesHoje['aproveitamento'] ?? '0%',
            'questoes_ultimos_7_dias' => $questoesSemana['total_resolvidas'] ?? 0,
            'aproveitamento_ultimos_7_dias' => $questoesSemana['aproveitamento'] ?? '0%',
            'tarefas_agendadas_hoje' => $cronogramaHoje['total_atividades'] ?? 0,
        ];
    }

    /**
     * Interpreta termos de data como "hoje", "ontem" ou strings YYYY-MM-DD.
     */
    private function parseFriendlyDate(?string $value): ?string
    {
        if ($value === null || trim($value) === '') {
            return null;
        }

        $normalized = mb_strtolower(trim($value));

        if ($normalized === 'hoje' || $normalized === 'today') {
            return now()->toDateString();
        }

        if ($normalized === 'ontem' || $normalized === 'yesterday') {
            return now()->subDay()->toDateString();
        }

        try {
            return Carbon::parse($value)->toDateString();
        } catch (\Throwable) {
            return null;
        }
    }
}

