<?php

namespace App\Http\Controllers;

use App\Models\Revenue;
use App\Models\Listing;
use Illuminate\Http\Request;

class RevenueController extends Controller
{
    /**
     * Record a sale and generate revenue entry for a user.
     */
    public function recordSale(Request $request)
    {
        // Validate input data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'listing_id' => 'required|exists:listings,id',
            'quantity_sold' => 'required|integer|min:1',
        ]);

        // Find the listing and calculate revenue using Franchise_price
        $listing = Listing::findOrFail($request->listing_id);
        $franchisePrice = $listing->Franchise_price;
        $revenueAmount = $franchisePrice * $request->quantity_sold;

        // Check if a revenue record exists
        $revenue = Revenue::where('user_id', $request->user_id)->first();

        if ($revenue) {
            // Update existing revenue record
            $revenue->revenue_amount += $revenueAmount;
            $revenue->quantity_sold += $request->quantity_sold;
            $revenue->save();
        } else {
            // Create a new revenue record
            Revenue::create([
                'user_id' => $request->user_id,
                'quantity_sold' => $request->quantity_sold,
                'revenue_amount' => $revenueAmount,
            ]);
        }

        // Update the sold count in the listing table
        $listing->increment('sold_count', $request->quantity_sold);

        return response()->json(['message' => 'Sale recorded successfully'], 200);
    }

    /**
     * Get total revenue for a specific user.
     */
    public function getTotalRevenueForUser($userId)
    {
        $revenue = Revenue::where('user_id', $userId)->first();

        return response()->json([
            'user_id' => $userId,
            'total_revenue' => $revenue ? $revenue->revenue_amount : 0,
        ]);
    }

    /**
     * Show revenue details for all sales related to a specific listing.
     */
    public function getRevenueForListing($listingId)
    {
        $revenues = Revenue::whereHas('listing', function ($query) use ($listingId) {
            $query->where('id', $listingId);
        })->get();

        return response()->json([
            'listing_id' => $listingId,
            'revenues' => $revenues,
        ]);
    }
}
