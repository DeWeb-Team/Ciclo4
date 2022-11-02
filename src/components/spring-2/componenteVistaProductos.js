import React from 'react'
import '../../styles/estiloVistaProductos.css'
import juguetes from '../../util/data.json';

function ProductoContenedor(){

  const mostrarProductos = juguetes.map((juguete) => (
    <Productos
      key={juguete.producto}
      name={juguete.producto}
      precio={juguete.valor}
      cantidad={juguete.cantidad}
      imagen={juguete.url_img}
    />
  ));

  return (
    <section className='products_section'>
        <h1  className='products_tittle'>Nuestros productos</h1>
        <div className='products_container'>
            {mostrarProductos}
        </div>
    </section>
  )
}


function Productos(props){
  return (
    <div className='product'>
        <img className='product_img' src={props.imagen} alt='product' width={100} height={100}></img>
        <h2 className='product_name'> {props.name}</h2>
        <div className='product_details'>
            <p className='product_oldPrice'>Precio: ${props.precio.toLocaleString('es-CO')}</p>
            <p className='product_price'>Stock: {props.cantidad.toLocaleString('es-CO')} </p>
        </div>
    </div>
  )
}

export default ProductoContenedor;