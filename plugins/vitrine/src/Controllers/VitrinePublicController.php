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
use Plugins\Vitrine\Services\VitrineCheckoutService;
use Plugins\Vitrine\Services\VitrineSyncService;

class VitrinePublicController extends Controller
{
    public function showcase(Request $request)
    {
        if ($request->header('X-Inertia')) {
            return \Inertia\Inertia::location(url('/vitrine/admin'));
        }

        $tenantId = 1;

        // Auto-sincronizar produtos do Getfy se a vitrine estiver vazia
        if (VitrineProduct::where('tenant_id', $tenantId)->count() === 0) {
            app(VitrineSyncService::class)->syncFromGetfy($tenantId);
        }

        $settings = VitrineSetting::forTenant($tenantId);

        $user = auth()->user();
        $isAdminOrProducer = $user && (
            (method_exists($user, 'isAdmin') && $user->isAdmin()) ||
            (method_exists($user, 'isInfoprodutor') && $user->isInfoprodutor()) ||
            ($user->role ?? null) === 'admin'
        );

        if ($settings->is_maintenance && ! $isAdminOrProducer) {
            return response()->view('vitrine::maintenance', compact('settings'), 503);
        }

        $isMaintenancePreview = (bool) ($settings->is_maintenance && $isAdminOrProducer);

        $products = VitrineProduct::where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->orderBy('order_position')
            ->orderByDesc('created_at')
            ->get();
        $categories = VitrineCategory::where('tenant_id', $tenantId)->pluck('name');
        $approvals = VitrineApproval::where('tenant_id', $tenantId)->orderBy('order_position')->get();
        $faqs = VitrineFaq::where('tenant_id', $tenantId)->orderBy('order_position')->get();

        $pagarmeRaw = \App\Models\Setting::get('pagarme_installments', null, $tenantId);
        if (is_string($pagarmeRaw)) {
            $pagarmeRaw = json_decode($pagarmeRaw, true);
        }
        $pagarmeInstallments = is_array($pagarmeRaw) ? $pagarmeRaw : [];

        return view('vitrine::showcase', compact(
            'settings',
            'products',
            'categories',
            'approvals',
            'faqs',
            'isMaintenancePreview',
            'pagarmeInstallments'
        ));
    }

    public function products(Request $request): JsonResponse
    {
        $tenantId = 1;
        $products = VitrineProduct::where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->orderBy('order_position')
            ->orderByDesc('created_at')
            ->get();

        return response()->json($products);
    }

    public function categories(Request $request): JsonResponse
    {
        $tenantId = 1;
        $categories = VitrineCategory::where('tenant_id', $tenantId)->pluck('name');

        return response()->json($categories);
    }

    public function settings(Request $request): JsonResponse
    {
        $tenantId = 1;
        $settings = VitrineSetting::forTenant($tenantId);

        return response()->json($settings);
    }

    public function approvals(Request $request): JsonResponse
    {
        $tenantId = 1;
        $approvals = VitrineApproval::where('tenant_id', $tenantId)->orderBy('order_position')->get();

        return response()->json($approvals);
    }

    public function faqs(Request $request): JsonResponse
    {
        $tenantId = 1;
        $faqs = VitrineFaq::where('tenant_id', $tenantId)->orderBy('order_position')->get();

        return response()->json($faqs);
    }

    public function checkout(Request $request, VitrineCheckoutService $service): JsonResponse
    {
        $tenantId = 1;
        $settings = VitrineSetting::forTenant($tenantId);
        if ($settings->is_maintenance) {
            return response()->json([
                'success' => false,
                'error' => 'A vitrine está temporariamente em manutenção. Novos pedidos estão suspensos no momento.'
            ], 503);
        }

        $result = $service->processCheckout($request->all(), $tenantId);

        if (! ($result['success'] ?? false)) {
            return response()->json($result, 422);
        }

        return response()->json($result);
    }

    public function checkOrderStatus(Request $request, $id): JsonResponse
    {
        $order = VitrineOrder::find($id);
        if (! $order) {
            return response()->json(['error' => 'Pedido não encontrado'], 404);
        }

        return response()->json([
            'id' => $order->id,
            'status' => $order->status,
            'total_amount' => $order->total_amount,
        ]);
    }
}
