<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'modality',
        'apply_url',
        'salary_range',
        'job_uuid',
        'is_active',
        'creator_id',
        'company_id',
        'location',
        'four_day_arrangement'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function getUserJobs($id)
    {
        return self::where('creator_id', $id)->orderBy('created_at', 'desc')->get();
    }

    public function technologies()
    {
        return $this->belongsToMany(Technologies::class, 'post_technology', 'post_id', 'technology_id');
    }
}
