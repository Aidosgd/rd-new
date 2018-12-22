@extends('newdesign.app')
@section('content')
    <h1>{{ $doorCategory->name }}</h1>

    @if($doorCategory->id == 1)
        <ul class="custom">
            <li style="padding-left: 0;"><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/1">Российские</a></li>
            <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/2">Белорусские</a></li>
            <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/3">Под заказ</a></li>
        </ul>
    @endif
    <div class="row doors">
        @foreach($doors->sortBy('weight') as $item)
            <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }} col-sm-6">
                <div class="shop-stuff shk-item three ">
                    <div class="shop-stuff-b">
                        <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">
                            <img class="shk-image" src="{{ $item->images->first()->getSrc('doors') }}" height="200">
                        </a>
                        <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">
                            <h3>{{ $item->title }}</h3>
                        </a>
                        <div class="shs-descr">

                            <br>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
        @if($doorCategory->id == 1)
    <p>Отличный выбор высококачественных межкомнатных дверей!
Межкомнатные двери, это то - без чего не обойдется ни один дом или квартира. Так почему бы им не быть качественными, красивыми и надежными? Наш магазин предлагает Вам огромный выбор межкомнатных дверей разнообразного дизайна и ценовой категории. У нас Вы найдете ту дверь, которая Вам непременно придется по вкусу! Межкомнатные двери всем и каждому! Начиная от обычных, ничем не примечательных и строгих дверей, заканчивая изысканными вариантами с использованием разнообразных вставок и элементов дизайна. У нас Вы обязательно найдете ту дверь, которая подойдет Вам как по цене, так и по своему виду.</p>
<p>
Хотите купить двери оптом? Вы по адресу!
Магазин межкомнатных дверей RussDoors, рад предложить Вам покупку, как в розничном, так и в оптовом количестве! Мы предложим Вам наиболее ВЫГОДНОЕ условие для покупки, а главное, продадим Вам самый качественный товар, и все это будет в нужном для Вас количестве. Ведь довольный клиент – это лицо нашего магазина, от которого и зависит наш успех! Так же, мы всегда рады принять Ваш звонок. Наши менеджеры - консультанты помогут Вам выбрать необходимую Вам межкомнатную дверь, ответят на Все интересующие и возникшие у Вас вопросы, и подскажут Вам все что необходимо для удачной покупки двери!</p>
<p>

RussDoors – это магазин межкомнатных дверей СУПЕР качества по выгодным ценам!
Мы всегда рады предложить нашим посетителям огромный Выбор качественного товара на любой вкус! Приходите в наш магазин дверей, звоните нам, мы всегда рады Вас слышать, и окунитесь вместе с нами в мир качественных и выполненных со вкусом межкомнатных дверей!</p>
<p>
Приобретая качественный товар, Вы не только приобретаете вещь, которая прослужит Вам долго – Вы делаете качество своей жизни еще лучше! А поможет Вам в этом магазин дверей - RussDoors</p>
  @endif
@endsection
