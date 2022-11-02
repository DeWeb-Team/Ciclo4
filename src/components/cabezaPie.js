import "../style/cabezaPie.css";

function Cabezado() {
  const alerta = () => {
    let valorCaja = document.getElementById('cajaTexto-buscador').value;
    alert(`${valorCaja}`);
  };

  return (
    <header id="cabezado">
      <div id="logo">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.2/mercadolibre/logo__large_plus.png"
          alt="logo"
        />
      </div>

      <div id="buscador">
        <input
          id="cajaTexto-buscador"
          type="text"
          placeholder=" Ingrese nombre producto"
        />
        <button onClick={alerta} className="boton-buscador">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div id="sesion">
        <h2 className="opciones-sesion">Iniciar sesion</h2>
        <h2 className="opciones-sesion">Registrate</h2>
      </div>
    </header>
  );
}

export default Cabezado;
