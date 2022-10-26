const inventario = new Inventario();

const agregar = document.getElementById('Agregar');
agregar.addEventListener('click', ()=>{
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    let producto = new Producto(codigo, nombre, cantidad, costo);

    if(!codigo || !nombre || !cantidad || !costo){
        document.getElementById('detalles').innerHTML= `<p>Es necesario llenar los campos de Código, Nombre, Cantidad y costo</p>`;
    }else{
       //if(inventario.buscar(codigo) !== null){
       //     document.getElementById('detalles').innerHTML= `<p>El producto "${nombre}" no puede ser registrado <br> debido a que el código "${codigo}" ya existe</p>`;
       // }else{
            inventario.agregar(producto);
            document.getElementById('detalles').innerHTML= `<p>El producto "${nombre}" fue agregado correctamente</p>`;
       // }
    }

});

const buscar = document.getElementById('Buscar');
buscar.addEventListener('click', ()=>{
    let codigo = document.getElementById('busqueda').value;
    let buscado = inventario.buscar(codigo);

    if(!codigo){
        document.getElementById('detalles1').innerHTML = `<p>Es nesesario indicar un código. </p>`;
    }else{
        if(buscado ===  null){
            document.getElementById('detalles1').innerHTML = `<p>No se encontro registro de un producto con el código "${codigo}". </p>`;
        }else{
            document.getElementById('detalles1').innerHTML = `<p>${buscado.getInfo()}  </p>`;
        }
    }
});

const eliminar = document.getElementById('Eliminar');
eliminar.addEventListener('click', ()=>{
    let codigo = document.getElementById('busqueda').value;
    let eliminado = inventario.eliminar(codigo);

    if(!codigo){
        document.getElementById('detalles1').innerHTML = `<p>Es nesesario indicar un código. </p>`;
    }else{
        if(eliminado === null){
            document.getElementById('detalles1').innerHTML = `<p>No se encontro registro de un producto con el código "${codigo}". </p>`;
        }else{
            document.getElementById('detalles1').innerHTML = `<p>El producto con el código ${codigo} fue eliminado. </p>`;
        }
    }
});

const listar = document.getElementById('Listar');
listar.addEventListener('click', ()=>{
    let lista = inventario.listado();

    if(lista === null){
        document.getElementById('detalles').innerHTML = `<p>No se tiene registro de productos.</p>`;
    }else{
        document.getElementById('detalles').innerHTML = `<p>${inventario.listado()}</p>`;
    }
});

const listarI = document.getElementById('Listar Inverso');
listarI.addEventListener('click', ()=>{
    let lista = inventario.listadoInverso();

    if(lista === null){
        document.getElementById('detalles').innerHTML = `<p>No se tiene registro de productos.</p>`;
    }else{
        document.getElementById('detalles').innerHTML = `<p>${inventario.listadoInverso()}</p>`;
    }
});

const limpiar = document.getElementById('Limpiar');
limpiar.addEventListener('click', ()=> {
    document.getElementById('busqueda').value = " ";
    document.getElementById('codigo').value = " ";
    document.getElementById('nombre').value = " ";
    document.getElementById('cantidad').value = " ";
    document.getElementById('costo').value = " ";
    document.getElementById('posicion').value = " ";
    document.getElementById('detalles').innerHTML = " ";
    document.getElementById('detalles1').innerHTML = " ";
});