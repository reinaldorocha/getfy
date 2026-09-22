<?php

use Illuminate\Support\Facades\Route;
use Plugins\Vitrine\Controllers\VitrineAdminController;

Route::get('/admin', [VitrineAdminController::class, 'index'])->name('vitrine.admin');
Route::get('/admin/data', [VitrineAdminController::class, 'data'])->name('vitrine.admin.data');
Route::post('/admin/products/sync', [VitrineAdminController::class, 'syncGetfyProducts'])->name('vitrine.admin.products.sync');
Route::post('/admin/products/restore-excluded', [VitrineAdminController::class, 'restoreExcludedProducts'])->name('vitrine.admin.products.restore');
Route::post('/admin/products', [VitrineAdminController::class, 'storeProduct'])->name('vitrine.admin.products.store');
Route::post('/admin/products/{id}/toggle', [VitrineAdminController::class, 'toggleProductActive'])->name('vitrine.admin.products.toggle');
Route::put('/admin/products/{id}', [VitrineAdminController::class, 'updateProduct'])->name('vitrine.admin.products.update');
Route::delete('/admin/products/{id}', [VitrineAdminController::class, 'destroyProduct'])->name('vitrine.admin.products.destroy');
Route::post('/admin/categories', [VitrineAdminController::class, 'storeCategory'])->name('vitrine.admin.categories.store');
Route::delete('/admin/categories/{name}', [VitrineAdminController::class, 'destroyCategory'])->name('vitrine.admin.categories.destroy');
Route::post('/admin/settings', [VitrineAdminController::class, 'updateSettings'])->name('vitrine.admin.settings.update');
Route::post('/admin/approvals', [VitrineAdminController::class, 'storeApproval'])->name('vitrine.admin.approvals.store');
Route::post('/admin/approvals/reorder', [VitrineAdminController::class, 'reorderApprovals'])->name('vitrine.admin.approvals.reorder');
Route::delete('/admin/approvals/{id}', [VitrineAdminController::class, 'destroyApproval'])->name('vitrine.admin.approvals.destroy');
Route::post('/admin/faqs', [VitrineAdminController::class, 'storeFaq'])->name('vitrine.admin.faqs.store');
Route::post('/admin/faqs/reorder', [VitrineAdminController::class, 'reorderFaqs'])->name('vitrine.admin.faqs.reorder');
Route::put('/admin/faqs/{id}', [VitrineAdminController::class, 'updateFaq'])->name('vitrine.admin.faqs.update');
Route::delete('/admin/faqs/{id}', [VitrineAdminController::class, 'destroyFaq'])->name('vitrine.admin.faqs.destroy');
Route::post('/admin/reset', [VitrineAdminController::class, 'resetToDefault'])->name('vitrine.admin.reset');
