<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public static function getUserJobs($id)
    {
        return DB::select('select * from posts where creator_id = ?', [$id]);
    }
}
