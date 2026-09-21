import { h, ref } from 'vue';

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

const shellStorage = {
    get(key, fallback) {
        if (typeof window === 'undefined') return fallback;
        try { return window.localStorage.getItem(key) || fallback; } catch { return fallback; }
    },
    set(key, value) {
        if (typeof window === 'undefined') return;
        try { window.localStorage.setItem(key, value); } catch { /* storage unavailable */ }
    },
};

// --- SVG Icons Registry ---
const p = (d) => h('path', { d });
const c = (cx, cy, r) => h('circle', { cx, cy, r });
const l = (x1, y1, x2, y2) => h('line', { x1, y1, x2, y2 });
const r = (x, y, width, height, rx = 0) => h('rect', { x, y, width, height, rx });
const pl = (points) => h('polyline', { points });
const pg = (points) => h('polygon', { points });

export const ICONS = {
    dashboard: () => [r(3, 3, 7, 7, 2), r(14, 3, 7, 7, 2), r(14, 14, 7, 7, 2), r(3, 14, 7, 7, 2)],
    products: () => [
        p('m7.5 4.27 9 5.15'),
        p('M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'),
        p('m3.3 7 8.7 5 8.7-5'),
        p('M12 22V12'),
    ],
    students: () => [
        p('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'),
        c(9, 7, 4),
        p('M22 21v-2a4 4 0 0 0-3-3.87'),
        p('M16 3.13a4 4 0 0 1 0 7.75'),
    ],
    contests: () => [
        p('M6 9H4.5a2.5 2.5 0 0 1 0-5H6'),
        p('M18 9h1.5a2.5 2.5 0 0 0 0-5H18'),
        p('M4 22h16'),
        p('M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22'),
        p('M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22'),
        p('M18 2H6v7a6 6 0 0 0 12 0V2Z'),
    ],
    edicts: () => [
        p('M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'),
        pl('14 2 14 8 20 8'),
        l(16, 13, 8, 13),
        l(16, 17, 8, 17),
        l(10, 9, 8, 9),
    ],
    questions: () => [
        c(12, 12, 10),
        p('M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'),
        p('M12 17h.01'),
    ],
    flashcards: () => [
        pg('12 2 2 7 12 12 22 7 12 2'),
        pl('2 17 12 22 22 17'),
        pl('2 12 12 17 22 12'),
    ],
    materials: () => [
        p('M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'),
    ],
    courses: () => [
        c(12, 12, 10),
        pg('10 8 16 12 10 16 10 8'),
    ],
    audit: () => [
        p('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'),
        pl('9 12 11 14 15 10'),
    ],
    schedule: () => [
        r(3, 4, 18, 18, 2),
        l(16, 2, 16, 6),
        l(8, 2, 8, 6),
        l(3, 10, 21, 10),
    ],
    reviews: () => [
        p('M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'),
        p('M3 3v5h5'),
        p('M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16'),
        p('M16 21h5v-5'),
    ],
    mocks: () => [
        c(12, 12, 10),
        c(12, 12, 6),
        c(12, 12, 2),
    ],
    notebooks: () => [
        p('M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'),
        p('M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'),
    ],
    metrics: () => [
        l(18, 20, 18, 10),
        l(12, 20, 12, 4),
        l(6, 20, 6, 14),
    ],
    history: () => [
        c(12, 12, 10),
        pl('12 6 12 12 16 14'),
    ],
    timer: () => [
        l(10, 2, 14, 2),
        l(12, 14, 15, 11),
        c(12, 14, 8),
    ],
    sun: () => [
        c(12, 12, 4),
        p('M12 2v2'),
        p('M12 20v2'),
        p('m4.93 4.93 1.41 1.41'),
        p('m17.66 17.66 1.41 1.41'),
        p('M2 12h2'),
        p('M20 12h2'),
        p('m6.34 17.66-1.41 1.41'),
        p('m19.07 4.93-1.41 1.41'),
    ],
    moon: () => [
        p('M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'),
    ],
    menu: () => [
        l(4, 12, 20, 12),
        l(4, 6, 20, 6),
        l(4, 18, 20, 18),
    ],
    x: () => [
        p('M18 6 6 18'),
        p('m6 6 12 12'),
    ],
    chevronLeft: () => [
        p('m15 18-6-6 6-6'),
    ],
    chevronRight: () => [
        p('m9 18 6-6-6-6'),
    ],
    check: () => [
        pl('20 6 9 17 4 12'),
    ],
    play: () => [
        pg('5 3 19 12 5 21 5 3'),
    ],
    pause: () => [
        r(6, 4, 4, 16, 1),
        r(14, 4, 4, 16, 1),
    ],
    flame: () => [
        p('M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'),
    ],
};

