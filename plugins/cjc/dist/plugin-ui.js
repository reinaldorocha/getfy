import { CjcIndex } from './admin.js';
import { CjcStudent } from './student.js';

window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__.cjc = {
    ...(window.__GETFY_PLUGIN_UI__.cjc || {}),
    CjcIndex,
    CjcStudent,
};

window.__GETFY_REGISTER_PLUGIN_UI__?.('cjc', 'CjcIndex', CjcIndex);
window.__GETFY_REGISTER_PLUGIN_UI__?.('cjc', 'CjcStudent', CjcStudent);
