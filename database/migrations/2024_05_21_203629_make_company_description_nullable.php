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
        Schema::table('companies', function (Blueprint $table) {
            $table->dropForeign(["creator_id"]);
            $table->string('description')->nullable()->change();
            $table->string('location')->nullable()->change();
            $table->string('logo')->nullable()->change();
            $table->dropColumn('creator_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('companies', function(Blueprint $table) {
            $table->string('description')->nullable(false)->change();
            $table->string('location')->nullable(false)->change();
            $table->string('logo')->nullable(false)->change();
            $table->foreignId('creator_id')->constrained()->onDelete('cascade');
        });
    }
};
