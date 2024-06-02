<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function create(Request $request)
    {
        $product_id = 'prod_QBvGd8n2Ek9QuF';
        $quantity = 1;

        return $request->user()->checkout([$product_id => $quantity], [
            'success_url' => route('checkout-success'),
            'cancel_url' => route('jobs'),
        ]);
    }
}
