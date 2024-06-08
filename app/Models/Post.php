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
        'job_uuid',
        'is_active',
        'creator_id',
    ];
}
