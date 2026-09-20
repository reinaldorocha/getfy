<?php

use Illuminate\Support\Facades\Route;
use Plugins\Cjc\Http\Controllers\CourseQuestionController;

Route::get('/products/{product}/lessons/{lesson}/questions', [CourseQuestionController::class, 'studentLessonQuestions'])
    ->whereNumber('lesson')->name('lesson-questions');
Route::post('/products/{product}/lessons/{lesson}/questions/{question}/answer', [CourseQuestionController::class, 'answerStudentLessonQuestion'])
    ->whereNumber('lesson')->name('lesson-questions.answer');
