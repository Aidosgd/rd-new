@extends('newdesign.app')
@section('content')
    <h1>{{ $doorCategory->name }}</h1>

    @if($doorCategory->id == 1)
        <ul class="custom">
            <li style="padding-left: 0;"><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/1">Российские</a></li>
            <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/2">Белорусские</a></li>
            <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/3">Элитные</a></li>
        </ul>
    @endif
    <div class="row doors">
        @foreach($doors->sortBy('weight') as $item)
            <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }} col-sm-6">
                <div class="shop-stuff shk-item three ">
                    <div class="shop-stuff-b">
                        <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">
                            <img class="shk-image" src="{{ $item->images->first()->getSrc('doors') }}" height="200">
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
    </div>
@endsection