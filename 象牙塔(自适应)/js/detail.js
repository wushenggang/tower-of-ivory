$(document).ready(function(){
    var bodyHeight=$("body").height();
    var barHeight=$(".left-bar");
    //设置左边bar的高度
    barHeight.css({"height":bodyHeight-104+"px"});
    //设置各个展品块的高度
    var resizeMethod=function(){
        if(document.body.clientWidth>768){
            var row1Height=$("#row1").height();
            var row2Height=$("#row2").height();
            var row3Height=$("#row3").height();
            $("#cont-1").css({"height":row1Height+"px"});
            $("#cont-2").css({"height":row1Height+"px"});
            $("#cont-3").css({"height":row2Height+"px"});
            $("#cont-4").css({"height":row2Height+"px"});
            $("#cont-5").css({"height":row3Height+"px"});
            $("#cont-6").css({"height":row3Height+"px"});
        }
    };
    var resizeTitleWidth=function(){
           if(document.body.clientWidth>768){
               var width=$("#cont-1").find(".big-img").width();
               var height1=$("#cont-1").find(".big-img").height();
               var height2=$("#cont-2").find(".big-img").height();
               var height3=$("#cont-3").find(".big-img").height();
               var height4=$("#cont-4").find(".big-img").height();
               var height5=$("#cont-5").find(".big-img").height();
               var height6=$("#cont-6").find(".big-img").height();
                $("#title-1").css({"width":width+"px",
                                     "margin-top":height1+20+"px"
                });
               $("#title-2").css({"width":width+"px",
                   "margin-top":height2+20+"px"
               });
               $("#title-3").css({"width":width+"px",
                   "margin-top":height3+20+"px"
               });
               $("#title-4").css({"width":width+"px",
                   "margin-top":height4+20+"px"
               });
               $("#title-5").css({"width":width+"px",
                   "margin-top":height5+20+"px"
               });
               $("#title-6").css({"width":width+"px",
                   "margin-top":height6+20+"px"
               });
               $(".all-desc").css({"width":width+"px"});
           }
    }
    resizeTitleWidth();
   resizeMethod();
})