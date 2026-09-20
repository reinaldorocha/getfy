<?php

namespace Plugins\Cjc\Services;

use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AccessService
{
    public function tenantId(User $actor): int
    {
        $tenantId = (int) ($actor->tenant_id ?: $actor->id);
        if ($tenantId <= 0) {
            throw new AccessDeniedHttpException('Tenant inválido para o CJC.');
        }

        return $tenantId;
    }

    public function productsForTenant(int $tenantId): Collection
    {
        $this->syncVirtualCjcProducts($tenantId);
        $configured = DB::table('cjc_products')
            ->where('tenant_id', $tenantId)
            ->get()
            ->keyBy('product_id');

        return Product::query()
            ->where('tenant_id', $tenantId)
            ->orderBy('name')
            ->get(['id', 'name', 'slug', 'type', 'billing_type', 'is_active'])
            ->map(function (Product $product) use ($configured) {
                $cfg = $configured->get((string) $product->id);

                return [
                    'id' => (string) $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'type' => $product->type,
                    'billing_type' => $product->billing_type,
                    'is_active' => (bool) $product->is_active,
                    'cjc_enabled' => (bool) ($cfg?->is_active ?? false),
                    'capabilities' => $this->decodeJson($cfg?->capabilities ?? null),
                    'settings' => $this->decodeJson($cfg?->settings ?? null),
                ];
            });
    }

    public function enableProduct(User $actor, Product $product, array $capabilities = [], array $settings = []): void
    {
        $tenantId = $this->tenantId($actor);
        if ((int) $product->tenant_id !== $tenantId) {
            throw new NotFoundHttpException('Produto não encontrado neste tenant.');
        }

        DB::table('cjc_products')->updateOrInsert(
            ['product_id' => (string) $product->id],
            [
                'tenant_id' => $tenantId,
                'is_active' => true,
                'capabilities' => json_encode(array_values(array_unique($capabilities)), JSON_UNESCAPED_UNICODE),
                'settings' => json_encode($settings, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
    }

    public function disableProduct(User $actor, Product $product): void
    {
        $tenantId = $this->tenantId($actor);
        if ((int) $product->tenant_id !== $tenantId) {
            throw new NotFoundHttpException('Produto não encontrado neste tenant.');
        }

        DB::table('cjc_products')
            ->where('tenant_id', $tenantId)
            ->where('product_id', (string) $product->id)
            ->update(['is_active' => false, 'updated_at' => now()]);
    }

    public function studentsForTenant(int $tenantId): Collection
    {
        return DB::table('users')
            ->join('product_user', 'product_user.user_id', '=', 'users.id')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->where('users.role', User::ROLE_ALUNO)
            ->select('users.id', 'users.name', 'users.email')
            ->distinct()
            ->orderBy('users.name')
            ->get();
    }

    public function assertStudentInTenant(User $actor, int $studentId): User
    {
        $tenantId = $this->tenantId($actor);
        $student = User::query()->whereKey($studentId)->where('role', User::ROLE_ALUNO)->first();
        if (! $student || ! $this->studentHasTenantAccess($student, $tenantId)) {
            throw new NotFoundHttpException('Aluno não encontrado no acesso CJC deste tenant.');
        }

        return $student;
    }

    public function assertStudentAccess(User $student, int $tenantId): void
    {
        if (! $student->isAluno() || ! $this->studentHasTenantAccess($student, $tenantId)) {
            throw new AccessDeniedHttpException('Você não possui acesso ativo ao CJC deste produtor.');
        }
    }

    public function studentHasTenantAccess(User $student, int $tenantId): bool
    {
        return DB::table('product_user')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->exists();
    }

    public function studentCapabilities(User $student, int $tenantId): array
    {
        $rows = DB::table('product_user')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->pluck('cjc_products.capabilities');

        $caps = [];
        foreach ($rows as $row) {
            foreach ($this->decodeJson($row) as $capability) {
                if (is_string($capability) && $capability !== '') {
                    $caps[$capability] = true;
                }
            }
        }

        return array_keys($caps);
    }

    public function ownedTenantIds(User $student): array
    {
        return DB::table('product_user')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('cjc_products.is_active', true)
            ->distinct()
            ->pluck('cjc_products.tenant_id')
            ->map(fn ($id) => (int) $id)
            ->values()
            ->all();
    }

    private function syncVirtualCjcProducts(int $tenantId): void
    {
        Product::query()->where('tenant_id', $tenantId)->get(['id', 'type', 'checkout_config'])->each(function (Product $product) use ($tenantId) {
            $config = is_array($product->checkout_config) ? $product->checkout_config : [];
            $marker = $config['_plugin_product'] ?? null;
            if (! is_array($marker) || ($marker['slug'] ?? null) !== 'cjc') {
                return;
            }
            $existing = DB::table('cjc_products')->where('product_id', (string) $product->id)->first();
            if (! $existing) {
                DB::table('cjc_products')->insert([
                    'product_id' => (string) $product->id,
                    'tenant_id' => $tenantId,
                    'is_active' => true,
                    'capabilities' => json_encode(['cronograma', 'questoes', 'flashcards', 'revisoes', 'simulados', 'cadernos'], JSON_UNESCAPED_UNICODE),
                    'settings' => json_encode([], JSON_UNESCAPED_UNICODE),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
            if ($product->type === Product::TYPE_LINK) {
                $desired = url('/cjc-estudos/'.$tenantId);
                $checkout = $config;
                if (($checkout['deliverable_link'] ?? null) !== $desired) {
                    $checkout['deliverable_link'] = $desired;
                    $product->forceFill(['checkout_config' => $checkout])->save();
                }
            }
        });
    }

    private function decodeJson(mixed $value): array
    {
        if (is_array($value)) {
            return $value;
        }
        if (! is_string($value) || trim($value) === '') {
            return [];
        }
        $decoded = json_decode($value, true);

        return is_array($decoded) ? $decoded : [];
    }
}
