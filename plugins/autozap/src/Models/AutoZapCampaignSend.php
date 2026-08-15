<?php

namespace Plugins\AutoZap\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AutoZapCampaignSend extends Model
{
    protected $table = 'autozap_campaign_sends';

    protected $fillable = [
        'autozap_campaign_id',
        'tenant_id',
        'recipient_type',
        'recipient_id',
        'name',
        'email',
        'phone',
        'product_name',
        'message_sent',
        'status',
        'api_response',
        'error_message',
        'sent_at',
        'delivered_at',
    ];

    protected function casts(): array
    {
        return [
            'api_response' => 'array',
            'sent_at' => 'datetime',
            'delivered_at' => 'datetime',
        ];
    }

    public function campaign(): BelongsTo
    {
        return $this->belongsTo(AutoZapCampaign::class, 'autozap_campaign_id');
    }
}
