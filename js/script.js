function login(){

let password=document.getElementById("pass").value;

if(password=="admin123"){

document.getElementById("panel").style.display="block";

}else{

alert("Wrong Password");

}

}