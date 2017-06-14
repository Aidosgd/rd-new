<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function welcome()
    {
        $doors = Door::where('main_page', 1)->where('active', 1)->get();

        return view('welcome', compact('doors'));
    }
}