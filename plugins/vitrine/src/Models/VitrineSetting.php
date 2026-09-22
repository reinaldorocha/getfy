<?php

namespace Plugins\Vitrine\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class VitrineSetting extends Model
{
    protected $table = 'plugin_vitrine_settings';

    protected $guarded = ['id'];

    public static function resolveWhiteLabel(int $tenantId = 1): array
    {
        try {
            if (Schema::hasTable('white_label_settings')) {
                $row = \Plugins\WhiteLabel\WhiteLabelSetting::where('tenant_id', $tenantId)->first()
                    ?? \Plugins\WhiteLabel\WhiteLabelSetting::whereNull('tenant_id')->first();

                if ($row && is_array($row->data)) {
                    return $row->data;
                }
            }
        } catch (\Throwable) {
            // Silently fallback if white label is not installed
        }

        return [];
    }

    protected $casts = [
        'is_maintenance' => 'boolean',
        'excluded_products' => 'array',
        'payment_gateways' => 'array',
    ];

    public static function defaultSettings(int $tenantId = 1): array
    {
        $wl = static::resolveWhiteLabel($tenantId);
        $appName = $wl['app_name'] ?? 'Prof° Jonathan Rocha';
        $logoUrl = $wl['app_logo_dark'] ?? ($wl['app_logo'] ?? null);
        $faviconUrl = $wl['favicon_url'] ?? null;

        return [
            'tenant_id' => $tenantId,
            'headerTitle' => null,
            'adminTitle' => 'Plataforma Administrativa',
            'adminSubtitle' => 'Gerencie seus cursos',
            'footerText' => '© ' . date('Y') . ' ' . $appName . '. Todos os direitos reservados.',
            'siteName' => $appName,
            'logoUrl' => $logoUrl,
            'faviconUrl' => $faviconUrl,
            'is_maintenance' => false,
            'maintenance_title' => 'Estamos em Manutenção',
            'maintenance_message' => 'Nossa vitrine está temporariamente indisponível para melhorias e atualizações. Voltaremos em breve!',
            'excluded_products' => [],
            'payment_gateways' => [
                'pix' => 'mercadopago',
                'card' => 'pagarme',
                'boleto' => 'mercadopago',
            ],
            'heroTitle' => null,
            'heroSubtitle' => null,
            'heroBadge' => null,
            'heroButtonText' => null,
            'heroBannerUrl' => null,
            'heroBannerType' => 'image',
            'heroImageUrl' => null,
            'aboutTitle' => null,
            'aboutText' => null,
            'aboutImageUrl' => null,
            'catalogSubtitle' => null,
            'approvalsTitle' => null,
            'approvalsSubtitle' => null,
            'approvalsBadge' => 'Resultados Reais',
            'faqTitle' => null,
            'faqSubtitle' => null,
            'primaryColor' => '#dc2626', // Vermelho elegante
            'bgColor' => '#0a0a0a',
            'cardBgColor' => '#121212',
            'titleColor' => '#ffffff',
            'subtitleColor' => '#e2e2e2',
            'titleFontSize' => 'normal',
            'sectionTitleFontSize' => 'normal',
            'buttonStyle' => 'pill',
            'priceLabel' => 'Investimento',
            'globalWhatsapp' => null,
            'seoTitle' => $appName . ' | Vitrine de Cursos',
            'seoDescription' => null,
        ];
    }

    public function setApprovalsBadgeAttribute($value): void
    {
        $this->attributes['approvalsBadge'] = $value ?? 'Resultados Reais';
    }

    public static function forTenant(int $tenantId = 1): self
    {
        $setting = static::where('tenant_id', $tenantId)->first();

        if (! $setting) {
            $defaults = static::defaultSettings($tenantId);
            if (empty($defaults['approvalsBadge'])) {
                $defaults['approvalsBadge'] = 'Resultados Reais';
            }

            try {
                return static::create($defaults);
            } catch (\Throwable $e) {
                try {
                    \Illuminate\Support\Facades\DB::statement('ALTER TABLE plugin_vitrine_settings MODIFY approvalsBadge VARCHAR(255) NULL DEFAULT "Resultados Reais"');
                    return static::create($defaults);
                } catch (\Throwable) {
                    throw $e;
                }
            }
        }

        return $setting;
    }
}
