import { h, ref, computed, onMounted, watch } from 'vue';
import { api, alertBox, badge, btn, card, choiceCard, cn, empty, jsonBody, sectionTitle } from './shared.js?v=d91c3e002d02';
import { displayAlternative } from './question-alternatives.js?v=d91c3e002d02';

function flattenLessons(produto) {
    const rows = [];
    for (const section of produto?.sections || []) {
        for (const module of section.modules || []) {
            for (const lesson of module.lessons || []) {
                rows.push({
                    ...lesson,
                    section_title: section.title,
                    module_title: module.title,
                    label: [section.title, module.title, lesson.title].filter(Boolean).join(' › '),
                });
            }
        }
    }
    return rows;
}

export const MentoriaCourseBuilder = {
    name: 'MentoriaCourseBuilder',
    props: { produto: { type: Object, required: true } },
    setup(props) {
        const loading = ref(true);
        const saving = ref(false);
        const message = ref('');
        const success = ref('');
        const questions = ref([]);
        const lessonQuestions = ref({});
        const selectedLesson = ref('');
        const query = ref('');
        const subject = ref('');

        const lessons = computed(() => flattenLessons(props.produto));
        const subjects = computed(() => [...new Set(questions.value.map(q => q.subject).filter(Boolean))].sort());
        const selected = computed(() => new Set(lessonQuestions.value[String(selectedLesson.value)] || lessonQuestions.value[Number(selectedLesson.value)] || []));
        const filtered = computed(() => {
            const q = query.value.trim().toLowerCase();
            return questions.value.filter(item =>
                (!subject.value || item.subject === subject.value)
                && (!q || String(item.prompt || '').toLowerCase().includes(q) || String(item.topic || '').toLowerCase().includes(q))
            );
        });

        async function load() {
            loading.value = true;
            message.value = '';
            try {
                const data = await api('/mentoria/course-products/' + props.produto.id + '/questions');
                questions.value = data.questions || [];
                lessonQuestions.value = data.lesson_questions || {};
                if (!selectedLesson.value && lessons.value.length) selectedLesson.value = String(lessons.value[0].id);
            } catch (e) {
                message.value = e.message;
            } finally {
                loading.value = false;
            }
        }

        function toggle(questionId, checked) {
            const key = String(selectedLesson.value);
            const current = new Set(lessonQuestions.value[key] || lessonQuestions.value[Number(key)] || []);
            if (checked) {
                if (current.size >= 50) {
                    message.value = 'Cada aula pode ter no máximo 50 questões.';
                    return;
                }
                current.add(questionId);
            } else {
                current.delete(questionId);
            }
            lessonQuestions.value = { ...lessonQuestions.value, [key]: [...current] };
        }

        async function save() {
            if (!selectedLesson.value) return;
            saving.value = true;
            message.value = '';
            success.value = '';
            try {
                const key = String(selectedLesson.value);
                const ids = lessonQuestions.value[key] || lessonQuestions.value[Number(key)] || [];
                await api('/mentoria/course-products/' + props.produto.id + '/lessons/' + selectedLesson.value + '/questions', {
                    method: 'PUT',
                    body: jsonBody({ question_ids: ids }),
                });
                success.value = ids.length + ' questão(ões) vinculada(s) à aula.';
            } catch (e) {
                message.value = e.message;
            } finally {
                saving.value = false;
            }
        }

        onMounted(load);

        return () => h('div', { class: 'mentoria-embedded mentoria-course-builder' }, [
            card([
                sectionTitle('Exercícios Mentoria', 'Escolha uma aula e vincule questões já existentes no Banco de Questões do Mentoria.'),
                alertBox(message.value),
                alertBox(success.value, 'success'),
                lessons.value.length ? h('div', { class: 'grid gap-3 lg:grid-cols-2' }, [
                    h('label', { class: 'block' }, [
                        h('span', { class: 'mb-1 block text-xs font-semibold' }, 'Aula'),
                        h('select', {
                            value: selectedLesson.value,
                            class: 'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                            onChange: e => { selectedLesson.value = e.target.value; success.value = ''; },
                        }, lessons.value.map(l => h('option', { value: String(l.id) }, l.label))),
                    ]),
                    h('div', { class: 'flex items-end justify-end gap-2' }, [
                        badge(selected.value.size + '/50 vinculadas', selected.value.size ? 'sky' : 'zinc'),
                        btn(saving.value ? 'Salvando…' : 'Salvar questões da aula', save, 'primary', { disabled: saving.value }),
                    ]),
                ]) : empty('Este produto ainda não possui aulas.'),
            ]),
            selectedLesson.value ? card([
                h('div', { class: 'mb-4 grid gap-3 lg:grid-cols-2' }, [
                    h('input', {
                        value: query.value,
                        placeholder: 'Buscar enunciado ou assunto…',
                        class: 'w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                        onInput: e => query.value = e.target.value,
                    }),
                    h('select', {
                        value: subject.value,
                        class: 'w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                        onChange: e => subject.value = e.target.value,
                    }, [h('option', { value: '' }, 'Todas as disciplinas'), ...subjects.value.map(s => h('option', { value: s }, s))]),
                ]),
                loading.value ? h('p', { class: 'text-sm text-zinc-500' }, 'Carregando questões…')
                    : filtered.value.length ? h('div', { class: 'max-h-[60vh] space-y-2 overflow-y-auto' }, filtered.value.map(q => h('label', {
                        class: 'flex cursor-pointer items-start gap-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-700',
                    }, [
                        h('input', {
                            type: 'checkbox',
                            class: 'mt-1',
                            checked: selected.value.has(q.id),
                            onChange: e => toggle(q.id, e.target.checked),
                        }),
                        h('div', { class: 'min-w-0 flex-1' }, [
                            h('div', { class: 'mb-1 flex flex-wrap gap-1' }, [badge(q.subject, 'sky'), q.topic ? badge(q.topic) : null]),
                            h('p', { class: 'text-sm' }, q.prompt),
                        ]),
                    ]))) : empty('Nenhuma questão encontrada.'),
            ]) : null,
        ]);
    },
};

