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
Route::get('скидки-на-двери1.php', 'PagesController@allNews');
Route::get('leras.php', 'PagesController@allNews');
Route::get('shymkent.php', 'PagesController@allNews');
Route::get('ust-kamenogorsk.php', 'PagesController@allNews');
Route::get('taraz.php', 'PagesController@allNews');
Route::get('taldykorgan.php', 'PagesController@allNews');
Route::get('stroydetali.php', 'PagesController@allNews');
Route::get('кызылорда.php', 'PagesController@allNews');
Route::get('karaganda.php', 'PagesController@allNews');
Route::get('balhash.php', 'PagesController@allNews');
Route::get('astana.php', 'PagesController@allNews');
Route::get('aktau.php', 'PagesController@allNews');
Route::get('metal-doors.php', 'PagesController@allNews');
Route::get('pages/interior_door', 'PagesController@interior');
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

//Admin
Route::group(['middleware' => 'App\Http\Middleware\AdminMiddleware'], function(){
    require_once "routes._admin.php";
});
