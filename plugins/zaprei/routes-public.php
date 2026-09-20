<?php

use Illuminate\Support\Facades\Route;
use Plugins\Zaprei\Http\Controllers\InboundWebhookController;

/*
 * Webhook de mensagens recebidas da Evolution GO.
 *
 * Registrada via `public_routes` no plugin.json: fica fora do prefixo /zaprei
 * e sem o middleware ['auth','role:admin|infoprodutor'] das rotas do painel
 * — a Evolution GO não tem sessão nem usuário Getfy. Autenticação é o
 * segredo por tenant na própria URL (ver InboundWebhookController).
 */
Route::post('/{tenant}/{secret}', [InboundWebhookController::class, 'handle'])
    ->where(['tenant' => '[0-9]+', 'secret' => '[A-Za-z0-9]+'])
    ->name('zaprei.webhooks.inbound');
