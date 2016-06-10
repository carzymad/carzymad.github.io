$(function(){
	$("#index-img01").mouseover(function(){
		$("#index-img01").css("-webkit-filter", "blur(10px)")
		$("#after-img01").css("z-index", "3");
	})	
	$("#after-img01").mouseleave(function(){
		$("#index-img01").css("-webkit-filter", "blur(0px)");
		$("#after-img01").css("z-index", "1");
	})

	$("#index-img02").mouseover(function(){
		$("#index-img02").css("-webkit-filter", "blur(10px)")
		$("#after-img02").css("z-index", "3");
	})	
	$("#after-img02").mouseleave(function(){
		$("#index-img02").css("-webkit-filter", "blur(0px)");
		$("#after-img02").css("z-index", "1");
	})

	$("#index-img03").mouseover(function(){
		$("#index-img03").css("-webkit-filter", "blur(10px)")
		$("#after-img03").css("z-index", "3");
	})	
	$("#after-img03").mouseleave(function(){
		$("#index-img03").css("-webkit-filter", "blur(0px)");
		$("#after-img03").css("z-index", "1");
	})

	$("#index-img04").mouseover(function(){
		$("#index-img04").css("-webkit-filter", "blur(10px)")
		$("#after-img04").css("z-index", "3");
	})	
	$("#after-img04").mouseleave(function(){
		$("#index-img04").css("-webkit-filter", "blur(0px)");
		$("#after-img04").css("z-index", "1");
	})
})
	
/*-------------------------以上是首页小图片特效---------------------------*/	
	
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
		$(function(e){
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
		})
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


/*-----------------------  以下是登陆模态窗的代码  ----------------------*/

$(function() {
    var name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),
    tips = $( ".validateTips" );
 
    /*function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }*/
 
   /* function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "" + n + " 的长度必须在 " +
          min + " 和 " + max + " 之间。" );
        return false;
      } else {
        return true;
      }
    }*/
 
    /*function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }*/
	
    $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 450,
      width: 350,
      modal: true,
      buttons: {
        登陆: function() {
          /*var bValid = true;
          allFields.removeClass( "ui-state-error" );
 
          bValid = bValid && checkLength( name, "username", 3, 16 );
          bValid = bValid && checkLength( email, "email", 6, 80 );
          bValid = bValid && checkLength( password, "password", 5, 16 );
 
          bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "用户名必须由 a-z、0-9、下划线组成，且必须以字母开头。" );
          // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
          bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
          bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9" );
 
          if ( bValid ) {
            $( "#users tbody" ).append( "<tr>" +
              "<td>" + name.val() + "</td>" +
              "<td>" + email.val() + "</td>" +
              "<td>" + password.val() + "</td>" +
            "</tr>" );
            $( this ).dialog( "close" );
          }*/
		  $( this ).dialog( "close" );	
        },
        取消: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        allFields.val( "" ).removeClass( "ui-state-error" );
      }
    });
	
    $("#create-user").button().click(function() {
        $("#dialog-form").dialog( "open" );
    });
});

/*--------------------------- 以下是对登陆时的验证码代码的编写 -----------------------------*/

function getRandom(n){
	return Math.floor(Math.random()*n+1)
}

$(function(){
	var num1;
	var num2;
	$("#code_click").click(function(){
		var line = "images/code0";
		do
		{
			num2 = getRandom(4);
		}while (num1 == num2);

		var digter = num2 + 1 + ".png";
		line += digter;
		$("#_code").attr("src", line);
	})
})