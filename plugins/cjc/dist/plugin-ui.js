import { h, ref, computed } from 'vue';

const csrf = () => document.querySelector('meta[name="csrf-token"]')?.content || '';
const api = async (url, options = {}) => {
    const response = await fetch(url, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrf(),
            ...(options.headers || {}),
        },
        ...options,
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.message || 'Não foi possível concluir a operação.');
    return body;
};

const box = (title, value, hint = '') => h('div', { class: 'rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900' }, [
    h('div', { class: 'text-xs font-semibold uppercase tracking-wide text-zinc-500' }, title),
    h('div', { class: 'mt-1 text-2xl font-bold text-zinc-900 dark:text-white' }, String(value ?? 0)),
    hint ? h('div', { class: 'mt-1 text-xs text-zinc-500' }, hint) : null,
]);

const btn = (label, click, secondary = false) => h('button', {
    type: 'button',
    onClick: click,
    class: secondary
        ? 'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 dark:border-zinc-600 dark:text-zinc-200'
        : 'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-700',
}, label);

const section = (title, children, action = null) => h('section', {
    class: 'rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900',
}, [
    h('div', { class: 'mb-4 flex items-center justify-between gap-3' }, [
        h('h2', { class: 'font-semibold text-zinc-900 dark:text-white' }, title),
        action,
    ]),
    children,
]);

const empty = text => h('div', {
    class: 'rounded-lg border border-dashed border-zinc-300 p-5 text-center text-sm text-zinc-500 dark:border-zinc-700',
}, text);

const CjcIndex = {
    name: 'CjcIndex',
    props: { plugin_ui_page: { type: Object, default: () => ({}) } },
    setup(props) {
        const state = ref(props.plugin_ui_page || {});
        const message = ref('');
        const busy = ref(false);
        const refresh = async () => { state.value = await api('/cjc/data'); };
        const execute = async fn => {
            busy.value = true;
            message.value = '';
            try { await fn(); await refresh(); } catch (e) { message.value = e.message; }
            busy.value = false;
        };

        const toggleProduct = product => execute(() => product.cjc_enabled
            ? api('/cjc/products/' + product.id, { method: 'DELETE' })
            : api('/cjc/products/' + product.id + '/enable', {
                method: 'POST',
                body: JSON.stringify({ capabilities: ['cronograma','questoes','flashcards','revisoes','simulados','cadernos'] }),
            }));

        const addContest = () => {
            const name = prompt('Nome do concurso');
            if (!name) return;
            execute(() => api('/cjc/contests', { method: 'POST', body: JSON.stringify({ name }) }));
        };

        const addQuestion = () => {
            const subject = prompt('Disciplina');
            const promptText = prompt('Enunciado');
            const correct = prompt('Resposta correta');
            if (!subject || !promptText || !correct) return;
            execute(() => api('/cjc/questions', {
                method: 'POST',
                body: JSON.stringify({ subject, prompt: promptText, correct_answer: correct, scope: 'global' }),
            }));
        };

        return () => h('div', { class: 'space-y-6' }, [
            h('div', [
                h('h1', { class: 'text-2xl font-bold text-zinc-900 dark:text-white' }, 'CJC'),
                h('p', { class: 'mt-1 text-sm text-zinc-500' }, 'Chega Junto Concurseiro integrado ao Getfy.'),
            ]),
            message.value ? h('div', { class: 'rounded-lg bg-red-50 p-3 text-sm text-red-700' }, message.value) : null,
            h('div', { class: 'grid gap-3 sm:grid-cols-2 lg:grid-cols-5' }, [
                box('Alunos', state.value.summary?.students),
                box('Concursos', state.value.summary?.contests),
                box('Questões', state.value.summary?.questions),
                box('Horas / 7 dias', state.value.summary?.study_hours_7d),
                box('Acerto', (state.value.summary?.accuracy || 0) + '%'),
            ]),
            section('Produtos CJC',
                (state.value.products || []).length
                    ? h('div', { class: 'space-y-2' }, state.value.products.map(product =>
                        h('div', { class: 'flex items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800' }, [
                            h('div', [
                                h('div', { class: 'font-medium' }, product.name),
                                h('div', { class: 'text-xs text-zinc-500' }, product.cjc_enabled ? 'Acesso CJC ativo' : 'Produto comum'),
                            ]),
                            btn(product.cjc_enabled ? 'Desativar' : 'Ativar CJC', () => toggleProduct(product), product.cjc_enabled),
                        ])
                    ))
                    : empty('Nenhum produto neste tenant.')
            ),
            section('Alunos',
                (state.value.students || []).length
                    ? h('div', { class: 'space-y-2' }, state.value.students.map(student =>
                        h('div', { class: 'grid gap-2 rounded-lg bg-zinc-50 p-3 text-sm dark:bg-zinc-800 sm:grid-cols-5' }, [
                            h('div', { class: 'sm:col-span-2' }, [
                                h('div', { class: 'font-medium' }, student.name),
                                h('div', { class: 'text-xs text-zinc-500' }, student.email),
                            ]),
                            h('div', '7d: ' + (student.metrics?.study_hours_7d || 0) + 'h'),
                            h('div', 'Acerto: ' + (student.metrics?.accuracy || 0) + '%'),
                            h('div', { class: 'text-xs' }, (student.metrics?.risk_level || 'verde') + ' · ' + (student.metrics?.risk_reason || '')),
                        ])
                    ))
                    : empty('Os alunos aparecem automaticamente quando possuem produto CJC do tenant.')
            ),
            h('div', { class: 'grid gap-5 lg:grid-cols-2' }, [
                section('Concursos',
                    (state.value.contests || []).length
                        ? h('div', { class: 'space-y-2' }, state.value.contests.map(c => h('div', { class: 'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800' }, c.name)))
                        : empty('Nenhum concurso cadastrado.'),
                    btn('Novo concurso', addContest)
                ),
                section('Banco de questões',
                    (state.value.questions || []).length
                        ? h('div', { class: 'space-y-2' }, state.value.questions.slice(0, 20).map(q => h('div', { class: 'rounded-lg bg-zinc-50 p-3 text-sm dark:bg-zinc-800' }, [
                            h('div', { class: 'text-xs font-semibold text-sky-600' }, q.subject),
                            h('div', q.prompt),
                        ])))
                        : empty('Nenhuma questão cadastrada.'),
                    btn('Nova questão', addQuestion)
                ),
            ]),
            busy.value ? h('div', { class: 'fixed bottom-5 right-5 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white' }, 'Salvando…') : null,
        ]);
    },
};

