<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('plugin_vitrine_settings')) {
            Schema::table('plugin_vitrine_settings', function (Blueprint $table) {
                if (! Schema::hasColumn('plugin_vitrine_settings', 'is_maintenance')) {
                    $table->boolean('is_maintenance')->default(false);
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'maintenance_title')) {
                    $table->string('maintenance_title')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'maintenance_message')) {
                    $table->text('maintenance_message')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'excluded_products')) {
                    $table->json('excluded_products')->nullable();
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('plugin_vitrine_settings')) {
            Schema::table('plugin_vitrine_settings', function (Blueprint $table) {
                $columns = ['is_maintenance', 'maintenance_title', 'maintenance_message', 'excluded_products'];
                foreach ($columns as $column) {
                    if (Schema::hasColumn('plugin_vitrine_settings', $column)) {
                        $table->dropColumn($column);
                    }
                }
            });
        }
    }
};
