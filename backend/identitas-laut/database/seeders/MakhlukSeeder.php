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
        DB::table('makhluks')->insert([
            [
                'name_ID' => 'Paus Pembunuh',
                'name_EN' => 'Killer Whale',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Mammalia',
                'order' => 'Artiodactyla',
                'infraorder' => 'Cetacea',
                'family' => 'Delphinidae',
                'genus' => 'Orcinus',
                'species' => 'O. orca',
                'description' => 'Paus pembunuh atau orca adalah spesies paus terbesar dalam keluarga Delphinidae dan satu-satunya spesies dalam genus Orcinus. Paus pembunuh adalah pemangsa puncak di ekosistem laut. Paus pembunuh adalah mamalia laut yang paling tersebar di seluruh dunia, ditemukan di semua lautan, dari kutub hingga garis khatulistiwa.'
            ],
            [
                'name_ID' => 'Lumba-Lumba Hidung Botol',
                'name_EN' => 'Bottlenose Dolphin',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Mammalia',
                'order' => 'Artiodactyla',
                'infraorder' => 'Cetacea',
                'family' => 'Delphinidae',
                'genus' => 'Tursiops',
                'species' => 'Gervais',
                'description' => 'Lumba-lumba hidung botol adalah spesies lumba-lumba yang paling dikenal. Lumba-lumba ini dapat ditemukan di perairan hangat dan sedang di seluruh dunia, dan juga di beberapa perairan dingin. Lumba-lumba hidung botol adalah salah satu dari 40 spesies lumba-lumba yang ada.'
            ],
            [
                'name_ID' => 'Paus Biru',
                'name_EN' => 'Blue Whale',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Mammalia',
                'order' => 'Cetacea',
                'infraorder' => 'Mysticeti',
                'family' => 'Balaenopteridae',
                'genus' => 'Balaenoptera',
                'species' => 'B. musculus',
                'description' => 'Paus biru adalah hewan terbesar yang pernah hidup di Bumi. Mereka dapat ditemukan di semua lautan di dunia dan sering terlihat di perairan dingin.'
            ],
            [
                'name_ID' => 'Hiu Putih Besar',
                'name_EN' => 'Great White Shark',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Chondrichthyes',
                'order' => 'Lamniformes',
                'infraorder' => '',
                'family' => 'Lamnidae',
                'genus' => 'Carcharodon',
                'species' => 'C. carcharias',
                'description' => 'Hiu putih besar adalah salah satu predator laut terbesar dan paling ditakuti di dunia. Mereka dapat ditemukan di berbagai lautan, terutama di dekat pantai yang kaya akan makanan.'
            ],
            [
                'name_ID' => 'Penyu Hijau',
                'name_EN' => 'Green Sea Turtle',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Reptilia',
                'order' => 'Testudines',
                'infraorder' => 'Cryptodira',
                'family' => 'Cheloniidae',
                'genus' => 'Chelonia',
                'species' => 'C. mydas',
                'description' => 'Penyu hijau adalah salah satu spesies penyu laut terbesar dan terkenal. Mereka sering ditemukan di perairan tropis dan subtropis.'
            ],
            [
                'name_ID' => 'Ikan Pari Manta',
                'name_EN' => 'Manta Ray',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Chondrichthyes',
                'order' => 'Myliobatiformes',
                'infraorder' => '',
                'family' => 'Mobulidae',
                'genus' => 'Manta',
                'species' => 'M. birostris',
                'description' => 'Ikan pari manta adalah spesies ikan pari besar yang ditemukan di perairan tropis dan subtropis. Mereka dikenal karena ukuran besar dan gerakan berenang yang anggun.'
            ],
            [
                'name_ID' => 'Hiu Martil',
                'name_EN' => 'Hammerhead Shark',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Chondrichthyes',
                'order' => 'Carcharhiniformes',
                'infraorder' => '',
                'family' => 'Sphyrnidae',
                'genus' => 'Sphyrna',
                'species' => 'S. lewini',
                'description' => 'Hiu martil dikenal karena bentuk kepalanya yang unik, yang memungkinkannya memiliki penglihatan yang lebih baik. Mereka biasanya ditemukan di perairan hangat di seluruh dunia.'
            ],
            [
                'name_ID' => 'Ubur-Ubur Kotak',
                'name_EN' => 'Box Jellyfish',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Cnidaria',
                'class' => 'Cubozoa',
                'order' => 'Carybdeida',
                'infraorder' => '',
                'family' => 'Carybdeidae',
                'genus' => 'Chironex',
                'species' => 'C. fleckeri',
                'description' => 'Ubur-ubur kotak adalah salah satu makhluk laut paling berbisa. Mereka dapat ditemukan di perairan hangat Indo-Pasifik dan dikenal karena sengatannya yang mematikan.'
            ],
            [
                'name_ID' => 'Ikan Napoleon',
                'name_EN' => 'Napoleon Wrasse',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Labriformes',
                'infraorder' => '',
                'family' => 'Labridae',
                'genus' => 'Cheilinus',
                'species' => 'C. undulatus',
                'description' => 'Ikan napoleon adalah salah satu ikan karang terbesar dan dapat ditemukan di perairan Indo-Pasifik. Mereka dikenal karena warna-warni cerah dan pola tubuh yang unik.'
            ],
            [
                'name_ID' => 'Anemon Laut',
                'name_EN' => 'Sea Anemone',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Cnidaria',
                'class' => 'Anthozoa',
                'order' => 'Actiniaria',
                'infraorder' => '',
                'family' => 'Actiniidae',
                'genus' => 'Heteractis',
                'species' => 'H. magnifica',
                'description' => 'Anemon laut adalah hewan laut yang biasanya hidup menempel pada karang atau substrat lainnya. Mereka memiliki tentakel yang digunakan untuk menangkap mangsa.'
            ],
            [
                'name_ID' => 'Kuda Laut',
                'name_EN' => 'Seahorse',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Syngnathiformes',
                'infraorder' => '',
                'family' => 'Syngnathidae',
                'genus' => 'Hippocampus',
                'species' => 'H. erectus',
                'description' => 'Kuda laut adalah ikan kecil yang dikenal karena bentuk tubuhnya yang unik, menyerupai kuda. Mereka ditemukan di perairan hangat di seluruh dunia.'
            ],
            [
                'name_ID' => 'Ikan Kupu-Kupu',
                'name_EN' => 'Butterflyfish',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Perciformes',
                'infraorder' => '',
                'family' => 'Chaetodontidae',
                'genus' => 'Chaetodon',
                'species' => 'C. auriga',
                'description' => 'Ikan kupu-kupu adalah ikan karang yang dikenal karena warna-warna cerah dan pola tubuh yang indah. Mereka biasanya ditemukan di perairan tropis.'
            ],
            [
                'name_ID' => 'Ikan Badut',
                'name_EN' => 'Clownfish',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Perciformes',
                'infraorder' => '',
                'family' => 'Pomacentridae',
                'genus' => 'Amphiprion',
                'species' => 'A. ocellaris',
                'description' => 'Ikan badut adalah ikan kecil yang sering ditemukan hidup bersimbiosis dengan anemon laut. Mereka terkenal karena hubungan erat dengan anemon laut yang memberikan perlindungan.'
            ],
            [
                'name_ID' => 'Bintang Laut',
                'name_EN' => 'Starfish',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Echinodermata',
                'class' => 'Asteroidea',
                'order' => 'Forcipulatida',
                'infraorder' => '',
                'family' => 'Asteriidae',
                'genus' => 'Asterias',
                'species' => 'A. rubens',
                'description' => 'Bintang laut adalah hewan laut yang dikenal karena bentuk tubuhnya yang bintang dan kemampuan regenerasi yang luar biasa. Mereka ditemukan di berbagai habitat laut di seluruh dunia.'
            ],
            [
                'name_ID' => 'Kerapu Raksasa',
                'name_EN' => 'Goliath Grouper',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Perciformes',
                'infraorder' => '',
                'family' => 'Epinephelidae',
                'genus' => 'Epinephelus',
                'species' => 'E. itajara',
                'description' => 'Kerapu raksasa adalah salah satu ikan karang terbesar dan dapat tumbuh sangat besar. Mereka ditemukan di perairan subtropis dan tropis Atlantik Barat.'
            ],
            [
                'name_ID' => 'Kepiting Raja',
                'name_EN' => 'King Crab',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Arthropoda',
                'class' => 'Malacostraca',
                'order' => 'Decapoda',
                'infraorder' => '',
                'family' => 'Lithodidae',
                'genus' => 'Paralithodes',
                'species' => 'P. camtschaticus',
                'description' => 'Kepiting raja adalah salah satu spesies kepiting terbesar dan paling berharga secara komersial. Mereka biasanya ditemukan di perairan dingin Pasifik Utara.'
            ],
            [
                'name_ID' => 'Belut Laut',
                'name_EN' => 'Moray Eel',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Anguilliformes',
                'infraorder' => '',
                'family' => 'Muraenidae',
                'genus' => 'Gymnothorax',
                'species' => 'G. funebris',
                'description' => 'Belut laut adalah ikan yang dikenal karena tubuhnya yang panjang dan licin. Mereka biasanya ditemukan di celah-celah karang di perairan tropis dan subtropis.'
            ],
            [
                'name_ID' => 'Kuda Laut Daun',
                'name_EN' => 'Leafy Seadragon',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Chordata',
                'class' => 'Actinopterygii',
                'order' => 'Syngnathiformes',
                'infraorder' => '',
                'family' => 'Syngnathidae',
                'genus' => 'Phycodurus',
                'species' => 'P. eques',
                'description' => 'Kuda laut daun adalah spesies unik yang dikenal karena appendiks yang menyerupai daun di seluruh tubuhnya, memberikan kamuflase sempurna di antara rumput laut.'
            ],
            [
                'name_ID' => 'Udang Mantis',
                'name_EN' => 'Mantis Shrimp',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Arthropoda',
                'class' => 'Malacostraca',
                'order' => 'Stomatopoda',
                'infraorder' => '',
                'family' => 'Squillidae',
                'genus' => 'Odontodactylus',
                'species' => 'O. scyllarus',
                'description' => 'Udang mantis adalah krustasea yang dikenal karena kemampuan serangan cepat dan kuat. Mereka ditemukan di perairan tropis dan subtropis di seluruh dunia.'
            ],
            [
                'name_ID' => 'Sotong',
                'name_EN' => 'Cuttlefish',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Mollusca',
                'class' => 'Cephalopoda',
                'order' => 'Sepiida',
                'infraorder' => '',
                'family' => 'Sepiidae',
                'genus' => 'Sepia',
                'species' => 'S. officinalis',
                'description' => 'Sotong adalah moluska yang dikenal karena kemampuan mereka untuk mengubah warna kulit mereka dengan cepat. Mereka ditemukan di berbagai lautan di seluruh dunia.'
            ],
            [
                'name_ID' => 'Teripang',
                'name_EN' => 'Sea Cucumber',
                'domain' => 'Eukaryota',
                'kingdom' => 'Animalia',
                'phylum' => 'Echinodermata',
                'class' => 'Holothuroidea',
                'order' => 'Aspidochirotida',
                'infraorder' => '',
                'family' => 'Holothuriidae',
                'genus' => 'Holothuria',
                'species' => 'H. edulis',
                'description' => 'Teripang adalah hewan laut yang dikenal karena bentuk tubuhnya yang panjang dan lembut. Mereka biasanya ditemukan di dasar laut dan memainkan peran penting dalam ekosistem laut.'
            ],
        ]);
        
    }
}
