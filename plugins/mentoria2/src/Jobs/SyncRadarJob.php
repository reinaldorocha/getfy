<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Plugins\Mentoria2\Services\Radar\RadarIngestionService;
use Throwable;

class SyncRadarJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 300;
    public int $tries = 3;

    public function __construct(
        public readonly string $taskId,
        public readonly int $tenantId,
        public readonly ?int $userId = null,
        public readonly ?string $sourceId = null,
        public readonly bool $dryRun = false,
    ) {}

    public function handle(RadarIngestionService $ingestion): void
    {
        DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
            'status' => 'processing',
            'progress' => 15,
            'started_at' => now(),
            'updated_at' => now(),
        ]);

        try {
            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'progress' => 40,
                'updated_at' => now(),
            ]);

            $result = $ingestion->sync($this->sourceId, $this->dryRun);

            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'status' => 'completed',
                'progress' => 100,
                'result' => json_encode($result, JSON_UNESCAPED_UNICODE),
                'finished_at' => now(),
                'updated_at' => now(),
            ]);

            Log::info("SyncRadarJob [{$this->taskId}] completed successfully for tenant {$this->tenantId}");
        } catch (Throwable $e) {
            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'status' => 'failed',
                'error' => 'Falha durante a sincronização do Radar. Verifique a fonte e tente novamente.',
                'finished_at' => now(),
                'updated_at' => now(),
            ]);

            Log::error("SyncRadarJob [{$this->taskId}] failed: " . $e->getMessage(), [
                'tenant_id' => $this->tenantId,
                'user_id' => $this->userId,
                'source_id' => $this->sourceId,
                'exception' => $e,
            ]);

            throw $e;
        }
    }
}

