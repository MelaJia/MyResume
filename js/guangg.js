// JavaScript Document
	window.onload=init;
	var x,y;
	function init(){
		var div1=document.getElementById("div3");
		if(div1.currentStyle){
			x=div1.currentStyle.left;
			y=div1.currentStyle.top;
		}else{
			x=document.defaultView.getComputedStyle(div1,null).left;
			y=document.defaultView.getComputedStyle(div1,null).top;

		}

		x=parseInt(x);
		y=parseInt(y);
		
	}
	window.onscroll=function(){

		var div1=document.getElementById("div3");
		if(document.body.scrollTop){
			div1.style.left=x+parseInt(document.body.scrollLeft)+"px";
			div1.style.top=x+parseInt(document.body.scrollTop)+"px";
				
		}else{
			div1.style.left=x+parseInt(document.documentElement.scrollLeft)+"px";
			div1.style.top=x+parseInt(document.documentElement.scrollTop)+"px";
		}

	}

	function advclose(){
		var div1=document.getElementById("div3");
		document.body.removeChild(div1);
		
	}