
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
		maxDate: "d",
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
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
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
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
        buttonImage: "./images/ico/ico_datepicker.svg",
        buttonImageOnly: true
    });
    $('.datepicker_end').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start").datepicker( "option", "maxDate", selectedDate );
    });
    $('.datepicker_start').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end").datepicker( "option", "minDate", selectedDate );
    });

    $('.datepicker_month').datepicker({
        displayFormat: 'yy-mm',
        dateFormat: 'yy-mm',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: 'both',
        buttonImage: './images/ico/ico_datepicker.svg',
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        closeText: '완료',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });
    $('.datepicker_month').focus(function(){
        $('.ui-datepicker-calendar, .ui-datepicker-current').hide();
    });

    // header
    $('header .header_top nav > ul').hover(function(){
        $('body').addClass('gnb_open');
    }, function(){
        if($('.header_bg').mouseover()){
            $('body').addClass('gnb_open');
        } 
    });
    $('.header_bg').mouseout(function(){ // 마우스가 배경밖으로 나갔을 경우
        $('body').removeClass('gnb_open');
    });
    $(document).bind("mouseleave", function(){ // 마우스가 브라우저 밖으로 나갔을 경우
        $('body').removeClass('gnb_open');
    })

    // 탭키시 gnb 오픈
    $('header .header_top nav > ul > li > ul li a').focus(function(){
        $('body').addClass('gnb_open');
    });
    $('header .header_top nav > ul > li > ul li a').blur(function(){
        $('body').removeClass('gnb_open');
    });

    // headerfix
    window.addEventListener('scroll', () => {
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    
        if(scrollLocation > 100){
            $('header').addClass('headerfix');
        } else {
            $('header').removeClass('headerfix');
        }
    })

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

    // 모바일 메뉴 닫기
    $('.allmenu_close').on('click', function(e){
        e.preventDefault();
        $('.allmenu_box').hide();
        $('body').css({'overflow': 'auto'});
    });

    // 팝업버튼
    let popBtn = $(".dialog-link");
    let popBody = $(".dialog");
    let beforeScrollPosition = 0; 
    let popupOpenType = false;
    let quick_popBtn = $(".quick_link");
    let quick_popBody = $(".quick_dialog");

    // 팝업 뒤 html 스크롤 조정가능여부
    window.addEventListener('scroll', function() {
        const htmlEl = document.getElementsByTagName('html')[0];
      
        if(popupOpenType) {
            htmlEl.scrollTop = beforeScrollPosition;
        } else {
            beforeScrollPosition = htmlEl.scrollTop;
        }
    });

    popBtn.click(function(e) {
        let poptarget = $(this).attr('data-target');
        $(poptarget).dialog("open");
        popupOpenType = true; // html스크롤 조절불가능
        e.preventDefault();
    });
    // 퀵링크 팝업
    quick_popBtn.click(function(){
        let poptarget = $(this).attr('data-target');
        $(poptarget).dialog("open");
        popupOpenType = true; // html스크롤 조절불가능
        e.preventDefault();
    });

    // 팝업 모달
    popBody.dialog({
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 100
        },
        modal: true,
        buttons: [{
                text: "확인",
                click: function() {
                    $( this ).dialog("close");
                    popupOpenType = false; // html스크롤 조절가능
                }
            },
            {
                text: "닫기",
                click: function() {
                    $(this).dialog("close");
                    popupOpenType = false; // html스크롤 조절가능
                }
            }]
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
            console.log($(this));
            $(this).parent().find('.ui-dialog-titlebar').remove();
        }
    });

    // 탭
    $('.tab_group > ul li a').on('click', function(e){
        e.preventDefault();
        var on_tab = $(this).attr("rel")

        // 탭 컨텐츠 숨기기
        $(this).parent().siblings().removeClass('on');
        $(this).parent().parent().siblings().children("div").removeClass('on');
        console.log($(this).parent().parent().siblings().children("div"));

        // 클릭이벤트
        $(this).parent().addClass('on');
        $("." + on_tab).addClass('on');
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
    $(".btn_top a").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });

    // 공개 여부
    $('.card_info .public_box button').on('click', function(){
        $(this).parent().find('.public_content').addClass('on');
        $('.public_box .btn_gray').on('click', function(e){
            e.preventDefault();
            $('.public_content').removeClass('on');
        });
    });

    // 카드게시판 설정
    $('.tbl_card_list > ul > li > button').on('click', function(){
        $(this).siblings().children('ul').toggleClass('on');
    });
    // 영역 외 클릭 닫기
    $('.wrap').click(function(e){
        if (!$('.tbl_card_list > ul > li').has(e.target).length) { 
            $('.card_set > ul').removeClass('on');
        } 
    });
    // 카드게시판 수정팝업
    $('.card_set li.edit a').on('click', function(e){
        e.preventDefault();
        $('.card_edit').addClass('on')
        $('.card_set > ul').removeClass('on');
    });
    // 수정 팝업 닫기
    $('.card_edit .btn_gray').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().removeClass('on')
    });

    // 검색조건 더보기
    $('.chk_list.type_01 li.more button').on('click', function(){
        $('.search_item_more').toggleClass('on');
        $(this).toggleClass('on');
    });

});
