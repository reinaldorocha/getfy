import { h, ref, computed } from 'vue';
import { api, badge, btn, card, field, input, select, textarea, modal, sectionTitle, progressBar, empty, fmtDate, jsonBody, renderIcon } from './shared.js?v=e48f89876fec';

export function useGuidedWorkspace({ state, base, contest, mentor, busy, run, navigate, label, openTimer, aiAvailable, askAi }) {
    const dialog = ref(null);
    const learning = computed(() => state.value.learning || {});
    const post = (path, body, method = 'POST') => api(base.value + '/learning/' + path, { method, body: jsonBody({ contest_id: contest.value, ...body }) });
    const act = (fn, message) => run(fn, message).catch(() => {});
    const close = () => dialog.value = null;
    const dayNames = { seg: 'Seg', ter: 'Ter', qua: 'Qua', qui: 'Qui', sex: 'Sex', sab: 'Sáb', dom: 'Dom' };
    const localDate = () => learning.value.date || new Intl.DateTimeFormat('sv-SE', { timeZone: learning.value.timezone || 'America/Fortaleza' }).format(new Date());

    function openProfile() {
        if (!contest.value) { act(() => Promise.reject(new Error('O mentor precisa atribuir um concurso antes do diagnóstico.')), ''); return; }
        const profile = learning.value.profile;
        const d = profile?.diagnostic || {};
        const config = state.value.schedule?.configuration || {};
        dialog.value = { type: 'profile', form: { timezone: profile?.timezone || 'America/Fortaleza', level: d.level || 'iniciante',
            difficulties: d.difficulties || '', goal: d.goal || 80, hours: { dom: 0, seg: 2, ter: 2, qua: 2, qui: 2, sex: 2, sab: 0, ...(config.horas || {}), ...(d.hours || {}) } } };
    }
    function openPlan() {
        if (!contest.value) { act(() => Promise.reject(new Error('Atribua um concurso e um edital ao aluno antes de preparar o plano.')), ''); return; }
        const d = learning.value.profile?.diagnostic || {};
        const subjects = (state.value.subjects || []).filter(s => (state.value.edicts || []).some(e => e.id === s.edict_id && e.contest_id === contest.value));
        const selected = {}, affinity = {}, priorities = {};
        subjects.forEach(s => { selected[s.id] = true; affinity[s.id] = ({iniciante:30,intermediario:50,avancado:70})[d.level] || 50; priorities[s.id] = 'media'; });
        dialog.value = { type: 'plan', subjects, form: { selected, affinity, priorities, minutes: d.level === 'iniciante' ? 25 : 30, mode: 'agendado', reason: '', hours: d.hours ? Object.fromEntries(Object.keys(dayNames).map(key => [key, Number(d.hours[key] || 0)])) : { dom: 0, seg: 2, ter: 2, qua: 2, qui: 2, sex: 2, sab: 0 } }, preview: null };
    }
    function openReprogram() {
        act(async () => { const preview = await post('reprogram-preview', {}); dialog.value = { type: 'plan', reprogram: true, form: { reason: '' }, preview }; }, '');
    }
    function openNote() { dialog.value = { type: 'note', form: { message: '' } }; }
    function openExecution(item) {
        dialog.value = { type: 'execute', item, requestId: crypto.randomUUID(), form: { minutes: '', solved: 0, correct: 0, notes: '' } };
    }
    const hoursFields = (f) => h('div', { class: 'mentoria-guided-hours' }, Object.entries(dayNames).map(([key, name]) => field(name, input(f.hours, key, { type: 'number', min: 0, max: 12, step: .5 }))));
    const task = (item) => h('article', { class: 'mentoria-guided-task', key: item.id }, [
        h('span', { class: 'mentoria-guided-task-mark', 'aria-hidden': 'true' }, [renderIcon(item.scheduled_review_id ? 'reviews' : 'schedule', '', 19)]),
        h('div', { class: 'mentoria-guided-task-content' }, [h('strong', label(item)), h('p', {}, (item.scheduled_review_id ? 'Revisão' : 'Estudo') + ' · ' + item.duration_minutes + ' min previstos' + (item.planned_date && item.planned_date < localDate() ? ' · Pendente desde ' + fmtDate(item.planned_date) : ''))]),
        btn('Registrar', () => openExecution(item), 'ghost', { disabled: busy.value }),
    ]);
    function renderToday() {
        const l = learning.value;
        const next = (l.today || [])[0];
        const guidance = (l.notes || []).find(n => n.kind === 'guidance');
        const week = l.week || [];
        const total = week.reduce((s, d) => s + d.total, 0), done = week.reduce((s, d) => s + d.completed, 0);
        return h('div', { class: 'mentoria-guided' }, [
            h('header', { class: 'mentoria-guided-heading' }, [h('span', { class: 'mentoria-guided-kicker' }, mentor.value ? 'ACOMPANHAMENTO INDIVIDUAL' : 'SEU PERCURSO, UM PASSO DE CADA VEZ'),
                h('h2', {}, (mentor.value ? 'Plano de ' : 'Bom estudo, ') + (state.value.student?.name || 'aluno') + '.'),
                h('p', {}, 'Orientação do mentor, rotina possível e evolução visível.')]),
            h('div', { class: 'mentoria-guided-columns' }, [h('div', { class: 'mentoria-guided-stack' }, [
                h('section', { class: 'mentoria-guided-hero' }, [badge(next?.scheduled_review_id ? 'Revisão prioritária' : next ? 'Sua próxima missão' : 'Próximo passo', 'violet'),
                    h('h2', {}, next ? label(next) : state.value.schedule ? 'Seu dia está em dia.' : 'Vamos organizar seu percurso.'),
                    h('p', {}, next ? (next.duration_minutes + ' minutos previstos · ' + (next.scheduled_review_id ? 'Retome o conteúdo antes de avançar.' : 'Atividade do plano publicado pelo mentor.')) : 'Informe sua rotina e acompanhe a publicação do plano pelo mentor.'),
                    h('div', { class: 'mentoria-guided-actions' }, [next ? btn('Iniciar no timer', () => openTimer({ subject_id: next.subject_id, topic_id: next.topic_id, subtopic_id: next.subtopic_id, mode: next.scheduled_review_id ? 'revisao' : 'estudo' }), 'primary', { icon: 'timer' }) : btn('Meu diagnóstico', openProfile, 'primary'),
                        next ? btn('Registrar execução', () => openExecution(next), 'soft') : mentor.value ? btn('Preparar plano', openPlan, 'soft') : null])]),
                card([sectionTitle('Percurso de hoje', l.overdue ? l.overdue + ' pendências anteriores. Combine o ajuste com o mentor.' : 'Execute no seu ritmo e registre o tempo realizado.'), ...(l.today || []).slice(0, 6).map(task), !(l.today || []).length ? empty('Sem atividades pendentes para hoje. Consulte os próximos dias no plano.') : null]),
                card([sectionTitle('Orientação da mentoria', guidance ? guidance.actor_name + ' · ' + fmtDate(guidance.created_at) : 'Um espaço para combinar o próximo passo.'),
                    guidance ? h('blockquote', { class: 'mentoria-guided-quote' }, guidance.message) : h('p', {}, 'Ainda não há orientação publicada para este concurso.'),
                    btn(mentor.value ? 'Publicar orientação' : 'Solicitar ajuste', openNote, 'ghost')]),
            ]), h('div', { class: 'mentoria-guided-stack' }, [
                card([sectionTitle('Sua semana', done + ' de ' + total + ' atividades concluídas'), progressBar(total ? done / total * 100 : 0, 'Execução'),
                    h('div', { class: 'mentoria-guided-days' }, week.map(d => h('div', { class: ['mentoria-guided-day', d.date === l.date ? 'is-today' : '', !d.capacity ? 'is-rest' : ''], key: d.date }, [h('span', {}, dayNames[d.key]), h('strong', {}, !d.capacity && !d.total ? '—' : d.completed + '/' + d.total)]))),
                    h('p', { class: 'mentoria-guided-muted' }, 'Dias de descanso fazem parte do plano. Compare a carga prevista com sua disponibilidade.')]),
                renderRewards(false),
                card([sectionTitle('Seu diagnóstico', l.profile ? 'Salvo e disponível em qualquer dispositivo.' : 'Ainda não preenchido.'),
                    h('p', { class: 'mentoria-guided-muted' }, l.profile ? 'Nível informado: ' + l.profile.diagnostic.level + '. Meta: ' + l.profile.diagnostic.goal + '%.' : 'Conte sua disponibilidade e dificuldades para orientar o mentor.'),
                    btn('Atualizar diagnóstico', openProfile, 'ghost')]),
            ])]),
        ]);
    }
    function renderRewards(full = true) {
        const rewards = learning.value.rewards;
        if (!rewards) return null;
        return card([sectionTitle('Minha evolução', 'Nível de participação. Domínio é acompanhado nas métricas.'),
            h('div', { class: 'mentoria-guided-level' }, [h('strong', {}, 'Nível ' + rewards.level), badge(rewards.xp + ' XP', 'violet')]),
            progressBar(rewards.level_progress, 'Próximo nível'),
            ...(full ? rewards.achievements : rewards.achievements.slice(0, 2)).map(a => h('div', { class: 'mentoria-guided-achievement', key: a.label }, [h('strong', {}, (a.unlocked ? '✓ ' : '○ ') + a.label), h('p', {}, a.description)])),
            full ? h('div', { class: 'mentoria-guided-rule' }, [h('h3', {}, 'Regras transparentes'), ...rewards.rules.map(r => h('p', { key: r.id }, r.label + ': +' + r.xp + ' XP. Uma vez por questão e regra.')), h('p', {}, 'Limite de ' + rewards.daily_cap + ' XP/dia por aluno e produtor. Cliques, tempo informado, flashcards autodeclarados e ações do mentor não geram XP. Recuperação exige erro anterior e intervalo de 24h. Não há perda de XP por errar.')]) : btn('Ver conquistas e regras', () => navigate('evolution'), 'ghost'),
        ]);
    }
    function renderMentor() {
        const l = learning.value;
        return h('div', { class: 'mentoria-guided mentoria-guided-stack' }, [
            card([sectionTitle(mentor.value ? 'Acompanhamento do aluno' : 'Minha mentoria', 'Recomendações calculadas a partir dos registros; confirme o contexto antes de agir.', mentor.value ? btn('Preparar plano', openPlan) : btn('Solicitar ajuste', openNote)),
                ...(l.recommendations || []).map(r => h('div', { class: 'mentoria-guided-recommendation', key: r.title }, [h('h3', {}, r.title), h('p', {}, r.reason)])),
                l.evidence ? h('p', { class: 'mentoria-guided-muted' }, 'Amostra: ' + l.evidence.sample + ' questões · Acerto: ' + (l.evidence.accuracy ?? 'sem dados') + (l.evidence.accuracy === null ? '' : '%') + ' · Confiança: ' + l.evidence.confidence + '. Inclui registros informados.') : null]),
            aiAvailable?.value && !mentor.value ? card([sectionTitle('Entender meu próximo passo', 'Prepare uma pergunta contextual para a IA. A orientação do mentor continua conduzindo o plano.'),
                btn('Preparar pergunta para a IA', () => askAi('Ajude-me a entender como estudar melhor para ' + ((state.value.contests || []).find(c => c.id === contest.value)?.name || 'meu concurso') + '. Contexto: ' + (l.recommendations || []).map(r => r.reason).join(' ') + ' Dificuldades informadas: ' + (l.profile?.diagnostic?.difficulties || 'a diagnosticar') + '. Sugira estratégias de revisão para conversar com meu mentor; não substitua nem altere o plano publicado.'), 'ghost')]) : null,
            card([sectionTitle('Orientações e solicitações', 'Histórico por aluno e concurso.', btn(mentor.value ? 'Nova orientação' : 'Novo pedido de ajuste', openNote, 'ghost')),
                ...(l.notes || []).map(n => h('article', { class: 'mentoria-guided-note', key: n.id }, [h('div', { class: 'mentoria-guided-actions' }, [badge(n.kind === 'guidance' ? 'Orientação' : n.status === 'resolved' ? 'Pedido respondido' : 'Pedido pendente', n.status === 'resolved' ? 'green' : 'violet'), h('span', {}, n.actor_name + ' · ' + fmtDate(n.created_at))]), h('p', {}, n.message), n.resolution ? h('blockquote', { class: 'mentoria-guided-quote' }, n.resolution) : null,
                    mentor.value && n.kind === 'adjustment' && n.status === 'open' ? btn('Responder solicitação', () => dialog.value = { type: 'resolve', note: n, form: { resolution: '' } }, 'ghost') : null])),
                !(l.notes || []).length ? empty('Nenhuma orientação ou solicitação registrada.') : null]),
        ]);
    }
    function renderPlanIntro() {
        const schedule = state.value.schedule;
        return h('div', { class: 'mentoria-guided mentoria-guided-stack' }, [card([sectionTitle('Meu plano', schedule ? 'Versão ' + schedule.version + ' · Publicado pela mentoria' : 'Aguardando publicação do mentor', h('div', { class: 'mentoria-guided-actions' }, [btn('Diagnóstico', openProfile, 'ghost'), mentor.value ? btn('Prévia e publicação', openPlan) : btn('Solicitar ajuste', openNote, 'ghost'), schedule ? h('a', { class: 'mentoria-button mentoria-button--ghost', href: base.value + '/learning/calendar.ics?contest_id=' + encodeURIComponent(contest.value) }, 'Exportar calendário') : null])),
            schedule?.change_reason ? h('p', { class: 'mentoria-guided-quote' }, schedule.change_reason) : null,
            h('div', { class: 'mentoria-guided-week' }, (learning.value.week || []).map(d => h('div', { key: d.date, class: 'mentoria-guided-week-row' }, [h('strong', {}, dayNames[d.key] + ' · ' + fmtDate(d.date)), h('span', {}, d.planned + ' min previstos / ' + d.capacity + ' min disponíveis'), badge(d.total ? d.completed + '/' + d.total : d.capacity ? 'Livre' : 'Descanso', d.planned > d.capacity ? 'amber' : 'zinc')]))),
        ])]);
    }
    function renderDialog() {
        const m = dialog.value;
        if (!m) return null;
        const f = m.form;
        let title, content, action;
        if (m.type === 'profile') {
            title = 'Diagnóstico de estudos';
            content = h('div', { class: 'mentoria-guided-stack' }, [field('Experiência atual', select(f, 'level', [{ value: 'iniciante', label: 'Iniciante' }, { value: 'intermediario', label: 'Intermediário' }, { value: 'avancado', label: 'Avançado' }])), hoursFields(f), field('Meta de acertos (%)', input(f, 'goal', { type: 'number', min: 1, max: 100 })), field('Dificuldades e contexto', textarea(f, 'difficulties', { rows: 3 })), field('Fuso horário', select(f, 'timezone', [{ value: 'America/Fortaleza', label: 'Fortaleza / Brasília' }, { value: 'America/Manaus', label: 'Manaus' }, { value: 'America/Rio_Branco', label: 'Rio Branco' }]))]);
            action = btn('Salvar diagnóstico', () => act(async () => { await post('profile', { timezone: f.timezone, diagnostic: { hours: f.hours, level: f.level, difficulties: f.difficulties, goal: Number(f.goal) } }, 'PUT'); close(); }, 'Diagnóstico salvo. A publicação do plano cabe ao mentor.'), 'primary', { disabled: busy.value });
        } else if (m.type === 'plan') {
            title = 'Preparar e publicar plano';
            content = h('div', { class: 'mentoria-guided-stack' }, [m.preview ? h('div', {}, [badge('Prévia · ' + m.preview.items.length + ' atividades', 'violet'), h('p', {}, m.preview.minutes + ' minutos de estudo. Revisões existentes são reservadas separadamente.'), h('p', { class: 'mentoria-guided-muted' }, m.preview.warning), ...m.preview.items.slice(0, 8).map((i, index) => h('p', { key: index }, (i.planned_date ? fmtDate(i.planned_date) : 'Ciclo ' + i.position) + ' · ' + label(i) + ' · ' + i.duration_minutes + ' min')), field('Motivo e orientação para esta versão', textarea(f, 'reason', { rows: 3 })), !m.reprogram ? btn('Voltar à configuração', () => m.preview = null, 'ghost') : null]) : h('div', {}, [hoursFields(f), ...(m.subjects || []).map(s => h('div', { class: 'mentoria-guided-subject', key: s.id }, [h('label', {}, [h('input', { type: 'checkbox', checked: f.selected[s.id], onChange: e => f.selected[s.id] = e.target.checked }), ' ' + s.name]), field('Prioridade de ' + s.name, select(f.priorities, s.id, [{value:'alta',label:'Alta'},{value:'media',label:'Média'},{value:'baixa',label:'Baixa'}])), field('Afinidade informada (0–100)', input(f.affinity, s.id, {type:'number',min:0,max:100}))])), field('Duração de cada bloco (min)', input(f, 'minutes', { type: 'number', min: 5, max: 180 })), field('Método', select(f, 'mode', [{ value: 'agendado', label: 'Agenda por dia' }, { value: 'ciclo_inteligente', label: 'Ciclo por prioridade' }])), h('p', { class: 'mentoria-guided-muted' }, 'Usa os editais atribuídos ao aluno. A agenda deve caber até a prova; sem data, horizonte de um ano.')])]);
            action = btn(m.preview ? 'Publicar nova versão' : 'Gerar prévia', () => act(async () => { if (!m.preview) { const result = await post('preview', { configuration: { tipo: f.mode, horas: f.hours, minutosTopico: Number(f.minutes), repeticoesEdital: 1, maxTopicosDia: 0, materiasSelecionadas: f.selected, materiaAfinidade: f.affinity, materiaPrioridades: f.priorities } }); m.preview = result; } else { await post('publish', { token: m.preview.token, reason: f.reason }); close(); } }, m.preview ? 'Plano publicado. Histórico anterior preservado.' : ''), 'primary', { disabled: busy.value });
        } else if (m.type === 'execute') {
            title = 'Registrar execução · ' + label(m.item);
            content = h('div', { class: 'mentoria-guided-stack' }, [h('p', {}, m.item.duration_minutes + ' min previstos. Informe o tempo realmente realizado.'), field('Minutos realizados', input(f, 'minutes', { type: 'number', min: 1, max: 720 })), field('Questões realizadas (opcional)', input(f, 'solved', { type: 'number', min: 0, max: 1000 })), field('Acertos informados', input(f, 'correct', { type: 'number', min: 0, max: Number(f.solved) })), field('Dificuldades e anotações', textarea(f, 'notes', { rows: 3 })), h('p', { class: 'mentoria-guided-muted' }, 'Este registro é autodeclarado e não concede XP. Registre a atividade quando terminar o bloco previsto; dificuldades podem ser encaminhadas ao mentor.')]);
            action = btn('Salvar execução', () => act(async () => { await post('items/' + m.item.id + '/execute', { request_id: m.requestId, minutes: Number(f.minutes), solved: Number(f.solved), correct: Number(f.correct), notes: f.notes }); close(); }, 'Execução registrada uma única vez.'), 'primary', { disabled: busy.value });
        } else {
            const resolve = m.type === 'resolve';
            title = resolve ? 'Responder solicitação' : mentor.value ? 'Publicar orientação' : 'Solicitar ajuste';
            content = field(resolve ? 'Resposta e decisão do mentor' : 'Mensagem', textarea(f, resolve ? 'resolution' : 'message', { rows: 5 }));
            action = btn('Salvar', () => act(async () => { await post(resolve ? 'notes/' + m.note.id : 'notes', f, resolve ? 'PATCH' : 'POST'); close(); }, 'Mensagem registrada no acompanhamento.'), 'primary', { disabled: busy.value });
        }
        return modal(title, h('div', { class: 'mentoria-guided' }, [content]), close, h('div', { class: 'mentoria-guided-actions' }, [btn('Cancelar', close, 'ghost'), action]), 'max-w-3xl');
    }
    return { renderToday, renderRewards, renderMentor, renderPlanIntro, renderDialog, openProfile, openPlan, openReprogram, openExecution };
}
