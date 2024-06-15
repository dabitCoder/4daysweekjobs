<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Cashier\Cashier;

class CheckoutController extends Controller
{
    public function payment_error()
    {
        return Inertia::render('Payments/Error', [
            'isLoggedIn' => auth()->check(),
        ]);
    }

    public function payment_success(Request $request)
    {
        $sessionId = $request->get('session_id');

        if ($sessionId === null) {
            return;
        }

        $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

        if ($session->payment_status !== 'paid') {
            return;
        }

        $jobId = $session['metadata']['job_id'] ?? null;

        if ($jobId) {
            Post::findOrFail($jobId)->update(['is_active' => 1]);
        }


        return Inertia::render('Payments/Success', [
            'isLoggedIn' => auth()->check(),
        ]);
    }
}
