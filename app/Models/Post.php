<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'modality',
        'industry',
        'min_salary',
        'max_salary',
        'location',
        'role',
        'apply_url',
        'job_uuid',
        'is_active',
    ];
}
