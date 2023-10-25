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
            'phone' => 'required|regex:/^370\d{8}$/'
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


    public function update(Request $request, Salon $salon)
    {
        $validatedData = $request->validate([
            'name' => 'required|min:3|max:255',
            'address' => 'required|min:3|max:255',
            'phone' => 'required|regex:/^370\d{8}$/'
        ], 
        [
            'name.required' => 'Tu pamiršai įvesti pavadinimą',
            'name.min' => 'Pavadinimas turi būti bent 3 simboliai',
        ]);

        $salon->update($validatedData);

        return response()->json([
            'message' => 'Salon updated successfully'
        ], 200);
    }


    public function destroy(Salon $salon)
    {
        $salon->delete();

        return response()->json([
            'message' => 'Salon deleted successfully'
        ], 200);
    }
}