export function svgIcon(name, extraClass = '', size = 18) {
    const builder = ICONS[name] || ICONS.dashboard;
    return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        class: cn('mentoria-svg-icon', extraClass),
        'aria-hidden': 'true',
    }, builder());
}

export function renderIcon(icon, extraClass = '', size = 18) {
    if (!icon) return null;
    if (typeof icon === 'string' && ICONS[icon]) {
        return svgIcon(icon, extraClass, size);
    }
    return icon;
}

export function useMentoriaShell() {
    const theme = ref(shellStorage.get('mentoria-theme', shellStorage.get('theme', 'light')) === 'dark' ? 'dark' : 'light');
    const collapsed = ref(shellStorage.get('mentoria-sidebar-collapsed', 'false') === 'true');
    const mobileOpen = ref(false);

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        shellStorage.set('mentoria-theme', theme.value);
    }

    function toggleSidebar() {
        collapsed.value = !collapsed.value;
        shellStorage.set('mentoria-sidebar-collapsed', String(collapsed.value));
    }

    function closeMobileMenu() {
        mobileOpen.value = false;
    }

    return { theme, collapsed, mobileOpen, toggleTheme, toggleSidebar, closeMobileMenu };
}

export const mentoriaShell = ({ shell, rootClass = '', items, active, onSelect, eyebrow, title, subtitle, actions = [], notices = [], content, extras = [] }) => {
    const select = (id) => {
        onSelect(id);
        shell.closeMobileMenu();
    };
    const isDark = shell.theme.value === 'dark';
    const iconButton = (label, iconElement, click, extraClass = '') => h('button', {
        type: 'button',
        class: cn('mentoria-shell-icon', extraClass),
        'aria-label': label,
        title: label,
        onClick: click,
    }, [iconElement]);

    const menu = h('nav', { class: 'mentoria-sidebar__nav', 'aria-label': 'Navegação da Mentoria' }, items.map((item) => h('button', {
        type: 'button',
        class: cn('mentoria-sidebar__item', active === item.id && 'mentoria-sidebar__item--active'),
        'aria-current': active === item.id ? 'page' : undefined,
        title: shell.collapsed.value ? item.label : undefined,
        onClick: () => select(item.id),
    }, [
        h('span', { class: 'mentoria-sidebar__item-icon', 'aria-hidden': 'true' }, [renderIcon(item.icon, '', 17)]),
        h('span', { class: 'mentoria-sidebar__item-label' }, item.label),
    ])));

    return h('div', {
        class: cn(
            'mentoria-app',
            rootClass,
            'mentoria-app--theme-' + shell.theme.value,
            shell.collapsed.value && 'mentoria-app--sidebar-collapsed',
            shell.mobileOpen.value && 'mentoria-app--mobile-menu-open',
        ),
    }, [
        h('div', { class: 'mentoria-mobile-bar' }, [
            iconButton('Abrir menu', svgIcon('menu', '', 20), () => shell.mobileOpen.value = true),
            h('span', { class: 'mentoria-mobile-bar__brand' }, 'Mentoria'),
            iconButton(isDark ? 'Usar tema claro' : 'Usar tema escuro', svgIcon(isDark ? 'sun' : 'moon', '', 18), shell.toggleTheme),
        ]),
        h('button', {
            type: 'button',
            class: 'mentoria-sidebar-backdrop',
            'aria-label': 'Fechar menu',
            onClick: shell.closeMobileMenu,
        }),
        h('aside', { class: 'mentoria-sidebar' }, [
            h('div', { class: 'mentoria-sidebar__brand' }, [
                h('div', { class: 'mentoria-sidebar__brand-copy' }, [
                    h('span', { class: 'mentoria-sidebar__eyebrow' }, 'Getfy'),
                    h('strong', {}, 'Mentoria'),
                ]),
                h('div', { class: 'mentoria-sidebar__tools' }, [
                    iconButton(isDark ? 'Usar tema claro' : 'Usar tema escuro', svgIcon(isDark ? 'sun' : 'moon', '', 16), shell.toggleTheme),
                    iconButton(shell.collapsed.value ? 'Expandir menu' : 'Recolher menu', svgIcon(shell.collapsed.value ? 'chevronRight' : 'chevronLeft', '', 16), shell.toggleSidebar, 'mentoria-shell-icon--collapse'),
                    iconButton('Fechar menu', svgIcon('x', '', 18), shell.closeMobileMenu, 'mentoria-shell-icon--close'),
                ]),
            ]),
            menu,
        ]),
        h('main', { class: 'mentoria-main' }, [
            h('div', { class: 'mentoria-page-header' }, [
                h('div', [
                    h('span', { class: 'mentoria-page-header__eyebrow' }, eyebrow),
                    h('h1', {}, title),
                    h('p', {}, subtitle),
                ]),
                h('div', { class: 'mentoria-page-header__actions' }, actions),
            ]),
            ...notices,
            h('div', { class: 'mentoria-workspace-content' }, [content]),
        ]),
        ...extras,
    ]);
};

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
}, [
    extra.icon ? renderIcon(extra.icon, 'mr-1', 15) : null,
    label,
]);

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

