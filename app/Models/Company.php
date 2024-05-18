<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'location',
        'logo',
        'creator_id'
    ];

    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
