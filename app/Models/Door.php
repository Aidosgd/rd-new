<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Door extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'doors';

    protected $fillable = [
        'title', 'price', 'slug', 'weight', 'description', 'doors_category_id', 'manufacturer',
        'main_page', 'main_image', 'active',
        'seo_title', 'seo_keywords', 'seo_description'
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'doors_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'doors_category_id');
    }

    public function getImage($id)
    {
        $image = Image::where('doors_id', $id)->first();
        if($image == null){
            return 'logo2.svg';
        }else{
            return $image->name;
        }
    }

    public function getSrc($template = NULL)
    {
        if(is_null($template))
        {
            return $this->name;
        }

        return route('imagecache', ['template' => $template, 'filename' => str_replace('/uploads/', '', $this->main_image)]);
    }
}
