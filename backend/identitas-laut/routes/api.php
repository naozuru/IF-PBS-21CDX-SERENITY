<?php

use App\Models\Makhluk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MakhlukController;
use App\Http\Controllers\PlantController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\UpdateRequest;

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
    'plants' => PlantController::class,
]);

Route::get('spesific_data_makhluks', [MakhlukController::class, 'showSpesificData']);
Route::get('makhluks/{makhluk}', [MakhlukController::class, 'show']);

// Route::get('/m', [MakhlukController::class, 'index']);

// Route::delete('/makhluks/{id}', [MakhlukController::class, 'destroy']);
// Route::post('/makhluks/store', [MakhlukController::class, 'store']);
// Route::put('/makhluks/{$name_ID}', [MakhlukController::class, 'update']);