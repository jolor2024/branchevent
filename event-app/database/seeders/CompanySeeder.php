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
            'name' => 'alice',
            'email' => 'alice@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Creative Solutions',
            'company_type' => 'Marketing Agency',
            'working_roles' => json_encode(['SEO', 'Content Strategy', 'PPC']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'bob',
            'email' => 'bob@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Tech Innovators',
            'company_type' => 'Software Development',
            'working_roles' => json_encode(['Frontend', 'Backend', 'Cloud Services']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'charlie',
            'email' => 'charlie@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'NextGen Solutions',
            'company_type' => 'AI and ML',
            'working_roles' => json_encode(['Data Science', 'Machine Learning', 'AI Development']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'diana',
            'email' => 'diana@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Green Tech Co',
            'company_type' => 'Environmental Solutions',
            'working_roles' => json_encode(['Sustainability', 'Engineering', 'Consulting']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'emily',
            'email' => 'emily@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Web Wizards',
            'company_type' => 'Web Development',
            'working_roles' => json_encode(['Web Design', 'UI/UX', 'Development']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'frank',
            'email' => 'frank@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Data Corp',
            'company_type' => 'Big Data and Analytics',
            'working_roles' => json_encode(['Data Engineer', 'Data Analyst', 'Business Intelligence']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'george',
            'email' => 'george@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Designs Unlimited',
            'company_type' => 'Design Agency',
            'working_roles' => json_encode(['Graphic Design', 'Branding', 'Illustration']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'hannah',
            'email' => 'hannah@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'FinTech Solutions',
            'company_type' => 'Financial Technology',
            'working_roles' => json_encode(['Blockchain', 'Cryptocurrency', 'FinTech Development']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'ian',
            'email' => 'ian@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Health Innovations',
            'company_type' => 'HealthTech',
            'working_roles' => json_encode(['Medical Devices', 'Telemedicine', 'Healthcare IT']),
        ]);

        // Create a user with the 'company' role
        $user = User::create([
            'name' => 'jack',
            'email' => 'jack@example.com',
            'password' => Hash::make('password123'),
            'role' => 'company',
        ]);
        $user->company()->create([
            'company_name' => 'Urban Solutions',
            'company_type' => 'Urban Planning',
            'working_roles' => json_encode(['Architecture', 'Urban Design', 'Planning']),
        ]);
    }
}
