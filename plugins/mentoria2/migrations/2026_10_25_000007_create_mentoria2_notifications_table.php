<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
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
    }

    public function down(): void
    {
        Schema::dropIfExists('mentoria2_notifications');
    }
};
