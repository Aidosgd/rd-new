
<!DOCTYPE html>
<html>
<head>

    <meta name="yandex-verification" content="fc96ab4f89f02f34" />
    <meta name="google-site-verification" content="vzsTl8ZUFAL3kTSKjF8epMqPQJ0Osx1GC9XA3mcgdNo" />

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <title>
      @if (isset($seo_title))
      {{ $seo_title }}
      @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/2')
      ✓ Белорусские Двери ✓ Алматы
      @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/1')
      ✓ Межкомнатные ✓ Российские Двери ✓ Алматы		
      @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/3')
      ✓ Межкомнатные ✓ Элитные Двери ✓ Алматы
      @elseif ($_SERVER['REQUEST_URI'] == '/doors/fittings')
      ✓ Фурнитура ✓ Ручки ✓ Для Дверей ✓ Алматы
      @else
      ✓ Двери Алматы ✓ Md ✓ Двери Максмид ✓ Российские Двери со Склада
      @endif
  </title>
  <meta name="description" content="
  @if (isset($seo_description) )
  {{ $seo_description }}
  @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/2')
  Белорусские двери ШИРОКОГО выбора! Межкомнатные двери ВЫСОГО КАЧЕСТВА! ✔ Со склада ✔ Оптом ✔ АКЦИИ и СКИДКИ! ➜ ЗАХОДИ
  @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/1')
  Отличный выбор российских межкомнатных дверей! Межкомнатные двери ВЫСОГО КАЧЕСТВА! ✔ Со склада ✔ Оптом ✔ АКЦИИ и СКИДКИ! ➜ ЗАХОДИ
  @elseif ($_SERVER['REQUEST_URI'] == '/doors/mezhkomnatnye-dveri/m/3')
  Элитные межкомнатные двери ЛУЧШЕГО качества по СУПЕР цене! ✔ Со склада ✔ Оптом ✔ АКЦИИ и СКИДКИ! ➜ ЗАХОДИ
  @elseif ($_SERVER['REQUEST_URI'] == '/doors/fittings')
  Фурнитура для дверей ВЫСОКОГО качества. Ручки для дверей, кнопки и замки! ✔ Со склада ✔ Оптом ✔ АКЦИИ и СКИДКИ! ➜ ЗАХОДИ
  @else 
  ШИРОКИЙ выбор дверей: Межкомнатные двери, Металлические двери. ✓ Md ✓ Двери Максмид ✔ Со склада ✔ Оптом ✔ АКЦИИ и СКИДКИ! ➜ ЗАХОДИ
  @endif
  ">
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
    <!-- CarrotQuest BEGIN -->
    <script type="text/javascript">
        (function(){
            function Build(name, args){return function(){window.carrotquestasync.push(name, arguments);} }
            if (typeof carrotquest === 'undefined') {
                var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
                s.src = '//cdn.carrotquest.io/api.min.js';
                var x = document.getElementsByTagName('head')[0]; x.appendChild(s);
                window.carrotquest = {}; window.carrotquestasync = []; carrotquest.settings = {};
                var m = ['connect', 'track', 'identify', 'auth', 'open', 'onReady', 'addCallback', 'removeCallback', 'trackMessageInteraction'];
                for (var i = 0; i < m.length; i++) carrotquest[m[i]] = Build(m[i]);
            }
    })();
    carrotquest.connect('13135-4ed1ec2e9c2505c969d1dd1209');
</script>
<!-- CarrotQuest END -->
@yield('head')
<!-- Global site tag (gtag.js) - Google Ads: 769605172 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-769605172"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-769605172');
</script><script type="text/javascript">
var yaParams = {};
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip.up66.ru/', true);
xhr.onload = function() {
yaParams.ip = this.responseText;
}
xhr.send();
</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter51879767 = new Ya.Metrika({
                    id:51879767,
                    params:window.yaParams,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/51879767" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</head>
<body>

    <div class="top-menu hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <a href="/contacts/almaty.php">
                        <i class="fa fa-map-marker"></i>
                        г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);
                    </a>
                </div>
                <div class="col-md-5">
                    <i class="fa fa-phone"></i>
                    8 (727) 345-01-01; 8 (747) 488-29-12;
                </div>
                <div class="col-md-2">
                    <a href="https://www.facebook.com/russdoors/?ref=br_rs" target="_blank">
                        <i class="fa fa-facebook"></i> @russdoors.kz
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <i class="fa fa-map-marker"></i>
                    г.Алматы ул. Толе би 189 уг.ул. Гагарина (возле завода АЗТМ)
                </div>
                <div class="col-md-5">
                    <i class="fa fa-phone"></i>
                    тел. 3791352, 3791342, 87479493016
                </div>
                <div class="col-md-2">
                    <a href="https://www.instagram.com/russdoors.kz/">
                        <i class="fa fa-instagram"></i> @russdoors.kz
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        @include('newdesign.parts.header')
        @yield('mobileBanners')
        <div class="content">
            @yield('content')
        </div>

        <div class="header" style="background: linear-gradient(to top, #1d100b, #44261c); height: 51px;">
            <div class="navbar">
                <ul class="nav navbar-nav">
                    <li><a href="/pages/o_nas.php">Контакты</a></li>
                    <li><a href="/pages/o_nas.php">О компании</a></li>
                    <li><a href="news.php">Новости</a></li>
                    <li><a href="/pages/poleznye_stati.php">Полезные советы</a></li>
                </ul>
            </div>
        </div>

        @include('newdesign.parts.footer')

        <script  src="/js/all.js"></script>
        @yield('scripts')
        <!--scripts-->
        {{--<script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-72113909-1', 'auto');
            ga('send', 'pageview');
        </script>--}}
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


        <!-- BEGIN JIVOSITE CODE -->
        <script type='text/javascript'>
            (function(){ var widget_id = 'q5pj7WkUOl';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        </script>
        <!-- END JIVOSITE CODE -->
    </div>

</body>
</html>