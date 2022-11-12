import mongoose from 'mongoose';

const schemaVentas = new mongoose.Schema({
    fecha: {
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
    producto: {
        type: String,
        require: true,
        trim: true
    },
    vendedor: {
        type: String,
        require: true,
        trim: true
    }

})

export default mongoose.model('Venta', schemaVentas);