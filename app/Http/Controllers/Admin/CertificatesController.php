<?php

namespace App\Http\Controllers\Admin;

use App\Models\Certificate;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CertificatesController extends Controller
{
    public function index()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Сертификаты' => '',
        ];

        $pageTitle = 'Все сертификаты';

        $certificates = Certificate::get();

        return view('admin.certificates.index', compact('certificates', 'breadcrumbs', 'pageTitle'));
    }

    public function create()
    {
        $breadcrumbs = [
            'Главная' => '/cp',
            'Сертификаты' => '/cp/certificates',
            'Создать сертификат' => '',
        ];

        $pageTitle = 'Создать сертификат';

        $certificates = Certificate::all()->lists('title','id');


        return view('admin.certificates.form', [
            'certificate' => null,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'certificates' => $certificates,
        ]);
    }

    public function store(Request $request)
    {
        $input  = $request->input();
        $image  = $request->file('image');

        $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
        $pathOriginal = public_path('uploads/certificates/'.$filename);
        Image::make($image->getRealPath())->save($pathOriginal);

        $certificate = new Certificate();

        $certificate->fill([
            'name' => $filename,
            'link' => $input['link'],
            'weight' => $input['weight'],
            'text_ru' => $input['text_ru'],
            'text_kk' => $input['text_kk'],
            'description_ru' => $input['description_ru'],
            'description_kk' => $input['description_kk'],
            'blank' => $input['blank']
        ]);

        $certificate->save();

        return redirect('/cp/certificates');
    }

    public function edit($id)
    {

        $breadcrumbs = [
            'Главная' => '/cp',
            'Сертификаты' => '/cp/certificates',
            'Создать сертификат' => '',
        ];

        $pageTitle = 'Создать сертификат';


        $certificate = Certificate::find($id);

        $certificates = Certificate::all()->lists('title','id');

        return view('admin.certificates.form', [
            'certificate' => $certificate,
            'breadcrumbs' => $breadcrumbs,
            'pageTitle' => $pageTitle,
            'certificates' => $certificates,
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();

        $certificate = Certificate::find($id);

        $image  = $request->file('image');
        if($image){
            $pathOld = public_path('uploads/certificate/'.$certificate->name);
            unlink($pathOld);

            $filename = date('Y-m-d-H-i').'-' . Str::slug($image->getClientOriginalName(), "_"). ".".$image->getClientOriginalExtension();
            $pathOriginal = public_path('uploads/certificate/'.$filename);
            Image::make($image->getRealPath())->save($pathOriginal);

            $certificate->fill([
                'name' => $filename,
                'link' => $input['link'],
                'weight' => $input['weight'],
                'text_ru' => $input['text_ru'],
                'text_kk' => $input['text_kk'],
                'description_ru' => $input['description_ru'],
                'description_kk' => $input['description_kk'],
                'blank' => $input['blank']
            ]);
        }else{
            $certificate->fill([
                'link' => $input['link'],
                'weight' => $input['weight'],
                'text_ru' => $input['text_ru'],
                'text_kk' => $input['text_kk'],
                'description_ru' => $input['description_ru'],
                'description_kk' => $input['description_kk'],
                'blank' => $input['blank']
            ]);
        }


        $certificate->update();

        Session::flash('message', 'Сертификат отредактирован');
        Session::flash('alert-class', 'alert-success');

        return redirect('/cp/certificates');
    }

    public function destroy($id)
    {
        $certificate = Certificate::find($id);
        $path= public_path('uploads/certificates/'.$certificate->name);
        unlink($path);
        $certificate->delete();

        Session::flash('message', 'Сертификат удален');
        Session::flash('alert-class', 'alert-danger');

        return redirect('/cp/certificates');
    }
}
