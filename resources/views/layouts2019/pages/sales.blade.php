@extends('layouts2019.app')

@section('content')
    <div style="background: #f2ede6">
        <div class="container">
            <h1 style="padding-bottom: 30px; text-align: center">{{ trans('pages.sell_out') }}</h1>

            <div class="row doors">
				<h2 style="padding-bottom: 20px; text-align: center">{{ trans('pages.no_sell') }}</h2>
            </div>
        </div>
    </div>
@endsection
