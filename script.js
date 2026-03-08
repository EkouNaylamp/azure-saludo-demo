async function saludar() {

    const nombre = document.getElementById("nombre").value;

    const respuesta = await fetch(
        "https://saludo-function-josue-cuggf6g3ggczhmd4.canadacentral-01.azurewebsites.net/api/Saludo?nombre=" + nombre
    );

    const texto = await respuesta.text();

    document.getElementById("resultado").innerText = texto;
}
