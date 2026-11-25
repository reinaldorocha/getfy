<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_preferences') && ! Schema::hasColumn('mentoria2_preferences', 'ai_credit_limit')) {
            Schema::table('mentoria2_preferences', function (Blueprint $table): void {
                $table->unsignedInteger('ai_credit_limit')->nullable()->after('bonus_full_access_until');
            });
        }

        if (! Schema::hasTable('mentoria2_mock_catalog')) {
            Schema::create('mentoria2_mock_catalog', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->uuid('contest_id')->nullable();
                $table->string('title');
                $table->text('description')->nullable();
                $table->string('board_style', 80)->nullable();
                $table->unsignedInteger('questions_count')->nullable();
                $table->unsignedInteger('time_minutes')->nullable();
                $table->string('pdf_path', 500)->nullable();
                $table->string('pdf_name', 255)->nullable();
                $table->unsignedBigInteger('pdf_size')->nullable();
                $table->boolean('is_paid')->default(false);
                $table->decimal('price', 10, 2)->nullable();
                $table->string('product_id', 64)->nullable()->index();
                $table->string('checkout_slug', 100)->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamps();

                $table->foreign('contest_id')->references('id')->on('mentoria2_contests')->nullOnDelete();
                $table->index(['tenant_id', 'is_active'], 'mentoria2_mock_catalog_tenant_active_idx');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_mock_catalog');

        if (Schema::hasTable('mentoria2_preferences') && Schema::hasColumn('mentoria2_preferences', 'ai_credit_limit')) {
            Schema::table('mentoria2_preferences', function (Blueprint $table): void {
                $table->dropColumn('ai_credit_limit');
            });
        }
    }
};
