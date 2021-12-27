@extends('layouts2019.app')
@section('content')
    <div style="background: #f2ede6">
        <div class="container" style="padding: 40px 0">
            <div class="row">
                <div class="col-md-12">
                    <ul class="breadcrumb">
                        <li><a href="/{{ $lang }}?city={{$city}}">{{ trans('pages.home') }}</a></li>
                        <li>{{ $pageName->title }}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                @if($pageName->seo_keywords == 'articles')
                    <div class="col-md-3">
                        <h1 class="sidebar-head">{{ trans('pages.useful_articles') }}</h1>
                        <ul class="sidebar">
                            <li><a href="/{{ $lang }}/pages/vybor_mezhkomnatnykh_dverey_massiv_shpon_ili_laminat.php?city={{$city}}">{{ trans('pages.vybor_mezhkomnatnykh_dverey_massiv_shpon_ili_laminat') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/pravilnaya_ustanovka_vkhodnykh_i_mezhkomnatnykh_dverey_osnovnye_etapy_i_sposoby.php?city={{$city}}">{{ trans('pages.pravilnaya_ustanovka_vkhodnykh_i_mezhkomnatnykh_dverey_osnovnye_etapy_i_sposoby') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/dveri_kupe_razdvizhnye_dveri_v_almaty.php?city={{$city}}">{{ trans('pages.dveri_kupe_razdvizhnye_dveri_v_almaty') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/chto_takoe_shpon.php?city={{$city}}">{{ trans('pages.chto_takoe_shpon') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/metallicheskie_dveri_v_almaty.php?city={{$city}}">{{ trans('pages.metallicheskie_dveri_v_almaty') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/metallicheskie_dveri_kak_vybirat.php?city={{$city}}">{{ trans('pages.metallicheskie_dveri_kak_vybirat') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/mezhkomnatnye_dveri_v_almaty.php?city={{$city}}">{{ trans('pages.mezhkomnatnye_dveri_v_almaty') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/kak_ustanovit_mezhkomnatnye_dveri.php?city={{$city}}">{{ trans('pages.kak_ustanovit_mezhkomnatnye_dveri') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/razdvizhnye_dveri.php?city={{$city}}">{{ trans('pages.razdvizhnye_dveri') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/vkhodnye_dveri.php?city={{$city}}">{{ trans('pages.vkhodnye_dveri') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/chasto_voznikayushchie_voprosy.php?city={{$city}}">{{ trans('pages.chasto_voznikayushchie_voprosy') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/dvernye_izdeliya_v_almaty.php?city={{$city}}">{{ trans('pages.dvernye_izdeliya_v_almaty') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/ekologicheski_chistye_dveri_ekoshpon_po_dostupnoy_tsene.php?city={{$city}}">{{ trans('pages.ekologicheski_chistye_dveri_ekoshpon_po_dostupnoy_tsene') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/vysokokachestvennye_dveri_v_kredit_vygodnaya_stavka.php?city={{$city}}">{{ trans('pages.vysokokachestvennye_dveri_v_kredit_vygodnaya_stavka') }}</a></li>
                            <li><a href="/{{ $lang }}/pages/bolshie_skidki_na_dveri_almaty_aktsii_na_dveri_almaty_vygodno.php?city={{$city}}">{{ trans('pages.bolshie_skidki_na_dveri_almaty_aktsii_na_dveri_almaty_vygodno') }}</a></li>
                        </ul>
                    </div>
                @endif
                <div id="text-page" class="{{ $pageName->seo_keywords == 'articles' ? 'col-md-9' : 'col-md-12' }}">
                    {!! $pageName->description !!}
                </div>
            </div>
        </div>
    </div>
@endsection