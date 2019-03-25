function zhu(){
    $('#ce').click(function(){
        console.log(1);
        $.cookie("uname1",2,{expires : 7,path : "/"});
        $.cookie("uname2",$('#uname_2').val(),{expires : 7,path:"/"});
        $.cookie("uname3",$('#uname_3').val(),{expires : 7,path:"/"});
    })
}
zhu();