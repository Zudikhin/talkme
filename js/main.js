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

    $(".header ul li").click(function() {
        var attr = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${attr}`).offset().top
        }, 2000);
    });

    $(".faq_block_list_item").click(function() {
        $(this).toggleClass("active");
    });

    $(".faq_cooperation_call").click(function() {
        $(".form").addClass("active");
        $(".modal_back").addClass("active");
    }); 

    $(".application_btn").click(function() {
        $(".form").addClass("active");
        $(".modal_back").addClass("active");
    });

    $(".header_desktop_form").click(function() {
        $(".form").addClass("active");
        $(".modal_back").addClass("active");
    }); 

    $(".form_close").click(function() {
        $(".form").removeClass("active");
        $(".modal_back").removeClass("active");
    });

    $(".modal_back").click(function() {
        $(".form").removeClass("active");
        $(".thank").removeClass("active");
        $(this).removeClass("active");
    });

    $(".thank_close").click(function() {
        $(".thank").removeClass("active");
        $(".modal_back").removeClass("active");
    });

    $("#form").submit(function( event ) {
        $(".form").removeClass('active');
        $(".thank").addClass('active');
        event.preventDefault();
    });
    
});