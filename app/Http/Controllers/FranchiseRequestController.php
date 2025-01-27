<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FranchiseRequest;

class FranchiseRequestController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phoneNumber' => 'required|string|max:20',
            'location' => 'required|string|max:255',
            'message' => 'nullable|string',
        ]);

        $franchiseRequest = FranchiseRequest::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'email' => $validated['email'],
            'phone_number' => $validated['phoneNumber'],
            'location' => $validated['location'],
            'message' => $validated['message'],
        ]);

        return response()->json(['message' => 'Request submitted successfully!'], 200);
    }
}
