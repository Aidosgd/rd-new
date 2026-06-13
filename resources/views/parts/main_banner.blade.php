<section>
    <div class="row">
        <div class="banner-slider">
            @foreach($banners->sortBy('weight') as $item)
                <div class="item">
                    <a href="{{ $item->link }}">
                        <img style="width: 100%" src="/uploads/banner/{{ $item->name }}" alt="" class="img-responsive">
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</section>