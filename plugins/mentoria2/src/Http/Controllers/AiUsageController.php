<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AiUsageService;

class AiUsageController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AiUsageService $aiUsage,
    ) {}

    public function stats(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $stats = $this->aiUsage->getStats($tenantId);

        return response()->json([
            'ok' => true,
            'stats' => $stats,
        ]);
    }

    public function logs(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $stats = $this->aiUsage->getStats($tenantId);

        return response()->json([
            'ok' => true,
            'logs' => $stats['recent_logs'],
            'students' => $stats['students_ranking'],
            'totals' => $stats['totals'],
        ]);
    }

    public function updateStudentLimit(Request $request, int $student): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $data = $request->validate([
            'ai_credit_limit' => ['nullable', 'integer', 'min:0', 'max:100000'],
        ]);

        $limit = array_key_exists('ai_credit_limit', $data) && $data['ai_credit_limit'] !== null
            ? (int) $data['ai_credit_limit']
            : null;

        $result = $this->aiUsage->setStudentLimit($tenantId, $student, $limit);

        return response()->json([
            'ok' => true,
            ...$result,
        ]);
    }
}

