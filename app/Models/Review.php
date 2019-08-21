<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';

    protected $fillable = [
        'name', 'city', 'description', 'name_kk', 'city_kk', 'description_kk', 'image'
    ];
}
