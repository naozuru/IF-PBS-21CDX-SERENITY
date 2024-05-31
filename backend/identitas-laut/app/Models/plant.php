<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Plant extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['name_id', 'name_en', 'domain', 'phylum', 'subphylum', 'class', 'order'];

    use HasFactory;
}
