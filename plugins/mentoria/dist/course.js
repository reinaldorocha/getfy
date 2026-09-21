import { h, ref, computed, onMounted } from 'vue';
import { api, alertBox, badge, btn, card, empty, jsonBody, sectionTitle } from './shared.js?v=b9c6303d02c1';

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
        const answers = ref({});
        const results = ref({});

        async function load() {
            try {
                const data = await api('/mentoria-course/products/' + props.product.id + '/lessons/' + props.lesson.id + '/questions');
                questions.value = data.questions || [];
            } catch (e) {
                message.value = e.message;
            } finally {
                loading.value = false;
            }
        }

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
            if (loading.value) return h('div', { class: 'rounded-2xl border border-zinc-800 p-5 text-sm text-zinc-400' }, 'Carregando exercícios…');
            if (!questions.value.length) return null;

            const answered = Object.keys(results.value).length;
            const correct = Object.values(results.value).filter(r => r.correct).length;

            return h('section', { class: 'mentoria-embedded mentoria-lesson-exercises' }, [
                h('div', { class: 'mb-5 flex flex-wrap items-start justify-between gap-3' }, [
                    h('div', [
                        h('h2', { class: 'text-lg font-bold text-white' }, 'Pratique o que aprendeu'),
                        h('p', { class: 'mt-1 text-sm text-zinc-400' }, questions.value.length + ' questão(ões) desta aula.'),
                    ]),
                    answered ? badge(correct + '/' + answered + ' acertos', correct === answered ? 'green' : 'sky') : null,
                ]),
                alertBox(message.value),
                h('div', { class: 'space-y-4' }, questions.value.map((q, index) => {
                    const result = results.value[q.id];
                    const options = q.type === 'certo_errado' ? ['Certo', 'Errado'] : (q.alternatives || []);
                    return h('article', { class: 'rounded-xl border border-zinc-800 bg-zinc-900/70 p-4' }, [
                        h('div', { class: 'mb-2 flex flex-wrap gap-1' }, [badge('Questão ' + (index + 1), 'sky'), badge(q.subject), q.topic ? badge(q.topic) : null]),
                        h('p', { class: 'whitespace-pre-wrap text-sm font-medium text-white' }, q.prompt),
                        !result ? h('div', { class: 'mt-4 space-y-2' }, options.map((option, optionIndex) => {
                            const value = q.type === 'certo_errado' ? option : String.fromCharCode(65 + optionIndex);
                            return h('label', { class: 'flex cursor-pointer items-start gap-2 rounded-lg border border-zinc-700 p-3 text-sm text-zinc-200' }, [
                                h('input', {
                                    type: 'radio',
                                    name: 'mentoria-course-q-' + q.id,
                                    checked: answers.value[q.id] === value,
                                    onChange: () => answers.value = { ...answers.value, [q.id]: value },
                                }),
                                h('span', q.type === 'certo_errado' ? option : String.fromCharCode(65 + optionIndex) + ') ' + option),
                            ]);
                        })) : null,
                        !result ? h('div', { class: 'mt-3' }, btn('Responder', () => answer(q), 'primary', { disabled: !answers.value[q.id] }))
                            : h('div', {
                                class: 'mt-4 rounded-lg border p-3 text-sm ' + (result.correct
                                    ? 'border-emerald-800 bg-emerald-950/40 text-emerald-100'
                                    : 'border-red-800 bg-red-950/40 text-red-100'),
                            }, [
                                h('strong', result.correct ? '✓ Resposta correta' : '✕ Resposta incorreta'),
                                !result.correct ? h('div', { class: 'mt-1' }, 'Gabarito: ' + result.correct_answer) : null,
                                result.explanation ? h('p', { class: 'mt-2 whitespace-pre-wrap text-xs opacity-90' }, result.explanation) : null,
                                h('div', { class: 'mt-3' }, btn('Refazer', () => {
                                    const next = { ...results.value };
                                    delete next[q.id];
                                    results.value = next;
                                    answers.value = { ...answers.value, [q.id]: '' };
                                }, 'ghost')),
                            ]),
                    ]);
                })),
            ]);
        };
    },
};
