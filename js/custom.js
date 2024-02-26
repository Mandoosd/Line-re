$(function () {
    $('.slide_wrap').on('init', function () {
        let current = $('.slide_wrap .slick-current');
        current.addClass('on');
    });

    $('.slide_wrap').slick({
        fade: true,
        speed: 1500,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
    });

    $('.slide_wrap').on('beforeChange', function () {
    });

    $('.slide_wrap').on('afterChange', function () {
        let current = $('.slide_wrap .slick-current');
        $('.slide_wrap .itm').removeClass('on');
        current.addClass('on');
    });


    $('.header .gnb .short ').on('click', function (e) {
        e.preventDefault();
        const idx = ($(this).parent().index())
        console.log(idx);//0, 1, 2
    });



    $('.header .gnb .short01').on('click', function () {
        let H = $('.Life').offset().top;
        $('html,body').animate({ scrollTop: H - 50 }, 300)
    });

    $('.header .gnb .short02').on('click', function () {
        let H = $('.cumunication').offset().top;
        $('html,body').animate({ scrollTop: H - 50 }, 300)
    });

    $('.slogan .tab').on('click', function () {
        $('.tab ul').toggleClass('on');
        $(this).toggleClass('on');
    });



})