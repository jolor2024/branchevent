<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'rune',
            'email' => 'rune@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Tech Innovators',
            'company_type' => 'tech',
            'working_roles' => json_encode(['ux', 'design', 'software']),
        ]);
    }
}
