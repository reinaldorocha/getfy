<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('mentoria2_schedule_items') && ! Schema::hasColumn('mentoria2_schedule_items', 'description')) {
            Schema::table('mentoria2_schedule_items', function (Blueprint $table): void {
                $table->text('description')->nullable()->after('label');
            });
        }
    }

    public function down(): void
    {
        // Preserva descricoes ja usadas nos cronogramas publicados.
    }
};
