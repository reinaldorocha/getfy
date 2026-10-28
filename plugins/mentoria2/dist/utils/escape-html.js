const htmlEntities = Object.freeze({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
});

export function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

export function plainTextWithBreaks(value) {
    return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

export function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const blockedTags = new Set(['base', 'embed', 'frame', 'frameset', 'iframe', 'link', 'meta', 'object', 'script']);
const urlAttributes = new Set(['action', 'formaction', 'href', 'src', 'xlink:href']);

/**
 * Última barreira antes de inserir os templates do plugin no DOM.
 *
 * As telas usam templates literais para a estrutura visual, portanto este
 * sanitizador mantém a marcação esperada e elimina vetores executáveis que
 * possam surgir de conteúdo persistido ainda não escapado por uma tela.
 */
export function isSafeHtmlUrl(value) {
    const normalized = String(value ?? '')
        .replace(/[\u0000-\u001F\u007F\s]+/g, '')
        .toLowerCase();

    return !/^(?:javascript:|vbscript:|data:)/.test(normalized);
}

export function sanitizeRenderedHtml(markup) {
    const html = String(markup ?? '');
    if (typeof DOMParser === 'undefined') return html;

    const documentFragment = new DOMParser().parseFromString(html, 'text/html');
    documentFragment.querySelectorAll([...blockedTags].join(',')).forEach((element) => element.remove());

    documentFragment.querySelectorAll('*').forEach((element) => {
        [...element.attributes].forEach((attribute) => {
            const name = attribute.name.toLowerCase();
            const value = attribute.value;

            if (name.startsWith('on') || name === 'srcdoc') {
                element.removeAttribute(attribute.name);
                return;
            }

            if (urlAttributes.has(name) && !isSafeHtmlUrl(value)) {
                element.removeAttribute(attribute.name);
                return;
            }

            if (name === 'style' && /(?:expression\s*\(|behavior\s*:|url\s*\(\s*['\"]?\s*(?:javascript:|vbscript:|data:text\/html))/i.test(value)) {
                element.removeAttribute(attribute.name);
            }
        });
    });

    return documentFragment.body.innerHTML;
}
