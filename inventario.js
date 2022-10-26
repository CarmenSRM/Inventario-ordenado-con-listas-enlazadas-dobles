class Inventario{
    constructor(){
      this.primero = null;
      this.ultimo = null;
    }
  
    agregar(producto){
      let nuevo = producto;
      if(this.primero === null){
        this.primero = nuevo;
        this.ultimo = nuevo
      }else{
        this.ultimo.siguiente = nuevo;
        nuevo.anterior = this.ultimo;
        
        this.ultimo = nuevo;
      }

    }
    buscar(codigo){
      let buscado = null; 
      if(this.primero === null){
        return null;
      }else{
        let ultimo = this.primero;
        while(ultimo !== null){
          if(ultimo.codigo === codigo){
            buscado = ultimo;
          }
          ultimo = ultimo.siguiente;
        }
      }
      return buscado;
    }
      
    eliminar(codigo){
    }
  
    listado(){
      if(this.primero === null){
        return null;
      }else{
        let ultimo = this.primero;
        let lista = "";  
        while(ultimo !== null){
          lista= `${lista} <br> ${ultimo.getInfo()}`;
          ultimo = ultimo.siguiente;
        }
        return lista;
      }
    }
  
    listadoInverso(){
      if(this.ultimo === null){
        return null;
      }else{
        let ultimo = this.ultimo;
        let lista = "";   
        while(ultimo !== null){
          lista= `${lista} <br> ${ultimo.getInfo()}`;
          ultimo = ultimo.anterior;
        }
        return lista;
      }
    }
  }