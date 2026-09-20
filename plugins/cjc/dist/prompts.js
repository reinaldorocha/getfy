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

export const QUESTIONS_PROMPT = `Crie questões de prova no formato JSON estritamente válido.
Responda APENAS com o JSON no seguinte formato:

{
  "questoes": [
    {
      "disciplina": "Direito Constitucional",
      "assunto": "Direitos e Garantias Fundamentais",
      "tipo": "multipla_escolha",
      "enunciado": "Sobre os direitos individuais inscritos na Constituição Federal, assinale a afirmativa correta:",
      "alternativas": [
        "A) É livre a manifestação do pensamento, sendo permitido o anonimato.",
        "B) É assegurado o direito de resposta, proporcional ao agravo, além da indenização.",
        "C) É inviolável a liberdade de consciência e de crença, sendo vedada a prestação de assistência religiosa nas entidades de internação coletiva.",
        "D) A casa é asilo inviolável do indivíduo, nela ninguém podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou durante a noite, por determinação judicial."
      ],
      "respostaCorreta": "B",
      "explicacao": "O art. 5º, V da CF/88 estabelece que é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem.",
      "alcance": "global"
    }
  ]
}`;

export const FLASHCARDS_PROMPT = `Crie um baralho de flashcards exclusivamente de CERTO ou ERRADO para revisão rápida de concursos públicos, no formato JSON estritamente válido.

Responda APENAS com o JSON neste formato:

{
  "nome": "Direito Constitucional - Direitos Fundamentais",
  "alcance": "global",
  "cartoes": [
    {
      "tipo": "certo_errado",
      "frente": "É livre a manifestação do pensamento, sendo permitido o anonimato.",
      "respostaCorreta": "Errado",
      "explicacao": "O art. 5º, IV, da Constituição Federal garante a livre manifestação do pensamento, mas veda o anonimato."
    },
    {
      "tipo": "certo_errado",
      "frente": "É assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem.",
      "respostaCorreta": "Certo",
      "explicacao": "A afirmação reproduz a regra do art. 5º, V, da Constituição Federal."
    }
  ]
}

Regras Obrigatórias:
1. Gere SOMENTE flashcards do tipo "certo_errado".
2. Cada cartão deve possuir apenas uma afirmação e duas possibilidades de resposta: Certo ou Errado.
3. O campo "respostaCorreta" deve conter EXATAMENTE "Certo" ou "Errado".
4. Não gere flashcards básicos, de lacuna ou de múltipla escolha. Múltipla escolha pertence ao Banco de Questões.
5. Toda afirmação deve ter uma explicação objetiva, preferencialmente com fundamento legal, conceito, regra ou exceção relevante.
6. Misture afirmações verdadeiras e falsas quando o conteúdo permitir, evitando que todas tenham a mesma resposta.
7. Não invente artigos, súmulas, jurisprudência, dados ou regras.
8. Retorne APENAS JSON puro, sem markdown, comentários, introduções ou texto fora do JSON.

Conteúdo-base:
[COLE AQUI A LEI, RESUMO, AULA, PDF OU CONTEÚDO QUE DEVE VIRAR FLASHCARDS]`;
