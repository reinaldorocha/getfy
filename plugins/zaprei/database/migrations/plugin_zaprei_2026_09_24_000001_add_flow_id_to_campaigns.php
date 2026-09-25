<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('plugin_zaprei_campaigns', function (Blueprint $table): void {
            if (!Schema::hasColumn('plugin_zaprei_campaigns', 'flow_id')) {
                $table->unsignedBigInteger('flow_id')->nullable()->after('audience_filter');
            }
        });
    }

    public function down(): void
    {
        Schema::table('plugin_zaprei_campaigns', function (Blueprint $table): void {
            if (Schema::hasColumn('plugin_zaprei_campaigns', 'flow_id')) {
                $table->dropColumn('flow_id');
            }
        });
    }
};
