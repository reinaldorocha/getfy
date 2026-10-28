import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js?v=10e94e945bc8';

export   function viewSyllabus() {
    const activeContest = window.M2Data.contests?.[0];
    const contestName = activeContest ? activeContest.name : 'Concurso';
    const syllabusList = window.M2Data.syllabus || [];
    const totalTopics = syllabusList.reduce((acc, s) => acc + ((s.topics && s.topics.length) || 0), 0);
    const coveredTopics = syllabusList.reduce((acc, s) => acc + ((s.topics && s.topics.filter(t => t.completed).length) || 0), 0);
    const totalPct = totalTopics > 0 ? Math.round((coveredTopics / totalTopics) * 100) : 0;

    const areAllCollapsed = syllabusList.length > 0 && syllabusList.every(s => Boolean(state.collapsedSubjects?.[s.id]));

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A05 · Mapeamento de Conteúdo</span>
            <h1 class="m2-page-title">Edital Verticalizado — ${contestName}</h1>
            <p class="m2-page-subtitle">Acompanhe a cobertura teórica e o domínio prático de cada disciplina oficial.</p>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            ${syllabusList.length > 0 ? `
              <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="toggle-all-syllabus">
                ${icon(areAllCollapsed ? 'chevron-down' : 'chevron-up', 14)} ${areAllCollapsed ? 'Expandir Todas' : 'Recolher Todas'}
              </button>
            ` : ''}
            <span class="m2-pill m2-pill-teal">${totalPct}% Cobertura Total</span>
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
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${syllabusList.map(sub => {
              const isCollapsed = Boolean(state.collapsedSubjects?.[sub.id]);
              return `
              <div class="m2-subject-accordion ${isCollapsed ? 'is-collapsed' : ''}">
                <div class="m2-subject-header" data-action="toggle-accordion" data-subject-id="${sub.id}" role="button" tabindex="0">
                  <div style="display:flex; align-items:center; gap:12px;">
                    <span style="display:inline-flex; transition:transform 0.2s ease; transform:${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};">
                      ${icon('chevron-down', 18)}
                    </span>
                    <div>
                      <strong style="font-size:15px;">${sub.name}</strong>
                      <span style="display:block; font-size:11px; color:var(--text-muted);">
                        Peso: ${sub.weight} · Relevância: ${sub.relevance} · Domínio de Questões: <strong>${sub.masteryPct || 0}%</strong>
                      </span>
                    </div>
                  </div>
                  <div style="display:flex; align-items:center; gap:16px;">
                    <div style="width:120px;">
                      <div class="m2-progress-track">
                        <div class="m2-progress-fill" style="width:${sub.coveredPct || 0}%;"></div>
                      </div>
                    </div>
                    <span style="font-weight:700; font-size:13px; color:var(--accent-teal);">${sub.coveredPct || 0}%</span>
                  </div>
                </div>

                <div class="m2-subject-body" style="${isCollapsed ? 'display:none;' : ''}">
                  ${(sub.topics || []).map(top => `
                    <div class="m2-topic-row">
                      <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" ${top.completed ? 'checked' : ''} aria-label="Marcar ${escapeHtml(top.name)} como estudado" style="accent-color:var(--accent-teal); cursor:pointer; width:16px; height:16px;" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}">
                        <strong style="cursor:pointer;" data-action="toggle-topic-study" data-item-type="topico" data-id="${top.id}">${escapeHtml(top.name)}</strong>
                      </div>
                      <span class="m2-pill m2-pill-gray" style="font-size:10px;">${(top.subtopics || []).length} Subtópicos</span>
                    </div>
                    ${(top.subtopics || []).map(subt => `
                      <div class="m2-subtopic-row">
                        <div style="display:flex; align-items:center; gap:10px;">
                          <input type="checkbox" ${subt.completed ? 'checked' : ''} aria-label="Marcar ${escapeHtml(subt.name)} como estudado" style="accent-color:var(--accent-teal); cursor:pointer; width:16px; height:16px;" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}">
                          <span style="cursor:pointer;" data-action="toggle-topic-study" data-item-type="subtopico" data-id="${subt.id}">${escapeHtml(subt.name)}</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:12px;">
                          <span style="font-size:11px; color:var(--text-muted);">${subt.questionsCount || 0} questões</span>
                          <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="start-study-subject" data-subject="${sub.id}" data-topic="${top.id}">Treinar</button>
                        </div>
                      </div>
                    `).join('')}
                  `).join('')}
                </div>
              </div>
            `;}).join('')}
          </div>
        `}
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
            <span class="m2-eyebrow">A26 · Simulador Estratégico de Banca</span>
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

  // Item 14: Radar de Editais & Diários Oficiais (Crawler Simulado)
export function viewRadarEditais() {
    const editais = window.M2Data.radarEditais || [];
    const filter = state.radarFilterSphere || 'all';
    const filtered = editais.filter(e => filter === 'all' || (e.sphere && e.sphere.toLowerCase() === filter.toLowerCase()));

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A27 · Monitoramento Normativo & Diários Oficiais</span>
            <h1 class="m2-page-title">Radar de Editais & Diários Oficiais</h1>
            <p class="m2-page-subtitle">Acompanhe movimentações, autorizações de concurso, contratações de bancas e publicações no DOU e Diários Oficiais Estaduais.</p>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="m2-btn ${filter === 'all' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-sphere" data-sphere="all">Todos</button>
            <button type="button" class="m2-btn ${filter === 'estadual' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-sphere" data-sphere="estadual">Estadual (PI)</button>
            <button type="button" class="m2-btn ${filter === 'federal' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="filter-radar-sphere" data-sphere="federal">Federal (PF/PRF)</button>
          </div>
        </div>

        ${filtered.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 16px;">
            <div style="width:56px; height:56px; border-radius:50%; background:var(--bg-card); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-teal);">
              ${icon('globe', 28)}
            </div>
            <h3 style="font-size:18px; font-weight:700; color:var(--text-main);">Nenhum edital monitorado no momento</h3>
            <p style="font-size:13px; color:var(--text-muted); max-width:440px; margin:8px auto 20px;">
              Não há editais ou concursos cadastrados no radar de monitoramento oficial para este filtro.
            </p>
          </div>
        ` : `
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:16px;">
            ${filtered.map(item => `
              <div class="m2-radar-item-card">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                  <div>
                    <span class="m2-pill ${item.statusClass || 'm2-pill-teal'}">${item.status}</span>
                    <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin-top:8px;">${item.name}</h3>
                    <span style="font-size:12px; color:var(--text-muted);">${item.role || ''} · ${item.sphere || ''}</span>
                  </div>
                  <button type="button" class="m2-btn-icon" data-action="toggle-follow-contest" data-contest-id="${item.id}" title="${item.isFavorite ? 'Deixar de Seguir' : 'Seguir Concurso'}">
                    ${icon('star', 16, item.isFavorite ? 'text-amber' : '')}
                  </button>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:var(--bg-app); padding:10px 12px; border-radius:var(--radius-md); font-size:12px;">
                  <div>
                    <span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Banca</span>
                    <strong>${item.board || 'A definir'}</strong>
                  </div>
                  <div>
                    <span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Remuneração</span>
                    <strong style="color:var(--accent-green);">${item.salary || '-'}</strong>
                  </div>
                  <div>
                    <span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Vagas</span>
                    <strong>${item.vagas || item.vacancies || 0} Vagas</strong>
                  </div>
                  <div>
                    <span style="color:var(--text-muted); display:block; font-size:10px; text-transform:uppercase;">Atualizado</span>
                    <span style="color:var(--text-muted);">${item.lastUpdate || 'Não informado'}</span>
                  </div>
                </div>

                <!-- Recorte de Diário Oficial -->
                ${item.source ? `
                  <div style="background:var(--bg-app); border-left:3px solid var(--accent-teal); padding:10px 12px; border-radius:var(--radius-sm); font-size:11px; line-height:1.5;">
                    <span style="font-weight:700; color:var(--accent-teal); display:block; margin-bottom:2px;">${item.source}:</span>
                    <span style="color:var(--text-main);">${item.headline || ''}</span>
                  </div>
                ` : ''}

                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:auto; pt:6px;">
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="open-edital-analysis">
                    ${icon('file-text', 14)} Análise de Edital
                  </button>
                  <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="toggle-follow-contest" data-contest-id="${item.id}">
                    ${icon(item.isFavorite ? 'check' : 'plus', 14)} ${item.isFavorite ? 'Seguindo' : 'Seguir Concurso'}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }
