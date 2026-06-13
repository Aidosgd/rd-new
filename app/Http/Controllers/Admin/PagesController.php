<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class PagesController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Страницы' => '',
        ];

        $pageTitle = 'Все страницы';

        $page = Page::get();

        return view('admin.pages.index', compact('page', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Страницы' => '/cp/pages',
            'Создать страницу' => '',
        ];

        $pageTitle = 'Создать страницу';

        $pages = Page::all()->lists('title','id');


        return view('admin.pages.form', [
            'page' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'pages' => $pages,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();

//        dd($input);

        $page = new Page();

        $page->fill([
            'title' => $input['title'],
            'slug' => Str::slug($input['title'], '_'),
            'weight' => $input['weight'],
            'description' => $input['description'],

            'seo_title' => $input['seo_title'],
            'seo_keywords' => $input['seo_keywords'],
            'seo_description' => $input['seo_description'],
        ]);

        $page->save();

        return redirect('/cp/pages');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Страницы' => '/cp/pages',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $page = Page::find($id);

        $pages = Page::all()->lists('title','id');

        return view('admin.pages.form', [
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
            'slug' => Str::slug($input['title'], '_'),
            'weight' => $input['weight'],
            'description' => $input['description'],

            'seo_title' => $input['seo_title'],
            'seo_keywords' => $input['seo_keywords'],
            'seo_description' => $input['seo_description'],
        ]);

        $page->update();

        Session::flash('message', 'Страницы отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/pages');
    }

    public function destroy($id)
    {
        $page = Page::find($id);

        $page->delete();

        Session::flash('message', 'Дверь удалено');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/pages');
    }
}
