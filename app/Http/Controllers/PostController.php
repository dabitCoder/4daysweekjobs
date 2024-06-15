<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Post;
use App\Services\UserManager;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = $request->user();
        $jobs = Post::getUserJobs($user->id);
        return response()->json($jobs);
    }

    public function store(Request $request)
    {

        try {
            $user = $this->getUser($request);
            $validatedJob = $this->validateJob($request, $user);
            $validatedJob['job_uuid'] = uuid_create();
            $validatedJob['creator_id'] = $user->id;
            $newJob = Post::create($validatedJob);

            if ($validatedJob['company_name']) {
                $companyData = [
                    'name' => $validatedJob['company_name']
                ];

                Company::create($companyData);
                Log::info('New company created');
            }

            $checkout = $request->user()->checkout(['price_1PLXPcEgjH84dgjqO9GN94Vu' => 1], [
                'success_url' => route('payment.success'),
                'cancel_url' => route('payment.error'),
                'metadata' => ['job_id' => $newJob->id],
            ]);

            return Inertia::location($checkout->url);
        } catch (ValidationException $e) {
            Log::error('Error valiting post data: '.$e->getMessage());
            return back()->withErrors($e->errors())->withInput();
        } catch (Exception $e) {
            Log::error('Error creating post: '.$e->getMessage());
            return response()->json(['message' => 'An error occurred while creating the post'], 500);
        }
    }

    protected function getUser(Request $request)
    {
        if ($request->user()) {
            $request->user()->createOrGetStripeCustomer();
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


    protected function validateJob(Request $request, $user)
    {
        return $request->validate([
            'title' => 'required|string|max:255',
            'modality' => 'nullable|string|in:office,remote,hybrid',
            'location' => 'nullable|string',
            'role' => 'nullable|string|max:100',
            'apply_url' => 'required|string',
            'salary_range' => 'nullable|string',
            'company_name' => 'required|string|max:255',
        ]);
    }



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
