import {
  state,
  api,
  icon,
  escapeHtml,
  plainTextWithBreaks,
  formatTimer,
  showToast,
  toggleTheme,
  applyTheme,
  navigate,
  render,
  hydrateDataFromPayload,
  getAnnouncements,
  saveAnnouncements
} from './core.js?v=981ff9b0919b';
import { loadMentorResource, loadContestSyllabus, loadDeckCards } from './mentor-resources.js?v=981ff9b0919b';
import { getFilteredStudyQuestions } from './study.js?v=981ff9b0919b';
import { renderAudienceSelector } from './shell.js?v=981ff9b0919b';
import { exportDiagrammedPdf } from './curriculum.js?v=981ff9b0919b';
import { handleNavigationEvent } from './controllers/navigation-controller.js?v=981ff9b0919b';
import { handleRadarAction } from './controllers/radar-controller.js?v=981ff9b0919b';
import { handlePlanningAction } from './controllers/planning-controller.js?v=981ff9b0919b';
import { handleCurriculumAction } from './controllers/curriculum-controller.js?v=981ff9b0919b';
import { handlePracticeAction } from './controllers/practice-controller.js?v=981ff9b0919b';
import { handleNotebookAction, setupNotebookEditorEvents } from './controllers/notebook-controller.js?v=981ff9b0919b';
import { handleResourcesAction } from './controllers/resources-controller.js?v=981ff9b0919b';
import { handleAssessmentAction } from './controllers/assessment-controller.js?v=981ff9b0919b';
import { handleEssayAction } from './controllers/essay-controller.js?v=981ff9b0919b';
import { handleAiAction } from './controllers/ai-controller.js?v=981ff9b0919b';
import {
  handleMentorAction,
  handleMentorChange,
  handleMentorInput,
  updateAudienceDOM
} from './controllers/mentor-controller.js?v=981ff9b0919b';
import { setupPlanningDragDrop } from './controllers/planning-drag-drop-controller.js?v=981ff9b0919b';
import { setupPdfImportEvents } from './controllers/pdf-import-controller.js?v=981ff9b0919b';

function planningBase() {
  const tenantId = state.tenantId || 1;
  return state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
}

async function loadRadarEditais({ renderAfter = true } = {}) {
  const filters = state.radarFilters || { sphere: 'all', careerTrack: 'all' };
  const query = new URLSearchParams({ limit: '48' });
  if (filters.sphere && filters.sphere !== 'all') query.set('sphere', filters.sphere);
  if (filters.careerTrack && filters.careerTrack !== 'all') query.set('career_track', filters.careerTrack);
  state.radarLoading = true;
  if (renderAfter) render();
  try {
    const response = await api(`${planningBase()}/radar/contests?${query.toString()}`);
    window.M2Data.radarEditais = Array.isArray(response.items) ? response.items : [];
    window.M2Data.radarFilters = response.filters || { tracks: {} };
    state.radarMeta = response.meta || null;
  } finally {
    state.radarLoading = false;
    if (renderAfter) render();
  }
}

async function loadMentorRadarEditais({ renderAfter = true } = {}) {
  const [sources, queue] = await Promise.all([
    api('/mentoria2/radar/sources'),
    api('/mentoria2/radar/review-queue')
  ]);
  window.M2Data.radarSources = Array.isArray(sources.sources) ? sources.sources : [];
  window.M2Data.radarReviewQueue = Array.isArray(queue.items) ? queue.items : [];
  if (renderAfter) render();
}

function calendarKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function calendarRange() {
  const cursor = new Date(`${state.calendarCursor || calendarKey(new Date())}T12:00:00`);
  const isWeek = state.planningView === 'week';
  const start = isWeek ? new Date(cursor) : new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  if (isWeek) start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  const end = isWeek ? new Date(start) : new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
  if (isWeek) end.setDate(start.getDate() + 6);
  return { start: calendarKey(start), end: calendarKey(end) };
}

async function loadPlanningCalendar({ renderAfter = true } = {}) {
  const range = calendarRange();
  const contestId = state.contestId || window.M2Data.contests?.[0]?.id || '';
  const query = new URLSearchParams({ start: range.start, end: range.end });
  if (contestId) query.set('contest_id', contestId);
  const response = await api(`${planningBase()}/schedules/calendar?${query.toString()}`);
  state.calendarItems = Array.isArray(response.items) ? response.items : [];
  state.calendarRangeKey = `${range.start}:${range.end}:${contestId}`;
  window.M2Data.calendarItems = state.calendarItems;
  if (renderAfter) render();
  return response;
}

