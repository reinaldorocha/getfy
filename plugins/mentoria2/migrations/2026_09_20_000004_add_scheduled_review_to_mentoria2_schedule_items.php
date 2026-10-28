<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_schedule_items') || Schema::hasColumn('mentoria2_schedule_items', 'scheduled_review_id')) {
            return;
        }

        Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
            $table->uuid('scheduled_review_id')->nullable()->after('schedule_id');
            $table->unique(['schedule_id', 'scheduled_review_id'], 'mentoria2_schedule_items_schedule_review_unique');
            $table->foreign('scheduled_review_id')->references('id')->on('mentoria2_scheduled_reviews')->nullOnDelete();
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('mentoria2_schedule_items') || ! Schema::hasColumn('mentoria2_schedule_items', 'scheduled_review_id')) {
            return;
        }

        Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
            $table->dropForeign(['scheduled_review_id']);
            $table->dropUnique('mentoria2_schedule_items_schedule_review_unique');
            $table->dropColumn('scheduled_review_id');
        });
    }
};
