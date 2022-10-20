let beforeScrollPosition = 0; 
let popupOpenType = false;

// 팝업 뒤 html 스크롤 조정가능여부
window.addEventListener('scroll', function() {
    const htmlEl = document.getElementsByTagName('html')[0];
    
    if(popupOpenType) {
        htmlEl.scrollTop = beforeScrollPosition;
    } else {
        beforeScrollPosition = htmlEl.scrollTop;
    }
});
$(function(){

    // datepicker
    $(".datepicker_day").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
		// maxDate: "d",
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });

    $(".datepicker_start").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $(".datepicker_end").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c',
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $('.datepicker_end').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start").datepicker( "option", "maxDate", selectedDate );
    });
    $('.datepicker_start').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end").datepicker( "option", "minDate", selectedDate );
    });

    // $('.datepicker_month').datepicker({
    //     displayFormat: 'yy-mm',
    //     dateFormat: 'yy-mm',
    //     prevText: '이전 달',
    //     nextText: '다음 달',
    //     monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    //     monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    //     dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    //     dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    //     dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    //     showMonthAfterYear: true,
    //     yearSuffix: '년',
    //     showOn: 'both',
    //     buttonImage: './images/ico/ico_datepicker.svg',
    //     buttonImageOnly: true,
    //     changeMonth: true,
    //     changeYear: true,
    //     showButtonPanel: true,
    //     closeText: '완료',
    //     onClose: function(dateText, inst) { 
    //         $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
    //     }
    // });
    // $('.datepicker_month').focus(function(){
    //     $('.ui-datepicker-calendar, .ui-datepicker-current').hide();
    // });

    // header
    $('header .header_top nav > ul > li').hover(function(){
        if($('.header_bg').mouseover()){
            $('body').addClass('gnb_open');
        }
        const arryHeaderHeight = [
            $('header .header_top nav > ul > li').eq(0).find('ul').height(),
            $('header .header_top nav > ul > li').eq(1).find('ul').height(),
            $('header .header_top nav > ul > li').eq(2).find('ul').height(),
            $('header .header_top nav > ul > li').eq(3).find('ul').height()
        ];
        const heightMax = Math.max.apply(null, arryHeaderHeight);
        $('.gnb_open .header_bg').css({'height': heightMax + 115});

    }, function(){
        $('.header_bg').mouseout(function(){ // 마우스가 배경밖으로 나갔을 경우
            $('body').removeClass('gnb_open');
            $('.header_bg').css({'height': '0'});
        });
    });
    $(document).bind("mouseleave", function(){ // 마우스가 브라우저 밖으로 나갔을 경우
        $('body').removeClass('gnb_open');
        $('.header_bg').css({'height': '0'});
    })

    // 탭키시 gnb 오픈
    $('header .header_top nav > ul > li > ul li a').focus(function(){
        $('body').addClass('gnb_open');
        const arryHeaderHeight = [
            $('header .header_top nav > ul > li').eq(0).find('ul').height(),
            $('header .header_top nav > ul > li').eq(1).find('ul').height(),
            $('header .header_top nav > ul > li').eq(2).find('ul').height(),
            $('header .header_top nav > ul > li').eq(3).find('ul').height()
        ];
        const heightMax = Math.max.apply(null, arryHeaderHeight);
        $('.gnb_open .header_bg').css({'height': heightMax + 115});
    });
    $('header .header_top nav > ul > li > ul li a').blur(function(){
        $('body').removeClass('gnb_open');
        $('.header_bg').css({'height': '0'});
    });
    
    // 검색버튼
    $('header .header_top .search_box button').on('click', function(){
        $(this).parent().toggleClass('on');
    });
    // 영역 외 클릭 닫기
    $('.wrap').click(function(e){
        if(!$('header .header_top .search_box').has(e.target).length){
            $('header .header_top .search_box').removeClass('on');
        }
    });

    // headerfix
    if(!$('body').hasClass('main')){
        window.addEventListener('scroll', () => {
            let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
            if(scrollLocation > 100){
                $('header').addClass('headerfix');
                $('body').removeClass('gnb_open');
                $('.header_bg').css({'height': '0'});
            } else {
                $('header').removeClass('headerfix');
            }
        });
    }
    
    // 모바일 오픈
    $('.btn_allmenu').on('click', function(e){
        e.preventDefault();
        $('.allmenu_box').show();
        $('body').css({'overflow': 'hidden'});
    });

    // 모바일 메뉴
    $('.allmenu_box > ul > li > a').on('click', function(){
        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
    });
    $('.allmenu_box > ul > li > ul > li > a').on('click', function(){
        $(this).parent().siblings().removeClass('on');
        $(this).parent().toggleClass('on');
    });

    // 모바일 메뉴 닫기
    $('.allmenu_close').on('click', function(e){
        e.preventDefault();
        $('.allmenu_box').hide();
        $('body').css({'overflow': 'auto'});
    });

    $(window).resize(function(){
        if($(window).width() < 768){
            $('.allmenu_box').hide();
        }
    });

    // 팝업버튼
    let popBtn = $(".dialog-link");
    let popBody = $(".dialog");
    let noteBtn = $(".note_link");
    let noteBody = $(".note_dialog");
    let quick_popBtn = $(".quick_link");
    let quick_popBody = $(".quick_dialog");
    
    popBtn.click(function(e) {
        let poptarget = $(this).attr('data-target');
        $(poptarget).dialog("open");
        popupOpenType = true; // html스크롤 조절불가능
        e.preventDefault();
    });
    // noteBtn.click(function(e) {
    //     let poptarget = $(this).attr('data-target');
    //     $(poptarget).dialog("open");
    //     popupOpenType = true; // html스크롤 조절불가능
    //     e.preventDefault();
    // });
    // 퀵링크 팝업
    quick_popBtn.click(function(){
        let poptarget = $(this).attr('data-target');
        $(poptarget).dialog("open");
        popupOpenType = true; // html스크롤 조절불가능
        e.preventDefault();
    });

    // 팝업 모달
    popBody.dialog({
        width: 'auto',
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 100
        },
        modal: true,
        buttons: [
            {
                text: "닫기",
                click: function() {
                    $(this).dialog("close");
                    popupOpenType = false; // html스크롤 조절가능
                }
            },
        ],
        open: function(){
            $(this).parent().find('.ui-dialog-titlebar').remove();
            $('.pop_close').on('click', function(){
                $(this).parent().parent().parent().dialog("close");
                popupOpenType = false; // html스크롤 조절가능
            });
        }
    });

    // 퀵팝업 body
    quick_popBody.dialog({
        width: 'auto',
        maxWidth: 420,
        title: false, // 다이얼로그 제목
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 100
        },
        modal: true,
        buttons: [{
                text: "닫기",
                click: function() {
                    $(this).dialog("close");
                    popupOpenType = false; // html스크롤 조절가능
                }
            }],
        open: function(){
            $(this).parent().find('.ui-dialog-titlebar').remove();
        }
    });

    // 탭
    $('.tab_group .tab_btn > ul > li > a').on('click', function(e){
        e.preventDefault();
        var on_tab = $(this).attr("rel")

        // 탭 컨텐츠 숨기기
        $(this).parent().siblings().removeClass('on');
        $(this).parent().parent().parent().siblings().children("div").removeClass('on');

        // 체크박스 해제
        $(".chk_all, .all_group input").prop("checked", false);

        // 클릭이벤트
        $(this).parent().addClass('on');
        $("." + on_tab).addClass('on');

        // 더보기이벤트
        $('.tbl_card_list.type_01 .content').each(function(){
            if($(this).find('span').height() > 88){
                $(this).addClass('open');
            }
        });
    });

    // location
    $('.location > ul > li > a').on('click', function(){
        $(this).parent().toggleClass('on');
        
    });
    // 영역 외 클릭 닫기
    $('.wrap').click(function(e){
        if(!$('.location').has(e.target).length){
            $('.location > ul > li').removeClass('on');
        }
    });

    // TOP 버튼
    $('.btn_top a').on('click', function(){
        $("html, body").animate({scrollTop : 0}, 500);
    });

    // 파일선택
    $('.file_inp').on('change', function(){
        let files = $(this)[0].files;
                
        for(let i = 0; i < files.length; i++){
            $(this).siblings('.file_value').append('<span>' + files[i].name + '<button class="close">삭제</button></span>');
            $('.file_value .close').on('click', function(){
                $(this).parent().remove();
            });
        }
        
    });

    // 전체선택
    var checkAll = document.querySelectorAll('.chk_all');
    var chkbox = document.querySelectorAll('.all_group input');
    
    /* 전체선택 클릭시 */
    for(var x = 0; x < checkAll.length; x++){
        checkAll[x].onclick = function(){
            var thisParent = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement; //#wrapper
            var childChkbox = thisParent.querySelectorAll('.all_group input'); //해당 귀속 체크박스만
            
            if(this.checked == false) {
                for(var i=0; i<childChkbox.length; i++){ 
                    childChkbox[i].checked = false; 
                }//for
            } else {
                for(var i=0; i<childChkbox.length; i++){ 
                    childChkbox[i].checked = true; 
                }//for
            }//if,else
        };//onclick
    };//for
    
    /* 하나라도 언체크시 전체선택 해제 */
    for(var x = 0; x < chkbox.length; x++){
        chkbox[x].onclick = function(){
            var thisParent = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement; //#wrapper
            var thisChkAll = thisParent.querySelector('.chk_all');
            var thisChkbox = thisParent.querySelectorAll('.all_group input');

            var total = thisChkbox.length;
            var checked = $(".all_group input:checked").length;

            if(this.checked == false){
                thisChkAll.checked = false;
            }
            // 모두체크시 all체크
            if(total == checked){
                thisChkAll.checked = true;
            } else {
                thisChkAll.checked = false;
            }
        }; //onclick (전체 chkbox)
    };//for(전체 chkbox)

    // 공개 여부
    $('.public_box button').on('click', function(){
        $(this).parent().find('.public_content').addClass('on');
        $('.public_box .btn_gray').on('click', function(e){
            e.preventDefault();
            $('.public_content').removeClass('on');
        });
    });

    // 카드게시판 설정
    $('.pop_mini').on('click', function(e){
        e.preventDefault();
        $('.card_set ul').removeClass('on');
        $(this).parent().parent().parent().find('.card_set').children('ul').toggleClass('on');
    });
    // 영역 외 클릭 닫기
    $('.wrap').click(function(e){
        if (!$('.pop_mini, .pop_mini2').parent().has(e.target).length) { 
            $('.card_set > ul').removeClass('on');
        } 
    });
    // 내용수정 팝업
    $('.pop_mini2').on('click', function(e){
        e.preventDefault();
        $('.card_set ul').removeClass('on');
        $(this).parent().find('.edit').children('ul').toggleClass('on');
    });

    // 말줄임 더보기 버튼
    $('.tbl_card_list.type_01 .content').each(function(){
        if($(this).find('span').height() > 88){
            $(this).addClass('open');
        }
    });

    // 검색조건 더보기
    $('.search_item .more').on('click', function(){
        $('.search_item_more').toggleClass('on');
        $(this).toggleClass('on');
    });

    // 투자자검색 업종/업력/지역별 투자 현황 버튼
    $('.investment_content > ul > li .btn_investment_content li button').on('click', function(){
        $('.investment_content > ul > li .btn_investment_content li').removeClass();
        $(this).parent().addClass('on');
    });

    // faq
    $('.tbl_faq ul li a').on('click', function(){
        $(this).parent().siblings().find('.answer').slideUp();
        $(this).parent().find('.answer').slideDown();
    });

    // 글자수 카운팅
    $(".inp_group.inp_num textarea").on('keyup', function(){
        let content = $(this).val();
        let inp_num = $(this).parent().parent().find('.num')
		inp_num.text(content.length);
		if (content.length > 256) {
            inp_num.css({'color': 'red'});
		} else {
            inp_num.css({'color': '#333'});
        }
    });
    $(".inp_group.inp_num input").on('keyup', function(){
        let content = $(this).val();
        let inp_num = $(this).parent().parent().find('.num')
		inp_num.text(content.length);
		if (content.length > 256) {
            inp_num.css({'color': 'red'});
		} else {
            inp_num.css({'color': '#333'});
        }
    });
    $(".talk_txt .textarea_box textarea").on('keyup', function(){
        let content = $(this).val();
        let inp_num = $(this).parent().parent().find('.num')
		inp_num.text(content.length);
		if (content.length > 500) {
            inp_num.css({'color': 'red'});
		} else {
            inp_num.css({'color': '#333'});
        }
    });

    // 통합공시 버튼
    $('.disclosure_box .btn_list button').on('click', function(){
        $('.disclosure_box .btn_list button').removeClass('on');
        $(this).addClass('on');
    });

    // 버튼 on/off
    $('.list_info .btn_box *').on('click', function(){
        $(this).parent().parent().toggleClass('on');
        if($(this).parent().parent().hasClass('on')){
            $(this).parent().parent().siblings().removeClass('on');
        }
    });

    // 투자실력 버튼
    $('.investment_performance_box .left .btn_list li *').on('click', function(){
        $(this).parent().toggleClass('on');
        if($(this).parent().hasClass('on')){
            $(this).parent().siblings().removeClass('on');
        }
    });

    // 통합검색 remove
    $('.search_page .search_box .search_word a').on('click', function(e){
        e.preventDefault();
        $(this).remove();
    });

    // 커뮤니티 마우스hover
    $('.tab_submenu_group > a').focus(function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings().find('a').focus(function(){
            $('.tab_group .tab_btn > ul > li > a').parent().removeClass('active');
        });
    });
    // 영역 외 클릭 닫기
    $('.wrap').click(function(e){
        if (!$('.tab_submenu_group > a').parent().has(e.target).length) { 
            $('.tab_group .tab_btn > ul > li').removeClass('active');
        } 
    });

    // 기업정보 입력
    $('.trans_enterprise_btn').on('click', function(){
        $('.trans_enterprise').toggleClass('on');
    });

    // 투자검색 체크박스 클릭시 상세검색 show
    $('.chk_list_more_btn input').change(function(){
        let chkbox = $('.chk_list_more_btn input:checked').length;
        if(chkbox > 0) {
            $('.chk_list_more').addClass('on');
        } else {
            $('.chk_list_more').removeClass('on');
        }
    });

});

//Toast 팝업
function onShowToast(show_txt){
    let obj_toast = $('.toast_box');
    let obj_time = 2000;
    obj_toast.addClass('on');
    obj_toast.find('.txt').text(show_txt);
    setTimeout(function(){
        obj_toast.removeClass('on');
    }, obj_time);
    $(".dialog").dialog("close");
    popupOpenType = false;
    return false;
}