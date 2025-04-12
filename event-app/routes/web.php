<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentDashboardController;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    }
    return Inertia::render('welcome');
})->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        if (Auth::user()->isStudent()) {
            return app(StudentDashboardController::class)->index();
        } else if (Auth::user()->isCompany()) {
            return Inertia::render('companyDashboard', [
                "companyName" => Auth::user()->company->company_name,
                "companyType" => Auth::user()->company->company_type
            ]);
        }
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
