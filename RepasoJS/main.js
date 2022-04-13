//alert('Hola Mundo!!');

var nombre = "Isa Flores";
var altura = 185;

var concatenacion = nombre + " " + altura;
//document.write(concatenacion);
var datos = document.getElementById("datos");

//Template String
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
    `;

