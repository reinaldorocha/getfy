<?php

use Illuminate\Support\Facades\Route;
use Plugins\Mentoria2\Http\Controllers\CohortController;
use Plugins\Mentoria2\Http\Controllers\ContentController;
use Plugins\Mentoria2\Http\Controllers\CourseQuestionController;
use Plugins\Mentoria2\Http\Controllers\EssayController;
use Plugins\Mentoria2\Http\Controllers\FeedbackController;
use Plugins\Mentoria2\Http\Controllers\GamificationController;
use Plugins\Mentoria2\Http\Controllers\AiMemoryController;
use Plugins\Mentoria2\Http\Controllers\QuestionReportController;
use Plugins\Mentoria2\Http\Controllers\ContestRadarController;
use Plugins\Mentoria2\Http\Controllers\ExternalImportController;
use Plugins\Mentoria2\Http\Controllers\FlashcardController;
use Plugins\Mentoria2\Http\Controllers\GoalController;
use Plugins\Mentoria2\Http\Controllers\MaterialController;
use Plugins\Mentoria2\Http\Controllers\MentoriaSettingsController;
use Plugins\Mentoria2\Http\Controllers\MetricsController;
use Plugins\Mentoria2\Http\Controllers\PanelController;
use Plugins\Mentoria2\Http\Controllers\QuestionController;
use Plugins\Mentoria2\Http\Controllers\StudyController;
use Plugins\Mentoria2\Http\Controllers\StudentController;
use Plugins\Mentoria2\Http\Middleware\MentorWorkspaceContext;

Route::get('/', [PanelController::class, 'index'])->name('mentoria2.index');
Route::get('/data', [PanelController::class, 'data'])->name('mentoria2.data');
Route::get('/students/{student}', [PanelController::class, 'student'])->whereNumber('student')->name('mentoria2.students.show');
Route::get('/students/{student}/preview', [StudentController::class, 'preview'])->whereNumber('student')->name('mentoria2.students.preview');

Route::middleware([MentorWorkspaceContext::class])
    ->group(__DIR__.DIRECTORY_SEPARATOR.'routes-mentor-workspace.php');

Route::post('/products/{product}/enable', [PanelController::class, 'enableProduct'])->name('mentoria2.products.enable');
Route::delete('/products/{product}', [PanelController::class, 'disableProduct'])->name('mentoria2.products.disable');

/* Configura??es visuais da ?rea do aluno */
Route::get('/settings/student-home-banner', [MentoriaSettingsController::class, 'studentHomeBanner'])->name('mentoria2.settings.student-home-banner.show');
Route::post('/settings/student-home-banner', [MentoriaSettingsController::class, 'storeStudentHomeBanner'])->name('mentoria2.settings.student-home-banner.store');
Route::delete('/settings/student-home-banner', [MentoriaSettingsController::class, 'destroyStudentHomeBanner'])->name('mentoria2.settings.student-home-banner.destroy');

/* Metas e desafios atribuídos pelo mentor */
Route::post('/goals', [GoalController::class, 'store'])->name('mentoria2.goals.store');
Route::delete('/goals/{goal}', [GoalController::class, 'destroy'])->name('mentoria2.goals.destroy');

/* Turmas e membros */
Route::get('/cohorts', [CohortController::class, 'index'])->name('mentoria2.cohorts.index');
Route::post('/cohorts', [CohortController::class, 'store'])->name('mentoria2.cohorts.store');
Route::patch('/cohorts/{cohort}', [CohortController::class, 'update'])->name('mentoria2.cohorts.update');
Route::delete('/cohorts/{cohort}', [CohortController::class, 'destroy'])->name('mentoria2.cohorts.destroy');
Route::get('/cohorts/{cohort}/members', [CohortController::class, 'members'])->name('mentoria2.cohorts.members');
Route::post('/cohorts/{cohort}/members', [CohortController::class, 'addMember'])->name('mentoria2.cohorts.members.store');
Route::delete('/cohorts/{cohort}/members/{student}', [CohortController::class, 'removeMember'])->whereNumber('student')->name('mentoria2.cohorts.members.destroy');

