<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

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
        $request->validate([
            'listing_id' => 'required|exists:listings,id',
            'buyer_id' => 'required|exists:users,id',
            'is_bought' => 'boolean',
            'is_interested' => 'boolean',
        ]);

        $transaction = Transaction::create([
            'listing_id' => $request->listing_id,
            'buyer_id' => $request->buyer_id,
            'is_bought' => $request->is_bought ?? false,
            'is_interested' => $request->is_interested ?? false,
        ]);

        return response()->json($transaction, 201);
    }

    /**
     * Display the specified transaction.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        return response()->json($transaction);
    }

    /**
     * Update the specified transaction in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        $request->validate([
            'listing_id' => 'exists:listings,id',
            'buyer_id' => 'exists:users,id',
            'is_bought' => 'boolean',
            'is_interested' => 'boolean',
        ]);

        $transaction->update($request->all());

        return response()->json($transaction);
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
