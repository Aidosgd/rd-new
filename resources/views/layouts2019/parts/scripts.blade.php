<script src="/js/all.js"></script>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script>
    $(document).ready(function () {
        $('.home-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
        });
        $('.review-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
        });

        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                center: [43.269270, 76.925565],
                zoom: 15
            });

            myPlacemark = new ymaps.Placemark([43.269267, 76.934868], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/css/images/new2019/icons/678111-map-marker-512.png',
                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

            myMap.geoObjects
            .add(myPlacemark)
        }

        new WOW().init();

        $(".animate-btn").click(function() {
            var id = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(id).offset().top - 200
            }, 2000);
        });
    })
</script>
@yield('scripts')
<!-- Optional -->
<!-- {literal} -->
<script type='text/javascript'>
    window['liv' + 'eT' + 'e' + 'x'] = true,
    window['live' + 'T' + 'e' + 'xI' + 'D'] = 82515,
    window['li' + 'veTex' + '_obj' + 'ect'] = true;
    (function () {
        var t = document['creat' + 'eE' + 'lem' + 'ent']('script');
        t.type = 'text/javascript';
        t.async = true;
        t.src = '//' + 'c' + 's15' + '.li' + 'v' + 'e' + 'te' + 'x' + '.' + 'ru/js/clien' + 't.js';
        var c = document['getElemen' + 'tsByTagNa' + 'me']('script')[0];
        if (c) c['paren' + 't' + 'No' + 'de']['i' + 'nser' + 'tBefo' + 're'](t, c);
        else document['doc' + 'um' + 'entEle' + 'm' + 'ent']['f' + 'irst' + 'Chi' + 'ld']['a' + 'ppen' + 'dChil' + 'd'](t);
    })();
</script>
<!-- {/literal} -->
<!-- end footer -->


<!-- BEGIN JIVOSITE CODE -->
<script type='text/javascript'>
    if ($(window).width()>767){
        (function () {
            var widget_id = 'q5pj7WkUOl';
            var d = document;
            var w = window;

            function l() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//code.jivosite.com/script/widget/' + widget_id;
                var ss = document.getElementsByTagName('script')[0];
                ss.parentNode.insertBefore(s, ss);
            }

            if (d.readyState == 'complete') {
                l();
            } else {
                if (w.attachEvent) {
                    w.attachEvent('onload', l);
                } else {
                    w.addEventListener('load', l, false);
                }
            }
        })();
    }
</script>
<!-- END JIVOSITE CODE -->
<style type="text/css">
    .btn-whatsupp { 
        position: fixed; bottom: 100px; right: 25px; display: block; width: 70px; height: 70px; z-index: 9; animation-name: animation; animation-duration: 3s; animation-iteration-count: infinite; animation-fill-mode: both; animation-delay: 2s; -webkit-transition: 250ms; -moz-transition: 250ms; -ms-transition: 250ms; -o-transition: 250ms; transition: 250ms; }
        .btn-whatsupp img { width: 100%; height: auto; }
        .trubka-mobile { display: none;}
        @media screen and (max-width: 767px) { 
            .btn-whatsupp { width: 45px; height: 45px; bottom: 90px; right: 20px; animation: none; } 
            .trubka-mobile {display: block;opacity: 1;width: 45px !important;height: 45px !important;position: fixed!important;cursor: pointer!important;background: #13e7ff;bottom: 20px;margin-bottom: 0px;right: auto;right: 20px; border-radius: 50%;margin-bottom: 0px;box-shadow: 0px 0px 5px rgba(22, 94, 99,0.8);}
            .trubka-mobile .icon {width: 25px;height: 25px;background: url(/images/tek2.png) no-repeat left top;background-size: 100% 100%;margin-top: 9px;
    margin-left: 10px;-webkit-animation-name: rotation1;-webkit-animation-duration: 5s;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: linear;-moz-nimation-name: rotation1;-moz-animation-duration: 5s;-moz-animation-iteration-count: infinite;-moz-animation-timing-function: linear;-o-animation-name: otation1;-o-animation-duration: 5s;-o-animation-iteration-count: infinite;-o-animation-timing-function: linear;animation-name: rotation1;animation-duration:5s;animation-iteration-count: infinite;animation-timing-function: linear;
            }
        }
        -webkit-keyframes rotation1{
            47% {transform:rotate(0deg)}
            50% {transform:rotate(15deg)}
            53% {transform:rotate(0deg)}
            54% {transform:rotate(15deg)}
            57% {transform:rotate(0deg)}
            60% {transform:rotate(15deg)}
            63% {transform:rotate(0deg)}
            66% {transform:rotate(15deg)}
            69% {transform:rotate(0deg)}
            72% {transform:rotate(15deg)}
            75% {transform:rotate(0deg)}
        }
        @keyframes rotation1{
            47% {transform:rotate(0deg)}
            50% {transform:rotate(15deg)}
            53% {transform:rotate(0deg)}
            54% {transform:rotate(15deg)}
            57% {transform:rotate(0deg)}
            60% {transform:rotate(15deg)}
            63% {transform:rotate(0deg)}
            66% {transform:rotate(15deg)}
            69% {transform:rotate(0deg)}
            72% {transform:rotate(15deg)}
            75% {transform:rotate(0deg)}
        }

        @keyframes animation { 20% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }
        35% { bottom: 110px; }
        50% { bottom: 100px; }
        55% { bottom: 110px; }
        60% { bottom: 100px; }
        75% { bottom: 110px; }
        80% { bottom: 100px; }
        85% { bottom: 110px; }
        100% { bottom: 100px; -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); } }

    </style>
    <a href="https://api.whatsapp.com/send?phone=77071975091" class="btn-whatsupp" target="_blank"><img src="/images/whatsapp.svg" alt=""></a>
    <a href="tel:+7 747 488 29 12"><div class="trubka-mobile" style="z-index:100;"><div class="icon tricon" id="tricon"></div></div></a>

<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=26941914&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/26941914/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="26941914" data-lang="ru" /></a>
<!-- /Yandex.Metrika informer -->