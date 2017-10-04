@extends('app')

@section('content')
    <a href="/pages/rasprodazha.php"><h1 style="font-size: 20px;">РАСПРОДАЖА! Двери производство Россия, Украина   от 3000 тенге за полотно!</h1></a>
    <h1 style="font-size: 20px;">Белорусские межкомнатные двери –ликвидация коллекции! Скидки до 50%!</h1>
    <!-- main -->
    <h1 style="padding-bottom: 30px;">Хит продаж</h1>

    <div class="row doors">
        @foreach($doors->sortBy('weight') as $item)
            {{--{{ dd($item) }}--}}
            <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }} col-sm-6">
                <div class="shop-stuff shk-item three ">
                    <div class="shop-stuff-b">
                        <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">
                            <img class="shk-image" src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" height="200">
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
        <div class="clearfix"></div>
        <div class="buttons">
            <a href="/stroydetali.php">Межкомнатные двери</a>
            <a href="/leras.php">Металлические двери</a>
        </div>
    </div>

    <div class="bottom-form">
        @if(session()->has('message'))
            <div class="alert alert-success">
                <h1>{{ session()->get('message') }}</h1>
            </div>
        @endif
        <h2 style="color: #fff; text-align: center;">Оставить заявку на бесплатную консультацию</h2>
        <p class="error"></p>
        <form method="post" action="/mail" id="FormOrder" class="form-inline">
            <input name="_token" type="hidden"  value="{{ csrf_token() }}" />
            <div class="form-group">
                <label for="exampleInputName2">Ваше имя <span class="mark">*</span></label>
                <input name="name" class="form-control text" id="exampleInputName2" type="text" value="" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Контактный телефон <span class="mark">*</span></label>
                <input name="phone" class="form-control" id="exampleInputEmail2" type="text" value="" />
            </div>
            <!--<input type="submit" name="contact" id="cfContact" class="button" style="background: url(/assets/images/send_rus.png)no-repeat; width:150px; height:25px; border:0px;" value="" />-->
            <button type="submit" class="btn btn-default">Отправить</button>
        </form>
    </div>
    <div class="bottom-block">
        ТОО «Российские двери» предлагает межкомнатные двери производства России в Алматы, в полном ценовом ассортименте, широкая гамма цветов и оттенков, от «эконом» - класса до класса «премиум» с разными видами отделки.
        <div>
            <a href="javascript:collapsElement('identifikator')" title="" rel="nofollow">Читать далее</a>
            <div id="identifikator" style="display: none">
                <p>В наличии имеются двери в стиле классики и модерна, глухие и остеклённые.
                    Наши двери рассчитаны для применения внутри помещений. Все модели дверей могут быть использованы как в жилых, так и в общественных помещениях с влажностью воздуха не более 65%.</p>
                <p>Также в продаже имеются металлические двери, ламинат, плинтус, широкий выбор фурнитуры.</p>

                <p>Ассортимент:</p>
                <p>* двери из массива сосны, покрытие натуральный шпон</p>
                <p>* облегчённые двери, покрытие натуральный шпон</p>
                <p>* облегчённые двери, покрытие искусственный шпон</p>
                <p>* облегчённые двери, лакокрасочное покрытие.</p>
            </div>
        </div>
    </div>
    <script>
        function collapsElement(id) {
            if (document.getElementById(id).style.display != "none") {
                document.getElementById(id).style.display = 'none';
            } else {
                document.getElementById(id).style.display = '';
            }
        }
    </script>

@endsection
