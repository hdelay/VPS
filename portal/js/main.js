
$(function(){

    // 메인
    // fullpage
    $('#fullpage').fullpage({
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        sectionsColor: ['#1bbc9b', '#fff', '#7BAABE', '#fff', '#fff'],
        menu: '#menu',
        scrollingSpeed: 500,
        //scrollBar: true,
        responsiveWidth: 768,
        afterLoad: function(){
            if($(this).index() === 1){
                $('header').addClass('headerfix');
            } else if($(this).index() === 3){
                $('header').addClass('headerfix');
            } else if($(this).index() === 4){
                $('header').addClass('headerfix');
            } else if($(this).index() === 5){
                $('header').addClass('headerfix');
            } else {
                $('header').removeClass('headerfix');
            }
        },
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 400,
        navigation: {
          nextEl: '.swiper-button-next.sec1_full',
          prevEl: '.swiper-button-prev.sec1_full',
        },
        pagination: {
            el: '.swiper-pagination.sec1_full',
            clickable: true,
        },
        observer: true,
        mousewheel: true,                                         
        on: {
            slideChange: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if(this.activeIndex != 0 && idx != 2) $.fn.fullpage.setAllowScrolling(false);
                // console.log('즉시 : ' + idx);
            },  
            slideChangeTransitionEnd: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if(idx == 0 || idx == 2) $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);
            }                 
        }, 
    });
    
    // 메인 섹션1 스와이퍼 안 스와이퍼
    /*
    $(window).resize(function(){
        var shortcuts_swiper = new Swiper('.shortcuts_box');
        if($(window).width() < 768){
            shortcuts_swiper = new Swiper('.shortcuts_box', {
                pagination: {
                  el: '.shortcuts_box .swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.shortcuts_box .swiper-button-next',
                  prevEl: '.shortcuts_box .swiper-button-prev',
                },
            });
        } else {
            shortcuts_swiper.destroy();
        }
    });
    */
    

});
