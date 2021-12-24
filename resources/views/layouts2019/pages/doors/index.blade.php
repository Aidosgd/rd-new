@extends('layouts2019.app')
@section('content')
    <section class="bestseller">
        <div class="bg-s">
            <h2 class="text-center" style="text-transform: uppercase">{{ $doorCategory->name }}</h2>
            <div class="container">
                @if($doorCategory->id == 1)
                    <ul class="custom hidden">
                        <li style="padding-left: 0;"><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/1">{{ trans('doors.russian') }}</a>
                        </li>
                        <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/2">{{ trans('doors.belarusian') }}</a></li>
                        <li><a class="btn btn-default" href="/doors/mezhkomnatnye-dveri/m/3">{{ trans('doors.under_the_order') }}</a></li>
                    </ul>
                @endif
                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 300 300">
                        <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z"
                              class="st0"></path>
                    </svg>
                </div>
                <div class="row doors-list">
                    @foreach($doors as $index => $item)
                        <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }}  wow fadeInUp">
                            <div class="door-item">
                                <a href="/{{$lang}}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">
                                    @if(!empty($item->images->first()))
                                        <img style="{{ $item->category->id != 1 ? 'height: 350px' : '' }}"
                                             src="/uploads/doors/{{ $item->images->first()->name }}"
                                             class="padding-30"
                                             alt="">
                                    @endif
                                    <h3>{{ $item->title }}</h3>
                                </a>
                                <div class="price">{{ $item->price }} ₸ {{$item->category->id == 1 ? 'цена за полотно' : ''}}</div>
{{--                                <div class="price">@if($item->second_price){{ $item->second_price }} ₸ за комплект@endif&nbsp;</div>--}}
                                <a href="/{{$lang}}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}"
                                   class="btn btn-default">{{ trans('doors.more_details') }}</a>
                            </div>
                        </div>
                    @endforeach
                </div>

                <div class="text-center wow fadeInUp">
                    {{ $doors->links() }}
                </div>

                <h2>{{$pageInfo[$lang === 'ru' ? 'title' : 'title_kk']}}</h2>
                <p>{!! $pageInfo[$lang === 'ru' ? 'description' : 'description_kk'] !!}</p>
            </div>
        </div>
    </section>

@endsection
