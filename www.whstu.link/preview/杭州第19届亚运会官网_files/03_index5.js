$(function(){
    /* banner */
    var b = new Date;
    var b = -b.getTimezoneOffset() / 60;
    var i = '2023/09/23 20:00:00';
    var config = {
        timeText: i, //倒计时时间
        timeZone: b, //时区
        style: "flip", //显示的样式，可选值有flip,slide,metal,crystal
        color: "white", //显示的颜色，可选值white,black
        width: 0, //倒计时宽度
        textGroupSpace: 55, //天、时、分、秒之间间距
        textSpace: 0, //数字之间间距
        reflection: 0, //是否显示倒影
        reflectionOpacity: 10, //倒影透明度
        reflectionBlur: 0, //倒影模糊程度
        dayTextNumber: 3, //倒计时天数数字个数
        displayDay: !0, //是否显示天数
        displayHour: !0, //是否显示小时数
        displayMinute: !0, //是否显示分钟数
        displaySecond: !0, //是否显示秒数
        displayLabel: !0, //是否显示倒计时底部label
        onFinish: function() {}
    };
    var swiper_banner = new Swiper('#swiper-banner',{
        loop: true,
        speed:1200,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 16000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: "#next-banner",
            prevEl: "#prev-banner"
        },
        scrollbar: {
            el: "#scrollbar-banner",
            hide: true
        },
        on: {
            init:function(){
                var c1 ='<div class="countdown"></div>';
                var c2 ='<div class="countdown2"></div>';
                $("#swiper-banner .swiper-slide").each(function(i,e){
                    if(i==0){
                        $(e).find(".banner-text-box").append(c1);
                    }
                    if(i==2){
                        $(e).find(".banner-text-box").append(c2);
                    }
                });
                $(".countdown").jCountdown(config);
                $(".countdown2").jCountdown(config);
            }
        },
    });
    $(".banner .banner-lb-box").on("mousewheel", function (event, delta) {
        event.stopPropagation();
        var that = this;
        if (delta > 0) {
            // 滚轮向上
            $(that).find(".banner-lb1").stop().animate({opacity:1},200,"linear",function(){
                $(that).find(".banner-lb2").stop().animate({opacity:0},200,"linear")
            });
        } else if (delta < 0) {
            // 滚轮向下
            $(that).find(".banner-lb2").stop().animate({opacity:1},200,"linear",function(){
                $(that).find(".banner-lb1").stop().animate({opacity:0},200,"linear")
            });
        }
    });


    /* 赛事 */
    $(".ss-cg-top-text").click(function(){
        // $(this).parents().find(".popup").animate({"left":0,"opacity":1});
        // $(".ss-cg-top-popup .popup-item").animate({"left":0,"opacity":1});
        // $(".ss-cg-top-popup .popup-item").siblings().animate({"left":"-100%","opacity":0});

        $(this).parents(".ss-cg-top").find(".ss-cg-top-popup").addClass("popup-open");
        $(".ss-cg-top-popup .popup-item").addClass("popup-item-open");
        $(".ss-cg-top-popup .popup-item").siblings().removeClass("popup-item-open");
    });
    // 弹窗返回
    $(".btn_back").click(function(){
        // $(".popup-item").animate({"left":"-100%","opacity":0});
        // $(".popup").animate({"left":"-100%","opacity":0});

        $(".popup-item .ss-cg-popup-jjxmjs-box").hide();
        $(".popup").removeClass("popup-open");
    });
    $(".popup-item .ss-cg-popup-jjxm").click(function(){
        $(this).parents().find(".ss-cg-popup-jjxmjs-box").fadeIn();
    });
    $(".popup-item .ss-cg-popup-jjxmjs-box .ss-cg-popup-jjxmjs-btn-close").click(function(){
        $(this).parents(".ss-cg-popup-jjxmjs-box").fadeOut();
    });
    var ss_cg_swiper = new Swiper("#ss-cg-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed: 18000,
        loop: true,
        freeMode: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        }
    });
    $("#ss-cg-swiper .swiper-slide").click(function(){
        var attr = $(this).attr("data-swiper-slide-index");
        // $(".popup").animate({"left":0,"opacity":1});
        // $(".ss-cg-bottom-popup .popup-item").eq(attr).animate({"left":0,"opacity":1});
        // $(".ss-cg-bottom-popup .popup-item").eq(attr).siblings().animate({"left":"-100%","opacity":0});

        $(this).parents(".ss-cg-bottom").find(".ss-cg-bottom-popup").addClass("popup-open");
        $(".ss-cg-bottom-popup .popup-item").eq(attr).addClass("popup-item-open");
        $(".ss-cg-bottom-popup .popup-item").eq(attr).siblings().removeClass("popup-item-open");

    });
    // swiper_ss_2022_tc.el.onmouseover=function(){
    // 	swiper_ss_2022_tc.autoplay.stop();
    // }
    // swiper_ss_2022_tc.el.onmouseout=function(){
    // 	swiper_ss_2022_tc.autoplay.start();
    // }
    // 2022弹窗

    $("#swiper-ss-2022-tc .swiper-slide").mouseenter(function(){
        $("#swiper-ss-2022-tc .swiper-slide").removeClass("sstcAct");
        var index = $(this).attr("data-swiper-slide-index");
        $('#swiper-ss-2022-tc .swiper-slide[data-swiper-slide-index='+index+']').addClass("sstcAct");
        $(".ss-2022-tc-lists .ss-2022-tc-list").eq(index).show().siblings().hide();
    });
    $(".ss_2022_btn_close").click(function(){
        $(".ss_2022_tc").hide();
    });


    // 亚运美学
    $("#swiper_yymx .swiper-slide").mouseenter(function(){
        $(this).find(".yymx-swiper-mask").stop().animate({"bottom":"0"},600)
    }).mouseleave(function(){
        $(this).find(".yymx-swiper-mask").stop().animate({"bottom":"-557px"},600)
    });
    /*服务*/
    $(".jd_lists li span").each(function(i,e){
        $(e).html(i+1)
    });
    /*城市之窗*/
    $(".cszc .cszc_sec .csxz_box .cs_d").eq(0).addClass("cur");
    $(".cszc .cszc_sec .cszc_conts .cszc_item").eq(0).show();
    $(".cszc .cszc_sec .csxz_box .cs_d").hover(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".cszc_conts .cszc_item").eq($(".cszc .cszc_sec .csxz_box .cs_d").index($(this))).fadeIn().siblings().fadeOut();
    });




    $(window).resize(function() {
        $(".fw_lists .fw_list").height($(".fw_lists .fw_list").width());



        $(".cszc_conts .cszc_item .cszc_head img,.cszc_conts .cszc_item .cszc_head .cont").height(
            0.364*parseInt($(".cszc .cszc_sec .cszc_conts").width())
        );

        setTimeout(function(){
            swiper_zx_top.update();
/*
            swiper_zx_top.slideTo(swiper_zx_top.activeIndex, 1000, false);
*/

            swiper_zx_bottom.update();
            swiper_zx_bottom.slideTo(swiper_zx_bottom.activeIndex, 1000, false);

            swiper_yymx.update();
            swiper_yymx.slideTo(swiper_yymx.activeIndex, 1000, false);


/*
            $("#swiper-ss-2022-tc .swiper-slide-cont").height($("#swiper-ss-2022-tc .swiper-slide-cont").width());
*/

        },500)


    });
});

