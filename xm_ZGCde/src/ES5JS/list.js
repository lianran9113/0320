    //定时器
    var nowdate = new Date();	
    var fuldate = new Date(nowdate.getFullYear(),nowdate.getMonth(),nowdate.getDate()+5);    
    setInterval(function(){
    var nowDate = new Date();
    var cdate = fuldate - nowDate;
    var day = parseInt(cdate/86400000);
    if(day < 10) {
      day = "0" + day;
      } else {
      day = day;
      }
    var hours = parseInt(cdate%86400000/3600000);
    if(hours < 10) {
      hours = "0" + hours;
      } else {
        hours = hours;
      }
    var minutes = parseInt(cdate%86400000%3600000/60000);
    if(minutes < 10) {
      minutes = "0" + minutes;
      } else {
        minutes = minutes;
      }
    var seconds = parseInt(cdate%86400000%3600000%60000/1000);
    if(seconds < 10) {
      seconds = "0" + seconds;
      } else {
        seconds = seconds;
      }   
      $(".shengyu span").html("剩余：<font color=red>" + day + "</font>天<font color=red>"+ hours + "</font>小时<font color=red>" + minutes + "</font>分钟<font color=red>" + seconds + "</font>秒");
})


//动态添加内容
window.onload = function(){
    //利用ajax获取服务器上的数据
   let defferent =  $.ajax({
      type:"get",
      url:"src/sass/data.json",
      async:true
    }); 
    defferent.done(function(res){
       
      let titleStr = "";
      let str = ""
   //   console.log(res.classify003)
       for(let attr in res){
         titleStr += `<span classify=${attr}>${res[attr].name}</span>`
          arr = res[attr].list;
       
         for( var i = 0 ; i < arr.length; i++ ){
         // console.log(arr[i].id)
            str += `<li class="san_li">
              <a href="shoping.html?pid=${arr[i].id}&classify=${attr}">
           
              <div class="pic_1">
                  <img src="images/${arr[i].src}" alt="">		
              </div>
      
              <div class="dp">
              <p class="pp">ROG STRIX-Force RTX 2080-O8G</p>
              <p class="ppp">RW推荐，信仰猛禽】全新超频软件，RGB神光同步，升级镜面直触感，官方原盒正品</p>
          </div>      
            <div class="dh">    
              <div class="home">
                  <span class="hh">${arr[i].nowprice}</span>&nbsp;&nbsp;
                  <span class="hhh">${arr[i].oldprice}</span>&nbsp;&nbsp;
                  <span class="hhhh">${arr[i].cj}</span>
              </div>      
                    <button data-id=${arr[i].id} data-name=${arr[i].name} data-src=${arr[i].src} data-nowprice=${arr[i].nowprice}>马上抢</button>              
                  </div> 
            <div class="shengyu">
                  <span>我是一个定时器</span>	
            </div>		
            </a>
          </li>`
         }
       }
       $(".nav").html(titleStr);   
       $(".san").html(str)
       $(".nav span:first").addClass("class");//为第一个span添加一个样式类///////////////////////////////////////////////////
       $(".nav").on("click" , "span" , function(){
       $(this).addClass('class').siblings().removeClass('class');   
      // console.log(  $(this)) 
        //获取当前操作的商品类别名称 id
        let classify = $(this).attr("classify");
        console.log(classify)
        let proList = res[classify].list;
        let strCon = "";
        console.log(proList)
 
        for( let i = 0 ; i < proList.length ; i++ ){
          let pro = proList[i];
         // console.log(pro)
          strCon += `<li class="san_li">
          <a href="shoping.html?pid=${pro.id}&classify=${classify}">
          <div class="pic_1">
              <img src="images/${pro.src}" alt="">		
          </div>  
          <div class="dp">
          <p class="pp">ROG STRIX-Force RTX 2080-O8G</p>
          <p class="ppp">RW推荐，信仰猛禽】全新超频软件，RGB神光同步，升级镜面直触感，官方原盒正品</p>
      </div>  
        <div class="dh">    
          <div class="home">
              <span class="hh">${pro.nowprice}</span>&nbsp;&nbsp;
              <span class="hhh">${pro.oldprice}</span>&nbsp;&nbsp;
              <span class="hhhh">${pro.cj}</span>
          </div> 
       </a>                 
        <button data-id=${pro.id} data-name=${pro.name} data-src=${pro.src} data-nowprice=${pro.nowprice}>加入购物车</button>
       </div>        	
      </li>`
   }

        
//////////////////////////////////////////准备添加购车
        //显示对应内容列表
        $(".san").html( strCon );
      })
    })
  
 //点击按钮，委托添加事件
 $(".san").on("click","button",function(){
//   alert()
//  return false;
  let arr = [];
  let flag = true;//假设
    
//  console.log($(this).data("nowprice"),$(this).data("src"))
      let json = {
        //"id" : $(this).attr("pid"),
 				// "src" : 2,
 				// "name" :5,
         // "price" :8,
         "id" : $(this).data("id"),
 				"src" : $(this).data("src"),
 				"name" :$(this).data("name"),
 				"nowprice" :$(this).data("nowprice"),
 				"count" : 1
 				
      };
        // console.log(json,$(this).data())
        //return false;
//取出storage中的数据
      let storageTxt = localStorage.getItem("prolist");
      if( storageTxt != null ){
        arr = JSON.parse(storageTxt); 
        //判断当前加入的商品，是否存在
          // for(let i = 0 ; i < arr.length ; i++){
          //     if(json.id == arr[i].id && json.name == arr[i].name){
          //       //说明商品存在 数量加1
          //       arr[i].count++;
          //       break;

          //     }
          // }
          arr.forEach((pro) =>{
            if(json.id == pro.id && json.name == pro.name){
              //说明商品存在 数量加1
              pro.count++;
              flag = false;
              return;
            }
          })
      }
      if(flag){
            arr.push(json);
          }

      localStorage.setItem("prolist" , JSON.stringify(arr));
      if( !confirm( "跳转到购物车，请按取消按钮" ) ){
        location.href = "shoping.html"
      }
    } )
  }

   






  


 //今日团提示
 var list = document.getElementsByClassName("lili");
	$(list).click(function(){
		$(this).addClass("li_mo").siblings().removeClass("li_mo");
	})




// //悬浮
// window.onload = function(){
//   var h = document.getElementById("xuan").offsetHeight;
//   var nav = document.querySelector("#fu");
//   //获取头部的高度

//   //操作滚动条事件
//   window.onscroll = function(){
//     //获取页面垂直方向向上滚走的距离
//     var sTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if( sTop > h ){
//       //吸顶原理 ： 固定定位
//       nav.style.position = "fixed";
//       nav.style.top = 0;
//     }else{
//       //取消吸顶
//       nav.style.position = "";
//     }
//   }
// }