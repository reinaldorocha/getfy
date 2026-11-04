<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_background_tasks')) {
            Schema::create('mentoria2_background_tasks', function (Blueprint $table): void {
                $table->uuid('id')->primary();
                $table->unsignedBigInteger('tenant_id')->index();
                $table->unsignedBigInteger('user_id')->nullable()->index();
                $table->string('type', 60)->index();
                $table->string('status', 30)->default('pending')->index();
                $table->unsignedTinyInteger('progress')->default(0);
                $table->json('payload')->nullable();
                $table->json('result')->nullable();
                $table->text('error')->nullable();
                $table->unsignedSmallInteger('attempts')->default(0);
                $table->timestamp('started_at')->nullable();
                $table->timestamp('finished_at')->nullable();
                $table->timestamps();

                $table->index(['tenant_id', 'status'], 'm2_bg_tasks_tenant_status_idx');
                $table->index(['tenant_id', 'type'], 'm2_bg_tasks_tenant_type_idx');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_background_tasks');
    }
};

