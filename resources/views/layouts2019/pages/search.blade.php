@extends('layouts2019.app')
@section('content')
    <section class="bestseller">
        <div class="bg-s">
            <div class="container">

                @include('layouts2019.parts.search')

                <h2 class="text-center" style="text-transform: uppercase">
                    {{ trans('home.search_results') }}@if($query !== ''): «{{ $query }}»@endif
                </h2>

                @if(count($doors))
                    <div class="row doors-list -new">
                        @foreach($doors as $item)
                            <div class="col-md-3 wow fadeInUp col-xs-6">
                                <div class="door-item">
                                    <a href="/{{$lang}}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}">
                                        @if(!empty($item->images->first()))
                                            <img src="/uploads/doors/{{ $item->images->first()->name }}"
                                                 class="padding-30"
                                                 alt="">
                                        @endif
                                        <h3>{{ $item->title }}</h3>
                                    </a>
                                    <div class="price">{{ $city === 'almaty' ? $item->price : $item->price_nur_sultan }} ₸</div>
                                    <a href="/{{$lang}}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}"
                                       class="btn btn-default">{{ trans('doors.more_details') }}</a>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    <div class="text-center wow fadeInUp">
                        {{ $doors->links() }}
                    </div>
                @else
                    <p class="text-center" style="padding: 40px 0; font-size: 18px;">
                        {{ trans('home.search_nothing') }}
                    </p>
                @endif
            </div>
        </div>
    </section>
@endsection
