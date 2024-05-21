<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\JsonResponse;

class IndustryController extends Controller
{
    public function index(): JsonResponse
    {
        $companies = Industry::all();

        return response()->json($companies);
    }
}
