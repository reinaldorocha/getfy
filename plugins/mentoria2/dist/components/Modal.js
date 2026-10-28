import { h, onMounted, onUnmounted } from 'vue';
import { renderIcon } from '../shared.js?v=d6fd58c3ef81';

export function Modal({ title, isOpen = true, onClose, footer = null, children, maxWidth = '560px' }) {
    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === 'Escape' && typeof onClose === 'function') {
            onClose();
        }
    };

    onMounted(() => {
        if (typeof document !== 'undefined') {
            document.addEventListener('keydown', handleKeyDown);
        }
    });

    onUnmounted(() => {
        if (typeof document !== 'undefined') {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });

    return h('div', {
        class: 'mentoria2-modal-backdrop',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': 'm2-modal-title',
        onClick: (e) => {
            if (e.target === e.currentTarget && typeof onClose === 'function') {
                onClose();
            }
        },
    }, [
        h('div', {
            class: 'mentoria2-modal',
            style: { maxWidth },
        }, [
            h('div', { class: 'mentoria2-modal__header' }, [
                h('h2', { id: 'm2-modal-title', class: 'mentoria2-modal__title' }, title),
                h('button', {
                    type: 'button',
                    class: 'mentoria2-modal__close',
                    'aria-label': 'Fechar modal',
                    onClick: onClose,
                }, [renderIcon('x', '', 18)]),
            ]),
            h('div', { class: 'mentoria2-modal__body' }, [children]),
            footer ? h('div', { class: 'mentoria2-modal__footer' }, [footer]) : null,
        ]),
    ]);
}

export default Modal;

