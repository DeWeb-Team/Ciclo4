import {Router } from 'express'; //modulo para llamar las rutas
import  {obtenerProductos, agregarProductos, actualizarProductos, eliminarProductos, obtenerunProducto, obtenerVentas, obtenerCarrito, agregarCarrito } from '../controladores/productos.Controladores.js';

const router = Router();

router.get('/productos', obtenerProductos)
router.post('/productos',agregarProductos)
router.put('/productos/:id', actualizarProductos)
router.delete('/productos/:id',eliminarProductos)

router.get('/productos/:id',obtenerunProducto)

router.get('/ventas', obtenerVentas)

router.get('/carrito', obtenerCarrito)
router.post('/carrito/:id', agregarCarrito)
export default router