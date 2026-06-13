<?php

Route::group(['prefix' => 'cp'], function($router)
{
    Route::resource('/', 'Admin\HomeController');

    Route::model('menu', 'App\Model\Menu');
    Route::resource('menus', 'Admin\MenusController');

    Route::model('door', 'App\Model\Door');
    Route::resource('doors', 'Admin\DoorsController');

    Route::model('page', 'App\Model\Page');
    Route::resource('pages', 'Admin\PagesController');

    Route::model('slider', 'App\Model\Slider');
    Route::resource('sliders', 'Admin\SlidersController');

    Route::model('banner', 'App\Model\Banner');
    Route::resource('banners', 'Admin\BannersController');

//
//    Route::model('product_categories', 'App\Model\ProductCategory');
//    Route::resource('product_categories', 'Admin\ProductCategoriesController');

    View::composer('admin.parts.aside', function($view){
        $admin = Auth::user();
        $view->with(compact('admin'));
    });
    View::composer('admin.parts.header', function($view){
        $admin = Auth::user();
        $view->with(compact('admin'));
    });
});