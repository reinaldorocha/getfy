<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_essays')) {
            Schema::create('mentoria2_essays', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->uuid('contest_id')->nullable();
                $t->string('title');
                $t->text('prompt_theme');
                $t->json('motivating_texts')->nullable();
                $t->json('criteria')->nullable();
                $t->unsignedInteger('min_words')->default(150);
                $t->unsignedInteger('max_words')->default(600);
                $t->decimal('max_score', 5, 2)->default(100.00);
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true);
                $t->timestamps();

                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $t->index(['tenant_id', 'contest_id', 'is_active'], 'mentoria2_essays_contest_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_essay_submissions')) {
            Schema::create('mentoria2_essay_submissions', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('essay_id');
                $t->longText('content');
                $t->unsignedInteger('word_count')->default(0);
                $t->string('status', 30)->default('draft'); // draft, submitted, correcting, graded
                $t->decimal('total_score', 5, 2)->nullable();
                $t->json('criteria_scores')->nullable();
                $t->longText('feedback')->nullable();
                $t->string('corrected_by', 64)->nullable(); // 'ai' or user_id
                $t->timestamp('submitted_at')->nullable();
                $t->timestamp('graded_at')->nullable();
                $t->timestamps();

                $t->foreign('essay_id')->references('id')->on('mentoria2_essays')->cascadeOnDelete();
                $t->index(['tenant_id', 'student_id', 'status'], 'mentoria2_submissions_student_idx');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_essay_submissions');
        Schema::dropIfExists('mentoria2_essays');
    }
};

