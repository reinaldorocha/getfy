import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js?v=d6fd58c3ef81';
import { renderAudienceBadge } from './shell.js?v=d6fd58c3ef81';

function mentorPagination(screen) {
  const meta = window.M2Data.mentorListState?.[screen]?.meta;
  if (!meta || meta.last_page <= 1) return '';
  const page = Number(meta.current_page || 1);
  return `<div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px; gap:10px;"><span style="font-size:12px; color:var(--text-muted);">Página ${page} de ${meta.last_page} · ${meta.total} itens</span><div style="display:flex; gap:8px;"><button class="m2-btn m2-btn-secondary m2-btn-sm" data-action="mentor-list-page" data-screen="${screen}" data-page="${page - 1}" ${page <= 1 ? 'disabled' : ''}>Anterior</button><button class="m2-btn m2-btn-secondary m2-btn-sm" data-action="mentor-list-page" data-screen="${screen}" data-page="${page + 1}" ${page >= meta.last_page ? 'disabled' : ''}>Próxima</button></div></div>`;
}

export   function viewMentorOverview() {
    const mentor = window.M2Data.mentor || {};
    const contests = window.M2Data.contests || [];
    const allStudents = window.M2Data.mentorStudents || window.M2Data.students || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M01 · Painel Geral do Mentor</span>
            <h1 class="m2-page-title">Radar de Acompanhamento</h1>
            <p class="m2-page-subtitle">Visão unificada dos alunos, turmas ativas e alertas pedagógicos prioritários.</p>
          </div>
        </div>

        <!-- Indicadores Gerais do Mentor -->
        <div class="m2-grid-4">
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('users', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mentor.totalStudents || allStudents.length}</span>
              <span class="m2-stat-label">Total de Alunos Matriculados</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-rose-soft); color:var(--accent-rose);">${icon('alert-triangle', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mentor.alertStudentsCount || 0}</span>
              <span class="m2-stat-label">Alunos em Alerta de Risco</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-violet-soft); color:var(--accent-violet);">${icon('folder', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${mentor.activeCohorts || (window.M2Data.cohorts || []).length}</span>
              <span class="m2-stat-label">Turmas em Andamento</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('shield', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${contests.length}</span>
              <span class="m2-stat-label">Concursos Monitorados</span>
            </div>
          </div>
        </div>

        <!-- Alunos que Exigem Atenção Imediata -->
        <div class="m2-card">
          <div class="m2-card-header">
            <span class="m2-card-title">${icon('alert-triangle', 18, 'text-teal')} Alunos que Precisam de Intervenção</span>
            <button type="button" class="m2-btn m2-btn-quiet" data-nav="mentor-students">Ver Todos os ${allStudents.length} Alunos</button>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px;">
            ${(() => {
              const alertStudents = allStudents.filter(s => s.riskLevel === 'Alto' || s.riskLevel === 'Médio');
              if (alertStudents.length === 0) {
                return `
                  <div style="text-align:center; padding:28px 16px; color:var(--text-muted);">
                    <div style="color:var(--accent-green); margin-bottom:6px;">${icon('check-circle', 28)}</div>
                    <strong>Nenhum aluno em situação de alerta no momento</strong>
                    <p style="font-size:12px; margin-top:4px;">Todos os alunos acompanhados estão com bom ritmo de estudo e engajamento.</p>
                  </div>
                `;
              }
              return alertStudents.slice(0, 5).map(st => `
                <div style="display:flex; align-items:center; justify-content:space-between; padding:14px; background:var(--bg-card); border-radius:var(--radius-md); border-left:4px solid ${st.riskLevel === 'Alto' ? 'var(--accent-rose)' : 'var(--accent-amber)'}; flex-wrap:wrap; gap:10px;">
                  <div>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <strong>${escapeHtml(st.name)}</strong>
                      <span class="m2-pill ${st.riskLevel === 'Alto' ? 'm2-pill-rose' : 'm2-pill-amber'}">Risco ${escapeHtml(st.riskLevel)}</span>
                      <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(st.cohort || '')}</span>
                    </div>
                    <span style="font-size:12px; color:var(--text-dim); display:block; margin-top:4px;">Motivo: ${escapeHtml(st.riskReason || 'Engajamento abaixo da meta')}</span>
                  </div>
                  <div style="display:flex; gap:8px;">
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-student-profile" data-id="${st.id}">Ver Perfil</button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="open-student-workspace" data-id="${st.id}">Acessar Workspace</button>
                  </div>
                </div>
              `).join('');
            })()}
          </div>
        </div>
      </div>
    `;
  }

  // M02: Alunos
export function viewMentorStudents() {
    const students = window.M2Data.mentorStudents || window.M2Data.students || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M02 · Gestão Individual</span>
            <h1 class="m2-page-title">Alunos Acompanhados</h1>
            <p class="m2-page-subtitle">Acompanhe métricas, intervenções e acesse o workspace de cada aluno em modo mentor.</p>
          </div>
        </div>

        <div class="m2-card">
          <div class="m2-table-wrapper">
            <table class="m2-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Turma / Concurso</th>
                  <th>Última Atividade</th>
                  <th>Progresso Edital</th>
                  <th>Carga Semanal</th>
                  <th>Risco</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                ${students.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align:center; padding:32px; color:var(--text-muted);">
                      Nenhum aluno matriculado nas turmas da mentoria ainda.
                    </td>
                  </tr>
                ` : students.map(st => `
                  <tr>
                    <td>
                      <strong>${escapeHtml(st.name)}</strong>
                      <span style="display:block; font-size:11px; color:var(--text-muted);">${escapeHtml(st.email)}</span>
                    </td>
                    <td>
                      <span>${escapeHtml(st.cohort)}</span>
                      <span style="display:block; font-size:10px; color:var(--text-dim);">${escapeHtml(st.contest)}</span>
                    </td>
                    <td>${escapeHtml(st.lastActive)}</td>
                    <td>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <div class="m2-progress-track" style="width:60px;">
                          <div class="m2-progress-fill" style="width:${Number(st.progressPct) || 0}%;"></div>
                        </div>
                        <span>${Number(st.progressPct) || 0}%</span>
                      </div>
                    </td>
                    <td>${Number(st.hoursWeek) || 0}h</td>
                    <td>
                      <span class="m2-pill ${st.riskLevel === 'Alto' ? 'm2-pill-rose' : st.riskLevel === 'Médio' ? 'm2-pill-amber' : 'm2-pill-green'}">${escapeHtml(st.riskLevel)}</span>
                    </td>
                    <td>
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-assign-contest-modal" data-student-id="${st.id}" data-student-name="${escapeHtml(st.name)}" title="Atribuir Concurso">${icon('shield', 13)} Concurso</button>
                        <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-student-profile" data-id="${st.id}">Perfil</button>
                        <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="open-student-workspace" data-id="${st.id}">Workspace</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // M03: Perfil do Aluno
export function viewMentorStudentProfile() {
    const st = window.M2Data.student || {};
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M03 · Visão 360 do Aluno</span>
            <h1 class="m2-page-title">${st.name || 'Aluno'}</h1>
            <p class="m2-page-subtitle">${st.cohort || 'Sem turma'} · Concurso: ${st.contest || 'Não informado'}</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="open-student-workspace" data-id="${st.id}">
            ${icon('external-link', 16)} Entrar no Workspace do Aluno
          </button>
        </div>

        <div class="m2-grid-3">
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('clock', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${st.weekHours || st.hoursWeek || 0}h / ${st.weekHoursGoal || 12}h</span>
              <span class="m2-stat-label">Carga nesta Semana</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('circle-check', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${st.questionsAccuracy || st.accuracy || 0}%</span>
              <span class="m2-stat-label">Taxa de Acertos</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-amber-soft); color:var(--accent-amber);">${icon('flame', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${st.streakDays || st.streak || 0} Dias</span>
              <span class="m2-stat-label">Constância Ativa</span>
            </div>
          </div>
        </div>

        <div class="m2-card">
          <h2 class="m2-card-title">${icon('activity', 18, 'text-teal')} Histórico de Intervenções Pedagógicas</h2>
          <p style="font-size:13px; color:var(--text-muted);">
            O mentor pode intervir no plano de estudos, ajustar a rotina, enviar feedbacks personalizados e disponibilizar materiais extras.
          </p>
          <div style="display:flex; gap:10px; margin-top:16px;">
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="open-assign-contest-modal" data-student-id="${st.id}" data-student-name="${escapeHtml(st.name)}">${icon('shield', 14)} Atribuir Concurso</button>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="mentor-add-feedback">Enviar Feedback</button>
            <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="mentor-adjust-plan">Ajustar Carga de Horas</button>
          </div>
        </div>
      </div>
    `;
  }

  // M04: Workspace de Acompanhamento (Mentor no Workspace do Aluno)
export function viewMentorWorkspace(studentView = '') {
    return `
      <!-- Faixa Obrigatória e Persistente do Workspace -->
      <div class="m2-workspace-banner">
        <div class="m2-workspace-banner-left">
          ${icon('user', 18)}
          <span>Você está no <strong>Workspace de Acompanhamento</strong> do(a) aluno(a) <strong>${window.M2Data.student?.name || 'Aluno'}</strong> (${window.M2Data.student?.cohort || 'Sem turma'}).</span>
        </div>
        <button type="button" class="m2-btn m2-btn-sm" style="background:#ffffff; color:#b45309; font-weight:700;" data-nav="mentor-overview" data-mode="mentor">
          ${icon('arrow-left', 14)} Voltar ao Painel do Mentor
        </button>
      </div>

      <!-- Renderiza a visão do aluno (Hoje) com contexto explícito -->
      ${studentView}
    `;
  }

  // M05: Turmas
export function viewMentorCohorts() {
    const cohorts = window.M2Data.cohorts || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M05 · Gestão Coletiva</span>
            <h1 class="m2-page-title">Turmas de Mentoria</h1>
            <p class="m2-page-subtitle">Acompanhe turmas com planos-base padronizados, metas compartilhadas e materiais vinculados.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="create-cohort">
            ${icon('plus', 16)} Criar Nova Turma
          </button>
        </div>

        ${cohorts.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('folder', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma turma cadastrada</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Crie turmas para organizar seus alunos por concurso, edital ou data de início.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-cohort">
              ${icon('plus', 16)} Criar Primeira Turma
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${cohorts.map(co => `
              <div class="m2-card">
                <div class="m2-card-header">
                  <div>
                    <h2 style="font-size:18px; font-weight:700;">${co.name}</h2>
                    <span style="font-size:12px; color:var(--text-muted);">${co.contest || ''} · Responsável: ${co.mentorName || 'Não informado'}</span>
                  </div>
                  <span class="m2-pill ${co.status === 'Ativa' ? 'm2-pill-teal' : 'm2-pill-gray'}">${co.status || 'Não informado'}</span>
                </div>
                <p style="font-size:13px; color:var(--text-muted); line-height:1.5;">${co.description || ''}</p>
                <div style="display:flex; align-items:center; justify-content:space-between; margin-top:12px; flex-wrap:wrap; gap:12px;">
                  <span style="font-size:12px; color:var(--text-muted);">
                    <strong>${co.studentsCount || 0} Alunos Matriculados</strong> · Progresso Médio: <strong>${co.avgProgress || 0}%</strong>
                  </span>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-nav="mentor-cohort-detail" data-id="${co.id}" data-cohort-id="${co.id}">Ver Detalhes</button>
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-cohort" data-id="${co.id}">${icon('edit', 14)} Editar</button>
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-cohort" data-id="${co.id}">${icon('trash', 14)}</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  // M06: Detalhe da Turma
export function viewMentorCohortDetail() {
    const cohorts = window.M2Data.cohorts || [];
    const co = cohorts.find(item => String(item.id) === String(state.activeCohortId)) || cohorts[0];
    if (!co) {
      return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">M06 · Turma Específica</span>
              <h1 class="m2-page-title">Turma Não Encontrada</h1>
              <p class="m2-page-subtitle">Nenhuma turma foi selecionada ou cadastrada.</p>
            </div>
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-cohorts">Voltar às Turmas</button>
          </div>
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('folder', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma turma ativa encontrada</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Cadastre uma turma para acompanhar os alunos matriculados.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-nav="mentor-cohorts">Ir para Turmas</button>
          </div>
        </div>
      `;
    }

    const students = window.M2Data.mentorStudents || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M06 · Turma Específica</span>
            <h1 class="m2-page-title">${escapeHtml(co.name)}</h1>
            <p class="m2-page-subtitle">${co.studentsCount || students.length} alunos matriculados · Concurso ativo: ${escapeHtml(co.contest || 'Geral')}</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="m2-btn m2-btn-primary" data-action="add-cohort-member" data-cohort-id="${co.id}">
              ${icon('plus', 16)} Adicionar Aluno à Turma
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-cohorts">Voltar às Turmas</button>
          </div>
        </div>

        <div class="m2-card">
          <h2 class="m2-card-title">${icon('users', 18)} Alunos Matriculados na Turma</h2>
          <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
            ${students.length === 0 ? `
              <div style="text-align:center; padding:24px; color:var(--text-muted);">
                <p>Nenhum aluno matriculado nesta turma ainda. Clique em "Adicionar Aluno à Turma".</p>
              </div>
            ` : students.map(st => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:var(--bg-card); border-radius:var(--radius-md); flex-wrap:wrap; gap:8px;">
                <div>
                  <strong>${escapeHtml(st.name)}</strong>
                  <span style="display:block; font-size:11px; color:var(--text-muted);">${escapeHtml(st.email || '')}</span>
                </div>
                <div style="display:flex; gap:8px;">
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-student-profile" data-id="${st.id}">Perfil</button>
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="open-student-workspace" data-id="${st.id}">Workspace</button>
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" style="color:var(--accent-rose); border-color:var(--accent-rose);" data-action="remove-cohort-member" data-cohort-id="${co.id}" data-student-id="${st.id}">Remover</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // M07: Catálogo de Concursos
export function viewMentorContests() {
    const contests = window.M2Data.contests || [];
    const paging = mentorPagination('mentor-contests');
    const filterState = window.M2Data.mentorListState?.['mentor-contests']?.filters || {};

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M07 · Catálogo Estrutural</span>
            <h1 class="m2-page-title">Gestão de Concursos & Editais</h1>
            <p class="m2-page-subtitle">Um concurso contém seu edital oficial, matérias, tópicos e pesos.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="create-contest">
            ${icon('plus', 16)} Cadastrar Novo Concurso
          </button>
        </div>

        <div style="display:flex; gap:10px; align-items:center; margin-bottom:16px; background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div style="flex:1; position:relative;">
            <input type="text" class="m2-field-input" data-action="mentor-filter-search" data-screen="mentor-contests" placeholder="Buscar concurso por nome, cargo ou banca..." value="${escapeHtml(filterState.search || '')}" style="width:100%; padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
          </div>
        </div>

        ${contests.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('shield', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum concurso ou edital encontrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Cadastre um novo concurso ou importe um edital verticalizado em PDF/DOCX com extração inteligente.
            </p>
            <div style="display:flex; justify-content:center; gap:10px;">
              <button type="button" class="m2-btn m2-btn-primary" data-action="create-contest">
                ${icon('plus', 16)} Cadastrar Concurso
              </button>
              <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-import-review">
                ${icon('upload-cloud', 16)} Importar Edital com IA
              </button>
            </div>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${contests.map(c => `
              <div class="m2-card">
                <div class="m2-card-header">
                  <div>
                    <h2 style="font-size:18px; font-weight:700;">${escapeHtml(c.name)}</h2>
                    <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(c.role || '')} · Órgão: ${escapeHtml(c.organization || '')} · Banca: ${escapeHtml(c.board || '')}</span>
                  </div>
                  <span class="m2-pill m2-pill-teal">${escapeHtml(c.phase || 'Publicado')}</span>
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; margin-top:12px; flex-wrap:wrap; gap:12px;">
                  <span style="font-size:12px; color:var(--text-muted);">
                    ${Number(c.activeSyllabusUnits) || 0} tópicos mapeados · ${Number(c.totalQuestions) || 0} questões no banco
                  </span>
                  <div style="display:flex; gap:8px;">
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="duplicate-contest" data-id="${c.id}">
                      ${icon('copy', 14)} Duplicar
                    </button>
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-contest" data-id="${c.id}">
                      ${icon('edit', 14)} Editar
                    </button>
                    <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-nav="mentor-contest-detail" data-id="${c.id}">
                      ${icon('list-tree', 14)} Edital & Conteúdo
                    </button>
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-contest" data-id="${c.id}">
                      ${icon('trash', 14)}
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
        ${paging}
      </div>
    `;
  }

  // M08: Concurso e Edital
export function viewMentorContestDetail() {
    const contests = window.M2Data.contests || [];
    const c = contests.find(item => String(item.id) === String(state.contestId)) || contests[0];
    if (!c) {
      return `
        <div class="m2-content">
          <div class="m2-page-header">
            <div class="m2-page-title-group">
              <span class="m2-eyebrow">M08 · Gestão Integrada</span>
              <h1 class="m2-page-title">Nenhum Concurso Selecionado</h1>
              <p class="m2-page-subtitle">Cadastre ou selecione um concurso para configurar seu edital verticalizado.</p>
            </div>
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-contests">Voltar aos Concursos</button>
          </div>
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('shield', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum concurso encontrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Cadastre um concurso no catálogo para editar as matérias e tópicos.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-contest">Cadastrar Novo Concurso</button>
          </div>
        </div>
      `;
    }

    const syllabus = window.M2Data.syllabus || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M08 · Gestão Integrada</span>
            <h1 class="m2-page-title">${c.name} — Estrutura do Edital</h1>
            <p class="m2-page-subtitle">Configure disciplinas, pesos, relevância e ordem dos tópicos.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-contests">Voltar aos Concursos</button>
        </div>

        <div class="m2-card">
          <div class="m2-card-header">
            <h2 class="m2-card-title">${icon('list-tree', 18)} Disciplinas e Árvore de Tópicos</h2>
            <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="add-subject">
              ${icon('plus', 14)} Adicionar Disciplina
            </button>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
            ${syllabus.length === 0 ? `
              <div style="text-align:center; padding:24px; color:var(--text-muted);">
                <p>Nenhuma disciplina adicionada a este edital ainda. Clique em "Adicionar Disciplina".</p>
              </div>
            ` : syllabus.map(sub => `
              <div style="padding:14px; background:var(--bg-card); border-radius:var(--radius-md); border:1px solid var(--border-color);">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                  <div>
                    <strong>${sub.name}</strong>
                    <span style="font-size:12px; color:var(--text-muted); display:block;">Peso: ${sub.weight} · Relevância: ${sub.relevance}</span>
                  </div>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="edit-subject" data-id="${sub.id}">Editar</button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="add-topic" data-id="${sub.id}">+ Tópico</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // M09: Importação de Edital com IA
export function viewMentorImportReview() {
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M09 · Assistente Inteligente de PDF</span>
            <h1 class="m2-page-title">Importação de Edital com IA</h1>
            <p class="m2-page-subtitle">Envie o arquivo PDF oficial do Diário Oficial ou copie o prompt estruturado para gerar via ChatGPT/Claude e importar em JSON.</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-json-import-modal" data-mode="catalog">
              ${icon('sparkles', 16)} Importar por IA / JSON
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="copy-import-prompt" data-mode="catalog">
              ${icon('copy', 14)} Copiar Prompt Edital
            </button>
          </div>
        </div>

        <div class="m2-card" style="border:2px dashed var(--border-color); text-align:center; padding:36px 20px;">
          <div style="width:48px; height:48px; border-radius:var(--radius-full); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center; margin:0 auto 12px;">
            ${icon('upload', 24)}
          </div>
          <h2 style="font-size:16px; font-weight:700;">Arraste o PDF do Edital ou Importe via JSON Externo</h2>
          <p style="font-size:12px; color:var(--text-muted); max-width:440px; margin:4px auto 16px;">
            Suporta extração digital direta de Diários Oficiais e importação de JSON hierárquico com disciplinas, tópicos e pesos.
          </p>
          <div style="display:flex; justify-content:center; gap:8px;">
            <button type="button" class="m2-btn m2-btn-primary" data-action="simulate-upload-edital">
              ${icon('sparkles', 16)} Processar com IA (Demonstração)
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-json-import-modal" data-mode="catalog">
              ${icon('download', 16)} Colar JSON de Edital
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // M10: Biblioteca de Conteúdos
export function viewMentorContents() {
    const contents = window.M2Data.mentorContents || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M10 · Repositório Unificado</span>
            <h1 class="m2-page-title">Biblioteca de Conteúdos Didáticos</h1>
            <p class="m2-page-subtitle">Públicos combináveis: defina quem tem acesso por Tenant, Turma, Concurso ou Aluno específico.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="create-content">
            ${icon('plus', 16)} Cadastrar Novo Conteúdo
          </button>
        </div>

        ${contents.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('folder', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum conteúdo didático cadastrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Cadastre materiais, apostilas, leis sintetizadas ou vídeos para disponibilizar para seus alunos.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-content">
              ${icon('plus', 16)} Cadastrar Primeiro Conteúdo
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${contents.map(cnt => `
              <div class="m2-card" style="flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="m2-pill m2-pill-teal">${cnt.type}</span>
                    <span class="m2-pill ${cnt.status === 'Publicado' ? 'm2-pill-green' : 'm2-pill-amber'}">${cnt.status}</span>
                  </div>
                  <strong style="font-size:16px; display:block; margin-top:6px;">${cnt.title}</strong>
                  <span style="font-size:12px; color:var(--text-muted); display:block; margin-top:2px;">
                    Público de Acesso: <strong>${cnt.targetAudience}</strong> (${cnt.eligibleStudents || 0} elegíveis)
                  </span>
                </div>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="manage-content-audience" data-id="${cnt.id}" data-type="${cnt.type || 'material'}">Editar Público</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-material" data-id="${cnt.id}">${icon('edit', 14)} Editar</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-material" data-id="${cnt.id}">${icon('trash', 14)}</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  // M11: Banco de Questões do Mentor
export function viewMentorQuestions() {
    const qList = window.M2Data.questions || [];
    const paging = mentorPagination('mentor-questions');
    const activeContestName = (window.M2Data.contests && window.M2Data.contests[0]) ? (window.M2Data.contests[0].name || window.M2Data.contests[0].title) : 'Geral';
    const filterState = window.M2Data.mentorListState?.['mentor-questions']?.filters || {};
    const meta = window.M2Data.mentorListState?.['mentor-questions']?.meta;
    const questionSubjects = [...new Set(qList.map(q => (q.subject || q.subjectName || '').trim()).filter(Boolean))].sort();

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M11 · Curadoria e Criação</span>
            <h1 class="m2-page-title">Gestão do Banco de Questões</h1>
            <p class="m2-page-subtitle">Cadastre manualmente ou importe questões geradas por IA externa (ChatGPT/Claude) via código JSON.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-json-import-modal" data-mode="questions">
              ${icon('sparkles', 16)} Importar por IA / JSON
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="copy-import-prompt" data-mode="questions">
              ${icon('copy', 14)} Copiar Prompt IA
            </button>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-question">
              ${icon('plus', 16)} Nova Questão
            </button>
          </div>
        </div>

        <div class="m2-grid-4" style="margin-bottom:16px;">
          <div class="m2-stat-card">
            <div class="m2-stat-icon">${icon('circle-help', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${meta ? meta.total : qList.length}</span>
              <span class="m2-stat-label">Questões no Banco Ativo</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-green-soft); color:var(--accent-green);">${icon('check-circle', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${qList.length > 0 ? '100%' : '0%'}</span>
              <span class="m2-stat-label">Com Gabarito Comentado</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-teal-soft); color:var(--accent-teal);">${icon('sparkles', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">Ativo</span>
              <span class="m2-stat-label">Filtro Antialucinação IA</span>
            </div>
          </div>
          <div class="m2-stat-card">
            <div class="m2-stat-icon" style="background:var(--accent-rose-soft); color:var(--accent-rose);">${icon('flag', 20)}</div>
            <div class="m2-stat-data">
              <span class="m2-stat-value">${(window.M2Data.reportedQuestions || []).length}</span>
              <span class="m2-stat-label">Reportes de Moderação</span>
            </div>
          </div>
        </div>

        <!-- Barra de Busca e Filtros das Questões -->
        <div style="display:flex; gap:10px; align-items:center; margin-bottom:16px; flex-wrap:wrap; background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div style="flex:1; min-width:220px; position:relative;">
            <input type="text" class="m2-field-input" data-action="mentor-filter-search" data-screen="mentor-questions" placeholder="Buscar por enunciado da questão..." value="${escapeHtml(filterState.search || '')}" style="width:100%; padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
          </div>
          <div style="min-width:160px;">
            <select class="m2-field-input" data-action="mentor-filter-subject" data-screen="mentor-questions" style="width:100%; padding:8px 10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
              <option value="">Todas as matérias</option>
              ${questionSubjects.map(name => `<option value="${escapeHtml(name)}" ${filterState.subject === name ? 'selected' : ''}>${escapeHtml(name)}</option>`).join('')}
            </select>
          </div>
          <div style="min-width:140px;">
            <select class="m2-field-input" data-action="mentor-filter-difficulty" data-screen="mentor-questions" style="width:100%; padding:8px 10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
              <option value="">Todas as dificuldades</option>
              <option value="Fácil" ${filterState.difficulty === 'Fácil' ? 'selected' : ''}>Fácil</option>
              <option value="Média" ${filterState.difficulty === 'Média' ? 'selected' : ''}>Média</option>
              <option value="Difícil" ${filterState.difficulty === 'Difícil' ? 'selected' : ''}>Difícil</option>
            </select>
          </div>
          <div style="min-width:150px;">
            <select class="m2-field-input" data-action="mentor-filter-status" data-screen="mentor-questions" style="width:100%; padding:8px 10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
              <option value="">Todos os estados</option>
              <option value="em_revisao" ${filterState.content_status === 'em_revisao' ? 'selected' : ''}>Em revisao</option>
              <option value="publicado" ${filterState.content_status === 'publicado' ? 'selected' : ''}>Publicado</option>
              <option value="bloqueado" ${filterState.content_status === 'bloqueado' ? 'selected' : ''}>Bloqueado</option>
            </select>
          </div>
        </div>

        <!-- Tabela das Questões Cadastradas -->
        <div class="m2-card">
          <div class="m2-card-header">
            <span class="m2-card-title">${icon('list-tree', 18)} Questões Cadastradas no Concurso Ativo (${escapeHtml(activeContestName)})</span>
            <span class="m2-pill m2-pill-teal">Exibindo ${qList.length} de ${meta ? meta.total : qList.length}</span>
          </div>

          <div class="m2-table-wrapper">
            <table class="m2-table">
              <thead>
                <tr>
                  <th style="width:36px;"><input type="checkbox" id="m2-select-all-questions" data-action="toggle-all-questions" title="Selecionar Todas"></th>
                  <th>Código</th>
                  <th>Disciplina / Assunto</th>
                  <th>Enunciado Resumido</th>
                  <th>Gabarito</th>
                  <th>Nível</th>
                  <th>Curadoria</th>
                  <th>Público</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                ${qList.length === 0 ? `
                  <tr>
                    <td colspan="9" style="text-align:center; padding:32px; color:var(--text-muted);">
                      Nenhuma questão encontrada com os filtros informados. Use "Nova Questão" ou "Importar por IA / JSON".
                    </td>
                  </tr>
                ` : qList.map((q, idx) => `
                  <tr>
                    <td><input type="checkbox" class="m2-question-checkbox" value="${q.id}" data-action="toggle-question-select" ${(state.selectedQuestions || []).includes(String(q.id)) ? 'checked' : ''}></td>
                    <td><strong>#${Number(q.id) || q.id}</strong></td>
                    <td>
                      <strong style="color:var(--text-main); display:block;">${escapeHtml(q.subjectName || q.subject || 'Geral')}</strong>
                      <span style="font-size:11px; color:var(--text-muted);">${escapeHtml(q.topicName || q.topic || '')}</span>
                    </td>
                    <td>
                      <span style="font-size:12px; color:var(--text-main); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                        ${escapeHtml(q.statement || q.prompt || '')}
                      </span>
                    </td>
                    <td>
                      <span class="m2-pill m2-pill-green" style="font-weight:800;">Opção ${escapeHtml(q.answer || q.correct_answer || 'A')}</span>
                    </td>
                    <td>
                      <span class="m2-pill m2-pill-gray">${escapeHtml(q.difficulty || 'Média')}</span>
                    </td>
                    <td><span class="m2-pill ${q.content_status === 'publicado' ? 'm2-pill-green' : q.content_status === 'bloqueado' ? 'm2-pill-rose' : 'm2-pill-amber'}">${q.content_status === 'publicado' ? 'Publicado' : q.content_status === 'bloqueado' ? 'Bloqueado' : 'Em revisao'}</span></td>
                    <td>
                      ${renderAudienceBadge(q.targets)}
                    </td>
                    <td>
                      <div style="display:flex; gap:6px;">
                        <button type="button" class="m2-btn-icon" data-action="open-manage-audience" data-id="${q.id}" data-type="question" title="Definir Público-Alvo">${icon('users', 14)}</button>
                        <button type="button" class="m2-btn-icon" data-action="edit-question" data-id="${q.id}" title="Editar Questão">${icon('edit', 14)}</button>
                        <button type="button" class="m2-btn-icon" data-action="set-content-status" data-content-type="question" data-id="${q.id}" data-status="${q.content_status === 'publicado' ? 'em_revisao' : 'publicado'}" title="${q.content_status === 'publicado' ? 'Enviar para revisao' : 'Publicar questao'}">${icon(q.content_status === 'publicado' ? 'eye-off' : 'check-circle', 14)}</button>
                        <button type="button" class="m2-btn-icon" style="color:var(--accent-rose);" data-action="delete-question" data-id="${q.id}" title="Excluir Questão">${icon('trash', 14)}</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
        ${(state.selectedQuestions && state.selectedQuestions.length > 0) ? `
          <div style="position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:var(--bg-card); border:1px solid var(--border-color); box-shadow:0 12px 36px rgba(0,0,0,0.4); padding:10px 20px; border-radius:999px; display:flex; align-items:center; gap:16px; z-index:1000;">
            <span style="font-size:13px; color:var(--text-main); font-weight:600;">
              ${icon('check-square', 16, 'text-teal')} <strong>${state.selectedQuestions.length}</strong> questões selecionadas
            </span>
            <button type="button" class="m2-btn m2-btn-sm" style="background:var(--accent-rose); color:#fff;" data-action="bulk-delete-questions">
              ${icon('trash', 14)} Excluir Selecionadas
            </button>
            <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="clear-selected-questions">
              Cancelar
            </button>
          </div>
        ` : ''}
        ${paging}
      </div>
    `;
  }

  // M12: Baralhos do Mentor
export function viewMentorFlashcards() {
    const decks = window.M2Data.flashcardDecks || [];
    const paging = mentorPagination('mentor-flashcards');
    const filterState = window.M2Data.mentorListState?.['mentor-flashcards']?.filters || {};
    const meta = window.M2Data.mentorListState?.['mentor-flashcards']?.meta;

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M12 · Baralhos Oficiais</span>
            <h1 class="m2-page-title">Gestão de Flashcards Oficiais</h1>
            <p class="m2-page-subtitle">Crie baralhos e distribua para os alunos com sincronização automática ou importe lotes gerados por IA.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-json-import-modal" data-mode="flashcards">
              ${icon('sparkles', 16)} Importar por IA / JSON
            </button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="copy-import-prompt" data-mode="flashcards">
              ${icon('copy', 14)} Copiar Prompt IA
            </button>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-mentor-deck">
              ${icon('plus', 16)} Criar Novo Baralho
            </button>
          </div>
        </div>

        <!-- Barra de Busca de Flashcards -->
        <div style="display:flex; gap:10px; align-items:center; margin-bottom:16px; background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div style="flex:1; position:relative;">
            <input type="text" class="m2-field-input" data-action="mentor-filter-search" data-screen="mentor-flashcards" placeholder="Buscar baralho por título..." value="${escapeHtml(filterState.search || '')}" style="width:100%; padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
          </div>
        </div>

        ${decks.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('rotate-3d', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum baralho oficial encontrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Crie baralhos com cartões de repetição espaçada (FSRS/SM-2) ou importe via JSON para distribuir para as turmas.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-mentor-deck">
              ${icon('plus', 16)} Criar Primeiro Baralho
            </button>
          </div>
        ` : `
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
            ${decks.map(deck => {
              const deckTotalCards = (Array.isArray(deck.cards) && deck.cards.length > 0)
                ? deck.cards.length
                : (Number(deck.cards_count) || Number(deck.totalCards) || 0);

              return `
              <div class="m2-card" style="display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; gap:6px; flex-wrap:wrap;">
                    <span class="m2-pill m2-pill-teal">${escapeHtml(deck.subject || 'Geral')}</span>
                    <div style="display:flex; align-items:center; gap:6px;">
                      <span class="m2-pill ${deck.isShared ? 'm2-pill-green' : 'm2-pill-gray'}">${deck.isShared ? 'Oficial / Sincronizado' : 'Privado'}</span>
                      ${renderAudienceBadge(deck.targets)}
                    </div>
                  </div>
                  <h3 style="font-size:16px; font-weight:700; color:var(--text-main); margin-bottom:4px;">${escapeHtml(deck.title || deck.name || '')}</h3>
                  <span style="font-size:12px; color:var(--text-muted); display:block; margin-bottom:12px;">Autor: ${escapeHtml(deck.author || 'Mentor')}</span>
                  <span class="m2-pill ${deck.content_status === 'publicado' ? 'm2-pill-green' : deck.content_status === 'bloqueado' ? 'm2-pill-rose' : 'm2-pill-amber'}">${deck.content_status === 'publicado' ? 'Publicado' : deck.content_status === 'bloqueado' ? 'Bloqueado' : 'Em revisao'}</span>

                  <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; background:var(--bg-app); padding:10px; border-radius:var(--radius-md); font-size:11px; text-align:center;">
                    <div>
                      <span style="color:var(--text-muted); display:block;">Total</span>
                      <strong style="font-size:14px; color:var(--text-main);">${deckTotalCards}</strong>
                    </div>
                    <div>
                      <span style="color:var(--text-muted); display:block;">Vencidos</span>
                      <strong style="font-size:14px; color:var(--accent-amber);">${Number(deck.dueCards) || 0}</strong>
                    </div>
                    <div>
                      <span style="color:var(--text-muted); display:block;">Retenção</span>
                      <strong style="font-size:14px; color:var(--accent-green);">${Number(deck.retentionRate) || 0}%</strong>
                    </div>
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; pt:8px; border-top:1px solid var(--border-color);">
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-deck-editor" data-id="${deck.id}">
                      ${icon('edit', 14)} Cartões (${deckTotalCards})
                    </button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="set-content-status" data-content-type="flashcard_deck" data-id="${deck.id}" data-status="${deck.content_status === 'publicado' ? 'em_revisao' : 'publicado'}">${deck.content_status === 'publicado' ? 'Revisar' : 'Publicar'}</button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="open-manage-audience" data-id="${deck.id}" data-type="flashcard_deck" title="Definir Público-Alvo">
                      ${icon('users', 14)}
                    </button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" data-action="edit-mentor-deck" data-id="${deck.id}" title="Configurações do Baralho">
                      ${icon('settings', 14)}
                    </button>
                    <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" style="color:var(--accent-rose);" data-action="delete-mentor-deck" data-id="${deck.id}" title="Excluir Baralho">
                      ${icon('trash', 14)}
                    </button>
                  </div>
                  <button type="button" class="m2-btn m2-btn-sm m2-btn-primary" data-action="open-json-import-modal" data-mode="flashcards">
                    + Importar
                  </button>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        `}
        ${paging}
      </div>
    `;
  }

  // M12.1: gestão de cartões do mentor, separada da sessão de revisão do aluno.
export function viewMentorDeckEditor() {
    const decks = window.M2Data.flashcardDecks || [];
    const deck = decks.find(item => String(item.id) === String(state.activeDeckId));

    if (!deck) {
      return `<div class="m2-content"><div class="m2-page-header"><div class="m2-page-title-group"><span class="m2-eyebrow">M12 · Baralhos Oficiais</span><h1 class="m2-page-title">Baralho não encontrado</h1><p class="m2-page-subtitle">O baralho não está mais disponível na lista atual.</p></div><button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-flashcards">Voltar aos baralhos</button></div></div>`;
    }

    const cards = Array.isArray(deck.cards) ? deck.cards : [];
    const cardCount = `${cards.length} ${cards.length === 1 ? 'cartão' : 'cartões'}`;
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M12 · Editor de Baralho</span>
            <h1 class="m2-page-title">${escapeHtml(deck.title || deck.name || 'Baralho')}</h1>
            <p class="m2-page-subtitle">${cardCount} · ${escapeHtml(deck.subject || 'Geral')}. Crie e atualize os cartões distribuídos aos alunos.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="m2-btn m2-btn-secondary" data-nav="mentor-flashcards">Voltar aos baralhos</button>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-mentor-card" data-deck-id="${escapeHtml(deck.id)}">${icon('plus', 16)} Novo cartão</button>
          </div>
        </div>
        ${cards.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">${icon('layers', 24)}</div>
            <h2 style="font-size:18px; margin:0 0 8px;">Este baralho ainda não tem cartões</h2>
            <p style="color:var(--text-muted); margin:0 auto 16px; max-width:460px;">Adicione o primeiro cartão com frente, verso e uma dica opcional.</p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-mentor-card" data-deck-id="${escapeHtml(deck.id)}">${icon('plus', 16)} Adicionar cartão</button>
          </div>
        ` : `<div style="display:grid; gap:12px;">
          ${cards.map((card, index) => `
            <article class="m2-card" style="padding:18px;">
              <div style="display:flex; justify-content:space-between; gap:16px; align-items:flex-start;">
                <div style="min-width:0; flex:1;">
                  <span class="m2-eyebrow">Cartão ${index + 1}</span>
                  <div class="m2-grid-split" style="margin-top:10px; gap:12px;">
                    <div><strong style="font-size:12px; color:var(--text-muted);">Frente</strong><p style="margin:5px 0 0; white-space:pre-wrap;">${plainTextWithBreaks(card.front || '')}</p></div>
                    <div><strong style="font-size:12px; color:var(--text-muted);">Verso</strong><p style="margin:5px 0 0; white-space:pre-wrap;">${plainTextWithBreaks(card.back || '')}</p></div>
                  </div>
                  ${card.hint ? `<p style="font-size:12px; color:var(--text-muted); margin:12px 0 0;"><strong>Dica:</strong> ${escapeHtml(card.hint)}</p>` : ''}
                </div>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-mentor-card" data-card-id="${escapeHtml(card.id)}" data-deck-id="${escapeHtml(deck.id)}">${icon('edit', 14)} Editar</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-mentor-card" data-card-id="${escapeHtml(card.id)}" data-deck-id="${escapeHtml(deck.id)}">${icon('trash', 14)}</button>
                </div>
              </div>
            </article>`).join('')}
        </div>`}
      </div>`;
  }

  // M13: Materiais do Mentor
export function viewMentorMaterials() {
    const materials = window.M2Data.materials || [];
    const paging = mentorPagination('mentor-materials');
    const filterState = window.M2Data.mentorListState?.['mentor-materials']?.filters || {};
    const meta = window.M2Data.mentorListState?.['mentor-materials']?.meta;

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M13 · Materiais Didáticos</span>
            <h1 class="m2-page-title">Upload de Materiais & PDFs</h1>
            <p class="m2-page-subtitle">Vincule apostilas, resumos e leis esquematizadas aos tópicos do edital.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="upload-material">
            ${icon('upload', 16)} Novo Upload
          </button>
        </div>

        <!-- Barra de Busca e Filtro de Pasta de Materiais -->
        <div style="display:flex; gap:10px; align-items:center; margin-bottom:16px; flex-wrap:wrap; background:var(--bg-card); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div style="flex:1; min-width:220px; position:relative;">
            <input type="text" class="m2-field-input" data-action="mentor-filter-search" data-screen="mentor-materials" placeholder="Buscar material por título..." value="${escapeHtml(filterState.search || '')}" style="width:100%; padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
          </div>
          <div style="min-width:180px;">
            <input type="text" class="m2-field-input" data-action="mentor-filter-folder" data-screen="mentor-materials" placeholder="Filtrar por pasta/tópico..." value="${escapeHtml(filterState.folder || '')}" style="width:100%; padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:var(--bg-app); color:var(--text-main);">
          </div>
        </div>

        ${materials.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('upload', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum material didático encontrado</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Envie PDFs, resumos e esquemas para que os alunos possam baixar no painel de estudos.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="upload-material">
              ${icon('upload', 16)} Fazer Upload de Material
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${materials.map(m => `
              <div class="m2-card" style="flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
                <div>
                  <strong style="font-size:14px; color:var(--text-main);">${escapeHtml(m.title)}</strong>
                  <div style="display:flex; align-items:center; gap:8px; margin-top:4px; flex-wrap:wrap;">
                    <span style="font-size:12px; color:var(--text-muted);">${escapeHtml(m.folder || m.topic || 'Geral')} · ${escapeHtml(m.file_name || m.size || m.type || '')}</span>
                    ${renderAudienceBadge(m.targets)}
                  </div>
                </div>
                <div style="display:flex; gap:6px; align-items:center;">
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="download-material" data-id="${m.id}" data-url="${escapeHtml(m.url || m.external_url || '')}">Baixar</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="open-manage-audience" data-id="${m.id}" data-type="material" title="Definir Público-Alvo">${icon('users', 14)} Público</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-material" data-id="${m.id}">${icon('edit', 14)} Editar</button>
                  <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-material" data-id="${m.id}">${icon('trash', 14)}</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
        ${paging}
      </div>
    `;
  }

  // M14: Simulados do Mentor
export function viewMentorMockExams() {
    const mocks = window.M2Data.mockExams || [];
    const officialMocks = state.officialMocks || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M14 ? Provas e Agendamentos</span>
            <h1 class="m2-page-title">Configura??o de Simulados</h1>
            <p class="m2-page-subtitle">Publique provas oficiais por turma, acompanhe ades?o e confira o ranking real.</p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button type="button" class="m2-btn m2-btn-secondary" data-action="load-official-mocks">${icon('refresh-cw', 16)} Atualizar oficiais</button>
            <button type="button" class="m2-btn m2-btn-secondary" data-action="open-official-mock-modal">${icon('award', 16)} Publicar oficial</button>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-mock">${icon('plus', 16)} Criar Simulado</button>
          </div>
        </div>

        <div class="m2-card" style="margin-bottom:16px;">
          <div class="m2-card-header"><div><h2 style="font-size:18px;font-weight:700;">Simulados oficiais publicados</h2><p style="font-size:13px;color:var(--text-muted);margin-top:4px;">Cada resultado considera apenas alunos que aderiram ao ranking da turma.</p></div></div>
          ${officialMocks.length === 0 ? '<p class="m2-empty-inline">Ainda n?o h? simulados oficiais carregados. Use ?Atualizar oficiais? para consultar os publicados ou crie o primeiro.</p>' : `<div style="display:flex;flex-direction:column;gap:10px;">${officialMocks.map(mock => `<div style="display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px;border:1px solid var(--border-color);border-radius:10px;flex-wrap:wrap;"><div><strong>${escapeHtml(mock.name)}</strong><div style="font-size:13px;color:var(--text-muted);margin-top:4px;">${escapeHtml(mock.cohort_name)} ? ${mock.questions_count} quest?es ? ${mock.completed_count}/${mock.students_count} conclu?ram ? at? ${mock.max_attempts} tentativa(s)</div></div><button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="view-official-ranking" data-official-id="${escapeHtml(mock.id)}" data-name="${escapeHtml(mock.name)}">${icon('trophy', 14)} Ver ranking</button></div>`).join('')}</div>`}
        </div>

        ${mocks.length === 0 ? `<div class="m2-card" style="text-align:center; padding:36px 24px;"><h3 style="font-size:18px; font-weight:700;">Nenhum simulado individual carregado</h3><p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">Crie um simulado individual ou publique uma prova oficial para a turma.</p><button type="button" class="m2-btn m2-btn-primary" data-action="create-mock">${icon('plus', 16)} Criar Simulado</button></div>` : `<div style="display:flex; flex-direction:column; gap:16px;">${mocks.map(mock => `<div class="m2-card"><div class="m2-card-header"><div><h2 style="font-size:18px; font-weight:700;">${escapeHtml(mock.title || mock.name || 'Simulado')}</h2><span style="font-size:12px; color:var(--text-muted);">${escapeHtml(mock.boardStyle || 'Geral')} ? ${mock.questionsCount || 0} Quest?es</span></div><div style="display:flex; gap:6px;"><button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="edit-mock" data-id="${escapeHtml(mock.id)}">${icon('edit', 14)} Editar</button><button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" style="color:var(--accent-rose);" data-action="delete-mock" data-id="${escapeHtml(mock.id)}">${icon('trash', 14)}</button></div></div></div>`).join('')}</div>`}
      </div>
    `;
  }

  // M15: Metas e Desafios
export function viewMentorGoals() {
    const goals = window.M2Data.goals || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M15 · Engajamento</span>
            <h1 class="m2-page-title">Metas & Desafios da Turma</h1>
            <p class="m2-page-subtitle">Atribua metas semanais ou desafios de fim de semana para impulsionar a constância.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-primary" data-action="create-goal">
            ${icon('plus', 16)} Atribuir Nova Meta
          </button>
        </div>

        ${goals.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('target', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhuma meta atribuída à turma</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 16px; max-width:440px;">
              Crie metas semanais (ex: 200 questões, 15 horas líquidas) para engajar os alunos.
            </p>
            <button type="button" class="m2-btn m2-btn-primary" data-action="create-goal">
              ${icon('plus', 16)} Atribuir Meta
            </button>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${goals.map(g => `
              <div class="m2-card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <strong style="font-size:15px; color:var(--text-main);">${escapeHtml(g.title || g.name || 'Meta')}</strong>
                    ${g.is_challenge ? `<span class="m2-pill m2-pill-amber">Desafio</span>` : ''}
                  </div>
                  <span style="font-size:12px; color:var(--text-muted); display:block; margin-top:4px;">
                    Meta: <strong>${g.target} ${escapeHtml(g.unit || g.metric || '')}</strong> · Progresso: <strong>${g.progress || 0}/${g.target} (${Math.round(((g.progress || 0) / (g.target || 1)) * 100)}%)</strong>
                  </span>
                </div>
                <button type="button" class="m2-btn m2-btn-sm m2-btn-secondary" style="color:var(--accent-rose); border-color:var(--accent-rose);" data-action="delete-goal" data-id="${g.id}">
                  ${icon('x', 14)} Excluir Meta
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  // M16: Feedbacks & Correção de Redações
export function viewMentorFeedback() {
    const feedbacks = window.M2Data.mentorFeedbacks || [];
    const essaySubmissions = window.M2Data.mentorEssaySubmissions || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M16 · Canal Direto & Avaliações</span>
            <h1 class="m2-page-title">Feedbacks & Correção Pedagógica</h1>
            <p class="m2-page-subtitle">Avalie redações submetidas pelos alunos e responda orientações pedagógicas.</p>
          </div>
        </div>

        <!-- Seção 1: Redações Submetidas para Correção -->
        <div class="m2-card" style="margin-bottom:20px;">
          <div class="m2-card-header">
            <span class="m2-card-title">${icon('file-text', 18)} Redações Enviadas pelos Alunos</span>
            <span class="m2-pill m2-pill-teal">${essaySubmissions.length} redações</span>
          </div>

          ${essaySubmissions.length === 0 ? `
            <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
              <div style="color:var(--accent-teal); margin-bottom:8px;">${icon('award', 28)}</div>
              <strong>Nenhuma redação enviada para correção no momento</strong>
              <p style="font-size:12px; margin-top:4px;">Quando os alunos submeterem textos no módulo de Redações Discursivas, elas aparecerão aqui para avaliação e atribuição de nota.</p>
            </div>
          ` : `
            <div class="m2-table-wrapper">
              <table class="m2-table">
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Tema da Proposta</th>
                    <th>Extensão</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  ${essaySubmissions.map(sub => `
                    <tr>
                      <td>
                        <strong>${escapeHtml(sub.student_name || 'Aluno')}</strong>
                        <span style="display:block; font-size:11px; color:var(--text-muted);">ID: #${sub.student_id || sub.id}</span>
                      </td>
                      <td>
                        <strong style="color:var(--text-main);">${escapeHtml(sub.essay_title || 'Proposta de Redação')}</strong>
                        <span style="display:block; font-size:11px; color:var(--text-muted);">${sub.submitted_at ? new Date(sub.submitted_at).toLocaleDateString('pt-BR') : 'Enviado'}</span>
                      </td>
                      <td>
                        <span class="m2-pill m2-pill-gray">${Number(sub.word_count) || 0} palavras</span>
                      </td>
                      <td>
                        ${sub.status === 'graded' ? `
                          <span class="m2-pill m2-pill-green">Corrigida (${Number(sub.total_score)} pts)</span>
                        ` : `
                          <span class="m2-pill m2-pill-amber">Aguardando Correção</span>
                        `}
                      </td>
                      <td>
                        <button type="button" class="m2-btn m2-btn-sm ${sub.status === 'graded' ? 'm2-btn-secondary' : 'm2-btn-primary'}" data-action="open-grade-essay" data-id="${sub.id}">
                          ${sub.status === 'graded' ? 'Reavaliar' : 'Avaliar e Dar Nota'}
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <!-- Seção 2: Feedbacks e Anotações -->
        <div class="m2-card">
          <div class="m2-card-header">
            <span class="m2-card-title">${icon('message-square', 18)} Anotações e Atendimento</span>
            <span class="m2-pill m2-pill-teal">${feedbacks.length} feedbacks</span>
          </div>

          ${feedbacks.length === 0 ? `
            <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
              <div style="color:var(--accent-teal); margin-bottom:8px;">${icon('message-square', 28)}</div>
              <strong>Nenhum feedback pendente</strong>
              <p style="font-size:12px; margin-top:4px;">Quando os alunos compartilharem notas de estudo ou solicitarem orientação pedagógica, as notificações aparecerão aqui.</p>
            </div>
          ` : `
            <div style="display:flex; flex-direction:column; gap:12px; margin-top:12px;">
              ${feedbacks.map(f => `
                <div class="m2-card" style="background:var(--bg-app); border:1px solid var(--border-color);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <p style="font-size:13px; color:var(--text-muted); margin:0;">
                      O(A) aluno(a) <strong>${escapeHtml(f.studentName || 'Aluno')}</strong> compartilhou uma anotação com você.
                    </p>
                    ${f.reply ? `<span class="m2-pill m2-pill-green">Respondido</span>` : `<span class="m2-pill m2-pill-amber">Pendente</span>`}
                  </div>
                  ${f.message ? `<div style="margin:8px 0; font-size:13px; color:var(--text-main); font-style:italic;">"${escapeHtml(f.message)}"</div>` : ''}
                  ${f.reply ? `<div style="margin:8px 0; font-size:12px; color:var(--accent-teal);"><strong>Sua resposta:</strong> ${escapeHtml(f.reply)}</div>` : ''}
                  <div style="margin-top:8px;">
                    <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="open-shared-note" data-id="${f.id}">${f.reply ? 'Atualizar Resposta' : 'Responder Feedback'}</button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }

  // M17: Relatórios
export function viewMentorReports() {
    const cohorts = window.M2Data.cohorts || [];
    const cohortName = cohorts[0] ? cohorts[0].name : 'Geral';

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M17 · Business Intelligence</span>
            <h1 class="m2-page-title">Relatórios & Métricas da Mentoria</h1>
            <p class="m2-page-subtitle">Aproveitamento médio, curvas de retenção e exportação de relatórios em CSV e PDF.</p>
          </div>
          <button type="button" class="m2-btn m2-btn-secondary" data-action="export-report">
            ${icon('download', 16)} Exportar CSV
          </button>
        </div>

        <div class="m2-card">
          <p style="font-size:13px; color:var(--text-muted);">
            Relatório consolidado de constância e desempenho da <strong>${cohortName}</strong>.
          </p>
          ${cohorts.length === 0 ? `
            <div style="text-align:center; padding:24px; color:var(--text-muted);">
              <p>Cadastre turmas e matricule alunos para gerar relatórios consolidados de desempenho.</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // M18: Produtos Getfy
export function viewMentorProducts() {
    const products = window.M2Data.mentorProducts || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M18 · Integração Comercial Getfy</span>
            <h1 class="m2-page-title">Produtos & Checkout Getfy</h1>
            <p class="m2-page-subtitle">Vincule os produtos cadastrados no checkout Getfy com as turmas e capabilities da Mentoria 2.0.</p>
          </div>
        </div>

        ${products.length === 0 ? `
          <div class="m2-card" style="text-align:center; padding:48px 24px;">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--bg-surface); display:grid; place-items:center; margin:0 auto 12px; color:var(--accent-teal);">
              ${icon('shopping-bag', 24)}
            </div>
            <h3 style="font-size:18px; font-weight:700;">Nenhum produto Getfy vinculado à Mentoria 2.0</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:6px auto 0; max-width:440px;">
              Habilite a Mentoria 2.0 nos produtos do seu checkout Getfy para que as matrículas sejam sincronizadas automaticamente.
            </p>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${products.map(p => `
              <div class="m2-card">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
                  <div>
                    <strong>${escapeHtml(p.name || p.title || 'Produto')}</strong>
                    <span style="font-size:12px; color:var(--text-muted); display:block;">Produto ID: #${escapeHtml(p.id)} · ${p.mentoria2_enabled ? 'Matrículas da Mentoria ativas' : 'Não concede matrícula na Mentoria'}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:flex-end;">
                    <span class="m2-pill ${p.mentoria2_enabled ? 'm2-pill-teal' : 'm2-pill-gray'}">${p.mentoria2_enabled ? 'Vinculado' : 'Não vinculado'}</span>
                    <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="${p.mentoria2_enabled ? 'disable-mentoria-product' : 'enable-mentoria-product'}" data-product-id="${escapeHtml(p.id)}">${p.mentoria2_enabled ? 'Desvincular' : 'Vincular à Mentoria'}</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  }

  // M19: Configurações do Mentor
export function viewMentorSettings() {
    const banner = window.M2Data.mentorship?.student_home_banner || null;
    const bannerPreview = banner?.url
      ? `<img src="${escapeHtml(banner.url)}" alt="Pr?via da capa da ?rea do aluno">`
      : '';
    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M19 ? Par?metros Globais</span>
            <h1 class="m2-page-title">Configura??es da Mentoria</h1>
            <p class="m2-page-subtitle">Pol?ticas padr?o de repeti??o espa?ada, modelo de IA e gamifica??o.</p>
          </div>
        </div>

        <div class="m2-settings-grid">
          <section class="m2-card m2-banner-settings-card">
            <div class="m2-settings-card-heading"><div><h2 class="m2-card-title">${icon('image', 18)} Capa da ?rea do aluno</h2><p>Exibida no in?cio do painel do aluno. Sem imagem publicada, nenhuma capa ? mostrada.</p></div></div>
            <div class="m2-banner-settings-preview ${bannerPreview ? 'is-visible' : ''}">${bannerPreview}</div>
            <input id="m2-student-home-banner-input" type="file" accept="image/jpeg,image/png,image/webp" hidden>
            <div class="m2-banner-settings-actions">
              <button type="button" class="m2-btn m2-btn-primary" data-action="choose-student-home-banner">${icon('upload', 16)} Enviar capa</button>
              <button type="button" class="m2-btn m2-btn-secondary" data-action="remove-student-home-banner" ${bannerPreview ? '' : 'hidden'}>Remover capa</button>
            </div>
            <p class="m2-form-hint">Use JPG, PNG ou WebP de at? 5 MB. Para melhor resultado, use uma imagem horizontal (propor??o aproximada de 16:5).</p>
          </section>
          <div class="m2-card" style="max-width:680px;">
            <h2 class="m2-card-title">${icon('settings', 18)} Par?metros do Provedor de IA</h2>
            <p style="font-size:13px; color:var(--text-muted);">Integra??o via plugin <strong>ai-member</strong> do Getfy e adaptador OpenRouter.</p>
          </div>
        </div>
      </div>
    `;
  }

  // M20: Auditoria
export function viewMentorAudit() {
    const logs = window.M2Data.auditLogs || [];

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">M20 · Segurança & Rastreabilidade</span>
            <h1 class="m2-page-title">Trilha de Auditoria</h1>
            <p class="m2-page-subtitle">Registro cronológico e imutável de todas as ações de mentores, alunos e jobs automáticos.</p>
          </div>
        </div>

        <div class="m2-card">
          <div class="m2-table-wrapper">
            <table class="m2-table">
              <thead>
                <tr>
                  <th>Data / Hora</th>
                  <th>Ator</th>
                  <th>Ação</th>
                  <th>Alvo</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                ${logs.length === 0 ? `
                  <tr>
                    <td colspan="5" style="text-align:center; padding:32px; color:var(--text-muted);">
                      Nenhum registro de auditoria gerado até o momento.
                    </td>
                  </tr>
                ` : logs.map(log => `
                  <tr>
                    <td><span style="font-size:11px; color:var(--text-dim);">${log.timestamp}</span></td>
                    <td><strong>${log.actor}</strong></td>
                    <td><span class="m2-pill m2-pill-gray">${log.action}</span></td>
                    <td>${log.target}</td>
                    <td>${log.details}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // Central de Prompts para IA Externa e Importação JSON
export function viewMentorPrompts() {
    const tab = state.promptTab || 'questions';
    const prompts = window.M2Data.prompts || {};
    const examples = window.M2Data.promptExamples || {};

    const currentPrompt = prompts[tab] || '';
    const currentExample = examples[tab] || '';

    const tabConfig = {
      questions: {
        title: 'Gerador de Questões Inéditas para Concursos',
        desc: 'Cria questões no formato múltipla escolha ou certo/errado, estruturadas com hierarquia de matéria macro, assunto/lei, alternativas sem letras prefixadas e justificativa fundamentada.',
        target: 'Banco de Questões da Turma',
        icon: 'circle-help'
      },
      flashcards: {
        title: 'Gerador de Baralhos de Flashcards (Frente & Verso)',
        desc: 'Gera cartões de estudo ativo com gatilhos rápidos na frente e respostas explicativas no verso, prontos para o algoritmo de repetição espaçada SM-2 / FSRS.',
        target: 'Baralhos Oficiais da Mentoria',
        icon: 'rotate-3d'
      },
      catalog: {
        title: 'Estruturador de Edital & Árvore Programática',
        desc: 'Analisa o conteúdo programático bruto do Diário Oficial ou edital em PDF e extrai a hierarquia de disciplinas, pesos e tópicos verticalizados em formato padrão.',
        target: 'Catálogo de Concursos & Editais',
        icon: 'file-text'
      }
    };

    const cfg = tabConfig[tab] || tabConfig.questions;

    return `
      <div class="m2-content">
        <div class="m2-page-header">
          <div class="m2-page-title-group">
            <span class="m2-eyebrow">Central Pedagógica · Engenharia de Prompts & IA Externa</span>
            <h1 class="m2-page-title">Prompts IA & Importação JSON</h1>
            <p class="m2-page-subtitle">Copie os prompts oficiais homologados para usar em IAs externas (ChatGPT, Claude, Gemini, DeepSeek) e importe o conteúdo gerado via JSON diretamente para a plataforma.</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="m2-btn m2-btn-primary" data-action="open-json-import-modal" data-mode="${tab}">
              ${icon('download', 16)} Importar JSON
            </button>
          </div>
        </div>

        <!-- Seletor de Tipo de Recurso -->
        <div class="m2-card" style="padding:12px 18px; margin-bottom:18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button type="button" class="m2-btn ${tab === 'questions' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-prompt-tab" data-tab="questions">
                ${icon('circle-help', 14)} 1. Questões de Concurso
              </button>
              <button type="button" class="m2-btn ${tab === 'flashcards' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-prompt-tab" data-tab="flashcards">
                ${icon('rotate-3d', 14)} 2. Baralhos de Flashcards
              </button>
              <button type="button" class="m2-btn ${tab === 'catalog' ? 'm2-btn-primary' : 'm2-btn-secondary'} m2-btn-sm" data-action="set-prompt-tab" data-tab="catalog">
                ${icon('file-text', 14)} 3. Edital Verticalizado
              </button>
            </div>
            <div style="display:flex; align-items:center; gap:6px; font-size:12px; color:var(--accent-teal); font-weight:600;">
              ${icon('sparkles', 14)} Homologado para GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro e DeepSeek-V3
            </div>
          </div>
        </div>

        <!-- Guia do Fluxo em 3 Etapas -->
        <div class="m2-grid-3" style="margin-bottom:18px;">
          <div class="m2-card" style="padding:14px; border-left:3px solid var(--accent-teal);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="m2-pill m2-pill-teal">Passo 1</span>
              <strong style="font-size:13px; color:var(--text-main);">Copiar o Prompt</strong>
            </div>
            <p style="font-size:12px; color:var(--text-muted); margin:0;">
              Copie o template estruturado abaixo e preencha o assunto/lei e o material-base no seu chat de IA.
            </p>
          </div>
          <div class="m2-card" style="padding:14px; border-left:3px solid var(--accent-amber);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="m2-pill m2-pill-amber">Passo 2</span>
              <strong style="font-size:13px; color:var(--text-main);">Gerar na IA Externa</strong>
            </div>
            <p style="font-size:12px; color:var(--text-muted); margin:0;">
              A IA externa processa o PDF ou texto da lei e gera estritamente o código JSON estruturado.
            </p>
          </div>
          <div class="m2-card" style="padding:14px; border-left:3px solid var(--accent-green);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="m2-pill m2-pill-green">Passo 3</span>
              <strong style="font-size:13px; color:var(--text-main);">Importar em 1 Clique</strong>
            </div>
            <p style="font-size:12px; color:var(--text-muted); margin:0;">
              Abra o importador, cole o JSON gerado e a plataforma cadastra e valida tudo automaticamente.
            </p>
          </div>
        </div>

        <!-- Área Principal: Prompt e Exemplo de JSON -->
        <div class="m2-grid-split">
          <!-- Bloco do Prompt -->
          <div class="m2-card">
            <div class="m2-card-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-teal-soft); color:var(--accent-teal); display:grid; place-items:center;">
                  ${icon(cfg.icon, 16)}
                </div>
                <div>
                  <h2 class="m2-card-title">${cfg.title}</h2>
                  <span style="font-size:11px; color:var(--text-muted);">Destino padrão: ${cfg.target}</span>
                </div>
              </div>
              <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="copy-import-prompt" data-mode="${tab}">
                ${icon('copy', 14)} Copiar Prompt
              </button>
            </div>

            <p style="font-size:12px; color:var(--text-muted); line-height:1.5; margin-bottom:12px;">
              ${cfg.desc}
            </p>

            <div style="position:relative;">
              <pre style="background:var(--bg-app); border:1px solid var(--border-color); padding:14px; border-radius:var(--radius-md); font-family:var(--font-mono, monospace); font-size:11px; color:var(--text-main); max-height:420px; overflow-y:auto; white-space:pre-wrap; line-height:1.5;">${currentPrompt}</pre>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; flex-wrap:wrap; gap:8px;">
              <span style="font-size:11px; color:var(--text-muted);">
                💡 Dica: Ao anexar PDFs no ChatGPT ou Claude, use este prompt na mensagem inicial.
              </span>
              <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="copy-import-prompt" data-mode="${tab}">
                ${icon('copy', 14)} Copiar Prompt Completo
              </button>
            </div>
          </div>

          <!-- Bloco do Exemplo de JSON Esperado -->
          <div class="m2-card">
            <div class="m2-card-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-md); background:var(--accent-green-soft); color:var(--accent-green); display:grid; place-items:center;">
                  ${icon('file-code', 16)}
                </div>
                <div>
                  <h2 class="m2-card-title">Estrutura JSON Homologada</h2>
                  <span style="font-size:11px; color:var(--text-muted);">Exemplo válido pronto para teste imediato</span>
                </div>
              </div>
              <button type="button" class="m2-btn m2-btn-secondary m2-btn-sm" data-action="open-json-import-modal" data-mode="${tab}">
                ${icon('sparkles', 14)} Testar no Importador
              </button>
            </div>

            <p style="font-size:12px; color:var(--text-muted); line-height:1.5; margin-bottom:12px;">
              A plataforma aceita exatamente esta chave de payload. Você pode testar a importação deste exemplo agora mesmo.
            </p>

            <div style="position:relative;">
              <pre style="background:var(--bg-app); border:1px solid var(--border-color); padding:14px; border-radius:var(--radius-md); font-family:var(--font-mono, monospace); font-size:11px; color:var(--accent-teal); max-height:420px; overflow-y:auto; white-space:pre-wrap; line-height:1.5;">${currentExample}</pre>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:12px;">
              <button type="button" class="m2-btn m2-btn-primary m2-btn-sm" data-action="open-json-import-modal" data-mode="${tab}">
                ${icon('download', 16)} Abrir Importador JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
