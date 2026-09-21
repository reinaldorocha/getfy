<?php

use Illuminate\Support\Facades\Route;
use Plugins\Mentoria\Http\Controllers\ContentController;
use Plugins\Mentoria\Http\Controllers\CourseQuestionController;
use Plugins\Mentoria\Http\Controllers\FlashcardController;
use Plugins\Mentoria\Http\Controllers\MaterialController;
use Plugins\Mentoria\Http\Controllers\MetricsController;
use Plugins\Mentoria\Http\Controllers\PanelController;
use Plugins\Mentoria\Http\Controllers\QuestionController;
use Plugins\Mentoria\Http\Controllers\StudyController;
use Plugins\Mentoria\Http\Controllers\StudentController;
use Plugins\Mentoria\Http\Middleware\MentorWorkspaceContext;

Route::get('/', [PanelController::class, 'index'])->name('mentoria.index');
Route::get('/data', [PanelController::class, 'data'])->name('mentoria.data');
Route::get('/students/{student}', [PanelController::class, 'student'])->whereNumber('student')->name('mentoria.students.show');
Route::get('/students/{student}/preview', [StudentController::class, 'preview'])->whereNumber('student')->name('mentoria.students.preview');

Route::middleware([MentorWorkspaceContext::class])
    ->group(__DIR__.DIRECTORY_SEPARATOR.'routes-mentor-workspace.php');

Route::post('/products/{product}/enable', [PanelController::class, 'enableProduct'])->name('mentoria.products.enable');
Route::delete('/products/{product}', [PanelController::class, 'disableProduct'])->name('mentoria.products.disable');

/* Concursos e editais */
Route::post('/contests', [ContentController::class, 'storeContest'])->name('mentoria.contests.store');
Route::patch('/contests/{contest}', [ContentController::class, 'updateContest'])->name('mentoria.contests.update');
Route::delete('/contests/{contest}', [ContentController::class, 'destroyContest'])->name('mentoria.contests.destroy');
Route::post('/contests/{contest}/students/{student}', [ContentController::class, 'assignContest'])->whereNumber('student')->name('mentoria.contests.assign');
Route::post('/contests/{contest}/assign', [ContentController::class, 'bulkAssignContest'])->name('mentoria.contests.bulk-assign');
Route::patch('/contests/{contest}/students/{student}', [ContentController::class, 'updateStudentContest'])->whereNumber('student')->name('mentoria.contests.student.update');
Route::delete('/contests/{contest}/students/{student}', [ContentController::class, 'unassignContest'])->whereNumber('student')->name('mentoria.contests.student.destroy');
Route::put('/students/{student}/contests/order', [ContentController::class, 'reorderStudentContests'])->whereNumber('student')->name('mentoria.contests.order');

Route::post('/catalog/import', [ContentController::class, 'importCatalog'])->name('mentoria.catalog.import');
Route::post('/edicts', [ContentController::class, 'storeEdict'])->name('mentoria.edicts.store');
Route::patch('/edicts/{edict}', [ContentController::class, 'updateEdict'])->name('mentoria.edicts.update');
Route::delete('/edicts/{edict}', [ContentController::class, 'destroyEdict'])->name('mentoria.edicts.destroy');
Route::post('/edicts/{edict}/students/{student}', [ContentController::class, 'assignEdict'])->whereNumber('student')->name('mentoria.edicts.assign');
Route::post('/edicts/{edict}/assign', [ContentController::class, 'bulkAssignEdict'])->name('mentoria.edicts.bulk-assign');
Route::delete('/edicts/{edict}/students/{student}', [ContentController::class, 'unassignEdict'])->whereNumber('student')->name('mentoria.edicts.student.destroy');
Route::put('/edicts/{edict}/order', [ContentController::class, 'reorderEdictItems'])->name('mentoria.edicts.order');

Route::post('/edicts/{edict}/subjects', [ContentController::class, 'storeSubject'])->name('mentoria.subjects.store');
Route::patch('/subjects/{subject}', [ContentController::class, 'updateSubject'])->name('mentoria.subjects.update');
Route::delete('/subjects/{subject}', [ContentController::class, 'destroySubject'])->name('mentoria.subjects.destroy');
Route::post('/subjects/{subject}/topics', [ContentController::class, 'storeTopic'])->name('mentoria.topics.store');
Route::patch('/topics/{topic}', [ContentController::class, 'updateTopic'])->name('mentoria.topics.update');
Route::delete('/topics/{topic}', [ContentController::class, 'destroyTopic'])->name('mentoria.topics.destroy');
Route::post('/topics/{topic}/subtopics', [ContentController::class, 'storeSubtopic'])->name('mentoria.subtopics.store');
Route::patch('/subtopics/{subtopic}', [ContentController::class, 'updateSubtopic'])->name('mentoria.subtopics.update');
Route::delete('/subtopics/{subtopic}', [ContentController::class, 'destroySubtopic'])->name('mentoria.subtopics.destroy');

/* Banco de questões */
Route::post('/questions', [QuestionController::class, 'store'])->name('mentoria.questions.store');
Route::post('/questions/import', [QuestionController::class, 'import'])->name('mentoria.questions.import');
Route::patch('/questions/{question}', [QuestionController::class, 'update'])->name('mentoria.questions.update');
Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('mentoria.questions.destroy');

