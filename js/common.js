$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        nav: true,
        navText: false,
        dotsEach: true,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false
            },
            500:{
                items:2,
                nav:true
            },
            640:{
                items:3,
                nav:true
            },
            767:{
                items:4,
                nav:true
            },
            991:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });
});

