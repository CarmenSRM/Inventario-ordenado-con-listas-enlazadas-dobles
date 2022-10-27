class Inventario{
  constructor(){
    this.primero = null;
    this.ultimo = null;
  }
  
  agregar(producto){
    let nuevo = producto;
    if(this.primero === null){
      this.primero = nuevo;
      this.ultimo = nuevo;
      return true;
    }else{
      return this.ordenar(producto);
    }
  }

  ordenar(nuevo){
    let actual = this.primero;
    let aux = null;
    let agregado = false;

    while(actual !== null){
      if(actual.anterior !== null){
        if(actual.codigo < nuevo.codigo){
          if(actual.siguiente !== null){
            if(actual.siguiente.codigo > nuevo.codigo){
              aux = actual.siguiente;
              actual.siguiente = nuevo;
              nuevo.anterior = actual;
              nuevo.siguiente = aux;
              aux.anterior = nuevo
              agregado = true;
            }
          }else{
            actual.siguiente = nuevo;
            nuevo.anterior = actual;
            agregado = true;
            this.ultimo = nuevo;
          }
        }

      }else{
        if(actual.codigo > nuevo.codigo){
          actual.anterior = nuevo;
          nuevo.siguiente = actual;
          this.primero = nuevo;
          agregado = true;
        }
      }

      actual = actual.siguiente;
    }
    return agregado;
  }

  buscar(codigo){
    let buscado = null; 
    if(this.primero === null){
      return null;
    }else{
      let actual = this.primero;
      while(actual !== null){
        if(actual.codigo === codigo){
          buscado = actual;
        }
        actual = actual.siguiente;
      }
    }
    return buscado;
  }
      
  eliminar(codigo){
    let eliminado = null;

    if(this.primero !== null){
      let actual = this.primero;
      if(actual.siguiente === null){
        if(actual.codigo === codigo){
          eliminado = actual;
          this.primero = null;
          this.ultimo = this.primero;
        }
      }else{
        if(actual.codigo === codigo){
          this.primero = actual.siguiente;
          this.primero.anterior = null;
          actual = this.primero;
        }else{
          while(actual !== null){
            if(actual.siguiente.codigo === codigo){
              if(actual.siguiente.siguiente === null){
                eliminado = actual.siguiente;
                actual.siguiente = null;
              }else{
                eliminado = actual.siguiente.siguiente;
                eliminado.anterior = actual;
                actual.siguiente = actual.siguiente.siguiente; 
              }
            }
            actual = actual.siguiente;
          }
        }  

        if(actual !== null){
          this.ultimo = actual;
        }else{
          this.ultimo = eliminado.anterior;
          eliminado.anterior = null;
          eliminado.siguiente = null
        }
      }
    }
    return eliminado;
  }
  
  listado(){
    if(this.primero === null){
      return null;
    }else{
      let actual = this.primero;
      let lista = "";  
      while(actual !== null){
        lista= `${lista} <br> ${actual.getInfo()}`;
        actual = actual.siguiente;
      }
      return lista;
    }
  }
  
    listadoInverso(){
      if(this.ultimo === null){
        return null;
      }else{
        let actual = this.ultimo;
        let lista = "";   
        while(actual !== null){
          lista= `${lista} <br> ${actual.getInfo()}`;
          actual = actual.anterior;
        }
        return lista;
      }
    }
  }