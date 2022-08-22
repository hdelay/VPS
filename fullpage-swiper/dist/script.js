$(document).ready(function() {
  // fullpage
  $('#fullpage').fullpage({		      
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#7BAAB2'],
    anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
    menu: '#menu',
    scrollingSpeed: 500,
    //scrollBar: true,
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