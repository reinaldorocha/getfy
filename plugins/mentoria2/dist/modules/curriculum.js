import { state, icon, escapeHtml, plainTextWithBreaks, getSubjectTheme, showToast } from './core.js?v=ab398a02b1f4';

export function viewSyllabus() {
    const activeContest = (window.M2Data.contests || []).find(c => String(c.id) === String(state.contestId)) || window.M2Data.contests?.[0];
    const contestName = activeContest ? activeContest.name : 'Concurso';
    const syllabusList = window.M2Data.syllabus || [];

    // Estatísticas Globais para o Dashboard de Raio-X & Cobertura
    const allTopics = syllabusList.flatMap(s => s.topics || []);
    const totalTopics = allTopics.length;
    const completedTopics = allTopics.filter(t => t.completed).length;
    const pendingTopics = totalTopics - completedTopics;
    const totalPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    const theoryCount = allTopics.filter(t => t.theory).length;
    const theoryPct = totalTopics > 0 ? Math.round((theoryCount / totalTopics) * 100) : 0;

    const lawCount = allTopics.filter(t => t.law).length;
    const lawPct = totalTopics > 0 ? Math.round((lawCount / totalTopics) * 100) : 0;

    const summaryCount = allTopics.filter(t => t.summary).length;
    const summaryPct = totalTopics > 0 ? Math.round((summaryCount / totalTopics) * 100) : 0;

    const currentFilter = state.syllabusFilter || 'all';
    const areAllCollapsed = syllabusList.length > 0 && syllabusList.every(s => Boolean(state.collapsedSubjects?.[s.id]));

    // Modal de Anotações do Tópico
    const noteModalHtml = state.activeTopicNoteModal ? `
      <div class="m2-modal-overlay" data-action="close-topic-note-modal" style="display:flex; align-items:center; justify-content:center; z-index:99999;">
        <div class="m2-modal-card" style="max-width:560px; width:92%; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); box-shadow:0 20px 40px rgba(0,0,0,0.4); overflow:hidden;" onclick="event.stopPropagation()">
          <div style="padding:16px 20px; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--accent-teal); letter-spacing:0.5px;">
                ${escapeHtml(state.activeTopicNoteModal.subjectName || 'Disciplina')}
              </span>
              <h3 style="font-size:16px; font-weight:700; margin:4px 0 0; color:var(--text-main);">
                ${escapeHtml(state.activeTopicNoteModal.name || 'Tópico')}
              </h3>
            </div>
            <button type="button" class="m2-btn m2-btn-sm m2-btn-ghost" data-action="close-topic-note-modal" style="font-size:18px; line-height:1; padding:4px 8px;">✕</button>
          </div>
          <div style="padding:18px 20px;">
            <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:8px;">
              ${icon('notebook-pen', 14)} Suas Anotações Pessoais, Artigos-Chave e Mnemônicos:
            </label>
            <textarea id="m2-topic-note-textarea" rows="6" style="width:100%; border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:12px; font-size:13px; font-family:inherit; background:var(--bg-surface); color:var(--text-main); resize:vertical; line-height:1.5;" placeholder="Escreva aqui seus resumos, artigos de lei mais cobrados, mnemônicos ou pegadinhas da banca deste tópico...">${escapeHtml(state.activeTopicNoteModal.note || '')}</textarea>
            <div style="font-size:11px; color:var(--text-muted); margin-top:8px;">
              💡 Suas anotações são salvas com segurança no banco de dados e podem ser revisadas a qualquer momento ou exportadas no modo de impressão.
            </div>
          </div>
          <div style="padding:12px 20px; background:var(--bg-surface); border-top:1px solid var(--border-color); display:flex; justify-content:flex-end; gap:10px;">
            <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="close-topic-note-modal">Cancelar</button>
            <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="save-topic-note">
              ${icon('check', 14)} Salvar Anotações
            </button>
          </div>
        </div>
      </div>
    ` : '';

    return `
      <div class="m2-content m2-syllabus-view">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Mapeamento de Conteúdo</span>
            <h1 class="m2-page-title">Edital Verticalizado — ${escapeHtml(contestName)}</h1>
            <p class="m2-page-subtitle">Acompanhe a cobertura teórica, leitura de lei seca e resumos de cada disciplina oficial.</p>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="print-syllabus" title="Imprimir edital completo ou salvar em PDF">
              ${icon('printer', 14)} Imprimir / PDF
            </button>
            ${syllabusList.length > 0 ? `
              <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="toggle-all-syllabus">
                ${icon(areAllCollapsed ? 'chevron-down' : 'chevron-up', 14)} ${areAllCollapsed ? 'Expandir Todas' : 'Recolher Todas'}
              </button>
            ` : ''}
          </div>
        </div>

        ${syllabusList.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('list-tree', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum edital verticalizado cadastrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              As disciplinas e tópicos programáticos do concurso selecionado ainda não foram estruturados.
            </p>
          </div>
        ` : `
          <!-- Dashboard Superior de Raio-X & Cobertura -->
          <div class="m2-syllabus-hero-dashboard">
            <div class="m2-syllabus-stats-grid">
              <!-- Card 1: Cobertura Total -->
              <div class="m2-syllabus-stat-card is-primary">
                <div class="m2-stat-header">
                  <span class="m2-stat-icon" style="background:rgba(20, 184, 166, 0.15); color:var(--accent-teal);">
                    ${icon('target', 20)}
                  </span>
                  <span class="m2-stat-badge m2-pill-teal">${totalPct}% Batido</span>
                </div>
                <div class="m2-stat-value">${completedTopics} <span class="m2-stat-total">/ ${totalTopics}</span></div>
                <div class="m2-stat-label">Tópicos do Concurso Concluídos</div>
                <div class="m2-progress-track" style="height:6px; margin-top:8px;">
                  <div class="m2-progress-fill" style="width:${totalPct}%; background:var(--accent-teal);"></div>
                </div>
              </div>

              <!-- Card 2: Teoria (PDF / Vídeo) -->
              <div class="m2-syllabus-stat-card">
                <div class="m2-stat-header">
                  <span class="m2-stat-icon" style="background:rgba(6, 182, 212, 0.15); color:#06b6d4;">
                    ${icon('book-open', 20)}
                  </span>
                  <span class="m2-stat-badge">${theoryPct}%</span>
                </div>
                <div class="m2-stat-value">${theoryCount} <span class="m2-stat-total">/ ${totalTopics}</span></div>
                <div class="m2-stat-label">Teoria (PDF / Videoaula)</div>
                <div class="m2-progress-track" style="height:6px; margin-top:8px;">
                  <div class="m2-progress-fill" style="width:${theoryPct}%; background:#06b6d4;"></div>
                </div>
              </div>

              <!-- Card 3: Lei Seca & Leitura -->
              <div class="m2-syllabus-stat-card">
                <div class="m2-stat-header">
                  <span class="m2-stat-icon" style="background:rgba(16, 185, 129, 0.15); color:#10b981;">
                    ${icon('scale', 20)}
                  </span>
                  <span class="m2-stat-badge">${lawPct}%</span>
                </div>
                <div class="m2-stat-value">${lawCount} <span class="m2-stat-total">/ ${totalTopics}</span></div>
                <div class="m2-stat-label">Lei Seca & Artigos</div>
                <div class="m2-progress-track" style="height:6px; margin-top:8px;">
                  <div class="m2-progress-fill" style="width:${lawPct}%; background:#10b981;"></div>
                </div>
              </div>

              <!-- Card 4: Resumos & Flashcards -->
              <div class="m2-syllabus-stat-card">
                <div class="m2-stat-header">
                  <span class="m2-stat-icon" style="background:rgba(139, 92, 246, 0.15); color:#8b5cf6;">
                    ${icon('layers', 20)}
                  </span>
                  <span class="m2-stat-badge">${summaryPct}%</span>
                </div>
                <div class="m2-stat-value">${summaryCount} <span class="m2-stat-total">/ ${totalTopics}</span></div>
                <div class="m2-stat-label">Resumos & Flashcards</div>
                <div class="m2-progress-track" style="height:6px; margin-top:8px;">
                  <div class="m2-progress-fill" style="width:${summaryPct}%; background:#8b5cf6;"></div>
                </div>
              </div>
            </div>

            <!-- Filtros Rápidos por Pílulas -->
            <div class="m2-syllabus-filter-bar">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; margin-right:4px;">
                  ${icon('filter', 13)} Filtros Rápidos:
                </span>
                <button type="button" class="m2-filter-pill ${currentFilter === 'all' ? 'is-active' : ''}" data-action="filter-syllabus-status" data-filter="all">
                  Todos <span class="m2-filter-count">${totalTopics}</span>
                </button>
                <button type="button" class="m2-filter-pill ${currentFilter === 'pending' ? 'is-active' : ''}" data-action="filter-syllabus-status" data-filter="pending">
                  Pendentes <span class="m2-filter-count">${pendingTopics}</span>
                </button>
                <button type="button" class="m2-filter-pill ${currentFilter === 'studied' ? 'is-active' : ''}" data-action="filter-syllabus-status" data-filter="studied">
                  Estudados <span class="m2-filter-count">${completedTopics}</span>
                </button>
              </div>
              <div style="font-size:12px; color:var(--text-muted);">
                Exibindo <strong>${currentFilter === 'all' ? totalTopics : currentFilter === 'pending' ? pendingTopics : completedTopics}</strong> de ${totalTopics} tópicos
              </div>
            </div>
          </div>

          <!-- Lista de Disciplinas Temáticas -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${syllabusList.map(sub => {
              const isCollapsed = Boolean(state.collapsedSubjects?.[sub.id]);
              const theme = sub.theme || getSubjectTheme(sub.name);
              const subTopics = sub.topics || [];
              const displayTopics = subTopics.filter(t => {
                if (currentFilter === 'pending') return !t.completed;
                if (currentFilter === 'studied') return t.completed;
                return true;
              });

              const subDoneCount = subTopics.filter(t => t.completed).length;

              return `
              <div class="m2-subject-accordion ${isCollapsed ? 'is-collapsed' : ''}" style="border-left: 4px solid ${theme.color};">
                <div class="m2-subject-header" data-action="toggle-accordion" data-subject-id="${sub.id}" role="button" tabindex="0">
                  <div style="display:flex; align-items:center; gap:12px;">
                    <span style="display:inline-flex; transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; color:var(--text-muted);">
                      ${icon('chevron-down', 18)}
                    </span>
                    <div class="m2-subject-icon-box" style="background:${theme.bgColor}; color:${theme.color}; border: 1px solid ${theme.borderColor}; width:38px; height:38px; border-radius:10px; display:grid; place-items:center; flex-shrink:0;">
                      ${icon(theme.icon, 18)}
                    </div>
                    <div>
                      <strong style="font-size:15px; color:var(--text-main);">${escapeHtml(sub.name)}</strong>
                      <span style="display:block; font-size:11px; color:var(--text-muted); margin-top:2px;">
                        Peso: ${sub.weight} · Relevância: ${sub.relevance} · Questões: <strong>${sub.totalQuestions || 0}</strong> · Batidos: <strong>${subDoneCount}/${subTopics.length}</strong>
                      </span>
                    </div>
                  </div>
                  <div style="display:flex; align-items:center; gap:16px;">
                    <div style="width:120px;" class="m2-subject-progress-container">
                      <div class="m2-progress-track" style="height:7px;">
                        <div class="m2-progress-fill" style="width:${sub.coveredPct || 0}%; background:${theme.color};"></div>
                      </div>
                    </div>
                    <span style="font-weight:700; font-size:13px; color:${theme.color}; min-width:40px; text-align:right;">${sub.coveredPct || 0}%</span>
                  </div>
                </div>

                <div class="m2-subject-body" style="${isCollapsed ? 'display:none;' : ''}">
                  ${displayTopics.length === 0 ? `
                    <div style="padding:18px 24px; font-size:12px; color:var(--text-muted); text-align:center; font-style:italic;">
                      Nenhum tópico ${currentFilter === 'pending' ? 'pendente' : 'estudado'} nesta disciplina.
                    </div>
                  ` : displayTopics.map(top => `
                    <div class="m2-topic-row-container">
                      <div class="m2-topic-row">
                        <!-- Tópico Status & Título -->
                        <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:240px;">
                          ${top.completed ? `
                            <button type="button" class="m2-status-check is-done" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}" title="Tópico 100% batido! Clique para desmarcar.">
                              ${icon('check-circle', 18)}
                            </button>
                          ` : (top.theory || top.law || top.summary) ? `
                            <button type="button" class="m2-status-check is-partial" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}" title="Tríade em andamento. Clique para concluir tudo.">
                              ${icon('clock', 18)}
                            </button>
                          ` : `
                            <button type="button" class="m2-status-check is-pending" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}" title="Tópico pendente. Clique para concluir tudo.">
                              ${icon('circle', 18)}
                            </button>
                          `}
                          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <strong class="m2-topic-title ${top.completed ? 'is-completed' : ''}" style="cursor:pointer;" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}">${escapeHtml(top.name)}</strong>
                            ${(top.subtopics || []).length > 0 ? `
                              <span class="m2-pill m2-pill-gray" style="font-size:10px;">${top.subtopics.length} Subtópicos</span>
                            ` : ''}
                          </div>
                        </div>

                        <!-- Tríade de Estudo + Ações -->
                        <div class="m2-topic-actions">
                          <!-- Tríade de Estudo (Multicheck) -->
                          <div class="m2-triad-group">
                            <button type="button" class="m2-triad-btn ${top.theory ? 'is-active is-theory' : ''}" data-action="toggle-triad" data-triad-type="theory" data-id="${top.id}" data-item-type="topico" title="Teoria: PDF ou Videoaula assistida">
                              ${icon(top.theory ? 'check-circle' : 'circle', 13)} Teoria
                            </button>
                            <button type="button" class="m2-triad-btn ${top.law ? 'is-active is-law' : ''}" data-action="toggle-triad" data-triad-type="law" data-id="${top.id}" data-item-type="topico" title="Lei Seca: Artigos de lei lidos e grifados">
                              ${icon(top.law ? 'check-circle' : 'circle', 13)} Lei Seca
                            </button>
                            <button type="button" class="m2-triad-btn ${top.summary ? 'is-active is-summary' : ''}" data-action="toggle-triad" data-triad-type="summary" data-id="${top.id}" data-item-type="topico" title="Resumo / Flashcards: Material de fixação montado">
                              ${icon(top.summary ? 'check-circle' : 'circle', 13)} Resumo
                            </button>
                          </div>

                          <!-- Mini Bloco de Anotações -->
                          <button type="button" class="m2-btn m2-btn-sm m2-btn-icon-note ${top.note ? 'has-note' : ''}" data-action="open-topic-note" data-id="${top.id}" data-item-type="topico" data-topic-name="${escapeHtml(top.name)}" data-subject-name="${escapeHtml(sub.name)}" title="${top.note ? 'Ver / Editar Anotações' : 'Adicionar Anotações'}">
                            ${icon('notebook-pen', 14)}
                            ${top.note ? '<span class="m2-note-dot"></span>' : ''}
                          </button>

                          <!-- Treinar Questões -->
                          <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="start-study-subject" data-subject="${sub.id}" data-topic="${top.id}" title="Resolver questões deste tópico">
                            Treinar
                          </button>
                        </div>
                      </div>

                      <!-- Pré-visualização de Anotações do Tópico -->
                      ${top.note ? `
                        <div class="m2-topic-note-bar" data-action="open-topic-note" data-id="${top.id}" data-item-type="topico" data-topic-name="${escapeHtml(top.name)}" data-subject-name="${escapeHtml(sub.name)}" title="Clique para editar as anotações deste tópico">
                          <span class="m2-note-bar-icon">${icon('notebook-pen', 13)}</span>
                          <span class="m2-note-bar-text"><strong>Anotação:</strong> ${escapeHtml(top.note)}</span>
                        </div>
                      ` : ''}

                      <!-- Subtópicos Padronizados no mesmo padrão dos tópicos -->
                      ${(top.subtopics || []).map(subt => `
                        <div class="m2-subtopic-row ${subt.completed ? 'is-done' : ''}">
                          <div class="m2-subtopic-left">
                            <span class="m2-subtopic-branch" title="Subtópico de ${escapeHtml(top.name)}">${icon('corner-down-right', 15)}</span>
                            ${subt.completed ? `
                              <button type="button" class="m2-status-check is-done" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}" title="Subtópico 100% batido! Clique para desmarcar.">
                                ${icon('check-circle', 17)}
                              </button>
                            ` : (subt.theory || subt.law || subt.summary) ? `
                              <button type="button" class="m2-status-check is-partial" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}" title="Tríade em andamento. Clique para concluir tudo.">
                                ${icon('clock', 17)}
                              </button>
                            ` : `
                              <button type="button" class="m2-status-check is-pending" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}" title="Subtópico pendente. Clique para concluir tudo.">
                                ${icon('circle', 17)}
                              </button>
                            `}
                            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; flex:1; min-width:0;">
                              <span class="m2-subtopic-title ${subt.completed ? 'is-completed' : ''}" style="cursor:pointer;" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}">
                                ${escapeHtml(subt.name)}
                              </span>
                              ${subt.questionsCount ? `
                                <span class="m2-subtopic-qcount">${subt.questionsCount} questões</span>
                              ` : ''}
                            </div>
                          </div>

                          <!-- Tríade de Estudo do Subtópico + Ações -->
                          <div class="m2-topic-actions">
                            <div class="m2-triad-group m2-triad-group-sm">
                              <button type="button" class="m2-triad-btn ${subt.theory ? 'is-active is-theory' : ''}" data-action="toggle-triad" data-triad-type="theory" data-id="${subt.id}" data-item-type="subtopico" title="Teoria: PDF ou Videoaula assistida">
                                ${icon(subt.theory ? 'check-circle' : 'circle', 12)} Teoria
                              </button>
                              <button type="button" class="m2-triad-btn ${subt.law ? 'is-active is-law' : ''}" data-action="toggle-triad" data-triad-type="law" data-id="${subt.id}" data-item-type="subtopico" title="Lei Seca: Artigos de lei lidos e grifados">
                                ${icon(subt.law ? 'check-circle' : 'circle', 12)} Lei Seca
                              </button>
                              <button type="button" class="m2-triad-btn ${subt.summary ? 'is-active is-summary' : ''}" data-action="toggle-triad" data-triad-type="summary" data-id="${subt.id}" data-item-type="subtopico" title="Resumo / Flashcards montado">
                                ${icon(subt.summary ? 'check-circle' : 'circle', 12)} Resumo
                              </button>
                            </div>

                            <!-- Mini Bloco de Anotações do Subtópico -->
                            <button type="button" class="m2-btn m2-btn-sm m2-btn-icon-note ${subt.note ? 'has-note' : ''}" data-action="open-topic-note" data-id="${subt.id}" data-item-type="subtopico" data-topic-name="${escapeHtml(subt.name)}" data-subject-name="${escapeHtml(sub.name)}" title="${subt.note ? 'Ver / Editar Anotações' : 'Adicionar Anotações'}">
                              ${icon('notebook-pen', 13)}
                              ${subt.note ? '<span class="m2-note-dot"></span>' : ''}
                            </button>

                            <!-- Treinar Questões -->
                            <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="start-study-subject" data-subject="${sub.id}" data-topic="${top.id}" title="Resolver questões deste subtópico">Treinar</button>
                          </div>
                        </div>
                        ${subt.note ? `
                          <div class="m2-topic-note-bar is-subtopic" data-action="open-topic-note" data-id="${subt.id}" data-item-type="subtopico" data-topic-name="${escapeHtml(subt.name)}" data-subject-name="${escapeHtml(sub.name)}" title="Clique para editar as anotações deste subtópico">
                            <span class="m2-note-bar-icon">${icon('notebook-pen', 12)}</span>
                            <span class="m2-note-bar-text"><strong>Anotação:</strong> ${escapeHtml(subt.note)}</span>
                          </div>
                        ` : ''}
                      `).join('')}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;}).join('')}
          </div>
        `}
        ${noteModalHtml}
        ${state.modal === 'pdf-export-preview' ? `
          <div class="m2-modal-overlay" data-action="close-modal-backdrop" style="display:flex; align-items:center; justify-content:center; z-index:99999; padding:20px;">
            <div class="m2-modal-card m2-pdf-modal-container" style="max-width:920px; width:100%; max-height:92vh; display:flex; flex-direction:column; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); box-shadow:0 24px 60px rgba(0,0,0,0.6); overflow:hidden;" onclick="event.stopPropagation()">
              
              <!-- Cabeçalho do Modal -->
              <div style="padding:14px 20px; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); flex-wrap:wrap; gap:12px;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <span style="display:grid; place-items:center; width:34px; height:34px; border-radius:8px; background:rgba(215, 25, 42, 0.15); color:#D7192A;">
                    ${icon('printer', 18)}
                  </span>
                  <div>
                    <h3 style="font-size:15px; font-weight:700; margin:0; color:var(--text-main);">
                      Layout Diagramado de PDF — Edital Verticalizado
                    </h3>
                    <p style="font-size:11.5px; color:var(--text-muted); margin:0;">
                      Modelo A4 diagramado com cabeçalho, distribuição de questões e caixas de checagem.
                    </p>
                  </div>
                </div>

                <!-- Controles do Modal -->
                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                  <!-- Seletor de Modo: Preenchido vs Em Branco -->
                  <div class="m2-pdf-mode-pill-group" style="display:inline-flex; background:var(--bg-app); border:1px solid var(--border-color); border-radius:6px; padding:2px;">
                    <button type="button" class="m2-pdf-mode-pill-btn ${state.pdfExportMode !== 'blank' ? 'is-active' : ''}" data-action="toggle-pdf-export-mode" data-mode="with-progress" style="padding:4px 10px; font-size:11px; font-weight:600; border:none; border-radius:4px; cursor:pointer; background:${state.pdfExportMode !== 'blank' ? 'var(--primary-color, #0f766e)' : 'transparent'}; color:${state.pdfExportMode !== 'blank' ? '#ffffff' : 'var(--text-muted)'};">
                      ${icon('check-circle', 12)} Com Meu Progresso
                    </button>
                    <button type="button" class="m2-pdf-mode-pill-btn ${state.pdfExportMode === 'blank' ? 'is-active' : ''}" data-action="toggle-pdf-export-mode" data-mode="blank" style="padding:4px 10px; font-size:11px; font-weight:600; border:none; border-radius:4px; cursor:pointer; background:${state.pdfExportMode === 'blank' ? 'var(--primary-color, #0f766e)' : 'transparent'}; color:${state.pdfExportMode === 'blank' ? '#ffffff' : 'var(--text-muted)'};">
                      ${icon('circle', 12)} Em Branco (Para Imprimir)
                    </button>
                  </div>

                  <!-- Botão Imprimir / Salvar PDF -->
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="export-diagrammed-pdf" style="font-weight:700;">
                    ${icon('printer', 14)} Imprimir / Salvar PDF
                  </button>

                  <button type="button" class="m2-btn m2-btn-sm m2-btn-ghost" data-action="close-modal" style="font-size:16px; padding:4px 8px;">✕</button>
                </div>
              </div>

              <!-- Corpo do Modal: Visualizador da Folha A4 -->
              <div class="m2-pdf-preview-viewport" style="flex:1; overflow-y:auto; background:#475569; padding:24px 16px;">
                <div class="m2-pdf-preview-sheet" style="background:#ffffff; color:#0f172a; max-width:800px; margin:0 auto; padding:32px 36px; border-radius:3px; box-shadow:0 8px 30px rgba(0,0,0,0.35); font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                  ${buildDiagrammedPdfDocumentHtml({
                    contest: activeContest,
                    contestName,
                    syllabusList,
                    isBlank: state.pdfExportMode === 'blank',
                    branding: window.M2Data.mentorship?.platform_branding || { brand_name: 'Mentoria 2.0' }
                  })}
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

export   function viewCalculadora() {
    const total = state.cebraspeTotal || 120;
    const correct = state.cebraspeCorrect || 78;
    const wrong = state.cebraspeWrong || 22;
    const penaltyRate = state.cebraspePenalty || 1.0;
    const blank = Math.max(0, total - correct - wrong);

    // Cálculo da nota líquida Cebraspe oficial
    const netScore = +(correct - (wrong * penaltyRate)).toFixed(1);
    const netPct = +((netScore / total) * 100).toFixed(1);
    const cutScore = (window.M2Data.cebraspeCalc && window.M2Data.cebraspeCalc.historicalCutScore) || 72.0;
    const margin = +(netScore - cutScore).toFixed(1);

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Simulador Estratégico de Banca</span>
            <h1 class="m2-page-title">Calculadora de Nota Líquida Cebraspe</h1>
            <p class="m2-page-subtitle">Simule a pontuação líquida oficial no formato Certo/Errado (onde uma errada anula uma certa), teste cenários de risco e compare com a nota de corte histórica.</p>
          </div>
        </div>

        <!-- Resultado Principal em Destaque -->
        <div class="m2-calc-score-hero" style="margin-bottom:18px;">
          <span style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--accent-teal);">Pontuação Líquida Estimada</span>
          <div style="font-size:52px; font-weight:900; color:var(--text-main); margin:4px 0; font-variant-numeric:tabular-nums; line-height:1;">
            ${netScore} <span style="font-size:24px; font-weight:600; color:var(--text-muted);">/ ${total}</span>
          </div>
          <div style="display:flex; justify-content:center; align-items:center; gap:12px; flex-wrap:wrap; margin-top:8px;">
            <span class="m2-pill m2-pill-teal" style="font-size:13px;">${netPct}% de Aproveitamento Líquido</span>
            <span class="m2-pill ${margin >= 0 ? 'm2-pill-green' : 'm2-pill-rose'}" style="font-size:13px;">
              ${margin >= 0 ? `+${margin} pts acima da nota de corte (${cutScore})` : `${margin} pts abaixo da nota de corte (${cutScore})`}
            </span>
          </div>
        </div>

        <div class="m2-grid-split">
          <!-- Formulário Interativo de Parâmetros -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('calculator', 18)} Parâmetros da Prova</span>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px;">
              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Total de Itens da Prova:</label>
                <input type="number" id="m2-ceb-total" class="m2-calc-input" value="${total}" min="20" max="200" data-action="change-cebraspe-inputs">
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--accent-green); display:block; margin-bottom:4px;">Itens Certos (Acertos):</label>
                  <input type="number" id="m2-ceb-correct" class="m2-calc-input" value="${correct}" min="0" max="${total}" style="color:var(--accent-green);" data-action="change-cebraspe-inputs">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--accent-rose); display:block; margin-bottom:4px;">Itens Errados (Erros):</label>
                  <input type="number" id="m2-ceb-wrong" class="m2-calc-input" value="${wrong}" min="0" max="${total}" style="color:var(--accent-rose);" data-action="change-cebraspe-inputs">
                </div>
              </div>

              <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; color:var(--text-muted);">Itens em Branco (Não Marcados):</span>
                <strong style="font-size:16px; color:var(--text-main); font-variant-numeric:tabular-nums;">${blank} itens (${((blank/total)*100).toFixed(0)}%)</strong>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Regra de Penalidade da Banca:</label>
                <select id="m2-ceb-penalty" style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:600;" data-action="change-cebraspe-inputs">
                  <option value="1.0" ${penaltyRate === 1.0 ? 'selected' : ''}>1 Errada anula 1 Certa (-1.0 ponto · Padrão Cebraspe Clássico)</option>
                  <option value="0.5" ${penaltyRate === 0.5 ? 'selected' : ''}>1 Errada anula 0,5 Certa (-0.5 ponto · Padrão Quadrix/Suave)</option>
                </select>
              </div>

              <button type="button" class="m2-btn m2-btn-primary" data-action="calculate-cebraspe" style="margin-top:6px;">
                ${icon('calculator', 16)} Recalcular Cenário
              </button>
            </form>
          </div>

          <!-- Análise Estratégica & Teoria dos Jogos (Chutar vs Deixar em Branco) -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('target', 18, 'text-teal')} Análise Estratégica de Chute</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:12px;">
              <div style="background:var(--bg-card); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <strong style="font-size:13px; color:var(--text-main); display:block; margin-bottom:4px;">🎯 Simulação: Se você tivesse chutado os ${blank} itens em branco</strong>
                <p style="font-size:12px; color:var(--text-muted); line-height:1.5;">
                  Com taxa estatística aleatória de 50% de acerto (50% Certo / 50% Errado):
                  <br>• ${Math.round(blank/2)} acertos (+${Math.round(blank/2)} pts)
                  <br>• ${Math.round(blank/2)} erros (-${Math.round(blank/2)} pts)
                  <br><strong style="color:var(--accent-amber);">Resultado matemático: Ganho líquido nulo (0,0 pts) e risco aumentado de desclassificação.</strong>
                </p>
              </div>

              <div style="background:var(--accent-teal-soft); border:1px solid var(--accent-teal); padding:14px; border-radius:var(--radius-md); font-size:12px; color:var(--text-main); line-height:1.6;">
                <strong style="color:var(--accent-teal); display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                  ${icon('sparkles', 16)} Recomendação Tática do Mentor:
                </strong>
                "Para bancas estilo Cebraspe, só vale a pena assinalar itens em dúvida quando você conseguir descartar com certeza pelo menos um aspecto do item. Deixar entre 15 e 25 itens em branco é uma estratégia consagrada de aprovados para proteger a pontuação líquida."
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

// Item 14: Radar de Editais & Diários Oficiais — somente dados publicados com fonte.
export function viewRadarEditais() {
  const items = window.M2Data.radarEditais || [];
  const filters = state.radarFilters || { sphere: 'all', careerTrack: 'all' };
  const tracks = window.M2Data.radarFilters?.tracks || {};
  const loading = Boolean(state.radarLoading);
  const formatDate = (value) => value ? new Date(value).toLocaleDateString('pt-BR') : 'Não informado';
  const formatMoney = (value) => value === null || value === undefined ? '-' : `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  const externalLink = (value) => /^https?:\/\//i.test(String(value || '')) ? String(value) : '';

  return `
    <div class="m2-content">
      <div class="m2-page-header">
        <div class="m2-page-title-group">
          <span class="m2-eyebrow">Monitoramento auditável de concursos</span>
          <h1 class="m2-page-title">Radar de Carreiras Policiais</h1>
          <p class="m2-page-subtitle">Movimentações verificadas de concursos policiais, com fonte, data de publicação e link para o documento de origem.</p>
        </div>
        <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="reload-radar-editais" ${loading ? 'disabled' : ''}>${icon('refresh-cw', 14)} Atualizar</button>
      </div>

      <section class="m2-card" style="padding:16px; margin-bottom:16px;">
        <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
          <span style="font-size:12px; font-weight:700; color:var(--text-muted);">Carreira:</span>
          <button type="button" class="m2-btn ${filters.careerTrack === 'all' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-career" data-career-track="all">Todas</button>
          ${Object.entries(tracks).map(([code, track]) => `<button type="button" class="m2-btn ${filters.careerTrack === code ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-career" data-career-track="${escapeHtml(code)}">${escapeHtml(track.label)}</button>`).join('')}
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-top:10px;">
          <span style="font-size:12px; font-weight:700; color:var(--text-muted);">Esfera:</span>
          ${[['all', 'Todas'], ['federal', 'Federal'], ['estadual', 'Estadual'], ['municipal', 'Municipal']].map(([value, label]) => `<button type="button" class="m2-btn ${filters.sphere === value ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-sphere" data-sphere="${value}">${label}</button>`).join('')}
        </div>
      </section>

      ${loading ? `<div class="m2-card" style="padding:36px; text-align:center; color:var(--text-muted);">${icon('refresh-cw', 20)} Consultando oportunidades publicadas…</div>` : ''}
      ${!loading && items.length === 0 ? `
        <div class="m2-card" style="text-align:center; padding:48px 16px;">
          <div style="width:56px; height:56px; border-radius:50%; background:var(--bg-app); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-teal);">${icon('radar', 28)}</div>
          <h3 style="font-size:18px; font-weight:700; color:var(--text-main);">Nenhuma oportunidade publicada para este filtro</h3>
          <p style="font-size:13px; color:var(--text-muted); max-width:520px; margin:8px auto 0;">O Radar só mostra itens revisados, com referência de origem. Quando uma fonte for sincronizada e validada pelo mentor, ela aparecerá aqui.</p>
        </div>
      ` : ''}
      ${!loading && items.length ? `<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
        ${items.map(item => {
          const sourceUrl = externalLink(item.edital_url || item.gazette_url);
          const sourceLabel = item.source_label || (item.edital_url ? 'Edital oficial' : 'Publicação de origem');
          return `<article class="m2-radar-item-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
              <div>
                <span class="m2-pill m2-pill-teal">${escapeHtml(item.status || 'Previsto')}</span>
                <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:8px 0 4px;">${escapeHtml(item.title || 'Concurso policial')}</h3>
                <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(item.role || item.organization || '')}${item.state ? ` · ${escapeHtml(item.state)}` : ''}</span>
              </div>
              <button type="button" class="m2-btn-icon" data-action="toggle-follow-contest" data-contest-id="${escapeHtml(item.id)}" title="${item.is_following ? 'Deixar de seguir' : 'Seguir concurso'}">${icon('star', 16, item.is_following ? 'text-amber' : '')}</button>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-app); padding:10px 12px; border-radius:var(--radius-md); font-size:12px; margin:14px 0;">
              <div><span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Carreira</span><strong>${escapeHtml(tracks[item.career_track]?.label || item.career_track || 'A classificar')}</strong></div>
              <div><span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Publicação</span><strong>${escapeHtml(formatDate(item.published_at || item.last_source_at))}</strong></div>
              <div><span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Banca</span><strong>${escapeHtml(item.board || 'A definir')}</strong></div>
              <div><span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Remuneração</span><strong style="color:var(--accent-green);">${escapeHtml(formatMoney(item.salary))}</strong></div>
            </div>
            ${item.summary ? `<p style="font-size:12px; line-height:1.55; color:var(--text-muted); margin:0 0 14px;">${escapeHtml(item.summary)}</p>` : ''}
            <div style="border-left:3px solid var(--accent-teal); background:var(--bg-app); padding:10px 12px; border-radius:var(--radius-sm); font-size:11px; color:var(--text-muted);">Fonte: <strong style="color:var(--text-main);">${escapeHtml(sourceLabel)}</strong></div>
            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:14px;">
              ${sourceUrl ? `<a class="m2-btn m2-btn-secondary m2-btn-sm" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">${icon('external-link', 14)} Ver fonte</a>` : ''}
              <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="toggle-follow-contest" data-contest-id="${escapeHtml(item.id)}">${icon(item.is_following ? 'check' : 'plus', 14)} ${item.is_following ? 'Seguindo' : 'Seguir'}</button>
            </div>
          </article>`;
        }).join('')}
      </div>` : ''}
    </div>`;
}


// ==========================================
// EXPORTAÇÃO & DIAGRAMAÇÃO DE EDITAL EM PDF
// ==========================================

export function buildDiagrammedPdfDocumentHtml({ contest, contestName, syllabusList, isBlank, branding }) {
  const allTopics = (syllabusList || []).flatMap(s => s.topics || []);
  const allSubtopics = allTopics.flatMap(t => t.subtopics || []);
  const totalTopics = allTopics.length;
  const completedTopics = allTopics.filter(t => t.completed).length;
  const totalPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return `
    <div class="m2-pdf-document">
      <!-- Capa / Cabeçalho Informativo -->
      <div class="m2-pdf-page-header">
        <div class="m2-pdf-brand-bar">
          <div class="m2-pdf-brand-title">${escapeHtml(branding?.brand_name || 'MENTORIA 2.0')}</div>
          <div class="m2-pdf-badge">EDITAL VERTICALIZADO OFICIAL</div>
        </div>
        <h1 class="m2-pdf-main-title">${escapeHtml(contestName)}</h1>
        <p class="m2-pdf-subtitle">Guia Oficial de Mapeamento, Ciclos de Estudos e Controle de Revisões</p>
      </div>

      <!-- Quadro de Informações do Concurso -->
      <div class="m2-pdf-section">
        <div class="m2-pdf-section-title">INFORMAÇÕES DO CONCURSO</div>
        <table class="m2-pdf-info-table">
          <tbody>
            <tr>
              <th>Órgão / Instituição</th>
              <td>${escapeHtml(contest?.institution || contest?.name || 'Polícia Militar')}</td>
              <th>Banca Organizadora</th>
              <td>${escapeHtml(contest?.exam_board || 'FCC / Cebraspe / Concurso')}</td>
            </tr>
            <tr>
              <th>Cargo Pretendido</th>
              <td>${escapeHtml(contest?.role || 'Soldado PM / Praça PM')}</td>
              <th>Escolaridade</th>
              <td>${escapeHtml(contest?.education || 'Ensino Superior / Médio')}</td>
            </tr>
            <tr>
              <th>Total de Tópicos</th>
              <td>${totalTopics} tópicos (+ ${allSubtopics.length} subtópicos)</td>
              <th>Progresso Atual</th>
              <td><strong>${isBlank ? 'Versão em Branco para Preenchimento' : `${completedTopics}/${totalTopics} batidos (${totalPct}%)`}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Quadro de Distribuição da Prova Objetiva -->
      <div class="m2-pdf-section">
        <div class="m2-pdf-section-title">DISTRIBUIÇÃO DA PROVA OBJETIVA & DISCIPLINAS</div>
        <table class="m2-pdf-distrib-table">
          <thead>
            <tr>
              <th style="text-align:left;">DISCIPLINA</th>
              <th style="width:110px; text-align:center;">TÓPICOS</th>
              <th style="width:130px; text-align:center;">SUBTÓPICOS</th>
              <th style="width:130px; text-align:center;">COBERTURA</th>
            </tr>
          </thead>
          <tbody>
            ${(syllabusList || []).map((sub, idx) => {
              const sTopics = sub.topics || [];
              const sSubs = sTopics.flatMap(t => t.subtopics || []);
              const sDone = sTopics.filter(t => t.completed).length;
              const sPct = sTopics.length > 0 ? Math.round((sDone / sTopics.length) * 100) : 0;
              return `
                <tr>
                  <td style="text-align:left;"><strong>${idx + 1}. ${escapeHtml(sub.name)}</strong></td>
                  <td style="text-align:center;">${sTopics.length}</td>
                  <td style="text-align:center;">${sSubs.length}</td>
                  <td style="text-align:center;">${isBlank ? '—' : `${sPct}%`}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Conteúdo Programático Verticalizado -->
      <div class="m2-pdf-section">
        <div class="m2-pdf-section-title" style="margin-top:20px;">CONTEÚDO PROGRAMÁTICO VERTICALIZADO</div>
        ${(syllabusList || []).map((sub, sIdx) => {
          const theme = getSubjectTheme(sub.name);
          return `
            <div class="m2-pdf-subject-block">
              <div class="m2-pdf-subject-header" style="border-left: 5px solid ${theme.color || '#2563eb'};">
                <span class="m2-pdf-subject-num">${sIdx + 1}</span>
                <span class="m2-pdf-subject-name">${escapeHtml(sub.name.toUpperCase())}</span>
              </div>

              <table class="m2-pdf-content-table">
                <thead>
                  <tr>
                    <th style="text-align:left;">CONTEÚDO PROGRAMÁTICO</th>
                    <th class="m2-pdf-col-check">TEORIA</th>
                    <th class="m2-pdf-col-check">LEI SECA</th>
                    <th class="m2-pdf-col-check">REVISÃO</th>
                  </tr>
                </thead>
                <tbody>
                  ${(sub.topics || []).map(top => {
                    const isTheoryDone = !isBlank && Boolean(top.theory);
                    const isLawDone = !isBlank && Boolean(top.law);
                    const isSummaryDone = !isBlank && Boolean(top.summary);
                    return `
                      <tr class="m2-pdf-topic-row">
                        <td class="m2-pdf-topic-cell" style="text-align:left;">
                          <strong>${escapeHtml(top.name)}</strong>
                          ${(!isBlank && top.note) ? `<div class="m2-pdf-inline-note">📝 ${escapeHtml(top.note)}</div>` : ''}
                        </td>
                        <td class="m2-pdf-check-cell">${isTheoryDone ? '☑' : '☐'}</td>
                        <td class="m2-pdf-check-cell">${isLawDone ? '☑' : '☐'}</td>
                        <td class="m2-pdf-check-cell">${isSummaryDone ? '☑' : '☐'}</td>
                      </tr>
                      ${(top.subtopics || []).map(subt => {
                        const isSubtTheoryDone = !isBlank && Boolean(subt.theory);
                        const isSubtLawDone = !isBlank && Boolean(subt.law);
                        const isSubtSummaryDone = !isBlank && Boolean(subt.summary);
                        return `
                          <tr class="m2-pdf-subtopic-row">
                            <td class="m2-pdf-subtopic-cell" style="text-align:left;">
                              <span class="m2-pdf-sub-bullet">↳</span> ${escapeHtml(subt.name)}
                              ${(!isBlank && subt.note) ? `<div class="m2-pdf-inline-note">📝 ${escapeHtml(subt.note)}</div>` : ''}
                            </td>
                            <td class="m2-pdf-check-cell">${isSubtTheoryDone ? '☑' : '☐'}</td>
                            <td class="m2-pdf-check-cell">${isSubtLawDone ? '☑' : '☐'}</td>
                            <td class="m2-pdf-check-cell">${isSubtSummaryDone ? '☑' : '☐'}</td>
                          </tr>
                        `;
                      }).join('')}
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Rodapé -->
      <div class="m2-pdf-footer-bar">
        <span>${escapeHtml(branding?.brand_name || 'Mentoria 2.0')} • Edital Verticalizado Estratégico</span>
        <span>Gerado em ${new Date().toLocaleDateString('pt-BR')} • Bons Estudos!</span>
      </div>
    </div>
  `;
}

export function exportDiagrammedPdf(isBlank = false) {
  const activeContest = (window.M2Data.contests || []).find(c => String(c.id) === String(state.contestId)) || window.M2Data.contests?.[0];
  const contestName = activeContest ? activeContest.name : 'Concurso';
  const syllabusList = window.M2Data.syllabus || [];
  const branding = window.M2Data.mentorship?.platform_branding || { brand_name: 'Mentoria 2.0' };

  const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Edital Verticalizado — ${escapeHtml(contestName)}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 14mm 14mm 14mm;
    }
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .m2-pdf-subject-block { page-break-inside: avoid; }
      tr { page-break-inside: avoid; }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      font-size: 10pt;
      line-height: 1.35;
    }
    .m2-pdf-document {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    .m2-pdf-page-header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .m2-pdf-brand-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    .m2-pdf-brand-title {
      font-size: 11pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #0f172a;
      text-transform: uppercase;
    }
    .m2-pdf-badge {
      font-size: 8pt;
      font-weight: 700;
      padding: 2px 7px;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      color: #334155;
    }
    .m2-pdf-main-title {
      font-size: 15pt;
      font-weight: 800;
      color: #0f172a;
      margin: 4px 0 2px 0;
    }
    .m2-pdf-subtitle {
      font-size: 9pt;
      color: #64748b;
      margin: 0;
    }
    .m2-pdf-section-title {
      font-size: 10pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #0f172a;
      background: #f1f5f9;
      padding: 5px 8px;
      border-left: 4px solid #0f172a;
      margin-bottom: 8px;
      margin-top: 14px;
    }
    .m2-pdf-info-table, .m2-pdf-distrib-table, .m2-pdf-content-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
    }
    .m2-pdf-info-table th, .m2-pdf-info-table td,
    .m2-pdf-distrib-table th, .m2-pdf-distrib-table td,
    .m2-pdf-content-table th, .m2-pdf-content-table td {
      border: 1px solid #cbd5e1;
      padding: 5px 8px;
      font-size: 9pt;
    }
    .m2-pdf-info-table th {
      background: #f8fafc;
      font-weight: 700;
      width: 22%;
      color: #334155;
      text-align: left;
    }
    .m2-pdf-distrib-table th, .m2-pdf-content-table th {
      background: #f1f5f9;
      font-weight: 700;
      color: #1e293b;
      font-size: 8.5pt;
      text-align: center;
    }
    .m2-pdf-subject-block {
      margin-top: 14px;
      margin-bottom: 14px;
    }
    .m2-pdf-subject-header {
      padding: 6px 10px;
      font-weight: 800;
      font-size: 9.5pt;
      letter-spacing: 0.4px;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
      background: #f8fafc;
    }
    .m2-pdf-subject-num {
      background: #0f172a;
      color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 8pt;
      font-weight: 700;
    }
    .m2-pdf-col-check {
      width: 65px;
      text-align: center !important;
    }
    .m2-pdf-check-cell {
      text-align: center;
      font-size: 13pt;
      line-height: 1;
      color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Symbol", "Apple Color Emoji", sans-serif;
    }
    .m2-pdf-subtopic-row td {
      background: #fafbfc;
    }
    .m2-pdf-subtopic-cell {
      padding-left: 24px !important;
      font-size: 8.5pt !important;
      color: #334155;
    }
    .m2-pdf-sub-bullet {
      color: #94a3b8;
      margin-right: 4px;
      font-weight: bold;
    }
    .m2-pdf-inline-note {
      font-size: 8pt;
      color: #64748b;
      font-style: italic;
      margin-top: 2px;
    }
    .m2-pdf-footer-bar {
      display: flex;
      justify-content: space-between;
      font-size: 8pt;
      color: #94a3b8;
      border-top: 1px solid #cbd5e1;
      padding-top: 6px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  ${buildDiagrammedPdfDocumentHtml({ contest: activeContest, contestName, syllabusList, isBlank, branding })}
</body>
</html>`;

  const printWindow = window.open('', '_blank', 'width=950,height=850,menubar=no,toolbar=no,location=no,status=no');
  if (!printWindow) {
    showToast('Por favor, autorize popups para imprimir ou salvar o PDF diagramado.', 'warning');
    return;
  }
  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 400);
}
