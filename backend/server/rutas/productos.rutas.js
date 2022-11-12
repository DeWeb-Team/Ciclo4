import {Router } from 'express'; //modulo para llamar las rutas
import  {obtenerProductos, agregarProductos, eliminarProductos, obtenerunProducto, obtenerVentas, obtenerCarrito, agregarCarrito, agregarVentas, eliminarCarrito, borrarCarrito, actualizarUnProducto,agregarCompra } from '../controladores/productos.Controladores.js';

const router = Router();

router.get('/productos', obtenerProductos)
router.post('/productos',agregarProductos)
router.put('/productos/:id', actualizarUnProducto)
router.delete('/productos/:id',eliminarProductos)

router.get('/productos/:id',obtenerunProducto)

router.get('/ventas', obtenerVentas)
router.post('/ventas', agregarVentas)

router.get('/carrito', obtenerCarrito)
router.post('/carrito/:id', agregarCarrito)
router.delete('/carrito/:id',eliminarCarrito)
router.delete('/carrito',borrarCarrito)

router.put('/venta/:total', agregarCompra)

export default router