$(function(){
	$("table.tb tr:first").addClass("tableh");
	$("table.tb tr:even:not(:first)").addClass("eventS");
	$("table.tb tr:not(:first)").mouseover(function(){
		$(this).addClass("over");
		}).mouseout(function(){
			$(this).removeClass("over")
			});
	});