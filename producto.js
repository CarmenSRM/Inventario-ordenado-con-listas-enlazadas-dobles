class Producto{
    constructor(codigo, nombre, cantidad, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.siguiente = null;
        this.anterior = null;
    }
    getInfo(){
        return `Código: ${this.codigo} ->  Nombre: ${this.nombre} -> Cantidad(${this.cantidad}) -> Precio: $ ${this.precio}`;
    }
}