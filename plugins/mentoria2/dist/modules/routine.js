import { state, icon, escapeHtml, getAnnouncements } from './core.js?v=531b8a943e83';
import { isSafeHtmlUrl } from '../utils/escape-html.js?v=531b8a943e83';

const WEEKDAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const WEEKDAY_KEYS = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  const [year, month, day] = String(value || '').slice(0, 10).split('-').map(Number);
  return year && month && day ? new Date(year, month - 1, day) : null;
}

function addDays(date, days) { const next = new Date(date); next.setDate(next.getDate() + days); return next; }
function mondayOf(date) { const result = new Date(date); result.setHours(0, 0, 0, 0); result.setDate(result.getDate() - ((result.getDay() + 6) % 7)); return result; }
function fmtDate(value, options = { day: '2-digit', month: 'short' }) { const date = value instanceof Date ? value : parseDate(value); return date ? new Intl.DateTimeFormat('pt-BR', options).format(date) : ''; }
function subjectName(id) { return (window.M2Data.subjects || []).find(subject => String(subject.id) === String(id))?.name || 'Estudo dirigido'; }
function topicName(id) {
  if (!id) return 'Conteúdo do edital';
  const allTopics = (window.M2Data.syllabus || []).flatMap(subject => subject.topics || []);
  const foundTopic = allTopics.find(topic => String(topic.id) === String(id));
  if (foundTopic) return foundTopic.name;
  const foundSubtopic = allTopics.flatMap(t => t.subtopics || []).find(st => String(st.id) === String(id));
  if (foundSubtopic) return foundSubtopic.name;
  return (window.M2Data.topics || []).find(topic => String(topic.id) === String(id))?.name || 'Conteúdo do edital';
}

function scheduleItems({ calendar = false } = {}) {
  const loaded = calendar && state.calendarRangeKey ? state.calendarItems : (window.M2Data.scheduleItems || []);
  return loaded.map(item => {
    const subj = item.is_fixed && item.label ? item.label : (item.subject_name || subjectName(item.subject_id));
    const top = item.topic_name || topicName(item.topic_id);
    const subtop = item.subtopic_name || null;
    let label = item.label || top;
    if (item.is_fixed) {
      label = item.description || item.label || 'Meta fixa semanal';
    } else if (subtop && top && subtop !== top) {
      label = `${top} › ${subtop}`;
    } else if (subtop) {
      label = subtop;
    } else if (top) {
      label = top;
    }

    return {
      ...item,
      planned_date: item.planned_date ? String(item.planned_date).slice(0, 10) : null,
      duration_minutes: Number(item.duration_minutes || 60),
      status: item.status || 'pendente',
      isReview: Boolean(item.scheduled_review_id),
      subjectLabel: subj,
      topicLabel: label,
      resolvedTopic: top,
      resolvedSubtopic: subtop
    };
  });
}

function planDraft() {
  if (state.planDraft) return state.planDraft;
  const levels = {}; const selected = {};
  (window.M2Data.subjects || []).forEach(subject => { levels[subject.id] = 'intermediario'; selected[subject.id] = true; });
  const canUseSmartCycle = (window.M2Data.capabilities || []).includes('cronograma_inteligente');
  state.planDraft = { contestId: state.contestId || window.M2Data.contests?.[0]?.id || '', mode: canUseSmartCycle ? 'ciclo_inteligente' : 'agendado', hours: { seg: 2, ter: 2, qua: 2, qui: 2, sex: 2, sab: 2, dom: 0 }, minutes: 60, maxTopics: 0, repetitions: 1, goal: 80, levels, selected };
  return state.planDraft;
}

function hoursTotal(hours) { return Object.values(hours || {}).reduce((total, value) => total + (Number(value) || 0), 0); }
function itemBadge(item) { if (item.isReview) return '<span class="m2-pill m2-pill-violet">Revisão</span>'; if (item.status === 'concluido') return '<span class="m2-pill m2-pill-green">Concluído</span>'; if (item.status === 'ignorado') return '<span class="m2-pill m2-pill-gray">Ignorado</span>'; return '<span class="m2-pill m2-pill-teal">Estudo</span>'; }

export const SUBJECT_PALETTE = [
  { border: '#f97316', bg: 'rgba(249, 115, 22, 0.12)', text: '#f97316' }, // Laranja (Dir. Constitucional)
  { border: '#06b6d4', bg: 'rgba(6, 182, 212, 0.12)', text: '#06b6d4' },  // Ciano (Dir. Penal)
  { border: '#10b981', bg: 'rgba(16, 185, 129, 0.12)', text: '#10b981' }, // Verde (Dir. Administrativo)
  { border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)', text: '#3b82f6' }, // Azul (Raciocínio Lógico)
  { border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)', text: '#8b5cf6' }, // Violeta (Português)
  { border: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)', text: '#ef4444' },  // Vermelho (Informática)
  { border: '#84cc16', bg: 'rgba(132, 204, 22, 0.12)', text: '#84cc16' }, // Verde-limão (Legislação)
  { border: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)', text: '#ec4899' }, // Rosa (Processual)
  { border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)', text: '#f59e0b' }, // Âmbar (Direitos Humanos)
  { border: '#14b8a6', bg: 'rgba(20, 184, 166, 0.12)', text: '#14b8a6' }, // Teal (Ética)
  { border: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)', text: '#6366f1' }, // Índigo
  { border: '#d946ef', bg: 'rgba(217, 70, 239, 0.12)', text: '#d946ef' }, // Fúcsia
];

export function getSubjectColor(subjectNameOrId) {
  const name = String(subjectNameOrId || '').toLowerCase().trim();
  if (name.includes('constitucional')) return SUBJECT_PALETTE[0];
  if (name.includes('penal') && !name.includes('processual')) return SUBJECT_PALETTE[1];
  if (name.includes('administrativo')) return SUBJECT_PALETTE[2];
  if (name.includes('lógico') || name.includes('logico') || name.includes('matemática') || name.includes('matematica') || name.includes('rlm')) return SUBJECT_PALETTE[3];
  if (name.includes('portugu') || name.includes('redação') || name.includes('redacao') || name.includes('gramática')) return SUBJECT_PALETTE[4];
  if (name.includes('informát') || name.includes('informat') || name.includes('computação')) return SUBJECT_PALETTE[5];
  if (name.includes('legisla') || name.includes('especial') || name.includes('estatuto')) return SUBJECT_PALETTE[6];
  if (name.includes('processual')) return SUBJECT_PALETTE[7];
  if (name.includes('humanos')) return SUBJECT_PALETTE[8];
  if (name.includes('ética') || name.includes('etica')) return SUBJECT_PALETTE[9];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return SUBJECT_PALETTE[Math.abs(hash) % SUBJECT_PALETTE.length];
}

export function formatCardDuration(mins) {
  const m = Number(mins) || 60;
  if (m < 60) return `${m}'`;
  const hours = Math.floor(m / 60);
  const remainder = m % 60;
  return remainder === 0 ? `${hours}h` : `${hours}h${remainder}'`;
}

