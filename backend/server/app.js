import express from 'express'
import rutasProductos from './rutas/productos.rutas.js';
import  fileUpload from 'express-fileupload'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())


app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './files' //directorio donde se guardan las imagenes
}))

app.use(rutasProductos)


export default app;