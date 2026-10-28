<?php

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class Mentoria2SeederService
{
    public static function seedIfEmpty(int $tenantId, ?int $userId = null): void
    {
        $hasContests = DB::table('mentoria2_contests')
            ->where('tenant_id', $tenantId)
            ->exists();

        if (! $hasContests) {
            static::seedTenant($tenantId, $userId);
            return;
        }

        static::ensureTenantAncillaryData($tenantId, $userId);
    }

    public static function seedTenant(int $tenantId, ?int $userId = null): void
    {
        $actorId = $userId ?: (DB::table('users')->where('role', 'admin')->value('id') ?: 1);

        DB::transaction(function () use ($tenantId, $actorId) {
            $now = now();

            // 1. Concurso Oficial PMPI PÓS-EDITAL
            $contestId = (string) Str::uuid();
            DB::table('mentoria2_contests')->insert([
                'id' => $contestId,
                'tenant_id' => $tenantId,
                'name' => 'PMPI PÓS-EDITAL',
                'board' => 'NUCEPE / FUESPI',
                'position' => 'Soldado da Polícia Militar do Piauí',
                'salary' => 3850.00,
                'exam_date' => '2026-12-06',
                'pre_notice' => false,
                'review_intervals' => '1,7,30',
                'created_by' => $actorId,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // 2. Edital Verticalizado
            $edictId = (string) Str::uuid();
            DB::table('mentoria2_edicts')->insert([
                'id' => $edictId,
                'tenant_id' => $tenantId,
                'contest_id' => $contestId,
                'name' => 'Edital Verticalizado Oficial PMPI 2026',
                'version' => 'v1.0 - Pós-Edital',
                'created_by' => $actorId,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // 3. Matérias e Tópicos do Edital PMPI
            $subjectsData = [
                [
                    'name' => 'Língua Portuguesa',
                    'weight' => 2.00,
                    'relevance' => 5,
                    'topics' => [
                        'Compreensão e Interpretação de Textos',
                        'Emprego do Acento Indicativo de Crase',
                        'Sintaxe de Concordância Verbal e Nominal',
                        'Regência Verbal e Nominal',
                        'Pontuação e Coesão Textual'
                    ]
                ],
                [
                    'name' => 'Raciocínio Lógico e Matemática',
                    'weight' => 1.50,
                    'relevance' => 4,
                    'topics' => [
                        'Estruturas Lógicas e Proposições',
                        'Tabelas-Verdade e Conectivos Lógicos',
                        'Diagramas Lógicos e Argumentação',
                        'Porcentagem e Regra de Três'
                    ]
                ],
                [
                    'name' => 'Noções de Direito Constitucional',
                    'weight' => 2.00,
                    'relevance' => 5,
                    'topics' => [
                        'Direitos e Garantias Fundamentais (Art. 5º da CF/88)',
                        'Da Segurança Pública (Art. 144 da CF/88)',
                        'Dos Militares dos Estados, do DF e dos Territórios (Art. 42 da CF/88)',
                        'Organização do Estado e Administração Pública'
                    ]
                ],
                [
                    'name' => 'Noções de Direito Administrativo',
                    'weight' => 2.00,
                    'relevance' => 5,
                    'topics' => [
                        'Princípios Expressos e Implícitos da Administração Pública (LIMPE)',
                        'Poderes da Administração Pública (Vinculado, Discricionário, Hierárquico e Disciplinar)',
                        'Atos Administrativos: Conceito, Requisitos, Atributos e Extinção',
                        'Responsabilidade Civil do Estado'
                    ]
                ],
                [
                    'name' => 'Legislação Especial Aplicada à PM-PI',
                    'weight' => 2.50,
                    'relevance' => 5,
                    'topics' => [
                        'Estatuto dos Policiais Militares do Piauí (Lei Estadual nº 3.808/1981)',
                        'Regulamento Disciplinar da PM-PI (RDPM-PI)',
                        'Lei de Abuso de Autoridade (Lei nº 13.869/2019)'
                    ]
                ]
            ];

            $seededTopicIds = [];
            foreach ($subjectsData as $sIndex => $sItem) {
                $subId = (string) Str::uuid();
                DB::table('mentoria2_subjects')->insert([
                    'id' => $subId,
                    'tenant_id' => $tenantId,
                    'edict_id' => $edictId,
                    'name' => $sItem['name'],
                    'position' => $sIndex + 1,
                    'weight' => $sItem['weight'],
                    'relevance' => $sItem['relevance'],
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                foreach ($sItem['topics'] as $tIndex => $topicName) {
                    $topId = (string) Str::uuid();
                    DB::table('mentoria2_topics')->insert([
                        'id' => $topId,
                        'tenant_id' => $tenantId,
                        'subject_id' => $subId,
                        'name' => $topicName,
                        'position' => $tIndex + 1,
                        'weight' => 1.00,
                        'relevance' => 4,
                        'is_active' => true,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                    $seededTopicIds[] = ['subject' => $sItem['name'], 'topic' => $topicName, 'topic_id' => $topId, 'subject_id' => $subId];
                }
            }

            // 4. Banco de Questões Reais (NUCEPE / Cebraspe Padrão)
            $questions = [
                [
                    'subject' => 'Língua Portuguesa',
                    'topic' => 'Emprego do Acento Indicativo de Crase',
                    'type' => 'multipla_escolha',
                    'prompt' => 'Assinale a alternativa em que o acento indicativo de crase foi empregado em estrita conformidade com a norma-padrão da língua portuguesa:',
                    'alternatives' => json_encode([
                        'A' => 'O policial dirigiu-se à repartição pública para protocolar o relatório de inteligência operacional.',
                        'B' => 'O agente estava disposto à colaborar com as investigações conduzidas pela corregedoria geral.',
                        'C' => 'A ordem de serviço foi encaminhada à todas as delegacias regionais e batalhões do interior.',
                        'D' => 'Os peritos criminais e testemunhas ficaram frente à frente durante a audiência de custódia.'
                    ]),
                    'correct_answer' => 'A',
                    'explanation' => 'Apenas a alternativa A está correta: o verbo "dirigir-se" exige a preposição "a" e "repartição pública" é vocábulo feminino antecedido de artigo "a" (a + a = à). Nas demais: antes de verbo não ocorre crase (B); antes de palavra no plural precedida de "a" singular não ocorre crase (C); entre palavras repetidas a crase é vedada (D).'
                ],
                [
                    'subject' => 'Noções de Direito Constitucional',
                    'topic' => 'Da Segurança Pública (Art. 144 da CF/88)',
                    'type' => 'certo_errado',
                    'prompt' => 'À luz do Art. 144 da Constituição Federal de 1988, as polícias militares e os corpos de bombeiros militares são forças auxiliares e reserva do Exército, subordinando-se, juntamente com as polícias civis e penais, aos Governadores dos Estados, do Distrito Federal e dos Territórios.',
                    'alternatives' => json_encode([
                        'C' => 'Certo',
                        'E' => 'Errado'
                    ]),
                    'correct_answer' => 'C',
                    'explanation' => 'Correto. É a exata redação do Art. 144, § 6º da CF/88: "As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios."'
                ],
                [
                    'subject' => 'Noções de Direito Administrativo',
                    'topic' => 'Princípios Expressos e Implícitos da Administração Pública (LIMPE)',
                    'type' => 'multipla_escolha',
                    'prompt' => 'O princípio administrativo que determina que a atuação estatal deve buscar a melhor relação entre os meios aplicados e os resultados alcançados, com celeridade e sem desperdício de recursos públicos, é o da:',
                    'alternatives' => json_encode([
                        'A' => 'Eficiência',
                        'B' => 'Legalidade estrita',
                        'C' => 'Impessoalidade',
                        'D' => 'Publicidade ativa'
                    ]),
                    'correct_answer' => 'A',
                    'explanation' => 'O princípio da eficiência (introduzido expressamente no Art. 37, caput, pela EC nº 19/1998) impõe à Administração Pública e aos seus agentes a busca pelo melhor rendimento com o menor custo e desperdício possíveis.'
                ],
                [
                    'subject' => 'Legislação Especial Aplicada à PM-PI',
                    'topic' => 'Estatuto dos Policiais Militares do Piauí (Lei Estadual nº 3.808/1981)',
                    'type' => 'certo_errado',
                    'prompt' => 'De acordo com o Estatuto dos Policiais Militares do Estado do Piauí (Lei nº 3.808/1981), a hierarquia e a disciplina constituem a base institucional da Polícia Militar, crescendo a autoridade e a responsabilidade com a elevação do grau hierárquico.',
                    'alternatives' => json_encode([
                        'C' => 'Certo',
                        'E' => 'Errado'
                    ]),
                    'correct_answer' => 'C',
                    'explanation' => 'Correto. Nos termos do Estatuto (Art. 12), a disciplina e o respeito à hierarquia são os pilares de sustentação e base institucional das corporações militares estaduais.'
                ],
                [
                    'subject' => 'Raciocínio Lógico e Matemática',
                    'topic' => 'Estruturas Lógicas e Proposições',
                    'type' => 'multipla_escolha',
                    'prompt' => 'Dada a proposição condicional "Se o policial estuda com planejamento, então ele obtém a aprovação", sua negação lógica equivalente é expressa por:',
                    'alternatives' => json_encode([
                        'A' => 'O policial estuda com planejamento e não obtém a aprovação.',
                        'B' => 'Se o policial não estuda com planejamento, então não obtém a aprovação.',
                        'C' => 'O policial não estuda com planejamento ou obtém a aprovação.',
                        'D' => 'O policial não estuda e não é aprovado.'
                    ]),
                    'correct_answer' => 'A',
                    'explanation' => 'A regra da negação da condicional (p -> q) é a regra do "MANÉ": MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q. Logo: "O policial estuda com planejamento E não obtém a aprovação".'
                ]
            ];

            foreach ($questions as $qItem) {
                DB::table('mentoria2_question_bank')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'subject' => $qItem['subject'],
                    'topic' => $qItem['topic'],
                    'type' => $qItem['type'],
                    'prompt' => $qItem['prompt'],
                    'alternatives' => $qItem['alternatives'],
                    'correct_answer' => $qItem['correct_answer'],
                    'explanation' => $qItem['explanation'],
                    'scope' => 'global',
                    'contest_id' => $contestId,
                    'created_by' => $actorId,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            // 5. Baralhos de Flashcards e Cartões Oficiais
            $deckId = (string) Str::uuid();
            DB::table('mentoria2_flashcard_decks')->insert([
                'id' => $deckId,
                'tenant_id' => $tenantId,
                'contest_id' => $contestId,
                'edict_id' => $edictId,
                'created_by' => $actorId,
                'owner_type' => 'mentor',
                'scope' => 'global',
                'name' => 'Direito Constitucional - Art. 5º e Direitos Fundamentais',
                'description' => 'Flashcards oficiais de memorização ativa para provas policiais.',
                'icon' => 'rotate-3d',
                'position' => 1,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            $flashcards = [
                [
                    'front' => 'Qual é a regra constitucional para a inviolabilidade de domicílio durante a noite (Art. 5º, XI, CF/88)?',
                    'back' => 'À noite, o domicílio SÓ pode ser penetrado com consentimento do morador OU em caso de flagrante delito, desastre ou para prestar socorro. Ordem judicial NÃO permite entrada noturna.'
                ],
                [
                    'front' => 'Quais são os crimes inafiançáveis e imprescritíveis previstos na Constituição Federal de 1988?',
                    'back' => 'RAÇÃO: RACISMO e AÇÃO de grupos armados (civis ou militares) contra a ordem constitucional e o Estado Democrático.'
                ],
                [
                    'front' => 'Quais são os crimes inafiançáveis e insuscetíveis de graça ou anistia (Art. 5º, XLIII)?',
                    'back' => '3T + H: Tortura, Tráfico ilícito de entorpecentes, Terrorismo e os definidos como crimes Hediondos.'
                ]
            ];

            foreach ($flashcards as $fc) {
                DB::table('mentoria2_flashcards')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'deck_id' => $deckId,
                    'type' => 'basico',
                    'front' => $fc['front'],
                    'back' => $fc['back'],
                    'created_by' => $actorId,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            // 6. Temas de Redação (Oficina de Discursivas)
            DB::table('mentoria2_essays')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenantId,
                'contest_id' => $contestId,
                'title' => 'A atuação policial ostensiva e a garantia dos direitos fundamentais na segurança pública contemporânea',
                'prompt_theme' => 'Considerando que a segurança pública é dever do Estado, direito e responsabilidade de todos (Art. 144 da CF/88), redija um texto dissertativo-argumentativo abordando: 1) O papel do policiamento ostensivo e comunitário; 2) Os limites éticos e legais do uso da força; 3) Medidas para harmonizar a eficácia policial e a dignidade da pessoa humana.',
                'motivating_texts' => json_encode([
                    ['source' => 'Constituição Federal de 1988, Art. 144', 'text' => 'A segurança pública é dever do Estado, direito e responsabilidade de todos...'],
                    ['source' => 'Anuário Brasileiro de Segurança Pública', 'text' => 'A integração entre comunidade e inteligência operacional eleva a resolutividade dos inquéritos em mais de 40%.']
                ]),
                'criteria' => json_encode([
                    ['name' => 'Domínio da Norma Culta e Ortografia', 'weight' => 20],
                    ['name' => 'Desenvolvimento do Tema e Repertório Legitimado', 'weight' => 30],
                    ['name' => 'Estrutura Dissertativo-Argumentativa e Coesão', 'weight' => 30],
                    ['name' => 'Proposta de Intervenção e Conclusão Operacional', 'weight' => 20]
                ]),
                'min_words' => 150,
                'max_words' => 600,
                'max_score' => 100.00,
                'created_by' => $actorId,
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // 7. Radar de Editais Abertos e Previstos
            $radarItems = [
                [
                    'title' => 'Polícia Militar do Piauí - Soldado PM-PI',
                    'organization' => 'Polícia Militar do Estado do Piauí',
                    'board' => 'NUCEPE / FUESPI',
                    'role' => 'Soldado da Polícia Militar',
                    'salary' => 3850.00,
                    'vacancies' => 1000,
                    'sphere' => 'estadual',
                    'state' => 'PI',
                    'status' => 'edital_aberto',
                    'registration_end' => '2026-10-25',
                    'exam_date' => '2026-12-06',
                    'is_featured' => true,
                ],
                [
                    'title' => 'Polícia Civil do Piauí - Agente e Escrivão',
                    'organization' => 'Polícia Civil do Estado do Piauí',
                    'board' => 'Comissão Formada',
                    'role' => 'Agente de Polícia e Escrivão',
                    'salary' => 6800.00,
                    'vacancies' => 400,
                    'sphere' => 'estadual',
                    'state' => 'PI',
                    'status' => 'comissao_formada',
                    'exam_date' => '2027-03-15',
                    'is_featured' => true,
                ],
                [
                    'title' => 'Polícia Rodoviária Federal - Policial Rodoviário Federal',
                    'organization' => 'Departamento de Polícia Rodoviária Federal',
                    'board' => 'Aguardando Autorização',
                    'role' => 'Policial Rodoviário Federal',
                    'salary' => 10500.00,
                    'vacancies' => 1500,
                    'sphere' => 'federal',
                    'state' => null,
                    'status' => 'previsto',
                    'is_featured' => false,
                ]
            ];

            foreach ($radarItems as $r) {
                DB::table('mentoria2_radar_contests')->insert(array_merge($r, [
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]));
            }

            // 8. Turmas (Cohorts)
            $cohortId = (string) Str::uuid();
            DB::table('mentoria2_cohorts')->insert([
                'id' => $cohortId,
                'tenant_id' => $tenantId,
                'name' => 'Turma PMPI Soldado 2026',
                'contest_id' => $contestId,
                'description' => 'Turma oficial de mentoria intensiva pós-edital PMPI.',
                'is_active' => true,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            // 9. Matrícula do Aluno Ativo (Usuário atual ou primeiro aluno)
            $studentUser = DB::table('users')->where('id', $actorId)->first();
            if ($studentUser) {
                $existsStudentContest = DB::table('mentoria2_student_contests')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $actorId)
                    ->where('contest_id', $contestId)
                    ->exists();

                if (! $existsStudentContest) {
                    DB::table('mentoria2_student_contests')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $actorId,
                        'contest_id' => $contestId,
                        'assigned_by' => $actorId,
                        'group' => 'foco',
                        'position' => 1,
                        'include_in_stats' => true,
                        'is_active' => true,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }

                $existsStudentEdict = DB::table('mentoria2_student_edicts')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $actorId)
                    ->where('edict_id', $edictId)
                    ->exists();

                if (! $existsStudentEdict) {
                    DB::table('mentoria2_student_edicts')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $actorId,
                        'edict_id' => $edictId,
                        'assigned_by' => $actorId,
                        'is_active' => true,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }

                // Vincula na turma
                DB::table('mentoria2_cohort_members')->insertOrIgnore([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'cohort_id' => $cohortId,
                    'student_id' => $actorId,
                    'ranking_opt_in' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                // Preferências do aluno
                DB::table('mentoria2_preferences')->insertOrIgnore([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'tour_completed' => true,
                    'settings' => json_encode(['theme' => 'dark', 'pomodoro_minutes' => 25]),
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }

            static::ensureTenantAncillaryData($tenantId, $actorId);
        });
    }

    public static function ensureTenantAncillaryData(int $tenantId, ?int $userId = null): void
    {
        $actorId = $userId ?: (DB::table('users')->where('role', 'admin')->value('id') ?: 1);
        $now = now();

        $contest = DB::table('mentoria2_contests')->where('tenant_id', $tenantId)->first();
        if (! $contest) {
            return;
        }

        // Nunca habilite produtos ou matricule compradores automaticamente: a
        // vinculação comercial deve ser uma decisão explícita do mentor.
        // Dados de demonstração pertencem somente ao ator que a solicitou.
        $edict = DB::table('mentoria2_edicts')->where('tenant_id', $tenantId)->first();
        $studentIdsToAssign = collect([$actorId]);

        foreach ($studentIdsToAssign as $sId) {
            if ($contest && Schema::hasTable('mentoria2_student_contests')) {
                $hasSc = DB::table('mentoria2_student_contests')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $sId)
                    ->where('contest_id', $contest->id)
                    ->exists();
                if (! $hasSc) {
                    DB::table('mentoria2_student_contests')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $sId,
                        'contest_id' => $contest->id,
                        'assigned_by' => $actorId,
                        'group' => 'foco',
                        'position' => 1,
                        'include_in_stats' => true,
                        'is_active' => true,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }

            if ($edict && Schema::hasTable('mentoria2_student_edicts')) {
                $hasSe = DB::table('mentoria2_student_edicts')
                    ->where('tenant_id', $tenantId)
                    ->where('student_id', $sId)
                    ->where('edict_id', $edict->id)
                    ->exists();
                if (! $hasSe) {
                    DB::table('mentoria2_student_edicts')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $sId,
                        'edict_id' => $edict->id,
                        'assigned_by' => $actorId,
                        'is_active' => true,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // 1. Ensure content targets for questions
        if (Schema::hasTable('mentoria2_content_targets') && Schema::hasTable('mentoria2_question_bank')) {
            $questions = DB::table('mentoria2_question_bank')->where('tenant_id', $tenantId)->get();
            foreach ($questions as $q) {
                $hasTarget = DB::table('mentoria2_content_targets')
                    ->where('tenant_id', $tenantId)
                    ->where('content_type', 'question')
                    ->where('content_id', $q->id)
                    ->exists();
                if (! $hasTarget) {
                    DB::table('mentoria2_content_targets')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'content_type' => 'question',
                        'content_id' => $q->id,
                        'target_type' => 'global',
                        'target_id' => null,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // 2. Ensure content targets for flashcard decks
        if (Schema::hasTable('mentoria2_content_targets') && Schema::hasTable('mentoria2_flashcard_decks')) {
            $decks = DB::table('mentoria2_flashcard_decks')->where('tenant_id', $tenantId)->get();
            foreach ($decks as $deck) {
                $hasTarget = DB::table('mentoria2_content_targets')
                    ->where('tenant_id', $tenantId)
                    ->where('content_type', 'flashcard_deck')
                    ->where('content_id', $deck->id)
                    ->exists();
                if (! $hasTarget) {
                    DB::table('mentoria2_content_targets')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'content_type' => 'flashcard_deck',
                        'content_id' => $deck->id,
                        'target_type' => 'global',
                        'target_id' => null,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // 3. Ensure active schedule & schedule items
        if (Schema::hasTable('mentoria2_schedules') && Schema::hasTable('mentoria2_schedule_items')) {
            $hasSchedule = DB::table('mentoria2_schedules')->where('tenant_id', $tenantId)->exists();
            if (! $hasSchedule) {
                $scheduleId = (string) Str::uuid();
                DB::table('mentoria2_schedules')->insert([
                    'id' => $scheduleId,
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'contest_id' => $contest->id,
                    'type' => 'manual',
                    'created_by' => $actorId,
                    'version' => 1,
                    'state' => 'ativo',
                    'configuration' => json_encode(['weekly_hours' => 28, 'mode' => 'pos_edital']),
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);

                $topics = DB::table('mentoria2_topics')->where('tenant_id', $tenantId)->limit(4)->get();
                $today = now()->format('Y-m-d');
                $tomorrow = now()->addDay()->format('Y-m-d');
                foreach ($topics as $idx => $top) {
                    DB::table('mentoria2_schedule_items')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'schedule_id' => $scheduleId,
                        'planned_date' => $idx < 2 ? $today : $tomorrow,
                        'cycle_position' => $idx + 1,
                        'subject_id' => $top->subject_id,
                        'topic_id' => $top->id,
                        'duration_minutes' => 60,
                        'priority' => $idx + 1,
                        'position' => $idx + 1,
                        'status' => 'pendente',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // 4. Ensure AI memory
        if (Schema::hasTable('mentoria2_ai_memory')) {
            $hasMemory = DB::table('mentoria2_ai_memory')
                ->where('tenant_id', $tenantId)
                ->where('student_id', $actorId)
                ->exists();
            if (! $hasMemory) {
                DB::table('mentoria2_ai_memory')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'cognitive_profile' => json_encode([
                        'context_summary' => 'Aluno focado na aprovação na PMPI 2026. Apresenta ótimo rendimento em Direito Constitucional e Legislação Institucional, necessitando de reforço em Crase e Raciocínio Lógico Proposicional.',
                        'strengths' => ['Noções de Direito Constitucional', 'Legislação Especial PM-PI'],
                        'weaknesses' => ['Emprego de Crase', 'Negação de Proposições Condicionais'],
                        'custom_instructions' => 'Focar em questões no formato NUCEPE e Cebraspe com fundamentação jurídica detalhada.',
                        'last_interactions' => [
                            [
                                'role' => 'assistant',
                                'content' => 'Olá guerreiro(a)! Sua meta para o edital PMPI está em andamento com 80% de precisão nos tópicos fundamentais.',
                                'timestamp' => $now->toIso8601String()
                            ]
                        ]
                    ]),
                    'mentor_guidance' => 'Manter regularidade mínima de 4 horas líquidas de estudo por dia.',
                    'last_analyzed_at' => $now,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        // 5. Ensure question reports
        if (Schema::hasTable('mentoria2_question_reports') && Schema::hasTable('mentoria2_question_bank')) {
            $hasReport = DB::table('mentoria2_question_reports')->where('tenant_id', $tenantId)->exists();
            if (! $hasReport) {
                $q = DB::table('mentoria2_question_bank')->where('tenant_id', $tenantId)->first();
                if ($q) {
                    DB::table('mentoria2_question_reports')->insert([
                        'id' => (string) Str::uuid(),
                        'tenant_id' => $tenantId,
                        'student_id' => $actorId,
                        'question_id' => $q->id,
                        'reason' => 'gabarito_incorreto',
                        'details' => 'Solicito confirmação da fundamentação sobre crase antes de pronomes possessivos femininos.',
                        'status' => 'pendente',
                        'created_at' => $now,
                        'updated_at' => $now,
                    ]);
                }
            }
        }

        // 6. Ensure timer logs, question logs & study sessions
        if (Schema::hasTable('mentoria2_timer_logs')) {
            $hasTimerLog = DB::table('mentoria2_timer_logs')->where('tenant_id', $tenantId)->exists();
            if (! $hasTimerLog) {
                DB::table('mentoria2_timer_logs')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'contest_id' => $contest->id,
                    'type' => 'pomodoro',
                    'duration_seconds' => 1500,
                    'questions_count' => 10,
                    'correct_count' => 8,
                    'wrong_count' => 2,
                    'score' => 80.00,
                    'is_cebraspe' => false,
                    'notes' => 'Sessão Pomodoro inicial concluída com 80% de acertos.',
                    'recorded_at' => $now,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('mentoria2_question_logs')) {
            $hasQuestionLog = DB::table('mentoria2_question_logs')->where('tenant_id', $tenantId)->exists();
            if (! $hasQuestionLog) {
                DB::table('mentoria2_question_logs')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'contest_id' => $contest->id,
                    'solved' => 10,
                    'correct' => 8,
                    'wrong' => 2,
                    'origin' => 'banco_de_questoes',
                    'is_active' => true,
                    'recorded_at' => $now,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }

        if (Schema::hasTable('mentoria2_study_sessions')) {
            $hasStudySession = DB::table('mentoria2_study_sessions')->where('tenant_id', $tenantId)->exists();
            if (! $hasStudySession) {
                DB::table('mentoria2_study_sessions')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'student_id' => $actorId,
                    'contest_id' => $contest->id,
                    'seconds' => 1500,
                    'mode' => 'pomodoro',
                    'notes' => 'Sessão registrada pelo Mini-Timer',
                    'origin' => 'relogio_flutuante',
                    'is_active' => true,
                    'studied_at' => $now,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }
}