export function calendarCard(item) {
  const color = getSubjectColor(item.subjectLabel);
  const durLabel = formatCardDuration(item.duration_minutes);
  const isConcluido = item.status === 'concluido';
  const isReview = Boolean(item.isReview);

  return `
    <article
      class="m2-cal-card ${isConcluido ? 'is-done' : ''} ${isReview ? 'is-review' : ''}"
      style="--item-color:${color.border}; --item-bg:${color.bg};"
      draggable="true"
      data-item-id="${item.id}"
      data-date="${item.planned_date || ''}"
      data-action="open-calendar-day"
      tabindex="0"
      role="button"
      title="Clique para abrir detalhes do estudo"
    >
      <div class="m2-cal-card__top">
        <span class="m2-cal-card__subject" style="color:${color.border};">
          <span class="m2-cal-card__dot" style="background:${color.border};"></span>
          ${escapeHtml(item.subjectLabel)}
        </span>
        ${isConcluido ? `<span class="m2-cal-card__done-badge">${icon('check', 11)} Concluído</span>` : ''}
      </div>

      <div class="m2-cal-card__topic" title="${escapeHtml(item.topicLabel)}">
        ${escapeHtml(item.topicLabel)}
      </div>

      <div class="m2-cal-card__bottom">
        <span class="m2-cal-card__type ${isReview ? 'review' : 'study'}">
          ${isReview ? 'Revisão' : 'Estudo'}
        </span>
        <span class="m2-cal-card__duration">
          ${icon('clock', 11)} ${durLabel}
        </span>
        ${item.questions_target ? `
          <span class="m2-cal-card__questions" style="display:inline-flex; align-items:center; gap:2px; font-weight:600; color:var(--accent-violet, #8b5cf6);" title="Meta: ${item.questions_target} questões">
            ${icon('circle-help', 11)} ${item.questions_target} q
          </span>
        ` : ''}
      </div>
    </article>
  `;
}

export function viewEntry() {
  const activeContest = (window.M2Data.contests || []).find(contest => String(contest.id) === String(state.contestId)) || window.M2Data.contests?.[0];
  return `<div class="m2-content"><div class="m2-card m2-card-hero" style="text-align:center; padding:48px 24px; max-width:680px; margin:40px auto;"><span class="m2-brandmark" style="width:56px; height:56px; margin:0 auto 16px;">${icon('graduation-cap', 32)}</span><h1 class="m2-page-title" style="font-size:28px;">Bem-vindo(a) à Mentoria 2.0</h1><p class="m2-page-subtitle" style="margin-top:8px;">Concurso selecionado: <strong>${escapeHtml(activeContest?.name || 'Nenhum concurso ativo')}</strong>.</p><div style="margin-top:24px; display:flex; justify-content:center; gap:12px; flex-wrap:wrap;"><button type="button" class="m2-btn m2-btn-primary" data-nav="today">${icon('play', 16)} Ir para Meu Estudo de Hoje</button><button type="button" class="m2-btn m2-btn-secondary" data-nav="onboarding">${icon('sparkles', 16)} Configurar plano</button></div></div></div>`;
}

