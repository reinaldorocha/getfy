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
                'description' => 'Gere questões no estilo Cebraspe ou Múltipla Escolha com gabarito justificado.',
                'prompt' => <<<'PROMPT'
Gere questões inéditas para o concurso informado com alto rigor técnico. Retorne APENAS um JSON no formato:
{
  "questions": [
    {
      "subject": "Direito Constitucional",
      "topic": "Direitos e Garantias Fundamentais",
      "type": "multipla_escolha",
      "prompt": "Texto do enunciado da questão...",
      "alternatives": ["A) ...", "B) ...", "C) ...", "D) ...", "E) ..."],
      "correct_answer": "A",
      "explanation": "Comentário detalhado justificando a alternativa correta e apontando o erro dos distratores."
    }
  ]
}
Assunto e banca:
[INFORME A MATÉRIA, BANCA E CARGO AQUI]
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
}

