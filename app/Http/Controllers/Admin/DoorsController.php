<?php

namespace App\Http\Controllers\Admin;

use App\Models\Door;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class DoorsController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Меню' => '',
        ];

        $pageTitle = 'Все объявления';

        $door = Door::get();

        return view('admin.doors.index', compact('door', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Меню' => '/cp/doors',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';

        $doors = Door::all()->lists('title','id');


        return view('admin.doors.form', [
            'door' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'doors' => $doors,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();

        $door = new Door();

        $door->fill([
            'title' => $input['title'],
            'price' => $input['price'],
            'slug' => Str::slug($input['title'], '_'),
            'weight' => $input['weight'],
            'active' => isset($input['active']) ? '1' : '0',
            'main_page' => isset($input['main_page']) ? '1' : '0',
            'doors_category_id' => $input['doors_category_id'],
            'manufacturer' => $input['manufacturer'],
            'description' => $input['description'],

            'seo_title' => $input['seo_title'],
            'seo_keywords' => $input['seo_keywords'],
            'seo_description' => $input['seo_description'],
        ]);

        $main_image  = $request->file('main_image');

        if($main_image){
            $filename = date('Y-m-d-H-i').'-' . Str::slug($main_image->getClientOriginalName(), "_"). ".".$main_image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/doors/'.$filename);
            Image::make($main_image->getRealPath())->save($pathOriginal);

            $door->fill([
                'main_image' => $filename,
            ]);
        }

        $door->save();

        $images = $request->file('images');
        $images = array_filter($images);

        if(count($images)){
            foreach($images as $image){
                $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
                $pathOriginal = public_path('uploads/doors/'.$filename);
                Image::make($image->getRealPath())->save($pathOriginal);

                \App\Models\Image::create([
                    'name' => $filename,
                    'doors_id' => $door->id
                ]);
            }
        }

        return redirect('/cp/doors');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Меню' => '/cp/doors',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $door = Door::find($id);

        $doors = Door::all()->lists('title','id');

        return view('admin.doors.form', [
            'door' => $door,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'doors' => $doors,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

        $door = Door::find($id);

        $image  = $request->file('main_image');
        if($image){
            $pathOld = public_path('uploads/doors/'.$door->main_image);
            if($door->main_image){
                unlink($pathOld);
            }

            $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/doors/'.$filename);
            Image::make($image->getRealPath())->save($pathOriginal);

            $door->fill([
                'title' => $input['title'],
                'price' => $input['price'],
                'slug' => Str::slug($input['title'], '_'),
                'weight' => $input['weight'],
                'active' => isset($input['active']) ? '1' : '0',
                'main_page' => isset($input['main_page']) ? '1' : '0',
                'main_image' => $filename,
                'doors_category_id' => $input['doors_category_id'],
                'manufacturer' => $input['manufacturer'],
                'description' => $input['description'],

                'seo_title' => $input['seo_title'],
                'seo_keywords' => $input['seo_keywords'],
                'seo_description' => $input['seo_description'],
            ]);
        }else{
            $door->fill([
                'title' => $input['title'],
                'price' => $input['price'],
                'slug' => Str::slug($input['title'], '_'),
                'weight' => $input['weight'],
                'active' => isset($input['active']) ? '1' : '0',
                'main_page' => isset($input['main_page']) ? '1' : '0',
                'doors_category_id' => $input['doors_category_id'],
                'manufacturer' => $input['manufacturer'],
                'description' => $input['description'],

                'seo_title' => $input['seo_title'],
                'seo_keywords' => $input['seo_keywords'],
                'seo_description' => $input['seo_description'],
            ]);
        }

        $door->update();

        $doorsImages = $request->input('doors_images');
        if($doorsImages)
            foreach($door->images as $item){
                if(in_array($item->id, $doorsImages))
                    continue;
                $item->delete();
                $pathOriginal = public_path('uploads/doors/'.$item->name);
                unlink($pathOriginal);
            }
        else
            foreach($door->images as $item){
                $item->delete();
                $pathOriginal = public_path('uploads/doors/'.$item->name);
                unlink($pathOriginal);
            }
        $images = array_filter($request->file('images', []));

        if(count($images)){
            foreach($images as $image){
                $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
                $pathOriginal = public_path('uploads/doors/'.$filename);
                Image::make($image->getRealPath())->save($pathOriginal);

                \App\Models\Image::create([
                    'name' => $filename,
                    'doors_id' => $door->id
                ]);
            }
        }


        Session::flash('message', 'Меню отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/doors');
    }

    public function destroy($id)
    {
        $door = Door::find($id);

        if($door->images){
            foreach($door->images as $image){
                $filename = $image->name;
                $pathSmall = public_path('uploads/doors/'.$filename);
                unlink($pathSmall);
                $image->delete();
            }
        }

        if(!empty($door->main_image)){
            $pathM = public_path('uploads/doors/'.$door->main_image);
            unlink($pathM);
        }

        $door->delete();

        Session::flash('message', 'Дверь удалено');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/doors');
    }
}
