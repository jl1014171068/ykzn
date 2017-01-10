//首页的滑动效果
//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$("#jsNav .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				$("#js img").eq(i).fadeIn("slow").siblings("img").hide();
				$(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
				return false;
			});
		});
		
		var pg = function(flag){
			if (flag) {
				if (curr == 0) {
					todo = 2;
				} else {
					todo = (curr - 1) % 7;
				}
			} else {
				todo = (curr + 1) % 7;
			}
			$("#jsNav .trigger").eq(todo).click();
		};
		
		//ǰ
		$("#prev").click(function(){
			pg(true);
			return false;
		});
		
		//
		$("#next").click(function(){
			pg(false);
			return false;
		});
		
		//Զ
		var timer = setInterval(function(){
			todo = (curr + 1) % 7;
			$("#jsNav .trigger").eq(todo).click();
		},3000);
		
		$("#js,#prev,#next").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % 7;
					$("#jsNav .trigger").eq(todo).click();
				},3000);			
			}
		);
	})();
});
//]]>

//单击微信


$("document").ready(function(){
  $("#weix").mouseover(function() {
    $("#weixin").css("display","block");
    });
    
    $("#weix").mouseout(function() {
    $("#weixin").css("display","none"); 
    });
	$("#weix").click(function() {
    $("#weixin").css("display","block");
    });
});
