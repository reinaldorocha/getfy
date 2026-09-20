<?php

use Illuminate\Support\Facades\Route;
use Plugins\Cjc\Http\Controllers\ContentController;
use Plugins\Cjc\Http\Controllers\FlashcardController;
use Plugins\Cjc\Http\Controllers\MaterialController;
use Plugins\Cjc\Http\Controllers\MetricsController;
use Plugins\Cjc\Http\Controllers\PanelController;
use Plugins\Cjc\Http\Controllers\QuestionController;
use Plugins\Cjc\Http\Controllers\StudyController;

Route::get('/', [PanelController::class, 'index'])->name('cjc.index');
Route::get('/data', [PanelController::class, 'data'])->name('cjc.data');
Route::get('/students/{student}', [PanelController::class, 'student'])->whereNumber('student')->name('cjc.students.show');

Route::post('/products/{product}/enable', [PanelController::class, 'enableProduct'])->name('cjc.products.enable');
Route::delete('/products/{product}', [PanelController::class, 'disableProduct'])->name('cjc.products.disable');

/* Concursos e editais */
Route::post('/contests', [ContentController::class, 'storeContest'])->name('cjc.contests.store');
Route::patch('/contests/{contest}', [ContentController::class, 'updateContest'])->name('cjc.contests.update');
Route::delete('/contests/{contest}', [ContentController::class, 'destroyContest'])->name('cjc.contests.destroy');
Route::post('/contests/{contest}/students/{student}', [ContentController::class, 'assignContest'])->whereNumber('student')->name('cjc.contests.assign');
Route::post('/contests/{contest}/assign', [ContentController::class, 'bulkAssignContest'])->name('cjc.contests.bulk-assign');
Route::patch('/contests/{contest}/students/{student}', [ContentController::class, 'updateStudentContest'])->whereNumber('student')->name('cjc.contests.student.update');
Route::delete('/contests/{contest}/students/{student}', [ContentController::class, 'unassignContest'])->whereNumber('student')->name('cjc.contests.student.destroy');
Route::put('/students/{student}/contests/order', [ContentController::class, 'reorderStudentContests'])->whereNumber('student')->name('cjc.contests.order');

Route::post('/catalog/import', [ContentController::class, 'importCatalog'])->name('cjc.catalog.import');
Route::post('/edicts', [ContentController::class, 'storeEdict'])->name('cjc.edicts.store');
Route::patch('/edicts/{edict}', [ContentController::class, 'updateEdict'])->name('cjc.edicts.update');
Route::delete('/edicts/{edict}', [ContentController::class, 'destroyEdict'])->name('cjc.edicts.destroy');
Route::post('/edicts/{edict}/students/{student}', [ContentController::class, 'assignEdict'])->whereNumber('student')->name('cjc.edicts.assign');
Route::post('/edicts/{edict}/assign', [ContentController::class, 'bulkAssignEdict'])->name('cjc.edicts.bulk-assign');
Route::delete('/edicts/{edict}/students/{student}', [ContentController::class, 'unassignEdict'])->whereNumber('student')->name('cjc.edicts.student.destroy');
Route::put('/edicts/{edict}/order', [ContentController::class, 'reorderEdictItems'])->name('cjc.edicts.order');

Route::post('/edicts/{edict}/subjects', [ContentController::class, 'storeSubject'])->name('cjc.subjects.store');
Route::patch('/subjects/{subject}', [ContentController::class, 'updateSubject'])->name('cjc.subjects.update');
Route::delete('/subjects/{subject}', [ContentController::class, 'destroySubject'])->name('cjc.subjects.destroy');
Route::post('/subjects/{subject}/topics', [ContentController::class, 'storeTopic'])->name('cjc.topics.store');
Route::patch('/topics/{topic}', [ContentController::class, 'updateTopic'])->name('cjc.topics.update');
Route::delete('/topics/{topic}', [ContentController::class, 'destroyTopic'])->name('cjc.topics.destroy');
Route::post('/topics/{topic}/subtopics', [ContentController::class, 'storeSubtopic'])->name('cjc.subtopics.store');
Route::patch('/subtopics/{subtopic}', [ContentController::class, 'updateSubtopic'])->name('cjc.subtopics.update');
Route::delete('/subtopics/{subtopic}', [ContentController::class, 'destroySubtopic'])->name('cjc.subtopics.destroy');

/* Banco de questões */
Route::post('/questions', [QuestionController::class, 'store'])->name('cjc.questions.store');
Route::post('/questions/import', [QuestionController::class, 'import'])->name('cjc.questions.import');
Route::patch('/questions/{question}', [QuestionController::class, 'update'])->name('cjc.questions.update');
Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('cjc.questions.destroy');

/* Flashcards */
Route::post('/flashcard-decks', [FlashcardController::class, 'storeDeck'])->name('cjc.flashcards.decks.store');
Route::post('/flashcard-decks/import', [FlashcardController::class, 'importDecks'])->name('cjc.flashcards.decks.import');
Route::patch('/flashcard-decks/{deck}', [FlashcardController::class, 'updateDeck'])->name('cjc.flashcards.decks.update');
Route::delete('/flashcard-decks/{deck}', [FlashcardController::class, 'destroyDeck'])->name('cjc.flashcards.decks.destroy');
Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeCard'])->name('cjc.flashcards.cards.store');
Route::patch('/flashcards/{card}', [FlashcardController::class, 'updateCard'])->name('cjc.flashcards.cards.update');
Route::delete('/flashcards/{card}', [FlashcardController::class, 'destroyCard'])->name('cjc.flashcards.cards.destroy');

