
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{ isset($seo_title) ? $seo_title : 'Двери Алматы в ассортименте. Российские двери со склада' }}</title>
    <meta name="description" content="{{ isset($seo_description) ? $seo_description : 'Широкий выбор дверей: межкомнатные двери, металлические двери со склада оптом.' }}">
    <meta name="keywords" content="{{ isset($seo_keywords) ? $seo_keywords : 'интернет, магазин, дверей, в, Алматы' }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap and Font Awesome css-->
    <!-- we use cdn but you can also include local files located in css directory-->
    <link rel="stylesheet" href="/css/all.css">
    <link href='https://fonts.googleapis.com/css?family=Lobster&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <!-- Favicon-->
    <link rel="shortcut icon" href="/favicon.png">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
    @yield('head')
</head>
<body>
<div class="container">
    @include('parts.header')

    <div class="content">
        @yield('content')
    </div>

    @include('parts.footer')

    <script  src="/js/all.js"></script>
    @yield('scripts')
    <!--scripts-->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-72113909-1', 'auto');
        ga('send', 'pageview');
    </script>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter26941914 = new Ya.Metrika({id:26941914,
                        webvisor:true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true});
                } catch(e) { }
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="//mc.yandex.ru/watch/26941914" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <!-- Optional -->
    <!-- {literal} -->
    <script type='text/javascript'>
        window['liv'+'eT'+'e'+'x'] = true,
            window['live'+'T'+'e'+'xI'+'D'] = 82515,
            window['li'+'veTex'+'_obj'+'ect'] = true;
        (function() {
            var t = document['creat'+'eE'+'lem'+'ent']('script');
            t.type ='text/javascript';
            t.async = true;
            t.src = '//'+'c'+'s15'+'.li'+'v'+'e'+'te'+'x'+'.'+'ru/js/clien'+'t.js';
            var c = document['getElemen'+'tsByTagNa'+'me']('script')[0];
            if ( c ) c['paren'+'t'+'No'+'de']['i'+'nser'+'tBefo'+'re'](t, c);
            else document['doc'+'um'+'entEle'+'m'+'ent']['f'+'irst'+'Chi'+'ld']['a'+'ppen'+'dChil'+'d'](t);
        })();
    </script>
    <!-- {/literal} -->
    <!-- end footer -->
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter34783985 = new Ya.Metrika({
                        id: 34783985,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true
                    });
                } catch (e) {}
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function() {
                    n.parentNode.insertBefore(s, n);
                };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/34783985" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</div>

</body>
</html>