import { icon as renderIconSvg } from '../m2-icons.js';
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

const state = {
  mode: 'student', // 'student' | 'mentor' | 'workspace'
  screen: 'today', // Rota ativa
  theme: (typeof localStorage !== 'undefined' && localStorage.getItem('m2_theme')) || 'dark',
  sidebarOpen: false,
  sidebarCollapsed: typeof localStorage !== 'undefined' ? localStorage.getItem('m2_sidebar_collapsed') === 'true' : false,
  currentTargets: [{ type: 'global', id: null }],
  managingAudienceItem: null,
  editingDeck: null,
  editingMaterial: null,
  contestId: null,
  tenantId: 1,
  workspaceBase: null,
  context: null,
  activeEssayId: null,
  activeMockId: null,
  mockAttempt: null,
  mockQuestionIndex: 0,
  mockAnswerDrafts: {},
  mockTimerId: null,

  // Estado de Resolução de Questão
  currentQuestionIndex: 0,
  selectedOption: null,
  answeredQuestion: false,
  questionDrafts: {},
  questionResults: {},
  questionHistory: {},
  activeHistoryQuestionId: null,
  loadingHistoryQuestionId: null,

  // Estado de Estudo por Matérias e Tópicos (Aprovai-SaaS)
  selectedSubjectId: null,
  selectedTopicId: 'all',
  questionDifficultyFilter: 'all',
  studySessionComplete: false,
  studySessionXpGained: 0,
  studySessionCorrectCount: 0,

  // Estado de Flashcards
  cardRevealed: false,
  currentCardIndex: 0,
  activeDeckId: null,

  // Estado de Anotação
  noteContent: window.M2Data?.notebooks?.[0]?.pages?.[0]?.content || '',
  noteSaveStatus: 'Ainda não salvo',
  activeNotebookId: null,
  noteTitle: '',
  noteFolder: 'Geral',
  noteColor: '#4f8ef7',
  noteEdictId: '',
  noteSubjectId: '',
  noteTopicId: '',
  noteSharedWithMentor: false,
  notePreviewVisible: false,
  notebookSearch: '',

  // Estado de Planejamento
  planningView: 'week', // 'week' | 'month'
  replanned: false,
  adaptiveProposal: null,
  notifications: window.M2Data?.notifications?.items || [],
  calendarCursor: new Date().toISOString().slice(0, 10),
  calendarItems: [],
  calendarRangeKey: '',
  calendarDay: null,
  planDraft: null,
  scheduleCompletion: null,

  // Estado de Onboarding
  onboardingStep: 1,

  // Filtros de Questões e Métricas
  questionSubjectFilter: 'all',
  questionStatusFilter: 'all',
  metricsPeriod: '30d',
  collapsedSubjects: {},

  // Chat do Tutor
  tutorMessages: [...(window.M2Data?.tutorChat || [])],

  // Mini-Timer Flutuante e Pomodoro (Inicia fechado como ícone por padrão, igual ao Tutor IA)
  timerVisible: false,
  timerMinimized: false,
  timerRunning: false,
  timerMode: 'pomodoro', // 'pomodoro' | 'stopwatch'
  timerSeconds: 25 * 60,
  timerSubjectId: null,
  pomodoroPhase: 'focus', // 'focus' | 'break'
  pomodoroCycle: 1,

  // Balão de Chat de IA Flutuante (Tutor IA 24h)
  floatingAiChatOpen: false,
  floatingAiTyping: false,

  // Formulários de Registros Manuais
  manualQuestionsData: {
    subjectId: '',
    topicId: 'all',
    totalSolved: 10,
    totalCorrect: 8,
    minutesSpent: 20,
    date: new Date().toISOString().slice(0, 10),
    source: ''
  },
  manualMockData: {
    title: '',
    board: '',
    totalQuestions: 60,
    totalCorrect: 45,
    minutesSpent: 180,
    date: new Date().toISOString().slice(0, 10),
    breakdown: []
  },

  // Estado de Redação (Item 4)
  essayDraftText: '',
  essayCorrectionResult: null,
  essayAnalyzing: false,

  // Estado da Calculadora Cebraspe (Item 13)
  cebraspeTotal: 120,
  cebraspeCorrect: 78,
  cebraspeWrong: 22,
  cebraspePenalty: 1.0,

  // Estado do Radar de Editais (Item 14)
  radarFilterSphere: 'all',

  // Estado do Reporte de Questão (Item 18)
  reportingQuestionId: null,

  // Hub de Prompts IA e Importação JSON
  jsonImportMode: 'questions', // 'catalog' | 'questions' | 'flashcards'
  jsonImportTarget: 'active-contest',
  promptTab: 'questions',

  // Modais e Toasts
  modal: null
};

