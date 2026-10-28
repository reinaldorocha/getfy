<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_student_feedbacks')) {
            Schema::create('mentoria2_student_feedbacks', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('mentor_id')->constrained('users')->cascadeOnDelete();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->text('message');
                $table->string('category', 60)->default('general');
                $table->boolean('is_read')->default(false);
                $table->timestamp('read_at')->nullable();
                $table->text('reply')->nullable();
                $table->timestamp('replied_at')->nullable();
                $table->timestamps();

                $table->index(['tenant_id', 'student_id']);
                $table->index(['tenant_id', 'mentor_id']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_student_feedbacks');
    }
};

