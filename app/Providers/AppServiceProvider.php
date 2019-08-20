<?php

namespace App\Providers;

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
    public function boot(Factory $view)
    {
        Blade::directive('convert', function ($money) {
            return "<?php echo number_format($money, 0, ',', ' '); ?>";
        });

        $langs = LaravelLocalization::getSupportedLocales();
        $lang = LaravelLocalization::setLocale();

        $view->composer(['*'], function($view) use($langs, $lang){
            $view->with(compact('langs', 'lang'));
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