/**
 * Hidratação Completa do Banco de Dados Real (MySQL) vindo do Laravel
 */
function hydrateDataFromPayload(payload) {
  if (!payload || typeof payload !== 'object') return;
  if (typeof window === 'undefined') return;
  window.M2Data = window.M2Data || {};

  if (payload.tenant_id) state.tenantId = payload.tenant_id;
  state.workspaceBase = state.context?.workspaceBase || payload.workspace_base || null;

  // O servidor decide a disponibilidade pelo produto ao qual o aluno tem acesso.
  // A interface usa este contrato para chamar o ai-member, sem respostas locais.
  const aiWidget = payload.ai_widget || {};
  window.M2Data.aiWidget = {
    enabled: Boolean(aiWidget.enabled && aiWidget.product_id),
    productId: aiWidget.product_id || null,
    agentName: aiWidget.agent_name || 'Tutor IA',
    welcomeMessage: aiWidget.welcome_message || '',
  };

  window.M2Data.mentorship = payload.mentorship && typeof payload.mentorship === 'object' ? payload.mentorship : {};

  // 0. Mentor
  if (payload.mentor) {
    window.M2Data.mentor = window.M2Data.mentor || {};
    window.M2Data.mentor.id = payload.mentor.id || null;
    window.M2Data.mentor.name = payload.mentor.name || '';
    window.M2Data.mentor.role = payload.mentor.role || '';
    window.M2Data.mentor.email = payload.mentor.email || '';
    const nameStr = (payload.mentor.name || '').trim();
    if (nameStr) {
      const parts = nameStr.split(/\s+/);
      window.M2Data.mentor.initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    } else {
      window.M2Data.mentor.initials = '';
    }
  }

  // 1. Concursos reais
  if (Array.isArray(payload.contests) && payload.contests.length > 0) {
    window.M2Data.contests = payload.contests.map(c => ({
      id: c.id,
      name: c.name,
      role: c.position || c.role || '',
      organization: c.organization || '',
      board: c.board || '',
      phase: c.phase || (c.pre_notice ? 'Pré-Edital' : 'Pós-Edital'),
      examDate: c.exam_date || null,
      daysUntilExam: c.exam_date ? Math.max(0, Math.ceil((new Date(c.exam_date) - new Date()) / (1000 * 60 * 60 * 24))) : null,
      activeSyllabusUnits: payload.topics?.length || 0,
      coveredUnits: 0,
      subjectsCount: payload.subjects?.length || 0,
      totalQuestions: payload.questions?.length || 0,
      isDefault: Boolean(c.is_default || (payload.active_contest_id && String(c.id) === String(payload.active_contest_id)))
    }));
    state.contestId = payload.active_contest_id || payload.contests[0]?.id;
  } else {
    window.M2Data.contests = [];
  }
  if (window.M2Data.mentor) {
    window.M2Data.mentor.totalContests = window.M2Data.contests.length;
  }
  window.M2Data.edicts = Array.isArray(payload.edicts) ? payload.edicts : [];
  window.M2Data.topics = Array.isArray(payload.topics) ? payload.topics : [];

  // Produtos do checkout: apenas os marcados explicitamente pelo mentor
  // concedem matrícula na Mentoria 2.0.
  window.M2Data.mentorProducts = Array.isArray(payload.products)
    ? payload.products.map(product => ({ ...product, mentoria2_enabled: Boolean(product.mentoria2_enabled) }))
    : [];

  // 1.1 Turmas (Cohorts) reais
  if (Array.isArray(payload.cohorts) && payload.cohorts.length > 0) {
    window.M2Data.cohorts = payload.cohorts.map(co => ({
      id: co.id,
      name: co.name,
      description: co.description || '',
      contest: co.contest || '',
      mentorName: window.M2Data.mentor?.name || '',
      status: co.is_active !== undefined ? (co.is_active ? 'Ativa' : 'Inativa') : (co.status || ''),
      studentsCount: co.students_count !== undefined ? Number(co.students_count) : 0,
      avgProgress: 0,
      progress: 0,
      avgAccuracy: 0,
      activeStudents: co.students_count !== undefined ? Number(co.students_count) : 0
    }));
  } else {
    window.M2Data.cohorts = [];
  }
  if (window.M2Data.mentor) {
    window.M2Data.mentor.activeCohorts = window.M2Data.cohorts.length;
  }

  // 1.2 Auditoria (Logs Reais)
  if (Array.isArray(payload.recent_audit) && payload.recent_audit.length > 0) {
    window.M2Data.auditLogs = payload.recent_audit.map(a => ({
      id: a.id,
      actor: a.actor_name || window.M2Data.mentor?.name || 'Não informado',
      action: a.action,
      target: a.target_type ? `${a.target_type} #${a.target_id || ''}` : 'Sistema',
      details: typeof a.payload === 'string' ? a.payload : JSON.stringify(a.payload || {}),
      timestamp: a.created_at ? new Date(a.created_at).toLocaleString('pt-BR') : 'Não informado'
    }));
  } else {
    window.M2Data.auditLogs = [];
  }

  // 2. Disciplinas e Edital Verticalizado reais
  if (Array.isArray(payload.subjects) && payload.subjects.length > 0) {
    const allTopics = Array.isArray(payload.topics) ? payload.topics : [];
    const allSubtopics = Array.isArray(payload.subtopics) ? payload.subtopics : [];
    const allQuestions = Array.isArray(payload.questions) ? payload.questions : [];
    const progressByItem = new Map(
      (Array.isArray(payload.progress) ? payload.progress : [])
        .filter(item => Boolean(item.studied))
        .map(item => [`${item.item_type}:${item.item_id}`, item])
    );
    const isStudied = (type, id) => progressByItem.has(`${type}:${id}`);

    window.M2Data.subjects = payload.subjects.map(s => {
      const subTopics = allTopics.filter(t => t.subject_id === s.id);
      const subQCount = allQuestions.filter(q => q.subject_id === s.id || q.subject === s.name).length;
      return {
        id: s.id,
        name: s.name,
        icon: s.name.toLowerCase().includes('portug') ? 'book-open' : s.name.toLowerCase().includes('constitucional') ? 'shield' : s.name.toLowerCase().includes('admin') ? 'file-text' : s.name.toLowerCase().includes('lógico') ? 'calculator' : 'layers',
        weight: s.weight || 1,
        relevance: s.relevance || 'Média',
        progress: 0,
        hours: 0,
        questionsCount: subQCount,
        accuracy: 0,
        topics: subTopics.map((t) => ({
          id: t.id,
          name: t.name,
          status: 'pending',
          accuracy: 0,
          theoryDone: false,
          lawDone: false,
          flashcardsCount: 0,
          questionsCount: allQuestions.filter(q => q.topic_id === t.id || q.topic === t.name).length
        }))
      };
    });

    window.M2Data.syllabus = payload.subjects.map(s => {
      const subTopics = allTopics.filter(t => t.subject_id === s.id);
      const syllabusTopics = subTopics.map((t) => {
        const topicSubtopics = allSubtopics
          .filter(subtopic => subtopic.topic_id === t.id)
          .map(subtopic => ({
            id: subtopic.id,
            name: subtopic.name,
            completed: isStudied('subtopico', subtopic.id),
            questionsCount: allQuestions.filter(question => question.subtopic_id === subtopic.id).length,
          }));

        return {
          id: t.id,
          name: t.name,
          completed: isStudied('topico', t.id),
          subtopics: topicSubtopics,
        };
      });
      const completedTopics = syllabusTopics.filter(topic => topic.completed).length;
      return {
        id: s.id,
        name: s.name,
        weight: s.weight || 1,
        relevance: s.relevance || 'Média',
        coveredPct: syllabusTopics.length > 0 ? Math.round((completedTopics / syllabusTopics.length) * 100) : 0,
        masteryPct: 0,
        totalQuestions: allQuestions.filter(q => q.subject_id === s.id || q.subject === s.name).length,
        topics: syllabusTopics,
      };
    });
  } else {
    window.M2Data.subjects = [];
    window.M2Data.syllabus = [];
  }

  // Preferences do aluno (favoritos, radar e metas)
  let userSettings = {};
  if (payload.preferences) {
    window.M2Data.preferences = payload.preferences;
    if (typeof payload.preferences.settings === 'string') {
      try { userSettings = JSON.parse(payload.preferences.settings); } catch (e) { }
    } else if (typeof payload.preferences.settings === 'object' && payload.preferences.settings !== null) {
      userSettings = payload.preferences.settings;
    }
    window.M2Data.preferences.settings = userSettings;
  }
  // The server remains the authority for access. This copy only controls
  // whether a product capability is presented as an available option.
  window.M2Data.capabilities = Array.isArray(payload.capabilities) ? payload.capabilities : [];
  const favQuestions = Array.isArray(userSettings.favorite_questions) ? userSettings.favorite_questions.map(String) : [];
  const followedContests = Array.isArray(userSettings.followed_contests) ? userSettings.followed_contests.map(String) : [];
  if (userSettings.week_hours_goal && window.M2Data.student) {
    window.M2Data.student.weekHoursGoal = Number(userSettings.week_hours_goal);
  }

  window.M2Data.goals = Array.isArray(payload.goals) ? payload.goals.map(goal => ({
    id: goal.id,
    title: goal.name || '',
    metric: goal.metric || 'questions',
    target: Number(goal.target || 0),
    current: Number(goal.current || 0),
    unit: goal.unit || '',
    pct: Number(goal.pct || 0),
    deadline: goal.ends_on || '',
    isChallenge: Boolean(goal.is_challenge),
  })) : [];

  // 3. Questões reais do Banco de Questões
  if (Array.isArray(payload.questions) && payload.questions.length > 0) {
    window.M2Data.questions = payload.questions.map(q => {
      let rawOpts = q.alternatives || [];
      if (typeof rawOpts === 'string') {
        try { rawOpts = JSON.parse(rawOpts); } catch (e) { rawOpts = []; }
      }
      const correctLetter = (q.correct_answer || '').toUpperCase().trim();
      const options = (Array.isArray(rawOpts) && rawOpts.length > 0 ? rawOpts : ['Certo', 'Errado']).map((opt, oIdx) => {
        const letter = ['A', 'B', 'C', 'D', 'E'][oIdx] || `OPT-${oIdx}`;
        const isCorrect = Boolean(correctLetter && (
          q.type === 'certo_errado'
            ? (letter === correctLetter || String(opt).trim().toLowerCase() === correctLetter.toLowerCase())
            : (letter === correctLetter)
        ));
        return {
          id: letter,
          text: typeof opt === 'string' ? opt : (opt.text || ''),
          correct: isCorrect,
          comment: isCorrect ? (q.explanation || 'Alternativa correta.') : 'Alternativa incorreta.'
        };
      });

      return {
        id: q.id,
        contestId: q.contest_id || state.contestId,
        subjectId: q.subject_id || '',
        subjectName: q.subject || 'Geral',
        topicId: q.topic_id || '',
        topicName: q.topic || '',
        board: q.board || '',
        year: q.year || new Date().getFullYear(),
        role: q.role || '',
        level: 'medio',
        difficulty: q.difficulty || 'Média',
        statement: q.prompt,
        answer: correctLetter,
        correct_answer: correctLetter,
        options: options,
        explanation: q.explanation || '',
        dicaBanca: '',
        userStatus: q.answered ? (q.last_correct ? 'correct' : 'wrong') : 'not_answered',
        userSelected: q.last_answer || null,
        isFavorite: favQuestions.includes(String(q.id)),
        stats: { totalAnswered: 0, correctPct: 0 }
      };
    });
  } else {
    window.M2Data.questions = [];
  }

  // 3.5 Simulados reais e resultados por disciplina
  const subjectResults = Array.isArray(payload.mock_subject_results) ? payload.mock_subject_results : [];
  window.M2Data.mockExams = Array.isArray(payload.mock_exams) ? payload.mock_exams.map(mock => {
    let result = mock.result || {};
    if (typeof result === 'string') { try { result = JSON.parse(result); } catch { result = {}; } }
    const results = subjectResults.filter(item => String(item.mock_exam_id) === String(mock.id)).map(item => ({
      subject: item.name || 'Geral', correct: Number(item.correct || 0), total: Number(item.questions || 0),
      pct: Number(item.percentage || 0), wrong: Number(item.wrong || 0), blank: Number(item.blank || 0)
    }));
    return {
      id: mock.id, officialMockId: mock.official_mock_id || null, title: mock.name || 'Simulado', name: mock.name || 'Simulado', type: mock.type || 'pendente',
      status: mock.type === 'realizado' ? 'completed' : 'available', maxAttempts: Number(mock.max_attempts || 1), questionsCount: Number(mock.questions_done || result.total_questions || 0),
      timeLimitMinutes: Number(mock.time_minutes || 0), score: Number(mock.percentage || result.percentage || 0),
      completedAt: mock.performed_at || null, timeSpent: mock.time_minutes ? `${mock.time_minutes} min` : '—',
      subjectBreakdown: results, result
    };
  }) : [];
  // 4. Baralhos e Flashcards reais
  if (Array.isArray(payload.decks) && payload.decks.length > 0) {
    const allCards = Array.isArray(payload.cards) ? payload.cards : [];
    window.M2Data.flashcardDecks = payload.decks.map(d => {
      const deckCards = allCards.filter(c => String(c.deck_id).toLowerCase() === String(d.id).toLowerCase());
      const total = deckCards.length || Number(d.cards_count || d.totalCards || 0);
      return {
        id: d.id,
        title: d.name || d.title || '',
        name: d.name || d.title || '',
        subject: d.subject || '',
        author: `${window.M2Data.mentor?.name || 'Mentor'}`,
        isShared: true,
        totalCards: total,
        cards_count: total,
        dueCards: total,
        newCards: total,
        masteredCards: 0,
        retentionRate: 0,
        cards: deckCards.map(c => ({
          id: c.id,
          front: c.front,
          back: c.back,
          tip: c.tags?.[0] || '',
          interval: `${c.interval_days || 1} dia(s)`,
          repetitions: c.repetitions || 0,
          difficulty: 'Normal'
        }))
      };
    });
  } else {
    window.M2Data.flashcardDecks = [];
  }

  // 5. Redações reais
  if (Array.isArray(payload.essays) && payload.essays.length > 0) {
    window.M2Data.essays = payload.essays;
    state.activeEssayId = payload.essays[0].id;
  } else {
    window.M2Data.essays = [];
  }

  // 6. Radar de Editais reais
  if (Array.isArray(payload.radar_contests) && payload.radar_contests.length > 0) {
    window.M2Data.radarEditais = payload.radar_contests.map(r => ({
      id: r.id,
      name: r.name,
      role: r.role || r.position || '',
      sphere: r.sphere || 'Estadual',
      status: r.status || 'Previsto',
      board: r.board || 'A definir',
      salary: r.salary ? `R$ ${Number(r.salary).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : '',
      vacancies: r.vacancies || 0,
      examDate: r.exam_date || null,
      publishedDate: r.published_date || null,
      similarityScore: r.similarity_score || 0,
      isFavorite: followedContests.includes(String(r.id)),
      tags: [r.sphere || 'Estadual']
    }));
  } else {
    window.M2Data.radarEditais = [];
  }

  // 7. Reportes de Questões reais
  if (Array.isArray(payload.question_reports) && payload.question_reports.length > 0) {
    window.M2Data.reportedQuestions = payload.question_reports.map(rep => ({
      id: rep.id,
      questionId: rep.question_id,
      studentName: rep.student_name || 'Aluno',
      reason: rep.reason,
      details: rep.details,
      date: rep.created_at ? new Date(rep.created_at).toLocaleDateString('pt-BR') : 'Não informado',
      status: rep.status || 'pending'
    }));
  } else {
    window.M2Data.reportedQuestions = [];
  }

  // 8. Alunos reais
  if (Array.isArray(payload.students) && payload.students.length > 0) {
    const mappedStudents = payload.students.map(s => {
      const sm = s.metrics || {};
      let riskLvl = 'Baixo';
      if (sm.risk_level === 'vermelho' || sm.risk_level === 'Alto') riskLvl = 'Alto';
      else if (sm.risk_level === 'amarelo' || sm.risk_level === 'Médio') riskLvl = 'Médio';
      else if (sm.days_without_study >= 7) riskLvl = 'Médio';

      let riskRsn = sm.risk_reason || '';
      if (!riskRsn) {
        if (riskLvl === 'Alto') riskRsn = 'Inativo ou sem registros recentes';
        else if (riskLvl === 'Médio') riskRsn = 'Atenção ao cumprimento da rotina';
        else riskRsn = 'Em dia';
      }

      const cohortName = (Array.isArray(s.cohort_names) && s.cohort_names[0])
        || (Array.isArray(s.cohorts) && s.cohorts[0])
        || 'Sem turma vinculada';

      const contestName = (Array.isArray(s.contest_names) && s.contest_names[0])
        || 'Sem concurso';

      const lastActiveText = sm.last_study_at
        ? new Date(sm.last_study_at).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
        : (sm.days_without_study !== undefined && sm.days_without_study < 999 ? `Há ${sm.days_without_study} dia(s)` : 'Sem registro recente');

      return {
        id: s.id,
        name: s.name,
        email: s.email,
        cohort: cohortName,
        contest: contestName,
        status: riskLvl === 'Alto' ? 'Alerta' : riskLvl === 'Médio' ? 'Atenção' : 'Ativo',
        riskLevel: riskLvl,
        riskReason: riskRsn,
        lastActive: lastActiveText,
        progressPct: Math.round(sm.edict_percentage || 0),
        progress: Math.round(sm.edict_percentage || 0),
        hoursWeek: Number(sm.study_hours_7d || 0),
        hours: Number(sm.study_hours_7d || 0),
        accuracy: Number(sm.accuracy || 0),
        questionsResolved: Number(sm.answers || 0),
        delayedTasks: Number(sm.pending_reviews || 0),
        unreadFeedbacks: 0
      };
    });

    window.M2Data.students = mappedStudents;
    window.M2Data.mentorStudents = mappedStudents;

    if (window.M2Data.mentor) {
      window.M2Data.mentor.totalStudents = mappedStudents.length;
      window.M2Data.mentor.alertStudentsCount = mappedStudents.filter(st => st.riskLevel === 'Alto' || st.riskLevel === 'Médio').length;
    }
  } else {
    window.M2Data.students = [];
    window.M2Data.mentorStudents = [];
  }

  // 9. Aluno Ativo (Contexto Aluno)
  if (payload.student) {
    window.M2Data.student.id = payload.student.id || null;
    window.M2Data.student.name = payload.student.name || '';
    window.M2Data.student.email = payload.student.email || '';
    const nameStr = (payload.student.name || '').trim();
    if (nameStr) {
      const parts = nameStr.split(/\s+/);
      window.M2Data.student.initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    } else {
      window.M2Data.student.initials = '';
    }
    window.M2Data.student.cohort = payload.student.cohort_name || '';
    window.M2Data.student.contest = payload.student.contest_name || '';
  } else if (Array.isArray(window.M2Data.mentorStudents) && window.M2Data.mentorStudents.length > 0) {
    const firstRealStudent = window.M2Data.mentorStudents[0];
    window.M2Data.student.id = firstRealStudent.id;
    window.M2Data.student.name = firstRealStudent.name || '';
    window.M2Data.student.email = firstRealStudent.email || '';
    window.M2Data.student.cohort = firstRealStudent.cohort || '';
    window.M2Data.student.contest = firstRealStudent.contest || '';
    const nameStr = (firstRealStudent.name || '').trim();
    if (nameStr) {
      const parts = nameStr.split(/\s+/);
      window.M2Data.student.initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    } else {
      window.M2Data.student.initials = '';
    }
    window.M2Data.student.weekHours = firstRealStudent.hoursWeek || 0;
    window.M2Data.student.totalHours = firstRealStudent.hoursWeek || 0;
    window.M2Data.student.questionsResolved = firstRealStudent.questionsResolved || 0;
    window.M2Data.student.questionsAccuracy = firstRealStudent.accuracy || 0;
    window.M2Data.student.accuracy = firstRealStudent.accuracy || 0;
  }

  if (window.M2Data.aiMemory) {
    window.M2Data.aiMemory.studentName = window.M2Data.student?.name || '';
    window.M2Data.aiMemory.mentorNotes = '';
  }

  // 10. Materiais e Cursos
  if (Array.isArray(payload.materials)) {
    window.M2Data.materials = payload.materials;
    window.M2Data.mentorContents = payload.materials.map(m => ({
      id: m.id,
      title: m.title || m.name,
      type: m.type || 'PDF / Apostila',
      status: m.is_active ? 'Publicado' : 'Rascunho',
      targetAudience: m.scope === 'global' ? 'Todos os Alunos' : (m.scope === 'edital' ? 'Por Concurso/Edital' : 'Turmas Específicas'),
      eligibleStudents: Array.isArray(m.targets) ? m.targets.length : 0,
      url: m.url || m.download_url || '',
      description: m.description || '',
      folder: m.folder || ''
    }));
  } else {
    window.M2Data.materials = [];
    window.M2Data.mentorContents = [];
  }
  if (Array.isArray(payload.courses)) {
    window.M2Data.courses = payload.courses;
  } else {
    window.M2Data.courses = [];
  }

  // Cada registro é uma página independente, agrupada por pasta no caderno.
  if (Array.isArray(payload.notebooks)) {
    window.M2Data.notebooks = payload.notebooks.map(notebook => ({
      ...notebook,
      title: notebook.title || 'Nova anotação',
      folder: notebook.folder || 'Geral',
      color: notebook.color || '#4f8ef7',
      subject: notebook.subject_name || '',
      topicLinked: notebook.topic_name || 'Geral',
      sharedWithMentor: Boolean(notebook.shared_with_mentor),
    }));
    const activeNotebook = window.M2Data.notebooks.find(note => String(note.id) === String(state.activeNotebookId)) || window.M2Data.notebooks[0];
    if (activeNotebook) {
      state.activeNotebookId = activeNotebook.id;
      state.noteContent = activeNotebook.content || '';
      state.noteTitle = activeNotebook.title;
      state.noteFolder = activeNotebook.folder;
      state.noteColor = activeNotebook.color;
      state.noteEdictId = activeNotebook.edict_id || '';
      state.noteSubjectId = activeNotebook.subject_id || '';
      state.noteTopicId = activeNotebook.topic_id || '';
      state.noteSharedWithMentor = Boolean(activeNotebook.shared_with_mentor);
      state.noteSaveStatus = 'Salvo';
    }
  }

  // 11. Métricas e Resumo
  const m = payload.metrics || payload.summary || payload.metrics_summary;
  if (m) {
    if (m.total_questions_solved !== undefined) window.M2Data.student.questionsResolved = m.total_questions_solved;
    if (m.total_hours_studied !== undefined) window.M2Data.student.hoursStudied = m.total_hours_studied;
    if (m.accuracy_rate !== undefined) {
      window.M2Data.student.questionsAccuracy = m.accuracy_rate;
      window.M2Data.student.accuracy = m.accuracy_rate;
    }
    if (m.xp !== undefined) window.M2Data.student.xp = m.xp;
  }

  if (payload.gamification) {
    window.M2Data.gamification = payload.gamification;
    window.M2Data.badges = payload.gamification.badges || [];
    window.M2Data.student.xp = payload.gamification.total_xp || 0;
    window.M2Data.student.streakDays = payload.gamification.streak_days || 0;
  }
  if (payload.gamification_history) window.M2Data.gamificationHistory = payload.gamification_history;
  if (payload.notifications) {
    window.M2Data.notifications = payload.notifications;
    state.notifications = payload.notifications.items || [];
  }

  // 12. Feedbacks pedagógicos reais
  const rawFeedbacks = payload.mentor_feedbacks || payload.feedbacks || [];
  window.M2Data.mentorFeedbacks = rawFeedbacks.map(f => ({
    id: f.id,
    studentId: f.student_id,
    studentName: f.student_name || 'Aluno',
    mentorName: f.mentor_name || window.M2Data.mentor?.name || 'Não informado',
    message: f.message || '',
    category: f.category || 'Geral',
    isRead: Boolean(f.is_read),
    readAt: f.read_at,
    reply: f.reply || null,
    repliedAt: f.replied_at,
    createdAt: f.created_at ? new Date(f.created_at).toLocaleDateString('pt-BR') : 'Não informado'
  }));

  // 13. Cronograma e Itens de Estudo
  const rawItems = Array.isArray(payload.schedule_items) ? payload.schedule_items : (Array.isArray(payload.all_schedule_items) ? payload.all_schedule_items : []);
  const dayNames = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const subjectsMap = {};
  (payload.subjects || []).forEach(s => { subjectsMap[s.id] = s.name; });
  const topicsMap = {};
  (payload.topics || []).forEach(t => { topicsMap[t.id] = t.name || t.title; });

  window.M2Data.scheduleItems = rawItems;
  window.M2Data.schedule = rawItems.map(item => {
    let dayStr = 'Segunda';
    if (item.planned_date) {
      const [y, m, d] = String(item.planned_date).slice(0, 10).split('-').map(Number);
      if (y && m && d) {
        const dateObj = new Date(y, m - 1, d);
        dayStr = dayNames[dateObj.getDay()] || 'Segunda';
      }
    }
    const durMin = Number(item.duration_minutes) || 60;
    return {
      id: item.id,
      raw: item,
      day: dayStr,
      plannedDate: item.planned_date,
      scheduledReviewId: item.scheduled_review_id || null,
      status: item.status || 'pendente',
      cyclePosition: item.cycle_position || null,
      durationMinutes: durMin,
      subject: subjectsMap[item.subject_id] || 'Estudo Dirigido',
      topic: topicsMap[item.topic_id] || 'Revisão e Questões',
      duration: durMin >= 60 ? `${(durMin / 60).toFixed(1)}h` : `${durMin}min`,
      time: '08:00',
      done: item.status === 'concluido'
    };
  });
}

function getAppRoot() {
  if (typeof document === 'undefined') return null;
  return document.getElementById('app-root') || document.querySelector('.m2-app-root');
}

/**
 * Utilitário para exibir Toast de Notificação
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('m2-toasts');
  if (!container) {
    container = document.createElement('div');
    container.id = 'm2-toasts';
    container.className = 'm2-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'm2-toast';
  toast.innerHTML = `${icon(type === 'success' ? 'circle-check' : 'info')} <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Utilitário para formatar segundos em MM:SS
 */
function formatTimer(totalSec) {
  const mins = Math.floor(Math.max(0, totalSec) / 60);
  const secs = Math.max(0, totalSec) % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

let activeRenderer = () => { };
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
  showToast(`Tema alterado para modo ${state.theme === 'dark' ? 'Escuro' : 'Claro'}`);
}

export function navigate(screenName, newMode = null) {
  if (newMode) {
    state.mode = newMode;
  } else if (screenName.startsWith('mentor-')) {
    state.mode = 'mentor';
  } else if (screenName.startsWith('workspace-')) {
    state.mode = 'workspace';
  } else if (state.mode === 'mentor' && !screenName.startsWith('mentor-')) {
    state.mode = 'student';
  }
  if (state.screen !== screenName) {
    state.questionDrafts = {};
    state.questionResults = {};
    state.activeHistoryQuestionId = null;
    state.selectedOption = null;
    state.answeredQuestion = false;
  }
  state.screen = screenName;
  state.sidebarOpen = false;
  window.location.hash = `#${state.mode}/${state.screen}`;
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


