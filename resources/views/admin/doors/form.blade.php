@extends('admin.app')
@section('head')
    <style>
        .thumb {
            height: 75px;
            border: 1px solid #000;
            margin: 10px 5px 0 0;
        }
        .img-preview {
            width: 120px;
            display: inline-block;
            vertical-align: top;
        }
        .img-preview .thumbnail {
            width: 100%;
        }
        #result div {
            width: 25%;
            display: inline-block;
        }
        #result div .thumbnail {
            max-width: 100%;
            max-height: 100px;
        }
    </style>
@endsection
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
                    {!! Form::model($door, ['method' => ($door) ? 'PUT' : 'POST', 'files'=>true, 'route' => ['cp.doors.'.($door?'update':'store'), ($door)?$door->id:'' ]]) !!}
                        <div class="box-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название двери</label>
                                {!! Form::text('title', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Цена</label>
                                {!! Form::text('price', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Порядок</label>
                                {!! Form::text('weight', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Категория</label>
                                {!! Form::select('doors_category_id', [ 1 => 'Межкомнатный', 2 => 'Металические'], null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Производитель</label>
                                {!! Form::select('manufacturer',
                                [
                                 0 => 'Нет',
                                 1 => 'Российские',
                                 2 => 'Белорусские',
                                 3 => 'Элитные',
                                 ],
                                 null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Описание</label>
                                {{ Form::textarea('description', null, ['class' => 'form-control']) }}
                            </div>
                            <?php
                            $url = Route::getFacadeRoot()->current()->uri();
                            ?>
                            @if($url != 'cp/doors/create')
                                @foreach($door->images as $image)
                                    <div class="img-preview">
                                        <img class="thumbnail" data-id="{{ $image->id }}" src="/uploads/doors/{{ $image->name }}" alt="">
                                        <button type="button" class="deleteImage">Удалить</button>
                                        {{ Form::hidden('doors_images[]', $image->id, ['class'=>'form-control']) }}
                                    </div>
                                @endforeach
                            @endif
                            <div class="form-group">
                                <label>Фото:</label>
                                {{ Form::file('images[]', ['id' => 'files', 'multiple']) }}
                                <output id="list"></output>
                            </div>
                            <?php
                            $url = Route::getFacadeRoot()->current()->uri();
                            ?>
                            @if($url != 'cp/doors/create')
                                <div class="img-preview">
                                    <img class="thumbnail" data-id="{{ $door->id }}" src="/uploads/doors/{{ $door->main_image }}" alt="">
                                </div>
                            @endif
                            <div class="form-group">
                                <label>Фото для главной страницы:</label>
                                {{ Form::file('main_image', ['id' => 'files']) }}
                                <output id="list"></output>
                            </div>

                            <div class="form-group">
                                <label>Главная страница:</label>
                                {{ Form::checkbox('main_page', null) }}
                                <output id="list"></output>
                            </div>

                            <div class="form-group">
                                <label>Опубликовать:</label>
                                {{ Form::checkbox('active', null) }}
                                <output id="list"></output>
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
        // $('.textarea').ckeditor(); // if class is prefered.
        $('.deleteImage').on('click', function(){
            $(this).closest('.img-preview').remove();
        });

        function handleFileSelect(evt) {
            var files = evt.target.files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {

                // Only process image files.
                if (!f.type.match('image.*')) {
                    continue;
                }

                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        // Render thumbnail.
                        var span = document.createElement('span');
                        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
                        document.getElementById('list').insertBefore(span, null);
                    };
                })(f);

                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
        }

        document.getElementById('files').addEventListener('change', handleFileSelect, false);
    </script>
@endsection