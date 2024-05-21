<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/post-job', function () {
    return Inertia::render('PostJob');
});

Route::post('jobs', [\App\Http\Controllers\PostController::class, 'store'])->name('jobs.store');

Route::get('/industries', [\App\Http\Controllers\IndustryController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('companies', [CompanyController::class, 'index'])->name('companies.index');
Route::get('companies/{company}', [CompanyController::class, 'show'])->name('companies.show');
Route::get('jobs', [\App\Http\Controllers\PostController::class, 'index'])->name('jobs.index');
Route::get('jobs/{job}', [\App\Http\Controllers\PostController::class, 'show'])->name('jobs.show');

// Rutas privadas (requieren autenticación)
Route::middleware(['auth'])->group(function () {
    Route::resource('companies', CompanyController::class)->except(['index', 'show']);
    Route::resource('posts', \App\Http\Controllers\PostController::class)->except(['index', 'show']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
