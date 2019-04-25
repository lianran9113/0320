

$("h3").click(function(){
    $(this).prev().css({"border-color":"#ccc"});
    $(this).css({"border-color":"red"});
})
$("h2").click(function(){
    // alert(2);
    $(this).next().css({"border-color":"#ccc"});
    $(this).css({"border-color":"red"});
})

function deng(){
    $("#btn").click(function(){
        console.log($.cookie("uname1"));
        $.cookie("uname2");
        $.cookie("uname3");
        // if($.cookie("uname2") == $('#inp').val()){
        //     location.href = 'index.html';
        // }else{
        //     alert('你输入有误！');
        //     location.href = "denglu.index";
        // }

    })
}
deng();