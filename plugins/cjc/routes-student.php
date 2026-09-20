<?php

use Illuminate\Support\Facades\Route;
use Plugins\Cjc\Http\Controllers\FlashcardController;
use Plugins\Cjc\Http\Controllers\QuestionController;
use Plugins\Cjc\Http\Controllers\StudentController;
use Plugins\Cjc\Http\Controllers\StudyController;

Route::get('/{tenant}', [StudentController::class, 'index'])->whereNumber('tenant')->name('index');
Route::get('/{tenant}/data', [StudentController::class, 'data'])->whereNumber('tenant')->name('data');
Route::patch('/{tenant}/edict-progress/{item}', [StudentController::class, 'updateEdictProgress'])->whereNumber('tenant')->name('edict-progress.update');
Route::post('/{tenant}/schedules', [StudyController::class, 'saveStudentSchedule'])->whereNumber('tenant')->name('schedules.save');
Route::post('/{tenant}/schedules/{schedule}/items', [StudyController::class, 'addStudentScheduleItem'])->whereNumber('tenant')->name('schedule-items.store');
Route::patch('/{tenant}/schedule-items/{item}', [StudyController::class, 'updateStudentScheduleItem'])->whereNumber('tenant')->name('schedule-items.update');
Route::post('/{tenant}/reviews', [StudyController::class, 'saveStudentReview'])->whereNumber('tenant')->name('reviews.save');
Route::post('/{tenant}/study-sessions', [StudyController::class, 'logStudentSession'])->whereNumber('tenant')->name('study-sessions.store');
Route::post('/{tenant}/notebooks', [StudyController::class, 'storeStudentNotebook'])->whereNumber('tenant')->name('notebooks.store');
Route::patch('/{tenant}/notebooks/{notebook}', [StudyController::class, 'updateStudentNotebook'])->whereNumber('tenant')->name('notebooks.update');
Route::delete('/{tenant}/notebooks/{notebook}', [StudyController::class, 'destroyStudentNotebook'])->whereNumber('tenant')->name('notebooks.destroy');
Route::post('/{tenant}/flashcards/{card}/review', [FlashcardController::class, 'reviewStudentCard'])->whereNumber('tenant')->name('flashcards.review');
Route::post('/{tenant}/questions/{question}/answer', [QuestionController::class, 'answerStudentQuestion'])->whereNumber('tenant')->name('questions.answer');
Route::post('/{tenant}/mock-exams', [StudyController::class, 'storeStudentMockExam'])->whereNumber('tenant')->name('mock-exams.store');
