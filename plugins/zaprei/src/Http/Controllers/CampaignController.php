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
            'flow_id' => ['nullable', 'integer'],
            'message_data' => ['nullable', 'array'],
            'message_data.mode' => ['nullable', 'string'],
            'contact_ids' => ['required', 'array', 'min:1'],
            'contact_ids.*' => ['integer'],
            'throttle_seconds' => ['sometimes', 'integer', 'min:3', 'max:30'],
            'scheduled_at' => ['sometimes', 'nullable', 'date', 'after:now'],
        ]);

        if (empty($data['flow_id'])) {
            if (empty($data['message_data'])) {
                return response()->json([
                    'message' => 'Configuração de mensagem é obrigatória quando não houver fluxo selecionado.',
                ], 422);
            }

            $mode = $data['message_data']['mode'] ?? 'text';
            if ($mode === 'text' && trim((string) ($data['message_data']['text'] ?? '')) === '') {
                return response()->json([
                    'message' => 'O texto da mensagem não pode ficar em branco.',
                    'errors' => ['message_data.text' => ['O texto da mensagem é obrigatório.']],
                ], 422);
            }
        }

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
