/**
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
  icon,
  escapeHtml
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
  viewMockTaking,
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
  viewMentorDeckEditor,
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
import { sanitizeRenderedHtml } from './utils/escape-html.js';

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
      case 'mentor-deck-editor': return viewMentorDeckEditor();
      case 'mentor-materials': return viewMentorMaterials();
      case 'mentor-mock-exams': return viewMentorMockExams();
      case 'mentor-goals': return viewMentorGoals();
      case 'mentor-feedback': return viewMentorFeedback();
      case 'mentor-reports': return viewMentorReports();
      case 'mentor-products': return viewMentorProducts();
      case 'mentor-settings': return viewMentorSettings();
      case 'mentor-audit': return viewMentorAudit();
      case 'mentor-prompts': return viewMentorPrompts();
      case 'mentor-help': return viewHelp();
      default: return viewMentorOverview();
    }
  }

  const renderStudentScreen = () => {
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
    case 'mock-taking': return viewMockTaking();
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
  };

  if (state.mode === 'workspace') {
    return viewMentorWorkspace(renderStudentScreen());
  }

  return renderStudentScreen();
}

/**
 * Renderização Principal da Aplicação
 */
export function render() {
  const appRoot = getAppRoot();
  if (!appRoot) return;

  const markup = `
    <div class="m2-wrapper ${state.sidebarCollapsed ? 'sidebar-collapsed' : ''}">
      ${renderSidebar()}
      <main class="m2-main">
        ${renderTopbar()}
        <div id="m2-screen-container">
          ${renderScreen()}
        </div>
      </main>
    </div>

    <!-- Mini-Timer Flutuante e Modo Pomodoro -->
    ${(state.mode !== 'mentor' && (!state.screen || !state.screen.startsWith('mentor-'))) ? renderFloatingMiniTimer() : ''}

    <!-- Balão de Chat de IA Flutuante (Tutor IA 24h) -->
    ${(state.mode !== 'mentor' && (!state.screen || !state.screen.startsWith('mentor-'))) ? renderFloatingAiChat() : ''}

    <!-- Modais Interativos -->
    ${renderModals()}
  `;
  appRoot.innerHTML = sanitizeRenderedHtml(markup);

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
  else if (typeof window !== 'undefined') {
    const match = window.location.hash.match(/^#(student|mentor|workspace)\/([a-z0-9-]+)$/i);
    // O hash é somente uma preferência de tela. O contexto do servidor continua
    // definindo o perfil e impede que um link troque a área autorizada.
    if (match && match[1] === context.mode) {
      state.screen = match[2];
    }
  }
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


