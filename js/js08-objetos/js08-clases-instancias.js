import { Usuario } from "./js08-clases.js";
import { Producto, ProductoElectronico } from "./js08-clase-producto.js";

//instanciar un objeto
const albertoFrausto = new Usuario(
    "Alberto Frausto", 
    "frausto@gmail.com", 
    "Siempre Viva", 
    "55 8952 5879"
    );
console.log(albertoFrausto);
/* console.log("nombre: "+albertoFrausto.nombre);
console.log("email: "+albertoFrausto.email);
console.log("direccion: "+albertoFrausto["direccion"]);
console.log("telefono: "+albertoFrausto["telefono"]); */
console.log(albertoFrausto.imprimirDatos());


const karlaArena = new Usuario(
    "Karla Arenas",
    "karla@gmail.com",
    "av. niños heroes",
    "81 8752 4589"
);
console.log(karlaArena.imprimirDatos());

for (let claveUsuario in karlaArena) {
    console.log(claveUsuario);
    
}

const helado = new Producto(
    "Helado de vainilla",
    80,
    "e3259939-f0eb-4632-a46f-0a5025f713d9"
);

for (const claveProducto in helado) {
    console.log(claveProducto);
    
}

console.log(helado.nombre);
helado.nombre = "Helado de limon";
console.log(helado.nombre);

karlaArena.agregarProductoACarrito(helado);
karlaArena.agregarProductoACarrito(new Producto("pollo",110,"57553be5-d365-4287-9a6c-d3e468a71f35"));
karlaArena.agregarProductoACarrito(new Producto("galleta",200,"09f21e1f-2821-4329-af7a-c5ba64f849f4"));

const grabadora = new ProductoElectronico("LG super x3000",5000,"4a63d2ab-358a-46ff-a06b-ffefe3860152",365)

karlaArena.agregarProductoACarrito(grabadora);
console.log(karlaArena.imprimirDatos());




