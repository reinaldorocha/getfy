<?php

use Illuminate\Support\Facades\Route;
use Plugins\Zaprei\Http\Controllers\CampaignController;
use Plugins\Zaprei\Http\Controllers\CatalogController;
use Plugins\Zaprei\Http\Controllers\ConnectionController;
use Plugins\Zaprei\Http\Controllers\ContactController;
use Plugins\Zaprei\Http\Controllers\DailyReportController;
use Plugins\Zaprei\Http\Controllers\DashboardController;
use Plugins\Zaprei\Http\Controllers\FlowController;
use Plugins\Zaprei\Http\Controllers\MediaController;

/*
 * Rotas do painel do ZapRei.
 *
 * O core já aplica ['web', 'auth', 'role:admin|infoprodutor'] e o prefixo /zaprei
 * (App\Providers\PluginServiceProvider::loadPluginRoutes). Aqui declaramos apenas
 * as capabilities do plugin e os limites de requisição de cada grupo.
 */

Route::middleware('team.permission:plugin:zaprei:manage')->group(function (): void {
    Route::get('/', [DashboardController::class, 'index'])->name('zaprei.index');

    Route::get('/products', [CatalogController::class, 'products'])->name('zaprei.products');
    Route::get('/groups', [CatalogController::class, 'groups'])->name('zaprei.groups');

    Route::get('/flows', [FlowController::class, 'index'])->name('zaprei.flows.index');
    Route::get('/flows/runs', [FlowController::class, 'runs'])->name('zaprei.flows.runs');

    Route::get('/daily-report', [DailyReportController::class, 'show'])->name('zaprei.daily_report.show');
    Route::put('/daily-report', [DailyReportController::class, 'update'])->name('zaprei.daily_report.update');
    Route::post('/daily-report/test', [DailyReportController::class, 'test'])->name('zaprei.daily_report.test');

    Route::middleware('throttle:60,1')->group(function (): void {
        Route::post('/flows', [FlowController::class, 'store'])->name('zaprei.flows.store');
        Route::put('/flows/{flow}', [FlowController::class, 'update'])->name('zaprei.flows.update');
        Route::delete('/flows/{flow}', [FlowController::class, 'destroy'])->name('zaprei.flows.destroy');
        Route::post('/flows/{flow}/duplicate', [FlowController::class, 'duplicate'])->name('zaprei.flows.duplicate');
        Route::post('/flows/{flow}/test', [FlowController::class, 'test'])->name('zaprei.flows.test');
        Route::post('/flows/runs/{run}/retry', [FlowController::class, 'retryRun'])->name('zaprei.flows.runs.retry');
        Route::post('/media', [MediaController::class, 'store'])->name('zaprei.media.store');
    });

    Route::get('/contacts', [ContactController::class, 'index'])->name('zaprei.contacts.index');
    Route::middleware('throttle:20,1')->group(function (): void {
        Route::post('/contacts/import', [ContactController::class, 'import'])->name('zaprei.contacts.import');
        Route::delete('/contacts/{contact}', [ContactController::class, 'destroy'])->name('zaprei.contacts.destroy');
    });
});

Route::middleware('team.permission:plugin:zaprei:connections')->group(function (): void {
    Route::get('/connection', [ConnectionController::class, 'show'])->name('zaprei.connection.show');
    Route::middleware('throttle:20,1')->group(function (): void {
        Route::put('/connection', [ConnectionController::class, 'update'])->name('zaprei.connection.update');
        Route::post('/connection/test', [ConnectionController::class, 'test'])->name('zaprei.connection.test');
    });
});

Route::middleware('team.permission:plugin:zaprei:campaigns')->group(function (): void {
    Route::get('/campaigns', [CampaignController::class, 'index'])->name('zaprei.campaigns.index');
    Route::get('/campaigns/{campaign}', [CampaignController::class, 'show'])->name('zaprei.campaigns.show');
    Route::middleware('throttle:20,1')->group(function (): void {
        Route::post('/campaigns', [CampaignController::class, 'store'])->name('zaprei.campaigns.store');
        Route::post('/campaigns/{campaign}/cancel', [CampaignController::class, 'cancel'])->name('zaprei.campaigns.cancel');
    });
});
