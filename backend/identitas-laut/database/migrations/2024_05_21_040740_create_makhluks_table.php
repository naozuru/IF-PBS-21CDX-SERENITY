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
        Schema::create('makhluks', function (Blueprint $table) {
            $table->id();
            $table->string('name_ID');
            $table->string('name_EN');
            $table->string('domain');
            $table->string('kingdom');
            $table->string('phylum');
            $table->string('class');
            $table->string('order');
            $table->string('infraorder');
            $table->string('family');
            $table->string('genus');
            $table->string('species');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('makhluks');
    }
};
