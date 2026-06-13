<div class="row">
    <div class="col-md-6">
        <div id="main-slider">
            @foreach($sliders->sortBy('weight') as $item)
                <div class="item" style="padding: 0">
                    <a href="{{ $item->link }}">
                        <img style="width: 100%;" class="img-responsive" src="/uploads/slider/{{ $item->name }}" alt="">
                    </a>
                </div>
            @endforeach
        </div>
        <!-- /#main-slider-->
    </div>
    <div class="col-md-6">
        <a href="/3d/index.html" target="_blank">
            <div style="width: 695px; height: 405px; background: transparent; position: absolute;"></div>
            <iframe src="/3d/index.html" style="width: 545px;height: 290px;" frameborder="0"></iframe>
        </a>
    </div>
</div>