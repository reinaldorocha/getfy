<?php

namespace Plugins\AutoZap\Http;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\AutoZap\Models\AutoZapCampaign;
use Plugins\AutoZap\Models\AutoZapCampaignSend;
use Plugins\AutoZap\Models\AutoZapImportedContact;
use Plugins\AutoZap\Services\AutoZapCampaignService;
use Plugins\AutoZap\Services\AutoZapContactService;

class AutoZapCampaignsController extends Controller
{
    public function __construct(
        protected AutoZapContactService $contactService,
        protected AutoZapCampaignService $campaignService
    ) {}

    /**
     * Listar contatos unificados de Compradores e Importados.
     */
    public function contacts(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;

        $filters = [
            'search' => $request->query('search', ''),
            'origin' => $request->query('origin', 'all'),
            'product_ids' => $request->query('product_ids', []),
        ];

        $result = $this->contactService->getUnifiedContacts($tenantId, $filters);

        // Contadores gerais
        $allCount = $this->contactService->getUnifiedContacts($tenantId, ['origin' => 'all'])['total'];
        $buyersCount = $this->contactService->getUnifiedContacts($tenantId, ['origin' => 'buyers'])['total'];
        $importedCount = $this->contactService->getUnifiedContacts($tenantId, ['origin' => 'imported'])['total'];

        return response()->json([
            'success' => true,
            'total' => $result['total'],
            'data' => $result['data'],
            'counts' => [
                'all' => $allCount,
                'buyers' => $buyersCount,
                'imported' => $importedCount,
            ],
        ]);
    }

    /**
     * Importar contatos externos via CSV.
     */
    public function importContacts(Request $request): JsonResponse
    {
        $request->validate([
            'file' => 'required|file|max:10240', // max 10MB
        ]);

        $tenantId = $request->user()?->tenant_id;
        $file = $request->file('file');

        try {
            $result = $this->contactService->importContactsFromFile($tenantId, $file->getRealPath());

            return response()->json([
                'success' => true,
                'message' => "Importação concluída: {$result['imported']} contatos importados/atualizados, {$result['skipped']} ignorados.",
                'result' => $result,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao processar arquivo: ' . $e->getMessage(),
            ], 422);
        }
    }

    /**
     * Deletar contato importado.
     */
    public function deleteImportedContact(Request $request, int $id): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $query = AutoZapImportedContact::query()->where('id', $id);
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $contact = $query->first();
        if (!$contact) {
            return response()->json(['success' => false, 'message' => 'Contato não encontrado.'], 404);
        }

        $contact->delete();

        return response()->json(['success' => true, 'message' => 'Contato excluído com sucesso.']);
    }

    /**
     * Listar histórico de campanhas.
     */
    public function index(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;

        $query = AutoZapCampaign::query()->with('connection');
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $campaigns = $query->orderBy('created_at', 'desc')->paginate(20);

        return response()->json([
            'success' => true,
            'campaigns' => $campaigns,
        ]);
    }

    /**
     * Criar e iniciar disparo de nova campanha.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
            'autozap_connection_id' => 'required|integer',
            'product_ids' => 'nullable|array',
            'selected_contact_keys' => 'nullable|array',
            'audience_filter' => 'nullable|array',
            'throttle_seconds' => 'nullable|integer|min:1|max:60',
        ]);

        $tenantId = $request->user()?->tenant_id;

        try {
            $campaign = $this->campaignService->createAndDispatchCampaign($tenantId, $validated);

            return response()->json([
                'success' => true,
                'message' => 'Campanha criada e disparos iniciados com sucesso!',
                'campaign' => $campaign->load('connection'),
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 422);
        }
    }

    /**
     * Detalhes e logs individuais da campanha.
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;

        $query = AutoZapCampaign::query()->with('connection')->where('id', $id);
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $campaign = $query->firstOrFail();

        $sendsQuery = AutoZapCampaignSend::query()->where('autozap_campaign_id', $campaign->id);
        if ($status = $request->query('status')) {
            $sendsQuery->where('status', $status);
        }
        if ($search = $request->query('search')) {
            $sendsQuery->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $sends = $sendsQuery->orderBy('id', 'asc')->paginate(50);

        return response()->json([
            'success' => true,
            'campaign' => $campaign,
            'sends' => $sends,
        ]);
    }

    /**
     * Cancelar disparos pendentes da campanha.
     */
    public function cancel(Request $request, int $id): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;

        $query = AutoZapCampaign::query()->where('id', $id);
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $campaign = $query->firstOrFail();
        $this->campaignService->cancelCampaign($campaign);

        return response()->json([
            'success' => true,
            'message' => 'Campanha cancelada com sucesso.',
            'campaign' => $campaign->fresh(),
        ]);
    }
}
