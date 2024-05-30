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
            ],
        ]);
    }
}
