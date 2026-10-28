import { h } from 'vue';
import { renderIcon } from '../shared.js?v=10e94e945bc8';

export function EmptyState({ icon = 'alertTriangle', title = 'Nenhum registro encontrado', description = '', action = null } = {}) {
    return h('div', { class: 'mentoria2-empty-state' }, [
        h('div', { class: 'mentoria2-empty-state__icon', 'aria-hidden': 'true' }, [renderIcon(icon, '', 36)]),
        h('h3', { class: 'mentoria2-empty-state__title' }, title),
        description ? h('p', { class: 'mentoria2-empty-state__description' }, description) : null,
        action ? h('div', { class: 'mentoria2-empty-state__action' }, [action]) : null,
    ]);
}

export default EmptyState;

