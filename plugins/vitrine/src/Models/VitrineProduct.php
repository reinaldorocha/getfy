<?php

namespace Plugins\Vitrine\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VitrineProduct extends Model
{
    protected $table = 'plugin_vitrine_products';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'order_position' => 'integer',
        ];
    }

    public function getfyProduct(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'getfy_product_id');
    }

    public function getNumericPrice(): float
    {
        $cleaned = preg_replace('/[^\d,.]/', '', $this->promoPrice);
        if (str_contains($cleaned, ',') && str_contains($cleaned, '.')) {
            $cleaned = str_replace('.', '', $cleaned);
            $cleaned = str_replace(',', '.', $cleaned);
        } elseif (str_contains($cleaned, ',')) {
            $cleaned = str_replace(',', '.', $cleaned);
        }

        return (float) $cleaned;
    }
}
