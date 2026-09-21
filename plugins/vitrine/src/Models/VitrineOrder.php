<?php

namespace Plugins\Vitrine\Models;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VitrineOrder extends Model
{
    protected $table = 'plugin_vitrine_orders';

    protected $guarded = ['id'];

    protected function casts(): array
    {
        return [
            'total_amount' => 'decimal:2',
            'items' => 'array',
        ];
    }

    public function getfyOrder(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'getfy_order_id');
    }
}
