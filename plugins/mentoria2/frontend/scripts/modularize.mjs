import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '../src');
const modulesDir = join(srcDir, 'modules');
mkdirSync(modulesDir, { recursive: true });

// Read original monolithic backup or current m2-app.js
const originalPath = join(srcDir, 'm2-app.original.js');
let content;
try {
  content = readFileSync(originalPath, 'utf8');
} catch {
  content = readFileSync(join(srcDir, 'm2-app.js'), 'utf8');
  writeFileSync(originalPath, content);
}

const lines = content.split('\n');

function getRange(startLine, endLine) {
  return lines.slice(startLine - 1, endLine).join('\n');
}

// 1. core.js
const coreCode = `import { icon as renderIconSvg } from '../m2-icons.js';
import { M2Data } from '../m2-data.js';
import { requestJson as api } from '../api/client.js';
import { createMentoriaContext } from '../app/context.js';
import { escapeHtml, escapeRegExp, plainTextWithBreaks } from '../utils/escape-html.js';

if (typeof window === 'undefined') {
  globalThis.window = globalThis;
}
if (!window.M2Data) {
  window.M2Data = M2Data || {};
}

export const icon = (name, size, cls) => {
  if (typeof window !== 'undefined' && window.icon) return window.icon(name, size, cls);
  return renderIconSvg(name, size, cls);
};

` + getRange(17, 592) + `

let activeRenderer = () => {};
export function setRenderer(fn) {
  activeRenderer = fn;
}

export function render() {
  if (activeRenderer) activeRenderer();
}

export function applyTheme() {
  if (state.theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('m2_theme', state.theme);
  applyTheme();
  render();
  showToast(\`Tema alterado para modo \${state.theme === 'dark' ? 'Escuro' : 'Claro'}\`);
}

export function navigate(screenName, newMode = null) {
  if (newMode) state.mode = newMode;
  state.screen = screenName;
  state.sidebarOpen = false;
  window.location.hash = \`#\${state.mode}/\${state.screen}\`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

export {
  state,
  api,
  escapeHtml,
  escapeRegExp,
  plainTextWithBreaks,
  createMentoriaContext,
  getAppRoot,
  showToast,
  formatTimer,
  hydrateDataFromPayload
};
`;

writeFileSync(join(modulesDir, 'core.js'), coreCode);

// 2. shell.js
const shellCode = `import { state, icon, escapeHtml, plainTextWithBreaks, formatTimer } from './core.js';

export ` + getRange(628, 835) + `

export ` + getRange(4944, 5471) + `
`;

writeFileSync(join(modulesDir, 'shell.js'), shellCode);

// 3. routine.js
const routineCode = `import { state, icon, escapeHtml, formatTimer } from './core.js';

export ` + getRange(842, 1259).replace(/\n  function view/g, '\nexport function view') + `
`;

writeFileSync(join(modulesDir, 'routine.js'), routineCode);

// 4. curriculum.js
const curriculumCode = `import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js';

export ` + getRange(1262, 1344) + `

export ` + getRange(4668, 4865).replace(/\n  function view/g, '\nexport function view') + `
`;

writeFileSync(join(modulesDir, 'curriculum.js'), curriculumCode);

// 5. study.js
const studyCode = `import { state, icon, escapeHtml, plainTextWithBreaks, formatTimer } from './core.js';

export ` + getRange(1347, 2338) + `

export ` + getRange(2881, 2968) + `

export ` + getRange(4381, 4539) + `
`;

writeFileSync(join(modulesDir, 'study.js'), studyCode);

// 6. metrics.js
const metricsCode = `import { state, icon, escapeHtml, formatTimer } from './core.js';

export ` + getRange(2341, 2878).replace(/\n  function view/g, '\nexport function view') + `
`;

writeFileSync(join(modulesDir, 'metrics.js'), metricsCode);

// 7. mentor.js
const mentorCode = `import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js';

export ` + getRange(3094, 4378).replace(/\n  function view/g, '\nexport function view') + `
`;

writeFileSync(join(modulesDir, 'mentor.js'), mentorCode);

// 8. ai.js
const aiCode = `import { state, icon, escapeHtml, plainTextWithBreaks } from './core.js';

export ` + getRange(2971, 3087).replace(/\n  function view/g, '\nexport function view') + `

export ` + getRange(4540, 4667) + `
`;

writeFileSync(join(modulesDir, 'ai.js'), aiCode);

// 9. events.js
const eventsCode = `import {
  state,
  api,
  icon,
  escapeHtml,
  plainTextWithBreaks,
  formatTimer,
  showToast,
  toggleTheme,
  navigate,
  render
} from './core.js';

export ` + getRange(5530, 7434) + `

export function destroyEvents() {
  if (typeof window !== 'undefined') {
    if (window.__m2TimerInterval) {
      clearInterval(window.__m2TimerInterval);
      window.__m2TimerInterval = null;
    }
    if (window.__m2KeydownHandler) {
      document.removeEventListener('keydown', window.__m2KeydownHandler);
      window.__m2KeydownHandler = null;
    }
  }
}
`;

