$(document).ready(function () {

    //Инициализация слайдера owl-carousel в секции slider
    var owlSlider = $("#slider");
    owlSlider.owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        smartSpeed: 800,
        nav: false,
        dots: true,
        lazyLoad: true,
        responsive: {
            1: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1010: {
                items: 3,
            },
            1450: {
                dots: false,
            },
        }
    });

    owlSlider.owlCarousel();

    $("#slider__arrow-left").click(function () {
        owlSlider.trigger("next.owl.carousel");
    });
    $("#slider__arrow-rigth").click(function () {
        owlSlider.trigger("prev.owl.carousel");
    });

    //Инициализация слайдера owl-carousel в секции dipploms
    var owlDipploms = $("#slider--dipploms");
    owlDipploms.owlCarousel({
        // center: true,
        items: 3,
        // margin: 20,
        loop: true,
        dots: false,
        smartSpeed: 800,
        nav: false,
        lazyLoad: true,
        // autoWidth: true,
        responsive: {
            1: {
                items: 1,
            },
            580: {
                items: 2,
            },
            769: {
                items: 3,
            },
        }   
    });

    owlDipploms.owlCarousel();

    $("#dipploms__arrow-left").click(function () {
        owlDipploms.trigger("next.owl.carousel");
    });
    $("#dipploms__arrow-rigth").click(function () {
        owlDipploms.trigger("prev.owl.carousel");
    });

    $('button.owl-dot').attr("aria-label", "Кнопки пагинации");
    $('#slider--dipploms > .owl-nav.disabled > button, #slider > .owl-nav.disabled > button').removeAttr('role');
});










