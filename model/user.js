import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        nameuser: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require:true,
            unique: true
        },
        password:{
            type: String,
            require: true
        }
    }
)

export const user = mongoose.model('user', userSchema)

export default user;