import "../../styles/estiloCarrito.css";

function ValorTabla(prop) {
  const eliminarProducto = async (id) => {
    let res = await fetch("http://localhost:4000/carrito/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    alert(res);
    window.location.reload();
  };

  return (
    <tr
      style={{ animation: `aparecer ${prop.con}s 1 forwards` }}
      className="tr-carrito tr-efectos"
    >
      <td className="td-carrito">
        <img src={prop.imagen} alt={prop.nombreProducto} />
      </td>
      <td className="td-carrito">{prop.cantidad}</td>
      <td className="td-carrito"> {prop.nombreProducto}</td>
      <td className="td-carrito"> $ {prop.valor.toLocaleString("es-CO")}</td>
      <td className="td-carrito"> $ {prop.total.toLocaleString("es-CO")}</td>
      <td className="td-carrito">
        <button
          onClick={() => eliminarProducto(prop.id)}
          className="botones-opciones"
        >
          Cancelar
        </button>
      </td>
    </tr>
  );
}

function OpcionesCarrito(props) {

  console.log(props.total);

  const cancelarCompra = () => {
    fetch("http://localhost:4000/carrito", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    alert("Carrito Limpiado");
    window.location.reload();
  };

  const finalizarCompra = async () => {
    await fetch("http://localhost:4000/venta/"+props.total, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    alert("Compra realizada");
    cancelarCompra();
  };

  return (
    <div id="contenedor-botones">
      <button onClick={finalizarCompra} className="botones-opciones">
        Finalizar compra
      </button>
      <button onClick={cancelarCompra} className="botones-opciones">
        Cancelar compra
      </button>
    </div>
  );
}

function TablaCarrito(carrito) {
  let contador = 0.3;
  let totalCompra = 0;

  const LLamarDatos = carrito.map((dato, index) => (
    <ValorTabla
      imagen={dato.producto.image}
      cantidad={dato.cantidad}
      nombreProducto={dato.producto.nombre}
      valor={dato.producto.valor}
      total={dato.cantidad * dato.producto.valor}
      con={(contador = contador + 0.1)}
      id={dato._id}
      key={index}
      totalCompra={(totalCompra += dato.cantidad * dato.producto.valor)}
    />
  ));

  return (
    <div>
      <h1 className="titulo-tabla">Carrito</h1>
      <table id="tabla-carrito">
        <thead>
          <tr className="tr-carrito">
            <th className="th-carrito">Imagen</th>
            <th className="th-carrito">Cantidad</th>
            <th className="th-carrito">Producto</th>
            <th className="th-carrito">Valor</th>
            <th className="th-carrito">Total</th>
          </tr>
        </thead>
        <tbody>{LLamarDatos}</tbody>
        <tfoot>
          <tr className="tr-carrito">
            <td className="td-carrito"></td>
            <td className="td-carrito"></td>
            <td className="td-carrito"></td>
            <td className="td-carrito">Total compra:</td>
            <td className="td-carrito">
              $ {totalCompra.toLocaleString("es-CO")}
            </td>
          </tr>
        </tfoot>
      </table>
      <OpcionesCarrito total={totalCompra} />
    </div>
  );
}

export default TablaCarrito;
