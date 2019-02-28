<?php

namespace App\Http\Controllers\Admin;

use App\Models\Review;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ReviewsController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Отзыв' => '',
        ];

        $pageTitle = 'Все отзывы';

        $review = Review::get();

        return view('admin.reviews.index', compact('review', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Отзыв' => '/cp/reviews',
            'Создать отзыв' => '',
        ];

        $pageTitle = 'Создать отзыв';

        $reviews = Review::all()->lists('title','id');


        return view('admin.reviews.form', [
            'review' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'reviews' => $reviews,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();
        $image  = $request->file('image');

        $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
        $pathOriginal = public_path('uploads/reviews/'.$filename);
        Image::make($image->getRealPath())->save($pathOriginal);

        $review = new Review();

        $review->fill([
            'image' => $filename,
            'name' => $input['name'],
            'city' => $input['city'],
            'description' => $input['description'],
        ]);

        $review->save();

        return redirect('/cp/reviews');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Отзыв' => '/cp/reviews',
            'Создать меню' => '',
        ];

        $pageTitle = 'Создать меню';


        $review = Review::find($id);

        $reviews = Review::all()->lists('title','id');

        return view('admin.reviews.form', [
            'review' => $review,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'reviews' => $reviews,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

        $review = Review::find($id);

        $image  = $request->file('image');
        if($image){
            $pathOld = public_path('uploads/reviews/'.$review->name);
            unlink($pathOld);

            $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/reviews/'.$filename);
            Image::make($image->getRealPath())->save($pathOriginal);

            $review->fill([
                'image' => $filename,
                'name' => $input['name'],
                'city' => $input['city'],
                'description' => $input['description'],
            ]);
        }else{
            $review->fill([
                'name' => $input['name'],
                'city' => $input['city'],
                'description' => $input['description'],
            ]);
        }


        $review->update();

        Session::flash('message', 'Отзыв отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/reviews');
    }

    public function destroy($id)
    {
        $review = Review::find($id);
        $path= public_path('uploads/reviews/'.$review->image);
        unlink($path);
        $review->delete();

        Session::flash('message', 'Отзыв удален');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/reviews');
    }
}
