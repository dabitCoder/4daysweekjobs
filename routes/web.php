<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/post-job', function () {
    return Inertia::render('PostJob', [
        'isLoggedIn' => auth()->check(),
        'user' => auth()->user()
    ]);
})->name('job_form');

Route::post('/jobs', [PostController::class, 'store'])->name('jobs.store');
Route::get('/jobs/{id}', [PostController::class, 'index'])->name('jobs.index');
Route::get('/jobs/{id}/edit', [PostController::class, 'edit'])->name('jobs.show');

Route::get('/checkout/error', [CheckoutController::class, 'payment_error'])->name('payment.error');
Route::get('/checkout/success', [CheckoutController::class, 'payment_success'])->name('payment.success');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
