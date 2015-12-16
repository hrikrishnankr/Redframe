function validate(){
	var fname,lname,output,regx,flash;
	regx=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	fname=document.getElementById("fname");
	lname=document.getElementById("lname");
	email=document.getElementById("email");
	uname=document.getElementById("uname");
	pass=document.getElementById("pass");
	flash_fname=document.getElementById("flash_fname");
	flash_lname=document.getElementById("flash_lname");
	flash_uname=document.getElementById("flash_uname");
	flash_pass=document.getElementById("flash_pass");
	flash_gender=document.getElementById("flash_gender");
	flash_email=document.getElementById("flash_email");
	succ=document.getElementById("succ");
	if(fname.value==""){
		flash_fname.innerHTML="First name cannnot be null";
		return false;
	}
	else if(! (/^[a-zA-Z]+$/).test(fname.value)){
		flash_fname.innerHTML="First name should only contain characters";
		return false;
	}
	else if(lname.value==""){
		flash_lname.innerHTML="Last name cannnot be null";
		return false;
	}
	else if(! (/^[a-zA-Z]+$/).test(lname.value)){
		flash_lname.innerHTML="Last name should only contain characters";
		return false;
	}
	else if(uname.value==""){
		flash_uname.innerHTML="Username cannnot be null";
		return false;
	}
	else if(pass.value==""){
		flash_pass.innerHTML="Password cannnot be null";
		return false;
	}
	else if(pass.value.length<7){
		flash_pass.innerHTML="Password length conatain least 7 letters";
		return false;
	}
	else if(email.value==""){
		flash_email.innerHTML="Email cannnot be null";
		return false;
	}
	else if(!regx.test(email.value)){
		flash_email.innerHTML="Enter a valid email";
		return false;
	}
	else{
		succ.innerHTML="You have registered successfully";
		alert("You have registered successfully");
		return true;
	}
}

function colorChange(id){
	id.style.color="blue";
}