<section class="feedback">
    <div class="container">
        <h2 class="wow fadeInUp">{{ $form2['title'] }}</h2>

        <p class="wow fadeInUp">{!! $form2['description'] !!}</p>

        @if(session()->has('message'))
            <div class="alert alert-success">
                <h1>{{ session()->get('message') }}</h1>
            </div>
        @endif

        <div class="form wow fadeInUp">
            <div class="row">
                <div class="col-md-6">
{{--                    <form id="callForm" method="post" action="/mail/call">--}}
{{--                        <input name="_token" type="hidden"  value="{{ csrf_token() }}" />--}}
{{--                        <div class="form-group">--}}
{{--                            <input type="text" name="phone" class="form-control" placeholder="{{ trans('footer.your_phone') }}" required>--}}
{{--                        </div>--}}
{{--                        <div class="form-group">--}}
{{--                            <input type="email" name="email" class="form-control" placeholder="{{ trans('footer.your_email') }}" required>--}}
{{--                        </div>--}}
{{--                        <div class="form-group">--}}
{{--                            <input type="text" name="name" class="form-control" placeholder="{{ trans('footer.your_name') }}" required>--}}
{{--                        </div>--}}
                        <a href="https://api.whatsapp.com/send?phone=77071975091" target="_blank" class="btn btn-default btn-effects" style="line-height: 50px;">
                            написать в Whatsapp
                            <div class="t-btn_effects"></div>
                        </a>
{{--                    </form>--}}
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
        {!! $city === 'almaty' ? $form3['description'] : $contactsNurSultan['description'] !!}
    </div>
    <div id="map"></div>
    <div class="container hidden-xs">
        <div class="map-content">
            {!! $city === 'almaty' ? $form3['description'] : $contactsNurSultan['description'] !!}
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="buttons">
            <ul class="footer__menu">
                @foreach($bottomMenu[0]->children as $item)
                    <li><a href="/{{$lang}}{{$item->link}}?city={{$city}}">{{$item->title}}</a></li>
                @endforeach
            </ul>
        </div>

        <div class="clearfix"></div>

        <div class="footer__logo">
            <a href="/{{$lang}}?city={{$city}}">
                <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
            </a>
        </div>

        <div class="footer__copyright">
            <p>{!! trans('footer.copyright') !!}</p>
            <a style="" href="/pages/politika_konfidentsialnosti_i_obrabotki_dannykh">Политика конфиденциальности и обработки данных</a>
        </div>
    </div>
</footer>
 
 
