<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $jobs = Post::where('creator_id', $user->id)->get();

        return Inertia::render('Dashboard', [
            'jobs' => $jobs
        ]);
    }
}
