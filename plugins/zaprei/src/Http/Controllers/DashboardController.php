<?php

namespace Plugins\Zaprei\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

/**
 * Página do painel — o componente Vue vem do bundle do plugin
 * (frontend.pages.Dashboard em plugin.json).
 */
final class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Plugin/zaprei/Dashboard');
    }
}
