/**
 * Mentoria 2.0 - Estado de Dados Inicial Limpo
 * Todas as entidades iniciam vazias e são hidratadas exclusivamente a partir do banco de dados (MySQL/API).
 */
export const M2Data = (() => {
  const M2Data = {
    // Contexto do Aluno (preenchido na autenticação / hidratação)
    student: {
      id: null,
      name: '',
      initials: '',
      email: '',
      avatarColor: 'teal',
      cohort: '',
      cohortId: null,
      activeContestId: null,
      streakDays: 0,
      totalHours: 0,
      weekHours: 0,
      weekHoursGoal: 0,
      todayHours: 0,
      todayHoursGoal: 0,
      xp: 0,
      level: 1,
      levelName: '',
      nextLevelXp: 100,
      questionsAnswered: 0,
      questionsAccuracy: 0,
      syllabusCoveredPct: 0,
      rankingOptIn: true
    },

    // Contexto do Mentor
    mentor: {
      id: null,
      name: '',
      initials: '',
      role: '',
      tenants: [],
      totalStudents: 0,
      alertStudentsCount: 0,
      activeCohorts: 0,
      totalContests: 0
    },

    // Coleções reais (populadas via payload da API)
    contests: [],
    syllabus: [],
    subjects: [],
    questions: [],
    flashcardDecks: [],
    cohorts: [],
    students: [],
    mentorStudents: [],
    schedule: [],
    reviews: [],
    mockExams: [],
    errorNotebook: [],
    notebooks: [],
    goals: [],
    badges: [],
    ranking: [],
    materials: [],
    courses: [],
    auditLogs: [],
    reportedQuestions: [],
    essays: [],
    radarEditais: [],

    // Perfil cognitivo de IA
    aiMemory: {
      strengths: [],
      weaknesses: [],
      recommendations: [],
      profile: {
        learningStyle: '',
        retentionRate: 0,
        averageResponseTime: '',
        bestHour: '',
        cognitiveLoadIndex: 0
      }
    },

    // Prompts e Modelos Homologados para IA Externa (Catalogação, Questões, Flashcards)
    prompts: {
      catalog: `Você é um especialista em estruturação de editais para concursos públicos.
Por favor, analise o edital/conteúdo programático fornecido abaixo e extraia todas as disciplinas (matérias), tópicos e subtópicos no formato JSON estritamente válido, seguindo exatamente este modelo:

{
  "nome": "Nome do Concurso / Órgão",
  "banca": "Nome da Banca Organizadora",
  "cargo": "Nome do Cargo",
  "salario": 12500,
  "dataProva": "2026-10-15",
  "preEdital": false,
  "prazosRevisao": "1,7,30",
  "materias": [
    {
      "nome": "Língua Portuguesa",
      "peso": 1,
      "topicos": [
        {
          "nome": "Compreensão e interpretação de textos",
          "subtopicos": [
            "Tipologia textual",
            "Mecanismos de coesão textual"
          ]
        }
      ]
    }
  ]
}

Regras Obrigatórias:
1. Retorne APENAS o código JSON puro, sem blocos de explicações ou saudações.
2. Mantenha os nomes dos tópicos e subtópicos limpos e organizados hierarquicamente.
3. Se a data da prova não for conhecida, coloque preEdital como true e dataProva como "".

Segue o conteúdo programático do edital:
[COLE AQUI O TEXTO DO SEU EDITAL OU EDITAL EM PDF]`,

      questions: `Crie questões de concurso no formato JSON estritamente válido.
Responda APENAS com JSON puro, sem markdown ou texto externo.

Antes de gerar o JSON, use estas informações:
- DISCIPLINA (Matéria macro do edital): [Ex: Legislação / Língua Portuguesa / Direito Constitucional / Matemática]
- ASSUNTO / LEI (Nome da lei ou tópico específico): [Ex: Lei de Execução Penal (LEP - Lei 7.210/1984) / Interpretação de Texto]
- QUANTIDADE DE QUESTÕES: [Ex: 30]
- BANCA, CARGO E NÍVEL (opcional): [Ex: Cebraspe / Polícia Penal / Médio]
- MATERIAL-BASE: cole o texto abaixo OU ANEXE O PDF NESTE CHAT.

Gere exatamente a quantidade solicitada, com disciplina e assunto coerentes com o conteúdo fornecido.

Formato obrigatório:

{
  "questoes": [
    {
      "disciplina": "Legislação",
      "assunto": "Lei de Execução Penal (LEP - Lei 7.210/1984)",
      "tipo": "multipla_escolha",
      "enunciado": "Segundo a Lei de Execução Penal, a execução penal tem por objetivo:",
      "alternativas": [
        "Punir o condenado exclusivamente mediante seu isolamento social.",
        "Efetivar as disposições da sentença ou decisão criminal e proporcionar condições para a integração social do condenado e do internado.",
        "Reexaminar obrigatoriamente a condenação antes do cumprimento da pena.",
        "Substituir todas as penas privativas de liberdade por medidas de segurança."
      ],
      "respostaCorreta": "B",
      "explicacao": "O art. 1º da Lei nº 7.210/1984 prevê a efetivação da decisão criminal e a criação de condições para a integração social do condenado e do internado.",
      "alcance": "global"
    }
  ]
}

Regras obrigatórias:
1. HIERARQUIA DE DISCIPLINA E ASSUNTO:
   - "disciplina": DEVE ser a MATÉRIA MACRO (Ex.: "Legislação", "Língua Portuguesa", "Matemática", "Direito Constitucional", "Direito Penal", "Informática"). NUNCA crie disciplinas fragmentadas ou inventadas como "Direito de Execução Penal", "Direito de Trânsito", etc. Use a disciplina macro informada pelo usuário.
   - "assunto": DEVE ser o NOME DA LEI, ESTATUTO OU TÓPICO DO EDITAL (Ex.: "Lei de Execução Penal (LEP - Lei 7.210/1984)", "Código de Trânsito Brasileiro", "Interpretação de Texto", "Verbos", "Crase", "Regra de Três"). Todas as questões deste mesmo bloco devem manter o MESMO nome de assunto para agrupamento correto.
2. Em múltipla escolha, escreva somente o texto das alternativas: NUNCA inclua A), B), C), D), números, hífens ou marcadores. A plataforma cria as letras automaticamente.
3. "respostaCorreta" deve conter somente a letra da alternativa correta, como "B".
4. Para tipo "certo_errado", não envie "alternativas"; use "respostaCorreta" como "Certo" ou "Errado".
5. Não invente leis, artigos, súmulas, jurisprudência, números ou fatos. Quando houver material-base, use somente ele.
6. Retorne somente JSON, sem markdown, comentários, saudações ou texto externo.`,

      flashcards: `Crie um baralho de flashcards de FRENTE E VERSO para revisão de concursos públicos, no formato JSON estritamente válido.

Responda APENAS com JSON puro, sem markdown ou texto externo.

Antes de gerar o JSON, use estas informações:
- ASSUNTO / TÓPICO PRINCIPAL: [INFORME AQUI]
- QUANTIDADE DE FLASHCARDS: [EX.: 30]
- BANCA, CARGO E NÍVEL (opcional): [INFORME AQUI]
- MATERIAL-BASE: cole o texto abaixo OU ANEXE O PDF NESTE CHAT.

Gere exatamente a quantidade solicitada. Crie cartões diretos, independentes e úteis para revisão espaçada.

Formato obrigatório:

{
  "nome": "Direito Constitucional - Direitos Fundamentais",
  "alcance": "global",
  "cartoes": [
    {
      "frente": "O anonimato é permitido na manifestação do pensamento?",
      "verso": "Não. O art. 5º, IV, da Constituição Federal garante a livre manifestação do pensamento, mas veda o anonimato."
    },
    {
      "frente": "O que o art. 5º, V, da Constituição Federal assegura?",
      "verso": "Direito de resposta proporcional ao agravo, além de indenização por dano material, moral ou à imagem."
    }
  ]
}

Regras obrigatórias:
1. Cada cartão precisa de "frente" e "verso" preenchidos.
2. A frente deve trazer uma pergunta curta, termo, conceito ou gatilho de memória; o verso deve conter a resposta objetiva e completa.
3. Não use Certo/Errado, resposta correta, alternativas, letras ou múltipla escolha. Esse formato pertence ao Banco de Questões.
4. Não invente leis, artigos, súmulas, jurisprudência, números ou fatos. Quando houver material-base, use somente ele.
5. Retorne somente JSON, sem markdown, comentários, saudações ou texto externo.`
    },

    promptExamples: {
      catalog: `{
  "nome": "Exemplo de Concurso",
  "banca": "Banca Organizadora",
  "cargo": "Cargo Alvo",
  "salario": 8500,
  "dataProva": "2026-11-20",
  "preEdital": false,
  "prazosRevisao": "1,7,30",
  "materias": [
    {
      "nome": "Direito Constitucional",
      "peso": 2,
      "topicos": [
        {
          "nome": "Dos Direitos e Garantias Fundamentais",
          "subtopicos": [
            "Direitos e deveres individuais e coletivos"
          ]
        }
      ]
    }
  ]
}`,
      questions: `{
  "questoes": [
    {
      "disciplina": "Direito Constitucional",
      "assunto": "Artigo 5º - Direitos e Garantias Fundamentais",
      "tipo": "multipla_escolha",
      "enunciado": "A respeito do direito à inviolabilidade do domicílio previsto no art. 5º, XI, da Constituição Federal de 1988, é correto afirmar:",
      "alternativas": [
        "A entrada forçada em domicílio sem autorização judicial é permitida a qualquer hora da noite em caso de flagrante delito.",
        "O cumprimento de mandado judicial de busca e apreensão pode ocorrer durante a noite, desde que com autorização expressa do morador."
      ],
      "respostaCorreta": "A",
      "explicacao": "Art. 5º, XI, CF/88: A casa é asilo inviolável do indivíduo...",
      "alcance": "global"
    }
  ]
}`,
      flashcards: `{
  "nome": "Direito Constitucional - Direitos Fundamentais",
  "alcance": "global",
  "cartoes": [
    {
      "frente": "O anonimato é permitido na manifestação do pensamento?",
      "verso": "Não. O art. 5º, IV, da Constituição Federal garante a livre manifestação do pensamento, mas veda o anonimato."
    }
  ]
}`
    }
  };

  if (typeof window !== 'undefined') window.M2Data = M2Data;
  return M2Data;
})();
