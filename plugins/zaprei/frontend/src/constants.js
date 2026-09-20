/** Eventos do core que o ZapRei escuta (espelha a chave `events` do plugin.json). */
export const TRIGGER_EVENTS = [
    { id: 'order_pending', label: 'Pedido pendente', eventClass: 'App\\Events\\OrderPending' },
    { id: 'pix_generated', label: 'PIX gerado', eventClass: 'App\\Events\\PixGenerated' },
    { id: 'boleto_generated', label: 'Boleto gerado', eventClass: 'App\\Events\\BoletoGenerated' },
    { id: 'order_completed', label: 'Venda aprovada', eventClass: 'App\\Events\\OrderCompleted' },
    { id: 'access_delivery', label: 'Envio de acesso', eventClass: 'App\\Events\\AccessDeliveryReady' },
    { id: 'order_rejected', label: 'Pagamento recusado', eventClass: 'App\\Events\\OrderRejected' },
    { id: 'order_cancelled', label: 'Pedido cancelado', eventClass: 'App\\Events\\OrderCancelled' },
    { id: 'order_refunded', label: 'Pedido reembolsado', eventClass: 'App\\Events\\OrderRefunded' },
    { id: 'cart_abandoned', label: 'Carrinho abandonado', eventClass: 'App\\Events\\CartAbandoned' },
    { id: 'subscription_created', label: 'Assinatura criada', eventClass: 'App\\Events\\SubscriptionCreated' },
    { id: 'subscription_renewed', label: 'Assinatura renovada', eventClass: 'App\\Events\\SubscriptionRenewed' },
    { id: 'subscription_cancelled', label: 'Assinatura cancelada', eventClass: 'App\\Events\\SubscriptionCancelled' },
    { id: 'subscription_past_due', label: 'Assinatura em atraso', eventClass: 'App\\Events\\SubscriptionPastDue' },
];

export function eventLabel(eventClass) {
    return TRIGGER_EVENTS.find((event) => event.eventClass === eventClass)?.label || eventClass || '—';
}

/** Variáveis disponíveis nos textos das mensagens (ver Support\OrderReader::describe). */
export const TEMPLATE_VARIABLES = [
    { token: '{{customer.name}}', label: 'Nome do cliente' },
    { token: '{{customer.first_name}}', label: 'Primeiro nome' },
    { token: '{{customer.email}}', label: 'E-mail do cliente' },
    { token: '{{customer.phone}}', label: 'Telefone do cliente' },
    { token: '{{order.id}}', label: 'ID do pedido' },
    { token: '{{order.status}}', label: 'Status do pedido' },
    { token: '{{order.amount_formatted}}', label: 'Valor formatado' },
    { token: '{{order.product.name}}', label: 'Nome do produto' },
    { token: '{{checkout_link}}', label: 'Link do checkout' },
    { token: '{{pix.copy_paste}}', label: 'PIX copia e cola' },
    { token: '{{pix.qrcode}}', label: 'QR Code do PIX' },
    { token: '{{boleto.barcode}}', label: 'Linha digitável do boleto' },
    { token: '{{boleto.pdf_url}}', label: 'Link do PDF do boleto' },
    { token: '{{access.link}}', label: 'Link de acesso' },
    { token: '{{access.email}}', label: 'Login de acesso' },
    { token: '{{access.password}}', label: 'Senha de acesso' },
    { token: '{{last_reply}}', label: 'Última resposta do cliente' },
];

/** Blocos disponíveis no editor visual (espelha Services\FlowGraph). */
export const NODE_TYPES = [
    { type: 'trigger', label: 'Gatilho', description: 'Início do fluxo. Define qual evento dispara as mensagens.' },
    { type: 'send_message', label: 'Enviar mensagem', description: 'Texto, mídia ou botões pelo WhatsApp.' },
    { type: 'delay', label: 'Aguardar', description: 'Espera antes de seguir para o próximo bloco.' },
    { type: 'condition', label: 'Condição', description: 'Bifurca o fluxo entre as saídas SIM e NÃO.' },
    { type: 'wait_reply', label: 'Aguardar resposta', description: 'Espera o cliente responder, com saída alternativa se o tempo esgotar.' },
    { type: 'end', label: 'Fim', description: 'Encerra a execução do fluxo.' },
];

