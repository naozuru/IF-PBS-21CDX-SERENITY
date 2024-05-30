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
                'name_ID' => 'Kelp',
                'name_EN' => '-',
                'kingdom' => '-',
                'domain' => 'Eukaryoto',
                'phylum' => 'Gyrista',
=======
                'name_id' => 'Kelp',
                'name_en' => 'Kelp',
                'domain' => 'Eukaryota',
                'phylum' => 'Gyrista',
                'subphylum' => 'Ochrophytina',
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
                'class' => 'Phaeophyceae',
                'order' => 'Laminariales',
            ],
            [
<<<<<<< HEAD
                'name_ID' => 'Myriophyllum',
                'name_EN' => '-',
                'kingdom' => '-',
                'domain' => '-',
                'phylum' => '-',
                'class' => '-',
                'order' => 'Saxifragales',
=======
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
