<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function index()
    {
        $latestPosts = Post::with(['company'])->where('is_active', true)->orderBy('created_at', 'desc')->paginate(3);

        $latestPosts->getCollection()->transform(function ($post) {
            $imageBase64 = Cache::get('company_logo_' . $post->id);
            $post->imageBase64 = $imageBase64;
            return $post;
        });


        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $latestPosts,
            'isLoggedIn' => auth()->check(),
        ]);
    }
}
