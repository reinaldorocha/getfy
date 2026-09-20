<?php

use Illuminate\Support\Facades\Route;
use Plugins\Cjc\Http\Controllers\FlashcardController;
use Plugins\Cjc\Http\Controllers\MaterialController;
use Plugins\Cjc\Http\Controllers\MetricsController;
use Plugins\Cjc\Http\Controllers\QuestionController;
use Plugins\Cjc\Http\Controllers\StudentController;
use Plugins\Cjc\Http\Controllers\StudyController;

Route::get('/{tenant}', [StudentController::class, 'index'])->whereNumber('tenant')->name('index');
Route::get('/{tenant}/data', [StudentController::class, 'data'])->whereNumber('tenant')->name('data');

/* Edital e materiais */
Route::patch('/{tenant}/edict-progress/{item}', [StudentController::class, 'updateEdictProgress'])->whereNumber('tenant')->name('edict-progress.update');
Route::get('/{tenant}/materials/{material}/download', [MaterialController::class, 'downloadStudent'])->whereNumber('tenant')->name('materials.download');
Route::patch('/{tenant}/materials/{material}/progress', [MaterialController::class, 'updateStudentProgress'])->whereNumber('tenant')->name('materials.progress');

/* Cronograma */
Route::post('/{tenant}/schedules', [StudyController::class, 'saveStudentSchedule'])->whereNumber('tenant')->name('schedules.save');
Route::post('/{tenant}/schedules/generate', [StudyController::class, 'generateStudentSchedule'])->whereNumber('tenant')->name('schedules.generate');
Route::post('/{tenant}/schedules/reprogram', [StudyController::class, 'reprogramStudentSchedule'])->whereNumber('tenant')->name('schedules.reprogram');
Route::get('/{tenant}/schedules/calendar', [StudyController::class, 'studentCalendar'])->whereNumber('tenant')->name('schedules.calendar');
Route::post('/{tenant}/schedules/{schedule}/items', [StudyController::class, 'addStudentScheduleItem'])->whereNumber('tenant')->name('schedule-items.store');
Route::patch('/{tenant}/schedule-items/{item}', [StudyController::class, 'updateStudentScheduleItem'])->whereNumber('tenant')->name('schedule-items.update');
Route::delete('/{tenant}/schedule-items/{item}', [StudyController::class, 'deleteStudentScheduleItem'])->whereNumber('tenant')->name('schedule-items.destroy');

/* Sessões e lançamentos de questões */
Route::post('/{tenant}/study-sessions', [StudyController::class, 'logStudentSession'])->whereNumber('tenant')->name('study-sessions.store');
Route::patch('/{tenant}/study-sessions/{session}', [StudyController::class, 'updateStudentSession'])->whereNumber('tenant')->name('study-sessions.update');
Route::delete('/{tenant}/study-sessions/{session}', [StudyController::class, 'deleteStudentSession'])->whereNumber('tenant')->name('study-sessions.destroy');
Route::post('/{tenant}/question-logs', [StudyController::class, 'storeStudentQuestionLog'])->whereNumber('tenant')->name('question-logs.store');
Route::patch('/{tenant}/question-logs/{log}', [StudyController::class, 'updateStudentQuestionLog'])->whereNumber('tenant')->name('question-logs.update');
Route::delete('/{tenant}/question-logs/{log}', [StudyController::class, 'deleteStudentQuestionLog'])->whereNumber('tenant')->name('question-logs.destroy');

/* Revisões */
Route::post('/{tenant}/reviews', [StudyController::class, 'saveStudentReview'])->whereNumber('tenant')->name('reviews.store');
Route::patch('/{tenant}/reviews/{review}', [StudyController::class, 'updateStudentReview'])->whereNumber('tenant')->name('reviews.update');
Route::delete('/{tenant}/reviews/{review}', [StudyController::class, 'deleteStudentReview'])->whereNumber('tenant')->name('reviews.destroy');

