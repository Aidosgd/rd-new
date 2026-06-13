@extends('app')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <ul class="breadcrumb">
                <li><a href="{{ url('/') }}">Главная</a></li>
                <li>Новости</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div id="text-page" class="col-md-12">
            <h1>Новости Компании ТОО Российские Двери</h1>
            @foreach($news as $item)
                <div id="news">
                    <h2><a href="/pages/{{ $item->slug }}.php">{{ $item->title }}</a></h2>
                    <div class="introtext"><span class="date">{{ $item->created_at->format('d.m.Y') }}</span> {{ str_limit(strip_tags($item->description)) }}</div>
                    <div class="readmore"><a href="/pages/{{ $item->slug }}">Читать дальше →</a></div>
                </div>
            @endforeach
        </div>
    </div>
@endsection