export const EDITAL_PROMPT = `Você é um especialista em estruturação de editais para concursos públicos.
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
[COLE AQUI O TEXTO DO SEU EDITAL OU EDITAL EM PDF]`;

export const QUESTIONS_PROMPT = `Crie questões de concurso no formato JSON estritamente válido.
Responda APENAS com JSON puro, sem markdown ou texto externo.

Antes de gerar o JSON, use estas informações:
- ASSUNTO / TÓPICO PRINCIPAL: [INFORME AQUI]
- QUANTIDADE DE QUESTÕES: [EX.: 20]
- BANCA, CARGO E NÍVEL (opcional): [INFORME AQUI]
- MATERIAL-BASE: cole o texto abaixo OU ANEXE O PDF NESTE CHAT.

Gere exatamente a quantidade solicitada, com disciplina e assunto coerentes com o conteúdo fornecido.

Formato obrigatório:

{
  "questoes": [
    {
      "disciplina": "Direito Constitucional",
      "assunto": "Direitos e Garantias Fundamentais",
      "tipo": "multipla_escolha",
      "enunciado": "Sobre os direitos individuais inscritos na Constituição Federal, assinale a afirmativa correta:",
      "alternativas": [
        "É livre a manifestação do pensamento, sendo permitido o anonimato.",
        "É assegurado o direito de resposta, proporcional ao agravo, além da indenização.",
        "É inviolável a liberdade de consciência e de crença.",
        "A casa é inviolável, salvo nas hipóteses constitucionais."
      ],
      "respostaCorreta": "B",
      "explicacao": "O art. 5º, V da CF/88 estabelece que é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem.",
      "alcance": "global"
    }
  ]
}

Regras obrigatórias:
1. Em múltipla escolha, escreva somente o texto das alternativas: NUNCA inclua A), B), C), D), números, hífens ou marcadores. A plataforma cria as letras automaticamente.
2. "respostaCorreta" deve conter somente a letra da alternativa correta, como "B".
3. Para tipo "certo_errado", não envie "alternativas"; use "respostaCorreta" como "Certo" ou "Errado".
4. Não invente leis, artigos, súmulas, jurisprudência, números ou fatos. Quando houver material-base, use somente ele.
5. Retorne somente JSON, sem markdown, comentários, saudações ou texto externo.

`;

export const FLASHCARDS_PROMPT = `Crie um baralho de flashcards de FRENTE E VERSO para revisão de concursos públicos, no formato JSON estritamente válido.

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
5. Retorne somente JSON, sem markdown, comentários, saudações ou texto externo.

`;
