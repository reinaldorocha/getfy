<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_radar_contests')) {
            Schema::create('mentoria2_radar_contests', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->nullable()->index();
                $t->string('title');
                $t->string('organization', 160);
                $t->string('board', 120)->nullable();
                $t->string('role', 160)->nullable();
                $t->decimal('salary', 12, 2)->nullable();
                $t->unsignedInteger('vacancies')->nullable();
                $t->string('sphere', 30)->default('federal'); // federal, estadual, municipal
                $t->string('state', 2)->nullable();
                $t->string('status', 30)->default('edital_aberto'); // previsto, comissao_formada, banca_definida, edital_aberto, encerrado
                $t->text('gazette_extract')->nullable();
                $t->text('gazette_url')->nullable();
                $t->text('edital_url')->nullable();
                $t->date('registration_end')->nullable();
                $t->date('exam_date')->nullable();
                $t->boolean('is_featured')->default(false);
                $t->boolean('is_active')->default(true);
                $t->timestamps();

                $t->index(['sphere', 'status', 'is_active'], 'mentoria2_radar_filter_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_timer_logs')) {
            Schema::create('mentoria2_timer_logs', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable();
                $t->uuid('subject_id')->nullable();
                $t->uuid('topic_id')->nullable();
                $t->string('type', 30)->default('pomodoro'); // pomodoro, stopwatch, manual_questions, manual_simulado
                $t->unsignedInteger('duration_seconds')->default(0);
                $t->unsignedInteger('questions_count')->default(0);
                $t->unsignedInteger('correct_count')->default(0);
                $t->unsignedInteger('wrong_count')->default(0);
                $t->decimal('score', 5, 2)->nullable();
                $t->boolean('is_cebraspe')->default(false);
                $t->text('notes')->nullable();
                $t->timestamp('recorded_at');
                $t->timestamps();

                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
                $t->index(['tenant_id', 'student_id', 'recorded_at'], 'mentoria2_timer_student_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_gamification_logs')) {
            Schema::create('mentoria2_gamification_logs', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->string('event_type', 40);
                $t->integer('points');
                $t->string('entity_type', 50)->nullable();
                $t->uuid('entity_id')->nullable();
                $t->string('idempotency_key', 120);
                $t->json('metadata')->nullable();
                $t->timestamp('created_at')->useCurrent();

                $t->unique(['tenant_id', 'student_id', 'idempotency_key'], 'mentoria2_xp_idempotency_unique');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_gamification_logs');
        Schema::dropIfExists('mentoria2_timer_logs');
        Schema::dropIfExists('mentoria2_radar_contests');
    }
};

