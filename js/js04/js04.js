console.log("Sesion Js04");

const nombresCh22 = ["Manuel","Leonardo","Melani"];

const nombresCh14 = new Array("Abue","Cori","Maga","Sebas");

console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
const promedioEdadesCh14 = new Array(24);

console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);

//Conocer la longitude de un arreglo
console.log(`Numero de elementos ${promedioEdadesCh22.length}`);
console.log(`Numero de elementos ${promedioEdadesCh14.length}`);

//Se recomienda declarar los arrays que son objetos con const
//para prevenir que se modifique o se cambie el tipo de dato
const armasCh22=["Manoplas", "Picahielo"];
//armasCh22 = "Filero"; //Esto da error porque al arreglo es const, si fuera let si se puede
//Los objetos son datos mutables

//Leer un elemnto del arreglo
console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene una ${armasCh22[0]}`);

//Cambiar dato de un arreglo
armasCh22[0]="Filero";
console.log(`Leonardo tiene una ${armasCh22[0]}`);

let nombreClica = "Los Whichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica[0]="T"; //No cambia porque una string es un dato primito y es un dato inmutable
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

//Agregamos un nuevo elemento al arreglo, al final
armasCh22[2] ="Machete";
armasCh22[armasCh22.length]="Macana";
armasCh22.push("Cadena", "Bat");
console.log("Actualizacion de armas: "+armasCh22);

//agregar un elemento al inicio del arreglo
armasCh22.unshift("Navaja", "Desarmador");
console.log("Actualizacion de armas: "+armasCh22);

/* 
    ciclo for
    Sintaxis
        for(instruccion del ciclo; comparacion; expresion final){
            instrucciones;
        }
*/
//Iteramos arreglo
for (let i = 0; i < armasCh22.length; i++) {
    console.log(`El idice ${i} tiene ${armasCh22[i]}`);
}
function iterarArreglo(elemento, indice, arreglo){
    console.log(`CB - El idice ${indice} tiene ${elemento}`);
}
armasCh22.forEach(iterarArreglo)
armasCh22.forEach( (elemento, indice) => console.log( `AF ${indice} tiene ${elemento}`))


armasCh22.forEach((elemento, indice) => 
    console.log(`De reversa ${indice} tiene ${elemento}`));

