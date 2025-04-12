<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the company registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Show the student registration page.
     */
    public function createStudent(): Response
    {
        return Inertia::render('auth/registerStudent');
    }
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeCompany(Request $request): RedirectResponse
    {
        error_log($request, 4);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'companyName' => 'required|string|max:255',
            'companyType' => 'required|string|max:255',
            'working_roles' => 'required|array|min:1',
            'gdpr_accepted' => 'accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gdpr_accepted' => $request->gdpr_accepted,
            'role' => 'company'
        ]);


        $user->company()->create([
            'company_name' => $request->companyName,
            'company_type' => $request->companyType,
            'working_roles' => json_encode($request->working_roles),
        ]);


        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }

    public function storeStudent(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'gdpr_accepted' => 'accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gdpr_accepted' => $request->gdpr_accepted,
            'role' => 'student'
        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }
}
