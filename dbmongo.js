import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//const uri = 'mongodb+srv://yerlinbenavides:Josephm2408@cluster0.torogkl.mongodb.net/dbproyecto?retryWrites=true&w=majority';

export const db = mongoose.connect(process.env.MON_DBURI).then(() => {
    console.log("la conexion fue realizada 🏍️ con exito 🚀")
}).catch((error) => console.error("problemas al conectar la base de datos de mongodb 😡", error));



export default db;