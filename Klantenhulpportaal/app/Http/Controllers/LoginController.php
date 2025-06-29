<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\AuthResource;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // TODO :: resource voor maken
            return Auth::user();
        }

        return response()->json([
            'message' => 'The provided credentials are incorrect.',
        ], 401);
    }

    public function me(){
        $currentUser = Auth::User();

        return new AuthResource($currentUser);
    }

    public function logout(Request $request){
    Auth::logout();
    $request->session()->invalidate();

    $request->session()->regenerateToken(); 

    return redirect('/');
    }

    public function check(){
        return Auth::check();
    }
}