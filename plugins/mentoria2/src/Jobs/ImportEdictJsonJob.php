<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Plugins\Mentoria2\Services\JsonImportService;
use Throwable;

class ImportEdictJsonJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 300;
    public int $tries = 2;

    public function __construct(
        public readonly string $taskId,
        public readonly int $tenantId,
        public readonly int $userId,
        public readonly string $type,
        public readonly array $data,
        public readonly ?string $contestId = null,
        public readonly ?array $targets = null,
    ) {}

    public function handle(JsonImportService $importService): void
    {
        DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
            'status' => 'processing',
            'progress' => 20,
            'started_at' => now(),
            'updated_at' => now(),
        ]);

        try {
            $user = User::query()->find($this->userId);
            if (! $user) {
                throw new \RuntimeException('Usuário mentor não encontrado para a tarefa.');
            }

            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'progress' => 50,
                'updated_at' => now(),
            ]);

            $result = $importService->importPayload(
                $this->tenantId,
                $user,
                $this->type,
                $this->data,
                $this->contestId,
                $this->targets
            );

            $ok = (bool) ($result['ok'] ?? false);

            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'status' => $ok ? 'completed' : 'failed',
                'progress' => $ok ? 100 : 50,
                'result' => json_encode($result, JSON_UNESCAPED_UNICODE),
                'error' => $ok ? null : ($result['message'] ?? 'Falha na validação dos dados de importação.'),
                'finished_at' => now(),
                'updated_at' => now(),
            ]);

            Log::info("ImportEdictJsonJob [{$this->taskId}] finished with status " . ($ok ? 'completed' : 'failed'));
        } catch (Throwable $e) {
            DB::table('mentoria2_background_tasks')->where('id', $this->taskId)->update([
                'status' => 'failed',
                'error' => 'Falha técnica durante o processamento do arquivo. Tente novamente.',
                'finished_at' => now(),
                'updated_at' => now(),
            ]);

            Log::error("ImportEdictJsonJob [{$this->taskId}] failed: " . $e->getMessage(), [
                'tenant_id' => $this->tenantId,
                'user_id' => $this->userId,
                'type' => $this->type,
                'exception' => $e,
            ]);

            throw $e;
        }
    }
}

