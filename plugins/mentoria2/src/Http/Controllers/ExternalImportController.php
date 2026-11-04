<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\JsonImportService;

class ExternalImportController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly JsonImportService $importService,
    ) {}

    public function prompts(): JsonResponse
    {
        $prompts = [
            'edital' => [
                'title' => 'Organização de Edital Verticalizado',
                'description' => 'Cole o texto do conteúdo programático do edital em PDF nesta instrução para obter o JSON hierárquico.',
                'prompt' => <<<'PROMPT'
Você é um especialista em editais de concursos públicos. Analise o conteúdo programático a seguir e retorne APENAS um JSON válido no formato:
{
  "contest": {
    "name": "Nome do Concurso (Ex: TJ-SP - Escrevente Técnico)",
    "organization": "Órgão (Ex: Tribunal de Justiça de SP)",
    "board": "Banca Examinadora (Ex: Vunesp)",
    "role": "Cargo (Ex: Escrevente)"
  },
  "subjects": [
    {
      "name": "Nome da Disciplina",
      "weight": 1.0,
      "relevance": 3,
      "topics": [
        {
          "name": "Nome do Tópico",
          "weight": 1.0,
          "subtopics": [
            "Subtópico 1",
            "Subtópico 2"
          ]
        }
      ]
    }
  ]
}
Não inclua comentários, explicações ou blocos markdown fora do JSON.
Conteúdo Programático:
[COLE O CONTEÚDO DO EDITAL AQUI]
PROMPT,
            ],
            'questions' => [
                'title' => 'Geração de Questões Inéditas com Comentários',
                'description' => 'Gere questões no estilo Cebraspe ou Múltipla Escolha com gabarito justificado e hierarquia de matéria macro e lei/assunto.',
                'prompt' => <<<'PROMPT'
Crie questões de concurso no formato JSON estritamente válido.
Responda APENAS com JSON puro, sem markdown ou texto externo.

REGRAS DE CLASSIFICAÇÃO OBRIGATÓRIAS:
1. Em "subject" (disciplina), utilize a MATÉRIA MACRO (Ex.: "Legislação", "Língua Portuguesa", "Matemática", "Direito Constitucional", "Direito Penal", "Informática").
2. Em "topic" (assunto), utilize o NOME DA LEI ESPECÍFICA ou TÓPICO DO EDITAL (Ex.: "Lei de Execução Penal (LEP - Lei 7.210/1984)", "Código de Trânsito Brasileiro", "Crase", "Concordância Verbal").
3. Em múltipla escolha, escreva o texto das alternativas sem prefixos de letras como A), B), pois o sistema os gera automaticamente.
4. "correct_answer" deve conter somente a letra da alternativa correta (ou "Certo"/"Errado" para Cebraspe).

Retorne APENAS o JSON no formato:
{
  "questions": [
    {
      "subject": "Legislação",
      "topic": "Lei de Execução Penal (LEP - Lei 7.210/1984)",
      "type": "multipla_escolha",
      "prompt": "Sobre os direitos individuais e benefícios da execução penal, assinale a afirmativa correta:",
      "alternatives": [
        "É assegurado o direito à saída temporária sem vigilância direta nos casos legais.",
        "O trabalho do preso está sujeito ao regime da Consolidação das Leis do Trabalho.",
        "A remição da pena por estudo restringe-se ao ensino fundamental.",
        "A falta grave interrompe automaticamente o tempo para livramento condicional."
      ],
      "correct_answer": "A",
      "explanation": "Art. 122 da LEP (Lei nº 7.210/84): Os condenados que cumprem pena em regime semiaberto poderão obter autorização para saída temporária sem vigilância direta nos casos previstos em lei."
    }
  ]
}

Assunto, banca e conteúdo-base:
[INFORME A MATÉRIA, NOME DA LEI/ASSUNTO E BANCA AQUI]
PROMPT,
            ],
            'flashcards' => [
                'title' => 'Flashcards de Alta Retenção Mnemônica',
                'description' => 'Gere pares Frente/Verso ideais para revisão espaçada rápida.',
                'prompt' => <<<'PROMPT'
Crie flashcards focados nos pontos mais cobrados e pegadinhas clássicas da matéria. Retorne APENAS um JSON:
{
  "deck_name": "Nome do Baralho",
  "flashcards": [
    {
      "front": "Pergunta direta, conceito ou lacuna...",
      "back": "Resposta sucinta com mnemônico explicativo...",
      "hint": "Dica mnemônica opcional"
    }
  ]
}
Tópico:
[INFORME O TÓPICO AQUI]
PROMPT,
            ],
        ];

        return response()->json([
            'prompts' => $prompts,
        ]);
    }

    public function validateJson(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'type' => 'required|string|in:edital,questions,flashcards',
            'json' => 'required',
        ]);

        $res = $this->importService->validatePayload($validated['type'], $validated['json']);

        return response()->json($res);
    }

    public function importJson(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        $validated = $request->validate([
            'type' => 'required|string|in:edital,questions,flashcards',
            'json' => 'required',
            'contest_id' => 'nullable|string',
            'new_contest_name' => 'nullable|string',
            'role' => 'nullable|string',
            'organization' => 'nullable|string',
            'board' => 'nullable|string',
            'targets' => 'nullable|array',
        ]);

        $data = is_string($validated['json']) ? json_decode($validated['json'], true) : $validated['json'];
        if (is_array($data)) {
            if (! empty($validated['new_contest_name'])) {
                $data['new_contest_name'] = $validated['new_contest_name'];
            }
            if (! empty($validated['role'])) {
                $data['role'] = $validated['role'];
            }
            if (! empty($validated['organization'])) {
                $data['organization'] = $validated['organization'];
            }
            if (! empty($validated['board'])) {
                $data['board'] = $validated['board'];
            }
            if (! empty($validated['targets'])) {
                $data['targets'] = $validated['targets'];
            }
        }
        $contestId = ! empty($validated['contest_id']) ? $validated['contest_id'] : null;
        $targets = $validated['targets'] ?? ($data['targets'] ?? null);

        $res = $this->importService->importPayload(
            $tenantId,
            $request->user(),
            $validated['type'],
            $data,
            $contestId,
            $targets
        );

        return response()->json($res);
    }

    public function extractPdfText(Request $request): JsonResponse
    {
        $request->validate([
            'pdf_file' => 'required|file|mimes:pdf|max:25600',
        ]);

        $pdfFile = $request->file('pdf_file');
        $pdfPath = $pdfFile->getRealPath();
        $text = $this->extractTextFromPdf($pdfPath);

        if (empty($text) || mb_strlen($text) < 15) {
            return response()->json([
                'ok' => false,
                'message' => 'Não foi possível extrair texto do PDF. O arquivo pode ser uma imagem escaneada sem camada de texto pesquisável.',
            ], 422);
        }

        return response()->json([
            'ok' => true,
            'text' => $text,
            'length' => mb_strlen($text),
            'text_length' => mb_strlen($text),
            'text_snippet' => mb_substr($text, 0, 500),
            'filename' => $pdfFile->getClientOriginalName(),
        ]);
    }

    public function extractWithAi(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $essayService = app(\Plugins\Mentoria2\Services\EssayService::class);

        if (! $essayService->isAiConfigured($tenantId)) {
            return response()->json([
                'ok' => false,
                'error' => 'unconfigured_ai',
                'message' => 'O Member IA não está configurado. Configure a chave de API nas configurações do sistema para usar o extrator de editais com IA.',
            ], 422);
        }

        $validated = $request->validate([
            'raw_text' => 'nullable|string',
            'pdf_file' => 'nullable|file|mimes:pdf|max:25600',
            'contest_name' => 'nullable|string|max:255',
            'board' => 'nullable|string|max:100',
            'role' => 'nullable|string|max:150',
        ]);

        $rawText = trim((string) ($validated['raw_text'] ?? ''));

        if ($request->hasFile('pdf_file') && $request->file('pdf_file')->isValid()) {
            $pdfFile = $request->file('pdf_file');
            $extractedFromPdf = $this->extractTextFromPdf($pdfFile->getRealPath());
            if (! empty($extractedFromPdf)) {
                $rawText = $extractedFromPdf;
            }
        }

        if (mb_strlen($rawText) < 20) {
            return response()->json([
                'ok' => false,
                'message' => 'O conteúdo do edital não possui texto suficiente (mínimo de 20 caracteres). Envie um PDF com texto legível ou cole o conteúdo programático.',
            ], 422);
        }

        $contestName = $validated['contest_name'] ?? '';
        $board = $validated['board'] ?? '';
        $role = $validated['role'] ?? '';

        $prompt = "Você é um especialista em estruturação de editais de concursos públicos brasileiros.
Analise o conteúdo programático do edital fornecido a seguir e estruture-o em um formato JSON verticalizado e hierárquico com disciplinas, tópicos e subtópicos.
Retorne ESTRITAMENTE um objeto JSON válido no formato:
{
  \"contest\": {
    \"name\": " . json_encode($contestName ?: 'Concurso Público') . ",
    \"organization\": \"Órgão Competente\",
    \"board\": " . json_encode($board ?: 'Banca Examinadora') . ",
    \"role\": " . json_encode($role ?: 'Cargo Efetivo') . "
  },
  \"subjects\": [
    {
      \"name\": \"Nome da Disciplina\",
      \"weight\": 1.0,
      \"relevance\": 3,
      \"topics\": [
        {
          \"name\": \"Nome do Tópico\",
          \"weight\": 1.0,
          \"subtopics\": [
            \"Subtópico 1\",
            \"Subtópico 2\"
          ]
        }
      ]
    }
  ]
}
Não inclua nenhum texto, explicação ou markdown fora do JSON.

