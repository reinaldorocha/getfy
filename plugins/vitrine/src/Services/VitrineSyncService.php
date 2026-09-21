<?php

namespace Plugins\Vitrine\Services;

use App\Models\Product;
use Plugins\Vitrine\Models\VitrineCategory;
use Plugins\Vitrine\Models\VitrineProduct;
use Plugins\Vitrine\Models\VitrineSetting;

class VitrineSyncService
{
    public function syncFromGetfy(int $tenantId = 1): int
    {
        // 1. Garantir configurações padrão
        $settings = VitrineSetting::forTenant($tenantId);
        $excluded = is_array($settings->excluded_products) ? $settings->excluded_products : [];

        // 2. Puxar produtos cadastrados no Getfy
        $getfyProducts = Product::where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->get();

        $syncedCount = 0;

        foreach ($getfyProducts as $gp) {
            // Se o usuário removeu explicitamente este produto da vitrine, não re-importa
            if (in_array((string) $gp->id, $excluded, true)) {
                continue;
            }

            $existing = VitrineProduct::where('id', $gp->id)->first()
                ?? VitrineProduct::where('getfy_product_id', $gp->id)->first();

            $priceNum = (float) ($gp->price ?? 0);
            $formattedPrice = 'R$ ' . number_format($priceNum, 2, ',', '.');
            $originalPrice = null;

            // Checar se há preço anterior no checkout_config
            $config = is_array($gp->checkout_config) ? $gp->checkout_config : [];
            $prev = $config['summary']['previous_price'] ?? null;
            if ($prev && (float) $prev > $priceNum) {
                $originalPrice = 'R$ ' . number_format((float) $prev, 2, ',', '.');
            }

            // Resolver categoria inteligente por palavras-chave
            $category = $this->inferCategory($gp->name);
            VitrineCategory::firstOrCreate([
                'tenant_id' => $tenantId,
                'name' => $category,
            ]);

            // Resolver imagem real do produto ou do checkout
            $imageUrl = $this->resolveImageUrl($gp);

            // Link do checkout oficial do Getfy
            $buttonLink = url('/c/' . ($gp->checkout_slug ?: $gp->slug));

            // Descrição real do produto (vazia por padrão se não configurada no Getfy)
            $productDescription = trim((string) ($gp->description ?? ''));
            if ($productDescription === '' && ! empty($gp->member_area_config['hero']['subtitle'])) {
                $productDescription = trim((string) $gp->member_area_config['hero']['subtitle']);
            }

            $data = [
                'id' => (string) $gp->id,
                'getfy_product_id' => (string) $gp->id,
                'tenant_id' => $tenantId,
                'title' => $gp->name,
                'description' => $productDescription,
                'longDescription' => $productDescription,
                'originalPrice' => $originalPrice,
                'promoPrice' => $formattedPrice,
                'category' => $category,
                'badge' => $this->inferBadge($gp->name),
                'imageUrl' => $imageUrl,
                'imageOrientation' => 'square',
                'buttonText' => 'QUERO COMEÇAR AGORA',
                'buttonLink' => $buttonLink,
                'iconName' => 'ShoppingCart',
                'priceLabel' => 'Investimento',
                'is_active' => (bool) $gp->is_active,
            ];

            if ($existing) {
                $existing->update([
                    'title' => $data['title'],
                    'description' => $data['description'],
                    'longDescription' => $data['longDescription'],
                    'promoPrice' => $data['promoPrice'],
                    'originalPrice' => $data['originalPrice'],
                    'buttonLink' => $data['buttonLink'],
                    'is_active' => $data['is_active'],
                    'imageUrl' => $data['imageUrl'],
                    'category' => $data['category'],
                    'badge' => $data['badge'],
                ]);
            } else {
                VitrineProduct::create($data);
            }

            $syncedCount++;
        }

        return $syncedCount;
    }

    private function inferCategory(string $title): string
    {
        $lower = mb_strtolower($title, 'UTF-8');

        if (str_contains($lower, 'simulado') || str_contains($lower, 'quest') || str_contains($lower, 'questões')) {
            return 'Simulados & Questões';
        }
        if (str_contains($lower, 'pmal') || str_contains($lower, 'pmma') || str_contains($lower, 'polic') || str_contains($lower, 'penal')) {
            return 'Carreiras Policiais';
        }
        if (str_contains($lower, 'mentoria') || str_contains($lower, 'acompanhamento')) {
            return 'Mentoria';
        }
        if (str_contains($lower, 'legisla') || str_contains($lower, 'direito')) {
            return 'Legislação & Direito';
        }

        return 'Cursos & Materiais';
    }

    private function inferBadge(string $title): ?string
    {
        $lower = mb_strtolower($title, 'UTF-8');

        if (str_contains($lower, 'combo') || str_contains($lower, 'completo')) {
            return 'MAIS VENDIDO';
        }
        if (str_contains($lower, 'simulado') || str_contains($lower, '250')) {
            return 'DESTAQUE';
        }

        return null;
    }

    private function resolveImageUrl(Product $gp): ?string
    {
        $raw = $gp->image;

        // 1. Imagem direta do produto
        if ($raw && trim($raw) !== '') {
            $raw = trim($raw);
            if (str_starts_with($raw, 'http://') || str_starts_with($raw, 'https://')) {
                return $raw;
            }

            $relativePath = ltrim($raw, '/');
            if (file_exists(public_path('storage/' . $relativePath))) {
                return url('/storage/' . $relativePath);
            }

            return 'https://app.profjonathanrocha.com.br/storage/' . $relativePath;
        }

        // 2. Banner do checkout
        $banners = $gp->checkout_config['appearance']['banners'] ?? [];
        if (is_array($banners) && count($banners) > 0 && ! empty($banners[0])) {
            $bannerUrl = trim($banners[0]);
            if (str_starts_with($bannerUrl, 'http://') || str_starts_with($bannerUrl, 'https://')) {
                return $bannerUrl;
            }
            return 'https://app.profjonathanrocha.com.br/' . ltrim($bannerUrl, '/');
        }

        // 3. Side banners do checkout
        $sideBanners = $gp->checkout_config['appearance']['side_banners'] ?? [];
        if (is_array($sideBanners) && count($sideBanners) > 0 && ! empty($sideBanners[0])) {
            $sideUrl = trim($sideBanners[0]);
            if (str_starts_with($sideUrl, 'http://') || str_starts_with($sideUrl, 'https://')) {
                return $sideUrl;
            }
            return 'https://app.profjonathanrocha.com.br/' . ltrim($sideUrl, '/');
        }

        return '';
    }

    public function ensureDefaultContent(int $tenantId = 1): void
    {
        // Deixar vazio por padrão a pedido do usuário
    }
}
