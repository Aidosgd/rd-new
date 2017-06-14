<?php

namespace App\Http\Controllers\Admin;

use App\Models\Slider;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class SlidersController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Слайдер' => '',
        ];

        $pageTitle = 'Все слайды';

        $slider = Slider::get();

        return view('admin.sliders.index', compact('slider', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Слайдер' => '/cp/sliders',
            'Создать страницу' => '',
        ];

        $pageTitle = 'Создать страницу';

        $sliders = Slider::all()->lists('title','id');


        return view('admin.sliders.form', [
            'slider' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'sliders' => $sliders,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();
        $image  = $request->file('image');

        $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
        $pathOriginal = public_path('uploads/slider/'.$filename);
        Image::make($image->getRealPath())->save($pathOriginal);

        $slider = new Slider();

        $slider->fill([
            'name' => $filename,
            'link' => $input['link'],
            'weight' => $input['weight'],
        ]);

        $slider->save();

        return redirect('/cp/sliders');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Слайдер' => '/cp/sliders',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $slider = Slider::find($id);

        $sliders = Slider::all()->lists('title','id');

        return view('admin.sliders.form', [
            'slider' => $slider,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'sliders' => $sliders,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

        $slider = Slider::find($id);

        $image  = $request->file('image');
        if($image){
            $pathOld = public_path('uploads/slider/'.$slider->name);
            unlink($pathOld);

            $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/slider/'.$filename);
            Image::make($image->getRealPath())->save($pathOriginal);

            $slider->fill([
                'name' => $filename,
                'link' => $input['link'],
                'weight' => $input['weight'],
            ]);
        }else{
            $slider->fill([
                'link' => $input['link'],
                'weight' => $input['weight'],
            ]);
        }


        $slider->update();

        Session::flash('message', 'Слайдер отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/sliders');
    }

    public function destroy($id)
    {
        $slider = Slider::find($id);
        $path= public_path('uploads/slider/'.$slider->name);
        unlink($path);
        $slider->delete();

        Session::flash('message', 'Дверь удалено');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/sliders');
    }
}
