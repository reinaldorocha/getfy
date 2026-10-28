import { state, icon, escapeHtml, plainTextWithBreaks, formatTimer } from './core.js?v=d6fd58c3ef81';

export function renderTopbar() {
    const unread = Number(window.M2Data?.notifications?.unread_count || 0);
    const isMentor = state.mode === 'mentor' || (state.screen && state.screen.startsWith('mentor-'));
    const contests = window.M2Data?.contests || [];
    const contest = contests.find(c => String(c.id) === String(state.contestId)) || contests[0] || { name: 'Não informado', id: '' };

    return `
      <header class="m2-topbar">
        <div class="m2-topbar-left">
          <button type="button" class="m2-btn-icon" data-action="toggle-sidebar" aria-label="Abrir menu" id="m2-mobile-menu-btn">
            ${icon('menu', 20)}
          </button>
          <span style="font-size:13px; font-weight:600; color:var(--text-main); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:220px;">
            ${escapeHtml(contest.name)}
          </span>
        </div>

        <div class="m2-topbar-right">
          <button type="button" class="m2-btn-icon" data-action="open-notifications" title="Notificacoes pedagogicas" aria-label="Notificacoes pedagogicas" style="position:relative;">
            ${icon('bell', 17)}${unread ? `<span style="position:absolute;right:-3px;top:-3px;min-width:16px;height:16px;padding:0 4px;border-radius:9px;background:var(--accent-rose);color:white;font-size:10px;line-height:16px;font-weight:700;">${unread > 99 ? '99+' : unread}</span>` : ''}
          </button>
          <button type="button" class="m2-btn-icon" data-action="toggle-theme" title="Alternar tema claro/escuro">
            ${icon(state.theme === 'dark' ? 'sun' : 'moon', 16)}
          </button>
        </div>
      </header>
    `;
  }

  /**
   * RENDERIZAÇÃO DA SIDEBAR (Aluno vs Mentor)
   */
  export function renderSidebar() {
    const isMentor = state.mode === 'mentor';
    const isWorkspace = state.mode === 'workspace';
    const contests = window.M2Data?.contests || [];
    const contest = contests.find(c => String(c.id) === String(state.contestId)) || contests[0] || { name: 'Não informado', role: '', id: '' };

    if (isMentor) {
      const mentorAlerts = window.M2Data.mentor?.alertStudentsCount || 0;
      const mentorFeedbacksCount = (window.M2Data.mentorFeedbacks || []).length;
      // Menu do Mentor (M01 a M20)
      const mentorNav = [
        { section: 'Visão Geral', items: [
          { id: 'mentor-overview', label: 'Radar da Mentoria', icon: 'layout-dashboard', badge: mentorAlerts > 0 ? String(mentorAlerts) : '' },
          { id: 'mentor-students', label: 'Alunos', icon: 'users' },
          { id: 'mentor-cohorts', label: 'Turmas', icon: 'folder' },
          { id: 'mentor-contests', label: 'Concursos & Editais', icon: 'shield' }
        ]},
        { section: 'Conteúdos & Banco', items: [
          { id: 'mentor-contents', label: 'Biblioteca de Conteúdos', icon: 'layers' },
          { id: 'mentor-questions', label: 'Banco de Questões', icon: 'circle-help' },
          { id: 'mentor-flashcards', label: 'Baralhos Oficiais', icon: 'rotate-3d' },
          { id: 'mentor-materials', label: 'Materiais & PDFs', icon: 'file-text' },
          { id: 'mentor-mock-exams', label: 'Simulados', icon: 'clipboard-list' },
          { id: 'mentor-import-review', label: 'Importador de Edital (IA)', icon: 'sparkles' },
          { id: 'mentor-prompts', label: 'Prompts IA & Importação JSON', icon: 'sparkles', badge: 'Novo' }
        ]},
        { section: 'Acompanhamento', items: [
          { id: 'mentor-goals', label: 'Metas & Desafios', icon: 'target' },
          { id: 'mentor-feedback', label: 'Feedbacks & Mensagens', icon: 'message-square', badge: mentorFeedbacksCount > 0 ? String(mentorFeedbacksCount) : '' },
          { id: 'mentor-reports', label: 'Relatórios & Métricas', icon: 'chart-no-axes-combined' },
          { id: 'mentor-audit', label: 'Trilha de Auditoria', icon: 'activity' }
        ]},
        { section: 'Administração', items: [
          { id: 'mentor-products', label: 'Produtos Getfy', icon: 'award' },
          { id: 'mentor-settings', label: 'Configurações', icon: 'settings' }
        ]}
      ];

      return `
        <aside class="m2-sidebar ${state.sidebarCollapsed ? 'collapsed' : ''}" id="m2-sidebar">
          <div class="m2-brand">
            <span class="m2-brandmark">${icon('graduation-cap', 20)}</span>
            <div class="m2-brand-text">
              <span class="m2-brand-name">Mentoria 2.0</span>
              <span class="m2-brand-badge">Painel do Mentor</span>
            </div>
            <button type="button" class="m2-sidebar-collapse-toggle" data-action="toggle-sidebar-collapse" title="${state.sidebarCollapsed ? 'Expandir menu lateral' : 'Encolher menu lateral'}" aria-label="Recolher ou expandir menu lateral">
              ${icon(state.sidebarCollapsed ? 'chevron-right' : 'chevron-left', 14)}
            </button>
          </div>

          ${contests.length > 0 ? `
            <div class="m2-sidebar-contest-box">
              <div class="m2-sidebar-contest-header">
                ${icon('shield-check', 13, 'text-teal')}
                <span class="m2-sidebar-contest-label">Concurso Foco</span>
              </div>
              <select data-action="change-contest" class="m2-sidebar-contest-select" title="Trocar Concurso Foco">
                ${contests.map(c => `<option value="${c.id}" ${String(c.id) === String(contest.id) ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
              </select>
              ${contest.role ? `<span class="m2-sidebar-contest-role">${escapeHtml(contest.role)}</span>` : ''}
            </div>
          ` : ''}

          <div style="display:flex; flex-direction:column; gap:16px;">
            ${mentorNav.map(sec => `
              <div class="m2-nav-section">
                <span class="m2-nav-label">${sec.section}</span>
                ${sec.items.map(it => `
                  <button type="button" class="m2-nav-item ${state.screen === it.id ? 'active' : ''}" data-nav="${it.id}">
                    <span class="m2-nav-item-left">
                      ${icon(it.icon, 16)}
                      <span>${it.label}</span>
                    </span>
                    ${it.badge ? `<span class="m2-nav-badge">${it.badge}</span>` : ''}
                  </button>
                `).join('')}
              </div>
            `).join('')}
          </div>

          <div class="m2-sidebar-footer">
            <div class="m2-sidebar-footer-actions">
              <button type="button" class="m2-sidebar-footer-btn" data-action="toggle-theme" title="Alternar tema claro/escuro">
                ${icon(state.theme === 'dark' ? 'sun' : 'moon', 14)}
                <span class="m2-sidebar-footer-btn-label">${state.theme === 'dark' ? 'Tema Claro' : 'Tema Escuro'}</span>
              </button>
              <button type="button" class="m2-sidebar-footer-btn" data-nav="mentor-help" title="Central de Ajuda">
                ${icon('help-circle', 14)}
                <span class="m2-sidebar-footer-btn-label">Ajuda</span>
              </button>
            </div>
            <div class="m2-user-badge">
              <div class="m2-avatar">${window.M2Data.mentor?.initials || ''}</div>
              <div class="m2-user-info">
                <span class="m2-user-name">${window.M2Data.mentor?.name || 'Mentor'}</span>
                <span class="m2-user-role">${window.M2Data.mentor?.role || ''}</span>
              </div>
            </div>
          </div>
        </aside>
      `;
    }

    const dueFlashcardsCount = (window.M2Data?.flashcardDecks || []).reduce((acc, d) => acc + (d.dueCards || 0), 0);
    const pendingReviewsCount = (window.M2Data?.reviews || []).filter(r => r.status === 'pending' || r.status === 'delayed').length;
    const errorsCount = (window.M2Data?.errorNotebook || []).length;

    // Menu do Aluno (A01 a A23 + Inovações)
    const studentNav = [
      { section: 'Minha Rotina', items: [
        { id: 'today', label: 'Hoje', icon: 'house' },
        { id: 'planning', label: 'Planejamento', icon: 'calendar-days' },
        { id: 'syllabus', label: 'Edital Verticalizado', icon: 'list-tree' },
        { id: 'radar-editais', label: 'Radar de Editais & DO', icon: 'radar' }
      ]},
      { section: 'Praticar & Estudo', items: [
        { id: 'questions', label: 'Banco de Questões', icon: 'circle-help' },
        { id: 'redacao', label: 'Oficina de Redação (IA)', icon: 'pen-tool' },
        { id: 'flashcards', label: 'Flashcards', icon: 'layers', badge: dueFlashcardsCount > 0 ? String(dueFlashcardsCount) : '' },
        { id: 'reviews', label: 'Revisões Periódicas', icon: 'calendar-sync', badge: pendingReviewsCount > 0 ? String(pendingReviewsCount) : '' },
        { id: 'mock-exams', label: 'Simulados', icon: 'clipboard-list' },
        { id: 'calculadora', label: 'Calculadora Cebraspe', icon: 'calculator' },
        { id: 'error-notebook', label: 'Caderno de Erros', icon: 'alert-triangle', badge: errorsCount > 0 ? String(errorsCount) : '' }
      ]},
      { section: 'Métricas & Evolução', items: [
        { id: 'progress', label: 'Métricas de Desempenho', icon: 'chart-no-axes-combined' },
        { id: 'notebooks', label: 'Minhas Anotações', icon: 'notebook-pen' },
        { id: 'goals', label: 'Metas & Conquistas', icon: 'trophy' },
        { id: 'ranking', label: 'Ranking da Turma', icon: 'award' }
      ]},
      { section: 'Apoio & Getfy', items: [
        { id: 'materials', label: 'Materiais & PDFs', icon: 'file-text' },
        { id: 'courses', label: 'Aulas & Cursos Getfy', icon: 'book-open' },
        { id: 'tutor', label: 'Tutor IA Contextual', icon: 'bot' },
        { id: 'ai-memory', label: 'Memória da IA', icon: 'brain' },
        { id: 'settings', label: 'Configurações', icon: 'settings' }
      ]}
    ];

    return `
      <aside class="m2-sidebar ${state.sidebarCollapsed ? 'collapsed' : ''}" id="m2-sidebar">
        <div class="m2-brand">
          <span class="m2-brandmark">${icon('graduation-cap', 20)}</span>
          <div class="m2-brand-text">
            <span class="m2-brand-name">Mentoria 2.0</span>
            <span class="m2-brand-badge">Área do Aluno</span>
          </div>
          <button type="button" class="m2-sidebar-collapse-toggle" data-action="toggle-sidebar-collapse" title="${state.sidebarCollapsed ? 'Expandir menu lateral' : 'Encolher menu lateral'}" aria-label="Recolher ou expandir menu lateral">
            ${icon(state.sidebarCollapsed ? 'chevron-right' : 'chevron-left', 14)}
          </button>
        </div>

        ${contests.length > 0 ? `
          <div class="m2-sidebar-contest-box">
            <div class="m2-sidebar-contest-header">
              ${icon('shield-check', 13, 'text-teal')}
              <span class="m2-sidebar-contest-label">Concurso Foco</span>
            </div>
            <select data-action="change-contest" class="m2-sidebar-contest-select" title="Trocar Concurso Foco">
              ${contests.map(c => `<option value="${c.id}" ${String(c.id) === String(contest.id) ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
            </select>
            ${contest.role ? `<span class="m2-sidebar-contest-role">${escapeHtml(contest.role)}</span>` : ''}
          </div>
        ` : ''}

        <div style="display:flex; flex-direction:column; gap:16px;">
          ${studentNav.map(sec => `
            <div class="m2-nav-section">
              <span class="m2-nav-label">${sec.section}</span>
              ${sec.items.map(it => `
                <button type="button" class="m2-nav-item ${state.screen === it.id ? 'active' : ''}" data-nav="${it.id}">
                  <span class="m2-nav-item-left">
                    ${icon(it.icon, 16)}
                    <span>${it.label}</span>
                  </span>
                  ${it.badge ? `<span class="m2-nav-badge">${it.badge}</span>` : ''}
                </button>
              `).join('')}
            </div>
          `).join('')}
        </div>

        <div class="m2-sidebar-footer">
          <div class="m2-sidebar-footer-actions">
            <button type="button" class="m2-sidebar-footer-btn" data-action="toggle-theme" title="Alternar tema claro/escuro">
              ${icon(state.theme === 'dark' ? 'sun' : 'moon', 14)}
              <span class="m2-sidebar-footer-btn-label">${state.theme === 'dark' ? 'Tema Claro' : 'Tema Escuro'}</span>
            </button>
            <button type="button" class="m2-sidebar-footer-btn" data-nav="help" title="Central de Ajuda">
              ${icon('help-circle', 14)}
              <span class="m2-sidebar-footer-btn-label">Ajuda</span>
            </button>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="onboarding" style="width:100%; justify-content:flex-start;">
            ${icon('sparkles', 14)} Reiniciar Onboarding
          </button>
          <div class="m2-user-badge">
            <div class="m2-avatar">${window.M2Data.student.initials || ''}</div>
            <div class="m2-user-info">
              <span class="m2-user-name">${window.M2Data.student.name || 'Aluno'}</span>
              <span class="m2-user-role">${window.M2Data.student.cohort || 'Sem turma'}</span>
            </div>
          </div>
        </div>
      </aside>
    `;
  }

export   function renderFloatingMiniTimer() {
    if (state.mode === 'mentor' || (state.screen && state.screen.startsWith('mentor-'))) {
      return '';
    }

    if (!state.timerVisible) {
      return `
        <div class="m2-floating-timer">
          <button type="button" class="m2-floating-timer-trigger" data-action="toggle-mini-timer" title="Abrir Cronômetro & Pomodoro Flutuante">
            ${icon('timer', 24)}
            ${state.timerRunning ? '<span class="m2-floating-ai-badge" style="background:var(--accent-teal);" title="Cronômetro ativo"></span>' : ''}
          </button>
        </div>
      `;
    }

    const subjects = window.M2Data.subjects || [];
    const currentSub = subjects.find(s => s.id === state.timerSubjectId) || subjects[0] || { name: 'Estudo Geral', id: 'general' };

    // Se estiver minimizado (Pill compacto)
    if (state.timerMinimized) {
      return `
        <div class="m2-floating-timer">
          <div class="m2-mini-timer-pill">
            <div style="display:flex; align-items:center; gap:8px; cursor:pointer;" data-action="expand-mini-timer">
              <span class="m2-pulse-dot ${state.timerRunning ? 'active' : ''}"></span>
              <strong style="font-size:13px; font-variant-numeric:tabular-nums; color:var(--text-main);" id="m2-mini-pill-time">${formatTimer(state.timerSeconds)}</strong>
              <span class="m2-pill ${state.pomodoroPhase === 'focus' ? 'm2-pill-teal' : 'm2-pill-green'}" style="font-size:10px; padding:2px 6px;">
                ${state.timerMode === 'pomodoro' ? (state.pomodoroPhase === 'focus' ? 'Foco Pomodoro' : 'Pausa Curta') : 'Timer Livre'}
              </span>
              <span style="font-size:11px; color:var(--text-muted); max-width:110px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currentSub.name}</span>
            </div>
            <div style="display:flex; align-items:center; gap:4px; border-left:1px solid var(--border-color); padding-left:8px; margin-left:4px;">
              <button type="button" class="m2-btn-icon" data-action="toggle-timer-running" style="width:28px; height:28px;" title="${state.timerRunning ? 'Pausar' : 'Iniciar'}">
                ${icon(state.timerRunning ? 'pause' : 'play', 14)}
              </button>
              <button type="button" class="m2-btn-icon" data-action="expand-mini-timer" style="width:28px; height:28px;" title="Expandir painel">
                ${icon('maximize-2', 14)}
              </button>
              <button type="button" class="m2-btn-icon" data-action="toggle-mini-timer" style="width:28px; height:28px;" title="Ocultar para ícone">
                ${icon('x', 14)}
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // Painel Completo Expandido
    return `
      <div class="m2-floating-timer">
        <div class="m2-mini-timer-card">
          <!-- Topo do Card -->
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:var(--accent-teal);">${icon('timer', 18)}</span>
              <strong style="font-size:14px; color:var(--text-main);">Cronômetro de Estudo</strong>
            </div>
            <div style="display:flex; align-items:center; gap:4px;">
              <button type="button" class="m2-btn-icon" data-action="minimize-mini-timer" style="width:26px; height:26px;" title="Minimizar para barra compacta">
                ${icon('minimize-2', 13)}
              </button>
              <button type="button" class="m2-btn-icon" data-action="toggle-mini-timer" style="width:26px; height:26px;" title="Ocultar cronômetro">
                ${icon('x', 13)}
              </button>
            </div>
          </div>

          <!-- Seletor de Modo: Pomodoro vs Cronômetro Livre -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; background:var(--bg-card); padding:4px; border-radius:var(--radius-md);">
            <button type="button" class="m2-btn ${state.timerMode === 'pomodoro' ? 'm2-btn-primary' : 'm2-btn-quiet'} m2-btn-sm" data-action="set-timer-mode" data-mode="pomodoro" style="font-size:11px; padding:6px;">
              ${icon('flame', 12)} Pomodoro (25/5)
            </button>
            <button type="button" class="m2-btn ${state.timerMode === 'stopwatch' ? 'm2-btn-primary' : 'm2-btn-quiet'} m2-btn-sm" data-action="set-timer-mode" data-mode="stopwatch" style="font-size:11px; padding:6px;">
              ${icon('clock', 12)} Cronômetro Livre
            </button>
          </div>

          <!-- Disciplina Ativa da Sessão -->
          <div>
            <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:4px;">Disciplina Sendo Estudada:</label>
            <select data-action="change-timer-subject" style="width:100%; padding:6px 10px; font-size:12px; font-weight:600; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); cursor:pointer;">
              ${subjects.length > 0 ? subjects.map(s => `
                <option value="${s.id}" ${s.id === state.timerSubjectId ? 'selected' : ''}>${s.name}</option>
              `).join('') : '<option value="general">Estudo Geral</option>'}
            </select>
          </div>

          <!-- Display Principal do Tempo -->
          <div style="text-align:center; padding:12px 0 6px;">
            <div class="m2-timer-display">${formatTimer(state.timerSeconds)}</div>
            <div style="display:flex; justify-content:center; align-items:center; gap:6px; margin-top:6px;">
              <span class="m2-pulse-dot ${state.timerRunning ? 'active' : ''}"></span>
              <span style="font-size:11px; color:var(--text-muted);">
                ${state.timerMode === 'pomodoro' 
                  ? (state.pomodoroPhase === 'focus' ? `Ciclo ${state.pomodoroCycle} de 4 · Bloco de Foco` : 'Pausa Curta de Descanso') 
                  : (state.timerRunning ? 'Contagem livre ativa' : 'Pausado')}
              </span>
            </div>
          </div>

          <!-- Controles de Play / Pause / Reset -->
          <div style="display:flex; gap:8px; justify-content:center;">
            <button type="button" class="m2-btn ${state.timerRunning ? 'm2-btn-secondary' : 'm2-btn-primary'}" data-action="toggle-timer-running" style="flex:1;">
              ${icon(state.timerRunning ? 'pause' : 'play', 16)} ${state.timerRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="reset-timer" title="Reiniciar contagem">
              ${icon('rotate-ccw', 16)}
            </button>
            ${state.timerMode === 'pomodoro' ? `
              <button type="button" class="m2-btn m2-btn-secondary" data-action="add-timer-5min" title="Adicionar 5 minutos ao ciclo">
                +5m
              </button>
            ` : ''}
          </div>

          <!-- Botão de Concluir Estudo e Computar Estatísticas -->
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="finish-timer-session" style="width:100%; justify-content:center; border-color:var(--accent-teal); color:var(--accent-teal);">
            ${icon('check-circle', 14)} Concluir Sessão e Gravar Horas
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza o Balão de Chat de IA Flutuante (Tutor IA 24h)
   */
  export function renderFloatingAiChat() {
    if (state.mode === 'mentor' || (state.screen && state.screen.startsWith('mentor-'))) {
      return '';
    }

    const messages = state.tutorMessages || [];
    const activeContest = (window.M2Data.contests || []).find(c => c.id === state.contestId) || (window.M2Data.contests || [])[0];
    const contestName = activeContest ? activeContest.name : 'Concursos';

    if (!state.floatingAiChatOpen) {
      return `
        <div class="m2-floating-ai-wrap">
          <button type="button" class="m2-floating-ai-trigger" data-action="toggle-floating-ai-chat" title="Tutor IA · Tire dúvidas pedagógicas 24h">
            ${icon('bot', 24)}
            <span class="m2-floating-ai-badge" title="Tutor IA Online"></span>
          </button>
        </div>
      `;
    }

    return `
      <div class="m2-floating-ai-wrap">
        <div class="m2-floating-ai-card">
          <!-- Cabeçalho do Chat -->
          <div class="m2-floating-ai-header">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg, var(--accent-teal), #068289); color:#fff; display:grid; place-items:center; position:relative;">
                ${icon('bot', 18)}
                <span class="m2-floating-ai-badge"></span>
              </div>
              <div>
                <strong style="font-size:14px; color:var(--text-main); display:block;">Tutor Pedagógico IA</strong>
                <span style="font-size:11px; color:var(--accent-teal); font-weight:600;">Especialista em ${contestName} · Online</span>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:4px;">
              <button type="button" class="m2-btn-icon" data-action="clear-floating-chat" title="Limpar conversa">
                ${icon('rotate-ccw', 14)}
              </button>
              <button type="button" class="m2-btn-icon" data-action="toggle-floating-ai-chat" title="Fechar chat flutuante">
                ${icon('x', 14)}
              </button>
            </div>
          </div>

          <!-- Sugestões Rápidas (Chips de Pergunta) -->
          <div class="m2-floating-ai-chips">
            <button type="button" class="m2-floating-ai-chip" data-action="send-floating-quick-prompt" data-prompt="Quais são os 4 casos de invasão de domicílio no Art. 5º da CF?">
              ⚖️ Invasão de Domicílio
            </button>
            <button type="button" class="m2-floating-ai-chip" data-action="send-floating-quick-prompt" data-prompt="Me dê um mnemônico para os cargos privativos de brasileiro nato.">
              💡 Mnemônico MP3.COM
            </button>
            <button type="button" class="m2-floating-ai-chip" data-action="send-floating-quick-prompt" data-prompt="Como planejar minha rotina de reta final para a prova?">
              🎯 Reta Final de Estudos
            </button>
            <button type="button" class="m2-floating-ai-chip" data-action="send-floating-quick-prompt" data-prompt="Quando ocorre crase com pronomes de tratamento?">
              📝 Crase & Tratamento
            </button>
          </div>

          <!-- Mensagens do Chat -->
          <div class="m2-floating-ai-body" id="m2-floating-chat-messages">
            ${messages.map(msg => `
              <div style="display:flex; flex-direction:column; align-self:${msg.sender === 'user' ? 'flex-end' : 'flex-start'}; max-width:85%; gap:4px;">
                <div style="display:flex; align-items:center; gap:6px; font-size:10px; color:var(--text-muted); align-self:${msg.sender === 'user' ? 'flex-end' : 'flex-start'};">
                  <span>${msg.sender === 'user' ? (window.M2Data.student?.name ? `Você (${window.M2Data.student.name.split(' ')[0]})` : 'Você') : 'Tutor IA'}</span>
                  <span>·</span>
                  <span>${msg.time || 'Agora'}</span>
                </div>
                <div style="padding:10px 14px; border-radius:14px; font-size:12px; line-height:1.5; ${msg.sender === 'user' ? 'background:var(--accent-teal); color:#fff; border-bottom-right-radius:2px;' : 'background:var(--bg-card); color:var(--text-main); border:1px solid var(--border-color); border-bottom-left-radius:2px;'}">
                  ${plainTextWithBreaks(msg.text)}
                </div>
                ${msg.sources ? `
                  <div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:2px;">
                    ${msg.sources.map(src => `<span class="m2-pill m2-pill-teal" style="font-size:9px; padding:1px 6px;">${src}</span>`).join('')}
                  </div>
                ` : ''}
            `).join('')}
            ${state.floatingAiTyping ? `
              <div style="display:flex; align-items:center; gap:6px; padding:10px 14px; background:var(--bg-card); border:1px solid var(--border-color); border-radius:14px; border-bottom-left-radius:2px; max-width:120px; align-self:flex-start;">
                <span class="m2-pulse-dot active" style="width:6px; height:6px;"></span>
                <span class="m2-pulse-dot active" style="width:6px; height:6px; animation-delay:0.2s;"></span>
                <span class="m2-pulse-dot active" style="width:6px; height:6px; animation-delay:0.4s;"></span>
              </div>
            ` : ''}
          </div>

          <!-- Formulário de Envio -->
          <form class="m2-floating-ai-footer" onsubmit="event.preventDefault();" data-action="submit-floating-ai-form">
            <input type="text" id="m2-floating-ai-input" class="m2-floating-ai-input" placeholder="Tire uma dúvida com o Tutor IA..." autocomplete="off">
            <button type="button" class="m2-btn m2-btn-primary" data-action="send-floating-ai-message" style="padding:9px 12px;">
              ${icon('send', 15)}
            </button>
          </form>
        </div>

        <!-- Botão circular minimizador -->
        <button type="button" class="m2-floating-ai-trigger" data-action="toggle-floating-ai-chat" title="Ocultar chat do Tutor">
          ${icon('x', 20)}
        </button>
      </div>
    `;
  }

  /**
   * Componente de Disponibilização / Público-Alvo (Todos, Concurso, Edital, Aluno, Produto)
   */
  export function renderAudienceSelector(targets = [], title = 'Disponibilização / Público-Alvo') {
    const currentTargets = (targets && targets.length > 0) ? targets : [{ type: 'global', id: null }];
    const hasGlobal = currentTargets.some(t => (t.type || t.target_type) === 'global');
    const contests = window.M2Data.contests || [];    const edicts = window.M2Data.edicts || [];
    const students = window.M2Data.mentorStudents || window.M2Data.students || [];
    const products = (window.M2Data.products || []).filter(p => p.mentoria_enabled !== false);

    return `
      <div class="m2-audience-selector-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div>
            <span style="font-size:12px; font-weight:700; color:var(--text-main); display:block;">${escapeHtml(title)}</span>
            <span style="font-size:11px; color:var(--text-muted);">Defina quais alunos terão acesso a este conteúdo na plataforma</span>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="add-audience-target" ${hasGlobal ? 'disabled title="Remova o público global para adicionar destinos específicos"' : ''} style="display:flex; align-items:center; gap:4px;">
            ${icon('plus', 13)} Adicionar Destino
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:8px;">
          ${currentTargets.map((target, idx) => {
            const type = target.type || target.target_type || 'global';
            const targetId = String(target.id || target.target_id || '');

            return `
              <div class="m2-target-row">
                <select class="m2-field-input" data-action="change-audience-target-type" data-index="${idx}" style="padding:7px 10px; font-size:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-weight:600;">
                  <option value="global" ${type === 'global' ? 'selected' : ''}>Todos os Alunos (Global)</option>
                  <option value="contest" ${type === 'contest' ? 'selected' : ''}>Concurso Específico</option>
                  <option value="edict" ${type === 'edict' ? 'selected' : ''}>Edital Específico</option>
                  <option value="student" ${type === 'student' ? 'selected' : ''}>Aluno Específico</option>
                  <option value="product" ${type === 'product' ? 'selected' : ''}>Produto Getfy</option>
                </select>

                <div>
                  ${type === 'global' ? `
                    <div style="font-size:12px; color:var(--text-muted); display:flex; align-items:center; gap:6px; padding:6px 8px;">
                      ${icon('globe', 14, 'text-teal')}
                      <span>Disponível para todos os alunos cadastrados na mentoria.</span>
                    </div>
                  ` : type === 'contest' ? `
                    <select class="m2-field-input" data-action="change-audience-target-id" data-index="${idx}" style="width:100%; padding:7px 10px; font-size:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                      <option value="">Selecione o concurso...</option>
                      ${contests.map(c => `<option value="${c.id}" ${targetId === String(c.id) ? 'selected' : ''}>${escapeHtml(c.name || 'Concurso #' + c.id)} ${c.organization ? `(${escapeHtml(c.organization)})` : ''}</option>`).join('')}
                    </select>
                  ` : type === 'edict' ? `
                    <select class="m2-field-input" data-action="change-audience-target-id" data-index="${idx}" style="width:100%; padding:7px 10px; font-size:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                      <option value="">Selecione o edital...</option>
                      ${edicts.map(e => `<option value="${e.id}" ${targetId === String(e.id) ? 'selected' : ''}>${escapeHtml((e.contest_name || 'Concurso') + ' · ' + (e.name || 'Edital #' + e.id))}</option>`).join('')}
                    </select>
                  ` : type === 'student' ? `
                    <select class="m2-field-input" data-action="change-audience-target-id" data-index="${idx}" style="width:100%; padding:7px 10px; font-size:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                      <option value="">Selecione o aluno...</option>
                      ${students.map(s => `<option value="${s.id}" ${targetId === String(s.id) ? 'selected' : ''}>${escapeHtml(s.name || 'Aluno #' + s.id)} ${s.email ? `(${escapeHtml(s.email)})` : ''}</option>`).join('')}
                    </select>
                  ` : type === 'product' ? `
                    <select class="m2-field-input" data-action="change-audience-target-id" data-index="${idx}" style="width:100%; padding:7px 10px; font-size:12px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                      <option value="">Selecione o produto...</option>
                      ${products.map(p => `<option value="${p.id}" ${targetId === String(p.id) ? 'selected' : ''}>${escapeHtml(p.name || 'Produto #' + p.id)}</option>`).join('')}
                    </select>
                  ` : ''}
                </div>

                <button type="button" class="m2-btn-icon" data-action="remove-audience-target" data-index="${idx}" style="color:var(--accent-rose);" title="Remover este destino">
                  ${icon('x', 14)}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Helper para renderizar crachá/badge visual de público-alvo
   */
  export function renderAudienceBadge(targets = []) {
    if (!targets || targets.length === 0 || targets.some(t => (t.type || t.target_type) === 'global')) {
      return `<span class="m2-pill m2-pill-teal" style="font-size:10px; display:inline-flex; align-items:center; gap:4px;">${icon('globe', 11)} Global</span>`;
    }
    const badges = targets.map(t => {
      const type = t.type || t.target_type;
      const id = String(t.id || t.target_id || '');
      if (type === 'contest') {
        const c = (window.M2Data.contests || []).find(x => String(x.id) === id);
        return `<span class="m2-pill m2-pill-blue" style="font-size:10px; display:inline-flex; align-items:center; gap:4px;">${icon('shield', 11)} ${escapeHtml(c?.name ? (c.name.length > 18 ? c.name.slice(0, 16) + '...' : c.name) : 'Concurso #' + id)}</span>`;
      }
      if (type === 'edict') {
        const e = (window.M2Data.edicts || []).find(x => String(x.id) === id);
        return `<span class="m2-pill m2-pill-purple" style="font-size:10px; display:inline-flex; align-items:center; gap:4px;">${icon('file-text', 11)} ${escapeHtml(e?.name ? (e.name.length > 18 ? e.name.slice(0, 16) + '...' : e.name) : 'Edital #' + id)}</span>`;
      }
      if (type === 'student') {
        const s = (window.M2Data.students || window.M2Data.mentorStudents || []).find(x => String(x.id) === id);
        return `<span class="m2-pill m2-pill-amber" style="font-size:10px; display:inline-flex; align-items:center; gap:4px;">${icon('user', 11)} ${escapeHtml(s?.name ? (s.name.split(' ')[0]) : 'Aluno #' + id)}</span>`;
      }
      if (type === 'product') {
        const p = (window.M2Data.products || []).find(x => String(x.id) === id);
        return `<span class="m2-pill m2-pill-indigo" style="font-size:10px; display:inline-flex; align-items:center; gap:4px;">${icon('award', 11)} ${escapeHtml(p?.name ? (p.name.length > 18 ? p.name.slice(0, 16) + '...' : p.name) : 'Prod #' + id)}</span>`;
      }
      return '';
    }).filter(Boolean);

    return badges.length > 0 ? badges.join(' ') : `<span class="m2-pill m2-pill-teal" style="font-size:10px;">Global</span>`;
  }

  /**
   * Renderização de Modais Interativos (Questões Manuais e Simulado Manual)
   */
  export function renderModals() {
    if (!state.modal) return '';
    if (state.modal === 'notifications') {
      const notifications = state.notifications || [];
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:640px;"><div class="m2-modal-header"><div><h3>Central de notificacoes</h3><p>Avisos pedagogicos, metas e retornos do mentor.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button></div><div style="display:flex;justify-content:flex-end;margin:0 0 10px;"><button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="read-all-notifications">Marcar todas como lidas</button></div><div style="display:flex;flex-direction:column;gap:8px;max-height:55vh;overflow:auto;">${notifications.length ? notifications.map(notification => `<button type="button" data-action="read-notification" data-id="${escapeHtml(notification.id)}" style="text-align:left;padding:13px;border:1px solid var(--border-color);border-radius:10px;background:${notification.read_at ? 'var(--bg-card)' : 'var(--accent-teal-soft)'};color:var(--text-main);cursor:pointer;"><strong style="display:block;margin-bottom:4px;">${escapeHtml(notification.title || 'Aviso')}</strong><span style="display:block;font-size:13px;color:var(--text-muted);">${escapeHtml(notification.message || '')}</span><small style="display:block;margin-top:7px;color:var(--text-muted);">${escapeHtml(notification.created_at || '')}</small></button>`).join('') : '<p class="m2-empty-inline">Voce nao tem notificacoes.</p>'}</div></div></div>`;
    }
    if (state.modal === 'official-ranking') {
      const ranking = state.officialRanking || [];
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:680px;"><div class="m2-modal-header"><div><h3>Ranking: ${escapeHtml(state.officialRankingTitle || 'Simulado oficial')}</h3><p>Resultados de alunos que optaram por aparecer no ranking.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button></div><div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow:auto;">${ranking.length ? ranking.map(row => `<div style="display:grid;grid-template-columns:42px 1fr auto;gap:10px;align-items:center;padding:12px;border:1px solid var(--border-color);border-radius:10px;"><strong style="color:var(--accent-teal);">${Number(row.position)}?</strong><span>${escapeHtml(row.name || 'Aluno')}</span><span style="font-size:13px;color:var(--text-muted);">${Number(row.percentage || 0)}% ? ${Number(row.time_minutes || 0)} min</span></div>`).join('') : '<p class="m2-empty-inline">Ainda n?o h? resultados p?blicos para este simulado.</p>'}</div><div class="m2-modal-actions"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Fechar</button></div></div></div>`;
    }
    if (state.modal === 'official-mock') {
      const cohorts = window.M2Data.cohorts || [];
      const questions = state.officialMockQuestions || [];
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:720px;"><div class="m2-modal-header"><div><h3>Publicar simulado oficial</h3><p>As mesmas questoes serao disponibilizadas para toda a turma.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button></div><div style="display:grid;gap:12px;"><label class="m2-modal-field">Titulo<input id="m2-official-mock-name" maxlength="255" required></label><label class="m2-modal-field">Turma<select id="m2-official-mock-cohort">${cohorts.map(cohort => `<option value="${escapeHtml(cohort.id)}">${escapeHtml(cohort.name)}</option>`).join('')}</select></label><div class="m2-completion-grid"><label class="m2-modal-field">Inicio<input id="m2-official-mock-from" type="datetime-local"></label><label class="m2-modal-field">Encerramento<input id="m2-official-mock-until" type="datetime-local"></label><label class="m2-modal-field">Tempo (min)<input id="m2-official-mock-time" type="number" min="1" max="720" value="120"></label><label class="m2-modal-field">Tentativas<input id="m2-official-mock-attempts" type="number" min="1" max="5" value="1"></label></div><div><strong>Questoes publicadas</strong><div style="max-height:220px;overflow:auto;margin-top:8px;display:grid;gap:6px;">${questions.map(question => `<label style="display:flex;gap:8px;padding:8px;border:1px solid var(--border-color);border-radius:8px;"><input type="checkbox" name="m2-official-question" value="${escapeHtml(question.id)}"><span>${escapeHtml(question.subject || 'Geral')} - ${escapeHtml(question.prompt || '')}</span></label>`).join('') || '<p class="m2-empty-inline">Carregando questoes publicadas...</p>'}</div></div></div><div class="m2-modal-actions"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button><button type="button" class="m2-btn m2-btn-primary" data-action="publish-official-mock">Publicar para a turma</button></div></div></div>`;
    }
    const contests = window.M2Data.contests || [];
    const calendarItems = state.calendarRangeKey ? (state.calendarItems || []) : (window.M2Data.scheduleItems || []);
    const subjectFor = id => (window.M2Data.subjects || []).find(subject => String(subject.id) === String(id))?.name || 'Estudo dirigido';
    const topicFor = id => (window.M2Data.topics || []).find(topic => String(topic.id) === String(id))?.name || 'Conteúdo do edital';

    if (state.modal === 'schedule-completion') {
      const completion = state.scheduleCompletion;
      if (!completion) return '';
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:620px;"><div class="m2-modal-header"><div><h3>Concluir atividade</h3><p>Registre o que foi estudado para atualizar seu desempenho e histórico.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button></div><div class="m2-completion-summary"><strong>${escapeHtml(completion.subjectName)}</strong><span>${escapeHtml(completion.topicName)} · ${completion.durationMinutes} min planejados</span></div><div class="m2-completion-grid"><label class="m2-modal-field">Minutos estudados<input id="m2-completion-minutes" type="number" min="1" max="1440" value="${completion.durationMinutes}"></label><label class="m2-modal-field">Questões respondidas<input id="m2-completion-solved" type="number" min="0" value="0"></label><label class="m2-modal-field">Acertos<input id="m2-completion-correct" type="number" min="0" value="0"></label></div><label class="m2-modal-field">Observações<textarea id="m2-completion-notes" maxlength="2000" placeholder="Dificuldades, pontos para revisar ou próximos passos."></textarea></label><div class="m2-modal-actions"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button><button type="button" class="m2-btn m2-btn-primary" data-action="submit-schedule-completion">${icon('check', 16)} Concluir assunto</button></div></div></div>`;
    }

    if (state.modal === 'calendar-day') {
      const day = state.calendarDay || '';
      const entries = calendarItems.filter(item => day === 'cycle' ? !item.planned_date : String(item.planned_date || '').slice(0, 10) === day);
      const reviewById = Object.fromEntries((window.M2Data.reviews || []).map(review => [String(review.id), review]));
      const title = day === 'cycle' ? 'Fila do ciclo inteligente' : (day ? new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(`${day}T12:00:00`)) : 'Atividades');
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:700px;"><div class="m2-modal-header"><div><h3>${escapeHtml(title)}</h3><p>Execute ou atualize as atividades planejadas para este período.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button></div><div class="m2-calendar-day-list">${entries.length ? entries.map(item => { const review = reviewById[String(item.scheduled_review_id)] || null; const reviewItem = Boolean(item.scheduled_review_id); const completed = item.status === 'concluido' || Boolean(review?.completed); return `<article class="m2-calendar-day-item ${reviewItem ? 'review' : ''}"><div class="m2-calendar-day-item__main"><span class="m2-pill ${reviewItem ? 'm2-pill-violet' : completed ? 'm2-pill-green' : 'm2-pill-teal'}">${reviewItem ? 'Revisão' : completed ? 'Concluído' : 'Estudo'}</span><strong>${escapeHtml(subjectFor(item.subject_id))}</strong><small>${escapeHtml(topicFor(item.topic_id))} · ${Number(item.duration_minutes || 60)} min${item.cycle_position ? ` · ciclo ${item.cycle_position}` : ''}</small></div><div class="m2-calendar-day-item__actions">${reviewItem ? (completed ? '<span class="m2-pill m2-pill-green">Concluída</span>' : `<button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="start-schedule-item" data-subject-id="${item.subject_id || ''}">${icon('timer', 14)} Timer</button><button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="complete-calendar-review" data-review-id="${item.scheduled_review_id}">Revisar</button><button type="button" class="m2-btn m2-btn-quiet m2-btn-sm" data-action="postpone-calendar-review" data-review-id="${item.scheduled_review_id}">Adiar</button>`) : `<button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="start-schedule-item" data-subject-id="${item.subject_id || ''}">${icon('timer', 14)} Timer</button><button type="button" class="m2-btn ${completed ? 'm2-btn-secondary' : 'm2-btn-primary'} m2-btn-sm" data-action="${completed ? 'reopen-schedule-item' : 'open-schedule-completion'}" data-item-id="${item.id}">${completed ? 'Reabrir' : 'Concluir'}</button>`}</div></article>`; }).join('') : '<p class="m2-empty-inline">Nenhuma atividade foi encontrada neste dia.</p>'}</div><div style="display:flex; justify-content:flex-end;"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Fechar</button></div></div></div>`;
    }

    if (state.modal === 'replan-schedule') {
      const pending = calendarItems.filter(item => item.status === 'pendente' && !item.scheduled_review_id).length;
      const reviews = calendarItems.filter(item => item.status === 'pendente' && item.scheduled_review_id).length;
      return `<div class="m2-modal-overlay" data-action="close-modal-backdrop"><div class="m2-modal-content" style="max-width:560px;"><div class="m2-modal-header"><div><h3>Replanejar pendências</h3><p>O motor redistribui somente estudos pendentes. Concluídos e revisões permanecem preservados.</p></div><button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button></div><div class="m2-replan-preview"><span><strong>${pending}</strong> estudos pendentes na janela</span><span><strong>${reviews}</strong> revisões reservadas</span></div><label class="m2-modal-field">Replanejar a partir de<input id="m2-replan-from-date" type="date" value="${escapeHtml(state.replanFromDate || new Date().toISOString().slice(0, 10))}"></label>${state.adaptiveProposal ? `<div class="m2-card" style="margin:12px 0;padding:12px;"><strong>Proposta adaptativa</strong><p style="margin:6px 0;color:var(--text-muted);font-size:12px;">Prioridades calculadas por desempenho, atrasos, revisoes vencidas e prazo da prova.</p><div style="display:flex;flex-direction:column;gap:6px;">${(state.adaptiveProposal.subjects || []).slice(0, 5).map(subject => `<div style="display:flex;justify-content:space-between;gap:8px;font-size:12px;"><span>${escapeHtml(subject.name)}</span><strong>${subject.current_priority} para ${subject.proposed_priority}</strong></div>`).join('') || '<span style="font-size:12px;color:var(--text-muted);">Sem ajustes necessarios.</span>'}</div></div>` : ''}<p class="m2-modal-note">Se a capacidade não comportar todas as pendências, o sistema informa o motivo sem alterar parcialmente o plano.</p><button type="button" class="m2-btn m2-btn-secondary" data-action="preview-adaptive-plan">Analisar plano</button><div style="display:flex; justify-content:flex-end; gap:8px;"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button><button type="button" class="m2-btn m2-btn-primary" data-action="confirm-replan-schedule">${icon('calendar-sync', 16)} Replanejar agora</button>${state.adaptiveProposal ? `<button type="button" class="m2-btn m2-btn-primary" data-action="apply-adaptive-plan">Aplicar proposta</button>` : ''}</div></div></div>`;
    }


    // Modal 1: Registro de Questões Manuais
    if (state.modal === 'manual-questions') {
      const qData = state.manualQuestionsData;
      const subjects = window.M2Data.subjects;
      const calcPct = qData.totalSolved > 0 ? Math.round((qData.totalCorrect / qData.totalSolved) * 100) : 0;

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:540px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('circle-help', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main);">Registrar Questões Feitas Fora</h3>
                  <span style="font-size:11px; color:var(--text-muted);">Computar acertos de livros, apostilas ou plataformas externas (Tec/QConcursos)</span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px; margin-top:4px;">
              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Disciplina:</label>
                <select id="m2-input-mq-subject" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:600;">
                  ${subjects.length ? subjects.map(s => `<option value="${s.id}" ${s.id === qData.subjectId ? 'selected' : ''}>${s.name}</option>`).join('') : '<option value="">Nenhuma disciplina cadastrada</option>'}
                </select>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Total de Questões Feitas:</label>
                  <input type="number" id="m2-input-mq-total" min="1" max="1000" value="${qData.totalSolved}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:700;">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Total de Acertos:</label>
                  <input type="number" id="m2-input-mq-correct" min="0" max="1000" value="${qData.totalCorrect}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:700;">
                </div>
              </div>

              <!-- Cartão de Aproveitamento Calculado -->
              <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; color:var(--text-muted);">Aproveitamento Calculado:</span>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:16px; color:var(--accent-green);" id="m2-manual-q-calc-pct">${calcPct}% de acerto</strong>
                  <span class="m2-pill m2-pill-teal">XP confirmado ao registrar</span>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Tempo Gasto (minutos):</label>
                  <input type="number" id="m2-input-mq-time" min="1" max="600" value="${qData.minutesSpent}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Data:</label>
                  <input type="date" id="m2-input-mq-date" value="${qData.date}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                </div>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Fonte / Material (Opcional):</label>
                <input type="text" id="m2-input-mq-source" value="${qData.source}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="save-manual-questions">
                  ${icon('check', 16)} Salvar nas Minhas Estatísticas
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal 2: Registro de Simulado Manual
    if (state.modal === 'manual-mock') {
      const mData = state.manualMockData;
      const calcPct = mData.totalQuestions > 0 ? ((mData.totalCorrect / mData.totalQuestions) * 100).toFixed(1) : '0';

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:620px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-amber-soft); color:var(--accent-amber); display:grid; place-items:center;">
                  ${icon('clipboard-list', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main);">Lançar Simulado Feito Fora</h3>
                  <span style="font-size:11px; color:var(--text-muted);">Registre a nota de simulados impressos, presenciais ou de cursinhos</span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px; margin-top:4px;">
              <div style="display:grid; grid-template-columns:2fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Título do Simulado:</label>
                  <input type="text" id="m2-input-mm-title" value="${mData.title}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:600;">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Banca Estilo:</label>
                  <input type="text" id="m2-input-mm-board" value="${mData.board}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                </div>
              </div>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Total de Questões:</label>
                  <input type="number" id="m2-input-mm-total" min="1" max="200" value="${mData.totalQuestions}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:700;">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Acertos Totais:</label>
                  <input type="number" id="m2-input-mm-correct" min="0" max="200" value="${mData.totalCorrect}" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:700;">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Tempo de Prova:</label>
                  <input type="text" id="m2-input-mm-time" value="3h 15m" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                </div>
              </div>

              <!-- Aproveitamento Calculado -->
              <div style="background:var(--bg-card); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; color:var(--text-muted);">Desempenho Geral no Simulado:</span>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="font-size:17px; color:var(--accent-green);">${calcPct}% de aproveitamento</strong>
                  <span class="m2-pill m2-pill-teal">XP confirmado na entrega</span>
                </div>
              </div>

              <!-- Detalhamento por Disciplina -->
              <div>
                <label style="font-size:12px; font-weight:700; color:var(--text-main); display:block; margin-bottom:6px;">Detalhamento por Disciplina (Opcional):</label>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                  ${mData.breakdown.map((b, idx) => `
                    <div style="background:var(--bg-card); padding:8px 10px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; font-size:12px;">
                      <span>${b.name}:</span>
                      <strong style="color:var(--accent-teal);">${b.correct} / ${b.total}</strong>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="save-manual-mock">
                  ${icon('check', 16)} Salvar Simulado no Histórico
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal 3: Reportar Problema em Questão (Item 18)
    if (state.modal === 'report-question') {
      const qId = state.reportingQuestionId || 'q-const-1';
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:540px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-rose-soft); color:var(--accent-rose); display:grid; place-items:center;">
                  ${icon('flag', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main);">Reportar Questão #${qId}</h3>
                  <span style="font-size:11px; color:var(--text-muted);">Sinalize inconsistências para a fila de moderação da mentoria</span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px; margin-top:12px;">
              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Motivo Principal:</label>
                <select id="m2-report-reason" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:600;">
                  <option value="Gabarito Divergente">Gabarito Oficial Divergente / Incorreto</option>
                  <option value="Enunciado Desatualizado">Legislação ou Jurisprudência Revogada / Desatualizada</option>
                  <option value="Erro Material">Erro de Digitação / Alternativas Duplicadas</option>
                  <option value="Fora do Edital">Conteúdo não previsto no Edital Verticalizado</option>
                  <option value="Outro">Outro Motivo</option>
                </select>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Explicação ou Fundamentação Legal:</label>
                <textarea id="m2-report-details" rows="4" placeholder="Descreva brevemente por que considera que a questão possui erro (ex: 'A súmula vinculante nº X modificou esse entendimento em 2024')..." style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;"></textarea>
              </div>

              <div style="background:var(--accent-amber-soft); border:1px solid var(--accent-amber); padding:10px 12px; border-radius:var(--radius-md); font-size:12px; color:var(--accent-amber); display:flex; gap:8px; align-items:flex-start;">
                <span style="flex-shrink:0;">${icon('info', 16)}</span>
                <span>Seu reporte será avaliado diretamente pela equipe pedagógica da mentoria e você receberá uma notificação assim que for analisado.</span>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:6px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-report-question" style="background:var(--accent-rose); border-color:var(--accent-rose);">
                  ${icon('flag', 16)} Enviar para Moderação
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    // Modal 4: Importação por IA / JSON (Edital, Questões, Flashcards)
    if (state.modal === 'json-import') {
      const mode = state.jsonImportMode || 'questions';
      const promptText = (window.M2Data.prompts && window.M2Data.prompts[mode]) || '';
      const modeTitles = {
        questions: 'Questões Inéditas',
        flashcards: 'Baralho de Flashcards',
        catalog: 'Edital / Concurso Completo'
      };

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:780px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <div style="width:36px; height:36px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('sparkles', 20)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main);">Importar por IA Externa / JSON</h3>
                  <span style="font-size:11px; color:var(--text-muted);">Gere dados no ChatGPT, Claude, Gemini ou DeepSeek e importe para a Mentoria 2.0</span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <!-- Seleção do Modo de Importação -->
            <div style="display:flex; gap:8px; margin-top:14px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <button type="button" class="m2-btn ${mode === 'questions' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-json-import-mode" data-mode="questions">
                ${icon('circle-help', 14)} 1. Questões
              </button>
              <button type="button" class="m2-btn ${mode === 'flashcards' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-json-import-mode" data-mode="flashcards">
                ${icon('rotate-3d', 14)} 2. Flashcards
              </button>
              <button type="button" class="m2-btn ${mode === 'catalog' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-json-import-mode" data-mode="catalog">
                ${icon('file-text', 14)} 3. Edital / Concurso
              </button>
            </div>

            <!-- Passo 1: Copiar Prompt -->
            <div style="margin-top:14px; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div>
                  <strong style="font-size:13px; color:var(--text-main); display:block;">1. Copie o Prompt Homologado para a IA</strong>
                  <span style="font-size:11px; color:var(--text-muted);">Cole no ChatGPT, Claude ou Gemini junto com o texto da lei ou PDF</span>
                </div>
                <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="copy-import-prompt" data-mode="${mode}">
                  ${icon('copy', 14)} Copiar Prompt para a IA
                </button>
              </div>

              <details style="margin-top:10px; font-size:12px;">
                <summary style="cursor:pointer; color:var(--accent-teal); font-weight:600;">Ver texto completo do prompt (${modeTitles[mode]})</summary>
                <pre style="margin-top:8px; max-height:160px; overflow-y:auto; background:var(--bg-app); padding:10px; border-radius:var(--radius-sm); font-size:11px; color:var(--text-muted); white-space:pre-wrap; border:1px solid var(--border-color);">${promptText}</pre>
              </details>
            </div>

            <!-- Passo 2: Colar JSON com botão de Exemplo -->
            <div style="margin-top:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <label style="font-size:12px; font-weight:700; color:var(--text-main);">2. Cole o JSON retornado pela IA:</label>
                <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="fill-json-example" title="Preenche o campo com um JSON válido para testar imediatamente">
                  ${icon('sparkles', 13)} Carregar Exemplo Válido
                </button>
              </div>
              <textarea id="m2-json-import-textarea" rows="8" placeholder="Cole aqui o código JSON puro { ... } gerado pela IA..." style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-family:var(--font-mono, monospace); font-size:12px; resize:vertical;"></textarea>
            </div>

            <!-- Passo 3: Destino -->
            ${mode === 'catalog' ? `
              <div style="margin-top:14px; background:var(--bg-card); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <label style="font-size:12px; font-weight:700; color:var(--text-main); display:block; margin-bottom:8px;">3. Destino do Edital:</label>
                <div style="display:flex; gap:16px; margin-bottom:12px;">
                  <label style="font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer; color:var(--text-main);">
                    <input type="radio" name="m2-import-contest-dest" value="new" checked data-action="toggle-import-dest">
                    <strong>Criar Novo Concurso</strong>
                  </label>
                  <label style="font-size:12px; display:flex; align-items:center; gap:6px; cursor:pointer; color:var(--text-main);">
                    <input type="radio" name="m2-import-contest-dest" value="existing" data-action="toggle-import-dest">
                    <span>Vincular a Concurso Existente</span>
                  </label>
                </div>

                <div id="m2-import-new-contest-fields" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                  <div style="grid-column: 1 / -1;">
                    <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:2px;">Nome do Novo Concurso (ou deixe em branco se informado no JSON):</label>
                    <input type="text" id="m2-import-contest-name" class="m2-field-input" placeholder="Ex: Tribunal de Justiça SP - Escrevente Técnico" style="width:100%; padding:7px 10px; font-size:12px;">
                  </div>
                  <div>
                    <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:2px;">Banca Examinadora:</label>
                    <input type="text" id="m2-import-contest-board" class="m2-field-input" placeholder="Ex: Vunesp, Cebraspe, FGV" style="width:100%; padding:7px 10px; font-size:12px;">
                  </div>
                  <div>
                    <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:2px;">Cargo / Função:</label>
                    <input type="text" id="m2-import-contest-role" class="m2-field-input" placeholder="Ex: Escrevente Técnico" style="width:100%; padding:7px 10px; font-size:12px;">
                  </div>
                </div>

                <div id="m2-import-existing-contest-field" style="display:none; margin-top:8px;">
                  <label style="font-size:11px; color:var(--text-muted); display:block; margin-bottom:2px;">Selecione o Concurso Existente:</label>
                  <select id="m2-import-contest-select" class="m2-field-input" style="width:100%; padding:7px 10px; font-size:12px;">
                    ${contests.map(c => `<option value="${c.id}" ${c.id === state.contestId ? 'selected' : ''}>${escapeHtml(c.name)}</option>`).join('')}
                  </select>
                </div>
              </div>
            ` : `
              ${renderAudienceSelector(state.currentTargets, '3. Disponibilização / Público-Alvo dos Itens Importados')}
            `}

            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:16px;">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
              <button type="button" class="m2-btn m2-btn-primary" data-action="submit-json-import">
                ${icon('check', 16)} Processar e Importar JSON
              </button>
            </div>
          </div>
        </div>
      `;
    }

    if (state.modal === 'goal-form') {
      const students = window.M2Data.mentorStudents || window.M2Data.students || [];
      const cohorts = window.M2Data.cohorts || [];
      const contests = window.M2Data.contests || [];
      const today = new Date().toISOString().slice(0, 10);
      const end = new Date(Date.now() + (6 * 86400000)).toISOString().slice(0, 10);
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:620px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div><h3 style="font-size:16px; margin:0;">Nova meta ou desafio</h3><span style="font-size:12px; color:var(--text-muted);">Defina objetivo, período e público.</span></div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>
            <form style="display:grid; gap:12px; margin-top:16px;" onsubmit="event.preventDefault();">
              <label>Título<input id="m2-goal-name" class="m2-input" required maxlength="180" placeholder="Ex.: Resolver 150 questões na semana"></label>
              <div class="m2-grid-split"><label>Métrica<select id="m2-goal-metric" class="m2-input"><option value="questions">Questões</option><option value="hours">Horas</option><option value="sessions">Sessões</option><option value="reviews">Revisões</option><option value="flashcards">Flashcards</option></select></label><label>Meta<input id="m2-goal-target" class="m2-input" required type="number" min="1" value="150"></label></div>
              <div class="m2-grid-split"><label>Início<input id="m2-goal-start" class="m2-input" type="date" value="${today}"></label><label>Fim<input id="m2-goal-end" class="m2-input" type="date" value="${end}"></label></div>
              <label>Destinatários<select id="m2-goal-scope" class="m2-input"><option value="all">Todos os alunos</option><option value="cohort">Uma turma</option><option value="student">Um aluno</option></select></label>
              <label>Turma<select id="m2-goal-cohort" class="m2-input"><option value="">Selecione quando o destino for turma</option>${cohorts.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join('')}</select></label>
              <label>Aluno<select id="m2-goal-student" class="m2-input"><option value="">Selecione quando o destino for aluno</option>${students.map(s => `<option value="${Number(s.id)}">${escapeHtml(s.name)} · #${Number(s.id)}</option>`).join('')}</select></label>
              <label>Concurso (opcional)<select id="m2-goal-contest" class="m2-input"><option value="">Todos</option>${contests.map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join('')}</select></label>
              <label style="display:flex; gap:8px; align-items:center;"><input id="m2-goal-challenge" type="checkbox"> Marcar como desafio</label>
              <div style="display:flex; justify-content:flex-end; gap:8px;"><button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button><button type="button" class="m2-btn m2-btn-primary" data-action="save-goal">Salvar meta</button></div>
            </form>
          </div>
        </div>`;
    }

    if (state.modal === 'quick-prompt') {
      const p = state.quickPrompt || {};
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:500px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div>
                <h3 style="font-size:16px; font-weight:700; margin:0; color:var(--text-main);">${escapeHtml(p.title || 'Informação')}</h3>
                ${p.subtitle ? `<span style="font-size:12px; color:var(--text-muted);">${escapeHtml(p.subtitle)}</span>` : ''}
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>
            <form style="display:grid; gap:14px; margin-top:16px;" onsubmit="event.preventDefault();">
              <div>
                ${p.label ? `<label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">${escapeHtml(p.label)}</label>` : ''}
                ${p.inputType === 'textarea' ? `
                  <textarea id="m2-quick-prompt-input" rows="4" class="m2-field-input" placeholder="${escapeHtml(p.placeholder || '')}" style="width:100%; resize:vertical; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">${escapeHtml(p.value || '')}</textarea>
                ` : (p.inputType === 'select' ? `
                  <select id="m2-quick-prompt-input" class="m2-field-input" style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                    ${(p.options || []).map(opt => `<option value="${escapeHtml(opt.value)}" ${String(opt.value) === String(p.value) ? 'selected' : ''}>${escapeHtml(opt.label)}</option>`).join('')}
                  </select>
                ` : `
                  <input type="${p.inputType || 'text'}" id="m2-quick-prompt-input" class="m2-field-input" value="${escapeHtml(p.value || '')}" placeholder="${escapeHtml(p.placeholder || '')}" style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                `)}
              </div>
              <div style="display:flex; justify-content:flex-end; gap:8px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="${p.confirmAction || 'submit-quick-prompt'}">
                  ${icon('check', 16)} ${escapeHtml(p.confirmText || 'Confirmar')}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'confirmation') {
      const confirmation = state.confirmation || {};
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:460px;">
            <div style="display:flex; align-items:flex-start; gap:12px;">
              <div style="width:38px; height:38px; flex:0 0 auto; display:grid; place-items:center; border-radius:50%; background:var(--accent-rose-soft); color:var(--accent-rose);">${icon('alert-triangle', 19)}</div>
              <div>
                <h3 style="font-size:16px; margin:0 0 6px; color:var(--text-main);">${escapeHtml(confirmation.title || 'Confirmar ação')}</h3>
                <p style="font-size:13px; color:var(--text-muted); margin:0; line-height:1.5;">${escapeHtml(confirmation.message || 'Esta ação pode ser desfeita somente manualmente.')}</p>
              </div>
            </div>
            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:20px;">
              <button type="button" class="m2-btn m2-btn-secondary" data-action="cancel-confirmation">Cancelar</button>
              <button type="button" class="m2-btn m2-btn-primary" style="background:var(--accent-rose); border-color:var(--accent-rose);" data-action="${escapeHtml(confirmation.confirmAction || 'cancel-confirmation')}">${escapeHtml(confirmation.confirmText || 'Confirmar')}</button>
            </div>
          </div>
        </div>`;
    }

    if (state.modal === 'mentor-card-form') {
      const card = state.cardEditor?.card || {};
      const editing = Boolean(card.id);
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:680px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div>
                <h3 style="font-size:16px; font-weight:700; margin:0; color:var(--text-main);">${editing ? 'Editar cartão' : 'Novo cartão'}</h3>
                <span style="font-size:12px; color:var(--text-muted);">A frente e o verso são exibidos na revisão espaçada do aluno.</span>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal" aria-label="Fechar">${icon('x', 16)}</button>
            </div>
            <form style="display:grid; gap:12px; margin-top:16px;" onsubmit="event.preventDefault();">
              <label>Frente<textarea id="m2-card-front" class="m2-field-input" rows="4" maxlength="10000" required placeholder="Pergunta, conceito ou afirmação">${escapeHtml(card.front || '')}</textarea></label>
              <label>Verso<textarea id="m2-card-back" class="m2-field-input" rows="4" maxlength="10000" required placeholder="Resposta ou explicação">${escapeHtml(card.back || '')}</textarea></label>
              <label>Dica (opcional)<input id="m2-card-hint" class="m2-field-input" maxlength="1000" value="${escapeHtml(card.hint || '')}" placeholder="Pista curta para a revisão"></label>
              <label>Etiquetas (opcional)<input id="m2-card-tags" class="m2-field-input" maxlength="1000" value="${escapeHtml(Array.isArray(card.tags) ? card.tags.join(', ') : '')}" placeholder="Ex.: constitucional, art. 5º"></label>
              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="save-mentor-card">${icon('check', 16)} ${editing ? 'Salvar alterações' : 'Criar cartão'}</button>
              </div>
            </form>
          </div>
        </div>`;
    }

    if (state.modal === 'grade-essay') {
      const sub = state.gradingSubmission || {};
      const criteria = sub.criteria_scores || { tema: 25, estrutura: 25, gramatica: 30 };
      const defaultScore = sub.total_score || 80;
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:720px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div>
                <h3 style="font-size:16px; font-weight:700; margin:0; color:var(--text-main);">Avaliação Pedagógica de Redação</h3>
                <span style="font-size:12px; color:var(--text-muted);">Aluno: <strong>${escapeHtml(sub.student_name || 'Aluno')}</strong> · Tema: <strong>${escapeHtml(sub.essay_title || 'Proposta')}</strong></span>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>
            <form style="display:grid; gap:14px; margin-top:16px;" onsubmit="event.preventDefault();">
              <div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                  <label style="font-size:12px; font-weight:700; color:var(--text-main);">Texto Submetido pelo Aluno:</label>
                  <span class="m2-pill m2-pill-teal">${sub.word_count || 0} palavras</span>
                </div>
                <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; max-height:180px; overflow-y:auto; font-size:13px; line-height:1.6; white-space:pre-wrap; color:var(--text-main); font-family:var(--font-sans);">
                  ${plainTextWithBreaks(sub.content || '')}
                </div>
              </div>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                <div>
                  <label style="font-size:11px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Tema / Conteúdo (0-30):</label>
                  <input type="number" id="m2-grade-crit-tema" min="0" max="30" value="${criteria.tema ?? 25}" class="m2-field-input" style="width:100%; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                </div>
                <div>
                  <label style="font-size:11px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Estrutura Textual (0-30):</label>
                  <input type="number" id="m2-grade-crit-estrutura" min="0" max="30" value="${criteria.estrutura ?? 25}" class="m2-field-input" style="width:100%; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                </div>
                <div>
                  <label style="font-size:11px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Gramática / Norma (0-40):</label>
                  <input type="number" id="m2-grade-crit-gramatica" min="0" max="40" value="${criteria.gramatica ?? 30}" class="m2-field-input" style="width:100%; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main);">
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 2fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Nota Final (0 a 100):</label>
                  <input type="number" id="m2-grade-total-score" min="0" max="100" step="0.5" value="${defaultScore}" class="m2-field-input" style="width:100%; padding:8px 12px; font-weight:800; font-size:16px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--accent-teal); color:var(--accent-teal);">
                </div>
                <div>
                  <label style="font-size:12px; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Observações e Orientações Pedagógicas:</label>
                  <textarea id="m2-grade-feedback" rows="3" placeholder="Apresente os pontos fortes e os pontos a aprimorar na redação..." class="m2-field-input" style="width:100%; padding:8px 10px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); resize:vertical;">${escapeHtml(sub.feedback || '')}</textarea>
                </div>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-mentor-grade-essay" data-id="${sub.id}">
                  ${icon('check', 16)} Salvar Correção e Nota
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'assign-contest') {
      const student = state.assigningStudent || {};
      const contests = window.M2Data.contests || [];
      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:520px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('target', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0;">Atribuir Concurso ao Aluno</h3>
                  <span style="font-size:11px; color:var(--text-muted);">Aluno: <strong>${escapeHtml(student.name || student.email || 'Aluno #' + student.id)}</strong></span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px; margin-top:16px;" onsubmit="event.preventDefault();">
              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">Concurso / Edital de Destino:</label>
                ${contests.length > 0 ? `
                  <select id="m2-assign-contest-id" class="m2-field-input" style="width:100%; padding:9px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" required>
                    ${contests.map(c => `<option value="${c.id}">${escapeHtml(c.name || c.title || 'Concurso #' + c.id)} ${c.organization ? `(${escapeHtml(c.organization)})` : ''}</option>`).join('')}
                  </select>
                ` : `
                  <div style="padding:12px; border-radius:var(--radius-md); background:var(--bg-surface); border:1px dashed var(--border-color); font-size:12px; color:var(--text-muted);">
                    Nenhum concurso cadastrado ainda. Cadastre um concurso ou importe um edital antes de atribuir ao aluno.
                  </div>
                `}
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">Classificação / Grupo do Concurso:</label>
                <select id="m2-assign-contest-group" class="m2-field-input" style="width:100%; padding:9px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                  <option value="foco">Concurso Foco (Meta Principal de Estudos)</option>
                  <option value="mira">Concurso na Mira (Oportunidade Secundária)</option>
                  <option value="realizado">Concurso já Realizado</option>
                </select>
              </div>

              <div style="display:flex; align-items:center; gap:8px;">
                <input type="checkbox" id="m2-assign-contest-stats" checked style="accent-color:var(--accent-teal);" />
                <label for="m2-assign-contest-stats" style="font-size:12px; color:var(--text-main); cursor:pointer;">
                  Incluir este concurso nas estatísticas e métricas de desempenho do aluno
                </label>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px; border-top:1px solid var(--border-color); padding-top:12px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-assign-contest" data-student-id="${student.id}" ${contests.length === 0 ? 'disabled' : ''}>
                  ${icon('check', 16)} Confirmar Atribuição
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'question-form') {
      const q = state.editingQuestion || null;
      const isEditing = Boolean(q?.id);
      const subjects = window.M2Data.subjects || [];
      const diff = q?.difficulty || 'Média';
      const isCertoErrado = q?.type === 'certo_errado' || (q?.alternatives && typeof q.alternatives === 'object' && Object.keys(q.alternatives).length <= 2 && (q.alternatives.Certo || q.alternatives.C));
      const alts = q?.alternatives || {};
      const altA = Array.isArray(alts) ? (alts[0] || '') : (alts.A || alts['0'] || '');
      const altB = Array.isArray(alts) ? (alts[1] || '') : (alts.B || alts['1'] || '');
      const altC = Array.isArray(alts) ? (alts[2] || '') : (alts.C || alts['2'] || '');
      const altD = Array.isArray(alts) ? (alts[3] || '') : (alts.D || alts['3'] || '');
      const altE = Array.isArray(alts) ? (alts[4] || '') : (alts.E || alts['4'] || '');
      const correct = q?.correct_answer || q?.answer || 'A';

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:680px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('circle-help', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0;">
                    ${isEditing ? `Editar Questão #${Number(q.id) || q.id}` : 'Cadastrar Nova Questão'}
                  </h3>
                  <span style="font-size:11px; color:var(--text-muted);">
                    ${isEditing ? 'Atualize o enunciado, alternativas e gabarito comentado' : 'Adicione uma questão ao acervo com gabarito e explicação'}
                  </span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:12px; margin-top:14px;" onsubmit="event.preventDefault();">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Disciplina / Matéria:</label>
                  <input type="text" id="m2-qf-subject" list="m2-qf-subject-list" class="m2-field-input" value="${escapeHtml(q?.subjectName || q?.subject || '')}" placeholder="Ex: Direito Constitucional" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" required />
                  <datalist id="m2-qf-subject-list">
                    ${subjects.map(s => `<option value="${escapeHtml(s.name)}"></option>`).join('')}
                  </datalist>
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Assunto / Tópico:</label>
                  <input type="text" id="m2-qf-topic" class="m2-field-input" value="${escapeHtml(q?.topicName || q?.topic || '')}" placeholder="Ex: Direitos Individuais (Art. 5º)" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Dificuldade:</label>
                  <select id="m2-qf-difficulty" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                    <option value="Fácil" ${diff === 'Fácil' ? 'selected' : ''}>Fácil</option>
                    <option value="Média" ${diff === 'Média' ? 'selected' : ''}>Média</option>
                    <option value="Difícil" ${diff === 'Difícil' ? 'selected' : ''}>Difícil</option>
                  </select>
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Tipo de Questão:</label>
                  <select id="m2-qf-type" data-action="toggle-qf-type" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                    <option value="multipla_escolha" ${!isCertoErrado ? 'selected' : ''}>Múltipla Escolha (A, B, C, D, E)</option>
                    <option value="certo_errado" ${isCertoErrado ? 'selected' : ''}>Certo ou Errado (Cebraspe)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Enunciado da Questão:</label>
                <textarea id="m2-qf-prompt" rows="3" class="m2-field-input" placeholder="Digite o enunciado completo da questão..." style="width:100%; padding:10px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;" required>${escapeHtml(q?.statement || q?.prompt || '')}</textarea>
              </div>

              <div id="m2-qf-alternatives-group" style="${isCertoErrado ? 'display:none;' : ''}">
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Alternativas:</label>
                <div style="display:flex; flex-direction:column; gap:6px;">
                  <div style="display:flex; gap:8px; align-items:center;">
                    <span style="font-weight:700; width:20px; text-align:center;">A</span>
                    <input type="text" id="m2-qf-alt-a" class="m2-field-input" value="${escapeHtml(altA)}" placeholder="Texto da alternativa A" style="flex:1; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  </div>
                  <div style="display:flex; gap:8px; align-items:center;">
                    <span style="font-weight:700; width:20px; text-align:center;">B</span>
                    <input type="text" id="m2-qf-alt-b" class="m2-field-input" value="${escapeHtml(altB)}" placeholder="Texto da alternativa B" style="flex:1; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  </div>
                  <div style="display:flex; gap:8px; align-items:center;">
                    <span style="font-weight:700; width:20px; text-align:center;">C</span>
                    <input type="text" id="m2-qf-alt-c" class="m2-field-input" value="${escapeHtml(altC)}" placeholder="Texto da alternativa C" style="flex:1; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  </div>
                  <div style="display:flex; gap:8px; align-items:center;">
                    <span style="font-weight:700; width:20px; text-align:center;">D</span>
                    <input type="text" id="m2-qf-alt-d" class="m2-field-input" value="${escapeHtml(altD)}" placeholder="Texto da alternativa D" style="flex:1; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  </div>
                  <div style="display:flex; gap:8px; align-items:center;">
                    <span style="font-weight:700; width:20px; text-align:center;">E</span>
                    <input type="text" id="m2-qf-alt-e" class="m2-field-input" value="${escapeHtml(altE)}" placeholder="Texto da alternativa E (opcional)" style="flex:1; padding:6px 10px; border-radius:var(--radius-sm); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  </div>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 2fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Gabarito Oficial:</label>
                  <select id="m2-qf-correct" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:700;">
                    ${isCertoErrado ? `
                      <option value="Certo" ${correct === 'Certo' ? 'selected' : ''}>Certo</option>
                      <option value="Errado" ${correct === 'Errado' ? 'selected' : ''}>Errado</option>
                    ` : `
                      <option value="A" ${correct === 'A' ? 'selected' : ''}>Alternativa A</option>
                      <option value="B" ${correct === 'B' ? 'selected' : ''}>Alternativa B</option>
                      <option value="C" ${correct === 'C' ? 'selected' : ''}>Alternativa C</option>
                      <option value="D" ${correct === 'D' ? 'selected' : ''}>Alternativa D</option>
                      <option value="E" ${correct === 'E' ? 'selected' : ''}>Alternativa E</option>
                    `}
                  </select>
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Comentário do Professor / Gabarito Comentado:</label>
                  <textarea id="m2-qf-explanation" rows="2" class="m2-field-input" placeholder="Fundamentação jurídica ou comentário pedagógico..." style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;">${escapeHtml(q?.explanation || '')}</textarea>
                </div>
              </div>

              ${renderAudienceSelector(state.currentTargets)}

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px; border-top:1px solid var(--border-color); padding-top:12px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-create-question">
                  ${icon('check', 16)} ${isEditing ? 'Atualizar Questão' : 'Salvar Questão'}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'deck-form') {
      const d = state.editingDeck || null;
      const isEditing = Boolean(d?.id);
      const contests = window.M2Data.contests || [];
      const edicts = window.M2Data.edicts || [];
      const subjects = window.M2Data.subjects || [];

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:680px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('rotate-3d', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0;">
                    ${isEditing ? `Editar Baralho: ${escapeHtml(d.name || d.title || '')}` : 'Criar Novo Baralho de Flashcards'}
                  </h3>
                  <span style="font-size:11px; color:var(--text-muted);">
                    ${isEditing ? 'Atualize as configurações e o público-alvo do baralho oficial' : 'Baralho oficial com algoritmo de repetição espaçada (FSRS / SM-2)'}
                  </span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:12px; margin-top:14px;" onsubmit="event.preventDefault();">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Nome do Baralho:</label>
                  <input type="text" id="m2-df-name" class="m2-field-input" value="${escapeHtml(d?.name || d?.title || '')}" placeholder="Ex: Direito Constitucional - Art. 5º" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" required />
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Disciplina / Matéria:</label>
                  <input type="text" id="m2-df-subject" list="m2-df-subject-list" class="m2-field-input" value="${escapeHtml(d?.subject || 'Geral')}" placeholder="Ex: Direito Administrativo" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                  <datalist id="m2-df-subject-list">
                    ${subjects.map(s => `<option value="${escapeHtml(s.name)}"></option>`).join('')}
                  </datalist>
                </div>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Descrição / Orientações Pedagógicas:</label>
                <textarea id="m2-df-description" rows="2" class="m2-field-input" placeholder="Orientações aos alunos sobre a periodicidade e os focos deste baralho..." style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;">${escapeHtml(d?.description || '')}</textarea>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Concurso Vinculado (Opcional):</label>
                  <select id="m2-df-contest" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                    <option value="">Nenhum (Geral)</option>
                    ${contests.map(c => `<option value="${c.id}" ${String(d?.contest_id) === String(c.id) ? 'selected' : ''}>${escapeHtml(c.name || 'Concurso #' + c.id)}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Edital Vinculado (Opcional):</label>
                  <select id="m2-df-edict" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;">
                    <option value="">Nenhum</option>
                    ${edicts.map(e => `<option value="${e.id}" ${String(d?.edict_id) === String(e.id) ? 'selected' : ''}>${escapeHtml((e.contest_name || 'Concurso') + ' · ' + (e.name || 'Edital #' + e.id))}</option>`).join('')}
                  </select>
                </div>
              </div>

              ${renderAudienceSelector(state.currentTargets)}

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px; border-top:1px solid var(--border-color); padding-top:12px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-deck-form">
                  ${icon('check', 16)} ${isEditing ? 'Atualizar Baralho' : 'Salvar Baralho'}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'material-form') {
      const mat = state.editingMaterial || null;
      const isEditing = Boolean(mat?.id);
      const type = mat?.type || 'arquivo';

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:680px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('file-text', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0;">
                    ${isEditing ? `Editar Material: ${escapeHtml(mat.title || '')}` : 'Cadastrar Novo Conteúdo Didático'}
                  </h3>
                  <span style="font-size:11px; color:var(--text-muted);">
                    ${isEditing ? 'Atualize os dados e a disponibilização do material' : 'Disponibilize PDFs, resumos, videoaulas ou links para os alunos'}
                  </span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:12px; margin-top:14px;" onsubmit="event.preventDefault();">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Título do Material:</label>
                  <input type="text" id="m2-mf-title" class="m2-field-input" value="${escapeHtml(mat?.title || '')}" placeholder="Ex: Resumo de Direito Constitucional - Direitos Fundamentais" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" required />
                </div>
                <div>
                  <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Pasta / Categoria:</label>
                  <input type="text" id="m2-mf-folder" class="m2-field-input" value="${escapeHtml(mat?.folder || mat?.topic || '')}" placeholder="Ex: Apostilas, Legislação Seca, Esquemas" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
                </div>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Tipo de Conteúdo:</label>
                <select id="m2-mf-type" data-action="toggle-mf-type" class="m2-field-input" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; font-weight:600;">
                  <option value="arquivo" ${type === 'arquivo' ? 'selected' : ''}>Arquivo para Download (PDF, DOCX, ZIP, Imagem)</option>
                  <option value="youtube" ${type === 'youtube' ? 'selected' : ''}>Vídeo do YouTube (Player Integrado)</option>
                  <option value="link" ${type === 'link' ? 'selected' : ''}>Link / Plataforma Externa</option>
                  <option value="texto" ${type === 'texto' ? 'selected' : ''}>Texto Completo / Artigo Didático</option>
                </select>
              </div>

              <div>
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Descrição (Opcional):</label>
                <textarea id="m2-mf-description" rows="2" class="m2-field-input" placeholder="Breve resumo sobre o que o aluno encontrará neste material..." style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;">${escapeHtml(mat?.description || '')}</textarea>
              </div>

              <div id="m2-mf-url-group" style="${type === 'youtube' || type === 'link' ? '' : 'display:none;'}">
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">URL do Vídeo / Link:</label>
                <input type="url" id="m2-mf-url" class="m2-field-input" value="${escapeHtml(mat?.url || mat?.external_url || '')}" placeholder="https://..." style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
              </div>

              <div id="m2-mf-text-group" style="${type === 'texto' ? '' : 'display:none;'}">
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">Conteúdo em Texto:</label>
                <textarea id="m2-mf-text" rows="5" class="m2-field-input" placeholder="Digite ou cole o texto do resumo..." style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px; resize:vertical;">${escapeHtml(mat?.text || '')}</textarea>
              </div>

              <div id="m2-mf-file-group" style="${type === 'arquivo' ? '' : 'display:none;'}">
                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:4px;">${isEditing ? 'Substituir Arquivo (Opcional):' : 'Arquivo (PDF, DOCX, ZIP até 20MB):'}</label>
                <input type="file" id="m2-mf-file" class="m2-field-input" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.zip" style="width:100%; padding:8px 12px; border-radius:var(--radius-md); background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-main); font-size:13px;" />
              </div>

              ${renderAudienceSelector(state.currentTargets)}

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px; border-top:1px solid var(--border-color); padding-top:12px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-material-form">
                  ${icon('check', 16)} ${isEditing ? 'Atualizar Material' : 'Salvar Material'}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    if (state.modal === 'manage-audience') {
      const item = state.managingAudienceItem || {};
      const typeLabel = item.type === 'question' ? 'Questão' : (item.type === 'flashcard_deck' ? 'Baralho' : 'Material Didático');

      return `
        <div class="m2-modal-overlay" data-action="close-modal-backdrop">
          <div class="m2-modal-content" style="max-width:680px;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon('users', 18)}
                </div>
                <div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin:0;">
                    Definir Público-Alvo / Regras de Acesso
                  </h3>
                  <span style="font-size:11px; color:var(--text-muted);">
                    ${typeLabel}: <strong>${escapeHtml(item.title || ('#' + item.id))}</strong>
                  </span>
                </div>
              </div>
              <button type="button" class="m2-btn-icon" data-action="close-modal">${icon('x', 16)}</button>
            </div>

            <form style="display:flex; flex-direction:column; gap:14px; margin-top:14px;" onsubmit="event.preventDefault();">
              ${renderAudienceSelector(state.currentTargets)}

              <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px; border-top:1px solid var(--border-color); padding-top:12px;">
                <button type="button" class="m2-btn m2-btn-secondary" data-action="close-modal">Cancelar</button>
                <button type="button" class="m2-btn m2-btn-primary" data-action="submit-manage-audience">
                  ${icon('check', 16)} Salvar Público-Alvo
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    return '';
  }
