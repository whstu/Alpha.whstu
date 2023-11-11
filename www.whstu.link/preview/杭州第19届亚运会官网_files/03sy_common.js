$(function(){
    // 导航按钮

    var top_h = parseInt($(".top").height());
    $("body").css({"padding-top":top_h});
    $(".cd-nav-trigger").click(function(e){
        e.preventDefault();
        if($("body").hasClass("navigation-is-open")){
            $("body").removeClass("navigation-is-open");
            $(".cdnav").height("100%");
            $(".top").removeClass("btn_show");
        }else{
            $(".cdnav").height($(".cdnav").height());
            $(".cd-nav .nav_line").css({"top":$(".cdnav").height()});
            $("body").addClass("navigation-is-open");
            $(".top").addClass("btn_show");
        }
    });
    $(".cd-nav .close_k").click(function(){
        $(".cd-nav-trigger").click();
    });

    $(".btn_search").click(function(){
            $(".search_sec").addClass("search_show");
            $(this).hide();
        $(".search_sec input").focus();
    });
    $(".search_close").click(function(){
        $(".search_sec").removeClass("search_show");
        $(".btn_search").show();
    });

    /*社交媒体*/
    var liss = $(".sjmt_tb img");
    $.each(liss, function(i, img) {
        var li = $(img);
        li.bind('hover', function() {
            var _index = li.index();
            li.parent().siblings('.templink-body').show();
            li.parent().siblings('.templink-body').find('img').eq(_index).show().siblings().hide();
        })
    });
    $(".sjmt_tb").mouseleave(function(){
        $(this).siblings('.templink-body').hide();
    });


    $(window).resize(function() {
        $(".cdnav").height($(".top").height());
        setTimeout(function() {
            $("body").css({"padding-top": parseInt($(".top").height())});
        },400)


    });


});




var timer_nav =null;
var once_num = true;

$(window).on("scroll", function(){
    var elementScrollTop= $(window).scrollTop();
    top_h =parseInt($(".top").height());
    $("body").css({"padding-top":top_h});
    if (elementScrollTop > top_h) {
        $(".top").addClass("fixed_hide");
        $("body").bind('mousewheel', function(event, delta){
            if(delta>0){
                $(".top").show();
                $(".top").stop().addClass("fixed_show");

            }else{
                $(".top").stop().removeClass("fixed_show");
            }
        });
        if($("body").hasClass("navigation-is-open")){
            $(".header").addClass("hnone");
        }
    }else{
        $(".top").removeClass("fixed_hide");
    }
    $(".top,.cd-nav").css({"left":-$(window).scrollLeft()})


});

window.onload =function(){

};