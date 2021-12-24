@extends('layouts2019.app')
@section('head')
    <style>
        .product__details p{
            padding: 0 5px;
            margin: 0;
        }
        @media (max-width: 768px) {
            video{
                width: 100% !important;
            }
        }
    </style>
@endsection
@section('content')
    <div style="background: #f2ede6">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    {{--<ul class="breadcrumb">--}}
                    {{--<li><a href="{{ url('/') }}">Главная</a></li>--}}
                    {{--<li><a href="/doors/{{ $doorCategory->slug }}">{{ $doorCategory->name }}</a></li>--}}
                    {{--<li>{{ $door->title }}</li>--}}
                    {{--</ul>--}}
                    <div class="row page-top">
                        <div class="col-sm-6 col-sm-offset-3">
                            <h1 class="product__heading">{{ $door->title }}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="row product__main">
                        <div class="col-sm-3">
                            <div class="mainImage">
                                <a data-fancybox="gallery" class="image_js hidden-xs"  href="/uploads/doors/{{ $door->images->first()->name }}">
                                    <img src="/uploads/doors/{{ $door->images->first()->name }}" alt="" class="img-responsive">
                                </a>
                            </div>
                            <div class="row product__thumbs" style="margin-top: 50px; padding: 0 15px;">
                                @foreach($door->images as $index => $image)
                                    <div style="display: inline-block;padding-right: 15px;margin-bottom: 15px;">
                                        <a data-fancybox="gallery" href="/uploads/doors/{{ $image->name }}" class="image_js thumb group1 {{ $index == 0 ? 'active' : '' }}">
                                            <img style="max-height: 150px" src="/uploads/doors/{{ $image->name }}" alt="" class="img-responsive">
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                        <div class="col-md-4">
                            @if($door->video)
                                <video width="400" style="max-height: 570px" src="/uploads/videos/{{ $door->video }}" controls>
                                    <source src="/uploads/videos/{{ $door->video }}" type="video/mp4">
                                    Your browser does not support HTML5 video.
                                </video>
                            @endif
                        </div>
                        <div class="col-sm-5">
                            <div class="product__details">
                                <h4>{{ trans('doors.description') }}</h4>
                                {!! $door->description !!}

                                <h4>Цена:</h4>
                                <h4>{{ $door->price }} тенге {{$door->category->id == 1 ? 'цена за полотно' : ''}}</h4>
                                @if($door->second_price)<h4>{{ $door->second_price }} тенге за комплект</h4>@endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js"></script>
@endsection