<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\AuthController;

/*
Route::post('/login', function (Request $request) {
    print("Passage dans login");
    return response()->json(['message' => 'Authentification en cours...']);
})->withoutMiddleware([\Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class]);
*/
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Route protégée par Sanctum (nécessite une authentification)
Route::middleware('auth:sanctum')->get('/test-auth', function (Request $request) {
    return response()->json(['message' => 'Connexion réussie avec authentification Sanctum!']);
});

//route pour le CSRF cookie
//Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);