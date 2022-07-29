function login(){

var user, pass

user = document.getElementById("usuario").value;
pass = document.getElementById("pass").value;

if(user == "Nelback" && pass == "123"){
window.location=("pagina/Minecraft.html"); 
}
else {

alert("usuario o password incorrecto.");

}
}