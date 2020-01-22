$(document).ready(function () {

    //Инициализация слайдера owl-carousel в секции slider
    var owl = $(".slider__container");
    owl.owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        dots: false,
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

    owl.owlCarousel();

    $(".slider__arrow-left").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".slider__arrow-rigth").click(function () {
        owl.trigger("prev.owl.carousel");
    });
});










