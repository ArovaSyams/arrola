<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReceiptController;
use App\Http\Controllers\VisitedController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ReceiptController::class, 'index']);

Route::get('/receipt/{id}', [ReceiptController::class, 'show']);

Route::post('/visited', [VisitedController::class, 'store']);

Route::post('/add-image/{id}', [ImageController::class, 'store']);
Route::post('/cover', [ImageController::class, 'editCover']);
Route::delete('/image/{id}', [ImageController::class, 'destroy']);

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'myProfile'])->name('my-profile');
  Route::post('/update-profile/{id}', [ProfileController::class, 'update']);
});

Route::middleware('user')->group(function () {
  Route::get('/dashboard', [DashboardController::class, 'index']);
  Route::get('/receipt', [DashboardController::class, 'receipt']);
  
  Route::get('/create-receipt', [ReceiptController::class, 'create']);
  Route::get('/receipt/{id}/edit', [ReceiptController::class, 'edit']);
  Route::post('/receipt', [ReceiptController::class, 'store']);
  Route::delete('/receipt/{id}', [ReceiptController::class, 'destroy']);
  Route::put('/receipt/{id}', [ReceiptController::class, 'update']);
  
});

Route::middleware('admin')->group(function () {
  Route::get('/profile/{id}', [ProfileController::class, 'index'])->name('profile');
  Route::get('/admin-dashboard', [AdminController::class, 'index']);
  Route::get('/receipt-request', [AdminController::class, 'receiptRequest']);
  Route::get('/user-list', [AdminController::class, 'userList']);
  Route::post('/approve-receipt/{id}', [AdminController::class, 'approve']);
  
});

// Route::middleware('user')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
