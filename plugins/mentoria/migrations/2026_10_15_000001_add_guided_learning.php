<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('mentoria_learning_profiles', function (Blueprint $t) {
            $t->uuid('id')->primary();
            $t->unsignedBigInteger('tenant_id');
            $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $t->uuid('contest_id');
            $t->string('timezone', 80)->default('America/Fortaleza');
            $t->json('diagnostic')->nullable();
            $t->unsignedInteger('revision')->default(1);
            $t->timestamps();
            $t->foreign('contest_id')->references('id')->on('mentoria_contests')->cascadeOnDelete();
            $t->unique(['tenant_id', 'student_id', 'contest_id'], 'mentoria_learning_profile_unique');
        });
        Schema::create('mentoria_mentor_notes', function (Blueprint $t) {
            $t->uuid('id')->primary();
            $t->unsignedBigInteger('tenant_id');
            $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $t->uuid('contest_id');
            $t->foreignId('actor_id')->constrained('users')->cascadeOnDelete();
            $t->string('kind', 24); // guidance or adjustment
            $t->text('message');
            $t->string('status', 24)->default('open');
            $t->text('resolution')->nullable();
            $t->timestamp('resolved_at')->nullable();
            $t->timestamps();
            $t->index(['tenant_id', 'student_id', 'contest_id'], 'mentoria_mentor_note_scope');
        });
        Schema::create('mentoria_learning_events', function (Blueprint $t) {
            $t->uuid('id')->primary();
            $t->unsignedBigInteger('tenant_id');
            $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $t->uuid('contest_id');
            $t->string('event_key', 160);
            $t->string('rule', 60);
            $t->unsignedSmallInteger('xp')->default(0);
            $t->date('study_date');
            $t->uuid('answer_id')->nullable();
            $t->timestamps();
            $t->unique(['tenant_id', 'student_id', 'contest_id', 'event_key'], 'mentoria_learning_event_unique');
            $t->index(['tenant_id', 'student_id', 'contest_id', 'study_date'], 'mentoria_learning_event_date');
        });
        Schema::create('mentoria_execution_receipts', function (Blueprint $t) {
            $t->uuid('id')->primary();
            $t->unsignedBigInteger('tenant_id');
            $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $t->uuid('schedule_item_id');
            $t->uuid('request_id');
            $t->string('payload_hash', 64);
            $t->uuid('session_id');
            $t->timestamps();
            $t->unique(['tenant_id', 'student_id', 'request_id'], 'mentoria_execution_request_unique');
        });
        Schema::table('mentoria_question_answers', function (Blueprint $t) {
            $t->foreignId('actor_id')->nullable()->constrained('users')->nullOnDelete();
            $t->boolean('is_student_evidence')->default(true);
        });
        Schema::table('mentoria_schedules', function (Blueprint $t) {
            $t->string('algorithm_version', 40)->nullable();
            $t->text('change_reason')->nullable();
            $t->timestamp('published_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('mentoria_question_answers', function (Blueprint $t) {
            $t->dropForeign(['actor_id']);
            $t->dropColumn(['actor_id', 'is_student_evidence']);
        });
        Schema::table('mentoria_schedules', function (Blueprint $t) {
            $t->dropColumn(['algorithm_version', 'change_reason', 'published_at']);
        });
        Schema::dropIfExists('mentoria_execution_receipts');
        Schema::dropIfExists('mentoria_learning_events');
        Schema::dropIfExists('mentoria_mentor_notes');
        Schema::dropIfExists('mentoria_learning_profiles');
    }
};
