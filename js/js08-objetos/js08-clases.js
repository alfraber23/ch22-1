console.log("Sesion Js08-clases");

//para crear una clase se utiliza la palabra reservada class
//el nombre de ser con notacion PascaCase (UpperCamelCase)
class Usuario {
    nombre;
    //email
    #carritoCompras;
    //direccion
    //telefono

    //creando el constructor de la clase
    constructor(nombre,email,direccion,telefono){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = new Date();
        this.#carritoCompras = [];
    }

    /* set carritoCompras(producto){
        this.#carritoCompras.push(producto)
    } */
    get carritoCompras(){
        return this.carritoCompras;
    }

    agregarProductoACarrito(producto){
        this.#carritoCompras.push(producto)
    }

    imprimirDatos(){
        let listadoProductos = ""
        if(this.#carritoCompras.length>0){
            for (let producto of this.#carritoCompras) {
                listadoProductos+=`
                UUID: \t${producto.uuid}
                Producto: ${producto.nombre}
                Precio: \t${producto.precio}

                `;
            }
        }



        const obtenerDatos = 
        `=====DATOS DE USUARIO=====
        nombre: ${this.nombre}
        email: ${this.email}
        direccion: ${this.direccion}
        telefono: ${this.telefono}
        fecha de creacion: ${this.fechaDeCreacion}
        ${listadoProductos}
        `;
        return obtenerDatos;
    }
}

export{Usuario};



