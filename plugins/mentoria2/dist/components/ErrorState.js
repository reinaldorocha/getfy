import { h } from 'vue';
import { renderIcon, btn } from '../shared.js?v=d6fd58c3ef81';

export function ErrorState({ title = 'Ocorreu um erro', message = 'Não foi possível carregar os dados.', onRetry = null } = {}) {
    return h('div', { class: 'mentoria2-empty-state mentoria2-error-state' }, [
        h('div', { class: 'mentoria2-empty-state__icon mentoria2-error-state__icon', 'aria-hidden': 'true' }, [
            renderIcon('alertTriangle', '', 36),
        ]),
        h('h3', { class: 'mentoria2-empty-state__title' }, title),
        h('p', { class: 'mentoria2-empty-state__description' }, message),
        onRetry ? h('div', { class: 'mentoria2-empty-state__action mt-4' }, [
            btn('Tentar novamente', onRetry, 'primary', { icon: 'rotateCcw' }),
        ]) : null,
    ]);
}

export default ErrorState;