writeFileSync(join(modulesDir, 'events.js'), eventsCode);

// 10. m2-app.js orchestrator
const m2AppCode = `/**
 * Mentoria 2.0 - Motor da Aplicação (Arquitetura Modular)
 * Coordenador central que orquestra módulos por domínio:
 * - core: estado reativo, contextos, utilitários, temas e navegação
 * - shell: topbar, sidebar, mini-timer flutuante, chat de IA e modais
 * - routine: rotina de estudos, onboarding, visão de hoje e planejamento
 * - curriculum: edital verticalizado, calculadora cebraspe e radar de editais
 * - study: questões, flashcards, revisões, simulados, cadernos e redação
 * - metrics: progresso, metas semanais e ranking
 * - mentor: radar do mentor, acompanhamento de alunos, turmas e moderação
 * - ai: tutor pedagógico, memória cognitiva e configurações
 * - events: manipuladores de eventos e atalhos de teclado
 */

import {
  state,
  navigate,
  showToast,
  toggleTheme,
  render as coreRender,
  setRenderer,
  applyTheme,
  getAppRoot,
  createMentoriaContext,
  hydrateDataFromPayload,
  icon
} from './modules/core.js';

import {
  renderSidebar,
  renderTopbar,
  renderFloatingMiniTimer,
  renderFloatingAiChat,
  renderModals
} from './modules/shell.js';

import {
  viewEntry,
  viewOnboarding,
  viewToday,
  viewPlanning
} from './modules/routine.js';

import {
  viewSyllabus,
  viewCalculadora,
  viewRadarEditais
} from './modules/curriculum.js';

import {
  viewQuestions,
  viewStudySession,
  viewFlashcards,
  viewDeck,
  viewReviews,
  viewMockExams,
  viewMockResult,
  viewErrorNotebook,
  viewNotebooks,
  viewNoteEditor,
  viewMaterials,
  viewCourses,
  viewRedacao
} from './modules/study.js';

import {
  viewProgress,
  viewGoals,
  viewRanking
} from './modules/metrics.js';

import {
  viewMentorOverview,
  viewMentorStudents,
  viewMentorStudentProfile,
  viewMentorWorkspace,
  viewMentorCohorts,
  viewMentorCohortDetail,
  viewMentorContests,
  viewMentorContestDetail,
  viewMentorImportReview,
  viewMentorContents,
  viewMentorQuestions,
  viewMentorFlashcards,
  viewMentorMaterials,
  viewMentorMockExams,
  viewMentorGoals,
  viewMentorFeedback,
  viewMentorReports,
  viewMentorProducts,
  viewMentorSettings,
  viewMentorAudit,
  viewMentorPrompts
} from './modules/mentor.js';

import {
  viewTutor,
  viewAiMemory,
  viewSettings,
  viewHelp
} from './modules/ai.js';

import {
  setupEvents,
  destroyEvents
} from './modules/events.js';

/**
 * Router Principal que seleciona a tela conforme state.mode e state.screen
 */
export function renderScreen() {
  const s = state.screen;

  if (state.mode === 'mentor') {
    switch (s) {
      case 'mentor-overview': return viewMentorOverview();
      case 'mentor-students': return viewMentorStudents();
      case 'mentor-student-profile': return viewMentorStudentProfile();
      case 'mentor-workspace': return viewMentorWorkspace();
      case 'mentor-cohorts': return viewMentorCohorts();
      case 'mentor-cohort-detail': return viewMentorCohortDetail();
      case 'mentor-contests': return viewMentorContests();
      case 'mentor-contest-detail': return viewMentorContestDetail();
      case 'mentor-import-review': return viewMentorImportReview();
      case 'mentor-contents': return viewMentorContents();
      case 'mentor-questions': return viewMentorQuestions();
      case 'mentor-flashcards': return viewMentorFlashcards();
      case 'mentor-materials': return viewMentorMaterials();
      case 'mentor-mock-exams': return viewMentorMockExams();
      case 'mentor-goals': return viewMentorGoals();
      case 'mentor-feedback': return viewMentorFeedback();
      case 'mentor-reports': return viewMentorReports();
      case 'mentor-products': return viewMentorProducts();
      case 'mentor-settings': return viewMentorSettings();
      case 'mentor-audit': return viewMentorAudit();
      case 'mentor-prompts': return viewMentorPrompts();
      default: return viewMentorOverview();
    }
  }

  if (state.mode === 'workspace') {
    return viewMentorWorkspace();
  }

  switch (s) {
    case 'entry': return viewEntry();
    case 'onboarding': return viewOnboarding();
    case 'today': return viewToday();
    case 'planning': return viewPlanning();
    case 'syllabus': return viewSyllabus();
    case 'questions': return viewQuestions();
    case 'study-session': return viewStudySession();
    case 'flashcards': return viewFlashcards();
    case 'deck': return viewDeck();
    case 'reviews': return viewReviews();
    case 'mock-exams': return viewMockExams();
    case 'mock-result': return viewMockResult();
    case 'error-notebook': return viewErrorNotebook();
    case 'notebooks': return viewNotebooks();
    case 'note-editor': return viewNoteEditor();
    case 'progress':
    case 'metrics':
      return viewProgress();
    case 'goals': return viewGoals();
    case 'ranking': return viewRanking();
    case 'materials': return viewMaterials();
    case 'courses': return viewCourses();
    case 'tutor': return viewTutor();
    case 'redacao': return viewRedacao();
    case 'ai-memory': return viewAiMemory();
    case 'calculadora': return viewCalculadora();
    case 'radar-editais': return viewRadarEditais();
    case 'settings': return viewSettings();
    case 'help': return viewHelp();
    default: return viewToday();
  }
}

/**
 * Renderização Principal da Aplicação
 */
export function render() {
  const appRoot = getAppRoot();
  if (!appRoot) return;

  appRoot.innerHTML = \`
    <!-- Barra Superior de Alternância Rápida entre Papéis -->
    <div class="m2-mode-bar">
      <div class="m2-mode-selector">
        <span style="font-weight:700; color:var(--text-main); margin-right:8px;">Modo de Visualização:</span>
        <button type="button" class="m2-mode-btn \${state.mode === 'mentor' ? 'active' : ''}" data-action="switch-mode" data-mode="mentor">
          \${icon('shield', 14)} Painel do Mentor (\${window.M2Data?.mentor?.name || 'Mentor'})
        </button>
        <button type="button" class="m2-mode-btn \${state.mode === 'student' ? 'active' : ''}" data-action="switch-mode" data-mode="student">
          \${icon('user', 14)} Área do Aluno (\${window.M2Data?.student?.name || 'Aluno'})
        </button>
        <button type="button" class="m2-mode-btn \${state.mode === 'workspace' ? 'active' : ''}" data-action="switch-mode" data-mode="workspace">
          \${icon('layers', 14)} Workspace do Aluno (\${window.M2Data?.student?.name || 'Aluno'})
        </button>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="m2-pill m2-pill-teal" style="font-size:11px;">MySQL Conectado (\${(window.M2Data?.mentorStudents || window.M2Data?.students || []).length} Alunos)</span>
      </div>
    </div>

    <div class="m2-wrapper">
      \${renderSidebar()}
      <main class="m2-main">
        \${renderTopbar()}
        <div id="m2-screen-container">
          \${renderScreen()}
        </div>
      </main>
    </div>

    <!-- Mini-Timer Flutuante e Modo Pomodoro -->
    \${renderFloatingMiniTimer()}

    <!-- Balão de Chat de IA Flutuante (Tutor IA 24h) -->
    \${renderFloatingAiChat()}

    <!-- Modais Interativos -->
    \${renderModals()}
  \`;

  const mobileBtn = document.getElementById('m2-mobile-menu-btn');
  if (mobileBtn && typeof window !== 'undefined' && window.innerWidth <= 768) {
    mobileBtn.style.display = 'grid';
  }
}

setRenderer(render);

/**
 * Desmontagem e Limpeza Completa
 */
export function destroyMentoria2App() {
  destroyEvents();
}

/**
 * Inicialização e Bootstrapping
 */
export function initMentoria2App(options = {}) {
  destroyMentoria2App();

  const context = createMentoriaContext(options);
  state.context = context;
  state.mode = context.mode;
  if (context.tenantId) state.tenantId = context.tenantId;
  state.workspaceBase = context.workspaceBase;
  if (options.screen) state.screen = options.screen;
  if (options.payload) {
    hydrateDataFromPayload(options.payload);
  }
  applyTheme();
  setupEvents();
  render();
}

export { state, navigate, showToast, toggleTheme };

if (typeof window !== 'undefined') {
  window.M2App = {
    state,
    navigate,
    showToast,
    toggleTheme,
    render,
    initMentoria2App,
    destroyMentoria2App
  };
}

export default {
  state,
  navigate,
  showToast,
  toggleTheme,
  render,
  initMentoria2App,
  destroyMentoria2App
};
`;

writeFileSync(join(srcDir, 'm2-app.js'), m2AppCode);

console.log('Modularization complete! m2-app.js is now clean orchestrator.');

