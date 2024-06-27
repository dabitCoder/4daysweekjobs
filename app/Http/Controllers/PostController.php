<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Post;
use App\Services\UserManager;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $posts = new Post();
            $user = $request->user();
            $jobs = $posts->getUserJobs($user->id);
            return response()->json($jobs);
        } catch (Exception $ex) {
            Log::error($ex->getMessage());
            return response()->json([]);
        }
    }

    public function store(Request $request)
    {

        try {
            $validatedJob = $this->validateJob($request);
            $user = $this->getUser($request);
            $validatedJob['creator_id'] = $user->id;
            $validatedJob['job_uuid'] = uuid_create();
            $newJob = Post::create($validatedJob);


            if($request->hasFile('company_logo')) {
                $image = $request->file('company_logo');
                $imagePath = $image->getRealPath();
                $imageData = file_get_contents($imagePath);
                $imageBase64 = base64_encode($imageData);

                Redis::set('company_logo', $newJob->id, $imageBase64);
            }

            if ($validatedJob['company_name']) {
                $companyData = [
                    'name' => $validatedJob['company_name']
                ];

                Company::firstOrCreate(['name' => $validatedJob['company_name']], $companyData);
            }

            $checkout = $request->user()->checkout(['price_1PLXPcEgjH84dgjqO9GN94Vu' => 1], [
                'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route('payment.error'),
                'metadata' => ['job_id' => $newJob->id],
            ]);
            return Inertia::location($checkout->url);
        } catch (ValidationException $e) {
            Log::error('Error validating post data: '.$e->getMessage());
            return back()->withErrors($e->errors())->withInput();
        } catch (Exception $e) {
            Log::error('Error creating post: '.$e->getMessage());
            return response()->json(['message' => 'An error occurred while creating the post'], 500);
        }
    }

    protected function getUser(Request $request)
    {

        if ($request->user()) {
            return $request->user();
        } else {
            $userData = [
                'email' => $request->email,
                'name' => $request->username,
                'password' => $request->password,
                'password_confirmation' => $request->password_confirmation,
            ];

            $validatedUser = UserManager::validateUser($userData);

            if ($validatedUser) {
                $user = UserManager::createUser($userData);
                auth()->login($user);
                return $user;
            }
        }
    }


    protected function validateJob(Request $request)
    {
        return $request->validate([
            'title' => 'required|string|max:255',
            'modality' => 'nullable|string|in:office,remote,hybrid',
            'location' => 'nullable|string|max:60',
            'apply_url' => 'required|url',
            'salary_range' => 'nullable|string',
            'company_name' => 'required|string|max:255',
        ]);
    }



    public function show(string $id)
    {

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
