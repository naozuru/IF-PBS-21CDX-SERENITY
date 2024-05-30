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
                'name_ID' => 'Kelp',
                'name_EN' => '-',
                'kingdom' => '-',
                'domain' => 'Eukaryoto',
                'phylum' => 'Gyrista',
                'class' => 'Phaeophyceae',
                'order' => 'Laminariales',
            ],
            [
                'name_ID' => 'Myriophyllum',
                'name_EN' => '-',
                'kingdom' => '-',
                'domain' => '-',
                'phylum' => '-',
                'class' => '-',
                'order' => 'Saxifragales',
            ],
        ]);
    }
}
