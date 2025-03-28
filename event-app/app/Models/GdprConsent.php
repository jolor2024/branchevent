<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class GdprConsent extends Model
{
    use HasFactory;

    protected $table = 'gdpr_consent';  // Define la tabla asociada a este modelo

    protected $fillable = [
        'user_id',
        'consent_given',
        'consent_details',
        'consent_given_at',
        'consent_revoked_at',
    ];

    // Relación con el modelo User (uno a muchos)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
