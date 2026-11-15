import './bootstrap';
import { config as inertiaConfig } from '@inertiajs/core';

inertiaConfig.set('prefetch.hoverDelay', 40);

// Service worker do painel e push: registrados em usePanelPushSubscribe (com migração ordenada do scope legado).

import { createInertiaApp, usePage, router } from '@inertiajs/vue3';
import { createApp as createVueApp, h } from 'vue';
import { watchEffect } from 'vue';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createPinia } from 'pinia';
import { installPluginUiBridge, resolvePluginPageComponent, getPluginUiPayloadFromDom } from './plugins/pluginUiLoader';

let latestPluginUiPayload = getPluginUiPayloadFromDom() ?? null;

function syncPluginUiPayload(payload) {
    if (payload && Array.isArray(payload.plugins) && payload.plugins.length) {
        latestPluginUiPayload = payload;
        if (typeof window !== 'undefined') {
            window.__GETFY_PLUGIN_UI_PAYLOAD__ = payload;
            try {
                sessionStorage.setItem('getfy_plugin_ui', JSON.stringify(payload));
            } catch (_) {}
        }
    }
}

if (typeof window !== 'undefined') {
    if (latestPluginUiPayload?.plugins?.length) {
        syncPluginUiPayload(latestPluginUiPayload);
    } else {
        try {
            const cached = sessionStorage.getItem('getfy_plugin_ui');
            if (cached) {
                const parsed = JSON.parse(cached);
                if (parsed?.plugins?.length) {
                    latestPluginUiPayload = parsed;
                    window.__GETFY_PLUGIN_UI_PAYLOAD__ = parsed;
                }
            }
        } catch (_) {}
    }
}

// Sincroniza payload de plugins do Inertia antes e depois de atualizações de rota
router.on('beforeUpdate', (event) => {
    syncPluginUiPayload(event.detail?.page?.props?.plugin_ui);
});
router.on('navigate', (event) => {
    syncPluginUiPayload(event.detail?.page?.props?.plugin_ui);
});
router.on('success', (event) => {
    syncPluginUiPayload(event.detail?.page?.props?.plugin_ui);
});

// Sincroniza a meta csrf-token com o token da página atual (evita 419 em gateways e outras requisições axios)
const CsrfSync = {
    setup() {
        const page = usePage();
        watchEffect(() => {
            const token = page.props.csrf_token;
            if (token && typeof document !== 'undefined') {
                const meta = document.querySelector('meta[name="csrf-token"]');
                if (meta && meta.getAttribute('content') !== token) meta.setAttribute('content', token);
            }
        });
        return () => null;
    },
};

const appName = import.meta.env.VITE_APP_NAME || 'Infoprodutor';

const el = document.getElementById('app');
const dataPage = el?.getAttribute('data-page');
let initialPage = null;
try {
    initialPage = dataPage ? JSON.parse(dataPage) : null;
} catch (_) {}
const defaultProps = {
    auth: { user: null },
    flash: { success: null, error: null },
    platform: null,
};
if (!initialPage?.component) {
    initialPage = {
        component: 'Welcome',
        props: { ...defaultProps },
        url: '/',
        version: null,
    };
} else if (initialPage.props) {
    initialPage.props = { ...defaultProps, ...initialPage.props };
    if (!initialPage.props.flash || typeof initialPage.props.flash !== 'object') {
        initialPage.props.flash = { success: null, error: null };
    }
}

const pluginPagesGlob = import.meta.glob('./PluginPages/**/*.vue');

// Criar primeiro admin: em bundle principal para não depender de chunk (evita 404 em deploy sem build novo)
const createFirstAdminPage = import.meta.glob('./Pages/Auth/CreateFirstAdmin.vue', { eager: true })['./Pages/Auth/CreateFirstAdmin.vue'];

function resolvePluginPage(name) {
    if (!name.startsWith('Plugin/')) return null;

    let pluginUi =
        latestPluginUiPayload
        ?? (typeof window !== 'undefined' ? window.__GETFY_PLUGIN_UI_PAYLOAD__ : null)
        ?? router.page?.props?.plugin_ui
        ?? getPluginUiPayloadFromDom()
        ?? initialPage?.props?.plugin_ui
        ?? null;

    if (!pluginUi || !pluginUi.plugins || !pluginUi.plugins.length) {
        if (typeof window !== 'undefined') {
            try {
                const cached = sessionStorage.getItem('getfy_plugin_ui');
                if (cached) {
                    const parsed = JSON.parse(cached);
                    if (parsed?.plugins?.length) {
                        pluginUi = parsed;
                        latestPluginUiPayload = parsed;
                    }
                }
            } catch (_) {}
        }
    }

    const runtime = resolvePluginPageComponent(name, pluginUi);
    if (runtime) {
        return Promise.resolve({ default: runtime });
    }

    const path = `./PluginPages/${name.slice(7)}.vue`;
    const loader = pluginPagesGlob[path];
    if (loader) {
        return loader();
    }

    // Fallback gracioso: redireciona diretamente para a rota do plugin sem estourar 404
    if (typeof window !== 'undefined') {
        const rel = name.slice(7);
        const slash = rel.indexOf('/');
        const slug = slash > 0 ? rel.slice(0, slash) : rel;
        console.warn(`[Getfy] Plugin "${slug}" ainda não carregado no payload client-side. Redirecionando para /${slug}...`);
        window.location.assign('/' + slug);
        return new Promise(() => {});
    }

    return null;
}

createInertiaApp({
    id: 'app',
    page: initialPage,
    title: (title) => title || appName,
    resolve: (name) => {
        const pluginPage = resolvePluginPage(name);
        if (pluginPage) return pluginPage;
        if (name === 'Auth/CreateFirstAdmin' && createFirstAdminPage) {
            return Promise.resolve(createFirstAdminPage);
        }
        return resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        );
    },
    setup({ el, App, props, plugin }) {
        const vueApp = createVueApp({
            render: () => h('div', { class: 'contents' }, [h(App, props), h(CsrfSync)]),
        });
        vueApp.use(plugin);
        vueApp.use(createPinia());
        installPluginUiBridge(vueApp);
        vueApp.mount(el);
    },
    progress: {
        delay: 200,
        color: '#0ea5e9',
    },
});
