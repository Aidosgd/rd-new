<?php

namespace App\Providers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Page;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\View\Factory;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Factory $view, Request $request)
    {
        Blade::directive('convert', function ($money) {
            return "<?php echo number_format($money, 0, ',', ' '); ?>";
        });

        $langs = LaravelLocalization::getSupportedLocales();
        $lang = LaravelLocalization::setLocale();
        $topMenu = Menu::with('children')->where('id', 5)->get();
        $bottomMenu = Menu::with('children')->where('id', 12)->get();

        $form2 = Page::find(46);
        $form3 = Page::find(47);
        $contactsNurSultan = Page::find(50);

        $city = $request->input('city') ? $request->input('city') : 'almaty';

        $view->composer(['*'], function($view) use($langs, $lang, $topMenu, $bottomMenu, $form2, $form3, $city, $contactsNurSultan){
            $view->with(compact('langs', 'lang', 'topMenu', 'bottomMenu', 'form2', 'form3', 'city', 'contactsNurSultan'));
        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
