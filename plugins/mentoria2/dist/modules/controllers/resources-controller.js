export function handleResourcesAction({ action, actionBtn, state, render, showToast }) {
  if (action === 'download-material') {
    const id = actionBtn.dataset.id;
    const url = actionBtn.dataset.url;
    const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${state.tenantId || 1}`;
    const downloadUrl = url || (id ? `${base}/materials/${id}/download` : null);
    if (!downloadUrl) { showToast('Material complementar indisponivel.', 'error'); return true; }
    const link = document.createElement('a');
    link.href = downloadUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.style.display = 'none';
    document.body.appendChild(link); link.click(); link.remove();
    return true;
  }
  if (action === 'open-embedded-course') {
    const url = actionBtn.dataset.url;
    if (url) { state.embeddedCourseUrl = url; state.embeddedCourseTitle = actionBtn.dataset.title || 'Curso Getfy'; state.embeddedCourseId = actionBtn.dataset.id || null; state.screen = 'courses'; render(); }
    return true;
  }
  if (action === 'close-embedded-course') {
    state.embeddedCourseUrl = null; state.embeddedCourseTitle = ''; state.embeddedCourseId = null; state.embeddedCourseFullscreen = false; render(); return true;
  }
  if (action === 'open-course-new-tab') { if (actionBtn.dataset.url) window.open(actionBtn.dataset.url, '_blank', 'noopener,noreferrer'); return true; }
  if (action === 'reload-embedded-course') { const frame = document.getElementById('m2-course-embedded-iframe'); if (frame) frame.src = frame.src; return true; }
  if (action === 'toggle-course-fullscreen') { state.embeddedCourseFullscreen = !state.embeddedCourseFullscreen; render(); return true; }
  if (action === 'open-getfy-lesson') { window.location.href = actionBtn.dataset.url || '/meus-produtos'; return true; }
  if (action === 'calculate-cebraspe') {
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
      return true;
    }

    state.cebraspeTotal = total;
    state.cebraspeCorrect = correct;
    state.cebraspeWrong = wrong;
    state.cebraspePenalty = penalty;
    render();
    showToast('Cálculo de nota líquida Cebraspe atualizado com sucesso!', 'success');
    return true;
  }
  return false;
}
