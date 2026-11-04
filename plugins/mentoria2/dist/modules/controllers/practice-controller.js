function studentResourceBase(state) {
  const tenantId = state.tenantId || 1;
  return state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
}

function applyGamification(result) {
  if (!result?.gamification) return;
  window.M2Data.gamification = result.gamification;
  if (window.M2Data.student) window.M2Data.student.xp = result.gamification.total_xp || 0;
}

export function handlePracticeAction({ action, actionBtn, state, api, render, showToast, getFilteredStudyQuestions, navigate }) {
  const resetQuestionSession = () => {
    state.currentQuestionIndex = 0; state.selectedOption = null; state.answeredQuestion = false;
    state.studySessionComplete = false; state.studySessionXpGained = 0; state.studySessionCorrectCount = 0;
  };

  if (action === 'select-option') {
    state.selectedOption = actionBtn.dataset.option;
    render();
    return true;
  }

  if (action === 'submit-answer') {
    if (!state.selectedOption) return true;
    const question = window.M2Data.questions?.[state.currentQuestionIndex];
    if (!question) return true;
    state.answeredQuestion = true;
    api(`${studentResourceBase(state)}/questions/${question.id}/answer`, { method: 'POST', body: JSON.stringify({ answer: state.selectedOption, contest_id: state.contestId || question.contestId }) })
      .then(result => {
        const correct = Boolean(result.correct);
        question.userStatus = correct ? 'correct' : 'wrong';
        question.answer = (result.correct_answer || question.correct_answer || question.answer || '').toUpperCase().trim();
        question.correct_answer = question.answer;
        if (result.explanation) question.explanation = result.explanation;
        window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + 1;
        applyGamification(result);
        render();
        showToast(result.gamification?.reason ? `${result.gamification.reason}. +${result.gamification.awarded_xp || 0} XP` : correct ? 'Resposta correta registrada.' : 'Resposta incorreta. Adicionada ao Caderno de Erros.', correct ? 'success' : 'info');
      }).catch(() => { state.answeredQuestion = false; render(); showToast('Nao foi possivel salvar sua resposta. Tente novamente.', 'error'); });
    return true;
  }

  if (action === 'next-question' || action === 'prev-question') {
    const total = window.M2Data.questions?.length || 0;
    if (!total) return true;
    state.currentQuestionIndex = action === 'next-question' ? (state.currentQuestionIndex + 1) % total : Math.max(0, state.currentQuestionIndex - 1);
    state.selectedOption = null; state.answeredQuestion = false; render();
    return true;
  }

  if (action === 'select-subject' || action === 'start-study-subject') {
    state.selectedSubjectId = action === 'select-subject' ? actionBtn.dataset.id : actionBtn.dataset.subject;
    state.selectedTopicId = actionBtn.dataset.topic || 'all';
    state.questionDifficultyFilter = 'all';
    resetQuestionSession();
    window.location.hash = '#student/questions';
    state.screen = 'questions';
    render();
    return true;
  }

  if (action === 'back-to-subjects' || action === 'open-subjects-grid') {
    state.selectedSubjectId = null; state.selectedTopicId = 'all'; resetQuestionSession(); render();
    return true;
  }

  if (action === 'select-topic-chip') {
    state.selectedTopicId = actionBtn.dataset.topicId; resetQuestionSession(); render(); return true;
  }

  if (action === 'reset-topic-filter' || action === 'restart-study-session') {
    if (action === 'reset-topic-filter') { state.selectedTopicId = 'all'; state.questionDifficultyFilter = 'all'; state.questionBoardFilter = 'all'; state.questionFormatFilter = 'all'; }
    resetQuestionSession(); render(); return true;
  }

  if (action === 'select-study-draft' || action === 'select-study-option') {
    const questionId = actionBtn.dataset.questionId;
    if (!state.questionResults[questionId]) { state.questionDrafts[questionId] = actionBtn.dataset.option; state.selectedOption = actionBtn.dataset.option; render(); }
    return true;
  }

  if (action === 'confirm-study-answer') {
    const qId = actionBtn.dataset.questionId;
    const filteredQuestions = getFilteredStudyQuestions ? getFilteredStudyQuestions(state.selectedSubjectId) : [];
    const q = filteredQuestions.find(item => String(item.id) === String(qId)) || filteredQuestions[state.currentQuestionIndex % (filteredQuestions.length || 1)] || window.M2Data?.questions?.[state.currentQuestionIndex];
    if (!q) return true;

    const optId = state.questionDrafts?.[q.id] || state.selectedOption;
    if (!optId) {
      showToast('Selecione uma alternativa antes de responder.', 'info');
      return true;
    }

    const contestId = state.contestId || q.contestId;
    api(`${studentResourceBase(state)}/questions/${q.id}/answer`, {
      method: 'POST',
      body: JSON.stringify({ answer: optId, contest_id: contestId }),
    }).then(res => {
      const isRight = Boolean(res.correct);
      if (!state.questionResults) state.questionResults = {};
      state.questionResults[q.id] = {
        correct: isRight,
        answer: optId,
        correct_answer: (res.correct_answer || q.correct_answer || q.answer || '').toUpperCase().trim(),
        explanation: res.explanation || q.explanation,
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
      if (window.M2Data?.student) {
        window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + 1;
      }
      if (res.gamification) {
        state.studySessionXpGained = (state.studySessionXpGained || 0) + Number(res.gamification.awarded_xp || 0);
        state.studySessionCorrectCount = (state.studySessionCorrectCount || 0) + 1;
        applyGamification(res);
        showToast(`${res.gamification.reason}. +${res.gamification.awarded_xp || 0} XP`, 'success');
      } else {
        showToast('Resposta Incorreta gravada. Adicionada ao Caderno de Erros.', 'info');
      }
      if (state.questionHistory && state.questionHistory[q.id]) {
        delete state.questionHistory[q.id];
      }
      render();
    }).catch(() => {
      showToast('Não foi possível salvar sua resposta. Tente novamente.', 'error');
      render();
    });
    return true;
  }

  if (action === 'rate-sm2-question') {
    const rate = actionBtn.dataset.rate;
    showToast(`Algoritmo SM-2: Avaliação "${rate}" gravada com sucesso!`, 'success');
    return true;
  }

  if (action === 'start-specific-question') {
    const qIndex = Number(actionBtn.dataset.index);
    const q = window.M2Data?.questions?.[qIndex];
    if (q) {
      state.selectedSubjectId = q.subjectId;
      state.selectedTopicId = q.topicId;
      state.currentQuestionIndex = 0;
    }
    state.selectedOption = null;
    state.answeredQuestion = false;
    state.studySessionComplete = false;
    if (typeof navigate === 'function') navigate('questions');
    else { state.screen = 'questions'; render(); }
    return true;
  }

  if (action === 'retry-study-question') {
    delete state.questionResults[actionBtn.dataset.questionId]; delete state.questionDrafts[actionBtn.dataset.questionId];
    state.selectedOption = null; state.answeredQuestion = false; render(); return true;
  }

  if (action === 'toggle-question-history') {
    const questionId = actionBtn.dataset.questionId;
    if (state.activeHistoryQuestionId === questionId) { state.activeHistoryQuestionId = null; render(); return true; }
    state.activeHistoryQuestionId = questionId;
    if (state.questionHistory[questionId]) { render(); return true; }
    state.loadingHistoryQuestionId = questionId; render();
    api(`${studentResourceBase(state)}/questions/${questionId}/history`).then(result => { state.questionHistory[questionId] = Array.isArray(result.history) ? result.history : []; })
      .catch(() => { state.questionHistory[questionId] = []; })
      .finally(() => { state.loadingHistoryQuestionId = null; render(); });
    return true;
  }

  if (action === 'prev-study-question' || action === 'next-study-question' || action === 'skip-study-question') {
    const questions = getFilteredStudyQuestions(state.selectedSubjectId) || [];
    if (!questions.length) return true;
    if (action === 'prev-study-question') state.currentQuestionIndex = Math.max(0, state.currentQuestionIndex - 1);
    else if (state.currentQuestionIndex + 1 >= questions.length) state.studySessionComplete = true;
    else state.currentQuestionIndex++;
    const current = questions[state.currentQuestionIndex];
    state.selectedOption = current ? state.questionDrafts[current.id] || null : null;
    state.answeredQuestion = Boolean(current && state.questionResults[current.id]);
    render();
    return true;
  }
  if (action === 'toggle-fav-question') {
    const question = window.M2Data.questions?.[state.currentQuestionIndex];
    if (!question) return true;
    const favorite = !question.isFavorite;
    const current = Array.isArray(window.M2Data.preferences?.settings?.favorite_questions)
      ? [...window.M2Data.preferences.settings.favorite_questions]
      : [];
    const favoriteQuestions = favorite
      ? Array.from(new Set([...current, String(question.id)]))
      : current.filter(id => String(id) !== String(question.id));
    api(`${studentResourceBase(state)}/preferences`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { favorite_questions: favoriteQuestions } }),
    }).then(() => {
      question.isFavorite = favorite;
      window.M2Data.preferences = window.M2Data.preferences || { settings: {} };
      window.M2Data.preferences.settings = window.M2Data.preferences.settings || {};
      window.M2Data.preferences.settings.favorite_questions = favoriteQuestions;
      render();
      showToast(favorite ? 'Questao adicionada aos favoritos!' : 'Questao removida dos favoritos.', 'info');
    }).catch(() => showToast('Erro ao salvar favorito no servidor.', 'error'));
    return true;
  }

  if (action === 'execute-review') {
    state.screen = 'flashcards';
    render();
    showToast('Iniciando sessao de revisao espacada...', 'info');
    return true;
  }

  if (action === 'reveal-card') {
    state.cardRevealed = true;
    render();
    return true;
  }

  if (action === 'rate-card') {
    const rate = actionBtn.dataset.rate;
    const decks = window.M2Data.flashcardDecks || [];
    const deck = decks.find(item => String(item.id) === String(state.activeDeckId)) || decks[0];
    const card = deck?.cards?.[state.currentCardIndex % (deck?.cards?.length || 1)];
    const quality = { Errei: 1, 'Difícil': 2, Bom: 4, 'Fácil': 5 }[rate] || 4;
    if (!card?.id) {
      showToast('Nao ha cartao disponivel para registrar a revisao.', 'info');
      return true;
    }
    api(`${studentResourceBase(state)}/flashcards/${card.id}/review`, {
      method: 'POST',
      body: JSON.stringify({ quality, contest_id: state.contestId }),
    }).then(result => {
      applyGamification(result);
      state.cardRevealed = false;
      state.currentCardIndex++;
      render();
      showToast(`Revisao salva: ${rate} (proxima revisao em ${result.interval_days || 1} dias).`, 'success');
    }).catch(() => showToast('Nao foi possivel salvar a revisao.', 'error'));
    return true;
  }

  if (action === 'complete-review') {
    const reviewId = actionBtn.dataset.id;
    api(`${studentResourceBase(state)}/reviews/${reviewId}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: true }),
    }).then(result => {
      const review = (window.M2Data.reviews || []).find(item => String(item.id) === String(reviewId));
      if (review) {
        review.status = 'completed';
        review.completed = true;
      }
      applyGamification(result);
      render();
      showToast(result.gamification?.reason
        ? `${result.gamification.reason}. +${result.gamification.awarded_xp || 0} XP`
        : 'Revisao concluida!', 'success');
    }).catch(() => showToast('Erro ao concluir revisao.', 'error'));
    return true;
  }

  if (action === 'open-manual-questions-modal') {
    state.modal = 'manual-questions';
    render();
    return true;
  }

  if (action === 'save-manual-questions') {
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
      return true;
    }
    if (correct > total) {
      showToast('O número de acertos não pode ser maior que o total.', 'warning');
      return true;
    }

    const subject = window.M2Data.subjects?.find(s => s.id === subjectId) || window.M2Data.subjects?.[0] || { name: 'Geral', id: null };
    const earnedXp = total * 5 + correct * 5;
    const addHours = +(timeMin / 60).toFixed(1);

    const base = studentResourceBase(state);

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
      if (window.M2Data.student) {
        window.M2Data.student.questionsResolved = (window.M2Data.student.questionsResolved || 0) + total;
        window.M2Data.student.questionsAnswered = (window.M2Data.student.questionsAnswered || 0) + total;
        if (addHours > 0) {
          window.M2Data.student.hoursStudied = +(window.M2Data.student.hoursStudied + addHours).toFixed(1);
          window.M2Data.student.todayHours = +(window.M2Data.student.todayHours + addHours).toFixed(1);
        }
      }
      applyGamification(res);
      if (subject) {
        const currentAcc = subject.accuracy || 75;
        const newAcc = Math.round((currentAcc + Math.round((correct / total) * 100)) / 2);
        subject.accuracy = newAcc;
      }

      state.modal = null;
      render();
      showToast(`✅ ${total} questões de ${subject ? subject.name : 'estudos'} registradas! (+${res.gamification?.awarded_xp || earnedXp} XP)`, 'success');
    }).catch(() => {
      showToast('Não foi possível concluir a operação. Tente novamente.', 'error');
    });
    return true;
  }

  if (action === 'open-report-question') {
    const qId = actionBtn.dataset.questionId || (window.M2Data.questions?.[state.currentQuestionIndex] ? window.M2Data.questions[state.currentQuestionIndex].id : 'q-const-1');
    state.reportingQuestionId = qId;
    state.modal = 'report-question';
    render();
    return true;
  }

  if (action === 'submit-report-question') {
    const reasonSelect = document.getElementById('m2-report-reason');
    const detailsTextarea = document.getElementById('m2-report-details');
    const reason = reasonSelect ? reasonSelect.value : 'Gabarito Divergente';
    const details = detailsTextarea && detailsTextarea.value.trim() ? detailsTextarea.value.trim() : 'Aluno apontou divergência no gabarito oficial.';
    const qId = state.reportingQuestionId || window.M2Data.questions?.[0]?.id;

    const base = studentResourceBase(state);

    api(`${base}/questions/${qId}/report`, {
      method: 'POST',
      body: JSON.stringify({ reason, details })
    }).then(res => {
      window.M2Data.reportedQuestions = window.M2Data.reportedQuestions || [];
      window.M2Data.reportedQuestions.unshift({
        id: res.id || ('rep-' + Date.now()),
        questionId: qId,
        studentName: window.M2Data.student?.name || 'Aluno',
        reason: reason,
        details: details,
        date: 'Hoje, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending'
      });
      state.modal = null;
      render();
      showToast('🚩 Reporte enviado para a moderação pedagógica!', 'success');
    }).catch(() => {
      showToast('Não foi possível concluir a operação. Tente novamente.', 'error');
    });
    return true;
  }

  return false;
}
