<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\JsonImportServiceInterface;

class JsonImportService implements JsonImportServiceInterface
{
    public function validatePayload(string $type, array|string $jsonContent): array
    {
        if (is_string($jsonContent)) {
            $cleaned = trim($jsonContent);
            if (str_starts_with($cleaned, '```')) {
                $cleaned = preg_replace('/^```(?:json)?\s*/i', '', $cleaned);
                $cleaned = preg_replace('/\s*```$/', '', $cleaned);
                $cleaned = trim($cleaned);
            }
            $data = json_decode($cleaned, true);
        } else {
            $data = $jsonContent;
        }

        if (! is_array($data)) {
            return [
                'valid' => false,
                'errors' => ['O JSON fornecido é inválido ou está malformatado.'],
                'summary' => null,
            ];
        }

        $errors = [];
        $count = 0;

        switch ($type) {
            case 'edital':
                $subjects = $data['subjects']
                    ?? $data['materias']
                    ?? $data['disciplinas']
                    ?? $data['grade']
                    ?? null;

                if ($subjects === null && is_array($data) && array_is_list($data)) {
                    $subjects = $data;
                }

                if (! is_array($subjects) || empty($subjects)) {
                    $errors[] = 'Estrutura deve conter uma lista de matérias ("subjects" ou "materias").';
                } else {
                    foreach ($subjects as $idx => $s) {
                        if (! is_array($s)) {
                            $errors[] = "Matéria no índice {$idx} formato inválido.";
                            continue;
                        }
                        if (empty($s['name']) && empty($s['nome'])) {
                            $errors[] = "Matéria no índice {$idx} está sem o campo 'name' ou 'nome'.";
                        } else {
                            $count++;
                        }
                    }
                }
                $summary = ['subjects_count' => $count];
                break;

            case 'questions':
                $questions = $data['questions']
                    ?? $data['questoes']
                    ?? $data['itens']
                    ?? $data['items']
                    ?? null;

                if ($questions === null && is_array($data) && array_is_list($data)) {
                    $questions = $data;
                }

                if (! is_array($questions) || empty($questions)) {
                    $errors[] = 'Estrutura deve conter uma lista de questões ("questions" ou "questoes").';
                } else {
                    foreach ($questions as $idx => $q) {
                        if (! is_array($q)) {
                            $errors[] = "Questão #{$idx} formato inválido.";
                            continue;
                        }
                        $prompt = $q['prompt'] ?? $q['enunciado'] ?? $q['pergunta'] ?? $q['question'] ?? $q['texto'] ?? null;
                        $answer = $q['correct_answer']
                            ?? $q['respostaCorreta']
                            ?? $q['resposta_correta']
                            ?? $q['gabarito']
                            ?? $q['correta']
                            ?? $q['resposta']
                            ?? $q['answer']
                            ?? null;

                        if (empty($prompt)) {
                            $errors[] = "Questão #{$idx} sem enunciado ('prompt' ou 'enunciado').";
                        } elseif ($answer === null || trim((string) $answer) === '') {
                            $errors[] = "Questão #{$idx} sem gabarito ('correct_answer', 'respostaCorreta' ou 'gabarito').";
                        } else {
                            $count++;
                        }
                    }
                }
                $summary = ['questions_count' => $count];
                break;

            case 'flashcards':
                $cards = $data['flashcards']
                    ?? $data['cartoes']
                    ?? $data['cards']
                    ?? $data['itens']
                    ?? $data['items']
                    ?? null;

                if ($cards === null && is_array($data) && array_is_list($data)) {
                    $cards = $data;
                }

                if (! is_array($cards) || empty($cards)) {
                    $errors[] = 'Estrutura deve conter uma lista de flashcards ("flashcards" ou "cartoes").';
                } else {
                    foreach ($cards as $idx => $c) {
                        if (! is_array($c)) {
                            $errors[] = "Flashcard #{$idx} formato inválido (deve ser um objeto com frente e verso).";
                            continue;
                        }
                        $front = $c['front'] ?? $c['frente'] ?? $c['pergunta'] ?? $c['question'] ?? null;
                        $back = $c['back'] ?? $c['verso'] ?? $c['resposta'] ?? $c['answer'] ?? null;

                        if (empty($front)) {
                            $errors[] = "Flashcard #{$idx} sem conteúdo na frente ('front' ou 'frente').";
                        } elseif (empty($back)) {
                            $errors[] = "Flashcard #{$idx} sem conteúdo no verso ('back' ou 'verso').";
                        } else {
                            $count++;
                        }
                    }
                }
                $summary = ['flashcards_count' => $count];
                break;

            default:
                $errors[] = "Tipo de importação desconhecido: '{$type}'.";
                $summary = null;
                break;
        }

        return [
            'valid' => empty($errors),
            'errors' => $errors,
            'summary' => $summary,
            'parsed_data' => empty($errors) ? $data : null,
        ];
    }

