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
        $submission = DB::table('mentoria2_essay_submissions')->where('tenant_id', $tenantId)->where('id', $submissionId)->first();
        if (! $submission) {
            throw new \InvalidArgumentException('Submissão não encontrada.');
        }

        $essay = DB::table('mentoria2_essays')->where('tenant_id', $tenantId)->where('id', $submission->essay_id)->first();
        $topic = $essay ? $essay->prompt_theme : 'Tema dissertativo de concurso';

        return $this->evaluateContentWithAi($tenantId, (int) $submission->student_id, $topic, (string) $submission->content, 'dissertacao', $submissionId);
    }

    /**
     * Gera 3 propostas temáticas de redação contextualizadas por tipo de documento e banca.
     */
        public function isAiConfigured(int $tenantId): bool
    {
        if (! class_exists(\Plugins\AiMember\Models\AiMemberConnection::class)) {
            return false;
        }

        $conn = \Plugins\AiMember\Models\AiMemberConnection::forTenant($tenantId)->first();

        return (bool) ($conn && $conn->is_active && $conn->isConfigured());
    }

    public function generateThemes(int $tenantId, ?string $tipo = null, ?string $banca = null, ?string $contestId = null): array
    {
        $tipoDoc = strtolower(trim((string) $tipo)) ?: 'dissertacao';
        $bancaNome = strtoupper(trim((string) $banca)) ?: 'CEBRASPE';

        if (! $this->isAiConfigured($tenantId)) {
            return [
                'configured' => false,
                'ai_available' => false,
                'error' => 'unconfigured_ai',
                'message' => 'A Inteligência Artificial (Member IA) ainda não foi configurada pelo mentor neste ambiente. Solicite a configuração nas opções da plataforma.',
                'tipo' => $tipoDoc,
                'banca' => $bancaNome,
                'temas' => [],
            ];
        }

        $genreNames = [
            'dissertacao' => 'Dissertativo-Argumentativo',
            'oficio' => 'Redação Oficial - Padrão Ofício (Presidência da República)',
            'relatorio' => 'Relatório Técnico-Circunstanciado',
            'argumentacao' => 'Texto Argumentativo / Estudo de Caso',
            'memorando' => 'Redação Oficial - Memorando Interno',
            'parecer' => 'Parecer Técnico-Jurídico',
        ];
        $genre = $genreNames[$tipoDoc] ?? 'Dissertativo-Argumentativo';

        try {
            $client = new \Plugins\AiMember\Services\OpenRouterClient($tenantId);
            $prompt = "Você é um elaborador de questões e propostas discursivas para concursos públicos brasileiros.
Gere 3 propostas temáticas de redação contextualizadas, desafiadoras e no padrão da banca {$bancaNome} para o gênero textual {$genre}.
Cada proposta deve conter:
- title: título formal e chamativo da proposta
- prompt_theme: comando temático orientador da redação
- motivatingTexts: array com 2 a 3 pequenos textos motivadores informativos/legais
- criteria: array com 5 critérios oficiais de avaliação da banca

Retorne ESTRITAMENTE um objeto JSON no formato:
{
  \"temas\": [
    {
      \"title\": \"...\",
      \"prompt_theme\": \"...\",
      \"motivatingTexts\": [\"...\", \"...\"],
      \"criteria\": [\"...\", \"...\", \"...\", \"...\", \"...\"]
    }
  ]
}";

            $response = $client->chatCompletions([
                'model' => 'openai/gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => 'Você é um examinador experiente de bancas de concursos públicos. Responda única e estritamente com JSON válido.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'response_format' => ['type' => 'json_object'],
                'temperature' => 0.7,
                'max_tokens' => 1800,
            ]);

            $promptTokens = (int) ($response['usage']['prompt_tokens'] ?? 0);
            $completionTokens = (int) ($response['usage']['completion_tokens'] ?? 0);
            try {
                app(\Plugins\Mentoria2\Services\AiUsageService::class)->log(
                    $tenantId,
                    null,
                    null,
                    'redacao_theme',
                    'openai/gpt-4o-mini',
                    $promptTokens,
                    $completionTokens,
                    ['banca' => $bancaNome, 'tipo' => $genre]
                );
            } catch (\Throwable $e) {}

            $respContent = $response['choices'][0]['message']['content'] ?? '{}';
            $decoded = json_decode($respContent, true) ?: [];
            $rawTemas = $decoded['temas'] ?? [];

            $temas = [];
            foreach ($rawTemas as $t) {
                $temas[] = [
                    'id' => (string) Str::uuid(),
                    'title' => (string) ($t['title'] ?? 'Proposta Inédita de Redação'),
                    'prompt_theme' => (string) ($t['prompt_theme'] ?? ''),
                    'board' => $bancaNome,
                    'genre' => $genre,
                    'expectedLines' => ($tipoDoc === 'oficio' || $tipoDoc === 'memorando') ? '15 a 25 linhas' : '20 a 30 linhas',
                    'motivatingTexts' => is_array($t['motivatingTexts'] ?? null) ? $t['motivatingTexts'] : [
                        'Texto I: Referência contextual e panorama fático da questão.',
                        'Texto II: Aspectos jurídicos e doutrinários aplicáveis ao caso.'
                    ],
                    'criteria' => is_array($t['criteria'] ?? null) ? $t['criteria'] : [
                        'Estrutura e Adequação ao Gênero',
                        'Argumentação e Fundamentação Temática',
                        'Correção Gramatical e Norma Padrão',
                        'Coesão Textual e Conectivos',
                        'Proposta de Solução / Conclusão'
                    ]
                ];
            }

            if (empty($temas)) {
                throw new \RuntimeException('O provedor de IA não retornou propostas válidas.');
            }

            return [
                'configured' => true,
                'ai_available' => true,
                'source' => 'ai_member',
                'model' => 'openai/gpt-4o-mini',
                'tipo' => $tipoDoc,
                'banca' => $bancaNome,
                'genre' => $genre,
                'temas' => $temas,
            ];
        } catch (\Throwable $e) {
            return [
                'configured' => true,
                'ai_available' => false,
                'error' => 'ai_error',
                'message' => 'Falha ao gerar temas com o Member IA: ' . $e->getMessage(),
                'tipo' => $tipoDoc,
                'banca' => $bancaNome,
                'genre' => $genre,
                'temas' => [],
            ];
        }
    }

    /**
     * Avaliação analítica com IA com espelho oficial por competências,
     * pontos fortes, pontos a melhorar e versão aprimorada da redação.
     */
    public function evaluateContentWithAi(
        int $tenantId,
        int $studentId,
        string $tema,
        string $texto,
        string $tipo = 'dissertacao',
        ?string $submissionId = null
    ): array {
        if (! $this->isAiConfigured($tenantId)) {
            throw new \DomainException('A correção analítica por IA está indisponível porque o Member IA não foi configurado pelo mentor.');
        }

        $cleanText = trim($texto);
        $words = preg_split('/\s+/', $cleanText, -1, PREG_SPLIT_NO_EMPTY);
        $wordCount = count($words);
        $linesCount = max(1, count(explode("\n", $cleanText)));

        try {
            $client = new \Plugins\AiMember\Services\OpenRouterClient($tenantId);
            $prompt = "Você é um examinador rigoroso de concursos públicos brasileiros. Avalie o texto do candidato com base no tema e gênero textual indicados.

Tema: \"{$tema}\"
Gênero Textual: \"{$tipo}\"
Extensão: {$wordCount} palavras em {$linesCount} linhas.

Texto do Candidato:
\"\"\"
{$cleanText}
\"\"\"

Critérios de avaliação (de 0.0 a 10.0 cada):
1. Estrutura e Adequação ao Gênero
2. Argumentação e Fundamentação
3. Correção Gramatical e Norma Padrão
4. Coesão Textual e Conectivos
5. Proposta de Solução / Conclusão

Retorne ESTRITAMENTE um objeto JSON no formato:
{
  \"nota_final\": 8.5,
  \"status\": \"Excelente · Padrão de Aprovação\",
  \"criterios\": [
    {\"name\": \"1. Estrutura e Adequação ao Gênero\", \"score\": 8.5, \"max\": 10, \"feedback\": \"...\"},
    {\"name\": \"2. Argumentação e Fundamentação\", \"score\": 8.0, \"max\": 10, \"feedback\": \"...\"},
    {\"name\": \"3. Correção Gramatical e Norma Padrão\", \"score\": 9.0, \"max\": 10, \"feedback\": \"...\"},
    {\"name\": \"4. Coesão Textual e Conectivos\", \"score\": 8.5, \"max\": 10, \"feedback\": \"...\"},
    {\"name\": \"5. Proposta de Solução / Conclusão\", \"score\": 8.5, \"max\": 10, \"feedback\": \"...\"}
  ],
  \"pontos_fortes\": [\"...\", \"...\", \"...\"],
  \"pontos_melhoria\": [\"...\", \"...\", \"...\"],
  \"parecer\": \"...\",
  \"versao_corrigida\": \"...\"
}";

            $response = $client->chatCompletions([
                'model' => 'openai/gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => 'Você é um examinador experiente de bancas de concursos públicos. Responda única e estritamente com JSON válido.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'response_format' => ['type' => 'json_object'],
                'temperature' => 0.5,
                'max_tokens' => 2000,
            ]);

            $promptTokens = (int) ($response['usage']['prompt_tokens'] ?? 0);
            $completionTokens = (int) ($response['usage']['completion_tokens'] ?? 0);
            try {
                app(\Plugins\Mentoria2\Services\AiUsageService::class)->log(
                    $tenantId,
                    null,
                    null,
                    'redacao_theme',
                    'openai/gpt-4o-mini',
                    $promptTokens,
                    $completionTokens,
                    ['banca' => $bancaNome, 'tipo' => $genre]
                );
            } catch (\Throwable $e) {}

            $respContent = $response['choices'][0]['message']['content'] ?? '{}';
            $decoded = json_decode($respContent, true);
            if (! is_array($decoded) || empty($decoded['criterios'])) {
                throw new \RuntimeException('Resposta da IA em formato inválido.');
            }

            $promptTokens = (int) ($response['usage']['prompt_tokens'] ?? 0);
            $completionTokens = (int) ($response['usage']['completion_tokens'] ?? 0);
            try {
                app(\Plugins\Mentoria2\Services\AiUsageService::class)->log(
                    $tenantId,
                    $studentId,
                    null,
                    'redacao_correction',
                    'openai/gpt-4o-mini',
                    $promptTokens,
                    $completionTokens,
                    ['tema' => \Illuminate\Support\Str::limit($tema, 80)]
                );
            } catch (\Throwable $e) {}

            $notaFinal = round((float) ($decoded['nota_final'] ?? 8.0), 1);
            $status = $decoded['status'] ?? ($notaFinal >= 8.5 ? 'Excelente · Padrão de Aprovação' : ($notaFinal >= 7.0 ? 'Bom · Competitivo' : 'Necessita de Ajustes'));
            $criteriaList = $decoded['criterios'];
            $pontosFortes = $decoded['pontos_fortes'] ?? ['Boa adequação temática.', 'Clareza na exposição das ideias.'];
            $pontosMelhoria = $decoded['pontos_melhoria'] ?? ['Aprofundar referências normativas e legislativas.'];
            $parecer = $decoded['parecer'] ?? 'Texto coerente e bem estruturado.';
            $versaoCorrigida = $decoded['versao_corrigida'] ?? $cleanText;

            $criteriaScores = [];
            foreach ($criteriaList as $idx => $crit) {
                $criteriaScores['criterio' . ($idx + 1)] = (float) ($crit['score'] ?? 8.0);
            }
        } catch (\Throwable $e) {
            throw new \RuntimeException('Erro ao processar correção com o Member IA: ' . $e->getMessage());
        }

        // Salva na tabela mentoria2_essay_submissions se já temos o submissionId ou cria um
        $id = $submissionId ?: (string) Str::uuid();

        // Encontra ou cria uma proposta de redação genérica no banco para associar
        $existingEssay = DB::table('mentoria2_essays')->where('tenant_id', $tenantId)->first();
        $essayId = $existingEssay ? $existingEssay->id : (string) Str::uuid();
        if (! $existingEssay) {
            DB::table('mentoria2_essays')->insert([
                'id' => $essayId,
                'tenant_id' => $tenantId,
                'title' => $tema,
                'prompt_theme' => $tema,
                'motivating_texts' => json_encode(['Texto motivador padrão da oficina de redação']),
                'criteria' => json_encode($criteriaList),
                'min_words' => 150,
                'max_words' => 600,
                'max_score' => 10.0,
                'created_by' => $studentId,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        DB::table('mentoria2_essay_submissions')->updateOrInsert(
            ['id' => $id],
            [
                'tenant_id' => $tenantId,
                'student_id' => $studentId,
                'essay_id' => $essayId,
                'content' => $cleanText,
                'word_count' => $wordCount,
                'status' => 'graded',
                'total_score' => $notaFinal,
                'criteria_scores' => json_encode($criteriaScores, JSON_UNESCAPED_UNICODE),
                'feedback' => $parecer,
                'corrected_by' => 'ia',
                'submitted_at' => now(),
                'graded_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );

        return [
            'id' => $id,
            'score' => $notaFinal,
            'nota_final' => $notaFinal,
            'status' => $status,
            'word_count' => $wordCount,
            'wordsCount' => $wordCount,
            'linesCount' => $linesCount,
            'parecer' => $parecer,
            'aiFeedback' => $parecer,
            'criteria' => $criteriaList,
            'notas' => $criteriaScores,
            'criterios' => array_column($criteriaList, 'name'),
            'pontos_fortes' => $pontosFortes,
            'pontos_melhoria' => $pontosMelhoria,
            'versao_corrigida' => $versaoCorrigida,
            'created_at' => now()->toIso8601String(),
        ];
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

    public function transcribeHandwrittenPhoto(int $tenantId, ?int $studentId, string $fotoBase64): string
    {
        if (! $this->isAiConfigured($tenantId)) {
            throw new \RuntimeException('Member IA não configurado para processamento de imagem.');
        }

        try {
            $client = new \Plugins\AiMember\Services\OpenRouterClient($tenantId);
            $imageUri = str_starts_with($fotoBase64, 'data:image/')
                ? $fotoBase64
                : 'data:image/jpeg;base64,'.$fotoBase64;

            $response = $client->chatCompletions([
                'model' => 'openai/gpt-4o-mini',
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => 'Você é um transcritor profissional especializado em folhas de redação manuscritas de concursos públicos. Transcreva fielmente todo o texto manuscrito presente na imagem, preservando parágrafos, quebras de linha e ortografia do candidato. Retorne EXCLUSIVAMENTE o texto transcrito, sem aspas, comentários, introduções ou marcadores markdown.',
                    ],
                    [
                        'role' => 'user',
                        'content' => [
                            ['type' => 'text', 'text' => 'Transcreva o texto manuscrito contido nesta imagem de redação:'],
                            ['type' => 'image_url', 'image_url' => ['url' => $imageUri]],
                        ],
                    ],
                ],
                'max_tokens' => 2000,
                'temperature' => 0.1,
            ]);

            $transcribed = trim((string) ($response['choices'][0]['message']['content'] ?? ''));
            if ($transcribed === '') {
                throw new \RuntimeException('Não foi possível extrair texto legível da imagem enviada.');
            }

            $promptTokens = (int) ($response['usage']['prompt_tokens'] ?? 0);
            $completionTokens = (int) ($response['usage']['completion_tokens'] ?? 0);
            try {
                app(\Plugins\Mentoria2\Services\AiUsageService::class)->log(
                    $tenantId,
                    $studentId,
                    null,
                    'redacao_ocr',
                    'openai/gpt-4o-mini',
                    $promptTokens,
                    $completionTokens,
                    ['chars_count' => mb_strlen($transcribed)]
                );
            } catch (\Throwable $e) {}

            return $transcribed;
        } catch (\Throwable $e) {
            throw new \RuntimeException('Falha no OCR com IA: ' . $e->getMessage());
        }
    }
}


