<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Compatibilidade para instala??es que j? executaram a migration inicial.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('mentoria2_contests')) {
            return;
        }

        Schema::table('mentoria2_contests', function (Blueprint $table): void {
            if (! Schema::hasColumn('mentoria2_contests', 'organization')) {
                $table->string('organization', 160)->nullable()->after('name');
            }
            if (! Schema::hasColumn('mentoria2_contests', 'phase')) {
                $table->string('phase', 30)->default('Publicado')->after('position');
            }
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('mentoria2_contests')) {
            return;
        }

        Schema::table('mentoria2_contests', function (Blueprint $table): void {
            if (Schema::hasColumn('mentoria2_contests', 'phase')) {
                $table->dropColumn('phase');
            }
            if (Schema::hasColumn('mentoria2_contests', 'organization')) {
                $table->dropColumn('organization');
            }
        });
    }
};
