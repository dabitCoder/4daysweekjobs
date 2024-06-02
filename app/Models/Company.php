<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'location',
        'logo',
    ];

    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public static function createCompany(array $data)
    {
        try {
            $validatedData = validator($data, [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'location' => 'nullable|string|max:255',
                'logo' => 'nullable|string|max:255',
            ])->validate();

            return self::create($validatedData);
        } catch (ValidationException $e) {
            Log::error('Error creating post: '.$e->getMessage());

            return response()->json(['errors' => $e->errors()], 422);
        }
    }
}
