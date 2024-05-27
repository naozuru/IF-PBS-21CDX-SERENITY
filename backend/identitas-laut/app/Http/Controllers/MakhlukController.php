<?php

namespace App\Http\Controllers;

use App\Models\Makhluk;
use App\Http\Requests\StoreMakhlukRequest;
use App\Http\Requests\UpdateMakhlukRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class MakhlukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showAllData = Makhluk::all();
        return response()->json($showAllData);
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

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMakhlukRequest $request)
    {
        // cek nama_ID apakah sudah ada
        $existingMakhluk = Makhluk::where('name_ID', $request->name_ID)->first();
        if ($existingMakhluk) {
            // name_ID already exists
            // handle the error or return a response indicating the duplication
            return response()->json(['error' => 'Nama makhluk sudah ada!'], 422);
        } else {
            // name_ID does not exist
            // proceed with storing the new resource
            $makhluk = Makhluk::create($request->all());
            return $makhluk;
        }
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
        // cek nama_ID apakah sudah ada
        $existingMakhluk = Makhluk::where('name_ID', $request->name_ID)->first();
        if ($existingMakhluk) {
            // name_ID already exists
            // handle the error or return a response indicating the duplication
            return response()->json(['error' => 'Nama makhluk sudah ada!'], 422);
        } else {
            // name_ID does not exist
            // proceed with storing the new resource
            $updateData = Makhluk::where('id', $makhluk->id)->update($request->all());
            return $updateData;
        }
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
