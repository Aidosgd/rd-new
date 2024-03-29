@extends('layouts2019.app')

@section('content')
    <div class="home-slider">
        @foreach($slider as $slide)
            <div class="slide">
                <img src="/uploads/slider/{{$slide->name}}" alt="">
                <div class="slide__content">
                    <p class="catalog-text">{{ strip_tags($slide['description_'.app()->getLocale()])  }}</p>
                    @if($slide['text_'.app()->getLocale()])
                        <a href="{{$slide->link}}" @if($slide->blank) target="_blank" @endif class="btn btn-default btn-effects animate-btn">
                            {{ $slide['text_'.app()->getLocale()] }}
                            <div class="t-btn_effects"></div>
                        </a>
                    @endif
                </div>
            </div>
        @endforeach
    </div>

    <section class="bestseller">
        <h1 class="text-center">{{ trans('home.bestsellers') }}</h1>

        <div class="bg-s">
            <div class="container">

                <h2>{!! trans('home.interior_doors') !!}</h2>

                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z" class="st0"></path> </svg>
                </div>

                <div class="row doors-list">
                    <?php $count = 1 ?>
                    @foreach($doors as $index => $item)
                        @if($item->category->id == 1)
                            <div class="col-md-3 wow fadeInUp">
                                <div class="door-item">
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}">
                                        <img src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" class="padding-30" alt="">
                                        <h3>{{ $item->title }}</h3>
                                        <div class="price">@convert($item->price) ₸ цена за полотно</div>
                                    </a>
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}" class="btn btn-default">{{ trans('home.more_details') }}</a>
                                </div>
                            </div>
                            @if($count%4 === 0)
                                <div class="clearfix"></div>
                            @endif
                            <?php $count++ ?>
                        @endif
                    @endforeach
                </div>

                <h2>{!! trans('home.metal_doors') !!}</h2>

                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z" class="st0"></path> </svg>
                </div>
                <div class="row doors-list">
                    @foreach($doors as $item)
                        @if($item->category->id === 2)
                            <div class="col-md-4 wow fadeInUp">
                                <div class="door-item">
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}">
                                        <img src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" class="padding-30 width-100" alt="">
                                        <h3>{{ $item->title }}</h3>
                                        <div class="price">@convert($item->price) ₸</div>
                                    </a>
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}" class="btn btn-default">{{ trans('home.more_details') }}</a>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>


                <h2>{!! trans('home.sale_doors') !!}</h2>

                <div class="visible-xs scroll-icon-wrap">
                    <svg class="scroll-icon" style="width:22px;fill:#bebebe;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M97.2 298.2S56.1 225 38.8 193.3c-23-42.2-26.8-60-10.9-68.8 9.9-5.5 23.6-3.2 32 11.4l19.6 31.2V44.8s-1.2-32.3 21.8-32.3c24.5 0 22.4 32.3 22.4 32.3v59.4s12.9-9.3 28-5.1c7.7 2.1 16.7 5.8 21.5 18 0 0 30.7-14.9 46 16.8 0 0 35.4-7 35.4 29.7s-44.2 134.6-44.2 134.6H97.2zM249.9.5l-10.6 10.6 24.1 23.8H158.5v15h105l-24.2 23.9 10.6 10.6 42.5-42z" class="st0"></path> </svg>
                </div>

                <div class="row doors-list">
                    @foreach($doors as $item)
                        @if($item->category->id === 4)
                            <div class="col-md-4 wow fadeInUp">
                                <div class="door-item">
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}">
                                        <img src="{{ $item->getSrc('doors') ? $item->getSrc('doors') : $item->images->first()->getSrc('doors') }}" class="padding-30 h-300" alt="">
                                        <h3>{{ $item->title }}</h3>
                                        <div class="price">@convert($item->price) ₸</div>
                                    </a>
                                    <a href="/{{ $lang }}/doors/{{ $item->category->slug }}/n/{{ $item->slug }}?city={{$city}}" class="btn btn-default">{{ trans('home.more_details') }}</a>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>

                @if($banner)
                    <div class="row">
                        <div class="col-12">
                            <a href="{{$banner->link}}" target="_blank">
                                <img style="width: 100%" src="/uploads/banner/{{$banner->name}}" alt="">
                            </a>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>

{{--    <section class="download-catalog">--}}
{{--        <div class="container">--}}
{{--            <div class="block">--}}
{{--                <h3 class="wow fadeInUp">{{ $form1['title'] }}</h3>--}}
{{--                <p class="wow fadeInUp">{!! $form1['description'] !!}</p>--}}

