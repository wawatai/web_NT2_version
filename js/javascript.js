//時間列
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');

    var zeroMM,zeroD,zeroH,zeroM,zeroS = "";

    if(mm < 10)
    {
        zeroMM = "0";
    }
    else
    {
        zeroMM = "";
    }
    if(dd < 10)
    {
        zeroD = "0";
    }
    else
    {
        zeroD = "";
    }
    if(h < 10)
    {
        zeroH = "0";
    }
    else
    {
        zeroH = "";
    }
    if(m < 10)
    {
        zeroM = "0";
    }
    else
    {
        zeroM = "";
    }
    if(s < 10)
    {
        zeroS = "0";
    }
    else
    {
        zeroS = "";
    }

    curTime[0].innerHTML = yy + '-' + zeroMM + mm + '-' + zeroD + + dd + ' ' + zeroH + h + ':' + zeroM + m + ':' + zeroS + s;
    setTimeout('currentTime()',1000);
}

//topGameList 滑入彈出效果
$(function() {
    var arr = value => Array.from(document.querySelectorAll(value));
    var tl = document.querySelector('.topGameList');
    ['.menu','.activeWallet','.event','.gameNav .vip'].forEach(function(select){
        arr(select).forEach(function(item){
            item.addEventListener('mouseover',function(){
                tl.classList.remove('display');
            })
        })
    })
    tl.addEventListener("mouseleave",function(){
        tl.classList.remove('display');
    })

    $('.sportBtn').mouseenter(function(){
        $('.topGameList,.topGameList .sport').addClass('display');
        $('.topGameList .sport').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.liveBtn').mouseenter(function(){
        $('.topGameList,.topGameList .live').addClass('display');
        $('.topGameList .live').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.slotBtn').mouseenter(function(){
        $('.topGameList,.topGameList .slot').addClass('display');
        $('.topGameList .slot').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.lotteryBtn').mouseenter(function(){
        $('.topGameList,.topGameList .lottery').addClass('display');
        $('.topGameList .lottery').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.fishBtn').mouseenter(function(){
        $('.topGameList,.topGameList .fish').addClass('display');
        $('.topGameList .fish').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
    $('.boardBtn').mouseenter(function(){
        $('.topGameList,.topGameList .board').addClass('display');
        $('.topGameList .board').siblings().removeClass('display');
        // $('.topGameList .prev,.topGameList .next').removeClass('display');
    })
})

//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//partnerBox div寬度+點擊滑動
$(function(){
    var par = document.querySelectorAll('.partners i');
    var parl = par.length;
    var partners = document.getElementsByClassName('partners');
    partners[0].style.width = 190 * parl + 'px'; 

    var n = 0;
    var nt = document.querySelector('footer .next');
    var pv = document.querySelector('footer .prev');
    nt.onclick = function(){
        n ++;
        partners[0].style.transform = "translateX(" + (-190 * n) + "px)";
        console.log(n);

        if(n == 11){
            n --;
        }
    }
    pv.onclick = function(){
        n --;
        partners[0].style.transform = "translateX(" + (-190 * n) + "px)";
        console.log(n);

        if(n == -1){
            partners[0].style.transform = "translateX(" + (0) + "px)";
            n ++;
        }
    }
})

//.vipWrap .detailCardBox內選單滑動
$(function(){
    var vipCard = document.querySelector('.detailCardBox ul');

    var n = 0;
    var nt = $('.detailCardBox .next');
    var pv = $('.detailCardBox .prev');
    $(nt).click(function(){
        n ++;
        vipCard.style.transform = "translateX(" + (-290 * n) + "px)";

        if(n == 4){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        vipCard.style.transform = "translateX(" + (-290 * n) + "px)";

        if(n == -1){
            vipCard.style.transform = "translateX(" + (0) + "px)";
            n ++;
        }
    })
})

//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user').removeClass('login');
        $('header .user').addClass('userInfo');
        $('.gameNav li').removeClass('unlogin');

        $('header .sportBtn,.typeList .sport').attr("onclick","window.location.href='./html/sportPage.html'");
        $('header .liveBtn,.typeList .live').attr("onclick","window.location.href='./html/livePage.html'");
        $('header .slotBtn,.typeList .slot').attr("onclick","window.location.href='./html/slotPage.html'");
        $('header .lotteryBtn,.typeList .lottery').attr("onclick","window.location.href='./html/lotteryPage.html'");
        $('header .fishBtn,.typeList .fish').attr("onclick","window.location.href='./html/fishPage.html'");
        $('header .boardBtn,.typeList .board').attr("onclick","window.location.href='./html/boardPage.html'");
        $('header .event').attr("onclick","window.location.href='./html/event.html'");
        $('header .vip').attr("onclick","window.location.href='./html/vip.html'");

        $('.topGameList .sport li').attr("onclick","openSportGame()");
        $('.topGameList .live li').attr("onclick","openLiveGame()");
        $('.topGameList .slot li').attr("onclick","window.location.href='./slotPageInner.html'");
        $('.topGameList .fish li').attr("onclick","window.location.href='./fishPageInner.html'");
        $('.topGameList .lottery li').attr("onclick","openLotteryGame()");
        $('.topGameList .board li').attr("onclick","window.location.href='./boardPageInner.html'");
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close_ic_gray').click(function(){
        $('.filter').removeClass('display');
    })
    $('.plsGo button,.checkEvent button').click(function(){
        $('.filter').removeClass('display');
    })

    $('.loginForm .forget').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetPassword').addClass('display');
    })

    $('.loginBtn,.openNews').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.news').addClass('display');
    })

    $('.vipWrap .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.score').addClass('display');
    })

    $('.changePassword button').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.walletDetail .record').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.walletRecord').addClass('display');
    })

    $('.eventBox .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkEvent').addClass('display');
    })
    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $('.sportPage .sportGame01').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.sportGame01').addClass('display');
    })

    $('.livePage .liveGame01').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.liveGame01').addClass('display');
    })
    $('.livePage .liveGame02').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.liveGame02').addClass('display');
    })

    $('.lotteryPage .lotteryGame01').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.game01').addClass('display');
    })
    $('.lotteryPage .lotteryGame02').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.betWindow.game02').addClass('display');
    })
})
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

