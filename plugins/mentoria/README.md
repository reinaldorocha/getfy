# Mentoria — Mentoria para Getfy

Plugin completo de mentoria e preparação para concursos, migrado do Mentoria original para a arquitetura nativa do Getfy.

## Fonte de verdade do acesso

Não existe `mentoria_mentor_alunos`.

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

## Módulos do Mentoria

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
- Flashcards exclusivamente de Certo/Errado, com explicação/fundamento
- Baralhos do mentor e baralhos pessoais do aluno
- Repetição espaçada SM-2
- Revisões programadas
- Simulados, configuração de prova e resultados por matéria
- Cadernos e resumos
- Métricas por período, linha do tempo, matérias, cobertura, streak e simulados
- Auditoria
- Cursos integrados à Área de membros do Getfy

## Prompts de IA

Os importadores de concurso/edital, questões e flashcards incluem o botão **Copiar Prompt**, reaproveitando o fluxo do Mentoria original.

Flashcards usam um prompt específico que gera somente afirmações de **Certo/Errado**. Questões de múltipla escolha permanecem no Banco de Questões.

## Disponibilização de conteúdo

Questões, baralhos do mentor e materiais usam uma regra única:

- Todos os alunos Mentoria
- Produto específico
- Concurso
- Edital
- Aluno específico

É possível combinar vários destinos. O acesso final sempre respeita o tenant e os produtos ativos do Getfy.

## Produto Mentoria

O plugin registra o tipo virtual `mentoria`, persistido como produto `link` no core. Ao criar/ativar um produto Mentoria, o link de entrega aponta para:

```
/mentoria-estudos/{tenant_id}
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

`/mentoria`

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

`/mentoria-estudos/{tenant_id}`

Inclui concurso ativo, contagem regressiva, timer, edital, materiais, cronograma, revisões, flashcards, questões, simulados, cadernos, métricas, cursos, histórico e ajuda.

## Cursos

O Mentoria original possuía um módulo próprio de cursos. No plugin ele é substituído intencionalmente pela Área de membros do Getfy, que já oferece módulos, aulas, vídeo, PDFs, progresso, comentários, certificados e comunidade.

Isso evita duas implementações concorrentes para a mesma função.

## Questões dentro dos cursos

O Member Builder recebe a aba **Exercícios Mentoria**. Nela o produtor escolhe uma aula e vincula até 50 questões já existentes no Banco de Questões. As questões não são duplicadas.

Na aula da área de membros, o plugin exibe as questões logo após o conteúdo. A resposta mostra acerto/erro e explicação e também é registrada no histórico e nas métricas do Mentoria com origem `curso`.

## Radar e resultados

O painel do produtor permite filtrar alunos por nível de risco, buscar também pelo concurso, copiar uma mensagem de acompanhamento para WhatsApp, editar grupo/resultado/classificação/nota/nomeação de cada concurso do aluno e gerar relatório de desempenho com parecer da mentoria.


## Frontend visual

O código-fonte da interface Mentoria fica em `plugins/mentoria/frontend/`. Os arquivos em
`plugins/mentoria/dist/` são artefatos publicados para o runtime do plugin e não devem
ser editados diretamente.

Para validar e publicar uma alteração visual:

```powershell
Set-Location plugins/mentoria/frontend
npm test
npm run build
```

O build copia os módulos e a folha `plugin-ui.css` para `dist/`. O carregador do
Getfy injeta essa folha uma única vez quando qualquer exportação de UI do Mentoria é
aberta.

## Paridade final de interface

A revisão final adicionou:
- paginação do Banco de Questões (12 por página)
- agenda de revisões dos próximos 7 dias e alerta de rendimento baixo
- revisões programadas dentro do calendário do cronograma
- presets 15/25/45/60, alerta sonoro e contagem de ciclos no Pomodoro
- drill-down de métricas por dia e mês
- busca na Ajuda
- logotipo visual por concurso
- abertura direta do WhatsApp com mensagem/relatório pré-preenchidos

O Getfy não possui telefone no cadastro padrão de usuário. Portanto o botão do WhatsApp abre o seletor do WhatsApp com a mensagem preenchida, sem destinatário pré-selecionado.