/* Concursos e editais */
Route::get('/contests', [ContentController::class, 'indexContests'])->name('mentoria2.contests.index');
Route::get('/contests/{contest}/syllabus', [ContentController::class, 'syllabus'])->name('mentoria2.contests.syllabus');
Route::post('/contests', [ContentController::class, 'storeContest'])->name('mentoria2.contests.store');
Route::patch('/contests/{contest}', [ContentController::class, 'updateContest'])->name('mentoria2.contests.update');
Route::delete('/contests/{contest}', [ContentController::class, 'destroyContest'])->name('mentoria2.contests.destroy');
Route::post('/contests/{contest}/duplicate', [ContentController::class, 'duplicateContest'])->name('mentoria2.contests.duplicate');
Route::post('/contests/{contest}/students/{student}', [ContentController::class, 'assignContest'])->whereNumber('student')->name('mentoria2.contests.assign');
Route::post('/contests/{contest}/assign', [ContentController::class, 'bulkAssignContest'])->name('mentoria2.contests.bulk-assign');
Route::patch('/contests/{contest}/students/{student}', [ContentController::class, 'updateStudentContest'])->whereNumber('student')->name('mentoria2.contests.student.update');
Route::delete('/contests/{contest}/students/{student}', [ContentController::class, 'unassignContest'])->whereNumber('student')->name('mentoria2.contests.student.destroy');
Route::put('/students/{student}/contests/order', [ContentController::class, 'reorderStudentContests'])->whereNumber('student')->name('mentoria2.contests.order');

Route::post('/catalog/import', [ContentController::class, 'importCatalog'])->name('mentoria2.catalog.import');
Route::post('/edicts', [ContentController::class, 'storeEdict'])->name('mentoria2.edicts.store');
Route::patch('/edicts/{edict}', [ContentController::class, 'updateEdict'])->name('mentoria2.edicts.update');
Route::delete('/edicts/{edict}', [ContentController::class, 'destroyEdict'])->name('mentoria2.edicts.destroy');
Route::post('/edicts/{edict}/students/{student}', [ContentController::class, 'assignEdict'])->whereNumber('student')->name('mentoria2.edicts.assign');
Route::post('/edicts/{edict}/assign', [ContentController::class, 'bulkAssignEdict'])->name('mentoria2.edicts.bulk-assign');
Route::delete('/edicts/{edict}/students/{student}', [ContentController::class, 'unassignEdict'])->whereNumber('student')->name('mentoria2.edicts.student.destroy');
Route::put('/edicts/{edict}/order', [ContentController::class, 'reorderEdictItems'])->name('mentoria2.edicts.order');

Route::post('/edicts/{edict}/subjects', [ContentController::class, 'storeSubject'])->name('mentoria2.subjects.store');
Route::patch('/subjects/{subject}', [ContentController::class, 'updateSubject'])->name('mentoria2.subjects.update');
Route::delete('/subjects/{subject}', [ContentController::class, 'destroySubject'])->name('mentoria2.subjects.destroy');
Route::post('/subjects/{subject}/topics', [ContentController::class, 'storeTopic'])->name('mentoria2.topics.store');
Route::patch('/topics/{topic}', [ContentController::class, 'updateTopic'])->name('mentoria2.topics.update');
Route::delete('/topics/{topic}', [ContentController::class, 'destroyTopic'])->name('mentoria2.topics.destroy');
Route::post('/topics/{topic}/subtopics', [ContentController::class, 'storeSubtopic'])->name('mentoria2.subtopics.store');
Route::patch('/subtopics/{subtopic}', [ContentController::class, 'updateSubtopic'])->name('mentoria2.subtopics.update');
Route::delete('/subtopics/{subtopic}', [ContentController::class, 'destroySubtopic'])->name('mentoria2.subtopics.destroy');

/* Banco de questões */
Route::get('/questions', [QuestionController::class, 'index'])->name('mentoria2.questions.index');
Route::post('/questions', [QuestionController::class, 'store'])->name('mentoria2.questions.store');
Route::post('/questions/import', [QuestionController::class, 'import'])->name('mentoria2.questions.import');
Route::post('/questions/bulk-delete', [QuestionController::class, 'bulkDestroy'])->name('mentoria2.questions.bulk-destroy');
Route::delete('/questions/bulk-delete', [QuestionController::class, 'bulkDestroy'])->name('mentoria2.questions.bulk-destroy.delete');
Route::patch('/questions/{question}', [QuestionController::class, 'update'])->name('mentoria2.questions.update');
Route::patch('/questions/{question}/curation', [QuestionController::class, 'updateCuration'])->name('mentoria2.questions.curation.update');
Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('mentoria2.questions.destroy');

