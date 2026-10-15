# Mentoria 2.0

## Produto e experiência

Foco em concursos públicos com plano conduzido pelo mentor. A publicação de planos e a reprogramação exigem contexto de mentor autenticado no mesmo tenant. O aluno informa diagnóstico, executa e pede ajustes; não altera o planejamento silenciosamente.

- **Hoje:** próxima missão do plano, timer, registro da execução, semana, orientação e conquistas.
- **Meu plano:** carga prevista versus disponibilidade, lista/calendário, prévia e publicação pelo mentor, exportação ICS. Em dispositivos estreitos, a primeira visualização é lista.
- **Acompanhamento:** recomendações explicadas, tamanho da amostra, orientações e solicitações respondidas pelo mentor. O produtor acessa pelo botão existente “Abrir área do aluno”.
- **Desempenho:** os indicadores existentes de questões, cobertura, tempo e simulados continuam disponíveis.
- **Conquistas:** XP auditável, níveis de participação e recuperação espaçada de erros. Nível não significa domínio.
- Edital, materiais, questões, revisões, flashcards, cursos, anotações e histórico continuam disponíveis, sujeitos às capabilities existentes.

O módulo `frontend/src/guided-workspace.js` concentra a nova experiência e os diálogos. Os exports públicos e o runtime Getfy continuam iguais. O antigo diagnóstico baseado em armazenamento local e as sequências de chamadas independentes para conclusão foram removidos da interface.

## Planejamento e execução

1. Atribua concurso e edital ao aluno pelas ferramentas existentes.
2. Registre diagnóstico: disponibilidade diária, nível informado, dificuldades, meta e fuso horário. É salvo por tenant/aluno/concurso, sem depender do navegador.
3. No espaço do aluno como mentor, abra **Meu plano → Prévia e publicação**. Selecione matérias, prioridades, afinidade e duração dos blocos.
4. Revise a prévia e informe o motivo da versão. O servidor guarda a prévia por 15 minutos na sessão autenticada e rejeita publicação se o plano, revisões ou diagnóstico mudarem nesse intervalo.
5. O aluno registra os minutos realmente realizados e, opcionalmente, resultados autodeclarados. Uma transação grava sessão, resultado, conclusão e recibo idempotente. Reenvio do mesmo identificador não duplica; reutilização com outro conteúdo retorna 409.
6. Para reprogramar, o mentor revisa uma nova prévia. Apenas pendências de estudo recebem outras datas. Histórico anterior e sessões são preservados. Revisões existentes mantêm reservas próprias.

Agenda: respeita dias disponíveis, tamanho do bloco e dia anterior à prova; sem data, horizonte de até um ano. Se não couber, responde 422 com orientação para ajustar escopo/carga. Blocos maiores que a disponibilidade não são encaixados à força. Revisões já registradas reservam 30 minutos cada antes da distribuição. Revisões criadas depois podem exigir nova revisão de capacidade pelo mentor; a visão semanal sinaliza sobrecarga.

Ciclo: sem datas fixas, ordenado por prioridade; duração respeita o maior bloco disponível. Não admite a reprogramação por calendário. Para mudar o ciclo, gere outra prévia.

Prioridade combina relevância/peso, cobertura, diferença para a meta, prioridade do mentor e afinidade informada. A ausência de respostas é representada como ausência de evidência, sem atribuir 65% de acerto ao aluno. Nível/diagnóstico são identificados na configuração da versão. As recomendações usam regras explícitas e podem incluir registros autodeclarados; não representam avaliação psicométrica.

O radar considera dias do plano com pendências; descanso previsto não é tratado como abandono. A constância apresentada na área do aluno conta dias planejados cumpridos na semana.

## Gamificação v1

Somente respostas corrigidas no servidor pelo Banco de Questões concedem XP:

| Regra versionada | Critério | XP |
| --- | --- | --- |
| `first_correct_v1` | Primeiro contato registrado com a questão já correto | 5 |
| `recovery_v1` | Novo acerto com erro anterior registrado há pelo menos 24h | 10 |

