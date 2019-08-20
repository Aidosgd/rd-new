<nav class="nav wow fadeInUp">
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                {{ $lang }}
                <span class="caret"></span></button>
            <ul class="dropdown-menu">
                @foreach($langs as $key => $itemLang)
                    @if($lang != $key)
                        <li><a href="/{{ $key }}">{{ $key }}</a></li>
                    @endif
                @endforeach
            </ul>
        </div>
        <div class="buttons">
            <ul>
                <li><a href="/{{ $lang }}/stroydetali.php">{{ trans('header.interior_doors') }}</a></li>
                <li><a href="/{{ $lang }}/leras.php">{{ trans('header.metal_doors') }}</a></li>
                <li><a href="/{{ $lang }}/doors/fittings">{{ trans('header.accessories') }}</a></li>
                <li><a href="/{{ $lang }}/sale">{{ trans('header.promotions') }}</a></li>
                <li><a href="/{{ $lang }}/pages/sotrudnichestvo.php">{{ trans('header.cooperation') }}</a></li>
                <li><a href="/{{ $lang }}/contacts/almaty.php">{{ trans('header.contacts') }}</a></li>
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
                <img class="logo_kaspi" src="/css/images/new2019/icons/kaspi_logo.png" alt="">
                <p>{{ trans('header.address') }}</p>
                <p><a href="tel:+7 727 345 01 01">+7 (727) 345-01-01;</a></p>
                <p><a href="tel:+7 747 488 29 12">+7 747 488-29-12;</a></p>
                <p><a href="tel:+7 747 197 50 91">+7 707 197 50 91.</a></p>
            </div>
        </div>
    </div>
</header>