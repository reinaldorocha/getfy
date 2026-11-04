<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Throwable;

class MentoriaCacheService
{
    private const DEFAULT_TTL = 3600; // 1 hour

    /**
     * Safely executes Cache::remember with fallback to callback on cache error.
     */
    public function remember(string $key, int $ttlSeconds, Closure $callback): mixed
    {
        try {
            return Cache::remember($key, $ttlSeconds, $callback);
        } catch (Throwable $e) {
            Log::warning("MentoriaCacheService failed to read/write key [{$key}]: " . $e->getMessage());
            return $callback();
        }
    }

    /**
     * Safely forgets a cache key.
     */
    public function forget(string $key): bool
    {
        try {
            return Cache::forget($key);
        } catch (Throwable $e) {
            Log::warning("MentoriaCacheService failed to forget key [{$key}]: " . $e->getMessage());
            return false;
        }
    }

    /* -------------------------------------------------------------
     | Branding & Platform Visual Settings
     * ------------------------------------------------------------- */
    public function rememberBranding(int $tenantId, Closure $callback): array
    {
        return $this->remember("mentoria2:branding:tenant:{$tenantId}", self::DEFAULT_TTL, $callback);
    }

    public function rememberColors(int $tenantId, Closure $callback): array
    {
        return $this->remember("mentoria2:colors:tenant:{$tenantId}", self::DEFAULT_TTL, $callback);
    }

    public function rememberLogo(int $tenantId, Closure $callback): ?string
    {
        return $this->remember("mentoria2:logo:tenant:{$tenantId}", self::DEFAULT_TTL, $callback);
    }

    public function rememberBanner(int $tenantId, Closure $callback): ?array
    {
        return $this->remember("mentoria2:banner:tenant:{$tenantId}", self::DEFAULT_TTL, $callback);
    }

    public function invalidateBranding(int $tenantId): void
    {
        $this->forget("mentoria2:branding:tenant:{$tenantId}");
        $this->forget("mentoria2:colors:tenant:{$tenantId}");
        $this->forget("mentoria2:logo:tenant:{$tenantId}");
        $this->forget("mentoria2:banner:tenant:{$tenantId}");
    }

    /* -------------------------------------------------------------
     | Radar Catalog & Sources
     * ------------------------------------------------------------- */
    public function rememberRadarSources(int $tenantId, Closure $callback): mixed
    {
        return $this->remember("mentoria2:radar_sources:tenant:{$tenantId}", 600, $callback);
    }

    public function rememberRadarCatalog(int $tenantId, string $queryHash, Closure $callback): mixed
    {
        $version = (int) Cache::get("mentoria2:radar_version:tenant:{$tenantId}", 1);
        return $this->remember("mentoria2:radar_catalog:v{$version}:tenant:{$tenantId}:{$queryHash}", 600, $callback);
    }

    public function invalidateRadar(int $tenantId): void
    {
        $this->forget("mentoria2:radar_sources:tenant:{$tenantId}");
        $version = (int) Cache::get("mentoria2:radar_version:tenant:{$tenantId}", 1);
        try {
            Cache::put("mentoria2:radar_version:tenant:{$tenantId}", $version + 1, 86400 * 30);
        } catch (Throwable) {
            // Safe fallback
        }
    }

    /* -------------------------------------------------------------
     | Syllabus / Edital Verticalizado
     * ------------------------------------------------------------- */
    public function rememberSyllabus(int $tenantId, string $contestId, Closure $callback): mixed
    {
        return $this->remember("mentoria2:syllabus:tenant:{$tenantId}:contest:{$contestId}", 1800, $callback);
    }

    public function invalidateSyllabus(int $tenantId, string $contestId): void
    {
        $this->forget("mentoria2:syllabus:tenant:{$tenantId}:contest:{$contestId}");
    }
}

