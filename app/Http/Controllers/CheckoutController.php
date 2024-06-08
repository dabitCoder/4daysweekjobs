<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function payment_error()
    {
        return Inertia::render('Payments/Error', [
            'isLoggedIn' => auth()->check(),
        ]);
    }

    public function payment_success()
    {
        return Inertia::render('Payments/Success', [
            'isLoggedIn' => auth()->check(),
        ]);
    }
}
