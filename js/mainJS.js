$(function(){
    //goTop
    $(function(){
        $(".bkTop").click(function(){
            var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
            $body.animate({
                    scrollTop:0
            },300);
        })
    })
    $(function(){
        $(window).scroll(function () {
            var scrollVal = $(this).scrollTop();
            if(scrollVal > 0){
                    $(".bkTop")
                    .addClass("display");
            } else{
                    $(".bkTop")
                    .removeClass("display");
            };
        })
    })
    //aside按鈕跳轉
    $(function(){
        $(".appD").click(function(){
            $(window).attr('location','./help.html');
        })
    })
    //header money開啟
    $("header .moneyBox .moneyBtn").on("click",function(){
        $("header .moneyBox").toggleClass("active");
    })

    //最新消息彈窗功能切換
    $(".jumpWindow.news .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".coverBg .jumpWindow.news .tabsContent:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
  
    
    //幫助中心左列切換
    $(".helpPage .helpList li").on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".helpPage li.new p:not(:first-child)").on("click",function(){
        $(this).addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".helpDetail.new:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".helpPage li.common p:not(:first-child)").on("click",function(){
        $(this).addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".helpDetail.common:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".helpPage li.about p:not(:first-child)").on("click",function(){
        $(this).addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".helpDetail.about:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".helpPage li.app p:not(:first-child)").on("click",function(appActive){
        $(this).addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".helpDetail.app:eq("+ (n - 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //優惠中心查看返回
    $(function(){
        $(".eventPage .check").click(function(){
            $(".eventAll").removeClass("display");
            $(".eventDitail").addClass("display");
        })
    })
    $(function(){
        $(".eventPage .backBtn").click(function(){
            $(".eventDitail").removeClass("display");
            $(".eventAll").addClass("display");
        })
    })

    //platformGame滑入左圖切換
    $(function(){
        $(".platformGame .btnBox .btn").hover(function(){
            var n = $(this).index();

            $(".sportPage .mainImg")
            .attr("src","../images/gamePAGE/sport/sportImg_"+ (n + 1) +".png");

            $(".livePage .mainImg")
            .attr("src","../images/gamePAGE/live/liveImg_"+ (n + 1) +".png");

            $(".lotteryPage .mainImg")
            .attr("src","../images/gamePAGE/lottery/lotteryImg_"+ (n + 1) +".png");

            $(".slotPage .mainImg")
            .attr("src","../images/gamePAGE/slot/slotImg_"+ (n + 1) +".png");
        })
    })

    //slot頁按讚
    $(function(){
        $(".gameCloum .addLike").click(function(){
            $(this).toggleClass("active");
        })
    })

    //內頁
 


    //交易紀錄切換
    $(".dealWrap .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".dealWrap .bottom>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".dealWrap .search select").on("change",function(){
        if($(this).val() == 1)
        {
            $(".dealBox .deposit")
            .addClass("display")
            .siblings().removeClass("display");
        }

        if($(this).val() == 2)
        {
            $(".dealBox .withdrawal")
            .addClass("display")
            .siblings().removeClass("display");
        }

        if($(this).val() == 3)
        {
            $(".dealBox .transfer")
            .addClass("display")
            .siblings().removeClass("display");
        }

        if($(this).val() == 4)
        {
            $(".dealBox .water")
            .addClass("display")
            .siblings().removeClass("display");
        }

        if($(this).val() == 5)
        {
            $(".dealBox .event")
            .addClass("display")
            .siblings().removeClass("display");
        }

        if($(this).val() == 6)
        {
            $(".dealBox .else")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })

    //投注紀錄切換
    $($(".betWrap p").has(".arrow_ic")).on("click",function(){
        $(this).closest("li")
        .toggleClass("active");
    })
    $(".betWrap .pageBox").on("click",function(){
        $(".betWrap .active table tr:eq(5)")
        .nextAll().toggleClass("display");

        $(this)
        .toggleClass("active")
    })

    //個人資料切換
    $(".memberWrap .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".memberWrap .bottom>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //存款頁切換
    $(".depositWrap .top li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".depositWrap .bottom .fakeTable:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".depositWrap .bottom .card .check").on("click",function(){
        $(".depositWrap .bottom .cardFinish")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".depositWrap .bottom .cardFinish .check").on("click",function(){
        $(".depositWrap .bottom .card")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //轉帳頁切換
    $(".transferWrap .open").on("click",function(){
        $(this)
        .toggleClass("active");

        $(this).prev()
        .toggleClass("active");
    })

    //提款頁切換
    $(".withdrawalWrap .open").on("click",function(){
        $(this)
        .toggleClass("active");

        $(this).prev()
        .toggleClass("active");
    })

    //vip切換
    $(".vipWrap .more,.vipWrap .back").on("click",function(){
        $(".vipWrap")
        .toggleClass("display");
    })

    var cardAmount = 1;
    $(".vipWrap .cardBox i").on("click",function(){

        if($(this).hasClass("next"))
        {
            $(".vipWrap .cardBox ul")
            .css("transform","translate("+ (cardAmount * -309) +"px,0)");

            cardAmount++;

            if(cardAmount > 4)
            {
                cardAmount = 4;
            }

            console.log(cardAmount);
        }

        if($(this).hasClass("prev"))
        {
            cardAmount--;

            if(cardAmount < 0)
            {
                cardAmount = 0;
            }

            $(".vipWrap .cardBox ul")
            .css("transform","translate("+ (cardAmount * -309) +"px,0)");
        }
    })

    //優惠申請
    $(".eventWrap .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".eventWrap .bottom>div:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //站內信
    $(".mailWrap label").on("change",function(){
        $(this)
        .toggleClass("active");
    })
    $(".mailWrap .btnBox .editBtn,.mailWrap .btnBox .reBtn").on("click",function(){
        $(".mailWrap .btnBox")
        .toggleClass("display");

        $(".mailWrap .list li")
        .toggleClass("editing");
    })
    $(".mailWrap .active .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".mailWrap .active .list>ul:eq("+ n +")")
        .addClass("display")
        .siblings("ul").removeClass("display");
    })
    $(".mailWrap .ann .tabs li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $(".mailWrap .ann .list>ul:eq("+ n +")")
        .addClass("display")
        .siblings("ul").removeClass("display");
    })
    $(".mailWrap .top button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".mailWrap>form:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".mailWrap .list li,.mailWrap .innerBottom .back").on("click",function(){
        $(".mailWrap")
        .toggleClass("display");
    })
})