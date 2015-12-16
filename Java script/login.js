function loginValidate(){
	var uname,pass,flash;
	flash_uname=document.getElementById("flash_uname");
	flash_pass=document.getElementById("flash_pass");
	uname=document.getElementById("uname");
	pass=document.getElementById("pass");
	if(uname.value==""){
		flash_uname.innerHTML="Username cannot be null";
		return false;
	}
	else if(pass.value==""){
		flash_pass.innerHTML="Password cannot be null";
		return false;
	}
}