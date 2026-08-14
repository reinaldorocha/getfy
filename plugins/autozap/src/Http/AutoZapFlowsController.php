<?php

namespace Plugins\AutoZap\Http;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\AutoZap\Models\AutoZapFlow;
use Plugins\AutoZap\Models\AutoZapFlowRun;

require_once __DIR__ . '/../Models/AutoZapFlow.php';
require_once __DIR__ . '/../Models/AutoZapFlowRun.php';

class AutoZapFlowsController
{
    public function index(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $productId = $request->query('product_id');
        $triggerEvent = $request->query('trigger_event');

        $q = AutoZapFlow::query()->where('tenant_id', $tenantId)->orderBy('id', 'desc');
        if (is_string($productId) && $productId !== '') {
            $q->where(function ($sub) use ($productId) {
                $sub->where('product_id', $productId)
                    ->orWhere('all_products', true)
                    ->orWhereJsonContains('product_ids', (string) $productId)
                    ->orWhereJsonContains('product_ids', (int) $productId);
            });
        }
        if (is_string($triggerEvent) && $triggerEvent !== '') {
            $q->where('trigger_event', $triggerEvent);
        }

        $flows = $q->get()->map(fn (AutoZapFlow $f) => [
            'id' => $f->id,
            'name' => $f->name,
            'product_id' => $f->product_id,
            'all_products' => (bool) ($f->all_products ?? ($f->product_id === null && empty($f->product_ids))),
            'product_ids' => is_array($f->product_ids) ? array_map('strval', $f->product_ids) : ($f->product_id ? [(string) $f->product_id] : []),
            'trigger_event' => $f->trigger_event,
            'is_active' => (bool) $f->is_active,
            'graph_json' => $f->graph_json,
            'created_at' => $f->created_at?->toIso8601String(),
            'updated_at' => $f->updated_at?->toIso8601String(),
        ])->values()->all();

        return response()->json([
            'flows' => $flows,
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'product_id' => ['nullable', 'string', 'max:64'],
            'all_products' => ['nullable', 'boolean'],
            'product_ids' => ['nullable', 'array'],
            'product_ids.*' => ['string', 'max:64'],
            'trigger_event' => ['required', 'string', 'max:255'],
            'is_active' => ['nullable', 'boolean'],
            'graph_json' => ['required', 'array'],
        ]);

        $this->validateGraph($validated['graph_json']);

        $allProducts = isset($validated['all_products']) ? (bool) $validated['all_products'] : (empty($validated['product_ids']) && empty($validated['product_id']));
        $productIds = ! empty($validated['product_ids']) ? array_values(array_unique(array_map('strval', $validated['product_ids']))) : null;

        $flow = AutoZapFlow::create([
            'tenant_id' => $tenantId,
            'name' => $validated['name'],
            'product_id' => $validated['product_id'] ?? ($productIds ? $productIds[0] : null),
            'all_products' => $allProducts,
            'product_ids' => $productIds,
            'trigger_event' => $validated['trigger_event'],
            'is_active' => (bool) ($validated['is_active'] ?? true),
            'graph_json' => $validated['graph_json'],
        ]);

        return response()->json(['ok' => true, 'id' => $flow->id], 201);
    }

    public function update(Request $request, int $flow): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $flowModel = AutoZapFlow::findOrFail($flow);
        if ((int) $flowModel->tenant_id !== (int) $tenantId) {
            abort(403);
        }

        $validated = $request->validate([
            'name' => ['nullable', 'string', 'max:255'],
            'product_id' => ['nullable', 'string', 'max:64'],
            'all_products' => ['nullable', 'boolean'],
            'product_ids' => ['nullable', 'array'],
            'product_ids.*' => ['string', 'max:64'],
            'trigger_event' => ['nullable', 'string', 'max:255'],
            'is_active' => ['nullable', 'boolean'],
            'graph_json' => ['nullable', 'array'],
        ]);

        if (array_key_exists('graph_json', $validated) && is_array($validated['graph_json'])) {
            $this->validateGraph($validated['graph_json']);
        }

        $updates = [];
        if (array_key_exists('name', $validated)) $updates['name'] = $validated['name'];
        if (array_key_exists('is_active', $validated)) $updates['is_active'] = (bool) $validated['is_active'];
        if (array_key_exists('graph_json', $validated)) $updates['graph_json'] = $validated['graph_json'];
        if (array_key_exists('trigger_event', $validated)) $updates['trigger_event'] = $validated['trigger_event'];
        if (array_key_exists('all_products', $validated)) $updates['all_products'] = (bool) $validated['all_products'];
        if (array_key_exists('product_ids', $validated)) {
            $updates['product_ids'] = ! empty($validated['product_ids']) ? array_values(array_unique(array_map('strval', $validated['product_ids']))) : null;
        }

        $flowModel->update($updates);

