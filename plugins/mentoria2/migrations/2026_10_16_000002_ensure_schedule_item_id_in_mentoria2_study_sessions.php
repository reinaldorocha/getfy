<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_study_sessions') && ! Schema::hasColumn('mentoria2_study_sessions', 'schedule_item_id')) {
            Schema::table('mentoria2_study_sessions', function (Blueprint $table) {
                $table->uuid('schedule_item_id')->nullable()->after('subtopic_id')->index();
                $table->foreign('schedule_item_id')->references('id')->on('mentoria2_schedule_items')->nullOnDelete();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_study_sessions') && Schema::hasColumn('mentoria2_study_sessions', 'schedule_item_id')) {
            Schema::table('mentoria2_study_sessions', function (Blueprint $table) {
                $table->dropForeign(['schedule_item_id']);
                $table->dropColumn('schedule_item_id');
            });
        }
    }
};

