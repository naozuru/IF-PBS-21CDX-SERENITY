<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MakhlukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('makhluks')->insert(
            [
            'name_ID' => "Paus Pembunuh",
            'name_EN' => "Killer Whale",
            'domain' => "Eukaryota",
            'kingdom' => "Animalia",
            'phylum' => "Chordata",
            'class' => "Mammalia",
            'order' => "Artiodactyla",
            'infraorder' => "Cetacea",
            'family' => "Delphinidae",
            'genus' => "Orcinus",
            'species' => "O. orca",
            ]
        );
    }
}
