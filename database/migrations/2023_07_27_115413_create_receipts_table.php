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
        Schema::create('receipts', function (Blueprint $table) {
            $table->id();
            $table->string('unique_id');
            $table->integer('user_id');
            $table->string('name');
            $table->text('description');
            $table->string('category');
            $table->integer('ingredient_amount');
            $table->string('make_time');
            $table->integer('visited_people')->nullable();
            $table->text('ingredient');
            $table->string('status')->default('Inactive');
            $table->string('approved_by')->nullable();
            $table->string('cover');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('receipts');
    }
};
