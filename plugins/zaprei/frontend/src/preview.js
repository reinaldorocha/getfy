/**
 * Contexto de exemplo para a simulação de mensagem — mesmas chaves que
 * Support\OrderReader::describe() entrega em produção.
 */
export const SAMPLE_CONTEXT = {
    customer: { name: 'João Silva', first_name: 'João', email: 'joao@exemplo.com', phone: '5511999998888' },
    order: {
        id: 1042,
        status: 'completed',
        amount_formatted: 'R$ 197,00',
        paid_amount_formatted: 'R$ 197,00',
        payment_method_label: 'PIX',
        product: { name: 'Curso VIP' },
        has_bumps: 'Sim',
        has_bumps_bool: true,
        bumps_count: 1,
        bumps: '• E-book Bônus (R$ 47,00)',
        bumps_list: '• E-book Bônus (R$ 47,00)',
        bumps_section: '➕ *Order Bump(s):*\n• E-book Bônus (R$ 47,00)',
        bumps_names: 'E-book Bônus',
        bumps_total_formatted: 'R$ 47,00',
        items_list: '• Curso VIP (R$ 150,00)\n• E-book Bônus (R$ 47,00)',
    },
    bumps: '• E-book Bônus (R$ 47,00)',
    bumps_list: '• E-book Bônus (R$ 47,00)',
    bumps_section: '➕ *Order Bump(s):*\n• E-book Bônus (R$ 47,00)',
    bumps_names: 'E-book Bônus',
    order_bumps: '• E-book Bônus (R$ 47,00)',
    checkout_link: 'https://seu-checkout.com/c/curso-vip',
    pix: { copy_paste: '00020126580014BR.GOV.BCB.PIX...', qrcode: 'data:image/png;base64,…' },
    boleto: { barcode: '34191.79001 01043.510047 91020.150008 1 96610000019700', pdf_url: 'https://…/boleto.pdf' },
    access: { link: 'https://area-de-membros.com/acesso', email: 'joao@exemplo.com', password: '••••••' },
};

const PLACEHOLDER = /\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/g;

function valueAtPath(context, path) {
    return path.split('.').reduce((value, segment) => {
        if (value && typeof value === 'object' && segment in value) return value[segment];

        return undefined;
    }, context);
}

/** Substitui {{caminho}} pelos valores de exemplo — só para pré-visualização no painel. */
export function renderPreview(text, context = SAMPLE_CONTEXT) {
    if (!text) return '';

    return text.replace(PLACEHOLDER, (match, path) => {
        const value = valueAtPath(context, path);

        return value === undefined || value === null ? match : String(value);
    });
}
