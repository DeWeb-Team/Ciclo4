import mongoose from 'mongoose';

const schemaCarrito = new mongoose.Schema({
    producto:{
        _id:String,
        image:String,
        nombre:String,
        descripcion:String,
        valor:Number,
    },
    cantidad:{
        type: Number,
        require: true,
        trim: true
    },
},)

export default mongoose.model('Carrito',schemaCarrito);