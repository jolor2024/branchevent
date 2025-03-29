<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class GdprConsent extends Model
{
    use HasFactory;

    protected $table = 'gdpr_consent';  // Define the table associated with this model

    protected $fillable = [
        'user_id',
        'consent_given',
        'consent_details',
        'consent_given_at',
        'consent_revoked_at',
    ];

    // Relationship with the User model (one to many)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
