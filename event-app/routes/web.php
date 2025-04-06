<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentDashboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/student', function () {
    return Inertia::render('welcomeStudent');
})->name('homeStudent');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        if (Auth::user()->isStudent()) {
            return app(StudentDashboardController::class)->index();
        } else if (Auth::user()->isCompany()) {
            return Inertia::render('companyDashboard');
        }
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
