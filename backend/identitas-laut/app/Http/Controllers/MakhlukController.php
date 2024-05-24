<?php

namespace App\Http\Controllers;

use App\Models\Makhluk;
use App\Http\Requests\StoreMakhlukRequest;
use App\Http\Requests\UpdateMakhlukRequest;
use Illuminate\Support\Facades\DB;


class MakhlukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showAllData = Makhluk::all();

        return $showAllData;
    }

    public function showSpesificData()
    {
        $makhluk = DB::table('makhluks')
            ->select('name_ID', 'name_EN')
            ->get();

        return $makhluk;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $makhluk = DB::table('makhluks')
        ->select('name_ID')
        ->get();

        return $makhluk;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMakhlukRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Makhluk $makhluk)
    {
        $showOneData = Makhluk::find($makhluk);

        return $showOneData;
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Makhluk $makhluk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMakhlukRequest $request, Makhluk $makhluk)
    {
        // $updateData = DB::table('makhluks')
        //                 ->where('id', $makhluk->id)
        //                 ->update(['name_ID' => 'Paus']);

        // return $updateData;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Makhluk $makhluk)
    {
        $deleteData = Makhluk::destroy($makhluk->id);

        return $deleteData;
    }
}