/** Espelha os endpoints /send/* da Evolution GO (Swagger da instância). */
export const MESSAGE_MODES = [
    { value: 'text', label: 'Texto' },
    { value: 'image', label: 'Imagem' },
    { value: 'video', label: 'Vídeo' },
    { value: 'audio', label: 'Áudio' },
    { value: 'document', label: 'Documento' },
    { value: 'sticker', label: 'Figurinha' },
    { value: 'buttons', label: 'Botões' },
    { value: 'list', label: 'Lista' },
    { value: 'location', label: 'Localização' },
    { value: 'contact', label: 'Contato' },
    { value: 'poll', label: 'Enquete' },
    { value: 'link', label: 'Link com prévia' },
];

export const BUTTON_TYPES = [
    { value: 'reply', label: 'Resposta rápida' },
    { value: 'url', label: 'Abrir link' },
    { value: 'call', label: 'Ligar' },
    { value: 'copy', label: 'Copiar código' },
    { value: 'pix', label: 'Pagar com PIX' },
];

export const PIX_KEY_TYPES = [
    { value: 'phone', label: 'Telefone' },
    { value: 'email', label: 'E-mail' },
    { value: 'cpf', label: 'CPF' },
    { value: 'cnpj', label: 'CNPJ' },
    { value: 'random', label: 'Chave aleatória' },
];

export const CONDITION_KINDS = [
    { value: 'order_is_paid', label: '✅ Pedido foi pago? (status = Aprovado/Concluído)' },
    { value: 'order_status_is', label: 'Status específico do pedido é…' },
    { value: 'payment_method_is', label: 'Método de pagamento é…' },
    { value: 'event_is', label: 'Evento é…' },
    { value: 'has_phone', label: 'Cliente tem telefone válido' },
];

/** Valores reais de Order::status (App\Models\Order / webhooks de pagamento). */
export const ORDER_STATUS_OPTIONS = [
    { value: 'pending', label: 'Pendente' },
    { value: 'completed', label: 'Aprovado / Concluído' },
    { value: 'rejected', label: 'Recusado' },
    { value: 'cancelled', label: 'Cancelado' },
    { value: 'refunded', label: 'Reembolsado' },
];

/** Valores reais de Order::checkoutPaymentMethod() — não é o slug do gateway. */
export const PAYMENT_METHOD_OPTIONS = [
    { value: 'pix', label: 'PIX' },
    { value: 'pix_auto', label: 'PIX automático' },
    { value: 'card', label: 'Cartão de crédito' },
    { value: 'boleto', label: 'Boleto bancário' },
    { value: 'apple_pay', label: 'Apple Pay' },
    { value: 'google_pay', label: 'Google Pay' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'crypto', label: 'Criptomoeda' },
];

export const RECIPIENT_TYPES = [
    { value: 'customer', label: 'Cliente do evento' },
    { value: 'custom', label: 'Número fixo' },
    { value: 'group', label: 'Grupo do WhatsApp' },
];

const SECONDS_PER_UNIT = { seconds: 1, minutes: 60, hours: 3600, days: 86400 };

export function secondsFromValueUnit(value, unit) {
    const n = Number.isFinite(value) ? value : parseInt(value, 10) || 0;

    return Math.max(0, Math.min(86400, n * (SECONDS_PER_UNIT[unit] || 1)));
}

