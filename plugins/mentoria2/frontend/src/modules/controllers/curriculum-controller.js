function findSyllabusItem(itemId, itemType) {
  const syllabus = window.M2Data.syllabus || [];
  const topic = syllabus.flatMap(subject => subject.topics || []).find(item => String(item.id) === String(itemId));
  if (itemType !== 'subtopico') return topic;
  return syllabus
    .flatMap(subject => subject.topics || [])
    .flatMap(topicItem => topicItem.subtopics || [])
    .find(item => String(item.id) === String(itemId));
}

function refreshSubjectCoverage() {
  (window.M2Data.syllabus || []).forEach(subject => {
    const total = (subject.topics || []).length;
    const completed = (subject.topics || []).filter(topic => topic.completed).length;
    subject.coveredPct = total > 0 ? Math.round((completed / total) * 100) : 0;
  });
}

function studentResourceBase(state) {
  const tenantId = state.tenantId || 1;
  return state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
}

export function handleCurriculumAction({ event, action, actionBtn, state, api, render, showToast, exportDiagrammedPdf, navigate }) {
  if (action === 'open-edital-analysis') {
    showToast('Abrindo raio-x verticalizado e matérias com maior peso...', 'info');
    setTimeout(() => {
      if (typeof navigate === 'function') navigate('syllabus');
    }, 400);
    return true;
  }
  if (action === 'toggle-accordion') {
    const subjectId = actionBtn.dataset.subjectId;
    if (!state.collapsedSubjects) state.collapsedSubjects = {};
    if (subjectId) {
      state.collapsedSubjects[subjectId] = !state.collapsedSubjects[subjectId];
      render();
    } else {
      const accordion = actionBtn.closest('.m2-subject-accordion');
      const body = accordion?.querySelector('.m2-subject-body') || accordion?.children[1];
      if (body) body.style.display = body.style.display === 'none' ? 'block' : 'none';
    }
    return true;
  }

  if (action === 'toggle-all-syllabus') {
    if (!state.collapsedSubjects) state.collapsedSubjects = {};
    const syllabus = window.M2Data.syllabus || [];
    const anyOpen = syllabus.some(subject => !state.collapsedSubjects[subject.id]);
    syllabus.forEach(subject => { state.collapsedSubjects[subject.id] = anyOpen; });
    render();
    return true;
  }

  if (action === 'print-syllabus') {
    state.modal = 'pdf-export-preview';
    state.pdfExportMode = state.pdfExportMode || 'with-progress';
    render();
    return true;
  }

  if (action === 'toggle-pdf-export-mode') {
    state.pdfExportMode = actionBtn.dataset.mode || 'with-progress';
    render();
    return true;
  }

  if (action === 'export-diagrammed-pdf') {
    exportDiagrammedPdf(state.pdfExportMode === 'blank');
    return true;
  }

  if (action === 'filter-syllabus-status') {
    state.syllabusFilter = actionBtn.dataset.filter || 'all';
    render();
    return true;
  }

  if (action === 'open-topic-note') {
    const itemId = actionBtn.dataset.id;
    const itemType = actionBtn.dataset.itemType === 'subtopico' ? 'subtopico' : 'topico';
    const item = findSyllabusItem(itemId, itemType);
    state.activeTopicNoteModal = {
      id: itemId,
      itemType,
      name: actionBtn.dataset.topicName || item?.name || 'Topico',
      subjectName: actionBtn.dataset.subjectName || 'Disciplina',
      note: item?.note || '',
    };
    render();
    return true;
  }

  if (action === 'close-topic-note-modal') {
    state.activeTopicNoteModal = null;
    render();
    return true;
  }

  if (action === 'save-topic-note') {
    const activeNote = state.activeTopicNoteModal;
    if (!activeNote) return true;
    const note = document.getElementById('m2-topic-note-textarea')?.value.trim() || '';
    const item = findSyllabusItem(activeNote.id, activeNote.itemType);
    if (item) item.note = note;
    const notes = JSON.stringify({ theory: Boolean(item?.theory), law: Boolean(item?.law), summary: Boolean(item?.summary), note });
    api(`${studentResourceBase(state)}/edict-progress/${activeNote.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ item_type: activeNote.itemType, studied: Boolean(item?.completed), notes }),
    }).then(() => {
      state.activeTopicNoteModal = null;
      render();
      showToast('Anotacoes salvas com sucesso!', 'success');
    }).catch(() => showToast('Erro ao salvar anotacoes.', 'error'));
    return true;
  }

  if (action === 'toggle-triad' || action === 'toggle-topic-study') {
    const itemId = actionBtn.dataset.id;
    const itemType = actionBtn.dataset.itemType === 'subtopico' ? 'subtopico' : 'topico';
    const item = findSyllabusItem(itemId, itemType);
    if (!item) {
      showToast('Nao foi possivel localizar o item do edital.', 'error');
      return true;
    }

    let studied;
    if (action === 'toggle-triad') {
      const triadType = actionBtn.dataset.triadType;
      if (!['theory', 'law', 'summary'].includes(triadType)) return true;
      item[triadType] = !item[triadType];
      item.completed = Boolean(item.theory && item.law && item.summary);
      studied = item.completed;
    } else {
      if (actionBtn.matches('input[type="checkbox"]')) event.preventDefault();
      studied = !item.completed;
      item.completed = studied;
      item.theory = studied;
      item.law = studied;
      item.summary = studied;
    }

    refreshSubjectCoverage();
    render();
    const notes = JSON.stringify({ theory: Boolean(item.theory), law: Boolean(item.law), summary: Boolean(item.summary), note: item.note || '' });
    api(`${studentResourceBase(state)}/edict-progress/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ item_type: itemType, studied, notes }),
    }).then(() => {
      if (action === 'toggle-triad') {
        const names = { theory: 'Teoria', law: 'Lei Seca', summary: 'Resumo' };
        const triadType = actionBtn.dataset.triadType;
        showToast(`${names[triadType]} ${item[triadType] ? 'marcada como concluida' : 'desmarcada'}.`, 'success');
      } else {
        const label = itemType === 'subtopico' ? 'Subtopico' : 'Topico';
        showToast(studied ? `${label} concluido (Triade completa)!` : `${label} desmarcado.`, 'success');
      }
    }).catch(() => showToast('Erro ao atualizar o progresso do edital.', 'error'));
    return true;
  }

  return false;
}
