<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Carbon\Carbon;

class GdprConsentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all users for consent
        $users = User::all();

        if ($users->isEmpty()) {
            $this->command->info('No hay usuarios en la base de datos para asociar el consentimiento.');
            return;
        }

        //  Consent for all users
        foreach ($users as $user) {
            DB::table('gdpr_consent')->insert([
                'user_id' => $user->id,
                'consent_given' => true,
                'consent_given_at' => Carbon::now(),
                'consent_revoked_at' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        $this->command->info('Seeder de GDPR consent ejecutado exitosamente.');
    }
}
