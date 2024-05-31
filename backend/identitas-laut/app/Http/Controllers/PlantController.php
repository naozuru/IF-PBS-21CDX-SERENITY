<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Http\Requests\StorePlantRequest;
use App\Http\Requests\UpdatePlantRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showAllPlants = Plant::all();

        return $showAllPlants;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlantRequest $request)
    {
        // cek nama_id apakah sudah ada
        $existingPlant = Plant::where('name_id', $request->name_id)->first();
        if ($existingPlant) {
            // name_id already exists
            // handle the error or return a response indicating the duplication
            return response()->json(['message' => 'The name of sea plant already exists.'], 409);
        } else {
            // name_id does not exist.
            // proceed with storing the new resource
            // and return a response indicating the success
            $plant = Plant::create($request->all());
            return response()->json(['message' => 'Sea plant data successfully added!', 'data' => $plant], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Plant $plant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plant $plant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlantRequest $request, Plant $plant)
    {
        // cek nama_id dan nama_en apakah sudah ada
        $existingPlant = Plant::where('name_id', $request->name_id)
        ->orWhere('name_en', $request->name_en)
        ->first();
        if ($existingPlant && $existingPlant->id !== $plant->id) {
            // name_id already exists in a different plant
            // handle the error or return a response indicating the duplication
            return response()->json(['message' => 'The sea plant data already exists.', 'data' => $existingPlant], 400);
        } else {
            // name_id and name_en do not exist.
            // proceed with updating the resource
            $plant->update($request->all());
            return response()->json(['message' => 'Sea plant data successfully updated!', 'data' => $plant], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
        $plant->delete();

        return response()->json(['message' => 'Data tumbuhan laut berhasil dihapus!']);
    }
}
