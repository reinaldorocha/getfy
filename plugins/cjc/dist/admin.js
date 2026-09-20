import { h, ref, computed } from 'vue';
import { EDITAL_PROMPT, QUESTIONS_PROMPT, FLASHCARDS_PROMPT } from './prompts.js';
import {
    api, alertBox, badge, btn, card, checkbox, empty, field, fmtDate, fmtDateTime, fmtMoney,
    input, jsonBody, modal, optionize, progressBar, riskBadge, sectionTitle, select, stat, tabs, textarea,
} from './shared.js';

const TAB_ITEMS = [
    ['dashboard', 'Dashboard'],
    ['products', 'Produtos'],
    ['students', 'Alunos / Radar'],
    ['contests', 'Concursos'],
    ['edicts', 'Editais'],
    ['questions', 'Questões'],
    ['flashcards', 'Flashcards'],
    ['materials', 'Materiais'],
    ['courses', 'Cursos'],
    ['audit', 'Auditoria'],
].map(([id, label]) => ({ id, label }));

const DEFAULT_TARGET = () => ({ type: 'global', id: '' });

export const CjcIndex = {
    name: 'CjcIndex',
    props: { plugin_ui_page: { type: Object, default: () => ({}) } },
    setup(props) {
        const state = ref(props.plugin_ui_page || {});
        const activeTab = ref('dashboard');
        const modalState = ref(null);
        const busy = ref(false);
        const message = ref('');
        const success = ref('');
        const query = ref('');
        const expandedDeck = ref('');
        const expandedEdict = ref('');

        const products = computed(() => state.value.products || []);
        const students = computed(() => state.value.students || []);
        const contests = computed(() => state.value.contests || []);
        const edicts = computed(() => state.value.edicts || []);
        const subjects = computed(() => state.value.subjects || []);
        const topics = computed(() => state.value.topics || []);
        const subtopics = computed(() => state.value.subtopics || []);
        const questions = computed(() => state.value.questions || []);
        const decks = computed(() => state.value.decks || []);
        const cards = computed(() => state.value.cards || []);
        const materials = computed(() => state.value.materials || []);

        async function refresh() {
            state.value = await api('/cjc/data');
        }

        async function run(fn, ok = '') {
            busy.value = true;
            message.value = '';
            success.value = '';
            try {
                const result = await fn();
                await refresh();
                if (ok) success.value = ok;
                return result;
            } catch (e) {
                message.value = e.message || String(e);
                throw e;
            } finally {
                busy.value = false;
            }
        }

        function closeModal() {
            modalState.value = null;
        }

        function formGrid(children, cols = 'md:grid-cols-2') {
            return h('div', { class: 'grid gap-4 ' + cols }, children);
        }

        function targetOptions(type) {
            if (type === 'product') return products.value.filter(p => p.cjc_enabled).map(p => ({ value: String(p.id), label: p.name }));
            if (type === 'contest') return optionize(contests.value);
            if (type === 'edict') return edicts.value.map(e => ({ value: String(e.id), label: e.contest_name + ' · ' + e.name }));
            if (type === 'student') return optionize(students.value);
            return [];
        }

        function targetEditor(form) {
            form.targets ||= [DEFAULT_TARGET()];
            return h('div', { class: 'space-y-2' }, [
                h('div', { class: 'flex items-center justify-between' }, [
                    h('span', { class: 'text-xs font-semibold text-zinc-700 dark:text-zinc-200' }, 'Disponibilização'),
                    btn('+ Destino', () => form.targets.push({ type: 'product', id: '' }), 'ghost', { disabled: form.targets.some(t => t.type === 'global') }),
                ]),
                ...form.targets.map((target, index) => h('div', { class: 'grid gap-2 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800 md:grid-cols-[180px_1fr_auto]' }, [
                    select(target, 'type', [
                        { value: 'global', label: 'Todos os alunos CJC' },
                        { value: 'product', label: 'Produto específico' },
                        { value: 'contest', label: 'Concurso' },
                        { value: 'edict', label: 'Edital' },
                        { value: 'student', label: 'Aluno específico' },
                    ], {
                        onChange: (value) => {
                            target.id = '';
                            if (value === 'global') form.targets.splice(0, form.targets.length, { type: 'global', id: '' });
                        },
                    }),
                    target.type === 'global'
                        ? h('div', { class: 'flex items-center rounded-lg px-3 text-xs text-zinc-500' }, 'Todos que possuem qualquer produto CJC deste produtor.')
                        : select(target, 'id', targetOptions(target.type), { placeholder: 'Selecione...' }),
                    btn('×', () => {
                        form.targets.splice(index, 1);
                        if (!form.targets.length) form.targets.push(DEFAULT_TARGET());
                    }, 'danger'),
                ])),
            ]);
        }

        function normalizedTargets(targets) {
            return (targets || [DEFAULT_TARGET()]).map(t => ({
                type: t.type,
                id: t.type === 'global' ? null : t.id,
            }));
        }

        function openProduct(product) {
            modalState.value = {
                type: 'product',
                item: product,
                form: {
                    capabilities: [...(product.capabilities?.length ? product.capabilities : (state.value.available_capabilities || []))],
                },
            };
        }

        async function saveProduct(m) {
            const product = m.item;
            await run(() => api('/cjc/products/' + product.id + '/enable', {
                method: 'POST',
                body: jsonBody({ capabilities: m.form.capabilities, settings: product.settings || {} }),
            }), 'Configuração do produto salva.');
            closeModal();
        }

        async function toggleProduct(product) {
            if (product.cjc_enabled) {
                if (!confirm('Desativar o CJC para este produto? Os alunos perderão acesso por este produto.')) return;
                await run(() => api('/cjc/products/' + product.id, { method: 'DELETE' }), 'Produto CJC desativado.');
            } else {
                await run(() => api('/cjc/products/' + product.id + '/enable', {
                    method: 'POST',
                    body: jsonBody({ capabilities: state.value.available_capabilities || [] }),
                }), 'Produto habilitado para o CJC.');
            }
        }

        function openContest(item = null) {
            modalState.value = {
                type: 'contest',
                item,
                form: {
                    name: item?.name || '',
                    board: item?.board || '',
                    position: item?.position || '',
                    salary: item?.salary ?? '',
                    exam_date: item?.exam_date || '',
                    pre_notice: !!item?.pre_notice,
                    review_intervals: item?.review_intervals || '1,7,30',
                },
            };
        }

        async function saveContest(m) {
            const payload = { ...m.form, salary: m.form.salary === '' ? null : Number(m.form.salary), exam_date: m.form.exam_date || null };
            await run(() => api(m.item ? '/cjc/contests/' + m.item.id : '/cjc/contests', {
                method: m.item ? 'PATCH' : 'POST',
                body: jsonBody(payload),
            }), m.item ? 'Concurso atualizado.' : 'Concurso criado.');
            closeModal();
        }

        async function deleteContest(item) {
            if (!confirm('Desativar este concurso e seus vínculos?')) return;
            await run(() => api('/cjc/contests/' + item.id, { method: 'DELETE' }), 'Concurso desativado.');
        }

        function openAssign(kind, item) {
            modalState.value = {
                type: 'assign',
                kind,
                item,
                form: { audience_type: 'all', product_id: '', student_ids: [], group: 'foco' },
            };
        }

        async function saveAssign(m) {
            const payload = {
                audience_type: m.form.audience_type,
                product_id: m.form.audience_type === 'product' ? m.form.product_id : null,
                student_ids: m.form.audience_type === 'students' ? m.form.student_ids : [],
                ...(m.kind === 'contest' ? { group: m.form.group } : {}),
            };
            const url = m.kind === 'contest'
                ? '/cjc/contests/' + m.item.id + '/assign'
                : '/cjc/edicts/' + m.item.id + '/assign';
            const result = await run(() => api(url, { method: 'POST', body: jsonBody(payload) }), 'Disponibilização concluída.');
            success.value = (result.assigned ?? 0) + ' aluno(s) atualizado(s).';
            closeModal();
        }

        function openCatalogImport() {
            modalState.value = {
                type: 'json',
                title: 'Importar concurso + edital por JSON',
                mode: 'catalog',
                form: { json: '' },
            };
        }

        function promptForMode(mode) {
            if (mode === 'catalog') return EDITAL_PROMPT;
            if (mode === 'questions') return QUESTIONS_PROMPT;
            return FLASHCARDS_PROMPT;
        }

        async function copyImportPrompt(mode) {
            await navigator.clipboard.writeText(promptForMode(mode));
            success.value = 'Prompt copiado. Cole no ChatGPT, Gemini ou outra IA.';
        }

        async function submitJson(m) {
            let parsed;
            try { parsed = JSON.parse(m.form.json); }
            catch { message.value = 'JSON inválido.'; return; }

            let url;
            let payload;
            if (m.mode === 'catalog') {
                url = '/cjc/catalog/import';
                payload = { payload: parsed };
            } else if (m.mode === 'questions') {
                url = '/cjc/questions/import';
                payload = Array.isArray(parsed) ? { questions: parsed } : { ...parsed };
                payload.targets = normalizedTargets(m.form.targets);
            } else {
                url = '/cjc/flashcard-decks/import';
                if (Array.isArray(parsed)) {
                    payload = { decks: parsed };
                } else if (Array.isArray(parsed.decks) || Array.isArray(parsed.baralhos)) {
                    payload = { ...parsed };
                } else {
                    payload = { baralhos: [parsed] };
                }
                payload.targets = normalizedTargets(m.form.targets);
            }

            await run(() => api(url, { method: 'POST', body: jsonBody(payload) }), 'Importação concluída.');
            closeModal();
        }

        function openEdict(item = null) {
            modalState.value = {
                type: 'edict',
                item,
                form: {
                    contest_id: item?.contest_id || contests.value[0]?.id || '',
                    name: item?.name || '',
                    version: item?.version || '',
                },
            };
        }

        async function saveEdict(m) {
            const payload = { ...m.form };
            await run(() => api(m.item ? '/cjc/edicts/' + m.item.id : '/cjc/edicts', {
                method: m.item ? 'PATCH' : 'POST',
                body: jsonBody(payload),
            }), m.item ? 'Edital atualizado.' : 'Edital criado.');
            closeModal();
        }

        async function deleteEdict(item) {
            if (!confirm('Desativar este edital e sua árvore?')) return;
            await run(() => api('/cjc/edicts/' + item.id, { method: 'DELETE' }), 'Edital desativado.');
        }

        function openHierarchy(type, parent, item = null) {
            modalState.value = {
                type: 'hierarchy',
                hierarchyType: type,
                parent,
                item,
                form: {
                    name: item?.name || '',
                    position: item?.position ?? 0,
                    weight: item?.weight ?? '',
                    relevance: item?.relevance ?? '',
                    notes: item?.notes || '',
                },
            };
        }

        async function saveHierarchy(m) {
            const type = m.hierarchyType;
            const plural = type === 'subject' ? 'subjects' : type === 'topic' ? 'topics' : 'subtopics';
            const parentSegment = type === 'subject' ? 'edicts' : type === 'topic' ? 'subjects' : 'topics';
            const url = m.item
                ? '/cjc/' + plural + '/' + m.item.id
                : '/cjc/' + parentSegment + '/' + m.parent.id + '/' + plural;
            const payload = {
                ...m.form,
                weight: m.form.weight === '' ? null : Number(m.form.weight),
                relevance: m.form.relevance === '' ? null : Number(m.form.relevance),
                position: Number(m.form.position || 0),
            };
            await run(() => api(url, { method: m.item ? 'PATCH' : 'POST', body: jsonBody(payload) }), 'Item do edital salvo.');
            closeModal();
        }

        async function deleteHierarchy(type, item) {
            if (!confirm('Excluir/desativar este item?')) return;
            const plural = type === 'subject' ? 'subjects' : type === 'topic' ? 'topics' : 'subtopics';
            await run(() => api('/cjc/' + plural + '/' + item.id, { method: 'DELETE' }), 'Item desativado.');
        }

        async function moveHierarchy(type, parentId, edictId, itemId, delta) {
            const source = type === 'subject' ? subjects.value : type === 'topic' ? topics.value : subtopics.value;
            const parentKey = type === 'subject' ? 'edict_id' : type === 'topic' ? 'subject_id' : 'topic_id';
            const siblings = source.filter(x => String(x[parentKey]) === String(parentId))
                .slice().sort((a, b) => Number(a.position || 0) - Number(b.position || 0));
            const index = siblings.findIndex(x => x.id === itemId);
            const next = index + delta;
            if (index < 0 || next < 0 || next >= siblings.length) return;
            [siblings[index], siblings[next]] = [siblings[next], siblings[index]];
            await run(() => api('/cjc/edicts/' + edictId + '/order', {
                method: 'PUT',
                body: jsonBody({ items: siblings.map((x, i) => ({ type, id: x.id, position: i + 1 })) }),
            }));
        }

        function openQuestion(item = null) {
            modalState.value = {
                type: 'question',
                item,
                form: {
                    subject: item?.subject || '',
                    topic: item?.topic || '',
                    type: item?.type || 'multipla_escolha',
                    prompt: item?.prompt || '',
                    alternatives: Array.isArray(item?.alternatives) ? item.alternatives.join('\n') : '',
                    correct_answer: item?.correct_answer || '',
                    explanation: item?.explanation || '',
                    targets: item?.targets?.length ? item.targets.map(t => ({ type: t.type || t.target_type, id: t.id || t.target_id || '' })) : [DEFAULT_TARGET()],
                },
            };
        }

        async function saveQuestion(m) {
            const payload = {
                subject: m.form.subject,
                topic: m.form.topic || null,
                type: m.form.type,
                prompt: m.form.prompt,
                alternatives: m.form.type === 'multipla_escolha'
                    ? m.form.alternatives.split(/\r?\n/).map(x => x.trim()).filter(Boolean)
                    : [],
                correct_answer: m.form.correct_answer,
                explanation: m.form.explanation || null,
                targets: normalizedTargets(m.form.targets),
            };
            await run(() => api(m.item ? '/cjc/questions/' + m.item.id : '/cjc/questions', {
                method: m.item ? 'PATCH' : 'POST',
                body: jsonBody(payload),
            }), 'Questão salva.');
            closeModal();
        }

        async function deleteQuestion(item) {
            if (!confirm('Desativar esta questão?')) return;
            await run(() => api('/cjc/questions/' + item.id, { method: 'DELETE' }), 'Questão desativada.');
        }

        function openDeck(item = null) {
            modalState.value = {
                type: 'deck',
                item,
                form: {
                    name: item?.name || '',
                    description: item?.description || '',
                    icon: item?.icon || '',
                    position: item?.position ?? 0,
                    contest_id: item?.contest_id || '',
                    edict_id: item?.edict_id || '',
                    parent_deck_id: item?.parent_deck_id || '',
                    subject_id: item?.subject_id || '',
                    topic_id: item?.topic_id || '',
                    subtopic_id: item?.subtopic_id || '',
                    targets: item?.targets?.length ? item.targets.map(t => ({ type: t.type || t.target_type, id: t.id || t.target_id || '' })) : [DEFAULT_TARGET()],
                },
            };
        }

        async function saveDeck(m) {
            const payload = {
                ...m.form,
                position: Number(m.form.position || 0),
                contest_id: m.form.contest_id || null,
                edict_id: m.form.edict_id || null,
                parent_deck_id: m.form.parent_deck_id || null,
                subject_id: m.form.subject_id || null,
                topic_id: m.form.topic_id || null,
                subtopic_id: m.form.subtopic_id || null,
                targets: normalizedTargets(m.form.targets),
            };
            await run(() => api(m.item ? '/cjc/flashcard-decks/' + m.item.id : '/cjc/flashcard-decks', {
                method: m.item ? 'PATCH' : 'POST',
                body: jsonBody(payload),
            }), 'Baralho salvo.');
            closeModal();
        }

        async function deleteDeck(item) {
            if (!confirm('Desativar este baralho e seus flashcards?')) return;
            await run(() => api('/cjc/flashcard-decks/' + item.id, { method: 'DELETE' }), 'Baralho desativado.');
        }

        function openCard(deck, item = null) {
            modalState.value = {
                type: 'card',
                deck,
                item,
                form: {
                    type: 'certo_errado',
                    front: item?.front || '',
                    hint: item?.hint || '',
                    correct_answer: item?.correct_answer || 'Certo',
                    explanation: item?.explanation || '',
                    tags: Array.isArray(item?.tags) ? item.tags.join(', ') : '',
                    topic_id: item?.topic_id || '',
                    subtopic_id: item?.subtopic_id || '',
                },
            };
        }

        async function saveCard(m) {
            const payload = {
                type: 'certo_errado',
                front: m.form.front,
                hint: m.form.hint || null,
                correct_answer: m.form.correct_answer,
                explanation: m.form.explanation || null,
                tags: m.form.tags.split(',').map(x => x.trim()).filter(Boolean),
                topic_id: m.form.topic_id || null,
                subtopic_id: m.form.subtopic_id || null,
            };
            const url = m.item ? '/cjc/flashcards/' + m.item.id : '/cjc/flashcard-decks/' + m.deck.id + '/cards';
            await run(() => api(url, { method: m.item ? 'PATCH' : 'POST', body: jsonBody(payload) }), 'Flashcard salvo.');
            closeModal();
        }

        async function deleteCard(item) {
            if (!confirm('Desativar este flashcard?')) return;
            await run(() => api('/cjc/flashcards/' + item.id, { method: 'DELETE' }), 'Flashcard desativado.');
        }

        function openMaterial(item = null) {
            modalState.value = {
                type: 'material',
                item,
                form: {
                    title: item?.title || '',
                    description: item?.description || '',
                    type: item?.type || 'link',
                    url: item?.url || '',
                    text: item?.text || '',
                    folder: item?.folder || '',
                    file: null,
                    targets: item?.targets?.length ? item.targets.map(t => ({ type: t.type || t.target_type, id: t.id || t.target_id || '' })) : [DEFAULT_TARGET()],
                },
            };
        }

        async function saveMaterial(m) {
            const fd = new FormData();
            fd.append('title', m.form.title);
            fd.append('description', m.form.description || '');
            fd.append('type', m.form.type);
            fd.append('url', m.form.url || '');
            fd.append('text', m.form.text || '');
            fd.append('folder', m.form.folder || '');
            fd.append('targets', JSON.stringify(normalizedTargets(m.form.targets)));
            if (m.form.file) fd.append('file', m.form.file);
            if (m.item) fd.append('_method', 'PATCH');

            await run(() => api(m.item ? '/cjc/materials/' + m.item.id : '/cjc/materials', {
                method: 'POST',
                body: fd,
            }), 'Material salvo.');
            closeModal();
        }

        async function deleteMaterial(item) {
            if (!confirm('Desativar este material?')) return;
            await run(() => api('/cjc/materials/' + item.id, { method: 'DELETE' }), 'Material desativado.');
        }

        async function openStudentDetail(student) {
            busy.value = true;
            message.value = '';
            try {
                const detail = await api('/cjc/students/' + student.id);
                modalState.value = { type: 'student', item: student, detail, form: { contest_id: '', edict_id: '' } };
            } catch (e) {
                message.value = e.message;
            } finally {
                busy.value = false;
            }
        }

        async function assignToStudent(m, kind) {
            const id = kind === 'contest' ? m.form.contest_id : m.form.edict_id;
            if (!id) return;
            const url = kind === 'contest'
                ? '/cjc/contests/' + id + '/students/' + m.item.id
                : '/cjc/edicts/' + id + '/students/' + m.item.id;
            await run(() => api(url, { method: 'POST', body: jsonBody(kind === 'contest' ? { group: 'foco' } : {}) }), 'Atribuição salva.');
            m.detail = await api('/cjc/students/' + m.item.id);
        }

        function renderDashboard() {
            const summary = state.value.summary || {};
            const risk = students.value.slice().sort((a, b) => {
                const score = x => x.metrics?.risk_level === 'vermelho' ? 2 : x.metrics?.risk_level === 'amarelo' ? 1 : 0;
                return score(b) - score(a);
            }).slice(0, 12);

            return h('div', { class: 'space-y-5' }, [
                h('div', { class: 'grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8' }, [
                    stat('Alunos', summary.students),
                    stat('Concursos', summary.contests),
                    stat('Editais', summary.edicts),
                    stat('Questões', summary.questions),
                    stat('Baralhos', summary.flashcard_decks),
                    stat('Materiais', summary.materials),
                    stat('Horas / 7 dias', summary.study_hours_7d),
                    stat('Acerto', (summary.accuracy || 0) + '%'),
                ]),
                card([
                    sectionTitle('Radar da mentoria', 'Alunos que merecem atenção primeiro.'),
                    risk.length ? h('div', { class: 'grid gap-3 md:grid-cols-2 xl:grid-cols-3' }, risk.map(student =>
                        h('button', {
                            type: 'button',
                            class: 'rounded-xl border border-zinc-200 p-4 text-left hover:border-sky-400 dark:border-zinc-700',
                            onClick: () => openStudentDetail(student),
                        }, [
                            h('div', { class: 'flex items-start justify-between gap-2' }, [
                                h('div', [
                                    h('div', { class: 'font-semibold' }, student.name),
                                    h('div', { class: 'text-xs text-zinc-500' }, student.email),
                                ]),
                                riskBadge(student.metrics?.risk_level),
                            ]),
                            h('p', { class: 'mt-3 text-xs text-zinc-500' }, student.metrics?.risk_reason || ''),
                            h('div', { class: 'mt-3 grid grid-cols-3 gap-2 text-center text-xs' }, [
                                h('div', [h('strong', String(student.metrics?.study_hours_7d || 0)), h('div', 'h / 7d')]),
                                h('div', [h('strong', String(student.metrics?.accuracy || 0) + '%'), h('div', 'acerto')]),
                                h('div', [h('strong', String(student.metrics?.pending_reviews || 0)), h('div', 'revisões')]),
                            ]),
                        ])
                    )) : empty('Nenhum aluno CJC ainda.'),
                ]),
            ]);
        }

        function renderProducts() {
            return card([
                sectionTitle('Produtos CJC', 'O produto é a fonte de verdade do acesso aluno → infoprodutor.'),
                h('div', { class: 'space-y-2' }, products.value.map(product => h('div', {
                    class: 'flex flex-wrap items-center justify-between gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800',
                }, [
                    h('div', [
                        h('div', { class: 'flex items-center gap-2' }, [
                            h('strong', product.name),
                            product.cjc_enabled ? badge('CJC ativo', 'green') : badge('Produto comum'),
                        ]),
                        h('div', { class: 'mt-1 text-xs text-zinc-500' }, (product.billing_type || 'único') + ' · ' + product.slug),
                        product.cjc_enabled ? h('div', { class: 'mt-2 flex flex-wrap gap-1' }, (product.capabilities || []).map(c => badge(c, 'sky'))) : null,
                    ]),
                    h('div', { class: 'flex gap-2' }, [
                        product.cjc_enabled ? btn('Recursos', () => openProduct(product), 'ghost') : null,
                        btn(product.cjc_enabled ? 'Desativar' : 'Ativar CJC', () => toggleProduct(product), product.cjc_enabled ? 'danger' : 'success'),
                    ]),
                ]))),
            ]);
        }

        function renderStudents() {
            const q = query.value.toLowerCase();
            const filtered = students.value.filter(s => !q || s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q));
            return card([
                sectionTitle('Alunos e Radar', 'A lista vem automaticamente dos compradores/usuários com acesso aos produtos CJC.'),
                h('div', { class: 'mb-4 max-w-md' }, [
                    h('input', {
                        value: query.value,
                        placeholder: 'Buscar aluno...',
                        class: 'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                        onInput: e => query.value = e.target.value,
                    }),
                ]),
                filtered.length ? h('div', { class: 'overflow-x-auto' }, [
                    h('table', { class: 'w-full text-left text-sm' }, [
                        h('thead', { class: 'text-xs text-zinc-500' }, [h('tr', [
                            h('th', { class: 'p-2' }, 'Aluno'), h('th', { class: 'p-2' }, 'Risco'),
                            h('th', { class: 'p-2' }, '7 dias'), h('th', { class: 'p-2' }, 'Acerto'),
                            h('th', { class: 'p-2' }, 'Edital'), h('th', { class: 'p-2' }, ''),
                        ])]),
                        h('tbody', filtered.map(student => h('tr', { class: 'border-t border-zinc-200 dark:border-zinc-800' }, [
                            h('td', { class: 'p-2' }, [h('div', { class: 'font-medium' }, student.name), h('div', { class: 'text-xs text-zinc-500' }, student.email)]),
                            h('td', { class: 'p-2' }, riskBadge(student.metrics?.risk_level)),
                            h('td', { class: 'p-2' }, (student.metrics?.study_hours_7d || 0) + 'h'),
                            h('td', { class: 'p-2' }, (student.metrics?.accuracy || 0) + '%'),
                            h('td', { class: 'min-w-32 p-2' }, progressBar(student.metrics?.edict_percentage || 0)),
                            h('td', { class: 'p-2 text-right' }, btn('Acompanhar', () => openStudentDetail(student), 'ghost')),
                        ]))),
                    ]),
                ]) : empty('Nenhum aluno encontrado.'),
            ]);
        }

        function renderContests() {
            return card([
                sectionTitle('Concursos', 'Catálogo de concursos, resultado dos alunos e disponibilização.', h('div', { class: 'flex gap-2' }, [
                    btn('Importar JSON', openCatalogImport, 'ghost'),
                    btn('Novo concurso', () => openContest()),
                ])),
                contests.value.length ? h('div', { class: 'grid gap-3 md:grid-cols-2 xl:grid-cols-3' }, contests.value.map(item => {
                    const assigned = (state.value.student_contests || []).filter(x => x.contest_id === item.id && x.is_active).length;
                    return h('div', { class: 'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700' }, [
                        h('div', { class: 'flex items-start justify-between gap-2' }, [
                            h('div', [h('strong', item.name), h('div', { class: 'text-xs text-zinc-500' }, [item.board, item.position].filter(Boolean).join(' · '))]),
                            item.pre_notice ? badge('Pré-edital', 'amber') : item.exam_date ? badge(fmtDate(item.exam_date), 'sky') : null,
                        ]),
                        h('div', { class: 'mt-3 text-xs text-zinc-500' }, [
                            h('div', 'Salário: ' + fmtMoney(item.salary)),
                            h('div', 'Revisões: ' + (item.review_intervals || '1,7,30')),
                            h('div', assigned + ' aluno(s) atribuído(s)'),
                        ]),
                        h('div', { class: 'mt-4 flex flex-wrap gap-2' }, [
                            btn('Editar', () => openContest(item), 'ghost'),
                            btn('Disponibilizar', () => openAssign('contest', item), 'soft'),
                            btn('Excluir', () => deleteContest(item), 'danger'),
                        ]),
                    ]);
                })) : empty('Nenhum concurso cadastrado.'),
            ]);
        }

        function renderEdicts() {
            return h('div', { class: 'space-y-4' }, [
                card([
                    sectionTitle('Editais verticalizados', 'Matérias → tópicos → subtópicos; atribuição por todos, produto ou alunos.', btn('Novo edital', () => openEdict())),
                    edicts.value.length ? h('div', { class: 'space-y-3' }, edicts.value.map(edict => {
                        const expanded = expandedEdict.value === edict.id;
                        const ownSubjects = subjects.value.filter(s => s.edict_id === edict.id);
                        return h('div', { class: 'rounded-xl border border-zinc-200 dark:border-zinc-700' }, [
                            h('div', { class: 'flex flex-wrap items-center justify-between gap-3 p-4' }, [
                                h('button', { type: 'button', class: 'text-left', onClick: () => expandedEdict.value = expanded ? '' : edict.id }, [
                                    h('strong', edict.name),
                                    h('div', { class: 'text-xs text-zinc-500' }, edict.contest_name + (edict.version ? ' · '+edict.version : '')),
                                ]),
                                h('div', { class: 'flex flex-wrap gap-2' }, [
                                    btn(expanded ? 'Recolher' : 'Abrir árvore', () => expandedEdict.value = expanded ? '' : edict.id, 'ghost'),
                                    btn('+ Matéria', () => openHierarchy('subject', edict), 'soft'),
                                    btn('Disponibilizar', () => openAssign('edict', edict), 'soft'),
                                    btn('Editar', () => openEdict(edict), 'ghost'),
                                    btn('Excluir', () => deleteEdict(edict), 'danger'),
                                ]),
                            ]),
                            expanded ? h('div', { class: 'border-t border-zinc-200 p-4 dark:border-zinc-700' }, ownSubjects.length ? ownSubjects.map(subject => {
                                const ownTopics = topics.value.filter(t => t.subject_id === subject.id);
                                return h('div', { class: 'mb-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800' }, [
                                    h('div', { class: 'flex flex-wrap items-center justify-between gap-2' }, [
                                        h('div', [h('strong', subject.name), subject.weight ? h('span', { class: 'ml-2 text-xs text-zinc-500' }, 'peso '+subject.weight) : null]),
                                        h('div', { class: 'flex flex-wrap gap-1' }, [
                                            btn('↑', () => moveHierarchy('subject', edict.id, edict.id, subject.id, -1), 'ghost'),
                                            btn('↓', () => moveHierarchy('subject', edict.id, edict.id, subject.id, 1), 'ghost'),
                                            btn('+ Tópico', () => openHierarchy('topic', subject), 'soft'),
                                            btn('Editar', () => openHierarchy('subject', edict, subject), 'ghost'),
                                            btn('×', () => deleteHierarchy('subject', subject), 'danger'),
                                        ]),
                                    ]),
                                    ownTopics.length ? h('div', { class: 'mt-3 space-y-2 pl-3' }, ownTopics.map(topic => {
                                        const ownSubs = subtopics.value.filter(s => s.topic_id === topic.id);
                                        return h('div', { class: 'border-l-2 border-sky-200 pl-3 dark:border-sky-900' }, [
                                            h('div', { class: 'flex flex-wrap items-center justify-between gap-2' }, [
                                                h('span', { class: 'text-sm font-medium' }, topic.name),
                                                h('div', { class: 'flex flex-wrap gap-1' }, [
                                                    btn('↑', () => moveHierarchy('topic', subject.id, edict.id, topic.id, -1), 'ghost'),
                                                    btn('↓', () => moveHierarchy('topic', subject.id, edict.id, topic.id, 1), 'ghost'),
                                                    btn('+ Subtópico', () => openHierarchy('subtopic', topic), 'soft'),
                                                    btn('Editar', () => openHierarchy('topic', subject, topic), 'ghost'),
                                                    btn('×', () => deleteHierarchy('topic', topic), 'danger'),
                                                ]),
                                            ]),
                                            ownSubs.length ? h('div', { class: 'mt-2 space-y-1 pl-3' }, ownSubs.map(sub => h('div', { class: 'flex items-center justify-between gap-2 text-sm' }, [
                                                h('span', '• '+sub.name),
                                                h('div', { class: 'flex gap-1' }, [
                                                    btn('↑', () => moveHierarchy('subtopic', topic.id, edict.id, sub.id, -1), 'ghost'),
                                                    btn('↓', () => moveHierarchy('subtopic', topic.id, edict.id, sub.id, 1), 'ghost'),
                                                    btn('Editar', () => openHierarchy('subtopic', topic, sub), 'ghost'),
                                                    btn('×', () => deleteHierarchy('subtopic', sub), 'danger'),
                                                ]),
                                            ]))) : null,
                                        ]);
                                    })) : h('div', { class: 'mt-2 text-xs text-zinc-500' }, 'Sem tópicos.'),
                                ]);
                            }) : empty('Adicione matérias ao edital.')) : null,
                        ]);
                    })) : empty('Nenhum edital cadastrado.'),
                ]),
            ]);
        }

        function renderQuestions() {
            const q = query.value.toLowerCase();
            const filtered = questions.value.filter(x => !q || x.subject.toLowerCase().includes(q) || x.prompt.toLowerCase().includes(q) || String(x.topic || '').toLowerCase().includes(q));
            return card([
                sectionTitle('Banco de questões', 'CRUD, importação e disponibilização por público.', h('div', { class: 'flex gap-2' }, [
                    btn('Importar por IA / JSON', () => modalState.value = { type:'json', title:'Importar questões', mode:'questions', form:{json:'',targets:[DEFAULT_TARGET()]} }, 'ghost'),
                    btn('Nova questão', () => openQuestion()),
                ])),
                h('input', {
                    value: query.value, placeholder: 'Buscar por disciplina, assunto ou enunciado...',
                    class: 'mb-4 w-full max-w-xl rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                    onInput: e => query.value = e.target.value,
                }),
                filtered.length ? h('div', { class: 'space-y-2' }, filtered.slice(0, 300).map(item => h('div', {
                    class: 'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700',
                }, [
                    h('div', { class: 'flex flex-wrap items-start justify-between gap-3' }, [
                        h('div', { class: 'min-w-0 flex-1' }, [
                            h('div', { class: 'flex flex-wrap gap-1' }, [badge(item.subject, 'sky'), item.topic ? badge(item.topic) : null, badge(item.type)]),
                            h('p', { class: 'mt-2 text-sm' }, item.prompt),
                            h('div', { class: 'mt-2 flex flex-wrap gap-1' }, (item.targets || []).map(t => badge((t.type || t.target_type) + (t.id || t.target_id ? ': '+(t.id || t.target_id) : ''), 'violet'))),
                        ]),
                        h('div', { class: 'flex gap-2' }, [
                            btn('Editar', () => openQuestion(item), 'ghost'),
                            btn('Excluir', () => deleteQuestion(item), 'danger'),
                        ]),
                    ]),
                ]))) : empty('Nenhuma questão encontrada.'),
            ]);
        }

        function renderFlashcards() {
            return card([
                sectionTitle('Flashcards', 'Flashcards exclusivamente de Certo/Errado, com repetição espaçada e importação por IA.', h('div', { class: 'flex gap-2' }, [
                    btn('Importar por IA / JSON', () => modalState.value = { type:'json', title:'Importar flashcards Certo/Errado', mode:'flashcards', form:{json:'',targets:[DEFAULT_TARGET()]} }, 'ghost'),
                    btn('Novo baralho', () => openDeck()),
                ])),
                decks.value.length ? h('div', { class: 'space-y-3' }, decks.value.map(deck => {
                    const deckCards = cards.value.filter(c => c.deck_id === deck.id);
                    const expanded = expandedDeck.value === deck.id;
                    return h('div', { class: 'rounded-xl border border-zinc-200 dark:border-zinc-700' }, [
                        h('div', { class: 'flex flex-wrap items-center justify-between gap-3 p-4' }, [
                            h('button', { type:'button', class:'text-left', onClick:()=> expandedDeck.value = expanded ? '' : deck.id }, [
                                h('strong', (deck.icon ? deck.icon+' ' : '') + deck.name),
                                h('div', { class:'text-xs text-zinc-500' }, deckCards.length+' cartão(ões)'),
                                h('div', { class:'mt-1 flex flex-wrap gap-1' }, (deck.targets || []).map(t => badge(t.type || t.target_type, 'violet'))),
                            ]),
                            h('div', { class:'flex flex-wrap gap-2' }, [
                                btn('+ Cartão', ()=>openCard(deck), 'soft'),
                                btn('Editar', ()=>openDeck(deck), 'ghost'),
                                btn(expanded?'Recolher':'Ver cartões', ()=>expandedDeck.value=expanded?'':deck.id, 'ghost'),
                                btn('Excluir', ()=>deleteDeck(deck), 'danger'),
                            ]),
                        ]),
                        expanded ? h('div', { class:'border-t border-zinc-200 p-4 dark:border-zinc-700' },
                            deckCards.length ? h('div',{class:'space-y-2'},deckCards.map(c=>h('div',{class:'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                                h('div',{class:'flex items-start justify-between gap-3'},[
                                    h('div',[badge(c.type,'sky'),h('div',{class:'mt-2 text-sm font-medium'},c.front),c.back?h('div',{class:'mt-1 text-xs text-zinc-500'},c.back):null]),
                                    h('div',{class:'flex gap-1'},[btn('Editar',()=>openCard(deck,c),'ghost'),btn('×',()=>deleteCard(c),'danger')]),
                                ]),
                            ]))) : empty('Sem cartões neste baralho.')
                        ) : null,
                    ]);
                })) : empty('Nenhum baralho cadastrado.'),
            ]);
        }

        function renderMaterials() {
            return card([
                sectionTitle('Materiais de apoio', 'Arquivo, YouTube, texto ou link; com pasta, público e progresso do aluno.', btn('Novo material', () => openMaterial())),
                materials.value.length ? h('div', { class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3' }, materials.value.map(item=>h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                    h('div',{class:'flex items-start justify-between gap-2'},[
                        h('div',[h('strong',item.title),h('div',{class:'text-xs text-zinc-500'},(item.folder||'Geral')+' · '+item.type)]),
                        badge(item.type,'sky'),
                    ]),
                    item.description?h('p',{class:'mt-2 text-xs text-zinc-500'},item.description):null,
                    h('div',{class:'mt-3 flex flex-wrap gap-1'},(item.targets||[]).map(t=>badge(t.type||t.target_type,'violet'))),
                    h('div',{class:'mt-4 flex flex-wrap gap-2'},[
                        item.download_url ? h('a',{href:item.download_url,class:'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold dark:border-zinc-600'},'Baixar') : item.url ? h('a',{href:item.url,target:'_blank',rel:'noopener',class:'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold dark:border-zinc-600'},'Abrir') : null,
                        btn('Editar',()=>openMaterial(item),'ghost'),
                        btn('Excluir',()=>deleteMaterial(item),'danger'),
                    ]),
                ]))) : empty('Nenhum material cadastrado.'),
            ]);
        }

        function renderCourses() {
            const list = state.value.courses || [];
            return card([
                sectionTitle('Cursos / Área de membros', 'Cursos não são duplicados no CJC: esta aba usa a área de membros completa do Getfy.'),
                list.length ? h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},list.map(course=>h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                    h('strong',course.name),
                    course.description?h('p',{class:'mt-2 text-xs text-zinc-500'},course.description):null,
                    h('div',{class:'mt-4'},[
                        h('a',{href:course.builder_url,class:'inline-flex rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Editar módulos e aulas no Getfy'),
                    ]),
                ]))) : empty('Crie um produto do tipo Área de membros na aba Produtos do Getfy para usar cursos no CJC.'),
            ]);
        }

        function renderAudit() {
            const list = state.value.recent_audit || [];
            return card([
                sectionTitle('Auditoria CJC', 'Últimas ações administrativas do módulo.'),
                list.length ? h('div',{class:'space-y-2'},list.map(x=>h('div',{class:'flex flex-wrap items-center justify-between gap-2 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800'},[
                    h('div',[h('strong',x.action),h('span',{class:'ml-2 text-zinc-500'},x.entity+(x.entity_id?' · '+x.entity_id:''))]),
                    h('div',{class:'text-zinc-500'},(x.actor_name||'Sistema')+' · '+fmtDateTime(x.created_at)),
                ]))) : empty('Sem eventos de auditoria.'),
            ]);
        }

        function renderCurrentTab() {
            if (activeTab.value === 'products') return renderProducts();
            if (activeTab.value === 'students') return renderStudents();
            if (activeTab.value === 'contests') return renderContests();
            if (activeTab.value === 'edicts') return renderEdicts();
            if (activeTab.value === 'questions') return renderQuestions();
            if (activeTab.value === 'flashcards') return renderFlashcards();
            if (activeTab.value === 'materials') return renderMaterials();
            if (activeTab.value === 'courses') return renderCourses();
            if (activeTab.value === 'audit') return renderAudit();
            return renderDashboard();
        }

        function renderModal() {
            const m = modalState.value;
            if (!m) return null;

            if (m.type === 'product') {
                const caps = state.value.available_capabilities || [];
                return modal('Recursos do produto: '+m.item.name, h('div',{class:'space-y-3'},[
                    h('p',{class:'text-sm text-zinc-500'},'Marque quais módulos o comprador deste produto pode usar.'),
                    h('div',{class:'grid gap-2 md:grid-cols-2'},caps.map(cap=>h('label',{class:'flex items-center gap-2 rounded-lg border border-zinc-200 p-3 text-sm dark:border-zinc-700'},[
                        h('input',{type:'checkbox',checked:m.form.capabilities.includes(cap),onChange:e=>{
                            if(e.target.checked && !m.form.capabilities.includes(cap)) m.form.capabilities.push(cap);
                            if(!e.target.checked) m.form.capabilities=m.form.capabilities.filter(x=>x!==cap);
                        }}),
                        h('span',cap),
                    ]))),
                ]),closeModal,[btn('Salvar',()=>saveProduct(m),'primary',{disabled:busy.value})]);
            }

            if (m.type === 'contest') {
                return modal(m.item?'Editar concurso':'Novo concurso', h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveContest(m);}},[
                    formGrid([
                        field('Nome',input(m.form,'name',{required:true})), field('Banca',input(m.form,'board')),
                        field('Cargo',input(m.form,'position')), field('Salário',input(m.form,'salary',{type:'number',number:true,step:'0.01'})),
                        field('Data da prova',input(m.form,'exam_date',{type:'date'})), field('Prazos de revisão',input(m.form,'review_intervals',{placeholder:'1,7,30'})),
                    ]),
                    checkbox(m.form,'pre_notice','Pré-edital'),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveContest(m),'primary',{disabled:busy.value})),
                ]),closeModal);
            }

            if (m.type === 'assign') {
                return modal('Disponibilizar '+(m.kind==='contest'?'concurso':'edital'),h('div',{class:'space-y-4'},[
                    field('Público',select(m.form,'audience_type',[
                        {value:'all',label:'Todos os alunos CJC'},
                        {value:'product',label:'Compradores de um produto'},
                        {value:'students',label:'Alunos selecionados'},
                    ])),
                    m.form.audience_type==='product'?field('Produto',select(m.form,'product_id',products.value.filter(p=>p.cjc_enabled).map(p=>({value:String(p.id),label:p.name})),{placeholder:'Selecione...'})):null,
                    m.form.audience_type==='students'?h('div',{class:'max-h-64 space-y-1 overflow-y-auto rounded-lg border border-zinc-200 p-2 dark:border-zinc-700'},students.value.map(s=>h('label',{class:'flex items-center gap-2 p-2 text-sm'},[
                        h('input',{type:'checkbox',checked:m.form.student_ids.includes(s.id),onChange:e=>{
                            if(e.target.checked&&!m.form.student_ids.includes(s.id))m.form.student_ids.push(s.id);
                            if(!e.target.checked)m.form.student_ids=m.form.student_ids.filter(id=>id!==s.id);
                        }}),h('span',s.name+' · '+s.email),
                    ]))):null,
                    m.kind==='contest'?field('Grupo',select(m.form,'group',[{value:'foco',label:'Foco'},{value:'mira',label:'Mira'},{value:'realizado',label:'Realizado'}])):null,
                ]),closeModal,[btn('Aplicar',()=>saveAssign(m),'primary',{disabled:busy.value})]);
            }

            if (m.type === 'json') {
                const promptText = promptForMode(m.mode);
                return modal(m.title,h('div',{class:'space-y-4'},[
                    h('div',{class:'rounded-xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950'},[
                        h('div',{class:'flex flex-wrap items-center justify-between gap-3'},[
                            h('div',[
                                h('strong',{class:'text-sm'},'1. Copie o prompt para a IA'),
                                h('p',{class:'mt-1 text-xs text-zinc-500'},'Gere o JSON e depois cole no campo abaixo.'),
                            ]),
                            btn('📋 Copiar Prompt',()=>copyImportPrompt(m.mode),'primary'),
                        ]),
                        h('details',{class:'mt-3'},[
                            h('summary',{class:'cursor-pointer text-xs font-semibold'},'Ver prompt'),
                            h('pre',{class:'mt-2 max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-white p-3 text-[11px] dark:bg-zinc-900'},promptText),
                        ]),
                    ]),
                    m.mode!=='catalog'?targetEditor(m.form):null,
                    h('div',[
                        h('div',{class:'mb-1 text-xs font-semibold'},'2. Cole o JSON gerado'),
                        textarea(m.form,'json',{rows:18,placeholder:'{ ... }'}),
                    ]),
                ]),closeModal,[btn('Importar JSON',()=>submitJson(m),'primary',{disabled:busy.value})],'max-w-5xl');
            }

            if (m.type === 'edict') {
                return modal(m.item?'Editar edital':'Novo edital',h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveEdict(m);}},[
                    !m.item?field('Concurso',select(m.form,'contest_id',optionize(contests.value),{placeholder:'Selecione...',required:true})):null,
                    field('Nome',input(m.form,'name',{required:true})),
                    field('Versão',input(m.form,'version')),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveEdict(m),'primary',{})),
                ]),closeModal);
            }

            if (m.type === 'hierarchy') {
                const names={subject:'matéria',topic:'tópico',subtopic:'subtópico'};
                return modal((m.item?'Editar ':'Novo ')+names[m.hierarchyType],h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveHierarchy(m);}},[
                    field('Nome',input(m.form,'name',{required:true})),
                    formGrid([field('Ordem',input(m.form,'position',{type:'number',number:true,min:0})),field('Peso',input(m.form,'weight',{type:'number',number:true,step:'0.01'})),field('Relevância (0-100)',input(m.form,'relevance',{type:'number',number:true,min:0,max:100}))]),
                    field('Observações',textarea(m.form,'notes',{rows:3})),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveHierarchy(m),'primary',{})),
                ]),closeModal);
            }

            if (m.type === 'question') {
                return modal(m.item?'Editar questão':'Nova questão',h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveQuestion(m);}},[
                    formGrid([field('Disciplina',input(m.form,'subject',{required:true})),field('Assunto',input(m.form,'topic')),field('Tipo',select(m.form,'type',[{value:'multipla_escolha',label:'Múltipla escolha'},{value:'certo_errado',label:'Certo / Errado'}]))]),
                    field('Enunciado',textarea(m.form,'prompt',{rows:5,required:true})),
                    m.form.type==='multipla_escolha'?field('Alternativas (uma por linha)',textarea(m.form,'alternatives',{rows:5})):null,
                    field('Resposta correta',input(m.form,'correct_answer',{required:true})),
                    field('Explicação',textarea(m.form,'explanation',{rows:4})),
                    targetEditor(m.form),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveQuestion(m),'primary',{})),
                ]),closeModal,null,'max-w-4xl');
            }

            if (m.type === 'deck') {
                return modal(m.item?'Editar baralho':'Novo baralho',h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveDeck(m);}},[
                    formGrid([field('Nome',input(m.form,'name',{required:true})),field('Ícone',input(m.form,'icon')),field('Ordem',input(m.form,'position',{type:'number',number:true,min:0}))]),
                    field('Descrição',textarea(m.form,'description',{rows:3})),
                    formGrid([
                        field('Concurso (opcional)',select(m.form,'contest_id',optionize(contests.value),{placeholder:'—'})),
                        field('Edital (opcional)',select(m.form,'edict_id',edicts.value.map(e=>({value:String(e.id),label:e.contest_name+' · '+e.name})),{placeholder:'—'})),
                        field('Baralho pai',select(m.form,'parent_deck_id',decks.value.filter(d=>d.id!==m.item?.id).map(d=>({value:String(d.id),label:d.name})),{placeholder:'—'})),
                    ]),
                    targetEditor(m.form),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveDeck(m),'primary',{})),
                ]),closeModal,null,'max-w-4xl');
            }

            if (m.type === 'card') {
                return modal(m.item?'Editar flashcard':'Novo flashcard Certo/Errado',h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveCard(m);}},[
                    h('div',{class:'rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-800'},'Flashcards do CJC usam somente afirmações de Certo ou Errado. Questões de múltipla escolha ficam no Banco de Questões.'),
                    field('Afirmação',textarea(m.form,'front',{rows:5,required:true})),
                    field('Resposta correta',select(m.form,'correct_answer',[{value:'Certo',label:'Certo'},{value:'Errado',label:'Errado'}],{required:true})),
                    field('Explicação / fundamento',textarea(m.form,'explanation',{rows:5})),
                    field('Dica (opcional)',textarea(m.form,'hint',{rows:2})),
                    field('Etiquetas (separadas por vírgula)',input(m.form,'tags')),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveCard(m),'primary',{})),
                ]),closeModal,null,'max-w-4xl');
            }

            if (m.type === 'material') {
                return modal(m.item?'Editar material':'Novo material',h('form',{class:'space-y-4',onSubmit:e=>{e.preventDefault();saveMaterial(m);}},[
                    formGrid([field('Título',input(m.form,'title',{required:true})),field('Pasta',input(m.form,'folder')),field('Tipo',select(m.form,'type',[
                        {value:'arquivo',label:'Arquivo'},{value:'youtube',label:'YouTube'},{value:'texto',label:'Texto'},{value:'link',label:'Link'},
                    ]))]),
                    field('Descrição',textarea(m.form,'description',{rows:3})),
                    ['youtube','link'].includes(m.form.type)?field('URL',input(m.form,'url',{required:true})):null,
                    m.form.type==='texto'?field('Conteúdo',textarea(m.form,'text',{rows:8,required:true})):null,
                    m.form.type==='arquivo'?field(m.item?'Substituir arquivo (opcional)':'Arquivo',h('input',{
                        type:'file',required:!m.item,
                        class:'w-full rounded-lg border border-zinc-300 p-2 text-sm dark:border-zinc-700',
                        onChange:e=>m.form.file=e.target.files?.[0]||null,
                    }),'PDF, Office, texto, imagem ou ZIP; até 20 MB.'):null,
                    targetEditor(m.form),
                    h('div',{class:'flex justify-end'},btn('Salvar',()=>saveMaterial(m),'primary',{})),
                ]),closeModal,null,'max-w-4xl');
            }

            if (m.type === 'student') {
                const d=m.detail||{};
                return modal('Acompanhamento · '+m.item.name,h('div',{class:'space-y-5'},[
                    h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4'},[
                        stat('Horas / 7d',d.metrics?.study_hours_7d),stat('Acerto',(d.metrics?.accuracy||0)+'%'),
                        stat('Edital',(d.metrics?.edict_percentage||0)+'%'),stat('Revisões',d.metrics?.pending_reviews||0),
                    ]),
                    card([
                        sectionTitle('Atribuir conteúdo'),
                        formGrid([
                            field('Concurso',select(m.form,'contest_id',optionize(contests.value),{placeholder:'Selecione...'})),
                            h('div',{class:'flex items-end'},btn('Atribuir concurso',()=>assignToStudent(m,'contest'),'soft')),
                            field('Edital',select(m.form,'edict_id',edicts.value.map(e=>({value:String(e.id),label:e.contest_name+' · '+e.name})),{placeholder:'Selecione...'})),
                            h('div',{class:'flex items-end'},btn('Atribuir edital',()=>assignToStudent(m,'edict'),'soft')),
                        ]),
                    ]),
                    card([sectionTitle('Concursos do aluno'),(d.contests||[]).length?h('div',{class:'space-y-2'},d.contests.map(c=>h('div',{class:'rounded-lg bg-zinc-50 p-3 text-sm dark:bg-zinc-800'},c.name+' · '+c.group+(c.result?' · '+c.result:'')))):empty('Sem concursos.')]),
                    card([sectionTitle('Métricas por matéria'),(d.metrics_subjects||[]).length?h('div',{class:'space-y-2'},d.metrics_subjects.map(s=>h('div',{class:'grid gap-2 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800 md:grid-cols-4'},[
                        h('strong',s.name),h('span','Tempo: '+Math.round((s.seconds||0)/60)+' min'),h('span','Acerto: '+(s.accuracy??'—')+'%'),h('span','Edital: '+(s.coverage||0)+'%'),
                    ]))):empty('Sem dados suficientes.')]),
                ]),closeModal,null,'max-w-5xl');
            }

            return null;
        }

        return () => h('div', { class: 'space-y-5' }, [
            h('div', { class: 'flex flex-wrap items-start justify-between gap-4' }, [
                h('div', [
                    h('h1', { class: 'text-2xl font-bold text-zinc-900 dark:text-white' }, 'CJC · Chega Junto Concurseiro'),
                    h('p', { class: 'mt-1 text-sm text-zinc-500' }, 'Mentoria, estudo e acompanhamento integrados ao Getfy.'),
                ]),
                h('a', { href: state.value.student_app_base || '#', target: '_blank', class: 'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold dark:border-zinc-700' }, 'Prévia da área do aluno'),
            ]),
            alertBox(message.value),
            alertBox(success.value, 'success'),
            tabs(TAB_ITEMS, activeTab.value, id => { activeTab.value=id; query.value=''; }),
            renderCurrentTab(),
            busy.value ? h('div',{class:'fixed bottom-5 right-5 z-[100001] rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white shadow-xl'},'Salvando…') : null,
            renderModal(),
        ]);
    },
};
