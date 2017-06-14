<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Banner extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'banners';

    protected $fillable = [
        'name', 'weight', 'link'
    ];

}
