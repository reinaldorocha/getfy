/**
 * Centraliza a navegação disparada por elementos com data-nav.
 * Dependências são injetadas para preservar o estado atual durante a migração.
 */
export function handleNavigationEvent(event, {
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
  loadPlanningCalendar,
}) {
  const navBtn = event.target.closest('[data-nav]');
  if (!navBtn) return false;

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
      const targetDeck = (window.M2Data.flashcardDecks || []).find(deck => String(deck.id).toLowerCase() === String(targetDeckId).toLowerCase());
      // O aluno recebe somente seus cartões autorizados no payload inicial. A rota
      // administrativa de cartões é exclusiva do mentor e não deve ser consultada
      // para completar baralhos vazios do aluno.
      const canLoadAdministrativeDeckCards = targetMode === 'mentor' || state.mode === 'mentor';
      if (canLoadAdministrativeDeckCards && (!targetDeck || !Array.isArray(targetDeck.cards) || targetDeck.cards.length === 0)) {
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

  if (targetScreen === 'planning' && typeof loadPlanningCalendar === 'function') {
    loadPlanningCalendar().catch(() => {});
  }

  if (targetScreen === 'radar-editais') {
    loadRadarEditais().catch(() => showToast('Não foi possível carregar o Radar de Editais.', 'error'));
  }
  if (targetScreen === 'mentor-radar-editais') {
    loadMentorRadarEditais().catch(() => showToast('Não foi possível carregar as fontes do Radar.', 'error'));
  }
  if (targetScreen === 'mentor-contest-detail' && state.contestId) {
    loadContestSyllabus(state.contestId, api).then(() => render()).catch(() => showToast('Não foi possível carregar o edital.', 'error'));
  }
  if (targetScreen === 'mentor-feedback') {
    api('/mentoria2/essays/submissions').then(response => {
      window.M2Data.mentorEssaySubmissions = Array.isArray(response.submissions) ? response.submissions : [];
      render();
    }).catch(() => {});
  }
  loadMentorResource(targetScreen, api).then(loaded => {
    if (loaded) render();
  }).catch(() => showToast('Não foi possível atualizar a lista.', 'error'));

  return true;
}
