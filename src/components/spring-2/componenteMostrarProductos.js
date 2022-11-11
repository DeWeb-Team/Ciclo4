import React from 'react'
import '../../styles/estiloMostrarProductos.css'
import data from '../../util/data.json';


function ContenedorProductos() {

  const cargarProductos = data.map((product,index) => (
    <MostrarProductos
      key={index}
      name={product.producto}
      valor={product.valor}
      stock={product.cantidad}
      imagen={product.url_img}
    />
  ));

  return (
    <section className='products_section'>
        <h1 className='products_title'>  Productos Disponibles </h1>
        <div className='products_container'>
            {cargarProductos}
        </div>
    </section>
  )
}

function MostrarProductos(props){
  return (
    <div className='product'>
        <img className='product_img' src={props.imagen} alt='product' width={100} height={100}></img>
        <h2 className='product__name'> {props.name} </h2>
        <div className='product__details'>
            <p className='product__stock'> {props.stock.toLocaleString('es-CO')}</p>
            <p className='product__valor'>${props.valor.toLocaleString('es-CO')}</p>
            
            <label for="cantidad">Selecciona cantidad:</label>
            <select name="cantidad" id="cantidad">
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={()=>{alert(`Agregaste ${props.name} al carrito de compras`)}}>Comprar</button>
        </div>
    </div>
      )
}

export default ContenedorProductos;