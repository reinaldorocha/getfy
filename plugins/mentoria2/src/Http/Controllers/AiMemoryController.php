<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AiMemoryService;

class AiMemoryController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AiMemoryService $aiMemory,
    ) {}

    public function profile(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $profile = $this->aiMemory->getProfile($tenant, $request->user()->id);

        return response()->json($profile);
    }

    public function mentorProfile(Request $request, int $student): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $user = $this->access->assertStudentInTenant($request->user(), $student);
        $profile = $this->aiMemory->getProfile($tenantId, $user->id);

        return response()->json($profile);
    }

    public function setGuidance(Request $request, int $student): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $this->access->assertStudentInTenant($request->user(), $student);

        $validated = $request->validate([
            'guidance' => 'required|string|max:2000',
        ]);

        $success = $this->aiMemory->setMentorGuidance($tenantId, $student, $validated['guidance']);

        return response()->json([
            'success' => $success,
            'message' => 'Diretrizes pedagógicas salvas com sucesso para a IA.',
        ]);
    }

    public function markWeakness(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
        ]);

        $res = $this->aiMemory->markWeaknessMastered($tenant, $request->user()->id, $validated['subject']);

        return response()->json($res);
    }
}

