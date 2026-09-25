<?php

namespace Plugins\Zaprei\Models;

/**
 * Disparo em massa para a base de contatos.
 *
 * @property int $id
 * @property int $tenant_id
 * @property string $name
 * @property string $message
 * @property array<string, mixed>|null $message_data
 * @property array<string, mixed> $audience_filter
 * @property int|null $flow_id
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $scheduled_at
 * @property int $total_recipients
 * @property int $sent_count
 * @property int $error_count
 */
class Campaign extends TenantScopedModel
{
    public const STATUS_SCHEDULED = 'scheduled';

    public const STATUS_PROCESSING = 'processing';

    public const STATUS_COMPLETED = 'completed';

    public const STATUS_CANCELLED = 'cancelled';

    protected $table = 'plugin_zaprei_campaigns';

    protected $casts = [
        'flow_id' => 'integer',
        'audience_filter' => 'array',
        'message_data' => 'array',
        'scheduled_at' => 'datetime',
    ];

    public function flow()
    {
        return $this->belongsTo(Flow::class, 'flow_id');
    }

    public function isCancelled(): bool
    {
        return $this->status === self::STATUS_CANCELLED;
    }
}
