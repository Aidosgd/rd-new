<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;

class DoorsController extends Controller
{
    public function index($doorCategory)
    {
        $doors = Door::where('doors_category_id', $doorCategory->id)->where('active', 1)->get();

        return view('doors.index', compact('doors', 'doorCategory'));
    }

    public function show($doorCategory, $doorSlug)
    {
        $door = Door::where('doors_category_id', $doorCategory->id)
            ->where('slug', $doorSlug->slug)
            ->where('active', 1)
            ->first();

        $seo_title = $door->seo_title;
        $seo_keywords = $door->seo_keywords;
        $seo_description = $door->seo_description;

        return view('doors.show', compact('door', 'doorCategory', 'seo_title', 'seo_keywords', 'seo_description'));
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

        return view('doors.index', compact('doors', 'doorCategory', 'manufacturer'));
    }
}
