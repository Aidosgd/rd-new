var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
// require('laravel-elixir-stylus');
elixir(function(mix) {
    mix.sass('main.scss');
    mix.scripts([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js',
        './bower_components/jquery-colorbox/jquery.colorbox.js',
        './resources/assets/js/plugins/slick.min.js',
        './resources/assets/js/main.js',
        ] ,
        'public/js/all.js', '/'
    );
    // mix.stylus('style.styl');
    mix.styles([
        './bower_components/font-awesome/css/font-awesome.css',
        './bower_components/bootstrap/dist/css/bootstrap.css',
        // './bower_components/owl.carousel/index.css',
        // './bower_components/owl.theme/index.css',
        // './bower_components/style.default/index.css',
        './bower_components/jquery-colorbox/example1/colorbox.css',
        './resources/assets/sass/plugins/catalog-style.css',
        './resources/assets/sass/plugins/shadowbox.css',
        './resources/assets/sass/plugins/slick.css',
        './resources/assets/sass/plugins/style.css',
        './public/css/main.css',
    ], 'public/css/all.css');
    mix.copy('./resources/assets/images/**.*', 'public/css/images');
    mix.copy('./bower_components/jquery-colorbox/example1/images/**.*', 'public/css/images');
    mix.copy('./bower_components/font-awesome/fonts/**.*', 'public/fonts');
    mix.copy('./bower_components/bootstrap/fonts/**.*', 'public/css/fonts');

    // admin
    mix.scripts([
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/jquery-ui/jquery-ui.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
        './bower_components/fastclick/lib/fastclick.js',
        './bower_components/AdminLTE/dist/js/adminlte.js',
        './bower_components/AdminLTE/dist/js/demo.js',
    ] , 'public/admin/js/all.js', '/');
    mix.styles([
        './bower_components/bootstrap/dist/css/bootstrap.css',
        './bower_components/AdminLTE/dist/css/skins/_all-skins.css',
        './bower_components/AdminLTE/dist/css/AdminLTE.css',
    ], 'public/admin/css/all.css');
    mix.copy('./bower_components/AdminLTE/dist/img/**.*', 'public/admin/css/images');

    mix.browserSync({
        proxy: 'rd-new.dev'
    });
});
