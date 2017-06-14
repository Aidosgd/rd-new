@extends('app')
@section('content')
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
                    <h4>{{ $door->price }} тенге</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="row product__main">
                <div class="col-sm-6">
                    <div class="mainImage"> 
                        <img style="height: 350px" src="/uploads/doors/{{ $door->images->first()->name }}" alt="" class="img-responsive">                       
                    </div>
                    <div class="row product__thumbs">
                        @foreach($door->images as $index => $image)
                            <a class="image_js hidden-xs" style="display: {{ $index == 0 ? 'block' : 'none' }};
                                    position: absolute;
                                    top: 0px;
                                    font-size: 30px;"  href="/uploads/doors/{{ $image->name }}">
                                <i class="fa fa-search-plus"></i>
                            </a>
                            <div class="col-xs-4">
                                <a href="/uploads/doors/{{ $image->name }}" class="thumb group1 {{ $index == 0 ? 'active' : '' }}">
                                    <img style="max-height: 150px" src="/uploads/doors/{{ $image->name }}" alt="" class="img-responsive">
                                </a>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="product__details">
                        <h4>Описание</h4>
                        {!! $door->description !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        $(".image_js").colorbox({rel:'image_js'});
    </script>
@endsection