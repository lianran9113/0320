var index = 0;
var timer = null;  
var oUl = $id("ul");
var olist = $id("bt").children;
timer = setInterval( autoPlay,2000 );
function autoPlay(){
    index ++;
    
    if( index == olist.length ){
        index = 0;
    }
    for( var i = 0 ; i < olist.length ; i++ ){
        olist[i].className = "";
    }
    olist[index].className = "current";
    startMove(oUl,-index*900,"left");
}

for( let i = 0 ; i < olist.length ; i++ ){
    olist[i].onmouseover = function(){
        clearInterval(timer);
        index = i-1;
        autoPlay();
    }
    olist[i].onmouseout = function(){
        timer = setInterval( autoPlay,2000 );
    }
}
 
// 定时器
var nowdate = new Date();

var fuldate = new Date(nowdate.getFullYear(),nowdate.getMonth(),nowdate.getDate()+2);

setInterval(function(){
    var nowDate = new Date();
    var cdate = fuldate - nowDate;
    var day = parseInt(cdate/86400000);
    var hours = parseInt(cdate%86400000/3600000);
    var minutes = parseInt(cdate%86400000%3600000/60000);
    var seconds = parseInt(cdate%86400000%3600000%60000/1000);
//	$('.time .day').html(day).siblings('.hour').html(hours).siblings('.minute').html(minutes).siblings('.second').html(seconds);
      $(".shengyu span").html("剩余：" + day + "天"+ hours + "小时" + minutes + "分钟" + seconds + "秒");
})



    //今日团提示
    var list = document.getElementsByTagName("a");
$(list).click(function(){
    $(this).addClass("on").siblings().removeClass("on");
})


