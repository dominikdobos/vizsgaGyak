<?php

use App\Http\Controllers\SzakdogaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/szakdogak', [SzakdogaController::class, 'getSzakdogak']);
Route::post('/szakdogak', [SzakdogaController::class, 'postSzakdogak']);