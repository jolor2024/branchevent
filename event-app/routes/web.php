<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GdprConsentController;

Route::post('/gdpr/accept', [GdprConsentController::class, 'acceptConsent'])->name('gdpr.accept');

Route::post('/gdpr/revoke', [GdprConsentController::class, 'revokeConsent'])->name('gdpr.revoke');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/student', function () {
    return Inertia::render('welcomeStudent');
})->name('homeStudent');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        if (Auth::user()->isStudent()) {
            return Inertia::render('studentDashboard');
        } else if (Auth::user()->isCompany()) {
            return Inertia::render('companyDasboard');
        }
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
