window.onload = init;
var arr1=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
var arr2=["1","2","3","4","5"];
var index=0;
//上一张轮播图的数组下标
var oldIndex=-1;
var time=null;
var x,y;
	function init(){
		var div2 = document.getElementById("div2");
		var numberdiv=div2.getElementsByTagName("div");
		for(var i=0;i<numberdiv.length;i++){
		 numberdiv[i].onclick=fun1;
		};
		update();
		
		
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
	function update(){
		//切换图潘
		var img1 = document.getElementById("img1");
		img1.src=arr1[index];
		//切换广告
		var div2 = document.getElementById("div2");
		var numberdiv = div2.getElementsByTagName("div");
		numberdiv[index].innerHTML = arr2[index];
		//切换广告样式
		numberdiv[index].className = "over";
		
		if(oldIndex!=-1){
			numberdiv[oldIndex].innerHTML=oldIndex+1;
			numberdiv[oldIndex].className = "number";
		
		}
		//将图片
		oldIndex=index;
        index++;
		if (index==arr1.length) {
			index=0;
		}
		time=window.setTimeout("update()",2000);
	}
	function fun1(){
		//如果是当前动画，则不跳转
		if (this.className=="over") {
			return;
		}
		window.clearTimeout(time);
		index=Number(this.innerHTML)-1;
		update();


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