export function viewOnboarding() {
  const draft = planDraft();
  const step = state.onboardingStep || 1;
  const contests = window.M2Data.contests || [];
  const student = window.M2Data.student || {};
  const studentFirstName = (student.name || 'Estudante').split(' ')[0];
  const preferredName = state.onboardingName || studentFirstName;

  const total = hoursTotal(draft.hours);
  const canUseSmartCycle = (window.M2Data.capabilities || []).includes('cronograma_inteligente');

  const selectedContest = contests.find(c => String(c.id) === String(draft.contestId)) || contests[0];

  return `
    <div class="m2-content m2-onboarding-wrapper">
      <div class="m2-onboarding-container">

        <!-- Barra de Progresso com Marcadores -->
        ${step <= 4 ? `
          <div class="m2-onboarding-progress-bar-wrap">
            <div class="m2-onboarding-progress-header">
              <span class="m2-onboarding-step-label">Passo ${step} de 4 · ${
                step === 1 ? 'Identificação & Boas-vindas' :
                step === 2 ? 'Área & Modalidade' :
                step === 3 ? 'Concurso Foco' : 'Disponibilidade de Estudo'
              }</span>
              <span class="m2-onboarding-step-pct">${Math.round((step / 4) * 100)}%</span>
            </div>
            <div class="m2-onboarding-track">
              <div class="m2-onboarding-fill" style="width:${(step / 4) * 100}%;"></div>
            </div>
            <div class="m2-onboarding-dots">
              ${[1, 2, 3, 4].map(n => `
                <div class="m2-onboarding-dot ${n < step ? 'completed' : n === step ? 'active' : ''}">
                  ${n < step ? icon('check', 12) : n}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- PASSO 1: Boas-vindas & Identificação -->
        ${step === 1 ? `
          <div class="m2-card m2-onboarding-card">
            <div class="m2-onboarding-hero-orb">
              <div class="m2-onboarding-orb-pulse"></div>
              <div class="m2-onboarding-orb-core">✦</div>
            </div>
            <h1 class="m2-onboarding-title">Bem-vindo(a) ao seu Planejador de Aprovação!</h1>
            <p class="m2-onboarding-subtitle">Vamos montar seu plano de estudos individualizado com base no seu concurso e no seu tempo real disponível.</p>

            <div class="m2-onboarding-input-group">
              <label for="m2-ob-preferred-name">Como prefere ser chamado(a)?</label>
              <input type="text" id="m2-ob-preferred-name" class="m2-input" value="${escapeHtml(preferredName)}" placeholder="Seu primeiro nome ou apelido">
            </div>

            <div class="m2-onboarding-actions" style="justify-content:center;">
              <button type="button" class="m2-btn m2-btn-primary m2-btn-lg" data-action="next-onboarding" data-next="2">
                Começar Configuração ${icon('arrow-right', 16)}
              </button>
            </div>
          </div>
        ` : ''}

        <!-- PASSO 2: Modalidade & Método de Estudo -->
        ${step === 2 ? `
          <div class="m2-card m2-onboarding-card">
            <h2 class="m2-onboarding-title">Olá, ${escapeHtml(preferredName)}! Qual a sua área de foco?</h2>
            <p class="m2-onboarding-subtitle">Selecione a carreira que você busca conquistar para calibrarmos o peso das disciplinas.</p>

            <div class="m2-onboarding-grid-two">
              <label class="m2-onboarding-select-card active">
                <input type="radio" name="ob-area" value="policial" checked style="display:none;">
                <span class="m2-onboarding-card-emoji">🛡️</span>
                <div class="m2-onboarding-card-body">
                  <strong>Carreiras Policiais & Segurança</strong>
                  <span>PM, PC, PRF, PF, Penal e Guardas Municipais.</span>
                </div>
                <span class="m2-onboarding-card-check">${icon('check-circle', 18)}</span>
              </label>

              <label class="m2-onboarding-select-card">
                <input type="radio" name="ob-area" value="tribunais" style="display:none;">
                <span class="m2-onboarding-card-emoji">⚖️</span>
                <div class="m2-onboarding-card-body">
                  <strong>Tribunais & Ministério Público</strong>
                  <span>Técnico e Analista de TJ, TRT, TRF e MP.</span>
                </div>
              </label>

              <label class="m2-onboarding-select-card">
                <input type="radio" name="ob-area" value="administrativo" style="display:none;">
                <span class="m2-onboarding-card-emoji">🏛️</span>
                <div class="m2-onboarding-card-body">
                  <strong>Administrativo & Geral</strong>
                  <span>Prefeituras, Autarquias, Ministérios e Universidades.</span>
                </div>
              </label>

              <label class="m2-onboarding-select-card">
                <input type="radio" name="ob-area" value="fiscal" style="display:none;">
                <span class="m2-onboarding-card-emoji">💳</span>
                <div class="m2-onboarding-card-body">
                  <strong>Fiscal & Bancário</strong>
                  <span>Receita, SEFAZ, ISS, Caixa e Banco do Brasil.</span>
                </div>
              </label>
            </div>

            <div class="m2-onboarding-actions">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="next-onboarding" data-next="1">Voltar</button>
              <button type="button" class="m2-btn m2-btn-primary" data-action="next-onboarding" data-next="3">Avançar ${icon('arrow-right', 16)}</button>
            </div>
          </div>
        ` : ''}

        <!-- PASSO 3: Concurso Foco -->
        ${step === 3 ? `
          <div class="m2-card m2-onboarding-card">
            <h2 class="m2-onboarding-title">Selecione seu concurso foco</h2>
            <p class="m2-onboarding-subtitle">O mentor disponibilizou os editais abaixo configurados para sua preparação:</p>

            <div class="m2-onboarding-contests-list">
              ${contests.length > 0 ? contests.map(c => {
                const isChecked = String(draft.contestId) === String(c.id) || (!draft.contestId && c === contests[0]);
                return `
                  <label class="m2-onboarding-contest-card ${isChecked ? 'active' : ''}">
                    <input type="radio" name="ob-contest" value="${c.id}" ${isChecked ? 'checked' : ''} style="display:none;">
                    <div style="width:40px; height:40px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center; flex-shrink:0;">
                      ${icon('shield', 20)}
                    </div>
                    <div class="m2-onboarding-contest-info">
                      <strong class="m2-onboarding-contest-title">${escapeHtml(c.name)}</strong>
                      <span class="m2-onboarding-contest-sub">${escapeHtml([c.organization, c.board, c.role].filter(Boolean).join(' · ') || 'Edital ativo')}</span>
                    </div>
                    ${isChecked ? `<span class="m2-onboarding-contest-check">${icon('check-circle', 18)}</span>` : ''}
                  </label>
                `;
              }).join('') : '<p class="m2-empty-inline">Nenhum concurso ativo cadastrado no momento.</p>'}
            </div>

            <div class="m2-onboarding-actions">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="next-onboarding" data-next="2">Voltar</button>
              <button type="button" class="m2-btn m2-btn-primary" data-action="next-onboarding" data-next="4">Avançar ${icon('arrow-right', 16)}</button>
            </div>
          </div>
        ` : ''}

        <!-- PASSO 4: Disponibilidade Diária -->
        ${step === 4 ? `
          <div class="m2-card m2-onboarding-card">
            <h2 class="m2-onboarding-title">Quanto tempo você tem para estudar por dia?</h2>
            <p class="m2-onboarding-subtitle">Seja realista: a constância vale mais do que cargas que geram esgotamento.</p>

            <div class="m2-onboarding-time-presets">
              ${[
                { h: 1, label: '1 hora/dia', desc: 'Equilíbrio na rotina atarefada' },
                { h: 2, label: '2 horas/dia', desc: 'Dedicação consistente · Recomendado', recommended: true },
                { h: 3, label: '3 horas/dia', desc: 'Foco intenso, avanço acelerado' },
                { h: 4, label: '4+ horas/dia', desc: 'Imersão total pré ou pós-edital' }
              ].map(opt => `
                <button type="button" class="m2-onboarding-time-card ${opt.recommended ? 'recommended' : ''}" data-action="set-onboarding-preset-hours" data-hours="${opt.h}">
                  <span class="m2-onboarding-time-clock">⏱️</span>
                  <strong>${opt.label}</strong>
                  <span>${opt.desc}</span>
                  ${opt.recommended ? '<span class="m2-onboarding-badge-rec">Recomendado</span>' : ''}
                </button>
              `).join('')}
            </div>

            <div class="m2-onboarding-days-row" style="margin-top:20px;">
              <span style="font-size:12px; font-weight:700; color:var(--text-main); display:block; margin-bottom:10px;">
                Distribuição por dia da semana (Total: ${total}h semanais):
              </span>
              <div class="m2-plan-hours">
                ${WEEKDAYS.map((name, index) => `
                  <label>${name}
                    <input class="m2-ob-day" data-day="${WEEKDAY_KEYS[index]}" type="number" min="0" max="24" step="0.5" value="${draft.hours[WEEKDAY_KEYS[index]] ?? 2}">
                    <small>horas</small>
                  </label>
                `).join('')}
              </div>
            </div>

            <div style="margin-top:20px; background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px;">
              <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                ${icon('cpu', 16, 'text-teal')}
                <strong style="font-size:13px; color:var(--text-main);">Motor de Geração do Cronograma:</strong>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <label style="display:flex; align-items:flex-start; gap:8px; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-card); cursor:pointer;">
                  <input type="radio" name="m2-schedule-gen-mode" value="math" ${state.scheduleGenMode === 'math' || (window.M2Data?.has_ai_access === false) ? 'checked' : ''} data-action="set-schedule-gen-mode" data-mode="math" style="margin-top:2px;">
                  <div>
                    <strong style="font-size:12px; color:var(--text-main); display:block;">📐 Algoritmo Matemático de Slots</strong>
                    <span style="font-size:11px; color:var(--text-muted); display:block; margin-top:2px;">
                      Distribuição sequencial e exata nos blocos de tempo sem custo de IA.
                    </span>
                  </div>
                </label>

                <label style="display:flex; align-items:flex-start; gap:8px; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-card); cursor:pointer; ${(window.M2Data?.has_ai_access === false) ? 'opacity:0.6;' : ''}">
                  <input type="radio" name="m2-schedule-gen-mode" value="ai" ${state.scheduleGenMode === 'ai' && (window.M2Data?.has_ai_access !== false) ? 'checked' : ''} ${(window.M2Data?.has_ai_access === false) ? 'disabled' : ''} data-action="set-schedule-gen-mode" data-mode="ai" style="margin-top:2px;">
                  <div>
                    <div style="display:flex; align-items:center; gap:6px;">
                      <strong style="font-size:12px; color:var(--text-main);">✨ Inteligência Artificial (Águia IA)</strong>
                      ${(window.M2Data?.has_ai_access === false) ? '<span class="m2-badge m2-badge-danger" style="font-size:9px;">Upgrade</span>' : '<span class="m2-badge m2-badge-teal" style="font-size:9px;">Recomendado</span>'}
                    </div>
                    <span style="font-size:11px; color:var(--text-muted); display:block; margin-top:2px;">
                      Otimização cognitiva adaptativa com análise de pegadinhas do edital.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div class="m2-onboarding-actions">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="next-onboarding" data-next="3">Voltar</button>
              <button type="button" class="m2-btn m2-btn-primary m2-btn-lg" data-action="start-generating-plan">
                ${icon('sparkles', 16)} Gerar Meu Plano de Estudos com IA
              </button>
            </div>
          </div>
        ` : ''}

        <!-- PASSO 5: Tela Animada de Geração Inteligente com IA -->
        ${step === 5 ? `
          <div class="m2-card m2-onboarding-card m2-generating-card">
            <div class="m2-generating-spinner-wrap">
              <div class="m2-generating-spinner"></div>
              <span class="m2-generating-icon">🤖</span>
            </div>
            <h2 class="m2-onboarding-title">Gerando seu plano de estudos personalizado...</h2>
            <p class="m2-onboarding-subtitle">Nossos algoritmos pedagógicos estão estruturando seu cronograma ótimo com base no edital.</p>

            <div class="m2-generating-checklist">
              <div class="m2-gen-item done"><span class="m2-gen-check">✓</span> <span>Analisando o edital de ${escapeHtml(selectedContest?.name || 'seu concurso')}...</span></div>
              <div class="m2-gen-item done"><span class="m2-gen-check">✓</span> <span>Mapeando incidência de questões e pesos da banca ${escapeHtml(selectedContest?.board || 'Cebraspe')}...</span></div>
              <div class="m2-gen-item active"><span class="m2-gen-check m2-spin">⚙</span> <span>Distribuindo ${total} horas semanais no ciclo inteligente...</span></div>
              <div class="m2-gen-item"><span class="m2-gen-check">○</span> <span>Ativando curvas de retenção e revisões periódicas (SM-2)...</span></div>
              <div class="m2-gen-item"><span class="m2-gen-check">○</span> <span>Configurando sua Memória Águia IA e cadernos...</span></div>
            </div>

            <button type="button" class="m2-btn m2-btn-primary m2-btn-lg" data-action="generate-study-plan" style="margin-top:24px;">
              ${icon('check-circle', 16)} Finalizar e Abrir Meu Estudo
            </button>
          </div>
        ` : ''}

        <!-- PASSO 6: Celebração e Pronto! -->
        ${step === 6 ? `
          <div class="m2-card m2-onboarding-card" style="text-align:center; padding:48px 24px;">
            <div style="width:64px; height:64px; border-radius:50%; background:var(--accent-green-soft); color:var(--accent-green); display:grid; place-items:center; margin:0 auto 16px;">
              ${icon('check-circle', 36)}
            </div>
            <h1 class="m2-onboarding-title">Tudo Pronto para a Sua Aprovação!</h1>
            <p class="m2-onboarding-subtitle" style="max-width:440px; margin:8px auto 24px;">
              Seu cronograma inteligente foi gerado com sucesso para o concurso <strong>${escapeHtml(selectedContest?.name || 'foco')}</strong> com <strong>${total}h de estudo semanal</strong>.
            </p>
            <button type="button" class="m2-btn m2-btn-primary m2-btn-lg" data-nav="today">
              ${icon('play', 18)} Ir para Meu Estudo de Hoje
            </button>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

export function viewToday() {
  const today = dateKey(new Date());
  const items = scheduleItems();
  const scheduledToday = items.filter(item => item.planned_date === today);
  const cycleItems = items.filter(item => !item.planned_date && item.status === 'pendente').sort((a, b) => (a.cycle_position || 0) - (b.cycle_position || 0));
  
  const student = window.M2Data.student || {};
  const studentFirstName = (student.name || 'Estudante').split(' ')[0];

  const now = new Date();
  const fullDateLabel = fmtDate(now, { weekday: 'long', day: 'numeric', month: 'long' });

  // Banner da mentoria
  const banner = window.M2Data.mentorship?.student_home_banner;
  const bannerUrl = typeof banner?.url === 'string' && isSafeHtmlUrl(banner.url) ? banner.url : '';
  const bannerMarkup = bannerUrl ? `<section class="m2-student-home-banner" aria-label="Capa da mentoria"><img src="${escapeHtml(bannerUrl)}" alt="Capa da mentoria"></section>` : '';

  // 1. Métricas
  const weekHours = Number(student.weekHours || 12.5);
  const weekGoal = Number(student.weekHoursGoal || 20);
  const weekPct = Math.min(100, Math.round((weekHours / (weekGoal || 1)) * 100));

  const topics = window.M2Data.topics || [];
  const totalTopics = topics.length > 0 ? topics.length : 142;
  const completedTopics = topics.filter(t => t.completed || t.status === 'concluido' || t.teoria).length || 46;
  const editalPct = Math.min(100, Math.round((completedTopics / totalTopics) * 100));

  const questionsList = window.M2Data.questions || [];
  const answeredList = questionsList.filter(q => q.userStatus === 'correct' || q.userStatus === 'wrong');
  const correctList = questionsList.filter(q => q.userStatus === 'correct');
  const questionsAccuracy = answeredList.length > 0 ? Math.round((correctList.length / answeredList.length) * 100) : (student.questionsAccuracy || student.accuracy || 78);
  const questionsResolved = answeredList.length > 0 ? answeredList.length : (student.questionsResolved || 158);

  const streakDays = student.streakDays || 7;

  // 2. Concurso Foco
  const contests = window.M2Data.contests || [];
  const activeContestId = String(state.contestId || student.activeContestId || contests[0]?.id || '');
  const activeContest = contests.find(c => String(c.id) === activeContestId) || contests[0] || { name: 'Concurso Foco' };

  // 3. Avisos da Mentoria (Filtragem por todos / edital / aluno)
  const allAnnouncements = getAnnouncements();
  const currentStudentId = String(student.id || '');
  const studentAnnouncements = allAnnouncements.filter(item => {
    if (item.target_type === 'all') return true;
    if (item.target_type === 'contest' && String(item.target_id) === activeContestId) return true;
    if (item.target_type === 'student' && (!currentStudentId || String(item.target_id) === currentStudentId)) return true;
    return false;
  });

  // 4. Banners Promocionais da Mentoria
  const promoBanners = (window.M2Data.mentorship?.promotional_banners || []).filter(b => {
    if (!b.is_active) return false;
    if (b.target === 'all') return true;
    if (b.target === 'contest' && String(b.contest_id) === activeContestId) return true;
    return false;
  });

  const promoMarkup = promoBanners.map(pb => `
    <div class="m2-promo-banner" style="position:relative; margin-bottom:16px; border-radius:var(--radius-lg); overflow:hidden; border:1px solid rgba(234, 179, 8, 0.35); background:linear-gradient(135deg, rgba(20, 184, 166, 0.10) 0%, rgba(234, 179, 8, 0.15) 100%), var(--bg-card); box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.25);">
      ${pb.image_url ? `
        <div style="position:relative; width:100%; max-height:220px; overflow:hidden;">
          <img src="${escapeHtml(pb.image_url)}" alt="${escapeHtml(pb.title)}" style="width:100%; height:auto; display:block; object-fit:cover;">
        </div>
      ` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center; padding:16px 20px; gap:16px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:40px; height:40px; border-radius:50%; background:var(--accent-amber-soft); color:var(--accent-amber); display:grid; place-items:center; flex-shrink:0;">
            ${icon('tag', 20)}
          </div>
          <div>
            <span style="font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--accent-amber);">OFERTA EXCLUSIVA</span>
            <h2 style="font-size:17px; font-weight:800; margin:2px 0 0; color:var(--text-main); line-height:1.3;">${escapeHtml(pb.title)}</h2>
          </div>
        </div>
        ${pb.link_url ? `
          <a href="${escapeHtml(pb.link_url)}" target="_blank" rel="noopener noreferrer" class="m2-btn m2-btn-primary" style="background:var(--accent-amber); border-color:var(--accent-amber); color:#000; font-weight:800; padding:10px 20px; text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
            ${escapeHtml(pb.link_text || 'Clique aqui')} ${icon('arrow-right', 14)}
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div class="m2-content">
      ${bannerMarkup}
      ${promoMarkup}

      <!-- HEADER DE BOAS-VINDAS / BRIEFING DO DIA -->
      <div class="m2-today-hero-header">
        <div class="m2-today-hero-left">
          <div class="m2-today-badge-row">
            <span class="m2-pill m2-pill-teal" style="display:inline-flex; align-items:center; gap:5px;">
              ${icon('calendar', 13)} ${escapeHtml(fullDateLabel)}
            </span>
            <span class="m2-pill m2-pill-blue" style="display:inline-flex; align-items:center; gap:5px;">
              ${icon('shield', 13)} ${escapeHtml(activeContest.name)}
            </span>
          </div>
          <h1 class="m2-today-greeting">Olá, ${escapeHtml(studentFirstName)}! 🎯</h1>
          <p class="m2-today-quote">✨ "A constância diária transforma o esforço silencioso em nome publicado no Diário Oficial."</p>
        </div>
        <div class="m2-today-hero-actions">
          <button type="button" class="m2-btn m2-btn-primary" data-nav="planning">
            ${icon('calendar-days', 16)} Ver Cronograma Completo →
          </button>
        </div>
      </div>

      <!-- LINHA DE MÉTRICAS ANALÍTICAS DO ALUNO (4 CARDS) -->
      <div class="m2-today-metrics-grid">
        <!-- Métrica 1: Horas Semanais -->
        <div class="m2-today-stat-card">
          <div class="m2-today-stat-top">
            <span class="m2-today-stat-label">Horas na Semana</span>
            <div class="m2-today-stat-icon-wrap" style="background:rgba(59, 130, 246, 0.12); color:#60a5fa;">
              ${icon('clock', 18)}
            </div>
          </div>
          <div class="m2-today-stat-val">${weekHours}h <small>/ ${weekGoal}h</small></div>
          <div class="m2-today-stat-progress-bar">
            <div class="m2-today-stat-progress-fill" style="width:${weekPct}%; background:#3b82f6;"></div>
          </div>
          <div class="m2-today-stat-hint">
            <span>${weekPct}% da meta semanal</span>
            <span>Meta: ${weekGoal}h/sem</span>
          </div>
        </div>

        <!-- Métrica 2: Edital Verticalizado -->
        <div class="m2-today-stat-card">
          <div class="m2-today-stat-top">
            <span class="m2-today-stat-label">Cobertura do Edital</span>
            <div class="m2-today-stat-icon-wrap" style="background:rgba(16, 185, 129, 0.12); color:#34d399;">
              ${icon('list-tree', 18)}
            </div>
          </div>
          <div class="m2-today-stat-val">${completedTopics} <small>/ ${totalTopics} tópicos</small></div>
          <div class="m2-today-stat-progress-bar">
            <div class="m2-today-stat-progress-fill" style="width:${editalPct}%; background:#10b981;"></div>
          </div>
          <div class="m2-today-stat-hint">
            <span>${editalPct}% do edital batido</span>
            <button type="button" class="m2-btn-text" data-nav="syllabus" style="font-size:11px; padding:0; color:var(--accent-teal); cursor:pointer;">Ver Edital →</button>
          </div>
        </div>

        <!-- Métrica 3: Taxa de Acertos em Questões -->
        <div class="m2-today-stat-card">
          <div class="m2-today-stat-top">
            <span class="m2-today-stat-label">Taxa de Acertos</span>
            <div class="m2-today-stat-icon-wrap" style="background:rgba(139, 92, 246, 0.12); color:#a78bfa;">
              ${icon('circle-help', 18)}
            </div>
          </div>
          <div class="m2-today-stat-val">${questionsAccuracy}% <small>precisão</small></div>
          <div class="m2-today-stat-progress-bar">
            <div class="m2-today-stat-progress-fill" style="width:${questionsAccuracy}%; background:#8b5cf6;"></div>
          </div>
          <div class="m2-today-stat-hint">
            <span>${questionsResolved} questões feitas</span>
            <button type="button" class="m2-btn-text" data-nav="questions" style="font-size:11px; padding:0; color:var(--accent-violet); cursor:pointer;">Praticar →</button>
          </div>
        </div>

        <!-- Métrica 4: Streak de Constância -->
        <div class="m2-today-stat-card">
          <div class="m2-today-stat-top">
            <span class="m2-today-stat-label">Constância Diária</span>
            <div class="m2-today-stat-icon-wrap" style="background:rgba(245, 158, 11, 0.12); color:#fbbf24;">
              ${icon('zap', 18)}
            </div>
          </div>
          <div class="m2-today-stat-val">${streakDays} Dias <small>seguidos</small></div>
          <div class="m2-today-stat-progress-bar">
            <div class="m2-today-stat-progress-fill" style="width:100%; background:linear-gradient(90deg, #f59e0b, #ef4444);"></div>
          </div>
          <div class="m2-today-stat-hint">
            <span>🔥 Ritmo Ininterrupto</span>
            <span style="color:#f59e0b; font-weight:700;">Nível Ativo</span>
          </div>
        </div>
      </div>

      <!-- SEÇÃO DUPLA: CRONOGRAMA DE HOJE & MURAL DE AVISOS -->
      <div style="display:grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.95fr); gap:20px; margin-bottom:28px;" class="m2-today-middle-grid">
        
        <!-- CARD: CRONOGRAMA DE HOJE -->
        <div class="m2-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="m2-today-section-header">
            <div>
              <h2 class="m2-today-section-title">
                ${icon('calendar-days', 18, 'text-teal')} Cronograma de Hoje
              </h2>
              <span class="m2-today-section-subtitle">
                ${scheduledToday.length > 0 ? `${scheduledToday.length} atividade(s) planejada(s) para hoje` : 'Nenhum bloco com data fixa para hoje'}
              </span>
            </div>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="planning">
              ${icon('calendar', 14)} Cronograma Completo
            </button>
          </div>

          <div class="m2-today-schedule-list">
            ${scheduledToday.length > 0 ? scheduledToday.map(item => {
              const isDone = item.status === 'concluido';
              const isReview = Boolean(item.isReview);
              return `
                <div class="m2-today-schedule-item ${isDone ? 'is-done' : ''}">
                  <div class="m2-today-schedule-item-left">
                    <span class="m2-pill ${isReview ? 'm2-pill-violet' : isDone ? 'm2-pill-green' : 'm2-pill-teal'}">
                      ${isReview ? 'Revisão' : isDone ? '✓ Feito' : `${item.duration_minutes || 50} min`}
                    </span>
                    <div class="m2-today-schedule-item-info">
                      <h4 class="m2-today-schedule-item-title">${escapeHtml(item.subjectLabel || 'Estudo')}</h4>
                      <p class="m2-today-schedule-item-sub">${escapeHtml(item.topicLabel || 'Conteúdo do Edital')}${item.questions_target ? ` · <span style="color:var(--accent-violet, #8b5cf6); font-weight:600;">${item.questions_target} questões</span>` : ''}</p>
                    </div>
                  </div>
                  <div class="m2-today-schedule-item-actions">
                    ${isDone ? `
                      <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="reopen-schedule-item" data-item-id="${item.id}" title="Reabrir atividade">Reabrir</button>
                    ` : `
                      <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="start-schedule-item" data-subject-id="${item.subject_id || ''}" title="Iniciar com cronômetro">
                        ${icon('timer', 14)} Timer
                      </button>
                      <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="open-schedule-completion" data-item-id="${item.id}">
                        ${icon('check', 14)} Concluir
                      </button>
                    `}
                  </div>
                </div>
              `;
            }).join('') : (cycleItems.length > 0 ? `
              <div style="background:var(--bg-surface); border:1px dashed var(--border-color); border-radius:var(--radius-md); padding:16px; text-align:center;">
                <p style="font-size:13px; color:var(--text-muted); margin:0 0 12px;">
                  Sem agendamento fixo para hoje. Continue seu ritmo adiantando a fila do <strong>Ciclo de Estudos</strong>:
                </p>
                <div style="display:flex; flex-direction:column; gap:8px; text-align:left;">
                  ${cycleItems.slice(0, 2).map(item => `
                    <div class="m2-today-schedule-item">
                      <div class="m2-today-schedule-item-left">
                        <span class="m2-pill m2-pill-teal">Ciclo</span>
                        <div class="m2-today-schedule-item-info">
                          <h4 class="m2-today-schedule-item-title">${escapeHtml(item.subjectLabel)}</h4>
                          <p class="m2-today-schedule-item-sub">${escapeHtml(item.topicLabel)} · ${item.duration_minutes} min</p>
                        </div>
                      </div>
                      <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="open-schedule-completion" data-item-id="${item.id}">
                        ${icon('check', 14)} Concluir
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : `
              <div style="text-align:center; padding:28px 16px; background:var(--bg-surface); border-radius:var(--radius-md); border:1px dashed var(--border-color);">
                <div style="color:var(--accent-teal); margin-bottom:8px;">${icon('calendar-check', 28)}</div>
                <strong style="color:var(--text-main); font-size:14px; display:block; margin-bottom:4px;">Tudo em dia por hoje!</strong>
                <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px;">Você não possui atividades pendentes para a data atual.</p>
                <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="planning">
                  ${icon('calendar-days', 14)} Explorar Planejamento
                </button>
              </div>
            `)}
          </div>
        </div>

        <!-- CARD: MURAL DE AVISOS DA MENTORIA -->
        <div class="m2-card" style="display:flex; flex-direction:column; gap:14px;">
          <div class="m2-today-section-header">
            <div>
              <h2 class="m2-today-section-title">
                ${icon('megaphone', 18, 'text-rose')} Avisos da Mentoria
              </h2>
              <span class="m2-today-section-subtitle">
                Comunicados configurados pelo seu mentor
              </span>
            </div>
            <span class="m2-pill m2-pill-rose">${studentAnnouncements.length} aviso(s)</span>
          </div>

          <div class="m2-today-announcements-list">
            ${studentAnnouncements.length > 0 ? studentAnnouncements.map(ann => {
              const scopeBadge = ann.target_type === 'all'
                ? '<span class="m2-pill m2-pill-blue">🌐 Geral</span>'
                : ann.target_type === 'contest'
                ? `<span class="m2-pill m2-pill-teal">🎯 ${escapeHtml(ann.target_label || 'Concurso')}</span>`
                : '<span class="m2-pill m2-pill-amber">🔒 Exclusivo para Você</span>';

              const priorityClass = ann.priority === 'urgent' ? 'urgent' : (ann.priority === 'important' ? 'important' : 'normal');
              const priorityBadge = ann.priority === 'urgent'
                ? '<span class="m2-pill m2-pill-rose">🚨 Urgente</span>'
                : ann.priority === 'important'
                ? '<span class="m2-pill m2-pill-amber">⭐ Importante</span>'
                : '';

              return `
                <div class="m2-today-announcement-card ${priorityClass}">
                  <div class="m2-today-announcement-meta">
                    ${scopeBadge}
                    ${priorityBadge}
                  </div>
                  <h4 class="m2-today-announcement-title">${escapeHtml(ann.title)}</h4>
                  <p class="m2-today-announcement-text">${escapeHtml(ann.content)}</p>
                  <div class="m2-today-announcement-footer">
                    <span>${icon('user', 12)} ${escapeHtml(ann.mentor_name || 'Coordenação')}</span>
                    <span>${escapeHtml(ann.created_at || '')}</span>
                  </div>
                </div>
              `;
            }).join('') : `
              <div style="text-align:center; padding:28px 16px; background:var(--bg-surface); border-radius:var(--radius-md); border:1px dashed var(--border-color);">
                <div style="color:var(--text-muted); margin-bottom:8px;">${icon('bell-off', 26)}</div>
                <strong style="color:var(--text-main); font-size:13px; display:block; margin-bottom:4px;">Nenhum aviso no momento</strong>
                <p style="font-size:12px; color:var(--text-muted); margin:0;">Novas orientações do mentor aparecerão aqui automaticamente.</p>
              </div>
            `}
          </div>
        </div>

      </div>

      <!-- SEÇÃO DE ATALHOS RÁPIDOS PARA OS MÓDULOS DA MENTORIA -->
      <div style="margin-bottom:24px;">
        <div class="m2-today-section-header">
          <div>
            <h2 class="m2-today-section-title">
              ${icon('layout-grid', 18, 'text-teal')} Módulos da Mentoria
            </h2>
            <span class="m2-today-section-subtitle">
              Atalhos rápidos para todas as ferramentas do seu ecossistema de aprovação
            </span>
          </div>
        </div>

        <div class="m2-today-modules-grid">
          <!-- 1. Edital Verticalizado -->
          <div class="m2-today-module-card" data-nav="syllabus">
            <div class="m2-today-module-icon-box" style="background:rgba(16, 185, 129, 0.12); color:#10b981;">
              ${icon('list-tree', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Edital Verticalizado</h4>
              <p class="m2-today-module-desc">Raio-X de conteúdos, tríade de estudos (teoria, lei seca e resumo) e progresso.</p>
            </div>
          </div>

          <!-- 2. Banco de Questões -->
          <div class="m2-today-module-card" data-nav="questions">
            <div class="m2-today-module-icon-box" style="background:rgba(59, 130, 246, 0.12); color:#3b82f6;">
              ${icon('circle-help', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Banco de Questões</h4>
              <p class="m2-today-module-desc">Milhares de questões comentadas com filtros de banca, cargo, ano e disciplina.</p>
            </div>
          </div>

          <!-- 3. Caderno de Erros -->
          <div class="m2-today-module-card" data-nav="error-notebook">
            <div class="m2-today-module-icon-box" style="background:rgba(239, 68, 68, 0.12); color:#ef4444;">
              ${icon('alert-triangle', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Caderno de Erros</h4>
              <p class="m2-today-module-desc">Revisão comparativa com a alternativa errada marcada vs gabarito oficial comentado.</p>
            </div>
          </div>

          <!-- 4. Revisões Periódicas -->
          <div class="m2-today-module-card" data-nav="reviews">
            <div class="m2-today-module-icon-box" style="background:rgba(245, 158, 11, 0.12); color:#f59e0b;">
              ${icon('calendar-sync', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Revisões Periódicas</h4>
              <p class="m2-today-module-desc">Algoritmo espaçado SM-2 para combater a curva do esquecimento nos momentos certos.</p>
            </div>
          </div>

          <!-- 5. Oficina de Redação IA -->
          <div class="m2-today-module-card" data-nav="redacao">
            <div class="m2-today-module-icon-box" style="background:rgba(139, 92, 246, 0.12); color:#8b5cf6;">
              ${icon('pen-tool', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Oficina de Redação IA</h4>
              <p class="m2-today-module-desc">Envie seu texto dissertativo e receba espelho com correção por critérios da banca.</p>
            </div>
          </div>

          <!-- 6. Flashcards Oficiais -->
          <div class="m2-today-module-card" data-nav="flashcards">
            <div class="m2-today-module-icon-box" style="background:rgba(6, 182, 212, 0.12); color:#06b6d4;">
              ${icon('layers', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Flashcards</h4>
              <p class="m2-today-module-desc">Baralhos inteligentes de memorização ativa para prazos, fórmulas e súmulas.</p>
            </div>
          </div>

          <!-- 7. Simulados Cronometrados -->
          <div class="m2-today-module-card" data-nav="mock-exams">
            <div class="m2-today-module-icon-box" style="background:rgba(99, 102, 241, 0.12); color:#6366f1;">
              ${icon('clipboard-list', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Simulados</h4>
              <p class="m2-today-module-desc">Provas com cronômetro regressivo, pontuação Cebraspe e diagnóstico de nota de corte.</p>
            </div>
          </div>

          <!-- 8. Minhas Anotações -->
          <div class="m2-today-module-card" data-nav="notebooks">
            <div class="m2-today-module-icon-box" style="background:rgba(16, 185, 129, 0.12); color:#10b981;">
              ${icon('notebook-pen', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Minhas Anotações</h4>
              <p class="m2-today-module-desc">Editor interativo estilo Word em linha única para fichamentos e esquemas.</p>
            </div>
          </div>

          <!-- 9. Meus Cursos & PDFs -->
          <div class="m2-today-module-card" data-nav="courses">
            <div class="m2-today-module-icon-box" style="background:rgba(236, 72, 153, 0.12); color:#ec4899;">
              ${icon('book-open', 22)}
            </div>
            <div class="m2-today-module-info">
              <h4 class="m2-today-module-title">Meus Cursos & Materiais</h4>
              <p class="m2-today-module-desc">Acesse videoaulas, apostilas e materiais didáticos recomendados pelo mentor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function viewPlanning() {
  const cursor = parseDate(state.calendarCursor) || new Date();
  const items = scheduleItems({ calendar: true });
  const isWeek = state.planningView === 'week';
  const start = isWeek ? mondayOf(cursor) : new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const end = isWeek ? addDays(start, 6) : new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
  const startKey = dateKey(start);
  const endKey = dateKey(end);
  const dated = items.filter(item => item.planned_date && item.planned_date >= startKey && item.planned_date <= endKey);
  const cycles = items.filter(item => !item.planned_date).sort((a, b) => (a.cycle_position || a.position || 0) - (b.cycle_position || b.position || 0));
  const minutes = dated.reduce((sum, item) => sum + item.duration_minutes, 0);
  const completed = dated.filter(item => item.status === 'concluido').length;
  const pendingReviews = dated.filter(item => item.isReview && item.status !== 'concluido').length;
  const allRawItems = window.M2Data.scheduleItems || [];
  const overdue = (allRawItems.length > 0 ? allRawItems : items).filter(item => {
    const pDate = item.planned_date ? String(item.planned_date).slice(0, 10) : null;
    return pDate && pDate < dateKey(new Date()) && item.status === 'pendente' && !item.scheduled_review_id && !item.isReview;
  }).length;
  const label = isWeek ? `${fmtDate(start)} - ${fmtDate(end)}, ${start.getFullYear()}` : new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(cursor);

  const activeContest = (window.M2Data.contests || []).find(c => String(c.id) === String(state.contestId)) || window.M2Data.contests?.[0];
  const isFixedMode = (activeContest?.allowed_schedule_mode === 'fixed_days') || (window.M2Data.student?.allowed_schedule_mode === 'fixed_days');
  const fixedDays = activeContest?.fixed_days_duration || window.M2Data.student?.fixed_days_duration || 60;

  // Progresso em percentual (Gamificação)
  const allCompletedCount = allRawItems.filter(i => i.status === 'concluido').length;
  const progressPct = isFixedMode && allRawItems.length > 0
    ? Math.round((allCompletedCount / allRawItems.length) * 100)
    : (dated.length > 0 ? Math.round((completed / dated.length) * 100) : 0);
  const progressLabel = isFixedMode ? `Progresso do Ciclo (${fixedDays} dias)` : 'Progresso da Semana';
  const progressSub = isFixedMode && allRawItems.length > 0
    ? `${allCompletedCount} de ${allRawItems.length} blocos do ciclo concluídos`
    : `${completed} de ${dated.length} blocos concluídos · ${(minutes / 60).toFixed(1)}h planejadas`;

  const dates = [];
  if (isWeek) {
    for (let index = 0; index < 7; index += 1) dates.push(addDays(start, index));
  } else {
    const leading = (start.getDay() + 6) % 7;
    for (let index = 0; index < leading; index += 1) dates.push(null);
    for (let day = 1; day <= end.getDate(); day += 1) dates.push(new Date(cursor.getFullYear(), cursor.getMonth(), day));
  }

  return `
    <div class="m2-content m2-planning-view">
      ${isFixedMode ? `
        <div class="m2-fixed-mode-header" style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:14px; padding:10px 16px; border-radius:10px; background:rgba(13, 148, 136, 0.08); border:1px solid rgba(13, 148, 136, 0.25); color:var(--text-main);">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="display:flex; color:#0d9488;">${icon('clock', 18)}</span>
            <div>
              <strong style="font-size:13px; color:#0d9488;">Cronograma Fixo · ${fixedDays} Dias Corridos (Ciclo)</strong>
              <p style="margin:2px 0 0 0; font-size:12px; color:var(--text-muted);">Seu plano está organizado em um ciclo contínuo de ${fixedDays} dias corridos com as matérias e tópicos priorizados.</p>
            </div>
          </div>
          <span class="m2-pill m2-pill-teal" style="font-weight:700;">Modo Ciclo Fixo</span>
        </div>
      ` : ''}

      ${overdue > 0 ? `
        <div class="m2-banner-alert m2-banner-alert--warning" style="display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:16px; padding:12px 18px; border-radius:10px; background:var(--m2-amber-50, #fffbeb); border:1px solid var(--m2-amber-200, #fde68a); color:var(--m2-amber-900, #78350f);">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="display:flex; color:var(--m2-amber-600, #d97706); flex-shrink:0;">${icon('alert-triangle', 20)}</span>
            <div>
              <strong style="font-size:13px;">Você possui ${overdue} ${overdue === 1 ? 'estudo atrasado' : 'estudos atrasados'}</strong>
              <p style="margin:2px 0 0 0; font-size:12px; color:var(--m2-amber-800, #92400e);">O cronograma mantém seus tópicos pendentes. Clique para redistribuir as pendências a partir de hoje.</p>
            </div>
          </div>
          <button type="button" class="m2-btn m2-btn-sm" data-action="reprogram-schedule" style="white-space:nowrap; background:#d97706; border-color:#d97706; color:#fff; font-weight:700; display:inline-flex; align-items:center; gap:6px;">
            ${icon('refresh-cw', 13)} Recalcular Cronograma
          </button>
        </div>
      ` : ''}
      <!-- TOPBAR UNIFICADA (FASE 2) -->
      <div class="m2-plan-topbar">
        <!-- 1. Progresso Semanal / Ciclo Gamificado -->
        <div class="m2-plan-progress-box">
          <div class="m2-plan-progress-header">
            <span class="m2-plan-progress-label">${progressLabel}</span>
            <strong class="m2-plan-progress-pct">${progressPct}%</strong>
          </div>
          <div class="m2-plan-progress-bar-track">
            <div class="m2-plan-progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>
          <span class="m2-plan-progress-sub">
            ${progressSub}
          </span>
        </div>

        <!-- 2. Seletor de Período e Navegação -->
        <div class="m2-plan-picker-box">
          <button type="button" class="m2-plan-nav-arrow" data-action="calendar-prev" title="Período anterior" aria-label="Período anterior">
            ${icon('chevron-left', 16)}
          </button>
          <div class="m2-plan-picker-label">
            ${icon('calendar-days', 15)}
            <span>${escapeHtml(label)}</span>
          </div>
          <button type="button" class="m2-plan-nav-arrow" data-action="calendar-next" title="Próximo período" aria-label="Próximo período">
            ${icon('chevron-right', 16)}
          </button>
          <button type="button" class="m2-plan-today-btn" data-action="calendar-today">
            Hoje
          </button>
        </div>

        <!-- 3. Controles de Visão & Replanejar -->
        <div class="m2-plan-controls-box">
          <div class="m2-segmented-control">
            <button type="button" class="m2-segmented-btn ${isWeek ? 'active' : ''}" data-action="set-planning-view" data-view="week">
              Semana
            </button>
            <button type="button" class="m2-segmented-btn ${!isWeek ? 'active' : ''}" data-action="set-planning-view" data-view="month">
              Mês
            </button>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm m2-plan-replan-btn" data-action="open-replan-modal">
            ${icon('calendar-sync', 14)} Replanejar
          </button>
        </div>
      </div>

      ${state.mode === 'workspace' ? `
        <div class="m2-planning-metrics">
          <span><strong>${completed}/${dated.length}</strong> blocos concluídos</span>
          <span><strong>${overdue}</strong> atrasados</span>
          <span><strong>${pendingReviews}</strong> revisões pendentes</span>
          <span><strong>${(minutes / 60).toFixed(1)}h</strong> planejadas</span>
        </div>
      ` : ''}

      <!-- GRADE DO CALENDÁRIO COM SLOTS E DRAG & DROP (FASE 1 & 4) -->
      <div class="m2-card m2-planning-calendar-card">
        ${!isWeek ? `
          <div class="m2-calendar-weekdays">
            ${WEEKDAYS.map(day => `<span>${day.slice(0, 3)}</span>`).join('')}
          </div>
        ` : ''}

        <div class="m2-calendar-grid ${isWeek ? 'm2-calendar-grid--week' : 'm2-calendar-grid--month'}">
          ${dates.map(date => {
            if (!date) return '<div class="m2-cal-empty"></div>';
            const key = dateKey(date);
            const dayItems = dated.filter(item => item.planned_date === key);
            const today = key === dateKey(new Date());
            const dayIndex = (date.getDay() + 6) % 7;
            const dayName = WEEKDAYS[dayIndex].slice(0, 3).toLowerCase();
            const dayNum = date.getDate();

            if (isWeek) {
              return `
                <section
                  class="m2-cal-col ${today ? 'current' : ''}"
                  data-drop-date="${key}"
                  data-day-index="${dayIndex}"
                >
                  <div class="m2-cal-col__header ${today ? 'is-today' : ''}" data-action="open-calendar-day" data-date="${key}">
                    <span class="m2-cal-col__day-name">${dayName}.</span>
                    <span class="m2-cal-col__day-num ${today ? 'active' : ''}">${dayNum}</span>
                  </div>

                  <div class="m2-cal-col__items-wrap" data-drop-date="${key}">
                    ${dayItems.length > 0 ? dayItems.map(calendarCard).join('') : `
                      <div class="m2-cal-slot--empty" data-drop-date="${key}">
                        <span class="m2-cal-slot-icon">☕</span>
                        <span class="m2-cal-slot-text">Dia Livre</span>
                        <small class="m2-cal-slot-sub">Arraste para cá</small>
                      </div>
                    `}
                    ${dayItems.length > 0 ? `
                      <div class="m2-cal-slot--dropzone" data-drop-date="${key}">
                        <span>+ Arraste para cá</span>
                      </div>
                    ` : ''}
                  </div>
                </section>
              `;
            }

            // Mês
            return `
              <section class="m2-cal-col m2-cal-col--month ${today ? 'current' : ''}" data-drop-date="${key}">
                <button type="button" class="m2-cal-day-label" data-action="open-calendar-day" data-date="${key}">
                  <span>${dayNum}</span>
                </button>
                <div class="m2-cal-col__items-wrap" data-drop-date="${key}">
                  ${dayItems.slice(0, 3).map(calendarCard).join('')}
                  ${dayItems.length > 3 ? `<button type="button" class="m2-cal-more" data-action="open-calendar-day" data-date="${key}">+${dayItems.length - 3} mais</button>` : ''}
                  ${dayItems.length === 0 ? '<span class="m2-cal-free">Livre</span>' : ''}
                </div>
              </section>
            `;
          }).join('')}
        </div>
      </div>

      <!-- FILA DO CICLO INTELIGENTE (CASO EXISTA) -->
      ${cycles.length ? `
        <div class="m2-card" style="margin-top:18px;">
          <div class="m2-card-header">
            <span class="m2-card-title">${icon('refresh-cw', 18)} Fila do ciclo inteligente</span>
            <span class="m2-page-subtitle">Continue pelo próximo bloco disponível.</span>
          </div>
          <div class="m2-cycle-queue">
            ${cycles.map(item => `
              <div class="m2-cycle-item ${item.status === 'concluido' ? 'done' : ''}">
                <span>${item.cycle_position || item.position || '—'}</span>
                <div>
                  <strong>${escapeHtml(item.subjectLabel)}</strong>
                  <small>${item.duration_minutes} min · prioridade ${item.priority || 0}</small>
                </div>
                ${itemBadge(item)}
                <button type="button" class="m2-btn m2-btn-quiet m2-btn-sm" data-action="open-calendar-day" data-date="cycle">Abrir</button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}
