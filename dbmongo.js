import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(process.env.MON_DBURI).then(() => {
    console.log("la conexion fue realizada 🏍️ con exito 🚀")
}).catch((error) => console.error("problemas al conectar la base de datos de mongodb 😡", error));



export default db;