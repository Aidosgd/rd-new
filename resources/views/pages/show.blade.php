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
                    <li><a href="/pages/vybor_mezhkomnatnykh_dverey_massiv_shpon_ili_laminat">Выбор межкомнатных дверей: массив, шпон или ламинат? </a></li>
                    <li><a href="/pages/pravilnaya_ustanovka_vkhodnykh_i_mezhkomnatnykh_dverey_osnovnye_etapy_i_sposoby">Установка входных и межкомнатных дверей</a></li>
                    <li><a href="/pages/dveri_kupe_razdvizhnye_dveri_v_almaty">Двери-купе - раздвижные
                            двери</a></li>
                    <li><a href="/pages/chto_takoe_shpon">Что такое шпон</a></li>
                    <li><a href="/pages/metallicheskie_dveri_v_almaty">Металлические двери в
                            Алматы</a></li>
                    <li><a href="/pages/metallicheskie_dveri_kak_vybirat">Металлические
                            двери- как выбирать</a></li>
                    <li><a href="/pages/mezhkomnatnye_dveri_v_almaty">Межкомнатные двери в Алматы</a></li>
                    <li><a href="/pages/kak_ustanovit_mezhkomnatnye_dveri">Как установить межкомнатные двери </a></li>
                    <li><a href="/pages/razdvizhnye_dveri">Раздвижные двери</a></li>
                    <li><a href="/pages/vkhodnye_dveri">Входные двери</a></li>
                    <li><a href="/pages/chasto_voznikayushchie_voprosy">Часто возникающие вопросы</a></li>
                    <li><a href="/pages/dvernye_izdeliya_v_almaty">Дверные изделия</a></li>
                    <li><a href="/pages/ekologicheski_chistye_dveri_ekoshpon_po_dostupnoy_tsene">Экологически чистые двери экошпон по доступной цене</a></li>
                    <li><a href="/pages/vysokokachestvennye_dveri_v_kredit_vygodnaya_stavka">Высококачественные двери в кредит выгодная ставка</a></li>
                    <li><a href="/pages/bolshie_skidki_na_dveri_almaty_aktsii_na_dveri_almaty_vygodno">Большие скидки на двери Алматы, акции на двери Алматы выгодно</a></li>
                </ul>
            </div>
        @endif
        <div id="text-page" class="{{ $pageName->seo_keywords == 'articles' ? 'col-md-9' : 'col-md-12' }}">
            {!! $pageName->description !!}
        </div>
    </div>
@endsection