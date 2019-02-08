
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

</head>
<body>

<div class="new-2019">
    <nav class="nav">
        <div class="container">
            <div class="buttons">
                <ul>
                    <li><a href="#">МЕЖКОМНАТНЫЕ ДВЕРИ</a></li>
                    <li><a href="#">МЕТАЛЛИЧЕСКИЕ ДВЕРИ</a></li>
                    <li><a href="#">ФУРНИТУРА</a></li>
                    <li><a href="#">АКЦИИ</a></li>
                    <li><a href="#">СОТРУДНИЧЕСТВО</a></li>
                    <li><a href="#">КОНТАКТЫ</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
                </div>
                <div class="col-md-6 header__address">
                    <p>г.Алматы, ул. Райымбека 152</p>
                    <p>+7 (727) 345-01-01; +7 747 488-29-12;</p>
                    <p>+7 747 949 30 16.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="home-slider">
        <div class="slide">
            <img src="/css/images/new2019/rossiiskie-dveri-ban.jpg" alt="">
        </div>
        <div class="slide">
            <img src="/css/images/new2019/ustanovka-dverei-v-p.jpg" alt="">
        </div>
    </div>

    <section class="bestseller">
        <h1 class="text-center">Хиты продаж</h1>

        <div class="bg-s">
            <div class="container">
                <h2>Межкомнатные двери</h2>

                <div class="row doors-list">
                    <div class="col-md-3">
                        <div class="door-item">
                            <img src="/css/images/new2019/door01.png" class="padding-30" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="door-item">
                            <img src="/css/images/new2019/door01.png" class="padding-30" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="door-item">
                            <img src="/css/images/new2019/door01.png" class="padding-30" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="door-item">
                            <img src="/css/images/new2019/door01.png" class="padding-30" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                </div>

                <h2>Металлические двери</h2>

                <div class="row doors-list">
                    <div class="col-md-4">
                        <div class="door-item">
                            <img src="/css/images/new2019/2016-09-06-15-35-ase.png" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="door-item">
                            <img src="/css/images/new2019/2016-09-06-15-35-ase.png" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="door-item">
                            <img src="/css/images/new2019/2016-09-06-15-35-ase.png" alt="">
                            <h3>Дверь "01"</h3>
                            <p>Гладкое полотно, покрытие искусственный шпон и плёнка. Представлено в четырех цветах</p>
                            <div class="price">9000тг.</div>
                            <a href="" class="btn btn-default">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="download-catalog">
        <div class="container">
            <div class="block">
                <h3>Скачайте весь каталог дверей</h3>
                <p>Оставьте свой email и мы пришлем Вам каталог <br> дверей</p>

                <div class="block__width">
                    <div class="row">
                        <div class="col-md-8">
                            <input type="email" placeholder="Your E-mail">
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-default">Получить каталог</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="quality">
        <div class="container">
            <h2>Гарантии низкой цены при высоком качестве:</h2>

            <div class="row">
                <div class="col-md-6 quality-item">
                    <h3>ОПЫТ</h3>
                    <p>За 20 лет на рынке успели зарекомендовать себя как лидеров в продажах межкомнатных и металлических дверей </p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>ВЫБОР</h3>
                    <p>Цены на межкомнатные двери от 8000 тенге до премиум класса
                        Более 50 моделей всегда в наличии</p>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-6 quality-item">
                    <h3>СТАТУС</h3>
                    <p>Являемся официальными партнерами российских и белорусских заводов-изготовителей</p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>СКОРОСТЬ</h3>
                    <p>Бесплатная доставка и установка в течение 1 дня с момента заказа</p>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-6 quality-item">
                    <h3>НАДЕЖНОСТЬ</h3>
                    <p>Работаем только с сертифицированной и качественной продукцией</p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>ЭКСКЛЮЗИВНОСТЬ</h3>
                    <p>Только у нас Вы можете заказать индивидуальное создание дверей на заводе России или Беларуси по собственному эскизу</p>
                </div>
            </div>
        </div>

    </section>

    <section class="about-us">
        <div class="container">
            <div class="inner-c">
                <h2>Компания "Российские Двери" Алматы</h2>

                <p>ТОО «Российские двери» предлагает межкомнатные двери производства России в Алматы, в полном ценовом ассортименте, широкая гамма цветов и оттенков, от «эконом» - класса до класса «премиум» с разными видами отделки. </p>
                <p>В наличии имеются двери в стиле классики и модерна, глухие и остеклённые. Наши двери рассчитаны для применения внутри помещений. Все модели дверей могут быть использованы как в жилых, так и в общественных помещениях с влажностью воздуха не более 65%.</p>
                <p>Также в продаже имеются металлические двери, ламинат, плинтус, широкий выбор фурнитуры.</p>
                <p>Ассортимент:</p>
                <p>* двери из массива сосны, покрытие натуральный шпон</p>
                <p>* облегчённые двери, покрытие натуральный шпон</p>
                <p>* облегчённые двери, покрытие искусственный шпон</p>
                <p>* облегчённые двери, лакокрасочное покрытие.</p>

            </div>
            <h3>Сертификаты и грамоты:</h3>

            <table>
                <tbody>
                    <tr>
                        <td><img src="/css/images/new2019/cert/1.png" alt=""></td>
                        <td><img src="/css/images/new2019/cert/__1.png" alt=""></td>
                        <td><img src="/css/images/new2019/cert/__001.jpg" alt=""></td>
                        <td><img src="/css/images/new2019/cert/_MD_002.jpg" alt=""></td>
                        <td><img src="/css/images/new2019/cert/Screenshot_2.png" alt=""></td>
                        <td><img src="/css/images/new2019/cert/sertificate-russdoor.jpg" alt=""></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="reviews">
        <div class="container">
            <h2>Отзывы клиентов</h2>

            <div class="review-slider">
                <div class="slide">
                    <div class="review-item">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="review-text">
                                    Долго искал металлическую дверь с прямым выходом на улицу, что бы и красиво, и недорого было! В компании "Российские двери" оказался самый приемлемый выбор и доступные цены! Отдельное спасибо за оперативную установку!
                                </p>
                                <p><b>Максим</b> <br>г. Алматы</p>
                            </div>
                            <div class="col-md-4">
                                <img src="/css/images/new2019/reviews/russdoors-kz-.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slide">
                    <div class="review-item">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="review-text">
                                    Долго искал металлическую дверь с прямым выходом на улицу, что бы и красиво, и недорого было! В компании "Российские двери" оказался самый приемлемый выбор и доступные цены! Отдельное спасибо за оперативную установку!
                                </p>
                                <p><b>Максим</b> <br>г. Алматы</p>
                            </div>
                            <div class="col-md-4">
                                <img src="/css/images/new2019/reviews/russdoors-kz-otziv.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<script  src="/js/all.js"></script>
<script>
    $(document).ready(function () {
        $('.home-slider').slick();
        $('.review-slider').slick();
    })
</script>
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

{{--<!-- BEGIN JIVOSITE CODE -->--}}
{{--<script type='text/javascript'>--}}
    {{--(function(){ var widget_id = 'q5pj7WkUOl';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();--}}
{{--</script>--}}
{{--<!-- END JIVOSITE CODE -->--}}

</body>
</html>