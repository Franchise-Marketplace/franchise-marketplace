<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Listing;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

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
            'Franchise_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:10048',
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

    public function edit($id)
    {
        Log::info('Edit listing id: ' . $id);
        Log::info(' listings: ', request()->all());
    
        $listing = Listing::findOrFail($id);
        $data = request()->all();

        foreach ($data as $key => $value) {
            if (!empty($value) && $key != 'isEdit') { 
                $listing->$key = $value;
            }
        }

      
        $listing->isEdit = true;

        $listing->save();

        return redirect()->route('dashboard')->with('message', 'Listing edited successfully.');
    }

    public function search(Request $request)
    {
        Log::info('Search Request:', $request->all());
        $category = $request->input('category');
        $page = $request->input('page', 1);
        $sort = $request->input('sort', 'Franchise_name');
        $perPage = 10;

        $query = Listing::query();

        if ($category) {
            $query->where('Franchise_type', $category);
        }

        $listings = $query->orderBy($sort)->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'listings' => $listings->items(),
            'pagination' => [
                'current_page' => $listings->currentPage(),
                'last_page' => $listings->lastPage(),
                'per_page' => $listings->perPage(),
                'total' => $listings->total(),
            ],
        ]);
        
    }


    public function destroy($id)
    {
        $listing = Listing::findOrFail($id);
        $listing->delete();

        return redirect()->back()->with('message', 'Listing deleted successfully.');
    }


}
