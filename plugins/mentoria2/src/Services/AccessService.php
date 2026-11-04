<?php

namespace Plugins\Mentoria2\Services;

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
        'ia',
    ];

    public function tenantId(User $actor): int
    {
        $tenantId = (int) ($actor->tenant_id ?: $actor->id);
        if ($tenantId <= 0) {
            throw new AccessDeniedHttpException('Tenant inválido para o Mentoria2.');
        }

        return $tenantId;
    }

    public function productsForTenant(int $tenantId): Collection
    {
        $eligibleProductIds = array_flip($this->eligibleProductIds($tenantId));
        $configured = DB::table('mentoria2_products')
            ->where('tenant_id', $tenantId)
            ->get()
            ->keyBy('product_id');

        return Product::query()
            ->where('tenant_id', $tenantId)
            ->orderBy('name')
            ->get(['id', 'name', 'slug', 'type', 'billing_type', 'is_active'])
            ->map(function (Product $product) use ($configured, $eligibleProductIds) {
                $cfg = $configured->get((string) $product->id);

                return [
                    'id' => (string) $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'type' => $product->type,
                    'billing_type' => $product->billing_type,
                    'is_active' => (bool) $product->is_active,
                    'mentoria2_enabled' => (bool) ($cfg?->is_active ?? false) && isset($eligibleProductIds[(string) $product->id]),
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

        // Só uma ação explícita do mentor pode transformar um produto Getfy
        // em fonte de matrícula da Mentoria 2.0.
        $settings['mentoria2_explicitly_enabled'] = true;

        DB::table('mentoria2_products')->updateOrInsert(
            ['product_id' => (string) $product->id],
            [
                'tenant_id' => $tenantId,
                'is_active' => true,
                'capabilities' => json_encode(array_values(array_unique($capabilities)), JSON_UNESCAPED_UNICODE),
                'settings' => json_encode($settings, JSON_UNESCAPED_UNICODE),
                'updated_at' => now(),
            ]
        );

        if (! DB::table('mentoria2_products')->where('product_id', (string) $product->id)->whereNotNull('created_at')->exists()) {
            DB::table('mentoria2_products')->where('product_id', (string) $product->id)->update(['created_at' => now()]);
        }

        if ($product->type === Product::TYPE_LINK || str_contains((string) ($product->checkout_config['deliverable_link'] ?? ''), 'mentoria-estudos')) {
            $config = is_array($product->checkout_config) ? $product->checkout_config : [];
            $config['deliverable_link'] = '/mentoria2-estudos/'.$tenantId;
            $product->forceFill(['checkout_config' => $config])->save();
        }
    }

    public function disableProduct(User $actor, Product $product): void
    {
        $tenantId = $this->tenantId($actor);
        if ((int) $product->tenant_id !== $tenantId) {
            throw new NotFoundHttpException('Produto não encontrado neste tenant.');
        }

        DB::table('mentoria2_products')
            ->where('tenant_id', $tenantId)
            ->where('product_id', (string) $product->id)
            ->update(['is_active' => false, 'updated_at' => now()]);
    }

    public function studentsForTenant(int $tenantId): Collection
    {
        $productIds = $this->eligibleProductIds($tenantId);

        return DB::table('users')
            ->join('product_user', 'product_user.user_id', '=', 'users.id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->whereIn('product_user.product_id', $productIds)
            ->where('users.role', User::ROLE_ALUNO)
            ->select('users.id', 'users.name', 'users.email')
            ->distinct()
            ->orderBy('users.name')
            ->get();
    }

    public function studentsForProduct(int $tenantId, string $productId): Collection
    {
        if (! in_array($productId, $this->eligibleProductIds($tenantId), true)) {
            return collect();
        }

        return DB::table('users')
            ->join('product_user', 'product_user.user_id', '=', 'users.id')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.product_id', $productId)
            ->where('mentoria2_products.is_active', true)
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
            throw new NotFoundHttpException('Aluno não encontrado no acesso Mentoria2 deste tenant.');
        }

        return $student;
    }

    public function assertStudentAccess(User $student, int $tenantId): void
    {
        if (! $student->isAluno() || ! $this->studentHasTenantAccess($student, $tenantId)) {
            throw new AccessDeniedHttpException('Você não possui acesso ativo ao Mentoria2 deste produtor.');
        }
    }

    public function assertCapability(User $student, int $tenantId, string $capability): void
    {
        $this->assertStudentAccess($student, $tenantId);
        if (! $this->hasCapability($student, $tenantId, $capability)) {
            throw new AccessDeniedHttpException('Seu produto não inclui este recurso do Mentoria2.');
        }
    }

    public function hasCapability(User $student, int $tenantId, string $capability): bool
    {
        return in_array($capability, $this->studentCapabilities($student, $tenantId), true);
    }

    public function studentHasTenantAccess(User $student, int $tenantId): bool
    {
        $productIds = $this->eligibleProductIds($tenantId);

        return DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->whereIn('product_user.product_id', $productIds)
            ->exists();
    }

    public function studentCapabilities(User $student, int $tenantId): array
    {
        $studentId = is_numeric($student) ? (int) $student : (int) $student->id;

        $bonus = $this->studentBonusStatus($student, $tenantId);
        if ($bonus && ! empty($bonus['is_active'])) {
            return self::DEFAULT_CAPABILITIES;
        }

        // Automação Escalável: no primeiro acesso do aluno, se algum produto comprado possui auto_bonus_7d
        // e o aluno ainda não teve o bônus concedido, ativa os 7 dias automaticamente sem ação manual
        $bonusRow = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->first(['bonus_full_access_until']);

        if (! $bonusRow || $bonusRow->bonus_full_access_until === null) {
            $productIds = $this->eligibleProductIds($tenantId);
            $hasAutoBonusProduct = DB::table('product_user')
                ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
                ->where('product_user.user_id', $studentId)
                ->where('mentoria2_products.tenant_id', $tenantId)
                ->where('mentoria2_products.is_active', true)
                ->whereIn('product_user.product_id', $productIds)
                ->get(['mentoria2_products.settings'])
                ->contains(function ($row) {
                    $st = $this->decodeJson($row->settings);
                    return ! empty($st['auto_bonus_7d']);
                });

            if ($hasAutoBonusProduct) {
                $this->grantBonusAccess($tenantId, $studentId, 7);
                return self::DEFAULT_CAPABILITIES;
            }
        }

        $productIds = $this->eligibleProductIds($tenantId);

        $rows = DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $studentId)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->whereIn('product_user.product_id', $productIds)
            ->pluck('mentoria2_products.capabilities');

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

    /**
     * Verifica se o aluno possui permissão ativa para utilizar recursos de IA.
     * Produtos low-ticket ou com ai_enabled = false bloqueiam o acesso.
     */
    public function hasAiAccess(User $student, int $tenantId): bool
    {
        $bonus = $this->studentBonusStatus($student, $tenantId);
        if ($bonus && ! empty($bonus['is_active'])) {
            return true;
        }

        $studentId = (int) $student->id;
        $productIds = $this->eligibleProductIds($tenantId);

        $rows = DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $studentId)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->whereIn('product_user.product_id', $productIds)
            ->get(['mentoria2_products.capabilities', 'mentoria2_products.settings']);

        if ($rows->isEmpty()) {
            return false;
        }

        foreach ($rows as $row) {
            $settings = $this->decodeJson($row->settings);
            $caps = $this->decodeJson($row->capabilities);

            // Se explicitamente desativado no produto
            if (isset($settings['ai_enabled']) && $settings['ai_enabled'] === false) {
                continue;
            }

            // Se explicitamente ativado ou possui a capability 'ia'
            if (! empty($settings['ai_enabled']) || in_array('ia', $caps, true)) {
                return true;
            }

            // Modo completo tem IA liberada por padrão, exceto se desmarcado
            $mode = $settings['access_mode'] ?? 'full';
            if ($mode === 'full' && ! array_key_exists('ai_enabled', $settings)) {
                return true;
            }
        }

        return false;
    }

    public function productIdsForStudent(User $student, int $tenantId): array
    {
        $productIds = $this->eligibleProductIds($tenantId);

        return DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria2_products.tenant_id', $tenantId)
            ->where('mentoria2_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->whereIn('product_user.product_id', $productIds)
            ->pluck('product_user.product_id')
            ->map(fn ($id) => (string) $id)
            ->values()
            ->all();
    }

    public function ownedTenantIds(User $student): array
    {
        $eligibleByTenant = DB::table('mentoria2_products')
            ->where('is_active', true)
            ->distinct()
            ->pluck('tenant_id')
            ->map(fn ($id) => (int) $id)
            ->mapWithKeys(fn (int $tenantId) => [$tenantId => array_flip($this->eligibleProductIds($tenantId))])
            ->filter(fn (array $productIds) => $productIds !== []);

        if ($eligibleByTenant->isEmpty()) {
            return [];
        }

        return DB::table('product_user')
            ->join('mentoria2_products', 'mentoria2_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('mentoria2_products.is_active', true)
            ->where('products.is_active', true)
            ->whereIn('mentoria2_products.tenant_id', $eligibleByTenant->keys()->all())
            ->get(['mentoria2_products.tenant_id', 'product_user.product_id'])
            ->filter(fn ($row) => isset($eligibleByTenant[(int) $row->tenant_id][(string) $row->product_id]))
            ->pluck('tenant_id')
            ->unique()
            ->map(fn ($id) => (int) $id)
            ->values()
            ->all();
    }

    /**
     * Produtos que efetivamente concedem acesso à Mentoria 2.0.
     *
     * Registros legados criados pelo seeder antigo não têm a marca explícita
     * e não podem matricular toda a base de compradores por acidente.
     */
    public function eligibleProductIds(int $tenantId): array
    {
        $this->syncVirtualMentoria2Products($tenantId);

        $explicit = DB::table('mentoria2_products')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->get(['product_id', 'settings'])
            ->filter(function ($row): bool {
                $settings = $this->decodeJson($row->settings ?? null);

                return (bool) ($settings['mentoria2_explicitly_enabled'] ?? false);
            })
            ->pluck('product_id')
            ->map(fn ($id) => (string) $id)
            ->all();

        $virtual = Product::query()
            ->where('tenant_id', $tenantId)
            ->get(['id', 'checkout_config'])
            ->filter(function (Product $product): bool {
                $config = is_array($product->checkout_config) ? $product->checkout_config : [];
                $marker = $config['_plugin_product'] ?? null;

                return is_array($marker) && ($marker['slug'] ?? null) === 'mentoria2';
            })
            ->pluck('id')
            ->map(fn ($id) => (string) $id)
            ->all();

        return array_values(array_unique(array_merge($explicit, $virtual)));
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
        $progressService = app(\App\Services\MemberProgressService::class);

        return $student->products()
            ->where('products.tenant_id', $tenantId)
            ->where('products.type', Product::TYPE_AREA_MEMBROS)
            ->where('products.is_active', true)
            ->orderBy('products.name')
            ->get(['products.id', 'products.name', 'products.slug', 'products.checkout_slug', 'products.description', 'products.image'])
            ->map(function (Product $product) use ($storage, $progressService, $student) {
                $totalLessons = $progressService->totalLessonsCount($product);
                $completedLessons = $progressService->completedLessonsCount($product, $student);
                $progressPercent = $progressService->completionPercent($product, $student);
                $continueWatching = $progressService->latestContinueWatching($product, $student);

                $sections = $product->memberSections()->get();
                $sectionsCount = $sections->count();
                $modulesCount = \App\Models\MemberModule::whereIn('member_section_id', $sections->pluck('id'))->count();

                $slug = $product->checkout_slug ?: $product->slug;
                $memberAreaPath = '/m/' . $slug;

                return [
                    'id' => (string) $product->id,
                    'name' => $product->name,
                    'title' => $product->name,
                    'slug' => $product->slug,
                    'checkout_slug' => $product->checkout_slug,
                    'description' => $product->description,
                    'image' => $product->image,
                    'image_url' => ($product->image && $storage->exists($product->image)) ? $storage->url($product->image) : null,
                    'access_url' => url('/meus-produtos/produtos/'.$product->id.'/acessar'),
                    'member_area_url' => $memberAreaPath,
                    'full_access_url' => url($memberAreaPath),
                    'total_lessons' => $totalLessons,
                    'completed_lessons' => $completedLessons,
                    'progress_percent' => $progressPercent,
                    'modules_count' => $modulesCount,
                    'sections_count' => $sectionsCount,
                    'continue_watching' => $continueWatching ? [
                        'lesson_title' => $continueWatching['lesson_title'] ?? '',
                        'module_title' => $continueWatching['module_title'] ?? '',
                    ] : null,
                ];
            });
    }

    private function syncVirtualMentoria2Products(int $tenantId): void
    {
        Product::query()->where('tenant_id', $tenantId)->get(['id', 'type', 'checkout_config'])->each(function (Product $product) use ($tenantId) {
            $config = is_array($product->checkout_config) ? $product->checkout_config : [];
            $marker = $config['_plugin_product'] ?? null;
            if (! is_array($marker) || ($marker['slug'] ?? null) !== 'mentoria2') {
                return;
            }

            $existing = DB::table('mentoria2_products')->where('product_id', (string) $product->id)->first();
            if (! $existing) {
                DB::table('mentoria2_products')->insert([
                    'product_id' => (string) $product->id,
                    'tenant_id' => $tenantId,
                    'is_active' => true,
                    'capabilities' => json_encode(self::DEFAULT_CAPABILITIES, JSON_UNESCAPED_UNICODE),
                    'settings' => json_encode(['mentoria2_virtual_product' => true], JSON_UNESCAPED_UNICODE),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            if ($product->type === Product::TYPE_LINK) {
                $desired = url('/mentoria2-estudos/'.$tenantId);
                if (($config['deliverable_link'] ?? null) !== $desired) {
                    $config['deliverable_link'] = $desired;
                    $product->forceFill(['checkout_config' => $config])->save();
                }
            }
        });
    }

    public function grantBonusAccess(int $tenantId, int $studentId, int $days = 7): array
    {
        $expiresAt = now()->addDays($days);
        DB::table('mentoria2_preferences')->updateOrInsert(
            ['tenant_id' => $tenantId, 'student_id' => $studentId],
            [
                'bonus_full_access_until' => $expiresAt,
                'updated_at' => now(),
            ]
        );

        return [
            'is_active' => true,
            'bonus_until' => $expiresAt->format('d/m/Y H:i'),
            'expires_at' => $expiresAt->toIso8601String(),
            'days_left' => $days,
        ];
    }

    public function revokeBonusAccess(int $tenantId, int $studentId): void
    {
        DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->update([
                'bonus_full_access_until' => null,
                'updated_at' => now(),
            ]);
    }

    public function studentBonusStatus(User|int $student, int $tenantId): ?array
    {
        $studentId = is_numeric($student) ? (int) $student : (int) $student->id;
        $row = DB::table('mentoria2_preferences')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $studentId)
            ->value('bonus_full_access_until');

        if (! $row) {
            return null;
        }

        $until = \Carbon\Carbon::parse($row);
        if ($until->isPast()) {
            return [
                'is_active' => false,
                'bonus_until' => $until->format('d/m/Y H:i'),
                'expires_at' => $until->toIso8601String(),
                'days_left' => 0,
            ];
        }

        $daysLeft = max(1, (int) ceil(now()->floatDiffInDays($until, false)));

        return [
            'is_active' => true,
            'bonus_until' => $until->format('d/m/Y H:i'),
            'expires_at' => $until->toIso8601String(),
            'days_left' => $daysLeft,
        ];
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
