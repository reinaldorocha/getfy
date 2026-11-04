<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_tenant_settings')) {
            Schema::table('mentoria2_tenant_settings', function (Blueprint $table): void {
                if (! Schema::hasColumn('mentoria2_tenant_settings', 'platform_logo_path')) {
                    $table->string('platform_logo_path', 1024)->nullable()->after('student_home_banner_name');
                    $table->string('platform_logo_name', 255)->nullable()->after('platform_logo_path');
                }
                if (! Schema::hasColumn('mentoria2_tenant_settings', 'platform_branding')) {
                    $table->json('platform_branding')->nullable()->after('platform_colors');
                }
            });
        }
    }

    public function down(): void
    {
        // Preserva customizações
    }
};

