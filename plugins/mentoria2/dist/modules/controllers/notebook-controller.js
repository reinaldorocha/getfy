export function handleNotebookAction({ action, actionBtn, state, api, render, showToast, navigate, saveNote }) {
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
    return true;
  }

  if (action === 'open-notebook') {
    const note = (window.M2Data.notebooks || []).find(item => String(item.id) === String(actionBtn.dataset.noteId));
    if (!note) return true;
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
    return true;
  }

  if (action === 'toggle-note-preview') {
    state.notePreviewVisible = !state.notePreviewVisible;
    render();
    return true;
  }

  if (action === 'note-format') {
    const textarea = document.getElementById('m2-note-textarea');
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.slice(start, end) || 'texto';
      const formats = {
        bold: ['**', '**'],
        italic: ['*', '*'],
        highlight: ['==', '=='],
        heading: ['## ', ''],
        quote: ['> ', ''],
        legal: ['Art. ', ''],
        map: ['[mapa]\n- ', '\n[/mapa]']
      };
      const [before, after] = formats[actionBtn.dataset.format] || ['', ''];
      textarea.setRangeText(before + selected + after, start, end, 'end');
      state.noteContent = textarea.value;
      textarea.focus();
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return true;
  }

  if (action === 'save-note') {
    if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
    void saveNote();
    return true;
  }

  if (action === 'toggle-mentor-share') {
    if (!state.activeNotebookId) {
      showToast('Salve a anotação antes de compartilhar com o mentor.', 'warning');
      return true;
    }
    const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${state.tenantId || 1}`;
    api(`${base}/notebooks/${state.activeNotebookId}`, {
      method: 'PATCH',
      body: JSON.stringify({ shared_with_mentor: true })
    }).then(() => {
      state.noteSharedWithMentor = true;
      const note = (window.M2Data.notebooks || []).find(item => String(item.id) === String(state.activeNotebookId));
      if (note) note.shared_with_mentor = true;
      render();
      showToast(`Página compartilhada com ${window.M2Data.mentor?.name || 'Mentor'}.`, 'success');
    }).catch(() => showToast('Erro ao compartilhar anotação.', 'error'));
    return true;
  }

  if (action === 'word-exec') {
    const cmd = actionBtn.dataset.command;
    const val = actionBtn.dataset.value || null;
    if (cmd) {
      document.execCommand(cmd, false, val);
      const editor = document.getElementById('m2-note-editor-doc');
      if (editor) {
        editor.focus();
        state.noteContent = editor.innerHTML;
      }
    }
    return true;
  }

  if (action === 'word-highlight') {
    const color = actionBtn.dataset.color || '#fef08a';
    document.execCommand('hiliteColor', false, color);
    const editor = document.getElementById('m2-note-editor-doc');
    if (editor) {
      editor.focus();
      state.noteContent = editor.innerHTML;
    }
    return true;
  }

  if (action === 'word-insert-block') {
    const block = actionBtn.dataset.block;
    let html = '';
    if (block === 'artigo') {
      html = '<div class="m2-callout-legal"><strong>⚖️ Artigo de Lei:</strong> Texto do artigo, parágrafo ou inciso da legislação...</div><p><br></p>';
    } else if (block === 'sumula') {
      html = '<div class="m2-callout-sumula"><strong>🏛️ Súmula Vinculante / Jurisprudência:</strong> Enunciado da súmula ou entendimento pacificado do tribunal...</div><p><br></p>';
    } else if (block === 'pegadinha') {
      html = '<div class="m2-callout-warning"><strong>⚡ Atenção / Pegadinha da Banca:</strong> Ponto crítico frequentemente cobrado com pegadinhas...</div><p><br></p>';
    } else if (block === 'tabela') {
      html = '<table class="m2-word-table"><thead><tr><th>Conceito</th><th>Regra Geral</th><th>Exceção</th></tr></thead><tbody><tr><td>Item A</td><td>Regra</td><td>Exceção</td></tr><tr><td>Item B</td><td>Regra</td><td>Exceção</td></tr></tbody></table><p><br></p>';
    } else if (block === 'divider') {
      html = '<hr><p><br></p>';
    }
    if (html) {
      document.execCommand('insertHTML', false, html);
      const editor = document.getElementById('m2-note-editor-doc');
      if (editor) {
        editor.focus();
        state.noteContent = editor.innerHTML;
      }
    }
    return true;
  }

  if (action === 'print-note') {
    window.print();
    return true;
  }

  return false;
}

export function setupNotebookEditorEvents({ state, render, saveNote, setNoteSaveStatus }) {
  const queueAutosave = (delay) => {
    if (window.__m2NoteAutosaveTimer) clearTimeout(window.__m2NoteAutosaveTimer);
    window.__m2NoteAutosaveTimer = setTimeout(() => { void saveNote({ autosave: true }); }, delay);
  };

  document.addEventListener('change', (event) => {
    if (event.target.dataset.action !== 'word-format-block') return;
    const tag = event.target.value;
    if (!tag) return;
    document.execCommand('formatBlock', false, `<${tag}>`);
    const editor = document.getElementById('m2-note-editor-doc');
    if (editor) {
      editor.focus();
      state.noteContent = editor.innerHTML;
      setNoteSaveStatus('Alterações não salvas');
    }
  });

  document.addEventListener('input', (event) => {
    if (event.target.id === 'm2-note-editor-doc') {
      state.noteContent = event.target.innerHTML;
      const text = event.target.innerText || '';
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('m2-word-count-val')?.replaceChildren(`${words} palavras`);
      document.getElementById('m2-char-count-val')?.replaceChildren(`${text.length} caracteres`);
      setNoteSaveStatus('Alterações não salvas');
      queueAutosave(1000);
      return;
    }
    if (event.target.id === 'm2-notebook-search') {
      state.notebookSearch = event.target.value;
      render();
      return;
    }
    if (event.target.id === 'm2-note-textarea') {
      state.noteContent = event.target.value;
      setNoteSaveStatus('Alterações não salvas');
      queueAutosave(800);
    }
  });
}
