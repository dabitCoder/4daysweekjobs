<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Models\Technologies;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/post-job', function () {
    $technologies = Technologies::all();

    return Inertia::render('PostJob', [
        'isLoggedIn' => auth()->check(),
        'user' => auth()->user(),
        'technologies' => $technologies
    ]);
})->name('job_form');

Route::prefix('jobs')->name('jobs.')->group(function () {
    Route::post('/', [PostController::class, 'store'])->name('store');
    Route::get('/', [PostController::class, 'index'])->name('index');
    Route::get('/{id}', [PostController::class, 'show'])->name('show');
    Route::get('/{id}/edit', [PostController::class, 'edit'])->name('edit');
    Route::put('/{id}', [PostController::class, 'update'])->name('update');
});

Route::get('/checkout/error', [CheckoutController::class, 'payment_error'])->name('payment.error');
Route::get('/checkout/success', [CheckoutController::class, 'payment_success'])->name('payment.success');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::inertia('/about', 'AboutUs');
Route::inertia('/privacy-policy', 'Privacy');

Route::fallback(function () {
    return inertia('NotFound')->toResponse(request())->setStatusCode(404);
});

require __DIR__ . '/auth.php';
