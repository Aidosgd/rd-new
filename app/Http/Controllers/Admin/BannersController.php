<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class BannersController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Баннер' => '',
        ];

        $pageTitle = 'Все слайды';

        $banner = Banner::get();

        return view('admin.banners.index', compact('banner', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Баннер' => '/cp/banners',
            'Создать баннер' => '',
        ];

        $pageTitle = 'Создать баннер';

        $banners = Banner::all()->lists('title','id');


        return view('admin.banners.form', [
            'banner' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'banners' => $banners,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();
        $image  = $request->file('image');

        $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
        $pathOriginal = public_path('uploads/banner/'.$filename);
        Image::make($image->getRealPath())->save($pathOriginal);

        $banner = new Banner();

        $banner->fill([
            'name' => $filename,
            'link' => $input['link'],
            'weight' => $input['weight'],
        ]);

        $banner->save();

        return redirect('/cp/banners');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Баннер' => '/cp/banners',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $banner = Banner::find($id);

        $banners = Banner::all()->lists('title','id');

        return view('admin.banners.form', [
            'banner' => $banner,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'banners' => $banners,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

        $banner = Banner::find($id);

        $image  = $request->file('image');
        if($image){
            $pathOld = public_path('uploads/banner/'.$banner->name);
            unlink($pathOld);

            $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/banner/'.$filename);
            Image::make($image->getRealPath())->save($pathOriginal);

            $banner->fill([
                'name' => $filename,
                'link' => $input['link'],
                'weight' => $input['weight'],
            ]);
        }else{
            $banner->fill([
                'link' => $input['link'],
                'weight' => $input['weight'],
            ]);
        }


        $banner->update();

        Session::flash('message', 'Баннер отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/banners');
    }

    public function destroy($id)
    {
        $banner = Banner::find($id);
        $path= public_path('uploads/banner/'.$banner->name);
        unlink($path);
        $banner->delete();

        Session::flash('message', 'Дверь удалено');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/banners');
    }
}
