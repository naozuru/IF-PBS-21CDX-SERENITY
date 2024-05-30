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
       // cek nama_ID apakah sudah ada
       $existingPlant = Plant::where('name_id', $request->name_id)->first();
       if ($existingPlant) {
           // name_ID already exists
           // handle the error or return a response indicating the duplication
           return response()->json(['error' => 'Nama tanaman sudah ada!'], 422);
       } else {
           // name_ID does not exist.
           // proceed with storing the new resource
           $plant = Plant::create($request->all());
           return $plant;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
        //
    }
}