/* Flashcards */
Route::get('/flashcard-decks', [FlashcardController::class, 'indexDecks'])->name('mentoria2.flashcards.decks.index');
Route::get('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'indexCards'])->name('mentoria2.flashcards.decks.cards');
Route::post('/flashcard-decks', [FlashcardController::class, 'storeDeck'])->name('mentoria2.flashcards.decks.store');
Route::post('/flashcard-decks/import', [FlashcardController::class, 'importDecks'])->name('mentoria2.flashcards.decks.import');
Route::patch('/flashcard-decks/{deck}', [FlashcardController::class, 'updateDeck'])->name('mentoria2.flashcards.decks.update');
Route::patch('/flashcard-decks/{deck}/curation', [FlashcardController::class, 'updateDeckCuration'])->name('mentoria2.flashcards.decks.curation.update');
Route::delete('/flashcard-decks/{deck}', [FlashcardController::class, 'destroyDeck'])->name('mentoria2.flashcards.decks.destroy');
Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeCard'])->name('mentoria2.flashcards.cards.store');
Route::patch('/flashcards/{card}', [FlashcardController::class, 'updateCard'])->name('mentoria2.flashcards.cards.update');
Route::patch('/flashcards/{card}/curation', [FlashcardController::class, 'updateCardCuration'])->name('mentoria2.flashcards.cards.curation.update');
Route::delete('/flashcards/{card}', [FlashcardController::class, 'destroyCard'])->name('mentoria2.flashcards.cards.destroy');

/* Materiais */
Route::get('/materials', [MaterialController::class, 'index'])->name('mentoria2.materials.index');
Route::post('/materials', [MaterialController::class, 'store'])->name('mentoria2.materials.store');
Route::patch('/materials/{material}', [MaterialController::class, 'update'])->name('mentoria2.materials.update');
Route::delete('/materials/{material}', [MaterialController::class, 'destroy'])->name('mentoria2.materials.destroy');
Route::get('/materials/{material}/download', [MaterialController::class, 'downloadAdmin'])->name('mentoria2.materials.download');

/* Cronograma */
Route::post('/students/{student}/schedules', [StudyController::class, 'saveSchedule'])->whereNumber('student')->name('mentoria2.schedules.save');
Route::post('/students/{student}/schedules/generate', [StudyController::class, 'generateSchedule'])->whereNumber('student')->name('mentoria2.schedules.generate');
Route::post('/students/{student}/schedules/reprogram', [StudyController::class, 'reprogramSchedule'])->whereNumber('student')->name('mentoria2.schedules.reprogram');
Route::post('/students/{student}/schedules/{schedule}/items', [StudyController::class, 'addScheduleItem'])->whereNumber('student')->name('mentoria2.schedule-items.store');
Route::patch('/students/{student}/schedule-items/{item}', [StudyController::class, 'updateScheduleItem'])->whereNumber('student')->name('mentoria2.schedule-items.update');
Route::delete('/students/{student}/schedule-items/{item}', [StudyController::class, 'deleteScheduleItem'])->whereNumber('student')->name('mentoria2.schedule-items.destroy');

/* Histórico de estudo e questões */
Route::post('/students/{student}/study-sessions', [StudyController::class, 'storeSession'])->whereNumber('student')->name('mentoria2.sessions.store');
Route::patch('/students/{student}/study-sessions/{session}', [StudyController::class, 'updateSession'])->whereNumber('student')->name('mentoria2.sessions.update');
Route::delete('/students/{student}/study-sessions/{session}', [StudyController::class, 'deleteSession'])->whereNumber('student')->name('mentoria2.sessions.destroy');
Route::post('/students/{student}/question-logs', [StudyController::class, 'storeQuestionLog'])->whereNumber('student')->name('mentoria2.question-logs.store');
Route::patch('/students/{student}/question-logs/{log}', [StudyController::class, 'updateQuestionLog'])->whereNumber('student')->name('mentoria2.question-logs.update');
Route::delete('/students/{student}/question-logs/{log}', [StudyController::class, 'deleteQuestionLog'])->whereNumber('student')->name('mentoria2.question-logs.destroy');

/* Revisões */
Route::post('/students/{student}/reviews', [StudyController::class, 'saveReview'])->whereNumber('student')->name('mentoria2.reviews.store');
Route::patch('/students/{student}/reviews/{review}', [StudyController::class, 'updateReview'])->whereNumber('student')->name('mentoria2.reviews.update');
Route::delete('/students/{student}/reviews/{review}', [StudyController::class, 'deleteReview'])->whereNumber('student')->name('mentoria2.reviews.destroy');

/* Simulados e configuração de prova */
Route::post('/students/{student}/mock-exams', [StudyController::class, 'storeMockExam'])->whereNumber('student')->name('mentoria2.mock-exams.store');
Route::patch('/students/{student}/mock-exams/{mock}', [StudyController::class, 'updateMockExam'])->whereNumber('student')->name('mentoria2.mock-exams.update');
Route::delete('/students/{student}/mock-exams/{mock}', [StudyController::class, 'deleteMockExam'])->whereNumber('student')->name('mentoria2.mock-exams.destroy');
Route::post('/official-mock-exams', [StudyController::class, 'publishOfficialMock'])->name('mentoria2.official-mock-exams.publish');
Route::get('/official-mock-exams', [StudyController::class, 'officialMocks'])->name('mentoria2.official-mock-exams.index');
Route::get('/official-mock-exams/{official}/ranking', [StudyController::class, 'officialMockRanking'])->name('mentoria2.official-mock-exams.ranking');
Route::get('/students/{student}/exam-config/{contest}', [StudyController::class, 'examConfiguration'])->whereNumber('student')->name('mentoria2.exam-config.show');
Route::put('/students/{student}/exam-config/{contest}', [StudyController::class, 'saveExamConfiguration'])->whereNumber('student')->name('mentoria2.exam-config.update');

/* Cadernos */
Route::post('/students/{student}/notebooks', [StudyController::class, 'storeNotebook'])->whereNumber('student')->name('mentoria2.notebooks.store');
Route::patch('/students/{student}/notebooks/{notebook}', [StudyController::class, 'updateNotebook'])->whereNumber('student')->name('mentoria2.notebooks.update');
Route::delete('/students/{student}/notebooks/{notebook}', [StudyController::class, 'deleteNotebook'])->whereNumber('student')->name('mentoria2.notebooks.destroy');

/* Feedbacks pedagógicos */
Route::get('/students/{student}/feedbacks', [FeedbackController::class, 'mentorIndex'])->whereNumber('student')->name('mentoria2.feedbacks.index');
Route::post('/students/{student}/feedbacks', [FeedbackController::class, 'store'])->whereNumber('student')->name('mentoria2.feedbacks.store');
Route::patch('/students/{student}/preferences', [StudentController::class, 'saveStudentPreferences'])->whereNumber('student')->name('mentoria2.students.preferences');
Route::get('/gamification/rules', [GamificationController::class, 'rules'])->name('mentoria2.gamification.rules');
Route::put('/gamification/rules', [GamificationController::class, 'saveRules'])->name('mentoria2.gamification.rules.update');

/* Métricas */
Route::get('/students/{student}/metrics/summary', [MetricsController::class, 'studentSummary'])->whereNumber('student')->name('mentoria2.metrics.summary');
Route::get('/students/{student}/metrics/timeline', [MetricsController::class, 'studentTimeline'])->whereNumber('student')->name('mentoria2.metrics.timeline');
Route::get('/students/{student}/metrics/subjects', [MetricsController::class, 'studentSubjects'])->whereNumber('student')->name('mentoria2.metrics.subjects');

/* Integração simples: questões Mentoria2 dentro das aulas do Member Builder */
Route::get('/course-products/{product}/questions', [CourseQuestionController::class, 'builderData'])->name('mentoria2.course-questions.data');
Route::put('/course-products/{product}/lessons/{lesson}/questions', [CourseQuestionController::class, 'syncLessonQuestions'])->whereNumber('lesson')->name('mentoria2.course-questions.sync');

/* Redações e Discursivas (Mentor) */
Route::get('/essays/submissions', [EssayController::class, 'tenantSubmissions'])->name('mentoria2.essays.submissions.list');
Route::post('/essays', [EssayController::class, 'store'])->name('mentoria2.essays.store');
Route::post('/essays/submissions/{submission}/grade', [EssayController::class, 'mentorGrade'])->name('mentoria2.essays.submissions.grade');

/* Memória Cognitiva de IA (Mentor) */
Route::get('/students/{student}/ai-memory', [AiMemoryController::class, 'mentorProfile'])->whereNumber('student')->name('mentoria2.ai-memory.show');
Route::patch('/students/{student}/ai-memory/guidance', [AiMemoryController::class, 'setGuidance'])->whereNumber('student')->name('mentoria2.ai-memory.guidance');

/* Canal de Reportes de Questões (Mentor) */
Route::get('/question-reports', [QuestionReportController::class, 'mentorIndex'])->name('mentoria2.question-reports.index');
Route::patch('/question-reports/{report}/resolve', [QuestionReportController::class, 'mentorResolve'])->name('mentoria2.question-reports.resolve');

/* Radar de Editais em Aberto (Mentor) */
Route::get('/radar/contests', [ContestRadarController::class, 'index'])->name('mentoria2.radar.index');

/* Hub de Prompts de IA e Importador JSON (Mentor) */
Route::get('/external-prompts', [ExternalImportController::class, 'prompts'])->name('mentoria2.prompts.index');
Route::post('/external-import/validate', [ExternalImportController::class, 'validateJson'])->name('mentoria2.import.validate');
Route::post('/external-import/execute', [ExternalImportController::class, 'importJson'])->name('mentoria2.import.execute');

