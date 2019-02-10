
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

    <header class="header">
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
    </header>

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

    <section class="feedback">
        <div class="container">
            <h2>ЕСТЬ ВОПРОСЫ?</h2>

            <p>Закажите обратный звонок <br> Наш менеджер перезвонит Вам в течение 5 минут</p>

            <div class="form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control">
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
        <div id="map"></div>
        <div class="container">
            <div class="map-content">
                <h3>Контакты</h3>

                <p><b>Телефоны:</b></p>
                <p>+7 747 9493016; +7 (747) 488-29-12;</p>
                <p>+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
                <br>

                <p><b>Адреса:</b></p>
                <p>г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
                <br>
                <p><b>Режим Работы:</b></p>
                <p>Понедельник-Пятница : с 9:00 до 18:00</p>
                <p>Суббота: с 9:00 до 16:00</p>
                <p>Воскресенье: ВЫХОДНОЙ</p>

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
    })
</script>
</body>
</html>