<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Jobs\ImportEdictJsonJob;
use Plugins\Mentoria2\Jobs\SyncRadarJob;
use Plugins\Mentoria2\Services\AccessService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BackgroundTaskController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $perPage = min(max((int) $request->query('per_page', 20), 5), 50);

        $query = DB::table('mentoria2_background_tasks')
            ->where('tenant_id', $tenantId);

        if ($request->filled('type')) {
            $query->where('type', $request->query('type'));
        }
        if ($request->filled('status')) {
            $query->where('status', $request->query('status'));
        }

        $paginated = $query->latest('created_at')->paginate($perPage);

        $items = collect($paginated->items())->map(function ($row) {
            $row->payload = is_string($row->payload) ? json_decode($row->payload, true) : (array) $row->payload;
            $row->result = is_string($row->result) ? json_decode($row->result, true) : (array) $row->result;
            return $row;
        });

        return response()->json([
            'data' => $items,
            'meta' => [
                'current_page' => $paginated->currentPage(),
                'last_page' => $paginated->lastPage(),
                'per_page' => $paginated->perPage(),
                'total' => $paginated->total(),
            ],
        ]);
    }

    public function show(Request $request, string $task): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $row = DB::table('mentoria2_background_tasks')
            ->where('tenant_id', $tenantId)
            ->where('id', $task)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Tarefa em segundo plano não encontrada.');
        }

        $row->payload = is_string($row->payload) ? json_decode($row->payload, true) : (array) $row->payload;
        $row->result = is_string($row->result) ? json_decode($row->result, true) : (array) $row->result;

        return response()->json([
            'task' => [
                'id' => $row->id,
                'type' => $row->type,
                'status' => $row->status,
                'progress' => (int) $row->progress,
                'error' => $row->error,
                'result' => $row->result,
                'started_at' => $row->started_at,
                'finished_at' => $row->finished_at,
                'created_at' => $row->created_at,
            ],
        ]);
    }

    public function syncRadarAsync(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $validated = $request->validate([
            'source_id' => ['nullable', 'uuid'],
            'dry_run' => ['sometimes', 'boolean'],
        ]);

        $taskId = (string) Str::uuid();

        DB::table('mentoria2_background_tasks')->insert([
            'id' => $taskId,
            'tenant_id' => $tenantId,
            'user_id' => $actor->id,
            'type' => 'radar_sync',
            'status' => 'pending',
            'progress' => 0,
            'payload' => json_encode($validated, JSON_UNESCAPED_UNICODE),
            'result' => null,
            'error' => null,
            'attempts' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        SyncRadarJob::dispatch(
            $taskId,
            $tenantId,
            $actor->id,
            $validated['source_id'] ?? null,
            (bool) ($validated['dry_run'] ?? false)
        );

        return response()->json([
            'ok' => true,
            'message' => 'Sincronização do Radar iniciada em segundo plano.',
            'task_id' => $taskId,
        ], 202);
    }

    public function importJsonAsync(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $validated = $request->validate([
            'type' => ['required', 'string', 'in:edital,questions,flashcards'],
            'json' => ['required'],
            'contest_id' => ['nullable', 'string'],
            'new_contest_name' => ['nullable', 'string'],
            'role' => ['nullable', 'string'],
            'organization' => ['nullable', 'string'],
            'board' => ['nullable', 'string'],
            'targets' => ['nullable', 'array'],
        ]);

        $data = is_string($validated['json']) ? json_decode($validated['json'], true) : $validated['json'];
        if (! is_array($data)) {
            return response()->json(['ok' => false, 'message' => 'JSON inválido.'], 422);
        }

        if (! empty($validated['new_contest_name'])) {
            $data['new_contest_name'] = $validated['new_contest_name'];
        }
        if (! empty($validated['role'])) {
            $data['role'] = $validated['role'];
        }
        if (! empty($validated['organization'])) {
            $data['organization'] = $validated['organization'];
        }
        if (! empty($validated['board'])) {
            $data['board'] = $validated['board'];
        }

        $taskId = (string) Str::uuid();

        DB::table('mentoria2_background_tasks')->insert([
            'id' => $taskId,
            'tenant_id' => $tenantId,
            'user_id' => $actor->id,
            'type' => 'edict_import',
            'status' => 'pending',
            'progress' => 0,
            'payload' => json_encode(['type' => $validated['type'], 'contest_id' => $validated['contest_id'] ?? null], JSON_UNESCAPED_UNICODE),
            'result' => null,
            'error' => null,
            'attempts' => 0,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ImportEdictJsonJob::dispatch(
            $taskId,
            $tenantId,
            $actor->id,
            $validated['type'],
            $data,
            $validated['contest_id'] ?? null,
            $validated['targets'] ?? null
        );

        return response()->json([
            'ok' => true,
            'message' => 'Importação enviada para fila de processamento.',
            'task_id' => $taskId,
        ], 202);
    }
}

