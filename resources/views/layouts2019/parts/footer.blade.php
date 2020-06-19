<section class="feedback">
    <div class="container">
        <h2 class="wow fadeInUp">{{ trans('footer.feedback_title') }}</h2>

        <p class="wow fadeInUp">{!! trans('footer.feedback_p') !!}</p>

        @if(session()->has('message'))
            <div class="alert alert-success">
                <h1>{{ session()->get('message') }}</h1>
            </div>
        @endif

        <div class="form wow fadeInUp">
            <div class="row">
                <div class="col-md-6">
                    <form id="callForm" method="post" action="/mail/call">
                        <input name="_token" type="hidden"  value="{{ csrf_token() }}" />
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control" placeholder="{{ trans('footer.your_phone') }}" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="{{ trans('footer.your_email') }}" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="{{ trans('footer.your_name') }}" required>
                        </div>
                        <button type="submit" class="btn btn-default btn-effects">
                            {{ trans('footer.get_call') }}
                            <div class="t-btn_effects"></div>
                        </button>
                    </form>
                </div>
                <div class="col-md-6">
                    <img src="/css/images/new2019/milan-door-russdoors.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="map">
    <div class="map-content visible-xs">
        <h3 class="wow fadeInUp">{{ trans('footer.contacts') }}</h3>

        <p class="wow fadeInUp"><b>{{ trans('footer.phones') }}:</b></p>
        <p class="wow fadeInUp">+7 707 197 50 91; +7 (747) 488-29-12;</p>
        <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
        <br>

        <p class="wow fadeInUp"><b>{{ trans('footer.address') }}:</b></p>
        <p class="wow fadeInUp">{{ trans('footer.address_1') }}</p>
        <br>
        <p class="wow fadeInUp"><b>{{ trans('footer.work_mode') }}:</b></p>
        <p class="wow fadeInUp">{{ trans('footer.work_mode_1') }}</p>
        <p class="wow fadeInUp">{{ trans('footer.work_mode_2') }}</p>
        <p class="wow fadeInUp">{{ trans('footer.work_mode_3') }}</p>

        <ul class="social-links">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
    </div>
    <div id="map"></div>
    <div class="container hidden-xs">
        <div class="map-content">
            <h3 class="wow fadeInUp">{{ trans('footer.contacts') }}</h3>

            <p class="wow fadeInUp"><b>{{ trans('footer.phones') }}:</b></p>
            <p class="wow fadeInUp">+7 707 197 50 91; +7 (747) 488-29-12;</p>
            <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
            <br>

            <p class="wow fadeInUp"><b>{{ trans('footer.address') }}:</b></p>
            <p class="wow fadeInUp">{{ trans('footer.address_1') }}</p>
            <br>
            <p class="wow fadeInUp"><b>{{ trans('footer.work_mode') }}:</b></p>
            <p class="wow fadeInUp">{{ trans('footer.work_mode_1') }}</p>
            <p class="wow fadeInUp">{{ trans('footer.work_mode_2') }}</p>
            <p class="wow fadeInUp">{{ trans('footer.work_mode_3') }}</p>

            <ul class="social-links">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="buttons">
            <ul class="footer__menu">
                @foreach($bottomMenu[0]->children as $item)
                    <li><a href="/{{$lang}}{{$item->link}}">{{$item->title}}</a></li>
                @endforeach
            </ul>
        </div>

        <div class="clearfix"></div>

        <div class="footer__logo">
            <a href="/{{$lang}}">
                <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
            </a>
        </div>

        <div class="footer__copyright">
            <p>{!! trans('footer.copyright') !!}</p>
        </div>
    </div>
</footer>
 
 
