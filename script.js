async function saludar(){

const nombre = document.getElementById("nombre").value;

if(!nombre){
alert("Ingrese su nombre");
return;
}

const url = "https://TU-FUNCTION.azurewebsites.net/api/saludo?nombre=" + nombre;

try{

const response = await fetch(url);

const data = await response.json();

document.getElementById("resultado").innerText = data.mensaje;

}catch(error){

document.getElementById("resultado").innerText = "Error al conectar con la API";

}

}
