<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\QuestionReportService;

class QuestionReportController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly QuestionReportService $reportService,
    ) {}

    public function report(Request $request, int $tenant, string $question): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        $validated = $request->validate([
            'reason' => 'required|string|max:64',
            'details' => 'required|string|min:5|max:2000',
        ]);

        $res = $this->reportService->fileReport(
            $tenant,
            $request->user(),
            $question,
            $validated['reason'],
            $validated['details']
        );

        return response()->json($res, 201);
    }

    public function mentorIndex(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $status = $request->query('status');
        $reports = $this->reportService->listPendingReports($tenantId, $status);

        return response()->json([
            'reports' => $reports,
        ]);
    }

    public function mentorResolve(Request $request, string $report): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        $validated = $request->validate([
            'status' => 'required|string|in:deferido,indeferido,em_analise',
            'mentor_resolution' => 'required|string|min:5',
            'updated_question' => 'nullable|array',
        ]);

        $res = $this->reportService->resolveReport(
            $tenantId,
            $request->user(),
            $report,
            $validated['status'],
            $validated['mentor_resolution'],
            $validated['updated_question'] ?? null
        );

        return response()->json($res);
    }
}

