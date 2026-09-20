# CJC — Chega Junto Concurseiro para Getfy

Plugin completo de mentoria e preparação para concursos, migrado do CJC original para a arquitetura nativa do Getfy.

## Fonte de verdade do acesso

Não existe `cjc_mentor_alunos`.

```
infoprodutor / tenant
        ↓
      produto
        ↓
    product_user
        ↓
       aluno
```

O Getfy continua responsável por autenticação, usuários, senha, recuperação de senha, SMTP, checkout, pagamentos, assinaturas, tenants e white-label.

## Módulos do CJC

- Dashboard e radar da mentoria
- Concursos, grupos foco/mira/realizado e resultados
- Editais verticalizados com matérias, tópicos e subtópicos
- Importação de concurso/editais por JSON
- Progresso do edital
- Revisões automáticas pelos prazos do concurso (ex.: 1,7,30)
- Materiais de apoio: arquivo, YouTube, texto e link
- Upload via StorageService do Getfy (local/S3/R2)
- Cronograma manual, agenda e ciclo inteligente
- Geração e reprogramação automática do cronograma
- Timer e histórico de sessões de estudo
- Lançamentos manuais de questões
- Banco de questões, importação, resposta, histórico e estatísticas
- Flashcards básicos, lacuna, múltipla escolha e certo/errado
- Baralhos do mentor e baralhos pessoais do aluno
- Repetição espaçada SM-2
- Revisões programadas
- Simulados, configuração de prova e resultados por matéria
- Cadernos e resumos
- Métricas por período, linha do tempo, matérias, cobertura, streak e simulados
- Auditoria
- Cursos integrados à Área de membros do Getfy

## Disponibilização de conteúdo

Questões, baralhos do mentor e materiais usam uma regra única:

- Todos os alunos CJC
- Produto específico
- Concurso
- Edital
- Aluno específico

É possível combinar vários destinos. O acesso final sempre respeita o tenant e os produtos ativos do Getfy.

## Produto CJC

O plugin registra o tipo virtual `cjc`, persistido como produto `link` no core. Ao criar/ativar um produto CJC, o link de entrega aponta para:

```
/cjc-estudos/{tenant_id}
```

Cada produto pode habilitar/desabilitar capabilities:

- dashboard
- edital
- materiais
- cronograma
- cronograma_inteligente
- revisoes
- flashcards
- questoes
- simulados
- cadernos
- metricas
- cursos

## Painel do produtor

`/cjc`

Abas:

- Dashboard
- Produtos
- Alunos / Radar
- Concursos
- Editais
- Questões
- Flashcards
- Materiais
- Cursos
- Auditoria

## Área do aluno

`/cjc-estudos/{tenant_id}`

Inclui concurso ativo, contagem regressiva, timer, edital, materiais, cronograma, revisões, flashcards, questões, simulados, cadernos, métricas, cursos, histórico e ajuda.

## Cursos

O CJC original possuía um módulo próprio de cursos. No plugin ele é substituído intencionalmente pela Área de membros do Getfy, que já oferece módulos, aulas, vídeo, PDFs, progresso, comentários, certificados e comunidade.

Isso evita duas implementações concorrentes para a mesma função.
