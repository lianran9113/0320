//鼠标滑过改变border颜色值
$("h2").click(function () {
    $(this).prev().css({ "border-color": "#ccc" });
    $(this).css({ "border-color": "red" });
})
$("h2").click(function () {
    // alert(2);
    $(this).next().css({ "border-color": "#ccc" });
    $(this).css({ "border-color": "red" });
})

//登录、商家登录
$(".work .on").click(function () {
    $(".content1").css("display", "none")
    $(".content").css("display", "block")
})
$(".work .shang").click(function () {
    $(".content").css("display", "none")
    $(".content1").css("display", "block")
})


//使用cookie登录注册
window.onload = function () {
    //登录
    $("#log").click(function () {
        //取出cookie数据
        let cookieJson = getCookie("userinfo");
        if (cookieJson) { //如果有cookie  可以登录
            //取出用户输入的用户名和密码
            let uname = $("#hname").val();
            let upwd = $("#hpwd").val();
            if (uname == cookieJson.uname && upwd == cookieJson.upwd) {
                alert("登陆成功 点击即将为您跳转至首页！");
                location.href = "index.html";
            } else {
                alert("登陆失败！");
            }
        }
    })
}

