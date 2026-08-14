<?php

namespace Plugins\AutoZap\Models;

use Illuminate\Database\Eloquent\Model;

class AutoZapFlow extends Model
{
    protected $table = 'autozap_flows';

    protected $fillable = [
        'tenant_id',
        'product_id',
        'all_products',
        'product_ids',
        'trigger_event',
        'name',
        'is_active',
        'graph_json',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'all_products' => 'boolean',
        'product_ids' => 'array',
        'graph_json' => 'array',
    ];
}


