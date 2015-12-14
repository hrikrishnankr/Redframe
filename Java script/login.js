function loginValidate(){
	var uname,pass,flash;
	flash=document.getElementById("flash")
	uname=document.getElementById("uname");
	pass=document.getElementById("pass");
	if(uname.value=="")
		flash.innerHTML="Username cannot be null";
	else if(pass.value=="")
		flash.innerHTML="Password cannot be null";
}