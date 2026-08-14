<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('autozap_flows', function (Blueprint $table) {
            if (! Schema::hasColumn('autozap_flows', 'all_products')) {
                $table->boolean('all_products')->default(true)->after('product_id');
            }
            if (! Schema::hasColumn('autozap_flows', 'product_ids')) {
                $table->json('product_ids')->nullable()->after('all_products');
            }
        });
    }

    public function down(): void
    {
        Schema::table('autozap_flows', function (Blueprint $table) {
            if (Schema::hasColumn('autozap_flows', 'all_products')) {
                $table->dropColumn('all_products');
            }
            if (Schema::hasColumn('autozap_flows', 'product_ids')) {
                $table->dropColumn('product_ids');
            }
        });
    }
};
