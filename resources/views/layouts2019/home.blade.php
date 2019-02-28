@extends('layouts2019.app')

@section('content')
    <div class="home-slider">
        <div class="slide">
            <img class="hidden-xs" src="/css/images/new2019/ustanovka-dverei-v-p.jpg" alt="">
            <img class="visible-xs" src="/css/images/new2019/slide1.jpg" alt="">
            <div class="slide__content">
                {{--<p>Большой выбор межкомнатных и металлических дверей по самым выгодным ценам от производителя</p>--}}
                <a href="#callForm" class="btn btn-default btn-effects animate-btn" style="margin-top: 440px;">
                    Закажите обратный звонок
                    <div class="t-btn_effects"></div>
                </a>
            </div>
        </div>
        <div class="slide">
            <img src="/css/images/new2019/rossiiskie-dveri-ban.jpg" alt="">
            <div class="slide__content">
                <p class="catalog-text">Большой выбор межкомнатных и металлических дверей по самым выгодным ценам от производителя</p>
                <a href="#downloadForm" class="btn btn-default btn-effects animate-btn">
                    Скачать каталог
                    <div class="t-btn_effects"></div>
                </a>
            </div>
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

                @if(session()->has('message'))
                    <div class="alert alert-success">
                        <h1>{{ session()->get('message') }}</h1>
                    </div>
                @endif

                <div class="block__width wow fadeInUp">
                    <div class="row">
                        <form action="/mail/download" method="post" id="downloadForm">
                            <input name="_token" type="hidden"  value="{{ csrf_token() }}" />
                            <div class="col-md-8">
                                <input type="email" name="email" placeholder="Your E-mail" required>
                            </div>
                            <div class="col-md-4">
                                <button type="submit" class="btn btn-default btn-effects">
                                    Получить каталог
                                    <div class="t-btn_effects"></div>
                                </button>
                            </div>
                        </form>
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
                    <a href="/public/3d/output/" target="_blank" class="btn btn-default">ПРОЙТИ 3D ТУР</a>
                </div>
                <div class="col-md-6 wow fadeInUp">
                    <img class="img-responsive" src="/css/images/new2019/russdoors-3dtour.jpg" alt="">
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
                    <img class="img-responsive" src="/css/images/new2019/dveri.jpg" alt="">
                </div>
                <div class="col-md-6 wow fadeInUp">
                    <h3>Подберите идеальную дверь к Вашему интерьеру</h3>
                    <p>Попробуйте себя в роли дизайнера интерьеров. Выбирайте любой из представленных интерьера, выбирайте дверь и оценивайте результат!</p>
                    <a href="/pages/interior_door.php" class="btn btn-default">ПОДОБРАТЬ ИНТЕРЬЕР</a>
                </div>
            </div>
        </div>
    </section>

    @include('layouts2019.parts.reviews')
@endsection