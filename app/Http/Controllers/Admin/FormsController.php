<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class FormsController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Форма' => '',
        ];

        $pageTitle = 'Все формы';

        $page = Page::where('category', 1)->get();

        return view('admin.forms.index', compact('page', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Форма' => '/cp/forms',
            'Создать форму' => '',
        ];

        $pageTitle = 'Создать форму';

        $pages = Page::all()->lists('title','id');


        return view('admin.forms.form', [
            'page' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'pages' => $pages,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();

        $page = new Page();

        $page->fill([
            'title' => $input['title'],
            'title_kk' => $input['title_kk'],
            'slug' => Str::slug($input['title'], '_'),
            'weight' => $input['weight'],
            'description' => $input['description'],
            'description_kk' => $input['description_kk'],

            'category' => 1,
        ]);

        $page->save();

        return redirect('/cp/forms');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Форма' => '/cp/forms',
            'Создать форму' => '',
        ];

        $pageTitle = 'Создать форму';


        $page = Page::find($id);

        $pages = Page::all()->lists('title','id');

        return view('admin.forms.form', [
            'page' => $page,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'pages' => $pages,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

//        dd($input['description']);

        $page = Page::find($id);

        $page->fill([
            'title' => $input['title'],
            'title_kk' => $input['title_kk'],
            'slug' => Str::slug($input['title'], '_'),
            'weight' => $input['weight'],
            'description' => $input['description'],
            'description_kk' => $input['description_kk'],

            'category' => 1,
        ]);

        $page->update();

        Session::flash('message', 'Форма отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/forms');
    }

    public function destroy($id)
    {
        $page = Page::find($id);

        $page->delete();

        Session::flash('message', 'Форма удалена');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/forms');
    }
}
