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
        'inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition',
        kind === 'primary' && 'bg-sky-600 text-white hover:bg-sky-700',
        kind === 'success' && 'bg-emerald-600 text-white hover:bg-emerald-700',
        kind === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
        kind === 'warning' && 'bg-amber-500 text-zinc-950 hover:bg-amber-400',
        kind === 'ghost' && 'border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800',
        kind === 'soft' && 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
        extra.disabled && 'cursor-not-allowed opacity-50',
        extra.class,
    ),
}, label);

export const badge = (text, tone = 'zinc') => {
    const tones = {
        zinc: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200',
        sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-200',
        green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200',
        red: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-200',
        amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
        violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-200',
    };
    return h('span', { class: cn('inline-flex rounded-full px-2 py-1 text-[11px] font-semibold', tones[tone] || tones.zinc) }, String(text ?? ''));
};

export const card = (children, extraClass = '') => h('section', {
    class: cn('rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900', extraClass),
}, children);

export const sectionTitle = (title, subtitle = '', action = null) => h('div', {
    class: 'mb-4 flex flex-wrap items-start justify-between gap-3',
}, [
    h('div', [
        h('h2', { class: 'text-base font-semibold text-zinc-900 dark:text-white' }, title),
        subtitle ? h('p', { class: 'mt-1 text-xs text-zinc-500' }, subtitle) : null,
    ]),
    action,
]);

export const stat = (label, value, hint = '', tone = '') => h('div', {
    class: cn(
        'rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900',
        tone,
    ),
}, [
    h('div', { class: 'text-[11px] font-semibold uppercase tracking-wide text-zinc-500' }, label),
    h('div', { class: 'mt-1 text-2xl font-bold text-zinc-900 dark:text-white' }, String(value ?? 0)),
    hint ? h('div', { class: 'mt-1 text-xs text-zinc-500' }, hint) : null,
]);

export const empty = (text) => h('div', {
    class: 'rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500 dark:border-zinc-700',
}, text);

export const field = (label, control, hint = '') => h('label', { class: 'block space-y-1.5' }, [
    h('span', { class: 'text-xs font-semibold text-zinc-700 dark:text-zinc-200' }, label),
    control,
    hint ? h('span', { class: 'block text-[11px] text-zinc-500' }, hint) : null,
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
    class: cn('w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white', attrs.class),
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
    class: cn('w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white', attrs.class),
    onInput: (e) => model[key] = e.target.value,
});

export const select = (model, key, options, attrs = {}) => h('select', {
    value: model[key] ?? '',
    disabled: attrs.disabled,
    required: attrs.required,
    class: cn('w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-sky-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white', attrs.class),
    onChange: (e) => {
        model[key] = attrs.number ? Number(e.target.value) : e.target.value;
        attrs.onChange?.(e.target.value);
    },
}, [
    attrs.placeholder !== undefined ? h('option', { value: '' }, attrs.placeholder) : null,
    ...options.map((option) => h('option', { value: option.value, disabled: option.disabled }, option.label)),
]);

export const checkbox = (model, key, label, attrs = {}) => h('label', {
    class: 'flex cursor-pointer items-center gap-2 text-sm text-zinc-700 dark:text-zinc-200',
}, [
    h('input', {
        type: 'checkbox',
        checked: !!model[key],
        disabled: attrs.disabled,
        class: 'h-4 w-4 rounded border-zinc-300 text-sky-600',
        onChange: (e) => model[key] = e.target.checked,
    }),
    h('span', label),
]);

export const progressBar = (value, label = null) => {
    const normalized = Math.max(0, Math.min(100, Number(value) || 0));
    return h('div', { class: 'space-y-1' }, [
        label !== null ? h('div', { class: 'flex justify-between text-[11px] text-zinc-500' }, [
            h('span', label),
            h('span', normalized.toFixed(normalized % 1 ? 1 : 0) + '%'),
        ]) : null,
        h('div', { class: 'h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800' }, [
            h('div', { class: 'h-full rounded-full bg-sky-500', style: { width: normalized + '%' } }),
        ]),
    ]);
};

export const tabs = (items, active, setActive) => h('div', {
    class: 'flex gap-2 overflow-x-auto pb-1',
}, items.map((item) => h('button', {
    type: 'button',
    onClick: () => setActive(item.id),
    class: cn(
        'whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold',
        active === item.id
            ? 'bg-sky-600 text-white'
            : 'border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800',
    ),
}, item.label)));

export const modal = (title, body, close, actions = null, width = 'max-w-3xl') => h('div', {
    class: 'fixed inset-0 z-[100000] flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-10',
    onClick: close,
}, [
    h('div', {
        class: cn('w-full rounded-2xl bg-white p-5 shadow-2xl dark:bg-zinc-900', width),
        onClick: (e) => e.stopPropagation(),
    }, [
        h('div', { class: 'mb-5 flex items-start justify-between gap-4' }, [
            h('h3', { class: 'text-lg font-bold text-zinc-900 dark:text-white' }, title),
            btn('Fechar', close, 'ghost'),
        ]),
        body,
        actions ? h('div', { class: 'mt-5 flex flex-wrap justify-end gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-700' }, actions) : null,
    ]),
]);

export const alertBox = (message, tone = 'error') => {
    if (!message) return null;
    const cls = tone === 'success'
        ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
        : 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200';
    return h('div', { class: cn('rounded-xl border p-3 text-sm', cls) }, message);
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
