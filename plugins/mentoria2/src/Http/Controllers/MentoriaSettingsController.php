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

    public function platformLogo(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json(['platform_logo' => $this->banners->logoForTenant($tenantId)]);
    }

    public function storePlatformLogo(Request $request): JsonResponse
    {
        $data = $request->validate([
            'logo' => ['required', 'file', 'image', 'mimes:jpg,jpeg,png,webp,svg', 'max:5120'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $logo = $this->banners->replaceLogo($tenantId, $data['logo']);

        $this->audit->record($tenantId, $actor, 'platform_logo.updated', 'tenant_setting', (string) $tenantId, null, [
            'file_name' => $logo['name'],
        ]);

        return response()->json(['ok' => true, 'platform_logo' => $logo]);
    }

    public function destroyPlatformLogo(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $this->banners->removeLogo($tenantId);
        $this->audit->record($tenantId, $actor, 'platform_logo.removed', 'tenant_setting', (string) $tenantId);

        return response()->json(['ok' => true]);
    }

    public function platformBranding(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json(['platform_branding' => $this->banners->brandingForTenant($tenantId)]);
    }

    public function updatePlatformBranding(Request $request): JsonResponse
    {
        $data = $request->validate([
            'branding' => ['required', 'array'],
            'branding.brand_name' => ['nullable', 'string', 'max:60'],
            'branding.student_area_label' => ['nullable', 'string', 'max:60'],
            'branding.mentor_panel_label' => ['nullable', 'string', 'max:60'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $branding = $this->banners->replaceBranding($tenantId, $data['branding']);

        $this->audit->record($tenantId, $actor, 'platform_branding.updated', 'tenant_setting', (string) $tenantId, null, $branding);

        return response()->json(['ok' => true, 'platform_branding' => $branding]);
    }

    public function platformColors(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json(['platform_colors' => $this->banners->platformColorsForTenant($tenantId)]);
    }

    public function updatePlatformColors(Request $request): JsonResponse
    {
        $data = $request->validate([
            'colors' => ['required', 'array'],
            'colors.primary' => ['nullable', 'regex:/^#[0-9a-fA-F]{6}$/'],
            'colors.secondary' => ['nullable', 'regex:/^#[0-9a-fA-F]{6}$/'],
            'colors.sidebar' => ['nullable', 'regex:/^#[0-9a-fA-F]{6}$/'],
            'colors.theme_preset' => ['nullable', 'string', 'max:50'],
            'colors.dark' => ['nullable', 'array'],
            'colors.light' => ['nullable', 'array'],
            'colors.*' => ['nullable'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $colors = $this->banners->replacePlatformColors($tenantId, $data['colors']);

        $this->audit->record($tenantId, $actor, 'platform_colors.updated', 'tenant_setting', (string) $tenantId, null, $colors);

        return response()->json(['ok' => true, 'platform_colors' => $colors]);
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

    public function promotionalBanners(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json(['promotional_banners' => $this->banners->promotionalBannersForTenant($tenantId)]);
    }

    public function updatePromotionalBanners(Request $request): JsonResponse
    {
        $data = $request->validate([
            'banners' => ['present', 'array'],
            'banners.*.title' => ['required', 'string', 'max:255'],
            'banners.*.image_url' => ['nullable', 'string', 'max:1000'],
            'banners.*.link_url' => ['nullable', 'string', 'max:1000'],
            'banners.*.link_text' => ['nullable', 'string', 'max:100'],
            'banners.*.target' => ['nullable', 'in:all,contest'],
            'banners.*.contest_id' => ['nullable', 'uuid'],
            'banners.*.is_active' => ['nullable', 'boolean'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $banners = $this->banners->replacePromotionalBanners($tenantId, $data['banners']);

        $this->audit->record($tenantId, $actor, 'promotional_banners.updated', 'tenant_setting', (string) $tenantId, null, [
            'count' => count($banners),
        ]);

        return response()->json(['ok' => true, 'promotional_banners' => $banners]);
    }

    public function uploadPromotionalBannerImage(Request $request): JsonResponse
    {
        $data = $request->validate([
            'image' => ['required', 'file', 'image', 'mimes:jpg,jpeg,png,webp,gif', 'max:5120'],
        ]);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $uploaded = $this->banners->uploadPromotionalBannerImage($tenantId, $data['image']);

        return response()->json(['ok' => true, 'image' => $uploaded]);
    }

}