export const MentoriaLessonExercises = {
    name: 'MentoriaLessonExercises',
    props: {
        product: { type: Object, required: true },
        lesson: { type: Object, required: true },
        slug: { type: String, default: '' },
    },
    setup(props) {
        const loading = ref(true);
        const message = ref('');
        const questions = ref([]);
        const currentIndex = ref(0);
        const answers = ref({});
        const results = ref({});

        async function load() {
            if (!props.product?.id || !props.lesson?.id) {
                loading.value = false;
                return;
            }
            loading.value = true;
            try {
                const data = await api('/mentoria-course/products/' + props.product.id + '/lessons/' + props.lesson.id + '/questions');
                questions.value = data.questions || [];
                currentIndex.value = 0;
                if (data.latest_attempts && typeof data.latest_attempts === 'object') {
                    results.value = { ...data.latest_attempts };
                    const draftAnswers = {};
                    for (const [qid, att] of Object.entries(data.latest_attempts)) {
                        if (att && att.answer) {
                            draftAnswers[qid] = att.answer;
                        }
                    }
                    answers.value = { ...draftAnswers, ...answers.value };
                }
            } catch (e) {
                message.value = e.message;
            } finally {
                loading.value = false;
            }
        }

        watch(() => props.lesson?.id, () => {
            answers.value = {};
            results.value = {};
            currentIndex.value = 0;
            load();
        });

        async function answer(q) {
            const answerValue = answers.value[q.id];
            if (!answerValue) return;
            try {
                const result = await api('/mentoria-course/products/' + props.product.id + '/lessons/' + props.lesson.id + '/questions/' + q.id + '/answer', {
                    method: 'POST',
                    body: jsonBody({ answer: answerValue }),
                });
                results.value = { ...results.value, [q.id]: result };
            } catch (e) {
                message.value = e.message;
            }
        }

        onMounted(load);

        return () => {
            if (loading.value) return h('div', { class: 'rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 text-sm text-zinc-600 dark:text-zinc-400' }, 'Carregando exercícios…');
            if (message.value && !questions.value.length) return h('div', { class: 'mentoria-embedded my-4' }, alertBox(message.value));
            if (!questions.value.length) return null;

            const total = questions.value.length;
            const idx = Math.min(Math.max(0, currentIndex.value), total - 1);
            const q = questions.value[idx];
            if (!q) return null;

            const result = results.value[q.id];
            const answered = Object.keys(results.value).length;
            const correct = Object.values(results.value).filter(r => r.correct).length;
            const options = q.type === 'certo_errado' ? ['Certo', 'Errado'] : (q.alternatives || []);
            const isFirst = idx === 0;
            const isLast = idx === total - 1;

            return h('section', { class: 'mentoria-embedded mentoria-lesson-exercises' }, [
                h('div', { class: 'mb-4 flex flex-wrap items-start justify-between gap-3' }, [
                    h('div', [
                        h('h2', { class: 'text-lg font-bold text-zinc-900 dark:text-white' }, 'Pratique o que aprendeu'),
                        h('p', { class: 'mt-1 text-sm text-zinc-500 dark:text-zinc-400' }, total + ' questão(ões) nesta aula.'),
                    ]),
                    h('div', { class: 'flex items-center gap-2' }, [
                        answered ? badge(correct + '/' + answered + ' acertos', correct === answered ? 'green' : 'sky') : null,
                        badge((idx + 1) + ' de ' + total, 'sky'),
                    ]),
                ]),
                alertBox(message.value),
                h('article', { class: 'mentoria-card p-5' }, [
                    h('div', { class: 'mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3' }, [
                        h('div', { class: 'flex flex-wrap gap-1' }, [
                            badge('Questão ' + (idx + 1), 'sky'),
                            badge(q.subject),
                            q.topic ? badge(q.topic) : null,
                        ]),
                        h('span', { class: 'text-xs font-semibold text-zinc-400' }, (idx + 1) + ' de ' + total),
                    ]),
                    h('p', { class: 'whitespace-pre-wrap text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-100' }, q.prompt),
                    !result ? h('div', { class: 'mt-4 space-y-2' }, options.map((option, optionIndex) => {
                        const letter = q.type === 'certo_errado' ? (option === 'Certo' ? 'C' : 'E') : String.fromCharCode(65 + optionIndex);
                        const value = q.type === 'certo_errado' ? option : letter;
                        const isSelected = answers.value[q.id] === value;
                        return choiceCard({
                            letter,
                            text: q.type === 'certo_errado' ? option : displayAlternative(option),
                            selected: isSelected,
                            disabled: false,
                            onClick: () => { answers.value = { ...answers.value, [q.id]: value }; },
                        });
                    })) : null,
                    !result ? h('div', { class: 'mt-5 flex flex-wrap items-center justify-between gap-3' }, [
                        btn('Responder', () => answer(q), 'primary', { disabled: !answers.value[q.id] }),
                        h('div', { class: 'flex items-center gap-2' }, [
                            !isFirst ? btn('Anterior', () => { currentIndex.value--; }, 'ghost') : null,
                            !isLast ? btn('Próxima questão', () => { currentIndex.value++; }, 'secondary') : null,
                        ]),
                    ]) : h('div', {
                        class: 'mentoria-question-feedback mt-4 ' + (result.correct
                            ? 'mentoria-question-feedback--correct'
                            : 'mentoria-question-feedback--incorrect'),
                    }, [
                        h('strong', { class: 'mentoria-question-feedback__title' }, result.correct ? '✓ Resposta correta' : '✕ Resposta incorreta'),
                        !result.correct ? h('div', { class: 'mentoria-question-feedback__answer' }, 'Gabarito: ' + result.correct_answer) : null,
                        result.explanation ? h('p', { class: 'mentoria-question-feedback__explanation' }, result.explanation) : null,
                        h('div', { class: 'mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 dark:border-white/10 pt-3' }, [
                            btn('Refazer', () => {
                                const next = { ...results.value };
                                delete next[q.id];
                                results.value = next;
                                answers.value = { ...answers.value, [q.id]: '' };
                            }, 'ghost'),
                            h('div', { class: 'flex items-center gap-2' }, [
                                !isFirst ? btn('Anterior', () => { currentIndex.value--; }, 'ghost') : null,
                                !isLast ? btn('Próxima questão', () => { currentIndex.value++; }, 'primary') : null,
                            ]),
                        ]),
                    ]),
                ]),
                total > 1 ? h('div', { class: 'mt-3 flex flex-wrap items-center justify-center gap-2' }, questions.value.map((item, i) => {
                    const isCurrent = i === idx;
                    const res = results.value[item.id];
                    let stateClass = 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white';
                    if (isCurrent) {
                        stateClass = 'bg-sky-500 text-white shadow-sm ring-2 ring-sky-400/40';
                    } else if (res?.correct) {
                        stateClass = 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-500/40 dark:hover:bg-emerald-900/60';
                    } else if (res && !res.correct) {
                        stateClass = 'bg-red-50 text-red-700 border border-red-300 hover:bg-red-100 dark:bg-red-950/60 dark:text-red-400 dark:border-red-500/40 dark:hover:bg-red-900/60';
                    }
                    return h('button', {
                        type: 'button',
                        onClick: () => { currentIndex.value = i; },
                        class: cn('flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition', stateClass),
                        title: 'Ir para questão ' + (i + 1),
                    }, String(i + 1));
                })) : null,
            ]);
        };
    },
};
