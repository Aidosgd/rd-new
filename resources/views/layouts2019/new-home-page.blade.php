
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

    @yield('head')

</head>
<body>

<div class="new-2019">
    <nav class="nav wow fadeInUp">
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

    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInUp">
                    <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
                </div>
                <div class="col-md-6 header__address wow fadeInUp">
                    <p>г.Алматы, ул. Райымбека 152</p>
                    <p>+7 (727) 345-01-01; +7 747 488-29-12;</p>
                    <p>+7 747 949 30 16.</p>
                </div>
            </div>
        </div>
    </header>

    <div class="home-slider">
        <div class="slide">
            <img src="/css/images/new2019/ustanovka-dverei-v-p.jpg" alt="">
        </div>
        <div class="slide">
            <img src="/css/images/new2019/rossiiskie-dveri-ban.jpg" alt="">
        </div>
    </div>

    <section class="bestseller">
        <h1 class="text-center">Хиты продаж</h1>

        <div class="bg-s">
            <div class="container">

                <h2>Межкомнатные двери</h2>

                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z" class="st0"></path> </svg>
                </div>

                <div class="row doors-list">
                    @foreach($doors->sortBy('weight') as $index => $item)
                        @if($item->category->id == 1)
                            <div class="col-md-3 wow fadeInUp">
                                <div class="door-item">
                                    <img src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" class="padding-30" alt="">
                                    <h3>{{ $item->title }}</h3>
                                    <div class="price">{{ $item->price }} ₸</div>
                                    <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}" class="btn btn-default">Подробнее</a>
                                </div>
                            </div>
                            @if($item->weight % 4 === 0)
                                <div class="clearfix"></div>
                            @endif
                        @endif
                    @endforeach
                </div>

                <h2>Металлические двери</h2>

                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z" class="st0"></path> </svg>
                </div>
                <div class="row doors-list">
                    @foreach($doors->sortBy('weight') as $item)
                        @if($item->category->id != 1)
                            <div class="col-md-4 wow fadeInUp">
                                <div class="door-item">
                                    <img src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" class="padding-30 width-100" alt="">
                                    <h3>{{ $item->title }}</h3>
                                    <div class="price">{{ $item->price }} ₸</div>
                                    <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}" class="btn btn-default">Подробнее</a>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
    </section>

    <section class="download-catalog">
        <div class="container">
            <div class="block">
                <h3 class="wow fadeInUp">Скачайте весь каталог дверей</h3>
                <p class="wow fadeInUp">Оставьте свой email и мы пришлем Вам каталог <br> дверей</p>

                <div class="block__width wow fadeInUp">
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

    <section class="tour-3d">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInUp">
                    <h4>Пройдите 3D-ТУР по нашему выставочному залу</h4>
                    <h3>Оцените наш ассортимент! Прогуляйтесь по нашему магазину онлайн</h3>
                    <p>Если Вы хотите убедиться в широком ассортименте представленных моделей входных и межкомнатных дверей в нашем салоне, пройдите виртуальный 3D-тур по магазину 'Российские Двери" </p>
                    <a href="#" class="btn btn-default">ПРОЙТИ 3D ТУР</a>
                </div>
                <div class="col-md-6 wow fadeInUp">
                    <img class="img-responsive" src="/css/images/new2019/Showroom_20-1280x806.jpg" alt="">
                </div>
            </div>
        </div>
    </section>

    <section class="about-us">
        <div class="container">
            <div class="inner-c">
                <h2 class="wow fadeInUp">Компания "Российские Двери" Алматы</h2>

                <p class="wow fadeInUp">ТОО «Российские двери» предлагает межкомнатные двери производства России в Алматы, в полном ценовом ассортименте, широкая гамма цветов и оттенков, от «эконом» - класса до класса «премиум» с разными видами отделки. </p>
                <p class="wow fadeInUp">В наличии имеются двери в стиле классики и модерна, глухие и остеклённые. Наши двери рассчитаны для применения внутри помещений. Все модели дверей могут быть использованы как в жилых, так и в общественных помещениях с влажностью воздуха не более 65%.</p>
                <p class="wow fadeInUp">Также в продаже имеются металлические двери, ламинат, плинтус, широкий выбор фурнитуры.</p>
                <p class="wow fadeInUp">Ассортимент:</p>
                <p class="wow fadeInUp">* двери из массива сосны, покрытие натуральный шпон</p>
                <p class="wow fadeInUp">* облегчённые двери, покрытие натуральный шпон</p>
                <p class="wow fadeInUp">* облегчённые двери, покрытие искусственный шпон</p>
                <p class="wow fadeInUp">* облегчённые двери, лакокрасочное покрытие.</p>
            </div>

            <h3 class="wow fadeInUp">Сертификаты и грамоты:</h3>

            <div class="table-responsive wow fadeInUp">
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
        </div>
    </section>

    <section class="door-interier">
        <div class="container">
            <div class="row">
                <div class="col-md-6 wow fadeInUp">
                    <img class="img-responsive" src="/css/images/new2019/Showroom_20-1280x806.jpg" alt="">
                </div>
                <div class="col-md-6 wow fadeInUp">
                    <h3>Пройдите 3D-ТУР по нашему выставочному залу</h3>
                    <p>Попробуйте себя в роли дизайнера интерьеров. Выбирайте любой из представленных интерьера, выбирайте дверь и оценивайте результат!</p>
                    <a href="#" class="btn btn-default">ПРОЙТИ 3D ТУР</a>
                </div>
            </div>
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
                                <img src="/css/images/new2019/reviews/russdoors-kz-otziv.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slide">
                    <div class="review-item">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="review-text">
                                    Спасибо за мою красавицу - двухстворчатую входную дверь сделанную на заказ специально для нашей семьи! Всегда о такой мечтала!
                                </p>
                                <p><b>Татьяна</b> <br>г. Алматы</p>
                            </div>
                            <div class="col-md-4">
                                <img src="/css/images/new2019/reviews/russdoors-kz-.jpg" alt="">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="feedback">
        <div class="container">
            <h2 class="wow fadeInUp">ЕСТЬ ВОПРОСЫ?</h2>

            <p class="wow fadeInUp">Закажите обратный звонок <br> Наш менеджер перезвонит Вам в течение 5 минут</p>

            <div class="form wow fadeInUp">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Ваш телефон">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Ваш имейл">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Ваше имя">
                        </div>
                        <button class="btn btn-default">Заказать звонок</button>
                    </div>
                    <div class="col-md-6">
                        <img src="/css/images/new2019/milan-door-russdoors.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="map">
        <div class="map-content visible-xs">
            <h3 class="wow fadeInUp">Контакты</h3>

            <p class="wow fadeInUp"><b>Телефоны:</b></p>
            <p class="wow fadeInUp">+7 747 9493016; +7 (747) 488-29-12;</p>
            <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
            <br>

            <p class="wow fadeInUp"><b>Адреса:</b></p>
            <p class="wow fadeInUp">г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
            <br>
            <p class="wow fadeInUp"><b>Режим Работы:</b></p>
            <p class="wow fadeInUp">Понедельник-Пятница : с 9:00 до 18:00</p>
            <p class="wow fadeInUp">Суббота: с 9:00 до 16:00</p>
            <p class="wow fadeInUp">Воскресенье: ВЫХОДНОЙ</p>

            <ul class="social-links">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
        <div id="map"></div>
        <div class="container hidden-xs">
            <div class="map-content">
                <h3 class="wow fadeInUp">Контакты</h3>

                <p class="wow fadeInUp"><b>Телефоны:</b></p>
                <p class="wow fadeInUp">+7 747 9493016; +7 (747) 488-29-12;</p>
                <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
                <br>

                <p class="wow fadeInUp"><b>Адреса:</b></p>
                <p class="wow fadeInUp">г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
                <br>
                <p class="wow fadeInUp"><b>Режим Работы:</b></p>
                <p class="wow fadeInUp">Понедельник-Пятница : с 9:00 до 18:00</p>
                <p class="wow fadeInUp">Суббота: с 9:00 до 16:00</p>
                <p class="wow fadeInUp">Воскресенье: ВЫХОДНОЙ</p>

                <ul class="social-links">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="buttons">
                <ul class="footer__menu">
                    <li><a href="#">МЕЖКОМНАТНЫЕ ДВЕРИ</a></li>
                    <li><a href="#">МЕТАЛЛИЧЕСКИЕ ДВЕРИ</a></li>
                    <li><a href="#">АКЦИИ</a></li>
                    <li><a href="#">СОТРУДНИЧЕСТВО</a></li>
                    <li><a href="#">КОНТАКТЫ</a></li>
                    <li><a href="#">РЕЖИМ РАБОТЫ</a></li>
                </ul>
            </div>

            <div class="clearfix"></div>

            <div class="footer__logo">
                <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
            </div>

            <div class="footer__copyright">
                <p>© Все права защищены <br>
                    2010-2019</p>
            </div>
        </div>
    </footer>

</div>

<script  src="/js/all.js"></script>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script>
    $(document).ready(function () {
        $('.home-slider').slick();
        $('.review-slider').slick();

        ymaps.ready(init);
        function init(){
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
    })
</script>
</body>
</html>