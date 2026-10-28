<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\ContestRadarService;

class ContestRadarController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly ContestRadarService $radarService,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $sphere = $request->query('sphere');
        $status = $request->query('status');
        $search = $request->query('search');

        $contests = $this->radarService->listContests($sphere, $status, $search);

        return response()->json([
            'contests' => $contests,
        ]);
    }

    public function studentIndex(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        $sphere = $request->query('sphere');
        $status = $request->query('status');
        $search = $request->query('search');

        $contests = $this->radarService->listContests($sphere, $status, $search);

        return response()->json([
            'contests' => $contests,
        ]);
    }
}