/* Materiais */
Route::post('/materials', [MaterialController::class, 'store'])->name('cjc.materials.store');
Route::patch('/materials/{material}', [MaterialController::class, 'update'])->name('cjc.materials.update');
Route::delete('/materials/{material}', [MaterialController::class, 'destroy'])->name('cjc.materials.destroy');
Route::get('/materials/{material}/download', [MaterialController::class, 'downloadAdmin'])->name('cjc.materials.download');

/* Cronograma */
Route::post('/students/{student}/schedules', [StudyController::class, 'saveSchedule'])->whereNumber('student')->name('cjc.schedules.save');
Route::post('/students/{student}/schedules/generate', [StudyController::class, 'generateSchedule'])->whereNumber('student')->name('cjc.schedules.generate');
Route::post('/students/{student}/schedules/reprogram', [StudyController::class, 'reprogramSchedule'])->whereNumber('student')->name('cjc.schedules.reprogram');
Route::post('/students/{student}/schedules/{schedule}/items', [StudyController::class, 'addScheduleItem'])->whereNumber('student')->name('cjc.schedule-items.store');
Route::patch('/students/{student}/schedule-items/{item}', [StudyController::class, 'updateScheduleItem'])->whereNumber('student')->name('cjc.schedule-items.update');
Route::delete('/students/{student}/schedule-items/{item}', [StudyController::class, 'deleteScheduleItem'])->whereNumber('student')->name('cjc.schedule-items.destroy');

/* Histórico de estudo e questões */
Route::post('/students/{student}/study-sessions', [StudyController::class, 'storeSession'])->whereNumber('student')->name('cjc.sessions.store');
Route::patch('/students/{student}/study-sessions/{session}', [StudyController::class, 'updateSession'])->whereNumber('student')->name('cjc.sessions.update');
Route::delete('/students/{student}/study-sessions/{session}', [StudyController::class, 'deleteSession'])->whereNumber('student')->name('cjc.sessions.destroy');
Route::post('/students/{student}/question-logs', [StudyController::class, 'storeQuestionLog'])->whereNumber('student')->name('cjc.question-logs.store');
Route::patch('/students/{student}/question-logs/{log}', [StudyController::class, 'updateQuestionLog'])->whereNumber('student')->name('cjc.question-logs.update');
Route::delete('/students/{student}/question-logs/{log}', [StudyController::class, 'deleteQuestionLog'])->whereNumber('student')->name('cjc.question-logs.destroy');

/* Revisões */
Route::post('/students/{student}/reviews', [StudyController::class, 'saveReview'])->whereNumber('student')->name('cjc.reviews.store');
Route::patch('/students/{student}/reviews/{review}', [StudyController::class, 'updateReview'])->whereNumber('student')->name('cjc.reviews.update');
Route::delete('/students/{student}/reviews/{review}', [StudyController::class, 'deleteReview'])->whereNumber('student')->name('cjc.reviews.destroy');

/* Simulados e configuração de prova */
Route::post('/students/{student}/mock-exams', [StudyController::class, 'storeMockExam'])->whereNumber('student')->name('cjc.mock-exams.store');
Route::patch('/students/{student}/mock-exams/{mock}', [StudyController::class, 'updateMockExam'])->whereNumber('student')->name('cjc.mock-exams.update');
Route::delete('/students/{student}/mock-exams/{mock}', [StudyController::class, 'deleteMockExam'])->whereNumber('student')->name('cjc.mock-exams.destroy');
Route::get('/students/{student}/exam-config/{contest}', [StudyController::class, 'examConfiguration'])->whereNumber('student')->name('cjc.exam-config.show');
Route::put('/students/{student}/exam-config/{contest}', [StudyController::class, 'saveExamConfiguration'])->whereNumber('student')->name('cjc.exam-config.update');

/* Cadernos */
Route::post('/students/{student}/notebooks', [StudyController::class, 'storeNotebook'])->whereNumber('student')->name('cjc.notebooks.store');
Route::patch('/students/{student}/notebooks/{notebook}', [StudyController::class, 'updateNotebook'])->whereNumber('student')->name('cjc.notebooks.update');
Route::delete('/students/{student}/notebooks/{notebook}', [StudyController::class, 'deleteNotebook'])->whereNumber('student')->name('cjc.notebooks.destroy');

/* Métricas */
Route::get('/students/{student}/metrics/summary', [MetricsController::class, 'studentSummary'])->whereNumber('student')->name('cjc.metrics.summary');
Route::get('/students/{student}/metrics/timeline', [MetricsController::class, 'studentTimeline'])->whereNumber('student')->name('cjc.metrics.timeline');
Route::get('/students/{student}/metrics/subjects', [MetricsController::class, 'studentSubjects'])->whereNumber('student')->name('cjc.metrics.subjects');
