<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Models\plant;
use App\Http\Requests\StoreplantRequest;
use App\Http\Requests\UpdateplantRequest;
=======
use App\Models\Plant;
use App\Http\Requests\StorePlantRequest;
use App\Http\Requests\UpdatePlantRequest;
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
<<<<<<< HEAD
        $showALLPlants = plant::all();

        return $showALLPlants;
=======
        $showAllPlants = Plant::all();

        return $showAllPlants;
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
<<<<<<< HEAD
        //
=======
        $showAllPlants = Plant::all();

        return $showAllPlants;
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    }

    /**
     * Store a newly created resource in storage.
     */
<<<<<<< HEAD
    public function store(StoreplantRequest $request)
=======
    public function store(StorePlantRequest $request)
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Display the specified resource.
     */
<<<<<<< HEAD
    public function show(plant $plant)
=======
    public function show(Plant $plant)
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
<<<<<<< HEAD
    public function edit(plant $plant)
=======
    public function edit(Plant $plant)
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
<<<<<<< HEAD
    public function update(UpdateplantRequest $request, plant $plant)
    {
        $request->validate([

        ]);
=======
    public function update(UpdatePlantRequest $request, Plant $plant)
    {
        //
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    }

    /**
     * Remove the specified resource from storage.
     */
<<<<<<< HEAD
    public function destroy(plant $plant)
=======
    public function destroy(Plant $plant)
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }
}
