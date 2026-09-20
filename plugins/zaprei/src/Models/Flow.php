<?php

namespace Plugins\Zaprei\Models;

/**
 * Fluxo de automação: um evento gatilho + o grafo desenhado no editor.
 *
 * @property int $id
 * @property int $tenant_id
 * @property string $name
 * @property string $trigger_event
 * @property list<string>|null $product_ids
 * @property array<string, mixed> $graph_json
 * @property bool $is_active
 */
class Flow extends TenantScopedModel
{
    protected $table = 'plugin_zaprei_flows';

    protected $casts = [
        'graph_json' => 'array',
        'product_ids' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Fluxo vale para o produto quando é global (product_ids nulo) ou quando
     * o produto está entre os selecionados.
     *
     * `products.id` é UUID (string) — não um inteiro.
     *
     * @param  \Illuminate\Database\Eloquent\Builder<static>  $query
     * @return \Illuminate\Database\Eloquent\Builder<static>
     */
    public function scopeForProduct($query, ?string $productId)
    {
        if ($productId === null || $productId === '') {
            return $query;
        }

        return $query->where(function ($sub) use ($productId): void {
            $sub->whereNull('product_ids')->orWhereJsonContains('product_ids', $productId);
        });
    }
}
