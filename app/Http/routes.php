<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::get('/', 'HomeController@welcome');

// DOORS
Route::bind('doorCategory', function($value){
    return \App\Models\Category::where('slug', '=', $value)->first();
});
Route::bind('doorSlug', function($value){
    return \App\Models\Door::where('slug', '=', $value)->first();
});
Route::get('doors/{doorCategory}', 'DoorsController@index');
Route::get('doors/{doorCategory}/m/{manufacturer}', 'DoorsController@manufacturer');
Route::get('doors/{doorCategory}/n/{doorSlug}', 'DoorsController@show');

// PAGES
Route::bind('pageName', function($value){
    return \App\Models\Page::where('slug', '=', $value)->first();
});
Route::get('news.php', 'PagesController@allNews');
Route::get('pages/news.php', 'PagesController@allNews');
Route::get('скидки-на-двери1.php', function (){
    $pageName = \App\Models\Page::find(30);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('leras.php', function (){
    $doorCategory = \App\Models\Category::where('slug', '=', 'metalicheskie-dveri')->first();
    $seo_title = 'Входные двери оптом и металлические двери Алматы большой выбор';
    $seo_description = 'Большой выбор входных Металлических дверей производства России в Алматы';
    $doors = \App\Models\Door::where('doors_category_id', $doorCategory->id)->where('active', 1)->get();
    return view('doors.index', compact('doors', 'doorCategory', 'seo_title', 'seo_description'));
});
Route::get('shymkent.php', function (){
    $pageName = \App\Models\Page::find(11);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('ust-kamenogorsk.php', function (){
    $pageName = \App\Models\Page::find(10);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('taraz.php', function (){
    $pageName = \App\Models\Page::find(9);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('taldykorgan.php', function (){
    $pageName = \App\Models\Page::find(8);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('stroydetali.php', function (){
    $doorCategory = \App\Models\Category::where('slug', '=', 'mezhkomnatnye-dveri')->first();
    $seo_title = 'Межкомнатные Двери Алматы. Купить двери оптом в Алматы';
    $seo_description = 'Межкомнатные Двери Алматы производства России и Белоруссии. Широкий выбор, низкие цены.';
    $doors = \App\Models\Door::where('doors_category_id', $doorCategory->id)->where('active', 1)->get();
    return view('doors.index', compact('doors', 'doorCategory', 'seo_title', 'seo_description'));
});
Route::get('кызылорда.php', function (){
    $pageName = \App\Models\Page::find(12);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('karaganda.php', function (){
    $pageName = \App\Models\Page::find(7);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('balhash.php', function (){
    $pageName = \App\Models\Page::find(6);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('astana.php', function (){
    $pageName = \App\Models\Page::find(5);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('aktau.php', function (){
    $pageName = \App\Models\Page::find(4);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('metal-doors.php', function (){
    $doorCategory = \App\Models\Category::where('slug', '=', 'metalicheskie-dveri')->first();
    $seo_title = 'Металлические Двери в Алматы и Астане';
    $seo_description = 'Большой ассортимент металлических Дверей в Алматы и Астане';
    $doors = \App\Models\Door::where('doors_category_id', $doorCategory->id)->where('active', 1)->get();
    return view('doors.index', compact('doors', 'doorCategory', 'seo_title', 'seo_description'));
});
Route::get('riccardi.php', function (){
    $pageName = \App\Models\Page::find(41);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('ricardi-diamante.php', function (){
    $pageName = \App\Models\Page::find(38);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('ricardi-argento.php', function (){
    $pageName = \App\Models\Page::find(39);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('ricardi-venezia.php', function (){
    $pageName = \App\Models\Page::find(40);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});
Route::get('распродажа.php', function (){
    $pageName = \App\Models\Page::find(36);
    $seo_title = $pageName->seo_title;
    $seo_keywords = $pageName->seo_keywords;
    $seo_description = $pageName->seo_description;
    return view('pages.show', compact('pageName', 'seo_title', 'seo_keywords', 'seo_description'));
});

Route::get('pages/interior_door.php', 'PagesController@interior');
Route::get('pages/{pageName}.php', 'PagesController@show');

View::composer('parts.header', function($view){
    $menu = \App\Models\Menu::get();
    $view->with(compact('menu'));
});

View::composer('parts.slider', function($view){
    $sliders = \App\Models\Slider::get();
    $view->with(compact('sliders'));
});

View::composer('parts.main_banner', function($view){
    $banners = \App\Models\Banner::get();
    $view->with(compact('banners'));
});

Route::get('leras', function (){
   return 'test';
});

Route::post('mail', 'HomeController@mail');

Route::get('choco', 'HomeController@choco');

//Admin
Route::group(['middleware' => 'App\Http\Middleware\AdminMiddleware'], function(){
    require_once "routes._admin.php";
});