/* Flashcards */
Route::post('/flashcard-decks', [FlashcardController::class, 'storeDeck'])->name('mentoria.flashcards.decks.store');
Route::post('/flashcard-decks/import', [FlashcardController::class, 'importDecks'])->name('mentoria.flashcards.decks.import');
Route::patch('/flashcard-decks/{deck}', [FlashcardController::class, 'updateDeck'])->name('mentoria.flashcards.decks.update');
Route::delete('/flashcard-decks/{deck}', [FlashcardController::class, 'destroyDeck'])->name('mentoria.flashcards.decks.destroy');
Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeCard'])->name('mentoria.flashcards.cards.store');
Route::patch('/flashcards/{card}', [FlashcardController::class, 'updateCard'])->name('mentoria.flashcards.cards.update');
Route::delete('/flashcards/{card}', [FlashcardController::class, 'destroyCard'])->name('mentoria.flashcards.cards.destroy');

/* Materiais */
Route::post('/materials', [MaterialController::class, 'store'])->name('mentoria.materials.store');
Route::patch('/materials/{material}', [MaterialController::class, 'update'])->name('mentoria.materials.update');
Route::delete('/materials/{material}', [MaterialController::class, 'destroy'])->name('mentoria.materials.destroy');
Route::get('/materials/{material}/download', [MaterialController::class, 'downloadAdmin'])->name('mentoria.materials.download');

/* Cronograma */
Route::post('/students/{student}/schedules', [StudyController::class, 'saveSchedule'])->whereNumber('student')->name('mentoria.schedules.save');
Route::post('/students/{student}/schedules/generate', [StudyController::class, 'generateSchedule'])->whereNumber('student')->name('mentoria.schedules.generate');
Route::post('/students/{student}/schedules/reprogram', [StudyController::class, 'reprogramSchedule'])->whereNumber('student')->name('mentoria.schedules.reprogram');
Route::post('/students/{student}/schedules/{schedule}/items', [StudyController::class, 'addScheduleItem'])->whereNumber('student')->name('mentoria.schedule-items.store');
Route::patch('/students/{student}/schedule-items/{item}', [StudyController::class, 'updateScheduleItem'])->whereNumber('student')->name('mentoria.schedule-items.update');
Route::delete('/students/{student}/schedule-items/{item}', [StudyController::class, 'deleteScheduleItem'])->whereNumber('student')->name('mentoria.schedule-items.destroy');

/* Histórico de estudo e questões */
Route::post('/students/{student}/study-sessions', [StudyController::class, 'storeSession'])->whereNumber('student')->name('mentoria.sessions.store');
Route::patch('/students/{student}/study-sessions/{session}', [StudyController::class, 'updateSession'])->whereNumber('student')->name('mentoria.sessions.update');
Route::delete('/students/{student}/study-sessions/{session}', [StudyController::class, 'deleteSession'])->whereNumber('student')->name('mentoria.sessions.destroy');
Route::post('/students/{student}/question-logs', [StudyController::class, 'storeQuestionLog'])->whereNumber('student')->name('mentoria.question-logs.store');
Route::patch('/students/{student}/question-logs/{log}', [StudyController::class, 'updateQuestionLog'])->whereNumber('student')->name('mentoria.question-logs.update');
Route::delete('/students/{student}/question-logs/{log}', [StudyController::class, 'deleteQuestionLog'])->whereNumber('student')->name('mentoria.question-logs.destroy');

/* Revisões */
Route::post('/students/{student}/reviews', [StudyController::class, 'saveReview'])->whereNumber('student')->name('mentoria.reviews.store');
Route::patch('/students/{student}/reviews/{review}', [StudyController::class, 'updateReview'])->whereNumber('student')->name('mentoria.reviews.update');
Route::delete('/students/{student}/reviews/{review}', [StudyController::class, 'deleteReview'])->whereNumber('student')->name('mentoria.reviews.destroy');

/* Simulados e configuração de prova */
Route::post('/students/{student}/mock-exams', [StudyController::class, 'storeMockExam'])->whereNumber('student')->name('mentoria.mock-exams.store');
Route::patch('/students/{student}/mock-exams/{mock}', [StudyController::class, 'updateMockExam'])->whereNumber('student')->name('mentoria.mock-exams.update');
Route::delete('/students/{student}/mock-exams/{mock}', [StudyController::class, 'deleteMockExam'])->whereNumber('student')->name('mentoria.mock-exams.destroy');
Route::get('/students/{student}/exam-config/{contest}', [StudyController::class, 'examConfiguration'])->whereNumber('student')->name('mentoria.exam-config.show');
Route::put('/students/{student}/exam-config/{contest}', [StudyController::class, 'saveExamConfiguration'])->whereNumber('student')->name('mentoria.exam-config.update');

/* Cadernos */
Route::post('/students/{student}/notebooks', [StudyController::class, 'storeNotebook'])->whereNumber('student')->name('mentoria.notebooks.store');
Route::patch('/students/{student}/notebooks/{notebook}', [StudyController::class, 'updateNotebook'])->whereNumber('student')->name('mentoria.notebooks.update');
Route::delete('/students/{student}/notebooks/{notebook}', [StudyController::class, 'deleteNotebook'])->whereNumber('student')->name('mentoria.notebooks.destroy');

/* Métricas */
Route::get('/students/{student}/metrics/summary', [MetricsController::class, 'studentSummary'])->whereNumber('student')->name('mentoria.metrics.summary');
Route::get('/students/{student}/metrics/timeline', [MetricsController::class, 'studentTimeline'])->whereNumber('student')->name('mentoria.metrics.timeline');
Route::get('/students/{student}/metrics/subjects', [MetricsController::class, 'studentSubjects'])->whereNumber('student')->name('mentoria.metrics.subjects');

/* Integração simples: questões Mentoria dentro das aulas do Member Builder */
Route::get('/course-products/{product}/questions', [CourseQuestionController::class, 'builderData'])->name('mentoria.course-questions.data');
Route::put('/course-products/{product}/lessons/{lesson}/questions', [CourseQuestionController::class, 'syncLessonQuestions'])->whereNumber('lesson')->name('mentoria.course-questions.sync');
