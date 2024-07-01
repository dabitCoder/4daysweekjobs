<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Post;
use App\Rules\MoneyRange;
use App\Services\UserManager;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PostController extends Controller
{
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

            if ($validatedJob['company_name']) {
                $newCompany = Company::firstOrCreate(
                    ['name' => $validatedJob['company_name']],
                    ['creator_id' => $user->id]
                );
                $validatedJob['company_id'] = $newCompany->id;
            }

            $newJob = Post::create($validatedJob);

            if($request->hasFile('company_logo')) {
                $this->cacheCompanyLogo($newJob->id, $request->file('company_logo'));
            }

            $checkout = $request->user()->checkout(['price_1PLXPcEgjH84dgjqO9GN94Vu' => 1], [
                'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route('payment.error'),
                'metadata' => ['job_id' => $newJob->id],
            ]);
            return Inertia::location($checkout->url);
        } catch (ValidationException $e) {
            Log::error('Error validating post data: ' . $e->getMessage());
            return back()->withErrors($e->errors())->withInput();
        } catch (Exception $e) {
            Log::error('Error creating post: ' . $e->getMessage());
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
            'salary_range' => ['nullable', new MoneyRange],
            'company_name' => 'required|string|max:255',
            'company_logo' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:5100',
        ]);
    }

    private function cacheCompanyLogo($jobId, $image): void
    {
        try {
            Log::info("Uploading image for job ID: {$jobId}");
            $imageData = file_get_contents($image->getRealPath());
            $imageBase64 = base64_encode($imageData);
            Cache::put('company_logo_' . $jobId, $imageBase64);
            Log::info("Image uploaded and cached successfully for job ID: {$jobId}");
        } catch (Exception $e) {
            Log::error("Error uploading image for job ID: {$jobId} - " . $e->getMessage());
            throw $e;
        }
    }

    public function show(string $id)
    {
        // Implementar lógica de mostrar detalles de una oferta de trabajo
    }

    public function edit(string $id)
    {
        // Implementar lógica de edición
    }

    public function update(Request $request, string $id)
    {
        // Implementar lógica de actualización
    }
}
