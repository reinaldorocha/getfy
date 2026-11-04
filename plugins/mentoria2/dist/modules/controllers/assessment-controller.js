function baseFor(state) { return state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${state.tenantId || 1}`; }
function elapsed(attempt) { return Math.max(Number(attempt.elapsed_seconds || 0), Math.floor((Date.now() - new Date(attempt.started_at).getTime()) / 1000)); }

export function handleAssessmentAction({ action, actionBtn, state, api, render, showToast, navigate }) {
  if (action === 'start-mock') {
    const mockId = actionBtn.dataset.mockId;
    api(`${baseFor(state)}/mock-exams/${encodeURIComponent(mockId)}/attempts`, { method: 'POST', body: JSON.stringify({}) }).then(result => {
      state.activeMockId = mockId; state.mockAttempt = result.attempt; state.mockQuestionIndex = 0; state.mockAnswerDrafts = {};
      navigate('mock-taking'); showToast('Simulado iniciado. Suas respostas serao salvas ao confirmar.', 'success');
    }).catch(() => showToast('Nao foi possivel iniciar este simulado. Verifique se ha questoes disponiveis.', 'error'));
    return true;
  }
  if (action === 'select-mock-option') { state.mockAnswerDrafts[actionBtn.dataset.questionId] = actionBtn.dataset.option; render(); return true; }
  if (action === 'prev-mock-question' || action === 'next-mock-question') {
    const total = state.mockAttempt?.questions?.length || 0; const step = action === 'next-mock-question' ? 1 : -1;
    state.mockQuestionIndex = Math.max(0, Math.min((state.mockQuestionIndex || 0) + step, Math.max(0, total - 1))); render(); return true;
  }
  if (action === 'save-mock-answer') {
    const attempt = state.mockAttempt; const questionId = actionBtn.dataset.questionId; const answer = state.mockAnswerDrafts[questionId] || attempt?.answers?.[questionId]?.answer;
    if (!attempt || !answer) return true;
    const seconds = elapsed(attempt);
    api(`${baseFor(state)}/mock-exams/${encodeURIComponent(attempt.mock_id)}/attempts/${encodeURIComponent(attempt.id)}/answers/${encodeURIComponent(questionId)}`, { method: 'PATCH', body: JSON.stringify({ answer, elapsed_seconds: seconds }) }).then(() => {
      attempt.answers = attempt.answers || {}; attempt.answers[questionId] = { answer }; attempt.elapsed_seconds = seconds; render(); showToast('Resposta salva.', 'success');
    }).catch(() => showToast('Nao foi possivel salvar sua resposta. Tente novamente.', 'error'));
    return true;
  }
  if (action === 'finish-mock') {
    const attempt = state.mockAttempt; if (!attempt) return true;
    api(`${baseFor(state)}/mock-exams/${encodeURIComponent(attempt.mock_id)}/attempts/${encodeURIComponent(attempt.id)}/finish`, { method: 'POST', body: JSON.stringify({ elapsed_seconds: elapsed(attempt) }) }).then(result => {
      const mock = (window.M2Data.mockExams || []).find(item => String(item.id) === String(result.mock_id));
      if (mock) { mock.status = 'completed'; mock.type = 'realizado'; mock.score = Number(result.percentage || 0); mock.questionsCount = Number(result.total_questions || 0); mock.timeSpent = `${Math.ceil(Number(result.elapsed_seconds || 0) / 60)} min`; mock.subjectBreakdown = (result.subject_results || []).map(item => ({ subject: item.name, correct: item.correct, total: item.questions, pct: item.percentage })); mock.ranking = Array.isArray(result.ranking) ? result.ranking : []; }
      state.activeMockId = result.mock_id; state.mockAttempt = null;
      if (result.gamification) { window.M2Data.gamification = result.gamification; window.M2Data.student.xp = result.gamification.total_xp || 0; }
      navigate('mock-result'); showToast(result.gamification?.reason ? `${result.gamification.reason}. +${result.gamification.awarded_xp || 0} XP` : 'Simulado finalizado. Confira seu desempenho.', 'success');
    }).catch(() => showToast('Nao foi possivel finalizar o simulado. Tente novamente.', 'error'));
    return true;
  }
  if (action === 'open-manual-mock-modal') {
    state.modal = 'manual-mock';
    render();
    return true;
  }
  if (action === 'save-manual-mock') {
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
      return true;
    }
    if (correct > total) {
      showToast('Os acertos não podem superar o total.', 'warning');
      return true;
    }

    const scorePct = Math.round((correct / total) * 100);
    const base = baseFor(state);

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
      showToast(`🎯 Simulado "${title}" salvo com sucesso! (+150 XP)`, 'success');
    }).catch(() => {
      showToast('Não foi possível concluir a operação. Tente novamente.', 'error');
    });
    return true;
  }
  return false;
}