function capturePlanDraft() {
  const draft = state.planDraft || {};
  const contest = document.querySelector('input[name="ob-contest"]:checked');
  const mode = document.querySelector('input[name="ob-mode"]:checked');
  if (contest?.value) draft.contestId = contest.value;
  if (mode?.value) draft.mode = mode.value;
  draft.hours = draft.hours || {};
  document.querySelectorAll('.m2-ob-day').forEach(input => { draft.hours[input.dataset.day] = Math.max(0, Number(input.value) || 0); });
  if (document.getElementById('m2-ob-minutes')) draft.minutes = Number(document.getElementById('m2-ob-minutes').value) || 60;
  if (document.getElementById('m2-ob-max-topics')) draft.maxTopics = Math.max(0, Number(document.getElementById('m2-ob-max-topics').value) || 0);
  if (document.getElementById('m2-ob-repetitions')) draft.repetitions = Math.max(1, Number(document.getElementById('m2-ob-repetitions').value) || 1);
  if (document.getElementById('m2-ob-goal')) draft.goal = Number(document.getElementById('m2-ob-goal').value) || 80;
  draft.levels = draft.levels || {}; draft.selected = draft.selected || {};
  document.querySelectorAll('.m2-ob-subject-dominance').forEach(input => { draft.levels[input.dataset.subjectId] = input.value; });
  document.querySelectorAll('.m2-ob-subject-enabled').forEach(input => { draft.selected[input.dataset.subjectId] = input.checked; });
  state.planDraft = draft;
  return draft;
}

function planConfiguration(draft) {
  const affinity = {}; const priorities = {};
  Object.entries(draft.levels || {}).forEach(([subjectId, level]) => {
    affinity[subjectId] = level === 'iniciante' ? 30 : level === 'avancado' ? 90 : 60;
    priorities[subjectId] = level === 'iniciante' ? 'alta' : level === 'avancado' ? 'baixa' : 'media';
  });
  return {
    tipo: draft.mode,
    horas: draft.hours,
    minutosTopico: draft.minutes,
    maxTopicosDia: draft.maxTopics,
    repeticoesEdital: draft.repetitions,
    metaAcertos: draft.goal,
    alertaMetaHabilitado: true,
    materiasSelecionadas: draft.selected,
    materiaAfinidade: affinity,
    materiaPrioridades: priorities,
  };
}

function setNoteSaveStatus(status) {
  state.noteSaveStatus = status;
  const statusElement = document.getElementById('m2-note-save-status');
  if (statusElement) statusElement.textContent = status;
}

