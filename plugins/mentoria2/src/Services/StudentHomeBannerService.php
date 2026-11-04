<?php

namespace Plugins\Mentoria2\Services;

use App\Services\StorageService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class StudentHomeBannerService
{
    public function __construct(
        private readonly ?MentoriaCacheService $cache = null,
    ) {}

    public const DEFAULT_DARK_COLORS = [
        'theme_preset' => 'rota_da_farda',
        'primary' => '#D7192A',
        'secondary' => '#E8A332',
        'sidebar' => '#1B1B1E',
        'sidebar_text' => '#A1A1AA',
        'bg_app' => '#0B0B0C',
        'bg_card' => '#1B1B1E',
        'border_color' => '#2E2E33',
        'text_main' => '#F4F4F5',
        'text_muted' => '#A1A1AA',
        'accent_green' => '#10b981',
        'accent_amber' => '#E8A332',
        'accent_rose' => '#E5313F',
    ];

    public const DEFAULT_LIGHT_COLORS = [
        'theme_preset' => 'rota_da_farda',
        'primary' => '#D7192A',
        'secondary' => '#C27803',
        'sidebar' => '#F4F4F5',
        'sidebar_text' => '#2E2E33',
        'bg_app' => '#F4F4F5',
        'bg_card' => '#FFFFFF',
        'border_color' => '#D9D9DE',
        'text_main' => '#0B0B0C',
        'text_muted' => '#6B6B73',
        'accent_green' => '#10b981',
        'accent_amber' => '#E8A332',
        'accent_rose' => '#D7192A',
    ];

    private const DEFAULT_PLATFORM_COLORS = self::DEFAULT_DARK_COLORS;

    private const DEFAULT_BRANDING = [
        'brand_name' => 'Mentoria 2.0',
        'student_area_label' => 'Área do Aluno',
        'mentor_panel_label' => 'Painel do Mentor',
    ];

    /** @return array{brand_name: string, student_area_label: string, mentor_panel_label: string} */
    public function brandingForTenant(int $tenantId): array
    {
        $resolver = function () use ($tenantId) {
            if (! Schema::hasTable('mentoria2_tenant_settings') || ! Schema::hasColumn('mentoria2_tenant_settings', 'platform_branding')) {
                return self::DEFAULT_BRANDING;
            }

            $value = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('platform_branding');
            $branding = is_string($value) ? json_decode($value, true) : $value;
            $branding = is_array($branding) ? $branding : [];

            return [
                'brand_name' => trim((string) ($branding['brand_name'] ?? '')) ?: self::DEFAULT_BRANDING['brand_name'],
                'student_area_label' => trim((string) ($branding['student_area_label'] ?? '')) ?: self::DEFAULT_BRANDING['student_area_label'],
                'mentor_panel_label' => trim((string) ($branding['mentor_panel_label'] ?? '')) ?: self::DEFAULT_BRANDING['mentor_panel_label'],
            ];
        };

        return $this->cache ? $this->cache->rememberBranding($tenantId, $resolver) : $resolver();
    }

    /** @param array{brand_name?: string, student_area_label?: string, mentor_panel_label?: string} $branding */
    public function replaceBranding(int $tenantId, array $branding): array
    {
        $current = $this->brandingForTenant($tenantId);
        $clean = [
            'brand_name' => trim((string) ($branding['brand_name'] ?? '')) ?: $current['brand_name'],
            'student_area_label' => trim((string) ($branding['student_area_label'] ?? '')) ?: $current['student_area_label'],
            'mentor_panel_label' => trim((string) ($branding['mentor_panel_label'] ?? '')) ?: $current['mentor_panel_label'],
        ];

        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            ['platform_branding' => json_encode($clean, JSON_UNESCAPED_UNICODE), 'updated_at' => now(), 'created_at' => now()],
        );

        return $this->brandingForTenant($tenantId);
    }

    /** @return array{url: string, name: string}|null */
    public function logoForTenant(int $tenantId): ?array
    {
        if (! Schema::hasTable('mentoria2_tenant_settings') || ! Schema::hasColumn('mentoria2_tenant_settings', 'platform_logo_path')) {
            return null;
        }

        $row = DB::table('mentoria2_tenant_settings')
            ->where('tenant_id', $tenantId)
            ->first(['platform_logo_path', 'platform_logo_name']);

        if (! $row?->platform_logo_path) {
            return null;
        }

        $storage = new StorageService($tenantId);
        if (! $storage->exists((string) $row->platform_logo_path)) {
            return null;
        }

        return [
            'url' => $storage->url((string) $row->platform_logo_path),
            'name' => (string) ($row->platform_logo_name ?: 'Logo da plataforma'),
        ];
    }

    /** @return array{url: string, name: string} */
    public function replaceLogo(int $tenantId, UploadedFile $file): array
    {
        $previousPath = Schema::hasTable('mentoria2_tenant_settings') && Schema::hasColumn('mentoria2_tenant_settings', 'platform_logo_path')
            ? DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('platform_logo_path')
            : null;

        $storage = new StorageService($tenantId);
        $extension = strtolower($file->getClientOriginalExtension() ?: 'png');
        $path = $storage->putFileAs(
            'mentoria2/'.$tenantId.'/platform-logos',
            $file,
            (string) Str::uuid().'.'.$extension,
        );

        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            [
                'platform_logo_path' => $path,
                'platform_logo_name' => $file->getClientOriginalName(),
                'updated_at' => now(),
                'created_at' => now(),
            ],
        );

        if ($previousPath && $previousPath !== $path) {
            $storage->delete((string) $previousPath);
        }

        return ['url' => $storage->url($path), 'name' => $file->getClientOriginalName()];
    }

    public function removeLogo(int $tenantId): void
    {
        if (! Schema::hasTable('mentoria2_tenant_settings') || ! Schema::hasColumn('mentoria2_tenant_settings', 'platform_logo_path')) {
            return;
        }

        $path = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('platform_logo_path');
        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            ['platform_logo_path' => null, 'platform_logo_name' => null, 'updated_at' => now(), 'created_at' => now()],
        );

        if ($path) {
            (new StorageService($tenantId))->delete((string) $path);
        }
    }

    /** @return array<string, mixed> */
    public function platformColorsForTenant(int $tenantId): array
    {
        if (! Schema::hasTable('mentoria2_tenant_settings') || ! Schema::hasColumn('mentoria2_tenant_settings', 'platform_colors')) {
            $defaultDark = self::DEFAULT_DARK_COLORS;
            $defaultLight = self::DEFAULT_LIGHT_COLORS;
            return array_merge($defaultDark, [
                'dark' => $defaultDark,
                'light' => $defaultLight,
            ]);
        }

        $value = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('platform_colors');
        $colors = is_string($value) ? json_decode($value, true) : $value;
        $colors = is_array($colors) ? $colors : [];

        $darkInput = is_array($colors['dark'] ?? null) ? $colors['dark'] : $colors;
        $lightInput = is_array($colors['light'] ?? null) ? $colors['light'] : [];

        $cleanDark = $this->sanitizePalette($darkInput, self::DEFAULT_DARK_COLORS);
        $cleanLight = $this->sanitizePalette($lightInput, self::DEFAULT_LIGHT_COLORS);

        return array_merge($cleanDark, [
            'dark' => $cleanDark,
            'light' => $cleanLight,
            'theme_preset' => $colors['theme_preset'] ?? $cleanDark['theme_preset'] ?? 'midnight',
        ]);
    }

    private function sanitizePalette(array $input, array $defaults): array
    {
        return collect($defaults)->mapWithKeys(function (string $default, string $key) use ($input): array {
            $candidate = (string) ($input[$key] ?? '');
            if ($key === 'theme_preset') {
                return [$key => ! empty($candidate) ? preg_replace('/[^a-z0-9_-]/i', '', $candidate) : $default];
            }
            return [$key => preg_match('/^#[0-9a-fA-F]{6}$/', $candidate) ? strtolower($candidate) : $default];
        })->all();
    }

    /** @param array{primary: string, secondary: string, sidebar: string} $colors */
    public function replacePlatformColors(int $tenantId, array $colors): array
    {
        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            ['platform_colors' => json_encode($colors), 'updated_at' => now(), 'created_at' => now()],
        );

        return $this->platformColorsForTenant($tenantId);
    }

    /** @return array{url: string, name: string}|null */
    public function forTenant(int $tenantId): ?array
    {
        if (! Schema::hasTable('mentoria2_tenant_settings')) {
            return null;
        }

        $row = DB::table('mentoria2_tenant_settings')
            ->where('tenant_id', $tenantId)
            ->first(['student_home_banner_path', 'student_home_banner_name']);

        if (! $row?->student_home_banner_path) {
            return null;
        }

        $storage = new StorageService($tenantId);
        if (! $storage->exists((string) $row->student_home_banner_path)) {
            return null;
        }

        return [
            'url' => $storage->url((string) $row->student_home_banner_path),
            'name' => (string) ($row->student_home_banner_name ?: 'Capa da área do aluno'),
        ];
    }

    /** @return array{url: string, name: string} */
    public function replace(int $tenantId, UploadedFile $file): array
    {
        $previousPath = Schema::hasTable('mentoria2_tenant_settings')
            ? DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('student_home_banner_path')
            : null;

        $storage = new StorageService($tenantId);
        $extension = strtolower($file->getClientOriginalExtension() ?: 'jpg');
        $path = $storage->putFileAs(
            'mentoria2/'.$tenantId.'/student-home-banners',
            $file,
            (string) Str::uuid().'.'.$extension,
        );

        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            [
                'student_home_banner_path' => $path,
                'student_home_banner_name' => $file->getClientOriginalName(),
                'updated_at' => now(),
                'created_at' => now(),
            ],
        );

        if ($previousPath && $previousPath !== $path) {
            $storage->delete((string) $previousPath);
        }

        return ['url' => $storage->url($path), 'name' => $file->getClientOriginalName()];
    }

    public function remove(int $tenantId): void
    {
        if (! Schema::hasTable('mentoria2_tenant_settings')) {
            return;
        }

        $path = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('student_home_banner_path');
        $this->cache?->invalidateBranding($tenantId);
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            ['student_home_banner_path' => null, 'student_home_banner_name' => null, 'updated_at' => now(), 'created_at' => now()],
        );

        if ($path) {
            (new StorageService($tenantId))->delete((string) $path);
        }
    }

    /** @return array<int, array<string, mixed>> */
    public function promotionalBannersForTenant(int $tenantId): array
    {
        if (! Schema::hasTable('mentoria2_tenant_settings') || ! Schema::hasColumn('mentoria2_tenant_settings', 'promotional_banners')) {
            return [];
        }

        $raw = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('promotional_banners');
        $banners = is_string($raw) ? json_decode($raw, true) : $raw;

        return is_array($banners) ? array_values($banners) : [];
    }

    /** @param array<int, array<string, mixed>> $banners */
    public function replacePromotionalBanners(int $tenantId, array $banners): array
    {
        $sanitized = array_values(array_map(function (array $item): array {
            return [
                'id' => (string) ($item['id'] ?? (string) Str::uuid()),
                'title' => trim((string) ($item['title'] ?? '')),
                'image_url' => trim((string) ($item['image_url'] ?? '')),
                'link_url' => trim((string) ($item['link_url'] ?? '')),
                'link_text' => trim((string) ($item['link_text'] ?? 'Clique aqui')) ?: 'Clique aqui',
                'target' => in_array(($item['target'] ?? 'all'), ['all', 'contest'], true) ? $item['target'] : 'all',
                'contest_id' => ! empty($item['contest_id']) ? (string) $item['contest_id'] : null,
                'is_active' => (bool) ($item['is_active'] ?? true),
                'updated_at' => now()->toDateTimeString(),
            ];
        }, $banners));

        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            [
                'promotional_banners' => json_encode($sanitized, JSON_UNESCAPED_UNICODE),
                'updated_at' => now(),
                'created_at' => now(),
            ],
        );

        return $sanitized;
    }

    public function uploadPromotionalBannerImage(int $tenantId, UploadedFile $file): array
    {
        $storage = new StorageService($tenantId);
        $extension = strtolower($file->getClientOriginalExtension() ?: 'jpg');
        $stored = $storage->putFileAs(
            'mentoria2/' . $tenantId . '/promotional-banners',
            $file,
            (string) Str::uuid() . '.' . $extension,
        );

        return [
            'url' => $storage->url($stored),
            'name' => $file->getClientOriginalName(),
        ];
    }
}