Cada regra pode recompensar uma questão uma vez por aluno/tenant, inclusive entre concursos. Limite global de 100 XP/dia por aluno/tenant, com dia de recompensa fixado em America/Fortaleza para impedir reinício do limite por troca de fuso. O planejamento e a tela Hoje usam o fuso do perfil. O limite é um teto, não uma meta. Eventos são armazenados, não há leitura/escrita de saldo concorrente. A correção serializa a operação por aluno no banco; a restrição única protege o evento. Níveis sobem a cada 100 XP. Conquistas refletem primeiro acerto e recuperação de uma/cinco questões.

Respostas dadas pelo mentor são identificadas por ator e excluídas das evidências de aprendizagem do aluno.

Cliques, abrir material, cronômetro, flashcards autodeclarados, lançamentos manuais e ações do mentor não concedem XP. Erros não retiram XP. Não há ranking, recompensa retroativa ou bônus por marcar muitas tarefas. Questões respondidas antes da atualização continuam no histórico e influenciam a elegibilidade, sem serem convertidas retroativamente em pontos.

## IA e calendário

As recomendações de acompanhamento funcionam sem provedor de IA. Quando o AI Member existente estiver habilitado, o aluno pode preparar uma pergunta com contexto do acompanhamento; deve revisar e enviar no chat. Não há geração automática paga nem publicação de plano por IA. A conexão, limites e autorização do AI Member continuam sendo responsabilidade dessa integração existente.

A exportação ICS é autenticada, privada, com UID estável, escape de caracteres e dobra de linhas UTF-8. São eventos de dia inteiro: o plano não fornece horário fixo de início. Não publica calendário e não cria notificações ou mensagens externas.

## Atualização e dados

1. Faça backup do banco e dos arquivos.
2. Atualize o pacote completo do plugin, incluindo `src`, `frontend`, `dist` e `migrations`.
3. Rode as migrations pelo mecanismo existente do Getfy; no checkout de desenvolvimento:
   ```sh
   php artisan migrate --path=plugins/mentoria/migrations --force
   ```
4. Para desenvolvimento visual, a partir da raiz do projeto:
   ```sh
   npm ci
   npm ci --prefix plugins/mentoria/frontend
   npm run build --prefix plugins/mentoria/frontend
   ```
5. Valide com um produtor, um aluno e um produto com acesso ao plugin antes de disponibilizar.

A migration é aditiva: adiciona perfis, orientações, eventos e recibos, além de metadados de publicação. Não apaga usuários, produtos, conteúdo, cronogramas, respostas ou sessões existentes. Configurações anteriores continuam legíveis; o diagnóstico fica sem preenchimento até ser informado. Um plano substituído permanece armazenado com estado `substituido`, sem ser falsamente marcado como concluído. Remover item do planejamento o marca como ignorado, preservando suas sessões. Reabrir atividade não apaga sessões.

Para retorno operacional, restaure o pacote anterior mantendo o schema aditivo. Não execute `down()` para voltar a interface: isso descartaria novos perfis, mensagens e eventos. As capabilities do produto e a ativação do plugin continuam sendo os controles existentes; não há migração de arquitetura do core.

## Validação reproduzível

```sh
php artisan test --filter=MentoriaGuidedLearningTest
php plugins/mentoria/tests/route_smoke.php
php plugins/mentoria/tests/question_alternative_normalization.php
npm test --prefix plugins/mentoria/frontend
npm run build --prefix plugins/mentoria/frontend
npx --prefix plugins/mentoria/frontend playwright install chromium
npm run test:browser --prefix plugins/mentoria/frontend
npm run build
```

O teste de navegador monta o componente real com respostas HTTP simuladas, cobrindo interface e contratos, sem acessar produção. Os testes PHP exercitam banco SQLite, middleware, rotas reais, escopo, publicação, execução, recompensas e calendário. São verificações complementares; execução concorrente em MySQL e a conexão externa do AI Member devem ser verificadas no ambiente de homologação.

Variáveis opcionais para o teste de navegador: `PLAYWRIGHT_EXECUTABLE_PATH` seleciona um Chromium existente e `MENTORIA_SCREENSHOTS` define a pasta de screenshots. Não são configurações do produto.
