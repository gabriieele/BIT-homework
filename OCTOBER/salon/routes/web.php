<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController as H;
use App\Http\Controllers\SalonController as S;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', [H::class, 'index'])->name('home');
Route::get('/about', [H::class, 'about'])->name('about');

route::get('/letters', [H::class, 'letters'])->name('letters');



Route::prefix('/salons')->name('salon-')->group(function () {

    Route::get('/', [S::class, 'index'])->name('index');
    Route::post('/', [S::class, 'store'])->name('store');
    Route::get('/list', [S::class, 'list'])->name('list');
    Route::delete('/{salon}', [S::class, 'destroy'])->name('destroy');
    Route::put('/{salon}', [S::class, 'update'])->name('update');

});




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
