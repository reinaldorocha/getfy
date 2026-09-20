<?php

use App\PluginSdk\Getfy;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

return static function (): void {
    Getfy::productTypes()->register('cjc', 'cjc', [
        'maps_to' => 'link',
        'label' => 'CJC - Plataforma de estudos',
        'description' => 'Libera o Chega Junto Concurseiro para o comprador.',
        'available' => true,
        'icon' => 'graduation-cap',
    ]);

    getfy_add_filter('inertia.shared', static function (array $shared, $request): array {
        if (str_starts_with(trim((string) $request->path(), '/'), 'cjc-estudos/')) {
            $shared['plugin_ui'] = \App\Plugins\PluginExtensionRegistry::inertiaPayload();
            $shared['pageTitle'] = 'CJC - Minha preparação';
        }

        return $shared;
    });

    getfy_add_action('order.completed', static function ($order): void {
        if (! Schema::hasTable('cjc_products')) {
            return;
        }
        $productId = (string) ($order->product_id ?? '');
        if ($productId === '') {
            return;
        }
        $product = DB::table('products')->where('id', $productId)->first(['id', 'tenant_id', 'checkout_config']);
        if (! $product || ! $product->tenant_id) {
            return;
        }
        $config = is_string($product->checkout_config) ? json_decode($product->checkout_config, true) : (array) $product->checkout_config;
        $marker = is_array($config) ? ($config['_plugin_product'] ?? null) : null;
        if (! is_array($marker) || ($marker['slug'] ?? null) !== 'cjc') {
            return;
        }
        DB::table('cjc_products')->updateOrInsert(
            ['product_id' => $productId],
            [
                'tenant_id' => (int) $product->tenant_id,
                'is_active' => true,
                'capabilities' => json_encode(['cronograma', 'questoes', 'flashcards', 'revisoes', 'simulados', 'cadernos'], JSON_UNESCAPED_UNICODE),
                'settings' => json_encode([], JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
        $config['deliverable_link'] = url('/cjc-estudos/'.(int) $product->tenant_id);
        DB::table('products')->where('id', $productId)->update([
            'checkout_config' => json_encode($config, JSON_UNESCAPED_UNICODE),
            'updated_at' => now(),
        ]);
    });

    $routes = __DIR__.DIRECTORY_SEPARATOR.'routes-student.php';
    if (is_file($routes)) {
        Route::middleware(['web', 'auth', 'role:aluno'])
            ->prefix('cjc-estudos')
            ->name('cjc.student.')
            ->group($routes);
    }
};
