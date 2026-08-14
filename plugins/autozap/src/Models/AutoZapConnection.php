<?php

namespace Plugins\AutoZap\Models;

use Illuminate\Database\Eloquent\Model;

class AutoZapConnection extends Model
{
    protected $table = 'autozap_connections';

    protected $fillable = [
        'tenant_id',
        'provider',
        'is_active',
        'credentials',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getCredentialsAttribute($value): array
    {
        if ($value === null || $value === '') {
            return [];
        }
        if (is_array($value)) {
            return $value;
        }
        try {
            $decrypted = \Illuminate\Support\Facades\Crypt::decrypt($value);
            return is_array($decrypted) ? $decrypted : (json_decode($decrypted, true) ?: []);
        } catch (\Illuminate\Contracts\Encryption\DecryptException) {
            // Chave APP_KEY anterior diferente ou payload antigo; retorna vazio para permitir reconfigurar
            return [];
        } catch (\Throwable) {
            $json = json_decode((string) $value, true);
            return is_array($json) ? $json : [];
        }
    }

    public function setCredentialsAttribute($value): void
    {
        if (is_array($value)) {
            $this->attributes['credentials'] = \Illuminate\Support\Facades\Crypt::encrypt($value);
        } elseif ($value === null) {
            $this->attributes['credentials'] = null;
        } else {
            $this->attributes['credentials'] = \Illuminate\Support\Facades\Crypt::encrypt($value);
        }
    }

    public function scopeForTenant($query, ?int $tenantId)
    {
        return $tenantId === null
            ? $query->whereNull('tenant_id')
            : $query->where('tenant_id', $tenantId);
    }

    /**
     * Return credentials for a given provider.
     *
     * Supports legacy format (flat array) and new format:
     * - ['providers' => ['zapi' => [...], 'evolution' => [...], 'menuia' => [...]]]
     *
     * @return array<string, mixed>
     */
    public function credentialsForProvider(?string $provider = null): array
    {
        $provider = $provider ?: ($this->provider ?? null);
        if (! is_string($provider) || $provider === '') {
            return [];
        }

        $cred = $this->credentials;
        if (! is_array($cred) || $cred === []) {
            return [];
        }

        if (isset($cred['providers']) && is_array($cred['providers'])) {
            $by = $cred['providers'];
            $p = $by[$provider] ?? [];
            return is_array($p) ? $p : [];
        }

        // Legacy: credentials are stored flat for the currently active provider.
        return $cred;
    }

    public function hasCredentials(?string $provider = null): bool
    {
        $pcred = $this->credentialsForProvider($provider);
        foreach ($pcred as $v) {
            if (is_string($v) && trim($v) !== '') return true;
            if (is_numeric($v)) return true;
            if (is_bool($v) && $v === true) return true;
        }
        return $pcred !== [];
    }
}

