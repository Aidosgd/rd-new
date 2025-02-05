<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Slider extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'sliders';

    protected $fillable = [
        'name', 'weight', 'link', 'text_ru', 'text_kk', 'description_ru', 'description_kk', 'blank'
    ];

}