/* Flashcards */
Route::post('/{tenant}/flashcard-decks', [FlashcardController::class, 'storeStudentDeck'])->whereNumber('tenant')->name('flashcard-decks.store');
Route::patch('/{tenant}/flashcard-decks/{deck}', [FlashcardController::class, 'updateStudentDeck'])->whereNumber('tenant')->name('flashcard-decks.update');
Route::delete('/{tenant}/flashcard-decks/{deck}', [FlashcardController::class, 'destroyStudentDeck'])->whereNumber('tenant')->name('flashcard-decks.destroy');
Route::post('/{tenant}/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeStudentCard'])->whereNumber('tenant')->name('flashcards.store');
Route::patch('/{tenant}/flashcards/{card}', [FlashcardController::class, 'updateStudentCard'])->whereNumber('tenant')->name('flashcards.update');
Route::delete('/{tenant}/flashcards/{card}', [FlashcardController::class, 'destroyStudentCard'])->whereNumber('tenant')->name('flashcards.destroy');
Route::post('/{tenant}/flashcards/{card}/review', [FlashcardController::class, 'reviewStudentCard'])->whereNumber('tenant')->name('flashcards.review');
Route::get('/{tenant}/flashcards/pending', [FlashcardController::class, 'pendingStudentCards'])->whereNumber('tenant')->name('flashcards.pending');
Route::get('/{tenant}/flashcards/history', [FlashcardController::class, 'studentHistory'])->whereNumber('tenant')->name('flashcards.history');

/* Banco de questões */
Route::post('/{tenant}/questions/{question}/answer', [QuestionController::class, 'answerStudentQuestion'])->whereNumber('tenant')->name('questions.answer');
Route::get('/{tenant}/questions/{question}/history', [QuestionController::class, 'studentHistory'])->whereNumber('tenant')->name('questions.history');
Route::get('/{tenant}/questions/statistics', [QuestionController::class, 'studentStatistics'])->whereNumber('tenant')->name('questions.statistics');

/* Simulados e configuração de prova */
Route::post('/{tenant}/mock-exams', [StudyController::class, 'storeStudentMockExam'])->whereNumber('tenant')->name('mock-exams.store');
Route::patch('/{tenant}/mock-exams/{mock}', [StudyController::class, 'updateStudentMockExam'])->whereNumber('tenant')->name('mock-exams.update');
Route::delete('/{tenant}/mock-exams/{mock}', [StudyController::class, 'deleteStudentMockExam'])->whereNumber('tenant')->name('mock-exams.destroy');
Route::get('/{tenant}/exam-config/{contest}', [StudyController::class, 'studentExamConfiguration'])->whereNumber('tenant')->name('exam-config.show');
Route::put('/{tenant}/exam-config/{contest}', [StudyController::class, 'saveStudentExamConfiguration'])->whereNumber('tenant')->name('exam-config.update');

/* Cadernos */
Route::post('/{tenant}/notebooks', [StudyController::class, 'storeStudentNotebook'])->whereNumber('tenant')->name('notebooks.store');
Route::patch('/{tenant}/notebooks/{notebook}', [StudyController::class, 'updateStudentNotebook'])->whereNumber('tenant')->name('notebooks.update');
Route::delete('/{tenant}/notebooks/{notebook}', [StudyController::class, 'destroyStudentNotebook'])->whereNumber('tenant')->name('notebooks.destroy');

/* Métricas */
Route::get('/{tenant}/metrics/summary', [MetricsController::class, 'summary'])->whereNumber('tenant')->name('metrics.summary');
Route::get('/{tenant}/metrics/timeline', [MetricsController::class, 'timeline'])->whereNumber('tenant')->name('metrics.timeline');
Route::get('/{tenant}/metrics/subjects', [MetricsController::class, 'subjects'])->whereNumber('tenant')->name('metrics.subjects');
