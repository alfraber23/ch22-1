console.log("Sesion Js03");

const datosUsuario = {nombre:"Jessica", ciudad:"CDMX"};

// Declaracion de bloque
{
    /* 
    Esto es una declaracion de bloque
    en donde las variables declaradas (let y const)
    solo tendran alcance dentro del bloque o
    bloque anidadosdentro del bloque
    */
    const datosUsuario = {nombre:"Wicho", ciudad:"Acuascalientes"};
    console.log(`${datosUsuario.nombre} `);
    
}

console.log(`${datosUsuario.nombre} nos saluda desde ${datosUsuario.ciudad}`);

/* 
    la variable numPersonas no esta definida
    console.log(`En este momento hay ${numPersonas} escuchando rolitas de shakira`)

    Condicional if
    Sintaxis
    if(Condicion verdadera) instruccion;
*/

const respuesta = true; //confirm("Te gusta shakira?");
console.log(respuesta);
let mensaje="hola";

if (respuesta) {
    let mensaje="Entonces te pongo WakaWaka";
    mensaje="Te fe-li-ci-to que bien actuas";
}
else
    mensaje="Entonces te pongo su chambelan"
console.log(mensaje);

//operador ternario
//sintaxis: condicion? condicion_verdadera: condicion_falsa;

let teamFrio = true; //confirm("Te gausta el frio?");
//let mensajeTernario = teamFrio ? "hielito":"ponche";
//console.log(`Te voy a servir ${mensajeTernario}`);

console.log(`Te voy a servir: ${teamFrio ? "hielito":"ponche"}`);

let cantante="Pique";
console.log(`tu reloj es: ${ cantante==='Shakira' ? "Rolex": cantante==='Pique' ?"Casio":"el sol"}`);

let nombrePersona="Sergio"
let marcaReloj;
if (cantante==='Shakira') {
    marcaReloj="Rolex";
} else if(cantante==='Pique'){
    marcaReloj="Casio";
} else if(cantante==='Sergio'){
    marcaReloj="El sol";
}else
    marcaReloj="Uno de cars";
console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);


let mes=prompt("De que mes quieres saber la estacion?");
const mesNombre=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
                    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
switch (Number(mes)) {
    case 1:
        console.log("En " + mesNombre[0] + " la estacion del año es Invierno");
        break;
    case 2:
        console.log("En " + mesNombre[1] + " la estacion del año es Invierno");
        break;
    case 3:
        console.log("En " + mesNombre[2] + " la estacion del año es Primavera");
        break;
    case 4:
        console.log("En " + mesNombre[3] + " la estacion del año es Primavera");
        break;
    case 5:
        console.log("En " + mesNombre[4] + " la estacion del año es Primavera");
        break;
    case 6:
        console.log("En " + mesNombre[5] + " la estacion del año es Verano");
        break;
    case 7:
        console.log("En " + mesNombre[6] + " la estacion del año es Verano");
        break;
    case 8:
        console.log("En " + mesNombre[7] + " la estacion del año es Verano");
        break;
    case 9:
        console.log("En " + mesNombre[8] + " la estacion del año es Otoño");
        break;
    case 10:
        console.log("En " + mesNombre[9] + " la estacion del año es Otoño");
        break;
    case 11:
        console.log("En " + mesNombre[10] + " la estacion del año es Otoño");        
        break;
    case 12:
        console.log("En " + mesNombre[11] + " la estacion del año es Invierno");        
        break;
    default:
        console.log("Ese no es un mes valido");        
        break;
}

//---------Refactorizando, usando un operador ternario
function factorial( number ){
    if( number < 1) 
        return 1;
    return number * factorial( number - 1 )
}
console.log("Factorial 5 = " + factorial(5) ); //120





