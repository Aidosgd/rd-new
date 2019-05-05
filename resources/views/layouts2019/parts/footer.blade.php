<section class="feedback">
    <div class="container">
        <h2 class="wow fadeInUp">ЕСТЬ ВОПРОСЫ?</h2>

        <p class="wow fadeInUp">Закажите обратный звонок <br> Наш менеджер перезвонит Вам в течение 5 минут</p>

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
                            <input type="text" name="phone" class="form-control" placeholder="Ваш телефон" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Ваш имейл" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Ваше имя" required>
                        </div>
                        <button type="submit" class="btn btn-default btn-effects">
                            Заказать звонок
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
        <h3 class="wow fadeInUp">Контакты</h3>

        <p class="wow fadeInUp"><b>Телефоны:</b></p>
        <p class="wow fadeInUp">+7 707 197 50 91; +7 (747) 488-29-12;</p>
        <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
        <br>

        <p class="wow fadeInUp"><b>Адреса:</b></p>
        <p class="wow fadeInUp">г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
        <br>
        <p class="wow fadeInUp"><b>Режим Работы:</b></p>
        <p class="wow fadeInUp">Понедельник-Пятница : с 9:00 до 18:00</p>
        <p class="wow fadeInUp">Суббота: с 9:00 до 16:00</p>
        <p class="wow fadeInUp">Воскресенье: ВЫХОДНОЙ</p>

        <ul class="social-links">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
    </div>
    <div id="map"></div>
    <div class="container hidden-xs">
        <div class="map-content">
            <h3 class="wow fadeInUp">Контакты</h3>

            <p class="wow fadeInUp"><b>Телефоны:</b></p>
            <p class="wow fadeInUp">+7 707 197 50 91; +7 (747) 488-29-12;</p>
            <p class="wow fadeInUp">+7 (727) 345-01-01, 379-13-52, 379-13-42.</p>
            <br>

            <p class="wow fadeInUp"><b>Адреса:</b></p>
            <p class="wow fadeInUp">г. Алматы, ул. Райымбека 152 (уг. ул. Наурызбай Батыра);</p>
            <br>
            <p class="wow fadeInUp"><b>Режим Работы:</b></p>
            <p class="wow fadeInUp">Понедельник-Пятница : с 9:00 до 18:00</p>
            <p class="wow fadeInUp">Суббота: с 9:00 до 16:00</p>
            <p class="wow fadeInUp">Воскресенье: ВЫХОДНОЙ</p>

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
                <li><a href="/stroydetali.php">МЕЖКОМНАТНЫЕ ДВЕРИ</a></li>
                <li><a href="/leras.php">МЕТАЛЛИЧЕСКИЕ ДВЕРИ</a></li>
                <li><a href="/sale">АКЦИИ</a></li>
                <li><a href="/pages/sotrudnichestvo.php">СОТРУДНИЧЕСТВО</a></li>
                <li><a href="/contacts/almaty.php">КОНТАКТЫ</a></li>
                <li><a href="/pages/grafik_raboty.php">РЕЖИМ РАБОТЫ</a></li>
            </ul>
        </div>

        <div class="clearfix"></div>

        <div class="footer__logo">
            <a href="/">
                <img src="/css/images/new2019/russdoorskz-logo.png" alt="">
            </a>
        </div>

        <div class="footer__copyright">
            <p>© Все права защищены <br>
                2010-2019</p>
        </div>
    </div>
</footer>
 
 
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=26941914&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/26941914/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="26941914" data-lang="ru" /></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(26941914, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/26941914" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->