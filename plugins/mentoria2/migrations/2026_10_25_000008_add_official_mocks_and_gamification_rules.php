<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('mentoria2_mock_exams', function (Blueprint $table): void {
            if (! Schema::hasColumn('mentoria2_mock_exams', 'official_mock_id')) {
                $table->uuid('official_mock_id')->nullable()->after('id');
                $table->uuid('cohort_id')->nullable()->after('contest_id');
                $table->timestamp('available_from')->nullable()->after('performed_at');
                $table->timestamp('available_until')->nullable()->after('available_from');
                $table->unsignedTinyInteger('max_attempts')->default(1)->after('questions_done');
                $table->index(['tenant_id', 'official_mock_id'], 'mentoria2_official_mock_lookup');
            }
        });

        if (! Schema::hasTable('mentoria2_gamification_rules')) {
            Schema::create('mentoria2_gamification_rules', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('event_type', 60);
                $table->unsignedInteger('points');
                $table->boolean('is_active')->default(true);
                $table->timestamps();
                $table->unique(['tenant_id', 'event_type']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_gamification_rules');
        Schema::table('mentoria2_mock_exams', function (Blueprint $table): void {
            if (Schema::hasColumn('mentoria2_mock_exams', 'official_mock_id')) {
                $table->dropIndex('mentoria2_official_mock_lookup');
                $table->dropColumn(['official_mock_id', 'cohort_id', 'available_from', 'available_until', 'max_attempts']);
            }
        });
    }
};
