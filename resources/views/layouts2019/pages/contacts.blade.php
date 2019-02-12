@extends('layouts2019.app')
@section('head')
    <style>
        /* Style the tab */
        .tab {
            float: left;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            width: 30%;
        }

        /* Style the buttons inside the tab */
        .tab button {
            display: block;
            background-color: inherit;
            color: black;
            padding: 22px 16px;
            width: 100%;
            border: none;
            outline: none;
            text-align: left;
            cursor: pointer;
            transition: 0.3s;
            font-size: 17px;
        }

        /* Change background color of buttons on hover */
        .tab button:hover {
            background-color: #ddd;
        }

        /* Create an active/current "tab button" class */
        .tab button.active {
            background-color: #ccc;
        }

        /* Style the tab content */
        .tabcontent {
            float: left;
            padding: 0px 12px;
            width: 70%;
            border-left: none;
        }
        .contacts-menu{
            padding: 0;
            margin-left: -15px;
        }
        .contacts-menu li{
            list-style: none;
        }
        .contacts-menu li a{
            font-size: 16px;
            padding: 15px;
            display: block;
            color: black;
            font-weight: bold;
        }
        .contacts-menu li a:hover{
            background: #ccc;
        }
        .contacts h2, .contacts h1, .contacts p{
            color: black !important;
            font-weight: bold;
        }
        @media (max-width:480px)  {
            .map iframe{
                width: 100% !important;
            }
        }
        .btn-contact{
            padding: 10px;
            background: linear-gradient(to top, #1d100b, #44261c);
            color: white;
            width: 90%;
            margin: auto;
            display: block;
        }
        .btn-contact:hover, .btn-contact:focus{
            color: white;
        }
    </style>
@endsection
@section('content')
    <div style="background: #f2ede6">
        <div class="container" style="padding: 40px 0">
            <div class="contacts">
                <div class="row">
                    <div class="col-md-3 hidden-xs">
                        <ul class="contacts-menu">
                            <li><a href="/contacts/almaty.php">Алматы</a></li>
                            <li><a href="/contacts/astana.php">Астана</a></li>
                            <li><a href="/contacts/aktobe.php">Актобе</a></li>
                            <li><a href="/contacts/aktau.php">Актау</a></li>
                            <li><a href="/contacts/balkhash.php">Балхаш</a></li>
                            <li><a href="/contacts/karaganda.php">Караганда</a></li>
                            <li><a href="/contacts/taldykurgan.php">Талдыкурган</a></li>
                            <li><a href="/contacts/taraz.php">Тараз</a></li>
                            <li><a href="/contacts/ust_kamenogorsk.php">Усть-Каменогорск</a></li>
                            <li><a href="/contacts/shymkent.php">Шымкент</a></li>
                            <li><a href="/contacts/kyzylorda.php">Кызылорда</a></li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div class="visible-xs">
                            <button class="btn btn-contact" data-toggle="collapse" data-target="#demo">Список городов</button>

                            <div id="demo" class="collapse">
                                <ul class="contacts-menu">
                                    <li><a href="/contacts/almaty.php">Алматы</a></li>
                                    <li><a href="/contacts/astana.php">Астана</a></li>
                                    <li><a href="/contacts/aktobe.php">Актобе</a></li>
                                    <li><a href="/contacts/aktau.php">Актау</a></li>
                                    <li><a href="/contacts/balkhash.php">Балхаш</a></li>
                                    <li><a href="/contacts/karaganda.php">Караганда</a></li>
                                    <li><a href="/contacts/taldykurgan.php">Талдыкурган</a></li>
                                    <li><a href="/contacts/taraz.php">Тараз</a></li>
                                    <li><a href="/contacts/ust_kamenogorsk.php">Усть-Каменогорск</a></li>
                                    <li><a href="/contacts/shymkent.php">Шымкент</a></li>
                                    <li><a href="/contacts/kyzylorda.php">Кызылорда</a></li>
                                </ul>
                            </div>
                        </div>
                        {!! $pageName->description !!}
                    </div>
                </div>
            </div>
            <div class="tab-contact hidden">
                <div class="tab">
                    <button class="tablinks" id="defaultOpen" onclick="openCity(event, 'Алматы')">Алматы</button>
                    <button class="tablinks" onclick="openCity(event, 'Астана')">Астана</button>
                    <button class="tablinks" onclick="openCity(event, 'Актобе')">Актобе</button>
                    <button class="tablinks" onclick="openCity(event, 'Актау')">Актау</button>
                    <button class="tablinks" onclick="openCity(event, 'Балхаш')">Балхаш</button>
                    <button class="tablinks" onclick="openCity(event, 'Караганда')">Караганда</button>
                    <button class="tablinks" onclick="openCity(event, 'Талдыкурган')">Талдыкурган</button>
                    <button class="tablinks" onclick="openCity(event, 'Тараз')">Тараз</button>
                    <button class="tablinks" onclick="openCity(event, 'Усть-Каменогорск')">Усть-Каменогорск</button>
                    <button class="tablinks" onclick="openCity(event, 'Шымкент')">Шымкент</button>
                    <button class="tablinks" onclick="openCity(event, 'Кызылорда')">`Кызылорда</button>
                </div>

                <div class="tabcontent" id="Алматы">
                    <div class="row">
                        <div class="col-md-6">
                            <h1>Алматы</h1>
                            <h2>Главный адрес:</h2>
                            <p>г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
                            <hr>

                            <h2>Телефоны для справок:</h2>
                            <p>8 (727)&nbsp;345-01-01;</p>
                            <p>8 (747) 488-29-12:</p>
                            <hr>

                            <a href="mailto:denisov_sv@mail.ru">E-mail: denisov_sv@mail.ru</a>
                            <p>Skype: dionis_0001</p>
                            <hr>

                            <h2>Режим работы:</h2>
                            <p>Понедельник-пятница - 9:00 - 18:00<br>Суббота - 9:00 - 16:00<br>Воскресенье - 11:00 -15:00</p>

                            <h2></h2>
                            <h2>Торговые точки:</h2>
                            <p>
                                Ул.Бокейханова 47а<br>сот.+77027266949<br>
                                Понедельник- пятница с 9.00-18.00. Суббота с 9.00-16.00. Воскресенье выходной
                            </p>
                            <p>Ул. Кабдолова 1, ТД «Армада» (бутик 1021)&nbsp;<br>Телефон: 227 30 39&nbsp;<br>Без выходных</p>
                        </div>
                        <div class="col-md-6">
                            <div class="map">
                                <a class="dg-widget-link" href="http://2gis.kz/almaty/firm/9429940000799887/center/76.9346594810486,43.269956206904/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
                                    Посмотреть на карте Алматы
                                </a>
                                <div class="dg-widget-link">
                                    <a href="http://2gis.kz/almaty/firm/9429940000799887/photos/9429940000799887/center/76.9346594810486,43.269956206904/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">
                                        Фотографии компании
                                    </a>
                                </div>
                                <div class="dg-widget-link">
                                    <a href="http://2gis.kz/almaty/center/76.93465,43.269378/zoom/16/routeTab/rsType/bus/to/76.93465,43.269378╎Российские двери, торговая компания?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
                                        Найти проезд до Российские двери, торговая компания
                                    </a>
                                </div>
                                <script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>
                                <script charset="utf-8">
                                    new DGWidgetLoader({
                                        "width": 400,
                                        "height": 400,
                                        "borderColor": "#a3a3a3",
                                        "pos": {"lat": 43.269956206904, "lon": 76.9346594810486, "zoom": 16},
                                        "opt": {"city": "almaty"},
                                        "org": [{"id": "9429940000799887"}]
                                    });
                                </script>
                                <noscript style="color:#c00;font-size:16px;font-weight:bold;">
                                    Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
                                </noscript>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabcontent" id="Астана">
                    <div class="row">
                        <div class="col-md-6">
                            <h1>Астана</h1>
                            <p>
                                пр.Богембай батыра 16&nbsp;<br><br>тел.:&nbsp;+7 778&nbsp;919 37 73<br><br>
                                e-mail:vahidjan_29mail.ru<br><br>
                                сайт: astdoors.kz
                            </p>
                        </div>
                        <div class="col-md-6">

                        </div>
                    </div>
                </div>
                <div class="tabcontent" id="Актобе">
                    <h1>Актобе</h1>
                    проспект Алии Молдагуловой 56Г <br>
                    2 этаж <br>
                    тел:+77078587428
                </div>
                <div class="tabcontent" id="Актау">
                    <h1>Актау</h1>

                    <p>Строительный рынок САК<br>
                        22 бутик<br>
                        тел:<a href="tel:+77053068349" target="_blank">+77053068349</a><br>
                        тел:<a href="tel:+77751023270" target="_blank">+77751023270</a></p>

                    <div class="spoiler hidden">
                        <p>&nbsp;</p>

                        <p>Расположенный на северном берегу каспийского моря, Актау является известным курортным местом&nbsp; для всех любителей искупаться в море и позагорать на пляже.</p>

                        <p>Раньше город &nbsp;носил название «Шевченко» в честь известного писателя Тараса Шевченко, который проживал в нём в конце XIXвека.</p>

                        <p>Сезон отдыха на пляже начинается тут с конца мая и до окончания августа. Здесь есть множество пляжей и баз отдыха, а средняя температура воды составляет +18 градусов по Цельсию.</p>

                        <p>Интересной особенностью является то, что в Актау нет названий улиц. Весь город поделён на множество микрорайонов и по номеру района жители ориентируются.</p>

                        <p>Известная достопримечательность тут – это&nbsp; расположенный на крыше дома маяк. Этот дом находится в четвёртом микрорайоне.</p>

                        <p>Жизнь в городе, со столь развитой инфраструктурой, где построено множество жилых зданий и административных, не представляется возможной без наличия в них дверей. Благодаря нашей компании, вы можете приобрести&nbsp;<strong>межкомнатные двери</strong>&nbsp;и стальные в вашем городе.</p>

                        <p>Выбор можно сделать из более чем пятидесяти моделей межкомнатных дверей.&nbsp; Среди которых представлены варианты от эконом класса до элитного.&nbsp; Все они по-разному выполнены и оформлены. Здесь присутствует и строгий классический стиль, и изящный стиль с множеством резных элементов, и модерн. &nbsp;К тому же изделия хорошо комплектуются, несколькими видами наличника, капителей, розеток и прочими дополнительными элементами.</p>

                        <p>Двери покрыты многослойным высококачественным лакокрасочным покрытием из Италии, которое хорошо предохраняет их от выцветания и делает влагоустойчивыми.&nbsp; Шумопоглащающий уплотнитель обеспечит хорошую звукоизоляцию в ваших комнатах, вам не будет мешать посторонний шум. Дверной каркас или же полотно, в зависимости от выбранной модели, изготавливается из массива хвойных пород&nbsp; деревьев, преимущественно из сосны высшего сорта. Дверное стекло в остеклённых моделях выполнено с художественным или витражным рисунком. Разнообразная цветовая окраска представлена оттенками&nbsp; миланского ореха,&nbsp; выбеленного дуба, платины, золота, венге и др.</p>

                        <p>Также вы можете выбрать&nbsp;<strong>железные входные двери</strong>, кои представлены в большом разнообразии.</p>

                        <p>Элегантный внешний вид стальных дверей, и неподражаемый стиль,&nbsp; преобразит интерьер вашего дома.&nbsp; Многоступенчатая система запирающих элементов и изготовленное из прочного металла дверное полотно, станет основательной защитой помещения от ненужного вторжения.&nbsp; Прочная дверь, как средство защиты никогда не выйдет из моды. В качестве дополнительного эффекта она избавит вас от&nbsp; шума со стороны улицы и предотвратит попадание мусора и пыли в дом.</p>

                        <p>Уважаемые Актаусцы, в качестве дополнительных услуг мы предлагаем бесплатную консультацию по ассортименту и свойствам нашего товара.&nbsp; Грамотная и полная консультация поможет вам сориентироваться в вопросе выбора среди множества моделей и даст ответ по правильной установке&nbsp; дверей.&nbsp; Также наши специалисты могут произвести демонтаж старых дверных полотен, все необходимые замеры и врезку новых замков. Всё это сэкономит вам много времени.</p>

                        <p>Ждём Вас в Актау!</p>
                    </div>
                </div>
                <div class="tabcontent" id="Балхаш">Балхаш</div>
                <div class="tabcontent" id="Караганда">Караганда</div>
                <div class="tabcontent" id="Талдыкурган">Талдыкурган</div>
                <div class="tabcontent" id="Тараз">Тараз</div>
                <div class="tabcontent" id="Усть-Каменогорск">Усть-Каменогорск</div>
                <div class="tabcontent" id="Шымкент">Шымкент</div>
                <div class="tabcontent" id="Кызылорда">`Кызылорда</div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    </script>
@endsection