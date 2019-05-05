@extends('newdesign.app')
@section('content')
    <h1>{{ $doorCategory->name }}</h1>

    @if($doorCategory->id == 1)
        <ul class="custom hidden">
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
    <h2>Межкомнатные двери в Алматы, &laquo;На все случаи жизни!&raquo;.</h2>
<p>&nbsp;&nbsp; Отличный выбор высококачественных межкомнатных дверей, это то - без чего не обойдется ни один дом или квартира. Так почему бы им не быть качественными, красивыми и надежными? Наш магазин предлагает Вам огромный выбор межкомнатных дверей разнообразного дизайна и ценовой категории. У нас Вы найдете ту дверь, которая Вам непременно придется по вкусу! <strong>Межкомнатные двери всем и каждому</strong>! Начиная от обычных, ничем не примечательных и строгих дверей, заканчивая изысканными вариантами с использованием разнообразных вставок и элементов дизайна. У нас Вы обязательно найдете ту дверь, которая подойдет Вам как по цене, так и по своему виду.</p>
<p>&nbsp;&nbsp; Создавайте образ, который течет из комнаты в комнату. Наши межкомнатные двери в Алматы незаменимы для создания динамического, светлого и просторного интерьера. Глянцевая или матовая поверхность стекла может быть в разных вариациях, например: с узором, рисунком или орнаментом. Выбирая дверь, которая будет соответствовать вашему интерьеру, мы гарантируем, что наш продукт добавит ценность и обеспечит удовлетворение на долгие годы.</p>
<p>&nbsp;&nbsp; Не ограничивайте себя в выборе межкомнатных дверей. Мы также предлагаем современные высококачественные двери из экологически чистой древесины. Эти двери с твердым сердечником, отделанные натуральным шпоном, которые отлично подойдут любому помещению. <em>Мы заботимся о наших клиентах и поэтому Наше преимущество &mdash; это цена и качество, а также надежность!</em></p>
<p>&nbsp; Хотите купить двери оптом? Вы по адресу! Магазин межкомнатных дверей RussDoors, рад предложить Вам покупку, как в розничном, так и в оптовом количестве! Мы предложим Вам наиболее ВЫГОДНОЕ условие для покупки. А самое главное, продадим Вам самый качественный товар, и все это будет в нужном для Вас количестве. Ведь довольный клиент &ndash; это лицо нашего магазина, от которого и зависит наш успех! Так же, мы всегда рады принять Ваш звонок. Наши менеджеры - консультанты помогут Вам выбрать необходимую межкомнатную дверь. И обязательно ответят на Все интересующие и возникшие вопросы, и подскажут Вам все что необходимо для удачной покупки двери!</p>
<p>&nbsp;&nbsp; RussDoors &ndash; это магазин межкомнатных дверей СУПЕР-качества по выгодным ценам! Мы всегда рады предложить нашим посетителям огромный Выбор качественного товара на любой вкус! Приходите в наш магазин дверей, звоните нам, мы всегда рады Вас слышать, и окунитесь вместе с нами в мир качественных и выполненных со вкусом межкомнатных дверей!</p>
<p>&nbsp;&nbsp;&nbsp; <em><strong>Приобретая качественный межкомнатные двери, Вы не только приобретаете вещь, которая прослужит Вам долгие годы но и делаете качество своей жизни еще лучше и ярче! В этом вам поможет наш магазин -&nbsp;RussDoors.</strong></em></p>
  @endif
        @if($doorCategory->id == 2)
<h2>Металлические двери - надежная защита вашего пространства.</h2>
<p>&nbsp;&nbsp; <strong>Входная дверь</strong> несет в себе защиту и надежность, именно для этого выбирать металлическую дверь нужно с умом и ответственностью. В первую очередь главной функцией двери является ограждение нашего пространства от других. Одними из самых важных характеристик считаются: теплоизоляция и шумоизоляция, однако на первом месте все-таки стоит защита и стойкость перед угрозами из вне. Для получения морального и эстетического удовольствия входные двери стоит подгонять под общий интерьер помещения.</p>
<p><strong>Комфорт и безопасность.</strong></p>
<p>&nbsp;&nbsp; На сегодняшний день достаточно большой выбор дешевых входных дверей, но стоит вопрос, как же не ошибиться. Как сделать провальный выбор, для уверенности в своей безопасности. Для этого мы рассмотри самый основной фактор, который влияет на выбор входной <strong>металлической двери</strong> &ndash; это Защита и охрана.</p>
<p><strong>И так в чем заключается &laquo;Защита и охрана&raquo;?</strong></p>
<p>&nbsp;&nbsp; Эта фраза подходит к нашей статье как нельзя лучше, &laquo;Мой дом &ndash; моя крепость&raquo;, под словом крепость подразумевается понятие &laquo;Неприступность&raquo;. Но, как и в любой крепости есть слабое место &ndash; это ворота т.е. входная дверь. От которой зависит наша безопасность и спокойный сон.</p>
<p>&nbsp;&nbsp; И так вы решили купить входную дверь приходите в магазин и видите кучу дверей. Не произвольно начинают разбегаться глаза, да и цена удивляет. И тут вступает в силу первое правило, которое гласит что на таких вещах не стоит экономить.</p>
<p><strong>Разберем первый вопрос что же лучше металл или дерево?</strong></p>
<p>&nbsp;&nbsp; Несомненно, металл. Об этом даже не стоит задумываться.&nbsp; Деревянная дверь такой себе защитник, которого спокойно можно снести с петель сильным ударом. Поэтому не обращаем внимание на деревянные дери и идем смотреть металлические двери. Первое на что стоит обратить внимание &ndash; это толщина металла, минимальное значение 1.5- 2 мм.</p>
<p><strong>Второй пункт &ndash; это защита.</strong></p>
<p>&nbsp;&nbsp; И так мы определились с толщиной, а дальше? Следующий параметр &ndash; это система защиты. Мы выделим только основные: наличники и скрытые петли. Целесообразно, чтобы в конструкцию входили эти параметры &ndash; что значительно повысит безопасность. И последнее по списку, но не по значению &ndash; это замки. Минимальное количество замков на двери должно составлять не меньше двух, в идеале три. Установленные замки должны отличаться, по типу и виду.</p>
<p>&nbsp;&nbsp; В нашем магазине Вы найдет металлические двери, качество которых соблюдены всеми нормами и стандартами. Мы заботимся о безопасности наших клиентов. Если вы затрудняетесь с выбором двери, то Вы всегда можете связаться с нашими отзывчивыми консультантами, которые ответят на все интересующие вас вопросы. <strong>Цены входных дверей</strong> Вы также можете узнать у наших консультантов.</p>
<p>&nbsp;&nbsp;&nbsp; <em><strong>Наши Двери &ndash; это гарантия Вашей Безопасности!</strong></em></p>
  @endif
@endsection
