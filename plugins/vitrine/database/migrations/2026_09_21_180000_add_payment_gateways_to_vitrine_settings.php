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
                if (! Schema::hasColumn('plugin_vitrine_settings', 'payment_gateways')) {
                    $table->json('payment_gateways')->nullable()->after('excluded_products');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('plugin_vitrine_settings')) {
            Schema::table('plugin_vitrine_settings', function (Blueprint $table) {
                if (Schema::hasColumn('plugin_vitrine_settings', 'payment_gateways')) {
                    $table->dropColumn('payment_gateways');
                }
            });
        }
    }
};
