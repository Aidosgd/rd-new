<section class="reviews">
    <div class="container">
        <h2>Отзывы клиентов</h2>

        <div class="review-slider">
            @foreach($reviews as $item)
                <div class="slide">
                    <div class="review-item">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="review-text">
                                    {{ strip_tags($item->description) }}
                                </p>
                                <p><b>{{ $item->name }}</b> <br>{{ $item->city }}</p>
                            </div>
                            <div class="col-md-4">
                                <img src="/uploads/reviews/{{ $item->image }}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>