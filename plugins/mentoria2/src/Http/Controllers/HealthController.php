<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Plugins\Mentoria2\Services\AccessService;

class HealthController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
    ) {}

    public function check(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        // 1. Background Tasks Metrics
        $tasksCounts = [
            'total' => 0,
            'pending' => 0,
            'processing' => 0,
            'completed' => 0,
            'failed' => 0,
        ];
        $recentFailedTasks = [];

        if (Schema::hasTable('mentoria2_background_tasks')) {
            $rows = DB::table('mentoria2_background_tasks')
                ->where('tenant_id', $tenantId)
                ->select('status', DB::raw('COUNT(*) as count'))
                ->groupBy('status')
                ->pluck('count', 'status')
                ->all();

            $tasksCounts['total'] = array_sum($rows);
            $tasksCounts['pending'] = (int) ($rows['pending'] ?? 0);
            $tasksCounts['processing'] = (int) ($rows['processing'] ?? 0);
            $tasksCounts['completed'] = (int) ($rows['completed'] ?? 0);
            $tasksCounts['failed'] = (int) ($rows['failed'] ?? 0);

            if ($tasksCounts['failed'] > 0) {
                $recentFailedTasks = DB::table('mentoria2_background_tasks')
                    ->where('tenant_id', $tenantId)
                    ->where('status', 'failed')
                    ->latest('finished_at')
                    ->limit(5)
                    ->get(['id', 'type', 'error', 'finished_at'])
                    ->all();
            }
        }

        // 2. Radar Sync Metrics
        $lastSync = null;
        $activeSourcesCount = 0;
        $pendingReviewCount = 0;

        if (Schema::hasTable('mentoria2_radar_sync_runs')) {
            $lastSync = DB::table('mentoria2_radar_sync_runs')->latest('created_at')->first();
        }
        if (Schema::hasTable('mentoria2_radar_sources')) {
            $activeSourcesCount = DB::table('mentoria2_radar_sources')->where('is_active', true)->count();
        }
        if (Schema::hasTable('mentoria2_radar_contests')) {
            $pendingReviewCount = DB::table('mentoria2_radar_contests')
                ->where('is_active', true)
                ->where('status', 'draft')
                ->count();
        }

        // 3. AI Usage Metrics (Last 24h)
        $aiCalls24h = 0;
        $aiTokens24h = 0;
        if (Schema::hasTable('mentoria2_ai_usage_logs')) {
            $yesterday = now()->subDay()->toDateTimeString();
            $aiStats = DB::table('mentoria2_ai_usage_logs')
                ->where('tenant_id', $tenantId)
                ->where('created_at', '>=', $yesterday)
                ->selectRaw('COUNT(*) as total_calls, COALESCE(SUM(total_tokens), 0) as total_tokens')
                ->first();

            $aiCalls24h = (int) ($aiStats?->total_calls ?? 0);
            $aiTokens24h = (int) ($aiStats?->total_tokens ?? 0);
        }

        // 4. Recent Audit Events
        $recentAudit = [];
        if (Schema::hasTable('mentoria2_audit_events')) {
            $recentAudit = DB::table('mentoria2_audit_events as a')
                ->leftJoin('users as u', 'u.id', '=', 'a.actor_id')
                ->where('a.tenant_id', $tenantId)
                ->select('a.id', 'a.action', 'a.entity', 'a.entity_id', 'a.created_at', 'u.name as actor_name')
                ->latest('a.created_at')
                ->limit(10)
                ->get()
                ->all();
        }

        $isHealthy = $tasksCounts['failed'] === 0 && ($lastSync?->status !== 'failed');

        return response()->json([
            'status' => $isHealthy ? 'healthy' : 'degraded',
            'tenant_id' => $tenantId,
            'timestamp' => now()->toIso8601String(),
            'background_tasks' => [
                'counts' => $tasksCounts,
                'recent_failed' => $recentFailedTasks,
            ],
            'radar' => [
                'last_sync' => $lastSync,
                'active_sources' => $activeSourcesCount,
                'pending_review' => $pendingReviewCount,
            ],
            'ai_usage_24h' => [
                'total_calls' => $aiCalls24h,
                'total_tokens' => $aiTokens24h,
            ],
            'audit' => [
                'recent_events' => $recentAudit,
            ],
        ]);
    }
}