/** Decompõe segundos brutos (grafos antigos) na maior unidade "redonda". */
export function valueUnitFromSeconds(seconds) {
    const s = Number.isFinite(seconds) ? seconds : 0;
    if (s > 0 && s % SECONDS_PER_UNIT.days === 0) return { value: s / SECONDS_PER_UNIT.days, unit: 'days' };
    if (s > 0 && s % SECONDS_PER_UNIT.hours === 0) return { value: s / SECONDS_PER_UNIT.hours, unit: 'hours' };
    if (s > 0 && s % SECONDS_PER_UNIT.minutes === 0) return { value: s / SECONDS_PER_UNIT.minutes, unit: 'minutes' };

    return { value: s, unit: 'seconds' };
}

const DELAY_UNIT_LABELS = { seconds: 'segundos', minutes: 'minutos', hours: 'horas', days: 'dias' };

export function delayUnitLabel(unit) {
    return DELAY_UNIT_LABELS[unit] || 'minutos';
}

export function nodeLabel(type) {
    return NODE_TYPES.find((node) => node.type === type)?.label || type;
}

export function defaultNodeData(type, eventClass = '') {
    if (type === 'trigger') return { event_class: eventClass };
    if (type === 'send_message') return { mode: 'text', recipient_type: 'customer', text: 'Olá {{customer.first_name}}!' };
    if (type === 'delay') return { delay_value: 15, delay_unit: 'minutes', seconds: 900 };
    if (type === 'condition') return { kind: 'order_is_paid', value: '' };
    if (type === 'wait_reply') return { delay_value: 24, delay_unit: 'hours', seconds: 86400 };
    return {};
}

/** Estrutura inicial ao trocar o tipo de mensagem no editor — evita campos undefined. */
export function defaultModeData(mode) {
    return {
        buttons: { title: '', footer: '', buttons: [{ type: 'reply', displayText: '' }] },
        list: { title: '', footer: '', button_text: 'Ver opções', sections: [{ title: '', rows: [{ title: '', description: '' }] }] },
        location: { latitude: '', longitude: '', location_name: '', address: '' },
        contact: { contact_name: '', contact_phone: '', organization: '' },
        poll: { question: '', options: ['', ''], max_answers: 1 },
        link: { url: '', title: '', description: '', text: '', image_url: '' },
    }[mode] || {};
}

/** Grafo inicial de um fluxo novo: gatilho → mensagem → fim. */
export function defaultGraph(eventClass) {
    const text = eventClass === 'App\\Events\\AccessDeliveryReady'
        ? 'Olá {{customer.first_name}}! Seu pagamento foi aprovado.\n\nAcesso ao produto *{{order.product.name}}*:\n\n🔗 {{access.link}}\n👤 {{access.email}}\n🔑 {{access.password}}'
        : 'Olá {{customer.first_name}}!\n\nProduto: {{order.product.name}}\nValor: {{order.amount_formatted}}\nLink: {{checkout_link}}';

    return {
        nodes: [
            { id: 'trigger', type: 'trigger', x: 80, y: 200, data: { event_class: eventClass } },
            { id: 'message_1', type: 'send_message', x: 400, y: 200, data: { mode: 'text', recipient_type: 'customer', text } },
            { id: 'end_1', type: 'end', x: 720, y: 200, data: {} },
        ],
        edges: [
            { from: 'trigger', to: 'message_1' },
            { from: 'message_1', to: 'end_1' },
        ],
    };
}

export const CAMPAIGN_AUDIENCES = [
    { value: 'all', label: 'Toda a base' },
    { value: 'buyer', label: 'Apenas compradores' },
    { value: 'imported', label: 'Apenas importados (CSV)' },
];

export const CAMPAIGN_STATUS_LABELS = {
    scheduled: 'Agendada',
    processing: 'Em andamento',
    completed: 'Concluída',
    cancelled: 'Cancelada',
};

export const SEND_STATUS_LABELS = {
    pending: 'Na fila',
    sent: 'Enviado',
    failed: 'Falhou',
    cancelled: 'Cancelado',
};

export const RUN_STATUS_LABELS = {
    running: 'Em execução',
    waiting: 'Aguardando',
    completed: 'Concluída',
    failed: 'Falhou',
};
