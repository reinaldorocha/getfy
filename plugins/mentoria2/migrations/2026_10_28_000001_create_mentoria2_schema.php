<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

/**
 * Schema inicial completo da Mentoria 2.0.
 *
 * Esta migration consolida as migrations incrementais anteriores para que uma
 * instala??o nova da primeira vers?o de produ??o crie o schema final de uma vez.
 */
return new class extends Migration
{
    public function up(): void
    {
        // Consolidado de 2026_09_19_000001_create_mentoria2_tables.php
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
                $t->string('name'); $t->string('organization',160)->nullable(); $t->string('board',160)->nullable(); $t->string('position')->nullable();
                $t->string('phase',30)->default('Publicado');
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

        // Consolidado de 2026_09_20_000002_complete_Mentoria2_features.php
        if (! Schema::hasTable('mentoria2_content_targets')) {
            Schema::create('mentoria2_content_targets', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('content_type', 40);
                $table->uuid('content_id');
                $table->string('target_type', 24);
                $table->string('target_id', 64)->nullable();
                $table->timestamps();

                $table->index(['tenant_id', 'content_type', 'content_id'], 'mentoria2_content_target_content_idx');
                $table->index(['tenant_id', 'target_type', 'target_id'], 'mentoria2_content_target_target_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_material_progress')) {
            Schema::create('mentoria2_material_progress', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->uuid('material_id');
                $table->boolean('completed')->default(false);
                $table->timestamp('completed_at')->nullable();
                $table->timestamps();

                $table->foreign('material_id')->references('id')->on('mentoria2_support_materials')->cascadeOnDelete();
                $table->unique(['tenant_id', 'student_id', 'material_id'], 'mentoria2_material_progress_unique');
            });
        }

        if (! Schema::hasTable('mentoria2_exam_configurations')) {
            Schema::create('mentoria2_exam_configurations', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->uuid('contest_id');
                $table->json('configuration');
                $table->foreignId('updated_by')->constrained('users')->cascadeOnDelete();
                $table->timestamps();

                $table->foreign('contest_id')->references('id')->on('mentoria2_contests')->cascadeOnDelete();
                $table->unique(['tenant_id', 'student_id', 'contest_id'], 'mentoria2_exam_config_unique');
            });
        }

        if (! Schema::hasTable('mentoria2_mock_exam_subject_results')) {
            Schema::create('mentoria2_mock_exam_subject_results', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->uuid('mock_exam_id');
                $table->uuid('subject_id')->nullable();
                $table->string('name');
                $table->unsignedInteger('questions')->nullable();
                $table->unsignedInteger('correct')->nullable();
                $table->unsignedInteger('wrong')->nullable();
                $table->unsignedInteger('blank')->nullable();
                $table->decimal('percentage', 5, 2)->nullable();
                $table->decimal('points', 10, 2)->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamps();

                $table->foreign('mock_exam_id')->references('id')->on('mentoria2_mock_exams')->cascadeOnDelete();
                $table->foreign('subject_id')->references('id')->on('mentoria2_subjects')->nullOnDelete();
                $table->index(['tenant_id', 'mock_exam_id'], 'mentoria2_mock_subject_exam_idx');
            });
        }

        $this->backfillTargets();

        // Consolidado de 2026_09_20_000003_add_schedule_item_to_mentoria_study_sessions.php
        if (Schema::hasTable('mentoria2_study_sessions') && ! Schema::hasColumn('mentoria2_study_sessions', 'schedule_item_id')) {
            Schema::table('mentoria2_study_sessions', function (Blueprint $table) {
                $table->uuid('schedule_item_id')->nullable()->after('subtopic_id')->index();
                $table->foreign('schedule_item_id')->references('id')->on('mentoria2_schedule_items')->nullOnDelete();
            });
        }

        // Consolidado de 2026_09_20_000004_add_course_question_integration.php
        if (! Schema::hasTable('mentoria2_lesson_questions')) {
            Schema::create('mentoria2_lesson_questions', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('product_id', 36)->index();
                $table->unsignedBigInteger('member_lesson_id')->index();
                $table->uuid('question_id')->index();
                $table->unsignedInteger('position')->default(0);
                $table->timestamps();

                $table->unique(['tenant_id', 'member_lesson_id', 'question_id'], 'mentoria2_lesson_question_unique');
                $table->foreign('question_id')->references('id')->on('mentoria2_question_bank')->cascadeOnDelete();
            });
        }

        if (! Schema::hasTable('mentoria2_lesson_question_attempts')) {
            Schema::create('mentoria2_lesson_question_attempts', function (Blueprint $table) {
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

                $table->foreign('question_id')->references('id')->on('mentoria2_question_bank')->cascadeOnDelete();
                $table->index(['tenant_id', 'student_id', 'member_lesson_id'], 'mentoria2_lesson_attempt_lookup');
            });
        }

        // Consolidado de 2026_09_20_000004_add_scheduled_review_to_mentoria2_schedule_items.php
        if (! Schema::hasTable('mentoria2_schedule_items') || Schema::hasColumn('mentoria2_schedule_items', 'scheduled_review_id')) {
            return;
        }

        Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
            $table->uuid('scheduled_review_id')->nullable()->after('schedule_id');
            $table->unique(['schedule_id', 'scheduled_review_id'], 'mentoria2_schedule_items_schedule_review_unique');
            $table->foreign('scheduled_review_id')->references('id')->on('mentoria2_scheduled_reviews')->nullOnDelete();
        });

        // Consolidado de 2026_10_15_000001_create_workspace_tables.php
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

        // Consolidado de 2026_10_15_000002_create_essay_and_discursive_tables.php
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

        // Consolidado de 2026_10_15_000003_create_ai_memory_and_reports_tables.php
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

        // Consolidado de 2026_10_15_000004_create_radar_contests_and_timer_logs_tables.php
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

        // Consolidado de 2026_10_16_000001_create_mentoria2_student_feedbacks_table.php
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

        // Consolidado de 2026_10_16_000002_ensure_schedule_item_id_in_mentoria2_study_sessions.php
        if (Schema::hasTable('mentoria2_study_sessions') && ! Schema::hasColumn('mentoria2_study_sessions', 'schedule_item_id')) {
            Schema::table('mentoria2_study_sessions', function (Blueprint $table) {
                $table->uuid('schedule_item_id')->nullable()->after('subtopic_id')->index();
                $table->foreign('schedule_item_id')->references('id')->on('mentoria2_schedule_items')->nullOnDelete();
            });
        }

        // Consolidado de 2026_10_16_000003_add_difficulty_to_mentoria2_question_bank.php
        if (Schema::hasTable('mentoria2_question_bank') && ! Schema::hasColumn('mentoria2_question_bank', 'difficulty')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table) {
                $table->string('difficulty', 30)->nullable()->default('Média')->after('topic');
            });
        }

        // Consolidado de 2026_10_25_000005_create_mock_exam_attempts_table.php
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

        // Consolidado de 2026_10_25_000006_add_content_curation_columns.php
        foreach (['mentoria2_question_bank', 'mentoria2_flashcard_decks', 'mentoria2_flashcards'] as $tableName) {
            if (! Schema::hasTable($tableName) || Schema::hasColumn($tableName, 'content_status')) {
                continue;
            }

            Schema::table($tableName, function (Blueprint $table): void {
                $table->string('content_status', 24)->default('publicado')->index();
                $table->string('content_source', 80)->nullable();
                $table->unsignedTinyInteger('content_confidence')->nullable();
                $table->text('review_note')->nullable();
                $table->foreignId('reviewed_by')->nullable()->constrained('users')->nullOnDelete();
                $table->timestamp('reviewed_at')->nullable();
            });

            DB::table($tableName)->whereNull('content_status')->update(['content_status' => 'publicado']);
        }

        // Consolidado de 2026_10_25_000007_create_mentoria2_notifications_table.php
        if (! Schema::hasTable('mentoria2_notifications')) {
            Schema::create('mentoria2_notifications', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->string('type', 60);
                $table->string('title', 180);
                $table->text('message')->nullable();
                $table->string('action_screen', 60)->nullable();
                $table->string('entity_type', 60)->nullable();
                $table->uuid('entity_id')->nullable();
                $table->string('deduplication_key', 160)->nullable();
                $table->json('metadata')->nullable();
                $table->timestamp('read_at')->nullable();
                $table->timestamps();
                $table->index(['tenant_id', 'student_id', 'read_at'], 'mentoria2_notification_inbox_idx');
                $table->unique(['tenant_id', 'student_id', 'deduplication_key'], 'mentoria2_notification_dedup_unique');
            });
        }

        // Consolidado de 2026_10_25_000008_add_official_mocks_and_gamification_rules.php
        Schema::table('mentoria2_mock_exams', function (Blueprint $table): void {
            if (! Schema::hasColumn('mentoria2_mock_exams', 'official_mock_id')) {
                $table->uuid('official_mock_id')->nullable()->after('id');
                $table->uuid('cohort_id')->nullable()->after('contest_id');
                $table->timestamp('available_from')->nullable()->after('performed_at');
                $table->timestamp('available_until')->nullable()->after('available_from');
                $table->unsignedTinyInteger('max_attempts')->default(1)->after('questions_done');
                $table->index(['tenant_id', 'official_mock_id'], 'mentoria2_official_mock_lookup');
            }
        });

        if (! Schema::hasTable('mentoria2_gamification_rules')) {
            Schema::create('mentoria2_gamification_rules', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('event_type', 60);
                $table->unsignedInteger('points');
                $table->boolean('is_active')->default(true);
                $table->timestamps();
                $table->unique(['tenant_id', 'event_type']);
            });
        }

        // Consolidado de 2026_10_26_000009_create_mentoria2_tenant_settings_table.php
        if (! Schema::hasTable('mentoria2_tenant_settings')) {
            Schema::create('mentoria2_tenant_settings', function (Blueprint $table): void {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->unique();
                $table->string('student_home_banner_path', 1024)->nullable();
                $table->string('student_home_banner_name', 255)->nullable();
                $table->timestamps();
            });
        }

    }

    public function down(): void
    {
        Schema::disableForeignKeyConstraints();

        foreach ([
            'mentoria2_tenant_settings',
            'mentoria2_gamification_rules',
            'mentoria2_notifications',
            'mentoria2_mock_exam_attempts',
            'mentoria2_student_feedbacks',
            'mentoria2_question_reports',
            'mentoria2_ai_memory',
            'mentoria2_gamification_logs',
            'mentoria2_timer_logs',
            'mentoria2_radar_contests',
            'mentoria2_essay_submissions',
            'mentoria2_essays',
            'mentoria2_lesson_question_attempts',
            'mentoria2_lesson_questions',
            'mentoria2_mock_exam_subject_results',
            'mentoria2_exam_configurations',
            'mentoria2_material_progress',
            'mentoria2_content_targets',
            'mentoria2_mock_exams',
            'mentoria2_scheduled_reviews',
            'mentoria2_question_logs',
            'mentoria2_study_sessions',
            'mentoria2_flashcard_reviews',
            'mentoria2_flashcards',
            'mentoria2_flashcard_decks',
            'mentoria2_schedule_items',
            'mentoria2_schedules',
            'mentoria2_question_answers',
            'mentoria2_question_bank',
            'mentoria2_notebooks',
            'mentoria2_support_materials',
            'mentoria2_edict_progress',
            'mentoria2_student_edicts',
            'mentoria2_subtopics',
            'mentoria2_topics',
            'mentoria2_subjects',
            'mentoria2_edicts',
            'mentoria2_student_contests',
            'mentoria2_contests',
            'mentoria2_audit_events',
            'mentoria2_products',
            'mentoria2_preferences',
            'mentoria2_goals',
            'mentoria2_cohort_members',
            'mentoria2_cohorts',
        ] as $table) {
            Schema::dropIfExists($table);
        }

        Schema::enableForeignKeyConstraints();
    }

    private function backfillTargets(): void
    {
        if (! Schema::hasTable('mentoria2_content_targets')) {
            return;
        }

        if (Schema::hasTable('mentoria2_question_bank')) {
            DB::table('mentoria2_question_bank')->orderBy('id')->chunk(200, function ($rows): void {
                foreach ($rows as $row) {
                    $targetType = $row->scope === 'concurso' && $row->contest_id ? 'contest' : 'global';
                    $targetId = $targetType === 'contest' ? (string) $row->contest_id : null;
                    $this->insertTarget((int) $row->tenant_id, 'question', (string) $row->id, $targetType, $targetId);
                }
            });
        }

        if (Schema::hasTable('mentoria2_flashcard_decks')) {
            DB::table('mentoria2_flashcard_decks')->orderBy('id')->chunk(200, function ($rows): void {
                foreach ($rows as $row) {
                    if ($row->student_id) {
                        $this->insertTarget((int) $row->tenant_id, 'flashcard_deck', (string) $row->id, 'student', (string) $row->student_id);
                    } elseif ($row->scope === 'edital' && $row->edict_id) {
                        $this->insertTarget((int) $row->tenant_id, 'flashcard_deck', (string) $row->id, 'edict', (string) $row->edict_id);
                    } elseif ($row->contest_id) {
                        $this->insertTarget((int) $row->tenant_id, 'flashcard_deck', (string) $row->id, 'contest', (string) $row->contest_id);
                    } else {
                        $this->insertTarget((int) $row->tenant_id, 'flashcard_deck', (string) $row->id, 'global', null);
                    }
                }
            });
        }

        if (Schema::hasTable('mentoria2_support_materials')) {
            DB::table('mentoria2_support_materials')->orderBy('id')->chunk(200, function ($rows): void {
                foreach ($rows as $row) {
                    if ($row->scope === 'edital' && $row->edict_id) {
                        $this->insertTarget((int) $row->tenant_id, 'material', (string) $row->id, 'edict', (string) $row->edict_id);
                    } else {
                        $this->insertTarget((int) $row->tenant_id, 'material', (string) $row->id, 'global', null);
                    }
                }
            });
        }
    }

    private function insertTarget(int $tenantId, string $contentType, string $contentId, string $targetType, ?string $targetId): void
    {
        $exists = DB::table('mentoria2_content_targets')
            ->where('tenant_id', $tenantId)
            ->where('content_type', $contentType)
            ->where('content_id', $contentId)
            ->where('target_type', $targetType)
            ->when($targetId === null, fn ($q) => $q->whereNull('target_id'), fn ($q) => $q->where('target_id', $targetId))
            ->exists();

        if ($exists) {
            return;
        }

        DB::table('mentoria2_content_targets')->insert([
            'id' => (string) Str::uuid(),
            'tenant_id' => $tenantId,
            'content_type' => $contentType,
            'content_id' => $contentId,
            'target_type' => $targetType,
            'target_id' => $targetId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
};
