function validate(){
	var fname,lname,output,regx,flash;
	regx=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	fname=document.getElementById("fname");
	lname=document.getElementById("lname");
	email=document.getElementById("email");
	uname=document.getElementById("uname");
	pass=document.getElementById("pass");
	flash=document.getElementById("flash");
	output="hello "+fname+" "+lname+" you have submitted the data";
	if(fname.value=="")
		flash.innerHTML="First name cannnot be null";
	else if(! (/^[a-zA-Z]+$/).test(fname.value))
		flash.innerHTML="First name should only contain characters";
	else if(lname.value=="")
		flash.innerHTML="Last name cannnot be null";
	else if(! (/^[a-zA-Z]+$/).test(lname.value))
		flash.innerHTML="Last name should only contain characters";
	else if(uname.value=="")
		flash.innerHTML="Username cannnot be null";
	else if(pass.value=="")
		flash.innerHTML="Password cannnot be null";
	else if(pass.value.length<7)
		flash.innerHTML="Password length conatain least 7 letters";
	else if(email.value=="")
		flash.innerHTML="Email cannnot be null";
	else if(!regx.test(email.value))
		flash.innerHTML="Enter a valid email";
	else{
		flash.innerHTML="You have registered successfully";
		alert("You have registered successfully");
	}
}

function colorChange(id){
	id.style.color="blue";
}