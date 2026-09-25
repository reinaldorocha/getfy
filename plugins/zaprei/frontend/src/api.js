const BASE = '/zaprei';

function csrfToken() {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
}

async function parse(response) {
    const text = await response.text();
    let body = null;
    try {
        body = text ? JSON.parse(text) : null;
    } catch {
        body = null;
    }

    if (!response.ok) {
        const message = body?.message
            || Object.values(body?.errors || {}).flat()[0]
            || 'Não foi possível concluir a operação.';
        const error = new Error(message);
        error.status = response.status;
        error.body = body;
        throw error;
    }

    return body ?? {};
}

function request(path, { method = 'GET', body, query } = {}) {
    const url = new URL(BASE + path, window.location.origin);
    Object.entries(query || {}).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.set(key, value);
        }
    });

    const isForm = body instanceof FormData;

    return fetch(url, {
        method,
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': csrfToken(),
            ...(isForm || body === undefined ? {} : { 'Content-Type': 'application/json' }),
        },
        body: isForm ? body : (body === undefined ? undefined : JSON.stringify(body)),
    }).then(parse);
}

/** Cliente HTTP do painel do ZapRei. */
export const api = {
    connection: () => request('/connection'),
    saveConnection: (payload) => request('/connection', { method: 'PUT', body: payload }),
    testConnection: () => request('/connection/test', { method: 'POST' }),

    products: () => request('/products'),
    groups: () => request('/groups'),

    dailyReport: () => request('/daily-report'),
    saveDailyReport: (payload) => request('/daily-report', { method: 'PUT', body: payload }),
    testDailyReport: (payload) => request('/daily-report/test', { method: 'POST', body: payload }),

    flows: (productId) => request('/flows', { query: { product_id: productId } }),
    createFlow: (payload) => request('/flows', { method: 'POST', body: payload }),
    updateFlow: (id, payload) => request(`/flows/${id}`, { method: 'PUT', body: payload }),
    deleteFlow: (id) => request(`/flows/${id}`, { method: 'DELETE' }),
    duplicateFlow: (id) => request(`/flows/${id}/duplicate`, { method: 'POST' }),
    testFlow: (id, payload) => request(`/flows/${id}/test`, {
        method: 'POST',
        body: typeof payload === 'string' ? { phone: payload } : payload,
    }),
    runs: () => request('/flows/runs'),
    retryRun: (id) => request(`/flows/runs/${id}/retry`, { method: 'POST' }),

    contacts: (params) => request('/contacts', { query: params }),
    importContacts: (file) => request('/contacts/import', { method: 'POST', body: toFormData(file) }),
    deleteContact: (id) => request(`/contacts/${id}`, { method: 'DELETE' }),

    campaigns: () => request('/campaigns'),
    createCampaign: (payload) => request('/campaigns', { method: 'POST', body: payload }),
    campaign: (id) => request(`/campaigns/${id}`),
    cancelCampaign: (id) => request(`/campaigns/${id}/cancel`, { method: 'POST' }),

    uploadMedia: (file) => request('/media', { method: 'POST', body: toFormData(file) }),
};

function toFormData(file) {
    const form = new FormData();
    form.append('file', file);

    return form;
}
