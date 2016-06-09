/*  网页小助手的代码  */
/*$(function(){
	$("#float-son").hide();
})*/

/*
 // 注释掉，因为会有闪动的BUG，所幸直接换个方法
$(function(){
	$("#float-son").mouseout(function(){
		if ($("#float-son").is(':hidden'))
		{
			$("#float-son").show();
		}
		else if (!$('.div1').is(':hidden'))
		{
			$("#float-son").hide();
		}
	})
})*/
/*  以上是网页小助手的代码  */

var can_hide = true;

$(function(){
	$("#float-son").hide();
})

/*$(function(){
	$("#float").click(function(){
		if ($("#float-son").is(':hidden'))
		{
			$("#float-son").show();
		}
		else if (!$('.div1').is(':hidden'))
		{
			$("#float-son").hide();
		}
		
	})
})*/

$(function(){
	$("#float").mouseover(function(){
		if ($("#float-son").is(":hidden"))
		{
			$("#float-son").slideDown();
		}
		/*else if (!$('.div1').is(':hidden'))
		{
			$("#float-son").hide();
		}*/
		
	})
})

$(function(){
	$("#float").mouseleave(function(){
		/*if ($("#float-son").is(':hidden'))
		{
			$("#float-son").show();
		}*/
		if (!$('.div1').is(":hidden") && can_hide)
		{
			$("#float-son").slideUp();
		}
	});
});



$(function(){
	var str1 = "";
	var str2 = "";
	var pointX = 0;
	var pointY = 0;
	var flag = true;

	$("#hint").hide();
	
	$("#top").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("返回顶部");
			$("#top img").attr("src", "images/gotop02.png");
			flag = false;
		}
	});
	$("#top").mouseleave(function(){
		$("#hint").hide();	
		$("#top img").attr("src", "images/gotop.png");
		flag = true;
	});
	$("#index").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("返回首页");
			$("#index img").attr("src", "images/index02.png");

			flag = true;
		}
	});
	$("#index").mouseleave(function(){
		$("#hint").hide();
		$("#index img").attr("src", "images/index.png");
		flag = true;
	});
	
	$("#gotomessage").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("消息中心");
			$("#gotomessage img").attr("src", "images/gotomessage02.png");
			flag = true;
		}
	});
	$("#gotomessage").mouseleave(function(){
		$("#hint").hide();
		$("#gotomessage img").attr("src", "images/gotomessage.png");
		flag = true;
	});
	
	$("#gotonavigation").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("网页导航");
			$("#gotonavigation img").attr("src", "images/gotonavigation02.png");
			flag = false;
		}
	});
	$("#gotonavigation").mouseleave(function(){
		$("#hint").hide();
		$("#gotonavigation img").attr("src", "images/gotonavigation.png");
		flag = true;
	});

	

	$("#closeassistant").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("关闭侧边栏");
			$("#closeassistant img").attr("src", "images/close02.png");
			flag = true;
		}
	});
	$("#closeassistant").mouseleave(function(){
		$("#hint").hide();
		$("#closeassistant img").attr("src", "images/close.png");
		flag = true;
	});
	
	$("#_fixed").mouseover(function(e){
		if (flag)
		{
			if (can_hide)
			{
				$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
				}).text("固定侧边栏");
			}
			else
			{
				$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
				}).text("取消固定侧边栏");
			}
			
			if (can_hide)
			{
				$("#_fixed img").attr("src", "images/fixed02.png");
			}
			else
				$("#_fixed img").attr("src", "images/fixed04.png");
			flag = true;
		}
	});
	$("#_fixed").mouseleave(function(){
		$("#hint").hide();
		if (can_hide)
		{
			$("#_fixed img").attr("src", "images/fixed.png");
		}
		else
			$("#_fixed img").attr("src", "images/fixed03.png");

		flag = true;
	});
	$("#_fixed").click(function(){
		if (can_hide)
		{
			can_hide = false;
			$("#_fixed img").attr("src", "images/fixed03.png");
		}
		else
		{
			can_hide = true;
			$("#_fixed img").attr("src", "images/fixed.png");
		}
	})

	$("#bottom").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("返回底部");			
			$("#bottom img").attr("src", "images/gobottom02.png");
			flag = true;
		}
	});
	$("#bottom").mouseleave(function(){
		$("#hint").hide();
		$("#bottom img").attr("src", "images/gobottom.png");
		flag = true;
	});


	/*$("#float").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("点击打开侧边栏");
			flag = true;
		}
	});
	$("#float").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});*/
});

$(function(){
	$("#closeassistant").click(function(){
		if ($("#float-son").is(":hidden"))
		{
			$("#float-son").hide();
		}
	})
})
