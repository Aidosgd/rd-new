<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'doors_images';

    protected $fillable = [
        'name', 'doors_id'
    ];

    public function getSrc($template = NULL)
    {
        if(is_null($template))
        {
            return $this->name;
        }
        //dd(route('imagecache', ['template' => $template, 'filename' => str_replace('/uploads/', '', $this->name)]));

        return route('imagecache', ['template' => $template, 'filename' => str_replace('/uploads/', '', $this->name)]);
    }
}
