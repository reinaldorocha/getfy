# Vitrine de Produtos — Design

## Objetivo

Entregar uma vitrine pública, configurável por produtor e acessível em `https://dominio-do-produtor/store`. Ela permite descobrir produtos selecionados, montar um carrinho, iniciar o checkout multi-produto existente e consultar avaliações de compradores confirmados. A Vitrine é um módulo nativo e independente do futuro Site Institucional/CMS.

## Escopo do MVP

- Catálogo público de produtos explicitamente selecionados pelo produtor.
- Página de produto, busca, filtros por categorias, produtos em destaque, mais vendidos e mais recentes.
- Carrinho e compra imediata integrados ao commerce checkout existente.
- Categorias próprias da Vitrine, criadas, ordenadas e associadas manualmente pelo produtor.
- Uma avaliação imutável por produto e comprador confirmado, com nota de 1 a 5 e comentário.
- Publicação de avaliações configurável por produtor: automática ou mediante moderação manual.
- Identidade visual única e responsiva: logo, cores, banner, descrição curta, contato, redes sociais e links externos de políticas.
- SEO básico: título, descrição, canonical e Open Graph para a Vitrine e páginas de produto.

## Fora do escopo

- Site Institucional, CMS, páginas "Sobre" ou "Contato" editáveis e editor de blocos.
- Templates alternativos de vitrine.
- Novo checkout, gateway, regra de preço, cupom ou regra de entrega.
- Avaliações de visitantes sem compra, múltiplas avaliações, edição/exclusão pelo comprador, respostas ou discussão em comentários.
- Sitemap e editor avançado de SEO.

## Arquitetura

### Limites do módulo

O módulo será implementado no core do Getfy, não como plugin. Ele reutilizará os modelos e serviços de commerce existentes para carrinho e checkout, mas terá suas próprias consultas públicas e regras de seleção de catálogo. Isso preserva os endpoints genéricos de commerce para plugins sem permitir que a Vitrine exponha produtos não selecionados.

Cada Vitrine pertence a um `tenant`. Sua publicação depende de um registro de domínio verificado em `storefront_domains`; não haverá URL hospedada pela Getfy nem domínio/subdomínio novo no MVP.

### Dados

1. **Storefront/Vitrine**: uma configuração por tenant, contendo estado de publicação, identidade visual, informações institucionais, links e `reviews_auto_publish`.
2. **Produtos publicados**: relação ordenada entre a Vitrine e os produtos do tenant. A seleção é manual; novos produtos não aparecem automaticamente.
3. **Categorias**: categorias ordenáveis pertencentes à Vitrine. Um produto selecionado pode pertencer a várias categorias.
4. **Avaliações**: `tenant`, produto, comprador, nota, comentário, estado (`pending` ou `published`) e datas. Uma restrição única garante uma avaliação por produto/comprador.

Nota média e total de avaliações serão derivados somente dos registros publicados. Produtos em destaque são definidos na relação de seleção. "Mais recentes" usa a data de criação do produto; "mais vendidos" considera apenas vendas pagas do mesmo tenant.

### Rotas e experiências

- `/store`: página pública com banner, busca, categorias, destaques, mais vendidos, recentes, catálogo paginado e rodapé institucional.
- `/store/produtos/{checkout_slug}`: detalhes do produto, preço, ofertas/planos quando aplicáveis, avaliações e ações de compra.
- `/store/carrinho`: carrinho do commerce para a Vitrine e ação de checkout.
- `/commerce/checkout/{token}`: checkout existente, sem alteração de regras de pagamento, preços, cupons ou entrega.

"Comprar agora" inicia o commerce checkout para um único produto. "Adicionar ao carrinho" usa o carrinho persistido por cookie existente, permitindo finalizar vários produtos. As APIs e ações usadas pela Vitrine verificam que o produto está ativo, pertence ao tenant resolvido pelo host e está selecionado naquela Vitrine.

### Avaliações

Somente um usuário autenticado com compra confirmada do produto pode criar uma avaliação. No modo automático ela nasce `published`; no modo moderado, `pending`. O produtor pode publicar ou ocultar avaliações pelo painel. Uma avaliação já enviada não pode ser alterada nem substituída pelo comprador.

### Painel

Usuários autorizados do tenant terão uma área "Vitrine" no painel, com seções para:

- ativar/publicar e editar a aparência;
- selecionar e ordenar produtos, incluindo destaque;
- criar, editar, ordenar e associar categorias;
- definir a política de publicação e moderar avaliações;
- abrir a Vitrine publicada.

## Regras de erro e segurança

- Domínio não verificado, Vitrine desativada, produto removido da seleção ou URL inválida retornam 404 sem dados de outro tenant.
- Todas as ações do painel exigem autorização no tenant do usuário.
- A inclusão no carrinho e a compra imediata validam novamente a seleção pública do produto no servidor.
- Avaliações recusam comprador sem pedido confirmado, produto de outro tenant e uma segunda avaliação para a mesma combinação comprador/produto.

## Qualidade e testes

Cobrir com testes feature/unit:

- isolamento entre tenants, domínio e catálogo selecionado;
- busca, categorias, destaque, recentes e ordenação de mais vendidos;
- compra imediata, carrinho e início de checkout;
- permissões do painel e validações de configuração;
- elegibilidade, unicidade, moderação, publicação automática e agregados de avaliações;
- metadados SEO e respostas 404 públicas.

## Decisões confirmadas

- Prioridade: Vitrine de Produtos; Site Institucional será uma iniciativa posterior.
- URL: mesmo domínio do produtor, no caminho `/store`.
- Layout: único, responsivo e configurável; sem templates ou page builder.
- Catálogo: inclusão manual de produtos pelo produtor.
- Categorias: gestão manual, com múltiplas categorias por produto.
- Compra: detalhes do produto oferecem "Comprar agora" e "Adicionar ao carrinho".
- Avaliações: somente compradores; uma avaliação imutável por produto; publicação automática ou moderada configurável.
- Informações da marca: logo, cores, banner, descrição, contato, redes e links externos de políticas.
