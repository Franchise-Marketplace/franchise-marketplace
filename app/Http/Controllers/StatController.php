<?php
namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\Transaction;

class StatController extends Controller
{
    public static function fetchStats($userId)
    {
        $totalListings = Listing::where('user_id', $userId)->count();

        $totalLeads = Transaction::whereHas('listing', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->where('is_interested', true)->count();


        $totalRevenue = Transaction::whereHas('listing', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->where('is_bought', true)
            ->join('listings', 'transactions.listing_id', '=', 'listings.id')
            ->sum('listings.Franchise_price');


        $revenuePerListing = $totalListings > 0 ? $totalRevenue / $totalListings : 0;


        $listingsByType = Listing::where('user_id', $userId)
            ->select('Franchise_type', \DB::raw('count(*) as count'))
            ->groupBy('Franchise_type')
            ->get()
            ->pluck('count', 'Franchise_type');

      
        $leadsByLocation = Transaction::whereHas('listing', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->where('is_interested', true)
            ->join('listings', 'transactions.listing_id', '=', 'listings.id')
            ->select('listings.Franchise_location', \DB::raw('count(*) as count'))
            ->groupBy('listings.Franchise_location')
            ->get()
            ->pluck('count', 'Franchise_location');

        return [
            'totalListings' => $totalListings,
            'totalLeads' => $totalLeads,
            'totalRevenue' => $totalRevenue,
            'revenuePerListing' => $revenuePerListing,
            'listingsByType' => $listingsByType,
            'leadsByLocation' => $leadsByLocation,
        ];
    }
}
