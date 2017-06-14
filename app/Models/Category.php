<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Category extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'doors_category';

    protected $fillable = [
        'name', 'slug', 'weight',
    ];

}
