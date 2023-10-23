<?php

namespace App\Http\Controllers;

use App\Models\Salon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalonController extends Controller
{

    public function index()
    {
        return Inertia::render('Salons');
    }



    public function store(Request $request)
    {

        sleep(1);

        $validatedData = $request->validate([
            'name' => 'required|min:3|max:255',
            'address' => 'required|min:3|max:255',
            'phone' => 'required|min:3|max:20',
        ], 
        [
            'name.required' => 'Tu pamiršai įvesti pavadinimą',
            'name.min' => 'Pavadinimas turi būti bent 3 simboliai',
        ]);

        $id = Salon::create($validatedData)->id;

        return response()->json([
            'message' => 'Salon created successfully',
            'id' => $id
        ], 201);
        
       
    }

    public function list()
    {
        $salons = Salon::all();

        return response()->json([
            'salons' => $salons
        ], 200);
    }


    /**
     * Display the specified resource.
     */
    public function show(Salon $salon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Salon $salon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Salon $salon)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Salon $salon)
    {
        //
    }
}
