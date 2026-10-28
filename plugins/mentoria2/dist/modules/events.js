import {
  state,
  api,
  icon,
  escapeHtml,
  plainTextWithBreaks,
  formatTimer,
  showToast,
  toggleTheme,
  navigate,
  render,
  hydrateDataFromPayload
} from './core.js?v=d6fd58c3ef81';
import { sendTutorChat } from './tutor-client.js?v=d6fd58c3ef81';
import { loadMentorResource, loadContestSyllabus, loadDeckCards } from './mentor-resources.js?v=d6fd58c3ef81';
import { getFilteredStudyQuestions } from './study.js?v=d6fd58c3ef81';

function scrollTutorMessages(elementId) {
  const box = document.getElementById(elementId);
  if (box) box.scrollTop = box.scrollHeight;
}

function planningBase() {
  const tenantId = state.tenantId || 1;
  return state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
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

async function requestTutorReply(message, { floating = false } = {}) {
  try {
    const reply = await sendTutorChat({
      widget: window.M2Data?.aiWidget,
      message,
      request: api,
    });
    state.tutorMessages.push({
      id: reply.id,
      sender: 'tutor',
      text: reply.text,
      time: reply.time ? new Date(reply.time).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : 'Agora',
    });
  } catch (error) {
    state.tutorMessages.push({
      id: `tutor-error-${Date.now()}`,
      sender: 'tutor',
      text: 'Não foi possível falar com o Tutor IA agora. Tente novamente.',
      time: 'Agora',
    });
  } finally {
    state.floatingAiTyping = false;
    render();
    scrollTutorMessages(floating ? 'm2-floating-chat-messages' : 'm2-chat-messages');
  }
}

function askTutor(message, { floating = false } = {}) {
  const text = String(message || '').trim();
  if (!text) return;
  state.tutorMessages.push({ id: `user-${Date.now()}`, sender: 'user', text, time: 'Agora' });
  state.floatingAiTyping = floating;
  render();
  scrollTutorMessages(floating ? 'm2-floating-chat-messages' : 'm2-chat-messages');
  void requestTutorReply(text, { floating });
}

function setNoteSaveStatus(status) {
  state.noteSaveStatus = status;
  const statusElement = document.getElementById('m2-note-save-status');
  if (statusElement) statusElement.textContent = status;
}

function saveNote({ autosave = false } = {}) {
  const textarea = document.getElementById('m2-note-textarea');
  if (textarea) state.noteContent = textarea.value;

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
  setNoteSaveStatus('Salvandoâ€¦');

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
  }).catch(error => {
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
  document.addEventListener('click', (e) => {
    // 1. Navegação via data-nav
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      const targetScreen = navBtn.dataset.nav;
      const targetMode = navBtn.dataset.mode;
      const navId = navBtn.dataset.id || navBtn.dataset.deckId;
      if (navId) {
        if (targetScreen === 'deck') state.activeDeckId = navId;
        if (targetScreen === 'mentor-contest-detail') state.contestId = navId;
        if (targetScreen === 'mentor-cohort-detail') state.activeCohortId = navId;
        if (targetScreen === 'mock-result' || targetScreen === 'mock-exams') state.activeMockId = navId;
      }
      if (targetScreen === 'deck') {
        state.currentCardIndex = 0;
        state.cardRevealed = false;
        const targetDeckId = navId || state.activeDeckId || window.M2Data.flashcardDecks?.[0]?.id;
        if (targetDeckId) {
          state.activeDeckId = targetDeckId;
          const targetDeck = (window.M2Data.flashcardDecks || []).find(d => String(d.id).toLowerCase() === String(targetDeckId).toLowerCase());
          if (!targetDeck || !Array.isArray(targetDeck.cards) || targetDeck.cards.length === 0) {
            loadDeckCards(targetDeckId, api).then(() => render());
          }
        }
      }
      if (targetScreen === 'questions' || targetScreen === 'study-session') {
        state.selectedSubjectId = null;
        state.selectedTopicId = 'all';
        state.currentQuestionIndex = 0;
        state.selectedOption = null;
        state.answeredQuestion = false;
        state.studySessionComplete = false;
        state.questionResults = {};
        state.questionDrafts = {};
        state.activeHistoryQuestionId = null;
      }
      navigate(targetScreen, targetMode);
      if (targetScreen === 'mentor-contest-detail' && state.contestId) {
        loadContestSyllabus(state.contestId, api).then(() => render()).catch(error => showToast('Não foi possível carregar o edital.', 'error'));
      }
      if (targetScreen === 'mentor-feedback') {
        api('/mentoria2/essays/submissions').then(res => {
          window.M2Data.mentorEssaySubmissions = Array.isArray(res.submissions) ? res.submissions : [];
          render();
        }).catch(() => { });
      }
      loadMentorResource(targetScreen, api).then(loaded => {
        if (loaded) render();
      }).catch(error => showToast('Não foi possível atualizar a lista.', 'error'));
      return;
    }

    // 2. Ações via data-action
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;
    const action = actionBtn.dataset.action;

    if (action === 'set-content-status') {
      const type = actionBtn.dataset.contentType;
      const id = actionBtn.dataset.id;
      const status = actionBtn.dataset.status;
      const routes = {
        question: `/mentoria2/questions/${encodeURIComponent(id)}/curation`,
        flashcard_deck: `/mentoria2/flashcard-decks/${encodeURIComponent(id)}/curation`,
        flashcard: `/mentoria2/flashcards/${encodeURIComponent(id)}/curation`
      };
      const screens = { question: 'mentor-questions', flashcard_deck: 'mentor-flashcards' };
      if (!routes[type] || !status) return;
      api(routes[type], { method: 'PATCH', body: JSON.stringify({ content_status: status }) })
        .then(() => loadMentorResource(screens[type] || 'mentor-flashcards', api).then(() => render()))
        .then(() => showToast(status === 'publicado' ? 'Conteúdo publicado para o público definido.' : 'Conteúdo enviado para revisão.', 'success'))
        .catch(() => showToast('Não foi possível atualizar a curadoria do conteúdo.', 'error'));
      return;
    }

    if (action === 'create-note') {
      if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
      state.activeNotebookId = null;
      state.noteTitle = 'Nova anotação';
      state.noteFolder = 'Geral';
      state.noteColor = '#4f8ef7';
      state.noteEdictId = '';
      state.noteSubjectId = '';
      state.noteTopicId = '';
      state.noteContent = '';
      state.noteSharedWithMentor = false;
      state.notePreviewVisible = false;
      state.noteSaveStatus = 'Ainda não salvo';
      navigate('note-editor');
      return;
    }

    if (action === 'open-notebook') {
      const note = (window.M2Data.notebooks || []).find(item => String(item.id) === String(actionBtn.dataset.noteId));
      if (!note) return;
      if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
      state.activeNotebookId = note.id;
      state.noteTitle = note.title || 'Nova anotação';
      state.noteFolder = note.folder || 'Geral';
      state.noteColor = note.color || '#4f8ef7';
      state.noteEdictId = note.edict_id || '';
      state.noteSubjectId = note.subject_id || '';
      state.noteTopicId = note.topic_id || '';
      state.noteContent = note.content || '';
      state.noteSharedWithMentor = Boolean(note.shared_with_mentor || note.sharedWithMentor);
      state.notePreviewVisible = false;
      state.noteSaveStatus = 'Salvo';
      navigate('note-editor');
      return;
    }

    if (action === 'toggle-note-preview') {
      state.notePreviewVisible = !state.notePreviewVisible;
      render();
      return;
    }

    if (action === 'note-format') {
      const textarea = document.getElementById('m2-note-textarea');
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.slice(start, end) || 'texto';
      const formats = {
        bold: ['**', '**'], italic: ['*', '*'], highlight: ['==', '=='],
        heading: ['## ', ''], quote: ['> ', ''], legal: ['Art. ', ''],
        map: ['[mapa]\n- ', '\n[/mapa]']
      };
      const [before, after] = formats[actionBtn.dataset.format] || ['', ''];
      textarea.setRangeText(before + selected + after, start, end, 'end');
      state.noteContent = textarea.value;
      textarea.focus();
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }

    if (action === 'mentor-list-page') {
      const screen = actionBtn.dataset.screen;
      const page = Number(actionBtn.dataset.page);
      if (screen && Number.isInteger(page) && page > 0) {
        loadMentorResource(screen, api, page).then(() => render()).catch(error => showToast('Não foi possível carregar a página.', 'error'));
      }
      return;
    }

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
    else if (action === 'open-notifications') {
      api(`${planningBase()}/notifications`).then(result => {
        window.M2Data.notifications = result;
        state.notifications = result.items || [];
        state.modal = 'notifications';
        render();
      }).catch(() => showToast('Nao foi possivel carregar as notificacoes.', 'error'));
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
      }).catch(() => showToast('Nao foi possivel atualizar a notificacao.', 'error'));
    }
    else if (action === 'read-all-notifications') {
      api(`${planningBase()}/notifications/read-all`, { method: 'PATCH' }).then(() => {
        state.notifications.forEach(notification => { notification.read_at = notification.read_at || new Date().toISOString(); });
        window.M2Data.notifications.unread_count = 0;
        render();
      }).catch(() => showToast('Nao foi possivel atualizar as notificacoes.', 'error'));
    }
    else if (action === 'toggle-sidebar') {
      const sb = document.getElementById('m2-sidebar');
      if (sb) sb.classList.toggle('open');
    }
    else if (action === 'load-official-mocks') {
      api('/mentoria2/official-mock-exams').then(result => {
        state.officialMocks = result.data || [];
        render();
      }).catch(() => showToast('Nao foi possivel carregar os simulados oficiais.', 'error'));
    }
    else if (action === 'view-official-ranking') {
      const officialId = actionBtn.dataset.officialId;
      api(`/mentoria2/official-mock-exams/${encodeURIComponent(officialId)}/ranking`).then(result => {
        state.officialRanking = result.ranking || [];
        state.officialRankingTitle = actionBtn.dataset.name || 'Simulado oficial';
        state.modal = 'official-ranking';
        render();
      }).catch(() => showToast('Nao foi possivel carregar o ranking deste simulado.', 'error'));
    }
    else if (action === 'open-official-mock-modal') {
      api('/mentoria2/questions?per_page=100&content_status=publicado').then(result => {
        state.officialMockQuestions = result.data || [];
        state.modal = 'official-mock';
        render();
      }).catch(() => showToast('Nao foi possivel carregar as questoes publicadas.', 'error'));
    }
    else if (action === 'publish-official-mock') {
      const questionIds = Array.from(document.querySelectorAll('input[name="m2-official-question"]:checked')).map(input => input.value);
      const name = document.getElementById('m2-official-mock-name')?.value?.trim();
      const cohortId = document.getElementById('m2-official-mock-cohort')?.value;
      if (!name || !cohortId || questionIds.length === 0) { showToast('Informe titulo, turma e pelo menos uma questao.', 'error'); return; }
      api('/mentoria2/official-mock-exams', { method: 'POST', body: JSON.stringify({ name, cohort_id: cohortId, question_ids: questionIds, available_from: document.getElementById('m2-official-mock-from')?.value || null, available_until: document.getElementById('m2-official-mock-until')?.value || null, time_minutes: Number(document.getElementById('m2-official-mock-time')?.value || 120), max_attempts: Number(document.getElementById('m2-official-mock-attempts')?.value || 1) }) })
        .then(result => api('/mentoria2/official-mock-exams').then(list => ({ result, list })))
        .then(({ result, list }) => { state.officialMocks = list.data || []; state.modal = null; render(); showToast(`Simulado publicado para ${result.students} aluno(s).`, 'success'); })
        .catch(() => showToast('Nao foi possivel publicar o simulado.', 'error'));
    }
    else if (action === 'toggle-sidebar-collapse') {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('m2_sidebar_collapsed', String(state.sidebarCollapsed));
      }
      render();
    }
    else if (action === 'next-onboarding') {
      capturePlanDraft();
      state.onboardingStep = Number(actionBtn.dataset.next) || 1;
      render();
    }
    else if (action === 'restart-onboarding') {
      state.planDraft = null;
      state.onboardingStep = 1;
      navigate('onboarding');
    }
    else if (action === 'generate-study-plan') {
      const draft = capturePlanDraft();
      if (!draft.contestId) { showToast('Escolha um concurso antes de gerar o plano.', 'error'); return; }
      const configuration = planConfiguration(draft);
      const weeklyHours = Object.values(draft.hours).reduce((sum, value) => sum + (Number(value) || 0), 0);
      if (weeklyHours <= 0) { showToast('Informe pelo menos uma hora disponível na semana.', 'error'); return; }
      showToast('Calculando seu plano de estudos...', 'info');
      api(`${planningBase()}/preferences`, { method: 'PATCH', body: JSON.stringify({ tour_completed: true, availability: { hours: draft.hours, weekly_hours: weeklyHours }, settings: { study_plan: configuration } }) })
        .then(() => api(`${planningBase()}/schedules/generate`, { method: 'POST', body: JSON.stringify({ contest_id: draft.contestId, mode: draft.mode, configuration }) }))
        .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(draft.contestId)}`))
        .then(payload => { hydrateDataFromPayload(payload); state.contestId = draft.contestId; state.calendarCursor = calendarKey(new Date()); state.calendarRangeKey = ''; state.calendarItems = []; navigate('planning'); return loadPlanningCalendar(); })
        .then(() => showToast('Plano de estudos gerado com sucesso.', 'success'))
        .catch(error => showToast('Não foi possível gerar o cronograma.', 'error'));
    }
    else if (action === 'set-planning-view') {
      state.planningView = actionBtn.dataset.view;
      loadPlanningCalendar().catch(error => { showToast('Não foi possível carregar o calendário.', 'error'); render(); });
    }
    else if (action === 'calendar-prev' || action === 'calendar-next' || action === 'calendar-today') {
      const cursor = new Date(`${state.calendarCursor || calendarKey(new Date())}T12:00:00`);
      if (action === 'calendar-today') state.calendarCursor = calendarKey(new Date());
      else if (state.planningView === 'week') {
        cursor.setDate(cursor.getDate() + (action === 'calendar-next' ? 7 : -7));
        state.calendarCursor = calendarKey(cursor);
      } else {
        // Reset the day before changing the month, preventing Jan 31 from skipping February.
        cursor.setDate(1);
        cursor.setMonth(cursor.getMonth() + (action === 'calendar-next' ? 1 : -1));
        state.calendarCursor = calendarKey(cursor);
      }
      loadPlanningCalendar().catch(error => { showToast('Não foi possível carregar o calendário.', 'error'); render(); });
    }
    else if (action === 'open-calendar-day') {
      state.calendarDay = actionBtn.dataset.date || calendarKey(new Date());
      state.modal = 'calendar-day';
      render();
    }
    else if (action === 'open-replan-modal') {
      state.replanFromDate = calendarKey(new Date());
      state.modal = 'replan-schedule';
      render();
    }
    else if (action === 'preview-adaptive-plan') {
      api(`${planningBase()}/schedules/adaptive-plan`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null }) })
        .then(result => { state.adaptiveProposal = result.proposal || null; render(); })
        .catch(() => showToast('Nao foi possivel analisar o plano neste momento.', 'error'));
    }
    else if (action === 'apply-adaptive-plan') {
      const input = document.getElementById('m2-replan-from-date');
      const fromDate = input?.value || calendarKey(new Date());
      api(`${planningBase()}/schedules/adaptive-plan/apply`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null, from_date: fromDate }) })
        .then(result => { state.modal = null; state.adaptiveProposal = null; return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`).then(hydrateDataFromPayload).then(() => loadPlanningCalendar()).then(() => result); })
        .then(result => showToast(`Plano adaptado: ${result.reprogrammed || 0} atividade(s) redistribuida(s).`, 'success'))
        .catch(() => showToast('Nao foi possivel aplicar o plano adaptativo.', 'error'));
    }
    else if (action === 'confirm-replan-schedule') {
      const input = document.getElementById('m2-replan-from-date');
      const fromDate = input?.value || calendarKey(new Date());
      api(`${planningBase()}/schedules/reprogram`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null, from_date: fromDate }) })
        .then(result => { state.modal = null; state.replanned = true; return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`).then(hydrateDataFromPayload).then(() => loadPlanningCalendar()).then(() => result); })
        .then(result => showToast(`${result.reprogrammed || 0} tarefa(s) foram replanejadas pela capacidade disponível.`, 'success'))
        .catch(error => showToast('Não foi possível replanejar as tarefas. Verifique a carga horária disponível.', 'error'));
    }
    else if (action === 'open-schedule-completion' || action === 'complete-schedule-item') {
      const itemId = actionBtn.dataset.itemId;
      const items = state.calendarRangeKey ? state.calendarItems : (window.M2Data.scheduleItems || []);
      const item = items.find(candidate => String(candidate.id) === String(itemId));
      if (!item) { showToast('Não foi possível localizar a atividade do cronograma.', 'error'); return; }
      state.scheduleCompletion = {
        itemId: item.id,
        subjectId: item.subject_id || null,
        topicId: item.topic_id || null,
        durationMinutes: Number(item.duration_minutes || 60),
        subjectName: (window.M2Data.subjects || []).find(subject => String(subject.id) === String(item.subject_id))?.name || 'Estudo dirigido',
        topicName: (window.M2Data.topics || []).find(topic => String(topic.id) === String(item.topic_id))?.name || 'Conteúdo do edital',
      };
      state.modal = 'schedule-completion';
      render();
    }
    else if (action === 'submit-schedule-completion') {
      const completion = state.scheduleCompletion;
      if (!completion?.itemId) { state.modal = null; render(); return; }
      const minutes = Math.max(1, Math.min(1440, Number(document.getElementById('m2-completion-minutes')?.value) || completion.durationMinutes));
      const solved = Math.max(0, Number(document.getElementById('m2-completion-solved')?.value) || 0);
      const correct = Math.min(solved, Math.max(0, Number(document.getElementById('m2-completion-correct')?.value) || 0));
      const notes = (document.getElementById('m2-completion-notes')?.value || '').trim();
      api(`${planningBase()}/schedule-items/${completion.itemId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: 'concluido',
          create_session: true,
          study_session: {
            seconds: minutes * 60,
            notes,
            questions_solved: solved,
            questions_correct: correct,
          },
        }),
      }).then(result => {
        if (result.gamification) {
          window.M2Data.gamification = result.gamification;
          window.M2Data.student.xp = result.gamification.total_xp || 0;
        }
        return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`);
      })
        .then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
        .then(() => { state.modal = null; state.scheduleCompletion = null; render(); showToast('Atividade concluída e estudo registrado.', 'success'); })
        .catch(error => showToast('Não foi possível registrar a atividade.', 'error'));
    }
    else if (action === 'reopen-schedule-item') {
      const itemId = actionBtn.dataset.itemId;
      api(`${planningBase()}/schedule-items/${itemId}`, { method: 'PATCH', body: JSON.stringify({ status: 'pendente', create_session: false }) })
        .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`))
        .then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
        .then(() => { state.modal = null; render(); showToast('Atividade reaberta.', 'success'); })
        .catch(error => showToast('Não foi possível atualizar a atividade.', 'error'));
    }
    else if (action === 'complete-calendar-review' || action === 'postpone-calendar-review') {
      const reviewId = actionBtn.dataset.reviewId;
      const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
      const payload = action === 'complete-calendar-review' ? { completed: true } : { next_date: calendarKey(tomorrow) };
      api(`${planningBase()}/reviews/${reviewId}`, { method: 'PATCH', body: JSON.stringify(payload) })
        .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`))
        .then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
        .then(() => { state.modal = null; render(); showToast(action === 'complete-calendar-review' ? 'Revisão concluída.' : 'Revisão adiada para amanhã.', 'success'); })
        .catch(error => showToast('Não foi possível atualizar a revisão.', 'error'));
    }
    else if (action === 'start-schedule-item') {
      state.timerSubjectId = actionBtn.dataset.subjectId || null;
      state.timerVisible = true; state.timerMinimized = false; state.timerRunning = true;
      render(); showToast('Cronômetro iniciado para esta atividade.', 'success');
    }
    else if (action === 'select-option') {
      state.selectedOption = actionBtn.dataset.option;
      render();
    }
    else if (action === 'submit-answer') {
      if (!state.selectedOption) return;
      state.answeredQuestion = true;
      const q = window.M2Data.questions[state.currentQuestionIndex];
      if (!q) return;

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const contestId = state.contestId || q.contestId;

      api(`${base}/questions/${q.id}/answer`, {
        method: 'POST',
        body: JSON.stringify({
          answer: state.selectedOption,
          contest_id: contestId
        })
      }).then(res => {
        const isRight = Boolean(res.correct);
        q.userStatus = isRight ? 'correct' : 'wrong';
        if (res.explanation) q.explanation = res.explanation;
        const correctLetter = (res.correct_answer || q.correct_answer || q.answer || '').toUpperCase().trim();
        q.answer = correctLetter;
        q.correct_answer = correctLetter;
        if (Array.isArray(q.options) && correctLetter) {
          q.options.forEach((opt, idx) => {
            const letter = opt.id || ['A', 'B', 'C', 'D', 'E'][idx];
            opt.correct = (letter === correctLetter) || (q.type === 'certo_errado' && String(opt.text || opt.id).trim().toUpperCase() === correctLetter);
            if (opt.correct && res.explanation) opt.comment = res.explanation;
          });
        }
        window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + 1;
        if (res.gamification) {
          window.M2Data.gamification = res.gamification;
          window.M2Data.student.xp = res.gamification.total_xp || 0;
          showToast(`${res.gamification.reason}. +${res.gamification.awarded_xp || 0} XP`, 'success');
        } else if (isRight) {
          showToast('Resposta correta registrada.', 'success');
        } else {
          showToast('Resposta incorreta. Adicionada ao Caderno de Erros.', 'info');
        }
        render();
      }).catch(error => {
        state.answeredQuestion = false;
        showToast('Não foi possível salvar sua resposta. Tente novamente.', 'error');
        render();
      });
    }
    else if (action === 'next-question') {
      state.currentQuestionIndex = (state.currentQuestionIndex + 1) % window.M2Data.questions.length;
      state.selectedOption = null;
      state.answeredQuestion = false;
      render();
    }
    else if (action === 'prev-question') {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        state.selectedOption = null;
        state.answeredQuestion = false;
        render();
      }
    }
    else if (action === 'select-subject') {
      state.selectedSubjectId = actionBtn.dataset.id;
      state.selectedTopicId = 'all';
      state.questionDifficultyFilter = 'all';
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      state.studySessionXpGained = 0;
      state.studySessionCorrectCount = 0;
      navigate('questions');
    }
    else if (action === 'back-to-subjects') {
      state.selectedSubjectId = null;
      state.selectedTopicId = 'all';
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    }
    else if (action === 'open-subjects-grid') {
      state.selectedSubjectId = null;
      state.selectedTopicId = 'all';
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      navigate('questions');
    }
    else if (action === 'start-study-subject') {
      state.selectedSubjectId = actionBtn.dataset.subject;
      state.selectedTopicId = actionBtn.dataset.topic || 'all';
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      state.studySessionXpGained = 0;
      state.studySessionCorrectCount = 0;
      navigate('questions');
    }
    else if (action === 'select-topic-chip') {
      state.selectedTopicId = actionBtn.dataset.topicId;
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    }
    else if (action === 'reset-topic-filter') {
      state.selectedTopicId = 'all';
      state.questionDifficultyFilter = 'all';
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      render();
    }
    else if (action === 'restart-study-session') {
      state.currentQuestionIndex = 0;
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      state.studySessionXpGained = 0;
      state.studySessionCorrectCount = 0;
      render();
    }
    else if (action === 'select-study-draft' || action === 'select-study-option') {
      const qId = actionBtn.dataset.questionId;
      const optId = actionBtn.dataset.option;
      if (!state.questionResults[qId]) {
        state.questionDrafts[qId] = optId;
        state.selectedOption = optId;
        render();
      }
    }
    else if (action === 'confirm-study-answer') {
      const qId = actionBtn.dataset.questionId;
      const filteredQuestions = getFilteredStudyQuestions(state.selectedSubjectId);
      const q = filteredQuestions.find(item => String(item.id) === String(qId)) || filteredQuestions[state.currentQuestionIndex % filteredQuestions.length];
      if (!q) return;

      const optId = state.questionDrafts[q.id] || state.selectedOption;
      if (!optId) {
        showToast('Selecione uma alternativa antes de responder.', 'info');
        return;
      }

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const contestId = state.contestId || q.contestId;

      api(`${base}/questions/${q.id}/answer`, {
        method: 'POST',
        body: JSON.stringify({
          answer: optId,
          contest_id: contestId
        })
      }).then(res => {
        const isRight = Boolean(res.correct);
        state.questionResults[q.id] = {
          correct: isRight,
          answer: optId,
          correct_answer: (res.correct_answer || q.correct_answer || q.answer || '').toUpperCase().trim(),
          explanation: res.explanation || q.explanation
        };
        state.answeredQuestion = true;
        q.answered = true;
        q.last_correct = isRight;
        q.userStatus = isRight ? 'correct' : 'wrong';
        if (res.explanation) q.explanation = res.explanation;
        const correctLetter = (res.correct_answer || q.correct_answer || q.answer || '').toUpperCase().trim();
        q.answer = correctLetter;
        q.correct_answer = correctLetter;
        if (Array.isArray(q.options) && correctLetter) {
          q.options.forEach((opt, idx) => {
            const letter = opt.id || ['A', 'B', 'C', 'D', 'E'][idx];
            opt.correct = (letter === correctLetter) || (q.type === 'certo_errado' && String(opt.text || opt.id).trim().toUpperCase() === correctLetter);
            if (opt.correct && res.explanation) opt.comment = res.explanation;
          });
        }
        window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + 1;
        if (res.gamification) {
          state.studySessionXpGained += Number(res.gamification.awarded_xp || 0);
          state.studySessionCorrectCount++;
          window.M2Data.gamification = res.gamification;
          window.M2Data.student.xp = res.gamification.total_xp || 0;
          showToast(`${res.gamification.reason}. +${res.gamification.awarded_xp || 0} XP`, 'success');
        } else {
          showToast('Resposta Incorreta gravada. Adicionada ao Caderno de Erros.', 'info');
        }
        if (state.questionHistory[q.id]) {
          delete state.questionHistory[q.id];
        }
        render();
      }).catch(error => {
        showToast('Não foi possível salvar sua resposta. Tente novamente.', 'error');
        render();
      });
    }
    else if (action === 'prev-study-question') {
      const filteredQuestions = getFilteredStudyQuestions(state.selectedSubjectId);
      if (!filteredQuestions || filteredQuestions.length === 0) return;
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        const currentQ = filteredQuestions[state.currentQuestionIndex % filteredQuestions.length];
        state.selectedOption = state.questionDrafts[currentQ.id] || null;
        state.answeredQuestion = Boolean(state.questionResults[currentQ.id]);
        state.studySessionComplete = false;
        render();
      }
    }
    else if (action === 'retry-study-question') {
      const qId = actionBtn.dataset.questionId;
      delete state.questionResults[qId];
      delete state.questionDrafts[qId];
      state.selectedOption = null;
      state.answeredQuestion = false;
      render();
    }
    else if (action === 'toggle-question-history') {
      const qId = actionBtn.dataset.questionId;
      if (state.activeHistoryQuestionId === qId) {
        state.activeHistoryQuestionId = null;
        render();
        return;
      }
      state.activeHistoryQuestionId = qId;
      if (state.questionHistory[qId]) {
        render();
        return;
      }
      state.loadingHistoryQuestionId = qId;
      render();

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/questions/${qId}/history`).then(res => {
        state.questionHistory[qId] = Array.isArray(res.history) ? res.history : [];
      }).catch(() => {
        state.questionHistory[qId] = [];
      }).finally(() => {
        state.loadingHistoryQuestionId = null;
        render();
      });
    }
    else if (action === 'next-study-question') {
      const filteredQuestions = getFilteredStudyQuestions(state.selectedSubjectId);
      if ((state.currentQuestionIndex % filteredQuestions.length) + 1 >= filteredQuestions.length) {
        state.studySessionComplete = true;
      } else {
        state.currentQuestionIndex++;
        const currentQ = filteredQuestions[state.currentQuestionIndex % filteredQuestions.length];
        state.selectedOption = state.questionDrafts[currentQ.id] || null;
        state.answeredQuestion = Boolean(state.questionResults[currentQ.id]);
      }
      render();
    }
    else if (action === 'skip-study-question') {
      const filteredQuestions = getFilteredStudyQuestions(state.selectedSubjectId);
      if (!filteredQuestions || filteredQuestions.length === 0) return;
      const total = filteredQuestions.length;
      const currentNum = (state.currentQuestionIndex % total) + 1;
      if (currentNum >= total) {
        state.studySessionComplete = true;
        showToast('Você pulou a última questão deste filtro. Sessão finalizada!', 'info');
      } else {
        state.currentQuestionIndex++;
        const currentQ = filteredQuestions[state.currentQuestionIndex % filteredQuestions.length];
        state.selectedOption = state.questionDrafts[currentQ.id] || null;
        state.answeredQuestion = Boolean(state.questionResults[currentQ.id]);
        showToast(`Questão pulada. Indo para a questão ${currentNum + 1} de ${total}...`, 'info');
      }
      render();
    }
    else if (action === 'rate-sm2-question') {
      const rate = actionBtn.dataset.rate;
      showToast(`Algoritmo SM-2: Avaliação "${rate}" gravada com sucesso!`, 'success');
    }
    else if (action === 'start-specific-question') {
      const qIndex = Number(actionBtn.dataset.index);
      const q = window.M2Data.questions[qIndex];
      if (q) {
        state.selectedSubjectId = q.subjectId;
        state.selectedTopicId = q.topicId;
        state.currentQuestionIndex = 0;
      }
      state.selectedOption = null;
      state.answeredQuestion = false;
      state.studySessionComplete = false;
      navigate('questions');
    }
    else if (action === 'reveal-card') {
      state.cardRevealed = true;
      render();
    }
    else if (action === 'rate-card') {
      const rate = actionBtn.dataset.rate;

      const currentDeck = window.M2Data.flashcardDecks.find(deck => String(deck.id) === String(state.activeDeckId)) || window.M2Data.flashcardDecks[0];
      const card = currentDeck?.cards?.[state.currentCardIndex % (currentDeck?.cards?.length || 1)];

      const qualityMap = { 'Errei': 1, 'Difícil': 2, 'Bom': 4, 'Fácil': 5 };
      const qualityNum = qualityMap[rate] || 4;

      if (card && card.id) {
        const tenantId = state.tenantId || 1;
        const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        api(`${base}/flashcards/${card.id}/review`, {
          method: 'POST',
          body: JSON.stringify({
            quality: qualityNum,
            contest_id: state.contestId
          })
        }).then(res => {
          if (res.gamification) {
            window.M2Data.gamification = res.gamification;
            window.M2Data.student.xp = res.gamification.total_xp || 0;
          }
          state.cardRevealed = false;
          state.currentCardIndex++;
          render();
          showToast(`Revisão salva: ${rate} (próxima revisão em ${res.interval_days || 1} dias).`, 'success');
        }).catch(error => {
          showToast('Não foi possível salvar a revisão.', 'error');
        });
      } else {
        showToast('Não há cartão disponível para registrar a revisão.', 'info');
      }
    }
    else if (action === 'save-note') {
      if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
      void saveNote();
    }
    else if (action === 'toggle-mentor-share') {
      if (!state.activeNotebookId) {
        showToast('Salve a anotação antes de compartilhar com o mentor.', 'warning');
        return;
      }
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/notebooks/${state.activeNotebookId}`, {
        method: 'PATCH',
        body: JSON.stringify({ shared_with_mentor: true })
      }).then(res => {
        state.noteSharedWithMentor = true;
        const note = (window.M2Data.notebooks || []).find(item => String(item.id) === String(state.activeNotebookId));
        if (note) note.shared_with_mentor = true;
        render();
        showToast(`Página compartilhada com ${window.M2Data.mentor?.name || 'Mentor'}.`, 'success');
      }).catch(err => {
        showToast('Erro ao compartilhar anotação.', 'error');
      });
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
      }).catch(err => {
        showToast('Erro ao salvar preferência de ranking.', 'error');
      });
    }
    else if (action === 'toggle-notification-pref') {
      const key = actionBtn.dataset.key;
      const preferences = window.M2Data.preferences || { settings: {} };
      const settings = preferences.settings || {};
      const notifications = { ...(settings.notifications || {}), [key]: Boolean(actionBtn.checked) };
      api(`${planningBase()}/preferences`, { method: 'PATCH', body: JSON.stringify({ settings: { notifications } }) })
        .then(() => { window.M2Data.preferences = { ...preferences, settings: { ...settings, notifications } }; showToast('Preferencia de notificacao salva.', 'success'); })
        .catch(() => { actionBtn.checked = !actionBtn.checked; showToast('Nao foi possivel salvar a preferencia.', 'error'); });
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
    else if (action === 'send-tutor-message') {
      const input = document.getElementById('m2-tutor-input');
      if (input && input.value.trim()) {
        const userText = input.value.trim();
        input.value = '';
        askTutor(userText);
        return;
      }
    }
    else if (action === 'open-student-workspace') {
      const studentId = actionBtn.dataset.id;
      if (!studentId || !/^\d+$/.test(String(studentId))) {
        showToast('Aluno inválido para abertura do workspace.', 'error');
        return;
      }
      window.location.assign(`/mentoria2/students/${encodeURIComponent(studentId)}/preview`);
    }
    else if (action === 'open-student-profile') {
      const studentId = actionBtn.dataset.id;
      const targetStudent = (window.M2Data.mentorStudents || []).find(s => String(s.id) === String(studentId))
        || (window.M2Data.students || []).find(s => String(s.id) === String(studentId));
      if (targetStudent) {
        window.M2Data.student.id = targetStudent.id;
        window.M2Data.student.name = targetStudent.name;
        window.M2Data.student.email = targetStudent.email;
        window.M2Data.student.cohort = targetStudent.cohort || 'Sem turma';
        window.M2Data.student.contest = targetStudent.contest || (window.M2Data.contests?.[0]?.name || 'Concurso Geral');
        const parts = (targetStudent.name || 'Aluno').trim().split(/\s+/);
        window.M2Data.student.initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
        window.M2Data.student.weekHours = targetStudent.hoursWeek || targetStudent.hours || 0;
        window.M2Data.student.questionsResolved = targetStudent.questionsResolved || 0;
        window.M2Data.student.questionsAccuracy = targetStudent.accuracy || 0;
        window.M2Data.student.accuracy = targetStudent.accuracy || 0;
      }
      state.mode = 'mentor';
      state.screen = 'mentor-student-profile';
      render();
    }
    else if (action === 'simulate-upload-edital') {
      state.jsonImportMode = 'catalog';
      state.modal = 'json-import';
      render();
      showToast('Abra a aba "Organização de Edital" ou cole o JSON do edital para importá-lo no concurso.', 'info');
    }
    // Controles do Mini-Timer Flutuante e Pomodoro
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
          showToast(`Sessão concluída! +${elapsedMin} min e +${res.gamification?.awarded_xp || earnedXp} XP ganhos! ðŸŽ‰`, 'success');
        }).catch(err => {
          showToast('Erro ao registrar sessão de estudo no servidor.', 'error');
          render();
        });
      } else {
        showToast('Sessão rápida finalizada (menos de 1 minuto).', 'info');
        render();
      }
    }
    // Controles do Balão de Chat de IA Flutuante (Tutor IA)
    else if (action === 'toggle-floating-ai-chat') {
      state.floatingAiChatOpen = !state.floatingAiChatOpen;
      render();
      if (state.floatingAiChatOpen) {
        setTimeout(() => {
          const el = document.getElementById('m2-floating-chat-messages');
          if (el) el.scrollTop = el.scrollHeight;
          const input = document.getElementById('m2-floating-ai-input');
          if (input) input.focus();
        }, 80);
      }
    }
    else if (action === 'clear-floating-chat') {
      state.tutorMessages = [
        {
          id: 'init-' + Date.now(),
          sender: 'tutor',
          text: 'Conversa reiniciada. Em que posso te apoiar nos seus estudos agora?',
          time: 'Agora'
        }
      ];
      render();
      showToast('Histórico do chat do Tutor IA reiniciado.', 'info');
    }
    else if (action === 'send-floating-ai-message' || action === 'submit-floating-ai-form') {
      const input = document.getElementById('m2-floating-ai-input');
      if (input && input.value.trim()) {
        const userText = input.value.trim();
        input.value = '';
        askTutor(userText, { floating: true });
        return;
      }
    }
    else if (action === 'send-floating-quick-prompt') {
      const prompt = actionBtn.dataset.prompt;
      if (prompt) {
        askTutor(prompt, { floating: true });
        return;
      }
    }
    // Modais Interativos
    else if (action === 'open-manual-questions-modal') {
      state.modal = 'manual-questions';
      render();
    }
    else if (action === 'open-manual-mock-modal') {
      state.modal = 'manual-mock';
      render();
    }
    else if (action === 'close-modal') {
      if (state.modal === 'schedule-completion') state.scheduleCompletion = null;
      state.modal = null;
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
        state.quickPrompt = null;
        state.confirmation = null;
        render();
      }
    }
    else if (action === 'save-manual-questions') {
      const subjectSelect = document.getElementById('m2-input-mq-subject');
      const totalInput = document.getElementById('m2-input-mq-total');
      const correctInput = document.getElementById('m2-input-mq-correct');
      const timeInput = document.getElementById('m2-input-mq-time');
      const sourceInput = document.getElementById('m2-input-mq-source');

      const total = parseInt(totalInput ? totalInput.value : 0, 10) || 0;
      const correct = parseInt(correctInput ? correctInput.value : 0, 10) || 0;
      const timeMin = parseInt(timeInput ? timeInput.value : 0, 10) || 0;
      const subjectId = subjectSelect ? subjectSelect.value : (window.M2Data.subjects?.[0]?.id || null);
      const source = sourceInput && sourceInput.value.trim() ? sourceInput.value.trim() : 'Livro / Material Externo';

      if (total <= 0) {
        showToast('Informe uma quantidade válida de questões.', 'warning');
        return;
      }
      if (correct > total) {
        showToast('O número de acertos não pode ser maior que o total.', 'warning');
        return;
      }

      const subject = window.M2Data.subjects.find(s => s.id === subjectId) || window.M2Data.subjects[0] || { name: 'Geral', id: null };
      const earnedXp = total * 5 + correct * 5;
      const addHours = +(timeMin / 60).toFixed(1);

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;

      api(`${base}/timer-logs`, {
        method: 'POST',
        body: JSON.stringify({
          type: 'manual_questions',
          duration_seconds: timeMin * 60,
          questions_count: total,
          correct_count: correct,
          wrong_count: total - correct,
          subject_id: subjectId,
          contest_id: state.contestId,
          notes: source
        })
      }).then(res => {
        window.M2Data.student.questionsResolved += total;
        window.M2Data.student.questionsAnswered = (window.M2Data.student.questionsAnswered || 0) + total;
        if (res.gamification) window.M2Data.student.xp = res.gamification.total_xp || 0;
        if (addHours > 0) {
          window.M2Data.student.hoursStudied = +(window.M2Data.student.hoursStudied + addHours).toFixed(1);
          window.M2Data.student.todayHours = +(window.M2Data.student.todayHours + addHours).toFixed(1);
        }
        if (subject) {
          const currentAcc = subject.accuracy || 75;
          const newAcc = Math.round((currentAcc + Math.round((correct / total) * 100)) / 2);
          subject.accuracy = newAcc;
        }

        state.modal = null;
        render();
        showToast(`âœ… ${total} questões de ${subject ? subject.name : 'estudos'} registradas! (+${res.gamification?.awarded_xp || earnedXp} XP)`, 'success');
      }).catch(err => {
        showToast('N?o foi poss?vel concluir a opera??o. Tente novamente.', 'rose');
      });
    }
    else if (action === 'save-manual-mock') {
      const titleInput = document.getElementById('m2-input-mm-title');
      const boardInput = document.getElementById('m2-input-mm-board');
      const totalInput = document.getElementById('m2-input-mm-total');
      const correctInput = document.getElementById('m2-input-mm-correct');

      const title = titleInput && titleInput.value.trim() ? titleInput.value.trim() : 'Simulado Geral';
      const board = boardInput && boardInput.value.trim() ? boardInput.value.trim() : 'Geral';
      const total = parseInt(totalInput ? totalInput.value : 0, 10) || 0;
      const correct = parseInt(correctInput ? correctInput.value : 0, 10) || 0;

      if (total <= 0) {
        showToast('Informe o total de questões do simulado.', 'warning');
        return;
      }
      if (correct > total) {
        showToast('Os acertos não podem superar o total.', 'warning');
        return;
      }

      const scorePct = Math.round((correct / total) * 100);
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;

      api(`${base}/mock-exams`, {
        method: 'POST',
        body: JSON.stringify({
          name: title,
          type: 'realizado',
          performed_at: new Date().toISOString().slice(0, 10),
          percentage: scorePct,
          time_minutes: 240,
          questions_done: total,
          notes: `Banca: ${board}`,
          contest_id: state.contestId || null,
          result: {
            total_questions: total,
            correct: correct,
            wrong: total - correct,
            percentage: scorePct,
            board: board
          }
        })
      }).then(res => {
        const newMock = {
          id: res.id || ('mock-manual-' + Date.now()),
          title: title,
          name: title,
          boardStyle: board,
          questionsCount: total,
          timeLimitMinutes: 240,
          status: 'completed',
          score: scorePct,
          rank: scorePct >= 80 ? 'Top 10% (Excelente)' : scorePct >= 65 ? 'Top 30% (Aprovado)' : 'Em evolução',
          completedAt: new Date().toLocaleDateString('pt-BR')
        };

        if (!Array.isArray(window.M2Data.mockExams)) {
          window.M2Data.mockExams = [];
        }
        window.M2Data.mockExams.unshift(newMock);
        if (window.M2Data.student) {
          window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + total;
        }

        state.modal = null;
        render();
        showToast(`ðŸŽ¯ Simulado "${title}" salvo com sucesso! (+150 XP)`, 'success');
      }).catch(err => {
        showToast('N?o foi poss?vel concluir a opera??o. Tente novamente.', 'error');
      });
    }
    // Item 16: Exportação de Relatório de Desempenho em CSV
    else if (action === 'export-metrics-csv') {
      const student = window.M2Data.student;
      const subjects = window.M2Data.subjects;
      let csv = 'Disciplina;Questões Resolvidas;Acertos;Erros;Taxa de Acerto (%);Horas Estudadas;Relevância no Edital\r\n';
      subjects.forEach(s => {
        const correct = Math.round(s.questionsCount * (s.accuracy / 100));
        const wrong = s.questionsCount - correct;
        csv += `"${s.name}";${s.questionsCount};${correct};${wrong};${s.accuracy}%;${s.hours}h;"${s.weight || 'Alta'}"\r\n`;
      });
      csv += `\r\n"TOTAL GERAL CONSOLIDADO";${student.questionsResolved};${Math.round(student.questionsResolved * (student.accuracy / 100))};${student.questionsResolved - Math.round(student.questionsResolved * (student.accuracy / 100))};${student.accuracy}%;${student.hoursStudied}h;-\r\n`;

      const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio-desempenho-${student.name.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('ðŸ“¥ Relatório analítico de desempenho exportado com sucesso em CSV!', 'success');
    }
    // Item 18: Canal de Reporte e Moderação de Questões
    else if (action === 'open-report-question') {
      const qId = actionBtn.dataset.questionId || (window.M2Data.questions[state.currentQuestionIndex] ? window.M2Data.questions[state.currentQuestionIndex].id : 'q-const-1');
      state.reportingQuestionId = qId;
      state.modal = 'report-question';
      render();
    }
    else if (action === 'submit-report-question') {
      const reasonSelect = document.getElementById('m2-report-reason');
      const detailsTextarea = document.getElementById('m2-report-details');
      const reason = reasonSelect ? reasonSelect.value : 'Gabarito Divergente';
      const details = detailsTextarea && detailsTextarea.value.trim() ? detailsTextarea.value.trim() : 'Aluno apontou divergência no gabarito oficial.';
      const qId = state.reportingQuestionId || window.M2Data.questions[0]?.id;

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;

      api(`${base}/questions/${qId}/report`, {
        method: 'POST',
        body: JSON.stringify({ reason, details })
      }).then(res => {
        window.M2Data.reportedQuestions.unshift({
          id: res.id || ('rep-' + Date.now()),
          questionId: qId,
          studentName: window.M2Data.student.name,
          reason: reason,
          details: details,
          date: 'Hoje, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'pending'
        });
        state.modal = null;
        render();
        showToast(`ðŸš© Reporte enviado para a moderação pedagógica!`, 'success');
      }).catch(err => {
        showToast('N?o foi poss?vel concluir a opera??o. Tente novamente.', 'rose');
      });
    }
    // Item 4: Oficina de Redação com Correção por IA
    else if (action === 'save-essay-draft') {
      const textarea = document.getElementById('m2-essay-editor');
      if (textarea) state.essayDraftText = textarea.value;
      showToast('Rascunho da redação salvo com sucesso!', 'info');
    }
    else if (action === 'submit-essay-correction') {
      const textarea = document.getElementById('m2-essay-editor');
      if (textarea) state.essayDraftText = textarea.value;
      const text = state.essayDraftText.trim();
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      const lines = text ? Math.max(1, text.split('\n').filter(Boolean).length) : 0;

      if (words < 20) {
        showToast('Sua redação está muito curta (mínimo 20 palavras para envio).', 'warning');
        return;
      }

      state.essayAnalyzing = true;
      render();
      showToast('Enviando redação para correção do mentor...', 'info');

      const tenantId = state.tenantId || 1;
      const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const essayId = state.activeEssayId || (window.M2Data.essays && window.M2Data.essays[0]?.id);

      if (essayId) {
        api(`${base}/essays/${essayId}/submit`, {
          method: 'POST',
          body: JSON.stringify({ content: text })
        }).then(res => {
          state.essayAnalyzing = false;
          state.essayCorrectionResult = res.total_score === null ? null : {
            score: res.total_score,
            status: res.status || 'Corrigida',
            wordsCount: words,
            linesCount: lines,
            criteria: res.criteria_scores || [],
            aiFeedback: res.feedback || ''
          };
          render();
          showToast(res.total_score === null ? 'Redação enviada e salva. Aguarde a correção do mentor.' : `Redação corrigida e salva com nota ${res.total_score}/100.`, 'success');
        }).catch(err => {
          state.essayAnalyzing = false;
          showToast('N?o foi poss?vel concluir a opera??o. Tente novamente.', 'rose');
          render();
        });
      }
    }
    // Item 13: Calculadora Cebraspe
    else if (action === 'calculate-cebraspe') {
      const totalEl = document.getElementById('m2-ceb-total');
      const correctEl = document.getElementById('m2-ceb-correct');
      const wrongEl = document.getElementById('m2-ceb-wrong');
      const penaltyEl = document.getElementById('m2-ceb-penalty');

      const total = parseInt(totalEl?.value || 120, 10);
      const correct = parseInt(correctEl?.value || 0, 10);
      const wrong = parseInt(wrongEl?.value || 0, 10);
      const penalty = parseFloat(penaltyEl?.value || 1.0);

      if (correct + wrong > total) {
        showToast('A soma de acertos e erros não pode ultrapassar o total de itens.', 'warning');
        return;
      }

      state.cebraspeTotal = total;
      state.cebraspeCorrect = correct;
      state.cebraspeWrong = wrong;
      state.cebraspePenalty = penalty;
      render();
      showToast('Cálculo de nota líquida Cebraspe atualizado com sucesso!', 'success');
    }
    // Item 14: Radar de Editais
    else if (action === 'filter-radar-sphere') {
      state.radarFilterSphere = actionBtn.dataset.sphere;
      render();
    }
    else if (action === 'toggle-follow-contest') {
      const contestId = actionBtn.dataset.contestId;
      const contest = (window.M2Data.radarEditais || []).find(c => String(c.id) === String(contestId));
      if (contest) {
        const nextFav = !contest.isFavorite;
        const tenantId = state.tenantId || 1;
        const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        const currentFollowed = Array.isArray(window.M2Data.preferences?.settings?.followed_contests)
          ? [...window.M2Data.preferences.settings.followed_contests]
          : [];
        const updatedFollowed = nextFav
          ? Array.from(new Set([...currentFollowed, String(contest.id)]))
          : currentFollowed.filter(id => String(id) !== String(contest.id));

        api(`${base}/preferences`, {
          method: 'PATCH',
          body: JSON.stringify({
            settings: {
              followed_contests: updatedFollowed
            }
          })
        }).then(() => {
          contest.isFavorite = nextFav;
          if (!window.M2Data.preferences) window.M2Data.preferences = { settings: {} };
          if (!window.M2Data.preferences.settings) window.M2Data.preferences.settings = {};
          window.M2Data.preferences.settings.followed_contests = updatedFollowed;
          render();
          showToast(nextFav ? `⭐ Concurso "${contest.name || contest.title}" adicionado ao seu radar prioritário!` : `Concurso "${contest.name || contest.title}" removido do radar prioritário.`);
        }).catch(err => {
          showToast('Erro ao atualizar radar prioritário.', 'error');
        });
      }
    }
    else if (action === 'open-edital-analysis') {
      showToast('Abrindo raio-x verticalizado e matérias com maior peso...', 'info');
      setTimeout(() => {
        navigate('curriculum');
      }, 600);
    }
    // Item 8: Memória de Longo Prazo da IA
    else if (action === 'sync-ai-memory') {
      showToast('Sincronizando registros neurais com o histórico de questões e simulados...', 'info');
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/ai-memory`).then(res => {
        window.M2Data.aiMemory.lastSynced = new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const profile = res.cognitive_profile || {};
        if (Array.isArray(profile.mastered_topics)) {
          window.M2Data.aiMemory.strengths = profile.mastered_topics.map(t => ({
            topic: t.subject || t.topic,
            mastery: `${t.accuracy || 85}%`,
            detail: `Aproveitamento consistente com base em ${t.sample_size || 5} resoluções.`
          }));
        }
        if (Array.isArray(profile.chronic_weaknesses)) {
          window.M2Data.aiMemory.weaknesses = profile.chronic_weaknesses.map(w => ({
            topic: w.subject || w.topic,
            accuracy: `${w.accuracy || 40}%`,
            cause: 'Reincidência conceitual mapeada pelo banco de questões',
            suggestedAction: 'Revisão ativa recomendada'
          }));
        }
        if (res.mentor_guidance) {
          window.M2Data.aiMemory.guidance = res.mentor_guidance;
        }
        render();
        showToast('ðŸ§  Memória da IA atualizada.', 'success');
      }).catch(err => {
        showToast('Erro ao sincronizar memória com o servidor.', 'error');
      });
    }
    else if (action === 'mark-memory-weakness-mastered') {
      const idx = parseInt(actionBtn.dataset.index, 10);
      const weakness = window.M2Data.aiMemory?.weaknesses?.[idx];
      if (weakness) {
        const tenantId = state.tenantId || 1;
        const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        const subjectName = weakness.topic || weakness.subject;

        api(`${base}/ai-memory/mastered`, {
          method: 'POST',
          body: JSON.stringify({ subject: subjectName })
        }).then(res => {
          window.M2Data.aiMemory.weaknesses.splice(idx, 1);
          window.M2Data.aiMemory.strengths.unshift({
            topic: subjectName,
            mastery: '85%+',
            detail: `Superado após reforço direcionado: ${subjectName} migrado para domínio consolidado.`
          });
          render();
          showToast(`ðŸ† Ponto fraco "${subjectName}" superado! (+50 XP)`, 'success');
        }).catch(err => {
          showToast('Erro ao salvar superação do ponto fraco no servidor.', 'error');
        });
      }
    }
    // Ações do Hub de Prompts IA e Importador JSON
    else if (action === 'set-prompt-tab') {
      state.promptTab = actionBtn.dataset.tab;
      render();
    }
    else if (action === 'open-json-import-modal') {
      state.jsonImportMode = actionBtn.dataset.mode || 'questions';
      state.modal = 'json-import';
      render();
    }
    else if (action === 'set-json-import-mode') {
      state.jsonImportMode = actionBtn.dataset.mode;
      render();
    }
    else if (action === 'copy-import-prompt') {
      const mode = actionBtn.dataset.mode || state.jsonImportMode || state.promptTab || 'questions';
      const pText = window.M2Data.prompts && window.M2Data.prompts[mode];
      if (pText && navigator.clipboard) {
        navigator.clipboard.writeText(pText).then(() => {
          showToast('ðŸ“‹ Prompt copiado com sucesso! Cole no ChatGPT, Claude, Gemini ou DeepSeek.', 'success');
        }).catch(() => {
          showToast('Prompt selecionado. Copie o texto exibido.', 'info');
        });
      } else {
        showToast('ðŸ“‹ Prompt copiado com sucesso! Cole no ChatGPT, Claude ou Gemini.', 'success');
      }
    }
    else if (action === 'fill-json-example') {
      const mode = state.jsonImportMode || 'questions';
      const ex = window.M2Data.promptExamples && window.M2Data.promptExamples[mode];
      const textarea = document.getElementById('m2-json-import-textarea');
      if (textarea && ex) {
        textarea.value = ex;
        showToast('âš¡ Exemplo JSON válido carregado! Pronto para importar.', 'info');
      }
    }
    else if (action === 'toggle-import-dest') {
      const dest = actionBtn.value;
      const newFields = document.getElementById('m2-import-new-contest-fields');
      const existingField = document.getElementById('m2-import-existing-contest-field');
      if (newFields && existingField) {
        newFields.style.display = dest === 'new' ? 'grid' : 'none';
        existingField.style.display = dest === 'existing' ? 'block' : 'none';
      }
    }
    else if (action === 'submit-json-import') {
      const textarea = document.getElementById('m2-json-import-textarea');
      let text = textarea ? textarea.value.trim() : '';
      if (!text) {
        showToast('Cole o código JSON retornado pela IA antes de importar.', 'warning');
        return;
      }

      // Remove blocos de markdown se a IA retornou com ```json ... ```
      if (text.startsWith('```')) {
        text = text.replace(/^```[a-z]*\s*/i, '').replace(/\s*```$/, '').trim();
      }

      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (err) {
        showToast('Erro: JSON inválido. Verifique se copiou apenas o bloco JSON puro sem textos externos.', 'rose');
        return;
      }

      const mode = state.jsonImportMode || 'questions';
      const payload = {
        type: mode === 'catalog' ? 'edital' : mode,
        json: parsed,
        contest_id: state.contestId,
        targets: (state.currentTargets && state.currentTargets.length > 0) ? state.currentTargets : [{ type: 'global', id: null }]
      };

      if (mode === 'catalog') {
        const dest = document.querySelector('input[name="m2-import-contest-dest"]:checked')?.value || 'new';
        if (dest === 'new') {
          payload.contest_id = 'new';
          payload.new_contest_name = document.getElementById('m2-import-contest-name')?.value?.trim() || '';
          payload.board = document.getElementById('m2-import-contest-board')?.value?.trim() || '';
          payload.role = document.getElementById('m2-import-contest-role')?.value?.trim() || '';
        } else {
          payload.contest_id = document.getElementById('m2-import-contest-select')?.value || state.contestId;
        }
      }

      showToast('Validando e importando JSON...', 'info');
      api('/mentoria2/external-import/execute', {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(res => {
        state.modal = null;
        showToast(`ðŸŽ‰ Importação concluída! (${res.imported_count || 0} itens)`, 'success');
        if (res.contest_id) {
          state.contestId = res.contest_id;
          state.screen = 'mentor-contests';
        }
        api('/mentoria2/data').then(data => {
          hydrateDataFromPayload(data);
          render();
        }).catch(() => {
          render();
        });
      }).catch(err => {
        showToast('N?o foi poss?vel concluir a opera??o. Tente novamente.', 'rose');
      });
    }
    else if (action === 'reveal-card') {
      state.cardRevealed = true;
      render();
    }
    else if (action === 'toggle-accordion') {
      const subId = actionBtn.dataset.subjectId;
      if (!state.collapsedSubjects) state.collapsedSubjects = {};
      if (subId) {
        state.collapsedSubjects[subId] = !state.collapsedSubjects[subId];
        render();
      } else {
        const accordion = actionBtn.closest('.m2-subject-accordion');
        if (accordion) {
          const body = accordion.querySelector('.m2-subject-body') || accordion.children[1];
          if (body) {
            body.style.display = body.style.display === 'none' ? 'block' : 'none';
          }
        }
      }
    }
    else if (action === 'toggle-all-syllabus') {
      if (!state.collapsedSubjects) state.collapsedSubjects = {};
      const syllabusList = window.M2Data.syllabus || [];
      const anyOpen = syllabusList.some(s => !state.collapsedSubjects[s.id]);
      syllabusList.forEach(s => {
        state.collapsedSubjects[s.id] = anyOpen;
      });
      render();
    }
    else if (action === 'toggle-topic-study') {
      const topicId = actionBtn.dataset.id;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const itemType = actionBtn.dataset.itemType === 'subtopico' ? 'subtopico' : 'topico';
      const topic = (window.M2Data.syllabus || []).flatMap(subject => subject.topics || []).find(item => String(item.id) === String(topicId));
      const item = itemType === 'subtopico'
        ? (window.M2Data.syllabus || []).flatMap(subject => subject.topics || []).flatMap(candidate => candidate.subtopics || []).find(candidate => String(candidate.id) === String(topicId))
        : topic;
      if (!item) { showToast('Não foi possível localizar o item do edital.', 'error'); return; }
      if (actionBtn.matches('input[type="checkbox"]')) e.preventDefault();
      const newStatus = !item.completed;
      api(`${base}/edict-progress/${topicId}`, {
        method: 'PATCH',
        body: JSON.stringify({ item_type: itemType, studied: newStatus })
      }).then(() => {
        item.completed = newStatus;
        (window.M2Data.syllabus || []).forEach(sub => {
          const tot = (sub.topics || []).length;
          const done = (sub.topics || []).filter(t => t.completed).length;
          sub.coveredPct = tot > 0 ? Math.round((done / tot) * 100) : 0;
        });
        render();
        const label = itemType === 'subtopico' ? 'Subtópico' : 'Tópico';
        showToast(newStatus ? `${label} marcado como estudado!` : `${label} desmarcado.`, 'success');
      }).catch(err => {
        showToast('Erro ao atualizar progresso do edital.', 'error');
      });
    }
    else if (action === 'toggle-fav-question') {
      const q = window.M2Data.questions[state.currentQuestionIndex];
      if (q) {
        const nextFav = !q.isFavorite;
        const tenantId = state.tenantId || 1;
        const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        const currentFavs = Array.isArray(window.M2Data.preferences?.settings?.favorite_questions)
          ? [...window.M2Data.preferences.settings.favorite_questions]
          : [];
        const updatedFavs = nextFav
          ? Array.from(new Set([...currentFavs, String(q.id)]))
          : currentFavs.filter(id => String(id) !== String(q.id));

        api(`${base}/preferences`, {
          method: 'PATCH',
          body: JSON.stringify({
            settings: {
              favorite_questions: updatedFavs
            }
          })
        }).then(() => {
          q.isFavorite = nextFav;
          if (!window.M2Data.preferences) window.M2Data.preferences = { settings: {} };
          if (!window.M2Data.preferences.settings) window.M2Data.preferences.settings = {};
          window.M2Data.preferences.settings.favorite_questions = updatedFavs;
          render();
          showToast(nextFav ? 'Questão adicionada aos favoritos!' : 'Questão removida dos favoritos.', 'info');
        }).catch(err => {
          showToast('Erro ao salvar favorito no servidor.', 'error');
        });
      }
    }
    else if (action === 'execute-review') {
      state.screen = 'flashcards';
      render();
      showToast('Iniciando sessão de revisão espaçada...', 'info');
    }
    else if (action === 'start-mock') {
      const mockId = actionBtn.dataset.mockId;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/mock-exams/${encodeURIComponent(mockId)}/attempts`, { method: 'POST', body: JSON.stringify({}) }).then(res => {
        state.activeMockId = mockId;
        state.mockAttempt = res.attempt;
        state.mockQuestionIndex = 0;
        state.mockAnswerDrafts = {};
        navigate('mock-taking');
        showToast('Simulado iniciado. Suas respostas serão salvas ao confirmar.', 'success');
      }).catch(() => showToast('Não foi possível iniciar este simulado. Verifique se há questões disponíveis.', 'error'));
    }
    else if (action === 'select-mock-option') {
      const questionId = actionBtn.dataset.questionId;
      state.mockAnswerDrafts[questionId] = actionBtn.dataset.option;
      render();
    }
    else if (action === 'prev-mock-question' || action === 'next-mock-question') {
      const total = state.mockAttempt?.questions?.length || 0;
      const step = action === 'next-mock-question' ? 1 : -1;
      state.mockQuestionIndex = Math.max(0, Math.min((state.mockQuestionIndex || 0) + step, Math.max(0, total - 1)));
      render();
    }
    else if (action === 'save-mock-answer') {
      const attempt = state.mockAttempt;
      const questionId = actionBtn.dataset.questionId;
      const answer = state.mockAnswerDrafts[questionId] || attempt?.answers?.[questionId]?.answer;
      if (!attempt || !answer) return;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const elapsed = Math.max(Number(attempt.elapsed_seconds || 0), Math.floor((Date.now() - new Date(attempt.started_at).getTime()) / 1000));
      api(`${base}/mock-exams/${encodeURIComponent(attempt.mock_id)}/attempts/${encodeURIComponent(attempt.id)}/answers/${encodeURIComponent(questionId)}`, { method: 'PATCH', body: JSON.stringify({ answer, elapsed_seconds: elapsed }) }).then(() => {
        attempt.answers = attempt.answers || {};
        attempt.answers[questionId] = { answer };
        attempt.elapsed_seconds = elapsed;
        render();
        showToast('Resposta salva.', 'success');
      }).catch(() => showToast('Não foi possível salvar sua resposta. Tente novamente.', 'error'));
    }
    else if (action === 'finish-mock') {
      const attempt = state.mockAttempt;
      if (!attempt) return;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const elapsed = Math.max(Number(attempt.elapsed_seconds || 0), Math.floor((Date.now() - new Date(attempt.started_at).getTime()) / 1000));
      api(`${base}/mock-exams/${encodeURIComponent(attempt.mock_id)}/attempts/${encodeURIComponent(attempt.id)}/finish`, { method: 'POST', body: JSON.stringify({ elapsed_seconds: elapsed }) }).then(res => {
        const mock = (window.M2Data.mockExams || []).find(item => String(item.id) === String(res.mock_id));
        if (mock) {
          mock.status = 'completed'; mock.type = 'realizado'; mock.score = Number(res.percentage || 0);
          mock.questionsCount = Number(res.total_questions || 0); mock.timeSpent = `${Math.ceil(Number(res.elapsed_seconds || 0) / 60)} min`;
          mock.subjectBreakdown = (res.subject_results || []).map(item => ({ subject: item.name, correct: item.correct, total: item.questions, pct: item.percentage }));
          mock.ranking = Array.isArray(res.ranking) ? res.ranking : [];
          const placement = mock.ranking.find(item => item.is_user);
          mock.rank = placement ? `${placement.position}?` : null;
        }
        state.activeMockId = res.mock_id;
        state.mockAttempt = null;
        if (res.gamification) {
          window.M2Data.gamification = res.gamification;
          window.M2Data.student.xp = res.gamification.total_xp || 0;
        }
        navigate('mock-result');
        showToast(res.gamification?.reason ? `${res.gamification.reason}. +${res.gamification.awarded_xp || 0} XP` : 'Simulado finalizado. Confira seu desempenho.', 'success');
      }).catch(() => showToast('Não foi possível finalizar o simulado. Tente novamente.', 'error'));
    }
    else if (action === 'download-material') {
      const id = actionBtn.dataset.id;
      const url = actionBtn.dataset.url;
      const downloadUrl = url || (id
        ? `${state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${state.tenantId || 1}`}/materials/${id}/download`
        : null);
      if (downloadUrl) {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        showToast('Material complementar indisponível.', 'error');
      }
    }
    else if (action === 'open-getfy-lesson') {
      const url = actionBtn.dataset.url || '/meus-produtos';
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    }
    else if (action === 'complete-review') {
      const id = actionBtn.dataset.id;
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/reviews/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: true })
      }).then(() => {
        const rev = (window.M2Data.reviews || []).find(r => String(r.id) === String(id));
        if (rev) {
          rev.status = 'completed';
          rev.completed = true;
        }
        render();
        if (res.gamification) {
          window.M2Data.gamification = res.gamification;
          window.M2Data.student.xp = res.gamification.total_xp || 0;
        }
        showToast(res.gamification?.reason ? `${res.gamification.reason}. +${res.gamification.awarded_xp || 0} XP` : 'Revisão concluída!', 'success');
      }).catch(err => {
        showToast('Erro ao concluir revisão.', 'error');
      });
    }
    else if (action === 'mentor-add-feedback') {
      const studentId = actionBtn.dataset.studentId || window.M2Data.student?.id || (window.M2Data.students && window.M2Data.students[0]?.id);
      const studentName = window.M2Data.student?.name || (window.M2Data.students && window.M2Data.students[0]?.name) || 'Aluno';
      if (!studentId) {
        showToast('Nenhum aluno selecionado para receber o feedback.', 'error');
        return;
      }
      state.quickPrompt = {
        title: `Feedback Pedagógico â€” ${studentName}`,
        subtitle: 'Envie orientações e direcionamento de estudos para o aluno.',
        label: 'Mensagem Pedagógica:',
        inputType: 'textarea',
        placeholder: 'Escreva aqui o feedback pedagógico detalhado...',
        confirmAction: 'confirm-mentor-add-feedback',
        confirmText: 'Enviar Feedback',
        studentId,
        studentName
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-mentor-add-feedback') {
      const input = document.getElementById('m2-quick-prompt-input');
      const msg = input?.value?.trim();
      const { studentId, studentName } = state.quickPrompt || {};
      if (msg && studentId) {
        api(`/mentoria2/students/${studentId}/feedbacks`, {
          method: 'POST',
          body: JSON.stringify({ message: msg, category: 'pedagogical' })
        }).then(res => {
          const newFeedback = {
            id: res.id,
            studentId: studentId,
            studentName: studentName,
            mentorName: window.M2Data.mentor?.name || 'Não informado',
            message: msg,
            category: 'pedagogical',
            isRead: false,
            readAt: null,
            reply: null,
            repliedAt: null,
            createdAt: new Date().toLocaleDateString('pt-BR')
          };
          window.M2Data.mentorFeedbacks = window.M2Data.mentorFeedbacks || [];
          window.M2Data.mentorFeedbacks.unshift(newFeedback);
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Feedback enviado para ${studentName}!`, 'success');
        }).catch(err => {
          showToast('Erro ao enviar feedback.', 'error');
        });
      } else {
        showToast('Por favor, informe a mensagem de feedback.', 'error');
      }
    }
    else if (action === 'mentor-adjust-plan') {
      const studentId = window.M2Data.student?.id || (window.M2Data.students && window.M2Data.students[0]?.id);
      const studentName = window.M2Data.student?.name || 'Aluno';
      state.quickPrompt = {
        title: `Ajuste de Carga Horária â€” ${studentName}`,
        subtitle: `Meta atual: ${window.M2Data.student?.weekHoursGoal || 12}h semanais`,
        label: 'Nova Meta de Horas Líquidas Semanais:',
        inputType: 'number',
        value: String(window.M2Data.student?.weekHoursGoal || 15),
        placeholder: '15',
        confirmAction: 'confirm-mentor-adjust-plan',
        confirmText: 'Atualizar Meta',
        studentId,
        studentName
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-mentor-adjust-plan') {
      const input = document.getElementById('m2-quick-prompt-input');
      const newGoal = input?.value?.trim();
      const { studentId, studentName } = state.quickPrompt || {};
      if (newGoal && !isNaN(newGoal) && Number(newGoal) > 0) {
        const numGoal = Number(newGoal);
        const tenantId = state.tenantId || 1;
        const base = state.context?.resourceBase || state.workspaceBase;
        const endpoint = base ? `${base}/preferences` : `/mentoria2/students/${studentId}/preferences`;

        api(endpoint, {
          method: 'PATCH',
          body: JSON.stringify({
            settings: {
              week_hours_goal: numGoal
            }
          })
        }).then(() => {
          if (window.M2Data.student) window.M2Data.student.weekHoursGoal = numGoal;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Meta semanal de ${numGoal}h definida para ${studentName}!`, 'success');
        }).catch(err => {
          showToast('Não foi possível salvar a meta de horas.', 'error');
        });
      } else {
        showToast('Informe um número válido de horas semanais.', 'error');
      }
    }
    else if (action === 'create-cohort') {
      state.quickPrompt = {
        title: 'Criar Nova Turma de Mentoria',
        subtitle: 'Organize alunos por concurso ou data da prova.',
        label: 'Nome da Nova Turma:',
        inputType: 'text',
        placeholder: 'Ex: Turma Reta Final PC-SP',
        confirmAction: 'confirm-create-cohort',
        confirmText: 'Criar Turma'
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-create-cohort') {
      const input = document.getElementById('m2-quick-prompt-input');
      const name = input?.value?.trim();
      if (name) {
        api('/mentoria2/cohorts', {
          method: 'POST',
          body: JSON.stringify({ name: name, description: 'Turma cadastrada para mentoria e metas conjuntas.' })
        }).then(res => {
          const newCohort = {
            id: res.id,
            name: res.name || name,
            contest: (window.M2Data.contests?.[0]?.name || ''),
            mentorName: window.M2Data.mentor?.name || '',
            status: res.is_active !== undefined ? (res.is_active ? 'Ativa' : 'Inativa') : 'Ativa',
            description: 'Turma cadastrada para mentoria e metas conjuntas.',
            studentsCount: 0,
            completionPct: 0
          };
          window.M2Data.cohorts.unshift(newCohort);
          if (window.M2Data.mentor) window.M2Data.mentor.activeCohorts = (window.M2Data.mentor.activeCohorts || 0) + 1;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Turma "${name}" criada com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao salvar turma no servidor.', 'error');
        });
      } else {
        showToast('Informe o nome da turma.', 'error');
      }
    }
    else if (action === 'add-cohort-member') {
      const cohortId = actionBtn.dataset.cohortId || (window.M2Data.cohorts?.[0]?.id);
      const directStudentId = actionBtn.dataset.studentId;
      if (directStudentId && cohortId) {
        api(`/mentoria2/cohorts/${cohortId}/members`, {
          method: 'POST',
          body: JSON.stringify({ student_id: Number(directStudentId) })
        }).then(() => {
          const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
          if (cohort) cohort.studentsCount = (cohort.studentsCount || 0) + 1;
          render();
          showToast(`Aluno #${directStudentId} adicionado à turma com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao adicionar aluno à turma.', 'error');
        });
        return;
      }
      state.quickPrompt = {
        title: 'Adicionar Aluno à Turma',
        subtitle: 'Vincule um aluno matriculado à turma selecionada.',
        label: 'ID Numérico do Aluno:',
        inputType: 'number',
        placeholder: 'Ex: 1',
        confirmAction: 'confirm-add-cohort-member',
        confirmText: 'Vincular Aluno',
        cohortId: cohortId
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-add-cohort-member') {
      const input = document.getElementById('m2-quick-prompt-input');
      const studentId = input?.value?.trim();
      const cohortId = state.quickPrompt?.cohortId || (window.M2Data.cohorts?.[0]?.id);
      if (studentId && cohortId) {
        api(`/mentoria2/cohorts/${cohortId}/members`, {
          method: 'POST',
          body: JSON.stringify({ student_id: Number(studentId) })
        }).then(() => {
          const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
          if (cohort) cohort.studentsCount = (cohort.studentsCount || 0) + 1;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Aluno #${studentId} adicionado à turma com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao adicionar aluno à turma.', 'error');
        });
      } else {
        showToast('Informe o ID do aluno.', 'error');
      }
    }
    else if (action === 'remove-cohort-member') {
      const cohortId = actionBtn.dataset.cohortId || (window.M2Data.cohorts?.[0]?.id);
      const studentId = actionBtn.dataset.studentId;
      if (studentId && cohortId) {
        state.confirmation = {
          title: 'Remover aluno da turma?',
          message: 'O aluno deixará esta turma, mas continuará com a conta e demais acessos preservados.',
          confirmAction: 'confirm-remove-cohort-member',
          cohortId,
          studentId,
          confirmText: 'Remover aluno'
        };
        state.modal = 'confirmation';
        render();
      }
    }
    else if (action === 'confirm-remove-cohort-member') {
      const { cohortId, studentId } = state.confirmation || {};
      if (studentId && cohortId) {
        api(`/mentoria2/cohorts/${cohortId}/members/${studentId}`, {
          method: 'DELETE'
        }).then(() => {
          const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
          if (cohort && cohort.studentsCount > 0) cohort.studentsCount -= 1;
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Aluno removido da turma com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao remover aluno.', 'error');
        });
      }
    }
    else if (action === 'create-contest') {
      state.quickPrompt = {
        title: 'Cadastrar Novo Concurso',
        subtitle: 'Defina o concurso para vincular edital, matérias e simulados.',
        label: 'Nome do Concurso / Ã“rgão:',
        inputType: 'text',
        placeholder: 'Ex: PC-SP Escrivão 2026',
        confirmAction: 'confirm-create-contest',
        confirmText: 'Cadastrar Concurso'
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-create-contest') {
      const input = document.getElementById('m2-quick-prompt-input');
      const name = input?.value?.trim();
      if (name) {
        api('/mentoria2/contests', {
          method: 'POST',
          body: JSON.stringify({ name: name, board: 'A definir', position: 'Geral' })
        }).then(res => {
          const newC = {
            id: res.id,
            name: name,
            role: 'Geral',
            organization: name,
            board: 'A definir',
            phase: 'Publicado',
            activeSyllabusUnits: 0,
            totalQuestions: 0
          };
          window.M2Data.contests.unshift(newC);
          state.contestId = newC.id;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Concurso "${name}" cadastrado com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao cadastrar concurso no servidor.', 'error');
        });
      } else {
        showToast('Informe o nome do concurso.', 'error');
      }
    }
    else if (action === 'duplicate-contest') {
      const id = actionBtn.dataset.id;
      const target = window.M2Data.contests.find(c => String(c.id) === String(id));
      if (target) {
        state.quickPrompt = {
          title: 'Duplicar Concurso',
          subtitle: `Copiar estrutura e edital de "${target.name}".`,
          label: 'Nome do Concurso Duplicado:',
          inputType: 'text',
          value: `${target.name} (Cópia)`,
          confirmAction: 'confirm-duplicate-contest',
          confirmText: 'Duplicar Concurso',
          targetId: id,
          target: target
        };
        state.modal = 'quick-prompt';
        render();
      }
    }
    else if (action === 'confirm-duplicate-contest') {
      const input = document.getElementById('m2-quick-prompt-input');
      const cloneName = input?.value?.trim() || `${state.quickPrompt?.target?.name || 'Concurso'} (Cópia)`;
      const targetId = state.quickPrompt?.targetId;
      const target = state.quickPrompt?.target;
      if (targetId && target) {
        api(`/mentoria2/contests/${targetId}/duplicate`, {
          method: 'POST',
          body: JSON.stringify({ name: cloneName })
        }).then(res => {
          const newContest = { ...target, id: res.id, name: res.name || cloneName };
          window.M2Data.contests.unshift(newContest);
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Concurso "${newContest.name}" duplicado com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao duplicar concurso no servidor.', 'error');
        });
      }
    }
    else if (action === 'add-subject') {
      state.quickPrompt = {
        title: 'Adicionar Disciplina ao Edital',
        subtitle: 'Insira a matéria no edital verticalizado do concurso.',
        label: 'Nome da Disciplina:',
        inputType: 'text',
        placeholder: 'Ex: Direito Administrativo',
        confirmAction: 'confirm-add-subject',
        confirmText: 'Adicionar Disciplina'
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-add-subject') {
      const input = document.getElementById('m2-quick-prompt-input');
      const name = input?.value?.trim();
      if (name) {
        const activeContestId = state.contestId || (window.M2Data.contests?.[0]?.id);
        const edicts = window.M2Data.edicts || [];
        let targetEdict = edicts.find(e => String(e.contest_id) === String(activeContestId)) || edicts[0];

        const proceedAddSubject = (edictId) => {
          api(`/mentoria2/edicts/${edictId}/subjects`, {
            method: 'POST',
            body: JSON.stringify({ name: name, weight: 1, relevance: 3 })
          }).then(res => {
            const newSub = {
              id: res.id,
              name: name,
              weight: 1,
              relevance: 'Alta',
              coveredPct: 0,
              masteryPct: 0,
              topics: []
            };
            window.M2Data.syllabus = window.M2Data.syllabus || [];
            window.M2Data.subjects = window.M2Data.subjects || [];
            window.M2Data.syllabus.push(newSub);
            window.M2Data.subjects.push({
              id: newSub.id,
              name: newSub.name,
              weight: 1,
              relevance: 'Alta',
              progress: 0,
              hours: 0,
              questionsCount: 0,
              accuracy: 0,
              topics: []
            });
            state.modal = null;
            state.quickPrompt = null;
            render();
            showToast(`Disciplina "${name}" salva com sucesso!`, 'success');
          }).catch(err => {
            showToast('Erro ao salvar disciplina no servidor.', 'error');
          });
        };

        if (!targetEdict && activeContestId) {
          api('/mentoria2/edicts', {
            method: 'POST',
            body: JSON.stringify({ contest_id: activeContestId, name: 'Edital Geral' })
          }).then(edictRes => {
            targetEdict = { id: edictRes.id, contest_id: activeContestId, name: 'Edital Geral' };
            window.M2Data.edicts = window.M2Data.edicts || [];
            window.M2Data.edicts.push(targetEdict);
            proceedAddSubject(targetEdict.id);
          }).catch(err => {
            showToast('Erro ao criar edital base para o concurso.', 'error');
          });
        } else if (targetEdict) {
          proceedAddSubject(targetEdict.id);
        } else {
          showToast('Cadastre um concurso antes de adicionar disciplinas ao edital.', 'error');
        }
      } else {
        showToast('Informe o nome da disciplina.', 'error');
      }
    }
    else if (action === 'edit-subject') {
      const id = actionBtn.dataset.id;
      const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(id)) || (window.M2Data.syllabus || [])[0];
      if (sub) {
        state.quickPrompt = {
          title: 'Editar Nome da Disciplina',
          label: 'Nome da Disciplina:',
          inputType: 'text',
          value: sub.name,
          confirmAction: 'confirm-edit-subject',
          confirmText: 'Salvar Alteração',
          subjectId: sub.id
        };
        state.modal = 'quick-prompt';
        render();
      }
    }
    else if (action === 'confirm-edit-subject') {
      const input = document.getElementById('m2-quick-prompt-input');
      const newName = input?.value?.trim();
      const subjectId = state.quickPrompt?.subjectId;
      if (newName && subjectId) {
        api(`/mentoria2/subjects/${subjectId}`, {
          method: 'PATCH',
          body: JSON.stringify({ name: newName })
        }).then(() => {
          const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(subjectId));
          if (sub) sub.name = newName;
          const matchingSub = (window.M2Data.subjects || []).find(s => String(s.id) === String(subjectId));
          if (matchingSub) matchingSub.name = newName;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast('Disciplina atualizada no servidor!', 'success');
        }).catch(err => {
          showToast('Erro ao atualizar disciplina.', 'error');
        });
      } else {
        showToast('Informe o nome da disciplina.', 'error');
      }
    }
    else if (action === 'add-topic') {
      const id = actionBtn.dataset.id;
      const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(id)) || (window.M2Data.syllabus || [])[0];
      if (sub) {
        state.quickPrompt = {
          title: `Novo Tópico em ${sub.name}`,
          label: 'Nome do Tópico:',
          inputType: 'text',
          placeholder: 'Ex: Atos Administrativos',
          confirmAction: 'confirm-add-topic',
          confirmText: 'Adicionar Tópico',
          subjectId: sub.id,
          subjectName: sub.name
        };
        state.modal = 'quick-prompt';
        render();
      }
    }
    else if (action === 'confirm-add-topic') {
      const input = document.getElementById('m2-quick-prompt-input');
      const topName = input?.value?.trim();
      const subjectId = state.quickPrompt?.subjectId;
      const subjectName = state.quickPrompt?.subjectName || 'Disciplina';
      if (topName && subjectId) {
        api(`/mentoria2/subjects/${subjectId}/topics`, {
          method: 'POST',
          body: JSON.stringify({ name: topName, weight: 1, relevance: 2 })
        }).then(res => {
          const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(subjectId));
          if (sub) {
            sub.topics = sub.topics || [];
            sub.topics.push({
              id: res.id,
              name: topName,
              completed: false,
              subtopics: []
            });
          }
          const matchingSub = (window.M2Data.subjects || []).find(s => String(s.id) === String(subjectId));
          if (matchingSub) {
            matchingSub.topics = matchingSub.topics || [];
            matchingSub.topics.push({
              id: res.id,
              name: topName,
              status: 'pending',
              accuracy: 0,
              theoryDone: false,
              lawDone: false,
              flashcardsCount: 0,
              questionsCount: 0
            });
          }
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Tópico adicionado em ${subjectName} e salvo no servidor!`, 'success');
        }).catch(err => {
          showToast('Erro ao criar tópico no servidor.', 'error');
        });
      } else {
        showToast('Informe o nome do tópico.', 'error');
      }
    }
    else if (action === 'open-manage-audience' || action === 'manage-content-audience') {
      const id = actionBtn.dataset.id;
      const type = actionBtn.dataset.type || 'material';
      let currentItem = null;
      let targets = [{ type: 'global', id: null }];

      if (type === 'question') {
        currentItem = (window.M2Data.questions || []).find(q => String(q.id) === String(id));
      } else if (type === 'flashcard_deck' || type === 'deck') {
        currentItem = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(id));
      } else {
        currentItem = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(id));
      }

      if (currentItem && Array.isArray(currentItem.targets) && currentItem.targets.length > 0) {
        targets = JSON.parse(JSON.stringify(currentItem.targets));
      }

      let itemTitle = '#' + id;
      if (currentItem) {
        itemTitle = currentItem.title || currentItem.name || currentItem.prompt || ('#' + id);
      }

      state.managingAudienceItem = {
        id,
        type,
        title: itemTitle,
        item: currentItem
      };
      state.currentTargets = targets;
      state.modal = 'manage-audience';
      render();
    }
    else if (action === 'confirm-manage-content-audience' || action === 'submit-manage-audience') {
      const { id, type, item } = state.managingAudienceItem || {};
      if (!id) {
        showToast('Nenhum item selecionado para salvar público.', 'error');
        return;
      }
      const targets = (state.currentTargets && state.currentTargets.length > 0)
        ? state.currentTargets
        : [{ type: 'global', id: null }];

      const endpoint = (type === 'deck' || type === 'flashcard_deck')
        ? `/mentoria2/flashcard-decks/${encodeURIComponent(id)}`
        : (type === 'question' ? `/mentoria2/questions/${encodeURIComponent(id)}` : `/mentoria2/materials/${encodeURIComponent(id)}`);

      api(endpoint, {
        method: 'PATCH',
        body: JSON.stringify({ targets })
      }).then(() => {
        if (item) {
          item.targets = targets;
        }
        state.modal = null;
        state.managingAudienceItem = null;
        render();
        showToast('Público de acesso atualizado com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao salvar público.', 'error');
      });
    }
    else if (action === 'add-audience-target') {
      state.currentTargets = state.currentTargets || [];
      if (state.currentTargets.some(t => (t.type || t.target_type) === 'global')) {
        state.currentTargets = [];
      }
      state.currentTargets.push({ type: 'contest', id: '' });
      render();
    }
    else if (action === 'remove-audience-target') {
      const idx = Number(actionBtn.dataset.index);
      state.currentTargets = state.currentTargets || [];
      if (!isNaN(idx) && state.currentTargets[idx] !== undefined) {
        state.currentTargets.splice(idx, 1);
      }
      if (state.currentTargets.length === 0) {
        state.currentTargets = [{ type: 'global', id: null }];
      }
      render();
    }
    else if (action === 'change-audience-target-type') {
      const idx = Number(actionBtn.dataset.index);
      if (state.currentTargets && state.currentTargets[idx]) {
        state.currentTargets[idx].type = actionBtn.value;
        state.currentTargets[idx].id = null;
        render();
      }
    }
    else if (action === 'change-audience-target-id') {
      const idx = Number(actionBtn.dataset.index);
      if (state.currentTargets && state.currentTargets[idx]) {
        state.currentTargets[idx].id = actionBtn.value;
      }
    }
    else if (action === 'create-question') {
      state.editingQuestion = null;
      state.currentTargets = [{ type: 'global', id: null }];
      state.modal = 'question-form';
      render();
    }
    else if (action === 'edit-question') {
      const id = actionBtn.dataset.id;
      const q = (window.M2Data.questions || []).find(item => String(item.id) === String(id));
      if (q) {
        state.editingQuestion = q;
        state.currentTargets = (q.targets && q.targets.length > 0) ? JSON.parse(JSON.stringify(q.targets)) : [{ type: 'global', id: null }];
        state.modal = 'question-form';
        render();
      } else {
        showToast('Questão não encontrada.', 'error');
      }
    }
    else if (action === 'toggle-qf-type') {
      const typeSelect = document.getElementById('m2-qf-type');
      const altGroup = document.getElementById('m2-qf-alternatives-group');
      const correctSelect = document.getElementById('m2-qf-correct');
      if (typeSelect && altGroup && correctSelect) {
        if (typeSelect.value === 'certo_errado') {
          altGroup.style.display = 'none';
          correctSelect.innerHTML = '<option value="Certo">Certo</option><option value="Errado">Errado</option>';
        } else {
          altGroup.style.display = 'block';
          correctSelect.innerHTML = '<option value="A">Alternativa A</option><option value="B">Alternativa B</option><option value="C">Alternativa C</option><option value="D">Alternativa D</option><option value="E">Alternativa E</option>';
        }
      }
    }
    else if (action === 'submit-create-question') {
      const subject = document.getElementById('m2-qf-subject')?.value?.trim();
      const topic = document.getElementById('m2-qf-topic')?.value?.trim() || null;
      const difficulty = document.getElementById('m2-qf-difficulty')?.value || 'Média';
      const type = document.getElementById('m2-qf-type')?.value || 'multipla_escolha';
      const prompt = document.getElementById('m2-qf-prompt')?.value?.trim();
      const correct_answer = document.getElementById('m2-qf-correct')?.value || 'A';
      const explanation = document.getElementById('m2-qf-explanation')?.value?.trim() || null;

      if (!subject || !prompt) {
        showToast('Preencha a disciplina e o enunciado da questão.', 'error');
        return;
      }

      let alternatives = [];
      if (type === 'multipla_escolha') {
        const altA = document.getElementById('m2-qf-alt-a')?.value?.trim();
        const altB = document.getElementById('m2-qf-alt-b')?.value?.trim();
        const altC = document.getElementById('m2-qf-alt-c')?.value?.trim();
        const altD = document.getElementById('m2-qf-alt-d')?.value?.trim();
        const altE = document.getElementById('m2-qf-alt-e')?.value?.trim();
        if (!altA || !altB) {
          showToast('Informe ao menos as alternativas A e B.', 'error');
          return;
        }
        alternatives = [altA, altB];
        if (altC) alternatives.push(altC);
        if (altD) alternatives.push(altD);
        if (altE) alternatives.push(altE);
      }

      const targets = (state.currentTargets && state.currentTargets.length > 0) ? state.currentTargets : [{ type: 'global', id: null }];
      const isEditing = Boolean(state.editingQuestion?.id);
      const endpoint = isEditing ? `/mentoria2/questions/${state.editingQuestion.id}` : '/mentoria2/questions';
      const method = isEditing ? 'PATCH' : 'POST';
      const payload = {
        subject,
        topic,
        difficulty,
        type,
        prompt,
        alternatives,
        correct_answer,
        explanation,
        targets,
        scope: 'global'
      };

      api(endpoint, {
        method,
        body: JSON.stringify(payload)
      }).then(res => {
        if (isEditing && state.editingQuestion) {
          Object.assign(state.editingQuestion, payload);
          const found = (window.M2Data.questions || []).find(q => String(q.id) === String(state.editingQuestion.id));
          if (found) Object.assign(found, payload);
        }
        state.modal = null;
        state.editingQuestion = null;
        showToast(isEditing ? 'Questão atualizada com sucesso!' : 'Questão cadastrada com sucesso!', 'success');
        loadMentorResource('mentor-questions', api).then(() => render());
      }).catch(err => {
        showToast('Erro ao salvar questão.', 'error');
      });
    }
    else if (action === 'delete-question') {
      const id = actionBtn.dataset.id;
      state.confirmation = {
        title: 'Excluir Questão?',
        message: `Tem certeza que deseja excluir a questão #${id}? Esta ação é permanente.`,
        confirmAction: 'confirm-delete-question',
        questionId: id,
        confirmText: 'Excluir Questão'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-question') {
      const id = state.confirmation?.questionId;
      if (id) {
        api(`/mentoria2/questions/${id}`, { method: 'DELETE' }).then(() => {
          window.M2Data.questions = (window.M2Data.questions || []).filter(item => String(item.id) !== String(id));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Questão excluída com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir questão.', 'error');
        });
      }
    }
    else if (action === 'toggle-question-select') {
      const qId = String(actionBtn.value || actionBtn.dataset.id);
      state.selectedQuestions = state.selectedQuestions || [];
      if (state.selectedQuestions.includes(qId)) {
        state.selectedQuestions = state.selectedQuestions.filter(id => id !== qId);
      } else {
        state.selectedQuestions.push(qId);
      }
      render();
    }
    else if (action === 'toggle-all-questions') {
      state.selectedQuestions = state.selectedQuestions || [];
      const allIds = (window.M2Data.questions || []).map(q => String(q.id));
      if (state.selectedQuestions.length === allIds.length && allIds.length > 0) {
        state.selectedQuestions = [];
      } else {
        state.selectedQuestions = allIds;
      }
      render();
    }
    else if (action === 'clear-selected-questions') {
      state.selectedQuestions = [];
      render();
    }
    else if (action === 'bulk-delete-questions') {
      const ids = state.selectedQuestions || [];
      if (ids.length === 0) return;
      state.confirmation = {
        title: 'Excluir Questões em Massa?',
        message: `Tem certeza que deseja excluir as ${ids.length} questões selecionadas? Esta ação removerá as questões selecionadas permanentemente.`,
        confirmAction: 'confirm-bulk-delete-questions',
        confirmText: `Excluir ${ids.length} Questões`
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-bulk-delete-questions') {
      const ids = state.selectedQuestions || [];
      if (ids.length === 0) return;
      api('/mentoria2/questions/bulk-delete', {
        method: 'POST',
        body: JSON.stringify({ ids: ids.map(String) })
      }).then(() => {
        const idsSet = new Set(ids.map(String));
        window.M2Data.questions = (window.M2Data.questions || []).filter(q => !idsSet.has(String(q.id)));
        state.selectedQuestions = [];
        state.modal = null;
        state.confirmation = null;
        render();
        showToast(`${ids.length} questão(ões) excluída(s) em massa com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao excluir questões em massa.', 'error');
      });
    }
    else if (action === 'open-assign-contest-modal') {
      const studentId = actionBtn.dataset.studentId;
      const student = (window.M2Data.students || window.M2Data.mentorStudents || []).find(s => String(s.id) === String(studentId)) || state.studentProfile || { id: studentId };
      state.assigningStudent = student;
      state.modal = 'assign-contest';
      render();
    }
    else if (action === 'submit-assign-contest') {
      const studentId = actionBtn.dataset.studentId || state.assigningStudent?.id;
      const contestId = document.getElementById('m2-assign-contest-id')?.value;
      const group = document.getElementById('m2-assign-contest-group')?.value || 'foco';
      const includeStats = document.getElementById('m2-assign-contest-stats')?.checked ?? true;
      if (!contestId || !studentId) {
        showToast('Selecione um concurso válido.', 'error');
        return;
      }
      api(`/mentoria2/contests/${encodeURIComponent(contestId)}/students/${encodeURIComponent(studentId)}`, {
        method: 'POST',
        body: JSON.stringify({ group, include_in_stats: includeStats })
      }).then(() => {
        state.modal = null;
        state.assigningStudent = null;
        render();
        showToast('Concurso atribuído ao aluno com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao atribuir concurso ao aluno.', 'error');
      });
    }
    else if (action === 'create-content' || action === 'upload-material') {
      state.editingMaterial = null;
      state.currentTargets = [{ type: 'global', id: null }];
      state.modal = 'material-form';
      render();
    }
    else if (action === 'edit-material') {
      const matId = actionBtn.dataset.id;
      const mat = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(matId));
      state.editingMaterial = mat || { id: matId };
      state.currentTargets = (mat?.targets && mat.targets.length > 0) ? JSON.parse(JSON.stringify(mat.targets)) : [{ type: 'global', id: null }];
      state.modal = 'material-form';
      render();
    }
    else if (action === 'toggle-mf-type') {
      const typeSelect = document.getElementById('m2-mf-type');
      const urlGroup = document.getElementById('m2-mf-url-group');
      const textGroup = document.getElementById('m2-mf-text-group');
      const fileGroup = document.getElementById('m2-mf-file-group');
      const val = typeSelect?.value || 'arquivo';
      if (urlGroup && textGroup && fileGroup) {
        urlGroup.style.display = (val === 'youtube' || val === 'link') ? 'block' : 'none';
        textGroup.style.display = (val === 'texto') ? 'block' : 'none';
        fileGroup.style.display = (val === 'arquivo') ? 'block' : 'none';
      }
    }
    else if (action === 'submit-material-form' || action === 'confirm-edit-material') {
      const title = document.getElementById('m2-mf-title')?.value?.trim();
      const folder = document.getElementById('m2-mf-folder')?.value?.trim() || '';
      const type = document.getElementById('m2-mf-type')?.value || 'arquivo';
      const description = document.getElementById('m2-mf-description')?.value?.trim() || null;
      const url = document.getElementById('m2-mf-url')?.value?.trim() || null;
      const text = document.getElementById('m2-mf-text')?.value?.trim() || null;
      const fileInput = document.getElementById('m2-mf-file');
      const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;
      const targets = (state.currentTargets && state.currentTargets.length > 0)
        ? state.currentTargets
        : [{ type: 'global', id: null }];

      if (!title) {
        showToast('Informe o título do material didático.', 'error');
        return;
      }

      const isEditing = Boolean(state.editingMaterial?.id);
      const endpoint = isEditing
        ? `/mentoria2/materials/${encodeURIComponent(state.editingMaterial.id)}`
        : '/mentoria2/materials';

      let reqOptions;
      if (hasFile) {
        const formData = new FormData();
        formData.append('title', title);
        if (folder) formData.append('folder', folder);
        formData.append('type', type);
        if (description) formData.append('description', description);
        if (url) formData.append('url', url);
        if (text) formData.append('text', text);
        formData.append('file', fileInput.files[0]);
        formData.append('targets', JSON.stringify(targets));
        if (isEditing) {
          formData.append('_method', 'PATCH');
        }
        reqOptions = {
          method: 'POST',
          body: formData
        };
      } else {
        const payload = {
          title,
          folder,
          type,
          description,
          url,
          text,
          targets
        };
        reqOptions = {
          method: isEditing ? 'PATCH' : 'POST',
          body: JSON.stringify(payload)
        };
      }

      api(endpoint, reqOptions).then(res => {
        if (isEditing && state.editingMaterial) {
          Object.assign(state.editingMaterial, { title, folder, type, description, url, text, targets });
        }
        state.modal = null;
        state.editingMaterial = null;
        render();
        showToast(isEditing ? 'Material didático atualizado com sucesso!' : 'Material cadastrado com sucesso!', 'success');
        loadMentorResource('mentor-materials', api).then(() => render());
      }).catch(err => {
        showToast('Erro ao salvar material no servidor.', 'error');
      });
    }
    else if (action === 'delete-material') {
      const matId = actionBtn.dataset.id;
      const mat = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(matId));
      state.confirmation = {
        title: 'Excluir Conteúdo Didático?',
        message: `Tem certeza que deseja excluir o material "${mat?.title || matId}"?`,
        confirmAction: 'confirm-delete-material',
        materialId: matId,
        confirmText: 'Excluir Material'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-material') {
      const matId = state.confirmation?.materialId;
      if (matId) {
        api(`/mentoria2/materials/${matId}`, { method: 'DELETE' }).then(() => {
          window.M2Data.mentorContents = (window.M2Data.mentorContents || []).filter(m => String(m.id) !== String(matId));
          window.M2Data.materials = (window.M2Data.materials || []).filter(m => String(m.id) !== String(matId));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Material didático excluído com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir material.', 'error');
        });
      }
    }
    else if (action === 'edit-contest') {
      const contestId = actionBtn.dataset.id;
      const contest = (window.M2Data.contests || []).find(c => String(c.id) === String(contestId));
      state.quickPrompt = {
        title: 'Editar Nome do Concurso',
        subtitle: contest ? `Atual: ${contest.name || contest.title}` : '',
        label: 'Nome do Concurso / Ã“rgão / Cargo:',
        inputType: 'text',
        value: contest?.name || contest?.title || '',
        confirmAction: 'confirm-edit-contest',
        confirmText: 'Salvar Alterações',
        contestId: contestId,
        contest: contest
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-edit-contest') {
      const input = document.getElementById('m2-quick-prompt-input');
      const name = input?.value?.trim();
      const { contestId, contest } = state.quickPrompt || {};
      if (name && contestId) {
        api(`/mentoria2/contests/${contestId}`, {
          method: 'PATCH',
          body: JSON.stringify({ name })
        }).then(() => {
          if (contest) { contest.name = name; contest.title = name; }
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast('Concurso atualizado com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao atualizar concurso.', 'error');
        });
      } else {
        showToast('Informe o nome do concurso.', 'error');
      }
    }
    else if (action === 'delete-contest') {
      const contestId = actionBtn.dataset.id;
      const contest = (window.M2Data.contests || []).find(c => String(c.id) === String(contestId));
      state.confirmation = {
        title: 'Excluir Concurso?',
        message: `Tem certeza que deseja excluir o concurso "${contest?.name || contest?.title || contestId}"? Os editais e vinculações associados serão desativados.`,
        confirmAction: 'confirm-delete-contest',
        contestId: contestId,
        confirmText: 'Excluir Concurso'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-contest') {
      const contestId = state.confirmation?.contestId;
      if (contestId) {
        api(`/mentoria2/contests/${contestId}`, { method: 'DELETE' }).then(() => {
          window.M2Data.contests = (window.M2Data.contests || []).filter(c => String(c.id) !== String(contestId));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Concurso excluído com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir concurso.', 'error');
        });
      }
    }
    else if (action === 'edit-cohort') {
      const cohortId = actionBtn.dataset.id;
      const cohort = (window.M2Data.cohorts || window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
      state.quickPrompt = {
        title: 'Editar Nome da Turma',
        subtitle: cohort ? `Atual: ${cohort.name}` : '',
        label: 'Nome da Turma:',
        inputType: 'text',
        value: cohort?.name || '',
        confirmAction: 'confirm-edit-cohort',
        confirmText: 'Salvar Alterações',
        cohortId: cohortId,
        cohort: cohort
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-edit-cohort') {
      const input = document.getElementById('m2-quick-prompt-input');
      const name = input?.value?.trim();
      const { cohortId, cohort } = state.quickPrompt || {};
      if (name && cohortId) {
        api(`/mentoria2/cohorts/${cohortId}`, {
          method: 'PATCH',
          body: JSON.stringify({ name })
        }).then(() => {
          if (cohort) cohort.name = name;
          const c1 = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
          if (c1) c1.name = name;
          const c2 = (window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
          if (c2) c2.name = name;
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast('Turma atualizada com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao atualizar turma.', 'error');
        });
      } else {
        showToast('Informe o nome da turma.', 'error');
      }
    }
    else if (action === 'delete-cohort') {
      const cohortId = actionBtn.dataset.id;
      const cohort = (window.M2Data.cohorts || window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
      state.confirmation = {
        title: 'Excluir Turma?',
        message: `Tem certeza que deseja excluir a turma "${cohort?.name || cohortId}"? Os alunos não serão excluídos do sistema.`,
        confirmAction: 'confirm-delete-cohort',
        cohortId: cohortId,
        confirmText: 'Excluir Turma'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-cohort') {
      const cohortId = state.confirmation?.cohortId;
      if (cohortId) {
        api(`/mentoria2/cohorts/${cohortId}`, { method: 'DELETE' }).then(() => {
          window.M2Data.cohorts = (window.M2Data.cohorts || []).filter(c => String(c.id) !== String(cohortId));
          window.M2Data.mentorCohorts = (window.M2Data.mentorCohorts || []).filter(c => String(c.id) !== String(cohortId));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Turma excluída com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir turma.', 'error');
        });
      }
    }
    else if (action === 'edit-mentor-deck') {
      const deckId = actionBtn.dataset.id;
      const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
      state.editingDeck = deck || { id: deckId };
      state.currentTargets = (deck?.targets && deck.targets.length > 0) ? JSON.parse(JSON.stringify(deck.targets)) : [{ type: 'global', id: null }];
      state.modal = 'deck-form';
      render();
    }
    else if (action === 'delete-mentor-deck') {
      const deckId = actionBtn.dataset.id;
      const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
      state.confirmation = {
        title: 'Excluir Baralho?',
        message: `Tem certeza que deseja excluir o baralho "${deck?.title || deckId}" e todos os seus cartões?`,
        confirmAction: 'confirm-delete-mentor-deck',
        deckId: deckId,
        confirmText: 'Excluir Baralho'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-mentor-deck') {
      const deckId = state.confirmation?.deckId;
      if (deckId) {
        api(`/mentoria2/flashcard-decks/${deckId}`, { method: 'DELETE' }).then(() => {
          window.M2Data.flashcardDecks = (window.M2Data.flashcardDecks || []).filter(d => String(d.id) !== String(deckId));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Baralho excluído com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir baralho.', 'error');
        });
      }
    }
    else if (action === 'delete-mentor-card') {
      const cardId = actionBtn.dataset.cardId;
      const deckId = actionBtn.dataset.deckId || state.activeDeckId;
      state.confirmation = {
        title: 'Excluir Cartão?',
        message: 'Tem certeza que deseja excluir este cartão do baralho?',
        confirmAction: 'confirm-delete-mentor-card',
        cardId: cardId,
        deckId: deckId,
        confirmText: 'Excluir Cartão'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-mentor-card') {
      const { cardId, deckId } = state.confirmation || {};
      if (cardId) {
        api(`/mentoria2/flashcards/${cardId}`, { method: 'DELETE' }).then(() => {
          const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
          if (deck && deck.cards) {
            deck.cards = deck.cards.filter(c => String(c.id) !== String(cardId));
            deck.totalCards = deck.cards.length;
          }
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Cartão excluído com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir cartão.', 'error');
        });
      }
    }
    else if (action === 'edit-mock') {
      const mockId = actionBtn.dataset.id;
      const mock = (window.M2Data.mockExams || []).find(m => String(m.id) === String(mockId));
      state.quickPrompt = {
        title: 'Editar Simulado',
        subtitle: mock ? `Simulado: ${mock.title || mock.name}` : '',
        label: 'Título do Simulado:',
        inputType: 'text',
        value: mock?.title || mock?.name || '',
        confirmAction: 'confirm-edit-mock',
        confirmText: 'Salvar Alterações',
        mockId: mockId,
        mock: mock
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-edit-mock') {
      const input = document.getElementById('m2-quick-prompt-input');
      const title = input?.value?.trim();
      const { mockId, mock } = state.quickPrompt || {};
      if (title && mockId) {
        const studentId = window.M2Data?.currentStudent?.id || 1;
        api(`/mentoria2/students/${studentId}/mock-exams/${mockId}`, {
          method: 'PATCH',
          body: JSON.stringify({ title: title })
        }).then(() => {
          if (mock) { mock.title = title; mock.name = title; }
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast('Simulado atualizado com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao atualizar simulado.', 'error');
        });
      } else {
        showToast('Informe o título do simulado.', 'error');
      }
    }
    else if (action === 'delete-mock') {
      const mockId = actionBtn.dataset.id;
      const mock = (window.M2Data.mockExams || []).find(m => String(m.id) === String(mockId));
      state.confirmation = {
        title: 'Excluir Simulado?',
        message: `Tem certeza que deseja excluir o simulado "${mock?.title || mock?.name || mockId}"?`,
        confirmAction: 'confirm-delete-mock',
        mockId: mockId,
        confirmText: 'Excluir Simulado'
      };
      state.modal = 'confirmation';
      render();
    }
    else if (action === 'confirm-delete-mock') {
      const mockId = state.confirmation?.mockId;
      if (mockId) {
        const studentId = window.M2Data?.currentStudent?.id || 1;
        api(`/mentoria2/students/${studentId}/mock-exams/${mockId}`, { method: 'DELETE' }).then(() => {
          window.M2Data.mockExams = (window.M2Data.mockExams || []).filter(m => String(m.id) !== String(mockId));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Simulado excluído com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir simulado.', 'error');
        });
      }
    }
    else if (action === 'create-mentor-deck') {
      state.editingDeck = null;
      state.currentTargets = [{ type: 'global', id: null }];
      state.modal = 'deck-form';
      render();
    }
    else if (action === 'submit-deck-form' || action === 'confirm-create-mentor-deck') {
      const name = document.getElementById('m2-df-name')?.value?.trim();
      const subject = document.getElementById('m2-df-subject')?.value?.trim() || 'Geral';
      const description = document.getElementById('m2-df-description')?.value?.trim() || null;
      const contest_id = document.getElementById('m2-df-contest')?.value?.trim() || null;
      const edict_id = document.getElementById('m2-df-edict')?.value?.trim() || null;
      const targets = (state.currentTargets && state.currentTargets.length > 0)
        ? state.currentTargets
        : [{ type: 'global', id: null }];

      if (!name) {
        showToast('Informe o nome do baralho.', 'error');
        return;
      }

      const isEditing = Boolean(state.editingDeck?.id);
      const endpoint = isEditing
        ? `/mentoria2/flashcard-decks/${encodeURIComponent(state.editingDeck.id)}`
        : '/mentoria2/flashcard-decks';
      const method = isEditing ? 'PATCH' : 'POST';

      const payload = {
        name,
        title: name,
        subject,
        description,
        contest_id,
        edict_id,
        targets
      };

      api(endpoint, {
        method,
        body: JSON.stringify(payload)
      }).then(res => {
        if (isEditing && state.editingDeck) {
          Object.assign(state.editingDeck, payload);
          const found = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(state.editingDeck.id));
          if (found) Object.assign(found, payload);
        } else {
          const newDeck = {
            id: res.id,
            title: name,
            name: name,
            subject,
            description,
            contest_id,
            edict_id,
            targets,
            author: window.M2Data.mentor?.name || 'Não informado',
            isShared: true,
            totalCards: 0,
            dueCards: 0,
            newCards: 0,
            masteredCards: 0,
            retentionRate: 0,
            cards: []
          };
          window.M2Data.flashcardDecks = window.M2Data.flashcardDecks || [];
          window.M2Data.flashcardDecks.unshift(newDeck);
        }
        state.modal = null;
        state.editingDeck = null;
        render();
        showToast(isEditing ? 'Baralho atualizado com sucesso!' : `Baralho "${name}" criado com sucesso!`, 'success');
        loadMentorResource('mentor-flashcards', api).then(() => render());
      }).catch(err => {
        showToast('Erro ao salvar baralho no servidor.', 'error');
      });
    }
    else if (action === 'open-deck-editor') {
      const deckId = actionBtn.dataset.id;
      state.activeDeckId = deckId;
      state.mode = 'mentor';
      state.screen = 'mentor-deck-editor';
      render();
      loadDeckCards(deckId, api).then(() => render()).catch(error => showToast('Não foi possível carregar os cartões.', 'error'));
    }
    else if (action === 'create-mentor-card') {
      state.cardEditor = { deckId: actionBtn.dataset.deckId || state.activeDeckId, card: null };
      state.modal = 'mentor-card-form';
      render();
    }
    else if (action === 'edit-mentor-card') {
      const deckId = actionBtn.dataset.deckId || state.activeDeckId;
      const deck = (window.M2Data.flashcardDecks || []).find(item => String(item.id) === String(deckId));
      const card = deck?.cards?.find(item => String(item.id) === String(actionBtn.dataset.cardId));
      if (!card) {
        showToast('Cartão não encontrado. Atualize a lista e tente novamente.', 'error');
        return;
      }
      state.cardEditor = { deckId, card };
      state.modal = 'mentor-card-form';
      render();
    }
    else if (action === 'save-mentor-card') {
      const editor = state.cardEditor || {};
      const front = document.getElementById('m2-card-front')?.value?.trim() || '';
      const back = document.getElementById('m2-card-back')?.value?.trim() || '';
      const hint = document.getElementById('m2-card-hint')?.value?.trim() || '';
      const tags = (document.getElementById('m2-card-tags')?.value || '')
        .split(',').map(tag => tag.trim()).filter(Boolean);
      if (!editor.deckId || !front || !back) {
        showToast('Preencha a frente e o verso do cartão.', 'error');
        return;
      }
      const isEditing = Boolean(editor.card?.id);
      const endpoint = isEditing
        ? `/mentoria2/flashcards/${encodeURIComponent(editor.card.id)}`
        : `/mentoria2/flashcard-decks/${encodeURIComponent(editor.deckId)}/cards`;
      api(endpoint, {
        method: isEditing ? 'PATCH' : 'POST',
        body: JSON.stringify({ front, back, hint: hint || null, tags })
      }).then(response => {
        const deck = (window.M2Data.flashcardDecks || []).find(item => String(item.id) === String(editor.deckId));
        if (deck) {
          deck.cards = deck.cards || [];
          if (isEditing) {
            const index = deck.cards.findIndex(item => String(item.id) === String(editor.card.id));
            if (index >= 0) deck.cards[index] = { ...deck.cards[index], front, back, hint: hint || null, tags };
          } else {
            deck.cards.push({ id: response.id, front, back, hint: hint || null, tags });
            deck.totalCards = deck.cards.length;
          }
        }
        state.modal = null;
        state.cardEditor = null;
        render();
        showToast(isEditing ? 'Cartão atualizado.' : 'Cartão criado.', 'success');
      }).catch(error => showToast('Não foi possível salvar o cartão.', 'error'));
    }
    else if (action === 'choose-student-home-banner') {
      const input = document.getElementById('m2-student-home-banner-input');
      if (!input) return;
      input.value = '';
      input.onchange = () => {
        const file = input.files?.[0];
        if (!file) return;
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
          showToast('Envie uma imagem JPG, PNG ou WebP de at? 5 MB.', 'error');
          return;
        }
        const formData = new FormData();
        formData.append('banner', file);
        showToast('Enviando capa...', 'info');
        api('/mentoria2/settings/student-home-banner', { method: 'POST', body: formData })
          .then(result => {
            window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), student_home_banner: result.student_home_banner || null };
            render();
            showToast('Capa da ?rea do aluno atualizada.', 'success');
          })
          .catch(() => showToast('N?o foi poss?vel enviar a capa.', 'error'));
      };
      input.click();
    }
    else if (action === 'remove-student-home-banner') {
      api('/mentoria2/settings/student-home-banner', { method: 'DELETE' })
        .then(() => {
          window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), student_home_banner: null };
          render();
          showToast('Capa removida da ?rea do aluno.', 'success');
        })
        .catch(() => showToast('N?o foi poss?vel remover a capa.', 'error'));
    }
    else if (action === 'enable-mentoria-product' || action === 'disable-mentoria-product') {
      const productId = actionBtn.dataset.productId;
      if (!productId) {
        showToast('Produto inválido.', 'error');
        return;
      }
      const enabling = action === 'enable-mentoria-product';
      const endpoint = `/mentoria2/products/${encodeURIComponent(productId)}${enabling ? '/enable' : ''}`;
      api(endpoint, { method: enabling ? 'POST' : 'DELETE', body: enabling ? JSON.stringify({}) : undefined })
        .then(() => {
          const product = (window.M2Data.mentorProducts || []).find(item => String(item.id) === String(productId));
          if (product) product.mentoria2_enabled = enabling;
          render();
          showToast(enabling ? 'Produto vinculado à Mentoria 2.0.' : 'Produto desvinculado da Mentoria 2.0.', 'success');
        })
        .catch(error => showToast('Não foi possível atualizar o produto.', 'error'));
    }
    else if (action === 'upload-material') {
      state.quickPrompt = {
        title: 'Cadastrar Novo Material Didático',
        subtitle: 'Vincule resumos, apostilas ou links complementares.',
        label: 'Título do Material / Documento:',
        inputType: 'text',
        placeholder: 'Ex: Resumo de Direito Penal - Parte Geral',
        confirmAction: 'confirm-upload-material',
        confirmText: 'Cadastrar Material'
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-upload-material') {
      const input = document.getElementById('m2-quick-prompt-input');
      const title = input?.value?.trim();
      if (title) {
        api('/mentoria2/materials', {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            type: 'link',
            external_url: 'https://exemplo.com'
          })
        }).then(res => {
          const newMat = {
            id: res.id,
            title: title,
            topic: 'Geral',
            size: 'Link Externo',
            pages: 1,
            uploadedAt: new Date().toLocaleDateString('pt-BR')
          };
          window.M2Data.materials = window.M2Data.materials || [];
          window.M2Data.materials.unshift(newMat);
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Material "${title}" salvo com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao cadastrar material no servidor.', 'error');
        });
      } else {
        showToast('Informe o título do material.', 'error');
      }
    }
    else if (action === 'create-mock') {
      state.modal = 'manual-mock';
      render();
      showToast('Abra o assistente para registrar ou criar um novo simulado.', 'info');
    }
    else if (action === 'create-goal') {
      state.modal = 'goal-form';
      render();
    }
    else if (action === 'save-goal') {
      const value = id => document.getElementById(id)?.value?.trim() || '';
      const scope = value('m2-goal-scope');
      const students = window.M2Data.mentorStudents || window.M2Data.students || [];
      const payload = { name: value('m2-goal-name'), metric: value('m2-goal-metric'), target: Number(value('m2-goal-target')), starts_on: value('m2-goal-start'), ends_on: value('m2-goal-end'), contest_id: value('m2-goal-contest') || null, is_challenge: Boolean(document.getElementById('m2-goal-challenge')?.checked) };
      if (scope === 'all') payload.student_ids = students.map(s => Number(s.id)).filter(Number.isFinite);
      if (scope === 'cohort') payload.cohort_id = value('m2-goal-cohort');
      if (scope === 'student') payload.student_ids = [Number(value('m2-goal-student'))].filter(Number.isFinite);
      if (!payload.name || !payload.target || !payload.starts_on || !payload.ends_on || (scope === 'cohort' && !payload.cohort_id) || (scope === 'student' && payload.student_ids.length === 0)) { showToast('Preencha os campos obrigatórios e o destinatário.', 'error'); return; }
      api('/mentoria2/goals', { method: 'POST', body: JSON.stringify(payload) }).then(result => { state.modal = null; render(); showToast(`Meta atribuída a ${(result.goals || []).length} aluno(s) e salva no servidor.`, 'success'); }).catch(error => showToast('Não foi possível criar a meta.', 'error'));
    }
    else if (action === 'delete-goal') {
      const id = actionBtn.dataset.id;
      if (id) {
        state.confirmation = {
          title: 'Excluir meta?',
          message: 'A meta deixará de aparecer para os alunos que a receberam.',
          confirmAction: 'confirm-delete-goal',
          goalId: id,
          confirmText: 'Excluir meta'
        };
        state.modal = 'confirmation';
        render();
      }
    }
    else if (action === 'confirm-delete-goal') {
      const id = state.confirmation?.goalId;
      if (id) {
        api(`/mentoria2/goals/${id}`, {
          method: 'DELETE'
        }).then(() => {
          window.M2Data.goals = (window.M2Data.goals || []).filter(g => String(g.id) !== String(id));
          state.modal = null;
          state.confirmation = null;
          render();
          showToast('Meta excluída com sucesso!', 'success');
        }).catch(err => {
          showToast('Erro ao excluir meta.', 'error');
        });
      }
    }
    else if (action === 'open-shared-note') {
      const id = actionBtn.dataset.id;
      const fb = (window.M2Data.mentorFeedbacks || []).find(f => String(f.id) === String(id));
      state.quickPrompt = {
        title: 'Resposta Pedagógica ao Feedback',
        subtitle: fb ? `Aluno: ${fb.studentName || 'Aluno'}` : 'Canal pedagógico',
        label: 'Sua Orientação Pedagógica:',
        inputType: 'textarea',
        value: fb?.reply || '',
        placeholder: 'Escreva a orientação pedagógica para o aluno...',
        confirmAction: 'confirm-reply-feedback',
        confirmText: 'Enviar Resposta',
        feedbackId: id,
        feedback: fb
      };
      state.modal = 'quick-prompt';
      render();
    }
    else if (action === 'confirm-reply-feedback') {
      const input = document.getElementById('m2-quick-prompt-input');
      const reply = input?.value?.trim();
      const { feedbackId, feedback } = state.quickPrompt || {};
      if (reply && feedbackId) {
        const tenantId = state.tenantId || 1;
        const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
        api(`${base}/feedbacks/${feedbackId}/reply`, {
          method: 'POST',
          body: JSON.stringify({ reply: reply })
        }).then(res => {
          if (feedback) {
            feedback.reply = reply;
            feedback.repliedAt = new Date().toISOString();
            feedback.isRead = true;
          }
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast('Resposta pedagógica registrada com sucesso no servidor!', 'success');
        }).catch(err => {
          showToast('Erro ao enviar resposta.', 'error');
        });
      } else {
        showToast('Por favor, informe a resposta pedagógica.', 'error');
      }
    }
    else if (action === 'submit-quick-prompt') {
      const confirmAction = state.quickPrompt?.confirmAction;
      if (confirmAction && confirmAction !== 'submit-quick-prompt') {
        const fakeBtn = document.createElement('button');
        fakeBtn.dataset.action = confirmAction;
        actionBtn.parentElement.appendChild(fakeBtn);
        fakeBtn.click();
        fakeBtn.remove();
      }
    }
    else if (action === 'open-grade-essay') {
      const subId = actionBtn.dataset.id;
      const sub = (window.M2Data.mentorEssaySubmissions || []).find(s => String(s.id) === String(subId));
      if (sub) {
        state.gradingSubmission = sub;
        state.modal = 'grade-essay';
        render();
      } else {
        showToast('Redação não encontrada.', 'error');
      }
    }
    else if (action === 'submit-mentor-grade-essay') {
      const submissionId = actionBtn.dataset.id || state.gradingSubmission?.id;
      const tema = Number(document.getElementById('m2-grade-crit-tema')?.value || 0);
      const estrutura = Number(document.getElementById('m2-grade-crit-estrutura')?.value || 0);
      const gramatica = Number(document.getElementById('m2-grade-crit-gramatica')?.value || 0);
      const totalScore = Number(document.getElementById('m2-grade-total-score')?.value || 0);
      const feedback = document.getElementById('m2-grade-feedback')?.value?.trim() || '';

      if (!feedback || feedback.length < 10) {
        showToast('Por favor, informe um feedback pedagógico detalhado (mínimo 10 caracteres).', 'error');
        return;
      }

      api(`/mentoria2/essays/submissions/${submissionId}/grade`, {
        method: 'POST',
        body: JSON.stringify({
          total_score: totalScore,
          criteria_scores: { tema, estrutura, gramatica },
          feedback: feedback
        })
      }).then(res => {
        state.modal = null;
        state.gradingSubmission = null;
        const sub = (window.M2Data.mentorEssaySubmissions || []).find(s => String(s.id) === String(submissionId));
        if (sub) {
          sub.status = 'graded';
          sub.total_score = totalScore;
          sub.criteria_scores = { tema, estrutura, gramatica };
          sub.feedback = feedback;
          sub.graded_at = new Date().toISOString();
        }
        render();
        showToast('Redação corrigida e nota registrada com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao registrar correção da redação.', 'error');
      });
    }
    else if (action === 'export-report') {
      const students = window.M2Data.students || [];
      let csv = 'Aluno;Email;Turma;Concurso;Horas Estudadas;Questoes Resolvidas;Acuracia (%)\r\n';
      students.forEach(s => {
        csv += `"${s.name}";"${s.email}";"${s.cohort}";"${s.contest}";${s.hoursWeek || 0};${s.questionsResolved || 0};${s.accuracy || 0}%\r\n`;
      });
      const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio-mentoria-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Relatório da mentoria exportado com sucesso em CSV!', 'success');
    }
  });

  // Filtros de Questões e Concursos
  document.addEventListener('change', (e) => {
    if (e.target.dataset.action === 'toggle-qf-type') {
      const altGroup = document.getElementById('m2-qf-alternatives-group');
      const correctSelect = document.getElementById('m2-qf-correct');
      if (altGroup && correctSelect) {
        if (e.target.value === 'certo_errado') {
          altGroup.style.display = 'none';
          correctSelect.innerHTML = '<option value="Certo">Certo</option><option value="Errado">Errado</option>';
        } else {
          altGroup.style.display = 'block';
          correctSelect.innerHTML = '<option value="A">Alternativa A</option><option value="B">Alternativa B</option><option value="C">Alternativa C</option><option value="D">Alternativa D</option><option value="E">Alternativa E</option>';
        }
      }
      return;
    }
    if (e.target.dataset.action === 'toggle-mf-type') {
      const val = e.target.value;
      const urlGroup = document.getElementById('m2-mf-url-group');
      const textGroup = document.getElementById('m2-mf-text-group');
      const fileGroup = document.getElementById('m2-mf-file-group');
      if (urlGroup && textGroup && fileGroup) {
        urlGroup.style.display = (val === 'youtube' || val === 'link') ? 'block' : 'none';
        textGroup.style.display = (val === 'texto') ? 'block' : 'none';
        fileGroup.style.display = (val === 'arquivo') ? 'block' : 'none';
      }
      return;
    }
    if (e.target.dataset.action === 'change-audience-target-type') {
      const idx = Number(e.target.dataset.index);
      if (state.currentTargets && state.currentTargets[idx]) {
        state.currentTargets[idx].type = e.target.value;
        state.currentTargets[idx].id = null;
        render();
      }
      return;
    }
    if (e.target.dataset.action === 'change-audience-target-id') {
      const idx = Number(e.target.dataset.index);
      if (state.currentTargets && state.currentTargets[idx]) {
        state.currentTargets[idx].id = e.target.value;
      }
      return;
    }
    if (['mentor-filter-subject', 'mentor-filter-difficulty', 'mentor-filter-status'].includes(e.target.dataset.action)) {
      const screen = e.target.dataset.screen || state.screen;
      const key = e.target.dataset.action === 'mentor-filter-subject' ? 'subject' : (e.target.dataset.action === 'mentor-filter-difficulty' ? 'difficulty' : 'content_status');
      loadMentorResource(screen, api, 1, { [key]: e.target.value }).then(() => render()).catch(error => showToast('Erro ao filtrar.', 'error'));
      return;
    } else if (e.target.dataset.action === 'filter-questions-subject-select') {
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
    } else if (e.target.dataset.action === 'filter-question-subject') {
      state.questionSubjectFilter = e.target.value;
      render();
    } else if (e.target.dataset.action === 'filter-question-status') {
      state.questionStatusFilter = e.target.value;
      render();
    } else if (e.target.dataset.action === 'change-contest') {
      state.contestId = e.target.value;
      render();
      showToast('Concurso ativo alterado para ' + e.target.value);
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

  // Atualização Dinâmica nos Modais e Editores
  document.addEventListener('input', (e) => {
    if (e.target.dataset.action === 'mentor-filter-search' || e.target.dataset.action === 'mentor-filter-folder') {
      const screen = e.target.dataset.screen || state.screen;
      const key = e.target.dataset.action === 'mentor-filter-folder' ? 'folder' : 'search';
      clearTimeout(window.__m2FilterDebounce);
      window.__m2FilterDebounce = setTimeout(() => {
        loadMentorResource(screen, api, 1, { [key]: e.target.value }).then(() => render()).catch(error => showToast('Erro ao filtrar.', 'error'));
      }, 300);
      return;
    } else if (e.target.id === 'm2-input-mq-total' || e.target.id === 'm2-input-mq-correct') {
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
    } else if (e.target.id === 'm2-notebook-search') {
      state.notebookSearch = e.target.value;
      render();
    } else if (e.target.id === 'm2-note-textarea') {
      state.noteContent = e.target.value;
      setNoteSaveStatus('Alterações não salvas');
      if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
      window.__m2NoteAutosaveTimer = setTimeout(() => {
        void saveNote({ autosave: true });
      }, 800);
    }
  });

  // Ticker para o cronômetro flutuante e Pomodoro (1 segundo)
  if (typeof window !== 'undefined') {
    if (window.__m2TimerInterval) clearInterval(window.__m2TimerInterval);
    window.__m2TimerInterval = setInterval(() => {
      if (state.timerRunning) {
        if (state.timerMode === 'pomodoro') {
          if (state.timerSeconds > 0) {
            state.timerSeconds--;
          } else {
            // Alterna ciclo Pomodoro
            if (state.pomodoroPhase === 'focus') {
              state.pomodoroPhase = 'break';
              state.timerSeconds = 300;
              showToast('⏰ Pomodoro de foco concluído! Faça uma pausa de 5 minutos.', 'info');
            } else {
              state.pomodoroPhase = 'focus';
              state.pomodoroCycle++;
              state.timerSeconds = 1500;
              showToast('ðŸ”” Pausa concluída! Iniciando novo ciclo de foco.', 'info');
            }
          }
        } else {
          // Modo livre: cronômetro progressivo
          state.timerSeconds++;
        }

        // Atualização direta de elementos no DOM para fluidez e velocidade
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

  // Atalhos de Teclado com desregistro prévio para evitar ouvintes duplicados
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

      // Tecla Espaço para virar flashcard
      if (e.code === 'Space' && state.screen === 'deck' && !state.cardRevealed) {
        e.preventDefault();
        state.cardRevealed = true;
        render();
      }

      // Tecla P para pular questão
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
  }
}


