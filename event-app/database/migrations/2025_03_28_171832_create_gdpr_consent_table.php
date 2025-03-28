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
            $table->index('user_id'); // Índice para la clave foránea
            $table->timestamps();
            $table->unsignedBigInteger('user_id');  // Clave foránea a la tabla users
            $table->boolean('consent_given');  // ¿Ha dado el consentimiento? (true o false)
            $table->text('consent_details')->nullable();  // Detalles opcionales sobre el consentimiento dado
            $table->timestamp('consent_given_at')->useCurrent();  // Fecha y hora en que se dio el consentimiento
            $table->timestamp('consent_revoked_at')->nullable();  // Fecha y hora en que se revocó el consentimiento (si aplica)
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
