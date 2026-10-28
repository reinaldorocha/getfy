<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\NotificationService;

class NotificationController extends Controller
{
    public function __construct(private readonly AccessService $access, private readonly NotificationService $notifications) {}

    public function index(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        return response()->json($this->notifications->inbox($tenant, (int) $student->id));
    }

    public function markRead(Request $request, int $tenant, string $notification): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $this->notifications->markRead($tenant, (int) $student->id, $notification);
        return response()->json(['ok' => true]);
    }

    public function markAllRead(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        return response()->json(['ok' => true, 'updated' => $this->notifications->markAllRead($tenant, (int) $student->id)]);
    }
}
