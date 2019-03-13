var i = 0;
var j = 0;
var timer = null;
var currentIndex = 0;
var nextIndex = 1;
//function auto(){
//    $(".box_nav ul li").eq(i).find("p").animate({
//        width : "70px"
//    },3900, function(){
//        i++;
//        $(this).css("width", '0px');
//        if(i > 3){
//            i = 0;
//        }
//        $(".imgList li").eq(i).fadeIn(300).siblings().fadeOut(300);
//    });
//}
                            //轮播图
function move(){
    $(".imgList li").eq(currentIndex).fadeOut(500);
    $(".imgList li").eq(nextIndex).fadeIn(500);
    $(".box_nav ul li ").eq(currentIndex).find("p").removeClass("current");
    $(".box_nav ul li ").eq(nextIndex).find("p").addClass("current");
    currentIndex = nextIndex;
    nextIndex++;
    if(nextIndex > 3) nextIndex = 0
}
timer = setInterval("move()", 3000);

$(function(){
                        //顶部导航栏选择变色
    var select = $("#top_nav .nav_lists a");
    select.eq(j).find("div").addClass("select");
    for(var i = 0;i < select.length; i++){
        var a= select[i];
        a.index = i;
        a.onclick = function(){
            for(var j = 0;j < select.length;j++){
                select.eq(j).find("div").removeClass("select");
            }
            select.eq(this.index).find("div").addClass("select");
        }
    }
                        //回到顶部
    $("#right_fixed .back_top").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 300)
    });
                        //合作伙伴商标显示
    var hz_height = $(".all_contact_con").offset().top;
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop > hz_height){
            $("#partner .partner-lists>div>div").css("display","block")
        }
        else {
            $("#partner .partner-lists>div>div").css("display","none");
        }
    })
});
