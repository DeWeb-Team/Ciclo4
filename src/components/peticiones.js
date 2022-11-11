//Conexion con el backend


//Daniel
export async function obtenerProductos() {
    let res = await fetch("http://localhost:4000/productos")
    res = await res.json();
    return res;
}



