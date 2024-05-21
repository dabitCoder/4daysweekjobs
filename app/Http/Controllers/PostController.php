<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Exception;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'modality' => 'nullable|string|in:office,remote,hybrid',
                'industry_id' => 'nullable|integer',
                'min_salary' => 'nullable|numeric',
                'max_salary' => 'nullable|numeric',
                'company_name' => 'nullable|string|max:255'
            ]);

            $validated["job_uuid"] = uuid_create();
            Post::create($validated);

            return response()->json(['message' => 'Post created successfully'], 201);
        } catch (ValidationException $e) {
            Log::error('Error creating post: '.$e->getMessage());
            return response()->json(['errors' => $e->errors()], 422);
        } catch (Exception $e) {
            Log::error('Error creating post: '.$e->getMessage());
            return response()->json(['message' => 'An error occurred while creating the post'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }
}
