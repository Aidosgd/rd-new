@extends('layouts2019.app')
@section('content')
    <section class="bestseller">
        <div class="bg-s">
            <h2 class="text-center">{{ $doorCategory->name }}</h2>
            <div class="container">
                @if($doorCategory->id == 1)
                    <ul class="custom hidden">
                        <li style="padding-left: 0;"><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/1">Российские</a>
                        </li>
                        <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/2">Белорусские</a></li>
                        <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/3">Под заказ</a></li>
                    </ul>
                @endif
                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 300 300">
                        <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z"
                              class="st0"></path>
                    </svg>
                </div>
                <div class="row doors-list">
                    @foreach($doors->sortBy('weight') as $index => $item)
                        <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }}  wow fadeInUp">
                            <div class="door-item">
                                <img style="{{ $item->category->id != 1 ? 'height: 350px' : '' }}" src="{{ $item->images->first()->getSrc('doors') }}"
                                     class="padding-30" alt="">
                                <h3>{{ $item->title }}</h3>
                                <div class="price">{{ $item->price }} ₸</div>
                                <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}"
                                   class="btn btn-default">Подробнее</a>
                            </div>
                        </div>
                    @endforeach
                </div>

                @if($doorCategory->id == 1)
                    <p>Отличный выбор высококачественных межкомнатных дверей!
                        Межкомнатные двери, это то - без чего не обойдется ни один дом или квартира. Так почему бы им не
                        быть
                        качественными, красивыми и надежными? Наш магазин предлагает Вам огромный выбор межкомнатных
                        дверей
                        разнообразного дизайна и ценовой категории. У нас Вы найдете ту дверь, которая Вам непременно
                        придется по
                        вкусу! Межкомнатные двери всем и каждому! Начиная от обычных, ничем не примечательных и строгих
                        дверей,
                        заканчивая изысканными вариантами с использованием разнообразных вставок и элементов дизайна. У
                        нас Вы
                        обязательно найдете ту дверь, которая подойдет Вам как по цене, так и по своему виду.</p>
                    <p>
                        Хотите купить двери оптом? Вы по адресу!
                        Магазин межкомнатных дверей RussDoors, рад предложить Вам покупку, как в розничном, так и в
                        оптовом
                        количестве! Мы предложим Вам наиболее ВЫГОДНОЕ условие для покупки, а главное, продадим Вам
                        самый
                        качественный товар, и все это будет в нужном для Вас количестве. Ведь довольный клиент – это
                        лицо нашего
                        магазина, от которого и зависит наш успех! Так же, мы всегда рады принять Ваш звонок. Наши
                        менеджеры -
                        консультанты помогут Вам выбрать необходимую Вам межкомнатную дверь, ответят на Все интересующие
                        и возникшие
                        у Вас вопросы, и подскажут Вам все что необходимо для удачной покупки двери!</p>
                    <p>

                        RussDoors – это магазин межкомнатных дверей СУПЕР качества по выгодным ценам!
                        Мы всегда рады предложить нашим посетителям огромный Выбор качественного товара на любой вкус!
                        Приходите в
                        наш магазин дверей, звоните нам, мы всегда рады Вас слышать, и окунитесь вместе с нами в мир
                        качественных и
                        выполненных со вкусом межкомнатных дверей!</p>
                    <p>
                        Приобретая качественный товар, Вы не только приобретаете вещь, которая прослужит Вам долго – Вы
                        делаете
                        качество своей жизни еще лучше! А поможет Вам в этом магазин дверей - RussDoors</p>
                @endif
            </div>
        </div>
    </section>

@endsection
