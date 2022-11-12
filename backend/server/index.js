import  {ConexionBase} from './baseDatos.js';
import { PORT } from './config.js';
import app from './app.js'


ConexionBase()

app.listen(PORT);
console.log("Puerto de escucha", PORT);
