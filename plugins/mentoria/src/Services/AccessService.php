<?php

namespace Plugins\Mentoria\Services;

use App\Models\Product;
use App\Models\User;
use App\Services\StorageService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AccessService
{
    public const DEFAULT_CAPABILITIES = [
        'dashboard',
        'edital',
        'materiais',
        'cronograma',
        'cronograma_inteligente',
        'revisoes',
        'flashcards',
        'questoes',
        'simulados',
        'cadernos',
        'metricas',
        'cursos',
    ];

    public function tenantId(User $actor): int
    {
        $tenantId = (int) ($actor->tenant_id ?: $actor->id);
        if ($tenantId <= 0) {
            throw new AccessDeniedHttpException('Tenant inválido para o Mentoria.');
        }

        return $tenantId;
    }

    public function productsForTenant(int $tenantId): Collection
    {
        $this->syncVirtualMentoriaProducts($tenantId);
        $configured = DB::table('mentoria_products')
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
                    'mentoria_enabled' => (bool) ($cfg?->is_active ?? false),
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

        if ($capabilities === []) {
            $capabilities = self::DEFAULT_CAPABILITIES;
        }

        DB::table('mentoria_products')->updateOrInsert(
            ['product_id' => (string) $product->id],
            [
                'tenant_id' => $tenantId,
                'is_active' => true,
                'capabilities' => json_encode(array_values(array_unique($capabilities)), JSON_UNESCAPED_UNICODE),
                'settings' => json_encode($settings, JSON_UNESCAPED_UNICODE),
                'updated_at' => now(),
            ]
        );

        if (! DB::table('mentoria_products')->where('product_id', (string) $product->id)->whereNotNull('created_at')->exists()) {
            DB::table('mentoria_products')->where('product_id', (string) $product->id)->update(['created_at' => now()]);
        }
    }

    public function disableProduct(User $actor, Product $product): void
    {
        $tenantId = $this->tenantId($actor);
        if ((int) $product->tenant_id !== $tenantId) {
            throw new NotFoundHttpException('Produto não encontrado neste tenant.');
        }

        DB::table('mentoria_products')
            ->where('tenant_id', $tenantId)
            ->where('product_id', (string) $product->id)
            ->update(['is_active' => false, 'updated_at' => now()]);
    }

    public function studentsForTenant(int $tenantId): Collection
    {
        return DB::table('users')
            ->join('product_user', 'product_user.user_id', '=', 'users.id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->where('mentoria_products.tenant_id', $tenantId)
            ->where('mentoria_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->where('users.role', User::ROLE_ALUNO)
            ->select('users.id', 'users.name', 'users.email')
            ->distinct()
            ->orderBy('users.name')
            ->get();
    }

    public function studentsForProduct(int $tenantId, string $productId): Collection
    {
        return DB::table('users')
            ->join('product_user', 'product_user.user_id', '=', 'users.id')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->where('mentoria_products.tenant_id', $tenantId)
            ->where('mentoria_products.product_id', $productId)
            ->where('mentoria_products.is_active', true)
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
            throw new NotFoundHttpException('Aluno não encontrado no acesso Mentoria deste tenant.');
        }

        return $student;
    }

    public function assertStudentAccess(User $student, int $tenantId): void
    {
        if (! $student->isAluno() || ! $this->studentHasTenantAccess($student, $tenantId)) {
            throw new AccessDeniedHttpException('Você não possui acesso ativo ao Mentoria deste produtor.');
        }
    }

    public function assertCapability(User $student, int $tenantId, string $capability): void
    {
        $this->assertStudentAccess($student, $tenantId);
        if (! $this->hasCapability($student, $tenantId, $capability)) {
            throw new AccessDeniedHttpException('Seu produto não inclui este recurso do Mentoria.');
        }
    }

    public function hasCapability(User $student, int $tenantId, string $capability): bool
    {
        return in_array($capability, $this->studentCapabilities($student, $tenantId), true);
    }

    public function studentHasTenantAccess(User $student, int $tenantId): bool
    {
        return DB::table('product_user')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria_products.tenant_id', $tenantId)
            ->where('mentoria_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->exists();
    }

    public function studentCapabilities(User $student, int $tenantId): array
    {
        $rows = DB::table('product_user')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria_products.tenant_id', $tenantId)
            ->where('mentoria_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->pluck('mentoria_products.capabilities');

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

    public function productIdsForStudent(User $student, int $tenantId): array
    {
        return DB::table('product_user')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria_products.tenant_id', $tenantId)
            ->where('mentoria_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->pluck('product_user.product_id')
            ->map(fn ($id) => (string) $id)
            ->values()
            ->all();
    }

    public function ownedTenantIds(User $student): array
    {
        return DB::table('product_user')
            ->join('mentoria_products', 'mentoria_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria_products.is_active', true)
            ->where('products.is_active', true)
            ->distinct()
            ->pluck('mentoria_products.tenant_id')
            ->map(fn ($id) => (int) $id)
            ->values()
            ->all();
    }

    public function tenantCourses(int $tenantId): Collection
    {
        return Product::query()
            ->where('tenant_id', $tenantId)
            ->where('type', Product::TYPE_AREA_MEMBROS)
            ->where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'slug', 'description', 'image'])
            ->map(fn (Product $product) => [
                'id' => (string) $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'image' => $product->image,
                'builder_url' => url('/produtos/'.$product->id.'/member-builder'),
            ]);
    }

    public function studentCourses(User $student, int $tenantId): Collection
    {
        $storage = new StorageService($tenantId);

        return $student->products()
            ->where('products.tenant_id', $tenantId)
            ->where('products.type', Product::TYPE_AREA_MEMBROS)
            ->where('products.is_active', true)
            ->orderBy('products.name')
            ->get(['products.id', 'products.name', 'products.slug', 'products.description', 'products.image'])
            ->map(fn (Product $product) => [
                'id' => (string) $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'image' => $product->image,
                'image_url' => $product->image ? $storage->url($product->image) : null,
                'access_url' => url('/meus-produtos/produtos/'.$product->id.'/acessar'),
            ]);
    }

    private function syncVirtualMentoriaProducts(int $tenantId): void
    {
        Product::query()->where('tenant_id', $tenantId)->get(['id', 'type', 'checkout_config'])->each(function (Product $product) use ($tenantId) {
            $config = is_array($product->checkout_config) ? $product->checkout_config : [];
            $marker = $config['_plugin_product'] ?? null;
            if (! is_array($marker) || ($marker['slug'] ?? null) !== 'mentoria') {
                return;
            }

            $existing = DB::table('mentoria_products')->where('product_id', (string) $product->id)->first();
            if (! $existing) {
                DB::table('mentoria_products')->insert([
                    'product_id' => (string) $product->id,
                    'tenant_id' => $tenantId,
                    'is_active' => true,
                    'capabilities' => json_encode(self::DEFAULT_CAPABILITIES, JSON_UNESCAPED_UNICODE),
                    'settings' => json_encode([], JSON_UNESCAPED_UNICODE),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            if ($product->type === Product::TYPE_LINK) {
                $desired = url('/mentoria-estudos/'.$tenantId);
                if (($config['deliverable_link'] ?? null) !== $desired) {
                    $config['deliverable_link'] = $desired;
                    $product->forceFill(['checkout_config' => $config])->save();
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
