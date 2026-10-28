export class MentoriaApiError extends Error {
    constructor(message, { status = 0, body = {}, url = '' } = {}) {
        super(message);
        this.name = 'MentoriaApiError';
        this.status = status;
        this.body = body;
        this.url = url;
    }

    get isValidationError() {
        return this.status === 422;
    }

    get isForbidden() {
        return this.status === 401 || this.status === 403;
    }
}

export function csrfToken() {
    if (typeof document === 'undefined') return '';
    return document.querySelector('meta[name="csrf-token"]')?.content || '';
}

function isFormData(body) {
    return typeof FormData !== 'undefined' && body instanceof FormData;
}

function errorMessage(body) {
    if (body?.errors && typeof body.errors === 'object') {
        const messages = Object.values(body.errors).flat().filter(Boolean);
        if (messages.length) return messages.join(' ');
    }

    return body?.message || 'Não foi possível concluir a operação.';
}

/**
 * Cliente comum do plugin. Cada chamada preserva cookies do Getfy e normaliza
 * os erros para que uma tela não trate falha de gravação como sucesso local.
 */
export async function requestJson(url, options = {}) {
    const headers = {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': csrfToken(),
        ...(isFormData(options.body) ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {}),
    };

    let response;
    try {
        response = await fetch(url, {
            credentials: 'same-origin',
            ...options,
            headers,
        });
    } catch (cause) {
        throw new MentoriaApiError('Não foi possível conectar ao servidor. Tente novamente.', { url, body: { cause } });
    }

    const contentType = response.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : { message: await response.text().catch(() => '') };

    if (!response.ok) {
        throw new MentoriaApiError(errorMessage(body), {
            status: response.status,
            body,
            url,
        });
    }

    return body;
}
