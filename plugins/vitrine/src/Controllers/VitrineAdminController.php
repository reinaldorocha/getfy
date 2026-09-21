<?php

namespace Plugins\Vitrine\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Vitrine\Models\VitrineApproval;
use Plugins\Vitrine\Models\VitrineCategory;
use Plugins\Vitrine\Models\VitrineFaq;
use Plugins\Vitrine\Models\VitrineOrder;
use Plugins\Vitrine\Models\VitrineProduct;
use Plugins\Vitrine\Models\VitrineSetting;
use Plugins\Vitrine\Services\VitrineSyncService;

class VitrineAdminController extends Controller
{
    public function index(Request $request)
    {
        if ($request->header('X-Inertia')) {
            return \Inertia\Inertia::location(url('/vitrine/admin'));
        }

        $tenantId = 1;

        if (VitrineProduct::where('tenant_id', $tenantId)->count() === 0) {
            app(VitrineSyncService::class)->syncFromGetfy($tenantId);
        }

        $payload = $this->getAdminDataPayload($tenantId);

        return view('vitrine::admin', $payload);
    }

    public function data(Request $request): JsonResponse
    {
        $tenantId = 1;

        return response()->json($this->getAdminDataPayload($tenantId));
    }

    private function getAdminDataPayload(int $tenantId): array
    {
        $settings = VitrineSetting::forTenant($tenantId);
        $products = VitrineProduct::where('tenant_id', $tenantId)
            ->orderBy('order_position')
            ->orderByDesc('created_at')
            ->get();
        $categories = VitrineCategory::where('tenant_id', $tenantId)->pluck('name');
        $approvals = VitrineApproval::where('tenant_id', $tenantId)->orderBy('order_position')->get();
        $faqs = VitrineFaq::where('tenant_id', $tenantId)->orderBy('order_position')->get();
        $ordersCount = VitrineOrder::where('tenant_id', $tenantId)->count();

        $connectedSlugs = \App\Models\GatewayCredential::forTenant($tenantId)
            ->where('is_connected', true)
            ->pluck('gateway_slug')
            ->all();

        $gatewaysByMethod = [
            'pix' => [],
            'card' => [],
            'boleto' => [],
        ];

        try {
            foreach (\App\Gateways\GatewayRegistry::all() as $gateway) {
                $slug = $gateway['slug'] ?? '';
                if (! in_array($slug, $connectedSlugs, true)) {
                    continue;
                }
                $methods = $gateway['methods'] ?? [];
                $item = ['slug' => $slug, 'name' => $gateway['name'] ?? ucfirst($slug)];
                foreach (['pix', 'card', 'boleto'] as $m) {
                    if (in_array($m, $methods, true)) {
                        $gatewaysByMethod[$m][] = $item;
                    }
                }
            }
        } catch (\Throwable $e) {
            // fallback
        }

        return [
            'settings' => $settings,
            'products' => $products,
            'categories' => $categories,
            'approvals' => $approvals,
            'faqs' => $faqs,
            'gateways_by_method' => $gatewaysByMethod,
            'stats' => [
                'total_products' => $products->count(),
                'total_categories' => $categories->count(),
                'total_approvals' => $approvals->count(),
                'total_faqs' => $faqs->count(),
                'total_orders' => $ordersCount,
            ],
        ];
    }

    public function syncGetfyProducts(Request $request, VitrineSyncService $sync): JsonResponse
    {
        $tenantId = 1;
        $count = $sync->syncFromGetfy($tenantId);

        return response()->json([
            'success' => true,
            'message' => "{$count} produtos sincronizados do Getfy com sucesso!",
            'data' => $this->getAdminDataPayload($tenantId),
        ]);
    }

