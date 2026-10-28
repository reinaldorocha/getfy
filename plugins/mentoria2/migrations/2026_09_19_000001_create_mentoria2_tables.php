<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_products')) {
            Schema::create('mentoria2_products', function (Blueprint $t) {
                $t->char('product_id', 36)->primary();
                $t->unsignedBigInteger('tenant_id')->index();
                $t->boolean('is_active')->default(true)->index();
                $t->json('capabilities')->nullable();
                $t->json('settings')->nullable();
                $t->timestamps();
                $t->foreign('product_id')->references('id')->on('products')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_audit_events')) {
            Schema::create('mentoria2_audit_events', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('actor_id')->constrained('users')->cascadeOnDelete();
                $t->foreignId('student_id')->nullable()->constrained('users')->nullOnDelete();
                $t->string('action', 120); $t->string('entity', 120); $t->uuid('entity_id')->nullable();
                $t->json('details')->nullable(); $t->timestamps();
            });
        }

        if (! Schema::hasTable('mentoria2_contests')) {
            Schema::create('mentoria2_contests', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->string('name'); $t->string('board',160)->nullable(); $t->string('position')->nullable();
                $t->decimal('salary',12,2)->nullable(); $t->date('exam_date')->nullable();
                $t->boolean('pre_notice')->default(false); $t->longText('logo')->nullable();
                $t->string('review_intervals')->default('1,7,30');
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true)->index(); $t->timestamps();
            });
        }

        if (! Schema::hasTable('mentoria2_student_contests')) {
            Schema::create('mentoria2_student_contests', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id'); $t->foreignId('assigned_by')->constrained('users')->cascadeOnDelete();
                $t->string('group',24)->default('foco'); $t->unsignedInteger('position')->default(0);
                $t->boolean('include_in_stats')->default(true); $t->boolean('is_active')->default(true);
                $t->string('result',32)->nullable(); $t->unsignedInteger('ranking')->nullable();
                $t->decimal('final_score',8,2)->nullable(); $t->boolean('appointed')->default(false);
                $t->date('appointment_date')->nullable(); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->cascadeOnDelete();
                $t->unique(['tenant_id','student_id','contest_id']);
            });
        }

        if (! Schema::hasTable('mentoria2_edicts')) {
            Schema::create('mentoria2_edicts', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('contest_id');
                $t->string('name'); $t->string('version',80)->nullable();
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_subjects')) {
            Schema::create('mentoria2_subjects', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('edict_id');
                $t->string('name'); $t->unsignedInteger('position')->default(0); $t->decimal('weight',8,2)->nullable();
                $t->unsignedTinyInteger('relevance')->nullable(); $t->text('notes')->nullable(); $t->json('materials')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('edict_id')->references('id')->on('mentoria2_edicts')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_topics')) {
            Schema::create('mentoria2_topics', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('subject_id');
                $t->string('name',500); $t->unsignedInteger('position')->default(0); $t->decimal('weight',8,2)->nullable();
                $t->unsignedTinyInteger('relevance')->nullable(); $t->text('notes')->nullable(); $t->json('materials')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_subtopics')) {
            Schema::create('mentoria2_subtopics', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('topic_id');
                $t->string('name',500); $t->unsignedInteger('position')->default(0); $t->decimal('weight',8,2)->nullable();
                $t->unsignedTinyInteger('relevance')->nullable(); $t->text('notes')->nullable(); $t->json('materials')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_student_edicts')) {
            Schema::create('mentoria2_student_edicts', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete(); $t->uuid('edict_id');
                $t->foreignId('assigned_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('edict_id')->references('id')->on('mentoria2_edicts')->cascadeOnDelete();
                $t->unique(['tenant_id','student_id','edict_id']);
            });
        }

        if (! Schema::hasTable('mentoria2_edict_progress')) {
            Schema::create('mentoria2_edict_progress', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->string('item_type',24); $t->uuid('item_id'); $t->boolean('studied')->default(false);
                $t->timestamp('completed_at')->nullable(); $t->text('notes')->nullable(); $t->timestamps();
                $t->unique(['tenant_id','student_id','item_type','item_id'],'mentoria2_edict_progress_unique');
            });
        }

        if (! Schema::hasTable('mentoria2_support_materials')) {
            Schema::create('mentoria2_support_materials', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->string('title'); $t->text('description')->nullable(); $t->string('type',24);
                $t->text('url')->nullable(); $t->longText('text')->nullable(); $t->string('scope',24)->default('global');
                $t->uuid('edict_id')->nullable(); $t->string('folder')->default('');
                $t->string('file_name')->nullable(); $t->string('file_path',1024)->nullable(); $t->string('file_mime')->nullable();
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('edict_id')->references('id')->on('mentoria2_edicts')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_notebooks')) {
            Schema::create('mentoria2_notebooks', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->string('title'); $t->string('folder')->default('Geral'); $t->longText('content')->nullable();
                $t->uuid('edict_id')->nullable(); $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable();
                $t->string('color',50)->default('#4f8ef7'); $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('edict_id')->references('id')->on('mentoria2_edicts')->nullOnDelete();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_question_bank')) {
            Schema::create('mentoria2_question_bank', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->string('subject',150); $t->string('topic',150)->nullable(); $t->string('type',30)->default('multipla_escolha');
                $t->text('prompt'); $t->json('alternatives')->nullable(); $t->string('correct_answer');
                $t->text('explanation')->nullable(); $t->string('scope',20)->default('global'); $t->uuid('contest_id')->nullable();
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_question_answers')) {
            Schema::create('mentoria2_question_answers', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete(); $t->uuid('question_id');
                $t->uuid('contest_id')->nullable(); $t->string('answer'); $t->boolean('is_correct');
                $t->timestamp('answered_at'); $t->timestamps();
                $t->foreign('question_id')->references('id')->on('mentoria2_question_bank')->cascadeOnDelete();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_schedules')) {
            Schema::create('mentoria2_schedules', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete(); $t->uuid('contest_id')->nullable();
                $t->string('type',32)->default('manual'); $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->unsignedInteger('version')->default(1); $t->string('state',24)->default('ativo');
                $t->json('configuration')->nullable(); $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_schedule_items')) {
            Schema::create('mentoria2_schedule_items', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('schedule_id');
                $t->date('planned_date')->nullable(); $t->unsignedInteger('cycle_position')->nullable();
                $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->unsignedInteger('duration_minutes')->nullable(); $t->unsignedTinyInteger('priority')->nullable();
                $t->unsignedInteger('position')->default(0); $t->string('status',24)->default('pendente');
                $t->timestamp('completed_at')->nullable(); $t->timestamps();
                $t->foreign('schedule_id')->references('id')->on('mentoria2_schedules')->cascadeOnDelete();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
                $t->foreign('subtopic_id')->references('id')->on('mentoria2_subtopics')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_flashcard_decks')) {
            Schema::create('mentoria2_flashcard_decks', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->nullable()->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable(); $t->uuid('edict_id')->nullable(); $t->uuid('parent_deck_id')->nullable();
                $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->string('owner_type',24)->default('mentor'); $t->string('scope',24)->default('global');
                $t->string('name'); $t->text('description')->nullable(); $t->string('icon',20)->nullable();
                $t->unsignedInteger('position')->default(0); $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $t->foreign('edict_id')->references('id')->on('mentoria2_edicts')->nullOnDelete();
                $t->foreign('parent_deck_id')->references('id')->on('mentoria2_flashcard_decks')->nullOnDelete();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
                $t->foreign('subtopic_id')->references('id')->on('mentoria2_subtopics')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_flashcards')) {
            Schema::create('mentoria2_flashcards', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index(); $t->uuid('deck_id');
                $t->string('type',32)->default('basico'); $t->longText('front'); $t->longText('back')->nullable();
                $t->text('hint')->nullable(); $t->json('alternatives')->nullable(); $t->string('correct_answer')->nullable();
                $t->text('explanation')->nullable(); $t->json('alternative_explanations')->nullable(); $t->json('tags')->nullable();
                $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->foreignId('created_by')->constrained('users')->cascadeOnDelete();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('deck_id')->references('id')->on('mentoria2_flashcard_decks')->cascadeOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
                $t->foreign('subtopic_id')->references('id')->on('mentoria2_subtopics')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_flashcard_reviews')) {
            Schema::create('mentoria2_flashcard_reviews', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete(); $t->uuid('card_id');
                $t->uuid('contest_id')->nullable(); $t->unsignedTinyInteger('quality');
                $t->unsignedInteger('repetitions')->default(0); $t->unsignedInteger('interval_days')->default(0);
                $t->decimal('ease_factor',5,2)->default(2.50); $t->date('next_review'); $t->timestamp('reviewed_at'); $t->timestamps();
                $t->foreign('card_id')->references('id')->on('mentoria2_flashcards')->cascadeOnDelete();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_study_sessions')) {
            Schema::create('mentoria2_study_sessions', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable(); $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->unsignedInteger('seconds'); $t->string('mode',50)->nullable(); $t->text('notes')->nullable(); $t->json('metrics')->nullable();
                $t->string('origin',50)->nullable(); $t->boolean('is_active')->default(true); $t->timestamp('studied_at'); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $t->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $t->foreign('topic_id')->references('id')->on('mentoria2_topics')->nullOnDelete();
                $t->foreign('subtopic_id')->references('id')->on('mentoria2_subtopics')->nullOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_question_logs')) {
            Schema::create('mentoria2_question_logs', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable(); $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->unsignedInteger('solved'); $t->unsignedInteger('correct'); $t->unsignedInteger('wrong');
                $t->string('origin',50)->nullable(); $t->boolean('is_active')->default(true); $t->timestamp('recorded_at'); $t->timestamps();
            });
        }

        if (! Schema::hasTable('mentoria2_scheduled_reviews')) {
            Schema::create('mentoria2_scheduled_reviews', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $t->uuid('contest_id')->nullable(); $t->uuid('subject_id')->nullable(); $t->uuid('topic_id')->nullable(); $t->uuid('subtopic_id')->nullable();
                $t->unsignedInteger('current_cycle')->default(0); $t->date('next_date')->nullable();
                $t->decimal('previous_percentage',5,2)->nullable(); $t->text('notes')->nullable();
                $t->boolean('completed')->default(false); $t->timestamp('completed_at')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
            });
        }

        if (! Schema::hasTable('mentoria2_mock_exams')) {
            Schema::create('mentoria2_mock_exams', function (Blueprint $t) {
                $t->uuid('id')->primary(); $t->unsignedBigInteger('tenant_id')->index();
                $t->foreignId('student_id')->constrained('users')->cascadeOnDelete(); $t->uuid('contest_id')->nullable();
                $t->string('name'); $t->string('type',24)->default('realizado'); $t->date('performed_at')->nullable();
                $t->text('link')->nullable(); $t->text('notes')->nullable(); $t->decimal('percentage',5,2)->nullable();
                $t->unsignedInteger('time_minutes')->nullable(); $t->unsignedInteger('questions_done')->nullable();
                $t->json('result')->nullable(); $t->json('configuration_used')->nullable();
                $t->boolean('is_active')->default(true); $t->timestamps();
                $t->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
            });
        }
    }

    public function down(): void
    {
        foreach ([
            'mentoria2_mock_exams','mentoria2_scheduled_reviews','mentoria2_question_logs','mentoria2_study_sessions',
            'mentoria2_flashcard_reviews','mentoria2_flashcards','mentoria2_flashcard_decks','mentoria2_schedule_items',
            'mentoria2_schedules','mentoria2_question_answers','mentoria2_question_bank','mentoria2_notebooks',
            'mentoria2_support_materials','mentoria2_edict_progress','mentoria2_student_edicts','mentoria2_subtopics',
            'mentoria2_topics','mentoria2_subjects','mentoria2_edicts','mentoria2_student_contests','mentoria2_contests',
            'mentoria2_audit_events','mentoria2_products'
        ] as $table) {
            Schema::dropIfExists($table);
        }
    }
};
