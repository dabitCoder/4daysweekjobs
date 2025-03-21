<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'creator_id'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
