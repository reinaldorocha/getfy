<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\Radar\RadarCatalogService;
use Plugins\Mentoria2\Services\Radar\RadarIngestionService;

class ContestRadarController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly RadarCatalogService $catalog,
        private readonly RadarIngestionService $ingestion,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        return response()->json($this->catalog->published($tenantId, $request->only(['sphere', 'state', 'status', 'career_track', 'career_family', 'search', 'page', 'limit'])));
    }

    public function studentIndex(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        return response()->json($this->catalog->published($tenant, $request->only(['sphere', 'state', 'status', 'career_track', 'career_family', 'search', 'page', 'limit']), (int) $request->user()->id));
    }

    public function studentShow(Request $request, int $tenant, string $contest): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $item = $this->catalog->findPublished($tenant, $contest);
        abort_if($item === null, 404);
        return response()->json(['contest' => $item]);
    }

    public function follow(Request $request, int $tenant, string $contest): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $data = $request->validate(['notifications_enabled' => ['sometimes', 'boolean']]);
        $this->catalog->follow($tenant, (int) $request->user()->id, $contest, (bool) ($data['notifications_enabled'] ?? true));
        return response()->json(['following' => true]);
    }

    public function unfollow(Request $request, int $tenant, string $contest): JsonResponse
    {
        $student = $this->access->assertStudentAccess($request->user(), $tenant);
        $this->catalog->unfollow($tenant, (int) $student->id, $contest);
        return response()->json(['following' => false]);
    }

    public function sources(Request $request): JsonResponse
    {
        return response()->json(['sources' => $this->catalog->sources($this->access->tenantId($request->user()))]);
    }

    public function storeSource(Request $request): JsonResponse
    {
        $data = $request->validate([
            'label' => ['required', 'string', 'max:160'], 'code' => ['nullable', 'string', 'max:80'],
            'kind' => ['required', 'string', 'max:40'], 'origin_url' => ['nullable', 'url', 'max:2000'], 'api_base_url' => ['nullable', 'url', 'max:2000'],
            'territories' => ['nullable', 'array'], 'territories.*' => ['string', 'max:20'], 'career_tracks' => ['nullable', 'array'], 'career_tracks.*' => ['string', 'max:60'],
            'settings' => ['nullable', 'array'], 'is_active' => ['sometimes', 'boolean'],
        ]);
        $source = $this->catalog->createSource($this->access->tenantId($request->user()), $data);
        return response()->json(['source' => $source], 201);
    }

    public function reviewQueue(Request $request): JsonResponse
    {
        return response()->json(['items' => $this->catalog->reviewQueue($this->access->tenantId($request->user()))]);
    }

    public function review(Request $request, string $contest): JsonResponse
    {
        $data = $request->validate(['decision' => ['required', 'string', 'in:published,review_required,rejected,archived'], 'note' => ['nullable', 'string', 'max:5000']]);
        $tenant = $this->access->tenantId($request->user());
        $item = $this->catalog->decide($tenant, (int) $request->user()->id, $contest, $data['decision'], $data['note'] ?? null);
        return response()->json(['contest' => $item]);
    }

    public function sync(Request $request): JsonResponse
    {
        $data = $request->validate(['source_id' => ['nullable', 'uuid'], 'dry_run' => ['sometimes', 'boolean']]);
        return response()->json(['result' => $this->ingestion->sync($data['source_id'] ?? null, (bool) ($data['dry_run'] ?? false))]);
    }
}

