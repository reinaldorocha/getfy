<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_ai_usage_logs')) {
            Schema::create('mentoria2_ai_usage_logs', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->unsignedBigInteger('student_id')->nullable()->index();
                $table->string('product_id', 36)->nullable()->index();
                $table->string('feature', 50)->index(); // redacao_theme, redacao_correction, redacao_ocr, tutor_chat, edital_import, ai_memory, schedule_ai
                $table->string('model', 80)->default('openai/gpt-4o-mini');
                $table->unsignedInteger('prompt_tokens')->default(0);
                $table->unsignedInteger('completion_tokens')->default(0);
                $table->unsignedInteger('total_tokens')->default(0);
                $table->decimal('cost_usd', 10, 6)->default(0);
                $table->decimal('cost_brl', 10, 4)->default(0);
                $table->json('metadata')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_ai_usage_logs');
    }
};

