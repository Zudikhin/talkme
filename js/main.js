$(document).ready(function () {
    "use strict";

    $('.media_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });

    $('.talks_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow: $('.talks_btns_btn_prev'),
        nextArrow: $('.talks_btns_btn_next')
    });


    $('.team_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });

    $(".faq_block_list_item").click(function() {
        $(this).toggleClass("active");
    });
    
});