    public function importPayload(
        int $tenantId,
        User $actor,
        string $type,
        array $payload,
        ?string $targetContestId = null,
        ?array $targets = null
    ): array {
        $validation = $this->validatePayload($type, $payload);
        if (! $validation['valid']) {
            throw new \InvalidArgumentException(implode(' ', $validation['errors']));
        }

        $data = $validation['parsed_data'];
        $effectiveTargets = $targets ?? ($payload['targets'] ?? ($data['targets'] ?? null));

        return DB::transaction(function () use ($tenantId, $actor, $type, $data, $targetContestId, $effectiveTargets) {
            $importedCount = 0;

            if ($type === 'edital') {
                if (! $targetContestId || $targetContestId === 'new') {
                    $contestName = $data['contest']['name']
                        ?? $data['contest_name']
                        ?? $data['concurso']
                        ?? $data['nome_concurso']
                        ?? ($payload['new_contest_name'] ?? null)
                        ?? 'Novo Concurso Importado';
                    $role = $data['contest']['role'] ?? $data['cargo'] ?? ($payload['role'] ?? null);
                    $org = $data['contest']['organization'] ?? $data['orgao'] ?? ($payload['organization'] ?? null);
                    $board = $data['contest']['board'] ?? $data['banca'] ?? ($payload['board'] ?? null);

                    $targetContestId = (string) Str::uuid();
                    DB::table('mentoria2_contests')->insert([
                        'id' => $targetContestId,
                        'tenant_id' => $tenantId,
                        'name' => $contestName,
                        'position' => $role,
                        'organization' => $org,
                        'board' => $board,
                        'phase' => 'Publicado',
                        'is_active' => true,
                        'created_by' => $actor->id,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }

                $edict = DB::table('mentoria2_edicts')
                    ->where('tenant_id', $tenantId)
                    ->where('contest_id', $targetContestId)
                    ->where('is_active', true)
                    ->first();

                $edictId = $edict ? $edict->id : (string) Str::uuid();

                if (! $edict) {
                    DB::table('mentoria2_edicts')->insert([
                        'id' => $edictId,
                        'tenant_id' => $tenantId,
                        'contest_id' => $targetContestId,
                        'name' => 'Edital Verticalizado IA',
                        'created_by' => $actor->id,
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }

                $subjects = $data['subjects']
                    ?? $data['materias']
                    ?? $data['disciplinas']
                    ?? $data['grade']
                    ?? null;

                if ($subjects === null && is_array($data) && array_is_list($data)) {
                    $subjects = $data;
                }
                $subjects = is_array($subjects) ? $subjects : [];
                foreach ($subjects as $sIdx => $subject) {
                    $subjectId = (string) Str::uuid();
                    $sName = $subject['name'] ?? $subject['nome'];
                    $sWeight = $subject['weight'] ?? $subject['peso'] ?? 1.0;
                    $sRelevance = $subject['relevance'] ?? $subject['relevancia'] ?? 3;

                    DB::table('mentoria2_subjects')->insert([
                        'id' => $subjectId,
                        'tenant_id' => $tenantId,
                        'edict_id' => $edictId,
                        'name' => $sName,
                        'position' => $sIdx,
                        'weight' => $sWeight,
                        'relevance' => $sRelevance,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                    $importedCount++;

                    $topics = $subject['topics'] ?? $subject['topicos'] ?? [];
                    foreach ($topics as $tIdx => $topic) {
                        $topicId = (string) Str::uuid();
                        $tName = is_array($topic) ? ($topic['name'] ?? $topic['nome']) : (string) $topic;
                        $tWeight = is_array($topic) ? ($topic['weight'] ?? 1.0) : 1.0;

                        DB::table('mentoria2_topics')->insert([
                            'id' => $topicId,
                            'tenant_id' => $tenantId,
                            'subject_id' => $subjectId,
                            'name' => $tName,
                            'position' => $tIdx,
                            'weight' => $tWeight,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);

                        $subtopics = is_array($topic) ? ($topic['subtopics'] ?? $topic['subtopicos'] ?? []) : [];
                        foreach ($subtopics as $stIdx => $subtopic) {
                            $subtopicName = is_array($subtopic) ? ($subtopic['name'] ?? $subtopic['nome']) : (string) $subtopic;
                            DB::table('mentoria2_subtopics')->insert([
                                'id' => (string) Str::uuid(),
                                'tenant_id' => $tenantId,
                                'topic_id' => $topicId,
                                'name' => $subtopicName,
                                'position' => $stIdx,
                                'created_at' => now(),
                                'updated_at' => now(),
                            ]);
                        }
                    }
                }
            } elseif ($type === 'questions') {
                $questions = $data['questions']
                    ?? $data['questoes']
                    ?? $data['itens']
                    ?? $data['items']
                    ?? null;

                if ($questions === null && is_array($data) && array_is_list($data)) {
                    $questions = $data;
                }
                $questions = is_array($questions) ? $questions : [];

                foreach ($questions as $q) {
                    if (! is_array($q)) {
                        continue;
                    }
                    $prompt = trim((string) ($q['prompt'] ?? $q['enunciado'] ?? $q['pergunta'] ?? $q['question'] ?? $q['texto'] ?? ''));
                    $correct = trim((string) ($q['correct_answer'] ?? $q['respostaCorreta'] ?? $q['resposta_correta'] ?? $q['gabarito'] ?? $q['correta'] ?? $q['resposta'] ?? $q['answer'] ?? ''));
                    $explanation = ($q['explanation'] ?? $q['explicacao'] ?? $q['explicação'] ?? $q['comentario'] ?? $q['comentário'] ?? $q['justificativa'] ?? null) ?: null;
                    $subject = trim((string) ($q['subject'] ?? $q['materia'] ?? $q['matéria'] ?? $q['disciplina'] ?? 'Geral'));
                    $topic = ($q['topic'] ?? $q['topico'] ?? $q['tópico'] ?? $q['assunto'] ?? null) ?: null;
                    $difficulty = ($q['difficulty'] ?? $q['dificuldade'] ?? 'Média') ?: 'Média';
                    $rawAlternatives = $q['alternatives'] ?? $q['alternativas'] ?? $q['opcoes'] ?? $q['opções'] ?? null;
                    if (is_string($rawAlternatives)) {
                        $rawAlternatives = preg_split('/\r?\n/', $rawAlternatives) ?: [];
                    }
                    $alternatives = is_array($rawAlternatives) ? array_values(array_filter(array_map(function ($alt) {
                        $text = is_array($alt) ? ($alt['text'] ?? $alt['texto'] ?? '') : (string) $alt;
                        return preg_replace('/^\s*\(?[A-Z]\)?\s*[\)\.\-:]\s*/iu', '', trim($text));
                    }, $rawAlternatives), static fn ($alt) => $alt !== '')) : null;

                    $rawType = (string) ($q['type'] ?? $q['tipo'] ?? '');
                    if (in_array(strtolower($rawType), ['certo_errado', 'certo/errado', 'true_false', 'boolean'], true)) {
                        $qType = 'certo_errado';
                    } else {
                        $qType = (! empty($alternatives) && count($alternatives) > 0) ? 'multipla_escolha' : 'certo_errado';
                    }

                    $scope = (string) ($q['scope'] ?? $q['alcance'] ?? ($targetContestId ? 'concurso' : 'global'));
                    if (! in_array($scope, ['global', 'concurso', 'especifico'], true)) {
                        $scope = $targetContestId ? 'concurso' : 'global';
                    }
                    $contestId = $scope === 'concurso' ? ($q['contest_id'] ?? $q['concursoId'] ?? $targetContestId) : null;

                    $qId = (string) Str::uuid();
                    DB::table('mentoria2_question_bank')->insert([
                        'id' => $qId,
                        'tenant_id' => $tenantId,
                        'subject' => $subject !== '' ? $subject : 'Geral',
                        'topic' => $topic,
                        'difficulty' => $difficulty,
                        'type' => $qType,
                        'prompt' => $prompt,
                        'alternatives' => ! empty($alternatives) ? json_encode($alternatives, JSON_UNESCAPED_UNICODE) : null,
                        'correct_answer' => (string) $correct,
                        'explanation' => $explanation,
                        'scope' => $scope,
                        'contest_id' => $contestId,
                        'created_by' => $actor->id,
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);

                    if (is_array($effectiveTargets) && ! empty($effectiveTargets)) {
                        (new ContentAudienceService())->replaceTargets($tenantId, 'question', $qId, $effectiveTargets);
                    } elseif (Schema::hasTable('mentoria2_content_targets')) {
                        DB::table('mentoria2_content_targets')->insert([
                            'id' => (string) Str::uuid(),
                            'tenant_id' => $tenantId,
                            'content_type' => 'question',
                            'content_id' => $qId,
                            'target_type' => $targetContestId ? 'contest' : 'global',
                            'target_id' => $targetContestId,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);
                    }

                    $importedCount++;
                }
            } elseif ($type === 'flashcards') {
                $cards = $data['flashcards']
                    ?? $data['cartoes']
                    ?? $data['cards']
                    ?? $data['itens']
                    ?? $data['items']
                    ?? null;

                if ($cards === null && is_array($data) && array_is_list($data)) {
                    $cards = $data;
                }
                $cards = is_array($cards) ? $cards : [];

                $deckName = $data['deck_name']
                    ?? $data['nome']
                    ?? $data['name']
                    ?? $data['titulo']
                    ?? $data['title']
                    ?? $data['baralho']
                    ?? 'Deck Importado IA';

                $scope = $data['scope']
                    ?? $data['alcance']
                    ?? ($targetContestId ? 'concurso' : 'global');

                $deckId = (string) Str::uuid();
                DB::table('mentoria2_flashcard_decks')->insert([
                    'id' => $deckId,
                    'tenant_id' => $tenantId,
                    'name' => $deckName,
                    'contest_id' => $targetContestId,
                    'created_by' => $actor->id,
                    'owner_type' => 'mentor',
                    'scope' => $scope === 'global' ? 'global' : ($targetContestId ? 'concurso' : 'global'),
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                if (is_array($effectiveTargets) && ! empty($effectiveTargets)) {
                    (new ContentAudienceService())->replaceTargets($tenantId, 'flashcard_deck', $deckId, $effectiveTargets);
                } elseif (Schema::hasTable('mentoria2_content_targets')) {
                    DB::table('mentoria2_content_targets')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'content_type' => 'flashcard_deck',
                        'content_id' => $deckId,
                        'target_type' => $targetContestId ? 'contest' : 'global',
                        'target_id' => $targetContestId,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }

                foreach ($cards as $c) {
                    if (! is_array($c)) {
                        continue;
                    }
                    $front = $c['front'] ?? $c['frente'] ?? $c['pergunta'] ?? $c['question'] ?? null;
                    $back = $c['back'] ?? $c['verso'] ?? $c['resposta'] ?? $c['answer'] ?? null;
                    $hint = $c['hint'] ?? $c['dica'] ?? $c['mnemonico'] ?? null;

                    if (empty($front) || empty($back)) {
                        continue;
                    }

                    DB::table('mentoria2_flashcards')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'deck_id' => $deckId,
                        'front' => $front,
                        'back' => $back,
                        'hint' => $hint,
                        'created_by' => $actor->id,
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                    $importedCount++;
                }
            }

            return [
                'success' => true,
                'type' => $type,
                'imported_count' => $importedCount,
                'contest_id' => $targetContestId,
                'message' => "Importação de {$importedCount} itens concluída com sucesso.",
            ];
        });
    }
}

