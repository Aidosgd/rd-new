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
                        <h3 class="box-title">Сертификат</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    {!! Form::model($certificate, ['method' => ($certificate) ? 'PUT' : 'POST', 'files'=>true, 'route' => ['cp.certificates.'.($certificate?'update':'store'), ($certificate)?$certificate->id:'' ]]) !!}
                        <div class="box-body">
                            <?php
                            $url = Route::getFacadeRoot()->current()->uri();
                            ?>
                            @if($url != 'cp/certificates/create')
                                <div class="img-preview">
                                    <img class="thumbnail" data-id="{{ $certificate->id }}" src="/uploads/certificates/{{ $certificate->name }}" alt="">
                                </div>
                            @endif
                            <div class="form-group">
                                <label>Фото:</label>
                                {{ Form::file('image', ['id' => 'files']) }}
                                <output id="list"></output>
                            </div>
                            <div class="form-group">
                                <label>Ссылка</label>
                                {!! Form::text('link', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Название ру</label>
                                {!! Form::text('text_ru', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Название кз</label>
                                {!! Form::text('text_kk', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Описание ру</label>
                                {!! Form::textarea('description_ru', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Описание кз</label>
                                {!! Form::textarea('description_kk', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>Порядок</label>
                                {!! Form::text('weight', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="form-group">
                                <label>В новом окне</label>
                                {!! Form::select('blank', [false => 'В этом окне', true => 'В новом'], ['class' => 'form-control']) !!}
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