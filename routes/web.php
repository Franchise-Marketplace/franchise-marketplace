<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Listing;
use App\Http\Controllers\ListingsController;

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
    return Inertia::render('franchiseeDashboard');
})->middleware(['auth', 'verified'])->name('franchiseeDashboard');

Route::get("/", function (){
    return Inertia::render('HomePage');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //listings routes
    Route::post('/listings', [ListingsController::class, 'store'])->name('ListingsController.store');
});



require __DIR__.'/auth.php';
