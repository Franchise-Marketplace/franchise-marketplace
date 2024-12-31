<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Revenue extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'quantity_sold',
        'revenue_amount',
    ];

    /**
     * Relationship to the User model.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Optional relationship to the Listing model.
     */
    public function listing()
    {
        return $this->belongsTo(Listing::class);
    }
}
