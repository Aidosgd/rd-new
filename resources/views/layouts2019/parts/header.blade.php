<nav class="nav wow fadeInUp">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="buttons">
                    <ul>
                        @foreach($topMenu[0]->children as $item)
                            <li style="font-size: 16px;"><a href="/{{ $lang }}{{$item->link}}?city={{$city}}">{{ $item->title }}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="locale position-relative cities-block">
                    <ul>
                        <li class="{{ $city === 'almaty' ? 'active' : '' }}">
                            <a data-val="almaty" href="{{url()->current()}}">Алматы</a>
                        </li>
                        <li class="{{ $city === 'nur-sultan' ? 'active' : '' }}">
                            <a data-val="nur-sultan" href="{{url()->current()}}?city=nur-sultan">Астана</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow fadeInUp">
                <a href="/{{ $lang }}?city={{$city}}">
                    <img class="logo" src="/css/images/new2019/russdoorskz-logo.png" alt="">
                </a>
            </div>
            <div class="col-md-6 header__address wow fadeInUp">
                <div class="locale">
                    <ul>
                        @foreach($langs as $key => $itemLang)
                            <li class="{{ $lang === $key ? 'active' : '' }}"><a href="/{{ $key }}">{{ $itemLang['name'] }}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="clearfix"></div>
                <img class="logo_kaspi" src="/css/images/new2019/icons/kaspi_logo.png" alt="">
                <p>{{ $city === 'almaty' ? trans('header.address') : 'ул. Мухамедханова, 19' }}</p>
                @if($city === 'almaty')
                    <p><a href="tel:+7 727 345 01 01">+7 (727) 345-01-01;</a></p>
                    <p><a href="tel:+7 747 488 29 12">+7 747 488-29-12;</a></p>
                    <p><a target="_blank" href="https://api.whatsapp.com/send?phone=77071975091">+7 707 197 50 91.</a></p>
                @else
                    <p><a href="tel:+7 (701) 750-98-60">+7 (701) 750-98-60</a></p>
                @endif
            </div>
        </div>
		<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(89298721, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/89298721" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
    </div>
</header>