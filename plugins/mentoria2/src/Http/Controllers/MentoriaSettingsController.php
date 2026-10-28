<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Plugins\Mentoria2\Services\StudentHomeBannerService;

class MentoriaSettingsController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly StudentHomeBannerService $banners,
    ) {}

    public function studentHomeBanner(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json(['student_home_banner' => $this->banners->forTenant($tenantId)]);
    }

    public function storeStudentHomeBanner(Request $request): JsonResponse
    {
        $data = $request->validate([
            'banner' => ['required', 'file', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $banner = $this->banners->replace($tenantId, $data['banner']);

        $this->audit->record($tenantId, $actor, 'student_home_banner.updated', 'tenant_setting', (string) $tenantId, null, [
            'file_name' => $banner['name'],
        ]);

        return response()->json(['ok' => true, 'student_home_banner' => $banner]);
    }

    public function destroyStudentHomeBanner(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->banners->remove($tenantId);
        $this->audit->record($tenantId, $actor, 'student_home_banner.removed', 'tenant_setting', (string) $tenantId);

        return response()->json(['ok' => true]);
    }
}
