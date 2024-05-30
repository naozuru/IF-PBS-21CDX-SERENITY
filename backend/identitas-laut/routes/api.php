<?php

use App\Models\Makhluk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MakhlukController;
use App\Http\Controllers\PlantController;

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

<<<<<<< HEAD
// Route::get('/makhluks/{id}', [MakhlukController::class, 'show']);
=======
// Route::get('/m', [MakhlukController::class, 'index']);
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540

// Route::delete('/makhluks/{id}', [MakhlukController::class, 'destroy']);
// Route::post('/makhluks/store', [MakhlukController::class, 'store']);
// Route::put('/makhluks/{$name_ID}', [MakhlukController::class, 'update']);
