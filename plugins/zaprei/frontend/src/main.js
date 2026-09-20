import './styles.css';

import Dashboard from './components/Dashboard.vue';
import Integrations from './components/Integrations.vue';
import ProductPanel from './components/ProductPanel.vue';

/**
 * Ponto de entrada do bundle (frontend.entry em plugin.json).
 *
 * O carregador do Getfy injeta este arquivo como <script type="module"> e lê os
 * componentes em window.__GETFY_PLUGIN_UI__[slug] (resources/js/plugins/pluginUiLoader.js).
 */

const SLUG = 'zaprei';
const STYLE_ID = 'zaprei-plugin-style';

if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
    const link = document.createElement('link');
    link.id = STYLE_ID;
    link.rel = 'stylesheet';
    // Resolvido em runtime, ao lado do bundle em /plugins/zaprei/assets/dist/.
    link.href = new URL(/* @vite-ignore */ './plugin-ui.css', import.meta.url).href;
    document.head.appendChild(link);
}

window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__[SLUG] = { Dashboard, Integrations, ProductPanel };

export { Dashboard, Integrations, ProductPanel };
