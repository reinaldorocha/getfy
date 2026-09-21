<?php

use Illuminate\Support\Facades\Route;
use Plugins\Vitrine\Controllers\VitrinePublicController;

Route::get('/', [VitrinePublicController::class, 'showcase'])->name('vitrine.public.index');
Route::get('/api/products', [VitrinePublicController::class, 'products'])->name('vitrine.public.products');
Route::get('/api/categories', [VitrinePublicController::class, 'categories'])->name('vitrine.public.categories');
Route::get('/api/settings', [VitrinePublicController::class, 'settings'])->name('vitrine.public.settings');
Route::get('/api/approvals', [VitrinePublicController::class, 'approvals'])->name('vitrine.public.approvals');
Route::get('/api/faqs', [VitrinePublicController::class, 'faqs'])->name('vitrine.public.faqs');
Route::post('/api/checkout', [VitrinePublicController::class, 'checkout'])->name('vitrine.public.checkout');
Route::get('/api/order/{id}', [VitrinePublicController::class, 'checkOrderStatus'])->name('vitrine.public.order.status');
