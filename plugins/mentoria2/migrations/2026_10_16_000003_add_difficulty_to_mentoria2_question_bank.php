<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_question_bank') && ! Schema::hasColumn('mentoria2_question_bank', 'difficulty')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table) {
                $table->string('difficulty', 30)->nullable()->default('Média')->after('topic');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_question_bank') && Schema::hasColumn('mentoria2_question_bank', 'difficulty')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table) {
                $table->dropColumn('difficulty');
            });
        }
    }
};

