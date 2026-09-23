<?php

namespace Plugins\AiMember\Services;

use App\Models\Product;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Plugins\AiMember\Models\AiMemberAgent;
use Plugins\AiMember\Models\AiMemberKnowledgeChunk;

class LlmOrchestrator
{
    public function __construct(
        private readonly OpenRouterClient $client,
        private readonly IntentClassifier $classifier,
        private readonly RagRetriever $retriever,
        private readonly KnowledgeIndexer $indexer,
        private readonly ProductContextBuilder $productContext,
    ) {}

    /**
     * @param  array<int, array{role: string, content: string|array}>  $history
     * @param  array{image_base64?: string, image_mime?: string, audio_base64?: string, audio_mime?: string}  $attachments
     * @return array{content: string, intent: string, model: string, tokens_in: int, tokens_out: int}
     */
    public function respond(
        AiMemberAgent $agent,
        Product $product,
        string $userMessage,
        array $history = [],
        array $attachments = [],
        ?string $studentName = null,
        bool $isFirstMessage = false,
        ?int $studentId = null,
    ): array {
        $tenantId = (int) $agent->tenant_id;
        $client = $this->client->forTenant($tenantId);

        $hasImage = ! empty($attachments['image_base64']) && $agent->allow_image;
        $hasAudio = ! empty($attachments['audio_base64']) && $agent->allow_audio;

        if ($hasAudio) {
            try {
                $transcribed = $client->transcribe(
                    $attachments['audio_base64'],
                    $attachments['audio_mime'] ?? 'audio/webm',
                );
                if ($transcribed !== '') {
                    $userMessage = trim($userMessage."\n\n[Áudio transcrito]: ".$transcribed);
                }
            } catch (\Throwable) {
                // segue com mensagem original
            }
        }

        $intent = $this->classifier->classify($userMessage, $hasImage, $hasAudio, $tenantId);

        if ($intent === IntentClassifier::INTENT_OFF_TOPIC) {
            return [
                'content' => 'Desculpe, só posso ajudar com dúvidas sobre este curso e sua área de membros. Posso esclarecer algo sobre as aulas ou o conteúdo?',
                'intent' => $intent,
                'model' => 'template',
                'tokens_in' => 0,
                'tokens_out' => 0,
            ];
        }

        $context = '';
        if ($this->classifier->usesRag($intent)) {
            $cacheKey = 'ai_member:embed:'.md5($userMessage.':'.$agent->product_id);
            $queryEmbedding = Cache::remember($cacheKey, 60, fn () => $this->indexer->embedQuery($userMessage, $tenantId));
            $chunks = AiMemberKnowledgeChunk::query()
                ->where('product_id', $agent->product_id)
                ->whereNotNull('embedding')
                ->get();
            $results = $this->retriever->retrieve($chunks, $queryEmbedding);
            $context = $this->retriever->formatContext($results);
        }

        $isMentoria = DB::getSchemaBuilder()->hasTable('mentoria_products')
            && DB::table('mentoria_products')->where('product_id', $product->id)->exists();

        $systemPrompt = $this->buildSystemPrompt(
            $agent,
            $product,
            $context,
            $studentName,
            $isFirstMessage,
            $isMentoria,
        );
        $model = $this->classifier->modelForIntent($intent);
        $maxTokens = min(
            $agent->max_tokens,
            $this->classifier->maxTokensForIntent($intent),
        );

        $messages = [['role' => 'system', 'content' => $systemPrompt]];
        foreach ($history as $msg) {
            if (! empty($msg['role']) && isset($msg['content'])) {
                $messages[] = ['role' => $msg['role'], 'content' => $msg['content']];
            }
        }

        $userContent = $this->buildUserContent($userMessage, $hasImage ? $attachments : []);
        $messages[] = ['role' => 'user', 'content' => $userContent];

        $payload = [
            'model' => $model,
            'messages' => $messages,
            'max_tokens' => $maxTokens,
            'temperature' => (float) $agent->temperature,
        ];

        if ($isMentoria && $studentId && class_exists(\Plugins\Mentoria\Services\MentoriaAiService::class)) {
            $payload['tools'] = [
                [
                    'type' => 'function',
                    'function' => [
                        'name' => 'consultar_dados_mentoria',
                        'description' => 'Consulta histórico de questões (quantas fez, acertos, erros), progresso do edital verticalizado, cronograma de estudos ou radar de deficiências deste aluno.',
                        'parameters' => [
                            'type' => 'object',
                            'properties' => [
                                'tipo' => [
                                    'type' => 'string',
                                    'enum' => ['questoes', 'edital', 'cronograma', 'radar', 'geral'],
                                    'description' => 'Tipo da consulta: questoes, edital, cronograma, radar ou geral.',
                                ],
                                'data' => [
                                    'type' => 'string',
                                    'description' => 'Data específica no formato YYYY-MM-DD ou "hoje", "ontem".',
                                ],
                                'periodo' => [
                                    'type' => 'string',
                                    'enum' => ['ultimos_7_dias', 'ultimos_30_dias', 'este_mes'],
                                    'description' => 'Período caso a pergunta seja semanal, mensal, etc.',
                                ],
                                'disciplina' => [
                                    'type' => 'string',
                                    'description' => 'Nome da matéria caso o aluno filtre por uma disciplina.',
                                ],
                            ],
                            'required' => ['tipo'],
                        ],
                    ],
                ],
            ];
        }

        try {
            $response = $client->chatCompletions($payload);
        } catch (\Throwable $e) {
            if ($model !== 'openai/gpt-4o-mini') {
                $payload['model'] = 'openai/gpt-4o-mini';
                $response = $client->chatCompletions($payload);
                $model = 'openai/gpt-4o-mini';
            } else {
                throw $e;
            }
        }

        $choiceMessage = $response['choices'][0]['message'] ?? [];
        $usage = $response['usage'] ?? [];

        // Trata chamada de ferramenta (Function Calling / Tool)
        if (! empty($choiceMessage['tool_calls']) && $isMentoria && $studentId && class_exists(\Plugins\Mentoria\Services\MentoriaAiService::class)) {
            foreach ($choiceMessage['tool_calls'] as $toolCall) {
                if (($toolCall['function']['name'] ?? '') === 'consultar_dados_mentoria') {
                    $args = json_decode($toolCall['function']['arguments'] ?? '{}', true) ?: [];
                    $aiService = app(\Plugins\Mentoria\Services\MentoriaAiService::class);
                    $toolResult = $aiService->consultarDados(
                        $studentId,
                        $tenantId,
                        $args['tipo'] ?? 'geral',
                        $args['data'] ?? null,
                        $args['periodo'] ?? null,
                        $args['disciplina'] ?? null
                    );

                    $messages[] = $choiceMessage;
                    $messages[] = [
                        'role' => 'tool',
                        'tool_call_id' => $toolCall['id'],
                        'content' => json_encode($toolResult, JSON_UNESCAPED_UNICODE),
                    ];

                    $payload['messages'] = $messages;
                    unset($payload['tools']);

                    try {
                        $secondResponse = $client->chatCompletions($payload);
                        $response = $secondResponse;
                        $choiceMessage = $secondResponse['choices'][0]['message'] ?? [];
                        $usage2 = $secondResponse['usage'] ?? [];
                        $usage['prompt_tokens'] = ($usage['prompt_tokens'] ?? 0) + ($usage2['prompt_tokens'] ?? 0);
                        $usage['completion_tokens'] = ($usage['completion_tokens'] ?? 0) + ($usage2['completion_tokens'] ?? 0);
                    } catch (\Throwable) {
                        // caso a 2ª chamada falhe, mantém a primeira
                    }
                    break;
                }
            }
        }

        $content = trim((string) ($choiceMessage['content'] ?? ''));

        return [
            'content' => $content !== '' ? $content : 'Desculpe, não consegui gerar uma resposta. Tente reformular sua pergunta.',
            'intent' => $intent,
            'model' => $model,
            'tokens_in' => (int) ($usage['prompt_tokens'] ?? 0),
            'tokens_out' => (int) ($usage['completion_tokens'] ?? 0),
        ];
    }