function saveNote({ autosave = false } = {}) {
  const doc = document.getElementById('m2-note-editor-doc');
  const textarea = document.getElementById('m2-note-textarea');
  if (doc) state.noteContent = doc.innerHTML;
  else if (textarea) state.noteContent = textarea.value;

  const title = document.getElementById('m2-note-title');
  const folder = document.getElementById('m2-note-folder');
  const color = document.getElementById('m2-note-color');
  const edict = document.getElementById('m2-note-edict');
  const subject = document.getElementById('m2-note-subject');
  const topic = document.getElementById('m2-note-topic');
  if (title) state.noteTitle = title.value.trim() || 'Nova anotação';
  if (folder) state.noteFolder = folder.value.trim() || 'Geral';
  if (color) state.noteColor = color.value;
  if (edict) state.noteEdictId = edict.value;
  if (subject) state.noteSubjectId = subject.value;
  if (topic) state.noteTopicId = topic.value;

  const tenantId = state.tenantId || 1;
  const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
  const isUpdate = Boolean(state.activeNotebookId);
  const notebookUrl = isUpdate ? `${base}/notebooks/${state.activeNotebookId}` : `${base}/notebooks`;
  const saveVersion = (state.noteSaveVersion || 0) + 1;
  state.noteSaveVersion = saveVersion;
  setNoteSaveStatus('Salvando…');

  return api(notebookUrl, {
    method: isUpdate ? 'PATCH' : 'POST',
    body: JSON.stringify({
      title: state.noteTitle || 'Nova anotação',
      folder: state.noteFolder || 'Geral',
      content: state.noteContent,
      color: state.noteColor || '#4f8ef7',
      edict_id: state.noteEdictId || null,
      subject_id: state.noteSubjectId || null,
      topic_id: state.noteTopicId || null,
      shared_with_mentor: Boolean(state.noteSharedWithMentor)
    })
  }).then(res => {
    if (saveVersion !== state.noteSaveVersion) return;
    if (!state.activeNotebookId && res.id) {
      state.activeNotebookId = res.id;
      window.M2Data.notebooks = [{
        id: res.id, title: state.noteTitle, folder: state.noteFolder, content: state.noteContent,
        color: state.noteColor, edict_id: state.noteEdictId, subject_id: state.noteSubjectId,
        topic_id: state.noteTopicId, shared_with_mentor: state.noteSharedWithMentor
      }, ...(window.M2Data.notebooks || [])];
    }
    setNoteSaveStatus('Salvo às ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    render();
    if (!autosave) showToast('Anotação salva com sucesso.', 'success');
  }).catch(() => {
    if (saveVersion !== state.noteSaveVersion) return;
    setNoteSaveStatus('Falha ao salvar');
    if (!autosave) render();
    showToast('Não foi possível salvar a anotação.', 'error');
  });
}

export function setupEvents() {
  if (typeof document === 'undefined') return;
  if (document.__m2EventsAttached) return;
  document.__m2EventsAttached = true;

  setupPlanningDragDrop({ state, api, render, showToast, planningBase });
  setupPdfImportEvents({ state, render, showToast });
  setupNotebookEditorEvents({ state, render, saveNote, setNoteSaveStatus });

  // 1. Delegador Principal de Eventos de Clique
  document.addEventListener('click', (e) => {
    // 1.1 Navegação centralizada via data-nav
    if (handleNavigationEvent(e, {
      state,
      navigate,
      render,
      api,
      showToast,
      loadDeckCards,
      loadContestSyllabus,
      loadMentorResource,
      loadRadarEditais,
      loadMentorRadarEditais,
      loadPlanningCalendar
    })) return;

    // 1.2 Ações interativas via data-action
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;
    if (actionBtn.tagName === 'SELECT') return;
    const action = actionBtn.dataset.action;

    // Delegação aos Controladores de Domínio Especializados
    if (handleRadarAction({
      event: e,
      action,
      actionBtn,
      state,
      api,
      render,
      showToast,
      studentBase: planningBase,
      loadRadarEditais,
      loadMentorRadarEditais
    })) return;

    if (handlePlanningAction({
      action,
      actionBtn,
      state,
      api,
      icon,
      render,
      showToast,
      navigate,
      hydrateDataFromPayload,
      planningBase,
      calendarKey,
      loadPlanningCalendar,
      capturePlanDraft,
      planConfiguration,
    })) return;

    if (handleCurriculumAction({
      event: e,
      action,
      actionBtn,
      state,
      api,
      render,
      showToast,
      exportDiagrammedPdf,
      navigate,
    })) return;

    if (handlePracticeAction({
      action,
      actionBtn,
      state,
      api,
      render,
      showToast,
      getFilteredStudyQuestions,
      navigate,
    })) return;

    if (handleNotebookAction({ action, actionBtn, state, api, render, showToast, navigate, saveNote })) return;
    if (handleResourcesAction({ action, actionBtn, state, render, showToast })) return;
    if (handleAssessmentAction({ action, actionBtn, state, api, render, showToast, navigate })) return;
    if (handleEssayAction({ action, actionBtn, state, api, render, showToast })) return;
    if (handleAiAction({ action, actionBtn, state, api, render, showToast, loadMentorResource })) return;

    // 1.3 Controlador de Operações do Mentor
    if (handleMentorAction({
      action,
      actionBtn,
      event: e,
      state,
      api,
      render,
      showToast,
      loadMentorResource,
      loadDeckCards,
      applyTheme,
      getAnnouncements,
      saveAnnouncements,
      renderAudienceSelector
    })) return;

    // 1.4 Ações Globais de Shell, Preferências e Modais
    if (action === 'switch-mode') {
      const mode = actionBtn.dataset.mode;
      state.mode = mode;
      if (mode === 'student') state.screen = 'today';
      else if (mode === 'mentor') state.screen = 'mentor-overview';
      else if (mode === 'workspace') state.screen = 'mentor-workspace';
      render();
    }
    else if (action === 'toggle-theme') {
      toggleTheme();
    }
    else if (action === 'open-student-profile-menu') {
      state.modal = 'student-profile-menu';
      render();
      return;
    }
    else if (action === 'open-mentor-profile-menu') {
      state.modal = 'mentor-profile-menu';
      render();
      return;
    }
    else if (action === 'open-profile-goals' || action === 'open-profile-courses' || action === 'open-profile-settings') {
      state.modal = null;
      const isMentor = state.mode === 'mentor' || (state.screen && state.screen.startsWith('mentor-'));
      if (isMentor) {
        navigate(action === 'open-profile-goals' ? 'mentor-reports' : (action === 'open-profile-settings' ? 'mentor-settings' : 'mentor-students'));
      } else {
        navigate(action === 'open-profile-goals' ? 'goals' : (action === 'open-profile-settings' ? 'settings' : 'courses'));
      }
      return;
    }
    else if (action === 'open-notifications') {
      api(`${planningBase()}/notifications`).then(result => {
        window.M2Data.notifications = result;
        state.notifications = result.items || [];
        state.modal = 'notifications';
        render();
      }).catch(() => showToast('Não foi possível carregar as notificações.', 'error'));
    }
    else if (action === 'read-notification') {
      const id = actionBtn.dataset.id;
      api(`${planningBase()}/notifications/${encodeURIComponent(id)}/read`, { method: 'PATCH' }).then(() => {
        const item = state.notifications.find(notification => String(notification.id) === String(id));
        if (item) item.read_at = new Date().toISOString();
        window.M2Data.notifications.unread_count = state.notifications.filter(notification => !notification.read_at).length;
        if (item?.action_screen) {
          state.modal = null;
          navigate(item.action_screen);
        } else render();
      }).catch(() => showToast('Não foi possível atualizar a notificação.', 'error'));
    }
    else if (action === 'read-all-notifications') {
      api(`${planningBase()}/notifications/read-all`, { method: 'PATCH' }).then(() => {
        state.notifications.forEach(notification => { notification.read_at = notification.read_at || new Date().toISOString(); });
        window.M2Data.notifications.unread_count = 0;
        render();
      }).catch(() => showToast('Não foi possível atualizar as notificações.', 'error'));
    }
    else if (action === 'toggle-sidebar') {
      const sb = document.getElementById('m2-sidebar');
      if (sb) sb.classList.toggle('open');
    }
    else if (action === 'toggle-sidebar-collapse') {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('m2_sidebar_collapsed', String(state.sidebarCollapsed));
      }
      render();
    }
    else if (action === 'toggle-nav-section') {
      const sectionId = actionBtn.dataset.sectionId;
      if (sectionId) {
        if (!state.sidebarSectionsOpen) state.sidebarSectionsOpen = {};
        const isCurrentlyOpen = (state.sidebarSectionsOpen[sectionId] !== undefined)
          ? Boolean(state.sidebarSectionsOpen[sectionId])
          : Boolean(actionBtn.closest('.m2-nav-section')?.classList.contains('is-open'));
        state.sidebarSectionsOpen[sectionId] = !isCurrentlyOpen;
        if (typeof localStorage !== 'undefined') {
          try {
            localStorage.setItem('m2_sidebar_sections', JSON.stringify(state.sidebarSectionsOpen));
          } catch (e) { /* ignore */ }
        }
        render();
      }
    }
    else if (action === 'toggle-ranking-optin') {
      const newVal = !Boolean(window.M2Data.student.rankingOptIn);
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/preferences`, {
        method: 'PATCH',
        body: JSON.stringify({ settings: { ranking_opt_in: newVal } })
      }).then(() => {
        window.M2Data.student.rankingOptIn = newVal;
        render();
        showToast(newVal ? 'Você aderiu ao ranking da turma!' : 'Você saiu da exibição pública do ranking.', 'info');
      }).catch(() => {
        showToast('Erro ao salvar preferência de ranking.', 'error');
      });
    }
    else if (action === 'toggle-notification-pref') {
      const key = actionBtn.dataset.key;
      const preferences = window.M2Data.preferences || { settings: {} };
      const settings = preferences.settings || {};
      const notifications = { ...(settings.notifications || {}), [key]: Boolean(actionBtn.checked) };
      api(`${planningBase()}/preferences`, { method: 'PATCH', body: JSON.stringify({ settings: { notifications } }) })
        .then(() => { window.M2Data.preferences = { ...preferences, settings: { ...settings, notifications } }; showToast('Preferência de notificação salva.', 'success'); })
        .catch(() => { actionBtn.checked = !actionBtn.checked; showToast('Não foi possível salvar a preferência.', 'error'); });
    }
    else if (action === 'set-metrics-period') {
      state.metricsPeriod = actionBtn.dataset.period;
      const period = state.metricsPeriod;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const periodLabel = period === 'all' ? 'Todo o Período' : period.replace('d', ' Dias');

      let startDate = null;
      const today = new Date();
      if (period === '7d') {
        const d = new Date(today); d.setDate(d.getDate() - 7);
        startDate = d.toISOString().slice(0, 10);
      } else if (period === '14d') {
        const d = new Date(today); d.setDate(d.getDate() - 14);
        startDate = d.toISOString().slice(0, 10);
      } else if (period === '30d') {
        const d = new Date(today); d.setDate(d.getDate() - 30);
        startDate = d.toISOString().slice(0, 10);
      }

      const url = startDate
        ? `${base}/metrics/summary?start=${startDate}&end=${today.toISOString().slice(0, 10)}`
        : `${base}/metrics/summary`;

      api(url).then(metrics => {
        if (metrics && window.M2Data.student) {
          if (metrics.study_hours_total !== undefined) {
            window.M2Data.student.hoursStudied = metrics.study_hours_total;
          }
          if (metrics.questions_solved_total !== undefined) {
            window.M2Data.student.questionsResolved = metrics.questions_solved_total;
          }
          if (metrics.accuracy_total !== undefined) {
            window.M2Data.student.questionsAccuracy = metrics.accuracy_total;
            window.M2Data.student.accuracy = metrics.accuracy_total;
          }
        }
        render();
        showToast(`Métricas atualizadas do servidor para o período de ${periodLabel}.`, 'info');
      }).catch(() => {
        render();
        showToast(`Métricas alteradas para o período de ${periodLabel}.`, 'info');
      });
    }
    else if (action === 'open-metrics-report') {
      if (typeof window !== 'undefined' && window.print) {
        window.print();
      } else {
        showToast('Relatório de Desempenho pronto para impressão e exportação.', 'info');
      }
    }
    else if (action === 'copy-metrics-summary') {
      const student = window.M2Data.student || {};
      const summaryText = `Resumo de Desempenho (Mentoria 2.0):\n` +
        `Tempo Estudado: ${student.hoursStudied || student.hoursWeek || 0}h\n` +
        `Questões Resolvidas: ${student.questionsResolved || 0}\n` +
        `Taxa de Acerto: ${student.questionsAccuracy || student.accuracy || 0}%\n` +
        `Dias Consecutivos (Streak): ${student.streakDays || 0} dias`;
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(summaryText).then(() => {
          showToast('Resumo analítico de métricas copiado para a área de transferência!', 'success');
        }).catch(() => {
          showToast('Resumo analítico pronto.', 'info');
        });
      } else {
        showToast('Resumo analítico copiado para a área de transferência!', 'success');
      }
    }
    else if (action === 'export-metrics-csv') {
      const student = window.M2Data.student || {};
      let csv = 'Metrica;Valor\r\n';
      csv += `Tempo Estudado (h);${student.hoursStudied || student.hoursWeek || 0}\r\n`;
      csv += `Questoes Resolvidas;${student.questionsResolved || 0}\r\n`;
      csv += `Taxa de Acerto (%);${student.questionsAccuracy || student.accuracy || 0}%\r\n`;
      csv += `Dias Consecutivos (Streak);${student.streakDays || 0}\r\n`;
      const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `metricas-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Métricas exportadas em CSV!', 'success');
    }
    else if (action === 'simulate-upload-edital') {
      state.jsonImportMode = 'catalog';
      state.modal = 'json-import';
      render();
      showToast('Abra a aba "Organização de Edital" ou cole o JSON do edital para importá-lo no concurso.', 'info');
    }
    // 1.5 Controles do Mini-Timer Flutuante e Pomodoro
    else if (action === 'toggle-mini-timer') {
      state.timerVisible = !state.timerVisible;
      if (state.timerVisible) {
        state.timerMinimized = false;
      }
      render();
      showToast(state.timerVisible ? 'Cronômetro flutuante aberto.' : 'Cronômetro recolhido para ícone.');
    }
    else if (action === 'minimize-mini-timer') {
      state.timerMinimized = true;
      render();
    }
    else if (action === 'expand-mini-timer') {
      state.timerMinimized = false;
      render();
    }
    else if (action === 'toggle-timer-running') {
      state.timerRunning = !state.timerRunning;
      render();
      showToast(state.timerRunning ? 'Cronômetro iniciado! Bom foco.' : 'Cronômetro pausado.');
    }
    else if (action === 'reset-timer') {
      state.timerRunning = false;
      if (state.timerMode === 'pomodoro') {
        state.timerSeconds = state.pomodoroPhase === 'focus' ? 1500 : 300;
      } else {
        state.timerSeconds = 0;
      }
      render();
      showToast('Tempo reiniciado.');
    }
    else if (action === 'add-timer-5min') {
      state.timerSeconds += 300;
      render();
      showToast('+5 minutos adicionados!');
    }
    else if (action === 'set-timer-mode') {
      const mode = actionBtn.dataset.mode;
      state.timerMode = mode;
      state.timerRunning = false;
      if (mode === 'pomodoro') {
        state.pomodoroPhase = 'focus';
        state.timerSeconds = 1500;
      } else {
        state.timerSeconds = 0;
      }
      render();
      showToast(`Modo alterado para ${mode === 'pomodoro' ? 'Pomodoro (25/5)' : 'Cronômetro Livre'}.`);
    }
    else if (action === 'finish-timer-session') {
      const elapsedSec = (state.timerMode === 'pomodoro' && state.pomodoroPhase === 'focus')
        ? Math.max(0, 1500 - state.timerSeconds)
        : state.timerSeconds;
      const elapsedMin = Math.round(elapsedSec / 60);
      const addHours = +(elapsedMin / 60).toFixed(1);
      const earnedXp = Math.max(15, Math.round(elapsedMin * 3));

      state.timerRunning = false;
      if (state.timerMode === 'pomodoro') {
        state.timerSeconds = 1500;
        state.pomodoroPhase = 'focus';
      } else {
        state.timerSeconds = 0;
      }

      if (elapsedMin >= 1) {
        const tenantId = state.tenantId || 1;
        const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        api(`${base}/timer-logs`, {
          method: 'POST',
          body: JSON.stringify({
            type: state.timerMode === 'pomodoro' ? 'pomodoro' : 'stopwatch',
            duration_seconds: elapsedSec,
            subject_id: state.timerSubjectId,
            contest_id: state.contestId,
            notes: `Sessão de ${state.timerMode}`
          })
        }).then(res => {
          window.M2Data.student.hoursStudied = +(window.M2Data.student.hoursStudied + addHours).toFixed(1);
          window.M2Data.student.todayHours = +(window.M2Data.student.todayHours + addHours).toFixed(1);
          if (res.gamification) window.M2Data.student.xp = res.gamification.total_xp || 0;
          showToast(`Sessão concluída! +${elapsedMin} min e +${res.gamification?.awarded_xp || earnedXp} XP ganhos! 🎉`, 'success');
        }).catch(() => {
          showToast('Erro ao registrar sessão de estudo no servidor.', 'error');
          render();
        });
      } else {
        showToast('Sessão rápida finalizada (menos de 1 minuto).', 'info');
        render();
      }
    }
    // 1.6 Fechamento de Modais
    else if (action === 'close-modal') {
      if (state.modal === 'schedule-completion') state.scheduleCompletion = null;
      state.modal = null;
      state.questionFormDraft = null;
      state.configuringProduct = null;
      state.quickPrompt = null;
      state.confirmation = null;
      render();
    }
    else if (action === 'cancel-confirmation') {
      state.modal = null;
      state.confirmation = null;
      render();
    }
    else if (action === 'close-modal-backdrop') {
      if (e.target && e.target.classList && e.target.classList.contains('m2-modal-overlay')) {
        if (state.modal === 'schedule-completion') state.scheduleCompletion = null;
        state.modal = null;
        state.questionFormDraft = null;
        state.configuringProduct = null;
        state.quickPrompt = null;
        state.confirmation = null;
        render();
      }
    }
  });

  // 2. Submissão de Formulários
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('form[data-form="radar-source"]');
    if (!form) return;
    e.preventDefault();
    const fields = new FormData(form);
    const territories = String(fields.get('territories') || '').split(',').map(value => value.trim()).filter(Boolean);
    api('/mentoria2/radar/sources', {
      method: 'POST',
      body: JSON.stringify({
        label: String(fields.get('label') || '').trim(),
        kind: String(fields.get('kind') || ''),
        origin_url: String(fields.get('origin_url') || '').trim() || null,
        territories,
        is_active: fields.get('is_active') === '1'
      })
    }).then(() => {
      state.modal = null;
      return loadMentorRadarEditais();
    }).then(() => showToast('Fonte salva. Ela só alimentará o Radar após a coleta e a curadoria.', 'success'))
      .catch(error => showToast(error?.message || 'Não foi possível salvar a fonte.', 'error'));
  });

  // 3. Ouvinte de Mudança (Change)
  document.addEventListener('change', (e) => {
    // 3.1 Delegar primeiro ao controlador do mentor
    if (handleMentorChange(e, { state, api, render, showToast, loadMentorResource, renderAudienceSelector })) return;

    // 3.2 Redação - Upload de Imagem
    if (e.target.id === 'm2-essay-photo-file') {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const res = ev.target.result;
          state.redacaoFotoPreview = res;
          state.redacaoFotoBase64 = (res.split(',')[1] || res);
          render();
          showToast('Foto da redação carregada com sucesso!', 'success');
        };
        reader.readAsDataURL(file);
      }
      return;
    }

    // 3.3 Filtros de Questões do Aluno
    if (e.target.dataset.action === 'filter-questions-subject-select') {
      const selectedId = e.target.value;
      if (selectedId) {
        state.selectedSubjectId = selectedId;
        state.selectedTopicId = 'all';
        state.questionDifficultyFilter = 'all';
        state.currentQuestionIndex = 0;
        state.selectedOption = null;
        state.answeredQuestion = false;
        state.studySessionComplete = false;
        state.studySessionXpGained = 0;
        state.studySessionCorrectCount = 0;
      } else {
        state.selectedSubjectId = null;
      }
      render();
    } else if (e.target.dataset.action === 'change-topic-filter') {
      state.selectedTopicId = e.target.value;
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    } else if (e.target.dataset.action === 'change-difficulty-filter') {
      state.questionDifficultyFilter = e.target.value;
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    } else if (e.target.dataset.action === 'change-board-filter') {
      state.questionBoardFilter = e.target.value;
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    } else if (e.target.dataset.action === 'change-format-filter') {
      state.questionFormatFilter = e.target.value;
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    } else if (e.target.dataset.action === 'filter-question-subject') {
      state.questionSubjectFilter = e.target.value;
      render();
    } else if (e.target.dataset.action === 'filter-question-status') {
      state.questionStatusFilter = e.target.value;
      render();
    } else if (e.target.dataset.action === 'change-theme-select') {
      const newTheme = e.target.value;
      if (newTheme && newTheme !== state.theme) {
        state.theme = newTheme;
        localStorage.setItem('m2_theme', state.theme);
        applyTheme();
        render();
        showToast(`Tema alterado para modo ${newTheme === 'dark' ? 'Escuro' : 'Claro'}`);
      }
    } else if (e.target.dataset.action === 'change-contest') {
      const newContestId = e.target.value;
      if (!newContestId || String(newContestId) === String(state.contestId)) return;

      const isMentor = state.mode === 'mentor' || (state.screen && state.screen.startsWith('mentor-'));
      if (isMentor) {
        state.contestId = newContestId;
        render();
        const contestObj = (window.M2Data?.contests || []).find(c => String(c.id) === String(newContestId));
        showToast(`Concurso foco alterado para ${contestObj?.name || 'novo concurso'}!`, 'success');
        return;
      }

      const selectEl = e.target;
      selectEl.disabled = true;
      state.contestId = newContestId;
      state.calendarRangeKey = '';
      state.calendarItems = [];

      showToast('Carregando dados do concurso...', 'info');

      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('contest_id', newContestId);
          window.history.replaceState({}, '', url.toString());
        } catch (_) {}
      }

      api(`${planningBase()}/active-contest`, {
        method: 'POST',
        body: JSON.stringify({ contest_id: newContestId })
      })
        .then(freshPayload => {
          hydrateDataFromPayload(freshPayload);
          return loadPlanningCalendar({ renderAfter: false });
        })
        .then(() => {
          render();
          const contestObj = (window.M2Data?.contests || []).find(c => String(c.id) === String(newContestId));
          showToast(`Concurso foco alterado para ${contestObj?.name || 'novo concurso'}!`, 'success');
        })
        .catch(err => {
          console.warn('Falha na rota active-contest, tentando GET data...', err);
          api(`${planningBase()}/data?contest_id=${encodeURIComponent(newContestId)}`)
            .then(freshPayload => {
              hydrateDataFromPayload(freshPayload);
              return loadPlanningCalendar({ renderAfter: false });
            })
            .then(() => {
              render();
              const contestObj = (window.M2Data?.contests || []).find(c => String(c.id) === String(newContestId));
              showToast(`Concurso foco alterado para ${contestObj?.name || 'novo concurso'}!`, 'success');
            })
            .catch(() => {
              showToast('Não foi possível carregar os dados do concurso.', 'error');
              selectEl.disabled = false;
            });
        });
    } else if (e.target.dataset.action === 'change-timer-subject') {
      state.timerSubjectId = e.target.value;
      const sub = window.M2Data.subjects.find(s => s.id === e.target.value);
      if (sub) showToast(`Disciplina do cronômetro alterada para ${sub.name}`);
    } else if (e.target.dataset.action === 'change-cebraspe-inputs' || e.target.id === 'm2-ceb-penalty') {
      const total = parseInt(document.getElementById('m2-ceb-total')?.value || 120, 10);
      const correct = parseInt(document.getElementById('m2-ceb-correct')?.value || 0, 10);
      const wrong = parseInt(document.getElementById('m2-ceb-wrong')?.value || 0, 10);
      const penalty = parseFloat(document.getElementById('m2-ceb-penalty')?.value || 1.0);
      if (correct + wrong <= total) {
        state.cebraspeTotal = total;
        state.cebraspeCorrect = correct;
        state.cebraspeWrong = wrong;
        state.cebraspePenalty = penalty;
        render();
      }
    }
  });

  // 4. Ouvinte de Entrada (Input)
  document.addEventListener('input', (e) => {
    // 4.1 Delegar primeiro ao controlador do mentor
    if (handleMentorInput(e, { state, api, render, showToast, loadMentorResource, applyTheme })) return;

    // 4.2 Entradas do Aluno
    if (e.target.id === 'm2-input-mq-total' || e.target.id === 'm2-input-mq-correct') {
      const total = parseInt(document.getElementById('m2-input-mq-total')?.value || 0, 10);
      const correct = parseInt(document.getElementById('m2-input-mq-correct')?.value || 0, 10);
      const calcEl = document.getElementById('m2-manual-q-calc-pct');
      if (calcEl) {
        const pct = total > 0 ? Math.min(100, Math.round((correct / total) * 100)) : 0;
        calcEl.textContent = `${pct}% de acerto`;
      }
    } else if (e.target.id === 'm2-essay-editor') {
      state.essayDraftText = e.target.value;
      const words = e.target.value.trim().split(/\s+/).filter(Boolean).length;
      const lines = Math.max(1, e.target.value.split('\n').filter(Boolean).length);
      const wEl = document.getElementById('m2-essay-word-count');
      const lEl = document.getElementById('m2-essay-line-count');
      if (wEl) wEl.innerHTML = `<strong>${words}</strong> palavras`;
      if (lEl) lEl.innerHTML = `<strong>${lines}</strong> linhas`;
    }
  });

  // 5. Ticker para o cronômetro flutuante e Pomodoro (1 segundo)
  if (typeof window !== 'undefined') {
    if (window.__m2TimerInterval) clearInterval(window.__m2TimerInterval);
    window.__m2TimerInterval = setInterval(() => {
      if (state.timerRunning) {
        if (state.timerMode === 'pomodoro') {
          if (state.timerSeconds > 0) {
            state.timerSeconds--;
          } else {
            if (state.pomodoroPhase === 'focus') {
              state.pomodoroPhase = 'break';
              state.timerSeconds = 300;
              showToast('⏰ Pomodoro de foco concluído! Faça uma pausa de 5 minutos.', 'info');
            } else {
              state.pomodoroPhase = 'focus';
              state.pomodoroCycle++;
              state.timerSeconds = 1500;
              showToast('🔔 Pausa concluída! Iniciando novo ciclo de foco.', 'info');
            }
          }
        } else {
          state.timerSeconds++;
        }

        const formatted = formatTimer(state.timerSeconds);
        const displayEls = document.querySelectorAll('.m2-timer-display');
        displayEls.forEach(el => el.textContent = formatted);
        const pillTime = document.getElementById('m2-mini-pill-time');
        if (pillTime) pillTime.textContent = formatted;
        const topbarTime = document.getElementById('m2-topbar-timer-text');
        if (topbarTime) topbarTime.textContent = formatted;
      }
    }, 1000);
  }

  // 6. Atalhos de Teclado
  if (typeof window !== 'undefined') {
    if (window.__m2KeydownHandler) {
      document.removeEventListener('keydown', window.__m2KeydownHandler);
    }
    window.__m2KeydownHandler = (e) => {
      if (e.key === 'Enter' && e.target.id === 'm2-floating-ai-input') {
        e.preventDefault();
        const sendBtn = document.querySelector('[data-action="send-floating-ai-message"]');
        if (sendBtn) sendBtn.click();
        return;
      }

      if (e.key === 'Enter' && e.target.id === 'm2-quick-prompt-input' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const confirmBtn = document.querySelector('.m2-modal-content button.m2-btn-primary[data-action]');
        if (confirmBtn) confirmBtn.click();
        return;
      }

      const isEditing = e.target.matches('input, textarea, select');
      if (isEditing) return;

      if (e.code === 'Space' && state.screen === 'deck' && !state.cardRevealed) {
        e.preventDefault();
        state.cardRevealed = true;
        render();
      }

      if ((e.code === 'KeyP' || e.key === 'p' || e.key === 'P') && state.screen === 'questions' && state.selectedSubjectId && !state.studySessionComplete) {
        e.preventDefault();
        const skipBtn = document.querySelector('[data-action="skip-study-question"]');
        if (skipBtn) skipBtn.click();
      }
    };
    document.addEventListener('keydown', window.__m2KeydownHandler);
  }
}

export function destroyEvents() {
  if (typeof window !== 'undefined') {
    if (window.__m2TimerInterval) {
      clearInterval(window.__m2TimerInterval);
      window.__m2TimerInterval = null;
    }
    if (window.__m2KeydownHandler) {
      document.removeEventListener('keydown', window.__m2KeydownHandler);
      window.__m2KeydownHandler = null;
    }
    if (typeof document !== 'undefined') {
      document.__m2EventsAttached = false;
    }
  }
}

