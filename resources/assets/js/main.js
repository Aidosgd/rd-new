$(document).ready(function(){
    $('.subnav1 .menu-cat').hover(function(){
        $(this).find('ul').stop(true).slideDown(200);
    }, function(){
        $(this).find('ul').stop(true).slideUp(200);
    });

    $('.menu-spoiler').hover(function(){
        $(this).find('ul').stop(true).slideDown(200);
    }, function(){
        $(this).find('ul').stop(true).slideUp(200);
    });

    $('.main-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.main-slider').fadeIn();

    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
    });
});