<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Listing;
use App\Http\Controllers\ListingsController;
use App\Http\Controllers\TransactionController;

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
    $listings = Listing::where('user_id', auth()->id())->get();
   
    return Inertia::render('Dashboard',[
        'user' => auth()->user(),
        'listings' => $listings,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/franchiseeDashboard', function () {
    $listings = Listing::with('transactions')
    ->orderBy('created_at', 'desc')
    ->get();


    return Inertia::render('franchiseeDashboard', [
        'user' => auth()->user(),
        'listings' => $listings,
    ]);
})->middleware(['auth', 'verified'])->name('franchiseeDashboard');

Route::middleware('auth')->group(function () {
        // Handles both interest and buy actions with dynamic methods.
        Route::post('/franchisee/{action}', [TransactionController::class, 'store'])->middleware('auth')->name('TransactionController.store');
        // Route::patch('/franchisee/{action}', [TransactionController::class, 'store'])->name('TransactionController.store');
        Route::get('franchisee/create', function () {
            return redirect('/franchiseeDashboard');
        });
        // Route::get('franchisee/update', function () {
        //     return redirect('/franchiseeDashboard');
        // });
    
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
    //listings routes
    Route::post('/listings', [ListingsController::class, 'store'])->name('ListingsController.store');
});



require __DIR__.'/auth.php';
