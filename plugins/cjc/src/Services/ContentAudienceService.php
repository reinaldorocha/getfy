<?php

namespace Plugins\Cjc\Services;

use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\\Validation\\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ContentAudienceService
{
    public const TARGET_TYPES = ['global', 'product', 'contest', 'edict', 'student'];

    public const CONTENT_TYPES = ['question', 'flashcard_deck', 'material'];

    /**
     * @param  array<int, array{type?: string, target_type?: string, id?: string|int|null, target_id?: string|int|null}>  $targets
     */
    public function replaceTargets(int $tenantId, string $contentType, string $contentId, array $targets): void
    {
        $this->assertContentType($contentType);
        $normalized = $this->normalizeTargets($tenantId, $targets);

        DB::transaction(function () use ($tenantId, $contentType, $contentId, $normalized): void {
            DB::table('cjc_content_targets')
                ->where('tenant_id', $tenantId)
                ->where('content_type', $contentType)
                ->where('content_id', $contentId)
                ->delete();

            foreach ($normalized as $target) {
                DB::table('cjc_content_targets')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'content_type' => $contentType,
                    'content_id' => $contentId,
                    'target_type' => $target['type'],
                    'target_id' => $target['id'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        });
    }

    public function targets(int $tenantId, string $contentType, string $contentId): array
    {
        $this->assertContentType($contentType);

        return DB::table('cjc_content_targets')
            ->where('tenant_id', $tenantId)
            ->where('content_type', $contentType)
            ->where('content_id', $contentId)
            ->orderBy('target_type')
            ->orderBy('target_id')
            ->get(['target_type', 'target_id'])
            ->map(fn ($row) => ['type' => $row->target_type, 'id' => $row->target_id])
            ->values()
            ->all();
    }

    /**
     * Returns content IDs visible to a student for the requested content type.
     *
     * @return array<int, string>
     */
    public function visibleIds(User $student, int $tenantId, string $contentType): array
    {
        $this->assertContentType($contentType);
        $context = $this->studentContext($student, $tenantId);

        $rows = DB::table('cjc_content_targets')
            ->where('tenant_id', $tenantId)
            ->where('content_type', $contentType)
            ->get(['content_id', 'target_type', 'target_id']);

        $visible = [];
        foreach ($rows as $row) {
            if ($this->targetMatches($row->target_type, $row->target_id, $context)) {
                $visible[(string) $row->content_id] = true;
            }
        }

        return array_keys($visible);
    }

    public function canStudentAccess(User $student, int $tenantId, string $contentType, string $contentId): bool
    {
        return in_array($contentId, $this->visibleIds($student, $tenantId, $contentType), true);
    }

    public function deleteTargets(int $tenantId, string $contentType, string $contentId): void
    {
        DB::table('cjc_content_targets')
            ->where('tenant_id', $tenantId)
            ->where('content_type', $contentType)
            ->where('content_id', $contentId)
            ->delete();
    }

    /**
     * @param  array<int, array{type?: string, target_type?: string, id?: string|int|null, target_id?: string|int|null}>  $targets
     * @return array<int, array{type: string, id: ?string}>
     */
    private function normalizeTargets(int $tenantId, array $targets): array
    {
        if ($targets === []) {
            $targets = [['type' => 'global', 'id' => null]];
        }

        $normalized = [];
        foreach ($targets as $target) {
            $type = trim((string) ($target['type'] ?? $target['target_type'] ?? ''));
            $idValue = $target['id'] ?? $target['target_id'] ?? null;
            $id = $idValue === null || $idValue === '' ? null : (string) $idValue;

            if (! in_array($type, self::TARGET_TYPES, true)) {
                throw ValidationException::withMessages(['targets' => 'Tipo de disponibilização CJC inválido.']);
            }

            if ($type === 'global') {
                return [['type' => 'global', 'id' => null]];
            }

            if ($id === null) {
                throw ValidationException::withMessages(['targets' => 'Destino obrigatório para a disponibilização selecionada.']);
            }

            $this->assertTargetExists($tenantId, $type, $id);
            $normalized[$type.':'.$id] = ['type' => $type, 'id' => $id];
        }

        return array_values($normalized);
    }

    private function assertTargetExists(int $tenantId, string $type, string $id): void
    {
        $exists = match ($type) {
            'product' => DB::table('cjc_products')
                ->join('products', 'products.id', '=', 'cjc_products.product_id')
                ->where('cjc_products.tenant_id', $tenantId)
                ->where('cjc_products.product_id', $id)
                ->where('cjc_products.is_active', true)
                ->where('products.tenant_id', $tenantId)
                ->exists(),
            'contest' => DB::table('cjc_contests')
                ->where('tenant_id', $tenantId)->where('id', $id)->where('is_active', true)->exists(),
            'edict' => DB::table('cjc_edicts')
                ->where('tenant_id', $tenantId)->where('id', $id)->where('is_active', true)->exists(),
            'student' => DB::table('users')
                ->join('product_user', 'product_user.user_id', '=', 'users.id')
                ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
                ->where('users.id', (int) $id)
                ->where('users.role', User::ROLE_ALUNO)
                ->where('cjc_products.tenant_id', $tenantId)
                ->where('cjc_products.is_active', true)
                ->exists(),
            default => false,
        };

        if (! $exists) {
            throw new NotFoundHttpException('Destino de disponibilização não encontrado neste tenant.');
        }
    }

    /**
     * @return array{student_id: string, products: array<string, bool>, contests: array<string, bool>, edicts: array<string, bool>}
     */
    private function studentContext(User $student, int $tenantId): array
    {
        $products = DB::table('product_user')
            ->join('cjc_products', 'cjc_products.product_id', '=', 'product_user.product_id')
            ->join('products', 'products.id', '=', 'product_user.product_id')
            ->where('product_user.user_id', $student->id)
            ->where('cjc_products.tenant_id', $tenantId)
            ->where('cjc_products.is_active', true)
            ->where('products.tenant_id', $tenantId)
            ->where('products.is_active', true)
            ->pluck('product_user.product_id')
            ->mapWithKeys(fn ($id) => [(string) $id => true])
            ->all();

        $contests = DB::table('cjc_student_contests')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $student->id)
            ->where('is_active', true)
            ->pluck('contest_id')
            ->mapWithKeys(fn ($id) => [(string) $id => true])
            ->all();

        $edicts = DB::table('cjc_student_edicts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $student->id)
            ->where('is_active', true)
            ->pluck('edict_id')
            ->mapWithKeys(fn ($id) => [(string) $id => true])
            ->all();

        return [
            'student_id' => (string) $student->id,
            'products' => $products,
            'contests' => $contests,
            'edicts' => $edicts,
        ];
    }

    /**
     * @param  array{student_id: string, products: array<string, bool>, contests: array<string, bool>, edicts: array<string, bool>}  $context
     */
    private function targetMatches(string $type, ?string $id, array $context): bool
    {
        return match ($type) {
            'global' => true,
            'product' => $id !== null && isset($context['products'][$id]),
            'contest' => $id !== null && isset($context['contests'][$id]),
            'edict' => $id !== null && isset($context['edicts'][$id]),
            'student' => $id !== null && $id === $context['student_id'],
            default => false,
        };
    }

    private function assertContentType(string $contentType): void
    {
        if (! in_array($contentType, self::CONTENT_TYPES, true)) {
            throw ValidationException::withMessages(['content_type' => 'Tipo de conteúdo CJC inválido.']);
        }
    }
}
