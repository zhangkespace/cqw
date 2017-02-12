define(function(require, exports, module) {
    var home = require("../view/home.js");
    $("#home").html(home);
    require("../less/home.css");
    var Index = {
        init: function() {
            this.banner();
            this.teaLife();
            this.sort();
            this.news();
        },
        banner: function() {
            var index = 0;
            var timer2 = setInterval(Fade, 2000);

            function Fade() {
                if (index >= 4) {
                    index = 0;
                }
                $('.home-banner .imgBox a').eq(index).fadeIn().siblings("a").fadeOut();
                var cirIndex = index;
                if (index == 3) {
                    cirIndex = -1;
                }
                $('.home-banner .indicator span').eq(cirIndex + 1).addClass('bg').siblings().removeClass('bg');
                index++;

            }
            $(".home-banner .imgBox").mouseover(function() {
                clearInterval(timer2);
            }).mouseout(function() {
                timer2 = setInterval(Fade, 2000);
            })
            $(".home-banner .indicator span").mouseover(function() {
                index = $(this).index();
                $('.home-banner .imgBox a').eq(index - 1).fadeIn().siblings("a").fadeOut();
                $('.home-banner .indicator span').eq(index).addClass('bg').siblings().removeClass('bg');
            });

            $(".home-banner .imgBox .right").click(function() {
                Fade();
            });

            $(".home-banner .imgBox .left").click(function() {
                index--;
                index--;
                if (index == -2) {
                    index = 2;
                } else
                if (index < 0) {
                    index = 3;
                }
                $('.home-banner .imgBox a').eq(index).fadeIn().siblings("a").fadeOut();
                var cirIndex = index;
                if (index == 3) {
                    cirIndex = -1;
                }
                $('.home-banner .indicator span').eq(cirIndex + 1).addClass('bg').siblings().removeClass('bg');
                index++;
            })
        },
        teaLife: function() {
            $.ajax({
                type: "GET",
                url: "../json/home-tealife.json",
                success: function(data) {
                    var teaLife = require("../view/home-teaLife.js");
                    $(".content-life .list").prepend(teaLife({ "data": data }));
                    //定义一个滑动函数
                    function slide(index, jqueryObject1, jqueryObject2) {

                        jqueryObject1.animate({ "left": -index * 230 + "px" }, 500);
                        jqueryObject2.eq(index).addClass("bc").siblings().removeClass("bc");
                    };

                    var Index = 0;
                    //向左滑动
                    $(".content-life .list-cell .left").click(function() {
                        Index = $(this).siblings(".indicator").find(".bc").index();
                        Index--;
                        if (Index < 0) {
                            Index = 0;
                        }
                        var slideEle = $(this).siblings(".content-box").find(".content-slide");
                        var indiEle = $(this).siblings(".indicator").children();
                        slide(Index, slideEle, indiEle);
                    });
                    //向右滑动
                    $(".content-life .list-cell .right").click(function() {
                        Index = $(this).siblings(".indicator").find(".bc").index();
                        Index++;
                        if (Index > 3) {
                            Index = 3;
                        }
                        var slideEle = $(this).siblings(".content-box").find(".content-slide");
                        var indiEle = $(this).siblings(".indicator").children();
                        slide(Index, slideEle, indiEle);
                    });
                    //点击指示器
                    $(".content-life .list-cell>.indicator>span").click(function() {
                        Index = $(this).index();
                        var slideEle = $(this).parent().siblings(".content-box").children();
                        var indiEle = $(this).parent().children();
                        slide(Index, slideEle, indiEle);
                    })
                }
            })
        },
        sort:function(){
            $.ajax({
                url:"../json/home-sort.json",
                type:"GET",
                success:function(res){
                var sort = require("../view/home-sort.js");
                $(".content-sort").append(sort({"data":res}));

                }
            })
        },
        news:function(){
            $.ajax({
                url:"../json/home-news.json",
                type:"GET",
                success:function(res){
                   var news = require("../view/home-news.js");
                   $(".content-news").append(news({"data":res}));
                   $(".news-box1 li span").css({"background-color":"#94885f"})
                      .eq(0).css({"background-color":" #975346"})
                      .closest("li").siblings().eq(0).find("span")
                      .css({"background-color":"#ae744d"})
                      .closest("li").siblings().eq(1).find("span")
                      .css({"background-color":"#c09e60"});

                      $(".news-box1 li a").mouseover(function(){
                        $(this).siblings(".detail")
                        .addClass("ani");
                      })
                      .mouseout(function(){
                        $(this).siblings(".detail")
                        .removeClass("ani");
                      })
                //图片轮播
                var timer = setInterval(slide,3000);
                var k = 1;
                function slide(){
                    $(".news-box2 .content>.box").animate({"left":-k*570+"px"},500);
                   
                    $(".news-box2 .indicator span").eq(k).addClass("bgc").siblings().removeClass("bgc");
                    k++;
                    if(k==3){
                        k=0;
                    }
                };
                $(".news-box2 .content").mouseover(function(){
                    clearInterval(timer);
                }).mouseout(function(){
                    timer = setInterval(slide,3000);
                })
               $(".news-box2 .content>.right").click(function(){
                        slide();
                    });
               $(".news-box2 .content>.left").click(function(){
                k--;
                k--;
                if(k<0 && k!=-2){
                    k=2;
                }else
                if(k==-2){
                    k=1;
                }
                  slide();
               });
               $(".news-box2 .indicator>span").mousedown(function(){
                clearInterval(timer);
                  var Index = $(this).index();
                  k = Index;
                  slide();
               }).mouseup(function(){
                timer = setInterval(slide,3000);
               })


                }
            })
        }
    }

    module.exports = Index;
})
