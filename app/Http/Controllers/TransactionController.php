<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Listing;


class TransactionController extends Controller
{
    /**
     * Display a listing of the transactions.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::all();
        return response()->json($transactions);
    }

    /**
     * Store a newly created transaction in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   
    
     public function store(Request $request)
        {
            // Log the incoming request payload
            \Log::info('Request Payload:', $request->all());
        

            // Validate the incoming request data
            $validatedData = $request->validate([
                'listing_id' => 'required|exists:listings,id',
                'buyer_id' => 'required|exists:users,id',
                'is_interested' => 'boolean',
                'is_bought' => 'boolean',
            ]);

            \Log::info('Validated Data:', $validatedData);

            // Check if the transaction already exists
            $existingTransaction = Transaction::where('listing_id', $validatedData['listing_id'])
                                            ->where('buyer_id', $validatedData['buyer_id'])
                                            ->first();

            if ($existingTransaction) {
                $existingTransaction->update([
                    'is_interested' => $validatedData['is_interested'] ?? true,
                    'is_bought' => $validatedData['is_bought'] ?? false,
                ]);
            } else {
                Transaction::create([
                    'listing_id' => $validatedData['listing_id'],
                    'buyer_id' => $validatedData['buyer_id'],
                    'is_interested' => $validatedData['is_interested'] ?? false,
                    'is_bought' => $validatedData['is_bought'] ?? false,
                ]);
            }

            $listings = Listing::with('transactions')->orderBy('created_at', 'desc')->get();

            return Inertia::render('franchiseeDashboard', [
                'user' =>auth()->user(),
                'listings' => $listings,
            ])->with('success', 'Status has been updated!');
        }


     
    /**
     * Remove the specified transaction from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        $transaction->delete();
        return response()->json(null, 204);
    }
}
