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

Route::get('/receipt-detail/{id}', [ReceiptController::class, 'show']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/admin-dashboard', [AdminController::class, 'index'])->middleware(['admin', 'verified'])->name('admin-dashboard');

Route::get('/create-receipt', [ReceiptController::class, 'create'])->middleware(['auth', 'verified'])->name('create-receipt');
Route::post('/receipt', [ReceiptController::class, 'store']);
Route::get('/receipt/{id}/edit', [ReceiptController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit-receipt');
Route::delete('/receipt/{id}', [ReceiptController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete-receipt');
Route::put('/receipt/{id}', [ReceiptController::class, 'update'])->middleware(['auth', 'verified'])->name('update-receipt');

Route::post('/approve-receipt/{id}', [AdminController::class, 'approve'])->middleware(['admin', 'verified'])->name('approve-receipt');

Route::post('/visited', [VisitedController::class, 'store']);

Route::post('/add-image', [ImageController::class, 'store']);
Route::post('/cover', [ImageController::class, 'editCover']);
Route::delete('/image/{id}', [ImageController::class, 'destroy']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
