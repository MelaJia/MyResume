// JavaScript Docum
function a_check(){
	var o=document.getElementsByName("ic");
	for(var i=0;i<o.length;i++){
		if(document.getElementById("all").checked==true){
			o[i].checked=true;
		}else{
			o[i].checked=false;
			
		}
		}
}
function s_check(){
	var o=document.getElementsByName("ic");
	var j=0;
	for(var i=0;i<o.length;i++){
		if(o[i].checked==true){
			j=j+1;
			
		}if(j==o.length){
			document.getElementById("all").checked=true;
			}else{
			document.getElementById("all").checked=false;
			
		}
		}
}
	