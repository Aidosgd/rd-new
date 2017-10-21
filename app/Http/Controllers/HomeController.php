<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\Door;
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
        return view('home');
    }

    public function welcome()
    {
        $doors = Door::where('main_page', 1)->where('active', 1)->get();

        return view('welcome', compact('doors'));
    }

    public function mail(Request $request, Mailer $mailer)
    {

        $emails = ['denisov_sv@mail.ru', 'manager141214@mail.ru', 'gorbenko_oleg@mail.ru','aidosgd@gmail.com'];
        
        $mailer->send('emails.mail', ['name' => $request->input('name'), 'phone' => $request->input('phone')], function ($m) use ($emails) {
            $m->from('info@russdoors.kz', 'Заявка с сайта Russdoors');

            $m->to($emails, 'Aidos')->subject('Заявка с сайта Russdoors');
        });

        return redirect('/')->with('message', 'Письмо отправили!');

    }

    public function choco(){

        $doors = Door::where('main_page', 1)->where('active', 1)->get();

        return view('choco', compact('doors'));
    }
}
