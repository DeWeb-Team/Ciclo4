import React from "react";
import "../../styles/estiloAgregarProducto.css";

function NuevosProductos() {
  const btn = () => {
    alert("Se guardaron los cambios con exito");
  };
  return (
    <div>
      <div>
        <h1>Nuevos Productos </h1>

        <label> Producto </label>
        <input type="text"></input>
      </div>
      <div>
        <label> Valor </label>
        <input type="number"></input>
      </div>
      <div>
        <label> Stock </label>
        <input type="number"></input>
      </div>
      <button onClick={btn}>Guardar </button>
    </div>
  );
}
export default NuevosProductos;
