import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js';

export function viewTutor() {
    const hasAiAccess = window.M2Data?.has_ai_access !== false;
    if (!hasAiAccess) {
      return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">Inteligência Pedagógica</span>
              <h1 class="m2-page-title">Tutor de Estudos IA</h1>
              <p class="m2-page-subtitle">Tire dúvidas com citações exatas de leis, artigos do edital e jurisprudência.</p>
            </div>
          </div>
          <div class="m2-card" style="text-align:center; padding:54px 20px; max-width:620px; margin:32px auto;">
            <div style="width:64px; height:64px; border-radius:50%; background:var(--accent-amber-soft); display:grid; place-items:center; margin:0 auto 16px; color:var(--accent-amber);">
              ${icon('sparkles', 32)}
            </div>
            <h2 style="font-size:20px; font-weight:800; color:var(--text-main); margin-bottom:8px;">Recurso de IA Bloqueado</h2>
            <p style="font-size:14px; color:var(--text-muted); max-width:460px; margin:0 auto 20px; line-height:1.6;">
              O Tutor IA pedagógico com respostas contextualizadas ao edital utiliza Inteligência Artificial e não está habilitado para o seu produto ou plano atual.
            </p>
            <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px 18px; display:inline-flex; align-items:center; gap:8px; margin-bottom:24px; font-weight:600; font-size:13px; color:var(--text-main);">
              <span style="color:var(--accent-teal);">${icon('alert-circle', 16)}</span>
              <span>Peça para o administrador ativar a IA para sua conta.</span>
            </div>
            <div>
              <button type="button" class="m2-btn m2-btn-secondary" data-nav="today">
                ${icon('arrow-left', 14)} Voltar para o Início
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const contestTitle = (window.M2Data.contests && window.M2Data.contests[0]) ? (window.M2Data.contests[0].name || window.M2Data.contests[0].title) : 'Edital Ativo';
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Inteligência Pedagógica</span>
            <h1 class="m2-page-title">Tutor de Estudos IA</h1>
            <p class="m2-page-subtitle">Tire dúvidas com citações exatas de leis, artigos do edital e jurisprudência.</p>
          </div>
          <span class="m2-pill m2-pill-violet">${icon('sparkles', 12)} Conectado ao Edital ${contestTitle}</span>
        </div>

        <div class="m2-chat-box">
          <div class="m2-chat-messages" id="m2-chat-messages">
            ${state.tutorMessages.map(msg => `
              <div class="m2-chat-msg ${msg.sender}">
                <div class="m2-chat-bubble">
                  ${plainTextWithBreaks(msg.text)}
                  ${msg.sources ? `
                    <div style="margin-top:8px; padding-top:6px; border-top:1px solid rgba(255,255,255,0.1); font-size:11px; opacity:0.8;">
                      Fontes: ${msg.sources.map(escapeHtml).join(' · ')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="m2-chat-input-bar">
            <input type="text" class="m2-chat-input" id="m2-tutor-input" placeholder="Digite sua dúvida sobre qualquer matéria do edital..." autocomplete="off">
            <button type="button" class="m2-btn m2-btn-primary" data-action="send-tutor-message">
              ${icon('send', 16)} Enviar
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // A22: Configurações
export function viewSettings() {
    const notificationSettings = window.M2Data.preferences?.settings?.notifications || {};
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Preferências do Aluno</span>
            <h1 class="m2-page-title">Configurações de Estudo</h1>
            <p class="m2-page-subtitle">Ajuste sua rotina, notificações, privacidade e tema visual.</p>
          </div>
        </div>

        <div class="m2-card" style="max-width:680px;">
          <h2 class="m2-card-title">${icon('settings', 18)} Preferências de Interface e Estudo</h2>
          <div style="display:flex; flex-direction:column; gap:16px; margin-top:10px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <strong>Aparência da Plataforma</strong>
                <span style="display:block; font-size:12px; color:var(--text-muted);">Alternar entre tema escuro e claro</span>
              </div>
              <button type="button" class="m2-btn m2-btn-secondary" data-action="toggle-theme">
                ${icon(state.theme === 'dark' ? 'sun' : 'moon', 16)} Mudar para Modo ${state.theme === 'dark' ? 'Claro' : 'Escuro'}
              </button>
            </div>

            ${[['reviews', 'Revisoes pendentes'], ['essays', 'Redacoes corrigidas'], ['schedule', 'Alteracoes no cronograma'], ['mentor', 'Metas e mensagens do mentor']].map(([key, label]) => `<label style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid var(--border-color);"><span><strong>${label}</strong><small style="display:block;color:var(--text-muted);">Avisos na central de notificacoes</small></span><input type="checkbox" data-action="toggle-notification-pref" data-key="${key}" ${notificationSettings[key] !== false ? 'checked' : ''}></label>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // A23: Ajuda e Tours
export function viewHelp() {
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Central de Ajuda & Suporte</span>
            <h1 class="m2-page-title">Central de Orientação</h1>
            <p class="m2-page-subtitle">Dúvidas frequentes, guias rápidos e reabertura de tours pedagógicos.</p>
          </div>
        </div>

        <div class="m2-card">
          <h2 class="m2-card-title">${icon('help-circle', 18)} Perguntas Frequentes (FAQ)</h2>
          <div style="display:flex; flex-direction:column; gap:12px; margin-top:12px;">
            <details style="padding:10px; background:var(--bg-card); border-radius:var(--radius-md);">
              <summary style="font-weight:600; cursor:pointer;">Como o botão "Replanejar atrasados" funciona?</summary>
              <p style="font-size:13px; color:var(--text-muted); margin-top:8px;">
                O botão avalia somente as atividades não concluídas anteriores ao dia de hoje e redistribui nos próximos dias livres da sua semana, respeitando o limite diário de horas sem alterar as tarefas já concluídas.
              </p>
            </details>
            <details style="padding:10px; background:var(--bg-card); border-radius:var(--radius-md);">
              <summary style="font-weight:600; cursor:pointer;">O que significa a diferença entre "Estudado" e "Dominado" no Edital?</summary>
              <p style="font-size:13px; color:var(--text-muted); margin-top:8px;">
                "Estudado" indica a cobertura teórica cumprida. "Dominado" leva em conta o seu percentual real de acerto em questões daquele tópico específico.
              </p>
            </details>
          </div>
        </div>
      </div>
    `;
  }

export function viewAiMemory() {
    const mem = window.M2Data.aiMemory || {};
    const studentName = mem.studentName || window.M2Data.student?.name || 'Aluno';
    const lastSynced = mem.lastSynced || 'Sincronizado recentemente';
    const cognitiveProfile = mem.cognitiveProfile || 'Perfil cognitivo em formação contínua com base no seu padrão de erros e acertos em questões e simulados.';
    const strengths = mem.strengths || [];
    const weaknesses = mem.weaknesses || [];
    const tutorActionPlan = mem.tutorActionPlan || 'Pratique mais questões e flashcards para que a IA gere uma prescrição personalizada dos seus pontos de atenção.';
    const mentorNotes = mem.mentorNotes || 'Nenhuma anotação pedagógica do mentor registrada até o momento.';

    const hasAiAccess = (window.M2Data?.has_ai_access !== false) && (state.hasAiAccess !== false);
    const prescription = state.aiPrescription || window.M2Data?.student_memory?.cognitive_profile?.ai_prescription || null;
    const weeklyDays = prescription?.weekly_prescription || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Inteligência Adaptativa & Dossiê Cognitivo</span>
            <h1 class="m2-page-title">Memória Águia IA</h1>
            <p class="m2-page-subtitle">Como o Tutor IA e o Mentor Humano acompanham sua evolução cognitiva, pontos cegos e padrão de aprendizagem.</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="m2-btn m2-btn-primary" data-action="generate-ai-prescription" ${state.generatingPrescription || !hasAiAccess ? 'disabled' : ''}>
              ${icon(state.generatingPrescription ? 'refresh-cw' : 'sparkles', 16, state.generatingPrescription ? 'm2-spin' : '')}
              ${state.generatingPrescription ? 'Gerando Prescrição IA...' : '✨ Gerar Prescrição Águia IA (7 Dias)'}
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="sync-ai-memory">
              ${icon('refresh-cw', 16)} Sincronizar
            </button>
          </div>
        </div>

        ${!hasAiAccess ? `
          <div class="m2-ai-unconfigured-banner m2-ai-noaccess-banner" style="background:linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(245, 158, 11, 0.08)); border:1px solid rgba(239, 68, 68, 0.25); border-radius:var(--radius-lg); padding:16px 20px; margin-bottom:20px; display:flex; align-items:flex-start; gap:16px;">
            <div style="width:40px; height:40px; border-radius:var(--radius-md); background:rgba(239, 68, 68, 0.15); color:#ef4444; display:grid; place-items:center; flex-shrink:0;">
              ${icon('lock', 22)}
            </div>
            <div style="flex:1;">
              <h3 style="font-size:15px; font-weight:700; color:var(--text-main); margin:0 0 4px;">Recurso de IA Bloqueado no Plano</h3>
              <p style="font-size:13px; color:var(--text-muted); margin:0; line-height:1.5;">
                Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.
              </p>
            </div>
            <span class="m2-badge m2-badge-danger" style="align-self:flex-start; background:rgba(239, 68, 68, 0.15); color:#ef4444; border:1px solid rgba(239, 68, 68, 0.3);">Upgrade Necessário</span>
          </div>
        ` : ''}

        <!-- Prescrição Cognitiva dos Próximos 7 Dias (quando gerada) -->
        ${prescription ? `
          <div class="m2-card" style="margin-bottom:16px; border-top:4px solid var(--accent-violet);">
            <div class="m2-card-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:36px; height:36px; border-radius:var(--radius-md); background:var(--accent-violet-soft); color:var(--accent-violet); display:grid; place-items:center;">
                  ${icon('sparkles', 20)}
                </div>
                <div>
                  <strong style="font-size:15px; color:var(--text-main); display:block;">Prescrição Pedagógica dos Próximos 7 Dias · Águia IA</strong>
                  <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(prescription.priority_focus || 'Foco Estratégico da Semana')}</span>
                </div>
              </div>
              <span class="m2-pill m2-pill-violet">Diagnóstico Neural Ativo</span>
            </div>

            <p style="font-size:13px; color:var(--text-main); line-height:1.6; margin-top:8px; background:var(--bg-surface); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
              ${escapeHtml(prescription.cognitive_analysis || tutorActionPlan)}
            </p>

            ${weeklyDays.length > 0 ? `
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:10px; margin-top:14px;">
                ${weeklyDays.map(d => `
                  <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <strong style="font-size:12px; color:var(--accent-teal);">${escapeHtml(d.day)}</strong>
                        <span class="m2-badge m2-badge-teal" style="font-size:10px;">${escapeHtml(d.badge || 'Meta')}</span>
                      </div>
                      <strong style="font-size:13px; color:var(--text-main); display:block; margin-bottom:4px;">${escapeHtml(d.subject)}</strong>
                      <p style="font-size:11px; color:var(--text-muted); line-height:1.4; margin:0;">${escapeHtml(d.action)}</p>
                    </div>
                    <span style="font-size:10px; color:var(--text-dim); margin-top:8px; display:block;">⏱ ${d.target_minutes || 60} min planejados</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            ${(prescription.traps_to_avoid && prescription.traps_to_avoid.length > 0) ? `
              <div style="margin-top:14px; background:rgba(245, 158, 11, 0.08); border:1px solid rgba(245, 158, 11, 0.25); border-radius:var(--radius-md); padding:12px;">
                <strong style="font-size:12px; color:#d97706; display:flex; align-items:center; gap:6px; margin-bottom:6px;">
                  ${icon('alert-triangle', 14)} Armadilhas Cognitivas a Evitar nesta Semana:
                </strong>
                <ul style="margin:0; padding-left:18px; font-size:12px; color:var(--text-muted);">
                  ${prescription.traps_to_avoid.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Card de Perfil Cognitivo -->
        <div class="m2-card" style="margin-bottom:16px; border-left:4px solid var(--accent-violet);">
          <div class="m2-card-header">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:36px; height:36px; border-radius:var(--radius-md); background:var(--accent-violet-soft); color:var(--accent-violet); display:grid; place-items:center;">
                ${icon('brain', 20)}
              </div>
              <div>
                <h2 style="font-size:16px; font-weight:700; color:var(--text-main);">Perfil de Aprendizagem de ${studentName}</h2>
                <span style="font-size:11px; color:var(--text-muted);">Última sincronização neural: ${lastSynced}</span>
              </div>
            </div>
            <span class="m2-pill m2-pill-violet">FSRS/SM-2 Ativo</span>
          </div>
          <p style="font-size:13px; color:var(--text-muted); line-height:1.6; margin-top:4px;">
            ${cognitiveProfile}
          </p>
        </div>

        <!-- Grade: Pontos Fortes vs Dificuldades Crônicas Memorizadas -->
        <div class="m2-grid-split" style="margin-bottom:16px;">
          <!-- Pontos Fortes -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title" style="color:var(--accent-green);">${icon('check-circle', 18)} Domínios Consolidados na Memória</span>
              <span class="m2-pill m2-pill-green">${strengths.length} Tópicos</span>
            </div>
            ${strengths.length > 0 ? `
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${strengths.map(s => `
                  <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <strong style="font-size:13px; color:var(--text-main);">${s.topic}</strong>
                      <span class="m2-pill m2-pill-green">${s.mastery}</span>
                    </div>
                    <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">${s.detail}</p>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <div style="color:var(--accent-green); margin-bottom:6px;">${icon('check-circle', 28)}</div>
                <strong>Nenhum domínio consolidado ainda</strong>
                <p style="font-size:12px; margin-top:4px;">Resolva questões para atingir mais de 80% de acerto nas matérias.</p>
              </div>
            `}
          </div>

          <!-- Dificuldades Crônicas -->
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title" style="color:var(--accent-rose);">${icon('alert-triangle', 18)} Pontos Cegos & Fraquezas Memorizadas</span>
              <span class="m2-pill m2-pill-rose">${weaknesses.length} Alertas</span>
            </div>
            ${weaknesses.length > 0 ? `
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${weaknesses.map((w, idx) => `
                  <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <strong style="font-size:13px; color:var(--text-main);">${w.topic}</strong>
                      <span class="m2-pill m2-pill-rose">${w.mastery} acerto</span>
                    </div>
                    <p style="font-size:12px; color:var(--text-muted); margin-top:4px;">${w.detail}</p>
                    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                      <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="mark-memory-weakness-mastered" data-index="${idx}" title="Marcar como superado após revisão">
                        ${icon('check', 14)} Marcar como Superado
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <div style="color:var(--accent-teal); margin-bottom:6px;">${icon('shield', 28)}</div>
                <strong>Nenhum ponto cego detectado até o momento</strong>
                <p style="font-size:12px; margin-top:4px;">Continue seus estudos; a IA registrará tópicos com erros recorrentes aqui.</p>
              </div>
            `}
          </div>
        </div>

        <!-- Plano de Ação Personalizado da IA + Notas do Mentor -->
        <div class="m2-grid-split">
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('target', 18, 'text-teal')} Prescrição de Estudo Adaptativo da IA</span>
            </div>
            <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">
              ${tutorActionPlan}
            </p>
          </div>
          <div class="m2-card">
            <div class="m2-card-header">
              <span class="m2-card-title">${icon('user', 18, 'text-teal')} Anotações Pedagógicas do Mentor Humano</span>
            </div>
            <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">
              ${mentorNotes}
            </p>
          </div>
        </div>
      </div>
    `;
}

// Item 13: Calculadora Cebraspe / Certo e Errado (Nota Líquida)
