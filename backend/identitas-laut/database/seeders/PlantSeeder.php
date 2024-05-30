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
<<<<<<< HEAD
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
=======
                'name_id' => 'Kelp',
                'name_en' => 'Kelp',
                'domain' => 'Eukaryota',
                'phylum' => 'Gyrista',
                'subphylum' => 'Ochrophytina',
                'class' => 'Phaeophyceae',
                'order' => 'Laminariales',
            ],
            [
                'name_id' => 'Ganggang',
                'name_en' => 'Alga',
                'domain' => 'Eukaryota, Bacteria',
                'phylum' => 'Chlorophyta (for green algae)',
                'subphylum' => 'Chlorophytina',
                'class' => 'Chlorophyceae',
                'order' => '',
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
            ],
        ]);
    }
}
