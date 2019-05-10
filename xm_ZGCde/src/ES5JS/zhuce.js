// function zhu(){
//     $('#ce').click(function(){
//         console.log(1);
//         $.cookie("uname1",2,{expires : 7,path : "/"});
//         $.cookie("uname2",$('#uname_2').val(),{expires : 7,path:"/"});
//         $.cookie("uname3",$('#uname_3').val(),{expires : 7,path:"/"});
//     })
// }
// zhu();
window.onload = function(){
	//注册 
	$("#ce").click(function(){
		//获取用户名和密码
		let uname = $("#uname").val();
		let upwd = $("#upwd").val();
		let userInfoJson = {
			"uname" :　uname , 
			"upwd" : upwd
		}
		//将对象存入到cookie中
		setCookie( "userinfo" , JSON.stringify( userInfoJson ) );
		alert( "注册成功" );
		location.href ="denglu.html";
	})
}
   





//获取手机验证码 + 60秒倒计时

var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数

function sendMessage() {
    curCount = count;
    //设置button效果，开始计时
    $("#btnSendCode").attr("disabled", "true");
    $("#btnSendCode").val("请在" + curCount + "秒内输入");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //向后台发送处理数据
    $.ajax({
        type: "POST", //用POST方式传输
        dataType: "text", //数据格式:JSON
        url: 'Login.ashx', //目标地址
        data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
        error: function (XMLHttpRequest, textStatus, errorThrown) { },
        success: function (msg){ }
    });
}
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启用按钮
        $("#btnSendCode").val("重新发送验证码");
    }
    else {
        curCount--;
        $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
    }
}



//正则验证：
let oForm = document.forms[0];
	oForm.onsubmit = function(){
		if(flagName && flagPwd){
			return true;
		}
		return false;
	}
	
	//用户名验证  失去焦点时，测试用户名是否符合规范
	let flagName = null;
	oForm.elements[0].onblur = function(){
		//得到用户输入的用户名
		let username = this.value;
      //  let reg = /^1[35789]\d.{9}$/;
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/
		if(reg.test(username)){
			flagName = true;
			s1.innerHTML = "√";
		}else{
			flagName = false;
			s1.innerHTML = "您输入的手机号码有误";
		}
	}
    
    
	
	//验证密码
	let flagPed = null;
	oForm.elements[3].onblur = function(){
		//得到用户输入的密码
		let userpwd = this.value;
		let reg = /^.{6,}$/;
		if(reg.test(userpwd)){
			flagPwd = true;
			s2.innerHTML = "√";
		}else{
			flagPwd = false;
			s2.innerHTML = "密码至少 6位，请重新输入";
		}
	}
	
	//比对两次密码输入是否一致
	let flagQed = null;
	oForm.elements[4].onblur = function(){
		//得到用户输入的密码
		let userqpwd = this.value;		
		if(qpwd.value == upwd.value){			
			s3.innerHTML = "√";
		}else{			
			s3.innerHTML = "密码不一致，请重新输入";
		}
	}
	