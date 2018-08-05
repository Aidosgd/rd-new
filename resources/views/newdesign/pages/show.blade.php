@extends('app')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <ul class="breadcrumb">
                <li><a href="{{ url('/') }}">Главная</a></li>
                <li>{{ $pageName->title }}</li>
            </ul>
        </div>
    </div>
    <div class="row">
        @if($pageName->seo_keywords == 'articles')
            <div class="col-md-3">
                <h1 class="sidebar-head">Полезные статьи</h1>
                <ul class="sidebar">
                    <li><a href="/pages/vybor_mezhkomnatnykh_dverey_massiv_shpon_ili_laminat.php ">Выбор межкомнатных дверей: массив, шпон или ламинат? </a></li>
                    <li><a href="/pages/pravilnaya_ustanovka_vkhodnykh_i_mezhkomnatnykh_dverey_osnovnye_etapy_i_sposoby.php ">Установка входных и межкомнатных дверей</a></li>
                    <li><a href="/pages/dveri_kupe_razdvizhnye_dveri_v_almaty.php ">Двери-купе - раздвижные
                            двери</a></li>
                    <li><a href="/pages/chto_takoe_shpon.php ">Что такое шпон</a></li>
                    <li><a href="/pages/metallicheskie_dveri_v_almaty.php ">Металлические двери в
                            Алматы</a></li>
                    <li><a href="/pages/metallicheskie_dveri_kak_vybirat.php ">Металлические
                            двери- как выбирать</a></li>
                    <li><a href="/pages/mezhkomnatnye_dveri_v_almaty.php ">Межкомнатные двери в Алматы</a></li>
                    <li><a href="/pages/kak_ustanovit_mezhkomnatnye_dveri.php ">Как установить межкомнатные двери </a></li>
                    <li><a href="/pages/razdvizhnye_dveri.php ">Раздвижные двери</a></li>
                    <li><a href="/pages/vkhodnye_dveri.php ">Входные двери</a></li>
                    <li><a href="/pages/chasto_voznikayushchie_voprosy.php ">Часто возникающие вопросы</a></li>
                    <li><a href="/pages/dvernye_izdeliya_v_almaty.php ">Дверные изделия</a></li>
                    <li><a href="/pages/ekologicheski_chistye_dveri_ekoshpon_po_dostupnoy_tsene.php ">Экологически чистые двери экошпон по доступной цене</a></li>
                    <li><a href="/pages/vysokokachestvennye_dveri_v_kredit_vygodnaya_stavka.php ">Высококачественные двери в кредит выгодная ставка</a></li>
                    <li><a href="/pages/bolshie_skidki_na_dveri_almaty_aktsii_na_dveri_almaty_vygodno.php ">Большие скидки на двери Алматы, акции на двери Алматы выгодно</a></li>
                </ul>
            </div>
        @endif
        <div id="text-page" class="{{ $pageName->seo_keywords == 'articles' ? 'col-md-9' : 'col-md-12' }}">
            {!! $pageName->description !!}
        </div>
    </div>
@endsection