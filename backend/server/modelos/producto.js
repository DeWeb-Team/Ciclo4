import mongoose from 'mongoose';

const schemaProducto = new mongoose.Schema({
    producto: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    valor: {
        type: Number,
        require: true,
        trim: true
    },
    cantidad: {
        type: Number,
        require: true,
        trim: true
    },
    image: {
        url:String,
        public_id: String
    }

})

export default mongoose.model('Producto', schemaProducto);