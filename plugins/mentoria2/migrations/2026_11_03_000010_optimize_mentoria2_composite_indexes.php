<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private function hasIndex(string $table, string $indexName): bool
    {
        $indexes = DB::select("SHOW INDEX FROM `{$table}` WHERE Key_name = ?", [$indexName]);
        return ! empty($indexes);
    }

    public function up(): void
    {
        // 1. mentoria2_study_sessions
        if (Schema::hasTable('mentoria2_study_sessions') && ! $this->hasIndex('mentoria2_study_sessions', 'm2_sessions_tenant_active_student_idx')) {
            Schema::table('mentoria2_study_sessions', function (Blueprint $table): void {
                $table->index(['tenant_id', 'is_active', 'student_id', 'studied_at'], 'm2_sessions_tenant_active_student_idx');
            });
        }

        // 2. mentoria2_question_logs
        if (Schema::hasTable('mentoria2_question_logs') && ! $this->hasIndex('mentoria2_question_logs', 'm2_qlogs_tenant_active_student_idx')) {
            Schema::table('mentoria2_question_logs', function (Blueprint $table): void {
                $table->index(['tenant_id', 'is_active', 'student_id'], 'm2_qlogs_tenant_active_student_idx');
            });
        }

        // 3. mentoria2_scheduled_reviews
        if (Schema::hasTable('mentoria2_scheduled_reviews') && ! $this->hasIndex('mentoria2_scheduled_reviews', 'm2_reviews_tenant_student_status_idx')) {
            Schema::table('mentoria2_scheduled_reviews', function (Blueprint $table): void {
                $table->index(['tenant_id', 'student_id', 'is_active', 'completed', 'next_date'], 'm2_reviews_tenant_student_status_idx');
            });
        }

        // 4. mentoria2_question_answers
        if (Schema::hasTable('mentoria2_question_answers') && ! $this->hasIndex('mentoria2_question_answers', 'm2_qanswers_tenant_student_correct_idx')) {
            Schema::table('mentoria2_question_answers', function (Blueprint $table): void {
                $table->index(['tenant_id', 'student_id', 'is_correct', 'answered_at'], 'm2_qanswers_tenant_student_correct_idx');
            });
        }

        // 5. mentoria2_schedule_items
        if (Schema::hasTable('mentoria2_schedule_items') && ! $this->hasIndex('mentoria2_schedule_items', 'm2_sitems_tenant_schedule_date_idx')) {
            Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
                $table->index(['tenant_id', 'schedule_id', 'planned_date'], 'm2_sitems_tenant_schedule_date_idx');
            });
        }

        // 6. mentoria2_student_contests
        if (Schema::hasTable('mentoria2_student_contests') && ! $this->hasIndex('mentoria2_student_contests', 'm2_scontests_tenant_student_group_idx')) {
            Schema::table('mentoria2_student_contests', function (Blueprint $table): void {
                $table->index(['tenant_id', 'student_id', 'is_active', 'group'], 'm2_scontests_tenant_student_group_idx');
            });
        }

        // 7. mentoria2_notebooks
        if (Schema::hasTable('mentoria2_notebooks') && ! $this->hasIndex('mentoria2_notebooks', 'm2_notebooks_tenant_student_active_idx')) {
            Schema::table('mentoria2_notebooks', function (Blueprint $table): void {
                $table->index(['tenant_id', 'student_id', 'is_active'], 'm2_notebooks_tenant_student_active_idx');
            });
        }

        // 8. mentoria2_question_bank
        if (Schema::hasTable('mentoria2_question_bank') && ! $this->hasIndex('mentoria2_question_bank', 'm2_qbank_tenant_status_created_idx')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table): void {
                $table->index(['tenant_id', 'is_active', 'content_status', 'created_at'], 'm2_qbank_tenant_status_created_idx');
            });
        }
    }

    public function down(): void
    {
        // Safe rollback
    }
};

