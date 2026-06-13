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
                    {!! Form::model($page, ['method' => ($page) ? 'PUT' : 'POST', 'files'=>true, 'route' => ['cp.pages.'.($page?'update':'store'), ($page)?$page->id:'' ]]) !!}
                        <div class="box-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название страницы</label>
                                {!! Form::text('title', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Порядок</label>
                                {!! Form::text('weight', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Описание</label>
                                {{ Form::textarea('description', null, ['class' => 'form-control']) }}
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="exampleInputEmail1">seo title</label>
                                {!! Form::text('seo_title', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">seo keywords</label>
                                {!! Form::text('seo_keywords', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">seo description</label>
                                {!! Form::text('seo_description', null, ['class' => 'form-control']) !!}
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

@section('scripts')
    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script src="/vendor/unisharp/laravel-ckeditor/adapters/jquery.js"></script>
    <script>
        $('textarea').ckeditor();
    </script>
@endsection