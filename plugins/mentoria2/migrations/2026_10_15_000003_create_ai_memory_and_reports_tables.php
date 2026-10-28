<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_ai_memory')) {
            Schema::create('mentoria2_ai_memory', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->json('cognitive_profile')->nullable();
                $t->text('mentor_guidance')->nullable();
                $t->timestamp('last_analyzed_at')->nullable();
                $t->timestamps();

                $t->unique(['tenant_id', 'student_id'], 'mentoria2_ai_memory_student_unique');
            });
        }

        if (! Schema::hasTable('mentoria2_question_reports')) {
            Schema::create('mentoria2_question_reports', function (Blueprint $t) {
                $t->uuid('id')->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('question_id');
                $t->string('reason', 64);
                $t->text('details');
                $t->string('status', 30)->default('pendente'); // pendente, em_analise, deferido, indeferido
                $t->text('mentor_resolution')->nullable();
                $t->foreignId('resolved_by')->nullable()->constrained('users')->nullOnDelete();
                $t->timestamp('resolved_at')->nullable();
                $t->timestamps();

                $t->foreign('question_id')->references('id')->on('mentoria2_question_bank')->cascadeOnDelete();
                $t->index(['tenant_id', 'status', 'created_at'], 'mentoria2_qreports_status_idx');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_question_reports');
        Schema::dropIfExists('mentoria2_ai_memory');
    }
};

