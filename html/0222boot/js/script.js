$(function () {
    // https://kenwheeler.github.io/slick/ 슬릭으로 슬라이드만들기
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }

        ]

    });


}); //jq