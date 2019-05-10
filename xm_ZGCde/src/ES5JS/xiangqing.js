

$(function(){
    let $btmList = $("#bottom li"),
        $big = $("#big"),
        $bigImg = $big.children("img"),
        $small = $("#small"),
        $smallImg = $small.children("img"),
        $mask = $("#mask"),
        $box = $("#box"),
        $center = $("#center");
        
    //选项卡  操作小图
    $btmList.mouseenter( function(){
        //获取当前操作的小图下标
        let index = $(this).index();
        $smallImg.eq(index).show().siblings().hide();
        $bigImg.eq(index).show().siblings().hide();
                 
    } )
    
    //鼠标操作小图区域
    $small.on({
        "mouseenter" : function(){
            $big.show();
            $mask.show();
            $center.show();
        },
        "mouseleave" : function(){
            $big.hide();
            $mask.hide();
            $center.hide();
        },
        "mousemove" : function(evt){
            let e = evt || event;
            let x = e.pageX - $box.offset().left - $mask.width()/2;
            let y = e.pageY - $box.offset().top - $mask.height()/2;
            let maxL = $small.width() - $mask.width();
            let maxT = $small.height() - $mask.height();
            x = Math.min( Math.max( 0 , x ), maxL );
            y = Math.min( Math.max( 0 , y ), maxT );
            $mask.css({
                left : x,
                top : y,
                backgroundPositionX : -x,
                backgroundPositionY : -y
            })
            
            //大图宽度/小图宽度 = 大图显示区宽度 / mask显示区宽度 = 大图left / mask的left            
            let bigImgLeft = x*$big.width()/$mask.width();
            let bigImgTop = y*$big.height()/$mask.height();
            
            $bigImg.css({
                left : -bigImgLeft,
                top : -bigImgTop
            })
        }
    })
})



// 定时器
var now = new Date();//当前时间
var end = new Date(now.getFullYear(),now.getMonth(),now.getDate()+2);//"结束时间"
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
    time.innerHTML = "距结束仅剩" +  d + "天" + h + ":" + m + ":" + s ;
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




//选择城市
$(function(){
    var dv=$(".menu div");
    dv.click(function(){
    var die=$(this);
    if(die.next("#muul").is(":hidden")){
           $("#muul").hide(1000);
       die.next("#muul").show(1000);
       }else{
    die.next("#muul").hide(1000);
      }
    })   
 })

 