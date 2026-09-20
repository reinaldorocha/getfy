# CJC — Chega Junto Concurseiro para Getfy

Plugin de mentoria e preparação para concursos. O plugin **não cria usuários, sessões, senhas, SMTP, planos nem vínculo mentor-aluno próprio**: tudo isso é reutilizado do Getfy.

## Modelo de acesso

- `admin` / `infoprodutor`: administra o CJC do `tenant_id` atual.
- `aluno`: entra no CJC quando possui um produto presente em `cjc_products` daquele tenant.
- A fonte de verdade do vínculo é `product_user -> products -> tenant_id`.
- Revogar o produto no Getfy revoga o acesso ao CJC automaticamente.

## Ativação

1. Instale/ative o plugin **CJC** no painel de Plugins do Getfy.
2. Rode as migrations do Getfy.
3. Abra `/cjc`.
4. Marque um ou mais produtos do tenant como produtos CJC.
5. Alunos que possuírem esses produtos passam a acessar `/cjc-estudos/{tenant_id}`.

## Capabilities de produto

As capabilities ficam em `cjc_products.capabilities`. As principais são:

- `cronograma`
- `cronograma_inteligente`
- `questoes`
- `flashcards`
- `revisoes`
- `simulados`
- `cadernos`

O conjunto efetivo do aluno é a união das capabilities dos produtos CJC ativos que ele possui no tenant.

## Domínio migrado do CJC original

O plugin cobre concursos, editais, matérias, tópicos/subtópicos, progresso, materiais, cronogramas, sessões de estudo, revisões, flashcards com SM-2, banco de questões, simulados, cadernos e métricas/radar.

Cursos/aulas, autenticação, pagamentos, assinaturas, e-mail e white-label permanecem responsabilidade do core Getfy para evitar duplicação.
