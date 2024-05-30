<?php

namespace App\Http\Controllers;

use App\Models\plant;
use App\Http\Requests\StoreplantRequest;
use App\Http\Requests\UpdateplantRequest;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showALLPlants = plant::all();

        return $showALLPlants;
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
    public function store(StoreplantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(plant $plant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(plant $plant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateplantRequest $request, plant $plant)
    {
        $request->validate([

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(plant $plant)
    {
        //
    }
}
