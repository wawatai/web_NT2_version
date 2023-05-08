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
    curTime[0].innerHTML = '現在時間: '+yy+'年 '+mm+'月 '+dd+'日 '+h+':'+m+':'+ s;
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

        if(n == 6){
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

//slot+fish+board下拉選單寬度+點擊滑動
// $(function(){
//     var slot = document.querySelectorAll('.listWrap .slot li');
//     var slotl = slot.length;
//     var slwp = document.getElementsByClassName('slot');
//     slwp[0].style.width = 220 * slotl + 'px'; 

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         slwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == 1){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         slwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == -1){
//             slwp[0].style.transform = "translateX(" + (0) + "px)";
//             n ++;
//         }
//     })
// })
// $(function(){
//     var fish = document.querySelectorAll('.listWrap .fish li');
//     var fishl = fish.length;
//     var fhwp = document.getElementsByClassName('fish');
//     fhwp[0].style.width = 220 * fishl + 'px'; 

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         fhwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == 1){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         fhwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == -1){
//             fhwp[0].style.transform = "translateX(" + (0) + "px)";
//             n ++;
//         }
//     })
// })
// $(function(){
//     var board = document.querySelectorAll('.listWrap .board li');
//     var boardl = board.length;
//     var bdwp = document.getElementsByClassName('board');
//     bdwp[0].style.width = 220 * boardl + 'px'; 

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         bdwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == 14){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         bdwp[0].style.transform = "translateX(" + (-220 * n) + "px)";

//         if(n == -1){
//             bdwp[0].style.transform = "translateX(" + (0) + "px)";
//             n ++;
//         }
//     })
// })

//遊戲頁hover時左圖切換
$(function(){
    $(".gameWrap .livePage .innBox li").hover(function(){
        var n = $(this).index();

        $(".gameWrap .mainImg")
        .attr("src","../images/platform/live/live_"+ (n + 1) +".png");
    })

    $(".gameWrap .lotteryPage .innBox li").hover(function(){
        var n = $(this).index();

        $(".gameWrap .mainImg")
        .attr("src","../images/platform/lottery/lottery_"+ (n + 1) +".png");
    })
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

        if(n == 3){
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
        $('.topGameList .slot li').attr("onclick","openSlotGame()");
        $('.topGameList .fish li').attr("onclick","openFishGame()");
        $('.topGameList .lottery li').attr("onclick","openLotteryGame()");
        $('.topGameList .board li').attr("onclick","openBoardGame()");
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
    $('.eventBox .btnBox button').click(function(){
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
    $('.eventWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.eventMiddle .eventBox').addClass('display');
        $('.eventMiddle .eventRecord').removeClass('display');
    })

    $('.eventWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.eventMiddle .eventBox').removeClass('display');
        $('.eventMiddle .eventRecord').addClass('display');
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
    $('.forNew_1').click(function(){
        $('.newHelp_1').addClass('display');
        $('.newHelp_1').siblings().removeClass('display');
    })
    $('.forNew_2').click(function(){
        $('.newHelp_2').addClass('display');
        $('.newHelp_2').siblings().removeClass('display');
    })
    $('.forNew_3').click(function(){
        $('.newHelp_3').addClass('display');
        $('.newHelp_3').siblings().removeClass('display');
    })
    $('.forNew_4').click(function(){
        $('.newHelp_4').addClass('display');
        $('.newHelp_4').siblings().removeClass('display');
    })
    $('.forNew_5').click(function(){
        $('.newHelp_5').addClass('display');
        $('.newHelp_5').siblings().removeClass('display');
    })

    $('.forQues_1').click(function(){
        $('.question_1').addClass('display');
        $('.question_1').siblings().removeClass('display');
    })
    $('.forQues_2').click(function(){
        $('.question_2').addClass('display');
        $('.question_2').siblings().removeClass('display');
    })
    $('.forQues_3').click(function(){
        $('.question_3').addClass('display');
        $('.question_3').siblings().removeClass('display');
    })

    $('.forUs_1').click(function(){
        $('.aboutUs_1').addClass('display');
        $('.aboutUs_1').siblings().removeClass('display');
    })
    $('.forUs_2').click(function(){
        $('.aboutUs_2').addClass('display');
        $('.aboutUs_2').siblings().removeClass('display');
    })
    $('.forUs_3').click(function(){
        $('.aboutUs_3').addClass('display');
        $('.aboutUs_3').siblings().removeClass('display');
    })
    $('.forUs_4').click(function(){
        $('.aboutUs_4').addClass('display');
        $('.aboutUs_4').siblings().removeClass('display');
    })
    $('.forUs_5').click(function(){
        $('.aboutUs_5').addClass('display');
        $('.aboutUs_5').siblings().removeClass('display');
    })
    $('.forUs_6').click(function(){
        $('.aboutUs_6').addClass('display');
        $('.aboutUs_6').siblings().removeClass('display');
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

$(function(){
    $('.goTop').click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },300);
    })
})

function openSportGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.sportGame01').addClass('display');
}
function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame01').addClass('display');
}
function openSlotGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.slotGame01').addClass('display');
}
function openLotteryGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.lotteryGame01').addClass('display');
}
function openFishGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.fishGame01').addClass('display');
}
function openBoardGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.boardGame01').addClass('display');
}