import TablaCarrito from "./spring-2/componenteCarrito";
import TablaVentas from "./spring-2/componenteTabla";
import MostrarProductos from "./spring-2/componenteMostrarProductos";
import VisualizacionProductos from "./spring-2/componenteVistaProductos";
import AgregarProducto from './spring-2/componenteAgregarProducto';
import "../styles/presentacion.css";
import { useState, useEffect } from "react";

function Presentacion() {

  const [body, setBody] = useState("");
  const [producto, setProducto] = useState();
  const [carrito, setCarrito] = useState();

  useEffect(() => {
    obtenerProductos();
    obtenerCarrito();
  },[]);

  const obtenerProductos = async() =>{
    const data = await fetch('http://localhost:4000/productos')
    const productos = await data.json()
    setProducto(productos)
  }

  const obtenerCarrito = async() =>{
    const data = await fetch('http://localhost:4000/carrito')
    const carritos = await data.json()
    console.log(carritos)
    setCarrito(carritos)
  }

  return (
    <div id="contendedor-padre">
      <div id="contenedor-presentacion">
        <h1 className="presentacion-titulo">Jugueteria - DeWebTeam</h1>
        <header id="presentacion-guia">
          <button
            className="guia-botones"
            onClick={() => setBody(AgregarProducto)}
          >
            Ingresar nuevos productos (Admin) |
          </button>
          <button
            className="guia-botones"
            onClick={() => setBody(VisualizacionProductos)}
          >
            Visualizacion productos (Admin) |
          </button>
          <button className="guia-botones" onClick={() => setBody(TablaVentas)}>
            Visualizacion de ventas (Admin) |
          </button>
          <button
            className="guia-botones"
            onClick={() => setBody(MostrarProductos(producto))}
          >
            Comprar productos |
          </button>
          <button
            className="guia-botones"
            onClick={() => setBody(TablaCarrito(carrito))}
          >
            Carrito
          </button>
        </header>
      </div>
      {body}
    </div>
  );
}

export default Presentacion;
