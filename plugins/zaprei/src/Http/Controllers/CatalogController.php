<?php

namespace Plugins\Zaprei\Http\Controllers;

use App\Models\Product;
use App\PluginSdk\Getfy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Services\GatewayFactory;

/**
 * Dados auxiliares usados pelos seletores do painel.
 */
final class CatalogController extends Controller
{
    private const PRODUCTS_LIMIT = 100;

    public function __construct(private readonly GatewayFactory $gateways) {}

    public function products(Request $request): JsonResponse
    {
        $items = Getfy::products()->listForTenant($this->tenantId($request), [
            'limit' => self::PRODUCTS_LIMIT,
        ])['items'];

        return response()->json([
            'products' => array_map(
                static fn (Product $product): array => ['id' => $product->id, 'name' => $product->name],
                $items
            ),
        ]);
    }

    /** Grupos de WhatsApp visíveis para a instância conectada (GET /group/list na Evolution GO). */
    public function groups(Request $request): JsonResponse
    {
        try {
            $groups = $this->gateways->forTenant($this->tenantId($request))->listGroups();
        } catch (ZapreiException) {
            // Sem conexão ativa: o seletor aceita o JID digitado manualmente.
            return response()->json(['groups' => []]);
        }

        return response()->json(['groups' => $groups]);
    }
}
