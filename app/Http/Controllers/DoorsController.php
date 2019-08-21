<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;

class DoorsController extends Controller
{
    public function index($doorCategory)
    {
        $paginateCount = $doorCategory->id == 1 ? 8 : 6;
        
        $doors = Door::where('doors_category_id', $doorCategory->id)->where('active', 1)->paginate($paginateCount);

        return view('layouts2019.pages.doors.index', compact('doors', 'doorCategory'));
    }

    public function show($doorCategory, $doorSlug)
    {
        $door = Door::where('doors_category_id', $doorCategory->id)
            ->where('slug', $doorSlug->slug)
            ->where('active', 1)
            ->first();

        if(app()->getLocale() == 'kk'){
            $door->title = $door->title_kk;
            $door->description = $door->description_kk;
        }

        $seo_title = $door->seo_title;
        $seo_keywords = $door->seo_keywords;
        $seo_description = $door->seo_description;

        return view('layouts2019.pages.doors.show', compact('door', 'doorCategory', 'seo_title', 'seo_keywords', 'seo_description'));
    }

    public function manufacturer($doorCategory, $manufacturer)
    {
        $doors = Door::where('doors_category_id', $doorCategory->id)
            ->where('active', 1)
            ->where('manufacturer', $manufacturer)
            ->get();

        $CategoryName = [
            1 => 'Российские',
            2 => 'Белорусские',
            3 => 'Элитные',
        ];

        $doorCategory->name = $CategoryName[$manufacturer];

        return view('layouts2019.pages.doors.index', compact('doors', 'doorCategory', 'manufacturer'));
    }
}
