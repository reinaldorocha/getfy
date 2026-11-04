<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_tenant_settings') && ! Schema::hasColumn('mentoria2_tenant_settings', 'promotional_banners')) {
            Schema::table('mentoria2_tenant_settings', function (Blueprint $table): void {
                $table->json('promotional_banners')->nullable()->after('platform_branding');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_tenant_settings') && Schema::hasColumn('mentoria2_tenant_settings', 'promotional_banners')) {
            Schema::table('mentoria2_tenant_settings', function (Blueprint $table): void {
                $table->dropColumn('promotional_banners');
            });
        }
    }
};

