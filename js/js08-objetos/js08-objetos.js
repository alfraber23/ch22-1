console.log("Sesion Js08 objetos");

// crear un objeto
const frutasColor = {
    fresa: "rojo",
    pinia: "amarillo",
    pepino: "verde",
    naranja: "verde amarillo"
}

//formas de leer un objeto
console.log(frutasColor.fresa);
console.log(frutasColor["pepino"]);
const colorFrutaNaranja = "naranja";
console.log(frutasColor[colorFrutaNaranja]);//verde-amarillo

//modificar un valor
frutasColor[colorFrutaNaranja] = "amarillo-anaranjado";
console.log(frutasColor[colorFrutaNaranja]); //amarillo-anaranjado

//iterando objetos
for (const frutaColor in frutasColor) {//leer claves
    console.log("clave ", frutaColor, "valor ", frutasColor[frutaColor]);
    
}

//uso de symbol
const oculto = Symbol();

const datosAutomovil = {
    modelo: "vochito",
    fabricante: "VW",
    [oculto]: 250_000
}

for (const clave in datosAutomovil) {
    console.log("Dato ", datosAutomovil[clave]);   
}

console.log("Dato oculto ", datosAutomovil[oculto]);

localStorage.setItem("automovil", JSON.stringify(datosAutomovil));

// Solicitud de Jaime
const words = ['hello', 'world', 'javascript'];
const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizedWords);  // ["Hello", "World", "Javascript"]

//----------------------------------------------------------------------------
const myArray = [5,7,8,14];

//creando un arreglo usando el constructor
const myArrayWithConstructor = new Array(5,7,8,14);
//leyendo la propiedad del objeto myArray
//propiedad longitud
//las propiedades son caracteristicas del objeto, estos no llevan parentesis
myArray.length //4

//usando el metodo para extraer 
console.log(myArray.slice(1,3));//[7,8]











