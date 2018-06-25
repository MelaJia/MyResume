// JavaScript Document
 $(function(){
    	$("input[type='button']").click(function() {
//    		var name = $("input[type='text']").val();
    		var mes = $("textarea").val();
    		var $li = $("  <li><p>"+mes+"</p></li>");
    		$("ul").append($li);
    	});
    });
    $(function(){
    $(this).blur(function() {
    	if (this.value == "") {
    		this.value = defaultVal;
    	}
    });
    });
	
	$(function(){
			$("textarea").bind("keyup", function() {

				
				var count = 500-$(this).val().length;
				
				if(count>0){
					$("span").html("你还可以输入<span style='color: red'>"+count+"</span>个字符");

				}else{
					$("span").html("不可以再输入字符");
					$("textarea").attr("disabled","true");
				}

			});

		});
   