
$(function(){

    // 메인
    // fullpage
    $('#fullpage').fullpage({
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        sectionsColor: ['#1bbc9b', '#fff', '#7BAABE', '#fff', '#fff'],
        menu: '.main_quickmenu ul',
        scrollingSpeed: 500,
        //scrollBar: true,
        responsiveWidth: 768,
        afterLoad: function(){
            if($(window).width() > 768){
                if($(this).index() === 1){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                } else if($(this).index() === 3){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                } else if($(this).index() === 4){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                } else if($(this).index() === 5){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                } else {
                    $('header').removeClass('headerfix');
                    $('.main_quickmenu').removeClass('black');
                }
            } else {
                if($(this).index() === 0){
                    $('header').removeClass('headerfix');
                } else if($(this).index() === 1){
                    $('header').addClass('headerfix');
                } else if($(this).index() === 2){
                    $('header').removeClass('headerfix');
                } else if($(this).index() === 3){
                    $('header').addClass('headerfix');
                } else {
                    $('header').addClass('headerfix');
                }
            }
            
        },
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 300,
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
    shortcuts_swiper = new Swiper('.shortcuts_box .shortcuts_box_content', {
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination.shortcuts',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.shortcuts',
            prevEl: '.swiper-button-prev.shortcuts',
        },
        breakpoints: {
            768: {
              slidesPerView: 5,
            },
        }
    });
    
    // 섹션 스크롤 headerfix
    /*
    $(window).scroll(function(){
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let sec_02 = $('.sec2').offset().top; // 섹션2 스크롤바 위치
        let sec_03 = $('.sec3').offset().top; // 섹션3 스크롤바 위치
        let sec_04 = $('.sec4').offset().top; // 섹션4 스크롤바 위치
        // console.log(scrollLocation);
        // console.log(sec_02);
    });*/

});
