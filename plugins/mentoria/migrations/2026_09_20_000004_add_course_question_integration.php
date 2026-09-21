<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria_lesson_questions')) {
            Schema::create('mentoria_lesson_questions', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('product_id', 36)->index();
                $table->unsignedBigInteger('member_lesson_id')->index();
                $table->uuid('question_id')->index();
                $table->unsignedInteger('position')->default(0);
                $table->timestamps();

                $table->unique(['tenant_id', 'member_lesson_id', 'question_id'], 'mentoria_lesson_question_unique');
                $table->foreign('question_id')->references('id')->on('mentoria_question_bank')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria_lesson_question_attempts')) {
            Schema::create('mentoria_lesson_question_attempts', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->string('product_id', 36)->index();
                $table->unsignedBigInteger('member_lesson_id')->index();
                $table->uuid('question_id')->index();
                $table->text('answer');
                $table->boolean('is_correct');
                $table->timestamp('answered_at')->index();
                $table->timestamps();

                $table->foreign('question_id')->references('id')->on('mentoria_question_bank')->cascadeOnDelete();
                $table->index(['tenant_id', 'student_id', 'member_lesson_id'], 'mentoria_lesson_attempt_lookup');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria_lesson_question_attempts');
        Schema::dropIfExists('mentoria_lesson_questions');
    }
};
