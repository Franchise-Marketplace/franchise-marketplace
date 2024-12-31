<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'Franchise_name',
        'Franchise_type',
        'Franchise_location',
        'Franchise_price',
        'Franchise_description',
        'Franchise_image',
        'Franchise_contact',
        'Franchise_email',
        'Franchise_phone',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