    private function buildSystemPrompt(
        AiMemberAgent $agent,
        Product $product,
        string $context,
        ?string $studentName = null,
        bool $isFirstMessage = false,
        bool $isMentoria = false,
    ): string {
        $parts = [
            "Você é {$agent->name}, assistente de suporte e mentor na área de membros.",
            $agent->genderPronounHint(),
            $this->productContext->build($product),
        ];

        if ($isMentoria) {
            $parts[] = "Você é também o Mentor de Estudos de Concursos deste aluno.\n"
                . "- Você pode tirar qualquer dúvida teórica sobre as matérias do concurso de forma clara, didática, precisa e motivadora.\n"
                . "- Sempre que o aluno perguntar sobre o histórico pessoal ou métricas dele (ex: quantas questões resolveu em tal dia/período, progresso no edital verticalizado, o que tem agendado no cronograma ou pontos fracos no radar), USE OBRIGATORIAMENTE a ferramenta 'consultar_dados_mentoria' para obter os números exatos e reais do banco de dados antes de responder.\n"
                . "- Responda com base nos dados retornados pela ferramenta de forma encorajadora e precisa.";
        }

        if ($agent->personality) {
            $parts[] = "Personalidade: {$agent->personality}";
        }

        if ($agent->system_instructions) {
            $parts[] = "Instruções do produtor:\n{$agent->system_instructions}";
        }

        $parts[] = 'Responda em português do Brasil, de forma clara e objetiva. Se não souber, diga honestamente e sugira onde o aluno pode encontrar a informação no curso.';

        if ($isFirstMessage) {
            $name = trim((string) $studentName);
            $greeting = $name !== '' ? "Cumprimente {$name} pelo nome" : 'Cumprimente o aluno calorosamente';
            $parts[] = "Esta é a PRIMEIRA mensagem desta conversa. {$greeting}, apresente-se como {$agent->name} e convide-o a perguntar sobre o curso \"{$product->name}\" ou sobre sua rotina de estudos.";
        }

        if ($context !== '') {
            $parts[] = $context;
        }

        return implode("\n\n", $parts);
    }

    /**
     * @param  array{image_base64?: string, image_mime?: string}  $attachments
     * @return string|array<int, array<string, mixed>>
     */
    private function buildUserContent(string $text, array $attachments): string|array
    {
        if (empty($attachments['image_base64'])) {
            return $text;
        }

        $mime = $attachments['image_mime'] ?? 'image/jpeg';
        $parts = [
            ['type' => 'text', 'text' => $text !== '' ? $text : 'O aluno enviou esta imagem. Descreva o que vê e ajude com base no curso.'],
            [
                'type' => 'image_url',
                'image_url' => [
                    'url' => "data:{$mime};base64,{$attachments['image_base64']}",
                ],
            ],
        ];

        return $parts;
    }
}
