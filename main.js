const productos = [
    {id: 1, nombre: "camisa", precio: 35 },
    {id: 2, nombre: "gorra", precio: 15 },
    {id: 3, nombre: "zapato", precio: 45 },
    {id: 4, nombre: "media", precio: 5 },
    {id: 5, nombre: "remera", precio: 19 },
]

function buscarProducto() {
    let productoBuscado = prompt("Ingrese nombre del producto");
    let encontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === productoBuscado) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("El nombre se encuentra en la lista");
        
    } else {
        alert("El nombre no se encuentra en la lista");
    }
}

let numeroUsuario;

function nuevoProducto() {
    const newProductoId = parseInt(prompt("Ingrese el nuevo ID"));
    const newProductoNombre = prompt("Ingrese nombre del nuevo Producto");
    const newProductoPrecio = parseInt(prompt("Ingrese el precio del nuevo producto"));
    const newProducto = {
        id: newProductoId,
        nombre: newProductoNombre,
        precio: newProductoPrecio,
    };
    productos.push(newProducto);
}


do {    
    numeroUsuario = parseInt(prompt("Ingrese 1 para agregar un producto \n Ingrese 2 para ver productos \n Ingrese 3 buscar producto \n Ingrese 4 para salir"))
        if(numeroUsuario === 1)  
        {
           nuevoProducto();
        }  else if (numeroUsuario === 2)
        {
            const productosString = JSON.stringify(productos);    
            alert(productosString);
        } else if (numeroUsuario === 3)
        {
            buscarProducto();
        }
} while (numeroUsuario !== 4);

