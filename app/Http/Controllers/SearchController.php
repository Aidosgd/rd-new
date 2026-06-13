<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        // $lang и $city приходят в шаблон из глобального view-композера (AppServiceProvider)
        $query = trim($request->get('q'));
        $city  = $request->input('city') ? $request->input('city') : 'almaty';

        $doors = Door::with('images', 'category')->where('active', 1);

        if ($query !== '') {
            $like = '%' . $query . '%';
            $doors->where(function ($sub) use ($like) {
                $sub->where('title', 'like', $like)
                    ->orWhere('title_kk', 'like', $like)
                    ->orWhere('description', 'like', $like)
                    ->orWhere('description_kk', 'like', $like);
            });
        }

        $doors = $doors->orderBy('created_at', 'desc')
            ->paginate(20)
            ->appends(['q' => $query, 'city' => $city]);

        $seo_title = trans('home.search_results') . ': ' . $query;

        return view('layouts2019.pages.search', compact('doors', 'query', 'seo_title'));
    }
}
