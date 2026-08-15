<?php

namespace Plugins\AutoZap\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AutoZapCampaign extends Model
{
    protected $table = 'autozap_campaigns';

    protected $fillable = [
        'tenant_id',
        'autozap_connection_id',
        'name',
        'message',
        'product_ids',
        'audience_filter',
        'total_recipients',
        'sent_count',
        'delivered_count',
        'error_count',
        'pending_count',
        'status',
        'scheduled_at',
        'started_at',
        'completed_at',
    ];

    protected function casts(): array
    {
        return [
            'product_ids' => 'array',
            'audience_filter' => 'array',
            'total_recipients' => 'integer',
            'sent_count' => 'integer',
            'delivered_count' => 'integer',
            'error_count' => 'integer',
            'pending_count' => 'integer',
            'scheduled_at' => 'datetime',
            'started_at' => 'datetime',
            'completed_at' => 'datetime',
        ];
    }

    public function connection(): BelongsTo
    {
        return $this->belongsTo(AutoZapConnection::class, 'autozap_connection_id');
    }

    public function sends(): HasMany
    {
        return $this->hasMany(AutoZapCampaignSend::class, 'autozap_campaign_id');
    }
}
