<?php

namespace Plugins\Zaprei\Models;

use Illuminate\Database\Eloquent\Builder;

/**
 * Histórico de uma execução de fluxo.
 *
 * @property int $id
 * @property int $tenant_id
 * @property int $flow_id
 * @property string $event_class
 * @property string $status
 * @property array<string, mixed>|null $context
 * @property string|null $resume_node_id
 * @property \Illuminate\Support\Carbon|null $resume_at
 * @property string|null $reply_node_id
 * @property string|null $last_error
 */
class FlowRun extends TenantScopedModel
{
    public const STATUS_RUNNING = 'running';

    public const STATUS_WAITING = 'waiting';

    public const STATUS_COMPLETED = 'completed';

    public const STATUS_FAILED = 'failed';

    protected $table = 'plugin_zaprei_flow_runs';

    protected $casts = [
        'context' => 'array',
        'resume_at' => 'datetime',
    ];

    /**
     * Execuções paradas num bloco de espera cujo horário já chegou.
     *
     * @param  Builder<static>  $query
     * @return Builder<static>
     */
    public function scopeDueToResume(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_WAITING)
            ->whereNotNull('resume_at')
            ->where('resume_at', '<=', now());
    }
}
