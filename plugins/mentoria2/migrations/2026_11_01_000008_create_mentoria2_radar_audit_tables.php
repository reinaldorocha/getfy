<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_radar_sources')) {
            Schema::create('mentoria2_radar_sources', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->string('code', 80);
                $table->string('label', 160);
                $table->string('kind', 40); // querido_diario, official_gazette, board, manual
                $table->text('origin_url')->nullable();
                $table->text('api_base_url')->nullable();
                $table->json('territories')->nullable();
                $table->json('career_tracks')->nullable();
                $table->json('settings')->nullable();
                $table->boolean('is_active')->default(false);
                $table->timestamp('last_synced_at')->nullable();
                $table->string('last_status', 30)->nullable();
                $table->text('last_error')->nullable();
                $table->timestamps();

                $table->unique(['tenant_id', 'code'], 'm2_radar_sources_tenant_code_unique');
                $table->index(['is_active', 'kind'], 'm2_radar_sources_active_kind_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_radar_publications')) {
            Schema::create('mentoria2_radar_publications', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->uuid('source_id');
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->string('external_id', 191)->nullable();
                $table->text('canonical_url');
                $table->string('title')->nullable();
                $table->timestamp('published_at')->nullable();
                $table->longText('raw_excerpt')->nullable();
                $table->json('raw_payload')->nullable();
                $table->char('content_hash', 64);
                $table->string('processing_status', 32)->default('collected');
                $table->json('classification')->nullable();
                $table->decimal('classification_confidence', 5, 4)->nullable();
                $table->text('processing_error')->nullable();
                $table->timestamp('fetched_at');
                $table->timestamps();

                $table->foreign('source_id')->references('id')->on('mentoria2_radar_sources')->cascadeOnDelete();
                $table->unique(['source_id', 'external_id'], 'm2_radar_publications_source_external_unique');
                $table->unique(['source_id', 'content_hash'], 'm2_radar_publications_source_hash_unique');
                $table->index(['processing_status', 'published_at'], 'm2_radar_publications_status_date_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_radar_sync_runs')) {
            Schema::create('mentoria2_radar_sync_runs', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->uuid('source_id')->nullable();
                $table->string('status', 30)->default('running');
                $table->unsignedInteger('fetched_count')->default(0);
                $table->unsignedInteger('created_count')->default(0);
                $table->unsignedInteger('duplicate_count')->default(0);
                $table->unsignedInteger('candidate_count')->default(0);
                $table->text('error')->nullable();
                $table->timestamp('started_at');
                $table->timestamp('finished_at')->nullable();
                $table->timestamps();

                $table->foreign('source_id')->references('id')->on('mentoria2_radar_sources')->nullOnDelete();
                $table->index(['status', 'started_at'], 'm2_radar_sync_runs_status_started_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_radar_follows')) {
            Schema::create('mentoria2_radar_follows', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->unsignedBigInteger('student_id');
                $table->uuid('radar_contest_id');
                $table->boolean('notifications_enabled')->default(true);
                $table->timestamps();

                $table->foreign('student_id')->references('id')->on('users')->cascadeOnDelete();
                $table->foreign('radar_contest_id')->references('id')->on('mentoria2_radar_contests')->cascadeOnDelete();
                $table->unique(['tenant_id', 'student_id', 'radar_contest_id'], 'm2_radar_follows_unique');
                $table->index(['tenant_id', 'radar_contest_id'], 'm2_radar_follows_contest_idx');
            });
        }

        if (! Schema::hasTable('mentoria2_radar_review_decisions')) {
            Schema::create('mentoria2_radar_review_decisions', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->uuid('radar_contest_id');
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->unsignedBigInteger('reviewed_by')->nullable();
                $table->string('decision', 32); // published, review_required, rejected, archived
                $table->text('note')->nullable();
                $table->timestamp('created_at')->useCurrent();

                $table->foreign('radar_contest_id')->references('id')->on('mentoria2_radar_contests')->cascadeOnDelete();
                $table->foreign('reviewed_by')->references('id')->on('users')->nullOnDelete();
                $table->index(['radar_contest_id', 'created_at'], 'm2_radar_review_history_idx');
            });
        }

        $addContestColumn = static function (string $column, \Closure $definition): void {
            if (Schema::hasColumn('mentoria2_radar_contests', $column)) return;
            Schema::table('mentoria2_radar_contests', static function (Blueprint $table) use ($definition): void { $definition($table); });
        };
        $addContestColumn('source_publication_id', static function (Blueprint $table): void {
            $table->uuid('source_publication_id')->nullable()->after('tenant_id');
            $table->foreign('source_publication_id', 'm2_radar_contest_publication_fk')->references('id')->on('mentoria2_radar_publications')->nullOnDelete();
        });
        $addContestColumn('career_track', static fn (Blueprint $table) => $table->string('career_track', 60)->nullable()->after('role'));
        $addContestColumn('career_family', static fn (Blueprint $table) => $table->string('career_family', 40)->default('policial')->after('career_track'));
        $addContestColumn('verification_status', static fn (Blueprint $table) => $table->string('verification_status', 32)->default('review_required')->after('status'));
        $addContestColumn('origin_kind', static fn (Blueprint $table) => $table->string('origin_kind', 32)->default('legacy')->after('verification_status'));
        $addContestColumn('source_label', static fn (Blueprint $table) => $table->string('source_label', 160)->nullable()->after('origin_kind'));
        $addContestColumn('published_at', static fn (Blueprint $table) => $table->timestamp('published_at')->nullable()->after('edital_url'));
        $addContestColumn('last_source_at', static fn (Blueprint $table) => $table->timestamp('last_source_at')->nullable()->after('published_at'));
        $addContestColumn('summary', static fn (Blueprint $table) => $table->text('summary')->nullable()->after('gazette_extract'));
        $addContestColumn('verified_at', static fn (Blueprint $table) => $table->timestamp('verified_at')->nullable()->after('last_source_at'));
        $addContestColumn('verified_by', static function (Blueprint $table): void {
            $table->unsignedBigInteger('verified_by')->nullable()->after('verified_at');
            $table->foreign('verified_by', 'm2_radar_contest_verified_by_fk')->references('id')->on('users')->nullOnDelete();
        });
        if (! Schema::hasIndex('mentoria2_radar_contests', 'm2_radar_visibility_career_idx')) {
            Schema::table('mentoria2_radar_contests', static fn (Blueprint $table) => $table->index(['verification_status', 'career_track', 'is_active'], 'm2_radar_visibility_career_idx'));
        }
    }

    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('mentoria2_radar_review_decisions');
        Schema::dropIfExists('mentoria2_radar_follows');
        Schema::dropIfExists('mentoria2_radar_sync_runs');
        Schema::dropIfExists('mentoria2_radar_publications');
        Schema::dropIfExists('mentoria2_radar_sources');
        Schema::enableForeignKeyConstraints();
    }
};
