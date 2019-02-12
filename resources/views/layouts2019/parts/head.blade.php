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
<link rel="stylesheet" href="/css/all-new-2019.css">
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
</script>
<!-- Yandex.Metrika informer -->
<!--<a href="https://metrika.yandex.ru/stat/?id=26941914&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/26941914/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="26941914" data-lang="ru" /></a>-->
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(26941914, "init", {
        id:26941914,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/26941914" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->