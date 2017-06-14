@extends('app')
@section('head')
    <style>
        ul.custom{
            list-style: none;
            text-align: center;
            padding: 0;
            margin-bottom: 30px;
        }
        ul.custom li{
            display: inline-block;
            padding: 0 15px;
        }
    </style>
@endsection
@section('content')
    <section>
        <div class="row">
            <div class="col-md-12">
                <div class="heading">
                    <h4>{{ $doorCategory->name }}</h4>
                </div>
            </div>
        </div>
        @if($doorCategory->id == 1)
            <ul class="custom">
                <li style="padding-left: 0;"><a href="/doors/mezhkomnatnye-dveri/m/1">Российские</a></li>
                <li><a href="/doors/mezhkomnatnye-dveri/m/2">Белорусские</a></li>
                <li><a href="/doors/mezhkomnatnye-dveri/m/3">Элитные</a></li>
            </ul>
        @endif
        <div class="row products">
            @foreach($doors->sortBy('weight') as $item)
                <div class="{{ $item->category->id == 1 ? 'col-md-3' : 'col-md-4' }} col-sm-6">
                    <div class="product">
                        <div class="image">
                            <a href="#" data-toggle="modal" data-target="#{{ $item->slug }}">
                                <img style="height: 300px" src="{{ $item->images->first()->getSrc('doors') }}" alt="" class="img-responsive">
                            </a>
                            <div class="quick-view-button">
                                <a href="#" data-toggle="modal" data-target="#{{ $item->slug }}" class="btn btn-default btn-sm">
                                    Просмотр
                                </a>
                            </div>
                        </div>
                        <div class="text">
                            <h3>
                                <a href="/doors/{{ $item->category->slug }}/n/{{ $item->slug }}">{{ $item->title }}</a>
                            </h3>
                            <h4>{{ $item->price }} тенге</h4>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        @foreach($doors as $item)
            <div style="display: none;" id="{{ $item->slug }}" tabindex="-1" role="dialog" aria-hidden="false" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button>
                            <div class="row quick-view product-main">
                                <div class="col-sm-4" style="padding-top: 80px">
                                    <div class="quick-view-main-image">
                                        <img style="height: 350px" src="{{ $item->images->first()->getSrc('doors') }}" alt="" class="img-responsive">
                                    </div>
                                    <div class="row thumbs">
                                        @foreach($item->images as $image)
                                            <div class="col-xs-4">
                                                <a href="/uploads/doors/{{ $image->name }}" class="thumb">
                                                    <img style="max-height: 150px;" src="{{ $image->getSrc('doors') }}" alt="" class="img-responsive">
                                                </a>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <h2 class="product__heading">{{ $item->title }}</h2>
                                    <h4>{{ $item->price }} тенге</h4>
                                    {!! $item->description !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal-dialog-->
            </div>
        @endforeach
    </section>
@endsection