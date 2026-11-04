<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_tenant_settings') && ! Schema::hasColumn('mentoria2_tenant_settings', 'platform_colors')) {
            Schema::table('mentoria2_tenant_settings', function (Blueprint $table): void {
                $table->json('platform_colors')->nullable()->after('student_home_banner_name');
            });
        }

        if (Schema::hasTable('mentoria2_contests') && ! Schema::hasColumn('mentoria2_contests', 'fixed_plan_items')) {
            Schema::table('mentoria2_contests', function (Blueprint $table): void {
                $table->json('fixed_plan_items')->nullable()->after('review_intervals');
            });
        }

        if (Schema::hasTable('mentoria2_schedule_items') && ! Schema::hasColumn('mentoria2_schedule_items', 'label')) {
            Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
                $table->string('label', 255)->nullable()->after('schedule_id');
                $table->boolean('is_fixed')->default(false)->after('label')->index();
            });
        }
    }

    public function down(): void
    {
        // Campos novos s?o mantidos para preservar cronogramas e prefer?ncias j? publicados.
    }
};