//jumpWindow .new .content
$(function(){
    $('.news .nav .hot').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forHot').addClass('display');
        $('.forHot').siblings().removeClass('display');
    })
    $('.news .nav .normal').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forNormal').addClass('display');
        $('.forNormal').siblings().removeClass('display');
    })
    $('.news .nav .deposit').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forDeposit').addClass('display');
        $('.forDeposit').siblings().removeClass('display');
    })
    //推薦好友彈窗
    $('.innerPage .friendWrap table .open.1st').click(function(){
        $('.filter,.filter .pointWindow.1st').addClass('display');
        $('.filter,.filter .pointWindow.1st').siblings().removeClass('display');
    })
    $('.innerPage .friendWrap table .open.memberData').click(function(){
        $('.filter,.filter .pointWindow.memberData').addClass('display');
        $('.filter,.filter .pointWindow.memberData').siblings().removeClass('display');
    })
    //流水限制談窗
    $('.innerPage .walletWrap .walletMiddle .top .content .callNotice').click(function(){
        $('.filter, .filter .noticeWindow').addClass('display');
    })
    $('.innerPage .center .withdrawalWrap .withdrawalMiddle .top .walletBox .smallBox .smallTitle .notice').click(function(){
        $('.filter, .filter .noticeWindow').addClass('display');
        $('.filter,.filter .noticeWindow').siblings().removeClass('display');
    })
})

//.gameList .love
$(function(){
    $('.gameList .love').click(function(){
        $(this).toggleClass('active');
    })
})

//slotBody li 切換
$(function(){
    $('.slotBody .nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//eventList+eventDetail 切換
$(function(){
    $('.eventBox .imgBox').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail').addClass('display');
    })

    $('.eventDetail .back').click(function(){
        $('.eventList').addClass('display');
        $('.eventDetail').removeClass('display');
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more').click(function(){
        $('.outMode').removeClass('display');
        $('.innerMode').addClass('display');
    })

    $('.detailTitle .back').click(function(){
        $('.outMode').addClass('display');
        $('.innerMode').removeClass('display');
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.dataWrap').addClass('display');
        $('.dataWrap').siblings().removeClass('display');
    })

    $('.memberWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.platformWrap').addClass('display');
        $('.platformWrap').siblings().removeClass('display');
    })
})

