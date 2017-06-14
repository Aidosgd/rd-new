<?php

namespace App\Templates;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Doors implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->resize(null, 300, function ($constraint) {
            $constraint->aspectRatio();
        });
    }
}