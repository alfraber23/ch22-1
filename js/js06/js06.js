console.log("Sesion js06");

const obtenerNombre = () => prompt("Escribe tu nombre", "Alberto")

const encontrarElementoById = () => {
    const element = document.getElementById("titulo");
    console.log("Datos del objeto: ", element);
    console.log("Entre las etiquetas: " + element.innerHTML);
    //element.innerHTML += "Manipulacion del DOM ";

    /* con inner puedo agregar nuevas etiquetas */
    const nombreDesarrollador = "Alberto"//obtenerNombre();
    element.innerHTML += `Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em>`;
    element.innerHTML = `<h1>${element.innerHTML}</h1>`
}
encontrarElementoById();

const encontrarElementosByTagName = () => {
    //const elements = document.getElementsByTagName("p");
    const [, introRef] = document.getElementsByTagName("p");

    //Obtenemos el indice 0
    //const introRef = elements[1].innerHTML;
    //Modificamos el contenido de introRef
    console.log(introRef.innerHTML);
    introRef.innerHTML =
        "Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho";
};

encontrarElementosByTagName();


const cambiaColor = () => {
    const negros = document.getElementsByTagName("em");
    console.log(negros.innerHTML);
    for (let i = 0; i < negros.length; i++) {
        var nuevoElemento = document.createElement("em");
        nuevoElemento.style.color = "blue";
        nuevoElemento.innerHTML = negros[i].innerHTML;
        negros[i].parentNode.replaceChild(nuevoElemento, negros[i]);

    }


}

cambiaColor();


