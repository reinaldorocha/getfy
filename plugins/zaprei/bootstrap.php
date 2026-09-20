<?php

use App\PluginSdk\Getfy;
use Plugins\Zaprei\Services\ConnectionRepository;
use Plugins\Zaprei\Zaprei;

return function ($app, $events): void {
    // Badge "Ativo" na página de Integrações — contrato genérico do core,
    // resolvido sem qualquer alteração fora de plugins/zaprei.
    Getfy::extensions()->register(Zaprei::SLUG, [
        'integration_status_resolver' => static fn (int $tenantId): bool => $app
            ->make(ConnectionRepository::class)
            ->isReady($tenantId),
    ]);
};
