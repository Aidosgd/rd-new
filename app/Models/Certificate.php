<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $table = 'certificates';

    protected $fillable = [
        'name', 'weight', 'link', 'text_ru', 'text_kk', 'description_ru', 'description_kk', 'blank'
    ];
}
