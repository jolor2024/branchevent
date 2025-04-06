<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        //Creates a student user
        User::create([
            'name' => 'Rune',
            'email' => 'studentuser@example.com',
            'password' => Hash::make('password123'),
            'role' => 'student',
        ]);
    }
}
