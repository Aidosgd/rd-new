@extends('admin.app')
@section('content')
    @if($errors)
        <div>
            <ul>
                @foreach($errors->all('<li>:message</li>') as $error)
                    {!! $error !!}
                @endforeach
            </ul>
        </div>
    @endif
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <!-- general form elements -->
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Пункт меню</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    {!! Form::model($menu, ['method' => ($menu) ? 'PUT' : 'POST', 'route' => ['cp.menus.'.($menu?'update':'store'), ($menu)?$menu->id:'' ]]) !!}
                        <div class="box-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название меню</label>
                                {!! Form::text('title', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ссылка</label>
                                {!! Form::text('link', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Порядок</label>
                                {!! Form::text('weight', null, ['class' => 'form-control']) !!}
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Родитель</label>
                                <?php
                                    $menus->put(0, 'Нету');
                                ?>
                                @if($menus->count())
                                    {!! Form::select('parent_id', $menus, $menu, ['required', 'class' => 'form-control']) !!}
                                @else
                                    {!! Form::select('parent_id', [ null => 'нету'], ['required', 'class' => 'form-control']) !!}
                                @endif
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    {!! Form::close()!!}
                </div>
                <!-- /.box -->
            </div>
        </div>
        <!-- /.row -->

    </section>
@endsection