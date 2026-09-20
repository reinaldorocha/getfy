<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Zaprei\Models\Campaign;
use Plugins\Zaprei\Models\CampaignSend;
use Plugins\Zaprei\Services\CampaignService;

/**
 * Campanhas de disparo em massa.
 */
final class CampaignController extends Controller
{
    public function __construct(private readonly CampaignService $campaigns) {}

    public function index(Request $request): JsonResponse
    {
        $campaigns = Campaign::forTenant($this->tenantId($request))
            ->orderByDesc('id')
            ->get();

        return response()->json(['campaigns' => $campaigns]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'message_data' => ['required', 'array'],
            'message_data.mode' => ['required', 'string'],
            'contact_ids' => ['required', 'array', 'min:1'],
            'contact_ids.*' => ['integer'],
            'throttle_seconds' => ['sometimes', 'integer', 'min:3', 'max:30'],
            'scheduled_at' => ['sometimes', 'nullable', 'date', 'after:now'],
        ]);

        $campaign = $this->campaigns->create($this->tenantId($request), $data);

        return response()->json(['campaign' => $campaign], 201);
    }

    public function show(Request $request, int $campaign): JsonResponse
    {
        $model = $this->find($request, $campaign);

        return response()->json([
            'campaign' => $model,
            'sends' => CampaignSend::forTenant((int) $model->tenant_id)
                ->where('campaign_id', $model->id)
                ->orderByDesc('id')
                ->get(),
        ]);
    }

    public function cancel(Request $request, int $campaign): JsonResponse
    {
        return response()->json([
            'campaign' => $this->campaigns->cancel($this->find($request, $campaign)),
        ]);
    }

    private function find(Request $request, int $campaignId): Campaign
    {
        return Campaign::forTenant($this->tenantId($request))->findOrFail($campaignId);
    }
}
