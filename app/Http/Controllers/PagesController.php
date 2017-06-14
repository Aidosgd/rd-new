<?php

namespace App\Http\Controllers;

use App\Http\Requests;

class PagesController extends Controller
{
    public function show($pageName)
    {
        return view('pages.show', compact('pageName'));
    }
}
