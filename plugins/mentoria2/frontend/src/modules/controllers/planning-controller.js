export function handlePlanningAction({
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
}) {
  if (action === 'save-contest-review-policy') {
    const contestId = actionBtn.dataset.id;
    const reviewIntervals = document.getElementById('m2-contest-review-intervals')?.value.trim();
    if (!/^\d+(\s*,\s*\d+)*$/.test(reviewIntervals || '')) {
      showToast('Informe dias positivos separados por virgula. Ex.: 1,7,30.', 'error');
      return true;
    }
    api(`/mentoria2/contests/${encodeURIComponent(contestId)}`, { method: 'PATCH', body: JSON.stringify({ review_intervals: reviewIntervals }) })
      .then(() => {
        const contest = (window.M2Data.contests || []).find(item => String(item.id) === String(contestId));
        if (contest) { contest.reviewIntervals = reviewIntervals; contest.review_intervals = reviewIntervals; }
        showToast('Politica de revisoes salva para este concurso.', 'success');
      })
      .catch(() => showToast('Nao foi possivel salvar a politica de revisoes.', 'error'));
    return true;
  }

  if (action === 'add-fixed-plan-row') {
    const rows = document.getElementById('m2-fixed-plan-rows');
    if (!rows) return true;
    rows.insertAdjacentHTML('beforeend', `<div class="m2-fixed-plan-row" data-fixed-plan-row>
      <label><span class="m2-sr-only">Dia</span><select class="m2-fixed-plan-day" aria-label="Dia da meta"><option value="dom">Domingo</option><option value="seg" selected>Segunda-feira</option><option value="ter">Terca-feira</option><option value="qua">Quarta-feira</option><option value="qui">Quinta-feira</option><option value="sex">Sexta-feira</option><option value="sab">Sabado</option></select></label>
      <label><span class="m2-sr-only">Assunto ou atividade</span><input type="text" class="m2-fixed-plan-label" placeholder="Ex.: Redacao ou Lei seca" maxlength="255" aria-label="Assunto ou atividade"></label>
      <label><span class="m2-sr-only">Minutos</span><input type="number" class="m2-fixed-plan-minutes" value="30" min="1" max="1440" step="1" inputmode="numeric" placeholder="30" aria-label="Minutos"></label>
      <label class="m2-fixed-plan-description-wrap"><span class="m2-sr-only">Descricao</span><input type="text" class="m2-fixed-plan-description" placeholder="Descricao opcional para orientar o aluno" maxlength="1000" aria-label="Descricao da meta"></label>
      <button type="button" class="m2-fixed-plan-remove" data-action="remove-fixed-plan-row" aria-label="Remover meta">${icon('trash-2', 15)}</button>
    </div>`);
    rows.lastElementChild?.querySelector('.m2-fixed-plan-label')?.focus();
    return true;
  }

  if (action === 'remove-fixed-plan-row') {
    const row = actionBtn.closest('[data-fixed-plan-row]');
    const rows = document.getElementById('m2-fixed-plan-rows');
    if (row && rows?.children.length > 1) row.remove();
    else showToast('Mantenha ao menos uma linha ou deixe o assunto em branco para nao criar meta.', 'info');
    return true;
  }

  if (action === 'save-contest-fixed-plan') {
    const contestId = actionBtn.dataset.id;
    const validDays = new Set(['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']);
    const fixedPlanItems = [];
    let invalid = false;
    document.querySelectorAll('#m2-fixed-plan-rows [data-fixed-plan-row]').forEach((row, index) => {
      const day = row.querySelector('.m2-fixed-plan-day')?.value?.trim().toLowerCase() || '';
      const label = row.querySelector('.m2-fixed-plan-label')?.value?.trim() || '';
      const duration = Number(row.querySelector('.m2-fixed-plan-minutes')?.value);
      const description = row.querySelector('.m2-fixed-plan-description')?.value?.trim() || '';
      if (!label) return;
      if (!validDays.has(day) || !Number.isInteger(duration) || duration < 1 || duration > 1440) {
        invalid = true;
        return;
      }
      fixedPlanItems.push({ key: `fixed-${index + 1}`, days: [day], label: label.slice(0, 255), description: description.slice(0, 1000), duration_minutes: duration });
    });
    if (invalid) {
      showToast('Preencha dia, assunto e minutos validos em cada meta.', 'error');
      return true;
    }
    api(`/mentoria2/contests/${encodeURIComponent(contestId)}`, { method: 'PATCH', body: JSON.stringify({ fixed_plan_items: fixedPlanItems }) })
      .then(() => {
        const contest = (window.M2Data.contests || []).find(item => String(item.id) === String(contestId));
        if (contest) { contest.fixedPlanItems = fixedPlanItems; contest.fixed_plan_items = fixedPlanItems; }
        showToast('Metas fixas salvas. Elas entrarao nos proximos cronogramas gerados.', 'success');
      })
      .catch(() => showToast('Nao foi possivel salvar as metas fixas.', 'error'));
    return true;
  }

  if (action === 'next-onboarding') {
    capturePlanDraft();
    const input = document.getElementById('m2-ob-preferred-name');
    if (input && input.value.trim()) state.onboardingName = input.value.trim();
    state.onboardingStep = Number(actionBtn.dataset.next) || 1;
    render();
    return true;
  }

  if (action === 'set-onboarding-preset-hours') {
    const hours = Number(actionBtn.dataset.hours) || 2;
    const draft = capturePlanDraft();
    ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'].forEach(day => { draft.hours[day] = hours; });
    draft.hours.dom = 0;
    render();
    showToast(`Disponibilidade ajustada para ${hours}h por dia!`, 'info');
    return true;
  }

  if (action === 'start-generating-plan') {
    capturePlanDraft();
    state.onboardingStep = 5;
    render();
    return true;
  }

  if (action === 'restart-onboarding') {
    state.planDraft = null;
    state.onboardingStep = 1;
    navigate('onboarding');
    return true;
  }

  if (action === 'set-schedule-gen-mode') {
    state.scheduleGenMode = actionBtn.dataset.mode || 'math';
    render();
    return true;
  }

  if (action === 'generate-study-plan') {
    const draft = capturePlanDraft();
    if (!draft.contestId) { showToast('Escolha um concurso antes de gerar o plano.', 'error'); return true; }
    const configuration = planConfiguration(draft);
    configuration.use_ai = state.scheduleGenMode === 'ai';
    const weeklyHours = Object.values(draft.hours).reduce((sum, value) => sum + (Number(value) || 0), 0);
    if (weeklyHours <= 0) { showToast('Informe pelo menos uma hora disponivel na semana.', 'error'); return true; }
    showToast('Calculando seu plano de estudos...', 'info');
    api(`${planningBase()}/preferences`, { method: 'PATCH', body: JSON.stringify({ tour_completed: true, availability: { hours: draft.hours, weekly_hours: weeklyHours }, settings: { study_plan: configuration } }) })
      .then(() => api(`${planningBase()}/schedules/generate`, { method: 'POST', body: JSON.stringify({ contest_id: draft.contestId, mode: draft.mode, configuration }) }))
      .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(draft.contestId)}`))
      .then(payload => {
        hydrateDataFromPayload(payload);
        state.contestId = draft.contestId;
        state.calendarCursor = calendarKey(new Date());
        state.calendarRangeKey = '';
        state.calendarItems = [];
        navigate('planning');
        return loadPlanningCalendar();
      })
      .then(() => showToast('Plano de estudos gerado com sucesso.', 'success'))
      .catch(() => showToast('Nao foi possivel gerar o cronograma.', 'error'));
    return true;
  }

  if (action === 'set-planning-view') {
    state.planningView = actionBtn.dataset.view;
    loadPlanningCalendar().catch(() => { showToast('Nao foi possivel carregar o calendario.', 'error'); render(); });
    return true;
  }

  if (action === 'calendar-prev' || action === 'calendar-next' || action === 'calendar-today') {
    const cursor = new Date(`${state.calendarCursor || calendarKey(new Date())}T12:00:00`);
    if (action === 'calendar-today') state.calendarCursor = calendarKey(new Date());
    else if (state.planningView === 'week') {
      cursor.setDate(cursor.getDate() + (action === 'calendar-next' ? 7 : -7));
      state.calendarCursor = calendarKey(cursor);
    } else {
      cursor.setDate(1);
      cursor.setMonth(cursor.getMonth() + (action === 'calendar-next' ? 1 : -1));
      state.calendarCursor = calendarKey(cursor);
    }
    loadPlanningCalendar().catch(() => { showToast('Nao foi possivel carregar o calendario.', 'error'); render(); });
    return true;
  }

  if (action === 'open-calendar-day') {
    state.calendarDay = actionBtn.dataset.date || calendarKey(new Date());
    state.modal = 'calendar-day';
    render();
    return true;
  }

  if (action === 'open-replan-modal') {
    state.replanFromDate = calendarKey(new Date());
    state.modal = 'replan-schedule';
    render();
    return true;
  }

  if (action === 'preview-adaptive-plan') {
    api(`${planningBase()}/schedules/adaptive-plan`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null }) })
      .then(result => { state.adaptiveProposal = result.proposal || null; render(); })
      .catch(() => showToast('Nao foi possivel analisar o plano neste momento.', 'error'));
    return true;
  }

  if (action === 'apply-adaptive-plan' || action === 'confirm-replan-schedule') {
    const input = document.getElementById('m2-replan-from-date');
    const fromDate = input?.value || calendarKey(new Date());
    const adaptive = action === 'apply-adaptive-plan';
    const path = adaptive ? 'schedules/adaptive-plan/apply' : 'schedules/reprogram';
    api(`${planningBase()}/${path}`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null, from_date: fromDate }) })
      .then(result => {
        state.modal = null;
        state.adaptiveProposal = null;
        if (!adaptive) state.replanned = true;
        return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`)
          .then(hydrateDataFromPayload)
          .then(() => loadPlanningCalendar())
          .then(() => result);
      })
      .then(result => showToast(adaptive
        ? `Plano adaptado: ${result.reprogrammed || 0} atividade(s) redistribuida(s).`
        : `${result.reprogrammed || 0} tarefa(s) foram replanejadas pela capacidade disponivel.`, 'success'))
      .catch(() => showToast(adaptive
        ? 'Nao foi possivel aplicar o plano adaptativo.'
        : 'Nao foi possivel replanejar as tarefas. Verifique a carga horaria disponivel.', 'error'));
    return true;
  }

  if (action === 'reprogram-schedule') {
    const fromDate = calendarKey(new Date());
    showToast('Recalculando cronograma a partir de hoje...', 'info');
    api(`${planningBase()}/schedules/reprogram`, { method: 'POST', body: JSON.stringify({ contest_id: state.contestId || null, from_date: fromDate }) })
      .then(result => {
        state.modal = null;
        state.replanned = true;
        return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`)
          .then(hydrateDataFromPayload)
          .then(() => loadPlanningCalendar())
          .then(() => result);
      })
      .then(result => showToast(`${result.reprogrammed || 0} tarefa(s) foram recalculadas a partir de hoje.`, 'success'))
      .catch(() => showToast('Nao foi possivel recalcular o cronograma.', 'error'));
    return true;
  }

  if (action === 'open-schedule-completion' || action === 'complete-schedule-item') {
    const itemId = actionBtn.dataset.itemId;
    const items = state.calendarRangeKey ? state.calendarItems : (window.M2Data.scheduleItems || []);
    const item = items.find(candidate => String(candidate.id) === String(itemId));
    if (!item) { showToast('Nao foi possivel localizar a atividade do cronograma.', 'error'); return true; }
    const sName = item.subject_name || (window.M2Data.subjects || []).find(subject => String(subject.id) === String(item.subject_id))?.name || 'Estudo dirigido';
    const tName = item.topic_name || (window.M2Data.topics || []).find(topic => String(topic.id) === String(item.topic_id))?.name || 'Conteúdo do edital';
    const subName = item.subtopic_name || null;
    let fullTopic = tName;
    if (subName && subName !== tName) {
      fullTopic = `${tName} › ${subName}`;
    } else if (item.label && item.label !== tName) {
      fullTopic = item.label;
    }

    state.scheduleCompletion = {
      itemId: item.id,
      subjectId: item.subject_id || null,
      topicId: item.topic_id || null,
      durationMinutes: Number(item.duration_minutes || 60),
      questionsTarget: Number(item.questions_target || 0),
      subjectName: sName,
      topicName: fullTopic,
    };
    state.modal = 'schedule-completion';
    render();
    return true;
  }

  if (action === 'submit-schedule-completion') {
    const completion = state.scheduleCompletion;
    if (!completion?.itemId) { state.modal = null; render(); return true; }
    const minutes = Math.max(1, Math.min(1440, Number(document.getElementById('m2-completion-minutes')?.value) || completion.durationMinutes));
    const solved = Math.max(0, Number(document.getElementById('m2-completion-solved')?.value) || 0);
    const correct = Math.min(solved, Math.max(0, Number(document.getElementById('m2-completion-correct')?.value) || 0));
    const notes = (document.getElementById('m2-completion-notes')?.value || '').trim();
    api(`${planningBase()}/schedule-items/${completion.itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'concluido', create_session: true, study_session: { seconds: minutes * 60, notes, questions_solved: solved, questions_correct: correct } }),
    }).then(result => {
      if (result.gamification) {
        window.M2Data.gamification = result.gamification;
        window.M2Data.student.xp = result.gamification.total_xp || 0;
      }
      return api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`);
    }).then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
      .then(() => { state.modal = null; state.scheduleCompletion = null; render(); showToast('Atividade concluida e estudo registrado.', 'success'); })
      .catch(() => showToast('Nao foi possivel registrar a atividade.', 'error'));
    return true;
  }

  if (action === 'reopen-schedule-item') {
    const itemId = actionBtn.dataset.itemId;
    api(`${planningBase()}/schedule-items/${itemId}`, { method: 'PATCH', body: JSON.stringify({ status: 'pendente', create_session: false }) })
      .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`))
      .then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
      .then(() => { state.modal = null; render(); showToast('Atividade reaberta.', 'success'); })
      .catch(() => showToast('Nao foi possivel atualizar a atividade.', 'error'));
    return true;
  }

  if (action === 'complete-calendar-review' || action === 'postpone-calendar-review') {
    const reviewId = actionBtn.dataset.reviewId;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const payload = action === 'complete-calendar-review' ? { completed: true } : { next_date: calendarKey(tomorrow) };
    api(`${planningBase()}/reviews/${reviewId}`, { method: 'PATCH', body: JSON.stringify(payload) })
      .then(() => api(`${planningBase()}/data?contest_id=${encodeURIComponent(state.contestId || '')}`))
      .then(hydrateDataFromPayload).then(() => loadPlanningCalendar())
      .then(() => { state.modal = null; render(); showToast(action === 'complete-calendar-review' ? 'Revisao concluida.' : 'Revisao adiada para amanha.', 'success'); })
      .catch(() => showToast('Nao foi possivel atualizar a revisao.', 'error'));
    return true;
  }

  if (action === 'start-schedule-item') {
    state.timerSubjectId = actionBtn.dataset.subjectId || null;
    state.timerVisible = true;
    state.timerMinimized = false;
    state.timerRunning = true;
    render();
    showToast('Cronometro iniciado para esta atividade.', 'success');
    return true;
  }

  return false;
}
