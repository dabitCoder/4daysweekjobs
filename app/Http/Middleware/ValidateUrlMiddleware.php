<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;

class ValidateUrlMiddleware extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (preg_match('/[^\w\-\/\.\?\&=]/', $request->getRequestUri())) {
            return inertia('NotFound')->toResponse(request())->setStatusCode(404);
        }

        return $next($request);
    }
}
