<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Http\Requests\StorePlantRequest;
use App\Http\Request\UpdatePlantRequest;
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
        $showAllPlants = Plant::all();

        return $showAllPlants;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlantRequest $request)
    {
        //
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
        //return view edit dengan data plant
        $editData = plant::edit($plant->id);

        return $editData;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(updateplantsRequest $request, plant $plant)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
       
    }
}
