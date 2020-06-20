<nav class="nav wow fadeInUp">
    <div class="container">
        <div class="buttons">
            <ul>
                @foreach($topMenu[0]->children as $item)
                    <li><a href="/{{ $lang }}{{$item->link}}">{{ $item->title }}</a></li>
                @endforeach
            </ul>
        </div>
    </div>
</nav>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow fadeInUp">
                <a href="/{{ $lang }}">
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
                <p>{{ trans('header.address') }}</p>
                <p><a href="tel:+7 727 345 01 01">+7 (727) 345-01-01;</a></p>
                <p><a href="tel:+7 747 488 29 12">+7 747 488-29-12;</a></p>
                <p><a href="tel:+7 747 197 50 91">+7 707 197 50 91.</a></p>
            </div>
        </div>
    </div>
</header>