//walletWrap 切換
$(function(){
    $('.walletMiddle .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .activeWallet').addClass('display');
        $('.walletMiddle .activeWallet').siblings().removeClass('display');
    })

    $('.walletMiddle .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .historyWallet').addClass('display');
        $('.walletMiddle .historyWallet').siblings().removeClass('display');
    })

    $('.walletMiddle .tabs li:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .platformWallet').addClass('display');
        $('.walletMiddle .platformWallet').siblings().removeClass('display');
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top a:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').addClass('display');
        $('.mailWrap .bottom.ann').removeClass('display');
    })
    $('.mailWrap .top a:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').removeClass('display');
        $('.mailWrap .bottom.ann').addClass('display');
    })

    $('.mailWrap .tabs li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.mailWrap .btnBox .edit').click(function(){
        $('.mailWrap .btnBox.nor').removeClass('display');
        $('.mailWrap .btnBox.edit').addClass('display');
    })
    $('.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox.nor').addClass('display');
        $('.mailWrap .btnBox.edit').removeClass('display');
    })

    $('.mailWrap.outMode .list li').click(function(){
        $('.mailWrap.outMode').removeClass('display');
        $('.mailWrap.innerMode').addClass('display');
    })
    $('.mailWrap.innerMode .title button').click(function(){
        $('.mailWrap.outMode').addClass('display');
        $('.mailWrap.innerMode').removeClass('display');
    })
})

//eventWrap 切換
$(function(){
    $('.eventWrap .tabs li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass("active");

        var n = $(this).index();
        
        $(".eventMiddle .event:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display")
    })
})

//betWrap 搜尋開關
$(function(){
    $('.betWrap .fakeTable .arrow_ic').click(function(){
        $($(this).closest('li')).toggleClass('active');
    })
})

//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap  .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
    $('.transferWrap  .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
})

//helpPage .nav列切換
$(function(){
    $('.nav .title').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.nav .box').removeClass('display');
        $($(this).next('.box')).addClass('display');
    })

    $('.nav .box li').click(function(){
        $('.nav .box li').removeClass('active');
        $(this).addClass('active');
    })
})
//helpPage teachList列表
$(function(){
    $('.helpPage .teachList li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
})
//helpPage .nav 連動切換
$(function(){
    $(".helpPage .box .forNew").click(function(){
        var n = $(this).index();

        $(".helpWrap .newHelp:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display")
    })

    $(".helpPage .box .forQues").click(function(){
        var n = $(this).index();

        $(".helpWrap .question:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display")
    })

    $(".helpPage .box .forUs").click(function(){
        var n = $(this).index();

        $(".helpWrap .aboutUs:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display")
    })

    $(".helpPage .box .forApp").click(function(){
        var n = $(this).index();

        $(".helpWrap .app:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display")
    })
})

//slotPage 遊戲展開
$(function(){
    $('.pfName .all').click(function(){
        $('.platforms').removeClass('display');
        $($(this).closest('.platforms')).addClass('display');
        $($(this).closest('.pfName').next('.gameList')).addClass('active');
        $($(this).closest('.pfName')).addClass('active');
    })

    $('.pfName .back').click(function(){
        $('.platforms').addClass('display');
        $('.pfName.active,.gameList.active').removeClass('active');
    })
})

//goTop
$(function(){
    $('.goTop').click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },300);
    })
})

//deposit切換
$(function(){
    $(".depositWrap .list li").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".depositWrap .depContent:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})
//deposit確認存款
$(function(){
    $(".depositWrap .content form .deopNow").click(function(){
        $(".depositWrap .depContent.depoChecked")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

function openSportGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.sportGame').addClass('display');
}
function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame').addClass('display');
}
function openSlotGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.slotGame').addClass('display');
}
function openLotteryGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.lotteryGame').addClass('display');
}
function openFishGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.fishGame').addClass('display');
}
function openBoardGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.boardGame').addClass('display');
}

//gameWrap滑入左圖切換
$(function(){
    $(".gameWrap .innBox li").hover(function(){
        var n = $(this).index();

        $(".sportPage .mainImg")
        .attr("src","../images/platform/sport/sportImg_"+ (n + 1) +".png");

        $(".livePage .mainImg")
        .attr("src","../images/platform/live/liveImg_"+ (n + 1) +".png");

        $(".lotteryPage .mainImg")
        .attr("src","../images/platform/lottery/lotteryImg_"+ (n + 1) +".png");

        $(".slotPage .mainImg")
        .attr("src","../images/platform/slot/slotImg_"+ (n + 1) +".png");

        $(".boardPage .mainImg")
        .attr("src","../images/platform/board/boardImg_"+ (n + 1) +".png");
    })
})

//維護時間hover
$(function(){
    var n = $(".topGameList li").has(".fixBox")

    if(n)
    {
        $(n)
        .css("pointer-events","none");
    }
})



