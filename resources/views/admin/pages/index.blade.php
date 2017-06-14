@extends('admin.app')

@section('content')
        <section class="content">
        <!-- /.row -->
        <div class="row">
            <div class="col-xs-12">
                @if(Session::has('message'))
                    <p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
                @endif
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Объявления</h3>
                        <a href="{{ url('/cp/pages/create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Создать</a>
                        <div class="box-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover table-bordered">
                            <tr>
                                <th>ID</th>
                                <th>Название</th>
                                <th>Ссылка</th>
                                <th>Порядок</th>
                                <th>Описание</th>
                                <th>Действия</th>
                            </tr>
                            @foreach($page->sortByDesc('created_at') as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->title }}</td>
                                    <td>{{ $item->slug }}</td>
                                    <td>{{ $item->weight }}</td>
                                    <td>{{ str_limit($item->description)  }} </td>
                                    <td>
                                        <a href="/cp/pages/{{ $item->id }}/edit" class="btn btn-warning btn-sm">
                                            <i class="fa fa-pencil"></i>
                                            Редактировать
                                        </a>
                                        <form action="{{ URL::route('cp.pages.destroy', $item->id) }}" method="POST" style="display: inline-block">
                                            <input type="hidden" name="_method" value="DELETE">
                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                            <button class="btn btn-danger btn-sm"><i class="fa fa-close"></i> Удалить</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
        </div>
    </section>
@endsection