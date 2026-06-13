<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Menu extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'menu';

    protected $fillable = [
        'title', 'link', 'weight', 'parent_id'
    ];
}
