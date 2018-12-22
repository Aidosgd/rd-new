<div class="header" style="position: relative;">

    <div class="logo hidden-xs">
        <a href="/"><img src="/newdesign/images/header/logo.jpg" style="width: 100%; margin: 0"></a>
    </div>

    @yield('header-slider')

    <nav class="navbar navbar-default">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header visible-xs">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">RUSSDOORS</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="/sale" style="color: #ebff00;">Акции</a></li>
                <li><a href="/stroydetali.php">Межкомнатные Двери</a></li>
                <li><a href="/leras.php">Металлические Двери</a></li>
                <li><a href="/doors/fittings">Фурнитура</a></li>
                <li><a href="/pages/sotrudnichestvo.php">Сотрудничество</a></li>
                <li><a href="/contacts/almaty.php">Контакты</a></li>
                <li><a href="/">Главная</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>

    <div class="banners-block visible-xs">
        <img class="hidden" src="/newdesign/images/header/logo.jpg" style="width: 100%; margin: 0">
        <div class="address">
            <ul>
                <li><a href="/stroydetali.php">Межкомнатные Двери</a></li>
                <li><a href="/leras.php">Металлические Двери</a></li>
                <li><a href="/doors/fittings">Фурнитура</a></li>
            </ul>
        </div>
    </div>
</div>
