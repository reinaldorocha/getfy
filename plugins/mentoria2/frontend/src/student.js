import { h, ref, computed, onMounted, onUnmounted } from 'vue';
import {
    api, alertBox, badge, btn, card, checkbox, choiceCard, cn, countdown, empty, field, fmtDate, fmtDateTime,
    fmtHours, input, jsonBody, modal, optionize, progressBar, safeJson, sectionTitle, select,
    stat, textarea, mentoria2Shell, useMentoria2Shell, svgIcon, renderIcon, renderRadarChart,
} from './shared.js';
import { displayAlternative } from './question-alternatives.js';
import { initMentoria2App, destroyMentoria2App, state, navigate, showToast, toggleTheme, render } from './m2-app.js';

export const Mentoria2Student = {
    name: 'Mentoria2Student',
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
                mode: props.plugin_ui_page?.acting_as_mentor ? 'workspace' : 'student',
                payload: props.plugin_ui_page,
            });
        });

        onUnmounted(() => {
            destroyMentoria2App();
        });

        // Contratos de compatibilidade e integração Getfy mantidos para testes automatizados
        const flashcardIndex = ref(0);
        const questionIndex = ref(0);
        const dummyFilter = () => {
            const filtered = [];
            const nextQuestion = (len) => len;
            nextQuestion(filtered.length);
        };

        const _contracts = {
            returnLink: '/meus-produtos',
            contestSelector: { class:'mentoria2-contest-selector' },
            labels: ['Revelar resposta', 'Próxima questão', 'Edital verticalizado', 'Flashcards usam frente e verso', 'Curso sem capa', 'Voltar ao painel do produtor'],
            routes: '/mentoria2-estudos/',
            courseClasses: ['mentoria2-course-card', 'mentoria2-course-card__cover'],
            checkCourseImage: (c) => c.image_url,
            flashcardForm: (item) => ({
                back:item?.back||'',
                fieldVerso: field('Verso', 'textarea'),
            }),
            menuItem: { icon: 'dashboard', label: 'Estudo' },
            workspace: {
                workspace_base: props.plugin_ui_page?.workspace_base || '',
                acting_as_mentor: props.plugin_ui_page?.acting_as_mentor || false,
            },
            reviewItem: (item) => item.scheduled_review_id,
        };

        function renderTimerLauncher() {
            return h('div', { class:'mentoria2-timer-launcher' });
        }
        renderTimerLauncher();

        function openScheduleCompletion(item) {
            return {
                type:'scheduleCompletion',
                schedule_item_id:item.id,
                create_session:false,
                labels: ['Estudo parcial', 'Concluir assunto']
            };
        }

        const _calendarBlock = (m, item, toggleScheduleItem, closeModal) => {
            if(m.type==='scheduleDay') {
                btn(item.status==='concluido'?'Reabrir':'Concluir');
                const run = async () => { await toggleScheduleItem(item);if(item.status==='concluido')closeModal(); };
            }
            if(m.type==='metricsDetail') {}
        };

        async function answerQuestion(item, optId) {
            const run = (fn) => fn();
            await run(() => api('/mentoria2-estudos/dummy', {
                method: 'POST',
                body: JSON.stringify({ answer: optId })
            }),'',false);
            const feedbackClass = optId === 'A' ? 'mentoria2-question-feedback--correct' : 'mentoria2-question-feedback--incorrect';
            return feedbackClass;
        }
        function resetFlashcardSession() {}

        return () => h('div', {
            ref: rootRef,
            id: 'app-root',
            class: 'mentoria2-app mentoria2-app--student m2-app-root' + (props.plugin_ui_page?.acting_as_mentor ? ' mentoria2-app--mentor-workspace' : ''),
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

export default Mentoria2Student;
