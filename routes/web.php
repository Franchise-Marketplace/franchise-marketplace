<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Listing;
use App\Http\Controllers\ListingsController;
use App\Http\Controllers\TransactionController;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\StatController;

Route::resource('listings', 'ListingsController');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $listings = Listing::where('user_id', auth()->id())->with('transactions.buyer')->get();
    $stat = StatController::fetchStats(auth()->id()); 
    
    if(Auth::user()->user_role == 'franchisor') {
    
        return Inertia::render('Dashboard', [
            'user' => auth()->user(),
            'listings' => $listings,
            'stat' => $stat,
        ]);
    }
    else {
        $listings = Listing::with('transactions')
        ->orderBy('created_at', 'desc')
        ->get();
        return Inertia::render('franchiseeDashboard', [
            'user' => auth()->user(),
            'listings' => $listings,
        ]);
    }
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/franchiseeDashboard', function () {
    $listings = Listing::with('transactions')
    ->orderBy('created_at', 'desc')
    ->get();
    $stat = StatController::fetchStats(auth()->id()); 
    if(Auth::user()->user_role == 'franchisor') {
        $listings = Listing::where('user_id', auth()->id())->with('transactions.buyer')->get();
        
        return Inertia::render('Dashboard', [
            'user' => auth()->user(),
            'listings' => $listings,
            'stat' => $stat,
        ]);
    }
    else {
        return Inertia::render('franchiseeDashboard', [
            'user' => auth()->user(),
            'listings' => $listings,
            
        ]);
    }

    
})->middleware(['auth', 'verified'])->name('franchiseeDashboard');

Route::post('/search', function (Request $request) {
    Log::info('Search Request:', $request->all());


    $query = Listing::query();

    if ($request->has('Franchise_type') && $request->input('Franchise_type') !== null && $request->input('Franchise_type') !== '') {
        $query->where('Franchise_type', $request->input('Franchise_type'));
    }

    if ($request->has('Franchise_location') && $request->input('Franchise_location') !== null && $request->input('Franchise_location') !== '') {
        $query->where('Franchise_location', $request->input('Franchise_location'));
    }

    if ($request->has('Franchise_price') && $request->input('Franchise_price') !== null && $request->input('Franchise_price') !== '') {
        $query->where('Franchise_price', '<=', $request->input('Franchise_price'));
        
    }


    $listings = $query->orderBy('created_at', 'desc')->get();


    if (Auth::check() && Auth::user()->user_role == 'franchisee') {
        return Inertia::render('franchiseeDashboard', [
            'user' => auth()->user(),
            'listings' => $listings,
            'isSearch' => true,
        ]);
    }

    return Inertia::render('HomePage', [
        'showResults' => $listings,
    ]);
})->name('search');



Route::middleware('auth')->group(function () {
        // Handles both interest and buy actions with dynamic methods.
        Route::post('/franchisee/{action}', [TransactionController::class, 'store'])->middleware('auth')->name('TransactionController.store');
        // Route::patch('/franchisee/{action}', [TransactionController::class, 'store'])->name('TransactionController.store');
        Route::get('franchisee/create', function () {
            return redirect('/franchiseeDashboard');
        });
        Route::post('/listings', [ListingsController::class, 'store'])->name('listings.store');
        Route::patch('/listings/{id}/edit', [ListingsController::class, 'edit'])->name('listings.edit');
        Route::delete('/listings/delete/{id}', [ListingsController::class, 'destroy'])->name('listings.destroy');
     
        // Handles deletion of a resource.
        Route::delete('/franchiseeDashboard', [TransactionController::class, 'destroy'])->name('TransactionController.destroy');
    });
    

Route::get("/", function (){
    return Inertia::render('HomePage');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/listings', [ListingsController::class, 'store'])->name('ListingsController.store');
});



require __DIR__.'/auth.php';
