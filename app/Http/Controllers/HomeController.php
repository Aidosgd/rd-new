<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;
use App\Models\Page;
use App\Models\Review;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailer;
use Mail;

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
        return view('new-home-page');
    }

    public function welcome()
    {
        $doors = Door::where('main_page', 1)->where('active', 1)->orderBy('weight', 'asc')->get();

        $reviews = Review::all();

        $slider = Slider::all();

        $form1 = Page::find(45);

        return view('layouts2019.home', compact('doors', 'reviews', 'slider', 'form1'));
    }

    public function mail(Request $request, Mailer $mailer)
    {

        $emails = ['manager141214@mail.ru'];
        
        $mailer->send('emails.mail', ['name' => $request->input('name'), 'phone' => $request->input('phone'), 'email' => $request->input('email')], function ($m) use ($emails) {
            $m->from('info@russdoors.kz', 'Заявка с сайта Russdoors');

            $m->to($emails, 'Aidos')->subject('Заявка с сайта Russdoors на звонок');
        });

        return redirect('/')->with('message', 'Письмо отправили!');

    }

    public function download(Request $request, Mailer $mailer)
    {

        $emails = ['manager141214@mail.ru'];

        $mailer->send('emails.download', ['email' => $request->input('email')], function ($m) use ($emails) {
            $m->from('info@russdoors.kz', 'Заявка с сайта Russdoors');

            $m->to($emails, 'Aidos')->subject('Заявка с сайта Russdoors для скачивания каталога дверей');
        });

        return redirect('/')->with('message', 'Письмо отправили!');

    }

    public function choco(){

        $doors = Door::where('main_page', 1)->where('active', 1)->get();

        return view('choco', compact('doors'));
    }
}
