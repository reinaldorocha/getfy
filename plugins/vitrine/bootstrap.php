<?php

use App\Events\ProductCreated;
use App\Events\ProductUpdated;
use Plugins\Vitrine\Services\VitrineCheckoutService;
use Plugins\Vitrine\Services\VitrineSyncService;

return function ($app, $events): void {
    $app->singleton(VitrineSyncService::class);
    $app->singleton(VitrineCheckoutService::class);

    // Garantir registro de views do plugin
    if (is_dir(__DIR__ . '/views')) {
        view()->addNamespace('vitrine', __DIR__ . '/views');
    }

    // Auto-sincronizar quando novo produto for criado ou atualizado no Getfy
    if ($events) {
        $events->listen(ProductCreated::class, function (ProductCreated $event) use ($app): void {
            try {
                $tenantId = $event->product->tenant_id ?? 1;
                $app->make(VitrineSyncService::class)->syncFromGetfy((int) $tenantId);
            } catch (\Throwable $e) {
                // Silently ignore background sync issues
            }
        });

        $events->listen(ProductUpdated::class, function (ProductUpdated $event) use ($app): void {
            try {
                $tenantId = $event->product->tenant_id ?? 1;
                $app->make(VitrineSyncService::class)->syncFromGetfy((int) $tenantId);
            } catch (\Throwable $e) {
                // Silently ignore background sync issues
            }
        });
    }
};
