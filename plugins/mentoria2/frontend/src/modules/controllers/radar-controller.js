/** Actions for the audit-ready public notice Radar. */
export function handleRadarAction({ event, action, actionBtn, state, api, render, showToast, studentBase, loadRadarEditais, loadMentorRadarEditais }) {
  if (action === 'filter-radar-sphere') {
    state.radarFilters = { ...(state.radarFilters || {}), sphere: actionBtn.dataset.sphere || 'all' };
    loadRadarEditais().catch(() => showToast('Não foi possível aplicar o filtro.', 'error'));
    return true;
  }

  if (action === 'filter-radar-career') {
    state.radarFilters = { ...(state.radarFilters || {}), careerTrack: actionBtn.dataset.careerTrack || 'all' };
    loadRadarEditais().catch(() => showToast('Não foi possível aplicar o filtro.', 'error'));
    return true;
  }

  if (action === 'reload-radar-editais') {
    loadRadarEditais().catch(() => showToast('Não foi possível atualizar o Radar.', 'error'));
    return true;
  }

  if (action === 'toggle-follow-contest') {
    const contest = (window.M2Data.radarEditais || []).find(item => String(item.id) === String(actionBtn.dataset.contestId));
    if (!contest) return true;
    const nextFollow = !contest.is_following;
    api(`${studentBase()}/radar/contests/${encodeURIComponent(contest.id)}/follow`, {
      method: nextFollow ? 'PUT' : 'DELETE',
      body: nextFollow ? JSON.stringify({ notifications_enabled: true }) : undefined
    }).then(() => {
      contest.is_following = nextFollow;
      render();
      showToast(nextFollow ? `Concurso "${contest.title}" adicionado ao seu Radar.` : `Concurso "${contest.title}" removido do seu Radar.`);
    }).catch(() => showToast('Erro ao atualizar o concurso seguido.', 'error'));
    return true;
  }

  if (action === 'open-radar-source-modal') {
    state.modal = 'radar-source-form';
    render();
    return true;
  }

  if (action === 'close-radar-source-modal') {
    // The overlay is clickable. Ignore clicks inside the modal card.
    if (actionBtn !== event.target && actionBtn.tagName !== 'BUTTON') return true;
    state.modal = null;
    render();
    return true;
  }

  if (action === 'save-radar-source') {
    const form = actionBtn.closest('form[data-form="radar-source"]');
    if (!form || !form.reportValidity()) return true;
    const fields = new FormData(form);
    const territories = String(fields.get('territories') || '').split(',').map(value => value.trim()).filter(Boolean);
    actionBtn.disabled = true;
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
      .catch(error => {
        actionBtn.disabled = false;
        showToast(error?.message || 'Não foi possível salvar a fonte.', 'error');
      });
    return true;
  }

  if (action === 'sync-radar-sources') {
    api('/mentoria2/radar/sync', { method: 'POST', body: JSON.stringify({}) })
      .then(result => loadMentorRadarEditais().then(() => showToast(`Sincronização concluída: ${result.result?.created || 0} publicação(ões) nova(s).`, 'success')))
      .catch(() => showToast('Não foi possível sincronizar as fontes.', 'error'));
    return true;
  }

  if (action === 'review-radar-contest') {
    const contestId = actionBtn.dataset.contestId;
    const decision = actionBtn.dataset.decision;
    api(`/mentoria2/radar/contests/${encodeURIComponent(contestId)}/review`, { method: 'PATCH', body: JSON.stringify({ decision }) })
      .then(() => loadMentorRadarEditais().then(() => showToast(decision === 'published' ? 'Oportunidade publicada no Radar dos alunos.' : 'Oportunidade removida da fila.', 'success')))
      .catch(error => showToast(error?.message || 'Não foi possível registrar a decisão.', 'error'));
    return true;
  }

  return false;
}
