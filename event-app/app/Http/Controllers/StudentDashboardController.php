<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\User;

class StudentDashboardController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return Inertia::render('studentDashboard', [
            'companies' => $companies
        ]);
    }
}
