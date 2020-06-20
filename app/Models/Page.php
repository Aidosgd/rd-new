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
        'title', 'title_kk', 'slug', 'weight', 'description', 'description_kk', 'seo_title', 'seo_keywords', 'seo_description',
        'category'
    ];

}
