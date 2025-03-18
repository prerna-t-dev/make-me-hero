$(document).ready(function(){

    $('.slick--related-products').slick({
        infinite: false,
        centerMode: false,
        speed: 300,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        dots: false,      
        arrows: false,   
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 990,
                settings: "unslick"
            }
        ]
    });
});