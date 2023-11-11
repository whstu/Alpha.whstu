/*banner*/
$("#swiper-banner-08 .swiper-slide .banner_num").each(function(i,e){
    $(e).attr("data-num",i+1);
});
var swiper_banner_8 = new Swiper('#swiper-banner-08',{
    /*effect: 'fade',*/
    loop: true,
    speed:1200,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' +"0"+(index + 1) + '</span>';
        }
    }
});
var swiper_cksj = new Swiper('#swiper-cksj',{
    /*effect: 'fade',*/
    loop: true,
    speed:600,
    observer: true,
    observeParents: true,
    /*autoplay: {
     delay: 5000,
     disableOnInteraction: false
     },*/
    slidesPerView: "auto",
    navigation: {
        nextEl: ".cksj_next",
        prevEl: ".cksj-prev"
    }
});

var swiper_yqkyy = new Swiper('#swiper-yqkyy',{
    loop: true,
    freeMode:true,
    speed:10000,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
     },
    slidesPerView: "auto"
});


var swiper_emsc = new Swiper('#swiper-emsc',{
    /*effect: 'fade',*/
   /* loop: true,*/
    speed:600,
    observer: true,
    observeParents: true,
    /*autoplay: {
     delay: 5000,
     disableOnInteraction: false
    },*/
    slidesPerView: "auto",
    slidesPerGroup : 5,
    navigation: {
        nextEl: ".emsc_next",
        prevEl: ".emsc-prev"
    }
});

var swiper_tyxm = new Swiper('#swiper-tyxm',{
    /*effect: 'fade',*/
    loop: true,
    speed:600,
    observer: true,
    observeParents: true,
    /*autoplay: {
     delay: 5000,
     disableOnInteraction: false
     },*/
    slidesPerView: 6,
    slidesPerGroup : 6,
    spaceBetween: "2%",
    navigation: {
        nextEl: ".tyxm_next",
        prevEl: ".tyxm-prev"
    }
});
var swiper_cont = new Swiper('#swiper-cont',{
    /* effect: 'fade',*/
    loop: true,
    speed:800,
    observer: true,
    observeParents: true,
    mousewheel:false
});

var swiper_yycg = new Swiper('#swiper-yycg',{
    /*effect: 'fade',*/
    loop: true,
    speed:800,
    observer: true,
    observeParents: true,
    autoplay: {
     delay: 5000,
     disableOnInteraction: false
     },
    slidesPerView: 2.32,
    spaceBetween: "4.2%",
    centeredSlides: true,
    navigation: {
        nextEl: ".yycg_next",
        prevEl: ".yycg-prev"
    },
    thumbs: {
        swiper: swiper_cont
    }


});

$(function(){
    /*城市之窗*/
    $(".cszc .cszc_sec .csxz_box .cs_d").eq(0).addClass("cur");
    $(".cszc .cszc_sec .cszc_conts .cszc_item").eq(0).show();
    $(".cszc .cszc_sec .csxz_box .cs_d").hover(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".cszc_conts .cszc_item").eq($(".cszc .cszc_sec .csxz_box .cs_d").index($(this))).fadeIn().siblings().fadeOut();
    });


    /*今日看点*/
    var zxjx_num =$(".zzjx_box .ScheduleLiveContainer").length;
    if(zxjx_num>0){
        $(".emsc").show();
    }
    $(".jpb meta").remove();

    var zxjx_pages = Math.ceil(zxjx_num/5);
    var show_page = 1;


    $(".emsc_next").click(function(){
        if( show_page < zxjx_pages  && $(".zzjx_box:animated").length == 0){
            var zzjx_w = parseFloat($(".zzjx_sec").width()) + parseFloat($(".ScheduleLiveContainer").css("marginRight")) ;
            var zzjx_box_ml = parseFloat($(".zzjx_box").css("marginLeft"));
            $(".zzjx_box").stop(0).animate({"marginLeft": zzjx_box_ml-zzjx_w}, 1000, function () {
                show_page++
            });
        }
    });
    $(".emsc-prev").click(function(){
        if( show_page > 1 && $(".zzjx_box:animated").length == 0){
            var zzjx_w = parseFloat($(".zzjx_sec").width()) + parseFloat($(".ScheduleLiveContainer").css("marginRight")) ;
            var zzjx_box_ml = parseFloat($(".zzjx_box").css("marginLeft"));
            $(".zzjx_box").stop(0).animate({"marginLeft": zzjx_box_ml+zzjx_w}, 1000, function () {
                show_page--
            });
        }
    });
    function  zxjx_auto(){
        if( show_page < zxjx_pages  && $(".zzjx_box:animated").length == 0){
            var zzjx_w = parseFloat($(".zzjx_sec").width());
            var zzjx_box_ml = parseFloat($(".zzjx_box").css("marginLeft"));
            $(".zzjx_box").stop(0).animate({"marginLeft": zzjx_box_ml-zzjx_w}, 1000, function () {
                show_page++
            });
        }else if(show_page == zxjx_pages && $(".zzjx_box:animated").length == 0 ){
            $(".zzjx_box").stop(0).animate({"marginLeft": 0}, 1000, function () {
                show_page=1
            });
        }
    }
    var timer =null;
    /* timer =setInterval(zxjx_auto,4000);
     $(".jpb").hover(function(){
     clearInterval(timer);
     },function(){
     timer =setInterval(zxjx_auto,4000);
     });*/

    $(window).resize(function() {


        $(".cszc_conts .cszc_item .cszc_head img,.cszc_conts .cszc_item .cszc_head .cont").height(
            0.364*parseInt($(".cszc .cszc_sec .cszc_conts").width())
        );


        setTimeout(function(){
/*
            swiper_emsc.update();
*/
            swiper_cksj.update();
            swiper_yqkyy.update();
            swiper_tyxm.update();
            swiper_yycg.update();
/*
            swiper_yycg.slideTo(swiper_yycg.activeIndex, 600, false);
*/
            var zzjx_w = parseFloat($(".zzjx_sec").width()) + parseFloat($(".ScheduleLiveContainer").css("marginRight")) ;

            $(".zzjx_box").stop(0).animate({"marginLeft": -(show_page-1)*zzjx_w}, 400, function () {});
        },500)


    });
});