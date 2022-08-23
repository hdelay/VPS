
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
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        mousewheel: true,                                         
        on: {
            slideChange: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if(this.activeIndex != 0 && idx != 2) $.fn.fullpage.setAllowScrolling(false);
                console.log('fullpage전환 막기');
                // console.log('즉시 : ' + idx);
            },  
            slideChangeTransitionEnd: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if(idx == 0 || idx == 2) $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);
                console.log('fullpage전환 풀림');
            }                 
        }, 
    });

});
