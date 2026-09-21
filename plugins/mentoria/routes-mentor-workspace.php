<?php

use Illuminate\Support\Facades\Route;
use Plugins\Mentoria\Http\Controllers\FlashcardController;
use Plugins\Mentoria\Http\Controllers\MaterialController;
use Plugins\Mentoria\Http\Controllers\MetricsController;
use Plugins\Mentoria\Http\Controllers\QuestionController;
use Plugins\Mentoria\Http\Controllers\StudentController;
use Plugins\Mentoria\Http\Controllers\StudyController;

Route::prefix('/students/{student}/workspace/{tenant}')->whereNumber(['student', 'tenant'])->group(function (): void {
    Route::get('/data', [StudentController::class, 'data'])->name('mentoria.workspace.data');
    Route::patch('/edict-progress/{item}', [StudentController::class, 'updateEdictProgress'])->name('mentoria.workspace.edict-progress.update');
    Route::get('/materials/{material}/download', [MaterialController::class, 'downloadStudent'])->name('mentoria.workspace.materials.download');
    Route::patch('/materials/{material}/progress', [MaterialController::class, 'updateStudentProgress'])->name('mentoria.workspace.materials.progress');

    Route::post('/schedules', [StudyController::class, 'saveStudentSchedule'])->name('mentoria.workspace.schedules.save');
    Route::post('/schedules/generate', [StudyController::class, 'generateStudentSchedule'])->name('mentoria.workspace.schedules.generate');
    Route::post('/schedules/reprogram', [StudyController::class, 'reprogramStudentSchedule'])->name('mentoria.workspace.schedules.reprogram');
    Route::get('/schedules/calendar', [StudyController::class, 'studentCalendar'])->name('mentoria.workspace.schedules.calendar');
    Route::post('/schedules/{schedule}/items', [StudyController::class, 'addStudentScheduleItem'])->name('mentoria.workspace.schedule-items.store');
    Route::patch('/schedule-items/{item}', [StudyController::class, 'updateStudentScheduleItem'])->name('mentoria.workspace.schedule-items.update');
    Route::delete('/schedule-items/{item}', [StudyController::class, 'deleteStudentScheduleItem'])->name('mentoria.workspace.schedule-items.destroy');

    Route::post('/study-sessions', [StudyController::class, 'logStudentSession'])->name('mentoria.workspace.study-sessions.store');
    Route::patch('/study-sessions/{session}', [StudyController::class, 'updateStudentSession'])->name('mentoria.workspace.study-sessions.update');
    Route::delete('/study-sessions/{session}', [StudyController::class, 'deleteStudentSession'])->name('mentoria.workspace.study-sessions.destroy');
    Route::post('/question-logs', [StudyController::class, 'storeStudentQuestionLog'])->name('mentoria.workspace.question-logs.store');
    Route::patch('/question-logs/{log}', [StudyController::class, 'updateStudentQuestionLog'])->name('mentoria.workspace.question-logs.update');
    Route::delete('/question-logs/{log}', [StudyController::class, 'deleteStudentQuestionLog'])->name('mentoria.workspace.question-logs.destroy');

    Route::post('/reviews', [StudyController::class, 'saveStudentReview'])->name('mentoria.workspace.reviews.store');
    Route::patch('/reviews/{review}', [StudyController::class, 'updateStudentReview'])->name('mentoria.workspace.reviews.update');
    Route::delete('/reviews/{review}', [StudyController::class, 'deleteStudentReview'])->name('mentoria.workspace.reviews.destroy');

    Route::post('/flashcard-decks', [FlashcardController::class, 'storeStudentDeck'])->name('mentoria.workspace.flashcard-decks.store');
    Route::patch('/flashcard-decks/{deck}', [FlashcardController::class, 'updateStudentDeck'])->name('mentoria.workspace.flashcard-decks.update');
    Route::delete('/flashcard-decks/{deck}', [FlashcardController::class, 'destroyStudentDeck'])->name('mentoria.workspace.flashcard-decks.destroy');
    Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeStudentCard'])->name('mentoria.workspace.flashcards.store');
    Route::patch('/flashcards/{card}', [FlashcardController::class, 'updateStudentCard'])->name('mentoria.workspace.flashcards.update');
    Route::delete('/flashcards/{card}', [FlashcardController::class, 'destroyStudentCard'])->name('mentoria.workspace.flashcards.destroy');
    Route::post('/flashcards/{card}/review', [FlashcardController::class, 'reviewStudentCard'])->name('mentoria.workspace.flashcards.review');
    Route::get('/flashcards/pending', [FlashcardController::class, 'pendingStudentCards'])->name('mentoria.workspace.flashcards.pending');
    Route::get('/flashcards/history', [FlashcardController::class, 'studentHistory'])->name('mentoria.workspace.flashcards.history');

    Route::post('/questions/{question}/answer', [QuestionController::class, 'answerStudentQuestion'])->name('mentoria.workspace.questions.answer');
    Route::get('/questions/{question}/history', [QuestionController::class, 'studentHistory'])->name('mentoria.workspace.questions.history');
    Route::get('/questions/statistics', [QuestionController::class, 'studentStatistics'])->name('mentoria.workspace.questions.statistics');

    Route::post('/mock-exams', [StudyController::class, 'storeStudentMockExam'])->name('mentoria.workspace.mock-exams.store');
    Route::patch('/mock-exams/{mock}', [StudyController::class, 'updateStudentMockExam'])->name('mentoria.workspace.mock-exams.update');
    Route::delete('/mock-exams/{mock}', [StudyController::class, 'deleteStudentMockExam'])->name('mentoria.workspace.mock-exams.destroy');
    Route::get('/exam-config/{contest}', [StudyController::class, 'studentExamConfiguration'])->name('mentoria.workspace.exam-config.show');
    Route::put('/exam-config/{contest}', [StudyController::class, 'saveStudentExamConfiguration'])->name('mentoria.workspace.exam-config.update');

    Route::post('/notebooks', [StudyController::class, 'storeStudentNotebook'])->name('mentoria.workspace.notebooks.store');
    Route::patch('/notebooks/{notebook}', [StudyController::class, 'updateStudentNotebook'])->name('mentoria.workspace.notebooks.update');
    Route::delete('/notebooks/{notebook}', [StudyController::class, 'destroyStudentNotebook'])->name('mentoria.workspace.notebooks.destroy');
    Route::get('/metrics/summary', [MetricsController::class, 'summary'])->name('mentoria.workspace.metrics.summary');
    Route::get('/metrics/timeline', [MetricsController::class, 'timeline'])->name('mentoria.workspace.metrics.timeline');
    Route::get('/metrics/subjects', [MetricsController::class, 'subjects'])->name('mentoria.workspace.metrics.subjects');
});
