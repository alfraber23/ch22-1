class Producto {
    #nombre;
    #precio;
    #uuid;
    #createAt;
    constructor(nombre, precio, uuid){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#uuid = uuid;
        this.#createAt = new Date();
    }

    //para dar acceso a los datos encapsulados usamos los metodos setters y getters

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        //guarda solo si es mayor a 5
        this.filtrarNombre(nombre,5) && (this.#nombre=nombre);
    }

    filtrarNombre( nombre , longitudMinima ){
        if (nombre.length > longitudMinima)
            return true;
        else
            throw `La longitud es menor a ${longitudMinima} caracteres`;
    }


    get precio(){
        return this.#precio;
    }
    set precio(precio){
        this.#precio=precio;
    }
    get uuid(){
        return this.#uuid;
    }
    set uuid(uuid){
        this.#uuid=uuid;
    }
    
    get createAt(){
        return this.#createAt;
    }
    
    
    
}

class ProductoElectronico extends Producto{
    #diasParaGarantia;

    constructor(nombre, precio, uuid,diasParaGarantia){
        //la palabra super hace referencia la constructor de la clase padre
        super(nombre, precio, uuid);
        this.#diasParaGarantia = diasParaGarantia;
    }

    //agregar set y fet de dias para garantia
    get diasParaGarantia(){
        return this.#diasParaGarantia;
    }
    set diasParaGarantia(diasParaGarantia){
        this.#diasParaGarantia=diasParaGarantia;
    }

}




export{Producto, ProductoElectronico};