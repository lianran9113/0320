
//轮播
var index = 0;
var timer = null;
var oUl = $id("ul");
var olist = $id("bt").children;
timer = setInterval(autoPlay, 2000);
function autoPlay() {
	index++;

	if (index == olist.length) {
		index = 0;
	}
	for (var i = 0; i < olist.length; i++) {
		olist[i].className = "";
	}
	olist[index].className = "current";
	startMove(oUl, -index * 900, "left");
}

for (let i = 0; i < olist.length; i++) {
	olist[i].onmouseover = function () {
		clearInterval(timer);
		index = i - 1;
		autoPlay();
	}
	olist[i].onmouseout = function () {
		timer = setInterval(autoPlay, 2000);
	}
}

// 定时器
var nowdate = new Date();
var fuldate = new Date(nowdate.getFullYear(), nowdate.getMonth(), nowdate.getDate() + 2);
setInterval(function () {
	var nowDate = new Date();
	var cdate = fuldate - nowDate;
	var day = parseInt(cdate / 86400000);
	if (day < 10) {
		day = "0" + day;
	} else {
		day = day;
	}
	var hours = parseInt(cdate % 86400000 / 3600000);
	if (hours < 10) {
		hours = "0" + hours;
	} else {
		hours = hours;
	}
	var minutes = parseInt(cdate % 86400000 % 3600000 / 60000);
	if (minutes < 10) {
		minutes = "0" + minutes;
	} else {
		minutes = minutes;
	}
	var seconds = parseInt(cdate % 86400000 % 3600000 % 60000 / 1000);
	if (seconds < 10) {
		seconds = "0" + seconds;
	} else {
		seconds = seconds;
	}


	//	$('.time .day').html(day).siblings('.hour').html(hours).siblings('.minute').html(minutes).siblings('.second').html(seconds);
	$(".shengyu span").html("剩余：<font color=red>" + day + "</font>天<font color=red>" + hours + "</font>小时<font color=red>" + minutes + "</font>分钟<font color=red>" + seconds + "</font>秒");

})

//今日团提示
var list = document.getElementsByTagName("a");
$(list).click(function () {
	$(this).addClass("on").siblings().removeClass("on");
})

//今日团轮播

// 显示的下标;
var nowIndex = 0;
// 隐藏的下标;
var oldIndex = 0;
var _left = document.getElementById("left");
var _right = document.getElementById("right");
var sliders = document.querySelector(".tu_box").children;
var imgW = $(sliders).eq(0).width();

_left.addEventListener("click", reduceIndex);
_right.addEventListener("click", addIndex);
// 只要是走到了 reduceIndex 那么nowIndex 一定会改;

function reduceIndex() {
	// 因为马上nowIndex要改变了 ,我们记录一下nowIndex 取名为oldIndex;
	oldIndex = nowIndex;

	if (nowIndex === 0) {
		nowIndex = sliders.length - 1;
	} else {
		nowIndex--;
	}
}
function addIndex() {
	oldIndex = nowIndex;

	if (nowIndex === sliders.length - 1) {
		nowIndex = 0;
	} else {
		nowIndex++;
	}
}
_right.addEventListener("click", bannerAnimate);
_left.addEventListener("click", bannerBnimate);
function bannerAnimate() {
	$("#tu_box").animate({ marginLeft: -imgW }, 1000, function () {
		$("#tu_box").css("marginLeft", 0);
		$("#tu_box").find(".li_a:first").appendTo($("#tu_box"));
	})
}
function bannerBnimate() {
	$("#tu_box").animate({ marginLeft: 0 }, 1000, function () {
		$("#tu_box").css("marginLeft", "-300px");
		$("#tu_box").find(".li_a:last").prependTo($("#tu_box"));
	})
}

// //悬浮置顶
// window.onload = function(){
// 	var h = document.getElementById("xuanfu").offsetHeight;
// 	var nav = document.querySelector("#Q-nav");
// 	//获取头部的高度

// 	//操作滚动条事件
// 	window.onscroll = function(){
// 		//获取页面垂直方向向上滚走的距离
// 		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
// 		if( sTop > h ){
// 			//吸顶原理 ： 固定定位
// 			nav.style.position = "fixed";
// 			nav.style.top = 0;
// 		}else{
// 			//取消吸顶
// 			nav.style.position = "";
// 		}
// 	}
// }


//客户服务
window.onload = function () {
	onscroll = function () {
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (sTop > 10) {
			gotop.style.display = "block";
		}
	}
	//点击小火箭  设置页面滚走的距离为0
	let $topLi = $("#gotop");//回调顶部
	$topLi.click(function () {
		flag = false;
		$("body,html").animate({ scrollTop: 0 }, 2500, function () {
			flag = true;
		});
	})
}