var swiper_yymx = new Swiper("#swiper_yymx", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "#next_yymx",
        prevEl: "#prev_yymx"
    }
});
swiper_yymx.el.onmouseover=function(){
    swiper_yymx.autoplay.stop();
};
swiper_yymx.el.onmouseout=function(){
    swiper_yymx.autoplay.start();
};


/* 资讯 */
var swiper_zx_top = new Swiper('#swiper-zx-top',{
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay:3800,
        disableOnInteraction: false
    },
    pagination: {
        el: "#pagination-zx-top",
        clickable :true
    },
    speed:1200,
    autoplayDisableOnInteraction:false
});
swiper_zx_top.autoplay.stop();


var swiper_zx_bottom = new Swiper("#swiper-zx-bottom", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "#next-zx-bottom",
        prevEl: "#prev-zx-bottom"
    }
});

// 2022弹窗
var swiper_ss_2022_tc = new Swiper("#swiper-ss-2022-tc", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    observer: true,
    observeParents: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false
    // },
    navigation: {
        nextEl: "#next-ss-2022-tc",
        prevEl: "#prev-ss-2022-tc"
    },
    on:{
        init:function(swiper){
/*
            $('#swiper-ss-2022-tc .swiper-slide[data-swiper-slide-index=0]').addClass("sstcAct");
*/
        }
    }
});
// 页面滚动
window.onload = function() {


    /*服务*/
    $(".fw_lists .fw_list").height($(".fw_lists .fw_list").width());




    var win_h = parseInt($(window).height());
    var yyjyOffsetTop = $(".yyjy").offset().top;
    var hzjyOffsetTop = $(".hzjy").offset().top;
    var count = 0;

    var agent = navigator.userAgent.toLowerCase();






    $(window).scroll(function(){
        win_h = parseInt($(window).height());
        yyjyOffsetTop = $(".yyjy").offset().top;
        hzjyOffsetTop = $(".hzjy").offset().top;

        // 亚运记忆、杭州记忆
        if ($(window).scrollTop() > (yyjyOffsetTop - win_h / 2)) {
            $(".yyjy-box-left>img").addClass("imgScaleAct1");
            /*if(agent.indexOf("msie") > 0  || navigator.appName=="Netscape"){
                $(".yyjy-box-left>img").css({"width":"100%","left":0,"top":0})
            }*/
        }
        if ($(window).scrollTop() > (hzjyOffsetTop - win_h / 2)) {
            $(".hzjy-box-right>img").addClass("imgScaleAct2");
            /*if(agent.indexOf("msie") > 0 || navigator.appName=="Netscape"){
                $(".hzjy-box-right>img").css({"width":"100%","left":0,"top":0})
            }*/
        }

        var zxOffsetTop = $(".zx-top").offset().top;
        var sc2022OffsetTop = $(".ss-2022-box").offset().top;
        // var yyjyOffsetTop = $(".sec6-item2").offset().top;
        // var hzjyOffsetTop = $(".sec6-item3").offset().top;
        var count=0;
            // 资讯3张大图轮播
            if ($(window).scrollTop()>(zxOffsetTop-win_h/2)){
                swiper_zx_top.autoplay.start();
                $(".zx-img2").animate({opacity:1,zoom:1,right:0},600,function(){
                    $(".zx-img1").animate({opacity:1,left:"18.93%"},600,function(){
                        $(".swiper-zx-top-slide-text-box1").animate({opacity:1,left:0},600);

                    })
                });
            }
            // 2022
            if ($(window).scrollTop()>(sc2022OffsetTop-win_h/2)&&count==0){
                count++;
                $(".ss-2022-img1").stop().animate({opacity:1},100,"linear",function(){
                    $(".ss-2022-img2").stop().animate({opacity:1},100,"linear",function(){
                        $(".ss-2022-img3").stop().animate({opacity:1},100,"linear",function(){
                            $(".ss-2022-img4").stop().animate({opacity:1},100,"linear",function(){
                                $(".ss-2022-img5").stop().animate({opacity:1},100,"linear",function(){
                                    $(".ss-2022-img6").stop().animate({opacity:1},100,"linear",function(){
                                        $(".ss-2022-img7").stop().animate({opacity:1},100,"linear",function(){
                                            $(".ss-2022-img8").stop().animate({opacity:1},100,"linear",function(){
                                                $(".ss-2022-img9").stop().animate({opacity:1},100,"linear",function(){
                                                    $(".ss-2022-img10").stop().animate({opacity:1},100,"linear",function(){
                                                        $(".ss-2022-img11").stop().animate({opacity:1},100,"linear",function(){
                                                            $(".ss-2022-img12").stop().animate({opacity:1},100,"linear",function(){
                                                                $(".ss-2022-img13").stop().animate({opacity:1},100,"linear",function(){
                                                                    $(".ss-2022-img14").stop().animate({opacity:1},100,"linear",function(){
                                                                        $(".ss-2022-img15").stop().animate({opacity:1},100,"linear",function(){
                                                                            $(".ss-2022-img16").stop().animate({opacity:1},100,"linear",function(){
                                                                                $(".ss-2022-img17").stop().animate({opacity:1},100,"linear",function(){
                                                                                    $(".ss-2022-img18").stop().animate({opacity:1},100,"linear",function(){
                                                                                        $(".ss-2022-img19").stop().animate({opacity:1},100,"linear",function(){
                                                                                            $(".ss-2022-img20").stop().animate({opacity:1},100);
                                                                                            $(".ss-2022-img19").stop().animate({opacity:0});
                                                                                            // $(".ss-2022-img").not(".ss-2022-img20").remove();
                                                                                        })
                                                                                        $(".ss-2022-img18").stop().animate({opacity:0});
                                                                                    })
                                                                                    $(".ss-2022-img17").stop().animate({opacity:0});
                                                                                })
                                                                                $(".ss-2022-img16").stop().animate({opacity:0});
                                                                            })
                                                                            $(".ss-2022-img15").stop().animate({opacity:0});
                                                                        })
                                                                        $(".ss-2022-img14").stop().animate({opacity:0});
                                                                    })
                                                                    $(".ss-2022-img13").stop().animate({opacity:0});
                                                                })
                                                                $(".ss-2022-img12").stop().animate({opacity:0});
                                                            })
                                                            $(".ss-2022-img11").stop().animate({opacity:0});
                                                        })
                                                        $(".ss-2022-img10").stop().animate({opacity:0});
                                                    })
                                                    $(".ss-2022-img9").stop().animate({opacity:0});
                                                })
                                                $(".ss-2022-img8").stop().animate({opacity:0});
                                            })
                                            $(".ss-2022-img7").stop().animate({opacity:0});
                                        })
                                        $(".ss-2022-img6").stop().animate({opacity:0});
                                    })
                                    $(".ss-2022-img5").stop().animate({opacity:0})
                                })
                                $(".ss-2022-img4").stop().animate({opacity:0});
                            })
                            $(".ss-2022-img3").stop().animate({opacity:0});
                        });
                        $(".ss-2022-img2").stop().animate({opacity:0});
                    })
                    $(".ss-2022-img1").stop().animate({opacity:0});
                });
            }
            $(".ss-2022 .ss_2022_btn").click(function(){
                $(".ss_2022_tc").fadeIn();
                $(".ss-2022-tc-list").eq( $(".ss-2022 .ss_2022_btn").index($(this))).show().siblings().hide();
                swiper_ss_2022_tc.slideTo($(".ss-2022 .ss_2022_btn").index($(this))+3, 1000, false);

                $("#swiper-ss-2022-tc .swiper-slide").removeClass("sstcAct");
                $('#swiper-ss-2022-tc .swiper-slide[data-swiper-slide-index='+ $(".ss-2022 .ss_2022_btn").index($(this))+']').addClass("sstcAct");

                setTimeout(function(){
/*
                    $("#swiper-ss-2022-tc .swiper-slide-cont").height($("#swiper-ss-2022-tc .swiper-slide-cont").width());
*/

                },500)


            });
            $(".ss-2022 .btn_close").click(function(){
                $(".ss_2022_tc").fadeOut();
            });

            // 亚运记忆、杭州记忆
            // if($(window).scrollTop()>(yyjyOffsetTop-win_h/2)){
            //   $(".sec6-item2-left>img").addClass("imgScaleAct1");
            // }
            // if($(window).scrollTop()>(hzjyOffsetTop-win_h/2)){
            //   $(".sec6-item3-right>img").addClass("imgScaleAct2");
            // }

            // 回到顶部
            if ($(window).scrollTop() > 600) {
                $("#scrollTop").fadeIn();
            }else{
                $("#scrollTop").fadeOut();
            }
            $(" #scrollTop").click(function(){
                $("html, body").stop().animate({scrollTop:0}, 500);
            });


        $(".popup").css({"left":-$(window).scrollLeft()})



    });

};