export const stat = (label, value, hint = '', tone = '', icon = null) => h('div', {
    class: cn('mentoria-stat', tone),
}, [
    h('div', { class: 'mentoria-stat__header' }, [
        h('span', { class: 'mentoria-stat__label' }, label),
        icon ? h('span', { class: 'mentoria-stat__icon' }, [renderIcon(icon, '', 15)]) : null,
    ]),
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
    const formatted = normalized.toFixed(normalized % 1 ? 1 : 0) + '%';
    return h('div', { class: 'mentoria-progress' }, [
        label !== null ? h('div', { class: 'mentoria-progress__label' }, [
            h('span', label),
            h('span', { class: 'mentoria-progress__percent' }, formatted),
        ]) : null,
        h('div', { class: 'mentoria-progress__track' }, [
            h('div', {
                class: 'mentoria-progress__fill',
                style: { width: normalized + '%' },
                'aria-valuenow': normalized,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
                role: 'progressbar',
            }),
        ]),
    ]);
};

export const choiceCard = ({ letter, text, selected, correct, wrong, disabled, onClick }) => {
    let stateClass = '';
    if (correct) stateClass = 'mentoria-choice-card--correct';
    else if (wrong) stateClass = 'mentoria-choice-card--wrong';
    else if (selected) stateClass = 'mentoria-choice-card--selected';

    return h('button', {
        type: 'button',
        class: cn('mentoria-choice-card', stateClass, disabled && 'mentoria-choice-card--disabled'),
        disabled: !!disabled,
        onClick,
    }, [
        h('span', { class: 'mentoria-choice-card__pill' }, letter),
        h('span', { class: 'mentoria-choice-card__text' }, text),
        correct ? h('span', { class: 'mentoria-choice-card__status' }, '✓') : null,
        wrong ? h('span', { class: 'mentoria-choice-card__status' }, '✕') : null,
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
    item.icon ? h('span', { class: 'mentoria-tab__icon', 'aria-hidden': 'true' }, [renderIcon(item.icon, '', 16)]) : null,
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
            btn('Fechar', close, 'ghost', { icon: 'x' }),
        ]),
        body,
        actions ? h('div', { class: 'mentoria-modal__actions' }, actions) : null,
    ]),
]);

export const alertBox = (message, tone = 'error') => {
    if (!message) return null;
    return h('div', { class: cn('mentoria-notice', 'mentoria-notice--' + tone) }, [
        h('span', { class: 'mentoria-notice__icon' }, tone === 'success' ? '✓' : '⚠'),
        h('span', { class: 'mentoria-notice__text' }, message),
    ]);
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
