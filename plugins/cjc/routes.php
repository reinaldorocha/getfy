<?php

use Illuminate\Support\Facades\Route;
use Plugins\Cjc\Http\Controllers\ContentController;
use Plugins\Cjc\Http\Controllers\FlashcardController;
use Plugins\Cjc\Http\Controllers\PanelController;
use Plugins\Cjc\Http\Controllers\QuestionController;
use Plugins\Cjc\Http\Controllers\StudyController;

Route::get('/', [PanelController::class, 'index'])->name('cjc.index');
Route::get('/data', [PanelController::class, 'data'])->name('cjc.data');
Route::get('/students/{student}', [PanelController::class, 'student'])->whereNumber('student')->name('cjc.students.show');

Route::post('/products/{product}/enable', [PanelController::class, 'enableProduct'])->name('cjc.products.enable');
Route::delete('/products/{product}', [PanelController::class, 'disableProduct'])->name('cjc.products.disable');

Route::post('/contests', [ContentController::class, 'storeContest'])->name('cjc.contests.store');
Route::patch('/contests/{contest}', [ContentController::class, 'updateContest'])->name('cjc.contests.update');
Route::delete('/contests/{contest}', [ContentController::class, 'destroyContest'])->name('cjc.contests.destroy');
Route::post('/contests/{contest}/students/{student}', [ContentController::class, 'assignContest'])->whereNumber('student')->name('cjc.contests.assign');

Route::post('/edicts', [ContentController::class, 'storeEdict'])->name('cjc.edicts.store');
Route::post('/edicts/{edict}/subjects', [ContentController::class, 'storeSubject'])->name('cjc.subjects.store');
Route::post('/subjects/{subject}/topics', [ContentController::class, 'storeTopic'])->name('cjc.topics.store');
Route::post('/topics/{topic}/subtopics', [ContentController::class, 'storeSubtopic'])->name('cjc.subtopics.store');
Route::post('/edicts/{edict}/students/{student}', [ContentController::class, 'assignEdict'])->whereNumber('student')->name('cjc.edicts.assign');
Route::post('/materials', [ContentController::class, 'storeMaterial'])->name('cjc.materials.store');

Route::post('/questions', [QuestionController::class, 'store'])->name('cjc.questions.store');
Route::patch('/questions/{question}', [QuestionController::class, 'update'])->name('cjc.questions.update');
Route::delete('/questions/{question}', [QuestionController::class, 'destroy'])->name('cjc.questions.destroy');

Route::post('/students/{student}/schedules', [StudyController::class, 'saveSchedule'])->whereNumber('student')->name('cjc.schedules.save');
Route::post('/students/{student}/schedules/{schedule}/items', [StudyController::class, 'addScheduleItem'])->whereNumber('student')->name('cjc.schedule-items.store');
Route::patch('/students/{student}/schedule-items/{item}', [StudyController::class, 'updateScheduleItem'])->whereNumber('student')->name('cjc.schedule-items.update');
Route::post('/students/{student}/reviews', [StudyController::class, 'saveReview'])->whereNumber('student')->name('cjc.reviews.save');
Route::post('/students/{student}/mock-exams', [StudyController::class, 'storeMockExam'])->whereNumber('student')->name('cjc.mock-exams.store');

Route::post('/flashcard-decks', [FlashcardController::class, 'storeDeck'])->name('cjc.flashcards.decks.store');
Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeCard'])->name('cjc.flashcards.cards.store');