    public function storeProduct(Request $request): JsonResponse
    {
        $tenantId = 1;
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'promoPrice' => 'required|string',
            'category' => 'required|string',
            'imageUrl' => 'required|string',
            'description' => 'nullable|string',
            'longDescription' => 'nullable|string',
            'originalPrice' => 'nullable|string',
            'badge' => 'nullable|string',
            'imageOrientation' => 'nullable|string',
            'buttonText' => 'nullable|string',
            'buttonLink' => 'nullable|string',
            'iconName' => 'nullable|string',
            'priceLabel' => 'nullable|string',
        ]);

        $id = $request->input('id') ?: 'p' . time() . rand(100, 999);

        $product = VitrineProduct::create([
            'id' => $id,
            'tenant_id' => $tenantId,
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'longDescription' => $validated['longDescription'] ?? '',
            'originalPrice' => $validated['originalPrice'] ?? null,
            'promoPrice' => $validated['promoPrice'],
            'category' => $validated['category'],
            'badge' => $validated['badge'] ?? null,
            'imageUrl' => $validated['imageUrl'],
            'imageOrientation' => $validated['imageOrientation'] ?? 'square',
            'buttonText' => $validated['buttonText'] ?: 'QUERO COMEÇAR AGORA',
            'buttonLink' => $validated['buttonLink'] ?: url('/vitrine'),
            'iconName' => $validated['iconName'] ?: 'ShoppingCart',
            'priceLabel' => $validated['priceLabel'] ?: 'Investimento',
            'is_active' => true,
        ]);

        return response()->json(['success' => true, 'product' => $product]);
    }

    public function updateProduct(Request $request, $id): JsonResponse
    {
        $product = VitrineProduct::findOrFail($id);

        $product->update($request->only([
            'title', 'description', 'longDescription', 'originalPrice',
            'promoPrice', 'category', 'badge', 'imageUrl', 'imageOrientation',
            'buttonText', 'buttonLink', 'iconName', 'priceLabel', 'is_active',
        ]));

        return response()->json(['success' => true, 'product' => $product]);
    }

    public function destroyProduct(Request $request, $id): JsonResponse
    {
        $tenantId = 1;
        VitrineProduct::where('tenant_id', $tenantId)->where('id', $id)->delete();

        // Salvar na lista de produtos excluídos para não ser re-importado automaticamente no sync
        $settings = VitrineSetting::forTenant($tenantId);
        $excluded = is_array($settings->excluded_products) ? $settings->excluded_products : [];
        if (! in_array((string) $id, $excluded, true)) {
            $excluded[] = (string) $id;
            $settings->update(['excluded_products' => $excluded]);
        }

        return response()->json(['success' => true]);
    }

    public function toggleProductActive(Request $request, $id): JsonResponse
    {
        $tenantId = 1;
        $product = VitrineProduct::where('tenant_id', $tenantId)->where('id', $id)->firstOrFail();
        $product->is_active = (bool) $request->input('is_active');
        $product->save();

        return response()->json(['success' => true, 'is_active' => $product->is_active]);
    }

    public function restoreExcludedProducts(Request $request, VitrineSyncService $sync): JsonResponse
    {
        $tenantId = 1;
        $settings = VitrineSetting::forTenant($tenantId);
        $settings->update(['excluded_products' => []]);
        $count = $sync->syncFromGetfy($tenantId);

        return response()->json(['success' => true, 'message' => "Todos os produtos foram restaurados ($count cursos sincronizados)."]);
    }

    public function storeCategory(Request $request): JsonResponse
    {
        $tenantId = 1;
        $name = trim((string) $request->input('name'));

        if ($name !== '') {
            VitrineCategory::firstOrCreate([
                'tenant_id' => $tenantId,
                'name' => $name,
            ]);
        }

        return response()->json(['success' => true]);
    }

    public function destroyCategory(Request $request, $name): JsonResponse
    {
        $tenantId = 1;
        VitrineCategory::where('tenant_id', $tenantId)
            ->where('name', urldecode($name))
            ->delete();

        return response()->json(['success' => true]);
    }

    public function updateSettings(Request $request): JsonResponse
    {
        $tenantId = 1;
        $settings = VitrineSetting::forTenant($tenantId);

        $settings->update($request->except(['id', '_token']));

        return response()->json(['success' => true, 'settings' => $settings]);
    }

    public function storeApproval(Request $request): JsonResponse
    {
        $tenantId = 1;
        $imageUrl = trim((string) $request->input('imageUrl'));

        if ($imageUrl !== '') {
            $approval = VitrineApproval::create([
                'tenant_id' => $tenantId,
                'imageUrl' => $imageUrl,
            ]);

            return response()->json(['success' => true, 'approval' => $approval]);
        }

        return response()->json(['success' => false, 'error' => 'URL inválida'], 422);
    }

    public function destroyApproval(Request $request, $id): JsonResponse
    {
        VitrineApproval::where('id', $id)->delete();

        return response()->json(['success' => true]);
    }

    public function storeFaq(Request $request): JsonResponse
    {
        $tenantId = 1;
        $faq = VitrineFaq::create([
            'tenant_id' => $tenantId,
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
        ]);

        return response()->json(['success' => true, 'faq' => $faq]);
    }

    public function updateFaq(Request $request, $id): JsonResponse
    {
        $faq = VitrineFaq::findOrFail($id);
        $faq->update($request->only(['question', 'answer']));

        return response()->json(['success' => true, 'faq' => $faq]);
    }

    public function destroyFaq(Request $request, $id): JsonResponse
    {
        VitrineFaq::where('id', $id)->delete();

        return response()->json(['success' => true]);
    }

    public function resetToDefault(Request $request, VitrineSyncService $sync): JsonResponse
    {
        $tenantId = 1;
        VitrineSetting::where('tenant_id', $tenantId)->delete();
        VitrineSetting::forTenant($tenantId);
        $sync->ensureDefaultContent($tenantId);
        $sync->syncFromGetfy($tenantId);

        return response()->json([
            'success' => true,
            'message' => 'Configurações e catálogo restaurados para o padrão!',
            'data' => $this->getAdminDataPayload($tenantId),
        ]);
    }
}
