<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "title",
        "description",
        "modality",
        "salary_range",
        "company_id"
    ];
    
    public function company()
    {
        return $this->hasOne(Company::class);
    }
}
