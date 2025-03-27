<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'user_id',
        'company_name',
        'company_type',
        'working_roles'
    ];

    // Define the inverse relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
