<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('plants')->insert([
            [
                'name_id' => 'Alga merah',
                'name_en' => 'Red Alga',
                'domain' => 'Domain',
                'filume' => 'Rhodophyta',
                'class' => 'Bangiophyceae',
                'pembentukan' => 'spora',
            ],
            [
                'name_id' => 'Lamun',
                'name_en' => 'seagrass',
                'domain' => 'Eukaryota',
                'filume' => 'Rhodophyta',
                'class' => 'Monocotyledoneae',
                'pembentukan' => 'spora',
            ],
        ]);
    }
}
