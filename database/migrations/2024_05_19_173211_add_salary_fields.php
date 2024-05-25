<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('posts', function(Blueprint $table){
            $table->decimal('min_salary',9,3)->nullable(false);
            $table->decimal('max_salary', 9,3)->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
          Schema::table('posts', function(Blueprint $table){
            $table->dropColumn('min_salary');
            $table->dropColumn('max_salary');
        });
    }
};
