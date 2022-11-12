import "../../styles/estiloMostrarProductos.css";

function ContenedorProductos(productos) {
  const cargarProductos = productos.map((product, index) => (
    <MostrarProductos
      key={index}
      name={product.producto}
      valor={product.valor}
      stock={product.cantidad}
      imagen={product.image.url}
      id={product._id}
    />
  ));

  return (
    <section className="products_section">
      <h1 className="products_title"> Productos Disponibles</h1>
      <div className="products_container">{cargarProductos}</div>
    </section>
  );
}

function MostrarProductos(props) {

  const agregarCarrito = async (id) => {
    console.log(document.getElementById(id).value);
    let datos = {cantidad : document.getElementById(id).value};
    let res = await fetch("http://localhost:4000/carrito/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(datos),
    });
    res = await res.json();
    alert(JSON.stringify(res))
  };

  return (
    <div className="product">
      <img
        className="product_img"
        src={props.imagen}
        alt="product"
        width={100}
        height={100}
      ></img>
      <h2 className="product__name"> {props.name} </h2>
      <div className="product__details">
        <p className="product__stock"> {props.stock.toLocaleString("es-CO")}</p>
        <p className="product__valor">${props.valor.toLocaleString("es-CO")}</p>

        <label>Selecciona cantidad:</label>
        <select id={props.id}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          onClick={() => {agregarCarrito(props.id)}}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ContenedorProductos;
