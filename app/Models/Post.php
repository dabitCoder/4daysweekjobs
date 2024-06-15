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
        'role',
        'apply_url',
        'salary_range',
        'job_uuid',
        'is_active',
        'creator_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getUserJobs($id)
    {
        return self::where('creator_id', $id)->orderBy('created_at', 'desc')->get();
    }
}