const CjcStudent = {
    name: 'CjcStudent',
    props: { plugin_ui_page: { type: Object, default: () => ({}) } },
    setup(props) {
        const state = ref(props.plugin_ui_page || {});
        const tab = ref('dashboard');
        const message = ref('');
        const tenant = computed(() => state.value.tenant_id);
        const base = computed(() => '/cjc-estudos/' + tenant.value);
        const refresh = async () => { state.value = await api(base.value + '/data'); };
        const execute = async fn => {
            message.value = '';
            try { const result = await fn(); await refresh(); return result; }
            catch (e) { message.value = e.message; }
        };
        const logStudy = () => {
            const minutes = Number(prompt('Minutos estudados', '30'));
            if (!minutes) return;
            execute(() => api(base.value + '/study-sessions', {
                method: 'POST',
                body: JSON.stringify({ seconds: minutes * 60, mode: 'estudo' }),
            }));
        };
        const toggleSchedule = item => execute(() => api(base.value + '/schedule-items/' + item.id, {
            method: 'PATCH',
            body: JSON.stringify({ status: item.status === 'concluido' ? 'pendente' : 'concluido' }),
        }));
        const answer = q => {
            const value = prompt(q.prompt);
            if (!value) return;
            execute(async () => {
                const result = await api(base.value + '/questions/' + q.id + '/answer', {
                    method: 'POST', body: JSON.stringify({ answer: value }),
                });
                alert(result.correct ? 'Resposta correta!' : 'Resposta incorreta. Correta: ' + result.correct_answer);
                return result;
            });
        };
        const rateCard = (card, quality) => execute(() => api(base.value + '/flashcards/' + card.id + '/review', {
            method: 'POST', body: JSON.stringify({ quality }),
        }));

        const content = () => {
            if (tab.value === 'cronograma') return (state.value.schedule_items || []).length
                ? h('div', { class: 'space-y-2' }, state.value.schedule_items.map(item =>
                    h('div', { class: 'flex items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800' }, [
                        h('div', (item.planned_date || 'Ciclo') + ' · ' + (item.duration_minutes || 0) + ' min · ' + item.status),
                        btn(item.status === 'concluido' ? 'Reabrir' : 'Concluir', () => toggleSchedule(item), true),
                    ])
                )) : empty('Nenhum cronograma ativo.');

            if (tab.value === 'flashcards') return (state.value.cards || []).length
                ? h('div', { class: 'space-y-3' }, state.value.cards.slice(0, 50).map(card =>
                    h('div', { class: 'rounded-lg border border-zinc-200 p-4 dark:border-zinc-700' }, [
                        h('div', { class: 'font-medium' }, card.front),
                        card.back ? h('details', { class: 'mt-2 text-sm' }, [h('summary', 'Ver resposta'), h('div', { class: 'mt-2' }, card.back)]) : null,
                        h('div', { class: 'mt-3 flex gap-1' }, [0,1,2,3,4,5].map(q => btn(String(q), () => rateCard(card, q), true))),
                    ])
                )) : empty('Nenhum flashcard disponível.');

            if (tab.value === 'questoes') return (state.value.questions || []).length
                ? h('div', { class: 'space-y-3' }, state.value.questions.map(q =>
                    h('div', { class: 'rounded-lg border border-zinc-200 p-4 dark:border-zinc-700' }, [
                        h('div', { class: 'text-xs font-semibold text-sky-600' }, q.subject),
                        h('div', { class: 'my-2 text-sm' }, q.prompt),
                        btn('Responder', () => answer(q)),
                    ])
                )) : empty('Nenhuma questão disponível.');

            if (tab.value === 'edital') return (state.value.subjects || []).length
                ? h('div', { class: 'space-y-3' }, state.value.subjects.map(subject =>
                    h('div', { class: 'rounded-lg border border-zinc-200 p-4 dark:border-zinc-700' }, [
                        h('div', { class: 'font-semibold' }, subject.name),
                        h('div', { class: 'mt-2 text-sm text-zinc-600 dark:text-zinc-300' },
                            (state.value.topics || []).filter(t => t.subject_id === subject.id).map(t => h('div', '• ' + t.name)))
                    ])
                )) : empty('Nenhum edital atribuído.');

            return h('div', { class: 'space-y-5' }, [
                h('div', { class: 'grid gap-3 sm:grid-cols-2 lg:grid-cols-5' }, [
                    box('Horas / 7 dias', state.value.metrics?.study_hours_7d),
                    box('Horas / 30 dias', state.value.metrics?.study_hours_30d),
                    box('Acerto', (state.value.metrics?.accuracy || 0) + '%'),
                    box('Revisões', state.value.metrics?.pending_reviews),
                    box('Flashcards', state.value.metrics?.flashcards_due),
                ]),
                section('Concursos',
                    (state.value.contests || []).length
                        ? h('div', { class: 'space-y-2' }, state.value.contests.map(c => h('div', { class: 'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800' }, c.name)))
                        : empty('Nenhum concurso atribuído.'),
                    btn('Registrar estudo', logStudy)
                ),
            ]);
        };

        return () => h('div', { class: 'space-y-5' }, [
            h('div', [
                h('h1', { class: 'text-2xl font-bold text-zinc-900 dark:text-white' }, 'Minha preparação'),
                h('p', { class: 'mt-1 text-sm text-zinc-500' }, 'CJC · Chega Junto Concurseiro'),
            ]),
            message.value ? h('div', { class: 'rounded-lg bg-red-50 p-3 text-sm text-red-700' }, message.value) : null,
            h('div', { class: 'flex gap-2 overflow-x-auto' }, [
                ['dashboard','Dashboard'], ['edital','Edital'], ['cronograma','Cronograma'],
                ['flashcards','Flashcards'], ['questoes','Questões'],
            ].map(([id,label]) => h('button', {
                type: 'button', onClick: () => tab.value = id,
                class: tab.value === id
                    ? 'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'
                    : 'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold dark:border-zinc-700',
            }, label))),
            section(tab.value === 'dashboard' ? 'Visão geral' : tab.value, content()),
        ]);
    },
};

window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__.cjc = { ...(window.__GETFY_PLUGIN_UI__.cjc || {}), CjcIndex, CjcStudent };
window.__GETFY_REGISTER_PLUGIN_UI__?.('cjc', 'CjcIndex', CjcIndex);
window.__GETFY_REGISTER_PLUGIN_UI__?.('cjc', 'CjcStudent', CjcStudent);
