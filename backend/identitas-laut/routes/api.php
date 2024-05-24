<?php

use App\Models\Makhluk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MakhlukController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResources([
    'makhluks' => MakhlukController::class,
]);

// Route::get('/makhluks', [MakhlukController::class, 'index']);
// Route::get('/makhluks/{id}', [MakhlukController::class, 'show']);
// Route::delete('/makhluks/{id}', [MakhlukController::class, 'destroy']);