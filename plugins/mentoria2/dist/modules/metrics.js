import { state, icon, escapeHtml, formatTimer } from './core.js?v=10e94e945bc8';

export   function viewProgress() {
    const student = window.M2Data.student || {};
    const period = state.metricsPeriod || '30d';
    const contestName = (window.M2Data.contests && window.M2Data.contests[0]) ? (window.M2Data.contests[0].name || window.M2Data.contests[0].title) : 'Geral';

    const hoursNum = Number(student.hoursStudied || student.hoursWeek || student.totalHours || 0);
    const questionsNum = Number(student.questionsResolved || student.questionsAnswered || 0);
    const accuracyNum = Number(student.questionsAccuracy || student.accuracy || 0);
    const activeDaysNum = Number(student.streakDays || 0);
    const plannedNum = Number(student.weekHoursGoal || 12);

    const currentMetrics = {
      hoursStudied: `${hoursNum}h 00m`,
      questionsSolved: questionsNum,
      accuracy: accuracyNum,
      activeDays: activeDaysNum,
      plannedHours: `${plannedNum}h 00m`,
      diffSaldo: hoursNum >= plannedNum ? `+${(hoursNum - plannedNum).toFixed(1)}h` : `${(hoursNum - plannedNum).toFixed(1)}h`
    };

    const subjectsData = (window.M2Data.syllabus || window.M2Data.subjects || []).map(sub => ({
      id: sub.id,
      name: sub.name,
      accuracy: sub.accuracy || sub.masteryPct || 0,
      hours: sub.hours || 0,
      totalQuestions: sub.totalQuestions || sub.questionsCount || 0,
      color: 'var(--accent-teal)'
    }));

    // Helper SVG para Radar Poligonal (Pure SVG, sem bibliotecas externas)
    function renderRadarChartSvg(size = 300) {
      if (subjectsData.length < 3) {
        return `
          <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
            <p>O radar poligonal requer pelo menos 3 disciplinas cadastradas no edital para mapeamento multidimensional.</p>
          </div>
        `;
      }
      const center = size / 2;
      const radius = (size / 2) - 44;
      const n = subjectsData.length;
      const angleOf = (i) => (2 * Math.PI * i / n) - (Math.PI / 2);
      const levels = [0.25, 0.5, 0.75, 1.0];

      const levelPolygons = levels.map(lvl => {
        const pts = [];
        for (let i = 0; i < n; i++) {
          const a = angleOf(i);
          const r = radius * lvl;
          pts.push(`${(center + r * Math.cos(a)).toFixed(1)},${(center + r * Math.sin(a)).toFixed(1)}`);
        }
        return `<polygon points="${pts.join(' ')}" fill="none" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="3,3"/>`;
      }).join('');

      const axisLines = [];
      const labels = [];
      const dataPts = [];

      subjectsData.forEach((sub, i) => {
        const a = angleOf(i);
        const x2 = center + radius * Math.cos(a);
        const y2 = center + radius * Math.sin(a);
        axisLines.push(`<line x1="${center}" y1="${center}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--border-color)" stroke-width="1"/>`);

        const labelDist = radius + 22;
        const lx = center + labelDist * Math.cos(a);
        const ly = center + labelDist * Math.sin(a);
        const textAnchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
        labels.push(`<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="var(--text-main)" font-size="11" font-weight="600" text-anchor="${textAnchor}" dominant-baseline="middle">${sub.name} (${sub.accuracy}%)</text>`);

        const rVal = radius * (Math.max(5, sub.accuracy) / 100);
        const px = center + rVal * Math.cos(a);
        const py = center + rVal * Math.sin(a);
        dataPts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
      });

      const dataPolygon = `
        <polygon points="${dataPts.join(' ')}" fill="rgba(10, 181, 189, 0.25)" stroke="var(--accent-teal)" stroke-width="2"/>
        ${subjectsData.map((sub, i) => {
          const a = angleOf(i);
          const rVal = radius * (Math.max(5, sub.accuracy) / 100);
          const px = center + rVal * Math.cos(a);
          const py = center + rVal * Math.sin(a);
          return `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4" fill="var(--accent-teal)"/>`;
        }).join('')}
      `;

      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block; margin:8px auto; max-width:100%; overflow:visible;">
          ${levelPolygons}
          ${axisLines.join('')}
          ${dataPolygon}
          ${labels.join('')}
        </svg>
      `;
    }

    // Helper Heatmap dos Últimos 90 Dias
    function renderHeatmap() {
      const activeStreak = student.streakDays || 0;
      const totalDays = 91;
      const intensities = Array.from({ length: totalDays }, (_, i) => {
        const dayFromEnd = totalDays - 1 - i;
        if (dayFromEnd < activeStreak) return Math.min(3, Math.max(1, (i % 3) + 1));
        return 0;
      });

      return `
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:grid; grid-template-columns:repeat(13, 1fr); gap:6px;">
            ${intensities.map((level, i) => {
              let bg = 'rgba(255,255,255,0.06)';
              let title = `Dia ${i + 1}: Sem estudo registrado`;
              if (level === 1) { bg = 'rgba(10, 181, 189, 0.35)'; title = `Dia ${i + 1}: 1h a 2h de estudo`; }
              else if (level === 2) { bg = 'var(--accent-teal)'; title = `Dia ${i + 1}: 2h a 3h de estudo`; }
              else if (level === 3) { bg = 'var(--accent-green)'; title = `Dia ${i + 1}: 3h+ de estudo · Meta batida!`; }
              return `<div style="aspect-ratio:1; border-radius:3px; background:${bg}; cursor:pointer;" title="${title}"></div>`;
            }).join('')}
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; color:var(--text-muted); padding-top:4px;">
            <span>90 dias atrás</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <span>Menos</span>
              <div style="width:12px; height:12px; border-radius:2px; background:rgba(255,255,255,0.06);"></div>
              <div style="width:12px; height:12px; border-radius:2px; background:rgba(10, 181, 189, 0.35);"></div>
              <div style="width:12px; height:12px; border-radius:2px; background:var(--accent-teal);"></div>
              <div style="width:12px; height:12px; border-radius:2px; background:var(--accent-green);"></div>
              <span>Mais</span>
            </div>
            <span>Hoje</span>
          </div>
        </div>
      `;
    }

    const sortedByAcc = [...subjectsData].sort((a, b) => b.accuracy - a.accuracy);
    const topStrengths = sortedByAcc.filter(s => s.accuracy > 0).slice(0, 2);
    const bottomWeaknesses = [...sortedByAcc].reverse().filter(s => s.accuracy > 0).slice(0, 2);

    return `
      <div class="m2-content">
        <!-- Topo da Tela com Ações de Relatório e Exportação -->
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A16 · Painel Analítico & Métricas de Desempenho</span>
            <h1 class="m2-page-title">Métricas de Desempenho</h1>
            <p class="m2-page-subtitle">Acompanhamento consolidado de horas líquidas, aproveitamento por matéria, constância e cobertura de edital.</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="open-metrics-report">
              ${icon('file-text', 14)} Gerar Relatório
            </button>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="export-metrics-csv" style="border-color:var(--accent-teal); color:var(--accent-teal);">
              ${icon('download', 14)} Exportar CSV
            </button>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="copy-metrics-summary">
              ${icon('copy', 14)} Copiar Resumo
            </button>
          </div>
        </div>

        <!-- Barra de Filtros por Período de Análise -->
        <div class="m2-card" style="padding:12px 18px; margin-bottom:16px;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.5px; display:flex; align-items:center; gap:6px;">
                ${icon('filter', 14, 'text-teal')} Período de Análise:
              </span>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="m2-btn ${period === '7d' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-metrics-period" data-period="7d">7 Dias</button>
                <button type="button" class="m2-btn ${period === '14d' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-metrics-period" data-period="14d">14 Dias</button>
                <button type="button" class="m2-btn ${period === '30d' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-metrics-period" data-period="30d">30 Dias</button>
                <button type="button" class="m2-btn ${period === 'all' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-metrics-period" data-period="all">Desde o Início</button>
              </div>
            </div>
            <span style="font-size:12px; color:var(--accent-teal); font-weight:600;">
              Concurso Ativo: ${contestName}
            </span>
          </div>
        </div>

        <!-- 8 Cards de Estatísticas Consolidadas do Período -->
        <div class="m2-grid-4" style="margin-bottom:18px;">
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('clock', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${currentMetrics.hoursStudied}</span>
              <span class="m2-stat-label">Tempo Líquido Estudado</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('circle-help', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${currentMetrics.questionsSolved}</span>
              <span class="m2-stat-label">Questões Resolvidas</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('check-circle', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${currentMetrics.accuracy}%</span>
              <span class="m2-stat-label">Taxa Média de Acertos</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-amber-soft); color:var(--accent-amber);">${icon('target', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${currentMetrics.activeDays} dias</span>
              <span class="m2-stat-label">Dias com Estudo Ativo</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-amber-soft); color:var(--accent-amber);">${icon('flame', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${student.streakDays || 0} Dias</span>
              <span class="m2-stat-label">Sequência Ininterrupta</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-teal-soft); color:var(--accent-teal);">${icon('list-tree', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${student.syllabusCoveredPct || 0}%</span>
              <span class="m2-stat-label">Cobertura do Edital</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('clipboard-list', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${(window.M2Data.mockExams && window.M2Data.mockExams[0]?.score) || 0}%</span>
              <span class="m2-stat-label">Média em Simulados</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('timer', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${student.todayHours || 0}h / ${student.todayHoursGoal || 2}h</span>
              <span class="m2-stat-label">Estudo Hoje</span>
            </div>
          </div>
        </div>

        <!-- Linha 1: Ritmo Semanal (Previsto x Realizado) + Desempenho por Matéria -->
        <div class="m2-grid-split" style="margin-bottom:18px;">
          <!-- Card de Ritmo Semanal -->
          <div class="m2-card">
            <div class="m2-card-header">
              <h2 class="m2-card-title">${icon('trending-up', 18, 'text-teal')} Ritmo Semanal: Previsto vs Realizado</h2>
              <span class="m2-pill m2-pill-teal">Total: ${currentMetrics.hoursStudied} / ${currentMetrics.plannedHours}</span>
            </div>
            <div style="display:flex; align-items:flex-end; gap:16px; height:150px; margin-top:20px; padding-bottom:10px;">
              ${[
                { day: 'Seg', hours: 0.0, target: 2.0 },
                { day: 'Ter', hours: 0.0, target: 2.0 },
                { day: 'Qua', hours: 0.0, target: 2.0 },
                { day: 'Qui', hours: 0.0, target: 2.0 },
                { day: 'Sex', hours: 0.0, target: 2.0 },
                { day: 'Sáb', hours: 0.0, target: 2.0 },
                { day: 'Dom', hours: 0.0, target: 0.0 }
              ].map(d => `
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
                  <div style="display:flex; align-items:flex-end; gap:4px; height:110px;">
                    <div style="width:14px; height:${Math.max(4, d.hours * 36)}px; background:var(--accent-teal); border-radius:3px 3px 0 0;" title="${d.day}: ${d.hours}h realizadas"></div>
                    <div style="width:14px; height:${d.target * 36}px; background:rgba(255,255,255,0.08); border-radius:3px 3px 0 0;" title="${d.day}: ${d.target}h previstas"></div>
                  </div>
                  <span style="font-size:11px; color:var(--text-muted); font-weight:600;">${d.day}</span>
                </div>
              `).join('')}
            </div>
            <div style="display:flex; justify-content:center; gap:16px; font-size:11px; color:var(--text-muted); margin-top:10px; border-top:1px solid var(--border-color); padding-top:10px;">
              <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:10px; height:10px; background:var(--accent-teal); border-radius:2px;"></span> Horas Realizadas</span>
              <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:10px; height:10px; background:rgba(255,255,255,0.15); border-radius:2px;"></span> Horas Previstas</span>
            </div>
          </div>

          <!-- Card de Desempenho por Disciplina -->
          <div class="m2-card">
            <div class="m2-card-header">
              <h2 class="m2-card-title">${icon('pie-chart', 18, 'text-teal')} Desempenho & Horas por Matéria</h2>
              <span class="m2-pill m2-pill-gray">${subjectsData.length} Disciplinas</span>
            </div>
            ${subjectsData.length === 0 ? `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <p>Nenhuma disciplina vinculada para acompanhamento.</p>
              </div>
            ` : `
              <div style="display:flex; flex-direction:column; gap:14px; margin-top:12px;">
                ${subjectsData.map(sub => `
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;">
                      <strong>${sub.name}</strong>
                      <span style="color:var(--text-muted);">${sub.accuracy}% de acerto · <strong style="color:var(--text-main);">${sub.hours}h</strong></span>
                    </div>
                    <div class="m2-progress-track">
                      <div class="m2-progress-fill ${sub.accuracy >= 80 ? 'green' : ''}" style="width:${sub.accuracy}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

        <!-- Linha 2: Radar de Aproveitamento por Disciplina + Diagnóstico de Rendimento -->
        <div class="m2-grid-split" style="margin-bottom:18px;">
          <!-- Card de Radar Poligonal (Pure SVG) -->
          <div class="m2-card" style="text-align:center;">
            <div class="m2-card-header">
              <h2 class="m2-card-title">${icon('target', 18, 'text-teal')} Radar de Aproveitamento por Disciplina</h2>
              <span class="m2-pill m2-pill-teal">Mapeamento Poligonal</span>
            </div>
            <p style="font-size:12px; color:var(--text-muted); margin-top:2px;">
              Visualização multidimensional de pontos fortes e fracos em cada frente do edital.
            </p>
            ${renderRadarChartSvg(280)}
          </div>

          <!-- Card de Diagnóstico (Maior Facilidade vs Pontos de Atenção) -->
          <div class="m2-card">
            <div class="m2-card-header">
              <h2 class="m2-card-title">${icon('sparkles', 18, 'text-teal')} Diagnóstico Pedagógico</h2>
              <span class="m2-pill m2-pill-teal">Análise Inteligente</span>
            </div>

            ${topStrengths.length === 0 && bottomWeaknesses.length === 0 ? `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 10px; color:var(--accent-teal);">
                  ${icon('sparkles', 20)}
                </div>
                <strong>Aguardando dados de resolução</strong>
                <p style="font-size:12px; margin-top:4px;">Resolva questões nas disciplinas para que o diagnóstico identifique seus maiores domínios e pontos de atenção.</p>
              </div>
            ` : `
              <div style="margin-top:10px;">
                <span style="font-size:12px; font-weight:700; color:var(--accent-green); display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                  ${icon('check-circle', 14)} Maior Facilidade (Destaques de Domínio):
                </span>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${topStrengths.map((s, idx) => `
                    <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <strong style="font-size:13px;">${idx + 1}. ${s.name}</strong>
                        <span style="font-size:11px; color:var(--text-muted); display:block;">${s.totalQuestions} questões mapeadas</span>
                      </div>
                      <strong style="color:var(--accent-green); font-size:15px;">${s.accuracy}%</strong>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div style="margin-top:16px;">
                <span style="font-size:12px; font-weight:700; color:var(--accent-amber); display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                  ${icon('alert-triangle', 14)} Pontos de Atenção (Onde Reforçar):
                </span>
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${bottomWeaknesses.map((w, idx) => `
                    <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <strong style="font-size:13px;">${idx + 1}. ${w.name}</strong>
                        <span style="font-size:11px; color:var(--text-muted); display:block;">${w.totalQuestions} questões mapeadas</span>
                      </div>
                      <strong style="color:var(--accent-amber); font-size:15px;">${w.accuracy}%</strong>
                    </div>
                  `).join('')}
                </div>
              </div>
            `}
          </div>
        </div>

        <!-- Linha 3: Mapa de Calor de Constância (Últimos 90 Dias) -->
        <div class="m2-card" style="margin-bottom:18px;">
          <div class="m2-card-header">
            <div>
              <h2 class="m2-card-title">${icon('calendar', 18, 'text-teal')} Mapa de Atividade e Constância (Últimos 90 Dias)</h2>
              <span style="font-size:12px; color:var(--text-muted);">Frequência diária de blocos de estudo e questões resolvidas estilo GitHub.</span>
            </div>
            <span class="m2-pill m2-pill-teal">${student.streakDays || 0} dias ativos</span>
          </div>
          <div style="margin-top:12px;">
            ${renderHeatmap()}
          </div>
        </div>

        <!-- Linha 4: Comparativo de Capacidade de Estudo (Planejado vs Realizado) -->
        <div class="m2-card">
          <div class="m2-card-header">
            <h2 class="m2-card-title">${icon('clock', 18, 'text-teal')} Meta do Ciclo x Realizado</h2>
            <span class="m2-pill ${hoursNum >= plannedNum ? 'm2-pill-green' : 'm2-pill-amber'}">
              ${plannedNum > 0 ? Math.round((hoursNum / plannedNum) * 100) : 0}% da Meta
            </span>
          </div>
          <p style="font-size:13px; color:var(--text-muted); margin-top:2px;">
            Compara as horas previstas no cronograma inteligente com o tempo líquido cronometrado no período selecionado.
          </p>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; margin-top:14px;">
            <div style="background:var(--bg-card); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
              <span style="font-size:11px; color:var(--text-muted); display:block;">Planejado no Cronograma</span>
              <strong style="font-size:20px; color:var(--text-main);">${currentMetrics.plannedHours}</strong>
            </div>
            <div style="background:var(--bg-card); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
              <span style="font-size:11px; color:var(--text-muted); display:block;">Efetivamente Estudado</span>
              <strong style="font-size:20px; color:var(--accent-teal);">${currentMetrics.hoursStudied}</strong>
            </div>
            <div style="background:var(--bg-card); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
              <span style="font-size:11px; color:var(--text-muted); display:block;">Saldo de Dedicação</span>
              <strong style="font-size:20px; color:${hoursNum >= plannedNum ? 'var(--accent-green)' : 'var(--accent-amber)'};">${currentMetrics.diffSaldo}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // A17: Metas e Conquistas
export function viewGoals() {
    const goals = window.M2Data.goals || [];
    const badges = window.M2Data.badges || [];
    const history = window.M2Data.gamificationHistory || [];
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A17 · Gamificação & Reconhecimento</span>
            <h1 class="m2-page-title">Metas e Conquistas</h1>
            <p class="m2-page-subtitle">Gamificação séria para manter o ritmo e a disciplina até o dia da prova.</p>
          </div>
        </div>

        <div class="m2-grid-split">
          <div class="m2-card">
            <h2 class="m2-card-title">${icon('target', 18, 'text-teal')} Metas da Semana</h2>
            ${goals.length === 0 ? `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <p>Nenhuma meta semanal cadastrada no momento.</p>
              </div>
            ` : `
              <div style="display:flex; flex-direction:column; gap:14px; margin-top:10px;">
                ${goals.map(g => `
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
                      <strong>${g.title}</strong>
                      <span>${g.current} / ${g.target} ${g.unit}</span>
                    </div>
                    <div class="m2-progress-track">
                      <div class="m2-progress-fill ${g.pct === 100 ? 'green' : ''}" style="width:${g.pct}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <div class="m2-card">
            <h2 class="m2-card-title">${icon('trophy', 18, 'text-teal')} Conquistas Desbloqueadas</h2>
            ${badges.length === 0 ? `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <p>Nenhuma conquista desbloqueada ainda. Continue estudando para desbloquear medalhas!</p>
              </div>
            ` : `
              <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                ${badges.map(b => `
                  <div style="display:flex; align-items:center; gap:12px; padding:10px; border-radius:var(--radius-md); background:var(--bg-card); opacity:${b.unlocked ? '1' : '0.4'};">
                    <div style="width:36px; height:36px; border-radius:var(--radius-full); background:var(--accent-amber-soft); color:var(--accent-amber); display:grid; place-items:center;">
                      ${icon(b.icon, 18)}
                    </div>
                    <div>
                      <strong style="font-size:13px;">${b.title}</strong>
                      <span style="font-size:11px; color:var(--text-muted); display:block;">${b.desc}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
        <div class="m2-card" style="margin-top:18px;">
          <h2 class="m2-card-title">${icon('activity', 18, 'text-teal')} Historico de XP</h2>
          ${history.length ? `<div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">${history.map(event => `<div style="display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:1px solid var(--border-color);"><span>${event.reason || 'Atividade registrada'}</span><strong>+${event.points} XP</strong></div>`).join('')}</div>` : '<p class="m2-empty-inline">Os ganhos de XP aparecerao aqui apos atividades registradas.</p>'}
        </div>
      </div>
    `;
  }

  // A18: Ranking
export function viewRanking() {
    const ranking = window.M2Data.ranking || [];
    const contestName = (window.M2Data.contests && window.M2Data.contests[0]) ? (window.M2Data.contests[0].name || window.M2Data.contests[0].title) : 'Geral';
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">A18 · Ranking Opcional e Participativo</span>
            <h1 class="m2-page-title">Ranking da Turma ${contestName}</h1>
            <p class="m2-page-subtitle">Adesão voluntária. Seu progresso é computado para aprendizado mesmo se você optar por sair do ranking.</p>
          </div>
          <button type="button" class="m2-btn ${window.M2Data.student?.rankingOptIn ? 'm2-btn-secondary' : 'm2-btn-primary'}" data-action="toggle-ranking-optin">
            ${window.M2Data.student?.rankingOptIn ? 'Sair do Ranking Público' : 'Aderir ao Ranking'}
          </button>
        </div>

        ${ranking.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('trophy', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum aluno pontuou no ranking ainda</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              O ranking é atualizado conforme os alunos resolvem questões, completam revisões e avançam no plano de estudos.
            </p>
          </div>
        ` : `
          <div class="m2-card">
            <div class="m2-table-wrapper">
              <table class="m2-table">
                <thead>
                  <tr>
                    <th>Posição</th>
                    <th>Aluno</th>
                    <th>Pontos XP</th>
                    <th>Questões</th>
                    <th>Aproveitamento</th>
                    <th>Constância</th>
                  </tr>
                </thead>
                <tbody>
                  ${ranking.map(r => `
                    <tr style="${r.isUser ? 'background:var(--accent-teal-soft); font-weight:700;' : ''}">
                      <td><strong>#${r.position}</strong></td>
                      <td>${r.name} ${r.isUser ? ' (Você)' : ''}</td>
                      <td><span class="m2-pill m2-pill-violet">${r.xp} XP</span></td>
                      <td>${r.questionsAnswered}</td>
                      <td>${r.accuracyPct}%</td>
                      <td><span class="m2-pill m2-pill-amber">${r.streakDays} dias</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      </div>
    `;
  }
