<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_topics')) {
            Schema::table('mentoria2_topics', function (Blueprint $t) {
                if (! Schema::hasColumn('mentoria2_topics', 'estimated_minutes')) {
                    $t->unsignedInteger('estimated_minutes')->nullable()->after('weight');
                }
                if (! Schema::hasColumn('mentoria2_topics', 'questions_target')) {
                    $t->unsignedInteger('questions_target')->nullable()->after('estimated_minutes');
                }
            });
        }

        if (Schema::hasTable('mentoria2_subtopics')) {
            Schema::table('mentoria2_subtopics', function (Blueprint $t) {
                if (! Schema::hasColumn('mentoria2_subtopics', 'estimated_minutes')) {
                    $t->unsignedInteger('estimated_minutes')->nullable()->after('weight');
                }
                if (! Schema::hasColumn('mentoria2_subtopics', 'questions_target')) {
                    $t->unsignedInteger('questions_target')->nullable()->after('estimated_minutes');
                }
            });
        }

        if (Schema::hasTable('mentoria2_student_contests')) {
            Schema::table('mentoria2_student_contests', function (Blueprint $t) {
                if (! Schema::hasColumn('mentoria2_student_contests', 'allowed_schedule_mode')) {
                    $t->string('allowed_schedule_mode', 32)->default('calendar')->after('group');
                }
                if (! Schema::hasColumn('mentoria2_student_contests', 'fixed_days_duration')) {
                    $t->unsignedInteger('fixed_days_duration')->nullable()->after('allowed_schedule_mode');
                }
            });
        }

        if (Schema::hasTable('mentoria2_schedule_items')) {
            Schema::table('mentoria2_schedule_items', function (Blueprint $t) {
                if (! Schema::hasColumn('mentoria2_schedule_items', 'questions_target')) {
                    $t->unsignedInteger('questions_target')->nullable()->after('duration_minutes');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('mentoria2_topics')) {
            Schema::table('mentoria2_topics', function (Blueprint $t) {
                if (Schema::hasColumn('mentoria2_topics', 'estimated_minutes')) {
                    $t->dropColumn('estimated_minutes');
                }
                if (Schema::hasColumn('mentoria2_topics', 'questions_target')) {
                    $t->dropColumn('questions_target');
                }
            });
        }

        if (Schema::hasTable('mentoria2_subtopics')) {
            Schema::table('mentoria2_subtopics', function (Blueprint $t) {
                if (Schema::hasColumn('mentoria2_subtopics', 'estimated_minutes')) {
                    $t->dropColumn('estimated_minutes');
                }
                if (Schema::hasColumn('mentoria2_subtopics', 'questions_target')) {
                    $t->dropColumn('questions_target');
                }
            });
        }

        if (Schema::hasTable('mentoria2_student_contests')) {
            Schema::table('mentoria2_student_contests', function (Blueprint $t) {
                if (Schema::hasColumn('mentoria2_student_contests', 'allowed_schedule_mode')) {
                    $t->dropColumn('allowed_schedule_mode');
                }
                if (Schema::hasColumn('mentoria2_student_contests', 'fixed_days_duration')) {
                    $t->dropColumn('fixed_days_duration');
                }
            });
        }

        if (Schema::hasTable('mentoria2_schedule_items')) {
            Schema::table('mentoria2_schedule_items', function (Blueprint $t) {
                if (Schema::hasColumn('mentoria2_schedule_items', 'questions_target')) {
                    $t->dropColumn('questions_target');
                }
            });
        }
    }
};

