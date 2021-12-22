<meta name="yandex-verification" content="fc96ab4f89f02f34" />
<meta name="google-site-verification" content="vzsTl8ZUFAL3kTSKjF8epMqPQJ0Osx1GC9XA3mcgdNo" />

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>
    @if (isset($seo_title))
        {{ $seo_title }}
    @elseif ($_SERVER['REQUEST_URI'] == '/ru/sale')
        Распродажа Дверей Успей Приобрести по Выгодной Цене
    @elseif ($_SERVER['REQUEST_URI'] == '/kk/sale')
        Есіктерді Сату Тиімді Бағамен Сатып Алынады
    @elseif ($_SERVER['REQUEST_URI'] == '/ru/doors/fittings')
        Фурнитура на Межкомнатные и Входные (Металлические) Двери Купить
    @elseif ($_SERVER['REQUEST_URI'] == '/kk/doors/fittings')
        Ішкі және Кіреберіс (Металл) Есіктерді Сатып Алуға Арналған Арматура
    @elseif ($_SERVER['REQUEST_URI'] == '/ru/pages/interior_door.php')
        Подобрать Дверь под Интерьер: к Полу, по Цвету, По Размеру
    @elseif ($_SERVER['REQUEST_URI'] == '/kk/pages/interior_door.php')
        Интерьерге Арналған Есікті Таңдаңыз: Еден, Түс, Өлшем
    @elseif ($_SERVER['REQUEST_URI'] == '/kk')
        Алматыдағы Қоймадан Көтерме және Бөлшек Есіктер Беларуссия Есіктерін Сатып Алыңыз
	@else
        Двери оптом и в розницу | Купить белорусские двери со склада в Алматы
    @endif
</title>
<meta name="description" content="
  @if (isset($seo_description) )
{{ $seo_description }}
@elseif ($_SERVER['REQUEST_URI'] == '/ru/sale')
        Распродажа дверей в Алматы ☝Скидываем цену до -70% ⭐Выгодные предложения от Russdoors ➜ЗАХОДИ!
@elseif ($_SERVER['REQUEST_URI'] == '/kk/sale')
        Алматыда есіктерді сату ☝Біз бағаны -70%-ға дейін арзандаттық ⭐Russdoors ұсынған қолайлы ұсыныстар ➜Кіріңіз!
@elseif ($_SERVER['REQUEST_URI'] == '/ru/doors/fittings')
        Широкий выбор фурнитуры ✔️для Межкомнатных и Входных дверей ✔️Оптом и в Розницу ☝Лучшая цена на дверную фурнитуру ➜ЗАХОДИ!
@elseif ($_SERVER['REQUEST_URI'] == '/kk/doors/fittings')
        Аппараттық құралдардың кең таңдауы ✔️Интерьер және кіреберіс есіктері үшін ✔️Сауда және бөлшек сауда ☝Ешкі жабдықтарына арналған ең жақсы баға ➜Кіріңіз!
@elseif ($_SERVER['REQUEST_URI'] == '/ru/pages/interior_door.php')
        Удобный конструктор для подбора двери под подходящий интерьер ✔️по Цвету и Размеру ✔️под Пол и Ламинат ➜ Заходи и примеряй дверь!
@elseif ($_SERVER['REQUEST_URI'] == '/kk/pages/interior_door.php')
        Ыңғайлы интерьерге есік таңдауға ыңғайлы дизайнер ✔️Сары және өлшемі ✔️Еден мен ламинаттан ➜ Кіріп, есікті көріңіз!
@elseif ($_SERVER['REQUEST_URI'] == '/kk')
        Алматыдағы орыс және беларусь есіктері ✔️Көтерме және бөлшек сауда ✔️Қойма және тапсырыс беруші ☝Ең жақсы бағамен есік сатып алғыңыз келе ме? ➜Кіріңіз!
@else
        ✔️ Российские и белорусские двери в Алматы | Оптом и в розницу | Со склада и под заказ Хотите купить двери по лучшей цене?
@endif
        ">

@if (isset($_GET['page']) && 
    (parse_url($_SERVER['REQUEST_URI'])['path'] == '/ru/mezhkomnatnie-dveri.php' || 
        parse_url($_SERVER['REQUEST_URI'])['path'] == '/ru/metalicheskie-dveri.php' ||
        parse_url($_SERVER['REQUEST_URI'])['path'] == '/ru/doors/fittings' ||
		parse_url($_SERVER['REQUEST_URI'])['path'] == '/ru/door-sale.php' ||
		parse_url($_SERVER['REQUEST_URI'])['path'] == '/kk/mezhkomnatnie-dveri.php' ||
		parse_url($_SERVER['REQUEST_URI'])['path'] == '/kk/metalicheskie-dveri.php' ||
		parse_url($_SERVER['REQUEST_URI'])['path'] == '/kk/doors/fittings' ||
		parse_url($_SERVER['REQUEST_URI'])['path'] == '/kk/door-sale.php'
		
	)
)
    
    @php $a = parse_url($_SERVER['REQUEST_URI'])['path'] @endphp
    
    <link rel="canonical" href="https://russdoors.kz{{$a}}" />

@endif

<meta name="keywords" content="{{ isset($seo_keywords) ? $seo_keywords : 'двери, белорусские двери, двери оптом, купить двери оптом' }}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="all,follow">
<!-- Bootstrap and Font Awesome css-->
<!-- we use cdn but you can also include local files located in css directory-->
<link rel="stylesheet" href="{{ elixir('css/all-new-2019.css') }}">
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" href="/css/new-style.css">
<link href='https://fonts.googleapis.com/css?family=Lobster&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<!-- Favicon-->
<link rel="shortcut icon" href="/favicon.ico">
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

    <script type="text/javascript">
    var yaParams = {};
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://ip.up66.ru/', true);
    xhr.onload = function() {
    	
    	yaParams.ip = this.responseText;
    }
    xhr.send();
    </script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(26941914, "init", {
        params:window.yaParams,
		clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/26941914" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->