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
        product: { name: 'Curso VIP' },
    },
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
