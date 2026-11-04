const getBase = state => state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${state.tenantId || 1}`;
const isAiConfigured = state => (window.M2Data?.ai_configured !== false) && (state.redacaoAiConfigured !== false);
const hasAiAccess = () => window.M2Data?.has_ai_access !== false;

export function handleEssayAction({ action, actionBtn, state, api, render, showToast }) {
  if (action === 'set-essay-doc-type') {
    state.redacaoDocType = actionBtn.dataset.docType;
    render();
    return true;
  }

  if (action === 'set-essay-input-mode') {
    state.redacaoInputMode = actionBtn.dataset.mode;
    render();
    return true;
  }

  if (action === 'generate-essay-themes') {
    if (!hasAiAccess()) {
      showToast('Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.', 'warning');
      return true;
    }
    if (!isAiConfigured(state)) {
      showToast('A IA não está configurada neste ambiente. Solicite ao mentor a ativação do Member IA.', 'warning');
      return true;
    }

    state.redacaoGeneratingThemes = true;
    render();

    api(`${getBase(state)}/essays/generate-theme`, {
      method: 'POST',
      body: JSON.stringify({
        tipo: state.redacaoDocType || 'dissertacao',
        contest_id: state.contestId
      })
    }).then(res => {
      state.redacaoGeneratingThemes = false;
      if (res.configured === false) {
        state.redacaoAiConfigured = false;
        render();
        showToast(res.message || 'Member IA não configurado pelo mentor.', 'warning');
        return;
      }
      state.redacaoSuggestedThemes = res.temas || [];
      if (res.temas && res.temas[0]) {
        state.redacaoTheme = res.temas[0].title || res.temas[0];
        const inp = document.getElementById('m2-essay-theme-input');
        if (inp) inp.value = state.redacaoTheme;
      }
      render();
      showToast('3 propostas temáticas geradas com IA!', 'success');
    }).catch(err => {
      state.redacaoGeneratingThemes = false;
      render();
      showToast(err?.message || 'Não foi possível gerar temas via IA. Verifique as configurações.', 'error');
    });
    return true;
  }

  if (action === 'select-essay-theme') {
    const chosen = actionBtn.dataset.themeTitle;
    if (chosen) {
      state.redacaoTheme = chosen;
      const inp = document.getElementById('m2-essay-theme-input');
      if (inp) inp.value = chosen;
      render();
      showToast('Tema selecionado para sua redação!', 'info');
    }
    return true;
  }

  if (action === 'save-essay-draft') {
    const textarea = document.getElementById('m2-essay-editor');
    if (textarea) state.essayDraftText = textarea.value;
    const inp = document.getElementById('m2-essay-theme-input');
    if (inp) state.redacaoTheme = inp.value;
    showToast('Rascunho da redação salvo com sucesso!', 'info');
    return true;
  }

  if (action === 'submit-essay-correction') {
    if (!hasAiAccess()) {
      showToast('Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.', 'warning');
      return true;
    }
    if (!isAiConfigured(state)) {
      showToast('A correção por IA está indisponível porque o Member IA não foi configurado pelo mentor.', 'warning');
      return true;
    }

    const textarea = document.getElementById('m2-essay-editor');
    if (textarea) state.essayDraftText = textarea.value;
    const inp = document.getElementById('m2-essay-theme-input');
    if (inp && inp.value.trim()) state.redacaoTheme = inp.value.trim();

    const text = (state.essayDraftText || '').trim();
    const isFoto = state.redacaoInputMode === 'foto';

    if (!isFoto && text.length < 30) {
      showToast('Sua redação está muito curta. Escreva pelo menos 30 caracteres para avaliação.', 'warning');
      return true;
    }
    if (isFoto && !state.redacaoFotoPreview) {
      showToast('Por favor, selecione ou tire uma foto da folha de redação.', 'warning');
      return true;
    }

    state.redacaoAnalyzing = true;
    render();
    showToast('Corrigindo redação com IA...', 'info');

    api(`${getBase(state)}/essays/ai-correction`, {
      method: 'POST',
      body: JSON.stringify({
        tema: state.redacaoTheme || 'Tema dissertativo da banca',
        tipo: state.redacaoDocType || 'dissertacao',
        texto: isFoto ? undefined : text,
        foto_base64: isFoto ? state.redacaoFotoBase64 : undefined,
        submission_id: state.activeEssayId
      })
    }).then(res => {
      state.redacaoAnalyzing = false;
      state.redacaoResult = res;
      render();
      showToast(`Redação avaliada pela IA com nota ${res.nota_final}/10!`, 'success');
    }).catch(() => {
      state.redacaoAnalyzing = false;
      render();
      showToast('Erro ao realizar a correção por IA.', 'error');
    });
    return true;
  }

  if (action === 'toggle-essay-corrigida') {
    state.redacaoShowCorrigida = !state.redacaoShowCorrigida;
    render();
    return true;
  }

  if (action === 'reset-essay-view') {
    state.redacaoResult = null;
    state.essayDraftText = '';
    state.redacaoFotoPreview = null;
    state.redacaoFotoBase64 = null;
    state.redacaoShowCorrigida = false;
    render();
    return true;
  }

  if (action === 'remove-essay-photo') {
    state.redacaoFotoPreview = null;
    state.redacaoFotoBase64 = null;
    render();
    return true;
  }

  if (action === 'save-essay-notebook') {
    showToast('Dossiê da redação registrado em Minhas Anotações!', 'success');
    return true;
  }

  return false;
}