Conteúdo Programático do Edital:
" . mb_substr($rawText, 0, 16000);

        try {
            $client = new \Plugins\AiMember\Services\OpenRouterClient($tenantId);
            $response = $client->chatCompletions([
                'model' => 'openai/gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => 'Você é um extrator estruturado de editais de concurso. Retorne estritamente um JSON no formato solicitado.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'response_format' => ['type' => 'json_object'],
                'temperature' => 0.2,
                'max_tokens' => 3500,
            ]);

            $respContent = $response['choices'][0]['message']['content'] ?? '{}';
            $decoded = json_decode($respContent, true);

            if (! is_array($decoded) || empty($decoded['subjects'])) {
                throw new \RuntimeException('Não foi possível estruturar disciplinas no texto do edital fornecido.');
            }

            $promptTokens = (int) ($response['usage']['prompt_tokens'] ?? 0);
            $completionTokens = (int) ($response['usage']['completion_tokens'] ?? 0);
            try {
                app(\Plugins\Mentoria2\Services\AiUsageService::class)->log(
                    $tenantId,
                    null,
                    null,
                    'edital_import',
                    'openai/gpt-4o-mini',
                    $promptTokens,
                    $completionTokens,
                    ['contest_name' => $contestName ?: ($decoded['contest']['name'] ?? 'Edital IA'), 'subjects_count' => count($decoded['subjects'])]
                );
            } catch (\Throwable $e) {}

            return response()->json([
                'ok' => true,
                'data' => $decoded,
                'total_tokens' => $promptTokens + $completionTokens,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'ok' => false,
                'message' => 'Falha ao extrair edital com IA: ' . $e->getMessage(),
            ], 500);
        }
    }

    private function extractTextFromPdf(string $filePath): string
    {
        $scriptPath = base_path('scripts/extract-pdf.mjs');
        if (file_exists($scriptPath)) {
            $cmd = 'node ' . escapeshellarg($scriptPath) . ' ' . escapeshellarg($filePath) . ' 2>&1';
            $output = shell_exec($cmd);
            if ($output) {
                $lines = explode("\n", $output);
                $clean = array_filter($lines, function ($line) {
                    $trim = trim($line);
                    return ! str_starts_with($trim, 'Warning:') && ! str_starts_with($trim, 'ExperimentalWarning:') && ! str_starts_with($trim, '(node:');
                });
                $result = trim(implode("\n", $clean));
                if (mb_strlen($result) > 10) {
                    return $result;
                }
            }
        }

        return $this->extractTextFromPdfNative($filePath);
    }

    private function extractTextFromPdfNative(string $filePath): string
    {
        $content = @file_get_contents($filePath);
        if (! $content) {
            return '';
        }

        $text = '';
        if (preg_match_all('/stream[\r\n]+(.*?)[\r\n]+endstream/is', $content, $matches)) {
            foreach ($matches[1] as $stream) {
                $decompressed = @gzuncompress($stream);
                if (! $decompressed) {
                    $decompressed = @gzinflate($stream);
                }
                if ($decompressed) {
                    if (preg_match_all('/BT[\r\n]+(.*?)[\r\n]+ET/is', $decompressed, $btMatches)) {
                        foreach ($btMatches[1] as $bt) {
                            if (preg_match_all('/\((.*?)\)\s*T[jJ]/', $bt, $textMatches)) {
                                $text .= implode(' ', $textMatches[1]) . "\n";
                            }
                        }
                    }
                }
            }
        }

        return trim($text);
    }
}


