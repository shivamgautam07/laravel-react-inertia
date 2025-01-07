<?php
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/create', function () {
//     sleep(2);
//     return Inertia::render('Create');
// });

Route::resource('posts', PostController::class);

