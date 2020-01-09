// Script to open and close sidebar
function menu_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function menu_close() {
  document.getElementById("mySidebar").style.display = "none";
}

//Crearea form-ului

//CNP
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("name", "userid");
var formcnp = document.getElementById("formcnp");
formcnp.appendChild(x);

//Password
var x = document.createElement("INPUT");
x.setAttribute("type", "password");
x.setAttribute("name", "passid");
x.setAttribute("size", "12");
var formpass = document.getElementById("formpass");
formpass.appendChild(x);

//Username
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("name", "username");
x.setAttribute("size", "50");
var formusname = document.getElementById("formusname");
formusname.appendChild(x);

//Address
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("name", "address");
x.setAttribute("size", "50");
var formadd = document.getElementById("formadd");
formadd.appendChild(x);

//Telephone
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("name", "telephone");
var formtel = document.getElementById("formtel");
formtel.appendChild(x);

//Email
var x = document.createElement("INPUT");
x.setAttribute("type", "email");
x.setAttribute("name", "email");
var formemail = document.getElementById("formemail");
formemail.appendChild(x);

//Gender
//Male
var x = document.createElement("INPUT");
var y = document.createElement("SPAN");
var t = document.createTextNode("Male");
y.appendChild(t);
x.setAttribute("type", "radio");
x.setAttribute("name", "msex");
x.setAttribute("value", "Male");
var formmsex = document.getElementById("formmsex");
formmsex.appendChild(x);
formmsex.appendChild(y);

//Female
var x = document.createElement("INPUT");
var y = document.createElement("SPAN");
var t = document.createTextNode("Female");
y.appendChild(t);
x.setAttribute("type", "radio");
x.setAttribute("name", "fsex");
x.setAttribute("value", "Female");
var formfsex = document.getElementById("formfsex");
formfsex.appendChild(x);
formfsex.appendChild(y);

//Language
//English
var x = document.createElement("INPUT");
var y = document.createElement("SPAN");
var t = document.createTextNode("English");
y.appendChild(t);
x.setAttribute("type", "checkbox");
x.setAttribute("name", "en");
x.setAttribute("value", "English");
var formen = document.getElementById("formen");
formen.appendChild(x);
formen.appendChild(y);

//Non-English
var x = document.createElement("INPUT");
var y = document.createElement("SPAN");
var t = document.createTextNode("Non English");
y.appendChild(t);
x.setAttribute("type", "checkbox");
x.setAttribute("name", "nonen");
x.setAttribute("value", "Non-English");
var formnonen = document.getElementById("formnonen");
formnonen.appendChild(x);
formnonen.appendChild(y);

//Rate
var x = document.createElement("INPUT");
x.setAttribute("type", "range");
x.setAttribute("name", "rate");
var formrate = document.getElementById("formrate");
formrate.appendChild(x);



function formValidation()
{
	var uid = document.registration.userid;
	var passid = document.registration.passid;
	var uname = document.registration.username;
	var uadd = document.registration.address;
	var ucountry = document.registration.country;
	var utelephone = document.registration.telephone;
	var uemail = document.registration.email;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex; 

	
	if(userid_validation(uid,12,13)){
		
	if(passid_validation(passid,7,12)){
			
	if(allLetter(uname)){
				
	if(alphanumeric(uadd)){ 
					
	if(countryselect(ucountry)){
						
	if(allnumeric(utelephone)){
							
	if(ValidateEmail(uemail)){
								
	if(validsex(umsex,ufsex)){}}}}}}}}
	return false;

} 

function userid_validation(uid,mx,my){
	var uid_len = uid.value.length;

	var numbers = /^[0-9]+$/;
	
	if(!(uid.value.match(numbers))){
		alert("CNP must have numeric characters only");
		uid.focus();
		return false;
	}

	
	if (uid_len == 0 || uid_len > my || uid_len <= mx){
		alert("User Id should not be empty / length be "+my);
		uid.focus();
		return false;
	}

	return true;
}

function passid_validation(passid,mx,my){
	var passid_len = passid.value.length;
	
	
	if (passid_len == 0 ||passid_len >= my || passid_len < mx){
		alert("Password should not be empty / length be between "+mx+" to "+my);
		passid.focus();
		return false;
	}

	return true;
}

function allLetter(uname){ 
	var letters = /^[A-Za-z]+$/;
	
	if(uname.value.match(letters)){
		return true;
	}

	else{
		alert("Username must have alphabet characters only");
		uname.focus();
		return false;
	}
}

function alphanumeric(uadd){ 
	var letters = /^[0-9a-zA-Z]+$/;
	
	if(uadd.value.match(letters)){
		return true;
	}
	
	else{
		alert("User address must have alphanumeric characters only");
		uadd.focus();
		return false;
	}
}

	function countryselect(ucountry){
	
	if(ucountry.value == "Default"){
		alert("Select your country from the list");
		ucountry.focus();
		return false;
	}
	
	else{
		return true;
	}
}

function allnumeric(utelephone){ 
	var numbers = /^[0-9]+$/;
	
	if(utelephone.value.match(numbers)){
		return true;
	}
	
	else{
		alert("Telephone must have numeric characters only");
		utelephone.focus();
		return false;
	}
}

function ValidateEmail(uemail){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(uemail.value.match(mailformat)){
		return true;
	}
	
	else{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
} 

function validsex(umsex,ufsex){
	x=0;

	
	if(umsex.checked) {
		x++;
	} 
	
	if(ufsex.checked){
		x++; 
	}
	
	if(umsex.unchecked) {
		x--;
	} 
	
	if(ufsex.unchecked){
		x--; 
	}

	if(x==0){
		alert("Select Male/Female");
		umsex.focus();
		return false;
	}

	else if(x==2){
		alert("Canot be both Female and Male!");
		umsex.focus();
	}
	
	else{
		alert("Form Succesfully Submitted");
		window.location.reload()
		return true;
	}
}
