<?php

use App\Http\Controllers\ProfileController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redis;


Route::get('/', function () {

    $latestPosts = Post::orderBy('created_at', 'desc')->take(10)->get();

    $latestPostsWithImages = $latestPosts->map(function ($post) {
        $imageBase64 = Redis::get('company_logo' . $post->id);
        $post->imageBase64 = $imageBase64;
        return $post;
    });

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'posts' => $latestPostsWithImages,
    ]);
});

Route::get('/post-job', function () {
    return Inertia::render('PostJob', [
        'isLoggedIn' => auth()->check(),
        'user' => auth()->user()
    ]);
})->name('job_form');

Route::post('jobs', [\App\Http\Controllers\PostController::class, 'store'])->name('jobs.store');
Route::get('/jobs/{id}', [\App\Http\Controllers\PostController::class, 'index'])->name('jobs.index');
Route::get('/jobs/{id}/edit', [\App\Http\Controllers\PostController::class, 'edit'])->name('jobs.show');

Route::get('/checkout/error', [\App\Http\Controllers\CheckoutController::class, 'payment_error'])->name('payment.error');
Route::get('/checkout/success', [\App\Http\Controllers\CheckoutController::class, 'payment_success'])->name('payment.success');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
