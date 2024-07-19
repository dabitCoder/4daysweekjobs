<?php

namespace App\Http\Controllers;

use App\Enums\Modality;
use App\Models\Company;
use App\Models\Post;
use App\Models\Technologies;
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
    public function index(Request $request)
    {
        try {
            $posts = new Post();
            $user = $request->user();
            Log::info("Fetching user jobs for user ID: {$user->id}");
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
            Log::info("Storing new job for user ID: {$user->id}");
            $validatedJob['creator_id'] = $user->id;
            $validatedJob['job_uuid'] = uuid_create();

            if ($validatedJob['company_name']) {
                $newCompany = Company::firstOrCreate(
                    ['name' => $validatedJob['company_name']],
                    ['creator_id' => $user->id]
                );
                $validatedJob['company_id'] = $newCompany->id;
                Log::info("Company '{$validatedJob['company_name']}' created/updated with ID: {$newCompany->id}");
            }

            $newJob = Post::create($validatedJob);
            Log::info("New job created with ID: {$newJob->id}");
            $newJob->technologies()->attach($validatedJob['technologies']);
            Log::info("Attached technologies to job ID: {$newJob->id}");

            if ($request->hasFile('company_logo')) {
                $this->cacheCompanyLogo($newJob->id, $request->file('company_logo'));
            }

            $checkout = $request->user()->checkout([env('STRIPE_PRODUCT_ID', 'price_1PLXPcEgjH84dgjqO9GN94Vu') => 1], [
                'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route('payment.error'),
                'allow_promotion_codes' => true,
                'metadata' => ['job_id' => $newJob->id],
            ]);
            Log::info("Redirecting to Stripe checkout for job ID: {$newJob->id}");
            return Inertia::location($checkout->url);
        } catch (ValidationException $e) {
            Log::error('Validation error while storing post: ' . $e->getMessage());
            return Inertia::render('JobForm', [
                'errors' => $e->errors(),
                'input' => $request->all()
            ]);
        } catch (Exception $e) {
            Log::error('Error creating post: ' . $e->getMessage());
            return Inertia::render('Error', ['message' => 'An error occurred while creating the post']);
        }
    }

    protected function getUser(Request $request)
    {
        try {
            if ($request->user()) {
                Log::info("User is authenticated, user ID: {$request->user()->id}");
                return $request->user();
            } else {
                $userData = [
                    'email' => $request->email,
                    'name' => $request->username,
                    'password' => $request->password,
                    'password_confirmation' => $request->password_confirmation,
                ];

                $validatedUser = UserManager::validateUser($userData);
                Log::info("User validation result: " . json_encode($validatedUser));

                if ($validatedUser) {
                    $user = UserManager::createUser($userData);
                    auth()->login($user);
                    Log::info("User created and logged in, user ID: {$user->id}");
                    return $user;
                }
            }
        } catch (Exception $e) {
            Log::error('Error in getUser method: ' . $e->getMessage());
            throw $e;  // Re-throw the exception to handle it in the calling method
        }
    }

    protected function validateJob(Request $request)
    {
        try {
            Log::info('Validating job data');
            return $request->validate([
                'title' => 'required|string|max:255',
                'modality' => 'required|string|in:Remote,Hybrid,Office,remote,hybrid,office',
                'location' => 'nullable|string|max:60',
                'apply_url' => 'required|url',
                'salary_range' => ['nullable', new MoneyRange],
                'company_name' => 'required|string|max:255',
                'company_logo' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:5100',
                'four_day_arrangement' => 'required|string',
                'technologies' => 'required|array|min:1|max:4',
            ]);
        } catch (ValidationException $e) {
            Log::error('Validation failed: ' . json_encode($e->errors()));
            throw $e;  // Re-throw to handle it in the calling method
        }
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
        }
    }

    public function show(Request $request, string $id)
    {
        try {
            if (!$request->user()) {
                Log::warning("Unauthorized access attempt to job ID: {$id}");
                return Inertia::render('Error', ['message' => 'Unauthorized']);
            }

            $technologies = Technologies::all();
            $post = Post::where('job_uuid', $id)
                ->with(['company', 'technologies'])
                ->where('creator_id', $request->user()->id)
                ->first();

            if (!$post) {
                Log::warning("Job not found or unauthorized access attempt for job ID: {$id}");
                return Inertia::render('Error', ['message' => 'Job not found or unauthorized']);
            }

            Log::info("Job details retrieved for job ID: {$id}");
            return Inertia::render('JobDetails', [
                'job' => $post,
                'technologies' => $technologies
            ]);
        } catch (Exception $e) {
            Log::error('Error fetching job details: ' . $e->getMessage());
            return Inertia::render('Error', ['message' => 'An error occurred while fetching the job details']);
        }
    }

    public function edit(string $id)
    {
        // Implementar lógica de edición
    }

    public function update(Request $request, string $id)
    {
        try {
            if (!$request->user()) {
                Log::warning("Unauthorized update attempt for job ID: {$id}");
                return Inertia::render('Error', ['message' => 'Unauthorized']);
            }

            $post = Post::where('job_uuid', $id)
                ->where('creator_id', $request->user()->id)
                ->first();

            if (!$post) {
                Log::warning("Job not found or unauthorized update attempt for job ID: {$id}");
                return Inertia::render('Error', ['message' => 'Job not found or unauthorized']);
            }

            $validatedData = $this->validateJob($request);

            Log::info("Validated data: " . json_encode($validatedData));

            if ($validatedData['company_name'] && $validatedData['company_name'] !== $post->company->name) {
                $company = Company::updateOrCreate(
                    ['name' => $validatedData['company_name']],
                    ['creator_id' => $request->user()->id]
                );
                $validatedData['company_id'] = $company->id;
                Log::info("Company '{$validatedData['company_name']}' updated/created with ID: {$company->id}");
            }

            $post->update($validatedData);
            Log::info("Job updated successfully, job ID: {$post->id}");

            $post->technologies()->sync($validatedData['technologies']);
            Log::info("Technologies synced for job ID: {$post->id}");

            if ($request->hasFile('company_logo')) {
                $this->cacheCompanyLogo($post->id, $request->file('company_logo'));
            }

            // Reload the post with its technologies and company
            $updatedPost = $post->fresh()->load('company', 'technologies');
            Log::info("Job reloaded successfully, job ID: {$updatedPost->id}");

            return Inertia::render('JobDetails', [
                'job' => $updatedPost,
                'message' => 'Job updated successfully'
            ]);
        } catch (ValidationException $e) {
            Log::error('Validation error while updating post: ' . $e->getMessage());
            return Inertia::render('JobForm', [
                'errors' => $e->errors(),
                'input' => $request->all()
            ]);
        } catch (Exception $e) {
            Log::error('Error updating post: ' . $e->getMessage());
            return Inertia::render('Error', ['message' => 'An error occurred while updating the post']);
        }
    }
}
