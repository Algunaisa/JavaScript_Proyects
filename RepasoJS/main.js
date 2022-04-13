//alert('Hola Mundo!!');

/*//Estructuras de control
if(altura >= 190){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>No eres una persona alta</h1>';
}

for(var i = 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}*/

//Funciones con parametros y con paso de parametros
function MuestraMiNombre(nombre, altura){
  
    //Usando html
    /*var misDatos =   '<h1>Soy la caja de datos</h1>'
                        +'<h2>Mi nombre es: '+nombre+'</h2>'
                        +'<h3>Mido: '+altura+'</h3>';*/

    //Usando Template String (comillas invertidas 96)
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>
        `;

        return misDatos;
}

//Funcion con los datos a imprimir
function imprimir(){
    //Declarar variables
    /*var nombre = "Isa Flores";
    var altura = 189;
    var concatenacion = nombre + " " + altura;

    //Imprimir variables desde aqui en JC.
    document.write(concatenacion);*/

    //Usando un div y mostrar sin formato html
    var datos = document.getElementById("datos");
    //datos.innerHTML = concatenacion;

    datos.innerHTML = MuestraMiNombre("Belen Perez",180);
}

//Llamar a la funcion
imprimir();
    