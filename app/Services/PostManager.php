<?php

namespace App\Services;

use App\Models\Company;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostManager
{
    public static function validateJob(array $data)
    {
        return Validator::make($data, [
            'title' => 'required|string|max:255',
            'modality' => 'nullable|string|in:office,remote,hybrid',
            'location' => 'nullable|string',
            'role' => 'nullable|string|max:100',
            'apply_url' => 'required|string',
            'salary_range' => 'nullable|string',
            'company_name' => 'nullable|string|max:255',
        ])->validate();
    }

    public static function createJob(array $data)
    {
        $data['job_uuid'] = uuid_create();

        return Post::create($data);
    }

    public static function createCompany(array $data)
    {
        if (! empty($data['company_name'])) {
            Company::create(['name' => $data['company_name']]);
        }
    }
}
