import { state, icon, escapeHtml, plainTextWithBreaks, formatTimer, render } from './core.js?v=531b8a943e83';

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
  if (state.questionBoardFilter && state.questionBoardFilter !== 'all') {
    questions = questions.filter(q => (q.board || '').toLowerCase() === state.questionBoardFilter.toLowerCase());
  }
  if (state.questionFormatFilter && state.questionFormatFilter !== 'all') {
    if (state.questionFormatFilter === 'certo_errado') {
      questions = questions.filter(q => q.type === 'certo_errado' || (Array.isArray(q.alternatives) && q.alternatives.length === 2));
    } else if (state.questionFormatFilter === '4') {
      questions = questions.filter(q => Array.isArray(q.alternatives) && q.alternatives.length === 4);
    } else if (state.questionFormatFilter === '5') {
      questions = questions.filter(q => Array.isArray(q.alternatives) && q.alternatives.length === 5);
    }
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
            <span class="m2-eyebrow">Prática e Fixação</span>
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
  const availableBoards = [...new Set(
    (window.M2Data.available_boards || []).concat(allSubjectQuestions.map(q => q.board).filter(Boolean))
  )].filter(Boolean).sort();
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

          <!-- Centro: Filtros Compactos Inline (Assunto, Banca, Formato, Situação) -->
          <div class="m2-study-toolbar__filters">
            <select class="m2-study-select-sm" data-action="change-topic-filter" title="Filtrar por assunto" style="max-width:200px;">
              <option value="all" ${state.selectedTopicId === 'all' ? 'selected' : ''}>
                Todos os Assuntos (${allSubjectQuestions.length})
              </option>
              ${subject.topics.map(t => `
                <option value="${t.id}" ${state.selectedTopicId === t.id ? 'selected' : ''}>
                  ${t.name} (${t.count || t.questionsCount || 0})
                </option>
              `).join('')}
            </select>

            <select class="m2-study-select-sm" data-action="change-board-filter" title="Filtrar por banca examinadora" style="max-width:140px;">
              <option value="all" ${!state.questionBoardFilter || state.questionBoardFilter === 'all' ? 'selected' : ''}>Banca: Todas</option>
              ${availableBoards.map(b => `
                <option value="${escapeHtml(b)}" ${state.questionBoardFilter === b ? 'selected' : ''}>${escapeHtml(b)}</option>
              `).join('')}
            </select>

            <select class="m2-study-select-sm" data-action="change-format-filter" title="Filtrar por formato de alternativas" style="max-width:140px;">
              <option value="all" ${!state.questionFormatFilter || state.questionFormatFilter === 'all' ? 'selected' : ''}>Formato: Todos</option>
              <option value="certo_errado" ${state.questionFormatFilter === 'certo_errado' ? 'selected' : ''}>Certo / Errado</option>
              <option value="4" ${state.questionFormatFilter === '4' ? 'selected' : ''}>4 Alternativas</option>
              <option value="5" ${state.questionFormatFilter === '5' ? 'selected' : ''}>5 Alternativas</option>
            </select>

            <select class="m2-study-select-sm" data-action="filter-question-status" title="Filtrar por situação" style="max-width:140px;">
              <option value="all" ${state.questionStatusFilter === 'all' ? 'selected' : ''}>Situação: Todas</option>
              <option value="not_answered" ${state.questionStatusFilter === 'not_answered' ? 'selected' : ''}>Não resolvidas</option>
              <option value="wrong" ${state.questionStatusFilter === 'wrong' ? 'selected' : ''}>Somente erros</option>
              <option value="correct" ${state.questionStatusFilter === 'correct' ? 'selected' : ''}>Somente acertos</option>
            </select>
          </div>

          <!-- Direita: Contador de Questões (Sem timer, foco total no conteúdo) -->
          <div class="m2-study-toolbar__group" style="margin-left:auto;">
            <span style="font-size:12px; font-weight:600; color:var(--text-muted); white-space:nowrap;">
              ${filteredQuestions.length} questão(ões)
            </span>
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
            <span class="m2-eyebrow">Repetição Espaçada Inteligente</span>
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
              <span class="m2-eyebrow">Estudo de Flashcards</span>
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
            <span class="m2-eyebrow">${deck.title}</span>
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
  const allReviews = window.M2Data.reviews || [];
  const reviews = allReviews.filter(r => !r.contestId || !state.contestId || String(r.contestId) === String(state.contestId));

  const activeContest = (window.M2Data.contests || []).find(c => String(c.id) === String(state.contestId)) || window.M2Data.contests?.[0];
  const rawIntervals = (activeContest?.reviewIntervals || '1,7,30').split(',').map(s => s.trim()).filter(Boolean);
  const intervalsDesc = rawIntervals.map(days => `D-${days} (${days === '1' ? '24h' : `${days} dias`})`).join(', ').replace(/, ([^,]*)$/, ' e $1');

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Curva de Esquecimento</span>
            <h1 class="m2-page-title">Revisões Programadas</h1>
            <p class="m2-page-subtitle">Sincronizadas com o calendário conforme a política deste concurso: <strong>${escapeHtml(intervalsDesc || 'D-1, D-7 e D-30')}</strong>.</p>
          </div>
        </div>

        ${reviews.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('calendar', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma revisão agendada no momento</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:480px; line-height:1.5;">
              Conforme você estuda tópicos do edital e conclui blocos, as revisões periódicas (${escapeHtml(intervalsDesc || 'D-1, D-7 e D-30')}) serão agendadas automaticamente aqui e no seu calendário de estudos.
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
                        <strong>${escapeHtml(rev.subject || 'Disciplina')}</strong>
                        <span style="display:block; font-size:11px; color:var(--text-muted);">${escapeHtml(rev.topic || 'Tópico do Edital')}</span>
                      </td>
                      <td><span class="m2-pill m2-pill-violet">${escapeHtml(rev.stage)}</span></td>
                      <td>${escapeHtml(rev.targetDate)}</td>
                      <td>${escapeHtml(rev.duration)}</td>
                      <td>
                        ${rev.status === 'completed'
                          ? '<span class="m2-pill m2-pill-teal">✓ Concluída</span>'
                          : rev.status === 'delayed'
                            ? '<span class="m2-pill m2-pill-rose">Atrasada</span>'
                            : rev.status === 'pending'
                              ? '<span class="m2-pill m2-pill-amber">Para Hoje</span>'
                              : '<span class="m2-pill m2-pill-gray">Agendada</span>'}
                      </td>
                      <td>
                        <div style="display:flex; gap:6px;">
                          ${rev.status !== 'completed' ? `
                            <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="execute-review" data-id="${escapeHtml(rev.id)}">Revisar</button>
                            <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="complete-review" data-id="${escapeHtml(rev.id)}">Concluir</button>
                          ` : `
                            <span style="font-size:12px; color:var(--text-muted);">Concluída</span>
                          `}
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
            <span class="m2-eyebrow">Testes de Desempenho Real</span>
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
            ${mocks.map(mock => {
              const metaParts = [
                mock.boardStyle,
                mock.questionsCount ? `${mock.questionsCount} Questões` : null,
                mock.timeLimitMinutes ? `${mock.timeLimitMinutes} minutos` : null
              ].filter(Boolean);
              const metaText = metaParts.length > 0 ? metaParts.join(' · ') : 'Simulado Oficial';
              const completedBadgeParts = [
                mock.score !== undefined && mock.score !== null ? `Nota: ${mock.score}%` : null,
                mock.rank ? String(mock.rank) : null
              ].filter(Boolean);
              const completedBadgeText = completedBadgeParts.length > 0 ? completedBadgeParts.join(' · ') : 'Concluído';

              return `
              <div class="m2-card">
                <div class="m2-card-header">
                  <div>
                    <h2 style="font-size:18px; font-weight:700;">${escapeHtml(mock.title || 'Simulado')}</h2>
                    <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(metaText)}</span>
                  </div>
                  ${mock.status === 'completed' ? `<span class="m2-pill m2-pill-green">${escapeHtml(completedBadgeText)}</span>` : `<span class="m2-pill m2-pill-teal">Disponível</span>`}
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  ${mock.status === 'completed' ? `
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="mock-result" data-mock-id="${mock.id}">Ver Relatório de Desempenho</button>
                  ` : `
                    <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="start-mock" data-mock-id="${mock.id}">Iniciar Prova</button>
                  `}
                </div>
              </div>
            `;}).join('')}
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
              <span class="m2-eyebrow">Relatório de Desempenho</span>
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
            <span class="m2-eyebrow">Relatório de Desempenho</span>
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

function normalizeQuestionAlternatives(alts) {
  if (!alts) return [];
  if (typeof alts === 'string') {
    try { alts = JSON.parse(alts); } catch (_) { return []; }
  }
  const letters = ['A', 'B', 'C', 'D', 'E'];
  if (Array.isArray(alts)) {
    return alts.map((item, idx) => {
      const letter = letters[idx] || String(idx + 1);
      if (typeof item === 'string') return { id: letter, text: item };
      return { id: item.id || item.letter || letter, text: item.text || item.label || item.value || '' };
    });
  }
  if (typeof alts === 'object' && alts !== null) {
    return Object.entries(alts).map(([key, val]) => ({
      id: String(key).trim().toUpperCase(),
      text: typeof val === 'string' ? val : (val?.text || '')
    }));
  }
  return [];
}

// A13: Caderno de Erros
export function viewErrorNotebook() {
  const allErrors = window.M2Data.errorNotebook || [];
  const errors = allErrors.filter(err => !err.contestId || !state.contestId || String(err.contestId) === String(state.contestId));

  return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Aprendizado Orientado ao Erro</span>
            <h1 class="m2-page-title">Meu Caderno de Erros</h1>
            <p class="m2-page-subtitle">Revise todas as questões em que você errou, comparando a alternativa marcada com o gabarito oficial.</p>
          </div>
          ${errors.length > 0 ? `
            <div class="m2-pill m2-pill-rose" style="font-weight:700; padding:6px 14px; font-size:12px;">
              ${icon('alert-triangle', 14)} ${errors.length} ${errors.length === 1 ? 'questão errada' : 'questões erradas'}
            </div>
          ` : ''}
        </div>

        ${errors.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('circle-check', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum erro registrado no caderno</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Quando você responder questões nas sessões de estudo ou simulados e errar, as questões virão para cá automaticamente para que você possa reestudá-las.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-nav="study-session">
              ${icon('circle-help', 16)} Praticar Questões
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${errors.map((err, index) => {
              const dateStr = err.answeredAt ? new Date(err.answeredAt).toLocaleDateString('pt-BR') : '';
              const alts = normalizeQuestionAlternatives(err.alternatives);
              const studentLetter = String(err.studentAnswer || '').trim().toUpperCase();
              const correctLetter = String(err.correctAnswer || '').trim().toUpperCase();

              // Buscar o texto de cada uma
              const studentAlt = alts.find(a => a.id === studentLetter) || { id: studentLetter, text: `Alternativa ${studentLetter}` };
              const correctAlt = alts.find(a => a.id === correctLetter) || { id: correctLetter, text: `Alternativa ${correctLetter}` };

              return `
              <div class="m2-card" style="border:1px solid var(--border-color); padding:20px;">
                <div class="m2-card-header" style="margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
                  <div>
                    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
                      <span class="m2-pill m2-pill-rose" style="font-size:11px; font-weight:700;">
                        ${icon('alert-triangle', 12)} Erro #${index + 1} ${dateStr ? `· ${dateStr}` : ''}
                      </span>
                      ${err.board ? `<span class="m2-pill m2-pill-gray" style="font-size:11px;">Banca: ${escapeHtml(err.board)}</span>` : ''}
                      ${err.difficulty ? `<span class="m2-pill m2-pill-gray" style="font-size:11px;">Nível: ${escapeHtml(err.difficulty)}</span>` : ''}
                    </div>
                    <strong style="font-size:15px; color:var(--text-main); display:block;">
                      ${escapeHtml(err.subject || 'Disciplina')} · <span style="font-weight:400; color:var(--text-muted);">${escapeHtml(err.topic || 'Tópico')}</span>
                    </strong>
                  </div>
                  <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-nav="study-session" style="white-space:nowrap;">
                    ${icon('refresh-cw', 13)} Praticar Novamente
                  </button>
                </div>

                <!-- Enunciado da Questão -->
                <div style="background:var(--bg-surface); padding:16px; border-radius:var(--radius-md); font-size:13px; line-height:1.6; color:var(--text-main); margin-bottom:14px; border:1px solid var(--border-color);">
                  ${plainTextWithBreaks(err.prompt)}
                </div>

                <!-- Comparativo Destacado: Alternativa Errada Escolhida vs Alternativa Correta -->
                <div class="m2-error-comparison-grid">
                  <!-- Alternativa Errada Escolhida -->
                  <div class="m2-error-choice-card wrong">
                    <div class="m2-error-choice-header">
                      <span class="m2-error-choice-badge wrong">
                        ${icon('x-circle', 14)} Sua Resposta (Incorreta)
                      </span>
                      <span class="m2-error-choice-letter">Letra ${escapeHtml(studentLetter || '?')}</span>
                    </div>
                    <div class="m2-error-choice-text">
                      ${escapeHtml(studentAlt.text || 'Opção selecionada no momento da resolução')}
                    </div>
                  </div>

                  <!-- Alternativa Correta Oficial -->
                  <div class="m2-error-choice-card correct">
                    <div class="m2-error-choice-header">
                      <span class="m2-error-choice-badge correct">
                        ${icon('check-circle', 14)} Gabarito Oficial (Correta)
                      </span>
                      <span class="m2-error-choice-letter">Letra ${escapeHtml(correctLetter || '?')}</span>
                    </div>
                    <div class="m2-error-choice-text">
                      ${escapeHtml(correctAlt.text || 'Gabarito oficial indicado pela banca examinadora')}
                    </div>
                  </div>
                </div>

                <!-- Comentário do Professor -->
                ${err.explanation ? `
                  <div style="background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); font-size:13px; line-height:1.6; border-left:4px solid var(--accent-teal); margin-top:14px; border:1px solid var(--border-color);">
                    <div style="display:flex; align-items:center; gap:6px; color:var(--accent-teal); font-weight:700; margin-bottom:4px;">
                      ${icon('sparkles', 15)} Comentário e Justificativa do Gabarito:
                    </div>
                    <p style="color:var(--text-main); margin:0;">${plainTextWithBreaks(err.explanation)}</p>
                  </div>
                ` : ''}
              </div>
            `;
            }).join('')}
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
          <span class="m2-eyebrow">Organização Pessoal</span>
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

  // Preparar conteúdo inicial para a folha Word
  let initialHtml = content;
  if (!initialHtml) {
    initialHtml = '<p><br></p>';
  } else if (!initialHtml.includes('<p>') && !initialHtml.includes('<div>') && !initialHtml.includes('<h')) {
    initialHtml = renderNotebookPreview(initialHtml);
  }

  // Contagem inicial de palavras
  const plainText = content.replace(/<[^>]+>/g, ' ').trim();
  const wordCount = plainText ? plainText.split(/\s+/).filter(Boolean).length : 0;
  const charCount = plainText.length;

  return `
    <div class="m2-content">
      <!-- Cabeçalho do Editor em Linha Única (Ultra Compacto) -->
      <div class="m2-note-single-header">
        <div class="m2-note-sh-left">
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="notebooks" title="Voltar para a lista">
            ${icon('arrow-left', 14)} Voltar
          </button>
          <div class="m2-note-sh-divider"></div>
          <input id="m2-note-title" class="m2-note-sh-title" maxlength="255" value="${escapeHtml(title)}" placeholder="Título do documento..." title="Clique para editar o título">
          <span id="m2-note-save-status" class="m2-note-sh-status">${escapeHtml(state.noteSaveStatus || 'Salvo')}</span>
        </div>

        <div class="m2-note-sh-center">
          <div class="m2-note-sh-meta" title="Pasta">
            ${icon('folder', 13)}
            <input id="m2-note-folder" maxlength="60" value="${escapeHtml(folder)}" placeholder="Pasta...">
          </div>
          <div class="m2-note-sh-meta" title="Disciplina vinculada">
            <select id="m2-note-subject">
              <option value="">Sem disciplina</option>
              ${subjects.map(subject => `<option value="${escapeHtml(subject.id)}" ${String(subject.id) === String(selectedSubject) ? 'selected' : ''}>${escapeHtml(subject.name)}</option>`).join('')}
            </select>
          </div>
          <div class="m2-note-sh-meta" title="Tópico do edital">
            <select id="m2-note-topic">
              <option value="">Sem tópico</option>
              ${topics.map(topic => `<option value="${escapeHtml(topic.id)}" ${String(topic.id) === String(selectedTopic) ? 'selected' : ''}>${escapeHtml(topic.name)}</option>`).join('')}
            </select>
          </div>
          <select id="m2-note-edict" style="display:none;">
            <option value="">Sem vínculo</option>
            ${edicts.map(edict => `<option value="${escapeHtml(edict.id)}" ${String(edict.id) === String(selectedEdict) ? 'selected' : ''}>${escapeHtml(edict.name || edict.contest_name || 'Edital')}</option>`).join('')}
          </select>
          <input id="m2-note-color" type="color" value="${escapeHtml(color)}" class="m2-note-sh-color" title="Cor da etiqueta">
        </div>

        <div class="m2-note-sh-right">
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="toggle-mentor-share" title="Compartilhar com o mentor para feedback">
            ${icon('share-2', 13)} ${state.noteSharedWithMentor ? 'Compartilhada' : 'Compartilhar'}
          </button>
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="print-note" title="Imprimir ou exportar documento em PDF">
            ${icon('printer', 13)} Imprimir
          </button>
          <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="save-note">
            ${icon('check', 14)} Salvar
          </button>
        </div>
      </div>

      <!-- Estrutura do Editor Word com Ribbon Toolbar -->
      <div class="m2-word-editor-container">
        <!-- Ribbon Toolbar (Faixa de Opções Word) -->
        <div class="m2-word-ribbon" role="toolbar" aria-label="Ferramentas de formatação Word">
          <!-- Histórico & Estilos -->
          <div class="m2-word-ribbon-group">
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="undo" title="Desfazer (Ctrl+Z)">${icon('rotate-ccw', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="redo" title="Refazer (Ctrl+Y)">${icon('rotate-cw', 15)}</button>
          </div>

          <!-- Estilo de Parágrafo -->
          <div class="m2-word-ribbon-group">
            <select class="m2-word-select" data-action="word-format-block" title="Estilo de Título">
              <option value="p">Texto Normal</option>
              <option value="h1">Título 1 (Principal)</option>
              <option value="h2">Título 2 (Seção)</option>
              <option value="h3">Título 3 (Subseção)</option>
              <option value="blockquote">Citação / Doutrina</option>
            </select>
          </div>

          <!-- Formatação Básica -->
          <div class="m2-word-ribbon-group">
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="bold" title="Negrito (Ctrl+B)"><strong>B</strong></button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="italic" title="Itálico (Ctrl+I)"><em>I</em></button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="underline" title="Sublinhado (Ctrl+U)"><span style="text-decoration:underline;">U</span></button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="strikeThrough" title="Tachado"><span style="text-decoration:line-through;">S</span></button>
          </div>

          <!-- Marca-Texto de Estudo -->
          <div class="m2-word-ribbon-group" title="Marca-texto de estudo">
            <button type="button" class="m2-word-btn" data-action="word-highlight" data-color="#fef08a" style="background:#fef08a; color:#1e293b; padding:4px 8px;" title="Destaque Amarelo">🖍️</button>
            <button type="button" class="m2-word-btn" data-action="word-highlight" data-color="#bbf7d0" style="background:#bbf7d0; color:#064e3b; padding:4px 8px;" title="Destaque Verde">🖍️</button>
            <button type="button" class="m2-word-btn" data-action="word-highlight" data-color="#bfdbfe" style="background:#bfdbfe; color:#1e3a8a; padding:4px 8px;" title="Destaque Azul">🖍️</button>
            <button type="button" class="m2-word-btn" data-action="word-highlight" data-color="#fbcfe8" style="background:#fbcfe8; color:#831843; padding:4px 8px;" title="Destaque Rosa">🖍️</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="removeFormat" title="Limpar Destaque / Formatação">${icon('eraser', 14)}</button>
          </div>

          <!-- Alinhamento & Listas -->
          <div class="m2-word-ribbon-group">
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="justifyLeft" title="Alinhar à Esquerda">${icon('align-left', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="justifyCenter" title="Centralizar">${icon('align-center', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="justifyRight" title="Alinhar à Direita">${icon('align-right', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="justifyFull" title="Justificar">${icon('align-justify', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="insertUnorderedList" title="Lista com Marcadores">${icon('list', 15)}</button>
            <button type="button" class="m2-word-btn" data-action="word-exec" data-command="insertOrderedList" title="Lista Numerada">${icon('list-ordered', 15)}</button>
          </div>

          <!-- Blocos Especiais de Concurso -->
          <div class="m2-word-ribbon-group" style="border-right:none;">
            <button type="button" class="m2-word-btn" data-action="word-insert-block" data-block="artigo" title="Inserir Bloco de Lei Seca">⚖️ Artigo de Lei</button>
            <button type="button" class="m2-word-btn" data-action="word-insert-block" data-block="sumula" title="Inserir Bloco de Súmula">🏛️ Súmula</button>
            <button type="button" class="m2-word-btn" data-action="word-insert-block" data-block="pegadinha" title="Inserir Alerta da Banca">⚡ Pegadinha</button>
            <button type="button" class="m2-word-btn" data-action="word-insert-block" data-block="tabela" title="Inserir Tabela Comparativa">📊 Tabela</button>
            <button type="button" class="m2-word-btn" data-action="word-insert-block" data-block="divider" title="Inserir Linha Divisória">➖ Linha</button>
          </div>
        </div>

        <!-- Folha de Papel do Documento Word -->
        <div class="m2-word-sheet-wrapper">
          <div
            id="m2-note-editor-doc"
            class="m2-word-sheet"
            contenteditable="true"
            spellcheck="true"
            data-placeholder="Comece seu resumo, anotação de aula ou jurisprudência aqui..."
          >${initialHtml}</div>
        </div>

        <!-- Barra de Status Word -->
        <div class="m2-word-statusbar">
          <div style="display:flex; align-items:center; gap:16px;">
            <span>${icon('file-text', 13)} Página 1 de 1</span>
            <span id="m2-doc-word-count"><strong>${wordCount}</strong> palavras</span>
            <span id="m2-doc-char-count"><strong>${charCount}</strong> caracteres</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <span>Português (Brasil)</span>
            <span>·</span>
            <span>Zoom: 100%</span>
            <span>·</span>
            <span style="color:var(--accent-teal);">${icon('check-circle', 12)} Modo Editor Word Ativo</span>
          </div>
        </div>
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
            <span class="m2-eyebrow">Biblioteca Didática</span>
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
            ${materials.map(m => {
              const metaParts = [
                m.topic,
                m.size,
                (m.pages && Number(m.pages) > 0 ? `${m.pages} páginas` : null)
              ].filter(Boolean);
              const metaText = metaParts.length > 0 ? metaParts.join(' · ') : 'Material didático em PDF';

              return `
              <div class="m2-card" style="flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap;">
                <div style="display:flex; align-items:center; gap:14px;">
                  <div style="width:40px; height:40px; border-radius:var(--radius-md); background:var(--accent-rose-soft); color:var(--accent-rose); display:grid; place-items:center;">
                    ${icon('file-text', 20)}
                  </div>
                  <div>
                    <strong>${escapeHtml(m.title || 'Material')}</strong>
                    <span style="display:block; font-size:12px; color:var(--text-muted);">${escapeHtml(metaText)}</span>
                  </div>
                </div>
                <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="download-material">
                  ${icon('download', 14)} Baixar Arquivo
                </button>
              </div>
            `;}).join('')}
          </div>
        `}
      </div>
    `;
}

// A20: Cursos Getfy
export function viewCourses() {
  const courses = window.M2Data.courses || [];
  const totalCourses = courses.length;

  return `
    <div class="m2-content">
      <div class="m2-page-header" style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
        <div class="m2-page-title-group">
          <span class="m2-eyebrow">Área de Membros</span>
          <h1 class="m2-page-title">Meus Cursos</h1>
          <p class="m2-page-subtitle">Aulas em vídeo e conteúdos complementares disponíveis na sua área de membros.</p>
        </div>

        ${totalCourses > 0 ? `
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <div class="m2-pill" style="background:var(--bg-card); border:1px solid var(--border-color); padding:6px 14px; border-radius:999px; font-size:12px; display:flex; align-items:center; gap:6px;">
              ${icon('book-open', 14, 'text-teal')} <strong>${totalCourses}</strong> ${totalCourses === 1 ? 'Curso disponível' : 'Cursos disponíveis'}
            </div>
          </div>
        ` : ''}
      </div>

      ${totalCourses === 0 ? `
        <div class="m2-card" style="text-align:center; padding:56px 24px; border:1px dashed var(--border-color); background:var(--bg-card);">
          <div style="width:56px; height:56px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-teal); border:1px solid var(--border-color);">
            ${icon('video', 28)}
          </div>
          <h3 style="font-size:18px; font-weight:700; color:var(--text-main);">Nenhum curso em vídeo liberado nesta conta</h3>
          <p style="font-size:13px; color:var(--text-muted); margin:8px auto 0; max-width:480px; line-height:1.5;">
            Os cursos da sua Área de Membros aparecerão aqui automaticamente assim que vinculados à sua matrícula ou adquiridos na plataforma.
          </p>
        </div>
      ` : `
        <div class="m2-grid-2" style="gap:20px;">
          ${courses.map(c => {
            const courseTitle = c.name || c.title || 'Curso';
            const courseUrl = c.member_area_url || ('/m/' + (c.checkout_slug || c.slug));
            const modulesCount = Number(c.modules_count) || 1;

            return `
              <div class="m2-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:0; overflow:hidden; border:1px solid var(--border-color); transition:transform 0.2s, box-shadow 0.2s;">
                <!-- Header / Banner do Curso -->
                <div style="position:relative; width:100%; height:140px; background:linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(99,102,241,0.25) 100%), #1e293b; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                  ${c.image_url ? `
                    <img src="${escapeHtml(c.image_url)}" alt="${escapeHtml(courseTitle)}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'">
                    <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%);"></div>
                  ` : `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:8px; opacity:0.85;">
                      <div style="width:48px; height:48px; border-radius:50%; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); display:grid; place-items:center; color:#fff;">
                        ${icon('play', 22)}
                      </div>
                      <span style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">Área de Membros</span>
                    </div>
                  `}
                </div>

                <!-- Conteúdo do Card -->
                <div style="padding:18px; display:flex; flex-direction:column; flex:1; justify-content:space-between;">
                  <div>
                    <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0 0 6px 0; line-height:1.3;">
                      ${escapeHtml(courseTitle)}
                    </h3>
                    <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px 0; line-height:1.4; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                      ${escapeHtml(c.description || 'Assista a todas as videoaulas e baixe os materiais complementares deste curso.')}
                    </p>

                    <!-- Metadados -->
                    <div style="display:flex; align-items:center; gap:12px; font-size:11px; color:var(--text-muted); margin-bottom:12px; flex-wrap:wrap;">
                      <span style="display:flex; align-items:center; gap:4px;">
                        ${icon('folder', 13, 'text-teal')} ${modulesCount} ${modulesCount === 1 ? 'módulo' : 'módulos'}
                      </span>
                    </div>
                  </div>

                  <!-- Botão de Ação: Somente Nova Aba -->
                  <div style="border-top:1px solid var(--border-color); padding-top:14px; margin-top:8px;">
                    <button
                      type="button"
                      class="m2-btn m2-btn-primary"
                      data-action="open-course-new-tab"
                      data-url="${escapeHtml(courseUrl)}"
                      title="Abrir este curso em uma nova aba do navegador"
                      style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%;">
                      ${icon('external-link', 14)} Acessar Curso em Nova Aba
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

export function viewRedacao() {
  const hasAiAccess = window.M2Data?.has_ai_access !== false;
  if (!hasAiAccess) {
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Prática Discursiva & Produção Textual</span>
            <h1 class="m2-page-title">Oficina de Redação com IA</h1>
            <p class="m2-page-subtitle">Pratique redações temáticas no padrão da banca examinadora e receba correção detalhada por competências em segundos.</p>
          </div>
        </div>
        <div class="m2-card" style="text-align:center; padding:54px 20px; max-width:620px; margin:32px auto;">
          <div style="width:64px; height:64px; border-radius:50%; background:var(--accent-amber-soft); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-amber);">
            ${icon('sparkles', 32)}
          </div>
          <h2 style="font-size:20px; font-weight:800; color:var(--text-main); margin-bottom:8px;">Recurso de IA Bloqueado</h2>
          <p style="font-size:14px; color:var(--text-muted); max-width:460px; margin:0 auto 20px; line-height:1.6;">
            A Oficina de Redação com correção analítica instantânea utiliza Inteligência Artificial e não está habilitada para o seu produto ou plano atual.
          </p>
          <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px 18px; display:inline-flex; align-items:center; gap:8px; margin-bottom:24px; font-weight:600; font-size:13px; color:var(--text-main);">
            <span style="color:var(--accent-teal);">${icon('alert-circle', 16)}</span>
            <span>Peça para o administrador ativar a IA para sua conta.</span>
          </div>
          <div>
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="today">
              ${icon('arrow-left', 14)} Voltar para o Início
            </button>
          </div>
        </div>
      </div>
    `;
  }

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
              <span class="m2-eyebrow">Prática Discursiva & Produção Textual</span>
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
            <span class="m2-eyebrow">Prática Discursiva & Produção Textual</span>
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

