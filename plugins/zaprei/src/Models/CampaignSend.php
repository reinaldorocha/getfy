<?php

namespace Plugins\Zaprei\Models;

/**
 * Uma linha por destinatário de campanha.
 *
 * @property int $id
 * @property int $tenant_id
 * @property int $campaign_id
 * @property string $phone
 * @property string|null $name
 * @property string|null $email
 * @property string|null $message_sent
 * @property string $status
 * @property string|null $error_message
 * @property \Illuminate\Support\Carbon|null $sent_at
 */
class CampaignSend extends TenantScopedModel
{
    public const STATUS_PENDING = 'pending';

    public const STATUS_SENT = 'sent';

    public const STATUS_FAILED = 'failed';

    public const STATUS_CANCELLED = 'cancelled';

    protected $table = 'plugin_zaprei_campaign_sends';

    protected $casts = [
        'sent_at' => 'datetime',
    ];
}
