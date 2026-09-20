<?php

namespace Plugins\Zaprei\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * Base das tabelas do plugin: toda leitura passa por forTenant().
 */
abstract class TenantScopedModel extends Model
{
    protected $guarded = [];

    /**
     * @param  Builder<static>  $query
     * @return Builder<static>
     */
    public function scopeForTenant(Builder $query, int $tenantId): Builder
    {
        return $query->where('tenant_id', $tenantId);
    }
}
