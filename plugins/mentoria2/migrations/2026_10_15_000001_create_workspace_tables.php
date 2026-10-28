<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_cohorts')) {
            Schema::create('mentoria2_cohorts', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->string('name'); $t->uuid('contest_id')->nullable(); $t->text('description')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_cohort_members')) {
            Schema::create('mentoria2_cohort_members', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->uuid('cohort_id'); $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->boolean('ranking_opt_in')->default(false); $t->timestamps();
                $t->foreign('cohort_id')->references('id')->on('mentoria2_cohorts')->cascadeOnDelete();
                $t->unique(['cohort_id', 'student_id']);
            });
        }

        if (! Schema::hasTable('mentoria2_goals')) {
            Schema::create('mentoria2_goals', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable(); $t->string('name'); $t->string('metric', 24);
                $t->unsignedInteger('target'); $t->date('starts_on'); $t->date('ends_on');
                $t->boolean('is_challenge')->default(false); $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $t->index(['tenant_id', 'student_id', 'ends_on']);
            });
        }

        if (! Schema::hasTable('mentoria2_preferences')) {
            Schema::create('mentoria2_preferences', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->boolean('tour_completed')->default(false); $t->json('settings')->nullable(); $t->timestamps();
                $t->unique(['tenant_id', 'student_id']);
            });
        }

        if (Schema::hasTable('mentoria2_notebooks') && ! Schema::hasColumn('mentoria2_notebooks', 'shared_with_mentor')) {
            Schema::table('mentoria2_notebooks', function (Blueprint $t) {
                $t->boolean('shared_with_mentor')->default(false);
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_notebooks') && Schema::hasColumn('mentoria2_notebooks', 'shared_with_mentor')) {
            Schema::table('mentoria2_notebooks', fn (Blueprint $t) => $t->dropColumn('shared_with_mentor'));
        }
        foreach (['preferences', 'goals', 'cohort_members', 'cohorts'] as $table) {
            Schema::dropIfExists('mentoria2_'.$table);
        }
    }
};
