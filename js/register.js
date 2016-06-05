var flag = true;
$(function(){
	$("#exampleInputEmail1").keyup(function(){
		var line = "";				
		
		line = $("#exampleInputEmail1").val();
		
		if (line != "由6-12位数字、大小写字母及下划线组成"?)
		{
			var num = line.length;
			if (num < 6)
			{
				if (flag)
				{
					$("#label01").html("<font size='2' color='#cc0000'><strong>账号长度过短</strong></font>");
					flag = false;
				}
			}
			else
			{
				$("#label01").html("<font size='2' color='#9a9a9a'>??-12λ���֡���Сд��ĸ���»������</font>");
				flag = true;
			}
		}
	});
});

var flag2 = true;

$(function(){
	$("#exampleInputPassword1").key(function(){
		var line = "";

		line = $("#exampleInputPassword1").val();

		var num = line.length;
		if (num < 6)
		{
			if (flag2)
			{
				$("#label02").html("<div style='width: 100px; height: 10px; background-color: #cc3300;'></div><font size='2' color='#cc0000'><strong>���볤�ȹ���</strong></font>")
			}
		}
		else if (num < 10)
		{
			if (flag2)
			{
				$("#label02").html("<div style='width: 100px; height: 10px; background-color: #cc3300;'></div><font size='2' color='#cc0000'><strong>���볤���ʵ�</strong></font>")
			}
		}
		else if (flag > 14)
		{
			$("#label02").html("<div style='width: 100px; height: 10px; background-color: #cc3300;'></div><font size='2' color='#cc0000'><strong>���볤������</strong></font>")
		}
	})
})