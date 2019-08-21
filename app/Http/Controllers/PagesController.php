<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;
use App\Models\Page;

class PagesController extends Controller
{
    public function show($pageName)
    {
        if(app()->getLocale() == 'kk'){
            $pageName->title = $pageName->title_kk;
            $pageName->description = $pageName->description_kk;
        }

        $seo_title = $pageName->seo_title;
        $seo_keywords = $pageName->seo_keywords;
        $seo_description = $pageName->seo_description;

        return view('layouts2019.pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
    }

    public function contacts($pageName)
    {
        if(app()->getLocale() == 'kk'){
            $pageName->title = $pageName->title_kk;
            $pageName->description = $pageName->description_kk;
        }
        $seo_title = $pageName->seo_title;
        $seo_keywords = $pageName->seo_keywords;
        $seo_description = $pageName->seo_description;

        return view('layouts2019.pages.contacts', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
    }

    public function interior()
    {
        $doors = Door::where('doors_category_id', 1)
            ->where('active', 1)
            ->get();

        return view('layouts2019.pages.interior', compact('doors'));
    }

    public function allNews()
    {
        $news = Page::where('seo_keywords', 'news')
            ->get();

        return view('pages.news', compact('news'));
    }
}
