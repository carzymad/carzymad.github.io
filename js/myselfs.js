/*  网页小助手的代码  */
/*$(function(){
	$("#float-son").hide();
})*/
$(function(){
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
})
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
			flag = true;
		}
	});
	$("#top").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});
	$("#index").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("返回首页");
			flag = true;
		}
	});
	$("#index").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});
	$("#bottom").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("返回底部");
			flag = true;
		}
	});
	$("#bottom").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});

	$("#gotomessage").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("消息中心");
			flag = true;
		}
	});
	$("#gotomessage").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});

	$("#gotonavigation").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("网页导航");
			flag = true;
		}
	});
	$("#gotonavigation").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});

	$("#gotomessage").mouseleave(function(){
		$("#hint").hide();
		flag = true;
	});

	$("#closeassistant").mouseover(function(e){
		if (flag)
		{
			$("#hint").show().css({
				"top": e.clientY+20,
				"left": e.clientX+20
			}).text("关闭侧边栏");
			flag = true;
		}
	});
	$("#closeassistant").mouseleave(function(){
		$("#hint").hide();
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
