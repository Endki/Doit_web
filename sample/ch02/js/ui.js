$(document).ready(function(){
    $("#container").addClass("start");
	$("nav li").click(function(){
        $("#container").css("max-width","100%");
        var id=$(this).attr("data-rol");
        // alert("click event");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(".content").removeClass("prev this next");
        $(".content").css("width","100%");
        $("#"+id).addClass("this").prevAll().addClass("prev");
        // $("#"+id).addClass("this").css("max-width","100%");
        $("#"+id).nextAll().addClass("next");
        // alert($(this).attr("data-rol"));
    });
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        // $(".content").css("width","25%");
        $("#container").css("max-width","1200px");
    });
});

