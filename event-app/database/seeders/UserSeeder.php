<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        // Create a user with the 'company' role and immediately create the associated company
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);

        // Directly create the associated company without needing the 'if' check
        $user->company()->create([
            'company_name' => 'Tech Innovators',
            'company_type' => 'tech',
            'working_roles' => json_encode(['ux', 'design', 'software']),
        ]);

        // Optionally, you can create other users as well
        User::create([
            'name' => 'Jane Smith',
            'email' => 'janesmith@example.com',
            'password' => Hash::make('password123'),
            'role' => 'student',
        ]);
    }
}
