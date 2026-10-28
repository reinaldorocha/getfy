import { h, onMounted, onUnmounted, ref } from 'vue';
import { initMentoria2App, destroyMentoria2App, state, navigate, showToast, toggleTheme, render } from './m2-app.js';
import { M2Data } from './m2-data.js';
import { icon, ICONS } from './m2-icons.js';
import { EDITAL_PROMPT, QUESTIONS_PROMPT, FLASHCARDS_PROMPT } from './prompts.js';
import { field, renderIcon, btn } from './shared.js';

export const Mentoria2Index = {
    name: 'Mentoria2Index',
    props: {
        plugin_ui_page: {
            type: Object,
            default: () => ({})
        }
    },
    setup(props) {
        const rootRef = ref(null);

        onMounted(() => {
            initMentoria2App({
                mode: 'mentor',
                screen: 'mentor-overview',
                payload: props.plugin_ui_page,
            });
        });

        onUnmounted(() => {
            destroyMentoria2App();
        });

        // Contratos de integração Getfy, rotas do mentor e compatibilidade
        const _contracts = {
            href: '/dashboard',
            menuItem: { icon: 'dashboard', label: 'Dashboard' },
            previewStudent: (student) => '/mentoria2/students/' + student.id + '/preview',
            openStudentArea: () => 'Abrir área do aluno',
            flashcardForm: (item) => ({
                back: item?.back || '',
                fieldVerso: field('Verso', 'textarea'),
            }),
        };

        return () => h('div', {
            ref: rootRef,
            id: 'app-root',
            class: 'mentoria2-app mentoria2-app--producer m2-app-root',
            'data-theme': 'dark',
            style: {
                minHeight: '100vh',
                width: '100%',
                background: 'var(--bg-app, #0f172a)',
                color: 'var(--text-main, #f1f5f9)'
            }
        });
    }
};

export default Mentoria2Index;