        return response()->json(['ok' => true]);
    }

    public function duplicate(Request $request, int $flow): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $flowModel = AutoZapFlow::findOrFail($flow);
        if ((int) $flowModel->tenant_id !== (int) $tenantId) {
            abort(403);
        }

        $copy = $flowModel->replicate([
            'created_at',
            'updated_at',
        ]);
        $copy->name = $flowModel->name . ' (Cópia)';
        $copy->is_active = false;
        $copy->save();

        return response()->json(['ok' => true, 'id' => $copy->id], 201);
    }

    public function destroy(Request $request, int $flow): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $flowModel = AutoZapFlow::findOrFail($flow);
        if ((int) $flowModel->tenant_id !== (int) $tenantId) {
            abort(403);
        }
        $flowModel->delete();
        return response()->json(['ok' => true]);
    }

    public function products(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $products = Product::query()
            ->where(function ($q) use ($tenantId) {
                if ($tenantId !== null) {
                    $q->where('tenant_id', $tenantId);
                }
            })
            ->select(['id', 'name'])
            ->orderBy('name')
            ->get()
            ->map(fn ($p) => [
                'id' => (string) $p->id,
                'name' => $p->name,
            ]);

        return response()->json([
            'products' => $products,
        ]);
    }

    public function upload(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'max:51200'], // até 50MB
        ]);

        $file = $request->file('file');
        $path = $file->store('autozap', 'public');
        $url = url('/storage/' . $path);
        $mime = $file->getClientMimeType() ?: $file->getMimeType() ?: 'application/octet-stream';
        $originalName = $file->getClientOriginalName();

        return response()->json([
            'url' => $url,
            'path' => $path,
            'mime_type' => $mime,
            'file_name' => $originalName,
        ]);
    }

    public function runs(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $flowId = $request->query('flow_id');

        $q = AutoZapFlowRun::query()->where('tenant_id', $tenantId)->orderBy('id', 'desc');
        if ($flowId) {
            $q->where('flow_id', $flowId);
        }

        $runs = $q->limit(50)->get()->map(fn ($r) => [
            'id' => $r->id,
            'flow_id' => $r->flow_id,
            'event_class' => $r->event_class,
            'status' => $r->status,
            'last_error' => $r->last_error,
            'created_at' => $r->created_at?->toIso8601String(),
        ]);

        return response()->json([
            'runs' => $runs,
        ]);
    }

    /**
     * @param  array<string, mixed>  $graph
     */
    private function validateGraph(array $graph): void
    {
        $nodes = $graph['nodes'] ?? null;
        $edges = $graph['edges'] ?? null;
        if (! is_array($nodes) || ! is_array($edges)) {
            abort(422, 'Grafo inválido: nodes/edges obrigatórios.');
        }
        if (count($nodes) > 200 || count($edges) > 400) {
            abort(422, 'Grafo muito grande.');
        }
        $hasTrigger = false;
        foreach ($nodes as $n) {
            if (! is_array($n)) abort(422, 'Node inválido.');
            $id = (string) ($n['id'] ?? '');
            $type = (string) ($n['type'] ?? '');
            if ($id === '' || $type === '') abort(422, 'Node inválido: id/type.');
            if ($type === 'trigger') $hasTrigger = true;
        }
        if (! $hasTrigger) {
            abort(422, 'Grafo inválido: precisa de um node trigger.');
        }
        foreach ($edges as $e) {
            if (! is_array($e)) abort(422, 'Edge inválida.');
            $from = (string) ($e['from'] ?? '');
            $to = (string) ($e['to'] ?? '');
            if ($from === '' || $to === '') abort(422, 'Edge inválida: from/to.');
        }
    }

    public function groups(Request $request): JsonResponse
    {
        $tenantId = $request->user()?->tenant_id;
        $conn = \Plugins\AutoZap\Models\AutoZapConnection::forTenant($tenantId)->where('is_active', true)->first();
        if (! $conn || ! $conn->provider) {
            return response()->json(['groups' => [], 'connected' => false, 'message' => 'WhatsApp não conectado.']);
        }

        $provider = match ($conn->provider) {
            'zapi' => new \Plugins\AutoZap\Providers\ZApiProvider($conn->credentialsForProvider('zapi')),
            'evolution' => new \Plugins\AutoZap\Providers\EvolutionApiProvider($conn->credentialsForProvider('evolution')),
            'menuia' => new \Plugins\AutoZap\Providers\MenuiaProvider($conn->credentialsForProvider('menuia')),
            default => null,
        };

        if (! $provider || ! method_exists($provider, 'fetchGroups')) {
            return response()->json(['groups' => [], 'connected' => true]);
        }

        try {
            $groups = $provider->fetchGroups();
            return response()->json(['groups' => $groups, 'connected' => true]);
        } catch (\Throwable $e) {
            return response()->json(['groups' => [], 'connected' => true, 'error' => $e->getMessage()]);
        }
    }
}
