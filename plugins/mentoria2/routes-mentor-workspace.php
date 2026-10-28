<?php

use Illuminate\Support\Facades\Route;
use Plugins\Mentoria2\Http\Controllers\AiMemoryController;
use Plugins\Mentoria2\Http\Controllers\EssayController;
use Plugins\Mentoria2\Http\Controllers\FeedbackController;
use Plugins\Mentoria2\Http\Controllers\FlashcardController;
use Plugins\Mentoria2\Http\Controllers\GoalController;
use Plugins\Mentoria2\Http\Controllers\GamificationController;
use Plugins\Mentoria2\Http\Controllers\MaterialController;
use Plugins\Mentoria2\Http\Controllers\MetricsController;
use Plugins\Mentoria2\Http\Controllers\NotificationController;
use Plugins\Mentoria2\Http\Controllers\QuestionController;
use Plugins\Mentoria2\Http\Controllers\QuestionReportController;
use Plugins\Mentoria2\Http\Controllers\StudentController;
use Plugins\Mentoria2\Http\Controllers\StudyController;
use Plugins\Mentoria2\Http\Controllers\TimerLogController;

Route::prefix('/students/{student}/workspace/{tenant}')->whereNumber(['student', 'tenant'])->group(function (): void {
    Route::get('/data', [StudentController::class, 'data'])->name('mentoria2.workspace.data');
    Route::get('/goals', [GoalController::class, 'index'])->name('mentoria2.workspace.goals.index');
    Route::get('/gamification', [GamificationController::class, 'studentSummary'])->name('mentoria2.workspace.gamification.summary');
    Route::get('/notifications', [NotificationController::class, 'index'])->name('mentoria2.workspace.notifications.index');
    Route::patch('/notifications/read-all', [NotificationController::class, 'markAllRead'])->name('mentoria2.workspace.notifications.read-all');
    Route::patch('/notifications/{notification}/read', [NotificationController::class, 'markRead'])->name('mentoria2.workspace.notifications.read');
    Route::patch('/edict-progress/{item}', [StudentController::class, 'updateEdictProgress'])->name('mentoria2.workspace.edict-progress.update');
    Route::get('/materials/{material}/download', [MaterialController::class, 'downloadStudent'])->name('mentoria2.workspace.materials.download');
    Route::patch('/materials/{material}/progress', [MaterialController::class, 'updateStudentProgress'])->name('mentoria2.workspace.materials.progress');

    Route::post('/schedules', [StudyController::class, 'saveStudentSchedule'])->name('mentoria2.workspace.schedules.save');
    Route::post('/schedules/generate', [StudyController::class, 'generateStudentSchedule'])->name('mentoria2.workspace.schedules.generate');
    Route::post('/schedules/reprogram', [StudyController::class, 'reprogramStudentSchedule'])->name('mentoria2.workspace.schedules.reprogram');
    Route::post('/schedules/adaptive-plan', [StudyController::class, 'previewStudentAdaptivePlan'])->name('mentoria2.workspace.schedules.adaptive.preview');
    Route::post('/schedules/adaptive-plan/apply', [StudyController::class, 'applyStudentAdaptivePlan'])->name('mentoria2.workspace.schedules.adaptive.apply');
    Route::get('/schedules/calendar', [StudyController::class, 'studentCalendar'])->name('mentoria2.workspace.schedules.calendar');
    Route::post('/schedules/{schedule}/items', [StudyController::class, 'addStudentScheduleItem'])->name('mentoria2.workspace.schedule-items.store');
    Route::patch('/schedule-items/{item}', [StudyController::class, 'updateStudentScheduleItem'])->name('mentoria2.workspace.schedule-items.update');
    Route::delete('/schedule-items/{item}', [StudyController::class, 'deleteStudentScheduleItem'])->name('mentoria2.workspace.schedule-items.destroy');

    Route::post('/study-sessions', [StudyController::class, 'logStudentSession'])->name('mentoria2.workspace.study-sessions.store');
    Route::patch('/study-sessions/{session}', [StudyController::class, 'updateStudentSession'])->name('mentoria2.workspace.study-sessions.update');
    Route::delete('/study-sessions/{session}', [StudyController::class, 'deleteStudentSession'])->name('mentoria2.workspace.study-sessions.destroy');
    Route::post('/question-logs', [StudyController::class, 'storeStudentQuestionLog'])->name('mentoria2.workspace.question-logs.store');
    Route::patch('/question-logs/{log}', [StudyController::class, 'updateStudentQuestionLog'])->name('mentoria2.workspace.question-logs.update');
    Route::delete('/question-logs/{log}', [StudyController::class, 'deleteStudentQuestionLog'])->name('mentoria2.workspace.question-logs.destroy');

    Route::post('/reviews', [StudyController::class, 'saveStudentReview'])->name('mentoria2.workspace.reviews.store');
    Route::patch('/reviews/{review}', [StudyController::class, 'updateStudentReview'])->name('mentoria2.workspace.reviews.update');
    Route::delete('/reviews/{review}', [StudyController::class, 'deleteStudentReview'])->name('mentoria2.workspace.reviews.destroy');

    Route::post('/flashcard-decks', [FlashcardController::class, 'storeStudentDeck'])->name('mentoria2.workspace.flashcard-decks.store');
    Route::patch('/flashcard-decks/{deck}', [FlashcardController::class, 'updateStudentDeck'])->name('mentoria2.workspace.flashcard-decks.update');
    Route::delete('/flashcard-decks/{deck}', [FlashcardController::class, 'destroyStudentDeck'])->name('mentoria2.workspace.flashcard-decks.destroy');
    Route::post('/flashcard-decks/{deck}/cards', [FlashcardController::class, 'storeStudentCard'])->name('mentoria2.workspace.flashcards.store');
    Route::patch('/flashcards/{card}', [FlashcardController::class, 'updateStudentCard'])->name('mentoria2.workspace.flashcards.update');
    Route::delete('/flashcards/{card}', [FlashcardController::class, 'destroyStudentCard'])->name('mentoria2.workspace.flashcards.destroy');
    Route::post('/flashcards/{card}/review', [FlashcardController::class, 'reviewStudentCard'])->name('mentoria2.workspace.flashcards.review');
    Route::get('/flashcards/pending', [FlashcardController::class, 'pendingStudentCards'])->name('mentoria2.workspace.flashcards.pending');
    Route::get('/flashcards/history', [FlashcardController::class, 'studentHistory'])->name('mentoria2.workspace.flashcards.history');

    Route::get('/questions', [QuestionController::class, 'studentIndex'])->name('mentoria2.workspace.questions.index');
    Route::post('/questions/{question}/answer', [QuestionController::class, 'answerStudentQuestion'])->name('mentoria2.workspace.questions.answer');
    Route::get('/questions/{question}/history', [QuestionController::class, 'studentHistory'])->name('mentoria2.workspace.questions.history');
    Route::get('/questions/statistics', [QuestionController::class, 'studentStatistics'])->name('mentoria2.workspace.questions.statistics');

    Route::post('/mock-exams', [StudyController::class, 'storeStudentMockExam'])->name('mentoria2.workspace.mock-exams.store');
    Route::patch('/mock-exams/{mock}', [StudyController::class, 'updateStudentMockExam'])->name('mentoria2.workspace.mock-exams.update');
    Route::delete('/mock-exams/{mock}', [StudyController::class, 'deleteStudentMockExam'])->name('mentoria2.workspace.mock-exams.destroy');
    Route::post('/mock-exams/{mock}/attempts', [StudyController::class, 'startStudentMockAttempt'])->name('mentoria2.workspace.mock-attempts.start');
    Route::patch('/mock-exams/{mock}/attempts/{attempt}/answers/{question}', [StudyController::class, 'saveStudentMockAttemptAnswer'])->name('mentoria2.workspace.mock-attempts.answers.save');
    Route::post('/mock-exams/{mock}/attempts/{attempt}/finish', [StudyController::class, 'finishStudentMockAttempt'])->name('mentoria2.workspace.mock-attempts.finish');
    Route::get('/exam-config/{contest}', [StudyController::class, 'studentExamConfiguration'])->name('mentoria2.workspace.exam-config.show');
    Route::put('/exam-config/{contest}', [StudyController::class, 'saveStudentExamConfiguration'])->name('mentoria2.workspace.exam-config.update');

    Route::post('/notebooks', [StudyController::class, 'storeStudentNotebook'])->name('mentoria2.workspace.notebooks.store');
    Route::patch('/notebooks/{notebook}', [StudyController::class, 'updateStudentNotebook'])->name('mentoria2.workspace.notebooks.update');
    Route::delete('/notebooks/{notebook}', [StudyController::class, 'destroyStudentNotebook'])->name('mentoria2.workspace.notebooks.destroy');
    Route::get('/feedbacks', [FeedbackController::class, 'studentIndex'])->name('mentoria2.workspace.feedbacks.index');
    Route::post('/feedbacks/{feedback}/reply', [FeedbackController::class, 'studentReply'])->name('mentoria2.workspace.feedbacks.reply');
    Route::patch('/feedbacks/{feedback}/read', [FeedbackController::class, 'studentMarkRead'])->name('mentoria2.workspace.feedbacks.read');
    Route::get('/metrics/summary', [MetricsController::class, 'summary'])->name('mentoria2.workspace.metrics.summary');
    Route::get('/metrics/timeline', [MetricsController::class, 'timeline'])->name('mentoria2.workspace.metrics.timeline');
    Route::get('/metrics/subjects', [MetricsController::class, 'subjects'])->name('mentoria2.workspace.metrics.subjects');

    Route::get('/essays', [EssayController::class, 'index'])->name('mentoria2.workspace.essays.index');
    Route::get('/essays/submissions', [EssayController::class, 'submissions'])->name('mentoria2.workspace.essays.submissions');
    Route::get('/ai-memory', [AiMemoryController::class, 'profile'])->name('mentoria2.workspace.ai-memory.profile');
    Route::post('/ai-memory/mastered', [AiMemoryController::class, 'markWeakness'])->name('mentoria2.workspace.ai-memory.mastered');
    Route::post('/timer-logs', [TimerLogController::class, 'store'])->name('mentoria2.workspace.timer-logs.store');
    Route::patch('/preferences', [StudentController::class, 'savePreferences'])->name('mentoria2.workspace.preferences.update');
    Route::post('/preferences', [StudentController::class, 'savePreferences'])->name('mentoria2.workspace.preferences.store');
});


