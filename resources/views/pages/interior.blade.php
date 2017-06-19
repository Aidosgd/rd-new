@extends('app')
@section('head')
    <link rel="stylesheet" href="/images/interior/css/cs-select.css">
    <link rel="stylesheet" href="/images/interior/css/cs-skin-border.css">
    <link rel="stylesheet" href="/images/interior/css/jquery-ui.css">
    <link rel="stylesheet" href="/images/interior/css/style.css">
@endsection
@section('content')
    <div class="row">
        <div class="col-md-12">
            <ul class="breadcrumb">
                <li><a href="{{ url('/') }}">Главная</a></li>
                <li></li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div id="text-page" class="col-md-12">
            <div style="width: 1000px">
                <div class="door__js">
                    <div class="interiero">
                        <div id="fabHead">Выберите интерьер из списка:
                        </div>
                        <div id="intWarp">
                            <img class="uploadInter" src="/images/interior/images/interier/10.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/11.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/12.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/14.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/20.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/22.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/27.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/28.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/29.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/3.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/30.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/35.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/36.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/37.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/38.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/39.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/40.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/44.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/9.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/47.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/5.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/4.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/42.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/46.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/49.jpg">
                            <img class="uploadInter" src="/images/interior/images/interier/51.jpg">
                        </div>
                    </div>
                    <div class="blockz">
                        <div class="fon" style="filter: blur(0px) brightness(100%) contrast(100%) opacity(100%) saturate(100%);"></div>
                        <div class="container_door boxy ui-draggable ui-draggable-handle ui-resizable" style="background: url(&quot;/images/interior/images/begin.jpg&quot;) 0% 0% / contain no-repeat; position: relative;">
                            <div class="reset"></div>
                            <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
                            <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                            <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
                            <div title="Rotate" class="transformable-handle-rotate transformable-handle ui-icon ui-icon-arrowrefresh-1-s" style="right: 1px; top: 1px; position: absolute; z-index: 2000;"></div>
                            <div title="Skew x-axis" class="transformable-handle-skew-h transformable-handle-skew transformable-handle ui-icon ui-icon-arrow-2-e-w" style="left: 50%; top: 1px; position: absolute; z-index: 2000;"></div>
                            <div title="Skew y-axis" class="transformable-handle-skew-v transformable-handle-skew transformable-handle ui-icon ui-icon-arrow-2-n-s" style="right: 1px; top: 50%; position: absolute; z-index: 2000;"></div>
                            <div class="transformable-handle-scale transformable-handle ui-icon ui-icon-search" title="Scale" style="left: 1px; top: 1px; position: absolute; z-index: 2000;"></div></div>
                        <img class="confaImg magictime" src="/images/interior/images/options.png">
                        <div class="confa magictime">
                            <div class="optTop">Настройки отображения<img class="closeImg" src="/images/interior/images/close.png"></div>
                            <div class="optMain">
                                <div class="wrapper-demo">
                                    <ul class="dropdown">
                                        <li><input type="checkbox" id="el-1" name="el-1" value="shadow_o"><label for="el-1">Включить
                                                тень у двери</label></li>
                                        <li><input type="checkbox" id="el-3" name="el-3" value="flip_o"><label for="el-1">Отразить фон
                                                горизонтально</label></li>
                                        <li class="rangers"><label>Изменить яркость фона</label>
                                            <div id="slider-bright" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                                                <div class="noUi-base">
                                                    <div class="noUi-origin noUi-background" style="left: 50%;">
                                                        <div class="noUi-handle noUi-handle-lower"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-base"><div class="noUi-origin noUi-background" style="left: 50%;"><div class="noUi-handle noUi-handle-lower"></div></div></div></div>
                                        </li>
                                        <li class="rangers"><label>Изменить контрастность фона</label>
                                            <div id="slider-contra" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                                                <div class="noUi-base">
                                                    <div class="noUi-origin noUi-background" style="left: 50%;">
                                                        <div class="noUi-handle noUi-handle-lower"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-base"><div class="noUi-origin noUi-background" style="left: 50%;"><div class="noUi-handle noUi-handle-lower"></div></div></div></div>
                                        </li>
                                        <li class="rangers"><label>Изменить насыщенность фона</label>
                                            <div id="slider-satur" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                                                <div class="noUi-base">
                                                    <div class="noUi-origin noUi-background" style="left: 50%;">
                                                        <div class="noUi-handle noUi-handle-lower"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-base"><div class="noUi-origin noUi-background" style="left: 50%;"><div class="noUi-handle noUi-handle-lower"></div></div></div></div>
                                        </li>
                                        <li class="rangers"><label>Изменить прозрачность фона</label>
                                            <div id="slider-opac" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                                                <div class="noUi-base">
                                                    <div class="noUi-origin noUi-background noUi-stacking" style="left: 100%;">
                                                        <div class="noUi-handle noUi-handle-lower"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-base"><div class="noUi-origin noUi-background noUi-stacking" style="left: 100%;"><div class="noUi-handle noUi-handle-lower"></div></div></div></div>
                                        </li>
                                        <li class="rangers"><label>Изменить размытие фона</label>
                                            <div id="slider-blur" class="noUi-target noUi-ltr noUi-horizontal noUi-connect">
                                                <div class="noUi-base">
                                                    <div class="noUi-origin noUi-background" style="left: 0%;">
                                                        <div class="noUi-handle noUi-handle-lower"></div>
                                                    </div>
                                                </div>
                                                <div class="noUi-base"><div class="noUi-origin noUi-background" style="left: 0%;"><div class="noUi-handle noUi-handle-lower"></div></div></div></div>
                                        </li>
                                    </ul>
                                    <div class="clearOpt">Сбросить настройки</div>
                                    &#8203;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fabinfo">Вы выбрали двери: <a href="http://www.russdoors.kz/палермо.php">Палермо</a></div>
                <center>
                    <div id="existingImges">
                        @foreach($doors as $door)
                            <img class="uploadImage"
                                 data-url="/doors/{{ $door->category->slug }}/n/{{ $door->slug }}"
                                 data-name="{{ $door->title }}"
                                 src="/uploads/doors/{{ $door->images->first()->name }}">
                        @endforeach
                    </div>
                </center>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="/images/interior/js/jquery.transform3d.js"></script>
    <script src="/images/interior/js/jquery.transformable.js"></script>
    <script src="/images/interior/js/jquery.uploadPreview.min.js"></script>
    <script src="/images/interior/js/jquery-ui.js"></script>
    <script src="/images/interior/js/main.js"></script>
    <script src="/images/interior/js/nouislider.min.js"></script>
    <script src="/images/interior/js/selectFx.js"></script>
@endsection