<?php

namespace App\Http\Controllers\Admin;

use App\Models\Menu;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class ProductCategoriesController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Категория' => '',
        ];

        $pageTitle = 'Категория';

        $product_category = ProductCategory::get();

        return view('admin.product_categories.index', compact('product_category', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Меню' => '/cp/menus',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';

        $menus = Menu::all()->lists('title','id');


        return view('admin.menus.form', [
            'menu' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'menus' => $menus,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();

        $parent_id = $input['parent_id'] == 0 ? null : $input['parent_id'];

        $menu = new Menu();

        $menu->fill([
            'title' => $input['title'],
            'link' => $input['link'],
            'weight' => $input['weight'],
            'parent_id' => $parent_id
        ]);

        $menu->save();

        return redirect('/cp/menus');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Меню' => '/cp/menus',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $menu = Menu::find($id);

        $menus = Menu::all()->lists('title','id');

//        dd($menus);

        return view('admin.menus.form', [
            'menu' => $menu,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'menus' => $menus,
        ]);
    }

    public function update(Request $requests, $id)
    {
        $input = $requests->all();

        $parent_id = $input['parent_id'] == 0 ? null : $input['parent_id'];

        $menu = Menu::find($id);

        $menu->fill([
            'title' => $input['title'],
            'link' => $input['link'],
            'weight' => $input['weight'],
            'parent_id' => $parent_id
        ]);

        $menu->update();


        Session::flash('message', 'Меню отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/menus');
    }

    public function destroy($id)
    {
        $menu = Menu::find($id);

        $menu->delete();

        Session::flash('message', 'Меню удалено');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/menus');
    }

    public function show()
    {
        dd(show);
    }
}
