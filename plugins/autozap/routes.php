<?php

use Illuminate\Support\Facades\Route;

require_once __DIR__ . '/src/Http/AutoZapController.php';
require_once __DIR__ . '/src/Http/AutoZapFlowsController.php';
require_once __DIR__ . '/src/Http/AutoZapCampaignsController.php';

// All plugin routes are automatically grouped under /autozap with middleware web+auth+role.

Route::get('/', [\Plugins\AutoZap\Http\AutoZapController::class, 'index'])->name('autozap.index');

Route::get('/connection', [\Plugins\AutoZap\Http\AutoZapController::class, 'getConnection'])->name('autozap.connection.get');
Route::post('/connection', [\Plugins\AutoZap\Http\AutoZapController::class, 'saveConnection'])->middleware('throttle:30,1')->name('autozap.connection.save');
Route::post('/connection/test', [\Plugins\AutoZap\Http\AutoZapController::class, 'testConnection'])->middleware('throttle:10,1')->name('autozap.connection.test');

Route::get('/products', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'products'])->name('autozap.products.list');
Route::get('/groups', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'groups'])->name('autozap.groups.list');
Route::get('/runs', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'runs'])->name('autozap.runs.list');
Route::post('/upload', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'upload'])->middleware('throttle:60,1')->name('autozap.upload');

Route::get('/flows', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'index'])->name('autozap.flows.index');
Route::post('/flows', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'store'])->middleware('throttle:60,1')->name('autozap.flows.store');
Route::put('/flows/{flow}', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'update'])->middleware('throttle:60,1')->name('autozap.flows.update');
Route::post('/flows/{flow}/duplicate', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'duplicate'])->middleware('throttle:60,1')->name('autozap.flows.duplicate');
Route::delete('/flows/{flow}', [\Plugins\AutoZap\Http\AutoZapFlowsController::class, 'destroy'])->middleware('throttle:30,1')->name('autozap.flows.destroy');

// Campanhas e Base de Contatos Unificada
Route::get('/contacts', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'contacts'])->name('autozap.contacts.index');
Route::post('/contacts/import', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'importContacts'])->middleware('throttle:20,1')->name('autozap.contacts.import');
Route::delete('/contacts/{id}', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'deleteImportedContact'])->middleware('throttle:30,1')->name('autozap.contacts.delete');

Route::get('/campaigns', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'index'])->name('autozap.campaigns.index');
Route::post('/campaigns', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'store'])->middleware('throttle:30,1')->name('autozap.campaigns.store');
Route::get('/campaigns/{id}', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'show'])->name('autozap.campaigns.show');
Route::post('/campaigns/{id}/cancel', [\Plugins\AutoZap\Http\AutoZapCampaignsController::class, 'cancel'])->middleware('throttle:30,1')->name('autozap.campaigns.cancel');

