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
        <div id="text-page" class="col-md-12">
            {!! $pageName->description !!}
        </div>
    </div>
@endsection