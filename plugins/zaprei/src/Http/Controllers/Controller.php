<?php

namespace Plugins\Zaprei\Http\Controllers;

use App\PluginSdk\Getfy;
use Illuminate\Http\Request;

/**
 * Base dos controllers do painel: resolve o tenant da requisição pelo SDK.
 */
abstract class Controller
{
    protected function tenantId(Request $request): int
    {
        return Getfy::tenant()->requireCurrent($request);
    }
}
