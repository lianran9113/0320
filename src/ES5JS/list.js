
    var nowdate = new Date();
	
    var fuldate = new Date(nowdate.getFullYear(),nowdate.getMonth(),nowdate.getDate()+365);
    
    setInterval(function(){
    var nowDate = new Date();
    var cdate = fuldate - nowDate;
    var day = parseInt(cdate/86400000);
    var hours = parseInt(cdate%86400000/3600000);
    var minutes = parseInt(cdate%86400000%3600000/60000);
    var seconds = parseInt(cdate%86400000%3600000%60000/1000);
      $(".shengyu span").html("剩余：" + day + "天"+ hours + "小时" + minutes + "分钟" + seconds + "秒");
})

