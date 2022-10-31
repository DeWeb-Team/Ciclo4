import "../style/estiloTabla.css";
import data from "../util/json.json";

function ValorTabla(prop) {
  return (
    <tr
      style={{ animation: `aparecer ${prop.con}s 1 forwards` }}
      className="tr-ventas tr-efectos"
    >
      <td className="td-ventas">{prop.fecha}</td>
      <td className="td-ventas">{prop.idVenta}</td>
      <td className="td-ventas">$ {prop.valor}</td>
    </tr>
  );
}

function CantidadVentas() {
  let valorVentas = 0;

  for (let x of data) {
    valorVentas += x.valor;
  }

  return (
    <div id="contenedor-cantidadVentas">
      <div className="cantidadVentas">
        <h4 className="titulo-cantidadVentas">Cantidad ventas</h4>
        <span>{data.length}</span>
      </div>
      <div className="cantidadVentas">
        <h4 className="titulo-cantidadVentas">Total ventas</h4>
        <span>${valorVentas}</span>
      </div>
    </div>
  );
}

function Tabla() {
  let contador = 0.3;

  const LLamarDatos = data.map((dato, index) => (
    <ValorTabla
      fecha={dato.fecha}
      idVenta={dato.idVenta}
      valor={dato.valor}
      con={(contador = contador + 0.1)}
      key={index}
    />
  ));

  return (
    <div>
      <h1 className="titulo-tabla"> Reporte Ventas</h1>
      <CantidadVentas />
      <table id="tabla-ventas">
        <thead>
          <tr className="tr-ventas">
            <th className="th-ventas">Fecha</th>
            <th className="th-ventas">IdVenta</th>
            <th className="th-ventas">Valor</th>
          </tr>
        </thead>
        <tbody>{LLamarDatos}</tbody>
      </table>
    </div>
  );
}

export default Tabla;
