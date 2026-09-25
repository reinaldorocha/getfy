/**
 * Validação client-side dos blocos de mensagem — espelha exatamente as
 * checagens que o backend faz ao montar o payload para a Evolution GO
 * (Evolution\EvolutionGoPayload), para o erro aparecer na hora de montar o
 * fluxo em vez de só quando o disparo falhar (às vezes horas depois, num
 * bloco de espera).
 */

function text(value) {
    return String(value ?? '').trim();
}

function isValidButton(button) {
    const type = button?.type || 'reply';
    if (type === 'pix') {
        return text(button.key) !== '' && ['phone', 'email', 'cpf', 'cnpj', 'random'].includes(button.keyType);
    }

    const label = text(button?.displayText ?? button?.text);
    if (label === '') return false;
    if (type === 'url') return text(button.url) !== '';
    if (type === 'call') return text(button.phoneNumber) !== '';
    if (type === 'copy') return text(button.copyCode) !== '';

    return true; // reply
}

function isValidRow(row) {
    return text(row?.title) !== '';
}

/**
 * Valida um único bloco de mensagem (o `data` de um nó "Enviar mensagem" do
 * fluxo, ou o `message_data` de uma campanha — mesmo formato).
 *
 * @param {Record<string, unknown>} data
 * @param {string} prefix rótulo prefixado em cada mensagem de erro
 * @returns {string[]}
 */
export function messageDataErrors(data, prefix) {
    const errors = [];
    data = data || {};

    if (data.recipient_type === 'custom' && text(data.custom_phone) === '') {
        errors.push(`${prefix}: informe o número de destino.`);
    }
    if (data.recipient_type === 'group' && text(data.group_id) === '') {
        errors.push(`${prefix}: selecione o grupo de destino.`);
    }

    switch (data.mode) {
        case 'buttons':
            if (!(data.buttons || []).some(isValidButton)) {
                errors.push(`${prefix}: nenhum botão válido configurado.`);
            }
            break;
        case 'list':
            if (!(data.sections || []).some((section) => (section.rows || []).some(isValidRow))) {
                errors.push(`${prefix}: adicione ao menos uma opção com título na lista.`);
            }
            break;
        case 'location':
            if (text(data.latitude) === '' || text(data.longitude) === '') {
                errors.push(`${prefix}: informe latitude e longitude.`);
            }
            break;
        case 'contact':
            if (text(data.contact_name) === '' || text(data.contact_phone) === '') {
                errors.push(`${prefix}: informe nome e telefone do contato.`);
            }
            break;
        case 'poll': {
            const options = (data.options || []).filter((option) => text(option) !== '');
            if (text(data.question) === '' || options.length < 2) {
                errors.push(`${prefix}: informe a pergunta e ao menos 2 opções.`);
            }
            break;
        }
        case 'link':
            if (text(data.url) === '') {
                errors.push(`${prefix}: informe a URL do link.`);
            }
            break;
        case 'image':
        case 'video':
        case 'audio':
        case 'document':
        case 'sticker':
            if (text(data.media_url) === '') {
                errors.push(`${prefix}: selecione um arquivo.`);
            }
            break;
        default:
            if (text(data.text) === '') {
                errors.push(`${prefix}: escreva o texto da mensagem.`);
            }
    }

    return errors;
}

/**
 * @param {Array<{id:string,type:string,data:Record<string,unknown>}> | {nodes: Array<{id:string,type:string,data:Record<string,unknown>}>}} nodesOrGraph
 * @returns {string[]} mensagens de erro; vazio quando o grafo pode ser salvo
 */
export function validateGraph(nodesOrGraph) {
    const errors = [];
    const list = Array.isArray(nodesOrGraph) ? nodesOrGraph : (nodesOrGraph?.nodes || []);

    for (const node of list) {
        if (node.type !== 'send_message') continue;
        const data = node.data || {};
        const label = text(data.mode) || 'text';
        errors.push(...messageDataErrors(data, `Bloco "Enviar mensagem" (${label})`));
    }

    return errors;
}
