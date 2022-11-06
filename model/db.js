import mongoose from "mongoose";

export const MONGODB_URI = 'mongodb+srv://yerlinbenavides:Josephm2408@cluster0.torogkl.mongodb.net/dbproyecto?retryWrites=true&w=majority';
export const db = await mongoose.connect(MONGODB_URI);
console.log("la coneccion fue realizada con exito:", db.connection.name);
