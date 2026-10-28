import { state, icon, escapeHtml, plainTextWithBreaks, formatTimer, render } from './core.js';

export function formatDateTime(isoString) {
  if (!isoString) return '';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return String(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch (e) {
    return String(isoString);
  }
}

/**
 * Agrupa dinamicamente apenas as disciplinas que possuem questões cadastradas no banco,
 * respeitando os públicos/disponibilização já filtrados pelo backend.
 */
export function getQuestionBankSubjects(questions = []) {
  const map = new Map();

  (questions || []).forEach(q => {
    const rawName = (q.subjectName || q.subject || '').trim();
    if (!rawName) return;

    const key = rawName.toLowerCase();
    if (!map.has(key)) {
      map.set(key, {
        id: q.subjectId || ('sub-' + encodeURIComponent(key)),
        name: rawName,
        questions: [],
        topicsMap: new Map()
      });
    }

    const entry = map.get(key);
    entry.questions.push(q);

    const topicName = (q.topicName || q.topic || '').trim();
    if (topicName) {
      const topKey = topicName.toLowerCase();
      if (!entry.topicsMap.has(topKey)) {
        entry.topicsMap.set(topKey, {
          id: q.topicId || ('top-' + encodeURIComponent(topKey)),
          name: topicName,
          count: 0
        });
      }
      entry.topicsMap.get(topKey).count++;
    }
  });

  return Array.from(map.values()).map(sub => {
    const answeredCount = sub.questions.filter(q => q.userStatus === 'correct' || q.userStatus === 'wrong').length;
    const correctCount = sub.questions.filter(q => q.userStatus === 'correct').length;
    const masteryPct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    const topics = Array.from(sub.topicsMap.values());
    if (topics.length === 0) {
      topics.push({ id: 'geral', name: 'Geral', count: sub.questions.length });
    }

    return {
      id: sub.id,
      name: sub.name,
      totalQuestions: sub.questions.length,
      masteryPct,
      weight: 1,
      topics
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function viewQuestions() {
  const subjects = getQuestionBankSubjects(window.M2Data.questions || []);
  if (!state.selectedSubjectId) {
    return renderSubjectCardsView(subjects);
  }
  const subject = subjects.find(s => s.id === state.selectedSubjectId || s.name.toLowerCase() === state.selectedSubjectId.toLowerCase());
  if (!subject) {
    state.selectedSubjectId = null;
    return renderSubjectCardsView(subjects);
  }
  return renderSubjectStudyView(subject, subjects);
}

// Utilitários de Estilo e Cores por Matéria (Estilo Aprovai-SaaS)
export function getSubjectStyle(subjectIdentifier) {
  const name = String(subjectIdentifier || '').toLowerCase();

  if (name.includes('constitucional')) {
    return { color: 'teal', abbr: 'DC', badge: 'Dominando', badgeClass: 'm2-pill-green', masteryPct: 81 };
  }
  if (name.includes('portug')) {
    return { color: 'violet', abbr: 'LP', badge: 'Progredindo', badgeClass: 'm2-pill-teal', masteryPct: 75 };
  }
  if (name.includes('lógic') || name.includes('matem')) {
    return { color: 'amber', abbr: 'RL', badge: 'Ponto fraco', badgeClass: 'm2-pill-amber', masteryPct: 60 };
  }
  if (name.includes('admin')) {
    return { color: 'green', abbr: 'DA', badge: 'Ponto fraco', badgeClass: 'm2-pill-amber', masteryPct: 55 };
  }
  if (name.includes('penal')) {
    return { color: 'rose', abbr: 'DP', badge: 'Revisar', badgeClass: 'm2-pill-amber', masteryPct: 70 };
  }
  if (name.includes('legisla')) {
    return { color: 'rose', abbr: 'LE', badge: 'Revisar', badgeClass: 'm2-pill-amber', masteryPct: 65 };
  }
  if (name.includes('informa')) {
    return { color: 'blue', abbr: 'INF', badge: 'Progredindo', badgeClass: 'm2-pill-teal', masteryPct: 70 };
  }

  const words = String(subjectIdentifier || '').trim().split(/\s+/).filter(w => w.length > 2);
  const abbr = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : (String(subjectIdentifier || '').slice(0, 2).toUpperCase() || 'MT');
  return { color: 'teal', abbr, badge: 'Treinar', badgeClass: 'm2-pill-gray', masteryPct: 50 };
}

function formatStatementWithGlossary(statement, glossTerms = []) {
  let res = escapeHtml(statement);
  if (!glossTerms || glossTerms.length === 0) return res;
  glossTerms.forEach(item => {
    const term = escapeHtml(item?.termo || '').trim();
    if (!term) return;
    const definition = escapeHtml(item?.definicao || '');
    const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
    res = res.replace(regex, `<span class="m2-gloss-term" data-definition="${definition}" title="${definition}">$1</span>`);
  });
  return res;
}

export function getFilteredStudyQuestions(subject) {
  const subjectName = typeof subject === 'string' ? subject : (subject?.name || '');
  const subjectId = typeof subject === 'string' ? subject : (subject?.id || '');

  let questions = (window.M2Data.questions || []).filter(q => {
    const qSubName = (q.subjectName || q.subject || '').trim().toLowerCase();
    const qSubId = q.subjectId || ('sub-' + encodeURIComponent(qSubName));
    return (subjectName && qSubName === subjectName.toLowerCase()) || (subjectId && qSubId === subjectId);
  });

  if (state.selectedTopicId && state.selectedTopicId !== 'all') {
    questions = questions.filter(q => {
      const qTopName = (q.topicName || q.topic || '').trim().toLowerCase();
      const qTopId = q.topicId || ('top-' + encodeURIComponent(qTopName));
      return qTopName === state.selectedTopicId.toLowerCase() || qTopId === state.selectedTopicId;
    });
  }
  if (state.questionDifficultyFilter && state.questionDifficultyFilter !== 'all') {
    questions = questions.filter(q => (q.difficulty || '').toLowerCase() === state.questionDifficultyFilter.toLowerCase() || (q.level || '').toLowerCase() === state.questionDifficultyFilter.toLowerCase());
  }
  if (state.questionStatusFilter && state.questionStatusFilter !== 'all') {
    questions = questions.filter(q => q.userStatus === state.questionStatusFilter);
  }
  return questions;
}

// Grid de Cards de Matérias dentro do Banco de Questões (exibe apenas disciplinas com questões)
function renderSubjectCardsView(subjects = []) {
  const student = window.M2Data.student || {};
  const totalBankQuestions = (window.M2Data.questions || []).length;

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A06 · Prática e Fixação</span>
            <h1 class="m2-page-title">Banco de Questões</h1>
            <p class="m2-page-subtitle">Selecione uma disciplina com questões cadastradas para resolver questões focadas e treinar por assunto.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary" data-action="open-manual-questions-modal">
            ${icon('plus', 16)} Lançar Questões Feitas Fora (Livro/PDF)
          </button>
        </div>

        <!-- Indicadores de Desempenho -->
        <div class="m2-grid-2" style="margin-bottom:16px;">
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('circle-check', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${student.questionsAccuracy || student.accuracy || 0}%</span>
              <span class="m2-stat-label">Taxa Média de Acerto</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-teal-soft); color:var(--accent-teal);">${icon('circle-help', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${totalBankQuestions}</span>
              <span class="m2-stat-label">Questões Disponíveis no Banco</span>
            </div>
          </div>
        </div>

        ${subjects.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('circle-help', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma questão disponível</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Não há disciplinas ou questões cadastradas para o seu acesso no momento.
            </p>
          </div>
        ` : `
          <!-- Barra de Filtro de Matéria -->
          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:16px; flex-wrap:wrap; background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:240px;">
              ${icon('filter', 16, 'text-teal')}
              <strong style="font-size:13px; color:var(--text-main); white-space:nowrap;">Filtrar por Disciplina:</strong>
              <select class="m2-field-input" data-action="filter-questions-subject-select" style="flex:1; max-width:320px; padding:8px 12px; font-size:13px; font-weight:600; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main); cursor:pointer;">
                <option value="">Todas as Disciplinas (${totalBankQuestions} questões)</option>
                ${subjects.map(s => `
                  <option value="${s.id}" ${state.selectedSubjectId === s.id ? 'selected' : ''}>${s.name} (${s.totalQuestions} questões)</option>
                `).join('')}
              </select>
            </div>
            <span style="font-size:12px; color:var(--text-muted);">
              Exibindo <strong>${subjects.length}</strong> disciplina(s) com questões disponíveis
            </span>
          </div>

          <div class="m2-subjects-grid">
            ${subjects.map(sub => {
    const style = getSubjectStyle(sub.name);
    return `
                <div class="m2-subject-card" data-action="select-subject" data-id="${sub.id}" tabindex="0" role="button" aria-label="Acessar questões de ${sub.name}">
                  <div class="m2-subject-card-header">
                    <div class="m2-subject-abbr ${style.color}">${style.abbr}</div>
                    <span class="m2-pill m2-pill-teal" style="font-size:12px; font-weight:700;">
                      ${sub.totalQuestions} ${sub.totalQuestions === 1 ? 'questão' : 'questões'}
                    </span>
                  </div>

                  <div class="m2-subject-card-body" style="margin-top:6px;">
                    <h3 class="m2-subject-name" style="font-size:17px;">${sub.name}</h3>
                  </div>

                  <div class="m2-subject-card-footer" style="padding-top:14px;">
                    <span style="font-size:12px; color:var(--text-muted);">
                      Total: <strong>${sub.totalQuestions} ${sub.totalQuestions === 1 ? 'questão' : 'questões'}</strong>
                    </span>
                    <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="select-subject" data-id="${sub.id}">
                      Acessar Questões ${icon('arrow-right', 14)}
                    </button>
                  </div>
                </div>
              `;
  }).join('')}
          </div>
        `}
      </div>
    `;
}

// Visão Interna da Matéria Selecionada (Filtro de Assunto + Resolução de Questões)
function renderSubjectStudyView(subject, subjects = []) {
  if (!subject) return renderSubjectCardsView(subjects);
  const subStyle = getSubjectStyle(subject.name);
  const allSubjectQuestions = (window.M2Data.questions || []).filter(q => {
    const qSubName = (q.subjectName || q.subject || '').trim().toLowerCase();
    const qSubId = q.subjectId || ('sub-' + encodeURIComponent(qSubName));
    return qSubName === subject.name.toLowerCase() || (qSubId && qSubId === subject.id);
  });
  const filteredQuestions = getFilteredStudyQuestions(subject);

  // Se concluiu a sessão da matéria
  if (state.studySessionComplete) {
    const accuracy = filteredQuestions.length > 0
      ? Math.round((state.studySessionCorrectCount / filteredQuestions.length) * 100)
      : 100;

    return `
        <div class="m2-content">
          <div class="m2-subject-study-header">
            <button type="button" class="m2-btn m2-btn-secondary" data-action="back-to-subjects">
              ${icon('arrow-left', 16)} Voltar para Disciplinas
            </button>
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="m2-subject-abbr ${subStyle.color}" style="width:36px; height:36px; font-size:14px;">${subStyle.abbr}</div>
              <strong>${subject.name}</strong>
            </div>
          </div>

          <div class="m2-completion-card">
            <div class="m2-trophy-circle">
              ${icon('trophy', 36)}
            </div>
            <div>
              <h2 style="font-size:22px; font-weight:800; color:var(--text-main);">Sessão Concluída!</h2>
              <p style="font-size:14px; color:var(--text-muted); margin-top:4px;">
                Você resolveu todas as questões disponíveis para este filtro de <strong>${subject.name}</strong>.
              </p>
            </div>

            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:100%; max-width:440px;">
              <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <span style="font-size:11px; color:var(--text-muted); display:block;">XP Ganho</span>
                <strong style="font-size:18px; color:var(--accent-teal);">+${state.studySessionXpGained || (state.studySessionCorrectCount * 2)} XP</strong>
              </div>
              <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <span style="font-size:11px; color:var(--text-muted); display:block;">Acertos</span>
                <strong style="font-size:18px; color:var(--accent-green);">${state.studySessionCorrectCount} / ${filteredQuestions.length}</strong>
              </div>
              <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <span style="font-size:11px; color:var(--text-muted); display:block;">Aproveitamento</span>
                <strong style="font-size:18px; color:var(--text-main);">${accuracy}%</strong>
              </div>
            </div>

            <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:8px;">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="reset-topic-filter">
                ${icon('list-tree', 16)} Filtrar Outro Assunto
              </button>
              <button type="button" class="m2-btn m2-btn-primary" data-action="restart-study-session">
                ${icon('rotate-ccw', 16)} Refazer Questões
              </button>
              <button type="button" class="m2-btn m2-btn-quiet" data-action="back-to-subjects">
                â† Voltar para Disciplinas
              </button>
            </div>
          </div>
        </div>
      `;
  }

  return `
      <div class="m2-content">
        <!-- Barra Ãšnica Ultracompacta (Substitui os 2 cards antigos, foco total na questão) -->
        <div class="m2-study-toolbar">
          <!-- Esquerda: Voltar e Matéria Ativa -->
          <div class="m2-study-toolbar__group">
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="back-to-subjects" title="Voltar ao catálogo de disciplinas" style="padding:4px 8px; font-size:12px;">
              ${icon('arrow-left', 14)} Voltar
            </button>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="m2-pill m2-pill-teal" style="font-weight:700; font-size:11px; padding:2px 7px;">${subStyle.abbr}</span>
              ${subjects && subjects.length > 1 ? `
                <select data-action="filter-questions-subject-select" class="m2-study-select-sm" title="Trocar disciplina" style="font-weight:700; font-size:13px; color:var(--text-main); cursor:pointer;">
                  ${subjects.map(s => `<option value="${s.id}" ${s.id === subject.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
              ` : `
                <strong style="font-size:13px; color:var(--text-main); white-space:nowrap;">${subject.name}</strong>
              `}
            </div>
          </div>

          <!-- Centro: Filtros Compactos Inline (Assunto, Dificuldade, Situação) -->
          <div class="m2-study-toolbar__filters">
            <select class="m2-study-select-sm" data-action="change-topic-filter" title="Filtrar por assunto" style="max-width:210px;">
              <option value="all" ${state.selectedTopicId === 'all' ? 'selected' : ''}>
                Todos os Assuntos (${allSubjectQuestions.length})
              </option>
              ${subject.topics.map(t => `
                <option value="${t.id}" ${state.selectedTopicId === t.id ? 'selected' : ''}>
                  ${t.name} (${t.count || t.questionsCount || 0})
                </option>
              `).join('')}
            </select>

            <select class="m2-study-select-sm" data-action="change-difficulty-filter" title="Filtrar por dificuldade" style="max-width:140px;">
              <option value="all" ${state.questionDifficultyFilter === 'all' ? 'selected' : ''}>Dificuldade: Todas</option>
              <option value="facil" ${state.questionDifficultyFilter === 'facil' ? 'selected' : ''}>Fácil</option>
              <option value="medio" ${state.questionDifficultyFilter === 'medio' ? 'selected' : ''}>Médio</option>
              <option value="dificil" ${state.questionDifficultyFilter === 'dificil' ? 'selected' : ''}>Difícil</option>
            </select>

            <select class="m2-study-select-sm" data-action="filter-question-status" title="Filtrar por situação" style="max-width:140px;">
              <option value="all" ${state.questionStatusFilter === 'all' ? 'selected' : ''}>Situação: Todas</option>
              <option value="not_answered" ${state.questionStatusFilter === 'not_answered' ? 'selected' : ''}>Não resolvidas</option>
              <option value="wrong" ${state.questionStatusFilter === 'wrong' ? 'selected' : ''}>Somente erros</option>
              <option value="correct" ${state.questionStatusFilter === 'correct' ? 'selected' : ''}>Somente acertos</option>
            </select>
          </div>

          <!-- Direita: Contador e Cronômetro Discreto -->
          <div class="m2-study-toolbar__group" style="margin-left:auto;">
            <span style="font-size:11px; color:var(--text-muted); white-space:nowrap;">
              ${filteredQuestions.length} questão(ões)
            </span>
            <div style="display:flex; align-items:center; gap:5px; background:var(--bg-card); padding:3px 8px; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:11px;" title="Tempo de estudo da sessão">
              <span style="color:var(--accent-teal);">${icon('timer', 12)}</span>
              <strong style="font-variant-numeric:tabular-nums;" id="m2-session-timer">${formatTimer(state.timerSeconds || 0)}</strong>
            </div>
          </div>
        </div>

        <!-- ÁREA DE RESOLUÃ‡ÃƒO DE QUESTÃ•ES COM FEEDBACK IMEDIATO -->
        ${filteredQuestions.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px; align-items:center;">
            <div style="width:54px; height:54px; border-radius:50%; background:var(--bg-card); display:grid; place-items:center; color:var(--text-muted); margin-bottom:12px;">
              ${icon('circle-help', 28)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma questão encontrada para este filtro</h3>
            <p style="font-size:13px; color:var(--text-muted); max-width:420px; margin-top:4px;">
              Não há questões cadastradas que correspondam à combinação de assunto, dificuldade e histórico selecionada.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" style="margin-top:16px;" data-action="reset-topic-filter">
              ${icon('rotate-ccw', 16)} Limpar Filtros e Ver Todos os Assuntos
            </button>
          </div>
        ` : (() => {
      const q = filteredQuestions[state.currentQuestionIndex % filteredQuestions.length];
      const result = state.questionResults[q.id];
      const draft = state.questionDrafts[q.id] || (state.selectedOption);
      const isAnswered = Boolean(result);
      const selected = isAnswered ? (result.answer || draft) : draft;
      const progressPct = (((state.currentQuestionIndex % filteredQuestions.length) + 1) / filteredQuestions.length) * 100;
      const isHistoryOpen = state.activeHistoryQuestionId === q.id;
      const history = state.questionHistory[q.id];

      return `
            <div class="m2-question-card">
              <!-- Barra de Progresso da Sessão Focada -->
              <div style="display:flex; flex-direction:column; gap:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                  <span style="font-weight:700; color:var(--text-main);">
                    Questão ${(state.currentQuestionIndex % filteredQuestions.length) + 1} de ${filteredQuestions.length}
                  </span>
                  <span style="color:var(--text-muted);">
                    ${Math.round(progressPct)}% concluído
                  </span>
                </div>
                <div class="m2-progress-track">
                  <div class="m2-progress-fill" style="width: ${progressPct}%;"></div>
                </div>
              </div>

              <!-- Metadados da Questão -->
              <div class="m2-question-meta">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                  <span class="m2-pill m2-pill-teal">${q.board} · ${q.year}</span>
                  <span class="m2-pill m2-pill-gray">${q.role}</span>
                  <span class="m2-pill m2-pill-gray" title="Assunto do Edital">${q.topicName}</span>
                  <span class="m2-pill ${q.level === 'facil' ? 'm2-pill-green' : q.level === 'medio' ? 'm2-pill-amber' : 'm2-pill-rose'}">
                    Dificuldade: ${q.difficulty}
                  </span>
                  ${q.answered ? `
                    <span class="m2-pill ${q.last_correct ? 'm2-pill-green' : 'm2-pill-rose'}">
                      Ãšltima: ${q.last_correct ? 'acerto' : 'erro'}
                    </span>
                  ` : ''}
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="toggle-fav-question">
                    ${icon('bookmark', 14)} Salvar
                  </button>
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-report-question" data-question-id="${q.id}" title="Reportar erro no gabarito ou enunciado" style="color:var(--accent-rose);">
                    ${icon('flag', 14)} Reportar
                  </button>
                </div>
              </div>

              <!-- Enunciado com Termos do Glossário Interativo -->
              <div class="m2-question-statement">
                ${formatStatementWithGlossary(q.statement, q.glossTerms)}
              </div>

              <!-- Alternativas Selecionáveis (Clique seleciona rascunho, confirmação no botão Responder) -->
              <div class="m2-options-list">
                ${q.options.map(opt => {
        let optClass = '';
        if (selected === opt.id) optClass += ' selected';
        const correctLetter = (result?.correct_answer || q.answer || q.correct_answer || '').toUpperCase().trim();
        const isOptCorrect = opt.correct || (correctLetter && opt.id === correctLetter);
        if (isAnswered) {
          if (isOptCorrect) optClass += ' correct';
          else if (selected === opt.id && !isOptCorrect) optClass += ' wrong';
        }

        return `
                    <button type="button" class="m2-option-btn ${optClass}" data-action="select-study-draft" data-question-id="${q.id}" data-option="${opt.id}" ${isAnswered ? 'disabled' : ''}>
                      <span class="m2-option-letter">${opt.id}</span>
                      <span class="m2-option-text">${escapeHtml(opt.text)}</span>
                      ${isAnswered && isOptCorrect ? `<span style="color:var(--accent-green); margin-left:auto;">${icon('check-circle', 18)}</span>` : ''}
                      ${isAnswered && selected === opt.id && !isOptCorrect ? `<span style="color:var(--accent-rose); margin-left:auto;">${icon('x-circle', 18)}</span>` : ''}
                      ${isAnswered && selected === opt.id && isOptCorrect ? `<span class="m2-xp-badge-float">+2 XP</span>` : ''}
                    </button>
                  `;
      }).join('')}
              </div>

              <!-- Painel de Gabarito, Explicação e Dica da Banca (Exibido após responder) -->
              ${isAnswered ? `
                <div class="m2-explanation-panel">
                  <div class="m2-explanation-header">
                    ${icon('sparkles', 18)}
                    <span>Gabarito Comentado & Justificativa Completa</span>
                  </div>
                  <p class="m2-explanation-text">
                    ${(result && result.explanation) || q.explanation || ('Alternativa correta: ' + (result?.correct_answer || q.answer || q.correct_answer || 'Gabarito Oficial'))}
                  </p>

                  ${q.dicaBanca ? `
                    <div class="m2-dica-banca">
                      <span style="color:var(--accent-amber); flex-shrink:0;">${icon('sparkles', 18)}</span>
                      <div>
                        <strong>âš¡ Dica da Banca (${q.board}):</strong>
                        <span>${q.dicaBanca}</span>
                      </div>
                    </div>
                  ` : ''}

                  <!-- Botões de Repetição Espaçada SM-2 -->
                  <div class="m2-sm2-rating-row">
                    <button type="button" class="m2-sm2-btn errei" data-action="rate-sm2-question" data-rate="Errei">
                      ${icon('rotate-ccw', 14)}
                      <strong>Errei</strong>
                      <span style="font-size:10px; opacity:0.8;">Revisar hoje</span>
                    </button>
                    <button type="button" class="m2-sm2-btn dificil" data-action="rate-sm2-question" data-rate="Difícil">
                      ${icon('clock-3', 14)}
                      <strong>Difícil</strong>
                      <span style="font-size:10px; opacity:0.8;">Em 1 dia</span>
                    </button>
                    <button type="button" class="m2-sm2-btn bom" data-action="rate-sm2-question" data-rate="Bom">
                      ${icon('check-circle', 14)}
                      <strong>Bom</strong>
                      <span style="font-size:10px; opacity:0.8;">Em 3 dias</span>
                    </button>
                    <button type="button" class="m2-sm2-btn facil" data-action="rate-sm2-question" data-rate="Fácil">
                      ${icon('sparkles', 14)}
                      <strong>Fácil</strong>
                      <span style="font-size:10px; opacity:0.8;">Em 7 dias</span>
                    </button>
                  </div>
                </div>
              ` : ''}

              <!-- Barra Inferior de Ações (Alinhada à Esquerda) -->
              <div style="display:flex; justify-content:flex-start; align-items:center; margin-top:16px; flex-wrap:wrap; gap:8px;">
                ${!isAnswered ? `
                  <button type="button" class="m2-btn m2-btn-primary" data-action="confirm-study-answer" data-question-id="${q.id}" ${!draft ? 'disabled' : ''}>
                    ${icon('check', 16)} Responder
                  </button>
                  ${(state.currentQuestionIndex % filteredQuestions.length) > 0 ? `
                    <button type="button" class="m2-btn m2-btn-secondary" data-action="prev-study-question">
                      ${icon('arrow-left', 16)} Voltar
                    </button>
                  ` : ''}
                  <button type="button" class="m2-btn m2-btn-secondary" data-action="skip-study-question">
                    Pular ${icon('skip-forward', 16)}
                  </button>
                  <button type="button" class="m2-btn m2-btn-ghost" data-action="toggle-question-history" data-question-id="${q.id}">
                    ${icon('history', 16)} ${isHistoryOpen ? 'Ocultar Histórico' : 'Histórico'}
                  </button>
                ` : `
                  <button type="button" class="m2-btn m2-btn-primary" data-action="next-study-question">
                    ${(state.currentQuestionIndex % filteredQuestions.length) + 1 >= filteredQuestions.length
                      ? `Finalizar Sessão de Estudo ${icon('trophy', 16)}`
                      : `Próxima Questão ${icon('arrow-right', 16)}`}
                  </button>
                  ${(state.currentQuestionIndex % filteredQuestions.length) > 0 ? `
                    <button type="button" class="m2-btn m2-btn-secondary" data-action="prev-study-question">
                      ${icon('arrow-left', 16)} Voltar
                    </button>
                  ` : ''}
                  <button type="button" class="m2-btn m2-btn-soft" data-action="retry-study-question" data-question-id="${q.id}">
                    ${icon('rotate-ccw', 16)} Refazer
                  </button>
                  <button type="button" class="m2-btn m2-btn-ghost" data-action="toggle-question-history" data-question-id="${q.id}">
                    ${icon('history', 16)} ${isHistoryOpen ? 'Ocultar Histórico' : 'Histórico'}
                  </button>
                `}
              </div>

              <!-- Gaveta de Histórico por Questão -->
              ${isHistoryOpen ? `
                <div class="m2-question-history-panel" style="margin-top:16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="font-size:13px; color:var(--text-main); display:flex; align-items:center; gap:6px;">
                      ${icon('history', 14)} Histórico de Tentativas desta Questão
                    </strong>
                    <button type="button" class="m2-btn m2-btn-ghost m2-btn-sm" data-action="toggle-question-history" data-question-id="${q.id}" style="padding:2px 8px; font-size:11px;">
                      Fechar
                    </button>
                  </div>
                  ${state.loadingHistoryQuestionId === q.id ? `
                    <div style="font-size:12px; color:var(--text-muted); padding:10px 0;">Carregando tentativas...</div>
                  ` : history && history.length > 0 ? `
                    <div style="display:flex; flex-direction:column; gap:4px;">
                      ${history.map(a => `
                        <div class="m2-question-history-row" style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--bg-card); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                          <span style="font-weight:600; color:${a.is_correct ? 'var(--accent-green)' : 'var(--accent-rose)'}; display:flex; align-items:center; gap:6px;">
                            ${a.is_correct ? 'âœ“ Acerto' : 'âœ• Erro'} · Alternativa <strong>${escapeHtml(a.answer)}</strong>
                          </span>
                          <span style="font-size:11px; color:var(--text-muted);">
                            ${formatDateTime(a.answered_at)}
                          </span>
                        </div>
                      `).join('')}
                    </div>
                  ` : `
                    <div style="font-size:12px; color:var(--text-muted); padding:10px 0;">
                      Nenhuma tentativa registrada anteriormente para esta questão.
                    </div>
                  `}
                </div>
              ` : ''}
            </div>
          `;
    })()}
      </div>
    `;
}

// A07: Sessão de Estudo / Questões
export function viewStudySession() {
  return viewQuestions();
}

// A08: Flashcards (Visão Geral de Baralhos)
export function viewFlashcards() {
  const decks = window.M2Data.flashcardDecks || [];
  const totalDue = decks.reduce((sum, d) => sum + (d.dueCards || 0), 0);

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A08 · Repetição Espaçada Inteligente</span>
            <h1 class="m2-page-title">Meus Baralhos de Flashcards</h1>
            <p class="m2-page-subtitle">Algoritmo FSRS/SM-2 calcula os intervalos exatos para fixação na memória de longo prazo.</p>
          </div>
          ${totalDue > 0 ? `
            <button type="button" class="m2-btn m2-btn-primary" data-nav="deck">
              ${icon('rotate-3d', 16)} Revisar ${totalDue} Cartões Vencidos
            </button>
          ` : ''}
        </div>

        ${decks.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('rotate-3d', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum baralho de flashcards cadastrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              Quando o mentor ou você criarem baralhos para os tópicos do edital, eles aparecerão aqui com os intervalos calculados pelo algoritmo FSRS/SM-2.
            </p>
          </div>
        ` : `
          <div class="m2-grid-2">
            ${decks.map(deck => {
    const deckTotalCards = (Array.isArray(deck.cards) && deck.cards.length > 0)
      ? deck.cards.length
      : (Number(deck.cards_count) || Number(deck.totalCards) || 0);

    return `
              <div class="m2-card">
                <div class="m2-card-header">
                  <span class="m2-pill ${deck.isShared ? 'm2-pill-teal' : 'm2-pill-violet'}">
                    ${deck.isShared ? `${icon('shield-check', 12)} Baralho do Mentor` : `${icon('user', 12)} Baralho Pessoal`}
                  </span>
                  <span style="font-size:12px; color:var(--text-muted);">${deckTotalCards} cartões</span>
                </div>
                <div>
                  <h2 style="font-size:18px; font-weight:700;">${escapeHtml(deck.title || deck.name || '')}</h2>
                  <span style="font-size:12px; color:var(--text-muted); display:block; margin-top:2px;">${escapeHtml(deck.subject || '')} · Criado por ${escapeHtml(deck.author || 'Mentor')}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:12px; background:var(--bg-card); padding:10px; border-radius:var(--radius-md);">
                  <div>
                    <span style="color:var(--accent-rose); font-weight:700; font-size:16px;">${deck.dueCards || deckTotalCards}</span>
                    <small style="display:block; color:var(--text-muted);">Para Revisar</small>
                  </div>
                  <div>
                    <span style="color:var(--accent-teal); font-weight:700; font-size:16px;">${deck.newCards || deckTotalCards}</span>
                    <small style="display:block; color:var(--text-muted);">Novos</small>
                  </div>
                  <div>
                    <span style="color:var(--accent-green); font-weight:700; font-size:16px;">${deck.retentionRate || 0}%</span>
                    <small style="display:block; color:var(--text-muted);">Retenção</small>
                  </div>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                  <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-nav="deck" data-id="${deck.id}" data-deck-id="${deck.id}">Estudar Baralho</button>
                </div>
              </div>
            `;
  }).join('')}
          </div>
        `}
      </div>
    `;
}

// A09: Estudo do Baralho (Frente / Verso / Avaliação)
export function viewDeck() {
  const decks = window.M2Data.flashcardDecks || [];
  const deck = decks.find(item => String(item.id) === String(state.activeDeckId)) || decks[0];
  if (!deck || !deck.cards || deck.cards.length === 0) {
    return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">A09 · Estudo de Flashcards</span>
              <h1 class="m2-page-title">Baralho Vazio</h1>
              <p class="m2-page-subtitle">Não há cartões disponíveis para revisão neste baralho.</p>
            </div>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="flashcards">Voltar aos Baralhos</button>
          </div>
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('rotate-3d', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum cartão cadastrado neste baralho</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Adicione cartões ao baralho para iniciar as sessões de repetição espaçada.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-nav="flashcards">Voltar aos Baralhos</button>
          </div>
        </div>
      `;
  }
  const card = deck.cards[state.currentCardIndex % deck.cards.length];
  const isRevealed = state.cardRevealed;

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A09 · ${deck.title}</span>
            <h1 class="m2-page-title">Cartão ${(state.currentCardIndex % deck.cards.length) + 1} de ${deck.cards.length}</h1>
            <p class="m2-page-subtitle">Pressione Barra de Espaço ou clique para revelar a resposta</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="flashcards">Voltar aos Baralhos</button>
        </div>

        <div class="m2-flashcard-box" data-action="reveal-card">
          <span class="m2-pill ${isRevealed ? 'm2-pill-teal' : 'm2-pill-gray'}">
            ${isRevealed ? 'Verso · Resposta' : 'Frente · Tente Lembrar'}
          </span>
          <div class="m2-flashcard-content">
            ${isRevealed ? card.back.replace(/\n/g, '<br>') : card.front}
          </div>
          ${card.tip && !isRevealed ? `
            <span style="font-size:12px; color:var(--text-dim); display:flex; align-items:center; gap:4px;">
              ${icon('info', 14)} Dica: ${card.tip}
            </span>
          ` : ''}
          ${!isRevealed ? `
            <button type="button" class="m2-btn m2-btn-primary" data-action="reveal-card" style="margin-top:16px;">
              ${icon('rotate-3d', 16)} Mostrar Resposta (Espaço)
            </button>
          ` : ''}
        </div>

        ${isRevealed ? `
          <div style="text-align:center; margin-top:20px;">
            <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Como foi sua lembrança?</p>
            <div class="m2-ratings-grid">
              <button type="button" class="m2-rating-btn again" data-action="rate-card" data-rate="Errei">
                <span>Errei</span>
                <small>10 min</small>
              </button>
              <button type="button" class="m2-rating-btn hard" data-action="rate-card" data-rate="Difícil">
                <span>Difícil</span>
                <small>1 dia</small>
              </button>
              <button type="button" class="m2-rating-btn good" data-action="rate-card" data-rate="Bom">
                <span>Bom</span>
                <small>3 dias</small>
              </button>
              <button type="button" class="m2-rating-btn easy" data-action="rate-card" data-rate="Fácil">
                <span>Fácil</span>
                <small>7 dias</small>
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
}

// A10: Revisões Periódicas
export function viewReviews() {
  const reviews = window.M2Data.reviews || [];
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A10 · Curva de Esquecimento</span>
            <h1 class="m2-page-title">Revisões Programadas</h1>
            <p class="m2-page-subtitle">Sincronizadas com o calendário em intervalos de 24h (D-1), 7 dias (D-7) e 30 dias (D-30).</p>
          </div>
        </div>

        ${reviews.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('calendar', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma revisão agendada no momento</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              Conforme você for estudando tópicos do edital e concluindo blocos, as revisões D-1, D-7 e D-30 serão agendadas automaticamente aqui.
            </p>
          </div>
        ` : `
          <div class="m2-card">
            <div class="m2-table-wrapper">
              <table class="m2-table">
                <thead>
                  <tr>
                    <th>Disciplina / Conteúdo</th>
                    <th>Etapa de Revisão</th>
                    <th>Data Alvo</th>
                    <th>Duração</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  ${reviews.map(rev => `
                    <tr>
                      <td>
                        <strong>${rev.subject}</strong>
                        <span style="display:block; font-size:11px; color:var(--text-muted);">${rev.topic}</span>
                      </td>
                      <td><span class="m2-pill m2-pill-violet">${rev.stage}</span></td>
                      <td>${rev.targetDate}</td>
                      <td>${rev.duration}</td>
                      <td>
                        ${rev.status === 'delayed' ? '<span class="m2-pill m2-pill-rose">Atrasada</span>' : rev.status === 'pending' ? '<span class="m2-pill m2-pill-amber">Para Hoje</span>' : '<span class="m2-pill m2-pill-gray">Agendada</span>'}
                      </td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="execute-review" data-id="${rev.id}">Revisar</button>
                          <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="complete-review" data-id="${rev.id}">Concluir</button>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      </div>
    `;
}

// A11: Simulados
export function viewMockExams() {
  const mocks = window.M2Data.mockExams || [];
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A11 · Testes de Desempenho Real</span>
            <h1 class="m2-page-title">Simulados Oficiais</h1>
            <p class="m2-page-subtitle">Provas cronometradas no mesmo estilo e peso da banca oficial.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary" data-action="open-manual-mock-modal">
            ${icon('plus', 16)} Lançar Simulado Feito Fora
          </button>
        </div>

        ${mocks.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('award', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum simulado disponível ainda</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Seus simulados agendados e cadastrados pelo mentor aparecerão aqui. Você também pode lançar notas de simulados realizados externamente.
            </p>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-manual-mock-modal">
              ${icon('plus', 16)} Lançar Simulado Feito Fora
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${mocks.map(mock => `
              <div class="m2-card">
                <div class="m2-card-header">
                  <div>
                    <h2 style="font-size:18px; font-weight:700;">${mock.title}</h2>
                    <span style="font-size:12px; color:var(--text-muted);">${mock.boardStyle} · ${mock.questionsCount} Questões · ${mock.timeLimitMinutes} minutos</span>
                  </div>
                  ${mock.status === 'completed' ? `<span class="m2-pill m2-pill-green">Nota: ${mock.score}% · ${mock.rank}</span>` : `<span class="m2-pill m2-pill-teal">Disponível</span>`}
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  ${mock.status === 'completed' ? `
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="mock-result" data-mock-id="${mock.id}">Ver Relatório de Desempenho</button>
                  ` : `
                    <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="start-mock" data-mock-id="${mock.id}">Iniciar Prova</button>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
}

// A11.5: Execução persistida do simulado
export function viewMockTaking() {
  const attempt = state.mockAttempt;
  const questions = Array.isArray(attempt?.questions) ? attempt.questions : [];
  if (!attempt || questions.length === 0) {
    return `<div class="m2-content"><div class="m2-card" style="text-align:center;padding:48px 24px;"><h1 class="m2-page-title">Nenhuma tentativa em andamento</h1><p class="m2-page-subtitle">Inicie um simulado para responder suas questões.</p><button type="button" class="m2-btn m2-btn-primary" data-nav="mock-exams">Ver simulados</button></div></div>`;
  }
  const index = Math.max(0, Math.min(state.mockQuestionIndex || 0, questions.length - 1));
  const question = questions[index];
  const saved = attempt.answers?.[question.id] || {};
  const selected = state.mockAnswerDrafts[question.id] || saved.answer || '';
  const alternatives = Array.isArray(question.alternatives) && question.alternatives.length ? question.alternatives : ['Certo', 'Errado'];
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const startedAt = new Date(attempt.started_at || 0).getTime();
  const elapsed = Math.max(Number(attempt.elapsed_seconds || 0), startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0);
  if (typeof window !== 'undefined') {
    if (state.mockTimerId) window.clearTimeout(state.mockTimerId);
    state.mockTimerId = window.setTimeout(() => {
      state.mockTimerId = null;
      if (state.screen === 'mock-taking' && state.mockAttempt?.id === attempt.id) render();
    }, 1000);
  }
  return `<div class="m2-content">
    <div class="m2-page-header"><div class="m2-page-title-group"><span class="m2-eyebrow">Simulado em andamento</span><h1 class="m2-page-title">Questão ${index + 1} de ${questions.length}</h1><p class="m2-page-subtitle">Respostas são salvas automaticamente ao confirmar.</p></div><div class="m2-pill m2-pill-teal">${formatTimer(elapsed)}</div></div>
    <div class="m2-question-card"><div class="m2-question-meta"><span class="m2-pill m2-pill-gray">${escapeHtml(question.subject || 'Geral')}</span>${question.topic ? `<span class="m2-pill m2-pill-gray">${escapeHtml(question.topic)}</span>` : ''}<span style="margin-left:auto;color:var(--text-muted);font-size:12px;">${Object.keys(attempt.answers || {}).length}/${questions.length} respondidas</span></div>
    <div class="m2-question-statement">${plainTextWithBreaks(question.prompt || '')}</div><div class="m2-options-list">${alternatives.map((alternative, optionIndex) => { const id = letters[optionIndex] || String(optionIndex + 1); return `<button type="button" class="m2-option-btn ${selected === id ? 'selected' : ''}" data-action="select-mock-option" data-question-id="${escapeHtml(question.id)}" data-option="${id}"><span class="m2-option-letter">${id}</span><span class="m2-option-text">${escapeHtml(typeof alternative === 'string' ? alternative : (alternative.text || ''))}</span></button>`; }).join('')}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;"><button type="button" class="m2-btn m2-btn-primary" data-action="save-mock-answer" data-question-id="${escapeHtml(question.id)}" ${selected ? '' : 'disabled'}>${icon('save', 16)} Salvar resposta</button>${index > 0 ? '<button type="button" class="m2-btn m2-btn-secondary" data-action="prev-mock-question">Voltar</button>' : ''}${index < questions.length - 1 ? '<button type="button" class="m2-btn m2-btn-secondary" data-action="next-mock-question">Próxima</button>' : '<button type="button" class="m2-btn m2-btn-secondary" data-action="finish-mock">Finalizar simulado</button>'}</div></div></div>`;
}
// A12: Resultado do Simulado
export function viewMockResult() {
  const mocks = window.M2Data.mockExams || [];
  const mock = mocks.find(item => String(item.id) === String(state.activeMockId)) || mocks[0];
  if (!mock) {
    return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">A12 · Relatório de Desempenho</span>
              <h1 class="m2-page-title">Nenhum Simulado Realizado</h1>
              <p class="m2-page-subtitle">Realize um simulado para visualizar o relatório detalhado de erros e acertos.</p>
            </div>
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="mock-exams">Voltar aos Simulados</button>
          </div>
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('award', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum resultado registrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Assim que concluir um simulado, seu relatório detalhado por disciplina e ranking será exibido aqui.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-nav="mock-exams">Ir para Simulados</button>
          </div>
        </div>
      `;
  }
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A12 · Relatório de Desempenho</span>
            <h1 class="m2-page-title">Resultado: ${mock.title}</h1>
            <p class="m2-page-subtitle">Realizado em ${mock.completedAt || 'Não informado'} · Classificação: ${mock.rank || '-'}</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary" data-nav="mock-exams">Voltar aos Simulados</button>
        </div>

        <div class="m2-grid-3">
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('trophy', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mock.score || 0}%</span>
              <span class="m2-stat-label">Aproveitamento Geral</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('award', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mock.rank || '-'}</span>
              <span class="m2-stat-label">Na Turma</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-amber-soft); color:var(--accent-amber);">${icon('clock', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mock.timeSpent || '0h 00m'}</span>
              <span class="m2-stat-label">Tempo Utilizado</span>
            </div>
          </div>
        </div>

        ${mock.officialMockId ? `<div class="m2-card" style="margin-bottom:16px;"><h2 class="m2-card-title">${icon('trophy', 18, 'text-teal')} Ranking deste simulado</h2><div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">${(mock.ranking || []).length ? mock.ranking.map(row => `<div style="display:grid;grid-template-columns:40px 1fr auto;gap:10px;align-items:center;padding:10px;border:1px solid var(--border-color);border-radius:8px;${row.is_user ? 'background:var(--accent-teal-soft);' : ''}"><strong>${Number(row.position)}?</strong><span>${escapeHtml(row.name || 'Aluno')}${row.is_user ? ' (voc?)' : ''}</span><small>${Number(row.percentage || 0)}% ? ${Number(row.time_minutes || 0)} min</small></div>`).join('') : '<p class="m2-empty-inline">O ranking ser? exibido quando houver resultados de alunos que aderiram ? listagem p?blica.</p>'}</div></div>` : ''}

        <div class="m2-card">
          <h2 class="m2-card-title">${icon('pie-chart', 18, 'text-teal')} Desempenho por Disciplina</h2>
          <div style="display:flex; flex-direction:column; gap:12px; margin-top:8px;">
            ${(mock.subjectBreakdown || []).map(sb => `
              <div>
                <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
                  <span><strong>${sb.subject}</strong> (${sb.correct} de ${sb.total} acertos)</span>
                  <strong style="color:${sb.pct >= 75 ? 'var(--accent-green)' : 'var(--accent-amber)'};">${sb.pct}%</strong>
                </div>
                <div class="m2-progress-track">
                  <div class="m2-progress-fill ${sb.pct >= 75 ? 'green' : 'amber'}" style="width:${sb.pct}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
}

// A13: Caderno de Erros
export function viewErrorNotebook() {
  const errors = window.M2Data.errorNotebook || [];
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A13 · Aprendizado Orientado ao Erro</span>
            <h1 class="m2-page-title">Meu Caderno de Erros</h1>
            <p class="m2-page-subtitle">Todas as questões que você errou ficam salvas aqui com sua justificativa pessoal para não cair na mesma pegadinha.</p>
          </div>
        </div>

        ${errors.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-green);">
              ${icon('circle-check', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum erro registrado no caderno</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Quando você responder questões nas sessões de estudo ou simulados e errar, as questões virão para cá automaticamente para que você possa categorizar o motivo e reestudá-las.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-nav="study-session">
              ${icon('circle-help', 16)} Praticar Questões
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${errors.map(err => `
              <div class="m2-card">
                <div class="m2-card-header">
                  <div>
                    <span class="m2-pill m2-pill-rose">${icon('alert-triangle', 12)} Motivo: ${err.errorCause || 'Não categorizado'}</span>
                    <strong style="font-size:15px; display:block; margin-top:6px;">${err.subject || ''} · ${err.topic || ''}</strong>
                  </div>
                  <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-nav="study-session">Refazer Questão</button>
                </div>
                ${err.personalNote ? `
                  <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); font-size:13px; line-height:1.5;">
                    <strong>Minha Anotação de Correção:</strong>
                    <p style="color:var(--text-muted); margin-top:4px;">${err.personalNote}</p>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
}

function renderNotebookPreview(value) {
  let html = escapeHtml(String(value || ''));

  html = html.replace(/\[mapa\]([\s\S]*?)\[\/mapa\]/gi, (_, map) => {
    const nodes = map.split(/\r?\n/).map(line => line.trim()).filter(Boolean)
      .map(line => '<li>' + line.replace(/^-\s*/, '') + '</li>').join('');
    return nodes ? '<div class="m2-note-map"><strong>Mapa mental</strong><ul>' + nodes + '</ul></div>' : '';
  });
  html = html.replace(/^###\s+(.+)$/gm, '<h4>$1</h4>')
    .replace(/^##\s+(.+)$/gm, '<h3>$1</h3>')
    .replace(/^#\s+(.+)$/gm, '<h2>$1</h2>')
    .replace(/^&gt;\s?(.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(Art\.\s*\d+[\w.°º-]*)/gi, '<span class="m2-legal-badge">$1</span>')
    .replace(/(\&sect;\s*\d+[\w.°º-]*)/gi, '<span class="m2-legal-badge">$1</span>')
    .replace(/(S[úu]mula\s+(?:Vinculante\s+)?\d+)/gi, '<span class="m2-legal-badge">$1</span>')
    .replace(/==(.+?)==/g, '<mark>$1</mark>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<u>$1</u>')
    .replace(/~~(.+?)~~/g, '<s>$1</s>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  return html.replace(/\n/g, '<br>');
}

function activeNotebook() {
  return (window.M2Data.notebooks || []).find(note => String(note.id) === String(state.activeNotebookId)) || null;
}

function safeNotebookColor(value) {
  return /^#(?:[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(String(value || '')) ? value : '#4f8ef7';
}

function notebookMeta(note) {
  return [note.edict_name, note.subject_name || note.subject, note.topic_name || note.topicLinked]
    .filter(Boolean).map(escapeHtml).join(' · ') || 'Geral';
}

// A14: Cadernos de Anotações
export function viewNotebooks() {
  const notes = window.M2Data.notebooks || [];
  const search = String(state.notebookSearch || '').trim().toLocaleLowerCase('pt-BR');
  const visible = notes.filter(note => !search || [note.title, note.folder, note.edict_name, note.subject_name, note.topic_name]
    .filter(Boolean).join(' ').toLocaleLowerCase('pt-BR').includes(search));
  const folders = visible.reduce((all, note) => {
    const folder = note.folder || 'Geral';
    (all[folder] ||= []).push(note);
    return all;
  }, {});

  return `
    <div class="m2-content">
      <div class="m2-page-header">
        <div class="m2-page-title-group">
          <span class="m2-eyebrow">A14 · Organização Pessoal</span>
          <h1 class="m2-page-title">Cadernos de Anotações</h1>
          <p class="m2-page-subtitle">Páginas organizadas por pasta, vinculadas ao edital e prontas para revisão.</p>
        </div>
        <button type="button" class="m2-btn m2-btn-primary" data-action="create-note">${icon('plus', 16)} Nova anotação</button>
      </div>

      <div class="m2-notebook-toolbar">
        <label class="m2-field-grow">Buscar páginas
          <input id="m2-notebook-search" value="${escapeHtml(state.notebookSearch || '')}" placeholder="Título, pasta, matéria ou tópico">
        </label>
        <span class="m2-note-count">${visible.length} ${visible.length === 1 ? 'página' : 'páginas'}</span>
      </div>

      ${visible.length === 0 ? `
        <div class="m2-card m2-empty-state">
          <div class="m2-empty-icon">${icon('notebook-pen', 24)}</div>
          <h3>${notes.length ? 'Nenhuma página encontrada' : 'Comece seu primeiro caderno'}</h3>
          <p>${notes.length ? 'Tente outra busca ou crie uma nova anotação.' : 'Crie resumos, jurisprudência e mapas mentais ligados ao seu edital.'}</p>
          <button type="button" class="m2-btn m2-btn-primary" data-action="create-note">${icon('plus', 16)} Criar anotação</button>
        </div>
      ` : `
        <div class="m2-notebook-folders">
          ${Object.entries(folders).map(([folder, folderNotes]) => `
            <section class="m2-notebook-folder">
              <div class="m2-notebook-folder-title">${icon('folder', 16)} <strong>${escapeHtml(folder)}</strong><span>${folderNotes.length}</span></div>
              <div class="m2-notebook-grid">
                ${folderNotes.map(note => `
                  <button type="button" class="m2-note-card" data-action="open-notebook" data-note-id="${escapeHtml(note.id)}" style="--note-color:${safeNotebookColor(note.color)}">
                    <span class="m2-note-card-color"></span>
                    <span class="m2-note-card-main">
                      <strong>${escapeHtml(note.title || 'Sem título')}</strong>
                      <small>${notebookMeta(note)}</small>
                    </span>
                    ${note.shared_with_mentor || note.sharedWithMentor ? '<span class="m2-pill m2-pill-teal">Mentor</span>' : '<span class="m2-pill m2-pill-gray">Privada</span>'}
                  </button>
                `).join('')}
              </div>
            </section>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

// A15: Editor de Anotação
export function viewNoteEditor() {
  const note = activeNotebook();
  const subjects = window.M2Data.subjects || [];
  const topics = window.M2Data.topics || [];
  const edicts = window.M2Data.edicts || [];
  const preview = state.notePreviewVisible;
  const title = state.noteTitle || note?.title || 'Nova anotação';
  const folder = state.noteFolder || note?.folder || 'Geral';
  const color = state.noteColor || note?.color || '#4f8ef7';
  const content = state.noteContent || '';
  const selectedSubject = state.noteSubjectId || note?.subject_id || '';
  const selectedTopic = state.noteTopicId || note?.topic_id || '';
  const selectedEdict = state.noteEdictId || note?.edict_id || '';

  return `
    <div class="m2-content">
      <div class="m2-page-header">
        <div class="m2-page-title-group">
          <span class="m2-eyebrow">A15 · Caderno inteligente</span>
          <h1 class="m2-page-title">${escapeHtml(title)}</h1>
          <p class="m2-page-subtitle">Autosave, formatação segura e vínculo pedagógico sem sair da sua rotina.</p>
        </div>
        <div class="m2-note-actions">
          <span id="m2-note-save-status" class="m2-save-status">${escapeHtml(state.noteSaveStatus)}</span>
          <button type="button" class="m2-btn m2-btn-secondary" data-action="toggle-note-preview">${icon('eye', 16)} ${preview ? 'Editar' : 'Visualizar'}</button>
          <button type="button" class="m2-btn m2-btn-secondary" data-action="toggle-mentor-share">${icon('share-2', 16)} ${state.noteSharedWithMentor ? 'Compartilhada' : 'Compartilhar'}</button>
          <button type="button" class="m2-btn m2-btn-primary" data-action="save-note">${icon('check', 16)} Salvar</button>
        </div>
      </div>

      <div class="m2-note-meta-grid">
        <label>Título<input id="m2-note-title" maxlength="255" value="${escapeHtml(title)}" placeholder="Ex.: Prisão em flagrante"></label>
        <label>Pasta<input id="m2-note-folder" maxlength="255" value="${escapeHtml(folder)}" placeholder="Ex.: Direito Penal"></label>
        <label>Cor<input id="m2-note-color" type="color" value="${escapeHtml(color)}"></label>
        <label>Edital<select id="m2-note-edict"><option value="">Sem vínculo</option>${edicts.map(edict => `<option value="${escapeHtml(edict.id)}" ${String(edict.id) === String(selectedEdict) ? 'selected' : ''}>${escapeHtml(edict.name || edict.contest_name || 'Edital')}</option>`).join('')}</select></label>
        <label>Matéria<select id="m2-note-subject"><option value="">Sem vínculo</option>${subjects.map(subject => `<option value="${escapeHtml(subject.id)}" ${String(subject.id) === String(selectedSubject) ? 'selected' : ''}>${escapeHtml(subject.name)}</option>`).join('')}</select></label>
        <label>Tópico<select id="m2-note-topic"><option value="">Sem vínculo</option>${topics.map(topic => `<option value="${escapeHtml(topic.id)}" ${String(topic.id) === String(selectedTopic) ? 'selected' : ''}>${escapeHtml(topic.name)}</option>`).join('')}</select></label>
      </div>

      <div class="m2-note-editor-card">
        <div class="m2-note-formatbar" aria-label="Ferramentas de formatação">
          <button type="button" data-action="note-format" data-format="bold"><strong>B</strong></button>
          <button type="button" data-action="note-format" data-format="italic"><em>I</em></button>
          <button type="button" data-action="note-format" data-format="highlight">Destaque</button>
          <button type="button" data-action="note-format" data-format="heading">Título</button>
          <button type="button" data-action="note-format" data-format="quote">Citação</button>
          <button type="button" data-action="note-format" data-format="legal">Artigo</button>
          <button type="button" data-action="note-format" data-format="map">Mapa mental</button>
        </div>
        ${preview ? `<article class="m2-note-preview">${renderNotebookPreview(content) || '<p>Sem conteúdo para visualizar.</p>'}</article>` : `
          <textarea id="m2-note-textarea" placeholder="Escreva seu resumo. Use os atalhos acima para estruturar o texto.">${escapeHtml(content)}</textarea>
          <p class="m2-note-help">Destaque: <code>==trecho==</code> · Mapa: <code>[mapa]</code>, um item por linha, <code>[/mapa]</code>.</p>
        `}
      </div>
    </div>
  `;
}
export function viewMaterials() {
  const materials = window.M2Data.materials || [];
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A19 · Biblioteca Didática</span>
            <h1 class="m2-page-title">Materiais & PDFs do Edital</h1>
            <p class="m2-page-subtitle">Apostilas, esquemas e leis sintetizadas fornecidas pelo mentor e equipe Getfy.</p>
          </div>
        </div>

        ${materials.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-rose);">
              ${icon('file-text', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum material disponível para download</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              Quando o mentor anexar PDFs, mapas mentais e materiais complementares às disciplinas, eles aparecerão organizados aqui.
            </p>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${materials.map(m => `
              <div class="m2-card" style="flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:14px;">
                  <div style="width:40px; height:40px; border-radius:var(--radius-md); background:var(--accent-rose-soft); color:var(--accent-rose); display:grid; place-items:center;">
                    ${icon('file-text', 20)}
                  </div>
                  <div>
                    <strong>${m.title}</strong>
                    <span style="display:block; font-size:12px; color:var(--text-muted);">${m.topic || ''} · ${m.size || ''} · ${m.pages || 0} páginas</span>
                  </div>
                </div>
                <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="download-material">
                  ${icon('download', 14)} Baixar Arquivo
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
}

// A20: Cursos Getfy
export function viewCourses() {
  const courses = window.M2Data.courses || [];
  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A20 · Área de Membros Integrada</span>
            <h1 class="m2-page-title">Meus Cursos Getfy</h1>
            <p class="m2-page-subtitle">Aulas em vídeo integradas ao cronograma da Mentoria 2.0.</p>
          </div>
        </div>

        ${courses.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('video', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum curso Getfy vinculado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              Os cursos em vídeo cadastrados na sua conta Getfy aparecerão aqui sincronizados com as disciplinas do seu edital.
            </p>
          </div>
        ` : `
          <div class="m2-grid-2">
            ${courses.map(c => `
              <div class="m2-card">
                <h2 style="font-size:18px; font-weight:700;">${c.title}</h2>
                <span style="font-size:12px; color:var(--text-muted);">${c.teacher || 'Getfy'} · ${c.completedLessons || 0} de ${c.totalLessons || 0} aulas concluídas</span>
                <div class="m2-progress-track" style="margin-top:12px;">
                  <div class="m2-progress-fill" style="width:${c.progressPct || 0}%;"></div>
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:16px;">
                  <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="open-getfy-lesson">Assistir Aulas</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
}

export function viewRedacao() {
  const essay = window.M2Data.essayData;
  const theme = essay ? essay.currentTheme : null;
  const result = state.essayCorrectionResult;
  const draft = state.essayDraftText || '';
  const wordsCount = draft.trim().split(/\s+/).filter(Boolean).length;
  const linesCount = Math.max(1, draft.split('\n').filter(Boolean).length);

  if (!essay || !theme) {
    return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">A24 · Prática Discursiva & Produção Textual</span>
              <h1 class="m2-page-title">Oficina de Redação com IA</h1>
              <p class="m2-page-subtitle">Pratique redações temáticas no padrão da banca examinadora e receba correção detalhada por competências em segundos.</p>
            </div>
          </div>
          <div class="m2-card" style="text-align:center; padding:48px 16px;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--bg-card); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-teal);">
              ${icon('file-text', 28)}
            </div>
            <h3 style="font-size:18px; font-weight:700; color:var(--text-main);">Nenhum tema de redação ativo no momento</h3>
            <p style="font-size:13px; color:var(--text-muted); max-width:440px; margin:8px auto 20px;">
              Assim que o mentor cadastrar propostas temáticas para o seu concurso, você poderá redigir seu texto e receber correções analíticas automáticas pela IA.
            </p>
          </div>
        </div>
      `;
  }

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A24 · Prática Discursiva & Produção Textual</span>
            <h1 class="m2-page-title">Oficina de Redação com IA</h1>
            <p class="m2-page-subtitle">Pratique redações temáticas no padrão da banca examinadora e receba correção detalhada por competências em segundos.</p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="m2-pill m2-pill-amber">${theme.board || 'Banca'}</span>
            <span class="m2-pill m2-pill-teal">Prazo: ${theme.deadline || 'Aberto'}</span>
          </div>
        </div>

        <!-- Banner da Proposta Temática -->
        <div class="m2-card" style="border-left:4px solid var(--accent-teal); margin-bottom:16px;">
          <div class="m2-card-header">
            <div>
              <span style="font-size:11px; font-weight:700; text-transform:uppercase; color:var(--accent-teal); letter-spacing:0.5px;">Tema Oficial da Rodada</span>
              <h2 style="font-size:18px; font-weight:700; color:var(--text-main); margin-top:4px;">${theme.title}</h2>
              <span style="font-size:12px; color:var(--text-muted);">Gênero: ${theme.genre || 'Dissertativo-Argumentativo'} · Extensão esperada: ${theme.expectedLines || '20 a 30 linhas'}</span>
            </div>
            <span class="m2-pill m2-pill-gray">Peso 2 no Concurso</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
            <span style="font-size:12px; font-weight:600; color:var(--text-main);">Textos Motivadores:</span>
            ${(theme.motivatingTexts || []).map((txt, idx) => `
              <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); font-size:12px; color:var(--text-muted); line-height:1.6;">
                ${txt}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Área de Redação & Painel de Correção -->
        <div class="m2-grid-split">
          <!-- Editor de Texto da Aluna -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('pen-tool', 18, 'text-teal')} Folha de Resposta Digital</span>
              <div style="display:flex; align-items:center; gap:8px; font-size:12px; color:var(--text-muted);">
                <span id="m2-essay-word-count"><strong>${wordsCount}</strong> palavras</span>
                <span>·</span>
                <span id="m2-essay-line-count"><strong>${linesCount}</strong> linhas</span>
              </div>
            </div>

            <textarea id="m2-essay-editor" class="m2-essay-textarea" placeholder="Comece aqui a introdução da sua redação..." rows="12">${draft}</textarea>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; flex-wrap:wrap; gap:10px;">
              <span style="font-size:11px; color:var(--text-muted);">Dica: Estruture em 4 parágrafos (Introdução, 2 Desenvolvimentos e Conclusão).</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="save-essay-draft">
                  ${icon('bookmark', 14)} Salvar Rascunho
                </button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-essay-correction" ${state.essayAnalyzing ? 'disabled' : ''}>
                  ${icon(state.essayAnalyzing ? 'refresh-cw' : 'sparkles', 16, state.essayAnalyzing ? 'm2-spin' : '')} 
                  ${state.essayAnalyzing ? 'Enviando redação...' : 'Enviar para correção'}
                </button>
              </div>
            </div>
          </div>

          <!-- Dossiê de Correção da IA -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('sparkles', 18, 'text-teal')} Avaliação Analítica por Competências</span>
              <span class="m2-pill ${result ? 'm2-pill-green' : 'm2-pill-teal'}">
                ${result ? `Nota: ${result.score}/100` : 'Aguardando Envio'}
              </span>
            </div>

            ${result ? `
              <div style="display:flex; align-items:center; justify-content:space-between; background:linear-gradient(135deg, rgba(10, 181, 189, 0.15), rgba(16, 185, 129, 0.1)); padding:16px; border-radius:var(--radius-lg); border:1px solid rgba(10, 181, 189, 0.3);">
                <div>
                  <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:var(--accent-teal); font-weight:700;">Diagnóstico Final da IA</span>
                  <h3 style="font-size:22px; font-weight:800; color:var(--accent-green); margin:2px 0;">${result.score} Pontos · ${result.status}</h3>
                  <span style="font-size:12px; color:var(--text-muted);">${result.wordsCount} palavras · ${result.linesCount} linhas escritas</span>
                </div>
                <div style="width:48px; height:48px; border-radius:50%; background:var(--accent-green-soft); color:var(--accent-green); display:grid; place-items:center; font-size:20px;">
                  ${icon('check-circle', 28)}
                </div>
              </div>

              <!-- Competências de Avaliação -->
              <div style="display:flex; flex-direction:column; gap:10px; margin-top:14px;">
                ${(result.criteria || []).map(crit => `
                  <div class="m2-essay-criteria-item">
                    <div style="display:flex; justify-content:space-between; font-size:12px;">
                      <strong>${crit.name}</strong>
                      <span style="color:var(--accent-teal); font-weight:700;">${crit.score} / ${crit.max}</span>
                    </div>
                    <div class="m2-progress-track">
                      <div class="m2-progress-fill" style="width:${(crit.score / crit.max) * 100}%;"></div>
                    </div>
                    <span style="font-size:11px; color:var(--text-muted);">${crit.feedback}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Parecer do Tutor IA -->
              <div style="background:var(--bg-card); padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-top:14px;">
                <span style="font-size:12px; font-weight:700; color:var(--accent-teal); display:flex; align-items:center; gap:6px;">
                  ${icon('bot', 16)} Parecer Pedagógico do Tutor IA:
                </span>
                <p style="font-size:12px; color:var(--text-main); line-height:1.6; margin-top:4px;">
                  ${result.aiFeedback}
                </p>
              </div>
            ` : `
              <div style="text-align:center; padding:48px 16px; color:var(--text-muted);">
                <div style="width:54px; height:54px; border-radius:50%; background:var(--bg-card); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
                  ${icon('file-text', 26)}
                </div>
                <h4 style="font-size:16px; font-weight:700; color:var(--text-main);">Nenhuma correção gerada ainda</h4>
                <p style="font-size:12px; max-width:320px; margin:6px auto 0;">
                  Escreva seu texto no editor ao lado e clique em <strong>"Corrigir Redação com IA"</strong> para receber a nota e o espelho por competências.
                </p>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
}

// Item 8: Memória de Longo Prazo da IA (Dossiê Cognitivo)

