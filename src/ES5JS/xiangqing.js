var box = $id("box"),
small = $id("small"),
mask = $id("mask"),
big = $id("big"),
bigImg = $id("bigImg");

small.onmouseover = function () {
mask.style.display = "block";
big.style.display = "block";
}
small.onmouseout = function () {
mask.style.display = "none";
big.style.display = "none";
}

small.onmousemove = function (e) {
var e = e || event;
var x = e.pageX - mask.offsetWidth / 2 - box.offsetLeft;
var y = e.pageY - mask.offsetHeight / 2 - box.offsetTop;

var maxL = box.offsetWidth - mask.offsetWidth;
var maxT = box.offsetHeight - mask.offsetHeight;
x = x < 0 ? 0 : (x > maxL ? maxL : x);
y = y < 0 ? 0 : (y > maxT ? maxT : y);

mask.style.left = x + "px";
mask.style.top = y + "px";

var bigImgLeft = x * (bigImg.offsetWidth - big.offsetWidth) / (small.offsetWidth - mask.offsetWidth);
var bigImgTop = y * (bigImg.offsetHeight - big.offsetHeight) / (small.offsetHeight - mask.offsetHeight);

bigImg.style.left = -bigImgLeft + "px";
bigImg.style.top = -bigImgTop + "px";
}

var span = $id("sp");
span.onclick = function () {
    this.style.border = "2px solid red";
}

var p = $id("pp");
pp.onclick = function () {
    this.style.border = "2px solid red";
}
ppp.onclick = function () {
    this.style.border = "2px solid red";
}
pppp.onclick = function () {
    this.style.border = "2px solid red";
}
pp.ondblclick = function () {
    this.style.border = "0";
}
ppp.ondblclick = function () {
    this.style.border = "0";
}
pppp.ondblclick = function () {
    this.style.border = "0";
}

// 定时器
var now = new Date();//当前时间
var end = new Date(now.getFullYear(),now.getMonth(),now.getDate()+3);//"结束时间"
//2、获取时间差  秒数
var diff = (end.getTime() - now.getTime())/1000;
//3、获取剩余的小时 分钟 秒
showTime();
function showTime(){
    //页面加载后，已经达到过期时间了 时间差小于0  
    if( diff < 0 ){
        time.innerHTML = "活动结束了";
        return;
    }
    var d = parseInt( diff/3600/24);//天数
    var h = parseInt( diff/3600 %24);//剩余的小时
    var m = parseInt( (diff - parseInt(diff/3600)*3600)/60 );//剩余的分钟
    var s = parseInt( diff - parseInt(diff/3600)*3600 - m*60 );//剩余的秒数
    //显示结果
    time.innerHTML =  d + "天" + h + "小时" + m + "分钟" + s + "秒";
}

var timer = setInterval( function(){
    diff--;
    if( diff < 0 ){
        clearInterval( timer );
        time.innerHTML = "活动结束了";
    }else{
        showTime()
    }
},1000 )