{{--                @if(session()->has('message'))--}}
{{--                    <div class="alert alert-success">--}}
{{--                        <h1>{{ session()->get('message') }}</h1>--}}
{{--                    </div>--}}
{{--                @endif--}}

{{--                <div class="block__width wow fadeInUp">--}}
{{--                    <div class="row">--}}
{{--                        <form action="/{{$lang}}/mail/download" method="post" id="downloadForm">--}}
{{--                            <input name="_token" type="hidden"  value="{{ csrf_token() }}" />--}}
{{--                            <div class="col-md-8">--}}
{{--                                <input type="email" name="email" placeholder="{{ trans('home.your_email') }}" required>--}}
{{--                            </div>--}}
{{--                            <div class="col-md-4">--}}
{{--                                <button type="submit" class="btn btn-default btn-effects">--}}
{{--                                    {{ trans('home.get_catalog') }}--}}
{{--                                    <div class="t-btn_effects"></div>--}}
{{--                                </button>--}}
{{--                            </div>--}}
{{--                        </form>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}

    <section class="quality">
        <div class="container">
            <h2>{{ trans('home.low_price_guarantees_with_high_quality') }}</h2>

            <div class="row">
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.experience') }}</h3>
                    <p>{{ trans('home.experience_text') }}</p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.selection') }}</h3>
                    <p>{{ trans('home.selection_text') }}</p>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.status') }}</h3>
                    <p>{{ trans('home.status_text') }}</p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.speed') }}</h3>
                    <p>{{ trans('home.speed_text') }}</p>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.reliability') }}</h3>
                    <p>{{ trans('home.reliability_text') }}</p>
                </div>
                <div class="col-md-6 quality-item">
                    <h3>{{ trans('home.exclusivity') }}</h3>
                    <p>{{ trans('home.exclusivity_text') }}</p>
                </div>
            </div>
        </div>

    </section>

{{--    <section class="tour-3d">--}}
{{--        <div class="container">--}}
{{--            <div class="row">--}}
{{--                <div class="col-md-6 wow fadeInUp">--}}
{{--                    <h4>{{ trans('home.3d_tour_h4') }}</h4>--}}
{{--                    <h3>{{ trans('home.3d_tour_h3') }}</h3>--}}
{{--                    <p>{{ trans('home.3d_tour_p') }}</p>--}}
{{--                    <a href="/public/3d/output/" target="_blank" class="btn btn-default">{{ trans('home.3d_tour_a') }}</a>--}}
{{--                </div>--}}
{{--                <div class="col-md-6 wow fadeInUp">--}}
{{--                    <img class="img-responsive" src="/css/images/new2019/russdoors-3dtour.jpg" alt="">--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}

    <section class="about-us">
        <div class="container">
            <div class="inner-c">
                <h2 class="wow fadeInUp">{{ trans('home.about_us_h2') }}</h2>

                <p class="wow fadeInUp">{{ trans('home.about_us_p_1') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_2') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_3') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_4') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_5') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_6') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_7') }}</p>
                <p class="wow fadeInUp">{{ trans('home.about_us_p_8') }}</p>
            </div>

            <h3 class="wow fadeInUp">{{ trans('home.certificates_and_certificates') }}:</h3>

            <div class="table-responsive wow fadeInUp">
                <table>
                    <tbody>
                    <tr>
                        @foreach($certificates as $item)
                            <td><img src="/uploads/certificates/{{ $item->name }}" alt=""></td>
                        @endforeach
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

{{--    <section class="door-interier">--}}
{{--        <div class="container">--}}
{{--            <div class="row">--}}
{{--                <div class="col-md-6 wow fadeInUp">--}}
{{--                    <img class="img-responsive" src="/css/images/new2019/dveri.jpg" alt="">--}}
{{--                </div>--}}
{{--                <div class="col-md-6 wow fadeInUp">--}}
{{--                    <h3>{{ trans('home.door_interier_h3') }}</h3>--}}
{{--                    <p>{{ trans('home.door_interier_p') }}</p>--}}
{{--                    <a href="/{{ $lang }}/pages/interior_door.php?city={{$city}}" class="btn btn-default">{{ trans('home.door_interier_a') }}</a>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}

{{--    @include('layouts2019.parts.reviews')--}}
@endsection