<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_mock_exam_attempts')) {
            Schema::create('mentoria2_mock_exam_attempts', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->uuid('mock_exam_id');
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->string('status', 24)->default('em_andamento')->index();
                $table->json('question_snapshot');
                $table->json('answers')->nullable();
                $table->unsignedInteger('elapsed_seconds')->default(0);
                $table->decimal('percentage', 5, 2)->nullable();
                $table->timestamp('started_at');
                $table->timestamp('finished_at')->nullable();
                $table->timestamps();

                $table->foreign('mock_exam_id')->references('id')->on('mentoria2_mock_exams')->cascadeOnDelete();
                $table->index(['tenant_id', 'student_id', 'mock_exam_id', 'status'], 'mentoria2_mock_attempt_lookup');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_mock_exam_attempts');
    }
};
