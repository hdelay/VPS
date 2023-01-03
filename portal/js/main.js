
$(function(){

    // 메인
    // fullpage
    $('#fullpage').fullpage({
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        menu: '.main_quickmenu ul',
        scrollingSpeed: 500,
        //scrollBar: true,
        scrollOverflow: true,
        responsiveWidth: 768,
        responsiveHeight: 710,
        afterLoad: function(){
            if($(window).width() > 768){
                if($(this).index() === 0){
                    $('header').addClass('font_black');
                    $('.main_quickmenu').addClass('black');
                    $('header').removeClass('headerfix');
                } else if($(this).index() === 1){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                    $('header').removeClass('font_black');
                } else if($(this).index() === 3){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                    $('header').removeClass('font_black');
                } else if($(this).index() === 4){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                    $('header').removeClass('font_black');
                } else if($(this).index() === 5){
                    $('header').addClass('headerfix');
                    $('.main_quickmenu').addClass('black');
                    $('header').removeClass('font_black');
                } else {
                    $('header').removeClass('headerfix');
                    $('.main_quickmenu').removeClass('black');
                    $('header').removeClass('font_black');
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
        keyboardScrolling: true,    // 키보드 스크롤 사용
		recordHistory: true,
        animateAnchor: true
    });

    
    $('.first .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '0');
    $('.second .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
    $('.third .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
    // $('.shortcuts_box .swiper-wrapper .swiper-slide:last-child a').focus(function(){
    //     $(this).keydown(function(e) {
    //         if(e.keyCode == 9){
    //             $('.swiper-pagination-bullet').eq(0).focus();
    //         }
    //     });
    // });
    

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
                if(this.activeIndex != 0 && idx != 2) {
                    $.fn.fullpage.setAllowScrolling(false);
                    $('header').removeClass('font_black');
                } else {
                    $('header').addClass('font_black');
                }
                // console.log('즉시 : ' + idx);

                // tabindex 조절
                
                console.log(idx);
                if(idx === 0){
                    $('.first .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '0');
                    $('.second .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.third .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.first .q_btn').attr('tabindex', '0');
                    $('.second .q_btn').attr('tabindex', '-1');
                    $('.third .q_btn').attr('tabindex', '-1');
                } else if(idx === 1) {
                    $('.first .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.second .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '0');
                    $('.third .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.first .q_btn').attr('tabindex', '-1');
                    $('.second .q_btn').attr('tabindex', '0');
                    $('.third .q_btn').attr('tabindex', '-1');
                } else if(idx === 2) {
                    $('.first .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.second .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '-1');
                    $('.third .shortcuts_box .swiper-wrapper .swiper-slide a').attr('tabindex', '0');
                    $('.first .q_btn').attr('tabindex', '-1');
                    $('.second .q_btn').attr('tabindex', '-1');
                    $('.third .q_btn').attr('tabindex', '0');
                }
                
            },  
            slideChangeTransitionEnd: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if(idx == 0 || idx == 2) $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);
                
                /* 동영상 슬라이드시 재생
                const activeIndex = this.activeIndex;
                const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
                const activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
                activeSlideVideo.play();
                */
            },
        }, 
        touchEventsTarget: 'wrapper'
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
                spaceBetween: 10,
            },
        }
    });
    
    // footer 스와이퍼
    main_ban_swiper = new Swiper('.main_ban_swiper', {
        slidesPerView: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop : true,// 슬라이드 반복 여부
        navigation: {
            nextEl: '.swiper-button-next.main_ban',
            prevEl: '.swiper-button-prev.main_ban',
        },
        breakpoints: {
            1300: {
                spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
            },
        }
    });
    $('.btn_pause').on('click', function(){
        $('.btn_pause').hide();
        $('.btn_start').show();
        main_ban_swiper.autoplay.stop();
    });
    $('.btn_start').on('click', function(){
        $('.btn_pause').show();
        $('.btn_start').hide();
        main_ban_swiper.autoplay.start();
    });

});

$(document).ready(function() {
    function movetest(idid) {
        $("#" + idid).focus();
    }
    
    function trapTabKey(e) {
        if (e.keyCode === 9) {
            // 포커싱이 가능한 팝업의 오브젝트를 저장한다.
            var focusableElementsString = 'a[href], area[href], input:not([disable]), select:not([disable]), textarea:not([disable]), button:not([disable]), iframe, object, embed, [tabindex="0"], [contenteditable]';
            var focusablePopupElements = new Array();

            // 메인에서 포커싱이 가능한 모든 오브젝트를 저장한다.
            var focusableElements = document.body.querySelectorAll(focusableElementsString);
            var mainFocusableElements = new Array();
            focusableElements = Array.prototype.slice.call(focusableElements);
            for (var i=0; i<focusableElements.length; i++) {
                if ($(focusableElements[i]).is(":visible") == true) {
                    mainFocusableElements.push(focusableElements[i]);
                }
            }
            
            // 백탭 처리
            if(e.shiftKey) {
                // 팝업이 존재하고, 팝업의 첫번 째 엘리먼트에서 백탭을 한 경우 footer로 이동
                if (focusablePopupElements.length > 0 && document.activeElement === focusablePopupElements[0]) {
                    e.preventDefault();
                    //$.fn.fullpage.moveTo(0);
                    $.fn.fullpage.moveSectionDown();
                    $.fn.fullpage.moveSectionDown();
                    $.fn.fullpage.moveSectionDown();
                    $.fn.fullpage.moveSectionDown();
                    $.fn.fullpage.moveSectionDown();
                    $.fn.fullpage.moveSectionDown();
                    setTimeout(function() {
                        fnGetLastFocusableElements("sec6").focus();
                    }, 650);
                }
                // 메인 첫 화면(바로가기)
                else if ($("body").hasClass("fp-viewing-sec1") == true) {
                    // 메인의 첫 A태그 부분에서 백텁을 할 경우 전체메뉴 탭으로 이동
                    if (document.activeElement === $(".swiper-pagination-bullet")[0]) {
                        e.preventDefault();
                        $(".main_quickmenu.black ul li a")[0].focus();
                    }
                    // 메인의 초기상태에서 백탭을 한 경우 footer로 이동
                    else if (document.activeElement === document.body) {
                        e.preventDefault();
                        //$.fn.fullpage.moveTo(0);
                        $.fn.fullpage.moveSectionDown();
                        $.fn.fullpage.moveSectionDown();
                        $.fn.fullpage.moveSectionDown();
                        $.fn.fullpage.moveSectionDown();
                        $.fn.fullpage.moveSectionDown();
                        setTimeout(function() {
                            fnGetLastFocusableElements("sec6").focus();
                        }, 650);
                    }
                }
                // 통합검색
                else if ($("body").hasClass("fp-viewing-sec2") == true) {
                    // 화면 초기 상태이거나 첫 번째 엘리먼트에서 백탭을 누른 경우, 이전 페이지, 마지막 포커스로 이동
                    if (document.activeElement === document.body || document.activeElement === document.getElementById("focusible01")) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionUp();//location.href = "#main-section_1";
                        setTimeout(function() {							
                            fnGetLastFocusableElements("sectionView0").focus();
                        }, 400);
                    }
                }
                // 현황/통계
                else if ($("body").hasClass("fp-viewing-sec3") == true) {
                    // 화면 초기 상태이거나 첫 번째 엘리먼트에서 백탭을 누른 경우, 이전 페이지, 마지막 포커스로 이동
                    if (document.activeElement === document.body || document.activeElement === document.getElementById("focusible3")) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionUp();//location.href = "#main-section_2";
                        if ($('#secTmp1').val() != "Y") {
                            fnSection1();
                        }
                        setTimeout(function() {							
                            fnGetLastFocusableElements("sectionView1").focus();
                        }, 400);
                    }
                }
                // 알림/소통
                else if ($("body").hasClass("fp-viewing-sec4") == true) {
                    // 화면 초기 상태이거나 첫 번째 엘리먼트에서 백탭을 누른 경우, 이전 페이지, 마지막 포커스로 이동
                    if (document.activeElement === document.body || document.activeElement === document.getElementById("section3AId")) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionUp();//location.href = "#main-section_3";
                        if ($('#secTmp2').val() != "Y") {
                            fnSection2();
                        }
                        setTimeout(function() {							
                            fnGetLastFocusableElements("sectionView2").focus();
                        }, 400);
                    }
                }
                // 전자공시
                else if ($("body").hasClass("fp-viewing-sec5") == true && location.hash != "#undefined") {
                    // 화면 초기 상태이거나 첫 번째 엘리먼트에서 백탭을 누른 경우, 이전 페이지, 마지막 포커스로 이동
                    if (document.activeElement === document.body || document.activeElement === document.getElementById("section5AId")) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionUp();//location.href = "#main-section_5";
                        if ($('#secTmp4').val() != "Y") {
                            fnSection4();
                        }
                        setTimeout(function() {							
                            fnGetLastFocusableElements("sectionView4").focus();
                        }, 400);
                    }
                }
                // footer 쪽
                else if ($("body").hasClass("fp-viewing-5") == true || ($("body").hasClass("fp-viewing-main-section_6") == true && location.hash == "#undefined")) {
                    // 화면 초기 상태이거나 첫 번째 엘리먼트에서 백탭을 누른 경우, 이전 페이지, 마지막 포커스로 이동
                    if (document.activeElement === document.body || document.activeElement === fnGetFirstFocusableElements("sectionViewFooter")) {
                        $.fn.fullpage.moveSectionUp();//location.href = "#main-section_6";
                    }
                }
            }
            // 일반탭
            else {
                if ($("body").hasClass("fp-viewing-sec1") == true) {
                    
                    // 마지막 포커스이면 다음 화면으로 이동
                    var sectionLastTabStop = $('#focusible01').attr('id');
                    var sectionLastTabStop2 = $('#focusible02').attr('id');
                    var sectionLastTabStop3 = $('#focusible03').attr('id');
                    if(document.activeElement.id === sectionLastTabStop) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();
                        setTimeout(function(){
                            $("#section1AId").focus();
                        }, 100);
                    }
                    if(document.activeElement.id === sectionLastTabStop2) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();
                        setTimeout(function(){
                            $("#section1AId").focus();
                        }, 100);
                    }
                    if(document.activeElement.id === sectionLastTabStop3) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();
                        setTimeout(function(){
                            $("#section1AId").focus();
                        }, 100);
                    }
                }
                // 통합검색
                else if ($("body").hasClass("fp-viewing-sec2") == true) {
                    // 마지막 포커스이면 다음 화면으로 이동
                    var sectionLastTabStop = $('#focusible2').attr('id');
                    if(document.activeElement.id === sectionLastTabStop) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();
                        /*
                        setTimeout(function(){
                            $("#focusible3").focus();
                        }, 100);
                        */
                    }
                    // 현재 페이지가 첫 화면으로 로드될 경우, 해당 섹션의 첫 A태그로 이동 
                    else if (document.activeElement === document.body) {
                        e.preventDefault();
                        setTimeout(function(){
                            $("#focusible3").focus();
                        }, 100);
                    }
                }
                // 현황/통계
                else if ($("body").hasClass("fp-viewing-sec3") == true) {
                    // 마지막 포커스이면 다음 화면으로 이동
                    var sectionLastTabStop = $('#focusible3').attr('id');
                    if(document.activeElement.id === sectionLastTabStop) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();//location.href = "#main-section_4";
                        setTimeout(function(){
                            $("#section3AId").focus();
                        }, 100);
                    }
                    // 현재 페이지가 첫 화면으로 로드될 경우, 해당 섹션의 첫 A태그로 이동 
                    else if (document.activeElement === document.body) {
                        e.preventDefault();
                        $("#section3AId").focus();
                    }
                }
                // 알림/소통
                else if ($("body").hasClass("fp-viewing-sec4") == true) {
                    // 마지막 포커스이면 다음 화면으로 이동
                    var sectionLastTabStop = $('#focusible4').attr('id');
                    if(document.activeElement.id === sectionLastTabStop) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();//location.href = "#main-section_5";
                        //$(document.activeElement).blur();
                        //setTimeout("movetest('section4AId')", 500);
                    }
                    // 현재 페이지가 첫 화면으로 로드될 경우, 해당 섹션의 첫 A태그로 이동 
                    else if (document.activeElement === document.body) {
                        e.preventDefault();
                        $("#section5AId").focus();
                    }
                }
                // 전자공시
                else if ($("body").hasClass("fp-viewing-sec5") == true && location.hash != "#undefined") {
                    // 마지막 포커스이면 다음 화면으로 이동
                    var sectionLastTabStop = $('#focusible5').attr('id');
                    if(document.activeElement.id === sectionLastTabStop) {
                        e.preventDefault();
                        $.fn.fullpage.moveSectionDown();//location.href = "#undefined";
                        setTimeout(function(){
                            $("#section5AId").focus();
                        }, 100);
                    }
                    // 현재 페이지가 첫 화면으로 로드될 경우, 해당 섹션의 첫 A태그로 이동 
                    else if (document.activeElement === document.body) {
                        e.preventDefault();
                        setTimeout(function(){
                            $("#section5AId").focus();
                        }, 100);
                    }
                }
                // footer 쪽
                else if ($("body").hasClass("fp-viewing-5") == true || ($("body").hasClass("fp-viewing-main-section_6") == true && location.hash == "#undefined")) {
                    // 마지막 포커스이면 처음 오브젝트로 이동
                    var sectionLastTabStop = getElementById("focusibleLast");
                    if(document.activeElement === sectionLastTabStop) {
                        e.preventDefault();
                        //fnGetFirstFocusableElements("sectionView5").focus();
                        $.fn.fullpage.moveTo();//location.href = "#main-section_1";
                        setTimeout(function() {
                            // 팝업이 존재하면, 팝업으로
                            if (focusablePopupElements.length > 0) {								
                                focusablePopupElements[0].focus();
                            }
                            // 팝업이 없으면, 메인의 첫 번째로 이동
                            else {
                                //fnGetFirstFocusableElements("accessibility").focus();
                                mainFocusableElements[0].focus();
                            }
                        }, 650);
                    }
                }
            }
        }
    }
    
    document.body.addEventListener('keydown', trapTabKey);
});
