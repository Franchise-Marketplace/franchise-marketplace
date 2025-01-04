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
        //
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->string('Franchise_name');
            $table->string('Franchise_type');
            $table->string('Franchise_location');
            $table->string('Franchise_price');
            $table->text('Franchise_description');
            $table->string('Franchise_image');
            $table->string('Franchise_contact');
            $table->string('Franchise_email');
            $table->string('Franchise_phone');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
