<?php

namespace Plugins\Zaprei\Models;

/**
 * Contato do ZapRei — comprador sincronizado das vendas ou importado por CSV.
 *
 * @property int $id
 * @property int $tenant_id
 * @property string $source
 * @property string $source_key
 * @property string|null $name
 * @property string|null $email
 * @property string $phone
 * @property array<int, mixed>|null $products
 */
class Contact extends TenantScopedModel
{
    public const SOURCE_BUYER = 'buyer';

    public const SOURCE_IMPORTED = 'imported';

    protected $table = 'plugin_zaprei_contacts';

    protected $casts = [
        'products' => 'array',
    ];
}
