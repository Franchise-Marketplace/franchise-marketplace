<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'listing_id',
        'buyer_id',
        'is_bought',
        'is_interested',
    ];

    // Relationship with the Listing model
    public function listing()
    {
        return $this->belongsTo(Listing::class, 'listing_id');
    }

    // Relationship with the User model
    public function buyer()
    {
        return $this->belongsTo(User::class, 'buyer_id');
    }
}
