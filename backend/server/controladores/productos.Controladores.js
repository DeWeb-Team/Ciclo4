import Producto from "../modelos/producto.js";
import Ventas from "../modelos/ventas.js";
import Carrito from "../modelos/carrito.js";
import { subirImagen, deleteImage } from "../librerias/cloudinary.js";
import fs from "fs-extra";

export const obtenerProductos = async (req, res) => {
  try {
    //throw new Error('my error')
    const productos = await Producto.find();
    res.send(productos);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const agregarProductos = async (req, res) => {
  try {
    const { producto, descripcion, valor, cantidad } = req.body;
    var image = null;

    if (req.files.image) {
      const fileUpload = await subirImagen(req.files.image.tempFilePath);
      image = {
        url: fileUpload.secure_url,
        public_id: fileUpload.public_id,
      };
      await fs.remove(req.files.image.tempFilePath);
    }

    const newProducto = new Producto({
      producto,
      descripcion,
      valor,
      cantidad,
      image,
    });
    await newProducto.save();
    return res.send(newProducto);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const actualizarProductos = async (req, res) => {
  try {
    const upProduct = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); //retorna el objet que hemos actualizado
    return res.json(upProduct);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const eliminarProductos = async (req, res) => {
  try {
    const delProduct = await Producto.findByIdAndDelete(req.params.id);
    if (!delProduct) return res.sendStatus(404);
    if (delProduct.image.public_id) {
      await deleteImage(delProduct.image.public_id);
    }
    return res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const obtenerunProducto = async (req, res) => {
  try {
    const oneProduct = await Producto.findById(req.params.id);

    if (!oneProduct) {
      return res.send(404);
    } else {
      return res.json(oneProduct);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const obtenerVentas = async (req, res) => {
  try {
    const sale = await Ventas.find();
    res.send(sale);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const obtenerCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.find();
    res.send(carrito);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const agregarCarrito = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    const { cantidad } = req.body;

    const newCarrito = new Carrito({
      producto: {
        nombre: producto.producto,
        valor: producto.valor,
        image: producto.image.url,
        descripcion: producto.descripcion,
      },
      cantidad,
    });

    await newCarrito.save();
    return res.send(newCarrito);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const agregarVentas = async (req, res) => {
  try {
    const { fecha, valor, cantidad, producto, vendedor } = req.body;

    const newVentas = new Ventas({
      fecha,
      valor,
      cantidad,
      producto,
      vendedor
    });
    await newVentas.save();
    return res.send(newVentas);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};

export const eliminarCarrito = async (req, res) => {
  try {
    const delCarro = await Carrito.findByIdAndDelete(req.params.id);
    if (!delCarro) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Error: " + error.message);
  }
};