import mongoose from "mongoose";
import {MONGODB_URI} from './config.js'


export async function ConexionBase(){
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log("Conectado a mongo DB")
    } catch (error) {
        console.log(error)
    }
}


