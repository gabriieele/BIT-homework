<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'color' => 'crimson',
            'size' => '200px'
        ]);
    }

    public function about()
    {
        return view('about', [
            'color' => 'crimson'
        ]);
    }

    public function letters()
    {
        return response()->json([
              'valueSize' =>  rand(1, 300) . 'px'
         ]);
    }
}
