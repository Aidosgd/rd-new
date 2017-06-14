<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Page extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'pages';

    protected $fillable = [
        'title', 'slug', 'weight', 'description', 'seo_title', 'seo_keywords', 'seo_description'
    ];

}
