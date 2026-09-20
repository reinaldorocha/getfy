<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('cjc_content_targets')) {
            Schema::create('cjc_content_targets', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->string('content_type', 40);
                $table->uuid('content_id');
                $table->string('target_type', 24);
                $table->string('target_id', 64)->nullable();
                $table->timestamps();

                $table->index(['tenant_id', 'content_type', 'content_id'], 'cjc_content_target_content_idx');
                $table->index(['tenant_id', 'target_type', 'target_id'], 'cjc_content_target_target_idx');
            });
        }

        if (! Schema::hasTable('cjc_material_progress')) {
            Schema::create('cjc_material_progress', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->uuid('material_id');
                $table->boolean('completed')->default(false);
                $table->timestamp('completed_at')->nullable();
                $table->timestamps();

                $table->foreign('material_id')->references('id')->on('cjc_support_materials')->cascadeOnDelete();
                $table->unique(['tenant_id', 'student_id', 'material_id'], 'cjc_material_progress_unique');
            });
        }

        if (! Schema::hasTable('cjc_exam_configurations')) {
            Schema::create('cjc_exam_configurations', function (Blueprint $table) {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
                $table->uuid('contest_id');
                $table->json('configuration');
                $table->foreignId('updated_by')->constrained('users')->cascadeOnDelete();
                $table->timestamps();

                $table->foreign('contest_id')->references('id')->on('cjc_contests')->cascadeOnDelete();
                $table->unique(['tenant_id', 'student_id', 'contest_id'], 'cjc_exam_config_unique');
            });
        }

        if (! Schema::hasTable('cjc_mock_exam_subject_results')) {
            Schema::create('cjc_mock_exam_subject_results', function (Blueprint $table) {
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

                $table->foreign('mock_exam_id')->references('id')->on('cjc_mock_exams')->cascadeOnDelete();
                $table->foreign('subject_id')->references('id')->on('cjc_subjects')->nullOnDelete();
                $table->index(['tenant_id', 'mock_exam_id'], 'cjc_mock_subject_exam_idx');
            });
        }

        $this->backfillTargets();
    }

    public function down(): void
    {
        Schema::dropIfExists('cjc_mock_exam_subject_results');
        Schema::dropIfExists('cjc_exam_configurations');
        Schema::dropIfExists('cjc_material_progress');
        Schema::dropIfExists('cjc_content_targets');
    }

    private function backfillTargets(): void
    {
        if (! Schema::hasTable('cjc_content_targets')) {
            return;
        }

        if (Schema::hasTable('cjc_question_bank')) {
            DB::table('cjc_question_bank')->orderBy('id')->chunk(200, function ($rows): void {
                foreach ($rows as $row) {
                    $targetType = $row->scope === 'concurso' && $row->contest_id ? 'contest' : 'global';
                    $targetId = $targetType === 'contest' ? (string) $row->contest_id : null;
                    $this->insertTarget((int) $row->tenant_id, 'question', (string) $row->id, $targetType, $targetId);
                }
            });
        }

        if (Schema::hasTable('cjc_flashcard_decks')) {
            DB::table('cjc_flashcard_decks')->orderBy('id')->chunk(200, function ($rows): void {
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

        if (Schema::hasTable('cjc_support_materials')) {
            DB::table('cjc_support_materials')->orderBy('id')->chunk(200, function ($rows): void {
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
        $exists = DB::table('cjc_content_targets')
            ->where('tenant_id', $tenantId)
            ->where('content_type', $contentType)
            ->where('content_id', $contentId)
            ->where('target_type', $targetType)
            ->when($targetId === null, fn ($q) => $q->whereNull('target_id'), fn ($q) => $q->where('target_id', $targetId))
            ->exists();

        if ($exists) {
            return;
        }

        DB::table('cjc_content_targets')->insert([
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
