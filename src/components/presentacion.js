import TablaCarrito from "./spring-2/componenteCarrito";
import TablaVentas from "./spring-2/componenteTabla";
import MostrarProductos from "./spring-2/componenteMostrarProductos";
import VisualizacionProductos from "./spring-2/componenteVistaProductos";
import AgregarProducto from './spring-2/componenteAgregarProducto';
import "../styles/presentacion.css";
import { useState } from "react";

function Presentacion() {
  let [body, setBody] = useState("");

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
            onClick={() => setBody(MostrarProductos)}
          >
            Comprar productos |
          </button>
          <button
            className="guia-botones"
            onClick={() => setBody(TablaCarrito)}
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
