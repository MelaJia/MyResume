$(function(){
		//添加滤镜
		$("#div2 img").addClass('alpha');
		//给第一张小图去掉滤镜
		$("#div2 img:eq(0)").removeClass('alpha');
		$("#div2 img").mouseover(function(){
			//当前鼠标所在小图的路径属性
			var path=$(this).attr("src");
			$("#img1").attr("src",path);
			//删除鼠标所在小图的滤镜，兄弟节点加上滤镜
			$(this).removeClass('alpha').siblings().addClass('alpha');
		});
		
		
		var  $lis = $("ul li:gt(4):not(:last)");
    	$lis.hide();
    	$(".showmore").click(function(){
    		if($lis.is(":hidden")){
    			$lis.show();
    			$(".showmore a span").css("background"," url(images/up.gif) no-repeat 3px 3px").text("显示部分");
    		}else{
    			$lis.hide();
    			$(".showmore a span").css("background"," url(images/down.gif) no-repeat 3px 3px").text("显示全部");
    		}
    	});
		
		
	});