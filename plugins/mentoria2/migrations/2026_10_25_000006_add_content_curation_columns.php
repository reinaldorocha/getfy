<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
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
    }

    public function down(): void
    {
        foreach (['mentoria2_flashcards', 'mentoria2_flashcard_decks', 'mentoria2_question_bank'] as $tableName) {
            if (! Schema::hasTable($tableName) || ! Schema::hasColumn($tableName, 'content_status')) {
                continue;
            }

            Schema::table($tableName, function (Blueprint $table): void {
                $table->dropForeign(['reviewed_by']);
                $table->dropColumn(['content_status', 'content_source', 'content_confidence', 'review_note', 'reviewed_by', 'reviewed_at']);
            });
        }
    }
};
