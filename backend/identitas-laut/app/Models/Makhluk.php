<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Makhluk extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name_ID', 'name_EN', 'domain', 'kingdom', 'phylum', 'class', 'order', 'infraorder', 'family', 'genus', 'species'];

    use HasFactory;
}
