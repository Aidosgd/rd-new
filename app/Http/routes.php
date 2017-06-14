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
Route::get('pages/{pageName}', 'PagesController@show');

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

Route::get('leras.php', function (){
   return 'test';
});

//Admin
Route::group(['middleware' => 'App\Http\Middleware\AdminMiddleware'], function(){
    require_once "routes._admin.php";
});
