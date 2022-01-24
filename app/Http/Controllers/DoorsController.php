<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Banner;
use App\Models\Door;
use App\Models\Page;

class DoorsController extends Controller
{
    public function index($doorCategory)
    {
        $paginateCount = $doorCategory->id == 1 ? 8 : 6;

        $doors = Door::where('doors_category_id', $doorCategory->id)
            ->where('active', 1)
            ->orderBy('id', 'desc')
            ->paginate($paginateCount);

        $pageInfo = Page::find($doorCategory->id == 1 ? 48 : 49);

        $banners = Banner::find($doorCategory->id == 1 ? 5 : 4);

        return view('layouts2019.pages.doors.index', compact('doors', 'doorCategory', 'pageInfo', 'banners'));
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

        if(app()->getLocale() == 'kk'){
            $door->title = $door->title_kk;
            $door->description = $door->description_kk;

            $seo_title = $door->seo_title_kz ? $door->seo_title_kz : $door->seo_title;
            $seo_description = $door->seo_description_kz ? $door->seo_description_kz : $door->seo_description;
            $seo_keywords = $door->seo_keywords_kz ? $door->seo_keywords_kz : $door->seo_keywords;
        }

        return view('layouts2019.pages.doors.show', compact('door', 'doorCategory', 'seo_title', 'seo_keywords', 'seo_description'));
    }

    public function manufacturer($doorCategory, $manufacturer)
    {
        $paginateCount = $doorCategory->id == 1 ? 8 : 6;

        $doors = Door::where('doors_category_id', $doorCategory->id)
            ->where('active', 1)
            ->where('manufacturer', $manufacturer)
            ->paginate($paginateCount);

        $CategoryName = [
            1 => 'Российские',
            2 => 'Белорусские',
            3 => 'Элитные',
        ];

        $doorCategory->name = $CategoryName[$manufacturer];

        $pageInfo = \App\Models\Page::find($doorCategory->id == 1 ? 48 : 49);

        $banners = Banner::find(5);

        return view('layouts2019.pages.doors.index', compact('doors', 'doorCategory', 'manufacturer', 'pageInfo', 'banners'));
    }
}
