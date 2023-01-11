console.log("Sesion Js02");

/* 
funciones declaradas / funciones definidas
function declaration / function statement

una caracteristisca que tiene las funciones declaradas
es que tienen hoisting (elevacion)

*/

function multiplica(a,b) {
    return a*b;
}

console.log("El resultado de 5 * 10 es: " + multiplica(5,10));

/* 
Funciones expresadas

Las funciones expresadas o function expression son funciones
que son declaradas dentro de la asignacion de una variable.
Estas funciones pueden ser anonimas  (que no tiene nombre).
Las funciones expresadas no tienen hoisting
*/


/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
*/
const suma =  function (a,b){
    const result = a+b;
    return result;
};

console.log("La sumatoria de 4 + 6 es: " + suma(4,6));

/* 
Funciones autoinvocadas

Las funciones autoinvocadas (selft-invoking functions)
son funciones que se ejecutan en su defenicion.
Pueden ser anonimas.
*/

(function  saludo(){
    console.log("Hola, me estoy autoinvocando");
})();

/* 
Funciones flecha

Una funcion flecha o lo que es arrow function son similares
a las funciones expresadas pero no requiere la palabra function.
Ademas si solo tiene un instruccion y es el retorno no requiere
la instruccion return ni las llavaes {}
Las funciones flecha no tienen hoisting
*/

const restaExpresada = function (a,b) {
    return a-b;
}

const resta = (a,b) => a-b
console.log("La resta de 20 - 2 es: " + resta(20,2));

const exponente = (a,b) => {
    const result=a**b;
    return result;
}
console.log("El numero 4^3 es: " + exponente(4,3));

const exponenteAlCuadrado = (a) => a**2;
console.log("El numero 4^2 es: " + exponenteAlCuadrado(4));

/* 
Funciones con parametro inicializados
*/

function divide(a=1,b=2) {
    return a/b;
}
console.log("La division de 3 entre 1 es igual a: " + divide(3));

/* 
Rest parameters
El parametro rest nos permite una serie de valores indefinidos
en los argumentos como un array.

*/

function sumatoriaIndefinida (a,b,...restoDatos){
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++) {
        sumatoria += restoDatos[i];
    }
    return sumatoria;
}
console.log("Sumar varios numeros: " + sumatoriaIndefinida(2,3,5,10,11));

/* 
Funcion recursiva
una funcion recursiva es una funcion que se llama asi misma.
*/
// factorial de 0=1
//factorial de 3=3*2*1;
//factorial de 5 = 5*4*3*2*1;

function factorialConCicloFor(a) {
    let total = 1; 
	for (i=1; i<=a; i++) {
		total *= i; 
	}
	return total;
}
console.log("Factorial de 5 es: " + factorialConCicloFor(5));
console.log("Factorial de 3 es: " + factorialConCicloFor(3));

function factorialConRecursion(a) {
    if (a<1) {
        return 1;
    }
    return a * factorialConRecursion( a - 1 );
}
console.log("Factorial de 3 es: " + factorialConRecursion(5));
console.log("Factorial de 3 es: " + factorialConRecursion(3));











