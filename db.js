import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://yerlinbenavides:Josephm2408@cluster0.torogkl.mongodb.net/dbproyecto?retryWrites=true&w=majority';
try{
    const db = await mongoose.connect(MONGODB_URI);
    console.log("la conexion fue realizada con exito:", db.connection.name);
}catch (error){
    console.error(error);
}

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoose is disconnected");
});


