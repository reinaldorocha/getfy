import { h } from 'vue';
import { renderIcon } from '../shared.js';

export function WorkspaceBanner({ studentName = 'Aluno', onReturn = null }) {
    return h('div', {
        class: 'mentoria2-workspace-banner',
        style: {
            background: 'linear-gradient(90deg, #1e293b, #0f172a)',
            borderBottom: '1px solid #334155',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#94a3b8',
        },
    }, [
        h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
            renderIcon('students', '', 16),
            h('span', {}, [
                'Modo Acompanhamento: Você está visualizando o ambiente de ',
                h('strong', { style: { color: '#f8fafc' } }, studentName),
                ' (as alterações são registradas para este aluno).',
            ]),
        ]),
        h('a', {
            href: '/mentoria2',
            class: 'mentoria2-button mentoria2-button--ghost',
            style: { padding: '4px 12px', fontSize: '12px' },
            onClick: (e) => {
                if (typeof onReturn === 'function') {
                    e.preventDefault();
                    onReturn();
                }
            },
        }, [
            renderIcon('arrowLeft', 'mr-1', 14),
            'Voltar ao painel do mentor',
        ]),
    ]);
}

export default WorkspaceBanner;

