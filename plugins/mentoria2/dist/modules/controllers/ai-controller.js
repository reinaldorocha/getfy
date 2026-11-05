import { sendTutorChat } from '../tutor-client.js?v=5e6599cddc14';

function scrollTutorMessages(elementId) {
  const box = document.getElementById(elementId);
  if (box) box.scrollTop = box.scrollHeight;
}

async function requestTutorReply(message, { state, api, render, floating = false }) {
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
  } catch {
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

export function askTutor(message, { state, api, render, floating = false } = {}) {
  const text = String(message || '').trim();
  if (!text) return;
  state.tutorMessages.push({ id: `user-${Date.now()}`, sender: 'user', text, time: 'Agora' });
  state.floatingAiTyping = floating;
  render();
  scrollTutorMessages(floating ? 'm2-floating-chat-messages' : 'm2-chat-messages');
  void requestTutorReply(text, { state, api, render, floating });
}

export function handleAiAction({ action, actionBtn, state, api, render, showToast, loadMentorResource }) {
  // Tutor IA
  if (action === 'send-tutor-message') {
    const input = document.getElementById('m2-tutor-input');
    if (input && input.value.trim()) {
      const userText = input.value.trim();
      input.value = '';
      askTutor(userText, { state, api, render, floating: false });
    }
    return true;
  }

  if (action === 'toggle-floating-ai-chat') {
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
    return true;
  }

  if (action === 'clear-floating-chat') {
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
    return true;
  }

  if (action === 'send-floating-ai-message' || action === 'submit-floating-ai-form') {
    const input = document.getElementById('m2-floating-ai-input');
    if (input && input.value.trim()) {
      const userText = input.value.trim();
      input.value = '';
      askTutor(userText, { state, api, render, floating: true });
    }
    return true;
  }

  if (action === 'send-floating-quick-prompt') {
    const prompt = actionBtn.dataset.prompt;
    if (prompt) {
      askTutor(prompt, { state, api, render, floating: true });
    }
    return true;
  }

  // Memória Cognitiva Águia IA
  if (action === 'sync-ai-memory') {
    showToast('Sincronizando registros neurais com o histórico de questões e simulados...', 'info');
    const tenantId = state.tenantId || 1;
    const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
    api(`${base}/ai-memory`).then(res => {
      if (!window.M2Data.aiMemory) window.M2Data.aiMemory = {};
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
      showToast('Memória da IA atualizada.', 'success');
    }).catch(() => {
      showToast('Erro ao sincronizar memória com o servidor.', 'error');
    });
    return true;
  }

  if (action === 'mark-memory-weakness-mastered') {
    const idx = parseInt(actionBtn.dataset.index, 10);
    const weakness = window.M2Data.aiMemory?.weaknesses?.[idx];
    if (weakness) {
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      const subjectName = weakness.topic || weakness.subject;

      api(`${base}/ai-memory/mastered`, {
        method: 'POST',
        body: JSON.stringify({ subject: subjectName })
      }).then(() => {
        window.M2Data.aiMemory.weaknesses.splice(idx, 1);
        if (!Array.isArray(window.M2Data.aiMemory.strengths)) window.M2Data.aiMemory.strengths = [];
        window.M2Data.aiMemory.strengths.unshift({
          topic: subjectName,
          mastery: '85%+',
          detail: `Superado após reforço direcionado: ${subjectName} migrado para domínio consolidado.`
        });
        render();
        showToast(`Ponto fraco "${subjectName}" superado! (+50 XP)`, 'success');
      }).catch(() => {
        showToast('Erro ao salvar superação do ponto fraco no servidor.', 'error');
      });
    }
    return true;
  }

  if (action === 'generate-ai-prescription') {
    if (window.M2Data?.has_ai_access === false) {
      showToast('Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.', 'warning');
      return true;
    }
    state.generatingPrescription = true;
    render();
    showToast('O Águia IA está analisando suas métricas e elaborando sua prescrição...', 'info');
    const tenantId = state.tenantId || 1;
    const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
    api(`${base}/ai-memory/generate-prescription`, {
      method: 'POST',
      body: JSON.stringify({})
    }).then(res => {
      state.generatingPrescription = false;
      if (res.ok) {
        state.aiPrescription = res.ai_prescription;
        if (window.M2Data?.student_memory) {
          window.M2Data.student_memory.cognitive_profile = res.cognitive_profile;
        }
        if (window.M2Data?.aiMemory) {
          window.M2Data.aiMemory.tutorActionPlan = res.ai_prescription?.cognitive_analysis || window.M2Data.aiMemory.tutorActionPlan;
        }
        render();
        showToast('Prescrição de Estudos Águia IA gerada com sucesso!', 'success');
      } else {
        render();
        showToast(res.message || 'Falha ao gerar prescrição.', 'error');
      }
    }).catch(() => {
      state.generatingPrescription = false;
      render();
      showToast('Erro ao gerar prescrição por IA.', 'error');
    });
    return true;
  }

  // Hub de Prompts e Importador JSON
  if (action === 'set-prompt-tab') {
    state.promptTab = actionBtn.dataset.tab;
    render();
    return true;
  }

  if (action === 'open-json-import-modal') {
    state.jsonImportMode = actionBtn.dataset.mode || 'questions';
    state.modal = 'json-import';
    render();
    return true;
  }

  if (action === 'set-json-import-mode') {
    state.jsonImportMode = actionBtn.dataset.mode;
    render();
    return true;
  }

  if (action === 'copy-import-prompt') {
    const mode = actionBtn.dataset.mode || state.jsonImportMode || state.promptTab || 'questions';
    const pText = window.M2Data.prompts && window.M2Data.prompts[mode];
    if (pText && navigator.clipboard) {
      navigator.clipboard.writeText(pText).then(() => {
        showToast('Prompt copiado com sucesso! Cole no ChatGPT, Claude, Gemini ou DeepSeek.', 'success');
      }).catch(() => {
        showToast('Prompt selecionado. Copie o texto exibido.', 'info');
      });
    } else {
      showToast('Prompt copiado com sucesso! Cole no ChatGPT, Claude ou Gemini.', 'success');
    }
    return true;
  }

  if (action === 'fill-json-example') {
    const mode = state.jsonImportMode || 'questions';
    const ex = window.M2Data.promptExamples && window.M2Data.promptExamples[mode];
    const textarea = document.getElementById('m2-json-import-textarea');
    if (textarea && ex) {
      textarea.value = ex;
      showToast('Exemplo JSON válido carregado! Pronto para importar.', 'info');
    }
    return true;
  }

  if (action === 'toggle-import-dest') {
    const dest = actionBtn.value;
    const newFields = document.getElementById('m2-import-new-contest-fields');
    const existingField = document.getElementById('m2-import-existing-contest-field');
    if (newFields && existingField) {
      newFields.style.display = dest === 'new' ? 'grid' : 'none';
      existingField.style.display = dest === 'existing' ? 'block' : 'none';
    }
    return true;
  }

  if (action === 'submit-json-import') {
    const textarea = document.getElementById('m2-json-import-textarea');
    let text = textarea ? textarea.value.trim() : '';
    if (!text) {
      showToast('Cole o código JSON retornado pela IA antes de importar.', 'warning');
      return true;
    }

    if (text.startsWith('```')) {
      text = text.replace(/^```[a-z]*\s*/i, '').replace(/\s*```$/, '').trim();
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      showToast('Erro: JSON inválido. Verifique se copiou apenas o bloco JSON puro sem textos externos.', 'error');
      return true;
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

    actionBtn.disabled = true;
    api('/mentoria2/external-import/execute', {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(res => {
      actionBtn.disabled = false;
      state.modal = null;
      render();
      const count = res.created || (Array.isArray(parsed) ? parsed.length : 1);
      showToast(`Importação concluída com sucesso: ${count} item(ns) criado(s)!`, 'success');
    }).catch(err => {
      actionBtn.disabled = false;
      showToast(err?.message || 'Erro ao importar conteúdo JSON.', 'error');
    });
    return true;
  }

  // Extração de Edital por IA (PDF / Texto)
  if (action === 'extract-edital-ai') {
    const contestInput = document.getElementById('m2-edital-ai-contest-name');
    const boardInput = document.getElementById('m2-edital-ai-board');
    const roleInput = document.getElementById('m2-edital-ai-role');
    const textarea = document.getElementById('m2-edital-ai-raw-text');
    const text = textarea ? textarea.value.trim() : (state.editalExtractedText || '');
    const pdfFile = state.editalPdfFile;

    if (!pdfFile && text.length < 20) {
      showToast('Envie o arquivo PDF do edital ou cole o conteúdo programático.', 'warning');
      return true;
    }

    state.extractingEdital = true;
    render();
    showToast('O Member IA está processando e estruturando o edital...', 'info');

    const contestName = contestInput ? contestInput.value.trim() : (state.editalAiContestName || '');
    const board = boardInput ? boardInput.value.trim() : (state.editalAiBoard || '');
    const role = roleInput ? roleInput.value.trim() : (state.editalAiRole || '');

    let requestPromise;
    if (pdfFile) {
      const formData = new FormData();
      formData.append('pdf_file', pdfFile);
      if (contestName) formData.append('contest_name', contestName);
      if (board) formData.append('board', board);
      if (role) formData.append('role', role);
      if (text) formData.append('raw_text', text);

      requestPromise = fetch('/mentoria2/external-import/ai-extract', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
          'Accept': 'application/json'
        },
        body: formData
      }).then(res => res.json());
    } else {
      requestPromise = api('/mentoria2/external-import/ai-extract', {
        method: 'POST',
        body: JSON.stringify({
          raw_text: text,
          contest_name: contestName,
          board,
          role
        })
      });
    }

    requestPromise.then(res => {
      state.extractingEdital = false;
      if (res.ok && res.data) {
        state.extractedEditalJson = res.data;
        render();
        showToast('Edital verticalizado estruturado com sucesso pela IA!', 'success');
      } else {
        render();
        showToast(res.message || 'Falha ao estruturar edital.', 'error');
      }
    }).catch(err => {
      state.extractingEdital = false;
      render();
      showToast(err?.message || 'Erro ao extrair com IA.', 'error');
    });
    return true;
  }

  if (action === 'trigger-edital-pdf-select') {
    const input = document.getElementById('m2-edital-pdf-input');
    if (input) input.click();
    return true;
  }

  if (action === 'remove-edital-pdf') {
    state.editalPdfFile = null;
    state.editalPdfFileName = null;
    state.editalPdfFileSize = null;
    state.editalExtractedText = null;
    state.editalExtractedLength = null;
    render();
    return true;
  }

  if (action === 'toggle-edital-manual-text') {
    state.showEditalManualText = !state.showEditalManualText;
    render();
    return true;
  }

  if (action === 'execute-extracted-edital-import') {
    if (!state.extractedEditalJson) return true;
    showToast('Salvando e importando matérias para a mentoria...', 'info');
    api('/mentoria2/external-import/execute', {
      method: 'POST',
      body: JSON.stringify({
        type: 'edital',
        json: state.extractedEditalJson
      })
    }).then(() => {
      state.extractedEditalJson = null;
      showToast('Edital verticalizado importado com sucesso na mentoria!', 'success');
      render();
    }).catch(err => {
      showToast('Erro ao importar edital: ' + (err?.message || ''), 'error');
    });
    return true;
  }

  if (action === 'set-schedule-gen-mode') {
    const mode = actionBtn.dataset.mode || 'math';
    if (mode === 'ai' && window.M2Data?.has_ai_access === false) {
      showToast('Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.', 'warning');
      state.scheduleGenMode = 'math';
    } else {
      state.scheduleGenMode = mode;
    }
    render();
    return true;
  }

  // Custos e Logs de IA
  if (action === 'refresh-ai-costs') {
    api('/mentoria2/ai-usage/stats').then(res => {
      if (res.ok && res.stats) {
        window.M2Data.ai_stats = res.stats;
        render();
        showToast('Estatísticas de IA atualizadas!', 'success');
      }
    }).catch(() => showToast('Erro ao atualizar estatísticas.', 'error'));
    return true;
  }

  if (action === 'filter-ai-logs') {
    state.aiLogsFilter = actionBtn.dataset.filter || 'all';
    render();
    return true;
  }

  // OCR de Redação
  if (action === 'transcribe-essay-photo') {
    if (window.M2Data?.has_ai_access === false) {
      showToast('Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.', 'warning');
      return true;
    }
    if (!state.redacaoFotoBase64) {
      showToast('Por favor, selecione ou tire uma foto da folha manuscrita primeiro.', 'warning');
      return true;
    }
    state.redacaoTranscribing = true;
    render();
    showToast('Transcrevendo caligrafia manuscrita com IA (OCR)...', 'info');
    const tenantId = state.tenantId || 1;
    const base = state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
    api(`${base}/essays/ocr-transcribe`, {
      method: 'POST',
      body: JSON.stringify({ foto_base64: state.redacaoFotoBase64 })
    }).then(res => {
      state.redacaoTranscribing = false;
      if (res.ok && res.transcribed_text) {
        state.redacaoTranscribedText = res.transcribed_text;
        state.essayDraftText = res.transcribed_text;
        const textarea = document.getElementById('m2-essay-editor');
        if (textarea) textarea.value = res.transcribed_text;
        render();
        showToast('Folha de redação transcrita com sucesso pela IA!', 'success');
      } else {
        render();
        showToast(res.message || 'Falha na transcrição OCR.', 'error');
      }
    }).catch(err => {
      state.redacaoTranscribing = false;
      render();
      showToast(err?.message || 'Erro na transcrição OCR.', 'error');
    });
    return true;
  }

  return false;
}

