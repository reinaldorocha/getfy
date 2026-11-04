<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_question_bank')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table): void {
                if (! Schema::hasColumn('mentoria2_question_bank', 'board')) {
                    $table->string('board', 100)->nullable()->after('topic');
                    $table->index(['tenant_id', 'board'], 'm2_qbank_tenant_board_idx');
                }
            });
        }

        if (Schema::hasTable('mentoria2_preferences')) {
            Schema::table('mentoria2_preferences', function (Blueprint $table): void {
                if (! Schema::hasColumn('mentoria2_preferences', 'bonus_full_access_until')) {
                    $table->timestamp('bonus_full_access_until')->nullable()->after('tour_completed');
                    $table->index(['tenant_id', 'bonus_full_access_until'], 'm2_pref_tenant_bonus_idx');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_question_bank')) {
            Schema::table('mentoria2_question_bank', function (Blueprint $table): void {
                if (Schema::hasColumn('mentoria2_question_bank', 'board')) {
                    $table->dropIndex('m2_qbank_tenant_board_idx');
                    $table->dropColumn('board');
                }
            });
        }

        if (Schema::hasTable('mentoria2_preferences')) {
            Schema::table('mentoria2_preferences', function (Blueprint $table): void {
                if (Schema::hasColumn('mentoria2_preferences', 'bonus_full_access_until')) {
                    $table->dropIndex('m2_pref_tenant_bonus_idx');
                    $table->dropColumn('bonus_full_access_until');
                }
            });
        }
    }
};

