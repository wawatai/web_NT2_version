$(function(){
    $(".jumpWindow .closeBtn").click(function(){
        $(".coverBg,.jumpWindow").removeClass("display");
    })
    //註冊頁面
    $(".registerWrap .ruleBox .callrule").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.rule").addClass("display");
    })
    //註冊頁面>取得驗證碼
    $(".registerWrap label .callnumHint").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.numHint").addClass("display");
    })

    //忘記密碼
    $("header .password .forget_ic").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.forgotPw").addClass("display");
    })

    //請先登入
    $(".unLogin").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.clickWindow.plsLogin").addClass("display");
    })

    //最新公告
    $(".callNews").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.news").addClass("display");
    })

    //優惠申請>申請提領
    $(".applyCheck").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.applyWindow").addClass("display");
    })

    //優惠申請>查看活動
    $(".callCheckevent").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.checkEvent").addClass("display");
    })
 
    //各類遊戲呼叫
    $(".callSport").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.sport").addClass("display");
    })
    $(".callLive").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.live").addClass("display");
    })
    $(".callLottery").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.lottery").addClass("display");
    })
    $(".callSlot").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.slot").addClass("display");
    })

    //查詢紅利
    $(".pointWrap td .click.1st").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.pointWindow.1st").addClass("display");
    })
    $(".pointWrap td .click.2st").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.pointWindow.2st").addClass("display");
    })
    $(".pointWrap td .click.3st").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.pointWindow.3st").addClass("display");
    })
    $(".pointWrap td .click.detail").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.pointWindow.detail").addClass("display");
    })

    //查看注單
    $(".dealWrap .waterBox .list").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.waterWindow").addClass("display");
    })
    //查看回補
    $(".dealWrap .waterBox .check").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.replenishmentWindow").addClass("display");
    })

    //存款提示
    $(".depositWrap .cardFinish .check").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.clickWindow.deposit").addClass("display");
    })

    //更變密碼
    $(".changePwBtn").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.passwordWindow").addClass("display");
    })

    //更變手機
    $(".changePhBtn").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.phoneWindow").addClass("display");
    })
})