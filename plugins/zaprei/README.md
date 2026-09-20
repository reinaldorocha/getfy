# ZapRei

Automação de WhatsApp para o Getfy: fluxos visuais, campanhas em massa e base de
contatos, disparando mensagens exclusivamente pela **Evolution GO** (evo-go).

## Instalação

1. `php artisan plugin:validate zaprei`
2. Rode as migrations (`php artisan migrate` ou pelo painel)
3. Habilite o plugin em **Gerenciar plugins**
4. Configure a conexão em **Integrações → ZapRei**: URL da instância, nome da
   instância e API key da Evolution GO

## Estrutura

- `src/Evolution/` — cliente HTTP, credenciais e montagem de payload da Evolution GO
- `src/Services/FlowEngine.php` + `FlowGraph.php` — motor que percorre o grafo salvo pelo editor visual
- `src/Services/ConnectionRepository.php` — credenciais cifradas por tenant (`App\PluginSdk\Getfy::config()`)
- `src/Listeners/DispatchFlows.php` — ponte entre os eventos do core (venda, PIX, boleto, assinatura, carrinho abandonado) e os fluxos
- `frontend/` — fonte Vue do bundle (`npm run build` gera `dist/plugin-ui.js`)

## Eventos suportados

Pedido pendente, venda aprovada, pagamento recusado, pedido cancelado, pedido
reembolsado, PIX gerado, boleto gerado, envio de acesso, carrinho abandonado,
assinatura criada/renovada/cancelada/em atraso.

## Rebuild do frontend

```bash
cd plugins/zaprei/frontend
npm install
npm run build
```

O bundle é publicado em `dist/plugin-ui.js` (Vue é externo — o Getfy injeta a
mesma instância do painel via import map, ver `resources/views/app.blade.php`).
