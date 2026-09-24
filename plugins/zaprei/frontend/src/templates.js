/**
 * Modelos prontos de fluxo — ponto de partida comum para automações de
 * recuperação, entrega, pós-venda e notificações.
 */
export const FLOW_TEMPLATES = [
    {
        id: 'pix_recovery',
        icon: '⚡',
        badge: 'Mais popular',
        title: 'Recuperação de PIX com verificação',
        description: 'Espera 15 min → verifica se foi pago → se não, envia um lembrete e depois o botão para copiar o PIX.',
        eventClass: 'App\\Events\\PixGenerated',
        graph: (eventClass) => ({
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: eventClass } },
                { id: 'delay1', type: 'delay', x: 320, y: 180, data: { delay_value: 15, delay_unit: 'minutes', seconds: 900 } },
                { id: 'cond1', type: 'condition', x: 580, y: 180, data: { kind: 'order_is_paid', value: '' } },
                {
                    id: 'send_reminder', type: 'send_message', x: 860, y: 260,
                    data: {
                        mode: 'text', recipient_type: 'customer',
                        text: 'Olá {{customer.first_name}}! ⏳\n\nNotamos que seu pedido de *{{order.product.name}}* ({{order.amount_formatted}}) ainda está aguardando pagamento.\n\nToque no botão da próxima mensagem para copiar o código PIX e finalizar rapidinho!',
                    },
                },
                {
                    id: 'send_pix_button', type: 'send_message', x: 1140, y: 260,
                    data: {
                        mode: 'buttons', recipient_type: 'customer',
                        title: 'Pagamento pendente',
                        text: '*{{order.product.name}}* — {{order.amount_formatted}}',
                        footer: 'Assim que você pagar, seu acesso é liberado na hora!',
                        buttons: [{ type: 'copy', displayText: 'Copiar código PIX', copyCode: '{{pix.copy_paste}}' }],
                    },
                },
                { id: 'end_paid', type: 'end', x: 860, y: 90, data: {} },
                { id: 'end_sent', type: 'end', x: 1420, y: 260, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true' } },
                { from: 'cond1', to: 'send_reminder', data: { condition: 'false' } },
                { from: 'send_reminder', to: 'send_pix_button' },
                { from: 'send_pix_button', to: 'end_sent' },
            ],
        }),
    },
    {
        id: 'cart_recovery',
        icon: '🛒',
        badge: 'Recuperação',
        title: 'Recuperação de carrinho abandonado',
        description: 'Espera 30 min → se ainda não comprou, envia um lembrete e um botão direto para o checkout.',
        eventClass: 'App\\Events\\CartAbandoned',
        graph: (eventClass) => ({
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: eventClass } },
                { id: 'delay1', type: 'delay', x: 320, y: 180, data: { delay_value: 30, delay_unit: 'minutes', seconds: 1800 } },
                { id: 'cond1', type: 'condition', x: 580, y: 180, data: { kind: 'order_is_paid', value: '' } },
                {
                    id: 'send_cart', type: 'send_message', x: 860, y: 260,
                    data: {
                        mode: 'text', recipient_type: 'customer',
                        text: 'Oi {{customer.first_name}}! Notamos que você não finalizou sua compra em *{{order.product.name}}*.\n\nSeu pedido ficou reservado! Toque no botão da próxima mensagem para concluir agora.',
                    },
                },
                {
                    id: 'send_cart_button', type: 'send_message', x: 1140, y: 260,
                    data: {
                        mode: 'buttons', recipient_type: 'customer',
                        title: 'Finalize sua compra',
                        text: '*{{order.product.name}}*',
                        footer: 'Seu pedido está reservado.',
                        buttons: [{ type: 'url', displayText: 'Concluir compra', url: '{{checkout_link}}' }],
                    },
                },
                { id: 'end_paid', type: 'end', x: 860, y: 90, data: {} },
                { id: 'end_sent', type: 'end', x: 1420, y: 260, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true' } },
                { from: 'cond1', to: 'send_cart', data: { condition: 'false' } },
                { from: 'send_cart', to: 'send_cart_button' },
                { from: 'send_cart_button', to: 'end_sent' },
            ],
        }),
    },
    {
        id: 'access_delivery',
        icon: '🔑',
        badge: 'Essencial',
        title: 'Entrega imediata de acesso',
        description: 'Venda aprovada → envia link, e-mail e senha, depois um botão para acessar direto.',
        eventClass: 'App\\Events\\AccessDeliveryReady',
        graph: (eventClass) => ({
            nodes: [
                { id: 'trigger', type: 'trigger', x: 80, y: 180, data: { event_class: eventClass } },
                {
                    id: 'send_access', type: 'send_message', x: 400, y: 180,
                    data: {
                        mode: 'text', recipient_type: 'customer',
                        text: 'Parabéns {{customer.first_name}}! 🎉\n\nSeu pagamento para *{{order.product.name}}* foi aprovado com sucesso!\n\nDados de acesso:\n🔗 Link: {{access.link}}\n👤 Login: {{access.email}}\n🔑 Senha: {{access.password}}\n\nToque no botão da próxima mensagem para acessar direto, sem precisar copiar o link!',
                    },
                },
                {
                    id: 'send_access_button', type: 'send_message', x: 680, y: 180,
                    data: {
                        mode: 'buttons', recipient_type: 'customer',
                        title: 'Acesso liberado!',
                        text: '*{{order.product.name}}*',
                        footer: 'Bons estudos!',
                        buttons: [{ type: 'url', displayText: 'Acessar agora', url: '{{access.link}}' }],
                    },
                },
                { id: 'end', type: 'end', x: 960, y: 180, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'send_access' },
                { from: 'send_access', to: 'send_access_button' },
                { from: 'send_access_button', to: 'end' },
            ],
        }),
    },
    {
        id: 'upsell_offer',
        icon: '🚀',
        badge: 'Aumentar LTV',
        title: 'Oferta de Upsell pós-compra (Cross-sell)',
        description: 'Venda aprovada → espera 24 horas → envia recomendação de produto complementar com botão exclusivo.',
        eventClass: 'App\\Events\\OrderCompleted',
        graph: (eventClass) => ({
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: eventClass } },
                { id: 'delay_24h', type: 'delay', x: 320, y: 180, data: { delay_value: 24, delay_unit: 'hours', seconds: 86400 } },
                {
                    id: 'send_upsell_text',
                    type: 'send_message',
                    x: 600,
                    y: 180,
                    data: {
                        mode: 'text',
                        recipient_type: 'customer',
                        text: 'Olá, {{customer.first_name}}! Tudo bem? 😊\n\nPassando para saber como está sua experiência com o *{{order.product.name}}*!\n\nPara te ajudar a acelerar ainda mais seus resultados, liberamos uma condição especial no nosso módulo avançado.\n\nToque no botão abaixo para conferir a oferta com desconto exclusivo de aluno:',
                    },
                },
                {
                    id: 'send_upsell_button',
                    type: 'send_message',
                    x: 900,
                    y: 180,
                    data: {
                        mode: 'buttons',
                        recipient_type: 'customer',
                        title: '🚀 Oferta Especial de Upsell',
                        text: 'Acelere seus resultados com o próximo nível do *{{order.product.name}}*',
                        footer: 'Condição exclusiva para alunos',
                        buttons: [{ type: 'url', displayText: 'Garantir com Desconto VIP', url: '{{checkout_link}}' }],
                    },
                },
                { id: 'end_upsell', type: 'end', x: 1200, y: 180, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay_24h' },
                { from: 'delay_24h', to: 'send_upsell_text' },
                { from: 'send_upsell_text', to: 'send_upsell_button' },
                { from: 'send_upsell_button', to: 'end_upsell' },
            ],
        }),
    },
    {
        id: 'admin_sale_notification',
        icon: '🔔',
        badge: 'Notificação',
        title: 'Notificar venda aprovada no meu WhatsApp',
        description: 'Venda aprovada na Getfy → envia uma notificação instantânea para o seu próprio WhatsApp com valor, produto e forma de pagamento.',
        eventClass: 'App\\Events\\OrderCompleted',
        graph: (eventClass) => ({
            nodes: [
                { id: 'trigger', type: 'trigger', x: 80, y: 180, data: { event_class: eventClass } },
                {
                    id: 'send_admin_alert',
                    type: 'send_message',
                    x: 400,
                    y: 180,
                    data: {
                        mode: 'text',
                        recipient_type: 'custom',
                        custom_phone: '5511999999999',
                        text: '🎉 *NOVA VENDA APROVADA!* 🚀\n\n📦 *Produto:* {{order.product.name}}\n💰 *Valor:* {{order.amount_formatted}}\n💳 *Pagamento:* {{order.payment_method_label}}\n👤 *Cliente:* {{customer.name}}\n📱 *Telefone:* {{customer.phone}}\n🆔 *Pedido:* #{{order.id}}\n\n_Notificação automática ZapRei / Getfy._',
                    },
                },
                { id: 'end_alert', type: 'end', x: 720, y: 180, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'send_admin_alert' },
                { from: 'send_admin_alert', to: 'end_alert' },
            ],
        }),
    },
];
