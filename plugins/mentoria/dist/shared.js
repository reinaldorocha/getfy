import { h } from 'vue';

export const csrf = () => document.querySelector('meta[name="csrf-token"]')?.content || '';

export async function api(url, options = {}) {
    const isForm = options.body instanceof FormData;
    const headers = {
        Accept: 'application/json',
        'X-CSRF-TOKEN': csrf(),
        ...(isForm ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {}),
    };
    const response = await fetch(url, {
        credentials: 'same-origin',
        ...options,
        headers,
    });
    const contentType = response.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : { message: await response.text().catch(() => '') };
    if (!response.ok) {
        const errors = body.errors && typeof body.errors === 'object'
            ? Object.values(body.errors).flat().join(' ')
            : '';
        throw new Error(errors || body.message || 'Não foi possível concluir a operação.');
    }
    return body;
}

export const cn = (...values) => values.filter(Boolean).join(' ');

export const btn = (label, click, kind = 'primary', extra = {}) => h('button', {
    type: extra.type || 'button',
    disabled: !!extra.disabled,
    onClick: click,
    class: cn(
        'mentoria-button',
        'mentoria-button--' + kind,
        extra.disabled && 'mentoria-button--disabled',
        extra.class,
    ),
}, label);

export const badge = (text, tone = 'zinc') => {
    return h('span', { class: cn('mentoria-badge', 'mentoria-badge--' + tone) }, String(text ?? ''));
};

export const card = (children, extraClass = '') => h('section', {
    class: cn('mentoria-card', extraClass),
}, children);

export const sectionTitle = (title, subtitle = '', action = null) => h('div', {
    class: 'mentoria-section-title',
}, [
    h('div', [
        h('h2', {}, title),
        subtitle ? h('p', {}, subtitle) : null,
    ]),
    action,
]);

export const stat = (label, value, hint = '', tone = '') => h('div', {
    class: cn(
        'mentoria-stat',
        tone,
    ),
}, [
    h('div', { class: 'mentoria-stat__label' }, label),
    h('div', { class: 'mentoria-stat__value' }, String(value ?? 0)),
    hint ? h('div', { class: 'mentoria-stat__hint' }, hint) : null,
]);

export const empty = (text) => h('div', {
    class: 'mentoria-empty-state',
}, text);

export const field = (label, control, hint = '') => h('label', { class: 'mentoria-field' }, [
    h('span', { class: 'mentoria-field__label' }, label),
    control,
    hint ? h('span', { class: 'mentoria-field__hint' }, hint) : null,
]);

export const input = (model, key, attrs = {}) => h('input', {
    type: attrs.type || 'text',
    value: model[key] ?? '',
    min: attrs.min,
    max: attrs.max,
    step: attrs.step,
    placeholder: attrs.placeholder,
    required: attrs.required,
    disabled: attrs.disabled,
    class: cn('mentoria-control', attrs.class),
    onInput: (e) => {
        let value = e.target.value;
        if (attrs.number) value = value === '' ? '' : Number(value);
        model[key] = value;
    },
});

export const textarea = (model, key, attrs = {}) => h('textarea', {
    value: model[key] ?? '',
    rows: attrs.rows || 4,
    placeholder: attrs.placeholder,
    required: attrs.required,
    class: cn('mentoria-control', attrs.class),
    onInput: (e) => model[key] = e.target.value,
});

export const select = (model, key, options, attrs = {}) => h('select', {
    value: model[key] ?? '',
    disabled: attrs.disabled,
    required: attrs.required,
    class: cn('mentoria-control', attrs.class),
    onChange: (e) => {
        model[key] = attrs.number ? Number(e.target.value) : e.target.value;
        attrs.onChange?.(e.target.value);
    },
}, [
    attrs.placeholder !== undefined ? h('option', { value: '' }, attrs.placeholder) : null,
    ...options.map((option) => h('option', { value: option.value, disabled: option.disabled }, option.label)),
]);

export const checkbox = (model, key, label, attrs = {}) => h('label', {
    class: 'mentoria-check',
}, [
    h('input', {
        type: 'checkbox',
        checked: !!model[key],
        disabled: attrs.disabled,
        class: 'mentoria-check__input',
        onChange: (e) => model[key] = e.target.checked,
    }),
    h('span', label),
]);

export const progressBar = (value, label = null) => {
    const normalized = Math.max(0, Math.min(100, Number(value) || 0));
    return h('div', { class: 'mentoria-progress' }, [
        label !== null ? h('div', { class: 'mentoria-progress__label' }, [
            h('span', label),
            h('span', normalized.toFixed(normalized % 1 ? 1 : 0) + '%'),
        ]) : null,
        h('div', { class: 'mentoria-progress__track' }, [
            h('div', { class: 'mentoria-progress__fill', style: { width: normalized + '%' } }),
        ]),
    ]);
};

export const tabs = (items, active, setActive) => h('div', {
    class: 'mentoria-tabs',
}, items.map((item) => h('button', {
    type: 'button',
    onClick: () => setActive(item.id),
    class: cn(
        'mentoria-tab',
        active === item.id
            ? 'mentoria-tab--active'
            : '',
    ),
}, [
    item.icon ? h('span', { class: 'mentoria-tab__icon', 'aria-hidden': 'true' }, item.icon) : null,
    h('span', { class: 'mentoria-tab__label' }, item.label),
])));

export const modal = (title, body, close, actions = null, width = 'max-w-3xl') => h('div', {
    class: 'mentoria-modal',
    onClick: close,
}, [
    h('div', {
        class: cn('mentoria-modal__dialog', width),
        onClick: (e) => e.stopPropagation(),
    }, [
        h('div', { class: 'mentoria-modal__header' }, [
            h('h3', {}, title),
            btn('Fechar', close, 'ghost'),
        ]),
        body,
        actions ? h('div', { class: 'mentoria-modal__actions' }, actions) : null,
    ]),
]);

export const alertBox = (message, tone = 'error') => {
    if (!message) return null;
    return h('div', { class: cn('mentoria-notice', 'mentoria-notice--' + tone) }, message);
};

export const fmtDate = (value) => {
    if (!value) return '—';
    const date = new Date(String(value).length <= 10 ? value + 'T12:00:00' : value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString('pt-BR');
};

export const fmtDateTime = (value) => {
    if (!value) return '—';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString('pt-BR');
};

export const fmtHours = (seconds) => {
    const total = Math.max(0, Number(seconds) || 0);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    return hours ? hours + 'h ' + minutes + 'min' : minutes + 'min';
};

export const fmtMoney = (value) => {
    if (value === null || value === undefined || value === '') return '—';
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const safeJson = (value, fallback = []) => {
    if (Array.isArray(value) || (value && typeof value === 'object')) return value;
    if (typeof value !== 'string' || !value.trim()) return fallback;
    try { return JSON.parse(value); } catch { return fallback; }
};

export const jsonBody = (data) => JSON.stringify(data);

export const riskBadge = (risk) => {
    const value = String(risk || 'verde');
    return badge(value === 'vermelho' ? 'Alto risco' : value === 'amarelo' ? 'Atenção' : 'Em dia', value === 'vermelho' ? 'red' : value === 'amarelo' ? 'amber' : 'green');
};

export const countdown = (date) => {
    if (!date) return null;
    const target = new Date(String(date).slice(0, 10) + 'T08:00:00').getTime();
    const diff = Math.max(0, target - Date.now());
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
    };
};

export const optionize = (items, valueKey = 'id', labelKey = 'name') => (items || []).map((item) => ({
    value: String(item[valueKey]),
    label: String(item[labelKey] ?? item[valueKey]),
}));
