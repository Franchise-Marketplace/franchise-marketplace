<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Listing;

class ListingsController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Franchise_name' => 'required|string|max:255',
            'Franchise_type' => 'required|string|max:255',
            'Franchise_location' => 'required|string|max:255',
            'Franchise_price' => 'required|string|max:255',
            'Franchise_description' => 'required|string',
            'Franchise_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'Franchise_contact' => 'required|string|max:255',
            'Franchise_email' => 'required|email|max:255',
            'Franchise_phone' => 'required|string|max:255',
        ]);

        
        if ($request->hasFile('Franchise_image')) {
            $path = $request->file('Franchise_image')->store('franchise_images', 'public');
            $validated['Franchise_image'] = $path;
        }

       
        $validated['user_id'] = auth()->id();

        Listing::create($validated);

        return redirect()->route('dashboard')->with('success', 'Listing added successfully.');
    }
}
