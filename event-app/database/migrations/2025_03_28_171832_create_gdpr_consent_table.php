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
        Schema::create('gdpr_consent', function (Blueprint $table) {
            $table->id();
            $table->index('user_id'); // Foreign key index
            $table->timestamps();
            $table->unsignedBigInteger('user_id');  // Foreign key table users
            $table->boolean('consent_given');  // Consent given (true o false)
            $table->text('consent_details')->nullable();  // Optional details
            $table->timestamp('consent_given_at')->useCurrent(); 
            $table->timestamp('consent_revoked_at')->nullable();  
            $table->softDeletes();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gdpr_consent');
    }
};
