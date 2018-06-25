function userText(){
	var user = document.getElementById("username").value;
	var pas = document.getElementById("password").value;
	if(user=='陈佳虹'&&pas=='1'){
		alert("登录成功！");
		return true;
		// window.location.href='./main.html';
		// return header("location:jump.php?code=1&url=../main.html&msg=登录成功为您跳转到主页.");

	}else{
		
	  alert("用户名或密码错误");
	  return false;
	
	}
	
 	
}
function checkname(){
	var name = document.getElementById("username2").value;
	var reg = /^[\u4E00-\u9FA5]{3,6}$/;  //用户名是中文3-6位
	var span1 = document.getElementById("span1");
	if (!reg.test(name)) {
		span1.innerHTML="用户名必须中文，并且是3-6位";
		return false;
	}else{
		span1.innerHTML="";
		return true;
	}

}
function checkpas(){
	var password = document.getElementById("password2").value;
	var reg = /^[a-zA-Z0-9]{4,8}$/;
	var span2 = document.getElementById("span2");
	if (!reg.test(password)) {
		span2.innerHTML="密码必须是4-8位";
		return false;
	}else{
		span2.innerHTML="";
		return true;
	}

}
function checkpas2(){
	var pas = document.getElementById("pass2").value;
	var password = document.getElementById("password2").value;
	if (pas!=password) {
		span3.innerHTML="两次密码不一致，请重新输入";
		return false;
	}else{
		span3.innerHTML="";
		return true;
	}

}
function checkemail(){
	var email = document.getElementById("email").value;
	var reg = /^[a-zA-Z]+[a-zA-Z0-9]*@([a-zA-Z0-9]+\.)+(com|cn)$/;
	var span4 = document.getElementById("span4");
	if (!reg.test(email)) {
		span4.innerHTML = "email地址必须是字母开始并且***@***.***.com或***@***.***.cn这种格式";
		return false;
		
	}else{
		span4.innerHTML="";
		return true;

	}

}
function checkbox(){
	var span5 = document.getElementById("span5");
	if(document.getElementById("cc").checked==false){
		span5.innerHTML = "必须同意协议";
		return false;
		}else{
		span5.innerHTML = "";
		return true;
			
			}
}
function check(){
	if (checkname()&&checkpas()&&checkpas2()&&checkemail()&&checkbox()){
		 // return true;
	alert("完成注册！");
	return true;
	// header("location:jump.html?code=1&url=main.html&msg=登录成功为您跳转到主页.");
		
	}else{
		alert("注册失败1");
		return false;
		// alert('用户名或密码错误!请重新登录！');parent.location.href='login.php';
		// return false;
		
	}

}

