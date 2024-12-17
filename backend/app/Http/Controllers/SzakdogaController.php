<?php

namespace App\Http\Controllers;

use App\Models\szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function updateSzakdoga(Request $request, string $id)
    {
        $record = szakdoga::find($id);
        $record->fill($request->all());
        $record->save();
    }

    public function deleteSzakdoga(string $id)
    {
        szakdoga::find($id)->delete();
    }

    public function getSzakdogak()
    {
        return szakdoga::all();
    }

    public function postSzakdogak(Request $request)
    {
        $validatedData = $request->validate([
            'szakdoga_nev' => 'required|string|max:255',
            'tagokneve' => 'required|string|max:255',
            'githublink' => 'required|url',
            'oldallink' => 'nullable|string|url',
        ]);

        try {
            $szakdoga = new szakdoga();
            $szakdoga->szakdoga_nev = $validatedData['szakdoga_nev'];
            $szakdoga->tagokneve = $validatedData['tagokneve'];
            $szakdoga->githublink = $validatedData['githublink'];
            $szakdoga->oldallink = $validatedData['oldallink'];
            $szakdoga->save();

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
