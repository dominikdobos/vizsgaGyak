<?php

namespace App\Http\Controllers;

use App\Models\szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function getSzakdogak() {
        return szakdoga::all();
    }

    public function postSzakdogak(Request $request)
    {
        // Az üres stringeket automatikusan null-ra váltjuk.
        $request->merge(array_map(function ($value) {
            return $value === '' ? null : $value;
        }, $request->all()));

        // 1. Validáció
        $validatedData = $request->validate([
            'szakdoga_nev' => 'required|string|max:255',
            'tagokneve' => 'required|string|max:255',
            'githublink' => 'required|url',
            'oldallink' => 'nullable|url', // Nem kötelező mező
        ]);

        // 2. Adatok mentése az adatbázisba
        try {
            $szakdoga = new szakdoga();
            $szakdoga->szakdoga_nev = $validatedData['szakdoga_nev'];
            $szakdoga->tagokneve = $validatedData['tagokneve'];
            $szakdoga->githublink = $validatedData['githublink'];
            $szakdoga->oldallink = $validatedData['oldallink']; // Direktben beállítjuk null értékként, ha üres stringként jött
            $szakdoga->save();

            // 3. Válasz küldése
            return response()->json([
                'message' => 'Szakdolgozat sikeresen mentve.',
                'szakdoga' => $szakdoga,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Hiba történt az adatok mentésekor.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

}
