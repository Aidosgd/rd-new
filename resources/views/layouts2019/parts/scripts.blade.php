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
</script>
<!-- END JIVOSITE CODE -->