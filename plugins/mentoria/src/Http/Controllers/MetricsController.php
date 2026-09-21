<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\MetricsService;

class MetricsController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
    ) {}

    public function studentSummary(Request $request, int $student): JsonResponse
    {
        [$tenant, $studentId] = $this->adminContext($request, $student);
        $contest = $request->query('contest_id');

        return response()->json($this->metrics->summary(
            $tenant,
            $studentId,
            $contest ? (string) $contest : null,
            $request->query('start'),
            $request->query('end'),
        ));
    }

    public function studentTimeline(Request $request, int $student): JsonResponse
    {
        [$tenant, $studentId] = $this->adminContext($request, $student);
        $contest = $request->query('contest_id');

        return response()->json([
            'days' => $this->metrics->timeline(
                $tenant,
                $studentId,
                $contest ? (string) $contest : null,
                $request->query('start'),
                $request->query('end'),
            ),
        ]);
    }

    public function studentSubjects(Request $request, int $student): JsonResponse
    {
        [$tenant, $studentId] = $this->adminContext($request, $student);
        $contest = (string) $request->query('contest_id', '');

        if ($contest === '') {
            return response()->json(['message' => 'contest_id é obrigatório.'], 422);
        }

        return response()->json([
            'subjects' => $this->metrics->subjects(
                $tenant,
                $studentId,
                $contest,
                $request->query('start'),
                $request->query('end'),
            ),
        ]);
    }

    public function summary(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'metricas');
        $contest = $request->query('contest_id');

        return response()->json($this->metrics->summary(
            $tenant,
            (int) $student->id,
            $contest ? (string) $contest : null,
            $request->query('start'),
            $request->query('end'),
        ));
    }

    public function timeline(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'metricas');
        $contest = $request->query('contest_id');

        return response()->json([
            'days' => $this->metrics->timeline(
                $tenant,
                (int) $student->id,
                $contest ? (string) $contest : null,
                $request->query('start'),
                $request->query('end'),
            ),
        ]);
    }

    public function subjects(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'metricas');
        $contest = (string) $request->query('contest_id', '');

        if ($contest === '') {
            return response()->json(['message' => 'contest_id é obrigatório.'], 422);
        }

        return response()->json([
            'subjects' => $this->metrics->subjects(
                $tenant,
                (int) $student->id,
                $contest,
                $request->query('start'),
                $request->query('end'),
            ),
        ]);
    }

    private function adminContext(Request $request, int $student): array
    {
        $actor = $request->user();
        $tenant = $this->access->tenantId($actor);
        $target = $this->access->assertStudentInTenant($actor, $student);

        return [$tenant, (int) $target->id];
    }
}
