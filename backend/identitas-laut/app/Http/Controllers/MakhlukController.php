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
    // Method untuk menampilkan satu data atau mencari berdasarkan beberapa kolom
    public function show(Request $request, $makhluk)
    {
        if (is_numeric($makhluk)) {
            // Jika $makhluk adalah angka, maka cari berdasarkan ID
            $showOneData = Makhluk::find($makhluk);
        } else {
            // Jika $makhluk adalah string, maka lakukan pencarian di beberapa kolom
            $keyword = $makhluk;
            $showOneData = Makhluk::where('name_ID', 'like', '%' . $keyword . '%')
                ->orWhere('name_EN', 'like', '%' . $keyword . '%')
                ->orWhere('domain', 'like', '%' . $keyword . '%')
                ->orWhere('kingdom', 'like', '%' . $keyword . '%')
                ->orWhere('phylum', 'like', '%' . $keyword . '%')
                ->orWhere('class', 'like', '%' . $keyword . '%')
                ->orWhere('order', 'like', '%' . $keyword . '%')
                ->orWhere('infraorder', 'like', '%' . $keyword . '%')
                ->orWhere('family', 'like', '%' . $keyword . '%')
                ->orWhere('genus', 'like', '%' . $keyword . '%')
                ->orWhere('species', 'like', '%' . $keyword . '%')
                ->get();
        }

        return response()->json($showOneData);
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
        // cek nama_ID apakah sudah ada, tapi bukan dari makhluk yang sedang di-update
        $existingMakhluk = Makhluk::where('name_ID', $request->name_ID)
                                ->where('id', '!=', $makhluk->id)
                                ->first();

        if ($existingMakhluk) {
            // name_ID already exists
            // handle the error or return a response indicating the duplication
            return response()->json(['error' => 'Nama makhluk sudah ada!'], 422);
        } else {
            // name_ID does not exist
            // proceed with storing the new resource
            $makhluk->update($request->all());
            return response()->json(['message' => 'Makhluk berhasil diperbarui!'], 200);
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
